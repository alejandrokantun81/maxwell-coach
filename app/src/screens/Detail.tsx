import { STYLES, scoreAnswers } from '../data';
import type { Coach } from '../state';

const Chevron = ({ dir, size }: { dir: 'left' | 'right'; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} />
  </svg>
);

export function Detail({ coach }: { coach: Coach }) {
  const { state: st, dispatch, go } = coach;
  const i = st.detail;
  const d = STYLES[i];
  const pct = scoreAnswers(st.answers)[d.key];
  const chip = { background: d.chip, color: d.fg };
  const open = (index: number) => dispatch({ type: 'detail', index });

  return (
    <div className="detail" style={{ background: d.color, color: d.fg }}>
      <div className="detail__bar">
        <button className="round-btn" style={chip} onClick={() => go('profile')} aria-label="Volver"><Chevron dir="left" size={20} /></button>
        <span className="detail__count">Estilo {i + 1} de {STYLES.length}</span>
        <div className="detail__nav">
          <button className="round-btn" style={chip} onClick={() => open(i - 1)} aria-label="Anterior"><Chevron dir="left" size={18} /></button>
          <button className="round-btn" style={chip} onClick={() => open(i + 1)} aria-label="Siguiente"><Chevron dir="right" size={18} /></button>
        </div>
      </div>

      <div className="detail__hero">
        <span className="detail__pct">{pct}%</span>
        <h2 className="detail__name">{d.name}</h2>
        <p className="detail__summary">{d.summary(st.name || 'Tú')}</p>
      </div>

      <div className="detail__sheet">
        <div className="detail__section">
          <span className="eyebrow">Fortalezas</span>
          {d.strengths.map(t => (
            <div key={t} className="detail__strength">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5900" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="detail__section">
          <span className="eyebrow">Puntos ciegos</span>
          {d.blind.map(t => (
            <div key={t} className="detail__blind">
              <span className="ring" />
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="tip">
          <span className="eyebrow eyebrow--deep">Consejo de tu coach</span>
          <p>{d.tip}</p>
        </div>
        <div className="detail__dots">
          {STYLES.map((s, j) => (
            <button
              key={s.key}
              aria-label={s.name}
              aria-current={j === i || undefined}
              onClick={() => open(j)}
              style={{ width: j === i ? 28 : 10, background: s.color, opacity: j === i ? 1 : 0.35 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
