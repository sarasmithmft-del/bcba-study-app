/**
 * Mock Exam 1 — Full BCBA Simulation (185 items · TCO A–I).
 */
import {
  BCBA_MOCK_EXAM_QUESTIONS,
  BCBA_MOCK_EXAM_TITLE,
} from "@/content/mockExam/bcbaMockExam6e";
import { mockExamTimeLimitSeconds } from "@/content/mockExam/mockExamTime";
import type { MockExamDefinition } from "@/content/mockExam/mockExamTypes";

export const BCBA_MOCK_EXAM_FULL_6E: MockExamDefinition = {
  id: "bcba-full-6e",
  slug: "bcba-full-6e",
  title: BCBA_MOCK_EXAM_TITLE,
  description:
    "Full-length 185-item simulation aligned to sixth-edition TCO domains A–I. Mix of authored scenarios and applied vignettes across foundations, concepts, measurement, experimental design, ethics, assessment, behavior-change procedures, intervention selection/implementation, and personnel supervision.",
  itemCount: BCBA_MOCK_EXAM_QUESTIONS.length,
  timeLimitSeconds: mockExamTimeLimitSeconds(BCBA_MOCK_EXAM_QUESTIONS.length),
  moduleId: "mock-exam-bcba-full-6e",
  questions: BCBA_MOCK_EXAM_QUESTIONS,
};
