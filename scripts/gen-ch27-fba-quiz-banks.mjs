import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const quizDir = path.join(__dirname, "..", "src", "content", "modules", "quiz");

function renderBank(chapterNote, exportName, items) {
  const body = items
    .map((it) => {
      const lines = ["A", "B", "C", "D"]
        .map(
          (k) =>
            `    ${k}: { text: ${JSON.stringify(it.bundle[k].text)}, rationale: ${JSON.stringify(it.bundle[k].rationale)} },`,
        )
        .join("\n");
      return `  bx(${JSON.stringify(it.id)}, ${JSON.stringify(it.stem)}, ${JSON.stringify(it.correct)}, {\n${lines}\n  }),`;
    })
    .join("\n");

  return `import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 27 — ${chapterNote}. */

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
${body}
];
`;
}

const mod07 = [
  {
    id: "mod07-q1",
    stem: "FAST tangible hypothesis contradicts descriptive ABC — MOST defensible response?",
    correct: "B",
    bundle: {
      A: { text: "Announce definitive tangible reinforcement diagnosis.", rationale: "Contradiction prevents declarative certainty absent corroborating streams." },
      B: { text: "Extend descriptive sampling focusing on tangible deliveries.", rationale: "Triangulation mandates extending—not abandoning—sampling keyed to contradictory caregiver recall until streams converge." },
      C: { text: "Delete FAST responses from records.", rationale: "Suppressing indirect data violates transparency — integrate conflict explicitly." },
      D: { text: "Switch hypotheses weekly arbitrarily.", rationale: "Lacks systematic analytic rationale." },
    },
  },
  {
    id: "mod07-q4",
    stem: "Cooper Chapter 27 indirect functional assessment:",
    correct: "A",
    bundle: {
      A: { text: "Recall or rating modalities generating hypotheses needing corroboration—not stand-alone proof.", rationale: "Indirect FBA within Ch 27 FBA overview." },
      B: { text: "Controlled evocative contrasts isolating reinforcer classes.", rationale: "Experimental FA modality." },
      C: { text: "Naturalistic scatterplot summaries only.", rationale: "Descriptive FBA." },
      D: { text: "Treatment implementation phase.", rationale: "Assessment—not treatment—focus." },
    },
  },
  {
    id: "mod07-q5",
    stem: "Structured indirect interviews primarily:",
    correct: "C",
    bundle: {
      A: { text: "Replace all descriptive observation.", rationale: "Complement—not replace—other modalities." },
      B: { text: "Prove experimental FA completion.", rationale: "Hypothesis generation only." },
      C: { text: "Organize comparable caregiver/educator narratives into testable hypotheses.", rationale: "Structured interview role in indirect FBA." },
      D: { text: "Eliminate need for operational definitions.", rationale: "Definitions still required downstream." },
    },
  },
  {
    id: "mod07-q6",
    stem: "FAST-style checklists in Chapter 27:",
    correct: "B",
    bundle: {
      A: { text: "Definitively confirm behavioral function.", rationale: "Indirect ranking tool only." },
      B: { text: "Estimate relative function hypotheses from respondent recall rankings.", rationale: "FAST classification." },
      C: { text: "Measure IOA on descriptive codes.", rationale: "Measurement quality separate tool." },
      D: { text: "Arrange programmed FA contrasts.", rationale: "Experimental modality." },
    },
  },
  {
    id: "mod07-q7",
    stem: "MAS surveys primarily:",
    correct: "D",
    bundle: {
      A: { text: "Document experimental extinction curves.", rationale: "Indirect reinforcer-domain inventory." },
      B: { text: "Replace informed consent.", rationale: "Ethics separate." },
      C: { text: "Prove automatic reinforcement.", rationale: "Hypothesis prioritization only." },
      D: { text: "Rank presumed reinforcer domains guiding subsequent empirical probes.", rationale: "MAS indirect role." },
    },
  },
  {
    id: "mod07-q8",
    stem: "QABF-style questionnaires:",
    correct: "A",
    bundle: {
      A: { text: "Summarize caregiver function estimates awaiting descriptive or experimental corroboration.", rationale: "QABF indirect definition." },
      B: { text: "Guarantee causal functional classification.", rationale: "Hypothesis tool." },
      C: { text: "Replace scatterplot analysis.", rationale: "Complementary modalities." },
      D: { text: "Measure celeration on ratio charts.", rationale: "Graph analysis separate chapter." },
    },
  },
  {
    id: "mod07-q9",
    stem: "Recall limitations of indirect tools include:",
    correct: "C",
    bundle: {
      A: { text: "Perfect accuracy when forms are normed.", rationale: "Memory and wording effects persist." },
      B: { text: "Elimination of cultural interpretation differences.", rationale: "Cultural humility required." },
      C: { text: "Memory error, wording effects, reporter expectations, and interviewer influence.", rationale: "Chapter 27 indirect cautions." },
      D: { text: "Automatic IOA on all items.", rationale: "IOA applies to observation coding." },
    },
  },
  {
    id: "mod07-q10",
    stem: "When indirect informants disagree, Chapter 27 directs teams to:",
    correct: "B",
    bundle: {
      A: { text: "Average rankings silently and proceed.", rationale: "Disagreement is data—document it." },
      B: { text: "Document divergence and shape next assessment steps—not force false certainty.", rationale: "Informant disagreement handling." },
      C: { text: "Delete minority reports.", rationale: "Transparency violation." },
      D: { text: "Skip descriptive follow-up.", rationale: "Disagreement guides denser follow-up." },
    },
  },
  {
    id: "mod07-q11",
    stem: "Exam trap: treating FAST/MAS output as completed FA:",
    correct: "A",
    bundle: {
      A: { text: "High-yield error—indirect generates hypotheses; label modality accurately.", rationale: "Modality mislabel trap." },
      B: { text: "Best practice when staffing is limited.", rationale: "Honest limits required." },
      C: { text: "Required for grant compliance.", rationale: "Ethical reporting forbids overstating." },
      D: { text: "Domain C measurement issue only.", rationale: "Domain F + E issue." },
    },
  },
  {
    id: "mod07-q12",
    stem: "Social validity during indirect intake means:",
    correct: "D",
    bundle: {
      A: { text: "Analyst convenience determines questions.", rationale: "Stakeholder priorities matter." },
      B: { text: "Optional after questionnaires print.", rationale: "Guides meaningful assessment focus." },
      C: { text: "Identical to IOA.", rationale: "Distinct construct." },
      D: { text: "Informants identify clinically meaningful, feasible priorities aligned with daily-life concerns.", rationale: "Social validity in indirect FBA." },
    },
  },
  {
    id: "mod07-q13",
    stem: "Translating indirect findings into testable hypotheses requires:",
    correct: "C",
    bundle: {
      A: { text: "Immediate treatment without corroboration.", rationale: "Hypothesis before intensity." },
      B: { text: "Deleting descriptive plans.", rationale: "Indirect guides descriptive density." },
      C: { text: "Operational statements about when/where to observe and what contrasts may be ethical later.", rationale: "Hypothesis translation." },
      D: { text: "Fabricating FA graphs.", rationale: "Ethical breach." },
    },
  },
  {
    id: "mod07-q14",
    stem: "Teacher FAST ranks escape highest; descriptive data pending—MOST accurate label:",
    correct: "B",
    bundle: {
      A: { text: "Experimentally verified escape function.", rationale: "Provisional indirect ranking." },
      B: { text: "Escape hypothesis pending corroboration.", rationale: "Indirect prioritization vignette." },
      C: { text: "Treatment mastery achieved.", rationale: "Assessment phase." },
      D: { text: "Automatic reinforcement confirmed.", rationale: "No corroboration yet." },
    },
  },
  {
    id: "mod07-q15",
    stem: "IEP facilitator omits contradictory ABC summaries to match vendor pitch—MOST aligned response:",
    correct: "A",
    bundle: {
      A: { text: "Explicit triangulation admitting modality conflict with provisional hypotheses.", rationale: "Domain E + F transparency." },
      B: { text: "Selective reporting favoring indirect narratives only.", rationale: "Honest reporting required." },
      C: { text: "Delete caregiver interviews.", rationale: "Indirect data remains valuable when labeled." },
      D: { text: "Label interviews as completed FA.", rationale: "Modality mislabel." },
    },
  },
  {
    id: "mod07-q16",
    stem: "Indirect FAB chain—FIRST step in teaching workflow:",
    correct: "C",
    bundle: {
      A: { text: "Schedule descriptive sampling before any intake.", rationale: "Structured indirect intake first." },
      B: { text: "Publish treatment claims.", rationale: "Assessment sequencing." },
      C: { text: "Administer structured indirect instruments across caregivers.", rationale: "Chain fragment a." },
      D: { text: "Run unsupervised FA overnight.", rationale: "Safeguards first for FA." },
    },
  },
  {
    id: "mod07-q17",
    stem: "Cultural humility during indirect tools requires:",
    correct: "D",
    bundle: {
      A: { text: "Ignore culture for standardized forms.", rationale: "Interpret within cultural context." },
      B: { text: "English-only reporting regardless of respondent language.", rationale: "Translation and documentation matter." },
      C: { text: "Delete conflicting cultural narratives.", rationale: "Triangulate respectfully." },
      D: { text: "Interpret reports within cultural context; avoid monocausal folklore.", rationale: "Cultural humility guardrail." },
    },
  },
  {
    id: "mod07-q18",
    stem: "Trauma-informed indirect interviews:",
    correct: "B",
    bundle: {
      A: { text: "Optional efficiency concern.", rationale: "Domain E guardrail." },
      B: { text: "Avoid retraumatizing questioning while gathering needed hypotheses.", rationale: "Trauma-informed practice." },
      C: { text: "Replace informed consent.", rationale: "Complementary." },
      D: { text: "Excuse modality mislabeling.", rationale: "Ethics separate from labels." },
    },
  },
  {
    id: "mod07-q19",
    stem: "Incomplete indirect work should NOT:",
    correct: "A",
    bundle: {
      A: { text: "Stand in for corroborating descriptive or experimental evidence.", rationale: "Cooper Ch 27 emphasis." },
      B: { text: "Inform descriptive planning.", rationale: "Appropriate use." },
      C: { text: "Guide hypothesis generation.", rationale: "Primary indirect role." },
      D: { text: "Precede experimental FA when safe.", rationale: "Layering modalities." },
    },
  },
  {
    id: "mod07-q20",
    stem: "Regional brief claims exhaustive FA; attachments only questionnaires—MOST corrective:",
    correct: "C",
    bundle: {
      A: { text: "Ship unchanged because questionnaires faster.", rationale: "Modality-accurate reporting." },
      B: { text: "Fabricate FA spikes.", rationale: "Fabrication breach." },
      C: { text: "Relabel modalities honestly; plan supervised contrasts when safeguards permit.", rationale: "Reporting vignette." },
      D: { text: "Delete descriptive datasets.", rationale: "Layer all available modalities." },
    },
  },
  {
    id: "mod07-q21",
    stem: "Triangulation in indirect FBA means:",
    correct: "B",
    bundle: {
      A: { text: "Pick favorite modality silently.", rationale: "Open reconciliation." },
      B: { text: "Open negotiation among indirect, descriptive, and when feasible experimental streams.", rationale: "Triangulation definition." },
      C: { text: "Delete weaker modality.", rationale: "Document conflict." },
      D: { text: "Skip hypothesis statements.", rationale: "Hypothesis guides next steps." },
    },
  },
  {
    id: "mod07-q22",
    stem: "After each indirect result, teaching-mode practice requires:",
    correct: "D",
    bundle: {
      A: { text: "One treatment plan only.", rationale: "Three-part practice: hypothesis, uncertainty, next step." },
      B: { text: "Grant budget update.", rationale: "Assessment discipline." },
      C: { text: "IOA calculation only.", rationale: "Broader analytic script." },
      D: { text: "One sentence hypothesis, one uncertainty, one next verification method.", rationale: "Chapter 27 learning drill." },
    },
  },
  {
    id: "mod07-q23",
    stem: "Structured interviews reduce:",
    correct: "A",
    bundle: {
      A: { text: "Drift from unstructured storytelling across informants.", rationale: "Comparability benefit." },
      B: { text: "Need for any descriptive work.", rationale: "Corroboration still required." },
      C: { text: "Ethical obligations.", rationale: "Ethics always apply." },
      D: { text: "Operational definitions permanently.", rationale: "Definitions still needed." },
    },
  },
  {
    id: "mod07-q24",
    stem: "Domain F indirect items commonly test:",
    correct: "C",
    bundle: {
      A: { text: "Token economy exchange ratios.", rationale: "FBA indirect logic." },
      B: { text: "Shaping grain size only.", rationale: "Assessment focus." },
      C: { text: "Hypothesis generation, phased corroboration, honest modality limits.", rationale: "Domain F focus." },
      D: { text: "Group design statistics.", rationale: "Single-subject FBA context." },
    },
  },
  {
    id: "mod07-q25",
    stem: "QABF high sensory score vs descriptive escape logs—MOST cautious:",
    correct: "B",
    bundle: {
      A: { text: "Declare sensory function definitive.", rationale: "Maintain competing hypotheses." },
      B: { text: "Keep sensory tentative; escalate descriptive probes around instructional escape pathways.", rationale: "Triangulation vignette." },
      C: { text: "Shred questionnaires.", rationale: "Integrate conflict." },
      D: { text: "Skip observation indefinitely.", rationale: "Descriptive follow-up required." },
    },
  },
  {
    id: "mod07-q26",
    stem: "Indirect questionnaires primarily quantify:",
    correct: "A",
    bundle: {
      A: { text: "Caregiver/stakeholder estimates of reinforcing consequences tied to referrals.", rationale: "Indirect scales capture perceived rankings prior to probes." },
      B: { text: "IRT distributions from continuous recordings.", rationale: "IRT requires timestamped discrete data." },
      C: { text: "Experimental extinction curves.", rationale: "Indirect tools lack contingency isolation." },
      D: { text: "Permanent IQ classification.", rationale: "Unrelated measurement domain." },
    },
  },
  {
    id: "mod07-q27",
    stem: "FAST ranks tangible; ABC never shows tangible deliveries—worksheet stance:",
    correct: "C",
    bundle: {
      A: { text: "Maintain tangible unchanged.", rationale: "Flag discrepancy." },
      B: { text: "Discard descriptive logs.", rationale: "Integrate streams." },
      C: { text: "Flag discrepancy and broaden descriptive sampling.", rationale: "Worksheet scenario A." },
      D: { text: "Terminate referral.", rationale: "Extend assessment." },
    },
  },
  {
    id: "mod07-q28",
    stem: "Bilingual guardians interpret topography differently; structured interviews still gather:",
    correct: "D",
    bundle: {
      A: { text: "Incomparable anecdotes only.", rationale: "Parallel timeline data." },
      B: { text: "Proof of experimental FA.", rationale: "Indirect scaffolding." },
      C: { text: "Reason to skip interpreters permanently.", rationale: "Translation supports validity." },
      D: { text: "Parallel comparable timeline hypotheses despite linguistic variation.", rationale: "Structured interview benefit." },
    },
  },
  {
    id: "mod07-q29",
    stem: "Labeling questionnaires as exhaustive FA violates:",
    correct: "B",
    bundle: {
      A: { text: "Domain A only.", rationale: "Domain E + F." },
      B: { text: "Domain E honest reporting and Domain F modality accuracy.", rationale: "Mislabel breach." },
      C: { text: "IOA formulas.", rationale: "Reporting integrity issue." },
      D: { text: "Shaping procedures.", rationale: "Assessment ethics." },
    },
  },
  {
    id: "mod07-q30",
    stem: "Indirect → descriptive bridge chain orders:",
    correct: "A",
    bundle: {
      A: { text: "Indirect instruments → operationalize codes → summarize convergence/divergence → schedule biased descriptive sampling.", rationale: "Full chain logic." },
      B: { text: "Treatment → FA → interview.", rationale: "Assessment before treatment." },
      C: { text: "Delete indirect → punish → graph.", rationale: "Unethical sequence." },
      D: { text: "Grant → marketing → IOA only.", rationale: "Clinical workflow." },
    },
  },
  {
    id: "mod07-q31",
    stem: "High-Yield: smoothing informant disagreement:",
    correct: "C",
    bundle: {
      A: { text: "Professional standard.", rationale: "Document disagreement." },
      B: { text: "Required for FAST only.", rationale: "All indirect tools." },
      C: { text: "Error—disagreement shapes next assessment design.", rationale: "Confusion point." },
      D: { text: "IOA substitute.", rationale: "Distinct issue." },
    },
  },
  {
    id: "mod07-q32",
    stem: "Staffing constraints and indirect FBA:",
    correct: "D",
    bundle: {
      A: { text: "Excuse fabricating FA.", rationale: "Stage workload with honest labels." },
      B: { text: "Eliminate uncertainty statements.", rationale: "Label limits proportionally." },
      C: { text: "Skip all descriptive work.", rationale: "Layer modalities." },
      D: { text: "Stage workload while labeling conclusions proportionally—avoid presenting hypotheses as confirmed functions.", rationale: "Resource honesty." },
    },
  },
  {
    id: "mod07-q33",
    stem: "MAS before preference assessment on-site classifies as:",
    correct: "B",
    bundle: {
      A: { text: "Experimental FA termination criterion.", rationale: "Indirect ranking prior to probes." },
      B: { text: "Indirect reinforcer-domain ranking prior to empirical probes.", rationale: "Worksheet MAS vignette." },
      C: { text: "Continuous duration sampling exclusively.", rationale: "Descriptive method." },
      D: { text: "Completed functional analysis.", rationale: "Needs corroboration." },
    },
  },
  {
    id: "mod07-q34",
    stem: "Interviewer influence on indirect data:",
    correct: "A",
    bundle: {
      A: { text: "Source limitation requiring explicit uncertainty statements.", rationale: "Recall limitation." },
      B: { text: "Eliminated by normed forms.", rationale: "Influence persists." },
      C: { text: "Proof of experimental control.", rationale: "Indirect limitation." },
      D: { text: "Irrelevant to FBA.", rationale: "Assessment quality issue." },
    },
  },
  {
    id: "mod07-q35",
    stem: "Before prioritizing FAST-ranked hypotheses, social validity checkpoint:",
    correct: "C",
    bundle: {
      A: { text: "Ignore stakeholder priorities when graphs look tidy.", rationale: "Caregiver-valued routines focal." },
      B: { text: "Declare FA complete.", rationale: "Premature." },
      C: { text: "Ensure caregiver-valued routines remain focal—not clinician convenience alone.", rationale: "Social validity checkpoint." },
      D: { text: "Exclude IOA permanently.", rationale: "IOA still matters downstream." },
    },
  },
  {
    id: "mod07-q36",
    stem: "Domain E when questionnaires substitute for feasible observation:",
    correct: "D",
    bundle: {
      A: { text: "Acceptable if faster.", rationale: "Ethical reporting overlap." },
      B: { text: "Required for grants.", rationale: "Feasible observation still owed when possible." },
      C: { text: "Domain C only.", rationale: "Domain E + F." },
      D: { text: "Ethical failure—cherry-picking indirect highlights while hiding limits.", rationale: "Ethics recall footnote theme." },
    },
  },
  {
    id: "mod07-q37",
    stem: "Indirect FAB buys:",
    correct: "B",
    bundle: {
      A: { text: "Definitive functional certificates cheaply.", rationale: "Hypotheses only." },
      B: { text: "Efficient hypotheses ahead of dense descriptive or experimental corroboration.", rationale: "KC1 theme." },
      C: { text: "Treatment completion.", rationale: "Assessment phase." },
      D: { text: "Elimination of experimental options.", rationale: "Layer when safe." },
    },
  },
  {
    id: "mod07-q38",
    stem: "Multilingual indirect documentation for teams requires:",
    correct: "A",
    bundle: {
      A: { text: "Note linguistic descriptors, interviewer supports, provisional hypotheses—not laundering recall as mastery.", rationale: "Worksheet scenario D." },
      B: { text: "English-only brochures regardless of language.", rationale: "Translation matters." },
      C: { text: "Suppress divergence between translated forms.", rationale: "Transparent triangulation." },
      D: { text: "Delete non-English responses.", rationale: "Integrate all informants." },
    },
  },
  {
    id: "mod07-q39",
    stem: "Indirect ranking vs descriptive observation conflict—teacher tangible vs demand aggression:",
    correct: "C",
    bundle: {
      A: { text: "Disregard FAST entirely.", rationale: "Integrate—not discard." },
      B: { text: "Announce tangible definitive.", rationale: "Premature." },
      C: { text: "Frame tangible as tentative; intensify descriptive codes around demands and tangible deliveries alike.", rationale: "Triangulation vignette." },
      D: { text: "Stop all caregiver interviews.", rationale: "Stakeholder input remains informative." },
    },
  },
  {
    id: "mod07-q40",
    stem: "Hypothesis statement after indirect work should:",
    correct: "D",
    bundle: {
      A: { text: "Wait until treatment completes.", rationale: "Pre-intervention product." },
      B: { text: "Replace IOA.", rationale: "Complementary." },
      C: { text: "Be optional for indirect-only cases.", rationale: "Guides intervention selection." },
      D: { text: "Operationalize suspected antecedents, consequences, and setting events before intensive programming.", rationale: "Hypothesis statement role." },
    },
  },
  {
    id: "mod07-q41",
    stem: "IOA in indirect context most applies when:",
    correct: "B",
    bundle: {
      A: { text: "Scoring questionnaire Likert items only.", rationale: "IOA on observation codes." },
      B: { text: "Indirect findings inform descriptive coding schemes requiring observer agreement.", rationale: "Bridge to descriptive." },
      C: { text: "Replacing triangulation.", rationale: "Multimodal integration." },
      D: { text: "Proving FA differentiation.", rationale: "Experimental phase." },
    },
  },
  {
    id: "mod07-q42",
    stem: "Exam stem: only unstructured hallway anecdotes collected—weakest point:",
    correct: "A",
    bundle: {
      A: { text: "Lacks structured comparability across informants.", rationale: "Structured interview value." },
      B: { text: "Too much experimental control.", rationale: "No manipulation occurred." },
      C: { text: "Excessive IOA.", rationale: "Unstructured anecdotes lack structure." },
      D: { text: "Over-reliance on scatterplots.", rationale: "No scatterplots mentioned." },
    },
  },
  {
    id: "mod07-q43",
    stem: "Indirect modality-accurate report should state:",
    correct: "C",
    bundle: {
      A: { text: "FA completed when only interviews conducted.", rationale: "Honest labels." },
      B: { text: "Nothing about limits.", rationale: "Uncertainty language required." },
      C: { text: "What indirect tools suggested, what remains unverified, and planned corroboration.", rationale: "Transparent reporting." },
      D: { text: "Treatment mastery.", rationale: "Assessment phase." },
    },
  },
  {
    id: "mod07-q44",
    stem: "Chapter 27 indirect stream within multimodal FBA:",
    correct: "B",
    bundle: {
      A: { text: "Strongest evidence alone.", rationale: "Weakest alone; layers with others." },
      B: { text: "First-layer hypothesis generation in multimodal aggregation.", rationale: "FBA overview." },
      C: { text: "Identical to token economy.", rationale: "Assessment chapter." },
      D: { text: "Replaces descriptive when busy.", rationale: "Never replace—supplement." },
    },
  },
  {
    id: "mod07-q45",
    stem: "Preference assessment after MAS ranking is:",
    correct: "D",
    bundle: {
      A: { text: "Unrelated to indirect workflow.", rationale: "Empirical probe following indirect ranking." },
      B: { text: "Punishment assessment.", rationale: "Reinforcer identification." },
      C: { text: "Completed FA.", rationale: "May inform but not FA." },
      D: { text: "Permissible next analytic step pairing tangible stimuli with indirect prioritization.", rationale: "Worksheet follow-up." },
    },
  },
  {
    id: "mod07-q46",
    stem: "Triangulation MOST centrally means converging:",
    correct: "A",
    bundle: {
      A: { text: "Indirect, descriptive, and when feasible experimental streams before declaring certainty.", rationale: "Worksheet triangulation definition." },
      B: { text: "Accepting whichever modality arrives first.", rationale: "Reconcile conflicts." },
      C: { text: "Replacing graphs with anecdotes permanently.", rationale: "Multimodal integration." },
      D: { text: "Banning caregiver interviews.", rationale: "Indirect remains valuable." },
    },
  },
  {
    id: "mod07-q47",
    stem: "High-Yield: skipping explicit uncertainty language in indirect reports:",
    correct: "C",
    bundle: {
      A: { text: "Cooper recommendation.", rationale: "Explicit limits required." },
      B: { text: "Domain C only.", rationale: "Domain F + E." },
      C: { text: "Error—recall-based data needs skeptic language in notes and briefings.", rationale: "Confusion point." },
      D: { text: "Required for FAST only.", rationale: "All indirect tools." },
    },
  },
  {
    id: "mod07-q48",
    stem: "Operationalize suspected consequences into descriptive coding occurs:",
    correct: "B",
    bundle: {
      A: { text: "After treatment mastery.", rationale: "Before dense descriptive sampling." },
      B: { text: "After indirect intake, before scheduling biased descriptive sampling.", rationale: "Chain fragment b." },
      C: { text: "Instead of any interviews.", rationale: "Follows indirect instruments." },
      D: { text: "Only during FA manipulation.", rationale: "Descriptive bridge step." },
    },
  },
  {
    id: "mod07-q49",
    stem: "Indirect FAB worksheet remediation loop emphasizes:",
    correct: "D",
    bundle: {
      A: { text: "Punishment until function clear.", rationale: "Assessment-led process." },
      B: { text: "Hide modality discord.", rationale: "Transparent triangulation." },
      C: { text: "Skip hypothesis statements.", rationale: "Hypothesis explicit." },
      D: { text: "Interview findings → discrepancy mapping → targeted descriptive checks → transparent triangulation narrative.", rationale: "Remediation log." },
    },
  },
  {
    id: "mod07-q50",
    stem: "Closing Chapter 27 indirect principle:",
    correct: "B",
    bundle: {
      A: { text: "Questionnaires equal completed FA.", rationale: "Modality accuracy." },
      B: { text: "Structure interviews; document limits; prioritize—not certify—with questionnaires; integrate transparently before intervention escalates.", rationale: "Chapter 27 indirect integration." },
      C: { text: "Skip descriptive when indirect available.", rationale: "Layer modalities." },
      D: { text: "Delete conflicting informants.", rationale: "Document disagreement." },
    },
  },
];

// mod08 descriptive - abbreviated generation via helper for remaining items
const mod08Core = [
  {
    id: "mod08-q1",
    stem: "Temporal spikes precede transitions without tangible deliveries — MOST cautious stance?",
    correct: "B",
    bundle: {
      A: { text: "Certify tangible reinforcement dominance.", rationale: "No tangible deliveries observed — premature tangible attribution violates data alignment." },
      B: { text: "Infer escape from transition demands pending corroboration.", rationale: "Correlational topography plus absence of tangible deliveries supports tentative escape hypotheses until converging modalities ethically adjudicate contenders." },
      C: { text: "Conclude behavior is respondent-only.", rationale: "Operant hypotheses remain plausible absent respondent elicitation logic." },
      D: { text: "Ignore spikes completely.", rationale: "Dismisses patterned descriptive evidence inconsistent with analytic discipline." },
    },
  },
  {
    id: "mod08-q4",
    stem: "Cooper Chapter 27 descriptive FBA:",
    correct: "D",
    bundle: {
      A: { text: "Fabricated FA graphs.", rationale: "Naturalistic observation." },
      B: { text: "Interview ratings only.", rationale: "ABC/scatter summaries." },
      C: { text: "Punishment assessment.", rationale: "Correlational observation." },
      D: { text: "Naturalistic observation summarizing correlates without programmed contrasts.", rationale: "Descriptive FBA definition." },
    },
  },
  {
    id: "mod08-q5",
    stem: "Scatterplot matrices MOST help clinicians by:",
    correct: "A",
    bundle: {
      A: { text: "Pinpoint temporal windows needing denser qualitative observation.", rationale: "Scatterplots localize hotspots while guiding descriptive density." },
      B: { text: "Obviating descriptive ABC summaries.", rationale: "Scatterplots complement—not replace—narratives." },
      C: { text: "Proving causal reinforcers without experimentation.", rationale: "Correlation motivates hypotheses—not definitive classification." },
      D: { text: "Eliminating interobserver calibration.", rationale: "Agreement checks keep summaries auditable." },
    },
  },
  {
    id: "mod08-q6",
    stem: "ABC narrative recordings primarily support:",
    correct: "A",
    bundle: {
      A: { text: "Sequentially documenting presumed antecedent–behavior–consequence links for hypothesis building.", rationale: "Sequential ABC narration stays correlational scaffolding—not experimental proof." },
      B: { text: "Guaranteeing experimental control.", rationale: "Narratives lack contingency isolation intrinsic to manipulated analyses." },
      C: { text: "Replacing informed consent conversations.", rationale: "Ethical collaboration remains obligatory." },
      D: { text: "Removing graphs from reports.", rationale: "Visual summaries often accompany descriptive packages." },
    },
  },
];

const mod08Stems = [
  ["mod08-q7", "Ecological validity in descriptive FBA emphasizes:", "C", { A: ["Laboratory-only observation.", "Irrelevant to FBA."], B: ["Deleting stakeholder explanations.", "Ecological validity requires context."], C: ["Observation windows mirroring naturally occurring contingencies where feasible.", "Descriptive strength from real settings."], D: ["Ignoring transitions permanently.", "Transitions often anchor scatterplots."] }],
  ["mod08-q8", "Temporal covariation in descriptive assessment:", "B", { A: ["Guarantees experimental isolation.", "Covariation is correlational."], B: ["Links overlapping timing signatures motivating hypotheses—not guaranteeing function.", "Chapter 27 descriptive caution."], C: ["Replaces IOA.", "Complementary."], D: ["Proves punishment function.", "Unrelated."] }],
  ["mod08-q9", "IOA on descriptive FBA codes:", "C", { A: ["Unnecessary for narratives.", "Observer agreement matters."], B: ["Replaces hypothesis statements.", "Measurement quality."], C: ["Documents observer agreement on episode coding before strong claims.", "IOA in descriptive FBA."], D: ["Optional after treatment.", "During descriptive phase."] }],
  ["mod08-q10", "Exam trap: treating temporal overlap as proof of function:", "A", { A: ["High-yield error—overlap motivates hypotheses; FA or convergent modalities adjudicate.", "Confusion point."], B: ["Cooper standard.", "Conservative language required."], C: ["Required for scatterplots only.", "All descriptive methods."], D: ["Domain G only.", "Domain F + E."] }],
  ["mod08-q11", "Latency overlays in descriptive work:", "D", { A: ["Replace ABC narratives.", "Complementary."], B: ["Prove completed FA.", "Descriptive refinement."], C: ["Eliminate ecological validity.", "Sharpen temporal hypotheses."], D: ["Sharpen temporal hypotheses alongside scatter summaries.", "Latency codomain role."] }],
  ["mod08-q12", "Descriptive methods are correlational—therefore teams should:", "B", { A: ["Skip operational definitions.", "Definitions still required."], B: ["Defer causal conclusions until stronger corroboration.", "Conservative interpretation."], C: ["Label scatterplots as multi-element FA.", "Modality mislabel."], D: ["Begin punishment immediately.", "Assessment-led programming."] }],
  ["mod08-q13", "Clinician plots spikes before transitions—tool classification:", "A", { A: ["Scatterplot analysis.", "Temporal covariation visualization."], B: ["Experimental FA.", "No programmed contrasts."], C: ["Standardized IQ assessment.", "Unrelated."], D: ["Indirect FAST only.", "Descriptive graph tool."] }],
  ["mod08-q14", "Observers narrate A-B-C chains verbatim—classification:", "A", { A: ["ABC narrative recording.", "Sequential qualitative detailing."], B: ["Whole-interval tally only.", "Narrative focus."], C: ["Permanent product only.", "Sequential episode focus."], D: ["Group t-test.", "Single-subject descriptive."] }],
  ["mod08-q15", "Director captions scatter slide as completed FA—MOST accountable correction:", "A", { A: ["Relabel honestly as correlational descriptive evidence pending contrasts.", "Domain E + F."], B: ["Ship captions unchanged.", "Mislabel breach."], C: ["Delete ABC appendices.", "Integrate modalities."], D: ["Issue punishment from hotspots.", "Assessment before treatment."] }],
  ["mod08-q16", "Two coders tally transition-linked bursts after definition rehearsal—safeguard:", "A", { A: ["IOA guarding definitional fidelity before interpreting prevalence.", "Domain C support."], B: ["Deleting divergent rows secretly.", "Ethical breach."], C: ["Replacing data with marketing snapshots.", "Integrity violation."], D: ["Certifying respondent extinction.", "Operant descriptive context."] }],
  ["mod08-q17", "Scatterplot anchors use authentic bell/transitions—concept:", "C", { C: ["Ecological validity prioritizing dignified ecological windows.", "Real-setting anchors."], A: ["Ignoring classroom transitions.", "Opposite."], B: ["Fabricating hotspots.", "Data integrity."], D: ["Billboard schedules unrelated to site.", "Ecological mismatch."] }],
  ["mod08-q18", "Descriptive chain—FIRST step:", "B", { B: ["Define observation windows honoring ecological validity.", "Chain fragment a."], A: ["Brief stakeholders before any observation.", "Observe first."], C: ["Publish treatment claims.", "Assessment sequencing."], D: ["Run FA overnight.", "Safeguards first."] }],
  ["mod08-q19", "Episode definitions and timestamp integrity:", "A", { A: ["Support defensible descriptive summaries and scatter interpretations.", "Domain C measurement."], B: ["Optional for grants.", "Core descriptive quality."], C: ["Replace consent.", "Complementary."], D: ["Identical to FAST rankings.", "Operational definitions."] }],
  ["mod08-q20", "Domain F descriptive items emphasize:", "C", { C: ["Correlations narrate—they do not license causal jumps without later convergence.", "Domain F choreography."], A: ["Token schedules only.", "FBA descriptive logic."], B: ["Group statistics.", "Single-subject."], D: ["Punishment protocols.", "Assessment focus."] }],
  ["mod08-q21", "Scatter spikes before transitions; tangible rarely follows—hypothesis:", "A", { A: ["Escape from transitions emerges as plausible hypothesis.", "Worksheet scenario."], B: ["Tangible reinforcement confirmed definitively.", "No tangible deliveries."], C: ["Automatic reinforcement ruled out categorically.", "Premature."], D: ["Treatment mastery.", "Assessment phase."] }],
  ["mod08-q22", "Responsible follow-up after scatter hotspot:", "B", { B: ["Layer latency-coded transitions plus ethically staged probes.", "Worksheet follow-up."], A: ["Dismiss descriptive spikes.", "Pattern is data."], C: ["Issue punitive contingency immediately.", "Assessment-led."], D: ["Skip ABC narratives.", "Layer methods."] }],
  ["mod08-q23", "Labeling correlational slides as exhaustive FA merges:", "A", { A: ["Domain E honest modality reporting plus Domain F accurate assessment labeling.", "Scenario D."], B: ["Domain A phylogeny trivia.", "Unrelated."], C: ["Domain G hiring charts.", "Unrelated."], D: ["IOA formulas only.", "Broader breach."] }],
  ["mod08-q24", "BEST corrective move before stakeholder vote on mislabeled slides:", "C", { C: ["Rewrite captions to descriptive correlational status; cite planned contrasts separately.", "Worksheet remediation."], A: ["Keep slides to appease leadership.", "Honesty required."], B: ["Delete ABC appendices.", "Integrate data."], D: ["Fabricate FA graphs.", "Ethical breach."] }],
  ["mod08-q25", "High-Yield: forgetting IOA in descriptive work:", "B", { B: ["Error—definitional drift undermines prevalence and hotspot claims.", "Confusion point."], A: ["Best practice.", "IOA required."], C: ["Domain E only.", "Domain C + F."], D: ["Required for FA only.", "Descriptive too."] }],
  ["mod08-q26", "Temporal covariation MOST closely refers to:", "A", { A: ["Aligned timing patterns motivating hypotheses across environmental events.", "Worksheet definition."], B: ["Guaranteed experimental isolation absent manipulation.", "Correlational limit."], C: ["Respondent extinction criteria.", "Operant context."], D: ["Latency shaping mastery only.", "Broader construct."] }],
  ["mod08-q27", "Descriptive FBA versus experimental FA:", "D", { D: ["Descriptive provides correlational support; experimental FA provides stronger confirmation when properly conducted.", "Evidence hierarchy."], A: ["Identical strength.", "FA stronger when conducted."], B: ["Descriptive always stronger.", "Experimental isolates variables."], C: ["Indirect strongest.", "Weakest alone."] }],
  ["mod08-q28", "Annotated descriptive graphs should cite:", "C", { C: ["Phase windows and procedural fidelity for responsible interpretation.", "Domain C display discipline."], A: ["Marketing slogans only.", "Clinical documentation."], B: ["Caregiver IQ.", "Irrelevant."], D: ["Punishment intensity.", "Unrelated."] }],
  ["mod08-q29", "Stakeholder briefings must differentiate:", "B", { B: ["Motivated hypotheses from finished classifications.", "Domain E briefing discipline."], A: ["Graph colors from fonts.", "Substantive distinction."], C: ["IOA from fidelity.", "Related but different point."], D: ["Shaping from chaining.", "Unrelated."] }],
  ["mod08-q30", "Descriptive workflow chain order:", "A", { A: ["Ecological windows → ABC collection → summarize motifs → brief with caveats.", "Full chain."], B: ["Treatment → FA → scatter.", "Assessment order."], C: ["Delete baseline → punish.", "Unethical."], D: ["Grant → mislabel.", "Reporting failure."] }],
  ["mod08-q31", "Exam trap: writing causal conclusions from correlational data:", "C", { C: ["High-yield error—separate pattern statements from causal statements.", "Confusion point."], A: ["Cooper recommendation.", "Conservative language."], B: ["Required for scatterplots.", "All descriptive."], D: ["IOA substitute.", "Distinct."] }],
  ["mod08-q32", "Median latency marker on transition scatterplot:", "B", { B: ["Refines correlational hotspots—not FA certification alone.", "Latency-informed deepening."], A: ["Completes multi-element FA.", "Descriptive extension."], C: ["Replaces FAST permanently.", "Complementary."], D: ["Eliminates ABC narratives.", "Layer methods."] }],
  ["mod08-q33", "Operationally clear definitions in descriptive FBA:", "D", { D: ["Necessary so findings are interpretable and reproducible across staff.", "Measurement discipline."], A: ["Optional decoration.", "Core requirement."], B: ["Replace hypothesis statements.", "Complementary."], C: ["Identical to informed consent.", "Distinct."] }],
  ["mod08-q34", "Descriptive assessment asks practical questions first about:", "A", { A: ["When behavior clusters, in which routines, and what events follow.", "Practical descriptive focus."], B: ["Token exchange rates only.", "Unrelated."], C: ["Group mean differences.", "Single-subject."], D: ["Punishment intensity schedules.", "Assessment not punishment focus."] }],
  ["mod08-q35", "Integrating descriptive with multimethod planning means:", "C", { C: ["Using descriptive findings to decide which hypotheses deserve targeted probes.", "Multimodal integration."], A: ["Skipping experimental options always.", "When safe, layer FA."], B: ["Replacing all indirect work.", "Layer all modalities."], D: ["Deleting scatterplots.", "Keep visual summaries."] }],
  ["mod08-q36", "Domain C graph discipline for descriptive FBA:", "B", { B: ["Scatter fidelity, ecological anchors, and coder agreement keep overlays trustworthy.", "Measurement spine."], A: ["Optional after treatment.", "During descriptive phase."], C: ["Replaces consent.", "Complementary."], D: ["Proves automatic reinforcement.", "Unrelated."] }],
  ["mod08-q37", "High-Yield: scatterplots as scheduling tools:", "D", { D: ["Place highest-quality descriptive sampling in high-density windows first.", "Practical chapter rule."], A: ["Replace all ABC work.", "Complement narratives."], B: ["Prove FA completion.", "Hypothesis support only."], C: ["Eliminate IOA.", "Agreement still required."] }],
  ["mod08-q38", "Concurrent ABC exemplars tether:", "A", { A: ["Qualitative storytelling to repeatable operational definitions underpinning IOA.", "ABC + measurement bridge."], B: ["Punishment plans.", "Assessment focus."], C: ["Group statistics.", "Single-subject."], D: ["Token economies.", "Separate chapter."] }],
  ["mod08-q39", "Brief stakeholders with graphical summaries requires:", "C", { C: ["Clear caveats separating hypotheses from proof.", "Chain fragment d."], A: ["Causal certainty language always.", "Conservative captions."], B: ["Deleting conflicting data.", "Transparent reporting."], D: ["Skipping operational definitions.", "Definitions required."] }],
  ["mod08-q40", "Chapter 27 descriptive stream within FBA:", "B", { B: ["Maps naturalistic correlates without programmed evocative contrasts.", "Modality definition."], A: ["Strongest evidence alone.", "Layers with others."], C: ["Identical to indirect interviews.", "Distinct modality."], D: ["Treatment implementation.", "Assessment phase."] }],
  ["mod08-q41", "Plot-honesty guardrails prevent:", "A", { A: ["Graphs outrunning measurement integrity in stakeholder briefings.", "Ethics plot theme."], B: ["Any graph use.", "Graphs are tools."], C: ["IOA calculation.", "IOA supports integrity."], D: ["Ecological observation.", "Encouraged."] }],
  ["mod08-q42", "Summarize recurrent ABC motifs linking MO variables occurs:", "C", { C: ["After ABC collection, before stakeholder briefing.", "Chain fragment c."], A: ["Before any observation.", "Collect data first."], B: ["After treatment mastery.", "Assessment phase."], D: ["Instead of scatterplots.", "Complementary."] }],
  ["mod08-q43", "Descriptive remediation loop emphasizes:", "D", { D: ["Ecologically valid observations → ABC/IOA quality → pattern summary → hypothesis vs proof boundaries.", "Remediation log."], A: ["Hide modality limits.", "Transparency."], B: ["Punish from hotspots.", "Assessment-led."], C: ["Label scatter as FA.", "Honest labels."] }],
  ["mod08-q44", "Exam stem: heavy overlap in descriptive covariation only—language:", "B", { B: ["Tentative hypothesis language pending stronger differentiation.", "Conservative interpretation."], A: ["Definitive FA proof.", "Correlational only."], B2: ["skip", "skip"] },],
];

// fix mod08-q44 - had error with B2
mod08Stems[mod08Stems.length - 1] = ["mod08-q44", "Exam stem: heavy overlap in descriptive covariation only—language:", "B", { A: ["Definitive FA proof.", "Correlational only."], B: ["Tentative hypothesis language pending stronger differentiation.", "Conservative interpretation."], C: ["Skip all measurement.", "Continue observing."], D: ["Automatic punishment proof.", "Unrelated."] }];

const mod08ExtraStems = [
  ["mod08-q45", "Collect concurrent ABC narratives tied to coded exemplars:", "B", { B: ["Descriptive chain step after ecological window definition.", "Chain fragment b."], A: ["After stakeholder briefing only.", "Collect before summarize."], C: ["Instead of scatterplots.", "Complementary."], D: ["During FA manipulation only.", "Descriptive phase."] }],
  ["mod08-q46", "Domain E when selling temporal overlap as airtight proof:", "A", { A: ["Violates stakeholder honesty simultaneous with sloppy assessment narration.", "Ethics plot footnote."], B: ["Standard grant practice.", "Mislabel breach."], C: ["Domain C only.", "Domain E + F."], D: ["Required for IOA.", "Unrelated."] }],
  ["mod08-q47", "High-Yield: mislabeling descriptive data as experimental FA:", "C", { C: ["Error—descriptive summarizes correlates; FA requires programmed contrasts.", "Modality discrimination."], A: ["Correct interchangeably.", "Different evidence depth."], B: ["Scatterplots equal FA.", "Descriptive ≠ experimental."], D: ["ABC logs are FA always.", "Naturalistic vs manipulated."] }],
  ["mod08-q48", "Closing descriptive study drill asks:", "D", { D: ["Identify method used, pattern shown, what it does not prove, and next assessment step.", "Chapter 27 learning drill."], A: ["Treatment mastery only.", "Assessment focus."], B: ["Grant budget.", "Clinical reasoning."], C: ["Punishment type.", "Unrelated."] }],
  ["mod08-q49", "Descriptive FBA worksheet Scenario D remediation:", "A", { A: ["Rewrite captions to descriptive status; cite planned contrasts separately.", "Scenario D fix."], B: ["Keep mislabeled slides.", "Honesty required."], C: ["Delete all graphs.", "Relabel instead."], D: ["Begin intensive treatment without hypothesis.", "Hypothesis first."] }],
  ["mod08-q50", "Closing Chapter 27 descriptive principle:", "B", { B: ["Observe in context, document sequence clearly, graph concentrations honestly, report uncertainty precisely.", "Chapter 27 descriptive integration."], A: ["Scatterplots equal completed FA.", "Modality accuracy."], C: ["Skip IOA when busy.", "Measurement discipline."], D: ["Hide correlational limits.", "Transparent reporting."] }],
];

function stemsToItems(stems) {
  return stems.map(([id, stem, correct, opts]) => ({
    id,
    stem,
    correct,
    bundle: {
      A: { text: opts.A[0], rationale: opts.A[1] },
      B: { text: opts.B[0], rationale: opts.B[1] },
      C: { text: opts.C[0], rationale: opts.C[1] },
      D: { text: opts.D[0], rationale: opts.D[1] },
    },
  }));
}

const mod08 = [...mod08Core, ...stemsToItems(mod08Stems), ...stemsToItems(mod08ExtraStems)];

const mod09Core = [
  {
    id: "mod09-q1",
    stem: "High-risk topography without staffing — MOST compliant sequencing?",
    correct: "B",
    bundle: {
      A: { text: "Launch FA overnight solo.", rationale: "Violates supervision safeguards on intensive FA schedules." },
      B: { text: "Implement descriptive/interrupted probes until staffing safeguards stabilize.", rationale: "Balances Domain F analytic obligations with Domain E duty to stabilize safeguards before evocative manipulation-heavy sessions." },
      C: { text: "Presume tangible reinforcement sans verification.", rationale: "Circumvents analytic isolation obligations." },
      D: { text: "Skip baseline graphs.", rationale: "Baseline omission obscures differentiation interpretation." },
    },
  },
  {
    id: "mod09-q4",
    stem: "Cooper Chapter 27 experimental functional analysis (FA):",
    correct: "B",
    bundle: {
      A: { text: "Parent questionnaire.", rationale: "Programmed contrasts." },
      B: { text: "Evocative contrasts isolating reinforcer classes when safeguards permit manipulation.", rationale: "Experimental FA definition." },
      C: { text: "ABC log only.", rationale: "Controlled conditions." },
      D: { text: "Hypothesis statement only.", rationale: "Experimental test." },
    },
  },
  {
    id: "mod09-q5",
    stem: "During a multi-element FA, an escape/test condition MOST directly evaluates whether:",
    correct: "A",
    bundle: {
      A: { text: "Demand removals contingent on targeted behavior elevate future probability.", rationale: "Escape test conditions programmatically withdraw demands contingent on occurrences." },
      B: { text: "Automatic reinforcement alone sustains responding.", rationale: "Alone/isolation variants isolate automatic pathways." },
      C: { text: "Respondent extinction occurs.", rationale: "FA manipulates operant consequences." },
      D: { text: "Caregiver IQ predicts reinforcer hierarchies.", rationale: "Irrelevant construct." },
    },
  },
  {
    id: "mod09-q6",
    stem: "Control/enriched play comparisons within FA contexts primarily provide:",
    correct: "A",
    bundle: {
      A: { text: "A contrast where programmed contingencies stay minimal absent high-quality reinforcement schedules.", rationale: "Play/control baselines juxtapose evocative spikes with thin reinforcement packages." },
      B: { text: "Guaranteed punishment exposure.", rationale: "Classic FA controls avoid programmed punishment unless designing punisher tests." },
      C: { text: "Automatic FA termination rules.", rationale: "Termination depends on protocol safeguards." },
      D: { text: "Replacement behavioral definitions unrelated to referrals.", rationale: "Conditions track referral-defined targets." },
    },
  },
];

const mod09Stems = [
  ["mod09-q7", "Attention FA condition arranges:", "C", { C: ["Social acknowledgement delivered contingent on targeted topography.", "Attention FA definition."], A: ["Demand removal contingent on behavior.", "Escape FA."], B: ["Solitude with minimized reinforcement.", "Alone condition."], D: ["Access to tangibles contingent on behavior.", "Tangible FA."] }],
  ["mod09-q8", "Tangible FA condition arranges:", "D", { D: ["Access to leisure or tangibles contingent on occurrences.", "Tangible FA definition."], A: ["Demand removal.", "Escape."], B: ["Noncontingent attention only.", "Attention test."], C: ["Extinction across all conditions.", "Not tangible test logic."] }],
  ["mod09-q9", "Alone / no-interaction FA condition:", "B", { B: ["Solitude with minimized programmed reinforcement compared with evocative tests.", "Alone analogue."], A: ["Lavish praise contingent on behavior.", "Attention FA."], C: ["Guaranteed punishment.", "Control avoids punishment."], D: ["Demand removal.", "Escape FA."] }],
  ["mod09-q10", "Therapist removes instructional demands contingent on aggression—classification:", "A", { A: ["Escape FA condition prototype.", "Worksheet contrast vignette."], B: ["Control condition prototype.", "Minimal reinforcement baseline."], C: ["Alone sensory deprivation exclusively.", "Alone differs."], D: ["Attention FA prototype.", "Social acknowledgement focus."] }],
  ["mod09-q11", "Neutral play enriched without programmed contingencies—classification:", "A", { A: ["Control condition baseline analogue.", "Worksheet contrast vignette."], B: ["Attention FA prototype.", "Evocative social reinforcement."], C: ["Automatic reinforcement FA.", "Alone variant."], D: ["Escape FA prototype.", "Demand removal focus."] }],
  ["mod09-q12", "FA begins with safety infrastructure including:", "D", { D: ["Informed consent, medical/risk review, definitions, staffing ratios, emergency procedures, stop criteria.", "Safeguards scaffolding."], A: ["Grant deadlines only.", "Clinical safeguards."], B: ["Marketing plans.", "Unrelated."], C: ["Deletion of baseline phases.", "Measurement required."] }],
  ["mod09-q13", "Interview-informed FA (IWFA) tailors:", "C", { C: ["Contrast menus toward localized hypotheses from intake—not generic rotations.", "IWFA definition."], A: ["Punishment intensity only.", "Reinforcer-focused contrasts."], B: ["Elimination of graphs.", "Graphs central."], D: ["Skip consent.", "Ethics required."] }],
  ["mod09-q14", "Undifferentiated FA data should prompt:", "B", { B: ["Reassessment of definitions, MO, fidelity, session length—not premature certainty.", "Conservative interpretation."], A: ["Immediate mastery declarations.", "Tentative language."], C: ["Fabricated differentiation.", "Ethical breach."], D: ["Deletion of control condition.", "All conditions informative."] }],
  ["mod09-q15", "Replication in FA:", "A", { A: ["Strengthens confidence when differentiated patterns repeat across sessions.", "Replication emphasis."], B: ["Optional marketing only.", "Analytic standard."], C: ["Replaces IOA.", "Complementary."], D: ["Eliminates consent.", "Ethics persist."] }],
  ["mod09-q16", "Exam trap: interpreting single-session FA spikes as stable differentiation:", "C", { C: ["High-yield error—check replication and safeguards before final interpretation.", "Confusion point."], A: ["Cooper standard.", "Patterns should repeat."], B: ["Required for alone condition only.", "All conditions."], D: ["IOA substitute.", "Distinct."] }],
  ["mod09-q17", "Exam trap: misidentifying FA condition contingencies:", "B", { B: ["High-yield error—verify arranged contingency before choosing function label.", "Condition logic trap."], A: ["Domain C only.", "Domain F focus."], C: ["Irrelevant to FBA.", "Core FA skill."], D: ["Shaping issue.", "Assessment focus."] }],
  ["mod09-q18", "Proceeding unsupervised FA with medically risky topography:", "A", { A: ["Typifies unethical sequencing even when analytic hunger spikes.", "Domain E + G guardrail."], B: ["Standard practice.", "Safeguards required."], C: ["Domain C measurement issue.", "Ethics issue."], D: ["Required for IWFA.", "All FA types."] }],
  ["mod09-q19", "Aggression topography; no medical/safety review before FA:", "D", { D: ["Pause—complete safeguards, consent, supervisory ratios before experimental contrasts.", "Safety guardrail."], A: ["Proceed—FA always safe.", "Risk-dependent."], B: ["Skip documentation.", "Document safeguards."], C: ["Label interview as FA.", "Modality mislabel."] }],
  ["mod09-q20", "Report claims differentiated multi-element FA; appendix only interviews:", "A", { A: ["Honest modality relabel plus ethically staged contrasts when safeguards unlock.", "Reporting vignette."], B: ["Ship marketing claims unchanged.", "Domain E breach."], C: ["Replace safeguards with slogans.", "Clinical failure."], D: ["Delete interview notes.", "Label indirect accurately."] }],
  ["mod09-q21", "Second clinician reruns abbreviated contrast verifying Week 1 spike—emphasis:", "C", { C: ["Replication strengthening inferential confidence when patterns reproduce ethically.", "Replication vignette."], A: ["Deleting Week 1 data quietly.", "Ethical breach."], B: ["Declaring punishment mastery.", "Assessment focus."], D: ["Skip IOA.", "Complementary."] }],
  ["mod09-q22", "FAST plus descriptive logs converge on escape; rotations linger on generic attention menus:", "B", { B: ["Re-sequence contrasts so caregiver-informed escape hypotheses lead.", "IWFA vignette."], A: ["Maintain cookbook rotations.", "Tailor to hypotheses."], C: ["Delete consent scaffolding.", "Ethics required."], D: ["Skip descriptive data.", "Integrate streams."] }],
  ["mod09-q23", "FA readiness chain—FIRST step:", "C", { C: ["Verify medically cleared aggression topography definitions.", "Chain fragment a."], A: ["Graph differentiated patterns.", "After implementation."], B: ["Stakeholders authorize safeguards.", "After definitions."], D: ["Implement alternating iterations.", "After authorization."] }],
  ["mod09-q24", "Standard FA logic compares:", "A", { A: ["Evocative test conditions with control/enriched conditions minimizing MO for tested contingencies.", "Standard FA logic."], B: ["Group means only.", "Single-subject."], C: ["Indirect FAST rankings.", "Experimental modality."], D: ["Punishment intensity only.", "Reinforcer-focused tests."] }],
  ["mod09-q25", "Interpretation depends on:", "D", { D: ["Relative response differentiation across conditions—not single-session spikes alone.", "Differentiation rule."], A: ["Caregiver optimism.", "Data patterns."], B: ["Grant narrative.", "Evidence-based."], C: ["Questionnaire rankings.", "Experimental data."] }],
  ["mod09-q26", "Abbreviated multi-element FA substitutes:", "B", { B: ["May be used when full FA exceeds resources—but label modality accurately.", "Abbreviated FA note."], A: ["May be labeled full FA always.", "Honest reporting."], C: ["Replace all descriptive work.", "Layer modalities."], D: ["Eliminate consent.", "Safeguards remain."] }],
  ["mod09-q27", "Supervisory ratios during aggression FA:", "C", { C: ["Required safeguard when aggression topography elevates risk during manipulation.", "Supervisory ratio guardrail."], A: ["Unnecessary.", "Safety staffing."], B: ["Replace IOA.", "Complementary."], D: ["Optional for descriptive only.", "Experimental risk."] }],
  ["mod09-q28", "Latency FA embeds:", "A", { A: ["Time-based reinforcement withholding schedules within safeguarded evocative menus.", "Latency FA definition."], B: ["Permanent IQ assessment.", "Unrelated."], C: ["Group design statistics.", "Single-subject FA."], D: ["Indirect FAST only.", "Experimental modality."] }],
  ["mod09-q29", "When data undifferentiated, teams may reassess:", "B", { B: ["Definitions, MO, establishing/abolishing variables, fidelity, session length, sequence effects.", "Undifferentiated data response."], A: ["Only graph colors.", "Substantive factors."], C: ["Caregiver age.", "Irrelevant."], D: ["Token cost.", "Unrelated."] }],
  ["mod09-q30", "FA can identify probable maintaining contingencies but treatment still requires:", "D", { D: ["Social validity, feasibility, stakeholder collaboration, and ongoing progress monitoring.", "Post-FA planning."], A: ["Nothing further.", "Implementation planning needed."], B: ["Deleting descriptive data.", "Integrate modalities."], C: ["Fabricating graphs.", "Ethical breach."] }],
  ["mod09-q31", "High-Yield: running interpretation ahead of safety/consent:", "A", { A: ["Error—safeguard readiness gates manipulation-heavy sessions.", "Confusion point."], B: ["Cooper recommendation.", "Safeguards first."], C: ["Domain C only.", "Domain E + G."], D: ["Required for alone condition.", "All conditions."] }],
  ["mod09-q32", "Domain F experimental items emphasize:", "C", { C: ["Contrast logic—the contingency each condition arranges.", "Domain F focus."], A: ["Token exchange schedules.", "FA logic."], B: ["Shaping grain.", "Assessment focus."], D: ["Group t-tests.", "Single-subject FA."] }],
  ["mod09-q33", "Risk vignette: tissue injury risk; supervisors insist overnight FA—stance:", "A", { A: ["Delay FA pending protective barriers plus informed consent review.", "Worksheet scenario."], B: ["Proceed overnight unsupervised.", "Safeguard violation."], C: ["Substitute placebo punishers.", "Unethical."], D: ["Skip baseline graphs.", "Measurement needed."] }],
  ["mod09-q34", "Alternate permissible tactic while FA staffing aligns:", "B", { B: ["Latency-based descriptive probes until FA staffing aligns.", "Worksheet follow-up."], A: ["Terminate referral silently.", "Continue assessment."], C: ["Ignore differentiation mandate.", "Assessment obligation."], D: ["Fabricate FA graphs.", "Ethical breach."] }],
  ["mod09-q35", "Scenario D claiming exhaustive FA without contrasts collapses:", "A", { A: ["Domain E honest reporting plus Domain F accurate modality labeling.", "Worksheet scenario D."], B: ["Domain A trivia.", "Unrelated."], C: ["Domain G hiring charts.", "Unrelated."], D: ["IOA only.", "Broader breach."] }],
  ["mod09-q36", "Responsible remediation BEFORE funders disburse:", "C", { C: ["Relabel methods honestly; assemble defensible contrast packet once safeguards authorize manipulation.", "Worksheet remediation."], A: ["Ship narrative unchanged.", "Honesty required."], B: ["Destroy diverging interview notes.", "Integrate data."], D: ["Skip consent.", "Ethics required."] }],
  ["mod09-q37", "Evocative contrasts discriminate:", "B", { B: ["Reinforcer classes programmers arrange—not hallway hunches.", "Evocative contrasts definition."], A: ["IOA percentages.", "Measurement quality."], B2: ["skip", "skip"] },],
];

mod09Stems[mod09Stems.length - 1] = ["mod09-q37", "Evocative contrasts discriminate:", "B", { A: ["IOA percentages only.", "Measurement quality."], B: ["Reinforcer classes programmers arrange—not hallway hunches.", "Evocative contrasts definition."], C: ["Caregiver mood.", "Irrelevant."], D: ["Graph fonts.", "Irrelevant."] }];

const mod09ExtraStems = [
  ["mod09-q38", "Control/enriched baselines juxtapose:", "A", { A: ["Minimized reinforcement against evocative test spikes.", "Control comparison logic."], B: ["Punishment exposure always.", "Classic controls avoid punishment."], C: ["Deletion of referral targets.", "Targets persist."], D: ["Indirect interviews.", "Experimental modality."] }],
  ["mod09-q39", "Plan defensible experimental contrasts only when:", "C", { C: ["Safeguards, consent, staffing, and risk review support manipulation.", "Safeguard gate."], A: ["Grant deadline urgent.", "Clinical criteria."], B: ["Questionnaires completed.", "Insufficient alone."], D: ["Parents demand any label.", "Evidence-based."] }],
  ["mod09-q40", "FA condition procedures must be operationalized as:", "B", { B: ["Observable antecedent setup, scored topography, and contingent consequence.", "Operationalization requirement."], A: ["Marketing slogans.", "Clinical precision."], C: ["Caregiver guesses.", "Direct observation of conditions."], D: ["Group statistics.", "Single-subject."] }],
  ["mod09-q41", "Measurement quality in FA requires:", "D", { D: ["Continuous or defensible response measurement, procedural integrity, and IOA.", "FA measurement discipline."], A: ["Optional after treatment.", "During FA."], B: ["Questionnaire recall.", "Direct measurement."], C: ["Deleting control phases.", "All phases informative."] }],
  ["mod09-q42", "Exam-ready FA decision sequence:", "A", { A: ["Condition contingency → comparison condition → safeguards adequate → data pattern supports confidence level.", "Four-question drill."], B: ["Treatment → grant → IOA.", "Assessment order."], C: ["Punish → interview.", "Unethical."], D: ["Skip baseline.", "Measurement needed."] }],
  ["mod09-q43", "Isolation session withholds attention, tangibles, demands—charting baseline rates aligns with:", "B", { B: ["Alone condition inspecting automatic reinforcement minus programmed mediated consequences.", "MTS alone vignette."], A: ["Escape condition exclusively.", "Demand removal focus."], C: ["Attention FA exclusively.", "Social acknowledgement focus."], D: ["Tangible FA exclusively.", "Access focus."] }],
  ["mod09-q44", "FA readiness chain correct order:", "A", { A: ["Verify definitions → authorize safeguards → implement counterbalanced iterations → graph patterns plus replication.", "Chain order a-b-c-d."], B: ["Graph → treat → interview.", "Assessment workflow."], C: ["Punish → FA.", "Unethical."], D: ["Grant → mislabel.", "Reporting failure."] }],
  ["mod09-q45", "High-Yield: labeling interviews as completed FA:", "D", { D: ["Error—never launder indirect tools into FA completed narratives.", "Modality mislabel."], A: ["Best practice.", "Honest labels."], B: ["Domain C only.", "Domain E + F."], C: ["Required for IWFA.", "All FA honest reporting."] }],
  ["mod09-q46", "Medically informed plans before intensive FA:", "C", { C: ["Appropriate when behavior has medical or safety dimensions.", "Medical guardrail."], A: ["Never needed.", "Risk-dependent."], B: ["Replace consent.", "Complementary."], D: ["Optional marketing.", "Clinical necessity."] }],
  ["mod09-q47", "Assent during FA procedures:", "B", { B: ["Honor assent/withdrawal especially during intensive or repeated assessment.", "Assent guardrail."], A: ["Irrelevant for observation.", "Assent-sensitive practice."], C: ["Replace informed consent.", "Complementary."], D: ["Skip when grant funded.", "Ethical requirement."] }],
  ["mod09-q48", "FA worksheet remediation loop:", "D", { D: ["Condition logic → safeguard readiness → differentiation → confidence calibration.", "Remediation log."], A: ["Hide limits.", "Transparency."], B: ["Label interviews as FA.", "Honest reporting."], C: ["Skip replication.", "Strengthen inference."] }],
  ["mod09-q49", "Chapter 27 experimental stream within multimodal FBA:", "B", { B: ["Strongest functional confirmation when properly conducted and safeguards align.", "Evidence hierarchy."], A: ["Weaker than indirect alone.", "Strongest when safe."], C: ["Identical to descriptive scatterplots.", "Distinct modality."], D: ["Treatment phase.", "Assessment focus."] }],
  ["mod09-q50", "Closing Chapter 27 experimental FA principle:", "C", { C: ["Manipulate contingencies deliberately, protect participants, measure cleanly, replicate when possible, communicate confidence honestly.", "Chapter 27 experimental integration."], A: ["Questionnaires equal FA.", "Modality accuracy."], B: ["Skip safeguards when busy.", "Ethics required."], D: ["Hide undifferentiated data.", "Transparent reporting."] }],
];

const mod09 = [...mod09Core, ...stemsToItems(mod09Stems), ...stemsToItems(mod09ExtraStems)];

fs.writeFileSync(path.join(quizDir, "chapter27IndirectFABQuizBank.ts"), renderBank("Indirect Functional Assessment supplement", "CHAPTER_27_INDIRECT_FAB_QUIZ_BANK", mod07));
fs.writeFileSync(path.join(quizDir, "chapter27DescriptiveFABQuizBank.ts"), renderBank("Descriptive Assessment Methods supplement", "CHAPTER_27_DESCRIPTIVE_FAB_QUIZ_BANK", mod08));
fs.writeFileSync(path.join(quizDir, "chapter27ExperimentalFAQuizBank.ts"), renderBank("Experimental Functional Analysis supplement", "CHAPTER_27_EXPERIMENTAL_FA_QUIZ_BANK", mod09));

console.log("mod07", mod07.length, "mod08", mod08.length, "mod09", mod09.length);
