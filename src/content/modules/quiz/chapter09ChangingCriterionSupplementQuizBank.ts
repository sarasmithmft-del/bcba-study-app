import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 9 supplement — Changing-Criterion Designs (mod14). */

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

export const CHAPTER_09_CHANGING_CRITERION_SUPPLEMENT_QUIZ_BANK: BDSQuestion[] = [
  bx("mod14-q1", "Criterion climbs while reinforcement schedules drift asynchronously — MOST accurate analytic critique?", "B", {
    A: { text: "Demonstrates airtight experimental control.", rationale: "Desynchronized reinforcement obscures contingency attribution." },
    B: { text: "Threatens reinforcement-controlled interpretations mandated by changing-criterion design.", rationale: "Correspondence between staged thresholds and reinforcement logistics is required." },
    C: { text: "Proves respondent extinction dominance.", rationale: "Irrelevant classification absent respondent framing." },
    D: { text: "Indicates purely respondent reinforcement synthesis.", rationale: "Confuses procedural drift with respondent mechanics." },
  }),
  bx("mod14-q4", "Cooper Chapter 9 changing-criterion designs demonstrate control by:", "C", {
    A: { text: "Staggering intervention across behaviors only.", rationale: "That describes multiple baseline—not criterion stepping." },
    B: { text: "Withdrawing all reinforcement permanently.", rationale: "Stepwise criteria with contingent reinforcement define CC." },
    C: { text: "Performance tracking stepwise criteria with reinforcement changing in correspondence.", rationale: "Correspondence is the hallmark of changing-criterion logic." },
    D: { text: "Alternating two treatments within the same week.", rationale: "Multielement alternation is Chapter 8." },
  }),
  bx("mod14-q5", "Reinforcement–criterion correspondence means:", "A", {
    A: { text: "Programmed consequences align with each criterion shift on the timeline.", rationale: "Decoupling collapses causal claims." },
    B: { text: "Criteria change without any contingency change.", rationale: "Opposite of correspondence." },
    C: { text: "IOA percentages only.", rationale: "Contingency-criterion coupling is substantive." },
    D: { text: "Graph labels match font style.", rationale: "Substantive alignment required." },
  }),
  bx("mod14-q6", "Changing-criterion design MOST often preferred when:", "D", {
    A: { text: "Full withdrawal always required.", rationale: "CC is ethical substitute when withdrawal harmful." },
    B: { text: "No baseline needed.", rationale: "Stable baseline precedes stepping." },
    C: { text: "Measurement forbidden.", rationale: "Measurement essential." },
    D: { text: "Full withdrawal would remove essential supports but stepwise mastery is feasible.", rationale: "Ethical alternative preserving differentiation." },
  }),
  bx("mod14-q7", "Before criterion stepping, analysts should:", "B", {
    A: { text: "Skip baseline entirely.", rationale: "Stable baseline anchors staircase." },
    B: { text: "Establish stable baseline so hops are distinguishable from noise.", rationale: "Variability confounds criterion attribution." },
    C: { text: "Delete low data points.", rationale: "Honest data required." },
    D: { text: "Use anecdotes only.", rationale: "Graphed data required." },
  }),
  bx("mod14-q8", "Socially valid benchmarks in changing-criterion designs:", "A", {
    A: { text: "Are milestones stakeholders recognize—not clinician-only thresholds.", rationale: "Applied meaningfulness and Domain E alignment." },
    B: { text: "Must remain secret from caregivers.", rationale: "Stakeholder alignment required." },
    C: { text: "Replace all measurement.", rationale: "Benchmarks guide criteria—data remain." },
    D: { text: "Eliminate fidelity notes.", rationale: "Fidelity still required." },
  }),
  bx("mod14-q9", "Graph shows elite criterion tier but schedule still at entry reinforcement level:", "D", {
    A: { text: "Perfect correspondence proof.", rationale: "Decoupling evident." },
    B: { text: "IOA issue only.", rationale: "Contingency-criterion mismatch is design threat." },
    C: { text: "Proof of punishment dominance.", rationale: "Correspondence failure." },
    D: { text: "Cosmetic relabeling without contingency change—weakens causal claim.", rationale: "Fix schedules or downgrade language." },
  }),
  bx("mod14-q10", "Stepwise reinforcement in changing-criterion designs:", "C", {
    A: { text: "Remains fixed regardless of criterion attainment.", rationale: "Reinforcement should track criterion hops." },
    B: { text: "Is optional decoration.", rationale: "Correspondence is analytic requirement." },
    C: { text: "Adjusts contingent on attaining each plotted criterion hop.", rationale: "Stepwise reinforcement definition." },
    D: { text: "Replaces informed consent.", rationale: "Complementary ethics duty." },
  }),
  bx("mod14-q11", "Exam trap: criterion shifts without reinforcement correspondence:", "B", {
    A: { text: "Strongest evidence of control.", rationale: "Async drift weakens inference." },
    B: { text: "High-yield error—fix fidelity or downgrade causal claims.", rationale: "Ch 9 CC confusion point." },
    C: { text: "Required by Cooper.", rationale: "Correspondence required—not decoupling." },
    D: { text: "Domain C only.", rationale: "Domain F + C + E." },
  }),
  bx("mod14-q12", "Exam trap: unstable baseline before criterion steps:", "A", {
    A: { text: "High-yield error—stabilize context before hopping criteria.", rationale: "Baseline stability trap." },
    B: { text: "Best practice to step immediately.", rationale: "Noise confounds hops." },
    C: { text: "Eliminates need for graphs.", rationale: "Graphs still central." },
    D: { text: "Proves MO abolishment.", rationale: "Design prerequisite issue." },
  }),
  bx("mod14-q13", "Weekly accuracy criterion 60→70→80% with matching reinforcement thinning:", "B", {
    A: { text: "Multiple baseline across behaviors.", rationale: "Stepwise criterion staircase." },
    B: { text: "Changing-criterion design with correspondence.", rationale: "Criteria and reinforcement climb together." },
    C: { text: "ABAB withdrawal.", rationale: "No withdrawal described." },
    D: { text: "Multielement alternation.", rationale: "Sequential criterion steps differ." },
  }),
  bx("mod14-q14", "On-task 5→10→15 minutes with praise tied to each level:", "D", {
    A: { text: "Reversal ABAB.", rationale: "Stepwise criteria." },
    B: { text: "Multiple baseline across settings.", rationale: "Criterion staircase." },
    C: { text: "Multielement same-day alternation.", rationale: "Sequential criterion steps." },
    D: { text: "Changing-criterion with correspondence check.", rationale: "Classic Ch 9 CC vignette." },
  }),
  bx("mod14-q15", "Correspondence readiness sweep—FIRST step:", "A", {
    A: { text: "Verify baseline stability before any criterion stepping begins.", rationale: "First step—establish preconditions before making analytic claims." },
    B: { text: "Announce elite criteria immediately.", rationale: "Baseline first." },
    C: { text: "Delete delivery logs.", rationale: "Stability before stepping." },
    D: { text: "Skip stakeholder benchmarks.", rationale: "Correspondence readiness order." },
  }),
  bx("mod14-q16", "Calibrate socially valid benchmark increments:", "C", {
    A: { text: "Optional after mastery claims.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    B: { text: "Replaces measurement.", rationale: "Benchmarks guide criteria." },
    C: { text: "Ensures milestones stakeholders recognize before strong causal claims.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    D: { text: "Eliminates fidelity notes.", rationale: "Complementary to correspondence." },
  }),
  bx("mod14-q17", "Align reinforcement deliveries with each criterion hop:", "B", {
    A: { text: "Cosmetic phase relabeling sufficient.", rationale: "Third step—implement transparently with honest measurement." },
    B: { text: "Core correspondence requirement on the timeline.", rationale: "Third step—implement transparently with honest measurement." },
    C: { text: "IOA substitute for contingencies.", rationale: "Substantive alignment." },
    D: { text: "Optional if graph looks good.", rationale: "Correspondence mandatory." },
  }),
  bx("mod14-q18", "Graph overlays tying deliveries to stair steps:", "D", {
    A: { text: "Optional decoration.", rationale: "Final step—make claims and follow through with documented review." },
    B: { text: "Replace informed consent.", rationale: "Audit tool." },
    C: { text: "Eliminate baseline.", rationale: "Overlay QA." },
    D: { text: "Support honest correspondence review and disclose limits before strong claims.", rationale: "Final step—make claims and follow through with documented review." },
  }),
  bx("mod14-q19", "Criterion step achieved but reinforcement not yet thinned:", "C", {
    A: { text: "Report mastery with full causal certainty.", rationale: "Fix correspondence first." },
    B: { text: "Delete the step from graph.", rationale: "Report and align contingencies." },
    C: { text: "Delay strong causal claims until reinforcement aligns with criterion.", rationale: "Correspondence prerequisite." },
    D: { text: "Switch to group design.", rationale: "Fix fidelity within design." },
  }),
  bx("mod14-q20", "High baseline variability before criterion steps:", "A", {
    A: { text: "Makes criterion hops hard to interpret as treatment effect.", rationale: "Stabilize before stepping." },
    B: { text: "Proves experimental control.", rationale: "Noise confounds." },
    C: { text: "Eliminates need for fidelity.", rationale: "Fidelity always matters." },
    D: { text: "Requires group statistics.", rationale: "Single-subject issue." },
  }),
  bx("mod14-q21", "Fidelity logs in changing-criterion design should show:", "D", {
    A: { text: "Only final outcome.", rationale: "Each step needs contingency documentation." },
    B: { text: "Caregiver zodiac signs.", rationale: "Procedural fidelity focus." },
    C: { text: "IOA only post hoc.", rationale: "IV implementation at each criterion." },
    D: { text: "What reinforcement contingency was active at each criterion shift.", rationale: "Auditable correspondence." },
  }),
  bx("mod14-q22", "Changing criterion vs multiple baseline (Chapter 9):", "C", {
    A: { text: "Identical logic.", rationale: "CC steps criteria; MB staggers IV across tiers." },
    B: { text: "CC requires full withdrawal.", rationale: "CC often avoids withdrawal." },
    C: { text: "CC raises performance criteria in stages; MB replicates staggered onsets across tiers.", rationale: "Both Ch 9—different control logic." },
    D: { text: "Neither uses graphs.", rationale: "Both rely on visual inspection." },
  }),
  bx("mod14-q23", "Thinning reinforcement only after criterion met illustrates:", "C", {
    A: { text: "Multiple baseline stagger.", rationale: "CC correspondence logic." },
    B: { text: "Withdrawal resurgence.", rationale: "Criterion-contingent thinning." },
    C: { text: "Changing-criterion correspondence.", rationale: "Consequence tracks mastery step." },
    D: { text: "IOA interval method.", rationale: "Design issue." },
  }),
  bx("mod14-q24", "Decoupled criterion threat emerges when:", "B", {
    A: { text: "Reinforcement tightly tracks staged mastery shifts.", rationale: "That is correspondence." },
    B: { text: "Criterion leaps occur without contingency alignment confusing attribution.", rationale: "Overfitting/decoupling definition." },
    C: { text: "Graph axes remain proportional.", rationale: "Irrelevant to decoupling." },
    D: { text: "Multiple baseline tiers stagger.", rationale: "Different design family." },
  }),
  bx("mod14-q25", "Domain F changing-criterion items often test:", "A", {
    A: { text: "Whether correspondence logic supports experimental control narrative.", rationale: "Domain F analytic design." },
    B: { text: "MO definition only.", rationale: "Design discrimination focus." },
    C: { text: "Verbal operants only.", rationale: "Experimental design domain." },
    D: { text: "Billing codes.", rationale: "Analytic design focus." },
  }),
  bx("mod14-q26", "Domain C changing-criterion items often test:", "D", {
    A: { text: "Phylogeny trivia.", rationale: "Timestamped reinforcement logs." },
    B: { text: "Marketing claims only.", rationale: "Fidelity at each hop." },
    C: { text: "Group t-tests.", rationale: "Single-subject fidelity." },
    D: { text: "Timestamped reinforcement logs and fidelity at each criterion step.", rationale: "Domain C measurement integrity." },
  }),
  bx("mod14-q27", "Domain E changing-criterion items often test:", "B", {
    A: { text: "Hiding delivery spreadsheets.", rationale: "Honest milestone labeling." },
    B: { text: "Socially valid benchmarks and honest reporting of correspondence limits.", rationale: "Domain E transparency." },
    C: { text: "Deleting failed criterion steps.", rationale: "Ethical breach." },
    D: { text: "Covert schedule changes.", rationale: "Violates ethics." },
  }),
  bx("mod14-q28", "Exam trap: confusing CC stairs with multielement alternation:", "D", {
    A: { text: "Both identical.", rationale: "CC steps criteria; multielement alternates conditions." },
    B: { text: "Both require withdrawal.", rationale: "Neither requires full withdrawal." },
    C: { text: "CC is group design only.", rationale: "Both single-subject." },
    D: { text: "High-yield error—CC is sequential criterion stepping; multielement is rapid condition alternation (Ch 8).", rationale: "Design family discrimination." },
  }),
  bx("mod14-q29", "Exam trap: cosmetic phase relabeling without contingency change:", "C", {
    A: { text: "Acceptable shortcut.", rationale: "Ethical breach of correspondence." },
    B: { text: "Domain F only.", rationale: "Domain F + C + E." },
    C: { text: "High-yield error—contingencies must change with criterion hops on timeline.", rationale: "Cosmetic relabeling trap." },
    D: { text: "Required for funders.", rationale: "Never acceptable." },
  }),
  bx("mod14-q30", "BCBA stem: director removes delivery logs before audit while stair graphs polished:", "A", {
    A: { text: "Restore verified delivery logs overlaid against criterion hops; annotate lag; disclose honestly.", rationale: "Domain C + E violation vignette." },
    B: { text: "Ship sanitized decks preserving optics.", rationale: "Scrubbing evidence forbidden." },
    C: { text: "Password-protect schedules from reviewers.", rationale: "Transparency required." },
    D: { text: "Delete criterion phases entirely.", rationale: "Misrepresents evidence." },
  }),
  bx("mod14-q31", "BCBA stem: funding brief omits stakeholder agreement on mastery increments:", "D", {
    A: { text: "Acceptable if graph looks good.", rationale: "Benchmark calibration required." },
    B: { text: "IOA issue only.", rationale: "Domain E social validity." },
    C: { text: "Proof correspondence irrelevant.", rationale: "Stakeholder benchmarks central." },
    D: { text: "Stakeholder-aligned benchmark calibration lapse—revise tiers with caregiver input.", rationale: "Social validity vignette." },
  }),
  bx("mod14-q32", "BCBA stem: team advances criterion weekly despite chaotic baseline variability:", "B", {
    A: { text: "Best practice for rapid mastery.", rationale: "Stabilize baseline first." },
    B: { text: "Premature hopping confounds attribution—stabilize context before stepping.", rationale: "Baseline stability vignette." },
    C: { text: "Proof intervention ineffective.", rationale: "Design implementation issue." },
    D: { text: "Switch to multielement.", rationale: "Fix CC prerequisites first." },
  }),
  bx("mod14-q33", "Visual overlay of reinforcement markers atop criterion breakpoints:", "C", {
    A: { text: "Optional decoration.", rationale: "Coupling QA tool." },
    B: { text: "Replaces IOA always.", rationale: "Complementary audit." },
    C: { text: "Supports correspondence honesty reviewers can audit.", rationale: "Visual coupling QA." },
    D: { text: "Proves respondent extinction.", rationale: "Operant CC context." },
  }),
  bx("mod14-q34", "Ethical reversal substitute via changing-criterion:", "A", {
    A: { text: "Still requires correspondence and socially valid benchmarks.", rationale: "Ethical substitute—not documentation shortcut." },
    B: { text: "Relaxes all documentation standards.", rationale: "Transparency still required." },
    C: { text: "Eliminates measurement.", rationale: "Measurement continues." },
    D: { text: "Allows covert contingency changes.", rationale: "Violates ethics." },
  }),
  bx("mod14-q35", "Graph shows criterion lines stepping up; behavior follows each step after brief variability:", "B", {
    A: { text: "Multiple baseline only.", rationale: "Stepwise tracking suggests CC." },
    B: { text: "Changing-criterion pattern if reinforcement correspondence documented.", rationale: "Staircase performance tracking." },
    C: { text: "Multielement only.", rationale: "Different alternation logic." },
    D: { text: "No design identifiable.", rationale: "CC pattern described." },
  }),
  bx("mod14-q36", "Criterion shift definition:", "D", {
    A: { text: "Random graph relabeling.", rationale: "Documented mastery increment." },
    B: { text: "Withdrawal of all reinforcement.", rationale: "Stepwise increase in performance standard." },
    C: { text: "IOA calculation.", rationale: "Design element." },
    D: { text: "Documented mastery increment stepping once prior tier meets stability.", rationale: "Criterion shift definition." },
  }),
  bx("mod14-q37", "When schedules stray from criterion announcements, analysts should:", "C", {
    A: { text: "Declare mastery with certainty.", rationale: "Tentative language until realignment." },
    B: { text: "Delete asynchronous data.", rationale: "Report honestly." },
    C: { text: "Downgrade causal claims; fix fidelity; disclose lag.", rationale: "Async drift response." },
    D: { text: "Switch to group design.", rationale: "Fix within CC framework." },
  }),
  bx("mod14-q38", "High-Yield Confusion Point—CC vs MB stagger:", "A", {
    A: { text: "CC steps performance criteria with contingent reinforcement; MB replicates staggered onsets across tiers.", rationale: "Both Ch 9—different logic." },
    B: { text: "Both require full withdrawal.", rationale: "Neither requires full withdrawal." },
    C: { text: "CC is group design; MB is single subject.", rationale: "Both single-subject." },
    D: { text: "CC never uses baselines.", rationale: "Baseline stability precedes steps." },
  }),
  bx("mod14-q39", "Pre-stair baseline stability means:", "B", {
    A: { text: "Baseline optional once intervention starts.", rationale: "Controlled variability before hopping." },
    B: { text: "Controlled variability envelopes before hopping criteria so jitter is not mistaken for steps.", rationale: "Pre-stair stability definition." },
    C: { text: "Zero variability required always.", rationale: "Stable enough to discriminate hops." },
    D: { text: "IOA at 100% only.", rationale: "Separate construct." },
  }),
  bx("mod14-q40", "Benchmark calibration in CC designs:", "D", {
    A: { text: "Clinician-only thresholds acceptable.", rationale: "Stakeholder-valued outcomes." },
    B: { text: "Replaces graphs.", rationale: "Guides criterion tiers." },
    C: { text: "Optional for adolescents.", rationale: "Applied to all CC tiers." },
    D: { text: "Aligns stair thresholds with stakeholder-valued outcomes—not arbitrary staircases.", rationale: "Benchmark calibration definition." },
  }),
  bx("mod14-q41", "Changing-criterion when reversal would harm learner:", "C", {
    A: { text: "Forces full ABAB anyway.", rationale: "Ethical limits apply." },
    B: { text: "Eliminates all documentation.", rationale: "Transparency required." },
    C: { text: "Provides ethical substitute with correspondence and benchmark transparency.", rationale: "Cooper Ch 9 logic." },
    D: { text: "Allows covert thinning.", rationale: "Violates consent and fidelity." },
  }),
  bx("mod14-q42", "Reinforcement density thins only after mastery confirmation at each tier:", "A", {
    A: { text: "Exemplifies stepwise reinforcement with correspondence.", rationale: "Contingent on attainment." },
    B: { text: "Proves multiple baseline replication.", rationale: "CC logic." },
    C: { text: "Demonstrates respondent extinction.", rationale: "Operant CC context." },
    D: { text: "IOA method selection.", rationale: "Design correspondence." },
  }),
  bx("mod14-q43", "Exam: alternating two treatments same learner same week:", "D", {
    A: { text: "Changing criterion.", rationale: "Alternation—not criterion steps." },
    B: { text: "Multiple baseline.", rationale: "Multielement Ch 8." },
    C: { text: "CC with correspondence.", rationale: "Same-week alternation is ATD." },
    D: { text: "Multielement (alternating treatments)—Chapter 8, not CC staircase.", rationale: "Design family discrimination." },
  }),
  bx("mod14-q44", "Phase lines in changing-criterion must align with:", "B", {
    A: { text: "Marketing deck schedule.", rationale: "Documented criterion and contingency changes." },
    B: { text: "Timestamped criterion shifts and fidelity notes on reinforcement changes.", rationale: "Correspondence audibility." },
    C: { text: "IOA formulas only.", rationale: "Contingency documentation." },
    D: { text: "Punishment menu.", rationale: "Any IV type." },
  }),
  bx("mod14-q45", "High-Yield: deleting delivery evidence while claiming correspondence:", "C", {
    A: { text: "Standard reporting practice.", rationale: "Ethical and analytic breach." },
    B: { text: "Domain F only.", rationale: "Domain C + E." },
    C: { text: "High-yield error—restore logs and disclose coupling honestly.", rationale: "Scrubbing evidence trap." },
    D: { text: "Required before funders.", rationale: "Never acceptable." },
  }),
  bx("mod14-q46", "Cooper Chapter 9 CC supplement emphasizes:", "A", {
    A: { text: "Coupling criterion hops with reinforcement on timeline reviewers can audit.", rationale: "Cooper CC emphasis." },
    B: { text: "Cosmetic relabeling when schedules lag.", rationale: "Correspondence required." },
    C: { text: "Elimination of baselines.", rationale: "Baseline stability prerequisite." },
    D: { text: "Group statistics only.", rationale: "Single-subject design." },
  }),
  bx("mod14-q47", "BCBA stem: praise and tokens still delivered at 60% threshold while criterion posted at 80%:", "D", {
    A: { text: "Perfect CC demonstration.", rationale: "Correspondence failure." },
    B: { text: "IOA type error only.", rationale: "Contingency-criterion mismatch." },
    C: { text: "Proof of punishment.", rationale: "Decoupling issue." },
    D: { text: "Correspondence failure—align schedule with criterion or downgrade claim.", rationale: "Classic CC decoupling vignette." },
  }),
  bx("mod14-q48", "Tentative language in CC reporting appropriate when:", "B", {
    A: { text: "Graph looks polished.", rationale: "Coupling evidence governs claims." },
    B: { text: "Reinforcement deliveries lag criterion announcements or fidelity is incomplete.", rationale: "Async drift warrants caution." },
    C: { text: "Caregiver satisfied.", rationale: "Social validity supplements—not replaces—correspondence." },
    D: { text: "IOA is high.", rationale: "Correspondence still required." },
  }),
  bx("mod14-q49", "CC workflow order—BEST sequence:", "C", {
    A: { text: "Step criteria → skip baseline → report mastery.", rationale: "Baseline and benchmarks missing." },
    B: { text: "Announce elite tiers → fix schedules later.", rationale: "Correspondence readiness order violated." },
    C: { text: "Stable baseline → calibrate benchmarks → align reinforcement with each hop → graph overlays and honest limits.", rationale: "Correspondence readiness sweep." },
    D: { text: "Delete delivery logs → publish stairs.", rationale: "Invalid and unethical." },
  }),
  bx("mod14-q50", "Closing Chapter 9 changing-criterion principle:", "B", {
    A: { text: "Criteria may climb independently of reinforcement when funders pressure.", rationale: "Correspondence mandatory." },
    B: { text: "Verify baseline stability; calibrate socially valid benchmarks; align reinforcement with each criterion hop; graph and disclose coupling honestly—decoupling collapses causal claims.", rationale: "Chapter 9 CC integration." },
    C: { text: "Hide messy criterion steps for stakeholders.", rationale: "Transparent reporting." },
    D: { text: "Design replaces measurement.", rationale: "Measurement foundation remains." },
  }),
];
