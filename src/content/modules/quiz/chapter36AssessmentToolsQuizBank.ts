import type { BDSQuestion } from "@/lib/content-types";

/** Assessment tools compendium — VB-MAPP, ABLLS-R, AFLS, PEAK, VABS. */

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
    tcoDomain: "F",
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_36_ASSESSMENT_TOOLS_QUIZ_BANK: BDSQuestion[] = [
  bx("mod41-q1", "The VB-MAPP (Sundberg) is BEST characterized as:", "B", {
    A: { text: "A norm-referenced IQ test.", rationale: "It is criterion-referenced, not norm-referenced.", },
    B: { text: "A criterion-referenced verbal-behavior + early learner assessment based on Skinner's analysis of verbal behavior; includes Milestones, Barriers, Transitions, Task Analysis, and Placement components; typical use age ~0–48 months developmental.", rationale: "Correct — VB-MAPP's structure and Skinnerian foundation.", },
    C: { text: "An adult adaptive-behavior scale.", rationale: "That describes VABS.", },
    D: { text: "A functional-analysis protocol.", rationale: "It is an assessment, not an FA.", },
  }),
  bx("mod41-q2", "The ABLLS-R (Partington) is BEST characterized as:", "A", {
    A: { text: "A criterion-referenced skills assessment + curriculum guide for language + academic + self-help + motor skills; covers a broader skills matrix than VB-MAPP; useful for older learners than the VB-MAPP's typical range.", rationale: "Correct — ABLLS-R structure and typical use.", },
    B: { text: "A norm-referenced IQ test.", rationale: "It is criterion-referenced.", },
    C: { text: "An FA protocol.", rationale: "Assessment, not FA.", },
    D: { text: "Only for adults.", rationale: "It covers children through school-age.", },
  }),
  bx("mod41-q3", "The AFLS (Assessment of Functional Living Skills; Partington & Mueller) targets:", "C", {
    A: { text: "Verbal behavior only.", rationale: "That is VB-MAPP.", },
    B: { text: "IQ only.", rationale: "It is not an IQ test.", },
    C: { text: "Functional living skills across settings — Basic Living, Home, Community, School, Vocational, Independent Living; criterion-referenced; often used for adolescents through adults for skill programming.", rationale: "Correct — AFLS's cross-setting functional-skills focus.", },
    D: { text: "FA of problem behavior.", rationale: "Assessment, not FA.", },
  }),
  bx("mod41-q4", "The PEAK Relational Training System (Dixon) is BEST characterized as:", "D", {
    A: { text: "An FA protocol.", rationale: "Assessment + curriculum, not FA.", },
    B: { text: "A norm-referenced adaptive scale.", rationale: "It is criterion-referenced.", },
    C: { text: "Only for verbal behavior.", rationale: "It integrates verbal + relational + equivalence content.", },
    D: { text: "A criterion-referenced curriculum + assessment system integrating verbal behavior + derived relational responding (RFT) content across Direct, Generalization, Equivalence, and Transformation modules.", rationale: "Correct — PEAK integrates VB with RFT-based derived-relations programming.", },
  }),
  bx("mod41-q5", "The Vineland Adaptive Behavior Scales (VABS) is BEST characterized as:", "B", {
    A: { text: "A criterion-referenced FA.", rationale: "It is norm-referenced adaptive-behavior.", },
    B: { text: "A NORM-REFERENCED adaptive-behavior scale — reports domains (Communication, Daily Living Skills, Socialization, Motor) with standardized scores compared to a normative sample; widely used in eligibility determinations + progress monitoring.", rationale: "Correct — VABS is a norm-referenced adaptive-behavior scale.", },
    C: { text: "A verbal-behavior-only measure.", rationale: "It is broader.", },
    D: { text: "Free operant preference.", rationale: "Unrelated.", },
  }),
  bx("mod41-q6", "The KEY distinction between CRITERION-referenced and NORM-referenced assessments is:", "C", {
    A: { text: "Criterion-referenced tests are always for adults.", rationale: "Age is not the distinction.", },
    B: { text: "Norm-referenced tests never have criteria.", rationale: "They have psychometric criteria; the distinction is comparison target.", },
    C: { text: "Criterion-referenced tests compare the learner's performance to a defined mastery criterion (has the learner met the skill?). Norm-referenced tests compare the learner's performance to a standardization sample (how does the learner compare to peers?).", rationale: "Correct — criterion-referenced = mastery; norm-referenced = comparison to sample.", },
    D: { text: "They are identical.", rationale: "They differ in comparison target.", },
  }),
  bx("mod41-q7", "A team wants to program EARLY VERBAL BEHAVIOR + early learner skills for a 3-year-old with recent autism diagnosis. Which tool is MOST directly indicated?", "A", {
    A: { text: "VB-MAPP — targets early verbal behavior + early learner skills in the ~0–48 month developmental range.", rationale: "Correct — VB-MAPP is designed for this exact use case.", },
    B: { text: "AFLS — for older learners' functional living skills.", rationale: "AFLS is for adolescents/adults.", },
    C: { text: "VABS only.", rationale: "VABS gives adaptive levels but does not drive verbal-behavior programming directly.", },
    D: { text: "PEAK — appropriate but VB-MAPP is more directly age/skill matched.", rationale: "PEAK is stronger for older learners moving into derived relations.", },
  }),
  bx("mod41-q8", "A team wants to program FUNCTIONAL LIVING SKILLS for an 18-year-old preparing for supported employment + independent living. Which tool is MOST directly indicated?", "B", {
    A: { text: "VB-MAPP — early developmental range.", rationale: "Wrong age/skill.", },
    B: { text: "AFLS — cross-setting functional living skills (Basic, Home, Community, School, Vocational, Independent Living).", rationale: "Correct — AFLS is designed for this use case.", },
    C: { text: "ABLLS-R — broader younger-learner curriculum.", rationale: "ABLLS-R is younger; AFLS is more targeted for this profile.", },
    D: { text: "FA.", rationale: "FA is for problem behavior, not skills programming.", },
  }),
  bx("mod41-q9", "A team wants ELIGIBILITY-DETERMINATION-level adaptive scores for insurance/school eligibility. Which is MOST indicated?", "C", {
    A: { text: "VB-MAPP — criterion-referenced; doesn't produce standardized scores.", rationale: "Not norm-referenced.", },
    B: { text: "ABLLS-R — criterion-referenced.", rationale: "Not norm-referenced.", },
    C: { text: "VABS — norm-referenced adaptive-behavior scale that produces standardized scores commonly used in eligibility determinations.", rationale: "Correct — VABS is the industry-standard norm-referenced adaptive scale.", },
    D: { text: "AFLS — criterion-referenced.", rationale: "Not norm-referenced.", },
  }),
  bx("mod41-q10", "PEAK's Equivalence + Transformation modules are BEST described as programming:", "D", {
    A: { text: "Rote memorization only.", rationale: "Derived relations go beyond memorization.", },
    B: { text: "Punishment procedures.", rationale: "Not the content.", },
    C: { text: "Physical living skills.", rationale: "That is AFLS.", },
    D: { text: "Derived relational responding — stimulus equivalence + transformation of stimulus function per Relational Frame Theory (RFT); teaches emergent untrained relations (e.g., learning A=B, B=C → deriving A=C without direct training).", rationale: "Correct — PEAK Equivalence + Transformation program RFT-based derived relations.", },
  }),
  bx("mod41-q11", "The VB-MAPP BARRIERS assessment specifically targets:", "A", {
    A: { text: "Learning + language barriers that inhibit skill acquisition (e.g., problem behavior, escape from instruction, weak listener repertoire, poor MO development, prompt dependency) — used to identify obstacles requiring targeted intervention before progression.", rationale: "Correct — Barriers component identifies obstacles to acquisition.", },
    B: { text: "IQ measurement.", rationale: "Not IQ.", },
    C: { text: "Adaptive scores for eligibility.", rationale: "That is VABS.", },
    D: { text: "Functional living skills.", rationale: "That is AFLS.", },
  }),
  bx("mod41-q12", "The VB-MAPP TRANSITIONS assessment provides:", "B", {
    A: { text: "IQ classification.", rationale: "Not IQ.", },
    B: { text: "Data to inform decisions about transitioning the learner to less-restrictive educational or clinical settings — considers acquisition rate, group learning skills, self-management, adaptive skills, and problem behavior.", rationale: "Correct — Transitions supports placement decision-making.", },
    C: { text: "A norm-referenced adaptive score.", rationale: "That is VABS.", },
    D: { text: "FA outcome.", rationale: "Not FA.", },
  }),
  bx("mod41-q13", "A common ERROR in interpreting these assessments is:", "C", {
    A: { text: "Using multiple assessments together.", rationale: "Multi-instrument assessment is often best practice.", },
    B: { text: "Reassessing periodically.", rationale: "Reassessment is good practice.", },
    C: { text: "Treating a CRITERION-referenced assessment's raw scores as if they were NORM-referenced standardized scores — VB-MAPP / ABLLS-R / AFLS / PEAK indicate skill mastery relative to defined criteria, NOT the learner's percentile compared to peers.", rationale: "Correct — mixing referenced-type is a common misinterpretation.", },
    D: { text: "Using them for progress monitoring.", rationale: "Progress monitoring is a valid use.", },
  }),
  bx("mod41-q14", "For treatment-plan design, the STRONGEST assessment strategy is usually to:", "A", {
    A: { text: "Use multiple complementary tools — a criterion-referenced tool for direct skill programming (VB-MAPP/ABLLS-R/AFLS/PEAK matched to age + goals) AND a norm-referenced tool for eligibility/progress-benchmarking (VABS) — combined with FBA when problem behavior is present.", rationale: "Correct — best-practice multi-instrument assessment layers criterion-referenced skill programming with norm-referenced benchmarking.", },
    B: { text: "Use only one assessment always.", rationale: "Single-instrument use limits information.", },
    C: { text: "Rely on interview only.", rationale: "Direct assessment is required.", },
    D: { text: "Assessments are unnecessary.", rationale: "Assessments drive programming decisions.", },
  }),
  bx("mod41-q15", "Which pair BEST matches an assessment tool to its PRIMARY use case?", "B", {
    A: { text: "VB-MAPP — adaptive scores for insurance eligibility.", rationale: "Miss — that is VABS.", },
    B: { text: "AFLS — functional living skills for adolescents/adults preparing for independent living or supported employment.", rationale: "Correct match — AFLS's primary use case.", },
    C: { text: "PEAK — norm-referenced IQ.", rationale: "Miss — PEAK is criterion-referenced VB + RFT.", },
    D: { text: "VABS — early verbal behavior programming for toddlers.", rationale: "Miss — that is VB-MAPP.", },
  }),
];
