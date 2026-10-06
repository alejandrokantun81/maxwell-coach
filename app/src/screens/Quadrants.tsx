/** The four-color logo mark used on the welcome and completion screens. */
export function Quadrants({ size, gap, inner }: { size: number; gap: number; inner: number }) {
  const r = (tl: number, tr: number, br: number, bl: number) => `${tl}px ${tr}px ${br}px ${bl}px`;
  return (
    <div className="quadrants" style={{ width: size, height: size, gap }} aria-hidden>
      <span style={{ background: '#C62828', borderRadius: r(size, inner, inner, inner) }} />
      <span style={{ background: '#F2A100', borderRadius: r(inner, size, inner, inner) }} />
      <span style={{ background: '#2F6DB5', borderRadius: r(inner, inner, inner, size) }} />
      <span style={{ background: '#2E8B57', borderRadius: r(inner, inner, size, inner) }} />
    </div>
  );
}
