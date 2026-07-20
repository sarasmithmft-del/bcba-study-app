import type { StudyModule } from "@/lib/content-types";
import { getCooperChapterMeta, MODULE_COOPER_CHAPTER } from "@/content/cooperCatalog";

/** Optional display titles aligned with Cooper 3e chapter headings. */
export const MODULE_COOPER_TITLE: Record<string, string> = {
  mod01: "Definition and Characteristics of Applied Behavior Analysis",
  mod11: "Constructing and Interpreting Graphic Displays of Behavioral Data",
  mod10: "Analyzing Behavior Change: Basic Assumptions and Strategies",
  mod12: "Reversal and Multielement Designs",
  mod13: "Multiple Baseline and Changing Criterion Designs",
  mod16: "Planning and Evaluating Applied Behavior Analysis Research",
  mod02: "Positive Reinforcement",
};

export function resolveModuleCooperChapter(moduleId: string, blueprintChapter: number): number {
  return MODULE_COOPER_CHAPTER[moduleId] ?? blueprintChapter;
}

export function rewriteChapterReferences(
  value: unknown,
  legacyChapter: number,
  cooperChapter: number,
): unknown {
  if (legacyChapter === cooperChapter) return value;

  if (typeof value === "string") {
    return value
      .replace(new RegExp(`Chapter ${legacyChapter}(?!\\d)`, "g"), `Chapter ${cooperChapter}`)
      .replace(new RegExp(`CHH Chapter ${legacyChapter}(?!\\d)`, "g"), `CHH Chapter ${cooperChapter}`)
      .replace(new RegExp(`Chapters ${legacyChapter}(?!\\d)`, "g"), `Chapters ${cooperChapter}`);
  }

  if (Array.isArray(value)) {
    return value.map((item) => rewriteChapterReferences(item, legacyChapter, cooperChapter));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [
        key,
        rewriteChapterReferences(nested, legacyChapter, cooperChapter),
      ]),
    );
  }

  return value;
}

export function alignStudyModuleToCooperChapter(
  module: StudyModule,
  legacyChapter: number,
): StudyModule {
  const cooperChapter = resolveModuleCooperChapter(module.id, legacyChapter);
  const cooperTitle = MODULE_COOPER_TITLE[module.id] ?? getCooperChapterMeta(cooperChapter).title;

  if (legacyChapter === cooperChapter) {
    return {
      ...module,
      chapterNumber: cooperChapter,
      title: MODULE_COOPER_TITLE[module.id] ?? module.title,
    };
  }

  const aligned = rewriteChapterReferences(
    structuredClone(module),
    legacyChapter,
    cooperChapter,
  ) as StudyModule;

  return {
    ...aligned,
    chapterNumber: cooperChapter,
    title: cooperTitle,
  };
}
