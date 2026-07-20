This folder mirrors the conversational BCBA blueprint: Codex narration, discriminative rehearsal JSON, rubric-bound worksheets, and exploded BDS feedback.

Keep the whole app in **`C:\Users\Euphoria\Desktop\aba`** (see root `README.md` if you still need to rename from `ABA`).  

Full architecture outline: [`docs/BCBA_Interactive_App_Architecture_and_Content_Blueprint.md`](./BCBA_Interactive_App_Architecture_and_Content_Blueprint.md).

Authoring guideline: duplicate lesson copy into `src/content/modules/*.json` using the existing schema so parsers or LLMs can extend modules without refactoring React surfaces.