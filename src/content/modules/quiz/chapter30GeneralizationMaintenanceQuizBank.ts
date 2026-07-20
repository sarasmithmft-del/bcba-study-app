import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 30 — Generalization and Maintenance of Behavior Change. */

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

export const CHAPTER_30_GENERALIZATION_MAINTENANCE_QUIZ_BANK: BDSQuestion[] = [
  bx("mod31-q1", "Mastery declared on single therapist and single room—home data collapse. MOST accurate headline?", "C", {
    A: { text: "Generalization complete automatically.", rationale: "Generalization measured—not assumed." },
    B: { text: "Home data irrelevant.", rationale: "Community samples required." },
    C: { text: "Limited stimulus generalization—expand exemplars and community supports before claims harden.", rationale: "Correct move—Limited stimulus generalization—expand exemplars and community supports before claims harden." },
    D: { text: "Discharge immediately to save hours.", rationale: "Expand probes first." },
  }),
  bx("mod31-q4", "Cooper Chapter 30 generalization:", "A", {
    A: { text: "Behavior change spreads across settings, people, materials, responses, and time—measured not assumed.", rationale: "Generalization overview." },
    B: { text: "Clinic mastery alone proves community readiness.", rationale: "Breadth samples required." },
    C: { text: "Identical to initial acquisition.", rationale: "Generalization is distinct goal." },
    D: { text: "Optional after discharge.", rationale: "Planned during programming." },
  }),
  bx("mod31-q5", "Stimulus generalization:", "B", {
    A: { text: "Varied topographies same function.", rationale: "Antecedent variation." },
    B: { text: "Performing under novel antecedent variations tied to programmed training histories.", rationale: "Stimulus generalization definition." },
    C: { text: "Enduring after services thin.", rationale: "Maintenance definition." },
    D: { text: "Punishment across settings.", rationale: "Operant spread." },
  }),
  bx("mod31-q6", "Response generalization:", "D", {
    A: { text: "Novel antecedent only.", rationale: "Response topography variation." },
    B: { text: "Single rote response only.", rationale: "Varied topographies." },
    C: { text: "Maintenance probe.", rationale: "Generalization type." },
    D: { text: "Varied topographies accomplishing same function generalized across contexts.", rationale: "Response generalization definition." },
  }),
  bx("mod31-q7", "Maintenance:", "C", {
    A: { text: "Initial acquisition phase.", rationale: "Post-thinning endurance." },
    B: { text: "Clinic flashcard perfection only.", rationale: "Longitudinal durability." },
    C: { text: "Enduring levels after thinning formal supports or lengthening probes across time.", rationale: "Maintenance definition." },
    D: { text: "Extinction burst.", rationale: "Maintenance concept." },
  }),
  bx("mod31-q8", "Exemplar training:", "A", {
    A: { text: "Strategic diversification of discriminative stimuli preventing narrow rote mastery only.", rationale: "Exemplar training definition." },
    B: { text: "Single SD training always.", rationale: "Diversity of exemplars." },
    C: { text: "Post-discharge probe only.", rationale: "Programming tactic." },
    D: { text: "Punishment procedure.", rationale: "Generalization tactic." },
  }),
  bx("mod31-q9", "Indiscriminable contingencies:", "B", {
    A: { text: "Reinforcement easy to discriminate always.", rationale: "Difficult to discriminate." },
    B: { text: "Arranged reinforcement difficult to discriminate—supports wider stimulus control.", rationale: "Indiscriminable contingencies definition." },
    C: { text: "Maintenance failure.", rationale: "Generalization tactic." },
    D: { text: "Ethics violation always.", rationale: "Programming arrangement." },
  }),
  bx("mod31-q10", "Booster probes:", "D", {
    A: { text: "Optional marketing.", rationale: "Scheduled verification." },
    B: { text: "Initial acquisition trials.", rationale: "Post-treatment samples." },
    C: { text: "Punishment probes.", rationale: "Maintenance verification." },
    D: { text: "Scheduled post-treatment samples verifying maintenance reality—not assumed closure.", rationale: "Booster probe definition." },
  }),
  bx("mod31-q11", "Exam trap: declaring generalization from single setting or person:", "C", {
    A: { text: "Best practice.", rationale: "Breadth samples required." },
    B: { text: "Domain E only.", rationale: "Domain F + C." },
    C: { text: "High-yield error—generalization measured across settings, people, materials.", rationale: "Ch 30 confusion point." },
    D: { text: "Required for maintenance only.", rationale: "Generalization requirement." },
  }),
  bx("mod31-q12", "Exam trap: confusing maintenance with initial acquisition:", "A", {
    A: { text: "High-yield error—acquisition graphs do not prove post-discharge durability.", rationale: "Maintenance vs acquisition." },
    B: { text: "Correct—they are identical.", rationale: "Distinct phases." },
    C: { text: "Both require single setting only.", rationale: "Breadth across time." },
    D: { text: "Maintenance occurs before acquisition.", rationale: "Sequence error." },
  }),
  bx("mod31-q13", "District discharge cites mastery from single therapist/clinic—home probes absent:", "A", {
    A: { text: "Stimulus generalization undocumented—defer closure until community exemplars evidenced.", rationale: "Correct move—Stimulus generalization undocumented—defer closure until community exemplars evidenced." },
    B: { text: "Generalization irrelevant after clinic perfection.", rationale: "Breadth probes central." },
    C: { text: "Delete stakeholder maintenance interviews.", rationale: "Validity interviewing complements." },
    D: { text: "Blame home failures exclusively.", rationale: "Support design—not blame." },
  }),
  bx("mod31-q14", "Graphs trumpet durability; rapid reversion once vouchers end—panels omit caveat:", "A", {
    A: { text: "Domain E omission—figures must caveat fragility beside slopes so payers understand limits.", rationale: "Correct move—Domain E omission—figures must caveat fragility beside slopes so payers understand limits." },
    B: { text: "Reversion irrelevant if discharge signed.", rationale: "Paperwork cannot erase reversion." },
    C: { text: "Delete post-discharge data preserving optics.", rationale: "Suppressing dips misleads." },
    D: { text: "Assume natural communities always sustain gains mechanically.", rationale: "Community reinforcement empirical." },
  }),
  bx("mod31-q15", "Exam trap: skipping booster probes post-discharge:", "B", {
    A: { text: "Encouraged to save hours.", rationale: "Maintenance verification required." },
    B: { text: "High-yield error—maintenance unverified without scheduled post-treatment samples.", rationale: "Booster probe trap." },
    C: { text: "Domain F only.", rationale: "Domain C + E." },
    D: { text: "Applies to stimulus control only.", rationale: "Ch 30 context." },
  }),
  bx("mod31-q16", "Exam trap: narrow exemplar training without programmed diversity:", "D", {
    A: { text: "Optimal generalization strategy.", rationale: "Exemplar breadth required." },
    B: { text: "Response generalization only.", rationale: "Stimulus programming issue." },
    C: { text: "Maintenance procedure.", rationale: "Generalization programming." },
    D: { text: "High-yield error—learners fail with novel materials when only one SD trained.", rationale: "Narrow exemplar trap." },
  }),
  bx("mod31-q17", "Generalization maintenance sweep—FIRST step:", "C", {
    A: { text: "Discharge immediately.", rationale: "First step—establish preconditions before making analytic claims." },
    B: { text: "Blame families when probes fail.", rationale: "Design exemplar breadth first." },
    C: { text: "Design exemplar breadth and stakeholder routines before proclaiming generalized mastery.", rationale: "First step—establish preconditions before making analytic claims." },
    D: { text: "Delete failed probe data.", rationale: "Plan before claims." },
  }),
  bx("mod31-q18", "Schedule thinning and natural reinforcer scouting:", "B", {
    A: { text: "After silent discharge.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    B: { text: "With transparent criteria before assuming maintenance.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    C: { text: "Unnecessary if clinic data strong.", rationale: "Thinning planned." },
    D: { text: "Punishment phase.", rationale: "Maintenance planning." },
  }),
  bx("mod31-q19", "Collect maintenance samples across people, settings, materials:", "A", {
    A: { text: "Core verification step before durability claims.", rationale: "Third step—implement transparently with honest measurement." },
    B: { text: "Optional after billing closes.", rationale: "Required sampling." },
    C: { text: "Replaces informed consent.", rationale: "Measurement step." },
    D: { text: "Clinic-only sufficient.", rationale: "Breadth required." },
  }),
  bx("mod31-q20", "Iterate supports when probes fail rather than blaming families silently:", "D", {
    A: { text: "Domain F only.", rationale: "Domain E support design." },
    B: { text: "Optional kindness.", rationale: "Ethical requirement." },
    C: { text: "Delete failed probes.", rationale: "Transparent iteration." },
    D: { text: "Domain E—align plans with caregiver bandwidth and document cultural constraints.", rationale: "Final step—make claims and follow through with documented review." },
  }),
  bx("mod31-q21", "Domain F Chapter 30 items often test:", "C", {
    A: { text: "Token economy types only.", rationale: "Generalization/maintenance logic." },
    B: { text: "FBA modalities only.", rationale: "Ch 30 fundamentals." },
    C: { text: "Stimulus vs response generalization, maintenance vs acquisition, booster evidence.", rationale: "Domain F focus." },
    D: { text: "Verbal operants only.", rationale: "Generalization breadth." },
  }),
  bx("mod31-q22", "Natural communities of reinforcement:", "B", {
    A: { text: "Artificial clinic tokens only.", rationale: "Everyday contingencies." },
    B: { text: "Everyday contingencies sustaining behavior after formal services thin.", rationale: "Natural community definition." },
    C: { text: "Punishment networks.", rationale: "Maintenance supports." },
    D: { text: "Optional decoration.", rationale: "Maintenance planning." },
  }),
  bx("mod31-q23", "Social validity interviewing families about functional gains:", "A", {
    A: { text: "Complements objective maintenance probes with stakeholder perspective.", rationale: "Social validity role." },
    B: { text: "Replaces all graphs.", rationale: "Complementary evidence." },
    C: { text: "Optional marketing only.", rationale: "Validity assessment." },
    D: { text: "Prohibited by Domain C.", rationale: "Encouraged pairing." },
  }),
  bx("mod31-q24", "Intermittent integrity probes post-discharge:", "D", {
    A: { text: "Unnecessary after discharge.", rationale: "Maintenance verification." },
    B: { text: "Replace booster probes entirely.", rationale: "Complementary checks." },
    C: { text: "Punish families.", rationale: "Fidelity monitoring." },
    D: { text: "Verify treatment integrity and maintenance reality after formal services end.", rationale: "Post-discharge integrity." },
  }),
  bx("mod31-q25", "Chapter 30 pairs with Chapter 29 (Self-Management) because:", "B", {
    A: { text: "Unrelated chapters.", rationale: "Autonomy then generalize/maintain." },
    B: { text: "Self-management builds performer control; generalization/maintenance extend across settings and time.", rationale: "Integration note." },
    C: { text: "Self-management replaces generalization.", rationale: "Sequential goals." },
    D: { text: "Generalization is self-punishment.", rationale: "Operant spread." },
  }),
  bx("mod31-q26", "Graphs without longitudinal follow-through:", "C", {
    A: { text: "Best reporting practice.", rationale: "Misrepresent durability." },
    B: { text: "Domain F only.", rationale: "Domain C + E." },
    C: { text: "Misrepresent durability to payers and families—booster probes required.", rationale: "Longitudinal honesty." },
    D: { text: "Required for acquisition only.", rationale: "Maintenance reporting." },
  }),
  bx("mod31-q27", "Multiple control probes in generalization:", "A", {
    A: { text: "Test whether behavior occurs under varied controlling variables—not single-context rote.", rationale: "Multiple control purpose." },
    B: { text: "Punishment probes only.", rationale: "Stimulus/response samples." },
    C: { text: "Replace exemplar training.", rationale: "Complementary tactic." },
    D: { text: "Maintenance only.", rationale: "Generalization programming." },
  }),
  bx("mod31-q28", "Community partnerships in generalization:", "D", {
    A: { text: "Optional decoration.", rationale: "Support natural reinforcement." },
    B: { text: "Replace measurement.", rationale: "Complementary strategy." },
    C: { text: "Clinic-only sufficient.", rationale: "Community settings matter." },
    D: { text: "Keep clinicians from proclaiming mastery on single-environment flashcards alone.", rationale: "Community partnership role." },
  }),
  bx("mod31-q29", "BCBA stem: learner perfect with one RBT; fails with parent at home:", "B", {
    A: { text: "Maintenance achieved.", rationale: "Person/setting generalization failure." },
    B: { text: "Limited generalization across people/settings—program exemplar diversity.", rationale: "Person setting vignette." },
    C: { text: "Blame parent exclusively.", rationale: "Support design." },
    D: { text: "Discharge—clinic data sufficient.", rationale: "Home samples needed." },
  }),
  bx("mod31-q30", "BCBA stem: behavior 95% during treatment; zero data 90 days later:", "C", {
    A: { text: "Maintenance confirmed.", rationale: "No post-discharge evidence." },
    B: { text: "Generalization complete.", rationale: "Maintenance unverified." },
    C: { text: "Maintenance unverified—schedule booster probes before durability claims.", rationale: "Post-discharge gap vignette." },
    D: { text: "Delete follow-up requirement.", rationale: "Longitudinal samples." },
  }),
  bx("mod31-q31", "Cultural constraints affecting community reinforcement:", "A", {
    A: { text: "Document and design maintenance plans respecting constraints—not ignore or blame.", rationale: "Cultural humility." },
    B: { text: "Ignore—clinic plan universal.", rationale: "Context matters." },
    C: { text: "Reason to discharge silently.", rationale: "Iterate supports." },
    D: { text: "Replace all measurement.", rationale: "Design consideration." },
  }),
  bx("mod31-q32", "Caregiver bandwidth and maintenance plans:", "D", {
    A: { text: "Idealized homework packets regardless of capacity.", rationale: "Realistic routines." },
    B: { text: "Irrelevant to BCBAs.", rationale: "Align with bandwidth." },
    C: { text: "Excuse to skip all home probes.", rationale: "Feasible plans still required." },
    D: { text: "Align maintenance plans with realistic caregiver routines—not idealized packets alone.", rationale: "Bandwidth alignment." },
  }),
  bx("mod31-q33", "Stimulus generalization versus response generalization:", "B", {
    A: { text: "Identical concepts.", rationale: "Antecedent vs topography." },
    B: { text: "Stimulus = novel antecedents; response = varied topographies same function.", rationale: "Discrimination." },
    C: { text: "Both mean maintenance.", rationale: "Generalization types." },
    D: { text: "Response = novel settings only.", rationale: "Topography variation." },
  }),
  bx("mod31-q34", "High-Yield: clinic-only mastery before community exemplars:", "C", {
    A: { text: "Sufficient for discharge.", rationale: "Breadth required." },
    B: { text: "Maintenance proof.", rationale: "Generalization gap." },
    C: { text: "Error—defer closure until setting/person/material samples evidenced.", rationale: "Confusion point." },
    D: { text: "Required for ethics only.", rationale: "Domain F + C." },
  }),
  bx("mod31-q35", "Supervisor resists abandoning learners when generalization fails:", "A", {
    A: { text: "Ethical supervision—iterate supports and document rather than silent dropout.", rationale: "Supervisory standard." },
    B: { text: "Optional kindness.", rationale: "Domain E duty." },
    C: { text: "Discharge immediately.", rationale: "Support iteration." },
    D: { text: "Blame learner exclusively.", rationale: "Support design." },
  }),
  bx("mod31-q36", "Planned diversity of exemplars:", "D", {
    A: { text: "Train one flashcard forever.", rationale: "Diversity prevents narrow mastery." },
    B: { text: "Punishment procedure.", rationale: "Generalization programming." },
    C: { text: "Maintenance probe only.", rationale: "Programming during acquisition." },
    D: { text: "Prevents proclaiming mastery on single-environment rote performance.", rationale: "Exemplar diversity purpose." },
  }),
  bx("mod31-q37", "Honest caveats when artificial supports evaporate and reversion appears:", "B", {
    A: { text: "Optional footnote.", rationale: "Domain E requirement." },
    B: { text: "Required transparent reporting—figures must show fragility beside slopes.", rationale: "Honest reporting." },
    C: { text: "Delete reversion data.", rationale: "Transparency." },
    D: { text: "Assume natural communities fix automatically.", rationale: "Empirical verification." },
  }),
  bx("mod31-q38", "BCBA stem: team trains greeting only with one picture card:", "C", {
    A: { text: "Response generalization complete.", rationale: "Narrow exemplar issue." },
    B: { text: "Maintenance achieved.", rationale: "Stimulus programming gap." },
    C: { text: "Narrow exemplar training—diversify SDs across people and settings.", rationale: "Single SD vignette." },
    D: { text: "Discharge—flashcard perfect.", rationale: "Exemplar breadth." },
  }),
  bx("mod31-q39", "Reinforcement schedules thinning in maintenance:", "A", {
    A: { text: "Gradual reduction of artificial supports while monitoring durability.", rationale: "Schedule thinning." },
    B: { text: "Immediate removal of all reinforcement.", rationale: "Planned thinning." },
    C: { text: "Punishment increase.", rationale: "Maintenance tactic." },
    D: { text: "Unrelated to maintenance.", rationale: "Core maintenance strategy." },
  }),
  bx("mod31-q40", "Exam trap: assuming natural communities sustain gains mechanically:", "D", {
    A: { text: "Cooper's recommendation.", rationale: "Empirical scouting required." },
    B: { text: "Domain C only.", rationale: "Domain F + E." },
    C: { text: "Required after booster probes.", rationale: "Assumption error." },
    D: { text: "High-yield error—natural reinforcers must be identified and verified.", rationale: "Natural community trap." },
  }),
  bx("mod31-q41", "Ethical generalization supervision prioritizes:", "B", {
    A: { text: "Single-setting discharge for billing.", rationale: "Breadth and honesty." },
    B: { text: "Measured breadth, booster probes, honest reporting, support not blame.", rationale: "Domain E + C + F." },
    C: { text: "Omitting post-discharge reversion.", rationale: "Transparent reporting." },
    D: { text: "Blaming families silently.", rationale: "Support iteration." },
  }),
  bx("mod31-q42", "BCBA stem: interdependent group contingency labeled as generalization plan:", "A", {
    A: { text: "Category error—generalization requires stimulus/response breadth probes not group contingency alone.", rationale: "Concept discrimination." },
    B: { text: "Correct—identical concepts.", rationale: "Distinct procedures." },
    C: { text: "Maintenance definition.", rationale: "Generalization programming." },
    D: { text: "Booster probe.", rationale: "Programming distinction." },
  }),
  bx("mod31-q43", "Stimulus samples in maintenance measurement:", "C", {
    A: { text: "Clinic room only.", rationale: "People, settings, materials." },
    B: { text: "Optional.", rationale: "Core measurement." },
    C: { text: "Varied antecedent conditions across people, settings, and materials.", rationale: "Stimulus sampling." },
    D: { text: "Punishment counts.", rationale: "Generalization metric." },
  }),
  bx("mod31-q44", "Response samples in maintenance measurement:", "D", {
    A: { text: "Single topography only.", rationale: "Varied response forms." },
    B: { text: "Unrelated to Ch 30.", rationale: "Response generalization metric." },
    C: { text: "IOA on punishment.", rationale: "Response variation." },
    D: { text: "Whether varied topographies accomplish same function across contexts.", rationale: "Response sampling." },
  }),
  bx("mod31-q45", "Cooper emphasizes generalization is:", "A", {
    A: { text: "Measured across dimensions—not assumed from single-context performance.", rationale: "Cooper emphasis." },
    B: { text: "Automatic after acquisition.", rationale: "Programmed and verified." },
    C: { text: "Optional for school settings.", rationale: "Universal requirement." },
    D: { text: "Identical to maintenance.", rationale: "Related but distinct." },
  }),
  bx("mod31-q46", "Transparent criteria for thinning formal supports:", "B", {
    A: { text: "Hidden from families.", rationale: "Transparent criteria." },
    B: { text: "Documented benchmarks before reducing artificial reinforcement.", rationale: "Thinning transparency." },
    C: { text: "Unnecessary.", rationale: "Maintenance planning." },
    D: { text: "Punishment schedule.", rationale: "Reinforcement thinning." },
  }),
  bx("mod31-q47", "BCBA stem: payer report shows steep slope; no post-discharge panel:", "C", {
    A: { text: "Acceptable reporting.", rationale: "Longitudinal panel required." },
    B: { text: "Generalization proof.", rationale: "Maintenance unverified." },
    C: { text: "Reporting lapse—add maintenance/booster data and caveats about durability limits.", rationale: "Payer reporting vignette." },
    D: { text: "Delete acquisition data.", rationale: "Add follow-through." },
  }),
  bx("mod31-q48", "Generalization programming during acquisition versus maintenance planning:", "D", {
    A: { text: "Identical—no distinction.", rationale: "Program breadth early; verify durability later." },
    B: { text: "Maintenance before acquisition.", rationale: "Sequence error." },
    C: { text: "Generalization only after discharge.", rationale: "Plan during services." },
    D: { text: "Program exemplar breadth during acquisition; verify endurance with booster probes after thinning.", rationale: "Phase distinction." },
  }),
  bx("mod31-q49", "When home generalization probe fails, BEST next step:", "B", {
    A: { text: "Silent discharge.", rationale: "Iterate supports." },
    B: { text: "Redesign exemplars, scout natural reinforcers, align with caregiver bandwidth.", rationale: "Support iteration." },
    C: { text: "Blame family exclusively.", rationale: "Support design." },
    D: { text: "Delete failed probe.", rationale: "Transparent documentation." },
  }),
  bx("mod31-q50", "Closing Chapter 30 principle:", "C", {
    A: { text: "Clinic mastery alone proves community readiness.", rationale: "Breadth required." },
    B: { text: "Maintenance equals acquisition graph.", rationale: "Booster probes required." },
    C: { text: "Program exemplar breadth; thin with transparent criteria; sample across people/settings/materials; booster-probe maintenance; caveat fragility honestly; iterate supports—not silent blame.", rationale: "Chapter 30 integration." },
    D: { text: "Omit post-discharge reversion from reports.", rationale: "Domain E violation." },
  }),
];
