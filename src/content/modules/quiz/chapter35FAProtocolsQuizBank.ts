import type { BDSQuestion } from "@/lib/content-types";

/**
 * FA Protocols — Deep dive into Functional Analysis variants.
 *
 * Covers classic Iwata (1982/1994) FA, IISCA (Hanley et al.), IWFA, trial-based
 * FA (Bloom et al.), latency-based FA, precursor FA, and brief FA — how they
 * differ, when to use each, and how to interpret confounded outcomes. Verify
 * current primary-source citations before decisions.
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
    tcoDomain: "F",
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_35_FA_PROTOCOLS_QUIZ_BANK: BDSQuestion[] = [
  bx(
    "mod40-q1",
    "The classic Iwata et al. (1982/1994) Functional Analysis uses which four standard conditions?",
    "B",
    {
      A: { text: "Attention, escape, tangible, and generalization.", rationale: "'Generalization' is not a standard FA condition.", },
      B: {
        text: "Attention (contingent adult attention for target behavior), Escape/Demand (break from demand contingent on target), Alone (or ignore/no-interaction to test automatic reinforcement), and Play (control condition with continuous non-contingent reinforcement).",
        rationale: "Correct — the four standard Iwata conditions. Some variants add a Tangible condition when a specific item is hypothesized.",
      },
      C: { text: "Baseline, treatment, reversal, generalization.", rationale: "Those are single-subject design phases, not FA conditions.", },
      D: { text: "Antecedent, behavior, consequence, contingency.", rationale: "That is the four-term contingency structure, not FA conditions.", },
    },
  ),
  bx(
    "mod40-q2",
    "In a classic Iwata FA, why is the PLAY condition included?",
    "C",
    {
      A: { text: "To reinforce the problem behavior.", rationale: "Play is a control, not a reinforcement condition for problem behavior.", },
      B: { text: "To measure engagement only.", rationale: "Its primary purpose is control comparison.", },
      C: {
        text: "It serves as a CONTROL condition — continuous non-contingent access to preferred items and attention, no demands — used as a comparison baseline for differentiation from test conditions.",
        rationale: "Correct — play provides the low-motivating-operation baseline against which test conditions are compared for differentiation.",
      },
      D: { text: "To assess free operant preference.", rationale: "That is a separate assessment.", },
    },
  ),
  bx(
    "mod40-q3",
    "The IISCA (Interview-Informed Synthesized Contingency Analysis; Hanley, Jin, Vanselow, & Hanratty, 2014) DIFFERS from a classic Iwata FA in what key way?",
    "A",
    {
      A: {
        text: "It uses a SINGLE test condition that SYNTHESIZES the multiple reinforcers a caregiver interview identifies as maintaining the target behavior (e.g., escape + tangible + attention combined), rather than isolating each reinforcer contingency in separate conditions.",
        rationale: "Correct — IISCA collapses interview-identified reinforcers into a single synthesized test condition compared against a synthesized control.",
      },
      B: { text: "It uses only alone conditions.", rationale: "IISCA is not alone-only.", },
      C: { text: "It requires 40-minute conditions.", rationale: "Session length is not the defining difference.", },
      D: { text: "It never uses interviews.", rationale: "IISCA is interview-INFORMED — the interview is central.", },
    },
  ),
  bx(
    "mod40-q4",
    "A common critique of IISCA is that synthesized contingencies:",
    "D",
    {
      A: { text: "Are too slow to run.", rationale: "Speed is often cited as a benefit, not critique.", },
      B: { text: "Cannot identify any function.", rationale: "IISCA identifies the synthesized combination.", },
      C: { text: "Are impossible to interpret.", rationale: "They are interpretable, though not always to isolated function.", },
      D: {
        text: "Cannot isolate WHICH single reinforcer within the synthesized combination is maintaining the behavior — some argue this compromises specificity for treatment component selection; proponents counter that natural contingencies often ARE synthesized so treating the whole combination is more ecologically valid.",
        rationale: "Correct — the trade-off is specificity (classic Iwata) vs. ecological validity + speed (IISCA); ongoing methodological debate in the field.",
      },
    },
  ),
  bx(
    "mod40-q5",
    "TRIAL-BASED functional analysis (Bloom, Iwata, Fritz, Roscoe, & Carreau, 2011) is BEST characterized as:",
    "B",
    {
      A: { text: "Long extended sessions in a controlled clinic room.", rationale: "That is closer to classic FA.", },
      B: {
        text: "Brief (typically 1–2 minute) test-and-control trials embedded within the natural classroom or setting — used when extended clinic-based FA is impractical or when in-context data are needed.",
        rationale: "Correct — trial-based FA uses brief in-context trials, most commonly deployed in classroom settings where clinic-based FA is infeasible.",
      },
      C: { text: "Verbal report only, no direct observation.", rationale: "It uses direct observation of brief trials.", },
      D: { text: "Identical to indirect FBA.", rationale: "It is a form of experimental FA, not indirect.", },
    },
  ),
  bx(
    "mod40-q6",
    "LATENCY-based FA measures:",
    "A",
    {
      A: {
        text: "The TIME from onset of the establishing operation (or introduction of the test condition) until the FIRST occurrence of the target behavior — sessions typically end at the first response, reducing exposure to potentially dangerous behavior.",
        rationale: "Correct — latency-based FA (Thomason-Sassi et al., 2011) uses time-to-first-response as the dependent measure and terminates early, protecting learners.",
      },
      B: { text: "The rate of behavior across a full session.", rationale: "That is rate-based FA, not latency-based.", },
      C: { text: "Duration only.", rationale: "That would be duration-based.", },
      D: { text: "IOA between observers.", rationale: "That is IOA, not latency measurement.", },
    },
  ),
  bx(
    "mod40-q7",
    "A PRECURSOR FA is used when:",
    "C",
    {
      A: { text: "The target behavior is verbal only.", rationale: "Not the defining use case.", },
      B: { text: "The learner is highly motivated.", rationale: "Not the defining use case.", },
      C: {
        text: "The target problem behavior is too dangerous or low-frequency to evoke directly; the FA is conducted on a reliably-occurring PRECURSOR behavior that precedes the dangerous target — reducing risk while still identifying the maintaining function.",
        rationale: "Correct — precursor FA (Smith & Churchill, 2002; Fritz et al., 2013) targets a reliable precursor to protect learners while identifying function.",
      },
      D: { text: "The FA cannot be scheduled.", rationale: "Not the defining use case.", },
    },
  ),
  bx(
    "mod40-q8",
    "BRIEF FA typically consists of:",
    "B",
    {
      A: { text: "20+ sessions across multiple weeks.", rationale: "That is extended FA.", },
      B: {
        text: "Approximately 5-minute conditions run one time each in a single 90-minute-or-less session (often used as a screening or when time is constrained; results are less stable than extended FA and may require follow-up).",
        rationale: "Correct — brief FA (Northup et al., 1991) uses single ~5-min conditions in a compact session; stability trade-off is well-documented.",
      },
      C: { text: "Verbal report only.", rationale: "Brief FA uses direct observation.", },
      D: { text: "Only alone conditions.", rationale: "Brief FA uses multiple conditions.", },
    },
  ),
  bx(
    "mod40-q9",
    "During a classic FA, the target behavior occurs at HIGH rates in ALL test conditions AND the play (control) condition. What is the MOST likely interpretation?",
    "A",
    {
      A: {
        text: "UNDIFFERENTIATED FA — you cannot conclude function from these data; consider extending sessions, adding an ignore/alone condition to test automatic reinforcement, refining conditions (e.g., use richer play reinforcers), running an EO screening, or switching to IISCA/latency/trial-based methodology.",
        rationale: "Correct — undifferentiated outcomes require methodological modification before concluding function.",
      },
      B: { text: "Automatic reinforcement confirmed.", rationale: "High rates in the control condition weaken the automatic hypothesis; the control's reinforcers should compete with automatic reinforcement.", },
      C: { text: "Escape confirmed.", rationale: "Cannot conclude escape when rates are also high in non-escape conditions.", },
      D: { text: "The FA proves the behavior is voluntary.", rationale: "FA does not assess 'voluntariness' — that is not a behavior-analytic construct.", },
    },
  ),
  bx(
    "mod40-q10",
    "During a classic FA, the target behavior occurs at HIGH rates ONLY in the ALONE condition and LOW in all test/control conditions. What does this pattern suggest?",
    "C",
    {
      A: { text: "Escape-maintained.", rationale: "Would elevate in escape condition.", },
      B: { text: "Attention-maintained.", rationale: "Would elevate in attention condition.", },
      C: {
        text: "AUTOMATIC (sensory) reinforcement — the behavior persists in the absence of any social contingencies, suggesting the reinforcer is intrinsic to the response itself. Treatment typically requires competing/matched stimulation because the reinforcer cannot be withheld socially.",
        rationale: "Correct — elevation in alone (and often ignore) conditions with low rates elsewhere is the classic automatic-reinforcement pattern.",
      },
      D: { text: "Tangible-maintained.", rationale: "Would elevate when access to a specific item is contingent on the behavior.", },
    },
  ),
  bx(
    "mod40-q11",
    "Before running ANY experimental FA, the MOST important ethical safeguard is:",
    "B",
    {
      A: { text: "Higher reinforcer density.", rationale: "Not the primary safeguard.", },
      B: {
        text: "Informed consent that clearly explains that FA conditions will DELIBERATELY evoke the problem behavior to identify its function; risk-mitigation plan; safety protocols (session-termination criteria, medical clearance if applicable, trained observers, restraint/blocking plans within scope); protective equipment when indicated; supervisor + medical review as needed.",
        rationale: "Correct — FA ethically requires clear consent + risk-mitigation because evoking the behavior is a design feature; safety plans are non-negotiable.",
      },
      C: { text: "No consent — FA is standard care.", rationale: "Even standard-care assessments require consent when they evoke problem behavior.", },
      D: { text: "Punishment for the behavior.", rationale: "FA does not use punishment; that would confound the analysis and violate least-restrictive.", },
    },
  ),
  bx(
    "mod40-q12",
    "IISCA proponents (Hanley et al.) argue synthesized contingencies are ecologically valid because:",
    "D",
    {
      A: { text: "Isolated contingencies never occur in the world.", rationale: "Isolated contingencies do occur; the argument is subtler.", },
      B: { text: "The interview is always accurate.", rationale: "Interviews have known limitations.", },
      C: { text: "Only synthesized reinforcers matter.", rationale: "Overstates the argument.", },
      D: {
        text: "In naturally-occurring contexts, multiple reinforcers often converge on the target behavior at the same time (e.g., a demand-escape context also produces caregiver attention and tangible access) — treating the synthesized package is argued to be more representative of real-life maintenance than isolating each contingency artificially.",
        rationale: "Correct — the ecological-validity argument is that naturally-occurring maintenance is often multi-reinforcer synthesized; the debate is whether specificity is worth trading for ecological fit.",
      },
    },
  ),
  bx(
    "mod40-q13",
    "A team runs an FA and finds attention-maintained behavior. The subsequent treatment plan should:",
    "A",
    {
      A: {
        text: "Function-match — non-contingent attention (NCR) on a dense schedule + differential reinforcement of appropriate attention-seeking (DRA, often via FCT mand for attention) + planned extinction for the target problem behavior. Monitor treatment integrity and assent throughout.",
        rationale: "Correct — attention-maintained behavior indicates NCR + DRA + planned extinction with integrity + assent monitoring (Domain H overlap).",
      },
      B: { text: "Time-out from attention as first-line.", rationale: "Time-out from attention could be appropriate but is not first-line without exploring reinforcement-based procedures first.", },
      C: { text: "Ignore-only.", rationale: "Extinction alone without a replacement contact for attention is not function-matched teaching.", },
      D: { text: "Escape extinction.", rationale: "Wrong function — escape extinction addresses escape, not attention.", },
    },
  ),
  bx(
    "mod40-q14",
    "A key ADVANTAGE of latency-based FA compared to rate-based FA is:",
    "C",
    {
      A: { text: "It is quicker to administer.", rationale: "Duration difference is not the primary advantage.", },
      B: { text: "It requires no observation.", rationale: "It still requires direct observation.", },
      C: {
        text: "Reduced learner exposure to the problem behavior — because sessions typically end at the first response, learners experience far fewer occurrences than in a full rate-based session; this is especially valuable for severe/dangerous topographies.",
        rationale: "Correct — latency-based FA's primary advantage is safety via reduced response exposure.",
      },
      D: { text: "It measures topography.", rationale: "It measures time-to-first-response, not topography.", },
    },
  ),
  bx(
    "mod40-q15",
    "You are choosing between classic Iwata FA, IISCA, trial-based FA, and latency-based FA for a client with severe self-injury that occurs unpredictably in a school setting. Which is MOST likely the best fit AND WHY?",
    "B",
    {
      A: {
        text: "Classic Iwata FA in the clinic — highest specificity, so always the best choice.",
        rationale: "Specificity is a strength but the school-setting + severity constraint favors a safer, in-context method.",
      },
      B: {
        text: "Latency-based FA in a controlled setting (or trial-based FA in the classroom) — both reduce learner exposure to severe self-injury (latency ends sessions at first response; trial-based uses brief in-context trials). The specific choice depends on whether in-context or controlled-setting data are needed. Verify safety protocol + consent + supervisor oversight before proceeding.",
        rationale: "Correct — for severe/dangerous target with in-school-only occurrence, safety-oriented methods (latency or trial-based) are strongly preferred over extended clinic-based rate FA.",
      },
      C: {
        text: "IISCA — always preferred over classic FA.",
        rationale: "IISCA is a valuable option but 'always' overstates. Choice depends on question + safety + specificity trade-offs.",
      },
      D: {
        text: "Skip FA entirely; use indirect FBA only.",
        rationale: "Indirect FBA has low interrater reliability and does not experimentally verify function; experimental FA is generally preferred when safely possible.",
      },
    },
  ),
];
