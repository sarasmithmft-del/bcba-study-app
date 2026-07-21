import type { MockExamDefinition, MockExamMeta } from "@/content/mockExam/mockExamTypes";
import { BCBA_MOCK_EXAM_FULL_6E } from "@/content/mockExam/exams/bcbaFull6e";
import { BCBA_MOCK_EXAM_PRACTICE2 } from "@/content/mockExam/exams/bcbaPractice2";
import { BCBA_MOCK_EXAM_PRACTICE3 } from "@/content/mockExam/exams/bcbaPractice3";
import { BCBA_MOCK_EXAM_SYNTHESIS } from "@/content/mockExam/exams/bcbaSynthesis";
import { withTcoCodes } from "@/lib/tco/assignTcoCode";

function withGranularTco(exam: MockExamDefinition): MockExamDefinition {
  return { ...exam, questions: withTcoCodes(exam.questions) };
}

export const MOCK_EXAMS: MockExamDefinition[] = [
  BCBA_MOCK_EXAM_FULL_6E,
  BCBA_MOCK_EXAM_PRACTICE2,
  BCBA_MOCK_EXAM_PRACTICE3,
  BCBA_MOCK_EXAM_SYNTHESIS,
].map(withGranularTco);

export const MOCK_EXAM_INDEX: MockExamMeta[] = MOCK_EXAMS.map(
  ({ questions: _questions, ...meta }) => meta,
);

export const MOCK_EXAM_BY_SLUG: Record<string, MockExamDefinition> = Object.fromEntries(
  MOCK_EXAMS.map((exam) => [exam.slug, exam]),
);

export function getMockExam(slug: string): MockExamDefinition | undefined {
  return MOCK_EXAM_BY_SLUG[slug];
}

export function getMockExamSlugs(): string[] {
  return MOCK_EXAMS.map((exam) => exam.slug);
}
