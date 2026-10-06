// Ports of the Anáhuac Mayab design-system components (Button, Input, Badge)
// from _ds_bundle.js, kept visually identical.
import { useState, type ButtonHTMLAttributes, type CSSProperties, type InputHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const PAD: Record<ButtonSize, string> = { sm: '8px 18px', md: '12px 26px', lg: '16px 34px' };
const FS: Record<ButtonSize, number> = { sm: 14, md: 16, lg: 18 };
const VARIANT: Record<ButtonVariant, CSSProperties> = {
  primary: { background: 'var(--orange)', color: '#fff', border: '2px solid var(--orange)' },
  dark: { background: 'var(--rich-black)', color: '#fff', border: '2px solid var(--rich-black)' },
  outline: { background: 'transparent', color: 'var(--orange)', border: '2px solid var(--orange)' },
  ghost: { background: 'transparent', color: 'var(--rich-black)', border: '2px solid transparent' },
};
const HOVER: Record<ButtonVariant, CSSProperties> = {
  primary: { background: 'var(--orange-600)', borderColor: 'var(--orange-600)' },
  outline: { background: 'var(--orange)', color: '#fff' },
  dark: { background: 'var(--raisin-black)' },
  ghost: { color: 'var(--orange)' },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant = 'primary', size = 'md', disabled, style, children, ...rest }: ButtonProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: FS[size], padding: PAD[size],
        borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        textDecoration: 'none', transition: 'all var(--dur-fast) var(--ease)',
        ...VARIANT[variant], ...(hover && !disabled ? HOVER[variant] : {}), ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {label && <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</span>}
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        aria-invalid={!!error || undefined}
        style={{
          font: '500 16px var(--font-sans)', padding: '12px 16px', borderRadius: 'var(--radius-md)',
          border: '1.5px solid ' + (error ? 'var(--danger)' : focus ? 'var(--orange)' : 'var(--border-strong)'),
          boxShadow: focus ? '0 0 0 4px var(--focus-ring)' : 'none', outline: 'none',
          color: 'var(--text-strong)', background: '#fff', transition: 'all var(--dur-fast) var(--ease)',
        }}
        {...rest}
      />
      {(error || hint) && <span style={{ fontSize: 12, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}

type BadgeTone = 'orange' | 'dark' | 'gray' | 'solid';
const TONE: Record<BadgeTone, [string, string]> = {
  orange: ['var(--orange-100)', 'var(--orange-700)'],
  dark: ['var(--rich-black)', '#fff'],
  gray: ['var(--gray-100)', 'var(--raisin-black)'],
  solid: ['var(--orange)', '#fff'],
};

export function Badge({ tone = 'orange', children }: { tone?: BadgeTone; children: ReactNode }) {
  const [bg, fg] = TONE[tone];
  return (
    <span style={{
      display: 'inline-block', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em',
      textTransform: 'uppercase', padding: '5px 12px', borderRadius: 'var(--radius-pill)', background: bg, color: fg,
    }}>
      {children}
    </span>
  );
}
