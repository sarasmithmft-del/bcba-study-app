import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 21 — Imitation, Modeling, and Observational Learning. */

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

export const CHAPTER_21_IMITATION_QUIZ_BANK: BDSQuestion[] = [
  bx("mod22-q1", "Learner imitates first therapist only—fails across novel models—MOST accurate programming conclusion:", "C", {
    A: { text: "Generalized imitation already mastered.", rationale: "Novel model failure indicates limited generalization." },
    B: { text: "Respondent extinction explains all.", rationale: "Operant imitation analysis." },
    C: { text: "Expand exemplar diversity and probe generalized imitation—do not rebrand mastery prematurely.", rationale: "Correct move—Expand exemplar diversity and probe generalized imitation—do not rebrand mastery prematurely." },
    D: { text: "Delete imitation goals permanently.", rationale: "Generalization programming indicated." },
  }),
  bx("mod22-q4", "Cooper Chapter 21 defines imitation as involving:", "B", {
    A: { text: "Any behavior change after observing others.", rationale: "Formal similarity control required." },
    B: { text: "Topographies echoing modeled acts under formal resemblance control with listener-mediated reinforcement.", rationale: "Imitation definition." },
    C: { text: "MO shifts only.", rationale: "Operant imitation." },
    D: { text: "Respondent reflex only.", rationale: "Emitted echo of model." },
  }),
  bx("mod22-q5", "Generalized imitation:", "A", {
    A: { text: "Imitating across novel demonstrators/settings without per-model retraining when histories support transfer.", rationale: "Generalized imitation definition." },
    B: { text: "Imitating one therapist only.", rationale: "Limited imitation." },
    C: { text: "Automatic after one trial.", rationale: "Requires programming and probes." },
    D: { text: "Identical to echoic only.", rationale: "Motor and vocal imitation broader." },
  }),
  bx("mod22-q6", "Model stimuli:", "D", {
    A: { text: "Hidden prompts unrelated to demonstration.", rationale: "Observable demonstrations." },
    B: { text: "MO establishing operations.", rationale: "Demonstration cues imitation." },
    C: { text: "Extinction stimuli.", rationale: "Model cues reproduction." },
    D: { text: "Observable demonstrations cueing learner reproduction—discriminable from nondemonstrative prompts.", rationale: "Model stimulus definition." },
  }),
  bx("mod22-q7", "Observational learning:", "C", {
    A: { text: "Identical to direct trial-by-trial shaping on every step.", rationale: "Learning from witnessing contingencies." },
    B: { text: "Stimulus enhancement only.", rationale: "Broader repertoire change after observation." },
    C: { text: "Repertoire changes after witnessing others contact contingencies without direct shaping on every step.", rationale: "Observational learning definition." },
    D: { text: "Respondent conditioning only.", rationale: "Operant observational pathways." },
  }),
  bx("mod22-q8", "Latency to imitation:", "B", {
    A: { text: "Irrelevant metric.", rationale: "Fluency indicator." },
    B: { text: "Elapsed time from model offset to learner echo—Domain C fluency metric.", rationale: "Latency definition." },
    C: { text: "MO measure only.", rationale: "Imitation timing." },
    D: { text: "IOA substitute.", rationale: "Performance dimension." },
  }),
  bx("mod22-q9", "Model fidelity:", "A", {
    A: { text: "Documented accuracy of how demonstrations are presented—supports interpretive confidence.", rationale: "Model fidelity definition." },
    B: { text: "Optional decoration.", rationale: "Required for imitation claims." },
    C: { text: "Caregiver applause counts.", rationale: "Objective demonstration logs." },
    D: { text: "Replaces generalized imitation probes.", rationale: "Complements probes." },
  }),
  bx("mod22-q10", "Exam trap: declaring generalized imitation from a single model:", "D", {
    A: { text: "Best practice.", rationale: "Novel model probes required." },
    B: { text: "IOA issue only.", rationale: "Conceptual overclaim." },
    C: { text: "Required for early acquisition.", rationale: "Generalization separate target." },
    D: { text: "High-yield error—probe across novel demonstrators before mastery claims.", rationale: "Ch 21 confusion point." },
  }),
  bx("mod22-q11", "Exam trap: confusing observational learning with direct shaping on every step:", "B", {
    A: { text: "Correct integration.", rationale: "Different learning pathways." },
    B: { text: "High-yield error—observational learning does not require direct contact with every contingency step.", rationale: "Discrimination required." },
    C: { text: "Identical processes.", rationale: "Observational vs direct training." },
    D: { text: "Applies only to echoics.", rationale: "Broader observational frame." },
  }),
  bx("mod22-q12", "Modeling versus stimulus enhancement:", "C", {
    A: { text: "Identical.", rationale: "Modeling involves contingency contact via observation." },
    B: { text: "Stimulus enhancement is always observational learning.", rationale: "Discriminate controlling variables." },
    C: { text: "Analysts document which modeled dimensions controlled imitation—not mere increased salience.", rationale: "Cooper discrimination." },
    D: { text: "Modeling never uses video.", rationale: "Media models possible with consent." },
  }),
  bx("mod22-q13", "Formal similarity control in imitation:", "A", {
    A: { text: "Learner response resembles modeled topography (point-to-point correspondence for motor/vocal acts).", rationale: "Resemblance control." },
    B: { text: "MO only.", rationale: "Topographic correspondence." },
    C: { text: "SD for extinction.", rationale: "Model-resemblance reinforcement." },
    D: { text: "Automatic punishment.", rationale: "Imitation process." },
  }),
  bx("mod22-q14", "Reinforcement-forward shaping of imitation approximations:", "D", {
    A: { text: "Forbidden—punish errors first.", rationale: "Cooper ethical emphasis." },
    B: { text: "Optional only.", rationale: "Standard practice." },
    C: { text: "Replaces model fidelity logs.", rationale: "Complements measurement." },
    D: { text: "Recommended—reinforce approximations; avoid punishing awkward developmental topographies.", rationale: "Humane imitation programming." },
  }),
  bx("mod22-q15", "Clinician raises voice after clumsy imitation approximations:", "B", {
    A: { text: "Approved when graphs move.", rationale: "Coercive escalation risk." },
    B: { text: "Domain E risk—de-escalate; use reinforcement-forward shaping and humane error correction.", rationale: "Correct move—Domain E risk—de-escalate; use reinforcement-forward shaping and humane error correction." },
    C: { text: "Assent irrelevant during drills.", rationale: "Assent persists." },
    D: { text: "MO excuses intimidation.", rationale: "Ethical coaching required." },
  }),
  bx("mod22-q16", "Model fidelity vanished; slideshow claims generalized imitation mastery:", "A", {
    A: { text: "Reinstate model logs, latency, reinforcement contact, and generalized imitation probes across novel exemplars.", rationale: "Correct move—Reinstate model logs, latency, reinforcement contact, and generalized imitation probes across novel exemplars." },
    B: { text: "Accept mastery from audience applause.", rationale: "Fidelity + probes required." },
    C: { text: "Delete imitation goals when latency varies.", rationale: "Latency informs programming." },
    D: { text: "Poster exposure alone proves observational learning.", rationale: "Contingency contact evidence needed." },
  }),
  bx("mod22-q17", "Video/media modeling ethical obligations include:", "C", {
    A: { text: "Skip consent when convenient.", rationale: "Consent-sensitive media modeling." },
    B: { text: "Maximum coercion for efficiency.", rationale: "Assent and consent required." },
    C: { text: "Consent-sensitive use; honor assent withdrawals; document when scripted models substitute for naturalistic demos.", rationale: "Cooper ethics bundle." },
    D: { text: "Hide model source from families.", rationale: "Transparency required." },
  }),
  bx("mod22-q18", "Generalized imitation probes should include:", "D", {
    A: { text: "Same therapist only.", rationale: "Novel demonstrators/settings." },
    B: { text: "No measurement.", rationale: "Probe diversity." },
    C: { text: "Punishment for errors on novel models.", rationale: "Reinforcement-forward probes." },
    D: { text: "Novel models/demonstrators and settings beyond initial training exemplar.", rationale: "Generalization assessment." },
  }),
  bx("mod22-q19", "Imitation repertoires support later:", "B", {
    A: { text: "Respondent extinction only.", rationale: "Tacts, intraverbals, adaptive chains." },
    B: { text: "Tacts, intraverbals, echoics, and adaptive chains—motor/vocal templates.", rationale: "Cooper developmental link." },
    C: { text: "Schedule thinning only.", rationale: "Verbal and motor skill foundation." },
    D: { text: "Negative punishment programming.", rationale: "Skill acquisition pathway." },
  }),
  bx("mod22-q20", "Trial-by-trial imitation accuracy tracking:", "A", {
    A: { text: "Domain C standard—supports programming decisions and IOA.", rationale: "Measurement requirement." },
    B: { text: "Optional.", rationale: "Core metric." },
    C: { text: "Replaces model fidelity.", rationale: "Both tracked." },
    D: { text: "Only for echoics.", rationale: "All imitation targets." },
  }),
  bx("mod22-q21", "Peer and caregiver models in observational learning:", "C", {
    A: { text: "Invalid—therapist only.", rationale: "Ecologically valid models." },
    B: { text: "Eliminate need for reinforcement.", rationale: "Contingencies still mediate." },
    C: { text: "Valid model sources when fidelity and contingency contact are documented.", rationale: "Naturalistic modeling." },
    D: { text: "Always automatic generalized imitation.", rationale: "Requires assessment." },
  }),
  bx("mod22-q22", "Delayed demonstration modeling:", "D", {
    A: { text: "Impossible for imitation.", rationale: "Delayed models possible with programming." },
    B: { text: "Proves respondent only.", rationale: "Operant observational pathways." },
    C: { text: "MO manipulation.", rationale: "Model presentation variable." },
    D: { text: "Model presented with delay—latency and accuracy still measured.", rationale: "Applied modeling variant." },
  }),
  bx("mod22-q23", "Social validity for model selection:", "B", {
    A: { text: "Irrelevant.", rationale: "Cultural fit of exemplars matters." },
    B: { text: "Select models/reinforcers honoring cultural validity and assent-sensitive pacing.", rationale: "Cooper emphasis." },
    C: { text: "Always use scripted adult models only.", rationale: "Diversified naturalistic demos preferred when possible." },
    D: { text: "Replace fidelity logs.", rationale: "Complements documentation." },
  }),
  bx("mod22-q24", "Domain F Chapter 21 items often test:", "C", {
    A: { text: "Schedule notation only.", rationale: "Imitation vs observational learning." },
    B: { text: "Equivalence probes only.", rationale: "Imitation/generalization focus." },
    C: { text: "Generalized imitation evidence; modeling vs stimulus enhancement; fidelity documentation.", rationale: "Domain F analysis." },
    D: { text: "UMO phylogeny only.", rationale: "Imitation chapter." },
  }),
  bx("mod22-q25", "Chapter 21 pairs with Chapter 18 (Verbal Behavior) because:", "A", {
    A: { text: "Echoic is vocal imitation under formal resemblance control.", rationale: "Cross-chapter link." },
    B: { text: "Unrelated.", rationale: "Echoic = verbal imitation." },
    C: { text: "Chapter 18 replaces imitation.", rationale: "Complementary chapters." },
    D: { text: "Both are schedule chapters.", rationale: "Verbal/motor imitation." },
  }),
  bx("mod22-q26", "Listener-mediated reinforcement in imitation:", "D", {
    A: { text: "Irrelevant.", rationale: "Mediators deliver reinforcement for echoed acts." },
    B: { text: "Automatic sensory only.", rationale: "Social mediation." },
    C: { text: "Respondent only.", rationale: "Operant imitation." },
    D: { text: "Reinforcing listener (mediator) maintains imitative topographies.", rationale: "Parallel to verbal behavior mediation." },
  }),
  bx("mod22-q27", "Developmentally sensitive topographies in imitation shaping:", "B", {
    A: { text: "Punish awkward approximations immediately.", rationale: "Reinforce approximations." },
    B: { text: "Shape toward criterion respecting developmental constraints—not punitive error rituals.", rationale: "Cooper emphasis." },
    C: { text: "Skip baseline assessment.", rationale: "Assess constraints first." },
    D: { text: "Maximum model intensity always.", rationale: "Humane pacing." },
  }),
  bx("mod22-q28", "Assess baseline imitation before complex targets:", "C", {
    A: { text: "Optional.", rationale: "Workflow first step." },
    B: { text: "Replaces generalized probes.", rationale: "Foundation assessment." },
    C: { text: "Best practice—know starting repertoire and developmental constraints.", rationale: "Chain workflow step." },
    D: { text: "Only for adults.", rationale: "All learners." },
  }),
  bx("mod22-q29", "IOA on imitation trial scoring:", "A", {
    A: { text: "Supports reliable accuracy and latency documentation.", rationale: "Domain C standard." },
    B: { text: "Unnecessary.", rationale: "Observer agreement." },
    C: { text: "Replaces model fidelity.", rationale: "Complementary." },
    D: { text: "Only for observational learning.", rationale: "Direct imitation too." },
  }),
  bx("mod22-q30", "High-Yield: treating poster exposure as observational-learning proof:", "D", {
    A: { text: "Valid always.", rationale: "Contingency contact evidence required." },
    B: { text: "Best practice.", rationale: "Observation ≠ demonstrated learning." },
    C: { text: "IOA substitute.", rationale: "Functional analysis needed." },
    D: { text: "Error—observational learning requires evidence of repertoire change from witnessed contingencies.", rationale: "Exam trap." },
  }),
  bx("mod22-q31", "Imitation versus mand during modeling drill:", "B", {
    A: { text: "Identical.", rationale: "Imitation = resemblance to model; mand = EO control." },
    B: { text: "Imitation under formal similarity to model; mand under evocative control specifying reinforcer.", rationale: "Ch 18/21 integration." },
    C: { text: "Both MO only.", rationale: "Different controlling variables." },
    D: { text: "Mand because adult spoke.", rationale: "Resemblance defines imitation." },
  }),
  bx("mod22-q32", "Coerced modeling when adult escalates intensity:", "C", {
    A: { text: "Ethical best practice.", rationale: "Guard against coercion." },
    B: { text: "Required for fluency.", rationale: "Assent and humane shaping." },
    C: { text: "Ethical violation—honor assent; de-escalate; reinforcement-forward care.", rationale: "Domain E." },
    D: { text: "IOA issue only.", rationale: "Clinical ethics." },
  }),
  bx("mod22-q33", "Scripted models substituting for naturalistic demonstrations:", "A", {
    A: { text: "Acceptable when transparently documented—not hidden from stakeholders.", rationale: "Cooper reporting standard." },
    B: { text: "Always forbidden.", rationale: "Document substitution." },
    C: { text: "Proves generalized imitation automatically.", rationale: "Still need probes." },
    D: { text: "Eliminates consent requirements.", rationale: "Consent still required." },
  }),
  bx("mod22-q34", "Motor imitation versus vocal/echoic imitation:", "D", {
    A: { text: "Identical processes only.", rationale: "Both under resemblance control." },
    B: { text: "Motor impossible to shape.", rationale: "Both can be shaped." },
    C: { text: "Echoic is not imitation.", rationale: "Echoic is vocal imitation." },
    D: { text: "Both involve formal similarity; echoic is verbal point-to-point correspondence.", rationale: "Ch 18/21 link." },
  }),
  bx("mod22-q35", "Programming after failed novel-model probe:", "B", {
    A: { text: "Certify generalized imitation mastered.", rationale: "Expand exemplar diversity." },
    B: { text: "Increase model diversity; continue shaping; re-probe generalization.", rationale: "Instructional response." },
    C: { text: "Terminate all imitation goals.", rationale: "Generalization target." },
    D: { text: "Punish errors on novel models.", rationale: "Reinforcement-forward." },
  }),
  bx("mod22-q36", "Witnessing peer receive reinforcement; learner later performs similar act:", "C", {
    A: { text: "Proves imitation without assessment.", rationale: "Possible observational learning—verify controlling variables." },
    B: { text: "Respondent only.", rationale: "Operant observational pathway." },
    C: { text: "Possible observational learning—document contingency contact and model dimensions.", rationale: "Requires functional analysis." },
    D: { text: "Negative punishment.", rationale: "Observational repertoire change." },
  }),
  bx("mod22-q37", "Model dimensions to document:", "A", {
    A: { text: "Which features of demonstration controlled learner reproduction (gesture, voice, sequence, etc.).", rationale: "Stimulus enhancement vs modeling." },
    B: { text: "Graph color only.", rationale: "Functional model analysis." },
    C: { text: "MO only.", rationale: "Modeled dimension fidelity." },
    D: { text: "Nothing—accuracy sufficient.", rationale: "Fidelity logs required." },
  }),
  bx("mod22-q38", "Board stem: imitates therapist; fails with novel clinician:", "D", {
    A: { text: "Generalized imitation mastered.", rationale: "Novel model failure." },
    B: { text: "Delete imitation programming.", rationale: "Generalization work needed." },
    C: { text: "Respondent extinction.", rationale: "Expand exemplars; probe generalization." },
    D: { text: "Expand exemplar diversity; probe generalized imitation before mastery claim.", rationale: "Classic board item." },
  }),
  bx("mod22-q39", "Reinforcement contact during observational learning:", "B", {
    A: { text: "Irrelevant—observation alone always sufficient.", rationale: "Contingency contact mediates change." },
    B: { text: "Learner must contact or witness relevant contingencies for observational learning claims.", rationale: "Functional requirement." },
    C: { text: "Punishment only.", rationale: "Reinforcement pathways." },
    D: { text: "Automatic.", rationale: "Documented contingencies." },
  }),
  bx("mod22-q40", "Latency jitter across sessions:", "C", {
    A: { text: "Delete imitation goals.", rationale: "Latency guides programming." },
    B: { text: "Proof mastery.", rationale: "Monitor fluency trend." },
    C: { text: "Inform programming—not reason to abandon goals or skip fidelity documentation.", rationale: "Measurement interpretation." },
    D: { text: "IOA obsolete.", rationale: "Fluency metric." },
  }),
  bx("mod22-q41", "Imitation chain workflow—FIRST step:", "A", {
    A: { text: "Assess baseline imitation and developmental constraints.", rationale: "Workflow order." },
    B: { text: "Claim generalized mastery.", rationale: "Assessment first." },
    C: { text: "Use maximum coercion.", rationale: "Ethical sequence." },
    D: { text: "Skip model fidelity.", rationale: "Documentation required." },
  }),
  bx("mod22-q42", "Discriminating model from nondemonstrative prompt:", "D", {
    A: { text: "Identical.", rationale: "Model = observable demonstration." },
    B: { text: "Prompt always stronger.", rationale: "Different antecedent functions." },
    C: { text: "Model never used in ABA.", rationale: "Core teaching procedure." },
    D: { text: "Model is demonstration topography; prompt may supplement but fidelity must show what controlled behavior.", rationale: "Measurement discrimination." },
  }),
  bx("mod22-q43", "Ethical imitation supervision prioritizes:", "B", {
    A: { text: "Intensity escalation until match perfect.", rationale: "Reinforcement-forward shaping." },
    B: { text: "Assent, consent for media, humane error correction, transparent fidelity logs.", rationale: "Domain E bundle." },
    C: { text: "Hiding scripted model use.", rationale: "Transparency." },
    D: { text: "Single-model mastery claims.", rationale: "Generalization probes." },
  }),
  bx("mod22-q44", "Generalized imitation is a measurable:", "C", {
    A: { text: "Assumption after one model.", rationale: "Domain F target with probes." },
    B: { text: "Respondent reflex.", rationale: "Operant repertoire." },
    C: { text: "Domain F target requiring generalization probe evidence across exemplars.", rationale: "Cooper framing." },
    D: { text: "MO subtype.", rationale: "Imitation class." },
  }),
  bx("mod22-q45", "Video model with assent withdrawal mid-session:", "A", {
    A: { text: "Honor assent withdrawal—stop or modify media modeling per ethical standards.", rationale: "Assent-sensitive pacing." },
    B: { text: "Continue for data collection.", rationale: "Assent must be honored." },
    C: { text: "Punish withdrawal.", rationale: "Ethical violation." },
    D: { text: "Skip documentation.", rationale: "Report assent status." },
  }),
  bx("mod22-q46", "Supervisor asks for model dimension logs when claiming imitation mastery:", "D", {
    A: { text: "Unreasonable.", rationale: "Standard Domain C request." },
    B: { text: "Replaces IOA.", rationale: "Fidelity documentation." },
    C: { text: "Only for research.", rationale: "Clinical standard." },
    D: { text: "Appropriate—fidelity + generalization probes support imitation claims.", rationale: "Supervisory standard." },
  }),
  bx("mod22-q47", "BCBA stem: accuracy high with therapist model; fails novel peer model:", "C", {
    A: { text: "Generalized imitation verified.", rationale: "Peer is novel exemplar." },
    B: { text: "Observational learning impossible.", rationale: "Generalization programming." },
    C: { text: "Limited generalization—program exemplar diversity and re-probe.", rationale: "Board logic." },
    D: { text: "Respondent elicitation only.", rationale: "Operant imitation." },
  }),
  bx("mod22-q48", "Awkward motor approximation during imitation shaping:", "B", {
    A: { text: "Punish immediately.", rationale: "Reinforce approximation." },
    B: { text: "Reinforce approximation; shape toward terminal topography humanely.", rationale: "Cooper shaping ethic." },
    C: { text: "Terminate program.", rationale: "Developmental shaping." },
    D: { text: "Escalate model intensity coercively.", rationale: "Reinforcement-forward." },
  }),
  bx("mod22-q49", "Observational learning versus imitation during live demo:", "A", {
    A: { text: "Imitation requires learner echo of model; observational learning may occur without immediate echo if repertoire changes from witnessed contingencies.", rationale: "Related but distinguishable." },
    B: { text: "Identical always.", rationale: "Timing and measurement differ." },
    C: { text: "Neither uses models.", rationale: "Both involve models." },
    D: { text: "Only punishment involved.", rationale: "Reinforcement-mediated." },
  }),
  bx("mod22-q50", "Closing Chapter 21 principle:", "B", {
    A: { text: "One model proves generalized imitation.", rationale: "Probe diversity required." },
    B: { text: "Document formal similarity, model fidelity, latency, and generalized probes; use reinforcement-forward ethical shaping.", rationale: "Chapter 21 integration." },
    C: { text: "Fidelity logs optional.", rationale: "Core documentation." },
    D: { text: "Coercion acceptable for minor targets.", rationale: "Domain E violation." },
  }),
];
