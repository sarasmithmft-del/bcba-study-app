import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 19 — Equivalence-Based Instruction. */

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

export const CHAPTER_19_EQ_QUIZ_BANK: BDSQuestion[] = [
  bx("mod20-q1", "After A→B and B→A plus A→C trained; emergent B→C without pairwise BC training—MOST exemplifies:", "A", {
    A: { text: "Transitive emergent performance consistent with stimulus-equivalence scaffolding—probe documentation still required.", rationale: "Nodal training + untaught BC = transitivity probe success." },
    B: { text: "Symmetry exclusively because bidirectional mappings trained.", rationale: "Symmetry = reverse direction; transitivity = nodal bridge." },
    C: { text: "Respondent elicitation exclusively.", rationale: "Operant conditional discrimination network." },
    D: { text: "Proof further teaching unnecessary always.", rationale: "Ongoing verification and probe evidence required." },
  }),
  bx("mod20-q4", "Cooper Chapter 19 equivalence-based instruction (EBI):", "C", {
    A: { text: "Exhaustive pairwise training of every stimulus combination.", rationale: "EBI trains minimal network then tests emergence." },
    B: { text: "Respondent conditioning only.", rationale: "Operant conditional relations." },
    C: { text: "Compact training of conditional relations to test for untaught emergent/derived relations.", rationale: "EBI definition." },
    D: { text: "MO programming exclusively.", rationale: "Conditional discrimination focus." },
  }),
  bx("mod20-q5", "Stimulus equivalence class (Sidman/Cooper):", "B", {
    A: { text: "Stimuli that look identical.", rationale: "Functional substitutability after conditional training." },
    B: { text: "Stimuli function as substitutable after shared reinforced conditional discrimination histories.", rationale: "Equivalence class definition." },
    C: { text: "Any group of reinforcers.", rationale: "Stimulus equivalence is relational." },
    D: { text: "Schedule of reinforcement.", rationale: "Conditional relation network." },
  }),
  bx("mod20-q6", "Symmetry (bidirectionality) in equivalence testing:", "D", {
    A: { text: "Tests B→C after A→B and A→C training.", rationale: "Transitivity probe." },
    B: { text: "Tests A→A identity matching only.", rationale: "Reflexivity." },
    C: { text: "Tests directly trained forward relations only.", rationale: "Symmetry tests reverse without direct training." },
    D: { text: "Tests whether trained sample→comparison relation reverses (e.g., B→A after A→B) without direct reversal training.", rationale: "Symmetry definition." },
  }),
  bx("mod20-q7", "Transitivity in equivalence testing:", "A", {
    A: { text: "Tests untaught relation through shared node (e.g., B→C after A→B and A→C without direct BC training).", rationale: "Transitivity definition." },
    B: { text: "Tests reverse of trained relation.", rationale: "Symmetry." },
    C: { text: "Tests identity matching.", rationale: "Reflexivity." },
    D: { text: "Tests MO shifts.", rationale: "Relational probe." },
  }),
  bx("mod20-q8", "Reflexivity in equivalence testing:", "C", {
    A: { text: "B→A after A→B training.", rationale: "Symmetry." },
    B: { text: "B→C nodal bridge.", rationale: "Transitivity." },
    C: { text: "Stimulus matched to itself (A→A) under identity/SAME conditions.", rationale: "Reflexivity definition." },
    D: { text: "Extinction of relations.", rationale: "Equivalence property test." },
  }),
  bx("mod20-q9", "Directly trained relation versus emergent relation:", "B", {
    A: { text: "Identical for reporting purposes.", rationale: "Must distinguish taught from probed." },
    B: { text: "Emergent relations were not directly trained—success on probes indicates derived performance.", rationale: "Core EBI distinction." },
    C: { text: "Emergent means respondent only.", rationale: "Operant derived relations." },
    D: { text: "Direct training always proves equivalence class.", rationale: "Probe evidence required." },
  }),
  bx("mod20-q10", "A→B and A→C trained; B→C passes on probe without BC training:", "D", {
    A: { text: "Symmetry only.", rationale: "Transitive emergence." },
    B: { text: "Proof BC was directly taught.", rationale: "Emergent if not trained." },
    C: { text: "Respondent reflex.", rationale: "Nodal equivalence logic." },
    D: { text: "Evidence of transitive emergent relation consistent with equivalence class formation.", rationale: "Classic transitivity vignette." },
  }),
  bx("mod20-q11", "A→B trained to criterion; B→A probe fails despite forward mastery:", "A", {
    A: { text: "Withhold full equivalence claims—symmetry probe evidence insufficient.", rationale: "Symmetry required for class claims." },
    B: { text: "Certify equivalence class complete.", rationale: "Forward training insufficient alone." },
    C: { text: "Proof transitivity verified.", rationale: "Symmetry probe failed." },
    D: { text: "Delete probe data.", rationale: "Redesign and re-probe." },
  }),
  bx("mod20-q12", "Blending taught A→B trials with symmetry B→A probes on one graph without legend:", "C", {
    A: { text: "Ideal measurement.", rationale: "Separation lapse." },
    B: { text: "IOA substitute.", rationale: "Analytic separation required." },
    C: { text: "Methodological lapse—instructed and emergent relations must be disaggregated.", rationale: "Correct move—Methodological lapse—instructed and emergent relations must be disaggregated." },
    D: { text: "Proof symmetry equals transitivity.", rationale: "Different probe types." },
  }),
  bx("mod20-q13", "Explicitly training C→B before claiming transitive proof from prior A→B + A→C:", "D", {
    A: { text: "Strengthens transitive emergence claim.", rationale: "Direct training contaminates probe interpretation." },
    B: { text: "Best practice always.", rationale: "Contaminates derived-relation logic." },
    C: { text: "Required for Sidman tests.", rationale: "Probe must be untaught." },
    D: { text: "Contaminates transitive emergence interpretation—relation was directly trained.", rationale: "Classic mod20-q3 critique." },
  }),
  bx("mod20-q14", "Exam trap: claiming equivalence from trained relations alone:", "B", {
    A: { text: "Correct—training proves class.", rationale: "Probe evidence required." },
    B: { text: "High-yield error—emergence requires symmetry/transitivity/reflexivity probe success.", rationale: "Ch 19 confusion point." },
    C: { text: "IOA issue only.", rationale: "Conceptual error." },
    D: { text: "Applies only to reflexivity.", rationale: "All probe types." },
  }),
  bx("mod20-q15", "Exam trap: confusing symmetry with transitivity:", "A", {
    A: { text: "High-yield error—symmetry reverses trained direction; transitivity bridges through shared node.", rationale: "Distinct probe types." },
    B: { text: "Correct pairing.", rationale: "Different analytic questions." },
    C: { text: "Identical processes.", rationale: "Must discriminate." },
    D: { text: "Both test MO.", rationale: "Relational probes." },
  }),
  bx("mod20-q16", "Separate data tabs for taught blocks, symmetry probes, transitivity probes, and IOA:", "D", {
    A: { text: "Optional decoration.", rationale: "Supports credible EBI interpretation." },
    B: { text: "Proof probes subjective.", rationale: "Disaggregated measurement." },
    C: { text: "Replaces reinforcement.", rationale: "Documentation structure." },
    D: { text: "Measurement dossier supporting auditable equivalence interpretation.", rationale: "Best practice." },
  }),
  bx("mod20-q17", "Hiding symmetry probe CSVs while marketing full emergent literacy:", "B", {
    A: { text: "Standard privacy.", rationale: "Transparency breach." },
    B: { text: "Reporting breach—emergence claims cannot be independently verified.", rationale: "Ethical measurement issue." },
    C: { text: "Proof equivalence obsolete.", rationale: "Probe evidence essential." },
    D: { text: "IOA bans EBI.", rationale: "Documentation required." },
  }),
  bx("mod20-q18", "Deleting transitive failure spreadsheets to keep dashboards green:", "C", {
    A: { text: "Harmless aesthetics.", rationale: "Integrity collapse." },
    B: { text: "Required reporting.", rationale: "Probe failures inform redesign." },
    C: { text: "Integrity collapse—misrepresented emergence claims.", rationale: "Ethical violation." },
    D: { text: "IOA substitute.", rationale: "Transparent reporting." },
  }),
  bx("mod20-q19", "IOA on relational/emergent trial scoring:", "A", {
    A: { text: "Important—relational judgments can be ambiguous; IOA supports reliable probe interpretation.", rationale: "Domain C standard." },
    B: { text: "Unnecessary for probes.", rationale: "Observer agreement on relations." },
    C: { text: "Replaces probe separation.", rationale: "Complements documentation." },
    D: { text: "Only for forward training.", rationale: "Probes especially need IOA." },
  }),
  bx("mod20-q20", "When transitivity probe fails:", "D", {
    A: { text: "Delete rows and claim mastery.", rationale: "Redesign and reteach." },
    B: { text: "Marketing unchanged.", rationale: "Information for instruction." },
    C: { text: "Proof EBI invalid.", rationale: "Redesign nodes/exemplars." },
    D: { text: "Redesign instruction, reteach nodes, widen exemplars—report honestly.", rationale: "Ethical response to failed probes." },
  }),
  bx("mod20-q21", "Nodal training design (A as hub for B and C):", "B", {
    A: { text: "Irrelevant to emergence.", rationale: "Node selection shapes transitive probes." },
    B: { text: "Intentional—hub stimuli affect which emergent relations are likely.", rationale: "Design documentation required." },
    C: { text: "Prohibited in EBI.", rationale: "Standard nodal approach." },
    D: { text: "MO manipulation only.", rationale: "Conditional relation architecture." },
  }),
  bx("mod20-q22", "Matching-to-sample (MTS) in EBI:", "C", {
    A: { text: "Unrelated to equivalence.", rationale: "MTS trains conditional relations." },
    B: { text: "Respondent only.", rationale: "Operant conditional discrimination." },
    C: { text: "Common procedure for training sample→comparison conditional relations.", rationale: "EBI procedural context." },
    D: { text: "Extinction procedure.", rationale: "Conditional discrimination training." },
  }),
  bx("mod20-q23", "Ethical EBI dissemination requires:", "A", {
    A: { text: "Published probe evidence and modest language when emergence partial or absent.", rationale: "Domain E standard." },
    B: { text: "Omnibus mastery marketing whenever caregivers applaud.", rationale: "Restrained reporting." },
    C: { text: "Suppressing transitive failures.", rationale: "Transparent appendices." },
    D: { text: "Deleting IOA when disagreements appear.", rationale: "Resolve via definitions." },
  }),
  bx("mod20-q24", "Reflexivity probes alongside symmetry and transitivity:", "D", {
    A: { text: "Replace symmetry/transitivity.", rationale: "Complement full property set." },
    B: { text: "Unnecessary always.", rationale: "Identity checks support equivalence picture." },
    C: { text: "Prove MO control.", rationale: "Reflexivity property." },
    D: { text: "Complement fuller equivalence property documentation.", rationale: "Reflexivity + symmetry + transitivity." },
  }),
  bx("mod20-q25", "Mastery on directly taught A→B alone:", "C", {
    A: { text: "Proves full equivalence class.", rationale: "Probe evidence needed." },
    B: { text: "Proves transitivity.", rationale: "Only forward trained relation." },
    C: { text: "Insufficient for equivalence-class claims—probe symmetry/transitivity/reflexivity.", rationale: "Taught ≠ emergent." },
    D: { text: "Proves reflexivity.", rationale: "Separate probe required." },
  }),
  bx("mod20-q26", "Domain F Chapter 19 items often test:", "B", {
    A: { text: "Schedule notation only.", rationale: "Trained vs emergent discrimination." },
    B: { text: "Distinguishing directly trained from emergent symmetry/transitivity relations.", rationale: "Domain F EBI analysis." },
    C: { text: "UMO phylogeny only.", rationale: "Equivalence focus." },
    D: { text: "Graph color only.", rationale: "Relational probe logic." },
  }),
  bx("mod20-q27", "Chapter 19 pairs with Chapter 20 (Nonequivalence) because:", "D", {
    A: { text: "Identical programming.", rationale: "Ch 20 covers relations without full equivalence properties." },
    B: { text: "Chapter 20 replaces EBI.", rationale: "Sequential related chapters." },
    C: { text: "Unrelated.", rationale: "Both address relational learning." },
    D: { text: "Ch 19 targets equivalence-class emergence; Ch 20 addresses relational learning without assuming equivalence properties.", rationale: "Cooper sequence." },
  }),
  bx("mod20-q28", "Defining emergence criteria before probe sessions:", "A", {
    A: { text: "Best practice—pre-specified criteria support unbiased probe interpretation.", rationale: "Measurement discipline." },
    B: { text: "Optional.", rationale: "Criteria before probes." },
    C: { text: "Forbidden.", rationale: "Standard EBI protocol." },
    D: { text: "Replaces IOA.", rationale: "Complements measurement." },
  }),
  bx("mod20-q29", "Prompt levels during probe sessions should be:", "C", {
    A: { text: "Hidden from records.", rationale: "Document prompts on probes." },
    B: { text: "Maximized to ensure pass.", rationale: "Clean probe conditions." },
    C: { text: "Logged—heavy prompting contaminates emergence interpretation.", rationale: "Probe integrity." },
    D: { text: "Irrelevant.", rationale: "Prompt policy affects interpretation." },
  }),
  bx("mod20-q30", "High-Yield: trained B→C directly then claims transitive emergence:", "D", {
    A: { text: "Valid transitive proof.", rationale: "Direct training contaminates." },
    B: { text: "Symmetry evidence.", rationale: "BC was taught." },
    C: { text: "Reflexivity only.", rationale: "Probe contamination." },
    D: { text: "Invalid—tested relation was directly trained, not emergent.", rationale: "Exam trap." },
  }),
  bx("mod20-q31", "Sidman stimulus equivalence research established:", "B", {
    A: { text: "MO taxonomy.", rationale: "Conditional relation/emergence framework." },
    B: { text: "Tests for derived relational responding after minimal conditional training.", rationale: "Historical foundation for EBI." },
    C: { text: "Schedule thinning only.", rationale: "Equivalence class logic." },
    D: { text: "Respondent extinction.", rationale: "Operant conditional relations." },
  }),
  bx("mod20-q32", "Emergent repertoire means:", "A", {
    A: { text: "Relational performances not directly trained but arising from trained conditional network.", rationale: "Derived/emergent definition." },
    B: { text: "Every pairwise relation explicitly drilled.", rationale: "Efficiency of EBI." },
    C: { text: "Respondent reflex only.", rationale: "Operant derived relations." },
    D: { text: "MO-established behavior.", rationale: "Conditional discrimination outcome." },
  }),
  bx("mod20-q33", "One-to-many versus many-to-one training in EBI:", "C", {
    A: { text: "Irrelevant to nodal design.", rationale: "Training structure affects emergence." },
    B: { text: "Identical outcomes always.", rationale: "Architecture matters." },
    C: { text: "Different training structures (one sample to many comparisons vs many to one) affect which relations are taught first.", rationale: "Design consideration." },
    D: { text: "MO procedures.", rationale: "Conditional training layout." },
  }),
  bx("mod20-q34", "Appendix removed listing transitive probe failures; deck claims Sidman-grade equivalence:", "B", {
    A: { text: "Normal reporting.", rationale: "Truthful emergence reporting compromised." },
    B: { text: "Truthful emergence reporting and reproducible probe evidence both compromised.", rationale: "Domain E + C." },
    C: { text: "IOA substitute.", rationale: "Restore appendix." },
    D: { text: "Proof EBI failed.", rationale: "Reporting integrity issue." },
  }),
  bx("mod20-q35", "Best remediation when probe appendix deleted:", "D", {
    A: { text: "Ship hero decks without appendices.", rationale: "Restore probe rows." },
    B: { text: "Password-protect CSVs indefinitely.", rationale: "Transparency required." },
    C: { text: "Repeat mastery claims unchanged.", rationale: "Honest partial emergence narrative." },
    D: { text: "Restore probe rows, narrate partial emergence honestly, redesign before repeating mastery claims.", rationale: "Cooper remediation." },
  }),
  bx("mod20-q36", "Reinforcement-forward error correction during EBI teaching:", "A", {
    A: { text: "Recommended—humane pacing supports conditional relation acquisition.", rationale: "Ethical teaching practice." },
    B: { text: "Forbidden.", rationale: "Reinforcement-based error reduction." },
    C: { text: "Replaces probe separation.", rationale: "Teaching phase practice." },
    D: { text: "Proves equivalence without probes.", rationale: "Still need probe evidence." },
  }),
  bx("mod20-q37", "Forward A→B polished; marketing claims equivalence; B→A untested:", "C", {
    A: { text: "Valid equivalence marketing.", rationale: "Symmetry probe missing." },
    B: { text: "Transitivity verified.", rationale: "Symmetry untested." },
    C: { text: "Premature claim—symmetry and other probes required.", rationale: "Forward training insufficient." },
    D: { text: "Reflexivity sufficient alone.", rationale: "Full probe battery." },
  }),
  bx("mod20-q38", "Four properties of stimulus equivalence (Cooper/Sidman framework) include:", "B", {
    A: { text: "MO, SD, SR, punishment.", rationale: "Reflexivity, symmetry, transitivity, equivalence." },
    B: { text: "Reflexivity, symmetry, transitivity, and equivalence (class formation).", rationale: "Standard framework." },
    C: { text: "FR, VR, FI, VI.", rationale: "Schedule properties." },
    D: { text: "Mand, tact, intraverbal, echoic.", rationale: "Verbal operants." },
  }),
  bx("mod20-q39", "Probe session should differ from teaching session because:", "D", {
    A: { text: "Probes should repeat exact training trials.", rationale: "Test untaught relations." },
    B: { text: "No difference needed.", rationale: "Separation maintains interpretability." },
    C: { text: "Probes use maximum prompting.", rationale: "Minimal/no training during probes." },
    D: { text: "Probes test relations not directly trained under controlled conditions.", rationale: "Teaching vs probing distinction." },
  }),
  bx("mod20-q40", "BCBA stem: AB + AC trained; BC probe passes swiftly:", "A", {
    A: { text: "Emergent transitive performance pending continued verification.", rationale: "Classic board vignette." },
    B: { text: "Symmetry proof exclusively.", rationale: "Transitivity pattern." },
    C: { text: "Respondent elicitation.", rationale: "Operant equivalence." },
    D: { text: "Proof no further verification needed.", rationale: "Ongoing probe discipline." },
  }),
  bx("mod20-q41", "Training probe relation before testing emergence:", "C", {
    A: { text: "Strengthens emergence claim.", rationale: "Contaminates interpretation." },
    B: { text: "Required.", rationale: "Invalid probe logic." },
    C: { text: "High-yield error—probe must test untaught relation.", rationale: "Ch 19 confusion point." },
    D: { text: "IOA issue only.", rationale: "Experimental control error." },
  }),
  bx("mod20-q42", "Equivalence class member stimuli:", "B", {
    A: { text: "Must be physically identical.", rationale: "Functional substitutability." },
    B: { text: "Become substitutable in conditional relations after appropriate training and probe evidence.", rationale: "Class membership." },
    C: { text: "Share MO only.", rationale: "Conditional history." },
    D: { text: "Cannot generalize.", rationale: "Generalization within class." },
  }),
  bx("mod20-q43", "Minimal network training efficiency advantage of EBI:", "D", {
    A: { text: "Eliminates need for measurement.", rationale: "Efficiency with accountability." },
    B: { text: "Removes probe requirement.", rationale: "Probes essential." },
    C: { text: "Trains all pairs exhaustively faster.", rationale: "Trains minimal set." },
    D: { text: "Teaches fewer relations directly while testing whether others emerge.", rationale: "EBI rationale." },
  }),
  bx("mod20-q44", "Supervisor reviewing EBI program should verify:", "A", {
    A: { text: "Separate taught/probe data, probe types documented, IOA on relations, modest reporting language.", rationale: "Comprehensive review checklist." },
    B: { text: "Forward training accuracy only.", rationale: "Insufficient." },
    C: { text: "Caregiver applause counts.", rationale: "Probe ledgers required." },
    D: { text: "MO logs only.", rationale: "EBI-specific documentation." },
  }),
  bx("mod20-q45", "Symmetry probe success after A→B training means:", "A", {
    A: { text: "B→A emerges on probe without direct B→A training.", rationale: "Symmetry definition." },
    B: { text: "B→C is verified.", rationale: "Transitivity is separate probe." },
    C: { text: "Full equivalence class is always established.", rationale: "Other probes still required." },
    D: { text: "A→A reflexivity is verified.", rationale: "Symmetry not reflexivity." },
  }),
  bx("mod20-q46", "Transitive probe failure after nodal training suggests:", "B", {
    A: { text: "Certify equivalence class.", rationale: "Redesign needed." },
    B: { text: "Revisit nodal design, exemplars, and teaching before class claims.", rationale: "Instructional response." },
    C: { text: "Delete probe tab.", rationale: "Honest reporting." },
    D: { text: "Proof respondent conditioning.", rationale: "Operant conditional network." },
  }),
  bx("mod20-q47", "High-Yield: merge taught and probe in one graph:", "D", {
    A: { text: "Best practice.", rationale: "Separation required." },
    B: { text: "Symmetry equals transitivity.", rationale: "Blending lapse." },
    C: { text: "IOA obsolete.", rationale: "Analytic separation lapse." },
    D: { text: "Cannot audit whether performance is taught or emergent.", rationale: "Core measurement error." },
  }),
  bx("mod20-q48", "Partial emergence (symmetry passes, transitivity fails):", "A", {
    A: { text: "Report partial evidence honestly—do not claim full equivalence class.", rationale: "Modest dissemination." },
    B: { text: "Claim full Sidman-grade equivalence.", rationale: "Partial ≠ full class." },
    C: { text: "Hide transitive failures.", rationale: "Transparent reporting." },
    D: { text: "Stop all teaching.", rationale: "Redesign transitivity path." },
  }),
  bx("mod20-q49", "Board stem: symmetry B→A fails; forward A→B perfect:", "C", {
    A: { text: "Equivalence class verified.", rationale: "Symmetry failed." },
    B: { text: "Transitivity verified.", rationale: "Symmetry probe issue." },
    C: { text: "Withhold equivalence mastery claims pending symmetry evidence.", rationale: "Classic exam stem." },
    D: { text: "Reflexivity verified.", rationale: "Symmetry not met." },
  }),
  bx("mod20-q50", "Closing Chapter 19 principle:", "B", {
    A: { text: "Trained accuracy proves equivalence class.", rationale: "Probe evidence required." },
    B: { text: "Separate taught from probed relations; verify symmetry, transitivity, reflexivity; report modestly with reviewable appendices.", rationale: "Chapter 19 integration." },
    C: { text: "Symmetry and transitivity are identical.", rationale: "Distinct probes." },
    D: { text: "Failed probes should be deleted.", rationale: "Redesign and report honestly." },
  }),
];
