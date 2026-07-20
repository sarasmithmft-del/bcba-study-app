# BCBA Interactive App — Architecture & Content Blueprint

Reference copy for parsers, SMEs, and authoring automation. **Implementation** lives under this repo (`aba-interactive-app`).

## Placement

- Standalone Next.js project (not bundled with other tooling).
- Canonical Desktop path (lowercase folder name recommended): `C:\Users\Euphoria\Desktop\aba` — see root `README.md` for rename notes.

## Visual system — Aspirational Minimalism

| Token | Role |
|-------|------|
| `#121212` | Primary background |
| `#E0E0E0` | Primary typography |
| Thin `rgba(224,224,224,~0.16)` borders | Panels / separation |
| `#2E7D32` | Correct / mastery accent |
| `#C62828` | Incorrect / boundary accent |

No neon; respect **`prefers-reduced-motion`** for Codex inspector animation and reduced drag transitions where `@dnd-kit` exposes transition props.

## Relational persistence (SQLite + Prisma)

- Schema: [`prisma/schema.prisma`](../prisma/schema.prisma) — `StudyAttempt` stores `moduleId`, `kind`, `reference`, optional `score`, `payload` JSON, timestamps.
- Runtime logging: server action [`src/lib/attempts.ts`](../src/lib/attempts.ts).
- Adapter: `@prisma/adapter-better-sqlite3`, DB file **`dev.db`** at project root.

## Content model

Typed unions and loaders:

- [`src/lib/content-types.ts`](../src/lib/content-types.ts)
- Modules: [`src/content/modules/mod01.json`](../src/content/modules/mod01.json), `mod02.json`, `mod03.json`
- Registry: [`src/lib/modules.ts`](../src/lib/modules.ts)

Each **study module** includes:

1. **Codex** — `segments` (`text` \| `footnote`) + `footnotes` map (CHH page lines, Task List where applicable).
2. **Activities[]** — discriminated by `game_type`:
   - `Match-to-Sample` | `Contingency-Matrix-Sorter` | `Concept-Classifier-Matrix`
   - `Behavior-Chain`
   - `SAFMEDS`
3. **Worksheet** — dropdown fields + exact-match rubric + `remediationLog`.
4. **BDS** — stem, keyed options with `correct` flag + **exploded rationales** per key.

## UI modules (routes)

| Route | Behavior |
|-------|----------|
| `/` | Module picker |
| `/module/[moduleId]` | Tabs: Codex → Activities → Worksheet → BDS |

Components under `src/components/` (`codex/`, `games/`, `worksheet/`, `bds/`, `module/`).

## Gamification rules (summary)

- **MTS**: Drag comparison onto slot; correct → emerald slot border + advance; incorrect → crimson flash + chip stays in pool (implicit revert).
- **Chain**: Sortable vertical list; validate against `correct_order`.
- **SAFMEDS**: Countdown + card cycles + self-marked correctness; logs session aggregates.

## Compliance / IP

Long verbatim textbook excerpts may require licensing review for production; keeping prose in JSON makes swaps safe without code churn.

---

*Seed modules align with blueprint Modules 01 (Ch 1), 02 (Ch 4), and 03 (Ch 14). Extend by adding `modNN.json` and registering it in `src/lib/modules.ts`.*
