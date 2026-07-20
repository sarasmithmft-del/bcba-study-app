import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 27 — Functional Behavior Assessment. */

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

export const CHAPTER_27_FBA_QUIZ_BANK: BDSQuestion[] = [
  bx("mod28-q1", "Grant claims multi-element FA complete but appendix only questionnaires—MOST accountable fix?", "B", {
    A: { text: "Ship narrative unchanged.", rationale: "Modality mislabel." },
    B: { text: "Relabel modalities honestly; stage supervised contrasts when staffing and consent allow.", rationale: "Correct move—Relabel modalities honestly; stage supervised contrasts when staffing and consent allow." },
    C: { text: "Fabricate FA graphs.", rationale: "Ethical breach." },
    D: { text: "Delete caregiver input.", rationale: "Indirect data valid when labeled." },
  }),
  bx("mod28-q4", "Cooper Chapter 27 Functional Behavior Assessment:", "C", {
    A: { text: "Interview-only proof of function.", rationale: "Multimodal aggregation." },
    B: { text: "Treatment implementation only.", rationale: "Assessment process." },
    C: { text: "Aggregates indirect, descriptive, and when safe experimental modalities to localize maintaining outcomes.", rationale: "FBA overview." },
    D: { text: "Identical to token economy.", rationale: "Assessment chapter." },
  }),
  bx("mod28-q5", "Indirect FBA:", "A", {
    A: { text: "Recall or rating modalities generating hypotheses needing corroboration—not stand-alone proof.", rationale: "Indirect FBA definition." },
    B: { text: "Controlled evocative contrasts.", rationale: "Experimental FA." },
    C: { text: "Definitive experimental confirmation always.", rationale: "Hypothesis generation." },
    D: { text: "Naturalistic scatterplot only.", rationale: "Interviews/questionnaires." },
  }),
  bx("mod28-q6", "Descriptive FBA:", "D", {
    A: { text: "Fabricated FA graphs.", rationale: "Naturalistic observation." },
    B: { text: "Interview ratings only.", rationale: "ABC/scatter summaries." },
    C: { text: "Punishment assessment.", rationale: "Correlational observation." },
    D: { text: "Naturalistic observation summarizing correlates without programmed contrasts.", rationale: "Descriptive FBA definition." },
  }),
  bx("mod28-q7", "Experimental functional analysis (FA):", "B", {
    A: { text: "Parent questionnaire.", rationale: "Programmed contrasts." },
    B: { text: "Evocative contrasts isolating reinforcer classes when safeguards permit manipulation.", rationale: "Experimental FA definition." },
    C: { text: "ABC log only.", rationale: "Controlled conditions." },
    D: { text: "Hypothesis statement only.", rationale: "Experimental test." },
  }),
  bx("mod28-q8", "Triangulation in FBA:", "C", {
    A: { text: "Delete conflicting modalities.", rationale: "Open reconciliation." },
    B: { text: "Pick favorite modality silently.", rationale: "Document divergence." },
    C: { text: "Open reconciliation of discrepant modalities before treatment intensity locks in.", rationale: "Triangulation definition." },
    D: { text: "Skip descriptive work.", rationale: "Multimodal integration." },
  }),
  bx("mod28-q9", "Hypothesis statement:", "A", {
    A: { text: "Operational summary of antecedent, consequence, and setting events suspected to maintain behavior.", rationale: "Hypothesis statement definition." },
    B: { text: "Marketing slogan.", rationale: "Operational summary." },
    C: { text: "IOA statistic only.", rationale: "Guides intervention." },
    D: { text: "Treatment completion certificate.", rationale: "Pre-intervention product." },
  }),
  bx("mod28-q10", "Modality-accurate reporting:", "D", {
    A: { text: "Label interviews as completed FA.", rationale: "Honest labels." },
    B: { text: "Optional decoration.", rationale: "Domain E requirement." },
    C: { text: "Grant prose may overstate.", rationale: "Accurate modality labels." },
    D: { text: "Labels methods honestly—never laundering indirect tools into FA completed narratives.", rationale: "Modality-accurate reporting definition." },
  }),
  bx("mod28-q11", "Exam trap: treating indirect tools as definitive FA:", "B", {
    A: { text: "Best practice when busy.", rationale: "Corroboration required." },
    B: { text: "High-yield error—indirect generates hypotheses; experimental/descriptive corroboration needed.", rationale: "Ch 27 confusion point." },
    C: { text: "Required for FAST only.", rationale: "All indirect tools." },
    D: { text: "IOA issue only.", rationale: "Modality logic error." },
  }),
  bx("mod28-q12", "Exam trap: mislabeling descriptive data as experimental FA:", "A", {
    A: { text: "High-yield error—descriptive summarizes correlates; FA requires programmed contrasts.", rationale: "Modality discrimination." },
    B: { text: "Correct interchangeably.", rationale: "Different evidence depth." },
    C: { text: "Scatterplots equal FA.", rationale: "Descriptive ≠ experimental." },
    D: { text: "ABC logs are FA always.", rationale: "Naturalistic vs manipulated." },
  }),
  bx("mod28-q13", "Exam trap: ignoring triangulation when modalities disagree:", "C", {
    A: { text: "Pick highest ranking modality.", rationale: "Document reconciliation." },
    B: { text: "Delete descriptive data.", rationale: "Transparent conflict." },
    C: { text: "High-yield error—document divergence and reconciliation before treatment intensity.", rationale: "Triangulation trap." },
    D: { text: "Proceed silently.", rationale: "Stakeholder trust issue." },
  }),
  bx("mod28-q14", "Grant narrative cites full FA; appendix only questionnaires:", "A", {
    A: { text: "Relabel modalities honestly; outline supervised contrasts when staffing and safeguards permit.", rationale: "Correct move—Relabel modalities honestly; outline supervised contrasts when staffing and safeguards permit." },
    B: { text: "Ship unchanged because questionnaires faster.", rationale: "Honesty required." },
    C: { text: "Fabricate FA spikes preserving narrative.", rationale: "Fabrication breach." },
    D: { text: "Delete caregiver interviews preserving brevity.", rationale: "Label indirect accurately." },
  }),
  bx("mod28-q15", "Indirect FAST conflicts with descriptive observation; team picks favorite silently:", "A", {
    A: { text: "Document divergence and reconciliation plan openly before treatment intensity freezes.", rationale: "Correct move—Document divergence and reconciliation plan openly before treatment intensity freezes." },
    B: { text: "Hide discord preserving confidence mechanically.", rationale: "Triangulation required." },
    C: { text: "Delete weaker modality arbitrarily.", rationale: "Analytic duty." },
    D: { text: "Skip hypothesis statement.", rationale: "Reconcile first." },
  }),
  bx("mod28-q16", "Incomplete indirect work should not:", "D", {
    A: { text: "Inform descriptive planning.", rationale: "Stand alone as proof." },
    B: { text: "Guide hypothesis generation.", rationale: "Needs corroboration." },
    C: { text: "Precede experimental FA when safe.", rationale: "Insufficient alone." },
    D: { text: "Stand in for corroborating descriptive or experimental evidence.", rationale: "Cooper emphasis." },
  }),
  bx("mod28-q17", "ABC recording in descriptive FBA:", "B", {
    A: { text: "Experimental contrast.", rationale: "Naturalistic log." },
    B: { text: "Links antecedents, behavior, and consequences in natural settings.", rationale: "ABC descriptive tool." },
    C: { text: "Definitive FA proof alone.", rationale: "Hypothesis support." },
    D: { text: "Punishment log.", rationale: "Correlational data." },
  }),
  bx("mod28-q18", "IOA on descriptive FBA codes:", "C", {
    A: { text: "Unnecessary for interviews.", rationale: "Observation agreement." },
    B: { text: "Replaces hypothesis.", rationale: "Measurement quality." },
    C: { text: "Documents observer agreement on episode coding before strong claims.", rationale: "IOA in descriptive FBA." },
    D: { text: "Optional after treatment.", rationale: "During descriptive phase." },
  }),
  bx("mod28-q19", "Episode definitions and timestamp integrity:", "A", {
    A: { text: "Support defensible descriptive summaries and scatter interpretations.", rationale: "Domain C measurement." },
    B: { text: "Optional for grants.", rationale: "Core descriptive quality." },
    C: { text: "Replace consent process.", rationale: "Data integrity." },
    D: { text: "Identical to FAST rankings.", rationale: "Operational definitions." },
  }),
  bx("mod28-q20", "Planning experimental FA requires:", "D", {
    A: { text: "No safeguards when convenient.", rationale: "Consent and safety." },
    B: { text: "Fabricated graphs.", rationale: "Supervised contrasts." },
    C: { text: "Deleting indirect data.", rationale: "Layer modalities." },
    D: { text: "Staffing, consent, safety review, and supervisory ratios when risk elevated.", rationale: "FA safeguards." },
  }),
  bx("mod28-q21", "Domain F Chapter 27 items often test:", "B", {
    A: { text: "Token exchange schedules only.", rationale: "FBA modalities and triangulation." },
    B: { text: "Modality discrimination, triangulation, hypothesis before intervention.", rationale: "Domain F focus." },
    C: { text: "Chaining tactics.", rationale: "Assessment logic." },
    D: { text: "Shaping grain only.", rationale: "FBA fundamentals." },
  }),
  bx("mod28-q22", "FBA triangulation chain—FIRST step:", "C", {
    A: { text: "Publish treatment claims.", rationale: "Risk and consent inventory first." },
    B: { text: "Fabricate FA.", rationale: "Assessment sequencing." },
    C: { text: "Inventory referral risks and consent scaffolding before assessment depth decisions.", rationale: "First step—establish preconditions before making analytic claims." },
    D: { text: "Skip indirect tools.", rationale: "Layer modalities." },
  }),
  bx("mod28-q23", "Scatterplot summary shows attention follows behavior in most episodes:", "A", {
    A: { text: "Descriptive correlate supporting attention hypothesis—not experimental confirmation alone.", rationale: "Descriptive interpretation." },
    B: { text: "Definitive experimental FA completed.", rationale: "Correlational descriptive." },
    C: { text: "Indirect FAST proof.", rationale: "Observation summary." },
    D: { text: "Treatment mastery.", rationale: "Hypothesis support only." },
  }),
  bx("mod28-q24", "Controlled attention, escape, and play conditions with IOA:", "D", {
    A: { text: "Indirect interview.", rationale: "Programmed contrasts." },
    B: { text: "Descriptive ABC only.", rationale: "Experimental FA." },
    C: { text: "Hypothesis statement only.", rationale: "Manipulation phase." },
    D: { text: "Experimental functional analysis modality.", rationale: "FA identification." },
  }),
  bx("mod28-q25", "Chapter 27 pairs with Chapter 5/26 because:", "C", {
    A: { text: "Unrelated.", rationale: "Assessment informs antecedent/consequence plans." },
    B: { text: "FBA replaces measurement.", rationale: "Integrated practice." },
    C: { text: "FBA hypotheses guide intervention selection including antecedent and reinforcement strategies.", rationale: "Integration note." },
    D: { text: "FBA is token economy.", rationale: "Assessment chapter." },
  }),
  bx("mod28-q26", "Trauma-informed interviews during indirect FBA:", "B", {
    A: { text: "Optional efficiency concern.", rationale: "Domain E guardrail." },
    B: { text: "Required ethical practice—avoid retraumatizing questioning.", rationale: "Trauma-informed care." },
    C: { text: "Replace descriptive observation.", rationale: "Complementary modality." },
    D: { text: "Excuse modality mislabeling.", rationale: "Ethics separate from labels." },
  }),
  bx("mod28-q27", "Cultural humility during indirect tools:", "A", {
    A: { text: "Interpret caregiver reports within cultural context; avoid monocausal folklore.", rationale: "Cultural humility." },
    B: { text: "Ignore culture for speed.", rationale: "Stakeholder validity." },
    C: { text: "Delete conflicting reports.", rationale: "Triangulate respectfully." },
    D: { text: "Replace with punishment hypotheses.", rationale: "Functional analysis." },
  }),
  bx("mod28-q28", "Medically informed plans before intensive FA manipulation:", "D", {
    A: { text: "Never needed.", rationale: "Medical/safety review when indicated." },
    B: { text: "Replace consent.", rationale: "Complementary safeguard." },
    C: { text: "Optional marketing.", rationale: "Risk management." },
    D: { text: "Appropriate when behavior has medical or safety dimensions.", rationale: "Medical guardrail." },
  }),
  bx("mod28-q29", "Assent during FBA procedures:", "C", {
    A: { text: "Irrelevant for observation.", rationale: "Assent-sensitive practice." },
    B: { text: "Replace informed consent.", rationale: "Complementary." },
    C: { text: "Honor assent/withdrawal especially during intensive or repeated assessment.", rationale: "Assent guardrail." },
    D: { text: "Skip when grant funded.", rationale: "Ethical requirement." },
  }),
  bx("mod28-q30", "High-Yield: intensive intervention without hypothesis statement:", "B", {
    A: { text: "Best practice.", rationale: "Hypothesis before intensity." },
    B: { text: "Error—publish operational hypothesis from assessment before locking treatment.", rationale: "Confusion point." },
    C: { text: "Required for DRO only.", rationale: "FBA prerequisite." },
    D: { text: "IOA substitute.", rationale: "Hypothesis statement." },
  }),
  bx("mod28-q31", "Abbreviated multi-element FA substitutes:", "A", {
    A: { text: "May be used when full FA exceeds resources—but label modality accurately.", rationale: "Abbreviated FA note." },
    B: { text: "May be labeled full FA always.", rationale: "Accurate reporting." },
    C: { text: "Replace all descriptive work.", rationale: "Layer modalities." },
    D: { text: "Eliminate consent.", rationale: "Safeguards remain." },
  }),
  bx("mod28-q32", "Topography risk inventory during FBA:", "D", {
    A: { text: "Optional.", rationale: "Safety planning." },
    B: { text: "Replaces IOA.", rationale: "Risk assessment." },
    C: { text: "Marketing only.", rationale: "Clinical necessity." },
    D: { text: "Documents severity risks guiding assessment depth and safeguards.", rationale: "Risk inventory." },
  }),
  bx("mod28-q33", "BCBA stem: descriptive and indirect agree on escape; no experimental test conducted:", "C", {
    A: { text: "Claim experimental FA completed.", rationale: "Label descriptive/indirect convergence." },
    B: { text: "Ignore agreement.", rationale: "Stronger convergent hypothesis." },
    C: { text: "May proceed with cautious hypothesis—still label evidence depth accurately; FA optional when safe.", rationale: "Convergent modalities vignette." },
    D: { text: "Fabricate contrasts.", rationale: "Honest reporting." },
  }),
  bx("mod28-q34", "Domain E breach in grant prose:", "A", {
    A: { text: "Overstating assessment strength—e.g., calling questionnaires a completed FA.", rationale: "Grant honesty." },
    B: { text: "Including indirect data when labeled.", rationale: "Acceptable when accurate." },
    C: { text: "Documenting triangulation conflict.", rationale: "Transparent practice." },
    D: { text: "Publishing hypothesis statement.", rationale: "Expected practice." },
  }),
  bx("mod28-q35", "Setting events in hypothesis statements:", "B", {
    A: { text: "Irrelevant to FBA.", rationale: "MO/context variables." },
    B: { text: "Contextual variables altering MO for challenging behavior—include when supported.", rationale: "Setting event role." },
    C: { text: "Replace consequence analysis.", rationale: "Part of hypothesis." },
    D: { text: "Punishment triggers only.", rationale: "Establishing conditions." },
  }),
  bx("mod28-q36", "Supervisory ratios during aggression FA:", "C", {
    A: { text: "Unnecessary.", rationale: "Safety staffing." },
    B: { text: "Replace IOA.", rationale: "Risk management." },
    C: { text: "Required safeguard when aggression topography elevates risk during manipulation.", rationale: "Supervisory ratio guardrail." },
    D: { text: "Optional for descriptive only.", rationale: "Experimental risk." },
  }),
  bx("mod28-q37", "FAST-style rankings:", "B", {
    A: { text: "Experimental FA.", rationale: "Indirect ranking tool." },
    B: { text: "Indirect modality generating hypotheses for corroboration.", rationale: "FAST classification." },
    C: { text: "Definitive proof.", rationale: "Hypothesis support only." },
    D: { text: "Treatment plan completion.", rationale: "Assessment tool." },
  }),
  bx("mod28-q38", "Publish modality-accurate summaries so stakeholders can:", "D", {
    A: { text: "Ignore assessment limits.", rationale: "Audit evidence depth." },
    B: { text: "Skip consent.", rationale: "Transparency purpose." },
    C: { text: "Avoid descriptive work.", rationale: "Accountability." },
    D: { text: "Audit evidence depth before treatment claims.", rationale: "Stakeholder transparency." },
  }),
  bx("mod28-q39", "Ethical FBA supervision prioritizes:", "A", {
    A: { text: "Honest modality labels, triangulation transparency, assent, cultural humility, safeguards before FA.", rationale: "Domain E + F." },
    B: { text: "Laundering indirect into FA claims.", rationale: "Reporting integrity." },
    C: { text: "Silent modality preference.", rationale: "Triangulation." },
    D: { text: "Fabricated graphs for funders.", rationale: "Data integrity." },
  }),
  bx("mod28-q40", "Exam trap: skipping hypothesis statement before intervention:", "C", {
    A: { text: "Cooper recommendation.", rationale: "Hypothesis guides treatment." },
    B: { text: "Required for indirect only.", rationale: "All intensities." },
    C: { text: "High-yield error—operational hypothesis should precede intensive programming.", rationale: "Ch 27 confusion point." },
    D: { text: "IOA replaces hypothesis.", rationale: "Distinct products." },
  }),
  bx("mod28-q41", "Layer indirect and descriptive streams:", "B", {
    A: { text: "Use only one modality.", rationale: "Multimodal layering." },
    B: { text: "Document conflicts transparently as part of triangulation.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    C: { text: "Delete weaker stream silently.", rationale: "Open reconciliation." },
    D: { text: "Skip experimental options always.", rationale: "When safeguards align." },
  }),
  bx("mod28-q42", "BCBA stem: team labels ABC scatter summary as multi-element FA in report:", "D", {
    A: { text: "Correct labeling.", rationale: "Descriptive ≠ experimental." },
    B: { text: "IOA issue only.", rationale: "Modality mislabel." },
    C: { text: "Required for grants.", rationale: "Honest relabel." },
    D: { text: "Mislabel—correct to descriptive FBA; plan experimental contrasts only if conducted.", rationale: "Reporting vignette." },
  }),
  bx("mod28-q43", "Staffing ceilings gating FA depth:", "A", {
    A: { text: "Transparently document when full FA deferred and what modalities were used instead.", rationale: "Resource honesty." },
    B: { text: "Excuse fabricating FA.", rationale: "Accurate alternatives." },
    C: { text: "Hide from stakeholders.", rationale: "Transparent reporting." },
    D: { text: "Delete indirect data.", rationale: "Layer available modalities." },
  }),
  bx("mod28-q44", "Descriptive FBA versus experimental FA evidence strength:", "C", {
    A: { text: "Identical.", rationale: "FA stronger when safe/conducted." },
    B: { text: "Descriptive always stronger.", rationale: "Experimental isolates variables." },
    C: { text: "Experimental FA provides stronger functional confirmation when properly conducted; descriptive provides correlational support.", rationale: "Evidence hierarchy note." },
    D: { text: "Indirect strongest.", rationale: "Weakest alone." },
  }),
  bx("mod28-q45", "Reconciliation plan when FAST and ABC data conflict:", "B", {
    A: { text: "Pick FAST because faster.", rationale: "Document plan openly." },
    B: { text: "Gather additional descriptive/experimental data; state unresolved hypothesis limits.", rationale: "Triangulation response." },
    C: { text: "Hide conflict in report.", rationale: "Transparency." },
    D: { text: "Begin punishment intervention.", rationale: "Assessment-led programming." },
  }),
  bx("mod28-q46", "Caregiver interview suggesting attention function:", "A", {
    A: { text: "Indirect hypothesis—corroborate with descriptive observation or experimental FA when feasible.", rationale: "Indirect use." },
    B: { text: "Completed FA.", rationale: "Needs corroboration." },
    C: { text: "Proof to skip observation.", rationale: "Layer modalities." },
    D: { text: "Treatment mastery.", rationale: "Assessment phase." },
  }),
  bx("mod28-q47", "Cooper emphasizes honesty when modalities mislabeled as exhaustive FA:", "D", {
    A: { text: "Grant speed priority.", rationale: "Domain E integrity." },
    B: { text: "Marketing flexibility.", rationale: "Accurate labels." },
    C: { text: "Delete weaker modalities.", rationale: "Report all labeled honestly." },
    D: { text: "Domain E breaches when prose overstates evidence—relabel and plan feasible next steps.", rationale: "Honesty emphasis." },
  }),
  bx("mod28-q48", "Plan defensible experimental contrasts only when:", "C", {
    A: { text: "Grant deadline urgent.", rationale: "Safeguards align." },
    B: { text: "Questionnaires completed.", rationale: "Safety and consent." },
    C: { text: "Safeguards, consent, staffing, and risk review support manipulation.", rationale: "Third step—implement transparently with honest measurement." },
    D: { text: "Parents demand any label.", rationale: "Clinical criteria." },
  }),
  bx("mod28-q49", "Hypothesis statement before treatment intensity locks in:", "B", {
    A: { text: "Optional paperwork.", rationale: "Guides intervention." },
    B: { text: "Operational summary linking assessment data to suspected maintaining variables.", rationale: "Hypothesis function." },
    C: { text: "Identical to grant budget.", rationale: "Clinical product." },
    D: { text: "Replaces IOA.", rationale: "Complementary." },
  }),
  bx("mod28-q50", "Closing Chapter 27 principle:", "B", {
    A: { text: "Questionnaires equal completed FA.", rationale: "Modality accuracy." },
    B: { text: "Layer modalities; triangulate conflicts; publish operational hypothesis; label methods honestly; safeguard experimental FA; respect assent and culture.", rationale: "Chapter 27 integration." },
    C: { text: "Skip descriptive when indirect available.", rationale: "Multimodal FBA." },
    D: { text: "Hide modality discord.", rationale: "Transparent triangulation." },
  }),
];
