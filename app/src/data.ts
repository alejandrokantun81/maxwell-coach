export type StyleKey = 'rojo' | 'amarillo' | 'verde' | 'azul';

export interface LeadershipStyle {
  key: StyleKey;
  name: string;
  short: string;
  /** Fill color for chart wedges, dots and the detail page background. */
  color: string;
  /** Text color when the style name is set on white. */
  ink: string;
  /** Foreground on top of `color`. */
  fg: string;
  /** Translucent fill for round buttons on the detail page. */
  chip: string;
  tagline: string;
  summary: (name: string) => string;
  strengths: string[];
  blind: string[];
  tip: string;
}

/** Display order: chart quadrants go top-left, top-right, bottom-right, bottom-left. */
export const STYLES: LeadershipStyle[] = [
  {
    key: 'rojo', name: 'Rojo Directivo', short: 'Directivo', color: '#C62828', ink: '#C62828', fg: '#FFFFFF', chip: 'rgba(0,0,0,.18)',
    tagline: 'Marcas el rumbo y movilizas al equipo hacia resultados.',
    summary: n => `${n} asume la conducción con naturalidad: define metas claras, decide con rapidez y sostiene el ritmo cuando un proyecto académico se complica.`,
    strengths: ['Claridad en metas y prioridades', 'Decisión ante la incertidumbre', 'Capacidad para destrabar proyectos'],
    blind: ['Puede avanzar sin escuchar a todos los involucrados', 'La urgencia puede percibirse como presión'],
    tip: 'Antes de tu próxima decisión importante, pide su punto de vista a dos docentes y explica al equipo el porqué, no solo el qué.',
  },
  {
    key: 'amarillo', name: 'Amarillo Innovador', short: 'Innovador', color: '#F2A100', ink: '#B87A00', fg: '#040404', chip: 'rgba(0,0,0,.10)',
    tagline: 'Imaginas nuevas posibilidades y contagias entusiasmo.',
    summary: n => `${n} piensa en el futuro del programa, propone formas distintas de enseñar y reúne al equipo alrededor de ideas nuevas.`,
    strengths: ['Visión de largo plazo', 'Creatividad para resolver problemas', 'Energía que motiva al equipo'],
    blind: ['Puede iniciar más proyectos de los que concluye', 'Los detalles operativos quedan en segundo plano'],
    tip: 'Elige una sola iniciativa para este semestre y asígnale un responsable y una fecha de cierre.',
  },
  {
    key: 'verde', name: 'Verde Empoderador', short: 'Empoderador', color: '#2E8B57', ink: '#2E8B57', fg: '#FFFFFF', chip: 'rgba(0,0,0,.18)',
    tagline: 'Desarrollas a las personas y construyes acuerdos.',
    summary: n => `${n} escucha antes de opinar, delega con confianza y se ocupa de que docentes y estudiantes crezcan. Su liderazgo se mide en el desarrollo de otros.`,
    strengths: ['Escucha activa y empatía', 'Delegación que forma nuevos líderes', 'Clima de confianza en el equipo'],
    blind: ['Puede evitar conversaciones difíciles', 'Buscar consenso puede alargar las decisiones'],
    tip: 'Agenda esta semana una conversación de retroalimentación pendiente: sé claro con la expectativa y generoso con el apoyo.',
  },
  {
    key: 'azul', name: 'Azul Analítico', short: 'Analítico', color: '#2F6DB5', ink: '#2F6DB5', fg: '#FFFFFF', chip: 'rgba(0,0,0,.18)',
    tagline: 'Decides con evidencia y construyes procesos sólidos.',
    summary: n => `${n} se apoya en datos, indicadores y procedimientos. Cuida la calidad académica y anticipa riesgos antes de que se conviertan en problemas.`,
    strengths: ['Rigor en el análisis y la planeación', 'Procesos claros y documentados', 'Atención al detalle y a la calidad'],
    blind: ['Puede retrasar decisiones esperando más información', 'Los cambios rápidos le generan resistencia'],
    tip: 'Define de antemano qué información es suficiente; cuando la tengas, decide y ajusta sobre la marcha.',
  },
];

/** [code, enunciado, aspecto, isNegative, cardColor] — isNegative: "En desacuerdo" suma +1 */
type BankRow = [string, string, string, boolean, string];

const BANK: Record<StyleKey, BankRow[]> = {
  rojo: [
    ['R1', 'Soy naturalmente muy competitivo con los demás y me impulsa ganar.', 'Enfocado en resultados', false, '#882329'],
    ['R2', 'A veces soy tan directo e impaciente que termino hiriendo o molestando a la gente.', 'Enfocado en resultados', true, '#C9381E'],
    ['R3', 'Me siento muy cómodo asumiendo el control y dirigiendo en situaciones de grupo.', 'Extrovertido', false, '#C9381E'],
    ['R4', 'Me obsesiona tanto ganar que llego a pasar por alto las necesidades de los demás.', 'Enfocado en resultados', true, '#882329'],
    ['R5', 'Disfruto siendo el centro de atención y expresando mi energía abiertamente.', 'Extrovertido', false, '#C9381E'],
    ['R6', 'Mi necesidad de tener el mando resulta a menudo dominante y agobiante para mi entorno.', 'Extrovertido', true, '#C9381E'],
    ['R7', 'Me conocen como alguien tenaz que no desiste hasta ver la meta cumplida.', 'Enfocado en resultados', false, '#882329'],
    ['R8', 'Al debatir un punto, los demás a veces me perciben agresivo o inflexible.', 'Enfocado en resultados', true, '#882329'],
    ['R9', 'Disfruto evaluando críticamente las ideas y sosteniendo debates exigentes.', 'Enfocado en resultados', false, '#D66B24'],
    ['R10', 'A veces presiono mis opiniones de forma tan vehemente que anulo las posturas ajenas.', 'Extrovertido', true, '#C9381E'],
    ['R11', 'Me esfuerzo constantemente por superar el rendimiento de mis colegas.', 'Enfocado en resultados', false, '#882329'],
    ['R12', 'Mi nivel de entusiasmo y volumen de energía llega a abrumar o agotar a quienes me rodean.', 'Extrovertido', true, '#C9381E'],
    ['R13', 'Soy un negociador duro que prioriza alcanzar el objetivo planteado.', 'Enfocado en resultados', false, '#882329'],
  ],
  azul: [
    ['A1', 'Cuando trabajo en una tarea soy sumamente estructurado y metódico.', 'Disciplinado', false, '#7B3060'],
    ['A2', 'Pierdo tanto tiempo organizando y detallando que me cuesta pasar a la acción.', 'Disciplinado', true, '#7B3060'],
    ['A3', 'Es fundamental para mí verificar y contrastar todos los hechos antes de decidir.', 'Aterrizado', false, '#2F4A96'],
    ['A4', 'Mi necesidad de ser objetivo me hace parecer una persona fría o distante ante los demás.', 'Aterrizado', true, '#1B3B87'],
    ['A5', 'Creo firmemente en cumplir siempre mis compromisos y plazos establecidos.', 'Disciplinado', false, '#7B3060'],
    ['A6', 'Me vuelvo tan rígido con los métodos tradicionales que me resisto a cualquier cambio necesario.', 'Aterrizado', true, '#215CAE'],
    ['A7', 'La atención minuciosa al detalle y la precisión es una de mis fortalezas clave.', 'Disciplinado', false, '#7B3060'],
    ['A8', 'A veces me pierdo en los detalles minuciosos y pierdo la visión del panorama general.', 'Disciplinado', true, '#7B3060'],
    ['A9', 'Evito teorizar y me enfoco en lo concreto, práctico y verificable.', 'Aterrizado', false, '#1B3B87'],
    ['A10', 'Mi afán por la exactitud y la precisión puede volverse excesivo y retrasar las entregas.', 'Disciplinado', true, '#7B3060'],
    ['A11', 'Analizo las situaciones de manera lógica y racional sin involucrar emociones.', 'Aterrizado', false, '#2F4A96'],
    ['A12', 'Soy tan realista y estricto con los datos que cierro el paso a explorar hipótesis creativas.', 'Aterrizado', true, '#1B3B87'],
    ['A13', 'Manejo bien y con paciencia las tareas repetitivas que demandan gran rigor técnico.', 'Disciplinado', false, '#7B3060'],
  ],
  amarillo: [
    ['Y1', 'Soy naturalmente inclinado a pensar en el panorama global e identificar patrones.', 'Pensador de panorama global', false, '#D66B24'],
    ['Y2', 'Me pierdo tanto en la imaginación y las teorías que descuido la viabilidad real.', 'Pensador de panorama global', true, '#D66B24'],
    ['Y3', 'Tiendo a mantener mis planes informales para tener abiertas todas mis opciones.', 'Inspirado', false, '#B6BE34'],
    ['Y4', 'Mi falta de planeación y orden me causa retrasos o incumplimiento de fechas límite.', 'Inspirado', true, '#B6BE34'],
    ['Y5', 'Disfruto profundamente siendo una fuente constante de ideas disruptivas.', 'Pensador de panorama global', false, '#D66B24'],
    ['Y6', 'A menudo propongo o inicio cambios solo por aburrimiento, sin que exista una necesidad real.', 'Pensador de panorama global', true, '#D66B24'],
    ['Y7', 'No creo que la tradición o la costumbre deba interponerse ante un cambio conveniente.', 'Pensador de panorama global', false, '#D66B24'],
    ['Y8', 'Puedo ser tan adaptable y cambiar de rumbo con tanta facilidad que pierdo el foco original.', 'Inspirado', true, '#B6BE34'],
    ['Y9', 'Disfruto trabajar en entornos flexibles donde las ideas fluyan sin objetivos rígidos.', 'Inspirado', false, '#B6BE34'],
    ['Y10', 'A veces complico innecesariamente problemas que admitían una solución directa y sencilla.', 'Pensador de panorama global', true, '#D66B24'],
    ['Y11', 'Me entusiasma improvisar soluciones espontáneas cuando el contexto cambia repentinamente.', 'Inspirado', false, '#B6BE34'],
    ['Y12', 'Ha habido ocasiones en que he actuado por mero impulso y después he lamentado no reflexionar.', 'Inspirado', true, '#B6BE34'],
  ],
  verde: [
    ['G1', 'Soy naturalmente muy empático y comprendo el punto de vista ajeno.', 'Enfocado en las personas', false, '#4B7C37'],
    ['G2', "Por complacer a los demás y evitar roces, me cuesta muchísimo decir 'no' o poner límites.", 'Enfocado en las personas', true, '#4B7C37'],
    ['G3', 'Me gusta escuchar con atención a los demás antes de compartir mi postura.', 'Introvertido', false, '#1E5AA8'],
    ['G4', 'Invierto tanto tiempo cuidando a los demás que descuido mis propios objetivos prioritarios.', 'Enfocado en las personas', true, '#4B7C37'],
    ['G5', 'Le doy prioridad a la armonía grupal y a encontrar puntos en común donde todos ganen.', 'Enfocado en las personas', false, '#4B7C37'],
    ['G6', 'Puedo ser tan diplomático y reacio a la discusión que evito tomar una postura clara y firme.', 'Enfocado en las personas', true, '#4B7C37'],
    ['G7', 'Disfruto profundamente colaborar en equipo en lugar de competir individualmente.', 'Enfocado en las personas', false, '#4B7C37'],
    ['G8', 'A veces cedo en mi posición durante un debate solo para que la otra persona no se sienta mal.', 'Enfocado en las personas', true, '#4B7C37'],
    ['G9', 'Siempre me aseguro de reconocer y validar públicamente las contribuciones de los demás.', 'Enfocado en las personas', false, '#4B7C37'],
    ['G10', 'Me resulta sumamente difícil expresar mis opiniones cuando percibo tensión en una reunión.', 'Introvertido', true, '#1E5AA8'],
    ['G11', 'Tiendo a confiar espontáneamente en la buena fe y las intenciones de las personas.', 'Enfocado en las personas', false, '#4B7C37'],
    ['G12', 'Llego a involucrarme de forma tan compasiva en los problemas ajenos que pierdo la objetividad.', 'Enfocado en las personas', true, '#4B7C37'],
  ],
};

export interface Question {
  id: number;
  style: StyleKey;
  code: string;
  text: string;
  aspect: string;
  negative: boolean;
  color: string;
  /** Text color on `color`; black on the light green so it stays readable. */
  fg: string;
}

// Orden intercalado R1, A1, Y1, G1, R2… para no agrupar cuadrantes
export const QUESTIONS: Question[] = (() => {
  const keys: StyleKey[] = ['rojo', 'azul', 'amarillo', 'verde'];
  const out: Question[] = [];
  const longest = Math.max(...keys.map(k => BANK[k].length));
  for (let i = 0; i < longest; i++) {
    for (const k of keys) {
      const q = BANK[k][i];
      if (!q) continue;
      const [code, text, aspect, negative, color] = q;
      out.push({ id: out.length + 1, style: k, code, text, aspect, negative, color, fg: color === '#B6BE34' ? '#040404' : '#FFFFFF' });
    }
  }
  return out;
})();

export const INTRO = [
  'Este cuestionario te ayuda a identificar tu estilo de liderazgo académico.',
  'Desliza la tarjeta a la derecha si estás de acuerdo y a la izquierda si no. También puedes usar los botones.',
  'No hay respuestas correctas. Responde pensando en cómo actúas hoy, no en cómo te gustaría actuar.',
];

export interface Answer {
  style: StyleKey;
  code: string;
  agree: boolean;
  /** True when this answer earns a point for its quadrant. */
  point: boolean;
}

export type Scores = Record<StyleKey, number>;

/** Shown when the profile is opened without answers (e.g. `?screen=profile`). */
export const SAMPLE_SCORES: Scores = { rojo: 40, amarillo: 60, verde: 80, azul: 60 };

/** Percentage of points earned per quadrant, rounded. */
export function scoreAnswers(answers: Answer[]): Scores {
  if (!answers.length) return SAMPLE_SCORES;
  const out = {} as Scores;
  for (const s of STYLES) {
    const a = answers.filter(x => x.style === s.key);
    out[s.key] = a.length ? Math.round((100 * a.filter(x => x.point).length) / a.length) : 0;
  }
  return out;
}
