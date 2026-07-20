import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 17 — Stimulus Control. */

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

export const CHAPTER_17_SC_QUIZ_BANK: BDSQuestion[] = [
  bx("mod18-q1", "Echoic reinforced when card reads Cookie; withheld under identical prompting when card reads Juice—MOST precise characterization:", "A", {
    A: { text: "Stimulus discrimination / SD control via differential reinforcement across verbal antecedents.", rationale: "Different cards, different reinforcement outcomes = discrimination." },
    B: { text: "MO exclusively—identical topography proves no SD.", rationale: "Topography parity does not negate differential SD histories." },
    C: { text: "Respondent elicitation only.", rationale: "Operant discrimination vignette." },
    D: { text: "Automatic punishment.", rationale: "Differential reinforcement across antecedents." },
  }),
  bx("mod18-q4", "Cooper Chapter 17 defines stimulus control as:", "C", {
    A: { text: "Any antecedent that increases behavior.", rationale: "Requires differential reinforcement history across antecedents." },
    B: { text: "MO altering reinforcer value.", rationale: "Stimulus control is SD/SΔ history; MO is Ch 16." },
    C: { text: "A functional relation between antecedent stimuli and operant behavior due to differential reinforcement/extinction histories.", rationale: "Core stimulus control definition." },
    D: { text: "Respondent elicitation by US.", rationale: "Operant stimulus control." },
  }),
  bx("mod18-q5", "Discriminative stimulus (SD):", "B", {
    A: { text: "Signals extinction is in effect.", rationale: "S-delta signals withholding." },
    B: { text: "An antecedent in the presence of which a response has been reinforced.", rationale: "SD definition." },
    C: { text: "Alters reinforcer value independent of history.", rationale: "MO function." },
    D: { text: "Any prompt used during teaching.", rationale: "Prompt may supplement but SD is defined by reinforcement history." },
  }),
  bx("mod18-q6", "S-delta (SΔ):", "D", {
    A: { text: "Signals reinforcement availability.", rationale: "SD function." },
    B: { text: "Establishing operation.", rationale: "MO not S-delta." },
    C: { text: "Generalized reinforcer.", rationale: "Antecedent correlated with extinction/withholding." },
    D: { text: "Antecedent in the presence of which a response has not produced reinforcement (extinction/withholding).", rationale: "S-delta definition." },
  }),
  bx("mod18-q7", "Stimulus discrimination:", "A", {
    A: { text: "Differential responding in the presence of different antecedent stimuli.", rationale: "Discrimination definition." },
    B: { text: "Responding the same across all stimuli.", rationale: "Generalization or no control." },
    C: { text: "MO satiation only.", rationale: "Discrimination is antecedent-based differential responding." },
    D: { text: "Automatic reinforcement.", rationale: "Learned differential history." },
  }),
  bx("mod18-q8", "Stimulus generalization:", "C", {
    A: { text: "Responding only to trained stimulus.", rationale: "No generalization." },
    B: { text: "Elimination of all discrimination.", rationale: "Generalization spreads; discrimination may remain at boundaries." },
    C: { text: "Response spread to similar untrained stimuli along a gradient.", rationale: "Generalization definition." },
    D: { text: "MO value shift.", rationale: "Stimulus similarity dimension." },
  }),
  bx("mod18-q9", "Trained tact to golden retriever; reinforcement for novel dog photos but not cats:", "B", {
    A: { text: "Proof discrimination eliminated.", rationale: "Withholding to cats shows discrimination." },
    B: { text: "Generalization within dog class plus discrimination from non-exemplars.", rationale: "Classic generalization + discrimination vignette." },
    C: { text: "MO abolishing SD.", rationale: "Stimulus class analysis." },
    D: { text: "Negative punishment.", rationale: "Stimulus control pattern." },
  }),
  bx("mod18-q10", "Blue card: mands reinforced; red card: mands on extinction—identical therapist positioning:", "D", {
    A: { text: "MO satiation exclusively.", rationale: "Differential reinforcement across color antecedents." },
    B: { text: "Respondent conditioning only.", rationale: "Operant SD control." },
    C: { text: "Negative reinforcement.", rationale: "Discrimination training." },
    D: { text: "Discriminative stimulus control / discrimination between color conditions.", rationale: "Classic SD/S-delta discrimination." },
  }),
  bx("mod18-q11", "MO versus SD in stimulus control context:", "A", {
    A: { text: "MO changes consequence value; SD signals when consequence is available—both may affect performance but differ analytically.", rationale: "High-yield Ch 16/17 integration." },
    B: { text: "Identical processes.", rationale: "Different functions." },
    C: { text: "SD changes value; MO signals availability.", rationale: "Reversed." },
    D: { text: "Neither applies to operants.", rationale: "Both apply." },
  }),
  bx("mod18-q12", "Stimulus control develops through:", "C", {
    A: { text: "Single reinforcement without discrimination.", rationale: "Differential reinforcement/extinction across antecedents." },
    B: { text: "Learner temperament.", rationale: "Contingency history." },
    C: { text: "Differential reinforcement and extinction across antecedent conditions.", rationale: "Historical basis of stimulus control." },
    D: { text: "Punishment only.", rationale: "Reinforcement/extinction differential histories." },
  }),
  bx("mod18-q13", "Multiple stimulus control:", "B", {
    A: { text: "Only one SD can ever control behavior.", rationale: "Several cues may jointly occasion responding." },
    B: { text: "More than one antecedent variable jointly influences responding—requires component tests.", rationale: "Multiple control definition." },
    C: { text: "Proof SD analysis is unnecessary.", rationale: "Decomposition required." },
    D: { text: "MO identical to SD.", rationale: "Distinct constructs." },
  }),
  bx("mod18-q14", "Two cues jointly present correlate with reinforcement unless third indicator appears:", "D", {
    A: { text: "Single SD always sufficient.", rationale: "Multiple control—component tests needed." },
    B: { text: "MO only.", rationale: "Joint antecedent control." },
    C: { text: "Extinction burst.", rationale: "Multiple stimulus control." },
    D: { text: "Multiple stimulus control requiring analytic decomposition.", rationale: "Cooper multiple control vignette." },
  }),
  bx("mod18-q15", "Prompt fading:", "A", {
    A: { text: "Systematic reduction of supplemental cues so responding transfers to naturally occurring SDs.", rationale: "Prompt fading definition." },
    B: { text: "Permanent use of full physical prompts.", rationale: "Fading reduces prompts." },
    C: { text: "Elimination of all SDs.", rationale: "Transfer to target SDs." },
    D: { text: "MO manipulation.", rationale: "Antecedent prompt procedure." },
  }),
  bx("mod18-q16", "Full physical guidance on every correct trial; slides claim independent discrimination mastery:", "C", {
    A: { text: "Valid independence claim.", rationale: "Hidden prompts invalidate independence." },
    B: { text: "Standard practice.", rationale: "Reporting integrity breach." },
    C: { text: "Reporting integrity breach—undisclosed prompts presented as independent stimulus control.", rationale: "Ethical/documentation issue." },
    D: { text: "MO satiation.", rationale: "Prompt dependence issue." },
  }),
  bx("mod18-q17", "Graphs show accuracy only—no prompt level column:", "B", {
    A: { text: "Ideal measurement.", rationale: "Prompt levels required for SC interpretation." },
    B: { text: "Measurement lapse—stimulus-control and independence claims not verifiable.", rationale: "Domain C prompt traceability." },
    C: { text: "Proof generalization obsolete.", rationale: "Prompt documentation issue." },
    D: { text: "IOA substitute.", rationale: "Trial-level prompt data needed." },
  }),
  bx("mod18-q18", "Verbal prompts removed but full physical prompts still used on many trials:", "D", {
    A: { text: "Pure SD mastery achieved.", rationale: "Still prompt-mediated." },
    B: { text: "Delete physical-prompt trials.", rationale: "Revise independence language." },
    C: { text: "MO explains all.", rationale: "Prompt dependence remains." },
    D: { text: "Performance still prompt-mediated—independence language should be revised.", rationale: "Honest reporting." },
  }),
  bx("mod18-q19", "Fade from full physical to shadow prompt with dated mastery criteria on data sheet:", "A", {
    A: { text: "Systematic prompt fading toward SD-controlled performance with transparent criteria.", rationale: "Best practice fading." },
    B: { text: "Mandatory permanent physical prompts.", rationale: "Fading documented." },
    C: { text: "Delete SD definitions once prompts begin.", rationale: "SD remains target." },
    D: { text: "Extinction only.", rationale: "Prompt fading procedure." },
  }),
  bx("mod18-q20", "Before claiming broad stimulus control mastery:", "C", {
    A: { text: "One trained exemplar sufficient.", rationale: "Generalization probes across gradients required." },
    B: { text: "Skip discrimination tests.", rationale: "Test boundaries and gradients." },
    C: { text: "Run generalization and discrimination probes across planned exemplars.", rationale: "Cooper gradient emphasis." },
    D: { text: "Remove S-delta probes.", rationale: "Both SD and S-delta matter." },
  }),
  bx("mod18-q21", "Exam trap: treating MO value shift as SD failure:", "B", {
    A: { text: "Correct integration.", rationale: "Check MO (Ch 16) before concluding SD breakdown." },
    B: { text: "High-yield error—SD may be stable while MO alters reinforcer value.", rationale: "Ch 16/17 confusion point." },
    C: { text: "IOA issue only.", rationale: "Conceptual discrimination." },
    D: { text: "Applies only to punishment.", rationale: "Reinforcement contexts too." },
  }),
  bx("mod18-q22", "Exam trap: claiming generalization proves discrimination vanished:", "D", {
    A: { text: "Correct—generalization eliminates discrimination.", rationale: "Both can coexist at class boundaries." },
    B: { text: "IOA issue.", rationale: "Conceptual error." },
    C: { text: "Always true.", rationale: "Withholding to contrast class shows discrimination remains." },
    D: { text: "High-yield error—generalization and discrimination coexist; test contrast classes.", rationale: "Cooper emphasis." },
  }),
  bx("mod18-q23", "Differential reinforcement of responding in presence of SD and extinction in presence of S-delta:", "A", {
    A: { text: "Standard discrimination training procedure establishing stimulus control.", rationale: "Core teaching procedure." },
    B: { text: "MO programming only.", rationale: "Antecedent differential contingencies." },
    C: { text: "Negative punishment.", rationale: "Discrimination training." },
    D: { text: "Respondent conditioning.", rationale: "Operant procedure." },
  }),
  bx("mod18-q24", "Stimulus generalization gradient refers to:", "C", {
    A: { text: "Binary all-or-nothing responding.", rationale: "Gradient = graded spread." },
    B: { text: "MO curve.", rationale: "Stimulus similarity dimension." },
    C: { text: "Graduated change in responding as stimulus similarity to trained exemplar varies.", rationale: "Gradient definition." },
    D: { text: "Schedule thinning.", rationale: "Stimulus dimension." },
  }),
  bx("mod18-q25", "Same SD for one response may function as S-delta for another:", "B", {
    A: { text: "False—SD universal.", rationale: "SD/S-delta are response-specific." },
    B: { text: "True—SD/S-delta relations are defined relative to specific response classes.", rationale: "Response-class specificity." },
    C: { text: "False—only MO varies.", rationale: "Antecedent function varies by response." },
    D: { text: "True only for punishment.", rationale: "Applies to reinforcement contexts." },
  }),
  bx("mod18-q26", "Error correction during discrimination training should:", "D", {
    A: { text: "Hide prompt levels from data.", rationale: "Document prompts and stimuli." },
    B: { text: "Use harsh punishment exclusively.", rationale: "Humane error correction." },
    C: { text: "Eliminate all SD probes.", rationale: "Maintain analytic transparency." },
    D: { text: "Stay humane and document which stimuli and prompts were active.", rationale: "Ethical + measurement standard." },
  }),
  bx("mod18-q27", "Fidelity on antecedent/SD delivery matters because:", "A", {
    A: { text: "Stimulus control claims require verified antecedent conditions—not assumed cue delivery.", rationale: "Domain C fidelity." },
    B: { text: "Irrelevant to stimulus control.", rationale: "Core to SC interpretation." },
    C: { text: "Replaces IOA.", rationale: "Complements IOA." },
    D: { text: "Only for MO analysis.", rationale: "SD delivery fidelity." },
  }),
  bx("mod18-q28", "Echoic across novel sentence frames after single exemplar:", "C", {
    A: { text: "Proof discrimination obsolete.", rationale: "Generalization pending continued probes." },
    B: { text: "Automatic punishment.", rationale: "Stimulus generalization pattern." },
    C: { text: "Stimulus generalization / expanded exemplar control—continued discrimination probes needed.", rationale: "Cautious generalization interpretation." },
    D: { text: "MO abolishing SD.", rationale: "Generalization vignette." },
  }),
  bx("mod18-q29", "Blue vs yellow schedule cards evoke different reinforcement likelihoods:", "B", {
    A: { text: "Respondent preparedness only.", rationale: "Operant SD control." },
    B: { text: "Discriminative stimulus control via differential reinforcement under distinct antecedents.", rationale: "Schedule-card discrimination." },
    C: { text: "MO abolishing SD universally.", rationale: "Antecedent discrimination." },
    D: { text: "Extinction only.", rationale: "Differential schedules across cues." },
  }),
  bx("mod18-q30", "Chapter 17 pairs with Chapter 16 because:", "D", {
    A: { text: "MO and SD are identical.", rationale: "Distinct but related." },
    B: { text: "Chapter 16 covers SD.", rationale: "Ch 16 = MO; Ch 17 = SD." },
    C: { text: "Both are punishment only.", rationale: "Antecedent analysis chapters." },
    D: { text: "Complete contingency analysis requires both value (MO) and availability (SD) interpretation.", rationale: "Sequential Cooper chapters." },
  }),
  bx("mod18-q31", "Chapter 17 pairs with Chapter 18 (Verbal Behavior) because:", "A", {
    A: { text: "Verbal operants are analyzed using stimulus control and MO variables.", rationale: "VB builds on SC." },
    B: { text: "Unrelated chapters.", rationale: "VB uses SD/MO framework." },
    C: { text: "Chapter 18 replaces stimulus control.", rationale: "Extension of SC to verbal behavior." },
    D: { text: "Both are schedule chapters.", rationale: "Verbal behavior focus." },
  }),
  bx("mod18-q32", "Domain F Chapter 17 items often test:", "C", {
    A: { text: "Schedule notation only.", rationale: "SD/S-delta discrimination." },
    B: { text: "UMO phylogeny only.", rationale: "Stimulus control focus." },
    C: { text: "SD versus S-delta, discrimination versus generalization, prompt versus independent control.", rationale: "Domain F operant analysis." },
    D: { text: "Graph axis labels only.", rationale: "Contingency interpretation." },
  }),
  bx("mod18-q33", "Exemplar training supports:", "B", {
    A: { text: "Narrow responding to one stimulus only.", rationale: "Broadens stimulus control." },
    B: { text: "Generalization across stimulus class by training multiple exemplars.", rationale: "Exemplar training rationale." },
    C: { text: "MO elimination.", rationale: "Stimulus programming." },
    D: { text: "Extinction only.", rationale: "Discrimination/generalization procedure." },
  }),
  bx("mod18-q34", "Overgeneralization (too much responding to non-exemplars):", "A", {
    A: { text: "May indicate need for narrower discrimination training or revised exemplar set.", rationale: "Clinical interpretation." },
    B: { text: "Always desired outcome.", rationale: "Boundary errors matter." },
    C: { text: "MO only.", rationale: "Stimulus control issue." },
    D: { text: "Proof of mastery.", rationale: "May need discrimination refinement." },
  }),
  bx("mod18-q35", "Failure to respond to trained SD despite high accuracy with prompts:", "D", {
    A: { text: "Verified independent SD control.", rationale: "Prompt-dependent performance." },
    B: { text: "MO always.", rationale: "Prompt transfer failure." },
    C: { text: "Negative punishment.", rationale: "Fading/transfer issue." },
    D: { text: "Prompt dependence—SD control not yet demonstrated without prompts.", rationale: "Independence criterion not met." },
  }),
  bx("mod18-q36", "Removing prompt legend while claiming pure SD independence:", "C", {
    A: { text: "Normal reporting.", rationale: "Documentation integrity failure." },
    B: { text: "IOA substitute.", rationale: "Ethics + measurement breach." },
    C: { text: "Honest independence reporting and reproducible prompt/SD documentation both compromised.", rationale: "Domain E + C issue." },
    D: { text: "Proof generalization gradients obsolete.", rationale: "Prompt/SD documentation issue." },
  }),
  bx("mod18-q37", "Best remediation before governance review when prompts hidden:", "B", {
    A: { text: "Ship dashboards without appendices.", rationale: "Restore data." },
    B: { text: "Restore prompt legends and trial-level data; qualify independence claims.", rationale: "Cooper remediation sequence." },
    C: { text: "Password-protect logs indefinitely.", rationale: "Transparency required." },
    D: { text: "Ignore prompt dependence.", rationale: "Revise claims." },
  }),
  bx("mod18-q38", "Stimulus control is NOT:", "A", {
    A: { text: "Explained by learner character labels without contingency history.", rationale: "History-based functional relation." },
    B: { text: "Based on differential reinforcement.", rationale: "Core mechanism." },
    C: { text: "Demonstrated through discrimination probes.", rationale: "Valid assessment." },
    D: { text: "Relevant to antecedent analysis.", rationale: "Operant antecedent function." },
  }),
  bx("mod18-q39", "When several salient stimuli co-occur, clinicians should:", "D", {
    A: { text: "Pick one SD arbitrarily for reporting.", rationale: "Component tests required." },
    B: { text: "Delete S-delta probes.", rationale: "Decomposition needed." },
    C: { text: "Suppress caregiver questions.", rationale: "Analytic transparency." },
    D: { text: "Plan probes isolating controlling variables before monocausal claims.", rationale: "Multiple control protocol." },
  }),
  bx("mod18-q40", "High-Yield: performance drops after lunch; SD unchanged:", "C", {
    A: { text: "SD failure exclusively.", rationale: "Check MO/AO first (Ch 16)." },
    B: { text: "Positive punishment.", rationale: "MO satiation." },
    C: { text: "Consider MO (abolishing operation) before relabeling as stimulus control failure.", rationale: "Cross-chapter discrimination." },
    D: { text: "Extinction of SD.", rationale: "MO not SD." },
  }),
  bx("mod18-q41", "Matching-to-sample procedures train:", "B", {
    A: { text: "MO only.", rationale: "Stimulus control / conditional discrimination." },
    B: { text: "Stimulus control—conditional relations between sample and comparison stimuli.", rationale: "MTS as SC procedure." },
    C: { text: "Respondent extinction.", rationale: "Operant discrimination." },
    D: { text: "Negative reinforcement only.", rationale: "Antecedent stimulus control." },
  }),
  bx("mod18-q42", "Errorless discrimination training emphasizes:", "A", {
    A: { text: "Prompting and fading to minimize errors during acquisition.", rationale: "Errorless learning approach." },
    B: { text: "Maximum errors for learning.", rationale: "Error reduction focus." },
    C: { text: "No antecedent cues.", rationale: "Uses prompts then fades." },
    D: { text: "Punishment for every error.", rationale: "Reinforcement-based teaching." },
  }),
  bx("mod18-q43", "SD for mand and SD for tact:", "D", {
    A: { text: "Always identical stimuli.", rationale: "Different controlling variables possible." },
    B: { text: "Unrelated to stimulus control.", rationale: "Verbal behavior uses SC." },
    C: { text: "MO only.", rationale: "SD + MO for verbal operants." },
    D: { text: "May involve different antecedent controlling relations even for same topography.", rationale: "Functional not topographic classification." },
  }),
  bx("mod18-q44", "IOA on antecedent/SD delivery supports:", "C", {
    A: { text: "MO measurement only.", rationale: "SC fidelity." },
    B: { text: "Optional decoration.", rationale: "Reproducible SC claims." },
    C: { text: "Verifiable stimulus control interpretation—observers agree on cue conditions.", rationale: "Domain C standard." },
    D: { text: "Replacement for graphs.", rationale: "Complements measurement." },
  }),
  bx("mod18-q45", "Ethical stimulus control reporting requires:", "B", {
    A: { text: "Marketing independence while hiding prompts.", rationale: "Transparency required." },
    B: { text: "Distinguishing prompted from independent performance with trial-level data.", rationale: "Domain E standard." },
    C: { text: "Blaming learners for discrimination failures.", rationale: "History-based explanation." },
    D: { text: "Omitting S-delta conditions.", rationale: "Full SD/S-delta reporting." },
  }),
  bx("mod18-q46", "Stimulus class:", "A", {
    A: { text: "Group of stimuli sharing common stimulus control due to common reinforcement history.", rationale: "Stimulus class definition." },
    B: { text: "MO subtype.", rationale: "Antecedent grouping." },
    C: { text: "Schedule of reinforcement.", rationale: "Stimulus concept." },
    D: { text: "Punishment trap.", rationale: "Stimulus control construct." },
  }),
  bx("mod18-q47", "Board stem: Cookie card reinforced echoic; Juice card not—same prompting:", "D", {
    A: { text: "MO exclusively.", rationale: "SD discrimination." },
    B: { text: "Respondent only.", rationale: "Operant discrimination." },
    C: { text: "Negative punishment.", rationale: "Differential reinforcement." },
    D: { text: "Stimulus discrimination / SD control.", rationale: "Classic exam vignette." },
  }),
  bx("mod18-q48", "Learner noncompliance label when prompt dependence explains errors:", "C", {
    A: { text: "Best practice.", rationale: "Weak SC/prompt issue mislabeled." },
    B: { text: "MO analysis unnecessary.", rationale: "Check prompts and SD transfer." },
    C: { text: "Mislabeling—prompt dependence or incomplete fading may explain pattern.", rationale: "Ethical analytic alternative." },
    D: { text: "Proof of SD mastery.", rationale: "Reassess stimulus control." },
  }),
  bx("mod18-q49", "Documenting SD topography and materials supports:", "A", {
    A: { text: "Reproducible discrimination training others can replicate and verify.", rationale: "Operational definition standard." },
    B: { text: "Optional aesthetics.", rationale: "Fidelity requirement." },
    C: { text: "MO elimination.", rationale: "SC documentation." },
    D: { text: "Replacement for data.", rationale: "Complements measurement." },
  }),
  bx("mod18-q50", "Closing Chapter 17 principle:", "B", {
    A: { text: "SD and MO are interchangeable labels.", rationale: "Distinct functions." },
    B: { text: "Anchor claims to differential reinforcement history, SD/S-delta logic, prompt data, and generalization gradients—not buzzwords or hidden prompts.", rationale: "Chapter 17 integration." },
    C: { text: "One exemplar proves universal mastery.", rationale: "Probe gradients." },
    D: { text: "Prompt levels need not be recorded.", rationale: "Trial-level prompt data required." },
  }),
];
