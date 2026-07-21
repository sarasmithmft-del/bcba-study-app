import type { BDSQuestion } from "@/lib/content-types";

/**
 * Domain H — Selecting & Implementing Interventions.
 *
 * Not a Cooper/Heron/Heward chapter. This bank targets the BACB 6th ed. TCO
 * Domain H task areas: social validity (goals/procedures/outcomes), context
 * and cultural responsiveness, function-matched procedure selection, least-
 * restrictive-alternative reasoning, positive-reinforcement priority, treatment
 * integrity monitoring, assent monitoring during implementation, and data-
 * based decision-making from FBA hypothesis through modification criteria.
 *
 * Verify current BACB Ethics Code + Compassionate/Trauma-Informed Care
 * literature before study-planning decisions — practice standards evolve.
 */

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
    tcoDomain: "H",
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_33_INTERVENTION_SELECTION_QUIZ_BANK: BDSQuestion[] = [
  bx(
    "mod38-q1",
    "Wolf (1978) proposed that social validity should be assessed on which THREE levels?",
    "C",
    {
      A: {
        text: "Antecedent, behavior, consequence.",
        rationale: "Those are the three-term contingency, not social-validity levels.",
      },
      B: {
        text: "Positive reinforcement, negative reinforcement, punishment.",
        rationale: "Consequence categories, not social-validity levels.",
      },
      C: {
        text: "Goals (are the targeted behaviors socially significant?), procedures (are the methods acceptable to consumers?), and outcomes (is the change meaningful in the natural environment?).",
        rationale: "Correct — Wolf's classic tripartite social-validity framework.",
      },
      D: {
        text: "Baseline, treatment, follow-up.",
        rationale: "Those are experimental phases, not social-validity levels.",
      },
    },
  ),
  bx(
    "mod38-q2",
    "A BCBA selects goals for a client without consulting the family or the client's own preferences. Which social-validity level is MOST directly compromised?",
    "A",
    {
      A: {
        text: "Social validity of GOALS — the significance of the targeted behaviors to the consumer was never established.",
        rationale: "Correct — goal-level social validity requires stakeholder input on whether targets are meaningful.",
      },
      B: {
        text: "Social validity of PROCEDURES only.",
        rationale: "Procedures social validity is separate; goal-selection is the primary miss.",
      },
      C: {
        text: "Social validity of OUTCOMES only.",
        rationale: "Outcomes validity comes later; goal-selection is the primary miss.",
      },
      D: {
        text: "None — social validity is optional.",
        rationale: "Social validity is required practice under contemporary standards.",
      },
    },
  ),
  bx(
    "mod38-q3",
    "An FBA identifies escape from academic demands as the function of a client's aggression. Which intervention BEST matches this function?",
    "B",
    {
      A: {
        text: "Provide edible reinforcers contingent on task completion.",
        rationale: "Tangible reinforcers do not directly address escape function; may work but is not function-matched.",
      },
      B: {
        text: "Functional Communication Training teaching the client to request a break, paired with demand fading and DRA for task engagement — matches escape function by providing an appropriate escape response.",
        rationale: "Correct — FCT with a mand for break directly addresses the escape function; combined with demand fading + DRA reinforces engagement and reduces escape motivation over time.",
      },
      C: {
        text: "Time-out from the room.",
        rationale: "Time-out from an escape-maintained context is likely to function as a reinforcer for the problem behavior — counterproductive.",
      },
      D: {
        text: "Physical restraint during aggression.",
        rationale: "Not function-matched and not least-restrictive.",
      },
    },
  ),
  bx(
    "mod38-q4",
    "An FBA identifies attention as the function of a client's disruptive behavior. Which intervention BEST matches this function?",
    "D",
    {
      A: {
        text: "Extinction alone with no replacement behavior.",
        rationale: "Extinction alone is not function-matched teaching; extinction bursts and no appropriate access to attention leave the learner without a viable replacement.",
      },
      B: {
        text: "Escape extinction (blocking removal from task).",
        rationale: "Escape extinction addresses a different function (escape), not attention.",
      },
      C: {
        text: "Tangible reinforcer during quiet periods.",
        rationale: "Not attention-matched; may compete but is not function-based.",
      },
      D: {
        text: "Non-contingent attention on a dense schedule + DRA for appropriate attention-seeking (e.g., FCT mand for attention) + planned extinction for the target problem behavior.",
        rationale: "Correct — NCR + DRA + extinction as a function-matched package for attention-maintained behavior.",
      },
    },
  ),
  bx(
    "mod38-q5",
    "An intervention team considers using a highly restrictive procedure as the first-line intervention for mild self-injurious behavior with clear escape function. What does the least-restrictive-alternative principle require?",
    "B",
    {
      A: {
        text: "Use the restrictive procedure immediately — severity is subjective.",
        rationale: "Least-restrictive requires escalation with justification, not immediate top-tier procedures.",
      },
      B: {
        text: "Attempt evidence-based, less-restrictive function-matched procedures first (e.g., FCT + demand fading + DRA); escalate only with documented failure of less-restrictive alternatives and consented rationale.",
        rationale: "Correct — the least-restrictive-alternative principle requires starting with the least intrusive evidence-based procedure that matches function, escalating only with documented justification.",
      },
      C: {
        text: "Any intervention is equally acceptable.",
        rationale: "Restrictiveness is an ethical dimension.",
      },
      D: {
        text: "Restrictive procedures are always prohibited.",
        rationale: "They may be appropriate with documented justification and consent, but are not first-line.",
      },
    },
  ),
  bx(
    "mod38-q6",
    "Positive-reinforcement-first is a Domain H priority. Which sequence BEST reflects it?",
    "C",
    {
      A: {
        text: "Punishment → NCR → DRA → extinction.",
        rationale: "Punishment first violates the priority.",
      },
      B: {
        text: "Extinction alone.",
        rationale: "Extinction alone omits reinforcement-based teaching.",
      },
      C: {
        text: "Antecedent modification + DRA/DRO for the replacement behavior first, with extinction of the problem behavior paired where safe; escalate to punishment-based procedures only with documented justification.",
        rationale: "Correct — positive-reinforcement-based procedures for the replacement behavior are prioritized; punishment is only escalated with justification.",
      },
      D: {
        text: "Restraint + time-out.",
        rationale: "Restrictive and not positive-reinforcement-first.",
      },
    },
  ),
  bx(
    "mod38-q7",
    "Which is the STRONGEST example of a treatment-integrity check?",
    "A",
    {
      A: {
        text: "A trained observer scores staff implementation of the DRA + extinction protocol using a checklist of required components, and computes percentage of steps implemented as designed across sessions.",
        rationale: "Correct — direct observation of implementation against a specified component checklist is the gold-standard integrity measure.",
      },
      B: {
        text: "Reviewing the client's session-note narrative.",
        rationale: "Notes provide some information but do not directly measure fidelity of procedure implementation.",
      },
      C: {
        text: "Asking staff whether they think they followed the protocol.",
        rationale: "Self-report is subject to bias; direct observation is needed for integrity.",
      },
      D: {
        text: "Reviewing only the outcome graph.",
        rationale: "Outcome data cannot distinguish 'protocol works' from 'protocol wasn't run as designed.'",
      },
    },
  ),
  bx(
    "mod38-q8",
    "A DRA program shows deteriorating outcomes after 6 weeks. Fidelity has NOT been assessed. What is the MOST important next step?",
    "B",
    {
      A: {
        text: "Immediately abandon DRA and switch to a punishment procedure.",
        rationale: "You cannot conclude DRA has failed without an integrity assessment — the deterioration may be drift, not a procedure failure.",
      },
      B: {
        text: "Conduct a treatment-integrity assessment (direct observation vs. component checklist) before making any procedure-change decision — you cannot determine whether DRA has failed vs. drifted without integrity data.",
        rationale: "Correct — data-based decision-making requires integrity data before concluding a procedure has failed.",
      },
      C: {
        text: "Increase reinforcement magnitude and hope for the best.",
        rationale: "Blind adjustment without integrity data is not data-based.",
      },
      D: {
        text: "Discharge the client.",
        rationale: "Discharge without diagnostic reassessment is not appropriate.",
      },
    },
  ),
  bx(
    "mod38-q9",
    "During implementation, a learner consistently pushes materials away, turns their body, and vocalizes 'no.' The team continues the session unchanged. Which Domain H concept is MOST directly violated?",
    "C",
    {
      A: {
        text: "Extinction burst tolerance.",
        rationale: "The signals are assent-withdrawal, not extinction burst.",
      },
      B: {
        text: "Reinforcement schedule integrity.",
        rationale: "Schedule integrity is a separate lever.",
      },
      C: {
        text: "Assent monitoring during implementation — the learner is signaling assent withdrawal; contemporary Domain H practice requires pausing, offering choices, adjusting procedures, or rescheduling rather than proceeding through the withdrawal.",
        rationale: "Correct — assent monitoring is a core contemporary Domain H expectation. Pushing through clear assent-withdrawal signals compromises both dignity and long-term outcomes.",
      },
      D: {
        text: "Baseline consistency.",
        rationale: "Baseline is a design concept, not assent.",
      },
    },
  ),
  bx(
    "mod38-q10",
    "Assent is DIFFERENT from consent in that assent:",
    "A",
    {
      A: {
        text: "Comes from the learner themselves (often nonverbally when the learner cannot provide legal consent), and is monitored moment-to-moment during implementation — not just at intake.",
        rationale: "Correct — assent is the learner's ongoing willingness to participate, communicated verbally or nonverbally; consent is the legal authorization from the guardian at intake.",
      },
      B: {
        text: "Is the same as legal consent from the guardian.",
        rationale: "They are distinct — consent is legal authorization, assent is learner willingness.",
      },
      C: {
        text: "Is only obtained once, at intake.",
        rationale: "Assent is ongoing, not one-time.",
      },
      D: {
        text: "Applies only to adult clients.",
        rationale: "Assent applies to all clients including those who cannot legally consent.",
      },
    },
  ),
  bx(
    "mod38-q11",
    "A team considers a treatment that has demonstrated efficacy in research but is culturally incongruent with the family's values (e.g., a specific behavioral practice that conflicts with the family's cultural or religious framework). What is the MOST appropriate response?",
    "B",
    {
      A: {
        text: "Implement it anyway; efficacy trumps preference.",
        rationale: "Efficacy alone is not sufficient; social validity + cultural responsiveness require stakeholder input on procedures.",
      },
      B: {
        text: "Engage the family in shared decision-making — present the evidence, explore acceptable alternatives that also target the function, and select the most function-matched procedure the family will actually implement with fidelity.",
        rationale: "Correct — cultural responsiveness + procedures-level social validity + realistic-integrity considerations converge on shared decision-making.",
      },
      C: {
        text: "Refuse to treat the family.",
        rationale: "Withdrawal-of-services is a last resort, not a first response to cultural incongruence.",
      },
      D: {
        text: "Change the goal to something the family prefers regardless of function.",
        rationale: "Function still matters; cultural responsiveness modifies procedures + goals collaboratively, not by abandoning behavior-analytic reasoning.",
      },
    },
  ),
  bx(
    "mod38-q12",
    "Which is the CLEAREST example of a Domain H context assessment done BEFORE selecting procedures?",
    "D",
    {
      A: {
        text: "Selecting the intervention that worked best in a published research study, without local considerations.",
        rationale: "Ignores context; violates Domain H.",
      },
      B: {
        text: "Basing procedure selection on billing codes.",
        rationale: "Billing is not clinical context.",
      },
      C: {
        text: "Copying the previous client's treatment package.",
        rationale: "Not individualized.",
      },
      D: {
        text: "Reviewing the client's home + school context, staff training capacity, cultural + language considerations, prior treatment history, medical/medication factors, and family goals BEFORE proposing a procedure — then selecting the function-matched procedure most likely to be implemented with integrity in that context.",
        rationale: "Correct — Domain H context assessment integrates ecology, capacity, culture, history, and function before procedure selection.",
      },
    },
  ),
  bx(
    "mod38-q13",
    "A team designs a token economy for a school setting but no staff are available to run it consistently. What is the primary Domain H concern?",
    "A",
    {
      A: {
        text: "Realistic-integrity mismatch — a procedure that cannot be implemented with integrity in the actual setting is unlikely to produce meaningful outcomes; select a procedure the available staff can run with fidelity.",
        rationale: "Correct — Domain H procedure selection weighs realistic integrity in the actual context, not just abstract efficacy.",
      },
      B: {
        text: "Token economies are always inappropriate.",
        rationale: "Token economies are widely used successfully; the issue is context-fit.",
      },
      C: {
        text: "The team should punish staff who don't run it.",
        rationale: "Punishment doesn't fix a design-context mismatch.",
      },
      D: {
        text: "Function doesn't matter.",
        rationale: "Function always matters.",
      },
    },
  ),
  bx(
    "mod38-q14",
    "Which is the BEST example of a data-based modification decision under Domain H?",
    "C",
    {
      A: {
        text: "Change the intervention because the supervisor 'has a feeling.'",
        rationale: "Not data-based.",
      },
      B: {
        text: "Never change the intervention regardless of data.",
        rationale: "Not responsive to data.",
      },
      C: {
        text: "Use pre-specified decision rules (e.g., 'if fewer than X% improvement across Y sessions, modify component Z') and modify only after verifying treatment integrity is intact.",
        rationale: "Correct — data-based decisions use pre-specified criteria + verified integrity before modification.",
      },
      D: {
        text: "Change the intervention every week regardless of data.",
        rationale: "Changing constantly prevents evaluating whether the procedure works.",
      },
    },
  ),
  bx(
    "mod38-q15",
    "In selecting a replacement behavior via Differential Reinforcement of Alternative behavior (DRA), the CRITICAL requirement is that the replacement:",
    "B",
    {
      A: {
        text: "Is topographically similar to the problem behavior.",
        rationale: "Topographic similarity is neither required nor sufficient.",
      },
      B: {
        text: "Serves the same function as the problem behavior (or, when function differs, provides efficient access to the reinforcer that was maintaining the problem behavior) and is at least as easy for the learner to perform.",
        rationale: "Correct — DRA requires functional equivalence + efficiency to compete successfully with the problem behavior.",
      },
      C: {
        text: "Is unrelated to function.",
        rationale: "Unrelated replacements do not compete for the maintaining reinforcer.",
      },
      D: {
        text: "Is harder to perform than the problem behavior.",
        rationale: "Harder = less likely to be emitted; violates efficiency requirement.",
      },
    },
  ),
  bx(
    "mod38-q16",
    "Trauma-informed and compassionate care in Domain H implementation MOST directly requires:",
    "A",
    {
      A: {
        text: "Screening for trauma history, avoiding procedures that could re-traumatize (e.g., forced physical prompts on learners with restraint history), collaborating with mental-health providers when indicated, monitoring assent, and prioritizing procedures that build predictability and safety.",
        rationale: "Correct — trauma-informed care in ABA integrates history screening, procedure adaptation, cross-discipline collaboration, and assent-first implementation.",
      },
      B: {
        text: "Using restrictive procedures more freely.",
        rationale: "Trauma-informed care generally reduces reliance on restrictive procedures.",
      },
      C: {
        text: "Ignoring trauma history entirely.",
        rationale: "Contradicts trauma-informed care.",
      },
      D: {
        text: "Removing all reinforcement.",
        rationale: "Reinforcement is essential and neutral to trauma-informed principles.",
      },
    },
  ),
  bx(
    "mod38-q17",
    "The 'goals' level of social validity is BEST assessed by:",
    "C",
    {
      A: {
        text: "Direct observation of session performance.",
        rationale: "That measures outcomes, not goal validity.",
      },
      B: {
        text: "Treatment-integrity checklists.",
        rationale: "That measures procedural fidelity.",
      },
      C: {
        text: "Stakeholder input (client, family, teachers, community members) on whether the targeted behaviors are meaningful and important within the natural environment.",
        rationale: "Correct — goal-level social validity is measured by stakeholder-relevance judgment, typically via surveys, interviews, or shared decision-making.",
      },
      D: {
        text: "IOA percentage.",
        rationale: "IOA is an inter-observer measurement statistic, not a social-validity index.",
      },
    },
  ),
  bx(
    "mod38-q18",
    "Which is the MOST accurate framing of Domain H under the current TCO?",
    "B",
    {
      A: {
        text: "It is only about writing behavior-intervention plans.",
        rationale: "It's broader — including selection, implementation, integrity, and modification.",
      },
      B: {
        text: "It covers Selecting AND Implementing interventions — including social validity, function-matched procedure selection, least-restrictive-alternative reasoning, treatment integrity, assent monitoring, cultural responsiveness, and data-based modification.",
        rationale: "Correct — Domain H spans procedure selection and implementation-fidelity + assent + modification.",
      },
      C: {
        text: "It is identical to Domain G.",
        rationale: "Domain G is 'Behavior-Change Procedures' (the procedures themselves); Domain H is about SELECTING + IMPLEMENTING those procedures in real contexts.",
      },
      D: {
        text: "It is only for adults.",
        rationale: "Domain H applies across the lifespan.",
      },
    },
  ),
  bx(
    "mod38-q19",
    "A BCBA designs an intervention that requires 4 hours of staff training. Only 1 hour is available in the current budget. Domain H reasoning suggests:",
    "D",
    {
      A: {
        text: "Skip training; run the procedure anyway.",
        rationale: "Runs with low integrity; likely to fail.",
      },
      B: {
        text: "Punish staff for low performance.",
        rationale: "Cannot punish inadequate training out of a design-context mismatch.",
      },
      C: {
        text: "Choose the most complex procedure regardless of fit.",
        rationale: "Complexity + inadequate training predicts poor integrity.",
      },
      D: {
        text: "Redesign to a function-matched procedure that can be trained + implemented with integrity in the available capacity — OR advocate for expanded training resources before implementation.",
        rationale: "Correct — Domain H realistic-integrity reasoning requires matching procedure complexity to training + implementation capacity.",
      },
    },
  ),
  bx(
    "mod38-q20",
    "Which pair BEST illustrates the difference between Domain G and Domain H?",
    "A",
    {
      A: {
        text: "Domain G = knowing HOW extinction works (definition, side effects, procedure). Domain H = deciding WHETHER and HOW to implement extinction in this specific client's context, monitoring assent + integrity, and modifying based on data.",
        rationale: "Correct — Domain G is procedural knowledge; Domain H is selection + implementation + integrity + modification decision-making.",
      },
      B: {
        text: "Domain G and Domain H are identical.",
        rationale: "They are distinct in the TCO.",
      },
      C: {
        text: "Domain G is ethics; Domain H is measurement.",
        rationale: "Wrong domains — E is Ethics, C is Measurement.",
      },
      D: {
        text: "Domain G is supervision; Domain H is assessment.",
        rationale: "Wrong domains — I is Supervision, F is Behavior Assessment.",
      },
    },
  ),
  bx(
    "mod38-q21",
    "Sustainability of intervention effects in the natural environment is MOST related to which social-validity level?",
    "D",
    {
      A: {
        text: "Goals only.",
        rationale: "Goals validity precedes intervention.",
      },
      B: {
        text: "Procedures only.",
        rationale: "Procedures validity is about acceptability, not natural-environment persistence.",
      },
      C: {
        text: "Baseline validity.",
        rationale: "Not a social-validity level.",
      },
      D: {
        text: "Outcomes — meaningful and durable change in the natural environment (including caregivers' judgment of everyday improvement).",
        rationale: "Correct — outcome-level social validity captures meaningful, durable improvement in the natural environment.",
      },
    },
  ),
  bx(
    "mod38-q22",
    "Which is a common Domain H error made by early-career BCBAs?",
    "A",
    {
      A: {
        text: "Selecting the procedure they know best rather than the procedure that matches the function AND context — an availability-heuristic bias that violates function-matched selection.",
        rationale: "Correct — early-career availability bias produces procedure-mismatch; the fix is deliberate function-matching + context assessment.",
      },
      B: {
        text: "Considering function too carefully.",
        rationale: "That is a strength, not a deficit.",
      },
      C: {
        text: "Consulting stakeholders too often.",
        rationale: "Stakeholder consultation is required, not excessive.",
      },
      D: {
        text: "Running treatment-integrity checks too often.",
        rationale: "Integrity checks are protective, not a deficit.",
      },
    },
  ),
  bx(
    "mod38-q23",
    "Treatment drift is BEST described as:",
    "B",
    {
      A: {
        text: "Random improvement in the target behavior.",
        rationale: "That's spontaneous improvement, not drift.",
      },
      B: {
        text: "Gradual, unplanned deviation of procedure implementation from the written protocol — component steps skipped, timing altered, reinforcement schedules unintentionally changed — that undermines outcomes without a documented decision to modify.",
        rationale: "Correct — drift is unplanned procedural deviation from protocol.",
      },
      C: {
        text: "Purposeful data-based modification.",
        rationale: "That is planned modification, not drift.",
      },
      D: {
        text: "A form of extinction.",
        rationale: "Drift is not a procedure category.",
      },
    },
  ),
  bx(
    "mod38-q24",
    "Which is the MOST accurate statement about assent-withdrawal signals?",
    "C",
    {
      A: {
        text: "Only verbal 'no' counts as assent withdrawal.",
        rationale: "Assent withdrawal includes many nonverbal signals for learners who don't communicate verbally.",
      },
      B: {
        text: "Assent withdrawal should be ignored to build tolerance.",
        rationale: "Contradicts current assent-monitoring practice.",
      },
      C: {
        text: "Assent-withdrawal signals include verbal refusal, pushing materials away, turning away, walking away, crying, aggression, self-injury, and any communicative-form the learner uses to signal 'I don't want to continue' — the team's responsibility is to pause, offer choices/adjustments, and only continue if genuine assent is re-established.",
        rationale: "Correct — assent-withdrawal is multimodal; the response is pause + offer + re-establish, not push through.",
      },
      D: {
        text: "Assent applies only to adults.",
        rationale: "Assent applies across ages and communication modalities.",
      },
    },
  ),
  bx(
    "mod38-q25",
    "Coach-delivered vs. protocol-only vs. minimal training — which BEST supports treatment integrity over time?",
    "C",
    {
      A: {
        text: "Protocol-only, with no coaching.",
        rationale: "Written protocol without coaching typically produces poor initial integrity.",
      },
      B: {
        text: "Minimal training.",
        rationale: "Minimal training predicts drift.",
      },
      C: {
        text: "Coach-delivered training using BST (Domain I overlap: instruction → modeling → rehearsal → feedback → mastery) with ongoing performance-monitoring visits and refresher coaching when drift is detected.",
        rationale: "Correct — BST-based coaching + monitoring + refreshers sustain treatment integrity over time; overlaps with Domain I personnel-management practice.",
      },
      D: {
        text: "No training at all.",
        rationale: "No training produces near-zero integrity.",
      },
    },
  ),
  bx(
    "mod38-q26",
    "When the FBA identifies AUTOMATIC (sensory) reinforcement, which procedure category is MOST typically function-matched?",
    "A",
    {
      A: {
        text: "Antecedent modification + matched-stimulation reinforcers or noncontingent access to sensory alternatives + response blocking + DRO/DRA — automatic reinforcement typically requires competing stimulation because the reinforcer is intrinsic and cannot be withheld socially.",
        rationale: "Correct — automatic function requires competing/matched stimulation because the reinforcer is intrinsic; social extinction alone does not work.",
      },
      B: {
        text: "Social attention extinction only.",
        rationale: "Attention extinction addresses a different function.",
      },
      C: {
        text: "Escape extinction only.",
        rationale: "Escape extinction addresses a different function.",
      },
      D: {
        text: "No intervention needed.",
        rationale: "Automatic-function problem behavior often needs intervention.",
      },
    },
  ),
  bx(
    "mod38-q27",
    "Which is the STRONGEST evidence that a behavior-change plan needs modification?",
    "C",
    {
      A: {
        text: "One session of dips.",
        rationale: "Single-session variance is expected; not sufficient for modification.",
      },
      B: {
        text: "The supervisor's mood.",
        rationale: "Not evidence.",
      },
      C: {
        text: "Treatment-integrity data confirm the plan is being implemented as designed AND multiple sessions across a defined window show the target behavior failing to meet pre-specified decision-rule criteria.",
        rationale: "Correct — data-based modification requires integrity-verified + multi-session criterion-failure evidence.",
      },
      D: {
        text: "Session-note format changes.",
        rationale: "Not evidence of outcome deterioration.",
      },
    },
  ),
  bx(
    "mod38-q28",
    "Which is the CLEAREST example of failing at Domain H IMPLEMENTATION (rather than SELECTION)?",
    "B",
    {
      A: {
        text: "Choosing time-out for an escape-maintained behavior.",
        rationale: "That is a selection failure (function mismatch).",
      },
      B: {
        text: "The correct DRA + extinction procedure was selected but staff routinely skip the extinction component during high-demand periods and inadvertently reinforce the problem behavior — a treatment-integrity failure at the implementation stage.",
        rationale: "Correct — the selection was right; the implementation drift + integrity failure is the Domain H implementation problem.",
      },
      C: {
        text: "Skipping social-validity check at the goals stage.",
        rationale: "Goal-selection failure is at the selection stage.",
      },
      D: {
        text: "Choosing not to use FBA data.",
        rationale: "Selection failure.",
      },
    },
  ),
  bx(
    "mod38-q29",
    "Which is a CORRECT statement about procedural-integrity monitoring frequency?",
    "A",
    {
      A: {
        text: "Higher initially (to catch early drift + retrain) and then intermittent thereafter but never zero — even mature programs benefit from periodic integrity checks because drift accumulates silently.",
        rationale: "Correct — front-loaded + intermittent-ongoing integrity monitoring catches drift before outcomes deteriorate.",
      },
      B: {
        text: "One check at the beginning of the program, then never again.",
        rationale: "Drift accumulates; ongoing checks required.",
      },
      C: {
        text: "Only when outcomes deteriorate.",
        rationale: "Waiting until deterioration means integrity has already been broken for some time; ongoing monitoring is prophylactic.",
      },
      D: {
        text: "Never — self-report is sufficient.",
        rationale: "Self-report is not sufficient for integrity.",
      },
    },
  ),
  bx(
    "mod38-q30",
    "The BEST Domain H response to a family's request that a specific procedure NOT be used is to:",
    "D",
    {
      A: {
        text: "Ignore the family and use the procedure.",
        rationale: "Ignores procedures-level social validity.",
      },
      B: {
        text: "Immediately refuse to treat the client.",
        rationale: "Withdrawal-of-services is disproportionate to a procedure preference.",
      },
      C: {
        text: "Change the goal.",
        rationale: "Goals may not need to change if procedures can be adjusted.",
      },
      D: {
        text: "Explore the family's concern, present function-matched alternatives that address the same function via a procedure the family accepts, and select the alternative most likely to be implemented with integrity — respecting procedures-level social validity while preserving function-matched clinical reasoning.",
        rationale: "Correct — shared decision-making preserves function-matching AND procedures-level social validity by finding an acceptable alternative that addresses the same function.",
      },
    },
  ),
];
