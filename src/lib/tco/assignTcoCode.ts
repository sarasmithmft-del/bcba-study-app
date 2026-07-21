import type { BDSQuestion } from "@/lib/content-types";
import {
  TCO_DOMAIN_DEFAULT_CODE,
  TCO_TASKS,
  TCO_TASK_BY_CODE,
  type TcoDomain,
  type TcoTask,
} from "@/lib/tco/tcoTaskCatalog";

function haystackFor(question: BDSQuestion): string {
  const optionText = question.options.map((option) => `${option.text} ${option.rationale}`).join(" ");
  return `${question.stem}\n${optionText}`.toLowerCase();
}

function scoreTask(haystack: string, task: TcoTask): number {
  let score = 0;
  for (const raw of task.keywords) {
    const keyword = raw.toLowerCase();
    if (!keyword) continue;
    if (keyword.includes(".*")) {
      try {
        if (new RegExp(keyword, "i").test(haystack)) score += 3;
      } catch {
        /* ignore bad patterns */
      }
      continue;
    }
    if (haystack.includes(keyword)) {
      // Longer phrases get a slight boost (more specific).
      score += keyword.length >= 18 ? 3 : keyword.length >= 10 ? 2 : 1;
    }
  }
  return score;
}

/**
 * Pick the best TCO task code for a question.
 * Prefers `preferredDomain` / `question.tcoDomain` candidates; falls back across all tasks.
 */
export function inferTcoCode(
  question: BDSQuestion,
  preferredDomain?: TcoDomain,
): string {
  if (question.tcoCode && TCO_TASK_BY_CODE[question.tcoCode]) {
    return question.tcoCode;
  }

  const domain = preferredDomain ?? question.tcoDomain;
  const haystack = haystackFor(question);
  const pool = domain ? TCO_TASKS.filter((task) => task.domain === domain) : TCO_TASKS;

  let best: TcoTask | undefined;
  let bestScore = -1;
  for (const task of pool) {
    const score = scoreTask(haystack, task);
    if (score > bestScore) {
      bestScore = score;
      best = task;
    }
  }

  if (best && bestScore > 0) return best.code;

  if (domain) return TCO_DOMAIN_DEFAULT_CODE[domain];

  // No domain hint: try global best, else B-4 as a neutral concepts default.
  let globalBest: TcoTask | undefined;
  let globalScore = -1;
  for (const task of TCO_TASKS) {
    const score = scoreTask(haystack, task);
    if (score > globalScore) {
      globalScore = score;
      globalBest = task;
    }
  }
  return globalBest && globalScore > 0 ? globalBest.code : "B-4";
}

/** Attach `tcoCode` (and domain from the code when missing). Does not overwrite a valid existing code. */
export function ensureTcoCode(
  question: BDSQuestion,
  preferredDomain?: TcoDomain,
): BDSQuestion {
  const code = inferTcoCode(question, preferredDomain);
  const task = TCO_TASK_BY_CODE[code];
  const tcoDomain = question.tcoDomain ?? task?.domain ?? preferredDomain;
  if (question.tcoCode === code && question.tcoDomain === tcoDomain) return question;
  return { ...question, tcoCode: code, ...(tcoDomain ? { tcoDomain } : {}) };
}

export function withTcoCodes(
  questions: BDSQuestion[],
  preferredDomain?: TcoDomain,
): BDSQuestion[] {
  return questions.map((question) => ensureTcoCode(question, preferredDomain));
}
