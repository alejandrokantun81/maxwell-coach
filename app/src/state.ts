import { useCallback, useEffect, useReducer, useRef } from 'react';
import { QUESTIONS, STYLES, type Answer } from './data';

export type Screen = 'welcome' | 'intro' | 'countdown' | 'quiz' | 'reveal' | 'profile' | 'detail';
export type StartScreen = 'welcome' | 'quiz' | 'profile';

export interface State {
  screen: Screen;
  name: string;
  nameError: string;
  introStep: number;
  /** Countdown value: 3, 2, 1, then 0 for "¡Vamos!". */
  count: number;
  idx: number;
  answers: Answer[];
  dx: number;
  dy: number;
  dragging: boolean;
  /** Direction the current card is flying out: 1 agree, -1 disagree, 0 idle. */
  exiting: -1 | 0 | 1;
  secs: number;
  timerOn: boolean;
  paused: boolean;
  detail: number;
  /** Drives the profile chart/bar grow-in animation. */
  revealed: boolean;
}

type Action =
  | { type: 'go'; screen: Screen }
  | { type: 'name'; name: string }
  | { type: 'nameError'; message: string }
  | { type: 'introNext' }
  | { type: 'count'; n: number }
  | { type: 'tick' }
  | { type: 'togglePause' }
  | { type: 'exit'; agree: boolean }
  | { type: 'commit' }
  | { type: 'dragStart' }
  | { type: 'drag'; dx: number; dy: number }
  | { type: 'dragCancel' }
  | { type: 'reveal' }
  | { type: 'detail'; index: number };

export const CARD_EXIT_MS = 280;
export const SWIPE_THRESHOLD = 100;

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case 'go': {
      const next: State = { ...s, screen: a.screen, paused: false };
      if (a.screen === 'welcome') Object.assign(next, { idx: 0, answers: [], secs: 0, timerOn: false, introStep: 0, dx: 0, dy: 0, exiting: 0, dragging: false });
      if (a.screen === 'quiz') next.timerOn = true;
      if (a.screen === 'profile') next.revealed = false;
      return next;
    }
    case 'name':
      return { ...s, name: a.name, nameError: '' };
    case 'nameError':
      return { ...s, nameError: a.message };
    case 'introNext':
      return { ...s, introStep: s.introStep + 1 };
    case 'count':
      return { ...s, count: a.n };
    case 'tick':
      return s.timerOn && !s.paused ? { ...s, secs: s.secs + 1 } : s;
    case 'togglePause':
      return s.screen === 'quiz' ? { ...s, paused: !s.paused } : s;
    case 'exit':
      return { ...s, exiting: a.agree ? 1 : -1, dragging: false };
    case 'commit': {
      if (!s.exiting) return s;
      const q = QUESTIONS[s.idx];
      const agree = s.exiting === 1;
      const answers = [...s.answers, { style: q.style, code: q.code, agree, point: q.negative ? !agree : agree }];
      const done = s.idx + 1 >= QUESTIONS.length;
      return { ...s, answers, idx: done ? s.idx : s.idx + 1, dx: 0, dy: 0, exiting: 0, timerOn: !done, screen: done ? 'reveal' : 'quiz' };
    }
    case 'dragStart':
      return { ...s, dragging: true };
    case 'drag':
      return s.dragging ? { ...s, dx: a.dx, dy: a.dy } : s;
    case 'dragCancel':
      return { ...s, dragging: false, dx: 0, dy: 0 };
    case 'reveal':
      return { ...s, revealed: true };
    case 'detail':
      return { ...s, detail: ((a.index % STYLES.length) + STYLES.length) % STYLES.length, screen: 'detail' };
  }
}

function initialState(start: StartScreen): State {
  return {
    // The name field starts empty; the demo entry points (?screen=quiz|profile) skip it, so they get a sample name.
    screen: start, name: start === 'welcome' ? '' : 'Alex', nameError: '', introStep: 0, count: 3, idx: 0, answers: [],
    dx: 0, dy: 0, dragging: false, exiting: 0, secs: 0, timerOn: start === 'quiz', paused: false, detail: 0,
    revealed: start === 'profile',
  };
}

export function useCoach(start: StartScreen) {
  const [state, dispatch] = useReducer(reducer, start, initialState);
  const ref = useRef(state);
  ref.current = state;
  const timeout = useRef<number | undefined>(undefined);

  const later = (fn: () => void, ms: number) => {
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(fn, ms);
  };

  const go = useCallback((screen: Screen) => {
    window.clearTimeout(timeout.current);
    dispatch({ type: 'go', screen });
    if (screen === 'countdown') {
      const tick = (n: number) => {
        dispatch({ type: 'count', n });
        later(() => (n > 0 ? tick(n - 1) : go('quiz')), n > 0 ? 800 : 650);
      };
      tick(3);
    }
    if (screen === 'profile') later(() => dispatch({ type: 'reveal' }), 80);
  }, []);

  const answer = useCallback((agree: boolean) => {
    const s = ref.current;
    if (s.exiting || s.screen !== 'quiz' || s.paused) return;
    dispatch({ type: 'exit', agree });
    later(() => dispatch({ type: 'commit' }), CARD_EXIT_MS);
  }, []);

  // Stopwatch
  useEffect(() => {
    const iv = window.setInterval(() => dispatch({ type: 'tick' }), 1000);
    return () => window.clearInterval(iv);
  }, []);

  // Arrow keys answer during the quiz
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (ref.current.screen !== 'quiz' || ref.current.paused) return;
      if (e.key === 'ArrowRight') answer(true);
      if (e.key === 'ArrowLeft') answer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [answer]);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  return { state, dispatch, go, answer };
}

export type Coach = ReturnType<typeof useCoach>;
