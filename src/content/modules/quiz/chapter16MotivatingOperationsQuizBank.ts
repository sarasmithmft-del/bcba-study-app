import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 16 — Motivating Operations. */

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

export const CHAPTER_16_MO_QUIZ_BANK: BDSQuestion[] = [
  bx("mod17-q1", "Cooper Chapter 16 defines a motivating operation (MO) as:", "B", {
    A: { text: "A discriminative stimulus signaling reinforcement availability.", rationale: "SD signals availability; MO alters value." },
    B: { text: "An environmental variable that alters the reinforcing or punishing effectiveness of a stimulus and alters the frequency of behavior related to that consequence.", rationale: "Core MO definition—value-altering and behavior-altering effects." },
    C: { text: "Any antecedent that increases behavior.", rationale: "MO changes consequence effectiveness, not just any antecedent." },
    D: { text: "A permanent trait explaining performance.", rationale: "MO is a contextual variable, not a trait label." },
  }),
  bx("mod17-q4", "The value-altering effect of an MO:", "C", {
    A: { text: "Changes which SD is present.", rationale: "Value-altering changes reinforcer/punisher effectiveness." },
    B: { text: "Eliminates need for consequences.", rationale: "Alters how effective consequences are." },
    C: { text: "Alters how effective a reinforcer or punisher is as a consequence.", rationale: "Value-altering effect definition." },
    D: { text: "Guarantees identical response topography.", rationale: "Effectiveness shift, not topography lock." },
  }),
  bx("mod17-q5", "The behavior-altering effect of an MO:", "A", {
    A: { text: "Alters the current frequency of behavior that has been reinforced or punished by that consequence.", rationale: "Behavior-altering effect definition." },
    B: { text: "Changes SD identity only.", rationale: "Alters response frequency via value shift." },
    C: { text: "Replaces operant conditioning.", rationale: "MO modulates operant performance." },
    D: { text: "Applies only to respondent behavior.", rationale: "Operant frequency effect." },
  }),
  bx("mod17-q6", "Establishing operation (EO):", "D", {
    A: { text: "Decreases reinforcer effectiveness.", rationale: "AO decreases; EO increases." },
    B: { text: "Signals extinction is in effect.", rationale: "EO increases effectiveness." },
    C: { text: "Identical to SD.", rationale: "EO changes value; SD signals availability." },
    D: { text: "Increases the current effectiveness of a reinforcer or punisher.", rationale: "EO definition." },
  }),
  bx("mod17-q7", "Abolishing operation (AO):", "B", {
    A: { text: "Increases reinforcer effectiveness.", rationale: "EO increases; AO decreases." },
    B: { text: "Decreases the current effectiveness of a reinforcer or punisher.", rationale: "AO definition—satiation classic example." },
    C: { text: "Adds a punisher contingent on behavior.", rationale: "AO alters effectiveness, not contingent delivery." },
    D: { text: "Signals reinforcement availability.", rationale: "SD function." },
  }),
  bx("mod17-q8", "Deprivation of food functions as:", "A", {
    A: { text: "Establishing operation for food reinforcers—increases food effectiveness.", rationale: "Classic EO via deprivation." },
    B: { text: "Abolishing operation for food.", rationale: "Deprivation increases value." },
    C: { text: "Discriminative stimulus only.", rationale: "MO changes value." },
    D: { text: "Extinction.", rationale: "Deprivation is EO." },
  }),
  bx("mod17-q9", "Satiation after lunch reduces edible reinforcer effectiveness—best classified as:", "C", {
    A: { text: "Establishing operation.", rationale: "Satiation decreases effectiveness = AO." },
    B: { text: "SD failure because tokens still visible.", rationale: "SD can remain while value drops." },
    C: { text: "Abolishing operation weakening edible effectiveness.", rationale: "Classic AO/satiation vignette." },
    D: { text: "Respondent extinction.", rationale: "Operant MO analysis." },
  }),
  bx("mod17-q10", "Unconditioned motivating operation (UMO):", "D", {
    A: { text: "Learned only through pairing with other MOs.", rationale: "CMO is learned." },
    B: { text: "Identical to SD.", rationale: "UMO is unlearned MO." },
    C: { text: "Always a surrogate stimulus.", rationale: "UMO tied to phylogeny/respondent history." },
    D: { text: "Motivating operation based on phylogenic/respondent processes—not acquired through operant pairing.", rationale: "UMO definition." },
  }),
  bx("mod17-q11", "Conditioned motivating operation (CMO):", "B", {
    A: { text: "Present at birth without learning.", rationale: "UMO not CMO." },
    B: { text: "Motivating operation whose effects are acquired through correlation with other MO or reinforcement conditions.", rationale: "CMO definition." },
    C: { text: "Synonym for SD.", rationale: "CMO alters value; SD signals availability." },
    D: { text: "Extinction process.", rationale: "CMO is motivation variable." },
  }),
  bx("mod17-q12", "MO versus SD—MOST accurate distinction:", "A", {
    A: { text: "MO alters consequence value/effectiveness; SD signals when a consequence is available.", rationale: "High-yield exam hinge." },
    B: { text: "MO and SD are interchangeable.", rationale: "Different functions." },
    C: { text: "SD changes value; MO signals availability.", rationale: "Reversed." },
    D: { text: "Both only apply to punishment.", rationale: "Both apply to reinforcement and punishment." },
  }),
  bx("mod17-q13", "Same SD signals token availability; edibles lose impact after heavy snack:", "D", {
    A: { text: "SD disappeared because motivation changed.", rationale: "SD stable; MO (AO) changed value." },
    B: { text: "Proof treatment integrity failed.", rationale: "MO satiation explanation." },
    C: { text: "Positive punishment.", rationale: "Value shift via AO." },
    D: { text: "MO changed consequence value while SD availability stayed stable.", rationale: "Classic MO vs SD vignette." },
  }),
  bx("mod17-q14", "Reflexive conditioned motivating operation (CMO-R):", "C", {
    A: { text: "Neutral stimulus paired with delayed reinforcement only.", rationale: "CMO-T/transitive pattern." },
    B: { text: "UMO without learning.", rationale: "CMO-R is conditioned." },
    C: { text: "Stimulus acquires MO effects because it has been paired with another MO.", rationale: "CMO-R definition." },
    D: { text: "SD that signals extinction.", rationale: "MO subtype." },
  }),
  bx("mod17-q15", "Transitive conditioned motivating operation (CMO-T):", "B", {
    A: { text: "Stimulus paired directly with another MO only.", rationale: "CMO-R." },
    B: { text: "Stimulus correlated with a delayed reinforcer or MO—increases effectiveness of other reinforcers.", rationale: "CMO-T definition (e.g., time-to-reinforcer cues)." },
    C: { text: "Unconditioned deprivation.", rationale: "Learned MO." },
    D: { text: "Automatic reinforcement.", rationale: "CMO-T is conditioned MO." },
  }),
  bx("mod17-q16", "Surrogate conditioned motivating operation (CMO-S):", "A", {
    A: { text: "Formerly neutral stimulus paired with an MO stimulus acquires similar MO effects.", rationale: "CMO-S/surrogate definition." },
    B: { text: "Respondent elicitation only.", rationale: "Operant MO pathway." },
    C: { text: "Extinction burst.", rationale: "CMO-S is learned MO." },
    D: { text: "Fixed-ratio schedule.", rationale: "Schedule not MO subtype." },
  }),
  bx("mod17-q17", "Neutral hallway bell repeatedly predicts vending access; manding increases when bell alone presented:", "D", {
    A: { text: "UMO only—no learning.", rationale: "Acquired through correlation." },
    B: { text: "Pure SD with no MO component.", rationale: "Learned motivational pathway (CMO)." },
    C: { text: "Respondent extinction.", rationale: "CMO-S or CMO-R pathway." },
    D: { text: "Conditioned motivating operation acquired through correlated learning history.", rationale: "Classic CMO vignette." },
  }),
  bx("mod17-q18", "Skipped breakfast; edible tokens highly effective at 9 a.m.; after lunch effectiveness drops:", "B", {
    A: { text: "Pure SD failure.", rationale: "EO then AO cycle." },
    B: { text: "EO (deprivation) then AO (satiation) altering reinforcer value across the day.", rationale: "Deprivation/satiation timeline." },
    C: { text: "Negative punishment.", rationale: "MO value shift." },
    D: { text: "Extinction only.", rationale: "Reinforcers still delivered when effective." },
  }),
  bx("mod17-q19", "Painful injury increases escape-maintained responding despite unchanged task demands:", "C", {
    A: { text: "Permanent SD breakdown.", rationale: "UMO/MO increases escape value." },
    B: { text: "Positive reinforcement only.", rationale: "Escape is NR; MO increases aversive/escape effectiveness." },
    C: { text: "MO shift (EO for escape/aversive termination) under unchanged SD structure.", rationale: "Physiological MO vignette." },
    D: { text: "Stimulus equivalence.", rationale: "MO analysis." },
  }),
  bx("mod17-q20", "Exam trap: treating SD availability as the same as reinforcer value:", "A", {
    A: { text: "High-yield error—MO and SD answer different analytic questions.", rationale: "Core Ch 16 confusion point." },
    B: { text: "Correct integration.", rationale: "Value ≠ availability." },
    C: { text: "IOA issue only.", rationale: "Conceptual discrimination error." },
    D: { text: "Applies only to punishment.", rationale: "Applies to reinforcement too." },
  }),
  bx("mod17-q21", "Logging meals, meds, sleep beside behavior data:", "D", {
    A: { text: "Optional decoration.", rationale: "Context logs support MO hypotheses." },
    B: { text: "Replaces MO analysis.", rationale: "Supports auditable MO interpretation." },
    C: { text: "Proof MOs are irrelevant.", rationale: "Essential for MO-informed interpretation." },
    D: { text: "Strong context annotation supporting auditable MO hypotheses.", rationale: "Cooper documentation emphasis." },
  }),
  bx("mod17-q22", "Responding drops after sedating medication; SD and token procedures unchanged:", "B", {
    A: { text: "Proof SD never learned.", rationale: "Likely AO/MO shift from medication context." },
    B: { text: "Likely AO-style motivation shift requiring context-based plan review.", rationale: "Stable implementation + value shift = MO first." },
    C: { text: "Evidence reinforcement impossible.", rationale: "Reassess MO before global conclusions." },
    D: { text: "Positive punishment verified.", rationale: "MO hypothesis first." },
  }),
  bx("mod17-q23", "District report removes meal logs then claims reinforcement failed:", "A", {
    A: { text: "Documentation integrity problem distorting MO interpretation.", rationale: "Context omission misattributes AO effects." },
    B: { text: "Normal reporting.", rationale: "MO-relevant data omitted." },
    C: { text: "Proof AO irrelevant.", rationale: "Meals central to satiation analysis." },
    D: { text: "IOA calculation error.", rationale: "Reporting/interpretation issue." },
  }),
  bx("mod17-q24", "Ethical response when satiation reduces reinforcer power:", "C", {
    A: { text: "Label performance drops as disobedience.", rationale: "Blame narrative violates ethical MO practice." },
    B: { text: "Ignore context permanently.", rationale: "Revise hierarchy with context." },
    C: { text: "Update reinforcer assumptions and plan transparently—avoid blame-based explanations.", rationale: "Cooper ethical emphasis." },
    D: { text: "Terminate all reinforcement without review.", rationale: "Reassess and revise, not abandon without analysis." },
  }),
  bx("mod17-q25", "High-Yield: SD fidelity verified; reinforcing impact collapses after lunch:", "D", {
    A: { text: "Conclude SD failed exclusively.", rationale: "Interrogate MO/AO satiation first." },
    B: { text: "Positive punishment.", rationale: "AO satiation pattern." },
    C: { text: "Automatic reinforcement.", rationale: "MO value shift." },
    D: { text: "Interrogate abolishing operation/satiation before blaming cue delivery.", rationale: "Classic exam stem." },
  }),
  bx("mod17-q26", "Updating reinforcer choices after sleep/appetite changes; rates recover without SD changes:", "B", {
    A: { text: "Proof SD was only factor.", rationale: "MO-informed revision." },
    B: { text: "Motivation-informed plan revision aligned with Chapter 16 logic.", rationale: "Revise MO assumptions, not SD prompts." },
    C: { text: "Reason to stop context data.", rationale: "Continue context logging." },
    D: { text: "Extinction.", rationale: "Plan revision after MO reassessment." },
  }),
  bx("mod17-q27", "MO affects punisher effectiveness:", "A", {
    A: { text: "True—EO/AO can increase or decrease how effective punishers are.", rationale: "MO applies to reinforcers and punishers." },
    B: { text: "False—MOs apply only to reinforcers.", rationale: "Punisher effectiveness also altered." },
    C: { text: "False—only SD matters for punishment.", rationale: "MO modulates punisher value." },
    D: { text: "True only for positive punishment.", rationale: "All punishment processes affected by MO." },
  }),
  bx("mod17-q28", "Conditioned MO differs from UMO because:", "C", {
    A: { text: "CMO is phylogenic; UMO is learned.", rationale: "Reversed." },
    B: { text: "CMO is SD; UMO is MO.", rationale: "CMO is MO subtype." },
    C: { text: "CMO effects are acquired through learning history; UMO effects are unlearned.", rationale: "UMO vs CMO discrimination." },
    D: { text: "They are identical.", rationale: "Learning history distinguishes them." },
  }),
  bx("mod17-q29", "Domain F Chapter 16 items often test:", "B", {
    A: { text: "Schedule notation only.", rationale: "MO vs SD discrimination." },
    B: { text: "MO value-shift interpretation versus SD availability confusion.", rationale: "Domain F operant analysis." },
    C: { text: "Verbal operants exclusively.", rationale: "MO chapter focus." },
    D: { text: "Graph construction only.", rationale: "Contingency interpretation." },
  }),
  bx("mod17-q30", "Chapter 16 pairs with Chapter 17 (Stimulus Control) because:", "D", {
    A: { text: "MO and SD are the same process.", rationale: "Distinct but related." },
    B: { text: "Chapter 17 covers MO in depth.", rationale: "Ch 16 = MO; Ch 17 = SD." },
    C: { text: "Both are punishment only.", rationale: "Both support three-term analysis." },
    D: { text: "MO alters value; SD signals availability—both needed for complete contingency analysis.", rationale: "Sequential chapters in Cooper." },
  }),
  bx("mod17-q31", "Behavior-altering effect occurs because:", "A", {
    A: { text: "The value-altering effect changes how strongly the organism contacts the consequence.", rationale: "Behavior-altering follows value-altering." },
    B: { text: "SD always changes.", rationale: "Value shift drives frequency change." },
    C: { text: "Extinction is always in effect.", rationale: "MO modulates, not replaces, contingencies." },
    D: { text: "Respondent conditioning only.", rationale: "Operant frequency effect." },
  }),
  bx("mod17-q32", "Fixed reinforcer hierarchy claims without MO reassessment:", "C", {
    A: { text: "Best practice always.", rationale: "Hierarchies shift with EO/AO." },
    B: { text: "Required by Cooper.", rationale: "Reassess when context changes." },
    C: { text: "Problematic—motivation conditions change; hierarchies require revision.", rationale: "Cooper emphasis on dynamic MO context." },
    D: { text: "IOA substitute.", rationale: "Clinical MO concern." },
  }),
  bx("mod17-q33", "Four-process plus MO: SD stable, edibles less effective after snack—first hypothesis:", "D", {
    A: { text: "Positive punishment.", rationale: "AO satiation." },
    B: { text: "Negative reinforcement.", rationale: "Value decreased." },
    C: { text: "SD abolished.", rationale: "SD may remain." },
    D: { text: "Abolishing operation (satiation).", rationale: "MO before SD failure conclusion." },
  }),
  bx("mod17-q34", "CMO-S example: odor paired with food deprivation; odor alone later increases food-seeking:", "B", {
    A: { text: "UMO without learning.", rationale: "Learned surrogate MO." },
    B: { text: "Surrogate CMO—neutral stimulus acquired MO effects via pairing.", rationale: "CMO-S vignette." },
    C: { text: "Negative punishment.", rationale: "MO pathway." },
    D: { text: "Fixed interval schedule.", rationale: "CMO not schedule." },
  }),
  bx("mod17-q35", "Time-to-reinforcer cue that increases effectiveness of backup reinforcers:", "A", {
    A: { text: "Transitive CMO (CMO-T).", rationale: "Delayed reinforcement correlation." },
    B: { text: "Reflexive CMO only.", rationale: "CMO-T pattern." },
    C: { text: "UMO exclusively.", rationale: "Learned MO." },
    D: { text: "Extinction.", rationale: "MO subtype." },
  }),
  bx("mod17-q36", "Stimulus paired with another MO acquires similar MO effects:", "C", {
    A: { text: "CMO-T.", rationale: "CMO-R definition." },
    B: { text: "UMO.", rationale: "Conditioned pathway." },
    C: { text: "CMO-R (reflexive).", rationale: "Paired with another MO." },
    D: { text: "SD.", rationale: "MO subtype." },
  }),
  bx("mod17-q37", "Chapter 16 analytic sequence for performance drop:", "D", {
    A: { text: "Blame learner → intensify demands.", rationale: "MO-first sequence." },
    B: { text: "Ignore context → change SD only.", rationale: "Check MO and context." },
    C: { text: "Stop data collection.", rationale: "Gather context logs." },
    D: { text: "Check MO/value shift → check SD → review context logs → revise plan.", rationale: "Cooper workflow." },
  }),
  bx("mod17-q38", "Deprivation increases; satiation decreases:", "B", {
    A: { text: "SD strength only.", rationale: "MO alters reinforcer effectiveness." },
    B: { text: "Reinforcer effectiveness—deprivation is EO; satiation is AO.", rationale: "Classic EO/AO pairing." },
    C: { text: "Punisher effectiveness in opposite direction always.", rationale: "MO affects both; direction depends on operation." },
    D: { text: "Response cost magnitude.", rationale: "Unrelated to deprivation/satiation." },
  }),
  bx("mod17-q39", "Mislabeling satiation as SD failure:", "A", {
    A: { text: "High-yield Chapter 16 error.", rationale: "AO vs SD confusion." },
    B: { text: "Correct clinical interpretation.", rationale: "Satiation is AO." },
    C: { text: "Measurement IOA issue.", rationale: "Conceptual error." },
    D: { text: "Applies only to token economies.", rationale: "All reinforcer types." },
  }),
  bx("mod17-q40", "Socially mediated MO documentation:", "C", {
    A: { text: "Unnecessary if graphs look good.", rationale: "Context essential." },
    B: { text: "Replaces functional analysis always.", rationale: "Complements FA." },
    C: { text: "Caregiver-reported meals, meds, sleep aligned with session data.", rationale: "Auditable MO dossier." },
    D: { text: "Only for UMO cases.", rationale: "All MO analysis." },
  }),
  bx("mod17-q41", "Board stem: post-lunch edible collapse, unchanged token SD:", "D", {
    A: { text: "SD extinction.", rationale: "AO satiation." },
    B: { text: "Negative reinforcement.", rationale: "Value drop." },
    C: { text: "Positive punishment.", rationale: "AO pattern." },
    D: { text: "Abolishing operation (satiation).", rationale: "Classic Cooper item." },
  }),
  bx("mod17-q42", "MO concept previewed in Chapter 2; systematic treatment in Chapter 16:", "B", {
    A: { text: "False—MO only in Chapter 2.", rationale: "Ch 2 preview; Ch 16 full treatment." },
    B: { text: "True—Cooper routes full MO taxonomy to Chapter 16.", rationale: "Catalog alignment." },
    C: { text: "False—MO is Chapter 31 only.", rationale: "Ch 16 primary." },
    D: { text: "True—MO only in Chapter 11.", rationale: "Ch 16 systematic." },
  }),
  bx("mod17-q43", "Ignoring UMO versus CMO pathways:", "C", {
    A: { text: "Best practice.", rationale: "Different implications for intervention." },
    B: { text: "IOA issue only.", rationale: "Conceptual discrimination." },
    C: { text: "High-yield error—biological vs learned MO require different interpretation.", rationale: "Ch 16 confusion point." },
    D: { text: "Applies only to respondent behavior.", rationale: "Operant MO pathways." },
  }),
  bx("mod17-q44", "Escape from demands during timeout increasing problem behavior:", "A", {
    A: { text: "Punishment trap via NR escape—related MO/ contingency analysis.", rationale: "Cross-chapter but MO-relevant." },
    B: { text: "Verified AO.", rationale: "Escape NR increases behavior." },
    C: { text: "CMO-S only.", rationale: "Punishment trap concept." },
    D: { text: "Stimulus equivalence.", rationale: "Contingency trap." },
  }),
  bx("mod17-q45", "Value-altering effect precedes behavior-altering effect because:", "D", {
    A: { text: "SD always changes first.", rationale: "Value shift drives behavior change." },
    B: { text: "Extinction must occur.", rationale: "MO modulates effectiveness." },
    C: { text: "Respondent elicitation required.", rationale: "Operant MO logic." },
    D: { text: "Changed consequence effectiveness alters how strongly behavior contacts the contingency.", rationale: "Sequential MO effects." },
  }),
  bx("mod17-q46", "Least restrictive MO-informed practice:", "B", {
    A: { text: "Permanent single reinforcer list.", rationale: "Dynamic reassessment." },
    B: { text: "Revise reinforcer menus and session timing based on documented EO/AO context.", rationale: "Humane MO-informed care." },
    C: { text: "Skip meal logs.", rationale: "Context required." },
    D: { text: "Blame noncompliance first.", rationale: "Ethical MO practice." },
  }),
  bx("mod17-q47", "High-Yield: bell predicts food; bell alone increases manding:", "C", {
    A: { text: "UMO only.", rationale: "Learned CMO." },
    B: { text: "Automatic reinforcement.", rationale: "CMO pathway." },
    C: { text: "CMO acquired through correlated history.", rationale: "Conditioned MO vignette." },
    D: { text: "Negative punishment.", rationale: "MO not punishment." },
  }),
  bx("mod17-q48", "Supervisor language when MO explains performance drop:", "A", {
    A: { text: "Context-driven variability with plan revision—not character blame.", rationale: "Domain E ethical MO reporting." },
    B: { text: "Learner noncompliance regardless of logs.", rationale: "Blame narrative." },
    C: { text: "Treatment failure without MO review.", rationale: "Check MO first." },
    D: { text: "Ignore medication context.", rationale: "Context logs required." },
  }),
  bx("mod17-q49", "BCBA stem: cafeteria lunch; edibles plummet; SD plus delivery ritual unchanged:", "A", {
    A: { text: "Abolishing operation weakening edible reinforcer effectiveness.", rationale: "Correct move—Abolishing operation weakening edible reinforcer effectiveness." },
    B: { text: "SD vanished because tokens visible.", rationale: "SD can remain." },
    C: { text: "Respondent extinction.", rationale: "Operant MO." },
    D: { text: "Negative reinforcement.", rationale: "AO satiation." },
  }),
  bx("mod17-q50", "Closing Chapter 16 principle:", "B", {
    A: { text: "SD and MO are identical—use either label.", rationale: "Distinct functions." },
    B: { text: "Separate value shifts (MO) from availability cues (SD); document context; revise plans when motivation changes.", rationale: "Chapter 16 integration." },
    C: { text: "Fixed hierarchies never need updating.", rationale: "Dynamic MO context." },
    D: { text: "Satiation proves SD failure.", rationale: "AO not SD failure." },
  }),
];
