import { useRef, type PointerEvent } from 'react';
import { Button } from '../ds';
import { INTRO, QUESTIONS } from '../data';
import { CARD_EXIT_MS, SWIPE_THRESHOLD, type Coach } from '../state';
import type { Settings } from '../App';
import { Quadrants } from './Quadrants';

const pad = (n: number) => String(n).padStart(2, '0');
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const CloseIcon = ({ size, stroke }: { size: number; stroke: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
);

/** Dark flow: intro cards → countdown → swipe quiz → completion. */
export function QuizFlow({ coach, settings }: { coach: Coach; settings: Settings }) {
  const { state: st, dispatch, go, answer } = coach;
  const { screen } = st;
  const isQuiz = screen === 'quiz';

  const tm = `${pad(Math.floor(st.secs / 3600))}:${pad(Math.floor(st.secs / 60) % 60)}:${pad(st.secs % 60)}`;
  const m = Math.floor(st.secs / 60), s = st.secs % 60;
  const live = st.exiting ? st.exiting : st.dx / SWIPE_THRESHOLD;
  const progress = isQuiz ? (st.idx / QUESTIONS.length) * 100 : screen === 'reveal' ? 100 : 0;

  return (
    <div className="flow">
      <div className="flow__header">
        <button className="round-btn" onClick={() => go('welcome')} aria-label="Salir"><CloseIcon size={18} stroke={2.5} /></button>
        <span className="flow__title">{(settings.showTimer ? tm + ' · ' : '') + (st.name || 'Tú')}</span>
        <button
          className="round-btn"
          onClick={() => dispatch({ type: 'togglePause' })}
          aria-label={st.paused ? 'Reanudar' : 'Pausa'}
          disabled={!isQuiz}
          style={{ opacity: isQuiz ? 1 : 0.35 }}
        >
          {st.paused
            ? <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z" /></svg>
            : <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="5" height="16" rx="1.5" /><rect x="14" y="4" width="5" height="16" rx="1.5" /></svg>}
        </button>
      </div>
      <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
        <div className="progress__fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="flow__stage">
        {screen === 'intro' && (
          <div className="intro-card">
            <div className="intro-card__body">
              <span className="eyebrow">Paso {st.introStep + 1} de 3</span>
              <p className="intro-card__text">{INTRO[st.introStep]}</p>
            </div>
            <div className="intro-card__foot">
              <div className="intro-dots">
                {INTRO.map((_, i) => (
                  <span key={i} style={{ width: i === st.introStep ? 22 : 8, background: i === st.introStep ? '#FF5900' : '#CFCFCF' }} />
                ))}
              </div>
              <Button
                variant="ghost"
                size="md"
                style={{ color: 'var(--orange)' }}
                onClick={() => (st.introStep < INTRO.length - 1 ? dispatch({ type: 'introNext' }) : go('countdown'))}
              >
                {st.introStep === INTRO.length - 1 ? '¡Vamos!' : 'Continuar'}
              </Button>
            </div>
          </div>
        )}

        {screen === 'countdown' && (
          <div className="countdown">
            <span className="countdown__label">Prepárate</span>
            <div className="countdown__ring">
              <span style={{ fontSize: st.count > 0 ? 88 : 36 }}>{st.count > 0 ? st.count : '¡Vamos!'}</span>
            </div>
          </div>
        )}

        {isQuiz && <SwipeDeck coach={coach} colorCards={settings.colorCards} live={live} />}

        {screen === 'reveal' && (
          <div className="reveal">
            <Quadrants size={120} gap={5} inner={8} />
            <div className="reveal__copy">
              <h2>¡Listo, {st.name}!</h2>
              <p>Completaste tu lectura rápida en {m ? `${m} min ${s} s` : `${s} segundos`}. Tu perfil de liderazgo está listo.</p>
            </div>
            <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={() => go('profile')}>Ver mi perfil</Button>
          </div>
        )}

        {st.paused && (
          <div className="pause">
            <div className="pause__card">
              <span className="pause__title">Lectura en pausa</span>
              <span className="pause__text">Tus respuestas se guardaron. Continúa cuando estés listo.</span>
              <Button variant="primary" onClick={() => dispatch({ type: 'togglePause' })}>Reanudar</Button>
            </div>
          </div>
        )}
      </div>

      <div className="controls" style={{ opacity: isQuiz ? 1 : screen === 'reveal' ? 0 : 0.35, pointerEvents: isQuiz ? undefined : 'none' }}>
        <div className="controls__item">
          <button
            className="answer-btn answer-btn--no"
            onClick={() => answer(false)}
            aria-label="En desacuerdo"
            style={{ transform: `scale(${1 + clamp01(-live) * 0.14})` }}
          >
            <CloseIcon size={26} stroke={2.6} />
          </button>
          <span>En desacuerdo</span>
        </div>
        <span className="controls__keys" aria-hidden>← →</span>
        <div className="controls__item">
          <button
            className="answer-btn answer-btn--yes"
            onClick={() => answer(true)}
            aria-label="De acuerdo"
            style={{ transform: `scale(${1 + clamp01(live) * 0.14})` }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
          </button>
          <span>De acuerdo</span>
        </div>
      </div>
    </div>
  );
}

function SwipeDeck({ coach, colorCards, live }: { coach: Coach; colorCards: boolean; live: number }) {
  const { state: st, dispatch, answer } = coach;
  const origin = useRef({ x: 0, y: 0 });
  const q = QUESTIONS[st.idx];
  const nq = QUESTIONS[st.idx + 1];

  const cardBg = colorCards ? q.color : '#FFFFFF';
  const cardFg = colorCards ? q.fg : '#040404';
  const eyebrow = colorCards ? (q.fg === '#FFFFFF' ? 'rgba(255,255,255,.8)' : 'rgba(4,4,4,.65)') : '#9C9C9C';
  const transform = st.exiting
    ? `translate(${st.exiting * 560}px, ${st.dy * 0.3}px) rotate(${st.exiting * 22}deg)`
    : `translate(${st.dx}px, ${st.dy * 0.3}px) rotate(${st.dx * 0.06}deg)`;

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (st.exiting || st.paused) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    origin.current = { x: e.clientX, y: e.clientY };
    dispatch({ type: 'dragStart' });
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!st.dragging) return;
    dispatch({ type: 'drag', dx: e.clientX - origin.current.x, dy: e.clientY - origin.current.y });
  };
  const onUp = () => {
    if (!st.dragging) return;
    if (Math.abs(st.dx) > SWIPE_THRESHOLD) answer(st.dx > 0);
    else dispatch({ type: 'dragCancel' });
  };

  return (
    <div className="deck">
      {nq && (
        <div className="deck__next" style={{ background: colorCards ? nq.color : '#FFFFFF' }} aria-hidden>
          <p style={{ color: colorCards ? nq.fg : '#040404' }}>{nq.text}</p>
        </div>
      )}
      <div
        className="deck__card"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        style={{
          background: cardBg,
          color: cardFg,
          transform,
          transition: st.dragging ? 'none' : `transform ${CARD_EXIT_MS}ms cubic-bezier(.2,.7,.2,1)`,
        }}
      >
        <span className="deck__eyebrow" style={{ color: eyebrow }}>Afirmación {st.idx + 1} de {QUESTIONS.length}</span>
        <p className="deck__text" aria-live="polite">{q.text}</p>
        <span className="deck__hint" style={{ color: eyebrow }}>Desliza o usa los botones</span>
        <div className="stamp stamp--agree" style={{ opacity: clamp01(live) }} aria-hidden>De acuerdo</div>
        <div className="stamp stamp--disagree" style={{ opacity: clamp01(-live) }} aria-hidden>En desacuerdo</div>
      </div>
    </div>
  );
}
