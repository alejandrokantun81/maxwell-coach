/* @ds-bundle: {"format":4,"namespace":"AnHuacMayabEducarParaTransformar_44f5d9","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"e47ad4683534","components/core/Badge.jsx":"5a475a145e66","components/core/Button.jsx":"88711c905dc2","components/core/Card.jsx":"f9a0fa7a1d77","components/core/Input.jsx":"dee2157ccee8","ui_kits/fonaton/Chrome.jsx":"3d6bc85f7ce6","ui_kits/fonaton/Sections.jsx":"d0683a49eeb8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnHuacMayabEducarParaTransformar_44f5d9 = window.AnHuacMayabEducarParaTransformar_44f5d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0
}) {
  const [o, setO] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setO(o === i ? -1 : i),
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '18px 4px',
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 18,
      color: o === i ? 'var(--orange)' : 'var(--text-strong)'
    }
  }, it.q, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      lineHeight: 1,
      transform: o === i ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--dur) var(--ease)',
      color: 'var(--orange)'
    }
  }, "+")), o === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 4px 20px',
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, it.a))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'orange',
  children
}) {
  const t = {
    orange: ['var(--orange-100)', 'var(--orange-700)'],
    dark: ['var(--rich-black)', '#fff'],
    gray: ['var(--gray-100)', 'var(--raisin-black)'],
    solid: ['var(--orange)', '#fff']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: t[0],
      color: t[1]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
  href,
  style,
  ...rest
}) {
  const pad = {
    sm: '8px 18px',
    md: '12px 26px',
    lg: '16px 34px'
  }[size];
  const fs = {
    sm: 14,
    md: 16,
    lg: 18
  }[size];
  const v = {
    primary: {
      background: 'var(--orange)',
      color: '#fff',
      border: '2px solid var(--orange)'
    },
    dark: {
      background: 'var(--rich-black)',
      color: '#fff',
      border: '2px solid var(--rich-black)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--orange)',
      border: '2px solid var(--orange)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--rich-black)',
      border: '2px solid transparent'
    }
  }[variant];
  const [h, setH] = React.useState(false);
  const hov = h && !disabled ? variant === 'primary' ? {
    background: 'var(--orange-600)',
    borderColor: 'var(--orange-600)'
  } : variant === 'outline' ? {
    background: 'var(--orange)',
    color: '#fff'
  } : variant === 'dark' ? {
    background: 'var(--raisin-black)'
  } : {
    color: 'var(--orange)'
  } : {};
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: fs,
      padding: pad,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      textDecoration: 'none',
      transition: 'all var(--dur-fast) var(--ease)',
      ...v,
      ...hov,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'light',
  image,
  children,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--rich-black)' : tone === 'soft' ? 'var(--orange-50)' : '#fff',
      color: dark ? '#fff' : 'var(--text-body)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: tone === 'light' ? 'var(--shadow-md)' : 'none',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160,
      background: 'var(--gray-200) center/cover',
      backgroundImage: 'url(' + image + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      font: '500 16px var(--font-sans)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid ' + (error ? 'var(--danger)' : f ? 'var(--orange)' : 'var(--border-strong)'),
      boxShadow: f ? '0 0 0 4px var(--focus-ring)' : 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      background: '#fff',
      transition: 'all var(--dur-fast) var(--ease)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fonaton/Chrome.jsx
try { (() => {
const NS = window.AnHuacMayabEducarParaTransformar_44f5d9;
function Header({
  onNav
}) {
  const links = [['Nosotros', 'mision'], ['Historias', 'historias'], ['Galería', 'galeria'], ['Ayudar', 'ayudar'], ['Postúlate', 'faq'], ['Aliados', 'aliados']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.05,
      textDecoration: 'none',
      color: 'var(--rich-black)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-.02em'
    }
  }, "Educar para ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "Transformar")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-muted)',
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, "by Fonat\xF3n \xB7 An\xE1huac Mayab")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      marginLeft: 'auto'
    }
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--raisin-black)'
    }
  }, l))), /*#__PURE__*/React.createElement(NS.Button, {
    variant: "ghost",
    size: "sm"
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement(NS.Button, {
    size: "sm"
  }, "Quiero donar")));
}
function Footer() {
  const cols = ['Anáhuac', 'Nosotros', 'Admisiones', 'Internacional', 'Vida Universitaria', 'Oferta Educativa'];
  const soc = ['facebook', 'instagram', 'linkedin', 'twitter'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--rich-black)',
      color: '#fff',
      padding: '64px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 22,
      fontWeight: 800
    }
  }, "Universidad An\xE1huac ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "Mayab")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      color: 'var(--spanish-gray)',
      maxWidth: 340
    }
  }, "Tel\xE9fono: (999) 942 4800 Carr. M\xE9rida Progreso Km. 15.5 AP. 96 Cordemex, CP. 97308, M\xE9rida, Yucat\xE1n, M\xE9xico."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "S\xEDguenos en"), soc.map(s => /*#__PURE__*/React.createElement("img", {
    key: s,
    alt: s,
    width: "22",
    height: "22",
    src: 'https://merida.anahuac.mx/hubfs/ANAHUAC%20-%20Globals/images/' + s + '-gray.svg'
  })))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 10,
      fontSize: 15
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--spanish-gray)'
    }
  }, "Miembro de: edX \xB7 RIU \xB7 RUA \xB7 Holberton \xB7 CASE")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '40px auto 0',
      paddingTop: 20,
      borderTop: '1px solid var(--raisin-black)',
      fontSize: 13,
      color: 'var(--spanish-gray)',
      display: 'flex',
      gap: 16
    }
  }, "Sitio institucional | Aviso de privacidad | T\xE9rminos y condiciones de uso"));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fonaton/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fonaton/Sections.jsx
try { (() => {
const UI = window.AnHuacMayabEducarParaTransformar_44f5d9;
const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 24px'
};
const BASE = 'https://merida.anahuac.mx/hubfs/ANAHUAC%20-%20Templates/Institucional/Fonaton/';
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--rich-black)',
      color: '#fff',
      padding: '96px 0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 64,
      lineHeight: 1.05,
      maxWidth: 760
    }
  }, "Tu apoyo ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "transforma"), " vidas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      marginTop: 20,
      maxWidth: 560,
      color: 'var(--gray-300)'
    }
  }, "Detr\xE1s de cada estudiante, hay un sue\xF1o esperando hacerse realidad. S\xFAmate a lograrlo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(UI.Button, {
    size: "lg"
  }, "Quiero ser parte del cambio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 64,
      paddingTop: 24,
      borderTop: '1px solid var(--raisin-black)'
    }
  }, ['Egresados', 'Beneficiarios Actuales', 'Benefactores'].map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--spanish-gray)',
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, l)))));
}
function Mission() {
  return /*#__PURE__*/React.createElement("section", {
    id: "mision",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 28,
      lineHeight: 1.4,
      maxWidth: 880,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "Educar para Transformar by Fonat\xF3n\xAE"), " es una iniciativa de la ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 800
    }
  }, "Universidad An\xE1huac Mayab"), " que, con el apoyo de donadores y eventos con causa, abre las puertas de la universidad a m\xE1s j\xF3venes con talento y compromiso. ", /*#__PURE__*/React.createElement("a", {
    href: "#ayudar"
  }, "Saber m\xE1s"))));
}
function Stories() {
  return /*#__PURE__*/React.createElement("section", {
    id: "historias",
    style: {
      background: 'var(--orange-50)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    alt: "Historia de \xE9xito",
    src: BASE + 'fontaton_home_ezequiel.png',
    style: {
      width: '100%',
      borderRadius: 28,
      display: 'block',
      background: 'var(--gray-200)',
      minHeight: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--orange)'
    }
  }, "Historias de \xE9xito"), /*#__PURE__*/React.createElement("h2", null, "Conoce a quienes ya transformaron su futuro"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18
    }
  }, "Te invitamos a conocer algunas historias de egresados beneficiarios del programa que actualmente ejercen su profesi\xF3n, impactando de manera positiva a su entorno."), /*#__PURE__*/React.createElement(UI.Button, {
    variant: "outline"
  }, "Saber m\xE1s"))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--orange)',
      padding: '72px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      maxWidth: 720,
      margin: '0 auto 28px'
    }
  }, "Haz que m\xE1s sue\xF1os se conviertan en historias reales."), /*#__PURE__*/React.createElement(UI.Button, {
    variant: "dark",
    size: "lg"
  }, "Quiero donar")));
}
function Orgs() {
  const o = [['alborada_icon.png', 'Fundación Alborada', 'Apoyamos a la Fundación Alborada en la formación integral de jóvenes de sectores desprotegidos y en situación de riesgo, otorgando becas que impulsan su integración digna a la sociedad y su contribución al bien común.'], ['hijodepolicia_icon.png', 'Secretaría de Seguridad Pública', 'Contribuyendo en la dignificación y enaltecimiento de los elementos policiacos a través de acciones que permitan crear condiciones de certeza y solidez en su núcleo familiar, otorgando becas a hijos de policía que desean mejorar su entorno a través de la educación.'], ['cruz_roja_icon.png', 'Cruz Roja Delegación Yucatán', 'En reconocimiento a la labor altruista de la Cruz Roja se otorgan becas a hijos de personal activo, adscrito y remunerado, que desean tener una educación profesional.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "aliados",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", null, "Apoyo a organizaciones"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: 760,
      margin: '14px 0 40px'
    }
  }, "En colaboraci\xF3n con diversas instituciones y organizaciones, entregamos becas universitarias para impulsar el desarrollo integral de j\xF3venes de excelencia acad\xE9mica, reafirmando nuestro compromiso en transformar vidas a trav\xE9s de la educaci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, o.map(([i, t, d]) => /*#__PURE__*/React.createElement(UI.Card, {
    key: t
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: BASE + i,
    style: {
      width: 56,
      height: 56,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15
    }
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontWeight: 600
    }
  }, "Si est\xE1s interesado(a), acude a tu organizaci\xF3n.")));
}
function EventSec() {
  const R = 'https://merida.anahuac.mx/hubfs/ANAHUAC%20-%20Globals/images/';
  const row = (i, t) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    width: "22",
    height: "22",
    src: R + i + '/' + i + '-orange.svg'
  }), t);
  return /*#__PURE__*/React.createElement("section", {
    id: "ayudar",
    style: {
      background: 'var(--rich-black)',
      color: '#fff',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      marginBottom: 36
    }
  }, "\xA1S\xFAmate a nuestro pr\xF3ximo evento con causa!"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--raisin-black)',
      borderRadius: 28,
      padding: 40,
      display: 'grid',
      gap: 14,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UI.Badge, {
    tone: "solid"
  }, "Deporte \xB7 Arte \xB7 Cultura")), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff'
    }
  }, "Concierto de Gala Frecuencias de Luz"), row('calendar', 'Del 10 diciembre al 10 diciembre'), row('time', '20:00 hrs'), row('location', 'Foro Cultural "Alejandro Gomory"'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gray-300)'
    }
  }, "Asiste al Concierto de Gala Frecuencias de Luz, uniendo arte, cultura y solidaridad a ..."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(UI.Button, null, "Comprar boletos"), /*#__PURE__*/React.createElement(UI.Button, {
    variant: "ghost",
    style: {
      color: '#fff'
    }
  }, "Ver todos los eventos")))));
}
function Gallery() {
  const G = BASE + 'Galer%C3%ADa/';
  const im = ['0B2A2404.jpg', '0B2A2325.jpg', '0B2A2408.jpg', '9B7A0079.jpg', 'TorneoGolf-237.jpg', 'TorneoGolf-253.jpg'];
  return /*#__PURE__*/React.createElement("section", {
    id: "galeria",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", null, "As\xED vivimos los eventos Educar para Transformar by FONAT\xD3N \xAE"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 32px'
    }
  }, "Mira la galer\xEDa completa ", /*#__PURE__*/React.createElement("a", {
    href: "#galeria"
  }, "aqu\xED")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, im.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      aspectRatio: '4/3',
      borderRadius: 20,
      background: 'var(--gray-200) center/cover',
      backgroundImage: 'url(' + G + n + ')'
    }
  })))));
}
function Faq() {
  const items = [['¿Qué es Educar para Transformar by Fonatón?', 'Es el programa de recaudación de fondos de la Universidad Anáhuac Mayab que otorga becas del 100 % a jóvenes con talento y compromiso social que no cuentan con los recursos económicos para cursar una licenciatura.'], ['¿Qué gastos cubre la beca?', 'Cubre inscripción, colegiaturas, transporte escolar y el aprendizaje de un idioma.'], ['¿Quién puede ser beneficiario?', 'Estudiantes con buen desempeño académico y situación económica que justifique el apoyo.'], ['¿Cómo se eligen a los becarios?', 'El Comité revisa cada caso considerando el expediente académico, la situación económica y resultados de exámenes psicométricos y vocacionales.'], ['¿Qué debo hacer para mantener la beca?', 'Conservar el promedio mínimo, no reprobar materias, cumplir con el servicio becario y participar en actividades del programa.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: 'var(--gray-100)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 32
    }
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement(UI.Accordion, {
    items: items.map(([q, a]) => ({
      q,
      a
    }))
  })));
}
function Contact() {
  const c = (t, d, b) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      borderRadius: 28,
      padding: 36,
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d), b);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      gap: 24
    }
  }, c('Contáctanos', '¿Tienes más dudas?  fonaton.uam@anahuac.mx · (999) 9-42-48-01 ext. 1334', null), c('Otras formas de ayudar', '¡Forma parte del cambio! Conoce todas las formas en las que puedes sumarte a esta gran causa.', /*#__PURE__*/React.createElement(UI.Button, null, "Quiero sumarme"))));
}
Object.assign(window, {
  Hero,
  Mission,
  Stories,
  CTA,
  Orgs,
  EventSec,
  Gallery,
  Faq,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fonaton/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
