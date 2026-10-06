import { useEffect } from 'react';
import { STYLES } from './data';
import { useCoach, type StartScreen } from './state';
import { Welcome } from './screens/Welcome';
import { QuizFlow } from './screens/QuizFlow';
import { Profile } from './screens/Profile';
import { Detail } from './screens/Detail';

export interface Settings {
  startScreen: StartScreen;
  /** Quiz cards take the color of their statement. */
  colorCards: boolean;
  showTimer: boolean;
}

/** Prototype settings, read from the URL: `?screen=quiz&colorCards=1&timer=0`. */
export function readSettings(search = window.location.search): Settings {
  const p = new URLSearchParams(search);
  const screen = p.get('screen');
  const flag = (v: string | null, fallback: boolean) => (v === null ? fallback : !['0', 'false', 'no'].includes(v));
  return {
    startScreen: screen === 'quiz' || screen === 'profile' ? screen : 'welcome',
    colorCards: flag(p.get('colorCards'), false),
    showTimer: flag(p.get('timer'), true),
  };
}

const DARK = new Set(['intro', 'countdown', 'quiz', 'reveal']);

export function App({ settings }: { settings: Settings }) {
  const coach = useCoach(settings.startScreen);
  const { screen, detail } = coach.state;
  const d = STYLES[detail];
  const dark = DARK.has(screen);
  const statusBg = screen === 'detail' ? d.color : dark ? '#040404' : '#FFFFFF';
  const statusFg = screen === 'detail' ? d.fg : dark ? '#FFFFFF' : '#040404';

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', statusBg);
  }, [statusBg]);

  return (
    <div className="stage">
      <div className="device">
        <div className="screen">
          <div className="notch" aria-hidden />
          <div className="statusbar" style={{ color: statusFg, background: statusBg }}>
            <span className="statusbar__fake">9:41</span>
            <span className="statusbar__fake statusbar__icons" aria-hidden>
              <span className="signal"><span style={{ height: 4 }} /><span style={{ height: 6 }} /><span style={{ height: 8 }} /><span style={{ height: 11 }} /></span>
              <span className="battery"><span /></span>
            </span>
          </div>

          {screen === 'welcome' && <Welcome coach={coach} />}
          {dark && <QuizFlow coach={coach} settings={settings} />}
          {screen === 'profile' && <Profile coach={coach} />}
          {screen === 'detail' && <Detail coach={coach} />}
        </div>
      </div>
    </div>
  );
}
