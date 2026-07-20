/**
 * Mock Exam 2 — Advanced BCBA Simulation (185 items · TCO A–I).
 * Independent study only—not affiliated with the BACB.
 */
import type { BDSQuestion } from "@/lib/content-types";
import { BCBA_MOCK_EXAM_EXPECTED_ITEMS } from "@/content/mockExam/mockExamExpectedCount";
import { mockExamTimeLimitSeconds } from "@/content/mockExam/mockExamTime";
import type { MockExamDefinition } from "@/content/mockExam/mockExamTypes";
import { BCBA_MOCK_EXAM_PRACTICE2_CORE } from "@/content/mockExam/exams/bcbaPractice2/core";
import { BCBA_MOCK_EXAM_PRACTICE2_EXPANDED_BANK } from "@/content/mockExam/exams/bcbaPractice2/expanded";

export const BCBA_MOCK_EXAM_PRACTICE2_TITLE =
  "Mock Exam 2 — Advanced BCBA Simulation (185 items · TCO A–I)";

export const BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS: BDSQuestion[] = [
  ...BCBA_MOCK_EXAM_PRACTICE2_CORE,
  ...BCBA_MOCK_EXAM_PRACTICE2_EXPANDED_BANK,
];

const totalItems =
  BCBA_MOCK_EXAM_PRACTICE2_CORE.length + BCBA_MOCK_EXAM_PRACTICE2_EXPANDED_BANK.length;
if (totalItems !== BCBA_MOCK_EXAM_EXPECTED_ITEMS) {
  throw new Error(
    `[mock exam 2] Combined count ${totalItems} (${BCBA_MOCK_EXAM_PRACTICE2_CORE.length} core + ${BCBA_MOCK_EXAM_PRACTICE2_EXPANDED_BANK.length} expanded) !== ${BCBA_MOCK_EXAM_EXPECTED_ITEMS}.`,
  );
}

export const BCBA_MOCK_EXAM_PRACTICE2: MockExamDefinition = {
  id: "bcba-practice-2",
  slug: "bcba-practice-2",
  title: BCBA_MOCK_EXAM_PRACTICE2_TITLE,
  description:
    "Second full-length simulation with harder vignettes, ethics-heavy scenarios, and tighter distractors. Same 185-item / 4-hour format as the real BCBA exam.",
  itemCount: BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS.length,
  timeLimitSeconds: mockExamTimeLimitSeconds(BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS.length),
  moduleId: "mock-exam-bcba-practice-2",
  questions: BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS,
};
