/**
 * Cross-Chapter Synthesis Set (25 items).
 * Independent study only—not affiliated with the BACB.
 */
import { BCBA_SYNTHESIS_BANK } from "@/content/mockExam/exams/bcbaSynthesis/bank";
import { mockExamTimeLimitSeconds } from "@/content/mockExam/mockExamTime";
import type { MockExamDefinition } from "@/content/mockExam/mockExamTypes";

export { BCBA_SYNTHESIS_BANK };

export const BCBA_MOCK_EXAM_SYNTHESIS: MockExamDefinition = {
  id: "bcba-synthesis",
  slug: "bcba-synthesis",
  title: "Cross-Chapter Synthesis Set (25 items)",
  description:
    "Short integration drill spanning measurement, FBA, procedures, ethics, and supervision in single vignettes. Not a full 185-item simulation.",
  itemCount: 25,
  timeLimitSeconds: mockExamTimeLimitSeconds(25),
  moduleId: "mock-exam-bcba-synthesis",
  questions: BCBA_SYNTHESIS_BANK,
};
