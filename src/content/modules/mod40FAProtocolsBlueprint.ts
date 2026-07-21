import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_35_FA_PROTOCOLS_QUIZ_BANK } from "@/content/modules/quiz/chapter35FAProtocolsQuizBank";

/**
 * FA Protocols — deep dive on Functional Analysis variants.
 *
 * Cross-references Cooper Chapter 27 (mod09 Experimental FBA). Covers classic
 * Iwata (1982/1994), IISCA (Hanley et al. 2014), IWFA, trial-based FA (Bloom
 * et al. 2011), latency-based FA (Thomason-Sassi et al. 2011), precursor FA
 * (Smith & Churchill 2002; Fritz et al. 2013), and brief FA (Northup et al.
 * 1991) — how they differ methodologically, when each is best fit, and how to
 * interpret differentiated vs. undifferentiated outcomes.
 */

export const MOD40_BLUEPRINT: ExtensionBlueprint = {
  id: "mod40",
  chapterNumber: 35,
  activityPrefix: 4000,
  title: "FA Protocols Deep Dive — Iwata, IISCA, Trial-Based, Latency, Precursor, Brief",
  codexHeading: "READING — Functional Analysis Protocols (extends Cooper Ch. 27)",
  codexIntro: `Cooper Chapter 27 (Functional Behavior Assessment) introduces the classic Iwata et al. (1982/1994) experimental Functional Analysis at the level appropriate for a foundational text. Contemporary practice deploys multiple FA variants — some are safer, some are faster, some are more ecologically valid, some sacrifice specificity for practicality. This module maps the variants against when each is best fit and how to interpret outcomes.

The classic Iwata FA uses four (sometimes five) conditions run in a multielement design over multiple sessions. ATTENTION delivers contingent adult attention for the target behavior only. ESCAPE/DEMAND removes an ongoing academic demand contingent on the target behavior. ALONE (or IGNORE / NO-INTERACTION) tests whether the behavior persists in the absence of social contingencies, indexing potential automatic reinforcement. PLAY serves as a control — continuous non-contingent access to preferred items and attention with no demands — establishing a low-motivating-operation baseline against which test conditions are compared. A TANGIBLE condition is added when caregiver interview points to a specific tangible reinforcer. Differentiated elevation in a specific test condition (against low rates in play) points to that condition's reinforcer as the maintaining function.

The IISCA (Interview-Informed Synthesized Contingency Analysis; Hanley, Jin, Vanselow, & Hanratty, 2014) inverts one part of the classic logic. Instead of isolating each candidate reinforcer in a separate condition, IISCA uses a caregiver interview to identify the combination of reinforcers that appear to converge on the target behavior in the natural context (for example, escape + attention + tangible occurring together), then compares a synthesized TEST condition (delivering that combination contingent on the target) against a synthesized CONTROL condition (delivering the combination non-contingently). Proponents argue this is more ecologically valid — natural contingencies often ARE synthesized — and typically faster. Critics argue that synthesized results cannot isolate which specific reinforcer is doing the work, limiting specificity for treatment component selection. The methodological debate is ongoing; both approaches are legitimate current practice with different trade-offs.

TRIAL-BASED FA (Bloom, Iwata, Fritz, Roscoe, & Carreau, 2011) uses brief 1–2 minute test-and-control trials embedded within the natural classroom or setting rather than in an extended clinic-based session. Its primary advantage is ecological deployment in schools + community contexts where clinic-based FA is impractical; the trade-off is less-stable data per trial than extended FA.

LATENCY-BASED FA (Thomason-Sassi, Iwata, Neidert, & Roscoe, 2011) uses TIME-TO-FIRST-RESPONSE as the dependent measure. Sessions typically terminate at the first target response, reducing learner exposure to potentially dangerous behavior. This is a strongly-preferred method for severe or dangerous topographies because the safety benefit is substantial with minimal cost to differentiation.

PRECURSOR FA (Smith & Churchill, 2002; Fritz et al., 2013) targets a reliable precursor behavior that consistently precedes the dangerous target — a stable early-chain response like grimacing or vocalizing that reliably signals the later severe topography is coming. The FA is conducted on the precursor, and treatment developed against the precursor's function often generalizes to the target.

BRIEF FA (Northup et al., 1991) uses single ~5-minute conditions in one compact ~90-minute-or-less session, often as a screening or when full FA is time-constrained. Data are less stable than extended FA; follow-up is common when brief FA is inconclusive.

Interpretation. DIFFERENTIATED outcomes — elevation in one condition against low rates in play and other test conditions — support a specific function hypothesis (attention, escape, tangible, or automatic). UNDIFFERENTIATED outcomes — elevated across all conditions, or absent across all conditions — do NOT support a function conclusion; the methodological response is to extend sessions, add or refine conditions, screen the establishing operation, richen play reinforcers, or switch methodology (e.g., IISCA when isolated conditions fail to evoke, latency when severity limits exposure). Automatic reinforcement is inferred when rates persist in ALONE/IGNORE and remain low elsewhere; treatment typically requires competing/matched stimulation because the reinforcer cannot be withheld socially.

Ethics. Because experimental FA DELIBERATELY evokes the problem behavior as a design feature, informed consent, risk-mitigation planning, session-termination criteria, medical clearance where indicated, trained observers, and supervisor + medical review are non-negotiable. Protective equipment is used where appropriate. Consent must be clear that evoking the behavior is intentional and time-limited. Choosing between FA variants is itself an ethical decision: latency-based or precursor FA for severe topographies is often the ethically-preferred choice even if it costs some specificity, because it reduces learner exposure to the problem behavior.

Choosing the right FA for the question. Ask (1) what is the safety profile of the target behavior (severe → latency or precursor); (2) is the natural setting critical (school → trial-based); (3) is time constrained (screening → brief; multi-reinforcer natural context → IISCA); (4) is specificity of the isolated maintaining reinforcer critical (treatment component selection → classic Iwata). Match method to question.`,
  footnotes: {
    ch35_1: {
      label: "[1]",
      lines: [
        "Iwata, B. A., Dorsey, M. F., Slifer, K. J., Bauman, K. E., & Richman, G. S. (1982/1994). Toward a functional analysis of self-injury. Journal of Applied Behavior Analysis, 27, 197–209.",
        "Foundational experimental FA methodology.",
      ],
    },
    ch35_2: {
      label: "[2]",
      lines: [
        "Hanley, G. P., Jin, C. S., Vanselow, N. R., & Hanratty, L. A. (2014). Producing meaningful improvements in problem behavior of children with autism via synthesized analyses and treatments. Journal of Applied Behavior Analysis, 47, 16–36.",
        "IISCA methodology origin.",
      ],
    },
    ch35_3: {
      label: "[3]",
      lines: [
        "Bloom, S. E., Iwata, B. A., Fritz, J. N., Roscoe, E. M., & Carreau, A. B. (2011). Classroom application of a trial-based functional analysis. Journal of Applied Behavior Analysis, 44, 19–31.",
        "Trial-based FA in classroom settings.",
      ],
    },
    ch35_4: {
      label: "[4]",
      lines: [
        "Thomason-Sassi, J. L., Iwata, B. A., Neidert, P. L., & Roscoe, E. M. (2011). Response latency as an index of response strength during functional analyses of problem behavior. Journal of Applied Behavior Analysis, 44, 51–67.",
        "Latency-based FA methodology.",
      ],
    },
    ch35_5: {
      label: "[5]",
      lines: [
        "Smith, R. G., & Churchill, R. M. (2002). Identification of environmental determinants of behavior disorders through functional analysis of precursor behaviors. Journal of Applied Behavior Analysis, 35, 125–136.",
        "Precursor FA methodology (with Fritz et al., 2013 replication).",
      ],
    },
    ch35_6: {
      label: "[6]",
      lines: [
        "Northup, J., Wacker, D., Sasso, G., Steege, M., Cigrand, K., Cook, J., & DeRaad, A. (1991). A brief functional analysis of aggressive and alternative behavior in an outclinic setting. Journal of Applied Behavior Analysis, 24, 509–522.",
        "Brief FA origin.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch35_1" },
    { afterSentenceIndex: 1, ref: "ch35_1" },
    { afterSentenceIndex: 2, ref: "ch35_2" },
    { afterSentenceIndex: 3, ref: "ch35_3" },
    { afterSentenceIndex: 4, ref: "ch35_4" },
    { afterSentenceIndex: 5, ref: "ch35_5" },
    { afterSentenceIndex: 6, ref: "ch35_6" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — FA Protocols recap",
    intro: "Six FA variants; pick the one that matches the safety + setting + specificity question.",
    chunks: [
      {
        subtitle: "Classic Iwata",
        segments: [{ type: "text", text: "4 (±1) conditions: attention, escape, alone/ignore, play control (± tangible). Multielement design. Differentiated elevation → function." }],
      },
      {
        subtitle: "IISCA",
        segments: [{ type: "text", text: "Interview identifies converging reinforcers → SYNTHESIZED test vs. control. Ecologically valid + fast; trade-off is specificity of individual reinforcer." }],
      },
      {
        subtitle: "Trial-based FA",
        segments: [{ type: "text", text: "1–2 min trials in the natural classroom/setting. Best when clinic-based FA is impractical." }],
      },
      {
        subtitle: "Latency-based FA",
        segments: [{ type: "text", text: "Session ends at FIRST response. Safety-preferred for severe/dangerous topographies — reduces learner exposure." }],
      },
      {
        subtitle: "Precursor FA",
        segments: [{ type: "text", text: "FA runs on a reliable precursor to the dangerous target — protects the learner while identifying function." }],
      },
      {
        subtitle: "Brief FA",
        segments: [{ type: "text", text: "Single ~5-min conditions in a ~90-min session. Screening use; less stable, follow-up common." }],
      },
      {
        subtitle: "Choosing",
        segments: [{ type: "text", text: "Severe → latency or precursor. School-only → trial-based. Multi-reinforcer natural context → IISCA. Time-constrained screen → brief. Specificity → classic." }],
      },
      {
        subtitle: "Undifferentiated outcomes",
        segments: [{ type: "text", text: "Elevated everywhere or nowhere = no function conclusion. Extend sessions, refine conditions, richen play, screen EO, or switch methodology." }],
      },
      {
        subtitle: "Ethics",
        segments: [{ type: "text", text: "FA evokes the behavior on purpose — informed consent, safety protocols, session-termination criteria, medical clearance if indicated, trained observers." }],
      },
    ],
  },
  supplementalFootnotes: {
    ch35_v1: { label: "[V1]", lines: ["Attention condition — contingent adult attention for target behavior only."] },
    ch35_v2: { label: "[V2]", lines: ["Escape/Demand condition — break from demand contingent on target behavior."] },
    ch35_v3: { label: "[V3]", lines: ["Alone/Ignore condition — no social contingencies; indexes automatic reinforcement."] },
    ch35_v4: { label: "[V4]", lines: ["Play control — non-contingent preferred items + attention + no demands."] },
    ch35_v5: { label: "[V5]", lines: ["IISCA synthesized contingency — combined interview-identified reinforcers in a single test condition."] },
    ch35_v6: { label: "[V6]", lines: ["Undifferentiated FA — elevation across all conditions OR absence across all; no function conclusion."] },
    ch35_v7: { label: "[V7]", lines: ["Latency measure — time from EO onset to first target response; sessions terminate at first response."] },
    ch35_v8: { label: "[V8]", lines: ["Precursor behavior — reliable early-chain response that consistently precedes the dangerous target."] },
    ch35_kc1: { label: "[KC1]", lines: ["Differentiation logic — elevation in a test condition against low control-condition rates supports that reinforcer as function."] },
    ch35_kc2: { label: "[KC2]", lines: ["Safety-first FA — latency + precursor methods for severe topographies is the ethically-preferred approach."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — FA Protocols",
    intro: "FA method vocabulary you're likely to see cross-referenced on the exam.",
    entries: [
      { term: "Attention condition", definition: "Contingent adult attention delivered for the target behavior only.", footnoteRef: "ch35_v1" },
      { term: "Escape/Demand condition", definition: "Removal of an ongoing demand contingent on the target behavior.", footnoteRef: "ch35_v2" },
      { term: "Alone / Ignore condition", definition: "No social contingencies; used to test automatic (sensory) reinforcement.", footnoteRef: "ch35_v3" },
      { term: "Play control", definition: "Non-contingent access to preferred items + attention + no demands; low-EO baseline for differentiation.", footnoteRef: "ch35_v4" },
      { term: "Synthesized contingency (IISCA)", definition: "Combined interview-identified reinforcers delivered together in a single test condition, compared against a synthesized control.", footnoteRef: "ch35_v5" },
      { term: "Undifferentiated FA", definition: "Elevation across all conditions OR absence across all conditions — does not support any function conclusion.", footnoteRef: "ch35_v6" },
      { term: "Latency measure", definition: "Time from EO onset (or condition introduction) to first target response; sessions typically terminate at first response.", footnoteRef: "ch35_v7" },
      { term: "Precursor behavior", definition: "Reliable early-chain response that consistently precedes a dangerous target; FA on the precursor protects the learner.", footnoteRef: "ch35_v8" },
      { term: "Trial-based FA", definition: "Brief 1–2 minute test-and-control trials embedded within the natural setting (classroom + community).", footnoteRef: "ch35_kc2" },
      { term: "Brief FA", definition: "Single ~5-minute conditions run one time each in a compact ≤90-min session; screening use.", footnoteRef: "ch35_kc2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — FA Protocols",
    intro: "Six variants + interpretation + method-matching logic.",
    concepts: [
      {
        title: "Classic Iwata FA vs. IISCA",
        segments: [
          { type: "text", text: "Classic isolates each reinforcer in separate conditions (specificity); IISCA synthesizes interview-identified reinforcers in one test (ecological validity + speed) " },
          { type: "footnote", ref: "ch35_v1" },
          { type: "footnote", ref: "ch35_v5" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Trial-based FA (classroom deployment)",
        segments: [
          { type: "text", text: "Brief 1–2 min trials in the natural setting; best when clinic-based FA is impractical " },
          { type: "footnote", ref: "ch35_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Latency + precursor FA (safety-first)",
        segments: [
          { type: "text", text: "Latency ends sessions at first response; precursor targets a reliable early-chain response — both reduce learner exposure to severe topographies " },
          { type: "footnote", ref: "ch35_v7" },
          { type: "footnote", ref: "ch35_v8" },
          { type: "footnote", ref: "ch35_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Interpretation — differentiated vs. undifferentiated",
        segments: [
          { type: "text", text: "Differentiated elevation supports specific function; undifferentiated requires methodological modification (extend, refine, screen EO, or switch method) " },
          { type: "footnote", ref: "ch35_v6" },
          { type: "footnote", ref: "ch35_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethics of evoking problem behavior",
        segments: [
          { type: "text", text: "Informed consent + safety protocols + session-termination criteria + supervisor/medical review — non-negotiable because FA deliberately evokes the target " },
          { type: "footnote", ref: "ch35_kc2" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each FA scenario to the variant that BEST fits — classic Iwata, IISCA, trial-based, latency-based, precursor, or brief.",
  matchActivityInstructions:
    "Select the FA methodology or interpretation move that BEST addresses each scenario. Watch for safety severity, setting constraints, time constraints, and specificity requirements.",
  chainActivityInstructions:
    "Sequence the safe deployment of an experimental FA for a client with severe self-injury from consent through treatment recommendation.",
  mts: [
    {
      sample_stimulus: "Client with severe unpredictable self-injury; you need to identify function without exposing the learner to prolonged episodes.",
      comparison_options: [
        "Latency-based FA — sessions terminate at first response, minimizing learner exposure",
        "Extended classic FA — 40-min sessions, no safety modification",
        "Verbal interview only — skip experimental FA",
        "Ignore the safety concern and run standard FA",
      ],
      correct_match: "Latency-based FA — sessions terminate at first response, minimizing learner exposure",
      error_feedback: "For severe/dangerous targets, latency-based FA is the safety-preferred choice with minimal cost to differentiation.",
    },
    {
      sample_stimulus: "Client's problem behavior only occurs in the classroom; clinic-based FA has failed to evoke.",
      comparison_options: [
        "Trial-based FA in the classroom — brief 1–2 min trials in the natural setting",
        "Extended clinic FA regardless",
        "Verbal interview only",
        "Skip FA — assume attention function",
      ],
      correct_match: "Trial-based FA in the classroom — brief 1–2 min trials in the natural setting",
      error_feedback: "When the natural setting is critical + clinic-based FA doesn't evoke, trial-based FA in-context is the best fit.",
    },
    {
      sample_stimulus: "Caregiver interview clearly identifies escape + attention + tangible converging on the target in the natural context; team wants a fast ecologically-valid FA.",
      comparison_options: [
        "IISCA — synthesized contingency test vs. control comparing the interview-identified combination",
        "Classic isolated conditions only",
        "Alone-only design",
        "No FA needed",
      ],
      correct_match: "IISCA — synthesized contingency test vs. control comparing the interview-identified combination",
      error_feedback: "IISCA is designed for the multi-reinforcer natural-context case identified via interview.",
    },
    {
      sample_stimulus: "FA data show elevation in EVERY condition INCLUDING play. What do you conclude?",
      comparison_options: [
        "Undifferentiated — no function conclusion; extend sessions, richen play reinforcers, refine conditions, screen EO, or switch methodology",
        "Automatic reinforcement confirmed",
        "Attention-maintained confirmed",
        "Escape-maintained confirmed",
      ],
      correct_match: "Undifferentiated — no function conclusion; extend sessions, richen play reinforcers, refine conditions, screen EO, or switch methodology",
      error_feedback: "Elevation in the control condition weakens all function hypotheses; the response is methodological modification.",
    },
    {
      sample_stimulus: "FA data show elevation ONLY in the ALONE condition, LOW in all others.",
      comparison_options: [
        "Automatic (sensory) reinforcement — treatment typically requires competing/matched stimulation",
        "Attention-maintained",
        "Escape-maintained",
        "Tangible-maintained",
      ],
      correct_match: "Automatic (sensory) reinforcement — treatment typically requires competing/matched stimulation",
      error_feedback: "Elevation in alone with low elsewhere is the classic automatic pattern; social extinction alone will not work.",
    },
    {
      sample_stimulus: "Target behavior is too dangerous or infrequent to evoke directly; the client consistently emits a specific grimace + vocalization before every episode.",
      comparison_options: [
        "Precursor FA — target the reliable precursor; treatment often generalizes to the dangerous target",
        "Extended rate FA regardless",
        "Skip FA",
        "Punish the precursor",
      ],
      correct_match: "Precursor FA — target the reliable precursor; treatment often generalizes to the dangerous target",
      error_feedback: "Precursor FA is designed for dangerous or low-frequency targets with a reliable early-chain response.",
    },
    {
      sample_stimulus: "Before running any experimental FA, the team is finalizing safeguards.",
      comparison_options: [
        "Informed consent + risk-mitigation plan + session-termination criteria + medical clearance if indicated + trained observers + supervisor/medical review",
        "No consent needed — FA is standard care",
        "Add punishment for the target",
        "Higher reinforcer density is the only safeguard",
      ],
      correct_match: "Informed consent + risk-mitigation plan + session-termination criteria + medical clearance if indicated + trained observers + supervisor/medical review",
      error_feedback: "FA ethics — non-negotiable safeguards because the design deliberately evokes the target.",
    },
    {
      sample_stimulus: "Team completes an FA and finds clear attention function. What is the function-matched treatment package?",
      comparison_options: [
        "NCR attention on a dense schedule + DRA (FCT mand for attention) + planned extinction for the target + integrity + assent monitoring",
        "Time-out from attention as first-line",
        "Extinction alone with no replacement",
        "Escape extinction",
      ],
      correct_match: "NCR attention on a dense schedule + DRA (FCT mand for attention) + planned extinction for the target + integrity + assent monitoring",
      error_feedback: "Attention-maintained → NCR + DRA + planned extinction with integrity + assent (Domain H overlap).",
    },
  ],
  chainTitle: "Safe deployment of an experimental FA",
  chainFragments: [
    { id: "a", text: "Consent + risk-mitigation plan + session-termination criteria + medical clearance where indicated + trained observers + supervisor/medical review." },
    { id: "b", text: "Method selection matched to safety + setting + specificity question — latency/precursor for severe, trial-based for school-only, IISCA for multi-reinforcer natural context, classic Iwata for maximum specificity." },
    { id: "c", text: "Conduct FA sessions with continuous IOA on data collection; monitor safety and assent throughout; terminate condition at pre-specified criteria if triggered." },
    { id: "d", text: "Interpret differentiation logic; if undifferentiated, modify method (extend, refine, richen play, screen EO, or switch variant) before concluding function." },
    { id: "e", text: "Recommend function-matched treatment package with integrity + assent monitoring plan; document rationale + safety review outcomes." },
  ],
  chainOrder: ["a", "b", "c", "d", "e"],
  safmedTerms: [
    { front: "Classic Iwata conditions", back: "Attention, Escape/Demand, Alone/Ignore, Play control (± Tangible)." },
    { front: "IISCA", back: "Synthesized contingency test vs. synthesized control (interview-informed)." },
    { front: "Trial-based FA", back: "1–2 min test/control trials in the natural classroom/setting." },
    { front: "Latency-based FA", back: "Session ends at first response; safety-preferred for severe topographies." },
    { front: "Precursor FA", back: "FA on reliable early-chain precursor protects learner from dangerous target." },
    { front: "Brief FA", back: "Single ~5-min conditions in ≤90-min session; screening use." },
    { front: "Undifferentiated outcome", back: "Elevated everywhere or nowhere = no function conclusion; modify method." },
    { front: "Play control purpose", back: "Low-EO baseline for differentiation comparison." },
    { front: "Automatic function indicator", back: "Elevated in alone, low elsewhere; needs competing/matched stimulation." },
  ],
  worksheet: {
    title: "FA Protocols — method matching + interpretation",
    instructions: "Match each scenario to the best FA variant or interpretation.",
    scenario: "Scenario A — Severe unpredictable self-injury; need function without prolonged exposure.",
    scenario_follow_up:
      "Scenario B — Behavior only occurs in classroom; clinic FA fails to evoke.\n\nScenario C — Interview identifies escape + attention + tangible converging on target.\n\nScenario D — FA elevation in EVERY condition including play.\n\nScenario E — FA elevation ONLY in alone, low elsewhere.\n\nScenario F — Dangerous target with reliable grimace + vocalization precursor.\n\nScenario G — Finalizing ethical safeguards before starting an FA.\n\nScenario H — FA identifies attention function; design treatment package.",
    fields: [
      { id: "response_1", label: "Scenario A · Best FA?", options: ["Latency-based FA", "Extended classic FA regardless", "Verbal interview only"], correct: "Latency-based FA" },
      { id: "response_2", label: "Scenario B · Best FA?", options: ["Trial-based FA in classroom", "Extended clinic FA", "Skip FA"], correct: "Trial-based FA in classroom" },
      { id: "response_3", label: "Scenario C · Best FA?", options: ["IISCA — synthesized contingency test vs. control", "Isolated classic conditions", "Alone-only"], correct: "IISCA — synthesized contingency test vs. control" },
      { id: "response_4", label: "Scenario D · Interpretation?", options: ["Undifferentiated — modify method before concluding function", "Automatic confirmed", "Attention confirmed"], correct: "Undifferentiated — modify method before concluding function" },
      { id: "response_5", label: "Scenario E · Interpretation?", options: ["Automatic reinforcement — needs competing/matched stimulation", "Attention", "Escape"], correct: "Automatic reinforcement — needs competing/matched stimulation" },
      { id: "response_6", label: "Scenario F · Best FA?", options: ["Precursor FA on reliable early-chain response", "Extended rate FA on target", "Punish the precursor"], correct: "Precursor FA on reliable early-chain response" },
      { id: "response_7", label: "Scenario G · Safeguards?", options: ["Consent + risk plan + termination criteria + medical + observers + supervisor review", "No consent — standard care", "Add punishment"], correct: "Consent + risk plan + termination criteria + medical + observers + supervisor review" },
      { id: "response_8", label: "Scenario H · Treatment?", options: ["NCR attention + DRA (FCT for attention) + planned extinction + integrity + assent monitoring", "Time-out first-line", "Escape extinction"], correct: "NCR attention + DRA (FCT for attention) + planned extinction + integrity + assent monitoring" },
    ],
    remediationLog:
      "Rebuild FA fluency: match method to question — severity, setting, time, specificity. Differentiated → function. Undifferentiated → modify method.",
  },
  bdsBank: CHAPTER_35_FA_PROTOCOLS_QUIZ_BANK,
};
