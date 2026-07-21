import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_33_INTERVENTION_SELECTION_QUIZ_BANK } from "@/content/modules/quiz/chapter33InterventionSelectionQuizBank";

/**
 * Domain H — Selecting & Implementing Interventions.
 *
 * Not a Cooper/Heron/Heward chapter. This module fills the BACB 6th ed. TCO
 * Domain H (~11% of the exam), covering social-validity assessment across
 * goals/procedures/outcomes, context and cultural-responsiveness assessment,
 * function-matched procedure selection, least-restrictive-alternative
 * reasoning, positive-reinforcement priority, treatment-integrity monitoring,
 * assent monitoring during implementation, data-based modification, and the
 * distinction from Domain G (knowing HOW procedures work) vs. Domain H
 * (deciding WHETHER + HOW to select and implement them in this context).
 *
 * Verify current BACB Ethics Code + contemporary Compassionate/Trauma-
 * Informed Care literature before study-planning decisions.
 */

export const MOD38_BLUEPRINT: ExtensionBlueprint = {
  id: "mod38",
  chapterNumber: 33,
  activityPrefix: 3800,
  title: "TCO Domain H — Selecting & Implementing Interventions",
  codexHeading: "READING — TCO Domain H (Selecting & Implementing Interventions)",
  codexIntro: `Domain H of the BACB Test Content Outline covers everything a BCBA does between "we know what's happening" (FBA output) and "the plan is working in real life." It is roughly eleven percent of the exam and is the second-most under-covered domain in Cooper/Heron/Heward alone. The Domain G chapters teach you HOW extinction, DRA, and antecedent modifications work; Domain H teaches you WHETHER and HOW to select and implement them in this specific client's context, with this family's values, this team's capacity, and this learner's ongoing assent.

Social validity is the anchor concept for Domain H, and it operates on three levels (Wolf, 1978). GOALS validity asks whether the targeted behaviors are meaningful to the consumer within their natural environment — established through stakeholder input, not by clinician assumption. PROCEDURES validity asks whether the chosen methods are acceptable to the family, learner, and community — a research-supported procedure that a family will not accept is unlikely to be run with integrity. OUTCOMES validity asks whether the observed change is meaningful and durable in the natural environment — including the caregivers' judgment of everyday improvement, not just graph-level effects.

Context assessment precedes procedure selection. Before proposing a plan, gather data on the home + school ecology, staff training capacity, cultural + language considerations, prior treatment history, medical or medication factors, and family goals. The Domain H reasoning question is: given the function identified by the FBA AND this context, which function-matched procedure is most likely to be implemented with integrity? An abstractly-optimal procedure that cannot be run with fidelity in the actual setting predicts poor outcomes; a slightly less-optimal procedure the team can actually implement with integrity predicts better outcomes.

Function-matched procedure selection is the technical core. If the FBA identifies escape from academic demands, escape-matched procedures (FCT for break, demand fading, DRA for engagement) are indicated — not tangible reinforcers, not time-out-from-the-room (which functions as reinforcement for an escape-motivated learner). If attention is the function, NCR attention + DRA + planned extinction is a canonical function-matched package. If automatic (sensory) reinforcement is the function, competing/matched stimulation is typically required because the reinforcer is intrinsic and cannot be withheld socially. Selecting a procedure that mismatches function is one of the most common early-career Domain H errors and is often driven by an availability heuristic ("this is the procedure I know") rather than by function-matched reasoning.

Least-restrictive-alternative + positive-reinforcement-first are the two ethical guardrails on procedure selection. The team is expected to attempt evidence-based, less-restrictive, function-matched procedures first (antecedent modification + DRA/DRO + extinction where safe), and to escalate to more restrictive or punishment-based procedures only with documented failure of less-restrictive alternatives and consented rationale. Restrictive procedures are not prohibited outright — they can be appropriate for high-severity behavior with documented justification — but they are not first-line.

Treatment integrity is the pivot between procedure and outcome. A written protocol produces the outcome the research literature predicts only when it is implemented as designed. Integrity is measured by direct observation against a component checklist (percentage of steps implemented correctly), not by self-report and not by outcome graphs alone. When a program shows deteriorating outcomes, integrity must be assessed BEFORE concluding the procedure has failed — a deteriorating outcome under undocumented drift is a drift problem, not a procedure problem, and the fix is retraining + monitoring, not procedure abandonment. Integrity monitoring is front-loaded (higher frequency early to catch and correct drift) and then intermittent-ongoing (never zero) because drift accumulates silently.

Assent monitoring during implementation is a contemporary Domain H expectation and is DIFFERENT from consent. Consent is the legal authorization from the guardian at intake. Assent is the learner's ongoing willingness to participate, communicated verbally or nonverbally moment-to-moment during the session. Assent-withdrawal signals include verbal refusal, pushing materials away, turning away, walking away, crying, aggression, and self-injury — any communicative-form the learner uses to signal "I don't want to continue." The team's responsibility is to pause, offer choices or adjustments, and only continue if genuine assent is re-established — not to push through the withdrawal in the name of session-plan completion.

Cultural responsiveness and trauma-informed care shape how procedures are selected and delivered. When a research-supported procedure is culturally incongruent with the family's values, the response is not to override the family or to abandon behavior-analytic reasoning — it is shared decision-making that presents the evidence, explores function-matched alternatives the family will accept, and selects the alternative most likely to be implemented with integrity. Trauma-informed care requires screening for trauma history, avoiding procedures that could re-traumatize (for example, forced physical prompts on learners with restraint history), collaborating with mental-health providers when indicated, and prioritizing procedures that build predictability and safety.

Data-based modification closes the loop. Modifications happen against pre-specified decision rules ("if fewer than X% improvement across Y sessions, modify component Z") — not on the supervisor's mood and not on a single session's dip. Before modifying, verify treatment integrity is intact so you are modifying based on outcome data, not drift data. The Domain H distinction from Domain G is: knowing HOW DRA works is Domain G; deciding WHEN DRA is function-matched AND how to implement it with integrity AND when to modify it based on data is Domain H.

For BCBA exam prep: when a stem asks about intervention selection or implementation, first ask which Domain H lever the item is testing — social-validity level, context assessment, function-matching, least-restrictive/positive-reinforcement-first, treatment integrity, assent monitoring, cultural responsiveness, or data-based modification. That is the discrimination the exam actually measures.`,
  footnotes: {
    ch33_1: {
      label: "[1]",
      lines: [
        "BACB 6th ed. Test Content Outline — Domain H (Selecting & Implementing Interventions), approximately 11% of the exam.",
        "Verify current TCO PDF at https://www.bacb.com before study decisions.",
      ],
    },
    ch33_2: {
      label: "[2]",
      lines: [
        "Wolf, M. M. (1978). Social validity: The case for subjective measurement or how applied behavior analysis is finding its heart. Journal of Applied Behavior Analysis, 11, 203–214.",
        "Three-level framework: goals, procedures, outcomes.",
      ],
    },
    ch33_3: {
      label: "[3]",
      lines: [
        "Function-matched procedure selection — the intervention must address the maintaining function identified by the FBA, not the topography of the problem behavior alone.",
        "Cross-reference Cooper Chapters 24 (Extinction), 25 (DR), 26 (Antecedent Interventions), and 27 (FBA).",
      ],
    },
    ch33_4: {
      label: "[4]",
      lines: [
        "Least-restrictive-alternative + positive-reinforcement-first — documented ethical guardrails on procedure selection under the BACB Ethics Code.",
        "Verify current Ethics Code section wording at https://www.bacb.com/ethics-information.",
      ],
    },
    ch33_5: {
      label: "[5]",
      lines: [
        "Treatment integrity — direct-observation-against-component-checklist measurement; front-loaded + intermittent-ongoing monitoring.",
        "Widely covered in the OBM + implementation-science literature.",
      ],
    },
    ch33_6: {
      label: "[6]",
      lines: [
        "Assent monitoring — contemporary practice standard distinct from legal consent; monitored moment-to-moment during implementation.",
        "Cross-reference Compassionate Care literature (Rohrer & Weiss, LeBlanc et al.) and current BACB Ethics Code assent guidance.",
      ],
    },
    ch33_7: {
      label: "[7]",
      lines: [
        "Cultural responsiveness + trauma-informed care — increasingly formalized standards in contemporary Domain H practice.",
        "Verify current position statements from BACB, ABAI, and cultural-responsiveness working groups.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch33_1" },
    { afterSentenceIndex: 1, ref: "ch33_2" },
    { afterSentenceIndex: 2, ref: "ch33_2" },
    { afterSentenceIndex: 3, ref: "ch33_3" },
    { afterSentenceIndex: 4, ref: "ch33_4" },
    { afterSentenceIndex: 5, ref: "ch33_5" },
    { afterSentenceIndex: 6, ref: "ch33_6" },
    { afterSentenceIndex: 7, ref: "ch33_7" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Domain H recap",
    intro:
      "Domain H is about deciding WHICH intervention to use and HOW to run it in real life — social validity, function-matching, least-restrictive, integrity, assent, culture, and data-based modification. About 11% of the exam.",
    chunks: [
      {
        subtitle: "Social validity (Wolf 1978)",
        segments: [
          {
            type: "text",
            text: "Three levels — GOALS (meaningful?), PROCEDURES (acceptable?), OUTCOMES (durable + noticeable in real life?). Get stakeholder input on all three ",
          },
          { type: "footnote", ref: "ch33_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Function-matching",
        segments: [
          {
            type: "text",
            text: "Match the procedure to the FBA function. Escape → FCT + demand fading + DRA. Attention → NCR + DRA + extinction. Automatic → competing/matched stimulation + blocking + DRO/DRA. Mismatching function is the #1 early-career error ",
          },
          { type: "footnote", ref: "ch33_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Least-restrictive + positive-reinforcement-first",
        segments: [
          {
            type: "text",
            text: "Attempt less-restrictive function-matched procedures first (antecedent + DRA/DRO + extinction where safe). Escalate to punishment-based only with documented justification + consent ",
          },
          { type: "footnote", ref: "ch33_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Treatment integrity",
        segments: [
          {
            type: "text",
            text: "Measure via direct observation against a component checklist — not self-report or outcome graphs alone. Front-load monitoring, then intermittent-ongoing forever. When outcomes deteriorate, check integrity BEFORE concluding the procedure failed ",
          },
          { type: "footnote", ref: "ch33_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Assent monitoring",
        segments: [
          {
            type: "text",
            text: "Assent ≠ consent. Consent = legal, one-time, from guardian. Assent = learner's ongoing willingness, verbal or nonverbal, moment-to-moment. Withdrawal signals (verbal 'no,' pushing materials, turning away, crying, aggression, SIB) mean pause + offer choices + re-establish. Don't push through ",
          },
          { type: "footnote", ref: "ch33_6" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Culture + trauma-informed care",
        segments: [
          {
            type: "text",
            text: "When a procedure is culturally incongruent, use shared decision-making to find function-matched alternatives the family accepts. Screen for trauma history; avoid procedures that could re-traumatize; prioritize predictability and safety ",
          },
          { type: "footnote", ref: "ch33_7" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Data-based modification",
        segments: [
          {
            type: "text",
            text: "Modify only against pre-specified decision rules AFTER verifying integrity is intact. Deteriorating outcomes under drift = fix drift, not procedure. Modification without integrity data is guessing ",
          },
          { type: "footnote", ref: "ch33_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "Common Domain H confusions: (1) Domain G vs. H — G is HOW procedures work, H is WHETHER + HOW to select + implement them. (2) Consent vs. assent — consent is legal + one-time, assent is ongoing + learner-level. (3) Function-matching vs. availability bias — pick by function, not by what you know best. (4) Least-restrictive ≠ no-restrictive-ever, it means documented escalation. (5) Deteriorating outcomes without integrity data ≠ procedure failure — could be drift. Name the lever before selecting an option.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch33_v1: { label: "[V1]", lines: ["Social validity — Wolf (1978) three-level framework: goals, procedures, outcomes."] },
    ch33_v2: { label: "[V2]", lines: ["Function-matched procedure selection — pick the procedure that addresses the maintaining function identified by FBA."] },
    ch33_v3: { label: "[V3]", lines: ["Least-restrictive alternative — start with least intrusive evidence-based procedure that matches function; escalate with documented justification."] },
    ch33_v4: { label: "[V4]", lines: ["Positive-reinforcement priority — reinforcement-based procedures first; punishment-based only with documented justification + consent."] },
    ch33_v5: { label: "[V5]", lines: ["Treatment integrity — direct observation vs. component checklist; percentage of steps implemented as designed."] },
    ch33_v6: { label: "[V6]", lines: ["Treatment drift — gradual unplanned deviation from written protocol; distinct from planned data-based modification."] },
    ch33_v7: { label: "[V7]", lines: ["Assent (vs. consent) — learner's ongoing willingness, monitored moment-to-moment; consent is the guardian's legal authorization."] },
    ch33_v8: { label: "[V8]", lines: ["Assent-withdrawal signals — verbal + nonverbal communicative-forms that indicate 'I don't want to continue.'"] },
    ch33_v9: { label: "[V9]", lines: ["Data-based modification decision rules — pre-specified criteria (e.g., '< X% improvement across Y sessions → modify component Z')."] },
    ch33_kc1: { label: "[KC1]", lines: ["Domain H — social-validity + context-assessment framing."] },
    ch33_kc2: { label: "[KC2]", lines: ["Domain H — function-matching + least-restrictive + PR-first."] },
    ch33_kc3: { label: "[KC3]", lines: ["Domain H — implementation-side levers: integrity + assent + drift-vs-modification."] },
    ch33_kc4: { label: "[KC4]", lines: ["Domain H + Domain E — cross-domain overlap for cultural-responsiveness, trauma-informed care, assent monitoring."] },
    ch33_kc5: { label: "[KC5]", lines: ["Domain H vs. Domain G — G = HOW procedures work; H = WHETHER + HOW to select + implement them in context."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Domain H",
    intro: "Selection + implementation levers that recur in Domain H stems.",
    entries: [
      { term: "Social validity (goals)", definition: "Stakeholder judgment that the targeted behaviors are meaningful in the natural environment.", footnoteRef: "ch33_v1" },
      { term: "Social validity (procedures)", definition: "Stakeholder judgment that the chosen methods are acceptable to family, learner, and community.", footnoteRef: "ch33_v1" },
      { term: "Social validity (outcomes)", definition: "Stakeholder + observer judgment that the change is meaningful and durable in the natural environment.", footnoteRef: "ch33_v1" },
      { term: "Function-matched procedure", definition: "Intervention that addresses the maintaining function identified by the FBA (e.g., FCT for break to address escape; NCR attention for attention-maintained behavior).", footnoteRef: "ch33_v2" },
      { term: "Least-restrictive alternative", definition: "Ethical requirement to attempt less-intrusive evidence-based procedures first; escalate only with documented justification and consented rationale.", footnoteRef: "ch33_v3" },
      { term: "Positive-reinforcement-first", definition: "Priority for reinforcement-based procedures (DRA/DRO + antecedent modification + extinction where safe) before punishment-based procedures.", footnoteRef: "ch33_v4" },
      { term: "Treatment integrity", definition: "Percentage of specified procedure steps implemented as designed; measured by direct observation against a component checklist.", footnoteRef: "ch33_v5" },
      { term: "Treatment drift", definition: "Gradual, unplanned deviation of procedure implementation from written protocol; distinct from planned data-based modification.", footnoteRef: "ch33_v6" },
      { term: "Assent (learner)", definition: "The learner's ongoing willingness to participate — verbal or nonverbal — monitored moment-to-moment during implementation. Distinct from legal consent.", footnoteRef: "ch33_v7" },
      { term: "Assent-withdrawal signals", definition: "Verbal + nonverbal communicative-forms (refusal, pushing materials, turning away, crying, aggression, SIB) that indicate the learner does not want to continue.", footnoteRef: "ch33_v8" },
      { term: "Data-based decision rules", definition: "Pre-specified criteria for modifying a procedure (e.g., 'if < X% improvement across Y sessions, modify component Z').", footnoteRef: "ch33_v9" },
      { term: "Context assessment", definition: "Pre-selection review of home + school ecology, staff training capacity, culture + language, prior treatment history, medical factors, and family goals.", footnoteRef: "ch33_kc1" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Domain H",
    intro: "Selection + implementation levers grouped as the exam tests them.",
    concepts: [
      {
        title: "Social validity — goals / procedures / outcomes",
        segments: [
          { type: "text", text: "Wolf's three-level framework; get stakeholder input at each level " },
          { type: "footnote", ref: "ch33_v1" },
          { type: "footnote", ref: "ch33_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Function-matched procedure selection",
        segments: [
          { type: "text", text: "Escape → FCT + demand fading + DRA. Attention → NCR + DRA + extinction. Tangible → NCR access + DRA. Automatic → competing/matched stimulation + DRO/DRA " },
          { type: "footnote", ref: "ch33_v2" },
          { type: "footnote", ref: "ch33_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Least-restrictive + positive-reinforcement-first",
        segments: [
          { type: "text", text: "Attempt least-restrictive function-matched procedures first; escalate with documented justification + consent " },
          { type: "footnote", ref: "ch33_v3" },
          { type: "footnote", ref: "ch33_v4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Treatment integrity + drift vs. modification",
        segments: [
          { type: "text", text: "Measure integrity by direct-observation + component checklist. When outcomes deteriorate, check integrity BEFORE concluding procedure failed. Modify via pre-specified decision rules " },
          { type: "footnote", ref: "ch33_v5" },
          { type: "footnote", ref: "ch33_v6" },
          { type: "footnote", ref: "ch33_v9" },
          { type: "footnote", ref: "ch33_kc3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Assent monitoring + cultural responsiveness + trauma-informed care",
        segments: [
          { type: "text", text: "Monitor assent moment-to-moment. Respond to withdrawal signals with pause + offer + re-establish, not push-through. Screen for trauma; use shared decision-making across cultural values " },
          { type: "footnote", ref: "ch33_v7" },
          { type: "footnote", ref: "ch33_v8" },
          { type: "footnote", ref: "ch33_kc4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Domain H vs. Domain G distinction",
        segments: [
          { type: "text", text: "G = knowing HOW procedures work. H = WHETHER + HOW to select + implement them in real context. The exam tests the distinction " },
          { type: "footnote", ref: "ch33_kc5" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each scenario to the Domain H concept it MOST directly tests — social-validity level, function-matching, least-restrictive/PR-first, treatment integrity, drift vs. modification, assent monitoring, or cultural responsiveness.",
  matchActivityInstructions:
    "Select the Domain H response that BEST addresses each intervention-selection or implementation scenario. Watch for function mismatches, integrity gaps, assent-withdrawal signals, and drift-vs-modification confusions.",
  chainActivityInstructions:
    "Sequence the intervention-selection pipeline from FBA hypothesis through data-based modification — the order should narrate ethical, function-matched, integrity-monitored implementation with ongoing assent.",
  mts: [
    {
      sample_stimulus: "A BCBA selects goals for a client without consulting the family or asking the client's preferences.",
      comparison_options: [
        "Goals-level social validity violation — get stakeholder input on whether targets are meaningful before selecting goals",
        "Procedures-level validity — irrelevant here",
        "Outcomes-level validity — measured only after intervention",
        "No violation — clinician-selected goals are fine",
      ],
      correct_match: "Goals-level social validity violation — get stakeholder input on whether targets are meaningful before selecting goals",
      error_feedback: "Wolf (1978): goals-level social validity requires stakeholder input on whether the targeted behaviors are meaningful in the natural environment.",
    },
    {
      sample_stimulus: "FBA identifies escape from academic demands as the function of a client's aggression. The team proposes tangible reinforcers for task completion.",
      comparison_options: [
        "Function mismatch — proposed procedure targets tangibles, not escape; switch to FCT for break + demand fading + DRA for engagement",
        "Function-matched — reinforcement is reinforcement",
        "Function-matched — tangible is more powerful than break",
        "No procedure needed",
      ],
      correct_match: "Function mismatch — proposed procedure targets tangibles, not escape; switch to FCT for break + demand fading + DRA for engagement",
      error_feedback: "Function-matched selection: escape-maintained behavior requires escape-based procedures (FCT for break, demand fading, DRA for engagement).",
    },
    {
      sample_stimulus: "The team wants to use a highly restrictive procedure as the first-line intervention for a mild escape-maintained SIB with no history of trying less-restrictive procedures.",
      comparison_options: [
        "Least-restrictive violation — attempt evidence-based, function-matched less-restrictive procedures first (FCT + demand fading + DRA); escalate only with documented failure",
        "Acceptable — pick the most powerful procedure regardless",
        "Restrictive procedures are always prohibited",
        "Any procedure is equally acceptable",
      ],
      correct_match: "Least-restrictive violation — attempt evidence-based, function-matched less-restrictive procedures first (FCT + demand fading + DRA); escalate only with documented failure",
      error_feedback: "Least-restrictive-alternative requires escalation only with documented justification, not immediate top-tier procedures.",
    },
    {
      sample_stimulus: "A DRA program shows deteriorating outcomes after 6 weeks. Treatment integrity has NOT been assessed.",
      comparison_options: [
        "Assess treatment integrity BEFORE concluding DRA has failed — deterioration under undocumented drift is drift, not procedure failure",
        "Immediately abandon DRA and switch procedures",
        "Increase reinforcement magnitude blindly",
        "Discharge the client",
      ],
      correct_match: "Assess treatment integrity BEFORE concluding DRA has failed — deterioration under undocumented drift is drift, not procedure failure",
      error_feedback: "Data-based modification requires verifying integrity before concluding a procedure has failed.",
    },
    {
      sample_stimulus: "During a session, a learner consistently pushes materials away, turns away, and says 'no.' The team continues the session unchanged.",
      comparison_options: [
        "Assent-withdrawal signals — pause, offer choices/adjustments, and only continue if assent is re-established",
        "Extinction burst — push through",
        "Ignore the signals to build tolerance",
        "Assent doesn't apply to learners this age",
      ],
      correct_match: "Assent-withdrawal signals — pause, offer choices/adjustments, and only continue if assent is re-established",
      error_feedback: "Contemporary Domain H practice: assent-withdrawal signals require pause + offer + re-establish, not push-through.",
    },
    {
      sample_stimulus: "A research-supported procedure conflicts with the family's cultural framework.",
      comparison_options: [
        "Shared decision-making — present evidence, explore function-matched alternatives the family accepts, select the alternative most likely to be run with integrity",
        "Override the family — efficacy trumps preference",
        "Refuse to treat the family",
        "Abandon function-matching entirely",
      ],
      correct_match: "Shared decision-making — present evidence, explore function-matched alternatives the family accepts, select the alternative most likely to be run with integrity",
      error_feedback: "Cultural responsiveness + procedures-level social validity converge on shared decision-making preserving function-matched reasoning.",
    },
    {
      sample_stimulus: "The team proposes a complex token economy requiring 4 hours of staff training. Only 1 hour of training time is available in the setting.",
      comparison_options: [
        "Realistic-integrity mismatch — redesign to a function-matched procedure that can be trained and implemented with integrity in the available capacity, OR advocate for expanded training resources before implementation",
        "Skip training; run the procedure anyway",
        "Punish staff for low performance",
        "Choose the most complex procedure regardless",
      ],
      correct_match: "Realistic-integrity mismatch — redesign to a function-matched procedure that can be trained and implemented with integrity in the available capacity, OR advocate for expanded training resources before implementation",
      error_feedback: "Domain H context assessment: procedure complexity must match training + implementation capacity in the actual setting.",
    },
    {
      sample_stimulus: "A BCBA modifies the intervention because they 'have a feeling' — no pre-specified decision rules, no integrity check, no defined criteria.",
      comparison_options: [
        "Not data-based — modify only against pre-specified decision rules AND after verifying treatment integrity is intact",
        "Acceptable — clinical judgment is enough",
        "Modify every week regardless of data",
        "Never modify",
      ],
      correct_match: "Not data-based — modify only against pre-specified decision rules AND after verifying treatment integrity is intact",
      error_feedback: "Data-based modification requires pre-specified decision rules + verified integrity before change.",
    },
  ],
  chainTitle: "Function-matched, integrity-monitored intervention pipeline",
  chainFragments: [
    { id: "a", text: "Complete context + cultural + capacity assessment (family goals, staff training capacity, home/school ecology, prior treatment history, trauma screen) BEFORE proposing procedures." },
    { id: "b", text: "Select least-restrictive, positive-reinforcement-first, function-matched procedure the team can actually implement with integrity in this context; document social validity of goals + procedures with stakeholders." },
    { id: "c", text: "Train implementers via BST + coaching to mastery; establish component-checklist integrity monitoring (front-loaded, then intermittent-ongoing) and monitor assent moment-to-moment during sessions." },
    { id: "d", text: "Evaluate against pre-specified decision rules — before modifying, verify integrity is intact; modify only when integrity-verified data show criterion failure; re-check outcome-level social validity in the natural environment." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Social validity — 3 levels", back: "Goals (meaningful?), Procedures (acceptable?), Outcomes (durable in natural environment?)." },
    { front: "Function-matching · escape", back: "FCT for break + demand fading + DRA for engagement." },
    { front: "Function-matching · attention", back: "NCR attention (dense) + DRA + planned extinction." },
    { front: "Function-matching · automatic", back: "Competing/matched stimulation + response blocking + DRO/DRA (can't extinguish socially)." },
    { front: "Least-restrictive alternative", back: "Attempt less-intrusive function-matched procedures first; escalate with documented justification." },
    { front: "Positive-reinforcement-first", back: "Reinforcement-based procedures precede punishment-based; punishment only with documented justification + consent." },
    { front: "Treatment integrity", back: "% of specified steps implemented as designed; measured by direct observation vs. component checklist." },
    { front: "Treatment drift vs. modification", back: "Drift = unplanned deviation. Modification = planned change against pre-specified decision rules with integrity verified." },
    { front: "Assent vs. consent", back: "Consent = legal, one-time, guardian. Assent = ongoing, learner, moment-to-moment, verbal + nonverbal." },
    { front: "Domain G vs. Domain H", back: "G = HOW procedures work. H = WHETHER + HOW to select + implement them in real context." },
  ],
  worksheet: {
    title: "Domain H — intervention selection + implementation scenarios",
    instructions:
      "Classify each scenario by the Domain H lever it tests. Answer every field before selecting Grade worksheet.",
    scenario:
      "Scenario A — BCBA picks goals without stakeholder input.",
    scenario_follow_up:
      "Scenario B — Escape-maintained aggression met with tangible reinforcers.\n\nScenario C — Restrictive procedure as first-line for mild escape SIB without trying less-restrictive procedures.\n\nScenario D — DRA outcomes deteriorate; integrity has not been assessed.\n\nScenario E — Learner pushes materials away and says 'no'; team continues unchanged.\n\nScenario F — Research-supported procedure conflicts with family cultural framework.\n\nScenario G — Complex token economy proposed but only 1 hour of training is available in the setting.\n\nScenario H — BCBA modifies intervention on 'gut feeling' without pre-specified rules or integrity check.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Which social-validity level?",
        options: [
          "Goals — get stakeholder input on whether targets are meaningful",
          "Procedures only",
          "Outcomes only",
        ],
        correct: "Goals — get stakeholder input on whether targets are meaningful",
      },
      {
        id: "response_2",
        label: "Scenario B · Diagnosis + fix?",
        options: [
          "Function mismatch — switch to FCT + demand fading + DRA",
          "Function-matched — reinforcement is reinforcement",
          "No procedure needed",
        ],
        correct: "Function mismatch — switch to FCT + demand fading + DRA",
      },
      {
        id: "response_3",
        label: "Scenario C · Guardrail violation?",
        options: [
          "Least-restrictive — attempt less-restrictive function-matched procedures first",
          "Acceptable — pick most powerful",
          "Restrictive procedures always prohibited",
        ],
        correct: "Least-restrictive — attempt less-restrictive function-matched procedures first",
      },
      {
        id: "response_4",
        label: "Scenario D · Next step?",
        options: [
          "Assess integrity BEFORE concluding DRA failed",
          "Abandon DRA immediately",
          "Discharge client",
        ],
        correct: "Assess integrity BEFORE concluding DRA failed",
      },
      {
        id: "response_5",
        label: "Scenario E · Correct response?",
        options: [
          "Assent-withdrawal — pause, offer choices, re-establish assent",
          "Extinction burst — push through",
          "Ignore to build tolerance",
        ],
        correct: "Assent-withdrawal — pause, offer choices, re-establish assent",
      },
      {
        id: "response_6",
        label: "Scenario F · Best response?",
        options: [
          "Shared decision-making — find function-matched alternative family accepts",
          "Override the family — efficacy trumps preference",
          "Refuse to treat",
        ],
        correct: "Shared decision-making — find function-matched alternative family accepts",
      },
      {
        id: "response_7",
        label: "Scenario G · Design fix?",
        options: [
          "Redesign to procedure that can be run with integrity in available capacity, OR expand training",
          "Skip training; run anyway",
          "Punish staff",
        ],
        correct: "Redesign to procedure that can be run with integrity in available capacity, OR expand training",
      },
      {
        id: "response_8",
        label: "Scenario H · Diagnosis?",
        options: [
          "Not data-based — modify only against pre-specified rules with verified integrity",
          "Acceptable — clinical judgment sufficient",
          "Modify every week regardless",
        ],
        correct: "Not data-based — modify only against pre-specified rules with verified integrity",
      },
    ],
    remediationLog:
      "Rebuild Domain H fluency: Which lever is the stem testing? — social-validity level, function-matching, least-restrictive/PR-first, treatment integrity, drift vs. modification, assent monitoring, cultural responsiveness, or Domain G vs. H distinction?",
  },
  bdsBank: CHAPTER_33_INTERVENTION_SELECTION_QUIZ_BANK,
};
