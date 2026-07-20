import { getModule } from "./src/lib/modules.ts";

const m = getModule("mod31");
const ids = m.bdsBank?.map((q) => q.id) ?? [];
console.log(
  JSON.stringify(
    {
      chapter: m.chapterNumber,
      title: m.title,
      quizLen: m.bdsBank?.length,
      heading: m.codex?.heading,
      hasQ2: ids.includes("mod31-q2"),
      hasQ3: ids.includes("mod31-q3"),
    },
    null,
    2,
  ),
);
