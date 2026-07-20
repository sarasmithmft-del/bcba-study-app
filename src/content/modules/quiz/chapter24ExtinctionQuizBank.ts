import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 24 — Extinction. */

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

export const CHAPTER_24_EXTINCTION_QUIZ_BANK: BDSQuestion[] = [
  bx("mod25-q1", "Burst spikes during extinction—trainer labels learner noncompliant sabotage. MOST supervisory correction?", "B", {
    A: { text: "Approve punishment-forward stance.", rationale: "Bursts are lawful phenomena." },
    B: { text: "Reframe bursts as predictable extinction phenomena while verifying integrity and supports.", rationale: "Correct move—Reframe bursts as predictable extinction phenomena while verifying integrity and supports." },
    C: { text: "Restart reinforcement covertly without documentation.", rationale: "Integrity breach." },
    D: { text: "Ignore safety plan because graph ascended.", rationale: "Burst expected initially." },
  }),
  bx("mod25-q4", "Cooper Chapter 24 defines extinction as:", "C", {
    A: { text: "Adding aversive consequences after behavior.", rationale: "Punishment." },
    B: { text: "Reinforcing alternative behavior only.", rationale: "DRA—related but distinct." },
    C: { text: "Withholding reinforcement for a previously reinforced response class.", rationale: "Extinction definition." },
    D: { text: "Removing SD only.", rationale: "Reinforcer withdrawal." },
  }),
  bx("mod25-q5", "Extinction burst:", "A", {
    A: { text: "Temporary intensity or frequency spike when reinforcement first ceases.", rationale: "Burst definition." },
    B: { text: "Proof of learner sabotage.", rationale: "Lawful side effect." },
    C: { text: "Permanent treatment failure.", rationale: "Temporary phenomenon." },
    D: { text: "Identical to resurgence always.", rationale: "Distinct timing/context." },
  }),
  bx("mod25-q6", "Resurgence:", "D", {
    A: { text: "Never occurs after extinction.", rationale: "Common after context shifts." },
    B: { text: "Identical to initial burst only.", rationale: "Reappearance after change." },
    C: { text: "Proof punishment required.", rationale: "Analyze reinforcement/context." },
    D: { text: "Previously extinguished patterns reappear when contexts or reinforcement arrangements shift.", rationale: "Resurgence definition." },
  }),
  bx("mod25-q7", "Planned extinction:", "B", {
    A: { text: "Surprise withholding without telling stakeholders.", rationale: "Documented plan required." },
    B: { text: "Documented schedule and safety reviews before reinforcement truly halts.", rationale: "Planned extinction definition." },
    C: { text: "Identical to extinction burst.", rationale: "Preparation phase." },
    D: { text: "Optional when behavior mild.", rationale: "Safety review for severe forms." },
  }),
  bx("mod25-q8", "Extinction integrity:", "A", {
    A: { text: "Verification that competing reinforcement did not covertly replenish target behavior.", rationale: "Integrity definition." },
    B: { text: "IOA on burst counts only.", rationale: "Reinforcer withholding fidelity." },
    C: { text: "Optional marketing metric.", rationale: "Core methodological requirement." },
    D: { text: "Identical to treatment fidelity for DRA only.", rationale: "Extinction-specific." },
  }),
  bx("mod25-q9", "Alternative reinforcement plan during extinction:", "C", {
    A: { text: "Unnecessary if extinction used.", rationale: "Proactive scaffold." },
    B: { text: "Identical to punishment plan.", rationale: "Reinforce alternatives." },
    C: { text: "Proactive differential reinforcement scaffolding replacing removed contingencies.", rationale: "Alternative plan definition." },
    D: { text: "Covert reinforcer slips.", rationale: "Integrity violation." },
  }),
  bx("mod25-q10", "Exam trap: blaming learners for extinction bursts:", "D", {
    A: { text: "Correct clinical framing.", rationale: "Bursts predictable." },
    B: { text: "Domain C only issue.", rationale: "Domain E and F." },
    C: { text: "Required for graph movement.", rationale: "Analytic reframe." },
    D: { text: "High-yield error—bursts are lawful side effects when integrity maintained.", rationale: "Ch 24 confusion point." },
  }),
  bx("mod25-q11", "Exam trap: confusing resurgence with treatment failure without context change analysis:", "B", {
    A: { text: "Always correct conclusion.", rationale: "Context/reinforcement shift analysis." },
    B: { text: "High-yield error—resurgence may follow setting shifts or intermittent histories.", rationale: "Resurgence interpretation." },
    C: { text: "Identical to burst.", rationale: "Different phenomenon." },
    D: { text: "IOA issue only.", rationale: "Conceptual analysis." },
  }),
  bx("mod25-q12", "Exam trap: covert reinforcement during extinction:", "A", {
    A: { text: "High-yield error—collapses extinction integrity; requires transparent rework.", rationale: "mod25-q3 theme." },
    B: { text: "Best practice for staff morale.", rationale: "Integrity breach." },
    C: { text: "Required for bursts.", rationale: "Opposite of extinction." },
    D: { text: "Identical to DRA.", rationale: "Undocumented reinforcer." },
  }),
  bx("mod25-q13", "Extinction versus punishment:", "C", {
    A: { text: "Identical—both decrease behavior.", rationale: "Extinction withholds reinforcer; punishment adds aversive." },
    B: { text: "Punishment withholds reinforcer only.", rationale: "May add aversive." },
    C: { text: "Extinction removes maintaining reinforcer; punishment adds consequence decreasing behavior.", rationale: "High-yield discrimination." },
    D: { text: "Extinction always adds reprimands.", rationale: "Pure withdrawal." },
  }),
  bx("mod25-q14", "Resurgence after vacation despite intermittent reinforcement history:", "A", {
    A: { text: "Teach resurgence histories; widen narrative and bolster alternatives before blaming learners.", rationale: "Correct move—Teach resurgence histories; widen narrative and bolster alternatives before blaming learners." },
    B: { text: "Treat resurgence as proof treatment failed permanently.", rationale: "Lawful phenomenon." },
    C: { text: "Omit resurgence panels from reports.", rationale: "Honest reporting." },
    D: { text: "Reinforce extinction class covertly undocumented.", rationale: "Integrity violation." },
  }),
  bx("mod25-q15", "Staff admits slipped reinforcers during extinction lunches:", "A", {
    A: { text: "Extinction integrity collapsed—redo phase narrative after fidelity repair and stakeholder transparency.", rationale: "Correct move—Extinction integrity collapsed—redo phase narrative after fidelity repair and stakeholder transparency." },
    B: { text: "Minor snacks negligible if aggression dipped aesthetically.", rationale: "Any reinforcer can replenish." },
    C: { text: "Hide slips from supervisor.", rationale: "Domain E honesty." },
    D: { text: "Punish learner for resurgence.", rationale: "Methodological rework." },
  }),
  bx("mod25-q16", "Safety review before extinction MOST critical when:", "D", {
    A: { text: "Behavior is already low rate.", rationale: "Severe forms may escalate." },
    B: { text: "IOA is high.", rationale: "Risk of burst/escalation." },
    C: { text: "DRA already mastered.", rationale: "Safety for severe topographies." },
    D: { text: "Severe topographies could escalate when reinforcement withheld.", rationale: "Safety prerequisite." },
  }),
  bx("mod25-q17", "Graphing extinction windows should include:", "B", {
    A: { text: "Hero captions only.", rationale: "Burst magnitude/duration." },
    B: { text: "Magnitude and duration of bursts, latency changes, fidelity notes on reinforcer withholding.", rationale: "Domain C documentation." },
    C: { text: "Punishment counts exclusively.", rationale: "Extinction-focused metrics." },
    D: { text: "Parent anecdotes replacing data.", rationale: "Objective logs." },
  }),
  bx("mod25-q18", "Multi-element reinforcement histories:", "C", {
    A: { text: "Simplify extinction narratives automatically.", rationale: "Muddy simple stories." },
    B: { text: "Eliminate need for alternative reinforcement.", rationale: "Increase analytic complexity." },
    C: { text: "Require careful analysis—bursts/resurgence may be harder to interpret.", rationale: "Multi-element history note." },
    D: { text: "Prove extinction impossible.", rationale: "Still usable with planning." },
  }),
  bx("mod25-q19", "Telegraphed extinction strategies mean:", "A", {
    A: { text: "Families rehearse plan before reinforcement truly halts.", rationale: "Consent and preparation." },
    B: { text: "Surprise withholding for authenticity.", rationale: "Ethical violation." },
    C: { text: "Skip burst training.", rationale: "Train on bursts." },
    D: { text: "Covert only.", rationale: "Transparent planning." },
  }),
  bx("mod25-q20", "Spontaneous recovery:", "D", {
    A: { text: "Identical to resurgence always.", rationale: "Related but distinguishable." },
    B: { text: "Proof of sabotage.", rationale: "Temporary return without reinforcement." },
    C: { text: "Never occurs.", rationale: "Common phenomenon." },
    D: { text: "Temporary return of extinguished behavior after time passes without reinforcement.", rationale: "Spontaneous recovery definition." },
  }),
  bx("mod25-q21", "Domain F Chapter 24 items often test:", "C", {
    A: { text: "Token economy rules only.", rationale: "Burst/resurgence/integrity." },
    B: { text: "Chaining tactics.", rationale: "Extinction logic." },
    C: { text: "Burst vs resurgence, integrity collapse, extinction vs punishment.", rationale: "Domain F focus." },
    D: { text: "Equivalence probes only.", rationale: "Extinction fundamentals." },
  }),
  bx("mod25-q22", "Humane degradation plan if extinction risk spikes:", "B", {
    A: { text: "Escalate punishment silently.", rationale: "Return reinforcement/alternatives safely." },
    B: { text: "Pre-specified pathway to reinstate reinforcement or alternatives if safety thresholds exceeded.", rationale: "Safety degradation plan." },
    C: { text: "Ignore safety thresholds.", rationale: "Humane exit criteria." },
    D: { text: "Delete burst data.", rationale: "Transparent reporting." },
  }),
  bx("mod25-q23", "Extinction versus DRA (Chapter 25 preview):", "A", {
    A: { text: "Extinction withholds reinforcer for target; DRA reinforces alternative while withholding target reinforcer.", rationale: "Often combined clinically." },
    B: { text: "Identical procedures.", rationale: "DRA adds alternative reinforcement." },
    C: { text: "DRA never pairs with extinction.", rationale: "Common combination." },
    D: { text: "Extinction adds reinforcers.", rationale: "Withdrawal only." },
  }),
  bx("mod25-q24", "Intermittent reinforcement history before extinction:", "D", {
    A: { text: "Eliminates burst risk.", rationale: "May increase burst/resurgence complexity." },
    B: { text: "Makes extinction impossible.", rationale: "Requires careful planning." },
    C: { text: "Irrelevant to programming.", rationale: "Document history." },
    D: { text: "May produce stronger burst/resurgence effects—document and prepare teams.", rationale: "Partial reinforcement effect." },
  }),
  bx("mod25-q25", "Chapter 24 pairs with Chapter 25 (Differential Reinforcement) because:", "C", {
    A: { text: "They are identical.", rationale: "Extinction often paired with DRA/DRO." },
    B: { text: "DRA replaces all extinction.", rationale: "Complementary procedures." },
    C: { text: "Alternative reinforcement plans bridge extinction to functional replacement repertoires.", rationale: "Integration note." },
    D: { text: "Extinction is punishment.", rationale: "Reinforcer withdrawal." },
  }),
  bx("mod25-q26", "Covert extinction surprises:", "B", {
    A: { text: "Efficient clinical practice.", rationale: "Consent violation." },
    B: { text: "Domain E violation—stakeholders must understand withholding plan.", rationale: "Ethical standard." },
    C: { text: "Required for bursts.", rationale: "Telegraph plan." },
    D: { text: "IOA substitute.", rationale: "Consent issue." },
  }),
  bx("mod25-q27", "Training teams on extinction should include:", "A", {
    A: { text: "Predictable bursts, resurgence, integrity monitoring, non-punitive responses.", rationale: "Team training content." },
    B: { text: "Label bursts as sabotage.", rationale: "Analytic framing." },
    C: { text: "Hide burst phases from families.", rationale: "Transparency." },
    D: { text: "Skip alternative reinforcement.", rationale: "Core scaffold." },
  }),
  bx("mod25-q28", "Board stem: behavior decreases steadily; fidelity logs confirm reinforcer withheld:", "D", {
    A: { text: "Integrity collapsed.", rationale: "Expected extinction trend." },
    B: { text: "Punishment effect.", rationale: "Reinforcer withdrawal." },
    C: { text: "Proof of resurgence.", rationale: "Decrease phase." },
    D: { text: "Lawful extinction effect when integrity maintained.", rationale: "Positive outcome pattern." },
  }),
  bx("mod25-q29", "Indefinite extinction withholding without stakeholder consent:", "C", {
    A: { text: "Best practice.", rationale: "Consent and review required." },
    B: { text: "Domain C only.", rationale: "Domain E violation." },
    C: { text: "Ethical violation—planned schedules and consent scaffolding required.", rationale: "Ethical standard." },
    D: { text: "Required for IOA.", rationale: "Consent issue." },
  }),
  bx("mod25-q30", "High-Yield: team adds reprimands during extinction phase:", "B", {
    A: { text: "Pure extinction.", rationale: "Punishment added." },
    B: { text: "Extinction plus punishment—distinct from extinction alone.", rationale: "Confusion point." },
    C: { text: "DRA automatically.", rationale: "Aversive added." },
    D: { text: "MO only.", rationale: "Procedure change." },
  }),
  bx("mod25-q31", "Extinction safety sweep—FIRST step:", "A", {
    A: { text: "Complete risk review and stakeholder consent before withholding reinforcement.", rationale: "First step—establish preconditions before making analytic claims." },
    B: { text: "Graph bursts only.", rationale: "Review first." },
    C: { text: "Punish bursts.", rationale: "Safety and consent." },
    D: { text: "Skip alternative plan.", rationale: "Risk review prerequisite." },
  }),
  bx("mod25-q32", "Latency changes during extinction:", "C", {
    A: { text: "Irrelevant.", rationale: "Document pauses between responses." },
    B: { text: "MO measure only.", rationale: "Performance dimension." },
    C: { text: "May increase initially—document alongside rate and intensity.", rationale: "Latency in extinction." },
    D: { text: "Replaces integrity logs.", rationale: "Complementary metric." },
  }),
  bx("mod25-q33", "Supervisor sees burst spike; staff want to restart reinforcer secretly:", "D", {
    A: { text: "Approve covert reinforcement.", rationale: "Integrity and transparency." },
    B: { text: "Punish learner.", rationale: "Coach analytic response." },
    C: { text: "Delete burst data.", rationale: "Document burst phase." },
    D: { text: "Coach burst as lawful; verify integrity; maintain alternative supports; document phase.", rationale: "Supervisory standard." },
  }),
  bx("mod25-q34", "Medically informed oversight during extinction:", "B", {
    A: { text: "Never needed.", rationale: "May be required for severe/medical cases." },
    B: { text: "Appropriate when behavior has medical or safety dimensions requiring interdisciplinary review.", rationale: "Safety context." },
    C: { text: "Replaces consent.", rationale: "Complements consent." },
    D: { text: "Optional decoration.", rationale: "Risk management." },
  }),
  bx("mod25-q35", "Marketing extinction as humane while staff culture is punitive:", "A", {
    A: { text: "Domain E concern—extinction requires analytic compassionate supervision not blame culture.", rationale: "Ethical culture check." },
    B: { text: "Best practice marketing.", rationale: "Culture matters." },
    C: { text: "Domain C only.", rationale: "Ethics issue." },
    D: { text: "Required for bursts.", rationale: "Supervision climate." },
  }),
  bx("mod25-q36", "BCBA stem: resurgence after alternative reinforcement thinned:", "C", {
    A: { text: "Ignore—proves extinction failed forever.", rationale: "Analyze thinning/context." },
    B: { text: "Punish resurgence.", rationale: "Bolster alternatives." },
    C: { text: "Analyze whether alternative reinforcement thinned too quickly; bolster functional replacements.", rationale: "Resurgence programming." },
    D: { text: "Covertly reinforce target.", rationale: "Integrity issue." },
  }),
  bx("mod25-q37", "Fidelity notes during extinction prove:", "D", {
    A: { text: "Parent satisfaction only.", rationale: "Reinforcer withholding verified." },
    B: { text: "IOA on burst labels only.", rationale: "Integrity documentation." },
    C: { text: "Punishment delivery.", rationale: "Extinction fidelity." },
    D: { text: "Reinforcers truly withheld during extinction windows—not covertly replenished.", rationale: "Fidelity purpose." },
  }),
  bx("mod25-q38", "Extinction versus ignoring (noncontingent):", "B", {
    A: { text: "Identical always.", rationale: "Extinction is contingent withdrawal of maintaining reinforcer." },
    B: { text: "Extinction requires identifying and withholding the specific reinforcer maintaining the behavior.", rationale: "Functional analysis required." },
    C: { text: "Ignoring always equals extinction.", rationale: "May not withhold maintaining reinforcer." },
    D: { text: "Extinction adds reinforcers.", rationale: "Withdrawal." },
  }),
  bx("mod25-q39", "Protective plans during extinction:", "A", {
    A: { text: "Pre-specified safety responses if behavior escalates during burst phase.", rationale: "Protective planning." },
    B: { text: "Unnecessary if graph ascends.", rationale: "Burst may escalate." },
    C: { text: "Identical to punishment plan only.", rationale: "Safety-focused." },
    D: { text: "Hide from families.", rationale: "Transparent planning." },
  }),
  bx("mod25-q40", "Exam trap: skipping alternative reinforcement plan:", "D", {
    A: { text: "Cooper recommendation when safe.", rationale: "Proactive scaffold." },
    B: { text: "Required only for punishment.", rationale: "Extinction pairing." },
    C: { text: "Identical to DRO always.", rationale: "Alternative repertoire plan." },
    D: { text: "High-yield error—pair extinction with reinforcement for alternatives when ethically appropriate.", rationale: "Ch 24 confusion point." },
  }),
  bx("mod25-q41", "Behavior maintained by automatic reinforcement:", "C", {
    A: { text: "Standard operant extinction always applies simply.", rationale: "Sensory/sensory—complex analysis." },
    B: { text: "Extinction impossible to discuss.", rationale: "May require different approach." },
    C: { text: "May require specialized analysis—operant extinction targets socially mediated reinforcers.", rationale: "Automatic reinforcement caveat." },
    D: { text: "Punishment only option.", rationale: "Analytic assessment." },
  }),
  bx("mod25-q42", "Ethical extinction supervision prioritizes:", "B", {
    A: { text: "Blame-forward burst narratives.", rationale: "Compassionate analytic supervision." },
    B: { text: "Consent, safety review, integrity logs, alternative reinforcement, honest burst/resurgence reporting.", rationale: "Domain E + C." },
    C: { text: "Covert reinforcement for staff ease.", rationale: "Integrity." },
    D: { text: "Hide resurgence from payers.", rationale: "Transparency." },
  }),
  bx("mod25-q43", "Supervisor asks for fidelity repair after slipped reinforcers:", "A", {
    A: { text: "Appropriate—integrity collapse requires transparent phase rework.", rationale: "Supervisory standard." },
    B: { text: "Overreacting—snacks negligible.", rationale: "Any reinforcer matters." },
    C: { text: "Punish learner instead.", rationale: "Methodological fix." },
    D: { text: "Delete extinction phase.", rationale: "Rework with honesty." },
  }),
  bx("mod25-q44", "Partial reinforcement during extinction phase (accidental):", "C", {
    A: { text: "Strengthens extinction.", rationale: "Creates intermittent schedule—may strengthen." },
    B: { text: "Irrelevant.", rationale: "Integrity collapse risk." },
    C: { text: "Can produce intermittent schedule effects—undermines extinction integrity.", rationale: "Partial reinforcement risk." },
    D: { text: "Required for DRA.", rationale: "Accidental slip issue." },
  }),
  bx("mod25-q45", "BCBA stem: burst phase ending; rate declining with integrity verified:", "D", {
    A: { text: "Restart target reinforcement immediately.", rationale: "Continue extinction until criterion." },
    B: { text: "Add punishment.", rationale: "Lawful decrease." },
    C: { text: "Hide burst from report.", rationale: "Document full phase." },
    D: { text: "Expected progression—document burst phase and continue monitoring for resurgence.", rationale: "Extinction progression." },
  }),
  bx("mod25-q46", "Resurgence versus spontaneous recovery:", "A", {
    A: { text: "Resurgence often tied to context/reinforcement shifts; spontaneous recovery is temporary return after time without reinforcement.", rationale: "Discrimination." },
    B: { text: "Identical terms.", rationale: "Different mechanisms emphasized." },
    C: { text: "Both mean sabotage.", rationale: "Lawful phenomena." },
    D: { text: "Neither occurs clinically.", rationale: "Common observations." },
  }),
  bx("mod25-q47", "Stakeholder consent for extinction includes:", "C", {
    A: { text: "Hidden withholding for efficiency.", rationale: "Understandable disclosure." },
    B: { text: "Punishment authorization only.", rationale: "Extinction risks/bursts." },
    C: { text: "Understanding bursts, resurgence risks, alternatives, and safety plans.", rationale: "Informed consent content." },
    D: { text: "IOA signatures only.", rationale: "Broader consent." },
  }),
  bx("mod25-q48", "Cooper emphasizes documenting during extinction:", "B", {
    A: { text: "Parent applause counts only.", rationale: "Burst/resurgence/fidelity." },
    B: { text: "Burst magnitude/duration, resurgence, latency, integrity that reinforcers withheld.", rationale: "Measurement bundle." },
    C: { text: "Punishment frequency exclusively.", rationale: "Extinction metrics." },
    D: { text: "Chain latency only.", rationale: "Extinction-specific." },
  }),
  bx("mod25-q49", "Extinction burst versus increasing trend from reinforcement:", "D", {
    A: { text: "Identical.", rationale: "Burst follows withholding onset." },
    B: { text: "Both mean reinforcement increased.", rationale: "Burst follows cessation." },
    C: { text: "Burst proves reinforcement added.", rationale: "Opposite contingency." },
    D: { text: "Burst follows reinforcement cessation; increasing trend may indicate reinforcement still contacting behavior.", rationale: "Graph interpretation." },
  }),
  bx("mod25-q50", "Closing Chapter 24 principle:", "B", {
    A: { text: "Bursts prove sabotage—punish immediately.", rationale: "Lawful side effect." },
    B: { text: "Plan extinction with consent and safety; expect bursts; monitor integrity; teach resurgence; pair with alternative reinforcement; report honestly.", rationale: "Chapter 24 integration." },
    C: { text: "Covert reinforcement acceptable during lunches.", rationale: "Integrity violation." },
    D: { text: "Extinction equals punishment.", rationale: "Reinforcer withdrawal." },
  }),
];
