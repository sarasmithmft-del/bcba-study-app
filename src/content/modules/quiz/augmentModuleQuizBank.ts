import type { StudyModule } from "@/lib/content-types";
import { compactToBDS } from "./compactQuiz";
import { FACTORIES } from "./quizFactories";

/** Chapter quiz tab merges authored banks then fills deterministically to this count */
export const QUIZ_ITEMS_TARGET = 50;

export function augmentModuleQuizBank(mod: StudyModule): StudyModule {
  const primary = mod.bdsBank ?? (mod.bds ? [mod.bds] : []);
  const trimmed = primary.slice(0, QUIZ_ITEMS_TARGET);
  if (trimmed.length >= QUIZ_ITEMS_TARGET) {
    return { ...mod, bdsBank: trimmed, bds: undefined };
  }

  const factory = FACTORIES[mod.id];
  if (!factory) {
    return { ...mod, bdsBank: trimmed, bds: undefined };
  }

  const tail: typeof trimmed = [];
  let nextNum = trimmed.length + 1;
  const ch = mod.cooperChapterNumber ?? mod.chapterNumber;
  while (trimmed.length + tail.length < QUIZ_ITEMS_TARGET) {
    const row = factory(nextNum, ch, mod.title);
    tail.push(compactToBDS(mod.id, nextNum, ch, mod.title, row));
    nextNum += 1;
  }

  return { ...mod, bdsBank: [...trimmed, ...tail], bds: undefined };
}
