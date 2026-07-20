import type { VocabularyMatchItem, WorksheetField } from "@/lib/content-types";

export function gradeWorksheetFields(
  fields: WorksheetField[],
  responses: Record<string, string>,
): { score: number; correct: boolean } {
  const correct = fields.every(
    (field) => (responses[field.id] ?? "").trim() === field.correct,
  );
  return { score: correct ? 100 : 0, correct };
}

export function gradeVocabularyMatch(
  items: VocabularyMatchItem[],
  responses: Record<string, string>,
): { score: number; ratio: number; wrongIds: string[] } {
  const wrongIds: string[] = [];
  let hits = 0;
  for (const item of items) {
    const picked = (responses[item.id] ?? "").trim();
    if (picked === item.correct_term) {
      hits += 1;
    } else {
      wrongIds.push(item.id);
    }
  }
  const ratio = items.length === 0 ? 1 : hits / items.length;
  return {
    score: Number((ratio * 100).toFixed(2)),
    ratio,
    wrongIds,
  };
}
