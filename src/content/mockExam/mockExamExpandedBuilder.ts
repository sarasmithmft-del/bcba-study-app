import type { BDSQuestion } from "@/lib/content-types";
import { mockQ } from "@/content/mockExam/mockExamQuestionFactory";

type Dom = NonNullable<BDSQuestion["tcoDomain"]>;

export type MockExamExpandedConfig = {
  idPrefix: string;
  startNumber: number;
  count: number;
  domains: readonly Dom[];
  issues: readonly string[];
  bestLines: Record<Dom, readonly string[]>;
  distract: Record<Dom, readonly string[]>;
  stemTemplate?: (itemNumber: number, domain: Dom, issue: string) => string;
};

const DEFAULT_STEM = (itemNumber: number, domain: Dom, issue: string) =>
  `[Item ${String(itemNumber).padStart(3, "0")} · TCO ${domain}] ${issue} MOST defensible next step?`;

export function buildMockExamExpandedBank(config: MockExamExpandedConfig): BDSQuestion[] {
  const {
    idPrefix,
    startNumber,
    count,
    domains,
    issues,
    bestLines,
    distract,
    stemTemplate = DEFAULT_STEM,
  } = config;

  const out: BDSQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const dom = domains[i % domains.length]!;
    const issue = issues[i % issues.length]!;
    const itemNumber = startNumber + i;
    const stem = stemTemplate(itemNumber, dom, issue);
    const bestPool = bestLines[dom];
    const best = bestPool[i % bestPool.length]!;
    const dpool = distract[dom];
    const w1 = dpool[(i * 3) % dpool.length]!;
    const w2 = dpool[(i * 5 + 1) % dpool.length]!;
    const w3 = dpool[(i * 7 + 2) % dpool.length]!;

    out.push(
      mockQ(`${idPrefix}-${String(itemNumber).padStart(3, "0")}`, dom, stem, [
        {
          text: best,
          correct: true,
          rationale: `Best aligns with TCO ${dom} priorities—verify measurement, ethics, and analytic logic before selecting.`,
        },
        {
          text: w1,
          correct: false,
          rationale: "Plausible foil that misroutes scope, fidelity, or reporting obligations.",
        },
        {
          text: w2,
          correct: false,
          rationale: "Overclaims certainty or skips documented contingency/modality stakes.",
        },
        {
          text: w3,
          correct: false,
          rationale: "Common exam trap—re-read stem for FIRST/MOST/LEAST and ethics constraints.",
        },
      ]),
    );
  }
  return out;
}
