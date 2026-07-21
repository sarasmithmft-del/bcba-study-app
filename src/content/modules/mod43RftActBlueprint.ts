import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_38_RFT_ACT_QUIZ_BANK } from "@/content/modules/quiz/chapter38RftAcTQuizBank";

/**
 * RFT / ACT Depth — beyond Cooper Chapter 20.
 *
 * Extends the emergent-relations coverage in mod20 (Chapter 19 Equivalence-
 * Based Instruction) and mod21 (Chapter 20 Nonequivalence Relations) with
 * (a) RFT vocabulary (mutual + combinatorial entailment, transformation of
 * stimulus function, common frames including deictic), and (b) ACT clinical
 * application (hexaflex, cognitive defusion, values, psychological
 * flexibility, BCBA-scope applications including values-based supervision).
 */

export const MOD43_BLUEPRINT: ExtensionBlueprint = {
  id: "mod43",
  chapterNumber: 38,
  activityPrefix: 4300,
  title: "RFT + ACT Depth — Derived Relations, Hexaflex, Values-Based Practice",
  codexHeading: "READING — Relational Frame Theory + Acceptance & Commitment Therapy (extends Cooper Ch. 20)",
  codexIntro: `Cooper Chapter 20 introduces equivalence-based instruction and nonequivalence relations at a foundational level. Contemporary practice increasingly draws on Relational Frame Theory (RFT) for a full account of derived relational responding, and on Acceptance and Commitment Therapy (ACT) — grounded in RFT — for values-based clinical + supervisory work. This module fills the depth gap.

Relational Frame Theory (RFT) is a contemporary behavior-analytic account of language and cognition that emphasizes DERIVED (untrained) relational responding — the human capacity to respond to stimuli based on trained relations to other stimuli, generating novel relations without direct training. This extends Skinner's verbal-behavior account by explaining how children with modest direct training can produce vast numbers of untrained relations across their lifespan.

Three core RFT processes: MUTUAL ENTAILMENT — training A relates to B in one direction (A = B) yields the derived reverse relation (B = A) without direct training. COMBINATORIAL ENTAILMENT — training A = B and B = C yields derived A ↔ C relations across the chain without direct training between A and C. TRANSFORMATION OF STIMULUS FUNCTION — psychological/behavioral functions (reinforcing, aversive, evocative, discriminative) can transfer to related stimuli through the derived relations they participate in; for example, if A is trained to be MORE THAN B and B is a mild reinforcer, A may take on stronger reinforcing function without direct training.

Common relational frames. Human language + cognition rests on families of relations: COORDINATION (same/similar), OPPOSITION, DISTINCTION, COMPARISON (more/less), HIERARCHICAL (member/class, part/whole), TEMPORAL (before/after), SPATIAL (near/far), CAUSAL (because/therefore), and DEICTIC (I/YOU, HERE/THERE, NOW/THEN). Deictic frames are particularly consequential — they underlie perspective-taking, empathy, and theory-of-mind repertoires. Impaired deictic responding is associated with autism-spectrum profiles in RFT-informed literature and is a target of contemporary intervention.

Acceptance and Commitment Therapy (ACT) is a behavior-analytic + contextual psychotherapy grounded in RFT that targets PSYCHOLOGICAL FLEXIBILITY — the capacity to contact the present moment fully and, based on the situation, persist or change behavior in the service of chosen values. ACT is not classical CBT; it is contextual and RFT-grounded. Its six-process HEXAFLEX includes: ACCEPTANCE (of private events — thoughts, feelings, sensations); DEFUSION (reducing the literal stimulus control of thoughts — 'I'm having the thought that I'm a failure' rather than 'I'm a failure'); PRESENT-MOMENT AWARENESS (contact with what is here-and-now); SELF-AS-CONTEXT (perspective-taking self, the observer of experience); VALUES (chosen ongoing life directions across domains); and COMMITTED ACTION (behavior-analytic action patterns aligned with values).

Values vs. goals. Values are ongoing chosen directions — 'being a supportive parent,' 'being a curious clinician.' Goals are finite waypoints within those directions — 'finish this training,' 'complete this program.' Goals can be achieved and completed; values cannot. Values guide committed action across a lifetime.

The relationship between RFT and ACT is direct: ACT's clinical targeting of cognitive fusion (excessive literal control by verbal stimuli), experiential avoidance (rigid attempts to escape private events), and values-based action rests on RFT's account of derived relational responding and transformation of stimulus function. Fusion becomes especially harmful when transformation of stimulus function makes a private verbal event ('I'm a failure') acquire behavioral control that shapes long-term action patterns; defusion techniques reduce that literal control by changing the relational context in which the verbal event occurs.

BCBA-scope applications. Within scope of competence + appropriate training + consent + supervision, BCBAs apply ACT in both client work (e.g., emotion regulation programming with older learners) and organizational/supervisory contexts. VALUES-BASED SUPERVISION helps supervisees clarify professional values, defuse from perfectionist or burnout thoughts, and take committed action aligned with those values — particularly relevant in the context of trauma-informed care and workplace wellbeing. Application must always sit within demonstrated scope of competence, appropriate training, informed consent, and supervision.

For BCBA exam prep, the key content: (1) RFT vocabulary — mutual entailment, combinatorial entailment, transformation of stimulus function — as an extension of Skinner's VB. (2) Common relational frames including deictic frames for perspective-taking. (3) ACT's grounding in RFT + the six-process hexaflex. (4) Values vs. goals. (5) BCBA-scope applications within training + consent + supervision.`,
  footnotes: {
    ch38_1: { label: "[1]", lines: ["Hayes, S. C., Barnes-Holmes, D., & Roche, B. (Eds.). (2001). Relational Frame Theory. New York: Plenum. Foundational RFT text."] },
    ch38_2: { label: "[2]", lines: ["Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2012). Acceptance and Commitment Therapy (2nd ed.). New York: Guilford. Primary ACT clinical text."] },
    ch38_3: { label: "[3]", lines: ["Dixon, M. R., Hayes, S. C., & Belisle, J. (2020). Contemporary reviews of RFT applications for BCBAs."] },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch38_1" },
    { afterSentenceIndex: 1, ref: "ch38_1" },
    { afterSentenceIndex: 2, ref: "ch38_1" },
    { afterSentenceIndex: 3, ref: "ch38_1" },
    { afterSentenceIndex: 4, ref: "ch38_2" },
    { afterSentenceIndex: 5, ref: "ch38_2" },
    { afterSentenceIndex: 6, ref: "ch38_2" },
    { afterSentenceIndex: 7, ref: "ch38_3" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — RFT + ACT recap",
    intro: "RFT explains derived relations. ACT applies RFT to values-based clinical + supervisory work.",
    chunks: [
      { subtitle: "RFT core processes", segments: [{ type: "text", text: "Mutual entailment (A→B trained yields B→A). Combinatorial entailment (A→B + B→C yields A↔C). Transformation of stimulus function (functions transfer via derived relations)." }] },
      { subtitle: "Common relational frames", segments: [{ type: "text", text: "Coordination, Opposition, Distinction, Comparison, Hierarchical, Temporal, Spatial, Causal, Deictic (I/YOU, HERE/THERE, NOW/THEN — perspective-taking)." }] },
      { subtitle: "ACT hexaflex", segments: [{ type: "text", text: "Acceptance / Defusion / Present-moment / Self-as-context / Values / Committed action → psychological flexibility." }] },
      { subtitle: "Values vs. goals", segments: [{ type: "text", text: "Values = ongoing directions. Goals = finite waypoints. Values guide committed action across a lifetime." }] },
      { subtitle: "Defusion", segments: [{ type: "text", text: "Reduce literal stimulus control of thoughts — 'I'm having the thought that…' vs. 'I am…'." }] },
      { subtitle: "BCBA-scope applications", segments: [{ type: "text", text: "Client emotion-regulation programming + values-based supervision + workplace wellbeing — always within scope + training + consent + supervision." }] },
    ],
  },
  supplementalFootnotes: {
    ch38_v1: { label: "[V1]", lines: ["Mutual entailment — bidirectional derivation of a single trained relation."] },
    ch38_v2: { label: "[V2]", lines: ["Combinatorial entailment — derived relations across chains of trained relations."] },
    ch38_v3: { label: "[V3]", lines: ["Transformation of stimulus function — functions transfer to derived-related stimuli."] },
    ch38_v4: { label: "[V4]", lines: ["Deictic frames — perspective-taking frames (I/YOU, HERE/THERE, NOW/THEN)."] },
    ch38_v5: { label: "[V5]", lines: ["ACT hexaflex — acceptance, defusion, present-moment, self-as-context, values, committed action."] },
    ch38_v6: { label: "[V6]", lines: ["Psychological flexibility — capacity to contact present moment + act on chosen values."] },
    ch38_v7: { label: "[V7]", lines: ["Cognitive defusion — reduces literal stimulus control of verbal events."] },
    ch38_v8: { label: "[V8]", lines: ["Values vs. goals — values are ongoing directions; goals are finite waypoints."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — RFT + ACT",
    intro: "Core RFT + ACT terms with brief definitions.",
    entries: [
      { term: "Derived relational responding", definition: "Human capacity to respond to stimuli based on trained relations to other stimuli, generating novel untrained relations.", footnoteRef: "ch38_v1" },
      { term: "Mutual entailment", definition: "Training A relates to B in one direction yields the derived reverse relation B to A without direct training.", footnoteRef: "ch38_v1" },
      { term: "Combinatorial entailment", definition: "Training A relates to B and B to C yields derived relations between A and C across the chain without direct training.", footnoteRef: "ch38_v2" },
      { term: "Transformation of stimulus function", definition: "Psychological / behavioral functions transfer to related stimuli through the derived relations they participate in.", footnoteRef: "ch38_v3" },
      { term: "Deictic frames", definition: "Perspective-taking relational frames (I/YOU, HERE/THERE, NOW/THEN) — critical to empathy, theory of mind, and complex cognition.", footnoteRef: "ch38_v4" },
      { term: "ACT hexaflex", definition: "Six ACT processes — acceptance, defusion, present-moment awareness, self-as-context, values, committed action — targeting psychological flexibility.", footnoteRef: "ch38_v5" },
      { term: "Psychological flexibility", definition: "Capacity to contact the present moment fully and persist or change behavior in the service of chosen values.", footnoteRef: "ch38_v6" },
      { term: "Cognitive defusion", definition: "Techniques that reduce the literal stimulus control of thoughts, so they have less behavioral control.", footnoteRef: "ch38_v7" },
      { term: "Values", definition: "Chosen ongoing life directions across domains — distinct from finite goals.", footnoteRef: "ch38_v8" },
      { term: "Committed action", definition: "Behavior-analytic action patterns aligned with chosen values, sustained over time.", footnoteRef: "ch38_v5" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — RFT + ACT",
    intro: "Two frameworks + their clinical integration.",
    concepts: [
      { title: "Three RFT processes", segments: [{ type: "text", text: "Mutual entailment + combinatorial entailment + transformation of stimulus function — how derived relations generate untrained behavior " }, { type: "footnote", ref: "ch38_v1" }, { type: "footnote", ref: "ch38_v2" }, { type: "footnote", ref: "ch38_v3" }, { type: "text", text: "." }] },
      { title: "Relational frames catalog", segments: [{ type: "text", text: "Coordination / Opposition / Distinction / Comparison / Hierarchical / Temporal / Spatial / Causal / Deictic — deictic frames underlie perspective-taking " }, { type: "footnote", ref: "ch38_v4" }, { type: "text", text: "." }] },
      { title: "ACT hexaflex", segments: [{ type: "text", text: "Acceptance / defusion / present-moment / self-as-context / values / committed action → psychological flexibility " }, { type: "footnote", ref: "ch38_v5" }, { type: "footnote", ref: "ch38_v6" }, { type: "text", text: "." }] },
      { title: "Values vs. goals + defusion", segments: [{ type: "text", text: "Values = ongoing directions; goals = finite waypoints. Defusion reduces literal stimulus control of verbal events " }, { type: "footnote", ref: "ch38_v7" }, { type: "footnote", ref: "ch38_v8" }, { type: "text", text: "." }] },
      { title: "BCBA-scope applications", segments: [{ type: "text", text: "Client emotion-regulation programming + values-based supervision + workplace wellbeing — within scope + training + consent + supervision" }, { type: "text", text: "." }] },
    ],
  },
  vocabularyMatchInstructions: "Match each RFT/ACT scenario to the process or concept it BEST illustrates.",
  matchActivityInstructions: "Select the RFT/ACT concept that BEST fits each scenario.",
  chainActivityInstructions: "Sequence a values-based supervision session using ACT hexaflex processes.",
  mts: [
    { sample_stimulus: "Trainer teaches 'CAT = FELINE.' Learner immediately responds 'FELINE = CAT' without direct training.", comparison_options: ["Mutual entailment — bidirectional derivation of a single trained relation", "Punishment", "Extinction", "Reinforcement schedule"], correct_match: "Mutual entailment — bidirectional derivation of a single trained relation", error_feedback: "Bidirectional derivation of one trained relation is mutual entailment." },
    { sample_stimulus: "Learner is taught 'A > B' and 'B > C.' Learner then derives 'A > C' without direct training.", comparison_options: ["Combinatorial entailment across a chain", "Mutual entailment only", "Direct training", "Extinction"], correct_match: "Combinatorial entailment across a chain", error_feedback: "Derivation across chained relations is combinatorial entailment." },
    { sample_stimulus: "A student is told 'this new game is BETTER than your favorite game.' Without playing, the student wants to try it.", comparison_options: ["Transformation of stimulus function — reinforcing function transferred via comparison frame", "Mutual entailment only", "Punishment", "IOA"], correct_match: "Transformation of stimulus function — reinforcing function transferred via comparison frame", error_feedback: "Behavioral function transferred via derived comparison relation." },
    { sample_stimulus: "A perspective-taking exercise ('If you were in your friend's place, HERE and NOW, what would you notice?').", comparison_options: ["Deictic frames — I/YOU, HERE/THERE, NOW/THEN perspective-taking", "Combinatorial entailment only", "Reinforcement schedule", "Punishment"], correct_match: "Deictic frames — I/YOU, HERE/THERE, NOW/THEN perspective-taking", error_feedback: "Perspective-taking uses deictic frames." },
    { sample_stimulus: "A supervisee changes 'I am a failure' to 'I'm noticing the thought that I'm a failure.'", comparison_options: ["Cognitive defusion — reduces literal stimulus control of the thought", "Reinforcement of the thought", "Suppression", "Punishment"], correct_match: "Cognitive defusion — reduces literal stimulus control of the thought", error_feedback: "Reformulating verbal events reduces their literal control — defusion." },
    { sample_stimulus: "A supervisee identifies 'being a curious clinician' as an ongoing direction versus 'complete the certification' as a finite waypoint.", comparison_options: ["Values (ongoing directions) vs. goals (finite waypoints)", "Values and goals are identical", "Neither is important", "Reinforcement schedule"], correct_match: "Values (ongoing directions) vs. goals (finite waypoints)", error_feedback: "Values are ongoing; goals are finite waypoints within values." },
    { sample_stimulus: "A BCBA uses ACT-informed values-based conversations to support a burned-out supervisee (within scope + training + supervision).", comparison_options: ["Values-based supervision — appropriate ACT application within scope + training + supervision", "Not appropriate for BCBAs", "Requires no consent", "Punishment of burnout"], correct_match: "Values-based supervision — appropriate ACT application within scope + training + supervision", error_feedback: "Values-based supervision is a widely-cited BCBA-relevant ACT application within scope + training." },
    { sample_stimulus: "The meta-outcome across all six ACT hexaflex processes working together.", comparison_options: ["Psychological flexibility — contact present moment + persist or change behavior in service of values", "Absence of thoughts", "Physical flexibility", "Reinforcement schedule"], correct_match: "Psychological flexibility — contact present moment + persist or change behavior in service of values", error_feedback: "Psychological flexibility is the ACT umbrella outcome across the hexaflex." },
  ],
  chainTitle: "Values-based supervision session (ACT hexaflex)",
  chainFragments: [
    { id: "a", text: "Present-moment awareness — orient supervisee to what is here-and-now in their work + wellbeing, before any content." },
    { id: "b", text: "Acceptance + defusion — normalize difficult private events; reduce literal control of harsh self-talk ('I'm having the thought that…')." },
    { id: "c", text: "Values clarification — help supervisee articulate ongoing chosen professional directions (not just finite goals)." },
    { id: "d", text: "Committed action — plan behavior-analytic action patterns aligned with articulated values; within scope + training + consent + supervision guardrails." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Mutual entailment", back: "A→B trained yields B→A derived." },
    { front: "Combinatorial entailment", back: "A→B + B→C yields derived A↔C." },
    { front: "Transformation of stimulus function", back: "Functions transfer via derived relations." },
    { front: "Deictic frames", back: "I/YOU, HERE/THERE, NOW/THEN — perspective-taking." },
    { front: "ACT hexaflex", back: "Acceptance / Defusion / Present-moment / Self-as-context / Values / Committed action." },
    { front: "Psychological flexibility", back: "Contact present + persist/change behavior for chosen values." },
    { front: "Defusion", back: "Reduce literal stimulus control of thoughts." },
    { front: "Values vs. goals", back: "Values = ongoing directions; goals = finite waypoints." },
  ],
  worksheet: {
    title: "RFT + ACT identification",
    instructions: "Match each scenario to the RFT/ACT concept it illustrates.",
    scenario: "Scenario A — 'CAT = FELINE' trained yields 'FELINE = CAT' derived.",
    scenario_follow_up: "Scenario B — 'A > B' + 'B > C' yields 'A > C' derived.\n\nScenario C — 'BETTER than your favorite game' triggers wanting to try new game.\n\nScenario D — Perspective-taking exercise with I/YOU/HERE/THERE frames.\n\nScenario E — 'I'm noticing the thought that I'm a failure.'\n\nScenario F — 'Being a curious clinician' as ongoing direction vs. 'complete certification' as finite waypoint.\n\nScenario G — Values-based supervision with a burned-out supervisee.\n\nScenario H — Meta-outcome across the ACT hexaflex processes.",
    fields: [
      { id: "response_1", label: "A", options: ["Mutual entailment", "Combinatorial entailment", "Punishment"], correct: "Mutual entailment" },
      { id: "response_2", label: "B", options: ["Combinatorial entailment", "Mutual entailment only", "Extinction"], correct: "Combinatorial entailment" },
      { id: "response_3", label: "C", options: ["Transformation of stimulus function", "Mutual entailment only", "IOA"], correct: "Transformation of stimulus function" },
      { id: "response_4", label: "D", options: ["Deictic frames", "Combinatorial entailment", "Reinforcement schedule"], correct: "Deictic frames" },
      { id: "response_5", label: "E", options: ["Cognitive defusion", "Suppression", "Punishment"], correct: "Cognitive defusion" },
      { id: "response_6", label: "F", options: ["Values vs. goals distinction", "Values and goals identical", "Neither important"], correct: "Values vs. goals distinction" },
      { id: "response_7", label: "G", options: ["Values-based supervision — appropriate within scope + training + supervision", "Not appropriate for BCBAs", "Punishment of burnout"], correct: "Values-based supervision — appropriate within scope + training + supervision" },
      { id: "response_8", label: "H", options: ["Psychological flexibility", "Absence of thoughts", "Physical flexibility"], correct: "Psychological flexibility" },
    ],
    remediationLog: "Rebuild: three RFT processes (mutual/combinatorial/transformation) + frames catalog (esp. deictic) + ACT hexaflex + psychological flexibility + values vs. goals + BCBA-scope applications.",
  },
  bdsBank: CHAPTER_38_RFT_ACT_QUIZ_BANK,
};
