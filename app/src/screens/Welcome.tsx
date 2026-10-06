import { Badge, Button, Input } from '../ds';
import { QUESTIONS, STYLES } from '../data';
import type { Coach } from '../state';
import { Quadrants } from './Quadrants';

export function Welcome({ coach }: { coach: Coach }) {
  const { state, dispatch, go } = coach;
  const start = () => (state.name.trim() ? go('intro') : dispatch({ type: 'nameError', message: 'Escribe tu nombre para continuar' }));

  return (
    <div className="welcome">
      <div className="welcome__top">
        <div className="brand">
          <span className="brand__name">Maxwell Coach</span>
          <span className="brand__org">Anáhuac Mayab</span>
        </div>
        <Badge tone="gray">Liderazgo académico</Badge>
      </div>

      <div className="hero-card">
        <div className="hero-card__head">
          <Quadrants size={88} gap={4} inner={6} />
          <div className="hero-card__title">
            <span className="eyebrow">Lectura rápida</span>
            <span className="hero-card__headline">Tu estilo de liderazgo en 4 colores</span>
          </div>
        </div>
        <div className="hero-card__legend">
          {STYLES.map(s => (
            <div key={s.key} className="legend-item">
              <span className="dot" style={{ background: s.color }} />
              {s.name}
            </div>
          ))}
        </div>
      </div>

      <div className="welcome__copy">
        <h1 className="welcome__h1">Descubre cómo <span className="accent">lideras</span> en tu comunidad académica.</h1>
        <p className="welcome__lead">Son {QUESTIONS.length} afirmaciones. Calculamos que te tomará menos de 5 minutos.</p>
      </div>

      <form className="welcome__form" onSubmit={e => { e.preventDefault(); start(); }}>
        <Input
          label="Confirma tu nombre"
          value={state.name}
          onChange={e => dispatch({ type: 'name', name: e.target.value })}
          placeholder="Tu nombre"
          error={state.nameError}
          autoComplete="given-name"
        />
        <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>Comenzar</Button>
      </form>
    </div>
  );
}
