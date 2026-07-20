import type { BDSQuestion } from "@/lib/content-types";

export type MockExamMeta = {
  id: string;
  slug: string;
  title: string;
  description: string;
  itemCount: number;
  timeLimitSeconds: number;
  moduleId: string;
};

export type MockExamDefinition = MockExamMeta & {
  questions: BDSQuestion[];
};
