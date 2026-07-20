import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 8 supplement — Alternating Treatments Design (mod15). */

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

export const CHAPTER_08_ATD_SUPPLEMENT_QUIZ_BANK: BDSQuestion[] = [
  bx("mod15-q1", "Predictable weekday-linked scheduling assigns Condition X only early-week sessions — MOST accurate methodological critique?", "A", {
    A: { text: "Threatens sequence confounds obscuring contingency attribution absent counterbalancing.", rationale: "Predictable weekday bundles require counterbalancing or randomization." },
    B: { text: "Guarantees airtight multitreatment isolation automatically.", rationale: "Predictable coupling risks confounds." },
    C: { text: "Proves respondent extinction readiness exclusively.", rationale: "Irrelevant classification absent respondent framing." },
    D: { text: "Eliminates necessity for graphed overlays.", rationale: "Visual summaries remain central." },
  }),
  bx("mod15-q4", "Cooper Chapter 8 alternating treatments designs compare:", "B", {
    A: { text: "Only baseline to baseline.", rationale: "ATD alternates two or more active conditions." },
    B: { text: "Two or more treatments rotating across sessions or days on concurrent overlays.", rationale: "Rapid comparison without full withdrawal." },
    C: { text: "Group statistics only.", rationale: "Single-subject ATD logic." },
    D: { text: "Indirect assessment only.", rationale: "Direct measurement required." },
  }),
  bx("mod15-q5", "Alternating treatments design (ATD) MOST directly accelerates comparative inference by:", "C", {
    A: { text: "Eliminating baseline measurement altogether.", rationale: "Baselines or anchors remain informative." },
    B: { text: "Guaranteeing zero multitreatment interference.", rationale: "Rapid switches invite spillover reviewers must caveat." },
    C: { text: "Rotating interventions rapidly within comparable observation windows.", rationale: "Domain F ATD compresses differentiation timelines." },
    D: { text: "Replacing procedural fidelity obligations.", rationale: "Documentation obligations persist." },
  }),
  bx("mod15-q6", "Counterbalancing in ATD designs controls for:", "A", {
    A: { text: "Sequence or order effects.", rationale: "Fair rotation distributes mundane confounds." },
    B: { text: "IOA only.", rationale: "Order effects are design confound." },
    C: { text: "Respondent conditioning exclusively.", rationale: "Operant design issue." },
    D: { text: "Graph font.", rationale: "Irrelevant." },
  }),
  bx("mod15-q7", "Multitreatment interference in ATD MOST warns clinicians:", "D", {
    A: { text: "Overlap proves respondent extinction dominance.", rationale: "Irrelevant contingency classification." },
    B: { text: "Withdrawals obsolete universally.", rationale: "Ethics still govern design choice." },
    C: { text: "Social validity irrelevant permanently.", rationale: "Stakeholder alignment persists." },
    D: { text: "Adjacent interventions may elevate both envelopes obscuring which contingency deserves credit.", rationale: "Multitreatment interference definition." },
  }),
  bx("mod15-q8", "Carryover in multielement/ATD designs occurs when:", "C", {
    A: { text: "IOA is 100%.", rationale: "Carryover is effect of one condition on another." },
    B: { text: "Baseline is stable.", rationale: "Carryover complicates condition separation." },
    C: { text: "Effects of one condition persist into the next condition's sessions.", rationale: "Bleed-through threatens differentiation." },
    D: { text: "Graph is unlabeled.", rationale: "Construction issue." },
  }),
  bx("mod15-q9", "Washout interval between ATD conditions helps reduce:", "B", {
    A: { text: "Need for informed consent.", rationale: "Consent always required." },
    B: { text: "Carryover between conditions when ethically feasible.", rationale: "Neutral spacing dampens spillover." },
    C: { text: "All measurement.", rationale: "Measurement continues." },
    D: { text: "Baseline stability.", rationale: "Washout reduces carryover." },
  }),
  bx("mod15-q10", "Ethical rationale favoring ATD versus full reversal:", "A", {
    A: { text: "Compares humane interventions learners warrant rather than withholding care theatrically.", rationale: "Humane active comparison." },
    B: { text: "Eliminates stakeholder consent.", rationale: "Consent required." },
    C: { text: "Guarantees automatic reinforcement diagnoses.", rationale: "Comparative design—not automatic diagnosis." },
    D: { text: "Banning procedural fidelity notes.", rationale: "Fidelity essential." },
  }),
  bx("mod15-q11", "Exam trap: declaring superiority from inseparable overlays:", "D", {
    A: { text: "Best practice when funders pressure.", rationale: "Tentative language required." },
    B: { text: "Domain C only.", rationale: "Domain F + E." },
    C: { text: "Required for maintenance.", rationale: "Overlap demands humility." },
    D: { text: "High-yield error—use tentative language until separation and fidelity stabilize.", rationale: "Inseparable overlay trap." },
  }),
  bx("mod15-q12", "Exam trap: confusing ATD with multiple-baseline stagger:", "C", {
    A: { text: "Both identical designs.", rationale: "ATD alternates rapidly; MB staggers over time." },
    B: { text: "Both are group designs.", rationale: "Both single-subject." },
    C: { text: "High-yield error—ATD is rapid rotation; MB is staggered introduction across tiers (Ch 9).", rationale: "Design family discrimination." },
    D: { text: "MB alternates conditions daily within same week.", rationale: "That describes ATD—not MB." },
  }),
  bx("mod15-q13", "ATD readiness sweep—FIRST step:", "B", {
    A: { text: "Declare winning condition.", rationale: "First step—establish preconditions before making analytic claims." },
    B: { text: "Establish stable baseline or concurrent comparison anchors reviewers recognize.", rationale: "First step—establish preconditions before making analytic claims." },
    C: { text: "Delete rotation logs.", rationale: "Anchors first." },
    D: { text: "Skip fidelity checklists.", rationale: "ATD readiness order." },
  }),
  bx("mod15-q14", "Define discriminable intervention packages with fidelity checklists:", "A", {
    A: { text: "Ensures each condition is implemented distinctly enough to compare.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    B: { text: "Optional if graphs pretty.", rationale: "Fidelity distinguishes IVs." },
    C: { text: "Replaces informed consent.", rationale: "Complementary." },
    D: { text: "Eliminates IOA.", rationale: "IOA still required." },
  }),
  bx("mod15-q15", "Counterbalance or randomize condition order transparently:", "D", {
    A: { text: "Optional decoration.", rationale: "Third step—implement transparently with honest measurement." },
    B: { text: "Lock Condition A to Mondays always.", rationale: "Sequence confound." },
    C: { text: "Hide rotation matrix from reviewers.", rationale: "Transparency required." },
    D: { text: "Distributes order effects so they do not impersonate contingency superiority.", rationale: "Third step—implement transparently with honest measurement." },
  }),
  bx("mod15-q16", "Interpret overlays with tentative language when overlap persists:", "C", {
    A: { text: "Declare decisive winner immediately.", rationale: "Final step—make claims and follow through with documented review." },
    B: { text: "Delete overlap sessions.", rationale: "Report honestly." },
    C: { text: "Note interference; use supplementary metrics; avoid decisive superiority claims.", rationale: "Final step—make claims and follow through with documented review." },
    D: { text: "Stop all measurement.", rationale: "Accountability continues." },
  }),
  bx("mod15-q17", "Daily praise-only versus praise-token graphs juxtaposed on overlay:", "A", {
    A: { text: "Alternating treatments demonstration prototype.", rationale: "Rapid active package comparison." },
    B: { text: "Pure respondent extinction replication.", rationale: "Operant ATD context." },
    C: { text: "Changing criterion staircase.", rationale: "Alternation—not criterion steps." },
    D: { text: "Multiple baseline across settings.", rationale: "ATD same-window alternation." },
  }),
  bx("mod15-q18", "AAC cannot be removed; two prompting strategies alternate with randomized order:", "B", {
    A: { text: "Forced full ABAB withdrawal.", rationale: "Violates ethics." },
    B: { text: "Ethical ATD comparison replacing unsafe withdrawal.", rationale: "Humane alternative." },
    C: { text: "No design possible.", rationale: "ATD is ethical option." },
    D: { text: "Covert removal overnight.", rationale: "Consent violation." },
  }),
  bx("mod15-q19", "Generalized enhancement in ATD:", "D", {
    A: { text: "One condition improves under all conditions.", rationale: "Generalized enhancement confounds differentiation." },
    B: { text: "IOA formula.", rationale: "Interference type." },
    C: { text: "Extinction burst only.", rationale: "Different phenomenon." },
    D: { text: "Improvement spreads across conditions—may obscure which IV caused change.", rationale: "Interpret with caution." },
  }),
  bx("mod15-q20", "Discriminable treatment packages in ATD mean:", "C", {
    A: { text: "Identical procedures labeled differently.", rationale: "Conditions must differ operationally." },
    B: { text: "No fidelity notes needed.", rationale: "Fidelity essential." },
    C: { text: "Each condition implemented distinctly enough to compare.", rationale: "Fidelity distinguishes IVs." },
    D: { text: "Questionnaires only.", rationale: "Direct implementation required." },
  }),
  bx("mod15-q21", "Alternating treatments without counterbalancing risks:", "A", {
    A: { text: "Confounding treatment effects with session order or weekday effects.", rationale: "Sequence confounds mimic superiority." },
    B: { text: "Perfect differentiation always.", rationale: "Order confounds threaten validity." },
    C: { text: "IOA elimination.", rationale: "IOA still needed." },
    D: { text: "Automatic FA.", rationale: "Unrelated." },
  }),
  bx("mod15-q22", "Multielement design overlay graphs display:", "B", {
    A: { text: "Only questionnaires.", rationale: "Behavioral data required." },
    B: { text: "Different conditions on same time axis for comparison.", rationale: "Concurrent overlay aids comparison." },
    C: { text: "Group means exclusively.", rationale: "Single-subject overlays." },
    D: { text: "IOA only.", rationale: "Behavior paths primary." },
  }),
  bx("mod15-q23", "Domain F ATD items often test:", "D", {
    A: { text: "MO definition only.", rationale: "Comparative design logic." },
    B: { text: "Verbal operants only.", rationale: "Design domain." },
    C: { text: "Billing codes only.", rationale: "Analytic design focus." },
    D: { text: "Whether rapid contrast and rotation support comparative inference narrative.", rationale: "Domain F focus." },
  }),
  bx("mod15-q24", "Domain C ATD items often test:", "A", {
    A: { text: "Sequence matrices, fidelity checklists, and auditable rotation logs.", rationale: "Domain C measurement integrity." },
    B: { text: "Phylogeny trivia.", rationale: "Sequence documentation." },
    C: { text: "Marketing claims only.", rationale: "Fidelity at each condition." },
    D: { text: "Group t-tests.", rationale: "Single-subject ATD." },
  }),
  bx("mod15-q25", "Domain E ATD items often test:", "C", {
    A: { text: "Cherry-picking winning sessions.", rationale: "Honest overlap reporting." },
    B: { text: "Deleting rotation appendices.", rationale: "Transparency required." },
    C: { text: "Humane comparison rationale and candid overlap reporting.", rationale: "Domain E transparency." },
    D: { text: "Covert condition changes.", rationale: "Violates ethics." },
  }),
  bx("mod15-q26", "Two reinforcement menus alternate daily; graphs inseparable:", "B", {
    A: { text: "Declare Package B superior.", rationale: "Overlap requires tentativeness." },
    B: { text: "Treat differentiation as tentative pending fidelity probes and sequencing revisions.", rationale: "Overlap vignette." },
    C: { text: "Delete alternating logic silently.", rationale: "Report honestly." },
    D: { text: "Stop ethics review.", rationale: "Ethics ongoing." },
  }),
  bx("mod15-q27", "Wednesday staffing spikes inflate mid-week condition:", "D", {
    A: { text: "Lock comparisons to Wednesdays only.", rationale: "Counterbalance across weekdays." },
    B: { text: "Remove graphs permanently.", rationale: "Fix rotation fairness." },
    C: { text: "Ignore staffing covariates.", rationale: "Document and counterbalance." },
    D: { text: "Randomize/counterbalance sessions across weekdays documenting staffing covariates.", rationale: "Staffing confound remediation." },
  }),
  bx("mod15-q28", "Central office deletes counterbalancing appendix claiming balanced rotations:", "A", {
    A: { text: "Restore rotation matrices with supervisor attestation; narrate covariates honestly.", rationale: "Domain E + C violation vignette." },
    B: { text: "Ship hero slides without appendices.", rationale: "Scrubbing evidence forbidden." },
    C: { text: "Password-protect sequence logs.", rationale: "Transparency required." },
    D: { text: "Delete overlap sessions silently.", rationale: "Misrepresents evidence." },
  }),
  bx("mod15-q29", "Overlay shows separated paths favoring DRA over extinction with low carryover:", "C", {
    A: { text: "Automatic mastery forever.", rationale: "Tentative preference pending checks." },
    B: { text: "Reversal complete.", rationale: "ATD comparison—not withdrawal." },
    C: { text: "Tentative ATD preference pending interference and fidelity check.", rationale: "Separated paths with caveats." },
    D: { text: "Multiple baseline stagger only.", rationale: "ATD alternation described." },
  }),
  bx("mod15-q30", "High-Yield Confusion Point—ATD vs reversal:", "B", {
    A: { text: "Identical designs.", rationale: "ATD alternates; reversal withdraws IV." },
    B: { text: "ATD rotates active packages; reversal withdraws intervention toward baseline.", rationale: "Core Ch 8 discrimination." },
    C: { text: "Both require full withdrawal.", rationale: "ATD avoids lengthy withdrawal." },
    D: { text: "Neither uses graphs.", rationale: "Both use overlays." },
  }),
  bx("mod15-q31", "High-Yield Confusion Point—ATD vs MB stagger:", "D", {
    A: { text: "Both stagger introduction across months.", rationale: "ATD alternates within compressed windows." },
    B: { text: "Both are group designs.", rationale: "Single-subject." },
    C: { text: "MB alternates daily.", rationale: "MB staggers tier introductions." },
    D: { text: "ATD is rapid rotation; MB is staggered onset across tiers over time.", rationale: "Ch 8 vs Ch 9 discrimination." },
  }),
  bx("mod15-q32", "Randomized condition order in ATD:", "A", {
    A: { text: "Reduces order confounds.", rationale: "Counterbalancing strategy." },
    B: { text: "Eliminates need for graphs.", rationale: "Graphs still used." },
    C: { text: "Proves punishment.", rationale: "Unrelated." },
    D: { text: "Violates ethics always.", rationale: "Standard practice." },
  }),
  bx("mod15-q33", "Multielement FA versus applied ATD:", "C", {
    A: { text: "Identical analytic questions.", rationale: "FA tests evocative contingencies; ATD compares packages." },
    B: { text: "Both answer package selection only.", rationale: "FA answers function question." },
    C: { text: "Related rotation discipline but different analytic questions—keep nomenclature honest.", rationale: "FA parallelism caveat." },
    D: { text: "Unrelated entirely.", rationale: "Shared rapid-rotation cautions." },
  }),
  bx("mod15-q34", "Tentative multielement conclusion when paths overlap:", "B", {
    A: { text: "Declare winning condition.", rationale: "Overlap requires caution." },
    B: { text: "Note interference/overlap; avoid decisive superiority claims.", rationale: "Chapter 8 overlap logic." },
    C: { text: "Delete graph.", rationale: "Report honestly." },
    D: { text: "Stop measurement.", rationale: "Accountability continues." },
  }),
  bx("mod15-q35", "Phase fidelity in ATD documents:", "D", {
    A: { text: "Caregiver mood only.", rationale: "Which package was active." },
    B: { text: "IOA only post hoc.", rationale: "IV implementation fidelity." },
    C: { text: "Marketing schedule.", rationale: "Actual condition changes." },
    D: { text: "Which intervention package was active when graph changed.", rationale: "Links IV to behavior path." },
  }),
  bx("mod15-q36", "Staggered intervention across three participants versus alternating two treatments same day:", "A", {
    A: { text: "Different families—multiple baseline (Ch 9) versus ATD alternation (Ch 8).", rationale: "Common exam discrimination." },
    B: { text: "Identical multielement designs.", rationale: "MB stagger differs from ATD." },
    C: { text: "Both group designs only.", rationale: "Single-subject." },
    D: { text: "IOA types.", rationale: "Design families differ." },
  }),
  bx("mod15-q37", "BCBA stem: Condition A always Mondays; Condition B always Fridays:", "C", {
    A: { text: "Perfect counterbalancing.", rationale: "Weekday confound." },
    B: { text: "IOA formula.", rationale: "Sequence confound." },
    C: { text: "Sequence confound—counterbalance or randomize needed.", rationale: "Classic ATD confound vignette." },
    D: { text: "Baseline stability proof.", rationale: "Order confound issue." },
  }),
  bx("mod15-q38", "BCBA stem: both conditions improve together on overlay:", "D", {
    A: { text: "Proof Condition B superior.", rationale: "Multitreatment interference." },
    B: { text: "IOA only issue.", rationale: "Interference threatens attribution." },
    C: { text: "Delete Condition A data.", rationale: "Report overlap honestly." },
    D: { text: "Multitreatment interference—interpret tentatively; tighten fidelity or spacing.", rationale: "Interference vignette." },
  }),
  bx("mod15-q39", "Fast comparison advantage of ATD:", "B", {
    A: { text: "Eliminates all confounds.", rationale: "Carryover may remain." },
    B: { text: "Rapid comparison without lengthy withdrawal when ethical.", rationale: "Practical ATD advantage." },
    C: { text: "No IOA needed.", rationale: "IOA still required." },
    D: { text: "Replaces consent.", rationale: "Consent required." },
  }),
  bx("mod15-q40", "When withdrawal is unethical, Cooper Chapter 8 points toward:", "C", {
    A: { text: "Covert withdrawal.", rationale: "Ethical violations." },
    B: { text: "Fabricating data.", rationale: "Fraud." },
    C: { text: "ATD or multiple-baseline alternatives.", rationale: "Ethical substitutes." },
    D: { text: "Abandoning all analysis.", rationale: "Alternatives exist." },
  }),
  bx("mod15-q41", "Sequence log in ATD should memorialize:", "A", {
    A: { text: "Rotation decisions and condition order across sessions.", rationale: "Reproducible rotation evidence." },
    B: { text: "Caregiver zodiac only.", rationale: "Sequence documentation." },
    C: { text: "Final outcome only.", rationale: "Each session condition matters." },
    D: { text: "Punishment intensity.", rationale: "Any IV type." },
  }),
  bx("mod15-q42", "High-Yield: predictable weekday scheduling without counterbalancing:", "D", {
    A: { text: "Ideal analytic hygiene.", rationale: "Sequence confound." },
    B: { text: "Domain C only.", rationale: "Domain F + C." },
    C: { text: "Required for ATD validity.", rationale: "Counterbalancing fixes confound." },
    D: { text: "High-yield error—randomize or counterbalance to control order effects.", rationale: "Weekday scheduling trap." },
  }),
  bx("mod15-q43", "High-Yield: ignoring multitreatment interference:", "B", {
    A: { text: "Best practice for funders.", rationale: "Tentative language required." },
    B: { text: "High-yield error—document overlap and avoid decisive winner claims.", rationale: "Interference trap." },
    C: { text: "Domain E only.", rationale: "Domain F + C + E." },
    D: { text: "Proves ATD invalid always.", rationale: "Overlap requires humility—not abandonment." },
  }),
  bx("mod15-q44", "Cooper Chapter 8 ATD supplement emphasizes:", "C", {
    A: { text: "Deprivation theater for flashy reversals.", rationale: "Humane comparisons." },
    B: { text: "Decisive superiority from any overlay.", rationale: "Tentative when overlap persists." },
    C: { text: "Discriminable packages, fair rotation, overlay separation versus interference, humane rationale.", rationale: "Cooper ATD emphasis." },
    D: { text: "Elimination of baselines always.", rationale: "Anchors remain informative." },
  }),
  bx("mod15-q45", "Supplementary dimensional metrics in ATD useful when:", "A", {
    A: { text: "Overlays hug stubbornly and visual separation is unclear.", rationale: "Bolster tentative language." },
    B: { text: "IOA is 100%.", rationale: "Separation issue may persist." },
    C: { text: "Caregiver satisfied.", rationale: "Graph evidence still governs." },
    D: { text: "Rotation matrix deleted.", rationale: "Metrics do not replace honesty." },
  }),
  bx("mod15-q46", "ATD compares prompting styles teams can ethically rotate in classrooms:", "D", {
    A: { text: "Starvation routines mimicking withdrawal.", rationale: "Humane active comparison." },
    B: { text: "Covert reinforcement removal.", rationale: "Ethical violation." },
    C: { text: "No measurement required.", rationale: "Accountability continues." },
    D: { text: "Humane instructional packages realistically deliverable in applied settings.", rationale: "Applied ATD rationale." },
  }),
  bx("mod15-q47", "BCBA stem: regional office strips randomization spreadsheets for marketing:", "B", {
    A: { text: "Standard slide minimalism.", rationale: "Domain E + C breach." },
    B: { text: "Restore rotation evidence; supervisor attestation; honest covariate narrative.", rationale: "Scrubbing sequence docs vignette." },
    C: { text: "Password-protect from auditors.", rationale: "Transparency required." },
    D: { text: "Declare ATD invalid.", rationale: "Fix documentation—not abandon design." },
  }),
  bx("mod15-q48", "Two treatments alternated within same week on overlay with randomized order:", "C", {
    A: { text: "Multiple baseline across participants.", rationale: "Same-week alternation is ATD." },
    B: { text: "Changing criterion staircase.", rationale: "Alternation—not criterion steps." },
    C: { text: "Multielement ATD (Chapter 8)—not MB stagger.", rationale: "Design family identification." },
    D: { text: "Group t-test only.", rationale: "Single-subject ATD." },
  }),
  bx("mod15-q49", "ATD workflow order—BEST sequence:", "D", {
    A: { text: "Declare winner → rotate later → fix fidelity.", rationale: "Readiness order violated." },
    B: { text: "Skip baseline → alternate → hide overlap.", rationale: "Invalid sequence." },
    C: { text: "Delete rotation logs → publish overlays.", rationale: "Unethical." },
    D: { text: "Stable anchors → discriminable packages → counterbalanced rotation → interpret overlays with tentative language when overlap persists.", rationale: "ATD readiness sweep." },
  }),
  bx("mod15-q50", "Closing Chapter 8 ATD principle:", "A", {
    A: { text: "Define discriminable humane packages; counterbalance rotation; graph overlays honestly; note interference and carryover; use tentative superiority language until separation and fidelity stabilize.", rationale: "Chapter 8 ATD integration." },
    B: { text: "Always declare winning condition from any overlay.", rationale: "Overlap requires humility." },
    C: { text: "Delete sequence logs before funders.", rationale: "Ethical violation." },
    D: { text: "ATD replaces informed consent.", rationale: "Consent always required." },
  }),
];
