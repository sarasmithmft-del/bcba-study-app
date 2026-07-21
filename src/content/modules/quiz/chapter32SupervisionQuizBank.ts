import type { BDSQuestion } from "@/lib/content-types";

/**
 * Domain I — Personnel Supervision & Performance Management.
 *
 * Not a Cooper/Heron/Heward chapter. This bank targets the BACB 6th ed. TCO
 * Domain I task areas: supervisor competencies, Behavioral Skills Training,
 * competency-based training, performance monitoring, feedback systems, OBM
 * fundamentals (PIC/NIC), RBT oversight requirements, fieldwork rules for
 * BCBA trainees, ethical supervision boundaries, and systems-level personnel
 * management. Verify current BACB Supervisor & Fieldwork requirements in the
 * published BACB Handbook and Supervisor Curriculum before study decisions.
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
    tcoDomain: "I",
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_32_SUPERVISION_QUIZ_BANK: BDSQuestion[] = [
  bx(
    "mod37-q1",
    "A new RBT is being trained to run discrete-trial mand teaching. Which sequence BEST reflects Behavioral Skills Training (BST)?",
    "B",
    {
      A: {
        text: "Hand the RBT the protocol and evaluate performance on the first live client session.",
        rationale: "Skipping modeling and rehearsal violates BST; live client used as training ground creates risk.",
      },
      B: {
        text: "Written/verbal instruction, live modeling, role-play rehearsal, immediate feedback, repeat until mastery criterion, then generalization probes.",
        rationale: "Correct — the five BST components in order (instruction, modeling, rehearsal, feedback, mastery) followed by generalization checks.",
      },
      C: {
        text: "Show a training video, then quiz the RBT on definitions before the next shift.",
        rationale: "Knowledge test without rehearsal or performance-based mastery is not BST.",
      },
      D: {
        text: "Have the RBT shadow experienced staff for two weeks with no direct performance feedback.",
        rationale: "Shadowing is observational only; without rehearsal + feedback + mastery it is not competency-based.",
      },
    },
  ),
  bx(
    "mod37-q2",
    "A supervisor checks that an RBT can run a preference assessment by watching one clean session and marking 'trained.' What is the PRIMARY concern with this competency check?",
    "C",
    {
      A: {
        text: "Preference assessments cannot be observed by supervisors.",
        rationale: "They can and should be observed directly.",
      },
      B: {
        text: "The supervisor should not be involved in RBT training.",
        rationale: "Supervisors are required to conduct RBT training.",
      },
      C: {
        text: "A single-session sample does not establish mastery; competency-based checks require multiple observations across stimuli and clients.",
        rationale: "Correct — competency-based training uses mastery criteria across trials, materials, and contexts, not a single opportunity.",
      },
      D: {
        text: "Competency checks require an outside evaluator.",
        rationale: "The primary supervisor can conduct competency checks.",
      },
    },
  ),
  bx(
    "mod37-q3",
    "Which pair BEST describes 'pinpointing' in a performance-management context?",
    "A",
    {
      A: {
        text: "Specifying an observable, measurable performance outcome (e.g., 'runs paired-stimulus PA within 8 minutes with 100% procedural fidelity') rather than a vague trait.",
        rationale: "Correct — pinpointing turns intent into a directly measurable performance target that supports feedback and data collection.",
      },
      B: {
        text: "Publicly announcing which staff members underperformed.",
        rationale: "That is public reprimand, not pinpointing.",
      },
      C: {
        text: "Deciding the reinforcer schedule before observing behavior.",
        rationale: "That is contingency planning; pinpointing precedes it by defining the target.",
      },
      D: {
        text: "Selecting a supervisor for a case.",
        rationale: "Case assignment, not pinpointing.",
      },
    },
  ),
  bx(
    "mod37-q4",
    "A supervisor bases performance ratings entirely on permanent products (session notes, graphs, billing entries). What is the primary blind spot?",
    "B",
    {
      A: {
        text: "Permanent products cannot be reviewed after the fact.",
        rationale: "They can; that is why they are 'permanent'.",
      },
      B: {
        text: "Permanent-product review misses procedural integrity events that happen in real time (prompt gradient, timing, error correction, safety response).",
        rationale: "Correct — direct observation is required to see how procedures unfold; products only show the outputs left behind.",
      },
      C: {
        text: "Permanent products always contain HIPAA violations.",
        rationale: "Not inherent; depends on how they are stored.",
      },
      D: {
        text: "Permanent products cannot be graphed.",
        rationale: "They routinely are.",
      },
    },
  ),
  bx(
    "mod37-q5",
    "A supervisor conducts a PIC/NIC analysis on session-note timeliness and finds the consequences of on-time submission are 'positive, future, uncertain,' while on-time submission itself is effortful. What does the analysis PREDICT and what is the highest-yield fix?",
    "A",
    {
      A: {
        text: "Predicts low rate of on-time submission. Fix by making the consequence more immediate and certain — e.g., a same-day acknowledgment or brief performance-contingent reinforcer tied to on-time submission.",
        rationale: "Correct — PIC (positive-immediate-certain) consequences strongly control performance; future-uncertain outcomes do not.",
      },
      B: {
        text: "Predicts high rate; no change needed.",
        rationale: "Future-uncertain positives usually fail to control behavior.",
      },
      C: {
        text: "Predicts sabotage. Fix by public reprimand.",
        rationale: "Reprimand is negative and typically counter-productive for chronic performance issues.",
      },
      D: {
        text: "PIC/NIC does not apply to permanent products.",
        rationale: "It applies to any behavior with detectable consequences.",
      },
    },
  ),
  bx(
    "mod37-q6",
    "Which is the STRONGEST example of performance-contingent reinforcement in an OBM (Organizational Behavior Management) framework?",
    "D",
    {
      A: {
        text: "A monthly all-staff pizza party regardless of individual performance.",
        rationale: "Non-contingent; does not shape target performance.",
      },
      B: {
        text: "A vague 'good job' at the end of the week.",
        rationale: "Delayed and non-specific.",
      },
      C: {
        text: "A raise given uniformly during annual review.",
        rationale: "Not tied to specific target performance metrics.",
      },
      D: {
        text: "A small immediate acknowledgment (e.g., a public shout-out or bonus point) contingent on meeting a pinpointed weekly session-note-timeliness criterion.",
        rationale: "Correct — contingent, immediate, and tied to a pinpointed target performance behavior.",
      },
    },
  ),
  bx(
    "mod37-q7",
    "According to widely-published BACB fieldwork guidance, what is the STANDARD minimum ratio of supervisor contact required for a BCBA trainee accumulating supervised fieldwork hours (verify current BACB Handbook wording before decisions)?",
    "B",
    {
      A: {
        text: "1% of accumulated hours, with quarterly meetings.",
        rationale: "Too low relative to widely-cited BACB standard supervision ratios.",
      },
      B: {
        text: "Approximately 5% of the accumulated hours in each supervisory period, with at least four supervisor contacts per month and at least one direct-observation contact per month — verify wording in the current BACB Handbook.",
        rationale: "Correct as a widely-taught approximation of BACB standard supervision. Verify exact wording in the currently-published BACB Handbook because BACB requirements change.",
      },
      C: {
        text: "10%, with no direct-observation requirement.",
        rationale: "Direct observation is a required component.",
      },
      D: {
        text: "Fieldwork does not require formal supervision under BACB rules.",
        rationale: "Supervision is required for BACB fieldwork accrual.",
      },
    },
  ),
  bx(
    "mod37-q8",
    "A BCBA supervises an RBT delivering direct services to a client. Which oversight requirement is MOST closely tied to the BACB RBT Handbook?",
    "A",
    {
      A: {
        text: "The supervising BCBA must provide ongoing supervision covering at least 5% of the RBT's direct-service hours per supervisory period, using a mix of observation, permanent-product review, and feedback — verify current BACB wording before decisions.",
        rationale: "Correct as a widely-taught approximation of the RBT 5% supervision requirement. Verify current BACB Handbook wording.",
      },
      B: {
        text: "Supervision must occur only monthly and only remotely.",
        rationale: "Direct observation and blended formats are required.",
      },
      C: {
        text: "RBTs may operate without any supervision after passing the exam.",
        rationale: "Ongoing supervision is required for RBT credential maintenance.",
      },
      D: {
        text: "The supervising BCBA has no responsibility for the RBT's clinical decisions.",
        rationale: "The supervising BCBA is responsible for the delegated behavior of the RBT within scope.",
      },
    },
  ),
  bx(
    "mod37-q9",
    "A BCBA agrees to also serve as their supervisee's therapist for the supervisee's anxiety about supervision. What is the MOST significant ethical concern?",
    "C",
    {
      A: {
        text: "It shortens the supervision cycle.",
        rationale: "Not the primary concern.",
      },
      B: {
        text: "It reduces billing complexity.",
        rationale: "Not an ethical concern.",
      },
      C: {
        text: "Multiple relationship / conflict of interest — dual role blurs boundaries, compromises objective supervision judgment, and creates coercive power dynamics.",
        rationale: "Correct — the BACB Ethics Code prohibits multiple relationships that impair professional judgment or create risk of exploitation. A supervisor cannot simultaneously serve as therapist to the same supervisee.",
      },
      D: {
        text: "It has no ethical concern if both parties consent.",
        rationale: "Consent does not resolve conflicts of interest that impair objective supervision.",
      },
    },
  ),
  bx(
    "mod37-q10",
    "A BCBA supervises 22 RBTs and 6 BCBA trainees full-time in addition to a full clinical caseload. What is the MOST important concern to raise?",
    "B",
    {
      A: {
        text: "None — number of supervisees is not an ethical issue.",
        rationale: "Excessive supervisee count that impairs supervision quality is an ethical issue.",
      },
      B: {
        text: "Supervisor caseload capacity — accepting more supervisees than can be supervised effectively is an ethical violation because it degrades supervision quality and risks harm to clients.",
        rationale: "Correct — the BACB Ethics Code requires supervisors to accept only the number of supervisees they can effectively supervise given all other demands.",
      },
      C: {
        text: "Only concern is billing complexity.",
        rationale: "Ethical concern is quality of supervision.",
      },
      D: {
        text: "Should immediately fire half the supervisees.",
        rationale: "Sudden termination without a plan violates responsible termination of supervision.",
      },
    },
  ),
  bx(
    "mod37-q11",
    "A supervisor decides to terminate supervision of a struggling BCBA trainee mid-contract because the trainee filed a workplace grievance. What is the primary ethical problem?",
    "C",
    {
      A: {
        text: "None — supervisors may terminate at will.",
        rationale: "Termination cannot be retaliatory and must consider trainee harm.",
      },
      B: {
        text: "The trainee should not have filed a grievance.",
        rationale: "Whistleblower/complaint filing is protected activity.",
      },
      C: {
        text: "Retaliation and responsible termination — supervision cannot be ended punitively for protected complaint activity; termination must include a transition plan, warning where feasible, and consideration of harm to the trainee's fieldwork accrual.",
        rationale: "Correct — the BACB Ethics Code addresses responsible termination of supervision and prohibits retaliation.",
      },
      D: {
        text: "The trainee automatically forfeits all supervised hours.",
        rationale: "Accrued hours documented prior to termination remain valid.",
      },
    },
  ),
  bx(
    "mod37-q12",
    "During a supervision meeting, the trainee asks the BCBA to sign off on 30 hours of unrecorded supervised fieldwork that occurred last month, saying 'we both remember it.' What is the CORRECT response?",
    "B",
    {
      A: {
        text: "Sign off — good faith memory suffices.",
        rationale: "Falsifying or reconstructing fieldwork records violates documentation integrity.",
      },
      B: {
        text: "Decline to sign off — fieldwork must be documented contemporaneously and accurately; retroactive attestation of unrecorded activity is a documentation-integrity and ethics violation and may jeopardize BACB certification.",
        rationale: "Correct — the BACB Ethics Code + fieldwork requirements demand accurate contemporaneous records. Signing off on unrecorded activity constitutes falsification.",
      },
      C: {
        text: "Sign off if the trainee provides a written statement.",
        rationale: "A statement does not create contemporaneous records.",
      },
      D: {
        text: "Split the difference and sign off on half.",
        rationale: "Partial falsification is still falsification.",
      },
    },
  ),
  bx(
    "mod37-q13",
    "A BCBA delegates the writing of a Functional Behavior Assessment report to an RBT because the RBT 'writes better.' What is the primary problem?",
    "A",
    {
      A: {
        text: "Delegation outside scope — FBA authorship is a BCBA-level task; RBTs deliver services under supervision but do not conduct or author FBAs. Delegation must be within the delegatee's scope of competence and credential.",
        rationale: "Correct — the BACB scope-of-practice rules and Ethics Code require delegation only within the delegatee's demonstrated competence and credential scope.",
      },
      B: {
        text: "Not a problem if the BCBA reviews the report.",
        rationale: "Review does not cure scope-of-practice delegation.",
      },
      C: {
        text: "Not a problem if the RBT holds a bachelor's degree.",
        rationale: "Degree does not confer BCBA scope.",
      },
      D: {
        text: "Problem only if the client objects.",
        rationale: "The violation is structural, not consent-based.",
      },
    },
  ),
  bx(
    "mod37-q14",
    "A supervisor gives feedback three weeks after the observed session. What is the MOST likely performance-management consequence?",
    "D",
    {
      A: {
        text: "Feedback strength is maximized by delay.",
        rationale: "Delayed feedback loses stimulus control.",
      },
      B: {
        text: "It counts as prompt feedback under BACB.",
        rationale: "It is not prompt.",
      },
      C: {
        text: "It has no effect either way.",
        rationale: "It has a negative effect on behavior change.",
      },
      D: {
        text: "Delayed feedback loses discriminative control — the supervisee cannot easily map the feedback onto the specific in-session behavior, so behavior change is diluted and error patterns persist.",
        rationale: "Correct — immediate/proximate feedback is a well-established OBM principle. Delayed feedback weakens the S-R contingency the supervisor is trying to establish.",
      },
    },
  ),
  bx(
    "mod37-q15",
    "A performance-feedback system consists ONLY of corrective feedback (never positive). Over 8 weeks, staff turnover rises and error patterns persist. What is the MOST likely mechanism?",
    "A",
    {
      A: {
        text: "Ratio strain and escape-motivated turnover — an all-corrective feedback regime resembles a heavy negative reinforcement schedule; staff escape (quit) and avoid supervisor contact rather than repair errors.",
        rationale: "Correct — OBM feedback design requires positive-to-corrective ratios that maintain approach behavior; corrective-only regimes evoke escape/avoidance.",
      },
      B: {
        text: "Corrective-only feedback is optimal; staff must be replaced.",
        rationale: "Turnover indicates a systems problem, not a personnel problem.",
      },
      C: {
        text: "Turnover is unrelated to feedback design.",
        rationale: "Feedback contingencies strongly predict turnover in OBM literature.",
      },
      D: {
        text: "Feedback should be removed entirely.",
        rationale: "Contingent feedback is required for competency maintenance.",
      },
    },
  ),
  bx(
    "mod37-q16",
    "A supervisor scores their OWN direct observations of the RBT's discrete-trial teaching. Which practice BEST supports the integrity of those observations?",
    "B",
    {
      A: {
        text: "Trust the supervisor's memory of prior observations.",
        rationale: "Memory is not a substitute for IOA.",
      },
      B: {
        text: "Have a second observer (peer BCBA or trained coder) independently score a subset of observations and compute IOA on the supervisor's coding.",
        rationale: "Correct — supervisor observations are behavior data; IOA applies to supervisor coding just as it does to research coding.",
      },
      C: {
        text: "Score with the RBT present so they can correct disagreements.",
        rationale: "Would inflate agreement artificially.",
      },
      D: {
        text: "IOA is not needed for supervision observations.",
        rationale: "IOA increases confidence in supervisor data used for high-stakes decisions.",
      },
    },
  ),
  bx(
    "mod37-q17",
    "A BCBA is asked to serve as a paid supervisor and simultaneously the client's parent representative in an IEP meeting. Which duty is MOST directly threatened?",
    "C",
    {
      A: {
        text: "Billing accuracy.",
        rationale: "Not the primary concern.",
      },
      B: {
        text: "Report format.",
        rationale: "Not the primary concern.",
      },
      C: {
        text: "Objectivity and multiple relationship — serving simultaneously as supervisor of clinical staff AND parent representative creates conflicting duties (to employer, to family, to child) that impair supervisory judgment.",
        rationale: "Correct — the BACB Ethics Code addresses multiple relationships that impair objectivity. This pairing produces exactly that risk.",
      },
      D: {
        text: "No ethical concern.",
        rationale: "Multiple relationships are a core Ethics Code focus.",
      },
    },
  ),
  bx(
    "mod37-q18",
    "Which is the CLEAREST example of an ANTECEDENT OBM intervention (rather than a consequence intervention)?",
    "B",
    {
      A: {
        text: "Weekly bonus for on-time session notes.",
        rationale: "Consequence intervention.",
      },
      B: {
        text: "Redesigning the session-note template so required fields autofill from the data-collection app, reducing the response requirement.",
        rationale: "Correct — antecedent interventions engineer the environment/task to make the target behavior easier or more likely (task clarification, prompts, materials redesign).",
      },
      C: {
        text: "Public performance-feedback board posted weekly.",
        rationale: "Consequence-based (feedback follows performance).",
      },
      D: {
        text: "Corrective feedback delivered same-day.",
        rationale: "Consequence intervention.",
      },
    },
  ),
  bx(
    "mod37-q19",
    "A supervisor uses staff-satisfaction surveys as the SOLE measure of supervision effectiveness. What is the primary measurement concern?",
    "A",
    {
      A: {
        text: "Social-validity data are important but do not measure client outcomes or procedural fidelity — supervision effectiveness must also include client-level and integrity-level metrics.",
        rationale: "Correct — satisfaction is one social-validity dimension; supervision effectiveness additionally requires performance and outcome data.",
      },
      B: {
        text: "Surveys are always invalid.",
        rationale: "They are valid for what they measure.",
      },
      C: {
        text: "Only client outcomes matter.",
        rationale: "Staff satisfaction is a legitimate dimension.",
      },
      D: {
        text: "Surveys must be anonymous or they are useless.",
        rationale: "Anonymity is one design choice, not the primary concern.",
      },
    },
  ),
  bx(
    "mod37-q20",
    "A BCBA supervises a trainee who is delivering a treatment package that the BCBA has never been trained in and does not fully understand. What is the CORRECT action?",
    "C",
    {
      A: {
        text: "Continue supervision; the trainee understands the package.",
        rationale: "Supervisor cannot supervise activities outside their own competence.",
      },
      B: {
        text: "Delegate supervision of that package to the trainee themselves.",
        rationale: "A trainee cannot self-supervise.",
      },
      C: {
        text: "Refer supervision of that activity to a BCBA competent in the package OR obtain competency in the package before continuing; do not supervise outside personal competence.",
        rationale: "Correct — supervisors must supervise only within their own scope of competence; the Ethics Code requires referring or obtaining competence before proceeding.",
      },
      D: {
        text: "Continue but bill at a reduced rate.",
        rationale: "Billing does not fix scope of competence.",
      },
    },
  ),
  bx(
    "mod37-q21",
    "Which sequence BEST reflects Antecedent → Behavior → Consequence in a supervision-of-performance context?",
    "D",
    {
      A: {
        text: "Feedback → Session note → Supervisor observation.",
        rationale: "Out of order — feedback is a consequence, not an antecedent.",
      },
      B: {
        text: "Session note → Reinforcer → Task clarification.",
        rationale: "Task clarification is antecedent, not consequence.",
      },
      C: {
        text: "Reinforcer → Session note → Prompt.",
        rationale: "Reinforcer is consequence; prompts are antecedents.",
      },
      D: {
        text: "Task clarification / template (antecedent) → Session-note completion (behavior) → Same-day positive-specific acknowledgment (consequence).",
        rationale: "Correct A-B-C sequence in an OBM performance intervention.",
      },
    },
  ),
  bx(
    "mod37-q22",
    "Which is a TRUE statement about competency-based training vs. topography-only training in BST?",
    "A",
    {
      A: {
        text: "Competency-based training requires the trainee to reach an accuracy criterion across multiple opportunities, stimuli, and contexts before being deemed competent; topography-only training checks that the trainee can produce the motor form once.",
        rationale: "Correct — competency is generalized performance to criterion, not a single reproduction of the form.",
      },
      B: {
        text: "They are identical terms.",
        rationale: "They differ in criterion structure.",
      },
      C: {
        text: "Competency-based training does not require observation.",
        rationale: "Direct observation is central to competency verification.",
      },
      D: {
        text: "Topography-only training is preferred because it is faster.",
        rationale: "Faster ≠ better for high-stakes clinical performance.",
      },
    },
  ),
  bx(
    "mod37-q23",
    "In an OBM performance-management framework, which combination is MOST likely to control behavior powerfully?",
    "B",
    {
      A: {
        text: "Negative, future, uncertain (NFU).",
        rationale: "NFU exerts weak control.",
      },
      B: {
        text: "Positive, immediate, certain (PIC).",
        rationale: "Correct — PIC consequences exert the strongest control over performance in the OBM PIC/NIC model.",
      },
      C: {
        text: "Positive, future, uncertain (PFU).",
        rationale: "PFU is weak; distance and uncertainty reduce control.",
      },
      D: {
        text: "None of these consequences influence performance.",
        rationale: "Consequences shape workplace performance.",
      },
    },
  ),
  bx(
    "mod37-q24",
    "A supervisor discovers an RBT is inflating hours on their timesheet. The supervisor's PRIMARY duty is to:",
    "C",
    {
      A: {
        text: "Ignore it if the client is progressing.",
        rationale: "Falsification is not permissible regardless of client progress.",
      },
      B: {
        text: "Deduct hours quietly and move on.",
        rationale: "Undocumented corrective action does not meet supervisor responsibility.",
      },
      C: {
        text: "Address the falsification directly with the RBT, document the finding, correct the record, and follow the organization's + BACB reporting/remediation pathway — timesheet falsification implicates documentation integrity, billing integrity, and RBT credential standing.",
        rationale: "Correct — the supervisor must address falsification transparently, correct the record, and follow required reporting pathways per Ethics Code and organizational policy.",
      },
      D: {
        text: "Only report to billing; supervision is separate.",
        rationale: "Falsification is a supervisory + ethics issue, not merely billing.",
      },
    },
  ),
  bx(
    "mod37-q25",
    "Which is the BEST example of a systems-level (rather than individual-level) OBM intervention?",
    "A",
    {
      A: {
        text: "Redesigning the intake-to-first-session workflow across the entire clinic so onboarding paperwork, consent, insurance authorization, and initial supervision assignment happen in a documented, timed pipeline.",
        rationale: "Correct — a systems intervention targets the process/environment affecting many staff, not a single performer.",
      },
      B: {
        text: "Coaching one BCaBA on their tone during parent training.",
        rationale: "Individual-level.",
      },
      C: {
        text: "Giving one RBT a bonus for perfect attendance.",
        rationale: "Individual-level.",
      },
      D: {
        text: "Correcting a typo in one session note.",
        rationale: "Task-level, not systems-level.",
      },
    },
  ),
  bx(
    "mod37-q26",
    "A supervisor gives ONLY generalized 'good job' feedback with no specificity. Over time, which is the MOST likely effect on the RBT's target performance?",
    "D",
    {
      A: {
        text: "Target performance improves rapidly because praise is powerful.",
        rationale: "Non-specific praise weakly shapes target behavior.",
      },
      B: {
        text: "Target performance is unaffected.",
        rationale: "There is usually a small effect but not a specific shaping effect.",
      },
      C: {
        text: "Target performance decreases from ratio strain.",
        rationale: "Ratio strain concerns density, not specificity.",
      },
      D: {
        text: "Target performance does not shape toward the specific pinpoint because the feedback does not discriminate correct vs. incorrect components — praise is broadcast rather than contingent on the specific pinpointed behavior.",
        rationale: "Correct — specificity is required for feedback to function as a discriminative shaping consequence.",
      },
    },
  ),
  bx(
    "mod37-q27",
    "Which statement about BACB Supervisor requirements is MOST accurate (verify current wording in the BACB Supervisor Handbook)?",
    "B",
    {
      A: {
        text: "Any BCBA may supervise trainees the day after passing the BCBA exam without further coursework.",
        rationale: "BACB requires supervisor-specific training (widely known as the 8-hour Supervisor Training) plus meeting hour-based eligibility before providing supervision.",
      },
      B: {
        text: "Providing supervision requires the BACB-required supervisor training plus meeting specified BACB experience requirements, with ongoing supervisor CE — verify current BACB Handbook wording before decisions.",
        rationale: "Correct as a widely-taught approximation. Verify current BACB Handbook wording because BACB rules update.",
      },
      C: {
        text: "Supervisor training is optional under BACB rules.",
        rationale: "It is required.",
      },
      D: {
        text: "Supervision is only allowed under state licensure, not BACB rules.",
        rationale: "BACB has its own supervision requirements independent of state licensure.",
      },
    },
  ),
  bx(
    "mod37-q28",
    "The 'restricted' vs. 'unrestricted' fieldwork-activity distinction MOST accurately refers to:",
    "A",
    {
      A: {
        text: "Restricted = direct implementation of behavior-analytic services (e.g., running programs, data collection); Unrestricted = higher-level analytic/supervisory activities (assessment, program design, staff training, supervision). BACB caps the proportion of hours that can be restricted (verify current cap in the current Handbook).",
        rationale: "Correct — the restricted/unrestricted split limits how much of accrued fieldwork can be direct-implementation work vs. analytic work. Verify current cap.",
      },
      B: {
        text: "Restricted = supervised; Unrestricted = unsupervised.",
        rationale: "Not the distinction.",
      },
      C: {
        text: "Restricted = paid; Unrestricted = unpaid.",
        rationale: "Not the distinction.",
      },
      D: {
        text: "Restricted = in-office; Unrestricted = remote.",
        rationale: "Not the distinction.",
      },
    },
  ),
  bx(
    "mod37-q29",
    "A trainee has 500 accumulated fieldwork hours, but their supervisor discovers 200 of those hours were performed while the supervisor was NOT contracted with the trainee. What is the MOST likely outcome for those 200 hours?",
    "C",
    {
      A: {
        text: "The 200 hours count fully — supervisor contract is optional.",
        rationale: "Supervisor contract during accrual is required.",
      },
      B: {
        text: "The 200 hours convert to unrestricted activity.",
        rationale: "Contract validity is separate from activity type.",
      },
      C: {
        text: "The 200 hours likely CANNOT be counted as supervised fieldwork because a supervision contract must be in place during the accrual period — the trainee will need to redo those hours under a proper contract.",
        rationale: "Correct — BACB fieldwork rules require an active supervision contract during accrual. Hours accrued outside contract cannot retroactively be validated.",
      },
      D: {
        text: "The supervisor can post-date the contract to fix it.",
        rationale: "Post-dating a contract is falsification.",
      },
    },
  ),
  bx(
    "mod37-q30",
    "Which of the following BEST illustrates 'responsible termination of supervision'?",
    "A",
    {
      A: {
        text: "Provide the trainee reasonable written notice, document accrued hours to date, offer to help identify a new supervisor when appropriate, transfer relevant records per organizational and ethics rules, and avoid retaliatory motives.",
        rationale: "Correct — responsible termination protects the trainee's fieldwork accrual and includes notice, records transfer, and non-retaliation.",
      },
      B: {
        text: "End supervision without notice mid-contract.",
        rationale: "Not responsible; harms trainee accrual and welfare.",
      },
      C: {
        text: "Refuse to release accrued-hour records.",
        rationale: "Withholding records violates responsible termination.",
      },
      D: {
        text: "Terminate as retaliation for a grievance.",
        rationale: "Retaliation is prohibited.",
      },
    },
  ),
];
