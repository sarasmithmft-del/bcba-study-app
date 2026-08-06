import type { StudyModule } from "@/lib/content-types";
import { buildVocabQuizBank } from "@/content/modules/buildVocabQuizBank";

/** Attach a vocabulary quiz bank built from each module's vocabularySection. */
export function ensureVocabQuiz(module: StudyModule): StudyModule {
  if (module.vocabQuizBank && module.vocabQuizBank.length > 0) {
    return module;
  }
  const bank = buildVocabQuizBank(
    module.chapterNumber,
    module.id,
    module.vocabularySection?.entries,
  );
  if (bank.length === 0) return module;
  return { ...module, vocabQuizBank: bank };
}
