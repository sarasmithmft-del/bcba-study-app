# Chapter 4 workbook — saved progress

## What landed on disk

- **`src/content/modules/quiz/chapter04QuizBank.ts`**  
  - **`mod055-q1 … mod055-q28`**: reworked IDs from **`CHAPTER_03_WORKBOOK_QUIZ_BANK`** items that were authored as Cooper **Chapter 4** measurement items (former `mod05-q23 … mod05-q50`).  
  - **`mod055-q29 … mod055-q50`**: **22** supplementary stems so the module meets the workbook **50-question** target.

- **`src/content/modules/extensions.ts`**  
  - Extension blueprint **`mod055`** (`chapterNumber: 4`, `activityPrefix: 2055`, title **Measuring Behavior**).  
  - **`bdsBank: CHAPTER_04_WORKBOOK_QUIZ_BANK`** so the Chapter quiz tab consumes the authored bank without factory padding.  
  - **Blueprint parity** with richer modules: codex footnotes (`x4_1`–`x4_9`), supplemental vocabulary/key-concept notes, vocabulary panels, match/chain instructions, SAFMED deck, **five** matching-to-sample rows, worksheet through **`response_6`**, and **plain-language recaps** (codex + key concepts) in **Chapter 1–style paragraph blocks** with **inline CHH page locators** for the Cooper text.

- **`src/content/modules/extensionQuizExtras.ts`**  
  - No **`mod055`** entry—full **50**-item bank means the merge step stays empty for this module.

## Follow-up (optional)

1. **Seeded JSON modules** (`mod02.json`, `mod03.json`) — no `plainLanguageSummary` yet; add paragraph recaps with CHH locators if those routes stay beside **`mod055`** in the curriculum.  
2. **Generator script** (`scripts/gen-chapter04-quiz-partial.mjs`) — helpers slice at **`/** Locator bands`** in `chapter05QuizBank.ts`; optional to extend or deprecate once the TypeScript bank is the single source of truth.

## Note on overlap

**`mod05`** still contains the blended Chapters **3–4–5 excerpt** quiz; **`mod055`** isolates Cooper **Chapter 4** for progression. Duplicate learning objectives appear by design unless you later split or prune **`CHAPTER_03_WORKBOOK_QUIZ_BANK`**.
