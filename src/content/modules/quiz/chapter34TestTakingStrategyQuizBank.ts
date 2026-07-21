import type { BDSQuestion } from "@/lib/content-types";

/** Test-taking strategy — meta-skills for parsing BCBA multiple-choice items. */

function bx(
  id: string,
  stem: string,
  correctLetter: "A" | "B" | "C" | "D",
  bundle: Record<"A" | "B" | "C" | "D", { text: string; rationale: string }>,
): BDSQuestion {
  const letters = ["A", "B", "C", "D"] as const;
  return {
    id,
    stem,
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_34_TEST_TAKING_STRATEGY_QUIZ_BANK: BDSQuestion[] = [
  bx(
    "mod39-q1",
    "A stem asks: 'Which is the MOST appropriate first step?' Four options are technically correct behavior-analytic actions. What is your parsing job?",
    "B",
    {
      A: { text: "Pick any correct option — all correct answers are equivalent.", rationale: "MOST-type stems require ranking, not any-correct." },
      B: {
        text: "Rank the four options by priority against the specific context in the stem — MOST means best relative to alternatives, not merely correct.",
        rationale: "Correct — 'MOST' items always require comparative ranking of options against the stem's context.",
      },
      C: { text: "Pick the option with the longest text.", rationale: "Length is not a valid heuristic." },
      D: { text: "Skip the item.", rationale: "Skipping wastes the item; parse the stem." },
    },
  ),
  bx(
    "mod39-q2",
    "A stem says 'NEXT step' after a described action has already occurred. What does this signal about your answer selection?",
    "C",
    {
      A: { text: "You may pick the action that already occurred.", rationale: "'NEXT' excludes actions that already happened.", },
      B: { text: "You may pick the final long-term outcome.", rationale: "'NEXT' means immediately next, not eventually.", },
      C: {
        text: "Pick the action that comes IMMEDIATELY AFTER the described step — not the eventual long-term outcome, not the already-taken action.",
        rationale: "Correct — 'NEXT' constrains to the immediately-following action given the scenario's current state.",
      },
      D: { text: "'NEXT' has no meaning.", rationale: "'NEXT' is a parsing signal.", },
    },
  ),
  bx(
    "mod39-q3",
    "A stem includes the word EXCEPT or NOT. What is the highest-yield anti-error strategy?",
    "A",
    {
      A: {
        text: "Mentally circle EXCEPT/NOT before evaluating options, then flip the question — you're looking for the ONE option that does NOT fit, or the ONE option that IS the exception. Missing negation is one of the most common careless-error sources.",
        rationale: "Correct — negation words invert the answer-selection logic and are easy to skip on a fast read.",
      },
      B: { text: "Ignore the negation.", rationale: "Ignoring negation guarantees the wrong answer.", },
      C: { text: "Pick the option with the most technical terms.", rationale: "Not a valid heuristic.", },
      D: { text: "Always pick B for EXCEPT items.", rationale: "Not a valid heuristic.", },
    },
  ),
  bx(
    "mod39-q4",
    "An option contains absolute language ('always,' 'never,' 'must never,' 'is the only way'). What does this typically signal?",
    "D",
    {
      A: { text: "It is more likely to be correct.", rationale: "Absolutes usually flag distractors in ABA items.", },
      B: { text: "It has nothing to do with correctness.", rationale: "Absolutes are a discriminative cue.", },
      C: { text: "Absolute language is required in correct answers.", rationale: "Correct ABA answers usually allow qualified conditions.", },
      D: {
        text: "Absolute language often flags a distractor because behavior-analytic practice usually depends on context, function, and data — 'always/never' claims are rare and typically overstated. Verify against the stem before dismissing, but weight absolutes as red flags.",
        rationale: "Correct — absolute language is a common distractor pattern in ABA multiple-choice; correct answers tend to be qualified/contextualized.",
      },
    },
  ),
  bx(
    "mod39-q5",
    "The BCBA exam is approximately 185 items in ~4 hours. What is your per-item time budget and what does that budget imply?",
    "B",
    {
      A: { text: "About 30 seconds per item.", rationale: "Underestimates per-item time.", },
      B: {
        text: "Roughly 75–80 seconds per item on average — implying you should NOT get stuck on a single item, and you should flag and move on if you cannot decide within ~90 seconds, then return with time remaining.",
        rationale: "Correct — approximately 4 hours ÷ 185 items ≈ 78 sec/item; the strategic implication is flag-and-move, don't-get-stuck.",
      },
      C: { text: "About 5 minutes per item.", rationale: "Overestimates per-item time.", },
      D: { text: "The exam has no time limit.", rationale: "The BCBA exam is time-limited.", },
    },
  ),
  bx(
    "mod39-q6",
    "You've narrowed a stem to two remaining options and cannot decide between them. What is the BEST elimination strategy?",
    "C",
    {
      A: { text: "Guess randomly.", rationale: "Elimination has already narrowed; don't waste it with random pick.", },
      B: { text: "Change back to your original answer regardless.", rationale: "Not evidence-based; sometimes right, sometimes wrong.", },
      C: {
        text: "Re-read the stem for the KEY DISCRIMINATING WORD (MOST/NEXT/EXCEPT/function-word/domain-word) that distinguishes the two options; pick the option whose text more precisely matches that key word.",
        rationale: "Correct — the two-option decision usually turns on a single discriminating word in the stem.",
      },
      D: { text: "Pick the longer option.", rationale: "Length is not a reliable cue.", },
    },
  ),
  bx(
    "mod39-q7",
    "A stem describes a clear FBA hypothesis (function = escape). The options include one correct function-matched procedure and three procedures that would work for other functions. What is the highest-yield fast-parse strategy?",
    "A",
    {
      A: {
        text: "Identify the function in the stem first ('escape'), then scan options for the SINGLE function-matched procedure and eliminate function-mismatched options immediately.",
        rationale: "Correct — function-matched selection is the fast-parse strategy for Domain G/H items.",
      },
      B: { text: "Pick the option with the most technical vocabulary.", rationale: "Vocabulary density is not a discriminator.", },
      C: { text: "Pick randomly.", rationale: "Function is a clear discriminator; don't ignore it.", },
      D: { text: "Pick the longest option.", rationale: "Length not a discriminator.", },
    },
  ),
  bx(
    "mod39-q8",
    "A stem asks 'Which is TRUE about X?' and lists four statements. What is the parsing strategy?",
    "B",
    {
      A: { text: "Pick the first statement that seems true and move on.", rationale: "First-plausible bias is a common error; evaluate all four.", },
      B: {
        text: "Evaluate EACH of the four statements independently for truth against your knowledge of X; select the one that is fully true (not partially true). Partial-truth distractors are the most common TRUE/FALSE trap.",
        rationale: "Correct — TRUE/FALSE items often have partial-truth distractors; only the fully-true option is correct.",
      },
      C: { text: "Pick the option with 'always' in it.", rationale: "Absolute-language cue often flags distractors.", },
      D: { text: "Pick the shortest option.", rationale: "Length not a discriminator.", },
    },
  ),
  bx(
    "mod39-q9",
    "You encounter a vignette-style item with a paragraph of context followed by four options. What is the BEST reading strategy?",
    "C",
    {
      A: { text: "Skim only the last sentence of the paragraph.", rationale: "Vignettes often bury the discriminator earlier in the paragraph.", },
      B: { text: "Read all four options first, then read the stem.", rationale: "You may bias yourself before knowing the context.", },
      C: {
        text: "Read the stem paragraph, then the actual question (usually the last sentence of the paragraph or a separate sentence), then the options — noting the KEY WORDS (function, domain, MOST/NEXT/EXCEPT, specific behavior) that will discriminate.",
        rationale: "Correct — vignette items reward stem → question → key-words → options ordering.",
      },
      D: { text: "Skip vignette items entirely.", rationale: "Vignettes are common on BCBA; you can't skip them.", },
    },
  ),
  bx(
    "mod39-q10",
    "Options contain topographically-similar behaviors described with different jargon. Which strategy applies?",
    "A",
    {
      A: {
        text: "Ignore the jargon labels; classify each option by its behavior-analytic FUNCTION and DEFINITION in context — the correct answer is usually the option whose functional properties (not surface labels) match the stem.",
        rationale: "Correct — surface labels are common distractor cues; function-and-definition matching is the discriminator.",
      },
      B: { text: "Pick the option with the most Latin roots.", rationale: "Etymology is not a discriminator.", },
      C: { text: "Pick the option that uses simpler words.", rationale: "Simplicity is not a discriminator.", },
      D: { text: "Pick randomly.", rationale: "Function is discriminative; use it.", },
    },
  ),
  bx(
    "mod39-q11",
    "You've flagged 12 items and returned with 25 minutes left. What is the highest-yield return strategy?",
    "B",
    {
      A: { text: "Change every flagged answer.", rationale: "Blanket changes lose more than they gain.", },
      B: {
        text: "For each flagged item, re-read the stem key words (MOST/NEXT/EXCEPT, function, domain), verify your first answer still parses those key words correctly, and only change if you find a clear discriminator you missed the first time — DO NOT change on gut feeling alone.",
        rationale: "Correct — evidence-based re-review changes only on clear discriminator, not on second-guessing.",
      },
      C: { text: "Never change an answer.", rationale: "Sometimes an error is clearly visible on re-read; do change then.", },
      D: { text: "Change every third answer.", rationale: "No basis in evidence.", },
    },
  ),
  bx(
    "mod39-q12",
    "An option offers a well-known ABA principle stated in slightly-off wording (e.g., 'reinforcement always increases the future frequency of the behavior it immediately follows'). What is the risk?",
    "D",
    {
      A: { text: "No risk — the option is correct because it uses the principle name.", rationale: "Correct-sounding wrong is the classic exam trap.", },
      B: { text: "The option is always correct if it names the right principle.", rationale: "Wording precision matters.", },
      C: { text: "Naming the principle guarantees correctness.", rationale: "Naming ≠ correct definition.", },
      D: {
        text: "Correct-sounding wrong — the option NAMES a real principle but MODIFIES its definition (e.g., adds 'always' or drops a qualifier). Check the exact wording against the correct definition before selecting.",
        rationale: "Correct — 'sounds familiar' is a common wrong-answer trap; verify wording precision.",
      },
    },
  ),
  bx(
    "mod39-q13",
    "The exam has an item on BACB fieldwork hours with a specific number (e.g., '5% of hours'). Widely-taught BACB numbers occasionally update. What is your best strategy?",
    "C",
    {
      A: { text: "Pick the option with the most-recently-updated number you happen to remember.", rationale: "Memory of updates is unreliable during the exam.", },
      B: { text: "Skip the item.", rationale: "Best-guess still yields value.", },
      C: {
        text: "Pick the option that reflects the widely-taught BACB approximation for your exam prep window — the exam uses the number in effect for your test date. If two options straddle a rule change, choose the one aligned with the current Handbook wording as taught in your prep materials.",
        rationale: "Correct — the exam uses current-Handbook wording; align with your prep materials' most recent teaching.",
      },
      D: { text: "The exam never uses specific numbers.", rationale: "BACB numbers do appear on the exam.", },
    },
  ),
  bx(
    "mod39-q14",
    "A stem describes a clear ethical situation involving a multiple relationship. Two options are ethics-aligned actions and two are ethics-violating actions. What is the fast-parse strategy?",
    "A",
    {
      A: {
        text: "Immediately eliminate the two ethics-violating options; between the two remaining ethics-aligned options, pick the one that is MOST direct and MOST protective of the client/supervisee — Domain E answers reward directness and non-retaliation.",
        rationale: "Correct — ethics items reward immediate elimination of clear violations, then selecting the most direct protective action.",
      },
      B: { text: "Pick the option that avoids taking action.", rationale: "Non-action is often the WRONG answer for ethics items.", },
      C: { text: "Pick the option requiring the most paperwork.", rationale: "Paperwork is not a discriminator.", },
      D: { text: "Pick randomly.", rationale: "Ethics options are discriminable; use elimination.", },
    },
  ),
  bx(
    "mod39-q15",
    "Your final overall test-taking priority order should be:",
    "B",
    {
      A: { text: "Speed first, accuracy second.", rationale: "Speed alone loses points on parsing errors.", },
      B: {
        text: "(1) Parse the stem for key words (MOST/NEXT/EXCEPT/function/domain) before options. (2) Use function-matching + Domain-lens as the primary discriminator. (3) Eliminate obvious distractors (function-mismatched, ethics-violating, absolute-language). (4) Budget ~78 sec/item; flag-and-move rather than get stuck. (5) Return with evidence-based re-review only.",
        rationale: "Correct — the 5-step strategy layers parsing, function-matching, elimination, time budget, and evidence-based review.",
      },
      C: { text: "Randomly guess to save time.", rationale: "Random guessing wastes the item.", },
      D: { text: "Skip everything you're unsure about.", rationale: "Blank items score zero; best-guess yields value.", },
    },
  ),
];
