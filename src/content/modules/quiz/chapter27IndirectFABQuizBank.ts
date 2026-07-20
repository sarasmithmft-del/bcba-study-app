import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 27 supplement — Indirect FBA (mod07). */

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

export const CHAPTER_27_INDIRECT_FAB_QUIZ_BANK: BDSQuestion[] = [
  bx("mod07-q1", "FAST tangible hypothesis contradicts descriptive ABC — MOST defensible response?", "B", {
    A: { text: "Announce definitive tangible reinforcement diagnosis.", rationale: "Contradiction prevents declarative certainty absent corroborating streams." },
    B: { text: "Extend descriptive sampling focusing on tangible deliveries.", rationale: "Classic Ch 27 triangulation vignette—extend sampling keyed to conflict." },
    C: { text: "Delete FAST responses from records.", rationale: "Suppressing indirect data violates transparency." },
    D: { text: "Switch hypotheses weekly arbitrarily.", rationale: "Lacks systematic analytic rationale." },
  }),
  bx("mod07-q4", "Cooper Chapter 27 indirect functional behavioral assessment:", "A", {
    A: { text: "Recall or rating modalities generating hypotheses needing corroboration—not stand-alone proof.", rationale: "Indirect FBA definition within Ch 27." },
    B: { text: "Controlled evocative contrasts isolating reinforcer classes.", rationale: "Experimental FA stream." },
    C: { text: "Naturalistic scatterplot summaries only.", rationale: "Descriptive FBA stream." },
    D: { text: "Treatment implementation phase exclusively.", rationale: "Assessment modality." },
  }),
  bx("mod07-q5", "Structured indirect interviews primarily:", "C", {
    A: { text: "Replace all descriptive observation.", rationale: "Complementary hypothesis stream." },
    B: { text: "Prove experimental function definitively.", rationale: "Hypothesis generation." },
    C: { text: "Organize comparable caregiver narratives into testable hypotheses.", rationale: "Structured interview role." },
    D: { text: "Eliminate informed consent.", rationale: "Ethics remain obligatory." },
  }),
  bx("mod07-q6", "FAST-class instruments:", "D", {
    A: { text: "Experimental FA modality.", rationale: "Indirect checklist." },
    B: { text: "IOA statistic.", rationale: "Indirect ranking tool." },
    C: { text: "Definitive proof of maintaining contingency.", rationale: "Hypothesis support only." },
    D: { text: "Indirect checklist estimating suspected behavioral-function profiles from respondent rankings.", rationale: "FAST definition." },
  }),
  bx("mod07-q7", "MAS-class surveys:", "B", {
    A: { text: "Continuous duration recording.", rationale: "Indirect reinforcer-domain survey." },
    B: { text: "Rank presumed reinforcer domains guiding later empirical probes.", rationale: "MAS definition." },
    C: { text: "Experimental extinction curves.", rationale: "Indirect tool." },
    D: { text: "Permanent IQ classification.", rationale: "Unrelated domain." },
  }),
  bx("mod07-q8", "Recall limitations in indirect FBA include:", "A", {
    A: { text: "Memory error, wording effects, cultural interpretation, interviewer influence.", rationale: "Source limitation bundle." },
    B: { text: "IOA interval methods only.", rationale: "Broader recall limits." },
    C: { text: "Scatterplot axis scaling.", rationale: "Descriptive issue." },
    D: { text: "FA condition sequencing.", rationale: "Experimental issue." },
  }),
  bx("mod07-q9", "Incomplete indirect work should not:", "D", {
    A: { text: "Guide hypothesis generation.", rationale: "Appropriate use." },
    B: { text: "Inform descriptive planning.", rationale: "Layer modalities." },
    C: { text: "Precede experimental FA when safe.", rationale: "Staging role." },
    D: { text: "Stand in for corroborating descriptive or experimental evidence.", rationale: "Cooper Ch 27 emphasis." },
  }),
  bx("mod07-q10", "Triangulation when FAST conflicts with ABC data:", "C", {
    A: { text: "Pick FAST because faster.", rationale: "Document conflict openly." },
    B: { text: "Delete descriptive logs.", rationale: "Integrate streams." },
    C: { text: "Document divergence; extend targeted descriptive or experimental corroboration.", rationale: "Triangulation response." },
    D: { text: "Hide conflict in grant prose.", rationale: "Transparency required." },
  }),
  bx("mod07-q11", "Exam trap: treating FAST/MAS output as conclusions:", "B", {
    A: { text: "Best practice when busy.", rationale: "Corroboration required." },
    B: { text: "High-yield error—indirect generates hypotheses; corroboration needed.", rationale: "Ch 27 confusion point." },
    C: { text: "Required for QABF only.", rationale: "All indirect tools." },
    D: { text: "IOA issue only.", rationale: "Modality logic error." },
  }),
  bx("mod07-q12", "Exam trap: smoothing over informant disagreement:", "A", {
    A: { text: "High-yield error—disagreement is data; document and guide next assessment step.", rationale: "Triangulation trap." },
    B: { text: "Correct when averages look tidy.", rationale: "Disagreement informs design." },
    C: { text: "Required for social validity.", rationale: "Document divergence." },
    D: { text: "Eliminates need for interviews.", rationale: "Opposite." },
  }),
  bx("mod07-q13", "Social validity during indirect intake means:", "D", {
    A: { text: "Analyst convenience governs priorities.", rationale: "Stakeholder endorsement." },
    B: { text: "Ignore caregiver emergencies.", rationale: "Stakeholder-valued routines." },
    C: { text: "Replace triangulation.", rationale: "Complementary concept." },
    D: { text: "Targets and assessment questions align with stakeholder-valued routines and concerns.", rationale: "Social validity definition." },
  }),
  bx("mod07-q14", "Modality-accurate reporting for indirect-only assessment:", "B", {
    A: { text: "Label questionnaires as completed multi-element FA.", rationale: "Honest labels." },
    B: { text: "Report indirect hypotheses with explicit uncertainty and planned corroboration.", rationale: "Accurate indirect reporting." },
    C: { text: "Delete weaker modalities silently.", rationale: "Transparent triangulation." },
    D: { text: "Skip hypothesis statements.", rationale: "Publish operational hypothesis." },
  }),
  bx("mod07-q15", "QABF-style questionnaires:", "C", {
    A: { text: "Experimental contrasts.", rationale: "Indirect estimate tool." },
    B: { text: "Scatterplot matrices.", rationale: "Descriptive tool." },
    C: { text: "Indirect caregiver/educator function estimates awaiting corroboration.", rationale: "QABF role." },
    D: { text: "Token economy schedules.", rationale: "Ch 28 content." },
  }),
  bx("mod07-q16", "Indirect FAB buys efficient hypotheses ahead of:", "A", {
    A: { text: "Dense descriptive corroboration and ethically feasible experimental contrasts.", rationale: "Multimodal layering." },
    B: { text: "Treatment discharge always.", rationale: "Assessment staging." },
    C: { text: "Deleting ABC logs.", rationale: "Layer modalities." },
    D: { text: "Punishment plans without assessment.", rationale: "Assessment-led programming." },
  }),
  bx("mod07-q17", "Cultural humility during indirect tools:", "D", {
    A: { text: "Ignore culture for speed.", rationale: "Interpret within cultural context." },
    B: { text: "Delete conflicting reports.", rationale: "Triangulate respectfully." },
    C: { text: "Replace with punishment hypotheses.", rationale: "Functional assessment." },
    D: { text: "Interpret caregiver reports within cultural context; avoid monocausal folklore.", rationale: "Cultural humility guardrail." },
  }),
  bx("mod07-q18", "Trauma-informed indirect interviews:", "B", {
    A: { text: "Optional efficiency concern.", rationale: "Domain E guardrail." },
    B: { text: "Avoid retraumatizing questioning; respect assent-sensitive practice.", rationale: "Trauma-informed care." },
    C: { text: "Replace descriptive observation.", rationale: "Complementary modality." },
    D: { text: "Excuse modality mislabeling.", rationale: "Separate ethics issue." },
  }),
  bx("mod07-q19", "Indirect → descriptive bridge chain—FIRST step:", "C", {
    A: { text: "Schedule descriptive sampling before any intake.", rationale: "Indirect intake first." },
    B: { text: "Publish treatment claims.", rationale: "Assessment sequencing." },
    C: { text: "Administer normed indirect instruments and structured interviews across caregivers.", rationale: "First step—establish preconditions before making analytic claims." },
    D: { text: "Fabricate FA graphs.", rationale: "Ethical breach." },
  }),
  bx("mod07-q20", "Grant claims FA complete; appendix only questionnaires:", "A", {
    A: { text: "Relabel modalities honestly; plan supervised contrasts when safeguards permit.", rationale: "Modality mislabel vignette." },
    B: { text: "Ship narrative unchanged.", rationale: "Honesty required." },
    C: { text: "Fabricate FA spikes.", rationale: "Fabrication breach." },
    D: { text: "Delete caregiver interviews.", rationale: "Label indirect accurately." },
  }),
  bx("mod07-q21", "Domain F indirect FBA items often test:", "D", {
    A: { text: "Token exchange schedules only.", rationale: "Hypothesis and triangulation logic." },
    B: { text: "Shaping grain only.", rationale: "Assessment focus." },
    C: { text: "Chaining tactics exclusively.", rationale: "FBA modalities." },
    D: { text: "Hypothesis generation, triangulation when modalities disagree, modality-accurate labels.", rationale: "Domain F focus." },
  }),
  bx("mod07-q22", "Domain E indirect FBA breaches include:", "B", {
    A: { text: "Documenting triangulation conflict transparently.", rationale: "Good practice." },
    B: { text: "Labeling questionnaire output as exhaustive FA or hiding modality disagreement.", rationale: "Ethics breach." },
    C: { text: "Including indirect data when labeled accurately.", rationale: "Acceptable." },
    D: { text: "Publishing operational hypothesis.", rationale: "Expected practice." },
  }),
  bx("mod07-q23", "Caregiver interview suggesting attention function:", "C", {
    A: { text: "Completed experimental FA.", rationale: "Indirect hypothesis." },
    B: { text: "Proof to skip observation.", rationale: "Needs corroboration." },
    C: { text: "Indirect hypothesis—corroborate with descriptive observation or experimental FA when feasible.", rationale: "Indirect use." },
    D: { text: "Treatment mastery certificate.", rationale: "Assessment phase." },
  }),
  bx("mod07-q24", "When indirect rankings prioritize escape, next step MOST often:", "A", {
    A: { text: "Dense descriptive sampling around instructional transitions and demand routines.", rationale: "Hypothesis-guided observation." },
    B: { text: "Immediate punishment intervention.", rationale: "Assessment-led planning." },
    C: { text: "Delete FAST data.", rationale: "Integrate conflict." },
    D: { text: "Skip operational definitions.", rationale: "Measurement prerequisite." },
  }),
  bx("mod07-q25", "Structured interviews reduce:", "D", {
    A: { text: "Need for any corroboration.", rationale: "Corroboration still required." },
    B: { text: "Informed consent obligations.", rationale: "Ethics remain." },
    C: { text: "Experimental FA safeguards.", rationale: "Separate stream." },
    D: { text: "Drift from unstructured storytelling between informants.", rationale: "Comparability benefit." },
  }),
  bx("mod07-q26", "Indirect hypothesis statement should include:", "B", {
    A: { text: "Marketing slogans only.", rationale: "Operational summary." },
    B: { text: "Suspected antecedents, consequences, setting events—with uncertainty language.", rationale: "Hypothesis product." },
    C: { text: "IOA formula exclusively.", rationale: "Broader summary." },
    D: { text: "Treatment completion date.", rationale: "Pre-intervention product." },
  }),
  bx("mod07-q27", "Exam trap: deleting inconvenient indirect data when ABC disagrees:", "C", {
    A: { text: "Best triangulation practice.", rationale: "Integrate conflict explicitly." },
    B: { text: "Required for FAST only.", rationale: "All indirect tools." },
    C: { text: "High-yield error—document divergence; extend corroboration.", rationale: "Transparency trap." },
    D: { text: "IOA calculation issue.", rationale: "Modality integration issue." },
  }),
  bx("mod07-q28", "Indirect tools within Chapter 27 FBA:", "A", {
    A: { text: "One stream aggregated with descriptive and experimental modalities.", rationale: "Multimodal FBA." },
    B: { text: "Replace entire FBA when questionnaires complete.", rationale: "Layer modalities." },
    C: { text: "Identical to token economy.", rationale: "Assessment chapter." },
    D: { text: "Unrelated to hypothesis statements.", rationale: "Hypothesis guides next steps." },
  }),
  bx("mod07-q29", "BCBA stem: tangible FAST vs escape descriptive pattern—BEST response aligns with:", "D", {
    A: { text: "Announce tangible definitive overnight.", rationale: "mod07-q2 logic—integrate tentatively." },
    B: { text: "Disregard FAST entirely.", rationale: "Integrate rather than discard." },
    C: { text: "Stop all caregiver contact.", rationale: "Stakeholder input remains valuable." },
    D: { text: "Frame tangible tentative; intensify descriptive codes around instructional-demand routines.", rationale: "Correct move—Frame tangible tentative; intensify descriptive codes around instructional-demand routines." },
  }),
  bx("mod07-q30", "MAS/FAST primarily quantify (exam recall):", "A", {
    A: { text: "Caregiver/stakeholder estimates of reinforcing consequences tied to referrals.", rationale: "Correct move—Caregiver/stakeholder estimates of reinforcing consequences tied to referrals." },
    B: { text: "IRT distributions from continuous recordings.", rationale: "Requires timestamped data." },
    C: { text: "Experimental extinction curves.", rationale: "Indirect lacks isolation." },
    D: { text: "Permanent IQ classification.", rationale: "Unrelated construct." },
  }),
  bx("mod07-q31", "High-Yield: skipping uncertainty language in indirect reports:", "B", {
    A: { text: "Cooper recommendation for speed.", rationale: "Explicit limits required." },
    B: { text: "Error—state hypothesis, uncertainty, and next verification method.", rationale: "Ch 27 confusion point." },
    C: { text: "Required for MAS only.", rationale: "All indirect reporting." },
    D: { text: "IOA substitute.", rationale: "Reporting discipline." },
  }),
  bx("mod07-q32", "Informant disagreement during indirect intake:", "C", {
    A: { text: "Average away silently for tidy consensus.", rationale: "Disagreement is data." },
    B: { text: "Delete minority reports.", rationale: "Document divergence." },
    C: { text: "Document and shape next assessment design—additional interviews or descriptive probes.", rationale: "Triangulation discipline." },
    D: { text: "Skip hypothesis statement.", rationale: "Reconcile first." },
  }),
  bx("mod07-q33", "Indirect FAB chain—summarize convergence BEFORE:", "D", {
    A: { text: "Any structured intake.", rationale: "After operationalizing codes." },
    B: { text: "Treatment discharge.", rationale: "Assessment sequencing." },
    C: { text: "Deleting ABC logs.", rationale: "Integrate modalities." },
    D: { text: "Scheduling descriptive sampling biased toward high-risk routines.", rationale: "Chain order a→b→c→d." },
  }),
  bx("mod07-q34", "Operationalize suspected consequences after indirect intake to:", "A", {
    A: { text: "Translate recall into descriptive coding schemes observers can score.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    B: { text: "Eliminate need for IOA.", rationale: "IOA still required in descriptive phase." },
    C: { text: "Replace informed consent.", rationale: "Complementary ethics." },
    D: { text: "Fabricate FA differentiation.", rationale: "Descriptive bridge step." },
  }),
  bx("mod07-q35", "Chapter 27 indirect vs experimental FA evidence strength:", "B", {
    A: { text: "Identical when FAST completed.", rationale: "Experimental stronger when conducted." },
    B: { text: "Indirect weakest alone; experimental provides stronger confirmation when safe.", rationale: "Evidence hierarchy." },
    C: { text: "Indirect always strongest.", rationale: "Hypothesis generation only." },
    D: { text: "Descriptive weakest always.", rationale: "Layered hierarchy varies by conduct." },
  }),
  bx("mod07-q36", "IOA on later descriptive codes supports indirect triangulation by:", "C", {
    A: { text: "Replacing hypothesis statements.", rationale: "Measurement quality for descriptive corroboration." },
    B: { text: "Eliminating interviews.", rationale: "Complementary streams." },
    C: { text: "Guarding definitional fidelity before descriptive claims adjudicate indirect guesses.", rationale: "Domain C supporting Domain F." },
    D: { text: "Proving experimental FA completed.", rationale: "Descriptive quality issue." },
  }),
  bx("mod07-q37", "Staffing ceilings limiting observation after indirect intake:", "D", {
    A: { text: "Excuse fabricating descriptive data.", rationale: "Prioritize ethically feasible corroboration." },
    B: { text: "Permit labeling interviews as FA.", rationale: "Accurate labels." },
    C: { text: "Delete indirect conflict from records.", rationale: "Transparent documentation." },
    D: { text: "Transparently document limits; stage feasible descriptive density on highest-priority hypotheses.", rationale: "Resource honesty." },
  }),
  bx("mod07-q38", "Multilingual indirect findings for multidisciplinary teams require:", "A", {
    A: { text: "Note linguistic descriptors, supports, provisional hypotheses—not laundering recall as mastery.", rationale: "Worksheet Scenario D logic." },
    B: { text: "English-only brochures regardless of language.", rationale: "Stakeholder validity." },
    C: { text: "Suppress translated-form divergence silently.", rationale: "Triangulation." },
    D: { text: "Skip structured prompts.", rationale: "Comparability needed." },
  }),
  bx("mod07-q39", "Preference assessment after MAS tangible ranking:", "B", {
    A: { text: "Experimental FA termination.", rationale: "Empirical probe pairing stimuli." },
    B: { text: "Permissible next step pairing tangible stimuli before strong claims.", rationale: "Worksheet Scenario A follow-up." },
    C: { text: "Immediate tangible intervention packet without corroboration.", rationale: "Triangulation first." },
    D: { text: "Referral termination.", rationale: "Continue assessment." },
  }),
  bx("mod07-q40", "Exam trap: unstructured hallway anecdotes replacing structured indirect intake:", "C", {
    A: { text: "Best comparability practice.", rationale: "Structured prompts reduce drift." },
    B: { text: "Required for social validity.", rationale: "Structure supports comparability." },
    C: { text: "High-yield error—structured interviews improve cross-informant comparison.", rationale: "Ch 27 confusion point." },
    D: { text: "Eliminates recall bias entirely.", rationale: "Limits remain." },
  }),
  bx("mod07-q41", "Hypothesis before intensive intervention when indirect-only data exist:", "D", {
    A: { text: "Optional paperwork.", rationale: "Operational hypothesis required." },
    B: { text: "Replace with FAST scores.", rationale: "Hypothesis integrates modalities." },
    C: { text: "Skip when caregivers agree.", rationale: "Assessment standard." },
    D: { text: "Publish operational hypothesis with evidence-depth limits before locking treatment intensity.", rationale: "Ch 27 integration." },
  }),
  bx("mod07-q42", "Regional brief: exhaustive FA claimed; attachments questionnaires only—MOST corrective:", "A", {
    A: { text: "Relabel modality honestly; document limits; arrange defensible contrasts when safeguards permit.", rationale: "MTS vignette match." },
    B: { text: "Ship unchanged.", rationale: "Modality mislabel." },
    C: { text: "Destroy descriptive datasets.", rationale: "Integrate modalities." },
    D: { text: "Replace stakeholders.", rationale: "Ethical breach." },
  }),
  bx("mod07-q43", "Indirect rankings plus descriptive convergence on escape; no FA conducted:", "C", {
    A: { text: "Claim experimental FA completed.", rationale: "Label convergence accurately." },
    B: { text: "Ignore agreement.", rationale: "Stronger convergent hypothesis." },
    C: { text: "May proceed with cautious hypothesis—label evidence depth; FA optional when safe.", rationale: "Convergent modalities note." },
    D: { text: "Fabricate contrasts.", rationale: "Honest reporting." },
  }),
  bx("mod07-q44", "Setting events in indirect-derived hypotheses:", "B", {
    A: { text: "Irrelevant to indirect intake.", rationale: "Contextual MO variables." },
    B: { text: "Include when supported by informant recall and later corroboration.", rationale: "Hypothesis component." },
    C: { text: "Replace consequence analysis.", rationale: "Part of hypothesis." },
    D: { text: "Punishment triggers only.", rationale: "Establishing conditions." },
  }),
  bx("mod07-q45", "Domain E when questionnaires substitute for feasible observation:", "D", {
    A: { text: "Acceptable when grant deadlines urgent.", rationale: "Ethical reporting overlap." },
    B: { text: "Required for FAST only.", rationale: "All indirect overreach." },
    C: { text: "IOA issue exclusively.", rationale: "Reporting integrity." },
    D: { text: "Ethical breach when findings cherry-picked or overclaimed—label uncertainty.", rationale: "Domain E + F overlap." },
  }),
  bx("mod07-q46", "Cooper Chapter 27 indirect supplement emphasizes:", "A", {
    A: { text: "Hypothesis discipline, triangulation transparency, modality-accurate reporting.", rationale: "Indirect stream emphasis." },
    B: { text: "Scatterplot interpretation exclusively.", rationale: "Descriptive stream." },
    C: { text: "Escape condition logic exclusively.", rationale: "Experimental stream." },
    D: { text: "Token economy implementation.", rationale: "Ch 28." },
  }),
  bx("mod07-q47", "BCBA stem: IEP omits contradictory ABC so FAST matches vendor pitch:", "B", {
    A: { text: "Selective reporting favoring indirect narratives.", rationale: "Triangulation required." },
    B: { text: "Explicit triangulation admitting modality conflict alongside provisional hypotheses.", rationale: "MTS vignette." },
    C: { text: "Delete caregiver interviews indefinitely.", rationale: "Integrate streams." },
    D: { text: "Replace review with advertisements.", rationale: "Ethical breach." },
  }),
  bx("mod07-q48", "After indirect intake, three-part practice Cooper teaches:", "C", {
    A: { text: "Hypothesis only.", rationale: "Hypothesis + uncertainty + next step." },
    B: { text: "Treatment plan only.", rationale: "Assessment discipline." },
    C: { text: "One sentence hypothesis, one uncertainty, one next verification method.", rationale: "Teaching-mode drill." },
    D: { text: "Grant budget only.", rationale: "Clinical reasoning." },
  }),
  bx("mod07-q49", "Indirect FAB safmed triangulation means:", "D", {
    A: { text: "Pick favorite modality silently.", rationale: "Open reconciliation." },
    B: { text: "Delete conflicting data.", rationale: "Document conflict." },
    C: { text: "Skip descriptive work.", rationale: "Layer modalities." },
    D: { text: "Reconcile indirect, descriptive, and experimental streams before certainty claims.", rationale: "Triangulation definition." },
  }),
  bx("mod07-q50", "Closing Chapter 27 indirect FBA principle:", "B", {
    A: { text: "Questionnaires equal completed FA.", rationale: "Modality accuracy." },
    B: { text: "Generate hypotheses with structured tools; document limits and disagreement; triangulate with stronger modalities; label methods honestly.", rationale: "Chapter 27 indirect integration." },
    C: { text: "Skip descriptive when FAST available.", rationale: "Multimodal FBA." },
    D: { text: "Hide modality discord for confidence.", rationale: "Transparent triangulation." },
  }),
];
