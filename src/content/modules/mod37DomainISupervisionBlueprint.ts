import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_32_SUPERVISION_QUIZ_BANK } from "@/content/modules/quiz/chapter32SupervisionQuizBank";

/**
 * Domain I — Personnel Supervision, Performance Management & OBM.
 *
 * Not a Cooper/Heron/Heward chapter. This module fills the BACB 6th ed. TCO
 * Domain I (~10% of the exam), covering supervisor competencies, Behavioral
 * Skills Training (BST), competency-based training, performance monitoring,
 * feedback systems, Organizational Behavior Management (OBM) fundamentals
 * (PIC/NIC), RBT oversight requirements, BCBA fieldwork rules, ethical
 * supervision boundaries, and systems-level personnel management.
 *
 * Verify current BACB Supervisor Handbook, RBT Handbook, and Fieldwork
 * requirements before study-planning decisions — BACB rules update.
 */

export const MOD37_BLUEPRINT: ExtensionBlueprint = {
  id: "mod37",
  chapterNumber: 32,
  activityPrefix: 3700,
  title: "TCO Domain I — Supervision, Personnel & Performance Management",
  codexHeading: "READING — TCO Domain I (Personnel Supervision & Performance Management)",
  codexIntro: `Domain I of the BACB Test Content Outline covers everything a BCBA does when the target of intervention is not a client directly, but the people who serve clients — RBTs, BCaBAs, BCBA trainees, and organizational systems that shape their behavior. It is roughly ten percent of the exam and is the single most under-covered domain in Cooper/Heron/Heward alone; that gap is what this module closes.

Behavioral Skills Training (BST) is the workhorse method for teaching supervisees. Its five components run in order: written or verbal instruction, live modeling, rehearsal, immediate feedback, and continued rehearsal to a mastery criterion. Handing over a protocol without modeling or rehearsal, or checking competency after a single clean trial, is not BST — it is exposure. Competency-based training additionally requires that the supervisee demonstrate the target skill across multiple opportunities, stimuli, and contexts before being deemed competent. Topography-only training (can they perform the motor form once) is not competency.

Performance monitoring uses direct observation, permanent products (session notes, graphs, billing entries), and IOA on the supervisor's own coding when observations drive high-stakes decisions. Direct observation catches procedural-integrity events that permanent products miss (prompt gradient, timing, error correction, safety response); permanent-product review catches trends and completeness that no observer captures in the moment. Both are required and neither substitutes for the other.

Feedback systems succeed or fail based on timing, specificity, and positive-to-corrective ratio. Immediate specific feedback shapes the pinpointed target behavior; delayed generic feedback ("good job" three weeks later) neither discriminates the correct components nor exerts stimulus control. An all-corrective feedback regime resembles a heavy negative-reinforcement schedule — staff escape it by turning over, and error patterns persist because the reinforcer for approach behavior (contacting the supervisor) has been removed.

OBM's PIC/NIC analysis frames performance in terms of consequences that are Positive/Negative, Immediate/Future, Certain/Uncertain. Behavior is powerfully controlled by PIC and NIC (positive-immediate-certain and negative-immediate-certain) consequences; it is weakly controlled by future-uncertain consequences. When a valued behavior (e.g., on-time session notes) has only future-uncertain positive outcomes, the OBM fix is to make the consequence more immediate and more certain — same-day acknowledgment, small performance-contingent reinforcer, or systems that automate the payoff.

Antecedent-side OBM interventions engineer the task and environment before the behavior occurs: task clarification, prompts, materials redesign (e.g., autofill fields in a session-note template), workflow simplification. Consequence-side interventions arrange contingent feedback, performance-contingent reinforcement, and public performance-feedback boards. Systems-level interventions redesign entire workflows — intake to first session, supervision-assignment pipelines, fieldwork logging protocols — rather than coaching one performer at a time.

BACB supervisor and RBT rules govern who can supervise, how much, and how it must be documented. Widely-taught approximations of current BACB standard supervision include roughly 5% of accumulated fieldwork hours supervised each period, at least four contacts per month with at least one direct-observation contact, an active supervision contract during the entire accrual period, and a restricted/unrestricted split that caps the proportion of hours that can be direct-implementation work. RBT ongoing supervision is widely taught as approximately 5% of the RBT's direct-service hours per supervisory period, using a blend of observation, permanent-product review, and feedback. Because BACB updates these numbers periodically, verify the currently-published BACB Handbook wording before study or practice decisions.

Ethical supervision guardrails include: accepting only the number of supervisees you can effectively supervise given other demands; supervising only within your own scope of competence (referring or gaining competence before supervising unfamiliar treatment packages); avoiding multiple relationships that impair objectivity (you cannot be both supervisor and therapist to the same person); delegating only within the delegatee's demonstrated competence and credential scope (an RBT does not author an FBA); documenting fieldwork contemporaneously (never signing off on retroactively-reconstructed unrecorded activity); and responsible termination of supervision with reasonable notice, records transfer, and no retaliation. These sit inside the BACB Ethics Code alongside the client-facing duties covered in Chapter 31.

For BCBA exam prep: when a stem describes personnel behavior, first ask which Domain I lever the item is testing — training method (BST/competency-based), monitoring channel (observation vs. permanent product), feedback design (timing/specificity/ratio), OBM contingency class (PIC/NIC), scope-of-practice, multiple relationship, delegation, fieldwork rules, or termination. Discrimination among these is what the exam actually measures.`,
  footnotes: {
    ch32_1: {
      label: "[1]",
      lines: [
        "BACB 6th ed. Test Content Outline — Domain I (Personnel Supervision & Management), approximately 10% of the exam.",
        "Verify current TCO PDF at https://www.bacb.com before study decisions.",
      ],
    },
    ch32_2: {
      label: "[2]",
      lines: [
        "Behavioral Skills Training (BST) — instruction, modeling, rehearsal, feedback, mastery.",
        "Widely covered in the OBM and supervision literature (e.g., Parsons, Rollyson, & Reid).",
      ],
    },
    ch32_3: {
      label: "[3]",
      lines: [
        "Performance monitoring via direct observation + permanent products + IOA on supervisor coding.",
        "Direct observation catches integrity events permanent products miss; permanent products catch trends observation misses.",
      ],
    },
    ch32_4: {
      label: "[4]",
      lines: [
        "PIC/NIC analysis — Positive/Negative × Immediate/Future × Certain/Uncertain consequence categorization.",
        "Widely taught in Aubrey Daniels-style Performance Management texts.",
      ],
    },
    ch32_5: {
      label: "[5]",
      lines: [
        "BACB Supervisor Handbook + RBT Handbook + Fieldwork requirements.",
        "Verify current wording at https://www.bacb.com/supervision — numbers update.",
      ],
    },
    ch32_6: {
      label: "[6]",
      lines: [
        "BACB Ethics Code sections addressing scope of competence, multiple relationships, supervisee load, delegation, and responsible termination.",
        "Cross-reference Chapter 31 (Ethics) coverage — same code, personnel-management applications.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch32_1" },
    { afterSentenceIndex: 1, ref: "ch32_2" },
    { afterSentenceIndex: 2, ref: "ch32_3" },
    { afterSentenceIndex: 3, ref: "ch32_4" },
    { afterSentenceIndex: 4, ref: "ch32_4" },
    { afterSentenceIndex: 5, ref: "ch32_5" },
    { afterSentenceIndex: 6, ref: "ch32_6" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Domain I recap",
    intro:
      "Domain I is about supervising people (RBTs, trainees, staff) and designing performance systems — not about direct client work. About 10% of the exam.",
    chunks: [
      {
        subtitle: "BST + competency-based training",
        segments: [
          {
            type: "text",
            text: "BST = instruct → model → rehearse → feedback → mastery. Competency means demonstrated performance across multiple opportunities/stimuli/contexts, not a single clean trial ",
          },
          { type: "footnote", ref: "ch32_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Monitoring + feedback",
        segments: [
          {
            type: "text",
            text: "Direct observation + permanent products + IOA on your own coding. Feedback works when it is immediate, specific, and delivered with a healthy positive-to-corrective ratio. All-corrective regimes cause turnover ",
          },
          { type: "footnote", ref: "ch32_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "OBM · PIC/NIC",
        segments: [
          {
            type: "text",
            text: "Consequences that are Positive-Immediate-Certain (PIC) or Negative-Immediate-Certain (NIC) powerfully control performance. Future-uncertain consequences don't. When performance lags, make the consequence more immediate and more certain ",
          },
          { type: "footnote", ref: "ch32_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Fieldwork + RBT rules",
        segments: [
          {
            type: "text",
            text: "Widely taught approximations: ~5% supervision of fieldwork hours, ≥4 monthly contacts, ≥1 direct observation, active contract during accrual, restricted/unrestricted split. RBT ongoing supervision ~5% of direct-service hours. Verify current BACB Handbook wording ",
          },
          { type: "footnote", ref: "ch32_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethical supervision",
        segments: [
          {
            type: "text",
            text: "Supervise within scope of competence. No dual roles (can't be both supervisor and therapist). Delegate only within delegatee's scope (RBTs don't author FBAs). Document contemporaneously — never sign off retroactively. Responsible termination = notice, records, non-retaliation ",
          },
          { type: "footnote", ref: "ch32_6" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "Common Domain I confusions: (1) BST vs. shadowing — shadowing has no rehearsal or feedback and is not training. (2) Competency vs. topography — a single clean trial is topography, not competency. (3) Antecedent vs. consequence OBM — task-clarification and template redesign are antecedents; feedback and reinforcement are consequences. (4) Delayed generic praise vs. immediate specific feedback — only the latter shapes pinpointed behavior. (5) Multiple relationships — dual roles compromise supervision judgment even with consent. Resolve by naming the lever the stem tests before selecting an option.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch32_v1: { label: "[V1]", lines: ["BST — Behavioral Skills Training. Instruction → modeling → rehearsal → feedback → mastery."] },
    ch32_v2: { label: "[V2]", lines: ["Competency-based training — mastery criterion across opportunities/stimuli/contexts."] },
    ch32_v3: { label: "[V3]", lines: ["Pinpointing — turning intent into observable, measurable performance target."] },
    ch32_v4: { label: "[V4]", lines: ["PIC/NIC — Positive/Negative × Immediate/Future × Certain/Uncertain consequence analysis."] },
    ch32_v5: { label: "[V5]", lines: ["Permanent product — durable output of behavior available for later inspection."] },
    ch32_v6: { label: "[V6]", lines: ["Restricted vs. unrestricted fieldwork activity — direct-implementation vs. analytic/supervisory work."] },
    ch32_v7: { label: "[V7]", lines: ["Responsible termination of supervision — notice, records transfer, non-retaliation."] },
    ch32_kc1: { label: "[KC1]", lines: ["Domain I — BST + competency-based training discrimination."] },
    ch32_kc2: { label: "[KC2]", lines: ["Domain I — PIC/NIC framing of performance-management contingencies."] },
    ch32_kc3: { label: "[KC3]", lines: ["Domain I — ethical supervision guardrails (scope, dual roles, delegation, termination)."] },
    ch32_kc4: { label: "[KC4]", lines: ["Domain I + Domain E — cross-domain overlap for supervision-scope and multiple-relationship items."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Domain I",
    intro: "Personnel supervision and OBM terms that recur in Domain I stems.",
    entries: [
      { term: "Behavioral Skills Training (BST)", definition: "Instruction, modeling, rehearsal, immediate feedback, and repeat-to-mastery — the standard evidence-based method for teaching staff skills.", footnoteRef: "ch32_v1" },
      { term: "Competency-based training", definition: "Training that requires demonstrated performance across multiple opportunities, stimuli, and contexts before deeming a supervisee competent.", footnoteRef: "ch32_v2" },
      { term: "Pinpointing", definition: "Specifying an observable, measurable performance target (e.g., 'runs paired-stimulus PA within 8 minutes with 100% procedural fidelity') rather than a vague trait.", footnoteRef: "ch32_v3" },
      { term: "Permanent product", definition: "Durable output of behavior (session note, graph, billing entry) reviewable after the fact — complementary to, not a substitute for, direct observation.", footnoteRef: "ch32_v5" },
      { term: "PIC / NIC analysis", definition: "OBM framework categorizing consequences on three axes — Positive/Negative × Immediate/Future × Certain/Uncertain — used to predict which contingencies actually control workplace behavior.", footnoteRef: "ch32_v4" },
      { term: "Restricted fieldwork activity", definition: "Direct-implementation behavior-analytic work (running programs, data collection). BACB caps its share of accrued fieldwork; verify current cap in the Handbook.", footnoteRef: "ch32_v6" },
      { term: "Unrestricted fieldwork activity", definition: "Higher-level analytic and supervisory work (assessment, program design, staff training, supervision). BACB requires a floor of these hours; verify current requirement.", footnoteRef: "ch32_v6" },
      { term: "Multiple relationship (supervisory context)", definition: "Simultaneously holding two or more roles with the same person (e.g., supervisor + therapist) in a way that impairs professional judgment or creates exploitation risk. Prohibited by the BACB Ethics Code.", footnoteRef: "ch32_kc3" },
      { term: "Delegation within scope", definition: "Assigning tasks only to delegatees whose credential + demonstrated competence covers the task — an RBT does not author an FBA regardless of quality of writing.", footnoteRef: "ch32_kc3" },
      { term: "Ratio strain (supervision)", definition: "Deterioration of performance/approach behavior when the density of positive consequences is too low relative to response requirements — a common cause of turnover under all-corrective feedback regimes.", footnoteRef: "ch32_v4" },
      { term: "Responsible termination of supervision", definition: "Ending supervision with reasonable notice, documentation of accrued hours, records transfer per organizational + ethics rules, and no retaliatory motive.", footnoteRef: "ch32_v7" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Domain I",
    intro: "Five levers that show up repeatedly in Domain I items.",
    concepts: [
      {
        title: "BST + competency-based training",
        segments: [
          { type: "text", text: "BST = instruction → modeling → rehearsal → feedback → mastery. Competency = generalized performance across opportunities, not one clean trial " },
          { type: "footnote", ref: "ch32_v1" },
          { type: "footnote", ref: "ch32_v2" },
          { type: "footnote", ref: "ch32_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Direct observation + permanent product + IOA on supervisor coding",
        segments: [
          { type: "text", text: "Both channels are required; each catches what the other misses. IOA applies to supervisor coding used for high-stakes decisions " },
          { type: "footnote", ref: "ch32_v5" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Feedback design — timing, specificity, ratio",
        segments: [
          { type: "text", text: "Immediate + specific + healthy positive-to-corrective ratio. All-corrective regimes cause escape (turnover). Delayed generic praise does not shape pinpointed performance " },
          { type: "footnote", ref: "ch32_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "OBM · PIC/NIC contingencies",
        segments: [
          { type: "text", text: "PIC and NIC consequences powerfully control behavior; future-uncertain consequences do not. When performance lags, move the consequence closer in time and increase certainty " },
          { type: "footnote", ref: "ch32_v4" },
          { type: "footnote", ref: "ch32_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical supervision guardrails",
        segments: [
          { type: "text", text: "Scope of competence, dual-role avoidance, delegation within scope, contemporaneous documentation, responsible termination — same Ethics Code as Chapter 31, personnel-management applications " },
          { type: "footnote", ref: "ch32_kc3" },
          { type: "footnote", ref: "ch32_kc4" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to the Domain I concept it MOST directly tests — BST step, competency-based training, PIC/NIC framing, feedback-design lever, supervisor scope, delegation, multiple relationship, or fieldwork rule.",
  matchActivityInstructions:
    "Select the Domain I response that BEST addresses each supervisory scenario — training method, monitoring channel, feedback fix, OBM contingency adjustment, or ethics/scope response.",
  chainActivityInstructions:
    "Sequence the onboarding pipeline for a new RBT joining an existing client's team — the order should narrate ethical, competency-based supervision from contract signing through first solo session.",
  mts: [
    {
      sample_stimulus: "A new RBT is handed a discrete-trial protocol and told to run it during their first client session. No modeling or rehearsal occurred.",
      comparison_options: [
        "Not BST — skipped modeling and rehearsal; add both before live client contact",
        "Correct BST because a written protocol was provided",
        "Correct competency-based training because the RBT will get feedback after the session",
        "No supervisor action required",
      ],
      correct_match: "Not BST — skipped modeling and rehearsal; add both before live client contact",
      error_feedback: "BST requires instruction → modeling → rehearsal → feedback → mastery, in that order, BEFORE live client contact.",
    },
    {
      sample_stimulus: "Supervisor watches ONE clean session of an RBT running a preference assessment and marks 'competent.'",
      comparison_options: [
        "Not competency-based — need multiple observations across stimuli, materials, and clients before deeming competent",
        "Correct — one session is sufficient because the run was clean",
        "Delegate the decision to the RBT",
        "Score IOA against the RBT's own report",
      ],
      correct_match: "Not competency-based — need multiple observations across stimuli, materials, and clients before deeming competent",
      error_feedback: "Competency = generalized performance to criterion, not a single reproduction of the form.",
    },
    {
      sample_stimulus: "Session-note timeliness has ONLY future-uncertain positive consequences. Rates are chronically low.",
      comparison_options: [
        "Make the consequence more immediate and more certain — same-day acknowledgment or small performance-contingent reinforcer",
        "Punish late submissions publicly",
        "Remove the metric",
        "Wait six more months",
      ],
      correct_match: "Make the consequence more immediate and more certain — same-day acknowledgment or small performance-contingent reinforcer",
      error_feedback: "PIC (positive-immediate-certain) consequences powerfully control workplace behavior; future-uncertain outcomes do not.",
    },
    {
      sample_stimulus: "All feedback the supervisor delivers is corrective; no positive feedback. After 8 weeks, turnover rises and errors persist.",
      comparison_options: [
        "Ratio strain / escape-motivated turnover — rebalance to include specific positive feedback contingent on target performance",
        "Increase corrective density",
        "Remove all feedback",
        "Blame the staff",
      ],
      correct_match: "Ratio strain / escape-motivated turnover — rebalance to include specific positive feedback contingent on target performance",
      error_feedback: "All-corrective regimes function like heavy negative reinforcement — staff escape by turning over.",
    },
    {
      sample_stimulus: "The BCBA agrees to also serve as their supervisee's therapist for anxiety about supervision.",
      comparison_options: [
        "Multiple relationship — decline the dual role; refer to independent clinician",
        "Acceptable because both consented",
        "Acceptable if unpaid",
        "Acceptable if it improves attendance",
      ],
      correct_match: "Multiple relationship — decline the dual role; refer to independent clinician",
      error_feedback: "The BACB Ethics Code prohibits multiple relationships that impair professional judgment or create exploitation risk. Consent does not resolve it.",
    },
    {
      sample_stimulus: "A BCBA delegates authorship of an FBA report to an RBT because the RBT 'writes better.'",
      comparison_options: [
        "Delegation outside scope — FBA authorship is a BCBA-level task; keep it at BCBA scope",
        "Acceptable if the BCBA reviews the draft",
        "Acceptable if the RBT holds a bachelor's",
        "Acceptable if the client agrees",
      ],
      correct_match: "Delegation outside scope — FBA authorship is a BCBA-level task; keep it at BCBA scope",
      error_feedback: "Delegation must be within the delegatee's credential + demonstrated competence. FBA authorship is not RBT scope.",
    },
    {
      sample_stimulus: "The supervisor scores their own direct observations of the RBT's teaching without any IOA check.",
      comparison_options: [
        "Add a second observer for IOA on a subset — supervisor coding is behavior data too",
        "IOA is only for research",
        "IOA is optional for supervisor coding",
        "Only the RBT should score",
      ],
      correct_match: "Add a second observer for IOA on a subset — supervisor coding is behavior data too",
      error_feedback: "When supervisor observations drive high-stakes decisions, IOA on that coding is required.",
    },
    {
      sample_stimulus: "A trainee asks the supervisor to sign off on 30 hours of unrecorded supervised fieldwork from last month ('we both remember it').",
      comparison_options: [
        "Decline — fieldwork must be documented contemporaneously; retroactive attestation is falsification",
        "Sign off — good faith memory suffices",
        "Sign off if the trainee provides a written statement",
        "Sign off on half",
      ],
      correct_match: "Decline — fieldwork must be documented contemporaneously; retroactive attestation is falsification",
      error_feedback: "Signing off on unrecorded activity is documentation-integrity + ethics violation and can jeopardize both parties' BACB standing.",
    },
  ],
  chainTitle: "Ethical onboarding of a new RBT to an existing client",
  chainFragments: [
    { id: "a", text: "Confirm scope + sign supervision contract, then complete competency-based BST (instruction → modeling → rehearsal → feedback → mastery) on target protocols before any solo client contact." },
    { id: "b", text: "Establish the monitoring schedule — mix of direct observation and permanent-product review — plus the feedback cadence (immediate, specific, healthy positive-to-corrective ratio)." },
    { id: "c", text: "Run pinpointed performance tracking with IOA on the supervisor's own coding; run PIC/NIC analysis on any lagging performance metric and move consequences to be more immediate/certain." },
    { id: "d", text: "Monthly supervisor meeting — review fieldwork log accuracy, ethics/scope, delegation boundaries, and multiple-relationship check; document responsible-termination pathway in case supervision needs to end." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "BST steps in order", back: "Instruction → Modeling → Rehearsal → Feedback → Mastery." },
    { front: "Competency-based training", back: "Mastery across multiple opportunities, stimuli, and contexts — not a single clean trial." },
    { front: "PIC (positive-immediate-certain)", back: "Consequence class that most powerfully controls workplace behavior." },
    { front: "Antecedent OBM lever", back: "Task clarification, prompts, template/environment redesign — before behavior occurs." },
    { front: "Consequence OBM lever", back: "Immediate specific feedback + performance-contingent reinforcement — after behavior occurs." },
    { front: "RBT ongoing supervision (widely taught approximation)", back: "≈5% of direct-service hours; blend observation + permanent-product review + feedback. Verify current BACB Handbook." },
    { front: "BCBA standard fieldwork supervision (approximation)", back: "≈5% of accrued hours, ≥4 contacts/mo, ≥1 direct observation, active contract required. Verify current Handbook." },
    { front: "Multiple relationship", back: "Two roles with same person that impair objective supervision — prohibited by BACB Ethics Code even with consent." },
    { front: "Delegation within scope", back: "Only within delegatee's credential + demonstrated competence — RBTs don't author FBAs." },
    { front: "Responsible termination", back: "Reasonable notice + records transfer + accrued-hour documentation + non-retaliation." },
  ],
  worksheet: {
    title: "Domain I — supervision scenarios",
    instructions:
      "Classify each supervisory scenario by the Domain I lever it tests. Answer every field before selecting Grade worksheet.",
    scenario:
      "Scenario A — A new RBT is given a discrete-trial protocol and told to 'run it' on their first live client session. No modeling or rehearsal occurred.",
    scenario_follow_up:
      "Scenario B — Supervisor rates one clean preference-assessment session and marks the RBT 'competent.'\n\nScenario C — Session-note timeliness has only future-uncertain positives; rates are chronically low.\n\nScenario D — Feedback regime is 100% corrective; over 8 weeks turnover rises and error patterns persist.\n\nScenario E — BCBA agrees to serve as their supervisee's therapist for the supervisee's anxiety about supervision.\n\nScenario F — BCBA delegates FBA authorship to an RBT because the RBT 'writes better.'\n\nScenario G — Trainee asks supervisor to sign off on 30 hours of unrecorded fieldwork from last month.\n\nScenario H — Supervisor scores their own direct observations of the RBT with no IOA check.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best response?",
        options: [
          "Not BST — add modeling and rehearsal before live client contact",
          "Correct BST — protocol was provided",
          "Assign shadowing only",
        ],
        correct: "Not BST — add modeling and rehearsal before live client contact",
      },
      {
        id: "response_2",
        label: "Scenario B · Best response?",
        options: [
          "Not competency-based — need multiple observations across stimuli/materials/clients",
          "Correct — one clean session sufficient",
          "Delegate the decision to the RBT",
        ],
        correct: "Not competency-based — need multiple observations across stimuli/materials/clients",
      },
      {
        id: "response_3",
        label: "Scenario C · OBM fix?",
        options: [
          "Move the consequence closer in time and increase certainty (PIC)",
          "Punish late submissions publicly",
          "Remove the metric",
        ],
        correct: "Move the consequence closer in time and increase certainty (PIC)",
      },
      {
        id: "response_4",
        label: "Scenario D · Diagnosis?",
        options: [
          "Ratio strain / escape-motivated turnover — rebalance with specific positive feedback",
          "Insufficient corrective feedback — add more",
          "Feedback has no effect on turnover",
        ],
        correct: "Ratio strain / escape-motivated turnover — rebalance with specific positive feedback",
      },
      {
        id: "response_5",
        label: "Scenario E · Ethics concern?",
        options: [
          "Multiple relationship — decline dual role; refer to independent clinician",
          "Acceptable because both consented",
          "Acceptable if unpaid",
        ],
        correct: "Multiple relationship — decline dual role; refer to independent clinician",
      },
      {
        id: "response_6",
        label: "Scenario F · Ethics concern?",
        options: [
          "Delegation outside scope — FBA authorship is BCBA-level",
          "Acceptable if BCBA reviews the draft",
          "Acceptable if RBT holds a bachelor's",
        ],
        correct: "Delegation outside scope — FBA authorship is BCBA-level",
      },
      {
        id: "response_7",
        label: "Scenario G · Correct response?",
        options: [
          "Decline — retroactive attestation of unrecorded activity is falsification",
          "Sign off — memory suffices",
          "Sign off on half",
        ],
        correct: "Decline — retroactive attestation of unrecorded activity is falsification",
      },
      {
        id: "response_8",
        label: "Scenario H · Integrity fix?",
        options: [
          "Add a second observer for IOA on a subset of observations",
          "IOA is only for research",
          "IOA is optional for supervisor coding",
        ],
        correct: "Add a second observer for IOA on a subset of observations",
      },
    ],
    remediationLog:
      "Rebuild Domain I fluency: Which lever is the stem testing? — training method (BST/competency), monitoring channel (observation/permanent product/IOA), feedback design (timing/specificity/ratio), OBM contingency (PIC/NIC), scope/delegation, multiple relationship, or fieldwork/RBT rule?",
  },
  bdsBank: CHAPTER_32_SUPERVISION_QUIZ_BANK,
};
