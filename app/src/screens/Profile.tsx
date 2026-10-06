import { Button } from '../ds';
import { STYLES, scoreAnswers } from '../data';
import type { Coach } from '../state';

const ANGLES = [180, 270, 0, 90];

function wedge(a1: number, a2: number, r: number) {
  const rad = (a: number) => (a * Math.PI) / 180;
  const p = (a: number) => `${(150 + r * Math.cos(rad(a))).toFixed(1)} ${(150 + r * Math.sin(rad(a))).toFixed(1)}`;
  return `M150 150 L${p(a1)} A${r} ${r} 0 0 1 ${p(a2)} Z`;
}

export function Profile({ coach }: { coach: Coach }) {
  const { state: st, dispatch, go } = coach;
  const sc = scoreAnswers(st.answers);
  const ranked = STYLES.map((s, i) => ({ ...s, i, pct: sc[s.key] })).sort((a, b) => b.pct - a.pct || a.i - b.i);
  const [top, second] = ranked;
  const open = (i: number) => () => dispatch({ type: 'detail', index: i });

  return (
    <div className="profile">
      <div className="profile__bar">
        <span className="profile__bar-title">Mi perfil de liderazgo</span>
        <Button variant="outline" size="sm" onClick={() => go('welcome')}>Repetir</Button>
      </div>

      <div className="profile__intro">
        <span className="eyebrow">{st.name} · Lectura rápida</span>
        <h2 className="profile__h2">Tu estilo predominante es <span style={{ color: top.ink }}>{top.name}</span></h2>
        <p className="profile__lead">
          {top.tagline} {second.pct > 0 ? `También muestras rasgos de ${second.name} (${second.pct}%).` : ''}
        </p>
      </div>

      <div className="chart">
        <svg width="310" height="310" viewBox="0 0 300 300" role="img" aria-label={STYLES.map(s => `${s.name} ${sc[s.key]}%`).join(', ')}>
          <circle cx="150" cy="150" r="128" fill="none" stroke="#E6E6E6" strokeWidth="1" />
          <circle cx="150" cy="150" r="88" fill="none" stroke="#E6E6E6" strokeWidth="1" />
          <circle cx="150" cy="150" r="48" fill="none" stroke="#E6E6E6" strokeWidth="1" />
          <line x1="150" y1="14" x2="150" y2="286" stroke="#E6E6E6" strokeWidth="1" />
          <line x1="14" y1="150" x2="286" y2="150" stroke="#E6E6E6" strokeWidth="1" />
          <g className="chart__wedges" style={{ transform: `scale(${st.revealed ? 1 : 0.05})` }}>
            {STYLES.map((s, i) => (
              <path key={s.key} className="chart__wedge" d={wedge(ANGLES[i] + 1.5, ANGLES[i] + 88.5, 22 + (sc[s.key] / 100) * 106)} fill={s.color} onClick={open(i)} />
            ))}
          </g>
          <circle cx="150" cy="150" r="5" fill="#FFFFFF" />
        </svg>
        {STYLES.map((s, i) => (
          <button
            key={s.key}
            className="chart__corner"
            onClick={open(i)}
            style={{
              top: i < 2 ? 0 : 'auto', bottom: i < 2 ? 'auto' : 0,
              left: i === 0 || i === 3 ? 0 : 'auto', right: i === 1 || i === 2 ? 0 : 'auto',
              alignItems: i === 0 || i === 3 ? 'flex-start' : 'flex-end',
            }}
          >
            <span className="chart__pct" style={{ color: s.ink }}>{sc[s.key]}%</span>
            <span className="chart__short">{s.short}</span>
          </button>
        ))}
      </div>
      <p className="chart__hint">Toca un estilo para explorarlo</p>

      <div className="ranking">
        {ranked.map(r => (
          <button key={r.key} className="ranking__row" onClick={open(r.i)}>
            <span className="dot dot--lg" style={{ background: r.color }} />
            <span className="ranking__main">
              <span className="ranking__name">{r.name}</span>
              <span className="ranking__track"><span style={{ width: `${st.revealed ? r.pct : 0}%`, background: r.color }} /></span>
            </span>
            <span className="ranking__pct">{r.pct}%</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C9C9C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        ))}
      </div>
    </div>
  );
}
