import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_36_ASSESSMENT_TOOLS_QUIZ_BANK } from "@/content/modules/quiz/chapter36AssessmentToolsQuizBank";

/**
 * Assessment Tools Compendium — VB-MAPP, ABLLS-R, AFLS, PEAK, VABS.
 *
 * Not a Cooper chapter — supplements Domain F skill-assessment content. Maps
 * each tool to its typical age/skill range, criterion- vs. norm-referenced
 * category, primary use case, and pitfalls in interpretation.
 */

export const MOD41_BLUEPRINT: ExtensionBlueprint = {
  id: "mod41",
  chapterNumber: 36,
  activityPrefix: 4100,
  title: "Assessment Tools Compendium — VB-MAPP, ABLLS-R, AFLS, PEAK, VABS",
  codexHeading: "READING — Skill Assessment Tools (extends Domain F)",
  codexIntro: `Cooper covers assessment principles but does not walk through the specific instruments most BCBAs use on the job. This module maps the five that come up most often — VB-MAPP, ABLLS-R, AFLS, PEAK, and VABS — to their primary use cases, referenced-type (criterion vs. norm), and pitfalls.

Criterion-referenced vs. norm-referenced is the anchoring distinction. CRITERION-REFERENCED tools compare the learner's performance to a defined mastery criterion — "has this learner met this skill?" — and drive direct programming. NORM-REFERENCED tools compare the learner's performance to a standardization sample — "how does this learner compare to the norming population?" — and drive eligibility determinations and progress benchmarking. Treating a criterion-referenced raw score as if it were a norm-referenced standardized score is a common misinterpretation.

VB-MAPP (Verbal Behavior Milestones Assessment and Placement Program; Sundberg) is a criterion-referenced early verbal behavior + early learner assessment based on Skinner's analysis of verbal behavior. Its five components — Milestones, Barriers, Transitions, Task Analysis, and Placement — cover skill acquisition, obstacles to acquisition, readiness for less-restrictive settings, granular skill breakdown, and program placement. Typical use is roughly 0–48 months developmental range for early intervention programming.

ABLLS-R (Assessment of Basic Language and Learning Skills–Revised; Partington) is a criterion-referenced skills assessment + curriculum guide covering a broader matrix of language, academic, self-help, and motor skills than VB-MAPP. It is well-suited for learners a bit older than the VB-MAPP's typical range or when a broader skill matrix is needed.

AFLS (Assessment of Functional Living Skills; Partington & Mueller) is a criterion-referenced functional-living-skills assessment covering six protocols: Basic Living, Home, Community, School, Vocational, and Independent Living. Its primary use case is adolescents through adults preparing for supported employment, independent living, or life-skills programming.

PEAK (Relational Training System; Dixon) is a criterion-referenced curriculum + assessment system that integrates verbal behavior with derived relational responding (RFT). Its Direct, Generalization, Equivalence, and Transformation modules program straightforward VB skills through emergent untrained relations (learning A=B and B=C yielding derived A=C without direct training) and transformation of stimulus function.

VABS (Vineland Adaptive Behavior Scales) is a NORM-referenced adaptive-behavior scale that reports standardized scores across Communication, Daily Living Skills, Socialization, and Motor domains compared to a normative sample. It is the industry-standard tool for eligibility determinations and adaptive-behavior progress benchmarking.

Best-practice assessment strategy is typically multi-instrument: a criterion-referenced tool matched to age + goals for direct skill programming (VB-MAPP / ABLLS-R / AFLS / PEAK), a norm-referenced tool for eligibility and progress benchmarking (VABS), and an FBA when problem behavior is present.`,
  footnotes: {
    ch36_1: { label: "[1]", lines: ["VB-MAPP — Sundberg, M. L. (2014). Verbal Behavior Milestones Assessment and Placement Program (2nd ed.). Concord, CA: AVB Press."], },
    ch36_2: { label: "[2]", lines: ["ABLLS-R — Partington, J. W. (2006). The Assessment of Basic Language and Learning Skills—Revised. Pleasant Hill, CA: Behavior Analysts, Inc."], },
    ch36_3: { label: "[3]", lines: ["AFLS — Partington, J. W., & Mueller, M. M. (2012). The Assessment of Functional Living Skills. Pleasant Hill, CA: Behavior Analysts, Inc."], },
    ch36_4: { label: "[4]", lines: ["PEAK — Dixon, M. R. (2014). PEAK Relational Training System. Carbondale, IL: Shawnee Scientific Press."], },
    ch36_5: { label: "[5]", lines: ["VABS-3 — Sparrow, S. S., Cicchetti, D. V., & Saulnier, C. A. (2016). Vineland Adaptive Behavior Scales (3rd ed.). Bloomington, MN: Pearson."], },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch36_1" },
    { afterSentenceIndex: 1, ref: "ch36_1" },
    { afterSentenceIndex: 2, ref: "ch36_1" },
    { afterSentenceIndex: 3, ref: "ch36_2" },
    { afterSentenceIndex: 4, ref: "ch36_3" },
    { afterSentenceIndex: 5, ref: "ch36_4" },
    { afterSentenceIndex: 6, ref: "ch36_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Assessment Tools recap",
    intro: "Five common tools mapped to age, skill, and primary use case.",
    chunks: [
      {
        subtitle: "Criterion vs. norm-referenced",
        segments: [{ type: "text", text: "Criterion = mastered vs. not mastered (drives programming). Norm = compared to peers (drives eligibility)." }],
      },
      { subtitle: "VB-MAPP", segments: [{ type: "text", text: "Criterion. Early VB + early learner (~0–48 months). Milestones/Barriers/Transitions/Task Analysis/Placement." }] },
      { subtitle: "ABLLS-R", segments: [{ type: "text", text: "Criterion. Broader younger-learner curriculum matrix." }] },
      { subtitle: "AFLS", segments: [{ type: "text", text: "Criterion. Functional living skills for adolescents/adults (6 protocols)." }] },
      { subtitle: "PEAK", segments: [{ type: "text", text: "Criterion. VB + derived relations (RFT). Direct / Generalization / Equivalence / Transformation modules." }] },
      { subtitle: "VABS", segments: [{ type: "text", text: "NORM-referenced adaptive-behavior scale. Standardized scores for eligibility + progress benchmarking." }] },
      { subtitle: "Best practice", segments: [{ type: "text", text: "Multi-instrument: criterion-referenced (age-matched) for programming + VABS for eligibility + FBA when problem behavior present." }] },
    ],
  },
  supplementalFootnotes: {
    ch36_v1: { label: "[V1]", lines: ["VB-MAPP — criterion-referenced early VB + early learner assessment (Sundberg)."] },
    ch36_v2: { label: "[V2]", lines: ["ABLLS-R — criterion-referenced broader younger-learner curriculum (Partington)."] },
    ch36_v3: { label: "[V3]", lines: ["AFLS — criterion-referenced functional living skills for adolescents/adults (Partington & Mueller)."] },
    ch36_v4: { label: "[V4]", lines: ["PEAK — criterion-referenced VB + RFT curriculum (Dixon)."] },
    ch36_v5: { label: "[V5]", lines: ["VABS — norm-referenced adaptive-behavior scale (Pearson)."] },
    ch36_v6: { label: "[V6]", lines: ["Criterion-referenced — compares learner to mastery criterion; drives direct programming."] },
    ch36_v7: { label: "[V7]", lines: ["Norm-referenced — compares learner to standardization sample; drives eligibility + benchmarking."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Assessment Tools",
    intro: "Five common instruments + referenced-type distinction.",
    entries: [
      { term: "VB-MAPP", definition: "Criterion-referenced early verbal-behavior + early-learner assessment; ~0–48 months developmental range; Milestones/Barriers/Transitions/Task Analysis/Placement components.", footnoteRef: "ch36_v1" },
      { term: "ABLLS-R", definition: "Criterion-referenced skills assessment + curriculum guide covering broader language + academic + self-help + motor matrix; typically older than VB-MAPP range.", footnoteRef: "ch36_v2" },
      { term: "AFLS", definition: "Criterion-referenced functional-living-skills assessment for adolescents/adults; six protocols (Basic/Home/Community/School/Vocational/Independent Living).", footnoteRef: "ch36_v3" },
      { term: "PEAK", definition: "Criterion-referenced curriculum + assessment integrating VB with RFT-based derived relations; Direct/Generalization/Equivalence/Transformation modules.", footnoteRef: "ch36_v4" },
      { term: "VABS", definition: "Norm-referenced adaptive-behavior scale reporting standardized scores across Communication/Daily Living/Socialization/Motor domains; industry-standard for eligibility.", footnoteRef: "ch36_v5" },
      { term: "Criterion-referenced", definition: "Compares learner to a defined mastery criterion — drives direct programming decisions.", footnoteRef: "ch36_v6" },
      { term: "Norm-referenced", definition: "Compares learner to a standardization sample — drives eligibility determinations + progress benchmarking.", footnoteRef: "ch36_v7" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Assessment Tools",
    intro: "Which tool for which question.",
    concepts: [
      { title: "Criterion vs. norm-referenced", segments: [{ type: "text", text: "Criterion → mastery-based programming. Norm → eligibility + peer comparison " }, { type: "footnote", ref: "ch36_v6" }, { type: "footnote", ref: "ch36_v7" }, { type: "text", text: "." }] },
      { title: "Age + skill matching", segments: [{ type: "text", text: "VB-MAPP (~0–48 mo early VB). ABLLS-R (broader younger). AFLS (adolescent/adult functional living). PEAK (VB + RFT). VABS (any age norm-referenced adaptive) " }, { type: "footnote", ref: "ch36_v1" }, { type: "footnote", ref: "ch36_v3" }, { type: "footnote", ref: "ch36_v4" }, { type: "footnote", ref: "ch36_v5" }, { type: "text", text: "." }] },
      { title: "Multi-instrument best practice", segments: [{ type: "text", text: "Criterion tool for programming + VABS for eligibility + FBA when problem behavior present " }, { type: "footnote", ref: "ch36_v6" }, { type: "text", text: "." }] },
      { title: "Common misinterpretation", segments: [{ type: "text", text: "Treating criterion raw scores as norm-referenced standardized scores — they are not " }, { type: "footnote", ref: "ch36_v7" }, { type: "text", text: "." }] },
    ],
  },
  vocabularyMatchInstructions: "Match each learner profile / question to the assessment tool that BEST fits.",
  matchActivityInstructions: "Select the assessment tool that BEST matches each scenario — attend to age, skill area, and referenced-type.",
  chainActivityInstructions: "Sequence a multi-instrument assessment plan for a new-referral learner.",
  mts: [
    { sample_stimulus: "3-year-old with recent autism diagnosis; team needs early verbal-behavior + early-learner programming.", comparison_options: ["VB-MAPP — early VB + early learner in the target developmental range", "AFLS — for older learners", "VABS only", "Skip assessment"], correct_match: "VB-MAPP — early VB + early learner in the target developmental range", error_feedback: "VB-MAPP is designed for this exact profile." },
    { sample_stimulus: "18-year-old preparing for supported employment + independent living; needs functional living skills programming.", comparison_options: ["AFLS — six functional-living protocols matched to this profile", "VB-MAPP — early developmental range", "PEAK — VB + RFT", "IQ test"], correct_match: "AFLS — six functional-living protocols matched to this profile", error_feedback: "AFLS is designed for this exact profile." },
    { sample_stimulus: "Team needs adaptive-behavior standardized scores for insurance eligibility determination.", comparison_options: ["VABS — norm-referenced adaptive-behavior scale", "VB-MAPP — criterion-referenced", "ABLLS-R — criterion-referenced", "AFLS — criterion-referenced"], correct_match: "VABS — norm-referenced adaptive-behavior scale", error_feedback: "Only VABS is norm-referenced among these tools." },
    { sample_stimulus: "Learner has VB foundations and team wants to program derived relations + transformation of stimulus function.", comparison_options: ["PEAK — Equivalence + Transformation modules program derived relations per RFT", "VB-MAPP — early VB only", "VABS — norm-referenced adaptive", "FBA"], correct_match: "PEAK — Equivalence + Transformation modules program derived relations per RFT", error_feedback: "PEAK is the tool that programs RFT-based derived relations." },
    { sample_stimulus: "Report treats VB-MAPP raw scores as if they were VABS standardized scores.", comparison_options: ["Interpretation error — VB-MAPP is criterion-referenced (mastery), not norm-referenced (percentile)", "Correct interpretation", "Both are norm-referenced", "Referenced-type doesn't matter"], correct_match: "Interpretation error — VB-MAPP is criterion-referenced (mastery), not norm-referenced (percentile)", error_feedback: "Criterion-referenced raw scores are not percentiles." },
    { sample_stimulus: "New-referral assessment plan — one tool.", comparison_options: ["Multi-instrument: criterion tool for programming + VABS for eligibility + FBA if problem behavior present", "Single tool only", "Interview only", "No assessment"], correct_match: "Multi-instrument: criterion tool for programming + VABS for eligibility + FBA if problem behavior present", error_feedback: "Multi-instrument approach layers programming + eligibility + FBA when indicated." },
    { sample_stimulus: "VB-MAPP Barriers subtest identifies escape from instruction.", comparison_options: ["Barriers component target — obstacles to acquisition needing intervention before progression", "IQ score", "Adaptive score", "FA condition"], correct_match: "Barriers component target — obstacles to acquisition needing intervention before progression", error_feedback: "Barriers component identifies obstacles to skill acquisition." },
    { sample_stimulus: "VB-MAPP Transitions subtest is used to inform:", comparison_options: ["Placement decisions — readiness for less-restrictive educational or clinical settings", "Punishment plans", "FA data", "IQ classification"], correct_match: "Placement decisions — readiness for less-restrictive educational or clinical settings", error_feedback: "Transitions supports placement decision-making." },
  ],
  chainTitle: "Multi-instrument assessment for a new referral",
  chainFragments: [
    { id: "a", text: "Screen for problem behavior; if present, plan FBA (indirect + descriptive + experimental as safety and question require) per mod07–mod09 + mod40." },
    { id: "b", text: "Select criterion-referenced tool matched to age + skill area — VB-MAPP (early VB), ABLLS-R (broader younger), AFLS (adolescent/adult functional living), or PEAK (VB + RFT)." },
    { id: "c", text: "Administer VABS for norm-referenced adaptive scores if eligibility determination or progress benchmarking is required." },
    { id: "d", text: "Synthesize data across instruments — programming targets from criterion tool, eligibility from VABS, function-matched procedure from FBA — into an integrated treatment plan." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Criterion-referenced", back: "Mastered vs. not — drives programming." },
    { front: "Norm-referenced", back: "Compared to peers — drives eligibility." },
    { front: "VB-MAPP", back: "Early VB + learner (~0–48 mo), criterion." },
    { front: "ABLLS-R", back: "Broader younger-learner curriculum, criterion." },
    { front: "AFLS", back: "Functional living, adolescent/adult, criterion." },
    { front: "PEAK", back: "VB + RFT derived relations, criterion." },
    { front: "VABS", back: "Norm-referenced adaptive-behavior scale." },
  ],
  worksheet: {
    title: "Assessment tool selection",
    instructions: "Match each scenario to the correct tool + referenced-type.",
    scenario: "Scenario A — 3-year-old, early VB programming needed.",
    scenario_follow_up: "Scenario B — 18-year-old, supported employment/independent living skills.\n\nScenario C — Insurance eligibility standardized adaptive scores.\n\nScenario D — Learner with VB foundations, program derived relations.\n\nScenario E — VB-MAPP raw scores reported as percentiles.\n\nScenario F — New-referral assessment plan.\n\nScenario G — VB-MAPP subtest identifying escape from instruction as obstacle.\n\nScenario H — VB-MAPP subtest informing placement decisions.",
    fields: [
      { id: "response_1", label: "A", options: ["VB-MAPP", "AFLS", "VABS only"], correct: "VB-MAPP" },
      { id: "response_2", label: "B", options: ["AFLS", "VB-MAPP", "PEAK"], correct: "AFLS" },
      { id: "response_3", label: "C", options: ["VABS", "VB-MAPP", "ABLLS-R"], correct: "VABS" },
      { id: "response_4", label: "D", options: ["PEAK", "VB-MAPP", "VABS"], correct: "PEAK" },
      { id: "response_5", label: "E", options: ["Interpretation error — criterion ≠ norm", "Correct", "Both norm-referenced"], correct: "Interpretation error — criterion ≠ norm" },
      { id: "response_6", label: "F", options: ["Multi-instrument: criterion tool + VABS + FBA if needed", "Single tool only", "Interview only"], correct: "Multi-instrument: criterion tool + VABS + FBA if needed" },
      { id: "response_7", label: "G", options: ["VB-MAPP Barriers component", "VABS domain", "AFLS protocol"], correct: "VB-MAPP Barriers component" },
      { id: "response_8", label: "H", options: ["VB-MAPP Transitions component", "AFLS protocol", "VABS domain"], correct: "VB-MAPP Transitions component" },
    ],
    remediationLog: "Rebuild: age + skill + referenced-type → tool. Criterion drives programming; norm drives eligibility.",
  },
  bdsBank: CHAPTER_36_ASSESSMENT_TOOLS_QUIZ_BANK,
};
