import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "content", "modules", "quiz");

function bx(id, stem, correct, opts) {
  const lines = ["A", "B", "C", "D"].map(
    (L) =>
      `    ${L}: { text: ${JSON.stringify(opts[L].t)}, rationale: ${JSON.stringify(opts[L].r)} },`,
  );
  return `  bx(${JSON.stringify(id)}, ${JSON.stringify(stem)}, ${JSON.stringify(correct)}, {
${lines.join("\n")}
  }),`;
}

function writeBank(filename, exportName, title, items) {
  const header = `import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 27 supplement — ${title}. */

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

export const ${exportName}: BDSQuestion[] = [
`;
  fs.writeFileSync(path.join(outDir, filename), header + items.join("\n") + "\n];\n");
  console.log(`${filename}: ${items.length} items`);
}

const o = (A, B, C, D) => ({ A, B, C, D });

// MOD07
writeBank(
  "chapter27IndirectFABQuizBank.ts",
  "CHAPTER_27_INDIRECT_FAB_QUIZ_BANK",
  "Indirect FBA (mod07)",
  [
    bx("mod07-q1", "FAST tangible hypothesis contradicts descriptive ABC — MOST defensible response?", "B", o(
      { t: "Announce definitive tangible reinforcement diagnosis.", r: "Contradiction prevents declarative certainty absent corroborating streams." },
      { t: "Extend descriptive sampling focusing on tangible deliveries.", r: "Classic Ch 27 triangulation vignette—extend sampling keyed to conflict." },
      { t: "Delete FAST responses from records.", r: "Suppressing indirect data violates transparency." },
      { t: "Switch hypotheses weekly arbitrarily.", r: "Lacks systematic analytic rationale." },
    )),
    bx("mod07-q4", "Cooper Chapter 27 indirect functional behavioral assessment:", "A", o(
      { t: "Recall or rating modalities generating hypotheses needing corroboration—not stand-alone proof.", r: "Indirect FBA definition within Ch 27." },
      { t: "Controlled evocative contrasts isolating reinforcer classes.", r: "Experimental FA stream." },
      { t: "Naturalistic scatterplot summaries only.", r: "Descriptive FBA stream." },
      { t: "Treatment implementation phase exclusively.", r: "Assessment modality." },
    )),
    bx("mod07-q5", "Structured indirect interviews primarily:", "C", o(
      { t: "Replace all descriptive observation.", r: "Complementary hypothesis stream." },
      { t: "Prove experimental function definitively.", r: "Hypothesis generation." },
      { t: "Organize comparable caregiver narratives into testable hypotheses.", r: "Structured interview role." },
      { t: "Eliminate informed consent.", r: "Ethics remain obligatory." },
    )),
    bx("mod07-q6", "FAST-class instruments:", "D", o(
      { t: "Experimental FA modality.", r: "Indirect checklist." },
      { t: "IOA statistic.", r: "Indirect ranking tool." },
      { t: "Definitive proof of maintaining contingency.", r: "Hypothesis support only." },
      { t: "Indirect checklist estimating suspected behavioral-function profiles from respondent rankings.", r: "FAST definition." },
    )),
    bx("mod07-q7", "MAS-class surveys:", "B", o(
      { t: "Continuous duration recording.", r: "Indirect reinforcer-domain survey." },
      { t: "Rank presumed reinforcer domains guiding later empirical probes.", r: "MAS definition." },
      { t: "Experimental extinction curves.", r: "Indirect tool." },
      { t: "Permanent IQ classification.", r: "Unrelated domain." },
    )),
    bx("mod07-q8", "Recall limitations in indirect FBA include:", "A", o(
      { t: "Memory error, wording effects, cultural interpretation, interviewer influence.", r: "Source limitation bundle." },
      { t: "IOA interval methods only.", r: "Broader recall limits." },
      { t: "Scatterplot axis scaling.", r: "Descriptive issue." },
      { t: "FA condition sequencing.", r: "Experimental issue." },
    )),
    bx("mod07-q9", "Incomplete indirect work should not:", "D", o(
      { t: "Guide hypothesis generation.", r: "Appropriate use." },
      { t: "Inform descriptive planning.", r: "Layer modalities." },
      { t: "Precede experimental FA when safe.", r: "Staging role." },
      { t: "Stand in for corroborating descriptive or experimental evidence.", r: "Cooper Ch 27 emphasis." },
    )),
    bx("mod07-q10", "Triangulation when FAST conflicts with ABC data:", "C", o(
      { t: "Pick FAST because faster.", r: "Document conflict openly." },
      { t: "Delete descriptive logs.", r: "Integrate streams." },
      { t: "Document divergence; extend targeted descriptive or experimental corroboration.", r: "Triangulation response." },
      { t: "Hide conflict in grant prose.", r: "Transparency required." },
    )),
    bx("mod07-q11", "Exam trap: treating FAST/MAS output as conclusions:", "B", o(
      { t: "Best practice when busy.", r: "Corroboration required." },
      { t: "High-yield error—indirect generates hypotheses; corroboration needed.", r: "Ch 27 confusion point." },
      { t: "Required for QABF only.", r: "All indirect tools." },
      { t: "IOA issue only.", r: "Modality logic error." },
    )),
    bx("mod07-q12", "Exam trap: smoothing over informant disagreement:", "A", o(
      { t: "High-yield error—disagreement is data; document and guide next assessment step.", r: "Triangulation trap." },
      { t: "Correct when averages look tidy.", r: "Disagreement informs design." },
      { t: "Required for social validity.", r: "Document divergence." },
      { t: "Eliminates need for interviews.", r: "Opposite." },
    )),
    bx("mod07-q13", "Social validity during indirect intake means:", "D", o(
      { t: "Analyst convenience governs priorities.", r: "Stakeholder endorsement." },
      { t: "Ignore caregiver emergencies.", r: "Stakeholder-valued routines." },
      { t: "Replace triangulation.", r: "Complementary concept." },
      { t: "Targets and assessment questions align with stakeholder-valued routines and concerns.", r: "Social validity definition." },
    )),
    bx("mod07-q14", "Modality-accurate reporting for indirect-only assessment:", "B", o(
      { t: "Label questionnaires as completed multi-element FA.", r: "Honest labels." },
      { t: "Report indirect hypotheses with explicit uncertainty and planned corroboration.", r: "Accurate indirect reporting." },
      { t: "Delete weaker modalities silently.", r: "Transparent triangulation." },
      { t: "Skip hypothesis statements.", r: "Publish operational hypothesis." },
    )),
    bx("mod07-q15", "QABF-style questionnaires:", "C", o(
      { t: "Experimental contrasts.", r: "Indirect estimate tool." },
      { t: "Scatterplot matrices.", r: "Descriptive tool." },
      { t: "Indirect caregiver/educator function estimates awaiting corroboration.", r: "QABF role." },
      { t: "Token economy schedules.", r: "Ch 28 content." },
    )),
    bx("mod07-q16", "Indirect FAB buys efficient hypotheses ahead of:", "A", o(
      { t: "Dense descriptive corroboration and ethically feasible experimental contrasts.", r: "Multimodal layering." },
      { t: "Treatment discharge always.", r: "Assessment staging." },
      { t: "Deleting ABC logs.", r: "Layer modalities." },
      { t: "Punishment plans without assessment.", r: "Assessment-led programming." },
    )),
    bx("mod07-q17", "Cultural humility during indirect tools:", "D", o(
      { t: "Ignore culture for speed.", r: "Interpret within cultural context." },
      { t: "Delete conflicting reports.", r: "Triangulate respectfully." },
      { t: "Replace with punishment hypotheses.", r: "Functional assessment." },
      { t: "Interpret caregiver reports within cultural context; avoid monocausal folklore.", r: "Cultural humility guardrail." },
    )),
    bx("mod07-q18", "Trauma-informed indirect interviews:", "B", o(
      { t: "Optional efficiency concern.", r: "Domain E guardrail." },
      { t: "Avoid retraumatizing questioning; respect assent-sensitive practice.", r: "Trauma-informed care." },
      { t: "Replace descriptive observation.", r: "Complementary modality." },
      { t: "Excuse modality mislabeling.", r: "Separate ethics issue." },
    )),
    bx("mod07-q19", "Indirect → descriptive bridge chain—FIRST step:", "C", o(
      { t: "Schedule descriptive sampling before any intake.", r: "Indirect intake first." },
      { t: "Publish treatment claims.", r: "Assessment sequencing." },
      { t: "Administer normed indirect instruments and structured interviews across caregivers.", r: "Chain fragment a." },
      { t: "Fabricate FA graphs.", r: "Ethical breach." },
    )),
    bx("mod07-q20", "Grant claims FA complete; appendix only questionnaires:", "A", o(
      { t: "Relabel modalities honestly; plan supervised contrasts when safeguards permit.", r: "Modality mislabel vignette." },
      { t: "Ship narrative unchanged.", r: "Honesty required." },
      { t: "Fabricate FA spikes.", r: "Fabrication breach." },
      { t: "Delete caregiver interviews.", r: "Label indirect accurately." },
    )),
    bx("mod07-q21", "Domain F indirect FBA items often test:", "D", o(
      { t: "Token exchange schedules only.", r: "Hypothesis and triangulation logic." },
      { t: "Shaping grain only.", r: "Assessment focus." },
      { t: "Chaining tactics exclusively.", r: "FBA modalities." },
      { t: "Hypothesis generation, triangulation when modalities disagree, modality-accurate labels.", r: "Domain F focus." },
    )),
    bx("mod07-q22", "Domain E indirect FBA breaches include:", "B", o(
      { t: "Documenting triangulation conflict transparently.", r: "Good practice." },
      { t: "Labeling questionnaire output as exhaustive FA or hiding modality disagreement.", r: "Ethics breach." },
      { t: "Including indirect data when labeled accurately.", r: "Acceptable." },
      { t: "Publishing operational hypothesis.", r: "Expected practice." },
    )),
    bx("mod07-q23", "Caregiver interview suggesting attention function:", "C", o(
      { t: "Completed experimental FA.", r: "Indirect hypothesis." },
      { t: "Proof to skip observation.", r: "Needs corroboration." },
      { t: "Indirect hypothesis—corroborate with descriptive observation or experimental FA when feasible.", r: "Indirect use." },
      { t: "Treatment mastery certificate.", r: "Assessment phase." },
    )),
    bx("mod07-q24", "When indirect rankings prioritize escape, next step MOST often:", "A", o(
      { t: "Dense descriptive sampling around instructional transitions and demand routines.", r: "Hypothesis-guided observation." },
      { t: "Immediate punishment intervention.", r: "Assessment-led planning." },
      { t: "Delete FAST data.", r: "Integrate conflict." },
      { t: "Skip operational definitions.", r: "Measurement prerequisite." },
    )),
    bx("mod07-q25", "Structured interviews reduce:", "D", o(
      { t: "Need for any corroboration.", r: "Corroboration still required." },
      { t: "Informed consent obligations.", r: "Ethics remain." },
      { t: "Experimental FA safeguards.", r: "Separate stream." },
      { t: "Drift from unstructured storytelling between informants.", r: "Comparability benefit." },
    )),
    bx("mod07-q26", "Indirect hypothesis statement should include:", "B", o(
      { t: "Marketing slogans only.", r: "Operational summary." },
      { t: "Suspected antecedents, consequences, setting events—with uncertainty language.", r: "Hypothesis product." },
      { t: "IOA formula exclusively.", r: "Broader summary." },
      { t: "Treatment completion date.", r: "Pre-intervention product." },
    )),
    bx("mod07-q27", "Exam trap: deleting inconvenient indirect data when ABC disagrees:", "C", o(
      { t: "Best triangulation practice.", r: "Integrate conflict explicitly." },
      { t: "Required for FAST only.", r: "All indirect tools." },
      { t: "High-yield error—document divergence; extend corroboration.", r: "Transparency trap." },
      { t: "IOA calculation issue.", r: "Modality integration issue." },
    )),
    bx("mod07-q28", "Indirect tools within Chapter 27 FBA:", "A", o(
      { t: "One stream aggregated with descriptive and experimental modalities.", r: "Multimodal FBA." },
      { t: "Replace entire FBA when questionnaires complete.", r: "Layer modalities." },
      { t: "Identical to token economy.", r: "Assessment chapter." },
      { t: "Unrelated to hypothesis statements.", r: "Hypothesis guides next steps." },
    )),
    bx("mod07-q29", "BCBA stem: tangible FAST vs escape descriptive pattern—BEST response aligns with:", "D", o(
      { t: "Announce tangible definitive overnight.", r: "mod07-q2 logic—integrate tentatively." },
      { t: "Disregard FAST entirely.", r: "Integrate rather than discard." },
      { t: "Stop all caregiver contact.", r: "Stakeholder input remains valuable." },
      { t: "Frame tangible tentative; intensify descriptive codes around instructional-demand routines.", r: "mod07-q2 vignette." },
    )),
    bx("mod07-q30", "MAS/FAST primarily quantify (exam recall):", "A", o(
      { t: "Caregiver/stakeholder estimates of reinforcing consequences tied to referrals.", r: "mod07-q3 vignette." },
      { t: "IRT distributions from continuous recordings.", r: "Requires timestamped data." },
      { t: "Experimental extinction curves.", r: "Indirect lacks isolation." },
      { t: "Permanent IQ classification.", r: "Unrelated construct." },
    )),
    bx("mod07-q31", "High-Yield: skipping uncertainty language in indirect reports:", "B", o(
      { t: "Cooper recommendation for speed.", r: "Explicit limits required." },
      { t: "Error—state hypothesis, uncertainty, and next verification method.", r: "Ch 27 confusion point." },
      { t: "Required for MAS only.", r: "All indirect reporting." },
      { t: "IOA substitute.", r: "Reporting discipline." },
    )),
    bx("mod07-q32", "Informant disagreement during indirect intake:", "C", o(
      { t: "Average away silently for tidy consensus.", r: "Disagreement is data." },
      { t: "Delete minority reports.", r: "Document divergence." },
      { t: "Document and shape next assessment design—additional interviews or descriptive probes.", r: "Triangulation discipline." },
      { t: "Skip hypothesis statement.", r: "Reconcile first." },
    )),
    bx("mod07-q33", "Indirect FAB chain—summarize convergence BEFORE:", "D", o(
      { t: "Any structured intake.", r: "After operationalizing codes." },
      { t: "Treatment discharge.", r: "Assessment sequencing." },
      { t: "Deleting ABC logs.", r: "Integrate modalities." },
      { t: "Scheduling descriptive sampling biased toward high-risk routines.", r: "Chain order a→b→c→d." },
    )),
    bx("mod07-q34", "Operationalize suspected consequences after indirect intake to:", "A", o(
      { t: "Translate recall into descriptive coding schemes observers can score.", r: "Chain fragment b." },
      { t: "Eliminate need for IOA.", r: "IOA still required in descriptive phase." },
      { t: "Replace informed consent.", r: "Complementary ethics." },
      { t: "Fabricate FA differentiation.", r: "Descriptive bridge step." },
    )),
    bx("mod07-q35", "Chapter 27 indirect vs experimental FA evidence strength:", "B", o(
      { t: "Identical when FAST completed.", r: "Experimental stronger when conducted." },
      { t: "Indirect weakest alone; experimental provides stronger confirmation when safe.", r: "Evidence hierarchy." },
      { t: "Indirect always strongest.", r: "Hypothesis generation only." },
      { t: "Descriptive weakest always.", r: "Layered hierarchy varies by conduct." },
    )),
    bx("mod07-q36", "IOA on later descriptive codes supports indirect triangulation by:", "C", o(
      { t: "Replacing hypothesis statements.", r: "Measurement quality for descriptive corroboration." },
      { t: "Eliminating interviews.", r: "Complementary streams." },
      { t: "Guarding definitional fidelity before descriptive claims adjudicate indirect guesses.", r: "Domain C supporting Domain F." },
      { t: "Proving experimental FA completed.", r: "Descriptive quality issue." },
    )),
    bx("mod07-q37", "Staffing ceilings limiting observation after indirect intake:", "D", o(
      { t: "Excuse fabricating descriptive data.", r: "Prioritize ethically feasible corroboration." },
      { t: "Permit labeling interviews as FA.", r: "Accurate labels." },
      { t: "Delete indirect conflict from records.", r: "Transparent documentation." },
      { t: "Transparently document limits; stage feasible descriptive density on highest-priority hypotheses.", r: "Resource honesty." },
    )),
    bx("mod07-q38", "Multilingual indirect findings for multidisciplinary teams require:", "A", o(
      { t: "Note linguistic descriptors, supports, provisional hypotheses—not laundering recall as mastery.", r: "Worksheet Scenario D logic." },
      { t: "English-only brochures regardless of language.", r: "Stakeholder validity." },
      { t: "Suppress translated-form divergence silently.", r: "Triangulation." },
      { t: "Skip structured prompts.", r: "Comparability needed." },
    )),
    bx("mod07-q39", "Preference assessment after MAS tangible ranking:", "B", o(
      { t: "Experimental FA termination.", r: "Empirical probe pairing stimuli." },
      { t: "Permissible next step pairing tangible stimuli before strong claims.", r: "Worksheet Scenario A follow-up." },
      { t: "Immediate tangible intervention packet without corroboration.", r: "Triangulation first." },
      { t: "Referral termination.", r: "Continue assessment." },
    )),
    bx("mod07-q40", "Exam trap: unstructured hallway anecdotes replacing structured indirect intake:", "C", o(
      { t: "Best comparability practice.", r: "Structured prompts reduce drift." },
      { t: "Required for social validity.", r: "Structure supports comparability." },
      { t: "High-yield error—structured interviews improve cross-informant comparison.", r: "Ch 27 confusion point." },
      { t: "Eliminates recall bias entirely.", r: "Limits remain." },
    )),
    bx("mod07-q41", "Hypothesis before intensive intervention when indirect-only data exist:", "D", o(
      { t: "Optional paperwork.", r: "Operational hypothesis required." },
      { t: "Replace with FAST scores.", r: "Hypothesis integrates modalities." },
      { t: "Skip when caregivers agree.", r: "Assessment standard." },
      { t: "Publish operational hypothesis with evidence-depth limits before locking treatment intensity.", r: "Ch 27 integration." },
    )),
    bx("mod07-q42", "Regional brief: exhaustive FA claimed; attachments questionnaires only—MOST corrective:", "A", o(
      { t: "Relabel modality honestly; document limits; arrange defensible contrasts when safeguards permit.", r: "MTS vignette match." },
      { t: "Ship unchanged.", r: "Modality mislabel." },
      { t: "Destroy descriptive datasets.", r: "Integrate modalities." },
      { t: "Replace stakeholders.", r: "Ethical breach." },
    )),
    bx("mod07-q43", "Indirect rankings plus descriptive convergence on escape; no FA conducted:", "C", o(
      { t: "Claim experimental FA completed.", r: "Label convergence accurately." },
      { t: "Ignore agreement.", r: "Stronger convergent hypothesis." },
      { t: "May proceed with cautious hypothesis—label evidence depth; FA optional when safe.", r: "Convergent modalities note." },
      { t: "Fabricate contrasts.", r: "Honest reporting." },
    )),
    bx("mod07-q44", "Setting events in indirect-derived hypotheses:", "B", o(
      { t: "Irrelevant to indirect intake.", r: "Contextual MO variables." },
      { t: "Include when supported by informant recall and later corroboration.", r: "Hypothesis component." },
      { t: "Replace consequence analysis.", r: "Part of hypothesis." },
      { t: "Punishment triggers only.", r: "Establishing conditions." },
    )),
    bx("mod07-q45", "Domain E when questionnaires substitute for feasible observation:", "D", o(
      { t: "Acceptable when grant deadlines urgent.", r: "Ethical reporting overlap." },
      { t: "Required for FAST only.", r: "All indirect overreach." },
      { t: "IOA issue exclusively.", r: "Reporting integrity." },
      { t: "Ethical breach when findings cherry-picked or overclaimed—label uncertainty.", r: "Domain E + F overlap." },
    )),
    bx("mod07-q46", "Cooper Chapter 27 indirect supplement emphasizes:", "A", o(
      { t: "Hypothesis discipline, triangulation transparency, modality-accurate reporting.", r: "Indirect stream emphasis." },
      { t: "Scatterplot interpretation exclusively.", r: "Descriptive stream." },
      { t: "Escape condition logic exclusively.", r: "Experimental stream." },
      { t: "Token economy implementation.", r: "Ch 28." },
    )),
    bx("mod07-q47", "BCBA stem: IEP omits contradictory ABC so FAST matches vendor pitch:", "B", o(
      { t: "Selective reporting favoring indirect narratives.", r: "Triangulation required." },
      { t: "Explicit triangulation admitting modality conflict alongside provisional hypotheses.", r: "MTS vignette." },
      { t: "Delete caregiver interviews indefinitely.", r: "Integrate streams." },
      { t: "Replace review with advertisements.", r: "Ethical breach." },
    )),
    bx("mod07-q48", "After indirect intake, three-part practice Cooper teaches:", "C", o(
      { t: "Hypothesis only.", r: "Hypothesis + uncertainty + next step." },
      { t: "Treatment plan only.", r: "Assessment discipline." },
      { t: "One sentence hypothesis, one uncertainty, one next verification method.", r: "Teaching-mode drill." },
      { t: "Grant budget only.", r: "Clinical reasoning." },
    )),
    bx("mod07-q49", "Indirect FAB safmed triangulation means:", "D", o(
      { t: "Pick favorite modality silently.", r: "Open reconciliation." },
      { t: "Delete conflicting data.", r: "Document conflict." },
      { t: "Skip descriptive work.", r: "Layer modalities." },
      { t: "Reconcile indirect, descriptive, and experimental streams before certainty claims.", r: "Triangulation definition." },
    )),
    bx("mod07-q50", "Closing Chapter 27 indirect FBA principle:", "B", o(
      { t: "Questionnaires equal completed FA.", r: "Modality accuracy." },
      { t: "Generate hypotheses with structured tools; document limits and disagreement; triangulate with stronger modalities; label methods honestly.", r: "Chapter 27 indirect integration." },
      { t: "Skip descriptive when FAST available.", r: "Multimodal FBA." },
      { t: "Hide modality discord for confidence.", r: "Transparent triangulation." },
    )),
  ],
);

// MOD08 descriptive - abbreviated in script file continuation
writeBank(
  "chapter27DescriptiveFABQuizBank.ts",
  "CHAPTER_27_DESCRIPTIVE_FAB_QUIZ_BANK",
  "Descriptive FBA (mod08)",
  [
    bx("mod08-q1", "Temporal spikes precede transitions without tangible deliveries — MOST cautious stance?", "B", o(
      { t: "Certify tangible reinforcement dominance.", r: "No tangible deliveries observed—premature attribution." },
      { t: "Infer escape from transition demands pending corroboration.", r: "Classic Ch 27 descriptive vignette." },
      { t: "Conclude behavior is respondent-only.", r: "Operant hypotheses remain plausible." },
      { t: "Ignore spikes completely.", r: "Dismisses patterned descriptive evidence." },
    )),
    bx("mod08-q4", "Cooper Chapter 27 descriptive functional behavioral assessment:", "D", o(
      { t: "Interview ratings only.", r: "Naturalistic observation." },
      { t: "Controlled evocative contrasts.", r: "Experimental FA." },
      { t: "Punishment assessment.", r: "Correlational observation." },
      { t: "Naturalistic observation summarizing correlates without programmed contrasts.", r: "Descriptive FBA definition." },
    )),
    bx("mod08-q5", "Scatterplot (time-block) matrices primarily:", "A", o(
      { t: "Plot where occurrences concentrate relative to ecological anchors.", r: "Scatterplot definition." },
      { t: "Prove maintaining contingencies experimentally.", r: "Descriptive tool." },
      { t: "Replace ABC narratives.", r: "Complementary methods." },
      { t: "Eliminate IOA requirements.", r: "IOA still needed." },
    )),
    bx("mod08-q6", "ABC narrative recording:", "C", o(
      { t: "Experimental contrast condition.", r: "Qualitative descriptive log." },
      { t: "Definitive FA proof alone.", r: "Hypothesis support." },
      { t: "Sequential documentation of antecedent–behavior–consequence links for hypothesis building.", r: "ABC narrative definition." },
      { t: "Indirect FAST checklist.", r: "Descriptive method." },
    )),
    bx("mod08-q7", "Temporal covariation in descriptive FBA:", "B", o(
      { t: "Guarantees experimental isolation.", r: "Directional signal only." },
      { t: "Shared timing patterns motivating hypotheses—not functional verdicts alone.", r: "Covariation definition." },
      { t: "Replaces informed consent.", r: "Unrelated." },
      { t: "Identical to token economy.", r: "Assessment method." },
    )),
    bx("mod08-q8", "Ecological validity in descriptive assessment:", "D", o(
      { t: "Observation exclusively in sterile labs.", r: "Natural settings preferred." },
      { t: "Eliminating stakeholder explanations.", r: "Ecological fidelity." },
      { t: "Conducting FA inside unrelated facilities only.", r: "Real routines matter." },
      { t: "Observation mirrors natural instructional and caregiving contingencies where feasible.", r: "Ecological validity definition." },
    )),
    bx("mod08-q9", "IOA on descriptive FBA codes:", "A", o(
      { t: "Documents observer agreement on episode coding before strong descriptive claims.", r: "IOA in descriptive FBA." },
      { t: "Unnecessary for scatterplots.", r: "Coding agreement matters." },
      { t: "Replaces hypothesis statements.", r: "Measurement quality." },
      { t: "Optional after treatment.", r: "During descriptive phase." },
    )),
    bx("mod08-q10", "Exam trap: treating temporal overlap as proof of function:", "C", o(
      { t: "Best descriptive practice.", r: "Correlation ≠ causation." },
      { t: "Required for scatterplots.", r: "Conservative language needed." },
      { t: "High-yield error—overlap motivates hypotheses; manipulated contrasts strengthen claims.", r: "Ch 27 confusion point." },
      { t: "IOA formula error only.", r: "Interpretation issue." },
    )),
    bx("mod08-q11", "Exam trap: mislabeling scatter summaries as completed FA:", "A", o(
      { t: "High-yield error—descriptive summarizes correlates; FA requires programmed contrasts.", r: "Modality discrimination." },
      { t: "Correct interchangeably.", r: "Different evidence depth." },
      { t: "Scatterplots equal FA always.", r: "Descriptive ≠ experimental." },
      { t: "ABC logs are FA always.", r: "Naturalistic vs manipulated." },
    )),
    bx("mod08-q12", "Scatterplots MOST help clinicians by:", "A", o(
      { t: "Pinpointing temporal windows needing denser qualitative observation.", r: "mod08-q2 vignette." },
      { t: "Obviating descriptive ABC summaries.", r: "Complement—not replace." },
      { t: "Proving causal reinforcers without experimentation.", r: "Hypothesis motivation only." },
      { t: "Eliminating interobserver calibration.", r: "IOA still required." },
    )),
    bx("mod08-q13", "ABC narrative recordings primarily support:", "A", o(
      { t: "Sequentially documenting presumed antecedent–behavior–consequence links for hypothesis building.", r: "mod08-q3 vignette." },
      { t: "Guaranteeing experimental control.", r: "Correlational scaffolding." },
      { t: "Replacing informed consent conversations.", r: "Ethics remain." },
      { t: "Removing graphs from reports.", r: "Visuals often accompany descriptive packages." },
    )),
    bx("mod08-q14", "ABC recording in descriptive FBA:", "B", o(
      { t: "Experimental contrast.", r: "Naturalistic log." },
      { t: "Links antecedents, behavior, and consequences in natural settings.", r: "ABC descriptive tool." },
      { t: "Definitive FA proof alone.", r: "Hypothesis support." },
      { t: "Punishment log exclusively.", r: "Correlational data." },
    )),
    bx("mod08-q15", "Episode definitions and timestamp integrity:", "D", o(
      { t: "Optional for grants.", r: "Core descriptive quality." },
      { t: "Replace consent process.", r: "Data integrity." },
      { t: "Identical to FAST rankings.", r: "Operational definitions." },
      { t: "Support defensible descriptive summaries and scatter interpretations.", r: "Domain C measurement." },
    )),
    bx("mod08-q16", "Descriptive convergence workflow—FIRST step:", "C", o(
      { t: "Brief stakeholders before collecting data.", r: "Define windows first." },
      { t: "Publish treatment claims.", r: "Assessment sequencing." },
      { t: "Define observation windows honoring ecological validity.", r: "Chain fragment a." },
      { t: "Fabricate FA graphs.", r: "Ethical breach." },
    )),
    bx("mod08-q17", "Scatterplot spikes before transitions with rare tangible deliveries suggest:", "A", o(
      { t: "Tentative escape hypothesis pending corroboration.", r: "mod08-q1 pattern." },
      { t: "Definitive tangible reinforcement.", r: "Data misalignment." },
      { t: "Completed experimental FA.", r: "Descriptive correlate only." },
      { t: "Treatment mastery.", r: "Assessment phase." },
    )),
    bx("mod08-q18", "Latency overlays in descriptive FBA:", "B", o(
      { t: "Replace scatterplots entirely.", r: "Sharpen temporal hypotheses." },
      { t: "Elapsed interval from evocative onset to response—refines hotspot reads.", r: "Latency codomain." },
      { t: "Prove punishment dominance.", r: "Temporal descriptor." },
      { t: "Eliminate ABC narratives.", r: "Complementary." },
    )),
    bx("mod08-q19", "Two coders disagree until definitions rehearsed—PRIMARY safeguard:", "D", o(
      { t: "Delete divergent rows secretly.", r: "IOA and definitional fidelity." },
      { t: "Certify function from single observer.", r: "Agreement required." },
      { t: "Skip scatterplots.", r: "Unrelated." },
      { t: "IOA guarding definitional fidelity before interpreting descriptive prevalence.", r: "Domain C support." },
    )),
    bx("mod08-q20", "Regional slide captions scatterplots as 'FA proved escape'—MOST accountable correction:", "C", o(
      { t: "Ship captions unchanged.", r: "Modality mislabel." },
      { t: "Delete ABC appendices.", r: "Integrate data." },
      { t: "Relabel honestly as correlational descriptive evidence pending modality-accurate contrasts.", r: "Domain E + F." },
      { t: "Issue punishment from hotspots.", r: "Assessment-led planning." },
    )),
    bx("mod08-q21", "ABC scatter shows attention after 80% of episodes:", "A", o(
      { t: "Descriptive correlate supporting attention hypothesis—not experimental confirmation alone.", r: "Descriptive interpretation." },
      { t: "Definitive experimental FA completed.", r: "Correlational descriptive." },
      { t: "Indirect FAST proof.", r: "Observation summary." },
      { t: "Treatment mastery.", r: "Hypothesis support only." },
    )),
    bx("mod08-q22", "Domain F descriptive FBA items often test:", "B", o(
      { t: "Token schedules only.", r: "Pattern vs cause discrimination." },
      { t: "Correlational interpretation, modality labels, hypothesis-vs-proof language.", r: "Domain F focus." },
      { t: "Chaining grain only.", r: "Assessment logic." },
      { t: "Group t-tests.", r: "Single-subject descriptive." },
    )),
    bx("mod08-q23", "Domain C descriptive items often test:", "D", o(
      { t: "Phylogeny trivia.", r: "IOA and definitions." },
      { t: "Marketing claims only.", r: "Measurement fidelity." },
      { t: "Billing codes.", r: "Episode definitions and IOA." },
      { t: "Episode definitions, IOA on codes, timestamp integrity on descriptive protocols.", r: "Domain C focus." },
    )),
    bx("mod08-q24", "Domain E descriptive breaches include:", "C", o(
      { t: "Plain-language caveats on correlational graphs.", r: "Good practice." },
      { t: "Annotated phase windows.", r: "Transparent reporting." },
      { t: "Selling temporal overlap as airtight proof or labeling descriptive work as completed FA.", r: "Stakeholder honesty breach." },
      { t: "Publishing motivated hypotheses.", r: "Appropriate when labeled." },
    )),
    bx("mod08-q25", "Descriptive FBA versus experimental FA evidence strength:", "A", o(
      { t: "Experimental FA provides stronger functional confirmation when properly conducted; descriptive provides correlational support.", r: "Evidence hierarchy." },
      { t: "Identical always.", r: "Different depth." },
      { t: "Descriptive always stronger.", r: "Experimental isolates variables." },
      { t: "Indirect strongest.", r: "Weakest alone." },
    )),
    bx("mod08-q26", "Collect concurrent ABC narratives tied to coded exemplars—chain step:", "B", o(
      { t: "Brief stakeholders (step d).", r: "After pattern summary." },
      { t: "Chain fragment b after ecological windows defined.", r: "Descriptive workflow order." },
      { t: "Skip operational definitions.", r: "Exemplars require definitions." },
      { t: "Publish treatment intensity.", r: "Assessment sequencing." },
    )),
    bx("mod08-q27", "Summarize recurrent ABC motifs—chain step:", "C", o(
      { t: "First step before observation.", r: "After data collection." },
      { t: "Replace informed consent.", r: "Unrelated." },
      { t: "Chain fragment c after ABC collection.", r: "Workflow order." },
      { t: "Fabricate FA differentiation.", r: "Descriptive summary step." },
    )),
    bx("mod08-q28", "Brief stakeholders with hypothesis-vs-proof caveats—chain step:", "D", o(
      { t: "Chain fragment d—final communication step.", r: "Workflow order." },
      { t: "First step before any observation.", r: "After analysis." },
      { t: "Replaces IOA.", r: "Complementary." },
      { t: "Optional if graphs look polished.", r: "Stakeholder honesty required." },
    )),
    bx("mod08-q29", "High-Yield: overlooking IOA in descriptive work:", "B", o(
      { t: "Best practice for speed.", r: "Definitional fidelity required." },
      { t: "Error—unstable coding collapses descriptive conclusions regardless of graph polish.", r: "Ch 27 confusion point." },
      { t: "Required for FA only.", r: "Descriptive IOA too." },
      { t: "Scatterplot substitute.", r: "Separate safeguard." },
    )),
    bx("mod08-q30", "High-Yield: causal wording from correlational descriptive data:", "A", o(
      { t: "Error—separate pattern statements from causal statements in every report.", r: "Interpretation trap." },
      { t: "Required when scatterplots spike.", r: "Conservative language." },
      { t: "IOA calculation issue.", r: "Reporting discipline." },
      { t: "Domain G only.", r: "Domain F + E." },
    )),
    bx("mod08-q31", "Team uses authentic campus bells as scatterplot anchors:", "C", o(
      { t: "Ignores ecological validity.", r: "Ecological fidelity." },
      { t: "Fabricates hotspots.", r: "Stakeholder-aligned anchors." },
      { t: "Ecological validity—observation faithful to consumer ecology.", r: "MTS vignette." },
      { t: "Replaces ABC logs.", r: "Complementary." },
    )),
    bx("mod08-q32", "Median latency marker on transition scatterplot supports:", "D", o(
      { t: "Completed FA certification.", r: "Descriptive deepening." },
      { t: "Deleting ABC appendices.", r: "Sharper temporal hypotheses." },
      { t: "Indirect FAST replacement.", r: "Layer modalities." },
      { t: "Temporal covariation plus latency-informed descriptive deepening.", r: "Chapter 7/27 extension." },
    )),
    bx("mod08-q33", "Descriptive methods within Chapter 27 FBA:", "B", o(
      { t: "Replace all indirect and experimental streams.", r: "One aggregated modality." },
      { t: "Naturalistic correlational stream informing hypotheses before manipulated tests.", r: "Multimodal FBA." },
      { t: "Stand-alone proof replacing FA always.", r: "Corroboration layer." },
      { t: "Unrelated to triangulation.", r: "Triangulate with indirect/experimental." },
    )),
    bx("mod08-q34", "Responsible follow-up after transition scatterplot escape hypothesis:", "A", o(
      { t: "Layer latency-coded transitions plus ethically phased contrast probes.", r: "Worksheet follow-up." },
      { t: "Dismiss descriptive spikes.", r: "Pattern warrants follow-up." },
      { t: "Issue punitive contingency immediately.", r: "Assessment-led planning." },
      { t: "Delete tangible data.", r: "Integrate patterns." },
    )),
    bx("mod08-q35", "Annotated descriptive graphs with phase windows support:", "C", o(
      { t: "Marketing only.", r: "Procedural fidelity display." },
      { t: "Eliminating IOA.", r: "Complementary." },
      { t: "Domain C display discipline so multidisciplinary audiences interpret correlations responsibly.", r: "Annotated summaries." },
      { t: "Replacing hypothesis statements.", r: "Supports interpretation." },
    )),
    bx("mod08-q36", "BCBA stem: scatter-only data; team skips experimental FA when unsafe:", "D", o(
      { t: "Label scatter as completed FA.", r: "Honest modality label." },
      { t: "Hide safety limits.", r: "Transparent reporting." },
      { t: "Fabricate contrasts.", r: "Ethical breach." },
      { t: "Report descriptive hypothesis with evidence depth; plan FA when safeguards align.", r: "Proportional claims." },
    )),
    bx("mod08-q37", "Permanent product recording in descriptive package:", "B", o(
      { t: "Always replaces ABC narratives.", r: "May complement." },
      { t: "May supplement descriptive work when topography leaves durable traces—not automatic FA.", r: "Measurement option." },
      { t: "Equals experimental FA.", r: "Descriptive/measurement." },
      { t: "Eliminates IOA.", r: "Agreement still needed on definitions." },
    )),
    bx("mod08-q38", "Whole-interval tally vs ABC narrative:", "A", o(
      { t: "ABC preserves sequential qualitative detail; whole-interval is structured frequency measure.", r: "Method discrimination." },
      { t: "Identical methods.", r: "Different data products." },
      { t: "Both prove FA.", r: "Descriptive/measurement." },
      { t: "Neither used in FBA.", r: "Both may appear." },
    )),
    bx("mod08-q39", "Setting events in descriptive hypothesis building:", "C", o(
      { t: "Irrelevant to descriptive FBA.", r: "Contextual MO variables." },
      { t: "Replace scatterplots.", r: "Complementary." },
      { t: "Contextual variables altering MO—include when pattern data support.", r: "Hypothesis component." },
      { t: "Punishment triggers only.", r: "Establishing conditions." },
    )),
    bx("mod08-q40", "Exam trap: scatterplots obviating ABC summaries:", "D", o(
      { t: "Cooper recommendation.", r: "Complementary methods." },
      { t: "Required for IOA.", r: "Both may be needed." },
      { t: "Best efficiency practice always.", r: "ABC adds sequential detail." },
      { t: "High-yield error—scatterplots complement ABC; neither replaces the other automatically.", r: "mod08-q2 distractor trap." },
    )),
    bx("mod08-q41", "Stakeholder briefing after descriptive phase should:", "B", o(
      { t: "Declare functional mastery from hotspots.", r: "Hypothesis-vs-proof caveats." },
      { t: "Separate motivated hypotheses from finished classifications with plain language.", r: "Briefing discipline." },
      { t: "Hide modality limits.", r: "Transparent reporting." },
      { t: "Skip graphs entirely.", r: "Visual summaries useful." },
    )),
    bx("mod08-q42", "Descriptive FBA safmed scatterplot means:", "A", o(
      { t: "Temporal hotspot map guiding observation density.", r: "Safmed back text." },
      { t: "Experimental FA completed.", r: "Descriptive tool." },
      { t: "Indirect FAST substitute.", r: "Descriptive stream." },
      { t: "Treatment discharge criterion.", r: "Assessment tool." },
    )),
    bx("mod08-q43", "Cooper Chapter 27 descriptive supplement emphasizes:", "C", o(
      { t: "FAST rankings exclusively.", r: "Indirect stream." },
      { t: "Escape condition logic exclusively.", r: "Experimental stream." },
      { t: "Ecological observation, IOA discipline, conservative interpretation, honest modality labels.", r: "Descriptive emphasis." },
      { t: "Token economy schedules.", r: "Ch 28." },
    )),
    bx("mod08-q44", "Temporal covariation motivates sharper questions by:", "D", o(
      { t: "Proving reinforcer maintenance definitively.", r: "Hypothesis motivation." },
      { t: "Eliminating experimental FA always.", r: "May motivate FA when safe." },
      { t: "Replacing informed consent.", r: "Unrelated." },
      { t: "Showing aligned timing between behavior and events—directing next assessment probes.", r: "Covariation role." },
    )),
    bx("mod08-q45", "District deck: scatterplots only; captions claim FA—remediation BEFORE funders:", "B", o(
      { t: "Ship unchanged for optics.", r: "Honest relabel." },
      { t: "Rewrite captions to descriptive correlational status; cite planned contrasts separately.", r: "Worksheet Scenario D." },
      { t: "Delete ABC appendices.", r: "Integrate data." },
      { t: "Destroy interview notes.", r: "Layer modalities." },
    )),
    bx("mod08-q46", "Concurrent ABC exemplars tether narratives to:", "A", o(
      { t: "Repeatable operational definitions underpinning IOA checks.", r: "ABC + definitions." },
      { t: "Experimental isolation proof.", r: "Descriptive scaffolding." },
      { t: "Punishment protocols.", r: "Assessment focus." },
      { t: "Grant budgets.", r: "Clinical product." },
    )),
    bx("mod08-q47", "Descriptive workflow drill Cooper teaches:", "C", o(
      { t: "Name method → declare mastery.", r: "Include limits and next step." },
      { t: "Skip caveat language.", r: "Interpretation control." },
      { t: "Identify method → state pattern → state what it does not prove → name next assessment step.", r: "Teaching drill." },
      { t: "Delete IOA when graphs spike.", r: "Measurement integrity." },
    )),
    bx("mod08-q48", "Scatterplot matrix guides funding by:", "D", o(
      { t: "Eliminating observer training.", r: "Focuses scarce coder minutes." },
      { t: "Proving function without FA.", r: "Hypothesis prioritization." },
      { t: "Replacing multidisciplinary review.", r: "Scheduling tool." },
      { t: "Localizing hotspots where denser descriptive density earns analytic clarity.", r: "mod08-q2 rationale." },
    )),
    bx("mod08-q49", "Descriptive FBA chain order BEST sequence:", "A", o(
      { t: "Ecological windows → ABC narratives → summarize motifs → brief with caveats.", r: "Chain a→b→c→d." },
      { t: "Brief first → observe later.", r: "Workflow order." },
      { t: "Publish treatment → collect ABC.", r: "Assessment sequencing." },
      { t: "Skip ecological validity.", r: "Foundation step." },
    )),
    bx("mod08-q50", "Closing Chapter 27 descriptive FBA principle:", "B", o(
      { t: "Temporal overlap equals completed FA.", r: "Modality accuracy." },
      { t: "Observe in context; graph patterns honestly; maintain IOA; separate hypotheses from proof; label methods accurately.", r: "Chapter 27 descriptive integration." },
      { t: "Skip experimental options always.", r: "When safeguards align." },
      { t: "Hide correlational limits from stakeholders.", r: "Transparent briefing." },
    )),
  ],
);

// MOD09 experimental
writeBank(
  "chapter27ExperimentalFAQuizBank.ts",
  "CHAPTER_27_EXPERIMENTAL_FA_QUIZ_BANK",
  "Experimental FA (mod09)",
  [
    bx("mod09-q1", "High-risk topography without staffing — MOST compliant sequencing?", "B", o(
      { t: "Launch FA overnight solo.", r: "Violates supervision safeguards." },
      { t: "Implement descriptive/interrupted probes until staffing safeguards stabilize.", r: "Classic Ch 27 safeguard vignette." },
      { t: "Presume tangible reinforcement sans verification.", r: "Circumvents analytic isolation." },
      { t: "Skip baseline graphs.", r: "Baseline supports differentiation." },
    )),
    bx("mod09-q4", "Cooper Chapter 27 experimental functional analysis:", "C", o(
      { t: "Parent questionnaire only.", r: "Programmed contrasts." },
      { t: "ABC log only.", r: "Controlled conditions." },
      { t: "Evocative contrasts isolating reinforcer classes when safeguards permit manipulation.", r: "Experimental FA definition." },
      { t: "Hypothesis statement only.", r: "Experimental test." },
    )),
    bx("mod09-q5", "Escape FA condition:", "A", o(
      { t: "Demand or task removal contingent on behavior isolating escape hypotheses.", r: "Escape FA definition." },
      { t: "Social praise contingent on behavior.", r: "Attention FA." },
      { t: "Solitude with minimized reinforcement.", r: "Alone condition." },
      { t: "Enriched play without programmed contingencies on target.", r: "Control condition." },
    )),
    bx("mod09-q6", "Attention FA condition:", "D", o(
      { t: "Demand removal contingent on behavior.", r: "Escape FA." },
      { t: "Access to tangibles contingent on behavior.", r: "Tangible FA." },
      { t: "No programmed social reinforcement.", r: "Control/alone logic." },
      { t: "Social acknowledgement delivered contingent on topography.", r: "Attention FA definition." },
    )),
    bx("mod09-q7", "Tangible FA condition:", "B", o(
      { t: "Demand removal.", r: "Escape FA." },
      { t: "Access to leisure or tangibles contingent on occurrences.", r: "Tangible FA definition." },
      { t: "Isolation minus attention.", r: "Alone FA." },
      { t: "Hypothesis statement only.", r: "Condition logic." },
    )),
    bx("mod09-q8", "Alone / no-interaction FA analogue:", "C", o(
      { t: "Lavish praise contingent on behavior.", r: "Attention FA." },
      { t: "Demand removal.", r: "Escape FA." },
      { t: "Solitude with minimized programmed reinforcement compared to evocative tests.", r: "Alone FA definition." },
      { t: "Token economy.", r: "Ch 28." },
    )),
    bx("mod09-q9", "Control / enriched play comparison:", "A", o(
      { t: "Minimized reinforcement baseline juxtaposed against evocative test spikes.", r: "mod09-q3 vignette." },
      { t: "Guaranteed punishment exposure.", r: "Classic controls avoid punishment unless designed." },
      { t: "Automatic FA termination rules.", r: "Protocol-dependent." },
      { t: "Replacement definitions unrelated to referral.", r: "Still tracks referral targets." },
    )),
    bx("mod09-q10", "During multi-element FA, escape test condition MOST directly evaluates whether:", "A", o(
      { t: "Demand removals contingent on targeted behavior elevate future probability.", r: "mod09-q2 vignette." },
      { t: "Automatic reinforcement alone sustains responding.", r: "Alone/isolation variants." },
      { t: "Respondent extinction occurs.", r: "Operant FA logic." },
      { t: "Caregiver IQ predicts reinforcer hierarchies.", r: "Irrelevant construct." },
    )),
    bx("mod09-q11", "Exam trap: misidentifying FA condition contingencies:", "B", o(
      { t: "Minor labeling issue only.", r: "Condition logic is core." },
      { t: "High-yield error—verify arranged contingency before interpreting spikes.", r: "Ch 27 confusion point." },
      { t: "Domain C only.", r: "Domain F focus." },
      { t: "Required for alone condition only.", r: "All conditions." },
    )),
    bx("mod09-q12", "Exam trap: single-session spikes as stable differentiation:", "D", o(
      { t: "Best FA practice always.", r: "Replication strengthens inference." },
      { t: "Required when IOA high.", r: "Differentiation across conditions." },
      { t: "IOA substitute.", r: "Pattern stability issue." },
      { t: "High-yield error—seek replication and check condition fidelity before strong claims.", r: "Interpretation trap." },
    )),
    bx("mod09-q13", "Exam trap: running FA ahead of safeguards:", "C", o(
      { t: "Acceptable when grant urgent.", r: "Safety gate." },
      { t: "Domain C issue only.", r: "Domain E + G." },
      { t: "High-yield error—consent, staffing, risk review precede manipulation.", r: "Safeguard trap." },
      { t: "Required for attention FA only.", r: "All high-risk FA." },
    )),
    bx("mod09-q14", "Planning experimental FA requires:", "A", o(
      { t: "Staffing, consent, safety review, and supervisory ratios when risk elevated.", r: "FA safeguards." },
      { t: "No safeguards when convenient.", r: "Ethical requirement." },
      { t: "Fabricated graphs.", r: "Data integrity." },
      { t: "Deleting indirect data.", r: "Layer modalities." },
    )),
    bx("mod09-q15", "Interview-informed FA (IWFA):", "D", o(
      { t: "Generic rotation ignoring ecology.", r: "Hypothesis tailoring." },
      { t: "Eliminates consent.", r: "Safeguards remain." },
      { t: "Replaces measurement.", r: "Condition selection." },
      { t: "Tailors contrast menus using multimethod hypotheses—not cookie-cutter rotations.", r: "IWFA definition." },
    )),
    bx("mod09-q16", "Replication in FA:", "B", o(
      { t: "Optional decoration.", r: "Strengthens inference." },
      { t: "Strengthens confidence when differentiated patterns reproduce ethically.", r: "Replication role." },
      { t: "Replaces IOA.", r: "Complementary." },
      { t: "Eliminates alone condition.", r: "Design element." },
    )),
    bx("mod09-q17", "Undifferentiated FA data after one session:", "C", o(
      { t: "Announce escape function definitive.", r: "Premature certainty." },
      { t: "Delete sessions silently.", r: "Reassess design." },
      { t: "Reassess definitions, MO, fidelity, sequence—avoid premature certainty.", r: "Undifferentiated data response." },
      { t: "Skip baseline.", r: "Baseline aids interpretation." },
    )),
    bx("mod09-q18", "Abbreviated multi-element FA substitutes:", "A", o(
      { t: "May be used when full FA exceeds resources—but label modality accurately.", r: "Abbreviated FA note." },
      { t: "May be labeled full FA always.", r: "Accurate reporting." },
      { t: "Replace all descriptive work.", r: "Layer modalities." },
      { t: "Eliminate consent.", r: "Safeguards remain." },
    )),
    bx("mod09-q19", "FA readiness chain—FIRST step:", "D", o(
      { t: "Implement alternating conditions immediately.", r: "Risk inventory first." },
      { t: "Graph differentiated patterns.", r: "After implementation." },
      { t: "Publish treatment claims.", r: "Assessment sequencing." },
      { t: "Verify medically cleared topography definitions and risk inventory.", r: "Chain fragment a." },
    )),
    bx("mod09-q20", "FA readiness chain—stakeholders authorize safeguards:", "B", o(
      { t: "Chain fragment b after risk verification.", r: "Consent and safeguards." },
      { t: "Optional after FA completes.", r: "Prerequisite." },
      { t: "Replaces IOA.", r: "Complementary." },
      { t: "First step before definitions.", r: "Order a then b." },
    )),
    bx("mod09-q21", "Therapist removes demands contingent on aggression:", "C", o(
      { t: "Attention FA prototype.", r: "Escape logic." },
      { t: "Control condition prototype.", r: "Minimized reinforcement play." },
      { t: "Escape FA condition prototype.", r: "Worksheet Scenario B." },
      { t: "Alone sensory deprivation exclusively.", r: "Alone differs." },
    )),
    bx("mod09-q22", "Neutral enriched play without programmed reinforcement on target:", "A", o(
      { t: "Control condition baseline analogue.", r: "Worksheet Scenario B." },
      { t: "Attention FA prototype.", r: "Social R+ contingent." },
      { t: "Automatic reinforcement FA.", r: "Alone logic differs." },
      { t: "Escape FA prototype.", r: "Demand removal." },
    )),
    bx("mod09-q23", "Supervisory ratios during aggression FA:", "D", o(
      { t: "Unnecessary.", r: "Safety staffing." },
      { t: "Replace IOA.", r: "Risk management." },
      { t: "Optional for descriptive only.", r: "Experimental risk." },
      { t: "Required safeguard when aggression topography elevates risk during manipulation.", r: "Supervisory ratio guardrail." },
    )),
    bx("mod09-q24", "Medically informed plans before intensive FA manipulation:", "B", o(
      { t: "Never needed.", r: "When medical/safety dimensions present." },
      { t: "Appropriate when behavior has medical or safety dimensions.", r: "Medical guardrail." },
      { t: "Replace consent.", r: "Complementary." },
      { t: "Optional marketing.", r: "Risk management." },
    )),
    bx("mod09-q25", "Assent during FA procedures:", "C", o(
      { t: "Irrelevant for manipulation.", r: "Assent-sensitive practice." },
      { t: "Replace informed consent.", r: "Complementary." },
      { t: "Honor assent/withdrawal especially during intensive or repeated assessment.", r: "Assent guardrail." },
      { t: "Skip when grant funded.", r: "Ethical requirement." },
    )),
    bx("mod09-q26", "Procedural integrity in FA:", "A", o(
      { t: "Conditions implemented as designed so differentiation reflects arranged contingencies.", r: "Fidelity requirement." },
      { t: "Optional after graphs look good.", r: "Core analytic requirement." },
      { t: "Replaces consent.", r: "Complementary." },
      { t: "Identical to indirect FAST.", r: "Experimental implementation." },
    )),
    bx("mod09-q27", "IOA during FA:", "D", o(
      { t: "Unnecessary if supervisor present.", r: "Observer agreement on responses." },
      { t: "Replaces replication.", r: "Complementary." },
      { t: "Optional post hoc only.", r: "During FA sessions." },
      { t: "Documents agreement on response scoring so condition differences are trustworthy.", r: "Domain C in FA." },
    )),
    bx("mod09-q28", "Grant claims differentiated FA; appendix only interviews:", "B", o(
      { t: "Ship unchanged.", r: "Modality mislabel." },
      { t: "Relabel honestly; assemble defensible contrast packet once safeguards authorize.", r: "Worksheet Scenario D." },
      { t: "Fabricate spikes.", r: "Fabrication breach." },
      { t: "Delete interviews.", r: "Label indirect accurately." },
    )),
    bx("mod09-q29", "FAST plus descriptive converge on escape; FA still uses generic praise menus only:", "A", o(
      { t: "Re-sequence contrasts so converging escape hypotheses lead—not mismatched templates.", r: "IWFA MTS vignette." },
      { t: "Maintain cookbook rotations.", r: "Hypothesis tailoring." },
      { t: "Delete consent scaffolding.", r: "Safeguard breach." },
      { t: "Label interviews as FA.", r: "Honest labels." },
    )),
    bx("mod09-q30", "Second clinician reruns abbreviated contrast verifying Week 1 spike:", "C", o(
      { t: "Deleting Week 1 data.", r: "Replication ethics." },
      { t: "Punishment mastery claim.", r: "Replication strengthens inference." },
      { t: "Replication strengthening confidence when patterns reproduce ethically.", r: "MTS vignette." },
      { t: "Skip IOA permanently.", r: "Measurement still required." },
    )),
    bx("mod09-q31", "Domain F experimental FA items often test:", "D", o(
      { t: "Token schedules only.", r: "Condition contingency logic." },
      { t: "Scatterplot axes only.", r: "FA contrasts." },
      { t: "Chaining grain only.", r: "Assessment focus." },
      { t: "Condition logic, differentiation, replication, modality-accurate labels.", r: "Domain F focus." },
    )),
    bx("mod09-q32", "Domain E + G FA items often test:", "B", o(
      { t: "Graph font selection.", r: "Safeguards and supervision." },
      { t: "Consent, staffing, risk review before manipulation-heavy sessions.", r: "Ethics + supervision." },
      { t: "IOA formula trivia only.", r: "Broader safeguards." },
      { t: "Billing codes.", r: "Safety sequencing." },
    )),
    bx("mod09-q33", "Latency FA:", "A", o(
      { t: "Time-based reinforcement withholding embedded in FA menus.", r: "Latency FA definition." },
      { t: "Scatterplot matrix only.", r: "Experimental variant." },
      { t: "Indirect MAS survey.", r: "Descriptive/indirect." },
      { t: "Token thinning.", r: "Ch 28." },
    )),
    bx("mod09-q34", "Isolation withholds attention, tangibles, demands—charting baseline:", "C", o(
      { t: "Escape condition exclusively.", r: "Alone logic." },
      { t: "Attention FA exclusively.", r: "Alone strips programmed R+." },
      { t: "Alone condition inspecting automatic reinforcement minus programmed mediated consequences.", r: "MTS alone vignette." },
      { t: "Control play with rich reinforcement on target.", r: "Opposite of alone." },
    )),
    bx("mod09-q35", "High-Yield: labeling interviews as completed FA:", "D", o(
      { t: "Acceptable when busy.", r: "Modality mislabel." },
      { t: "IOA issue only.", r: "Reporting integrity." },
      { t: "Required for IWFA.", r: "Honest labels always." },
      { t: "Error—Domain E breach; relabel and plan arranged contrasts when conducted.", r: "Confusion point." },
    )),
    bx("mod09-q36", "FA can identify probable maintaining contingencies but treatment still requires:", "B", o(
      { t: "Nothing further.", r: "Social validity, feasibility, monitoring." },
      { t: "Social validity, feasibility analysis, stakeholder collaboration, ongoing monitoring.", r: "FA limits." },
      { t: "Deleting descriptive data.", r: "Integrate modalities." },
      { t: "Skipping hypothesis.", r: "Hypothesis guides intervention." },
    )),
    bx("mod09-q37", "Sequence effects in undifferentiated FA:", "A", o(
      { t: "May require reassessment of condition order, length, or fidelity.", r: "Design troubleshooting." },
      { t: "Prove automatic reinforcement always.", r: "One possible factor." },
      { t: "Eliminate consent requirement.", r: "Unrelated." },
      { t: "Replace IOA with anecdotes.", r: "Measurement integrity." },
    )),
    bx("mod09-q38", "Controlled attention, escape, and play conditions with IOA:", "C", o(
      { t: "Indirect interview.", r: "Programmed contrasts." },
      { t: "Descriptive ABC only.", r: "Experimental FA." },
      { t: "Experimental functional analysis modality.", r: "FA identification." },
      { t: "Hypothesis statement only.", r: "Manipulation phase." },
    )),
    bx("mod09-q39", "Aggression with tissue injury risk; supervisor insists overnight FA:", "D", o(
      { t: "Proceed overnight unsupervised.", r: "Safeguard breach." },
      { t: "Substitute placebo punishers.", r: "Ethical alternative is staged probes." },
      { t: "Skip baseline.", r: "Safety first." },
      { t: "Delay FA pending protective barriers plus informed consent review.", r: "Worksheet Scenario A." },
    )),
    bx("mod09-q40", "Alternate tactic while FA staffing stabilizes:", "A", o(
      { t: "Descriptive or interrupted probes until safeguards align.", r: "Worksheet Scenario A follow-up." },
      { t: "Terminate referral silently.", r: "Continue assessment." },
      { t: "Ignore differentiation mandate.", r: "Analytic obligation." },
      { t: "Fabricate FA graphs.", r: "Ethical breach." },
    )),
    bx("mod09-q41", "FA readiness chain—implement alternating conditions:", "B", o(
      { t: "Chain fragment c after safeguards authorized.", r: "Workflow order." },
      { t: "First step before risk review.", r: "Order a,b then c." },
      { t: "Replaces replication planning.", r: "Followed by graphing step d." },
      { t: "Optional if interviews complete.", r: "Arranged contrasts required." },
    )),
    bx("mod09-q42", "Graph differentiated patterns plus replication—chain step:", "C", o(
      { t: "Chain fragment d—final analytic communication step.", r: "Workflow order." },
      { t: "First step.", r: "After implementation." },
      { t: "Replaces consent.", r: "Complementary." },
      { t: "Skips limits language.", r: "Honest reporting required." },
    )),
    bx("mod09-q43", "Evocative contrasts in Chapter 27 FA:", "D", o(
      { t: "Hallway hunches labeled as data.", r: "Programmed arrangements." },
      { t: "Scatterplot summaries only.", r: "Descriptive stream." },
      { t: "FAST rankings.", r: "Indirect stream." },
      { t: "Test conditions manipulating consequences to isolate reinforcing histories.", r: "Evocative contrast definition." },
    )),
    bx("mod09-q44", "Social praise contingent during attention test:", "A", o(
      { t: "Attention FA condition.", r: "MTS attention vignette." },
      { t: "Escape FA condition.", r: "Demand removal." },
      { t: "Alone condition.", r: "Minimal programming." },
      { t: "Control only if no contingency on target.", r: "Attention delivers contingent SR." },
    )),
    bx("mod09-q45", "Cooper Chapter 27 experimental supplement emphasizes:", "B", o(
      { t: "Scatterplot interpretation exclusively.", r: "Experimental stream." },
      { t: "Condition logic, safeguards, differentiation, replication, honest modality labels.", r: "Experimental emphasis." },
      { t: "FAST recall exclusively.", r: "Indirect stream." },
      { t: "Token economy.", r: "Ch 28." },
    )),
    bx("mod09-q46", "FA safmed control/play means:", "C", o(
      { t: "Demand removal contingent.", r: "Escape FA." },
      { t: "Social R+ contingent.", r: "Attention FA." },
      { t: "Minimized reinforcement baseline for contrast.", r: "Safmed back text." },
      { t: "Treatment discharge.", r: "Assessment condition." },
    )),
    bx("mod09-q47", "Four-question FA exam drill order:", "A", o(
      { t: "Contingency arranged → comparison used → safeguards adequate → data supports confidence level.", r: "Exam-ready rule from blueprint." },
      { t: "Treatment plan → billing → discharge.", r: "Assessment focus." },
      { t: "Skip safeguards if differentiated.", r: "Safety first." },
      { t: "Label FA before any contrasts.", r: "Honest labels." },
    )),
    bx("mod09-q48", "Staffing ceilings gating full FA:", "D", o(
      { t: "Excuse fabricating FA.", r: "Transparent alternatives." },
      { t: "Hide from stakeholders.", r: "Document limits." },
      { t: "Delete indirect data.", r: "Layer modalities." },
      { t: "Use abbreviated substitutes with accurate labels when safeguards permit partial probes.", r: "Resource honesty." },
    )),
    bx("mod09-q49", "Claiming exhaustive FA without arranged contrasts collapses:", "B", o(
      { t: "Domain A trivia only.", r: "Domain E + F." },
      { t: "Domain E honest reporting plus Domain F accurate modality labeling.", r: "Worksheet Scenario D." },
      { t: "IOA type selection only.", r: "Reporting breach." },
      { t: "Graph axis scaling only.", r: "Modality mislabel." },
    )),
    bx("mod09-q50", "Closing Chapter 27 experimental FA principle:", "C", o(
      { t: "Interviews equal completed FA.", r: "Modality accuracy." },
      { t: "Single-session spikes always sufficient.", r: "Replication and differentiation." },
      { t: "Arrange contrasts when safeguards align; measure cleanly; replicate when feasible; report confidence honestly; never mislabel modalities.", r: "Chapter 27 experimental integration." },
      { t: "Skip descriptive and indirect streams.", r: "Multimodal FBA." },
    )),
  ],
);

console.log("Done.");
