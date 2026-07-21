import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_34_TEST_TAKING_STRATEGY_QUIZ_BANK } from "@/content/modules/quiz/chapter34TestTakingStrategyQuizBank";

/**
 * Test-taking strategy — meta-skills for parsing BCBA multiple-choice items.
 *
 * Not TCO content — this module targets the parsing and time-budgeting
 * behaviors that convert equal content knowledge into higher scores.
 * Covers stem-parsing keywords (MOST/NEXT/EXCEPT/TRUE), negation trap,
 * absolute-language distractor pattern, vignette reading order, function-
 * matching as primary discriminator, elimination technique, per-item time
 * budget, flag-and-move discipline, and evidence-based re-review.
 */

export const MOD39_BLUEPRINT: ExtensionBlueprint = {
  id: "mod39",
  chapterNumber: 34,
  activityPrefix: 3900,
  title: "Test-Taking Strategy — Parsing BCBA Multiple-Choice Items",
  codexHeading: "READING — Test-Taking Strategy for the BCBA Exam",
  codexIntro: `Two candidates with equal content knowledge can post very different scores on the BCBA exam. The gap is almost always parsing — how you read stems, how you weight options, how you budget time across 185 items in roughly four hours. This module teaches the meta-skills that convert equal knowledge into higher scores.

Stem-parsing keywords carry the most information in the item. MOST-type stems ("Which is the MOST appropriate first step?") require you to RANK the options rather than pick any correct one — several options may be technically correct, and your job is to select the one that is best relative to the alternatives in the specific context of the stem. NEXT-type stems constrain your answer to the action that comes immediately after the described state — not the eventual long-term outcome, and not the action that has already occurred. TRUE/FALSE stems ask you to evaluate each option independently for full truth (partial-truth distractors are the most common trap). "Which is BEST" behaves like MOST — rank rather than any-correct.

Negation is a careless-error engine. When a stem includes EXCEPT or NOT ("All of the following are examples of… EXCEPT" or "Which is NOT a component of…"), the answer-selection logic is inverted — you are looking for the ONE option that does not fit rather than the one that does. Skipping over the negation on a fast read produces a guaranteed wrong answer even when your content knowledge is perfect. The anti-error strategy is to mentally circle the negation word before evaluating options, then flip the question ("I'm looking for the exception").

Absolute language ("always," "never," "must never," "is the only way," "in every case") in an option is usually a distractor cue. Behavior-analytic practice depends on context, function, and data — "always/never" claims are rare in the discipline and typically overstated in exam distractors. Weight absolutes as red flags but verify against the stem before dismissing.

Function-matching is the primary discriminator for Domain G and Domain H items. When the stem identifies or implies a function (escape, attention, tangible, automatic), the correct answer is the option whose procedure matches that function. Options that describe procedures correct for OTHER functions can be eliminated immediately. This single strategy resolves a substantial fraction of Domain G/H items in seconds. Related fast-parse strategy for Domain E (Ethics): eliminate the two clear ethics-violating options first, then pick the more direct and more protective of the remaining two — ethics answers reward directness and non-retaliation, not passivity.

Vignette items reward a specific reading order: read the stem paragraph, then the actual question (usually the last sentence of the paragraph or a separate sentence), then the options — noting the KEY WORDS (function, domain, MOST/NEXT/EXCEPT, specific behavior name) that will discriminate. Reading the options first can bias interpretation of the vignette. Reading only the last sentence risks missing the discriminator that was buried earlier in the paragraph.

Topographic look-alike distractors describe behaviors that look similar on the surface but differ by function or context. The anti-trap is to classify each option by its behavior-analytic function and definition in context, ignoring the surface jargon. Similarly, "correct-sounding wrong" distractors NAME a real principle but MODIFY its definition (add "always," drop a qualifier). Verify wording precision against the correct definition before selecting.

Time budget: approximately 4 hours ÷ 185 items ≈ 78 seconds per item on average. Practical implication: do not get stuck on any single item. If you cannot decide within ~90 seconds, flag the item, choose your best current guess, and move on — return with time remaining. Blank items score zero; best-guess yields value. On return, do NOT change on gut feeling alone; change only if you find a clear discriminator you missed the first time. Blanket answer changes lose more than they gain.

Numbers on the exam (BACB fieldwork percentages, RBT supervision ratios, specific criterion values) reflect the wording in effect for your test date. Align with your prep materials' most recent teaching of the current BACB Handbook. If two options straddle a rule change, choose the one aligned with the current Handbook wording as taught.

Priority stack:
1. Parse the stem for key words (MOST / NEXT / EXCEPT / TRUE / function / domain) BEFORE evaluating options.
2. Use function-matching + Domain-lens as the primary discriminator.
3. Eliminate obvious distractors (function-mismatched, ethics-violating, absolute-language).
4. Budget ~78 seconds per item; flag-and-move rather than get stuck.
5. Return with evidence-based re-review only — change only on clear discriminator, never on gut feeling.

This is a skill-building module. Every time you attempt a practice item — in this workbook or elsewhere — apply the priority stack explicitly. Fluency in the stack transfers under test-day pressure; ad-hoc test-taking does not.`,
  footnotes: {
    ch34_1: {
      label: "[1]",
      lines: [
        "BCBA exam format — approximately 185 items in roughly 4 hours; check current BACB Handbook for exact time + item count for your exam date.",
        "Verify at https://www.bacb.com/bcba/ before test day.",
      ],
    },
    ch34_2: {
      label: "[2]",
      lines: [
        "Stem-parsing meta-skills — widely covered in medical + credentialing exam-prep literature.",
        "Not BACB-specific; the principles transfer.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch34_1" },
    { afterSentenceIndex: 1, ref: "ch34_2" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Test-Taking Strategy recap",
    intro: "Same content knowledge can post very different scores because of parsing. Learn the priority stack.",
    chunks: [
      {
        subtitle: "The priority stack",
        segments: [
          {
            type: "text",
            text: "(1) Parse key words (MOST/NEXT/EXCEPT/TRUE, function, domain) BEFORE options. (2) Function-match + Domain-lens as primary discriminator. (3) Eliminate distractors (function-mismatched, ethics-violating, absolute language). (4) ~78 sec/item; flag-and-move. (5) Evidence-based re-review only.",
          },
        ],
      },
      {
        subtitle: "Stem keywords",
        segments: [
          {
            type: "text",
            text: "MOST/BEST = rank, not any-correct. NEXT = immediately after, not eventually. EXCEPT/NOT = invert your logic. TRUE = each option independently, watch for partial-truth distractors.",
          },
        ],
      },
      {
        subtitle: "Trap patterns",
        segments: [
          {
            type: "text",
            text: "Absolute language ('always/never') usually flags a distractor. Correct-sounding-wrong options NAME a real principle but modify its definition — verify wording. Topographic look-alikes differ by function; classify by function not surface label.",
          },
        ],
      },
      {
        subtitle: "Time discipline",
        segments: [
          {
            type: "text",
            text: "~78 sec/item average. Cannot decide in ~90 sec → flag, best-guess, move on. Return with time remaining. Change only on a clear discriminator you missed — never on gut feeling.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch34_v1: { label: "[V1]", lines: ["Stem-parsing keywords — MOST/BEST (rank), NEXT (immediately after), EXCEPT/NOT (invert), TRUE (independent-per-option)."] },
    ch34_v2: { label: "[V2]", lines: ["Absolute-language distractor pattern — 'always/never' usually flags a wrong option in ABA items."] },
    ch34_v3: { label: "[V3]", lines: ["Function-matching as primary discriminator for Domain G/H items."] },
    ch34_v4: { label: "[V4]", lines: ["Flag-and-move discipline — ~78 sec/item budget; do not get stuck."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Test-Taking Strategy",
    intro: "Meta-skill terms that recur in exam-prep coaching.",
    entries: [
      { term: "MOST / BEST stem", definition: "Requires ranking options against the stem's context — several may be correct; select the one best relative to alternatives.", footnoteRef: "ch34_v1" },
      { term: "NEXT stem", definition: "Constrains answer to the immediately-following action given the scenario's current state — not eventual outcome and not already-taken action.", footnoteRef: "ch34_v1" },
      { term: "EXCEPT / NOT stem", definition: "Inverts answer-selection logic — you are looking for the ONE option that does NOT fit. Circle the negation word before evaluating options.", footnoteRef: "ch34_v1" },
      { term: "TRUE stem", definition: "Requires evaluating each option INDEPENDENTLY for full truth; partial-truth distractors are the most common trap.", footnoteRef: "ch34_v1" },
      { term: "Absolute-language distractor", definition: "Option using 'always,' 'never,' 'must never,' 'only way' — usually a wrong-answer cue in ABA items because behavior-analytic practice is context/function/data dependent.", footnoteRef: "ch34_v2" },
      { term: "Correct-sounding wrong", definition: "Option that NAMES a real principle but MODIFIES its definition (adds 'always,' drops a qualifier) — verify wording precision against the correct definition.", footnoteRef: "ch34_v2" },
      { term: "Topographic look-alike", definition: "Distractor that describes a similar-looking behavior/procedure that differs by function or context — classify by function, not surface label.", footnoteRef: "ch34_v3" },
      { term: "Flag-and-move", definition: "Time-management strategy: if you cannot decide within ~90 seconds, flag the item, best-guess, and move on; return with time remaining.", footnoteRef: "ch34_v4" },
      { term: "Evidence-based re-review", definition: "Change a flagged answer only if you find a clear discriminator you missed the first time — never change on gut feeling alone.", footnoteRef: "ch34_v4" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Priority Stack",
    intro: "The 5-step parsing + elimination + time-budget stack.",
    concepts: [
      {
        title: "1 · Parse stem keywords first",
        segments: [
          { type: "text", text: "MOST/BEST/NEXT/EXCEPT/TRUE + function + domain — extract before evaluating any option " },
          { type: "footnote", ref: "ch34_v1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "2 · Function-matching as primary discriminator",
        segments: [
          { type: "text", text: "For Domain G/H items, function-mismatched options can be eliminated immediately " },
          { type: "footnote", ref: "ch34_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "3 · Distractor elimination",
        segments: [
          { type: "text", text: "Absolute language, correct-sounding wrong, topographic look-alike — three high-yield distractor patterns to filter out " },
          { type: "footnote", ref: "ch34_v2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "4 · Time budget · ~78 sec/item · flag-and-move",
        segments: [
          { type: "text", text: "Do not get stuck; best-guess and move on within ~90 sec; return with time remaining " },
          { type: "footnote", ref: "ch34_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "5 · Evidence-based re-review",
        segments: [
          { type: "text", text: "Change only on clear discriminator you missed — never on gut feeling; blank items score zero " },
          { type: "footnote", ref: "ch34_v4" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each stem-parsing scenario to the meta-skill it requires — keyword parsing, distractor pattern recognition, function-matching, time discipline, or evidence-based re-review.",
  matchActivityInstructions:
    "Select the parsing move that BEST addresses each test-taking scenario — recognize the keyword, eliminate the distractor pattern, apply function-matching, or manage time correctly.",
  chainActivityInstructions:
    "Sequence the 5-step priority stack for a single item — the order should narrate parsing from stem-keywords through evidence-based re-review.",
  mts: [
    {
      sample_stimulus: "Stem: 'Which is the MOST appropriate first step?' with four options that all describe technically-correct behavior-analytic actions.",
      comparison_options: [
        "Rank the four options by priority against the stem's specific context — MOST means best relative to alternatives, not any-correct",
        "Pick any correct option",
        "Pick the longest option",
        "Skip the item",
      ],
      correct_match: "Rank the four options by priority against the stem's specific context — MOST means best relative to alternatives, not any-correct",
      error_feedback: "MOST-type stems require ranking, not any-correct.",
    },
    {
      sample_stimulus: "Stem contains the word EXCEPT.",
      comparison_options: [
        "Circle EXCEPT before evaluating options; look for the ONE option that does NOT fit",
        "Ignore the word EXCEPT",
        "Always pick option B for EXCEPT items",
        "Pick the option with the most jargon",
      ],
      correct_match: "Circle EXCEPT before evaluating options; look for the ONE option that does NOT fit",
      error_feedback: "Negation words invert the answer-selection logic; missing them guarantees a wrong answer.",
    },
    {
      sample_stimulus: "Option contains the phrase 'must never be used under any circumstances.'",
      comparison_options: [
        "Weight as a distractor red flag — absolute language usually indicates a wrong option in ABA items",
        "This proves the option is correct",
        "Ignore the phrase",
        "Length is what matters",
      ],
      correct_match: "Weight as a distractor red flag — absolute language usually indicates a wrong option in ABA items",
      error_feedback: "Absolute language typically flags distractors because ABA practice is context/function/data dependent.",
    },
    {
      sample_stimulus: "Stem describes escape-maintained aggression. Options include time-out, FCT for break, edible reinforcers, and physical restraint.",
      comparison_options: [
        "Function-match: escape function → FCT for break (paired with demand fading + DRA); eliminate the other options as function-mismatched or non-least-restrictive",
        "Pick time-out because it removes the client",
        "Pick physical restraint",
        "Pick edible reinforcers because they are always powerful",
      ],
      correct_match: "Function-match: escape function → FCT for break (paired with demand fading + DRA); eliminate the other options as function-mismatched or non-least-restrictive",
      error_feedback: "Function-matching is the primary discriminator for Domain G/H items.",
    },
    {
      sample_stimulus: "You have decided between two remaining options and cannot decide.",
      comparison_options: [
        "Re-read the stem for the key discriminating word (MOST/NEXT/function/domain) that distinguishes the two options; pick the more precise match",
        "Guess randomly",
        "Pick the longer option",
        "Always change back to your original answer",
      ],
      correct_match: "Re-read the stem for the key discriminating word (MOST/NEXT/function/domain) that distinguishes the two options; pick the more precise match",
      error_feedback: "Two-option decisions usually turn on a single discriminating word in the stem.",
    },
    {
      sample_stimulus: "You are 60 seconds into an item and still cannot decide.",
      comparison_options: [
        "At ~90 seconds, flag the item, choose your best current guess, and move on — return with time remaining",
        "Stay on the item until you decide",
        "Skip the item and leave it blank",
        "Guess randomly with no flag",
      ],
      correct_match: "At ~90 seconds, flag the item, choose your best current guess, and move on — return with time remaining",
      error_feedback: "Time budget is ~78 sec/item; flag-and-move avoids getting stuck and preserves time.",
    },
    {
      sample_stimulus: "You have 25 minutes and 12 flagged items to return to.",
      comparison_options: [
        "Re-read each stem's key words; change only if you find a clear discriminator you missed — never on gut feeling",
        "Change every flagged answer",
        "Never change any flagged answer",
        "Change every third answer",
      ],
      correct_match: "Re-read each stem's key words; change only if you find a clear discriminator you missed — never on gut feeling",
      error_feedback: "Evidence-based re-review changes only on clear discriminator, not on second-guessing.",
    },
    {
      sample_stimulus: "An option names 'positive reinforcement' but states it 'always increases the immediate behavior it follows.'",
      comparison_options: [
        "Correct-sounding wrong — the option names a real principle but adds 'always' as an absolute-language modifier; check wording against the correct definition before selecting",
        "The option is correct because it names positive reinforcement",
        "The option is correct because it uses the word 'always'",
        "Length matters",
      ],
      correct_match: "Correct-sounding wrong — the option names a real principle but adds 'always' as an absolute-language modifier; check wording against the correct definition before selecting",
      error_feedback: "Correct-sounding wrong is a classic distractor pattern; verify wording precision.",
    },
  ],
  chainTitle: "5-step priority stack for a single item",
  chainFragments: [
    { id: "a", text: "Parse the stem for key words — MOST/BEST/NEXT/EXCEPT/TRUE + function + domain — BEFORE evaluating any option." },
    { id: "b", text: "Apply function-matching + Domain-lens as the primary discriminator; eliminate function-mismatched options immediately." },
    { id: "c", text: "Filter remaining options for distractor patterns — absolute language, correct-sounding wrong, topographic look-alike." },
    { id: "d", text: "Budget ~78 seconds; if not decided by ~90 seconds, flag with your best-guess and move on. Never leave blank." },
    { id: "e", text: "On return, re-review flagged items using evidence-based logic — change only if you find a clear discriminator you missed the first time." },
  ],
  chainOrder: ["a", "b", "c", "d", "e"],
  safmedTerms: [
    { front: "MOST / BEST stem", back: "Rank options, not any-correct." },
    { front: "NEXT stem", back: "Immediately after, not eventual outcome." },
    { front: "EXCEPT / NOT stem", back: "Invert — find the option that does NOT fit." },
    { front: "TRUE stem", back: "Evaluate each option independently; beware partial-truth distractors." },
    { front: "Absolute language cue", back: "'Always/never/only' usually flags a distractor." },
    { front: "Function-matching lens", back: "Primary discriminator for Domain G/H items." },
    { front: "Time budget", back: "~78 sec/item; ~90 sec then flag-and-move." },
    { front: "Evidence-based re-review", back: "Change only on clear discriminator; never on gut feeling." },
  ],
  worksheet: {
    title: "Test-Taking Strategy — priority-stack drills",
    instructions: "Apply the 5-step priority stack to each stem type. Answer every field before selecting Grade worksheet.",
    scenario: "Scenario A — Stem: 'Which is the MOST appropriate first step?' Four options all technically correct.",
    scenario_follow_up:
      "Scenario B — Stem contains EXCEPT.\n\nScenario C — Option contains 'must never under any circumstances.'\n\nScenario D — Stem describes escape function; options include time-out, FCT for break, edibles, restraint.\n\nScenario E — Two remaining options; cannot decide.\n\nScenario F — 60 seconds into an item, still undecided.\n\nScenario G — 25 minutes left, 12 flagged items to return.\n\nScenario H — Option names a real principle but adds 'always' modifier.",
    fields: [
      { id: "response_1", label: "Scenario A · Strategy?", options: ["Rank against context — MOST means best-relative-to-alternatives", "Pick any correct option", "Pick longest option"], correct: "Rank against context — MOST means best-relative-to-alternatives" },
      { id: "response_2", label: "Scenario B · Strategy?", options: ["Circle EXCEPT; find option that does NOT fit", "Ignore EXCEPT", "Always pick B"], correct: "Circle EXCEPT; find option that does NOT fit" },
      { id: "response_3", label: "Scenario C · Interpretation?", options: ["Absolute-language distractor red flag", "This proves it's correct", "Ignore the phrase"], correct: "Absolute-language distractor red flag" },
      { id: "response_4", label: "Scenario D · Fast-parse?", options: ["Function-match: escape → FCT for break; eliminate others", "Pick time-out", "Pick restraint"], correct: "Function-match: escape → FCT for break; eliminate others" },
      { id: "response_5", label: "Scenario E · Decision?", options: ["Re-read stem for key discriminating word", "Guess randomly", "Pick longer option"], correct: "Re-read stem for key discriminating word" },
      { id: "response_6", label: "Scenario F · Time discipline?", options: ["At ~90 sec, flag + best-guess + move on", "Stay until decided", "Leave blank"], correct: "At ~90 sec, flag + best-guess + move on" },
      { id: "response_7", label: "Scenario G · Return strategy?", options: ["Re-read key words; change only on clear missed discriminator", "Change every flagged answer", "Change every third answer"], correct: "Re-read key words; change only on clear missed discriminator" },
      { id: "response_8", label: "Scenario H · Trap type?", options: ["Correct-sounding wrong — verify wording precision", "Correct because names the principle", "Correct because uses 'always'"], correct: "Correct-sounding wrong — verify wording precision" },
    ],
    remediationLog:
      "Rebuild the priority stack: parse stem keywords → function-match → distractor elimination → time budget → evidence-based re-review. Apply on EVERY practice item, not just the ones you get wrong.",
  },
  bdsBank: CHAPTER_34_TEST_TAKING_STRATEGY_QUIZ_BANK,
};
