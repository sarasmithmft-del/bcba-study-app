import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 26 — Antecedent Interventions. */

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

export const CHAPTER_26_ANTECEDENT_INTERVENTIONS_QUIZ_BANK: BDSQuestion[] = [
  bx("mod27-q1", "District mandates NCR but staff hoard tokens for later, breaking schedules—supervisory priority?", "C", {
    A: { text: "Celebrate graphs anyway.", rationale: "Integrity collapse voids claims." },
    B: { text: "Replace NCR with seclusion casually.", rationale: "Restore fidelity first." },
    C: { text: "Restore schedule fidelity and supervisory coaching because integrity collapse voids analytic claims.", rationale: "Correct move—Restore schedule fidelity and supervisory coaching because integrity collapse voids analytic claims." },
    D: { text: "Delete measurement columns.", rationale: "Fidelity required." },
  }),
  bx("mod27-q4", "Cooper Chapter 26 antecedent interventions:", "B", {
    A: { text: "Withhold reinforcement for target behavior only.", rationale: "Extinction—consequence focus." },
    B: { text: "Remodel contexts before challenges contact reinforcement.", rationale: "Antecedent overview." },
    C: { text: "Add aversive consequences after behavior.", rationale: "Antecedent proactive shift." },
    D: { text: "Identical to FBA reporting only.", rationale: "Intervention tactics." },
  }),
  bx("mod27-q5", "Noncontingent reinforcement (NCR):", "A", {
    A: { text: "Time-based or fixed delivery of reinforcers independent of target behavior to alter MO context.", rationale: "NCR definition." },
    B: { text: "Reinforcement only after adaptive behavior.", rationale: "Noncontingent delivery." },
    C: { text: "Withholding all reinforcers.", rationale: "Delivers reinforcers." },
    D: { text: "Punishment schedule.", rationale: "Reinforcement procedure." },
  }),
  bx("mod27-q6", "High-probability request sequence:", "D", {
    A: { text: "Present hardest demand first.", rationale: "Easy requests first." },
    B: { text: "NCR on fixed interval.", rationale: "Momentum sequence." },
    C: { text: "Extinction of challenge.", rationale: "Compliance momentum." },
    D: { text: "Momentum built from easy compliance before presenting low-probability demands.", rationale: "High-p definition." },
  }),
  bx("mod27-q7", "Environmental rearrangement:", "C", {
    A: { text: "Verbal plan in meetings only.", rationale: "Physical/schedule redesign." },
    B: { text: "Punishment for elopement.", rationale: "Proactive trigger reduction." },
    C: { text: "Physical layout or schedule redesign adjusting evocative triggers proactively.", rationale: "Environmental rearrangement definition." },
    D: { text: "IOA on bursts only.", rationale: "Ecological intervention." },
  }),
  bx("mod27-q8", "Discriminative clarity:", "B", {
    A: { text: "Remove all SDs.", rationale: "Sharpen SD sets." },
    B: { text: "Sharpening SD sets so expected responses contact reinforcement predictably.", rationale: "Discriminative clarity definition." },
    C: { text: "MO abolishing operation only.", rationale: "Stimulus control." },
    D: { text: "Identical to NCR.", rationale: "SD-focused antecedent." },
  }),
  bx("mod27-q9", "Antecedent MO manipulation:", "A", {
    A: { text: "Adjusting establishing or abolishing operations before difficult tasks.", rationale: "MO manipulation definition." },
    B: { text: "Extinction of MO.", rationale: "MO adjustment." },
    C: { text: "Punishment for MO.", rationale: "Antecedent MO work." },
    D: { text: "Post-hoc consequence change only.", rationale: "Before task." },
  }),
  bx("mod27-q10", "NCR fidelity:", "D", {
    A: { text: "Intent documents sufficient.", rationale: "Delivery verification." },
    B: { text: "Optional after mastery.", rationale: "Ongoing during NCR." },
    C: { text: "Parent anecdotes only.", rationale: "Schedule logs." },
    D: { text: "Delivery logs verifying schedules truly ran—not symbolic plans alone.", rationale: "NCR fidelity definition." },
  }),
  bx("mod27-q11", "Exam trap: NCR without schedule fidelity:", "C", {
    A: { text: "Best practice when busy.", rationale: "Integrity required." },
    B: { text: "IOA issue only.", rationale: "Voided antecedent claims." },
    C: { text: "High-yield error—integrity collapse nullifies antecedent interpretation.", rationale: "Ch 26 confusion point." },
    D: { text: "Required for high-p only.", rationale: "NCR-specific." },
  }),
  bx("mod27-q12", "Exam trap: confusing antecedent interventions with extinction:", "B", {
    A: { text: "Correct—they are identical.", rationale: "Antecedent remodels context; extinction withholds reinforcer." },
    B: { text: "High-yield error—NCR delivers reinforcers; extinction withholds maintaining reinforcer for target.", rationale: "Discrimination." },
    C: { text: "Both withhold all reinforcement.", rationale: "NCR delivers noncontingently." },
    D: { text: "Extinction is antecedent only.", rationale: "Consequence procedure." },
  }),
  bx("mod27-q13", "Exam trap: attributing change to one antecedent when multiple changed:", "A", {
    A: { text: "High-yield error—document which antecedent variable was manipulated.", rationale: "Misattribution trap." },
    B: { text: "Correct single-cause attribution always.", rationale: "Multiple changes need documentation." },
    C: { text: "Domain E only.", rationale: "Domain F analytic issue." },
    D: { text: "Ignore collateral effects.", rationale: "Document changes." },
  }),
  bx("mod27-q14", "District NCR mandates on paper; tokens hoarded; graphs touted:", "A", {
    A: { text: "Restore schedule fidelity plus coaching logs because integrity collapse nullifies antecedent interpretations.", rationale: "Correct move—Restore schedule fidelity plus coaching logs because integrity collapse nullifies antecedent interpretations." },
    B: { text: "Celebrate graphs citing intent documents.", rationale: "Delivered contingencies matter." },
    C: { text: "Replace NCR with seclusion casually.", rationale: "Restore fidelity." },
    D: { text: "Delete measurement inconveniences.", rationale: "Accountability required." },
  }),
  bx("mod27-q15", "Antecedent plan only in slideshow; physical environment untouched for months:", "A", {
    A: { text: "Domain C fidelity failure—hypothesized rearrangement never occurred so outcome attributions lapse.", rationale: "Correct move—Domain C fidelity failure—hypothesized rearrangement never occurred so outcome attributions lapse." },
    B: { text: "Slide decks substitute implementation universally.", rationale: "Actual environmental contact." },
    C: { text: "MO excuses missing rearrangements.", rationale: "Fidelity failure distinct." },
    D: { text: "Ignore—graphs moved.", rationale: "Implementation required." },
  }),
  bx("mod27-q16", "Attention delivered every 3 minutes regardless of behavior:", "C", {
    A: { text: "DRA.", rationale: "Noncontingent schedule." },
    B: { text: "Extinction.", rationale: "Reinforcers delivered." },
    C: { text: "NCR—noncontingent reinforcement on time-based schedule.", rationale: "NCR example." },
    D: { text: "DRL.", rationale: "Fixed delivery." },
  }),
  bx("mod27-q17", "Stack three easy requests before presenting difficult worksheet:", "B", {
    A: { text: "NCR.", rationale: "High-p sequence." },
    B: { text: "High-probability request sequence—behavioral momentum.", rationale: "High-p example." },
    C: { text: "Extinction.", rationale: "Antecedent momentum tactic." },
    D: { text: "Positive punishment.", rationale: "Reinforcement-forward." },
  }),
  bx("mod27-q18", "Rearrange seating to reduce peer-triggered elopement:", "D", {
    A: { text: "High-p only.", rationale: "Environmental rearrangement." },
    B: { text: "NCR only.", rationale: "Layout change." },
    C: { text: "Extinction.", rationale: "Ecological antecedent." },
    D: { text: "Environmental rearrangement.", rationale: "Trigger reduction." },
  }),
  bx("mod27-q19", "Measurement for antecedent packages includes:", "A", {
    A: { text: "NCR schedule integrity, latency to engagement, collateral effects on untreated behaviors.", rationale: "Measurement bundle." },
    B: { text: "Punishment counts only.", rationale: "Antecedent metrics." },
    C: { text: "Parent applause only.", rationale: "Objective fidelity." },
    D: { text: "Chain latency only.", rationale: "Antecedent-specific." },
  }),
  bx("mod27-q20", "Collateral effects monitoring:", "C", {
    A: { text: "Unnecessary if target behavior improved.", rationale: "Untreated behaviors may shift." },
    B: { text: "Replaces fidelity logs.", rationale: "Complementary monitoring." },
    C: { text: "Tracks changes in untreated behaviors when antecedent packages implemented.", rationale: "Collateral effects definition." },
    D: { text: "Identical to IOA only.", rationale: "Program-wide effects." },
  }),
  bx("mod27-q21", "Pair antecedent packages with:", "B", {
    A: { text: "Random tactic selection.", rationale: "Functional hypothesis." },
    B: { text: "Functional hypotheses—MO, SD, ecological variables map to different stories.", rationale: "Hypothesis pairing." },
    C: { text: "Punishment-only plans.", rationale: "Reinforcement for adaptive behavior too." },
    D: { text: "No documentation.", rationale: "Document variables." },
  }),
  bx("mod27-q22", "High-p sequences without MO consideration:", "D", {
    A: { text: "Always sufficient.", rationale: "MO may affect compliance." },
    B: { text: "Replace all NCR.", rationale: "Consider MO context." },
    C: { text: "Identical to extinction.", rationale: "Momentum tactic." },
    D: { text: "High-yield gap—assess MO before attributing failure to noncompliance.", rationale: "MO consideration." },
  }),
  bx("mod27-q23", "Domain F Chapter 26 items often test:", "A", {
    A: { text: "NCR vs extinction, fidelity collapse, high-p identification, misattribution.", rationale: "Domain F focus." },
    B: { text: "Token economy only.", rationale: "Antecedent tactics." },
    C: { text: "Equivalence classes.", rationale: "Antecedent fundamentals." },
    D: { text: "Chaining only.", rationale: "NCR/high-p/environment." },
  }),
  bx("mod27-q24", "Antecedent interventions versus consequence-only programming:", "C", {
    A: { text: "Identical.", rationale: "Antecedents shift context before behavior." },
    B: { text: "Antecedents always replace all consequences.", rationale: "Layer with reinforcement." },
    C: { text: "Antecedents proactively alter evocative variables; consequence strategies respond after behavior.", rationale: "Discrimination." },
    D: { text: "Consequence-only is always superior.", rationale: "Integrated packages." },
  }),
  bx("mod27-q25", "Chapter 26 pairs with Chapter 27 (FBA) because:", "D", {
    A: { text: "They are identical.", rationale: "FBA informs antecedent selection." },
    B: { text: "Antecedent interventions replace FBA.", rationale: "Complementary." },
    C: { text: "FBA is consequence-only.", rationale: "Assessment guides antecedents." },
    D: { text: "Functional hypotheses from assessment guide which antecedent tactics fit.", rationale: "Integration note." },
  }),
  bx("mod27-q26", "Guardian-facing explanations for antecedent changes:", "B", {
    A: { text: "Hide environmental moves.", rationale: "Honest communication." },
    B: { text: "Describe what actually changed environmentally—not slideshow-only claims.", rationale: "Ethical transparency." },
    C: { text: "Marketing jargon only.", rationale: "Plain language honesty." },
    D: { text: "Blame learner noncompliance.", rationale: "Environmental focus." },
  }),
  bx("mod27-q27", "Using antecedent tactics as masks for neglect:", "A", {
    A: { text: "Domain E violation—antecedents require actual implementation and adaptive reinforcement.", rationale: "Neglect mask guardrail." },
    B: { text: "Efficient practice.", rationale: "Implementation required." },
    C: { text: "Required for NCR.", rationale: "Ethical breach." },
    D: { text: "IOA standard.", rationale: "Ethics issue." },
  }),
  bx("mod27-q28", "Strategies approximating restraint or seclusion risk:", "C", {
    A: { text: "Never document.", rationale: "Document and safeguard." },
    B: { text: "Default antecedent practice.", rationale: "Risk review required." },
    C: { text: "Require documentation, safeguards, and ethical review—not casual antecedent labels.", rationale: "Risk guardrail." },
    D: { text: "Replace all NCR.", rationale: "Case-specific review." },
  }),
  bx("mod27-q29", "Antecedent engineering sweep—FIRST step:", "D", {
    A: { text: "District-wide NCR mandate.", rationale: "Analyze evocative variables first." },
    B: { text: "Delete fidelity logs.", rationale: "Hypothesis before prescription." },
    C: { text: "Punish challenge behavior.", rationale: "Antecedent analysis." },
    D: { text: "Analyze hypothesized evocative variables before prescribing environmental moves.", rationale: "First step—establish preconditions before making analytic claims." },
  }),
  bx("mod27-q30", "High-Yield: withholding target reinforcer labeled as NCR:", "B", {
    A: { text: "Correct NCR.", rationale: "NCR delivers reinforcers." },
    B: { text: "Mislabel—may be extinction or omission; NCR is noncontingent delivery.", rationale: "Confusion point." },
    C: { text: "High-p sequence.", rationale: "Reinforcer delivery distinction." },
    D: { text: "Environmental rearrangement.", rationale: "Procedure mislabel." },
  }),
  bx("mod27-q31", "Latency from antecedent adjustment to engagement:", "A", {
    A: { text: "Documents how quickly context change produces adaptive engagement.", rationale: "Latency metric." },
    B: { text: "Irrelevant.", rationale: "Program evaluation." },
    C: { text: "MO measure only.", rationale: "Engagement timing." },
    D: { text: "Replaces NCR fidelity.", rationale: "Complementary." },
  }),
  bx("mod27-q32", "Layer antecedent strategies with:", "C", {
    A: { text: "Punishment only.", rationale: "Adaptive reinforcement contact." },
    B: { text: "No consequences.", rationale: "Reinforcement still needed." },
    C: { text: "Reinforcing consequences contacting adaptive behavior—not antecedents alone.", rationale: "Integrated package." },
    D: { text: "Extinction only always.", rationale: "Multicomponent plans." },
  }),
  bx("mod27-q33", "BCBA stem: NCR + high-p + seating change; team credits only NCR for improvement:", "D", {
    A: { text: "Correct attribution.", rationale: "Multiple changes documented." },
    B: { text: "Ignore high-p.", rationale: "Misattribution risk." },
    C: { text: "Delete environmental data.", rationale: "Triangulate variables." },
    D: { text: "Misattribution—document which antecedent components changed and monitor collateral effects.", rationale: "Multiple-change vignette." },
  }),
  bx("mod27-q34", "Behavioral momentum refers to:", "B", {
    A: { text: "Extinction burst.", rationale: "Compliance after high-p." },
    B: { text: "Increased probability of compliance after series of high-probability successes.", rationale: "Momentum definition." },
    C: { text: "NCR delivery rate.", rationale: "High-p concept." },
    D: { text: "Punishment intensity.", rationale: "Antecedent momentum." },
  }),
  bx("mod27-q35", "Evaluate collateral effects before:", "A", {
    A: { text: "Scaling district-wide antecedent mandates.", rationale: "Final step—make claims and follow through with documented review." },
    B: { text: "Any baseline.", rationale: "Before wide rollout." },
    C: { text: "IOA only.", rationale: "Program scaling decision." },
    D: { text: "Deleting graphs.", rationale: "Safety of scale-up." },
  }),
  bx("mod27-q36", "Staff verbalize environmental plan in meetings but never implement:", "C", {
    A: { text: "Sufficient fidelity.", rationale: "Implementation gap." },
    B: { text: "MO analysis replaces fidelity.", rationale: "Domain C failure." },
    C: { text: "Fidelity failure—outcome attributions to antecedent plan invalid.", rationale: "mod27-q3 theme." },
    D: { text: "Celebrate intent.", rationale: "Actual contact required." },
  }),
  bx("mod27-q37", "Ethical antecedent supervision prioritizes:", "D", {
    A: { text: "Slideshow-only plans.", rationale: "Implementation fidelity." },
    B: { text: "Hide collateral effects.", rationale: "Transparent monitoring." },
    C: { text: "Seclusion as NCR substitute.", rationale: "Safeguarded alternatives." },
    D: { text: "Fidelity logs, honest guardian communication, collateral review, no neglect masks.", rationale: "Domain E + C." },
  }),
  bx("mod27-q38", "Supervisor asks for NCR delivery logs when graphs improve:", "A", {
    A: { text: "Appropriate—verify schedule integrity before crediting NCR.", rationale: "Supervisory standard." },
    B: { text: "Unnecessary if behavior improved.", rationale: "Fidelity required." },
    C: { text: "Replace with anecdotes.", rationale: "Objective logs." },
    D: { text: "Punish staff.", rationale: "Coaching and repair." },
  }),
  bx("mod27-q39", "Sharpening visual schedule so transitions are predictable:", "B", {
    A: { text: "NCR.", rationale: "Discriminative clarity." },
    B: { text: "Discriminative clarity—SD sharpening antecedent.", rationale: "SD antecedent example." },
    C: { text: "Extinction.", rationale: "Cue predictability." },
    D: { text: "DRL.", rationale: "Antecedent SD work." },
  }),
  bx("mod27-q40", "Snack before difficult task to reduce escape-motivated behavior:", "C", {
    A: { text: "High-p sequence only.", rationale: "MO manipulation possible." },
    B: { text: "Extinction.", rationale: "MO/antecedent adjustment." },
    C: { text: "Antecedent MO manipulation—adjusting establishing operations before demand.", rationale: "MO example." },
    D: { text: "Positive punishment.", rationale: "MO reduction of aversive demand." },
  }),
  bx("mod27-q41", "NCR intended to reduce attention-maintained behavior:", "D", {
    A: { text: "Withhold all attention.", rationale: "NCR delivers attention noncontingently." },
    B: { text: "Punish attention-seeking.", rationale: "MO alteration via noncontingent delivery." },
    C: { text: "Extinction only always.", rationale: "NCR is antecedent/MO strategy." },
    D: { text: "Noncontingent attention may abolish deprivation for attention—verify hypothesis and fidelity.", rationale: "Functional fit check." },
  }),
  bx("mod27-q42", "BCBA stem: high-p fails; MO for escape high; no MO adjustment attempted:", "A", {
    A: { text: "Consider antecedent MO manipulation or demand adjustment—not only more high-p trials.", rationale: "MO vignette." },
    B: { text: "Add punishment.", rationale: "MO-informed antecedent." },
    C: { text: "Ignore MO.", rationale: "Assess establishing conditions." },
    D: { text: "Delete high-p data.", rationale: "Program revision." },
  }),
  bx("mod27-q43", "Document fidelity on NCR, high-p, and environmental tweaks:", "C", {
    A: { text: "Optional marketing.", rationale: "Core accountability." },
    B: { text: "Replaces functional assessment.", rationale: "Implementation evidence." },
    C: { text: "Enables valid attribution and stakeholder coaching.", rationale: "Fidelity purpose." },
    D: { text: "Identical to burst counts.", rationale: "Antecedent-specific." },
  }),
  bx("mod27-q44", "Antecedent intervention mislabeled as extinction:", "B", {
    A: { text: "Correct interchangeably.", rationale: "Different mechanisms." },
    B: { text: "Error—extinction withholds reinforcer; antecedent NCR may deliver reinforcers noncontingently.", rationale: "High-yield discrimination." },
    C: { text: "Both add punishment.", rationale: "Reinforcement distinctions." },
    D: { text: "Applies to chaining only.", rationale: "Ch 26 focus." },
  }),
  bx("mod27-q45", "Cooper cautions when mixing antecedent tactics without documentation:", "D", {
    A: { text: "Always improves clarity.", rationale: "Misattribution risk." },
    B: { text: "Required for IOA.", rationale: "Analytic documentation." },
    C: { text: "Eliminates collateral effects.", rationale: "Track multiple variables." },
    D: { text: "Graph shifts cannot be attributed to one tactic—document each change.", rationale: "Mixing guardrail." },
  }),
  bx("mod27-q46", "Restore schedule fidelity after token hoarding because:", "A", {
    A: { text: "Delivered contingencies must match planned NCR for valid antecedent interpretation.", rationale: "mod27-q1/q2 rationale." },
    B: { text: "Graphs always sufficient.", rationale: "Integrity matters." },
    C: { text: "Punishment next step.", rationale: "Fidelity repair." },
    D: { text: "Intent equals delivery.", rationale: "Operational integrity." },
  }),
  bx("mod27-q47", "Scaling district NCR mandates without fidelity monitoring:", "C", {
    A: { text: "Best practice.", rationale: "Collateral and fidelity first." },
    B: { text: "Required for high-p.", rationale: "Scale-up risk." },
    C: { text: "Risky—evaluate fidelity and collateral effects before wide rollout.", rationale: "Scale guardrail." },
    D: { text: "Replaces environmental rearrangement.", rationale: "Complementary tactics." },
  }),
  bx("mod27-q48", "Prompt hierarchies as antecedent support:", "B", {
    A: { text: "Unrelated to antecedent chapter.", rationale: "Antecedent prompt clarity." },
    B: { text: "Clarify antecedent assistance before behavior—pair with SD clarity and fading plans.", rationale: "Prompt as antecedent." },
    C: { text: "Identical to punishment.", rationale: "Antecedent assistance." },
    D: { text: "Replace all NCR.", rationale: "Layered package." },
  }),
  bx("mod27-q49", "Honest reporting when antecedent plan not implemented:", "D", {
    A: { text: "Claim full implementation.", rationale: "Data integrity." },
    B: { text: "Blame learner.", rationale: "Report fidelity gap." },
    C: { text: "Delete baseline.", rationale: "Transparent correction." },
    D: { text: "Document implementation failure; defer outcome claims until fidelity restored.", rationale: "Ethical reporting." },
  }),
  bx("mod27-q50", "Closing Chapter 26 principle:", "B", {
    A: { text: "NCR on paper equals implementation.", rationale: "Fidelity required." },
    B: { text: "Match antecedent tactic to hypothesis; implement with fidelity; monitor latency and collateral effects; communicate honestly; do not confuse with extinction.", rationale: "Chapter 26 integration." },
    C: { text: "Antecedents replace all reinforcement.", rationale: "Layer with consequences." },
    D: { text: "Multiple changes need no documentation.", rationale: "Document variables." },
  }),
];
