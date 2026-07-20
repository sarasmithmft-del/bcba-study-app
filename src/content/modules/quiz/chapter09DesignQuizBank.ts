import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 9 — Multiple Baseline and Changing Criterion Designs. */

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

export const CHAPTER_09_DESIGN_QUIZ_BANK: BDSQuestion[] = [
  bx("mod13-q1", "Cooper Chapter 9 multiple-baseline designs demonstrate control by:", "C", {
    A: { text: "Withdrawing intervention from all tiers simultaneously.", rationale: "Staggered introduction—not simultaneous withdrawal—defines multiple baseline." },
    B: { text: "Comparing group means only.", rationale: "Single-subject stagger logic." },
    C: { text: "Staggering intervention across behaviors, settings, or participants while untreated tiers remain stable.", rationale: "Replicated onsets support inference without full withdrawal." },
    D: { text: "Eliminating baseline phases.", rationale: "Concurrent baselines are prerequisite." },
  }),
  bx("mod13-q4", "Multiple baseline across behaviors staggers:", "A", {
    A: { text: "Intervention across distinct response classes within one participant.", rationale: "Sequential response-class tiers." },
    B: { text: "Only group statistics.", rationale: "Single-subject design." },
    C: { text: "Respondent extinction exclusively.", rationale: "Operant stagger logic." },
    D: { text: "Criterion steps only.", rationale: "Changing criterion differs." },
  }),
  bx("mod13-q5", "Multiple baseline across settings staggers:", "B", {
    A: { text: "Participants only.", rationale: "Settings define ecological contexts." },
    B: { text: "Introduction across contexts (e.g., home, school, community).", rationale: "Environmental replication vector." },
    C: { text: "Withdrawal from all settings at once.", rationale: "Stagger—not withdrawal—defines MB." },
    D: { text: "IOA formulas.", rationale: "Design family issue." },
  }),
  bx("mod13-q6", "Multiple baseline across participants:", "D", {
    A: { text: "Requires identical IQ.", rationale: "Irrelevant." },
    B: { text: "Eliminates need for graphs.", rationale: "Graphs central." },
    C: { text: "Is a group design only.", rationale: "Single-subject replication across individuals." },
    D: { text: "Staggers intervention onset across separate learners.", rationale: "Classic across-participants MB." },
  }),
  bx("mod13-q7", "Adjacent tier baseline rises before its scheduled introduction MOST threatens:", "A", {
    A: { text: "Independence assumptions (covariance/spillover).", rationale: "Linked improvement undermines stagger logic." },
    B: { text: "IOA calculation only.", rationale: "Methodological independence threat." },
    C: { text: "Proof intervention ineffective.", rationale: "Premature lift suggests linkage—not inefficacy alone." },
    D: { text: "Respondent extinction.", rationale: "Operant stagger context." },
  }),
  bx("mod13-q8", "Stagger delay MOST directly protects:", "C", {
    A: { text: "Graph font consistency.", rationale: "Temporal insulation between tiers." },
    B: { text: "Elimination of measurement.", rationale: "Measurement continues." },
    C: { text: "Independence by reducing reinforcement spillover between tiers.", rationale: "Buffer when leakage is plausible." },
    D: { text: "Automatic FA completion.", rationale: "Design tactic—not FA." },
  }),
  bx("mod13-q9", "Concurrent baseline stability in multiple baseline means:", "B", {
    A: { text: "All tiers receive intervention immediately.", rationale: "Untreated tiers stay in baseline until introduction." },
    B: { text: "Untreated tiers show stable performance before their scheduled introduction.", rationale: "Stable anchors support onset attribution." },
    C: { text: "Baselines may drift freely.", rationale: "Stability required for comparison." },
    D: { text: "IOA is optional.", rationale: "IOA still required when coders matter." },
  }),
  bx("mod13-q10", "Multiple baseline MOST substitutes for:", "D", {
    A: { text: "All measurement.", rationale: "Measurement remains." },
    B: { text: "Multielement alternation exclusively always.", rationale: "One ethical alternative among several." },
    C: { text: "Informed consent.", rationale: "Ethics always apply." },
    D: { text: "Full withdrawal reversal when removal of effective treatment is unethical.", rationale: "Ethical substitute cited in Cooper." },
  }),
  bx("mod13-q11", "Replication in multiple baseline requires:", "A", {
    A: { text: "Parallel intervention-attributed change when each tier is introduced.", rationale: "Repeated demonstrations across tiers." },
    B: { text: "One hero slope only.", rationale: "Single tier insufficient." },
    C: { text: "Deleting messy tiers.", rationale: "Honest reporting required." },
    D: { text: "Group t-tests.", rationale: "Single-subject logic." },
  }),
  bx("mod13-q12", "Covariance in multiple baseline refers to:", "C", {
    A: { text: "Perfect independence always.", rationale: "Covariance is linked change threatening independence." },
    B: { text: "IOA type.", rationale: "Spillover/synchronized change construct." },
    C: { text: "Linked improvements across tiers undermining independence assumptions.", rationale: "Document spillover or adjust stagger." },
    D: { text: "Criterion stepping.", rationale: "Different design element." },
  }),
  bx("mod13-q13", "Homeroom, cafeteria, playground staggered sequentially illustrates:", "B", {
    A: { text: "Changing criterion.", rationale: "Ecological contexts = across settings MB." },
    B: { text: "Multiple baseline across settings.", rationale: "Sequential context introductions." },
    C: { text: "Multielement alternation same day.", rationale: "ATD alternates—not staggers across contexts over time." },
    D: { text: "ABAB withdrawal.", rationale: "No withdrawal phase described." },
  }),
  bx("mod13-q14", "Tantrums, then noncompliance, then elopement staggered in one learner:", "A", {
    A: { text: "Multiple baseline across behaviors.", rationale: "Response-class tiers within one organism." },
    B: { text: "Across participants only.", rationale: "Same learner—behaviors differ." },
    C: { text: "Respondent extinction.", rationale: "Operant stagger." },
    D: { text: "Factorial design.", rationale: "Different family." },
  }),
  bx("mod13-q15", "Two clients same intervention offset two weeks:", "D", {
    A: { text: "Multielement same-day alternation.", rationale: "Participants stagger over time." },
    B: { text: "Changing criterion only.", rationale: "Participant stagger." },
    C: { text: "Group design.", rationale: "Single-subject across participants." },
    D: { text: "Multiple baseline across participants.", rationale: "Classic replication vector." },
  }),
  bx("mod13-q16", "When spillover threatens independence, BEST response:", "B", {
    A: { text: "Delete untreated tier data.", rationale: "Falsifies record." },
    B: { text: "Document linkage hypothesis, widen stagger, tighten procedural boundaries, or note limits.", rationale: "Transparent methodological response." },
    C: { text: "Claim automatic proof of control.", rationale: "Covariance weakens claims." },
    D: { text: "Stop all ethics review.", rationale: "Ethics ongoing." },
  }),
  bx("mod13-q17", "Multiple baseline vs multielement (Ch 8)—key difference:", "C", {
    A: { text: "Identical designs.", rationale: "MB staggers over time; multielement alternates conditions." },
    B: { text: "MB never uses graphs.", rationale: "Both use graphs." },
    C: { text: "MB staggers introduction across tiers; multielement alternates conditions within comparable windows.", rationale: "Common exam discrimination." },
    D: { text: "MB is group design only.", rationale: "Single-subject." },
  }),
  bx("mod13-q18", "Starting stagger before baselines stabilize:", "A", {
    A: { text: "Weakens ability to attribute change to timed introduction.", rationale: "Drift confounds onset comparison." },
    B: { text: "Is best practice.", rationale: "Stability first." },
    C: { text: "Eliminates covariance.", rationale: "May increase confounds." },
    D: { text: "Replaces IOA.", rationale: "Separate issue." },
  }),
  bx("mod13-q19", "Removing covariance appendix while claiming independence violates:", "D", {
    A: { text: "Only graph color rules.", rationale: "Domain E transparent reporting." },
    B: { text: "Shaping rules only.", rationale: "Analytic integrity broadly." },
    C: { text: "Token economy only.", rationale: "Applies to all MB reports." },
    D: { text: "Transparent reporting of limits and threats to validity.", rationale: "Selective reporting misleads stakeholders." },
  }),
  bx("mod13-q20", "Changing-criterion design demonstrates control by:", "B", {
    A: { text: "Withdrawing all reinforcement permanently.", rationale: "Stepwise criterion increases with contingent reinforcement." },
    B: { text: "Performance tracking stepwise criteria with reinforcement changing in correspondence.", rationale: "Correspondence is hallmark." },
    C: { text: "Staggering across participants only.", rationale: "Criterion stepping differs from MB stagger." },
    D: { text: "Group means.", rationale: "Single-subject staircase." },
  }),
  bx("mod13-q21", "Reinforcement–criterion correspondence means:", "A", {
    A: { text: "Programmed consequences align with each criterion shift on the timeline.", rationale: "Decoupling collapses causal claims." },
    B: { text: "Criteria change without any contingency change.", rationale: "Opposite of correspondence." },
    C: { text: "IOA only.", rationale: "Contingency-criterion coupling." },
    D: { text: "Graph labels match font.", rationale: "Substantive alignment required." },
  }),
  bx("mod13-q22", "Criterion shifts while reinforcement schedule unchanged:", "C", {
    A: { text: "Strongest evidence of control.", rationale: "Async drift weakens inference." },
    B: { text: "Required by Cooper.", rationale: "Correspondence required." },
    C: { text: "Threatens validity of changing-criterion demonstration.", rationale: "Fix fidelity or downgrade claims." },
    D: { text: "Proves MO only.", rationale: "Design correspondence issue." },
  }),
  bx("mod13-q23", "Changing-criterion design often preferred when:", "D", {
    A: { text: "Withdrawal always required.", rationale: "Ethical substitute when withdrawal harmful." },
    B: { text: "No baseline needed.", rationale: "Stable baseline precedes stepping." },
    C: { text: "Measurement forbidden.", rationale: "Measurement essential." },
    D: { text: "Full withdrawal would remove essential supports but stepwise mastery is feasible.", rationale: "Ethical alternative preserving differentiation." },
  }),
  bx("mod13-q24", "Before criterion stepping, analysts should:", "B", {
    A: { text: "Skip baseline.", rationale: "Stable baseline anchors staircase." },
    B: { text: "Establish stable baseline so hops are distinguishable from noise.", rationale: "Variability confounds criterion attribution." },
    C: { text: "Delete low points.", rationale: "Honest data required." },
    D: { text: "Use anecdotes only.", rationale: "Graphed data required." },
  }),
  bx("mod13-q25", "Socially valid benchmarks in changing-criterion designs:", "A", {
    A: { text: "Are milestones stakeholders recognize—not clinician-only thresholds.", rationale: "Applied meaningfulness." },
    B: { text: "Must be secret.", rationale: "Stakeholder alignment required." },
    C: { text: "Replace measurement.", rationale: "Benchmarks guide criteria—data remain." },
    D: { text: "Eliminate fidelity notes.", rationale: "Fidelity still required." },
  }),
  bx("mod13-q26", "Stepwise criterion graph shows elite tier but schedule still at entry level:", "D", {
    A: { text: "Perfect correspondence.", rationale: "Decoupling evident." },
    B: { text: "IOA issue only.", rationale: "Contingency-criterion mismatch." },
    C: { text: "Proof of punishment.", rationale: "Correspondence failure." },
    D: { text: "Cosmetic relabeling without contingency change—weakens causal claim.", rationale: "Fix schedules or downgrade language." },
  }),
  bx("mod13-q27", "Changing criterion vs multiple baseline:", "C", {
    A: { text: "Identical logic.", rationale: "CC steps criteria; MB staggers IV across tiers." },
    B: { text: "CC requires withdrawal.", rationale: "CC often avoids withdrawal." },
    C: { text: "CC raises performance criteria in stages; MB replicates onset across tiers.", rationale: "Both Ch 9—different control logic." },
    D: { text: "Neither uses graphs.", rationale: "Both rely on visual inspection." },
  }),
  bx("mod13-q28", "Weekly accuracy criterion increases 60→70→80% with matching reinforcement thinning:", "B", {
    A: { text: "Multiple baseline across behaviors.", rationale: "Stepwise criterion staircase." },
    B: { text: "Changing-criterion design with correspondence.", rationale: "Criteria and reinforcement climb together." },
    C: { text: "ABAB withdrawal.", rationale: "No withdrawal described." },
    D: { text: "Multielement alternation.", rationale: "Sequential criterion steps differ." },
  }),
  bx("mod13-q29", "High baseline variability before criterion steps:", "A", {
    A: { text: "Makes criterion hops hard to interpret as treatment effect.", rationale: "Stabilize before stepping." },
    B: { text: "Proves control.", rationale: "Noise confounds." },
    C: { text: "Eliminates need for fidelity.", rationale: "Fidelity always matters." },
    D: { text: "Requires group design.", rationale: "Single-subject issue." },
  }),
  bx("mod13-q30", "Fidelity logs in changing-criterion design should show:", "D", {
    A: { text: "Only final outcome.", rationale: "Each step needs contingency documentation." },
    B: { text: "Caregiver zodiac.", rationale: "Procedural fidelity focus." },
    C: { text: "IOA only post hoc.", rationale: "IV implementation at each criterion." },
    D: { text: "What reinforcement contingency was active at each criterion shift.", rationale: "Auditable correspondence." },
  }),
  bx("mod13-q31", "Chapter 9 belongs in Cooper sequence after:", "B", {
    A: { text: "Chapter 11 reinforcement only.", rationale: "Follows Ch 8 reversal/multielement." },
    B: { text: "Chapters on measurement, graphs, analysis, and reversal/multielement (4–8).", rationale: "Design progression." },
    C: { text: "Ethics chapter only.", rationale: "Design before many later topics." },
    D: { text: "FBA only.", rationale: "FBA is later." },
  }),
  bx("mod13-q32", "Exam stem: synchronized improvement across all MB tiers before any introduction:", "C", {
    A: { text: "Proof of independence.", rationale: "Synchrony suggests shared event or spillover." },
    B: { text: "Proof of ineffective IV.", rationale: "May be setting event—not IV failure." },
    C: { text: "Setting event or covariance threatening independence.", rationale: "Investigate linkage before claiming control." },
    D: { text: "Required for MB validity.", rationale: "Undermines stagger logic." },
  }),
  bx("mod13-q33", "MB workflow order—BEST sequence:", "A", {
    A: { text: "Stable concurrent baselines → plan stagger → sequential introductions → interpret replication with independence check.", rationale: "Standard Cooper workflow." },
    B: { text: "Introduce all tiers → measure once → report.", rationale: "Stagger and baselines missing." },
    C: { text: "Delete baselines → stagger.", rationale: "Invalid." },
    D: { text: "Criterion steps → withdrawal.", rationale: "Mixes design families." },
  }),
  bx("mod13-q34", "Domain F Chapter 9 items test:", "D", {
    A: { text: "MO definition only.", rationale: "Design discrimination and correspondence." },
    B: { text: "Verbal operants only.", rationale: "Experimental design domain." },
    C: { text: "Billing codes.", rationale: "Analytic design focus." },
    D: { text: "Whether stagger or criterion logic supports experimental control narrative.", rationale: "Domain F analytic design." },
  }),
  bx("mod13-q35", "Imitation across tiers before introduction suggests:", "B", {
    A: { text: "Perfect independence.", rationale: "Spillover/observational learning threatens independence." },
    B: { text: "Covariance—document and adjust stagger or procedures.", rationale: "Common spillover pathway." },
    C: { text: "Respondent extinction.", rationale: "Operant MB context." },
    D: { text: "IOA formula error.", rationale: "Independence threat." },
  }),
  bx("mod13-q36", "Shared staff training across all MB tiers simultaneously:", "A", {
    A: { text: "May threaten independence—document and isolate when possible.", rationale: "Setting-wide IV confound." },
    B: { text: "Always invalidates MB.", rationale: "May still be viable with safeguards." },
    C: { text: "Eliminates graphs.", rationale: "Document threat transparently." },
    D: { text: "Proves criterion correspondence.", rationale: "MB independence issue." },
  }),
  bx("mod13-q37", "Criterion step achieved but reinforcement not yet thinned:", "C", {
    A: { text: "Report mastery with full causal certainty.", rationale: "Fix correspondence first." },
    B: { text: "Delete the step.", rationale: "Report and align contingencies." },
    C: { text: "Delay strong causal claims until reinforcement aligns with criterion.", rationale: "Correspondence prerequisite." },
    D: { text: "Switch to group design.", rationale: "Fix fidelity within design." },
  }),
  bx("mod13-q38", "MB ethical substitute when AAC cannot be withdrawn:", "D", {
    A: { text: "Covert removal.", rationale: "Violates consent." },
    B: { text: "No data.", rationale: "MB preserves supports while staggering." },
    C: { text: "Forced ABAB.", rationale: "Ethical limits apply." },
    D: { text: "Stagger intervention while untreated tiers keep existing supports.", rationale: "Ethical Ch 9 logic." },
  }),
  bx("mod13-q39", "Graph shows criterion lines stepping up; behavior follows each step after brief variability:", "B", {
    A: { text: "Multiple baseline only.", rationale: "Stepwise tracking suggests CC." },
    B: { text: "Changing-criterion pattern if reinforcement correspondence documented.", rationale: "Staircase performance tracking." },
    C: { text: "Multielement only.", rationale: "Different alternation logic." },
    D: { text: "No design identifiable.", rationale: "CC pattern described." },
  }),
  bx("mod13-q40", "High-Yield Confusion Point—MB vs CC:", "A", {
    A: { text: "MB replicates staggered onsets; CC steps performance criteria with contingent reinforcement.", rationale: "Both Ch 9—different logic." },
    B: { text: "Both require full withdrawal.", rationale: "Neither requires full withdrawal." },
    C: { text: "MB is group design; CC is single subject.", rationale: "Both single-subject." },
    D: { text: "CC never uses baselines.", rationale: "Baseline stability precedes steps." },
  }),
  bx("mod13-q41", "Phase lines in MB must align with:", "C", {
    A: { text: "Marketing deck.", rationale: "Documented introduction times." },
    B: { text: "IOA formulas only.", rationale: "Introduction schedule fidelity." },
    C: { text: "Timestamped stagger introductions and fidelity notes.", rationale: "Onset attribution requires auditable phases." },
    D: { text: "Punishment menu.", rationale: "Any IV type." },
  }),
  bx("mod13-q42", "Feasible compressed stagger due to staffing:", "D", {
    A: { text: "Excuses hiding covariance evidence.", rationale: "Domain E honesty required." },
    B: { text: "Eliminates consent.", rationale: "Ethics persist." },
    C: { text: "Proves independence automatically.", rationale: "May increase spillover risk—document." },
    D: { text: "May require wider buffers or explicit limits in report if spillover plausible.", rationale: "Feasibility ≠ erased honesty." },
  }),
  bx("mod13-q43", "Changing criterion when reversal unethical:", "B", {
    A: { text: "Relaxes documentation standards.", rationale: "Transparency still required." },
    B: { text: "Still requires correspondence and socially valid benchmarks.", rationale: "Ethical substitute—not shortcut." },
    C: { text: "Eliminates measurement.", rationale: "Measurement continues." },
    D: { text: "Allows covert contingency changes.", rationale: "Violates ethics." },
  }),
  bx("mod13-q44", "Replication envelope in MB stresses:", "A", {
    A: { text: "Repeated demonstrations across tiers when independence holds.", rationale: "Parallel tier stories." },
    B: { text: "Single anecdote.", rationale: "Graph replication required." },
    C: { text: "Group statistics.", rationale: "Single-subject replication." },
    D: { text: "Deleting non-hero tiers.", rationale: "Honest full graphs." },
  }),
  bx("mod13-q45", "Exam: alternating two treatments same learner same week:", "D", {
    A: { text: "Multiple baseline.", rationale: "Multielement Ch 8 alternation." },
    B: { text: "Changing criterion.", rationale: "Alternation—not criterion steps." },
    C: { text: "Multiple baseline across participants.", rationale: "Same learner." },
    D: { text: "Multielement (alternating treatments)—Chapter 8, not Chapter 9 stagger.", rationale: "Design family discrimination." },
  }),
  bx("mod13-q46", "Tier two improves when tier one intervention starts—FIRST check:", "B", {
    A: { text: "Respondent extinction.", rationale: "Spillover/covariance first." },
    B: { text: "Independence/covariance and whether spillover is plausible.", rationale: "Methodological threat assessment." },
    C: { text: "Delete tier two.", rationale: "Investigate—not delete." },
    D: { text: "Claim tier two introduction early.", rationale: "Misrepresents design." },
  }),
  bx("mod13-q47", "Thinning reinforcement only after criterion met illustrates:", "C", {
    A: { text: "Multiple baseline stagger.", rationale: "CC correspondence logic." },
    B: { text: "Withdrawal resurgence.", rationale: "Criterion-contingent thinning." },
    C: { text: "Changing-criterion correspondence.", rationale: "Consequence tracks mastery step." },
    D: { text: "IOA interval method.", rationale: "Design issue." },
  }),
  bx("mod13-q48", "MB plus CC both in Chapter 9 because:", "A", {
    A: { text: "Both demonstrate control without requiring full withdrawal when ethically constrained.", rationale: "Cooper groups ethical alternatives." },
    B: { text: "Both are group designs.", rationale: "Single-subject." },
    C: { text: "Both eliminate baselines.", rationale: "Baselines required." },
    D: { text: "Both replace informed consent.", rationale: "Ethics always apply." },
  }),
  bx("mod13-q49", "BCBA stem: criterion 5 min on-task → 10 min → 15 min with praise tied to each level:", "D", {
    A: { text: "Reversal ABAB.", rationale: "Stepwise criteria." },
    B: { text: "Multiple baseline across settings.", rationale: "Criterion staircase." },
    C: { text: "Multielement.", rationale: "Sequential criterion steps." },
    D: { text: "Changing-criterion with correspondence check.", rationale: "Classic Ch 9 CC vignette." },
  }),
  bx("mod13-q50", "Closing Chapter 9 principle:", "B", {
    A: { text: "Always stagger regardless of ethics.", rationale: "Design choice depends on question and constraints." },
    B: { text: "Demonstrate control via staggered replication or criterion stepping while defending independence or correspondence.", rationale: "Chapter 9 integration." },
    C: { text: "Hide messy tiers for funders.", rationale: "Transparent reporting." },
    D: { text: "Design replaces measurement.", rationale: "Measurement foundation remains." },
  }),
];
