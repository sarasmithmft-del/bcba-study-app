import type { BDSQuestion } from "@/lib/content-types";

/** Relational Frame Theory (RFT) + Acceptance and Commitment (ACT) depth. */

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
    tcoDomain: "B",
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_38_RFT_ACT_QUIZ_BANK: BDSQuestion[] = [
  bx("mod43-q1", "Relational Frame Theory (RFT) is BEST described as:", "B", {
    A: { text: "A punishment procedure.", rationale: "RFT is a theory of language and cognition, not a procedure.", },
    B: { text: "A contemporary behavior-analytic account of language and cognition that emphasizes DERIVED (untrained) relational responding — the human capacity to respond to stimuli based on trained relations to other stimuli, generating novel relations without direct training.", rationale: "Correct — RFT's central account of language + cognition via derived relations.", },
    C: { text: "The same as Skinner's verbal behavior — no differences.", rationale: "RFT extends Skinner's account with derived relational responding.", },
    D: { text: "An FA protocol.", rationale: "RFT is a theory, not an FA.", },
  }),
  bx("mod43-q2", "MUTUAL ENTAILMENT is BEST defined as:", "A", {
    A: { text: "Training A relates to B in one direction (e.g., A is the same as B) yields the derived relation B relates to A in the reverse direction (B is the same as A) WITHOUT direct training.", rationale: "Correct — mutual entailment is the bidirectional derivation of a single relation.", },
    B: { text: "Reinforcement of an operant.", rationale: "Distinct concept.", },
    C: { text: "Punishment of a response.", rationale: "Distinct concept.", },
    D: { text: "Direct training of every relation.", rationale: "Mutual entailment is DERIVED, not directly trained.", },
  }),
  bx("mod43-q3", "COMBINATORIAL ENTAILMENT is BEST defined as:", "C", {
    A: { text: "Reinforcement of correct responses.", rationale: "Distinct concept.", },
    B: { text: "Direct training of stimulus A to stimulus C.", rationale: "Combinatorial entailment is DERIVED, not directly trained.", },
    C: { text: "Training A relates to B and B relates to C yields the derived relations between A and C (and C and A) WITHOUT direct training between A and C — extends mutual entailment to chains of relations.", rationale: "Correct — combinatorial entailment derives relations across chains.", },
    D: { text: "IOA calculation.", rationale: "Distinct concept.", },
  }),
  bx("mod43-q4", "TRANSFORMATION OF STIMULUS FUNCTION is BEST described as:", "D", {
    A: { text: "Punishing stimuli lose their aversive function.", rationale: "Overstates the concept.", },
    B: { text: "Reinforcement always transfers between stimuli.", rationale: "Overstates.", },
    C: { text: "Only works with edibles.", rationale: "Applies broadly.", },
    D: { text: "Psychological/behavioral FUNCTIONS of one stimulus (e.g., reinforcing, aversive, evocative, discriminative) can transfer to related stimuli through the derived relations they participate in — for example, if A is trained to be MORE THAN B, and B is a mild reinforcer, A may take on stronger reinforcing function without direct training.", rationale: "Correct — transformation of stimulus function is a key RFT prediction extending the reach of directly-trained functions to derived-related stimuli.", },
  }),
  bx("mod43-q5", "Common RELATIONAL FRAMES include:", "A", {
    A: { text: "Coordination (same/similar), Opposition, Distinction, Comparison (more/less), Hierarchical (member/class), Temporal (before/after), Spatial (near/far), Causal (because/therefore), and Deictic (I/YOU, HERE/THERE, NOW/THEN) perspective-taking frames.", rationale: "Correct — common RFT frames categorizing relations humans learn to respond to.", },
    B: { text: "Only 'same' relations.", rationale: "Understates the range.", },
    C: { text: "Only 'opposite' relations.", rationale: "Understates the range.", },
    D: { text: "There are no specific frames in RFT.", rationale: "Frames are core to the theory.", },
  }),
  bx("mod43-q6", "The DEICTIC frames (I/YOU, HERE/THERE, NOW/THEN) are BEST characterized as:", "B", {
    A: { text: "Reinforcement schedules.", rationale: "Distinct concept.", },
    B: { text: "Perspective-taking relational frames critical to complex human cognition, empathy, and theory of mind — impaired deictic responding is associated with autism-spectrum profiles in some RFT-informed literature.", rationale: "Correct — deictic frames underlie perspective-taking and are widely studied in RFT + autism intervention.", },
    C: { text: "Punishment procedures.", rationale: "Distinct concept.", },
    D: { text: "Only in adult clients.", rationale: "Deictic frames are developed across the lifespan.", },
  }),
  bx("mod43-q7", "Acceptance and Commitment Therapy (ACT) is BEST characterized as:", "C", {
    A: { text: "A purely cognitive-behavioral therapy (CBT).", rationale: "ACT is not classical CBT; it is behavior-analytic + contextual.", },
    B: { text: "Psychoanalysis.", rationale: "Distinct.", },
    C: { text: "A behavior-analytic + contextual psychotherapy grounded in RFT that targets PSYCHOLOGICAL FLEXIBILITY through six processes: acceptance, defusion, present-moment awareness, self-as-context, values, and committed action (the 'hexaflex').", rationale: "Correct — ACT is the RFT-grounded contextual therapy with the six-process hexaflex.", },
    D: { text: "An FA protocol.", rationale: "Distinct.", },
  }),
  bx("mod43-q8", "The ACT 'HEXAFLEX' includes which six processes?", "A", {
    A: { text: "Acceptance, Defusion, Present-Moment Awareness, Self-as-Context, Values, and Committed Action — organized around psychological flexibility as the core outcome.", rationale: "Correct — the six ACT hexaflex processes.", },
    B: { text: "Reinforcement, Punishment, Extinction, Discrimination, Generalization, Maintenance.", rationale: "Those are behavior-analytic processes but not the ACT hexaflex.", },
    C: { text: "Antecedent, Behavior, Consequence, Motivating Operation, Setting Event, Discriminative Stimulus.", rationale: "That's ABA analysis, not the hexaflex.", },
    D: { text: "There is no hexaflex in ACT.", rationale: "The hexaflex is the ACT model.", },
  }),
  bx("mod43-q9", "COGNITIVE DEFUSION in ACT is BEST described as:", "B", {
    A: { text: "Stopping thoughts.", rationale: "Defusion does not aim to stop thoughts.", },
    B: { text: "Techniques that reduce the LITERALITY of thoughts (e.g., 'I'm having the thought that I'm a failure' rather than 'I'm a failure') so that thoughts have less behavioral control — thoughts are experienced as verbal events rather than as literal truths that must be obeyed.", rationale: "Correct — defusion reduces literal stimulus control of thoughts.", },
    C: { text: "Suppressing emotions.", rationale: "That is experiential avoidance; ACT targets the opposite.", },
    D: { text: "Punishing thinking.", rationale: "Not the concept.", },
  }),
  bx("mod43-q10", "VALUES clarification in ACT refers to:", "D", {
    A: { text: "Discovering objectively true values.", rationale: "Values are chosen, not objectively true.", },
    B: { text: "Setting SMART goals.", rationale: "Goals and values are distinct in ACT.", },
    C: { text: "Reinforcement schedules.", rationale: "Distinct.", },
    D: { text: "The client identifies chosen life directions across domains (relationships, work, health, community, growth) — values are ongoing directions that guide committed action, distinct from finite goals which can be achieved and completed.", rationale: "Correct — values are ongoing chosen directions; goals are finite waypoints within those directions.", },
  }),
  bx("mod43-q11", "The BEST relationship between RFT and ACT is:", "A", {
    A: { text: "RFT is the basic-science account of language + cognition that ACT applies clinically — ACT's targeting of cognitive fusion, experiential avoidance, and values-based action is grounded in RFT's account of derived relational responding and transformation of stimulus function.", rationale: "Correct — ACT is the RFT-grounded clinical application; ACT interventions rest on RFT principles.", },
    B: { text: "They are unrelated.", rationale: "ACT is grounded in RFT.", },
    C: { text: "ACT preceded RFT.", rationale: "RFT is the theoretical basis.", },
    D: { text: "They contradict each other.", rationale: "They are integrated frameworks.", },
  }),
  bx("mod43-q12", "For BCBAs, ACT can be applied to which of the following (within scope of competence + training)?", "C", {
    A: { text: "Only children.", rationale: "Understates applicability.", },
    B: { text: "Only for staff supervision, never clients.", rationale: "Understates applicability.", },
    C: { text: "Both client work (within scope + training + appropriate consent + supervision) AND organizational/supervisory contexts (e.g., supervisee burnout, values-based supervision, workplace wellbeing) — application must always be within demonstrated scope of competence + appropriate training + consent + supervision.", rationale: "Correct — ACT applications span client + organizational contexts within scope + training + consent constraints.", },
    D: { text: "ACT cannot be used by BCBAs.", rationale: "BCBAs can use ACT within scope + training + supervision.", },
  }),
  bx("mod43-q13", "A common BCBA-relevant ACT application is:", "D", {
    A: { text: "Punishing staff for burnout.", rationale: "Contradicts ACT + ethical supervision.", },
    B: { text: "Ignoring supervisee stress.", rationale: "Contradicts ACT.", },
    C: { text: "Suppressing all emotional expression.", rationale: "Contradicts ACT — ACT targets flexibility, not suppression.", },
    D: { text: "Values-based supervision — helping supervisees clarify their professional values, defuse from perfectionist / burnout thoughts, and take committed action aligned with those values, within supervision + wellbeing scope. Includes trauma-informed care principles.", rationale: "Correct — values-based supervision is a widely-cited BCBA-relevant ACT application.", },
  }),
  bx("mod43-q14", "The concept of PSYCHOLOGICAL FLEXIBILITY in ACT is BEST described as:", "B", {
    A: { text: "Being flexible about your schedule.", rationale: "Understates the concept.", },
    B: { text: "The capacity to contact the present moment fully as a conscious human being and, based on the situation, persist or change behavior in the service of chosen values — the meta-outcome of the six hexaflex processes working together.", rationale: "Correct — psychological flexibility is the ACT umbrella outcome across the six hexaflex processes.", },
    C: { text: "Physical flexibility only.", rationale: "Distinct concept.", },
    D: { text: "The absence of thoughts.", rationale: "ACT does not aim for thoughtlessness.", },
  }),
  bx("mod43-q15", "For BCBA exam prep, the KEY things to know about RFT + ACT are:", "A", {
    A: { text: "(1) RFT's account of derived relational responding (mutual + combinatorial entailment + transformation of stimulus function) as an extension of Skinner's VB. (2) The common relational frames including deictic frames for perspective-taking. (3) ACT's grounding in RFT and its six-process hexaflex (acceptance, defusion, present-moment awareness, self-as-context, values, committed action). (4) The distinction between values (ongoing directions) and goals (finite waypoints). (5) BCBA-scope application within training + consent + supervision.", rationale: "Correct — these five areas cover the essential exam-relevant content for RFT + ACT.", },
    B: { text: "Only ABA basics — RFT + ACT are not exam-relevant.", rationale: "RFT + ACT is testable material in Cooper Ch 20 and Domain B.", },
    C: { text: "Only punishment procedures.", rationale: "Wrong content.", },
    D: { text: "Only IQ scores.", rationale: "Wrong content.", },
  }),
];
