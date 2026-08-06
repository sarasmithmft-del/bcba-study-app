import type { StudyModule } from "@/lib/content-types";

import mod01 from "@/content/modules/mod01.json";
import mod03 from "@/content/modules/mod03.json";
import { alignStudyModuleToCooperChapter } from "@/content/cooperChapterAlign";
import { EXTENSION_MODULES } from "@/content/modules/extensions";
import { enrichModuleWithCooperMeta } from "@/content/cooperCatalog";
import { augmentModuleQuizBank } from "@/content/modules/quiz/augmentModuleQuizBank";
import { deepenStudyModule } from "@/content/modules/activityWorksheetDepth";
import { ensureSafmeds } from "@/content/modules/ensureSafmeds";
import { ensureVocabQuiz } from "@/content/modules/ensureVocabQuiz";
import { assignPrimaryTcoDomain } from "@/content/modules/moduleTcoDomain";

const RAW = ([mod01, mod03, ...EXTENSION_MODULES] as StudyModule[])
  .map((module) => alignStudyModuleToCooperChapter(module, module.chapterNumber))
  .map(enrichModuleWithCooperMeta)
  .sort(
    (first, second) =>
      first.chapterNumber - second.chapterNumber || first.id.localeCompare(second.id),
  )
  .map(deepenStudyModule)
  .map(augmentModuleQuizBank)
  .map(ensureSafmeds)
  .map(ensureVocabQuiz)
  .map(assignPrimaryTcoDomain);

export const MODULE_BY_ID: Record<string, StudyModule> = Object.fromEntries(
  RAW.map((m) => [m.id, m]),
);

export const MODULE_INDEX = RAW.filter((m) => m.includeInChapterIndex !== false).map((m) => ({
  id: m.id,
  chapterNumber: m.chapterNumber,
  title: m.title,
}));

export function getModule(id: string): StudyModule | undefined {
  return MODULE_BY_ID[id];
}
