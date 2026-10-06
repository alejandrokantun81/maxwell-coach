# Maxwell Coach — Liderazgo académico

Implementation of `project/Maxwell Coach.dc.html` (Claude Design handoff) as a Vite + React + TypeScript app, styled with the Anáhuac Mayab design system tokens.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Flow
Welcome (name) → 3 intro cards → 3‑2‑1 countdown → swipe quiz (50 statements) → completion → profile chart → style detail pages.

- Swipe right / → / ✓ = **De acuerdo**; swipe left / ← / ✕ = **En desacuerdo**. Answers are blocked while paused.
- Scoring: a direct statement earns a point on "De acuerdo", a negative one on "En desacuerdo". Each quadrant shows points ÷ its questions, as a %.
- Statements are interleaved R1, A1, Y1, G1, R2… (`src/data.ts`).

## Prototype settings (URL params)
| Param | Values | Default |
|---|---|---|
| `screen` | `welcome`, `quiz`, `profile` | `welcome` |
| `colorCards` | `1` / `0` — cards use each statement's color | `0` |
| `timer` | `1` / `0` — show the stopwatch in the quiz header | `1` |

Opening `?screen=profile` without answers shows the sample scores from the design (40/60/80/60).

## Layout
On wide screens the app renders inside the 390×844 phone frame from the design. On phones (≤500px wide) it goes full screen, drops the fake status bar and notch, and respects safe-area insets.

## Structure
- `src/data.ts` — styles, question bank, scoring
- `src/state.ts` — reducer + timers (countdown, stopwatch, card exit, keyboard)
- `src/screens/` — Welcome, QuizFlow (intro/countdown/quiz/reveal/pause), Profile, Detail
- `src/ds/` — Button, Input, Badge ported from the design-system bundle
- `src/styles/` — design tokens + app styles
