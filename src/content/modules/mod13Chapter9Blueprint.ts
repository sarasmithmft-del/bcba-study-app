import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_09_DESIGN_QUIZ_BANK } from "@/content/modules/quiz/chapter09DesignQuizBank";

export const MOD13_BLUEPRINT: ExtensionBlueprint = {
  id: "mod13",
  chapterNumber: 9,
  activityPrefix: 2130,
  title: "Multiple Baseline and Changing Criterion Designs",
  codexHeading: "READING — Chapter 9 (Multiple Baseline and Changing Criterion Designs)",
  codexIntro: `Chapter 9 in Cooper, Heron, and Heward presents two single-subject design families that demonstrate experimental control when full withdrawal (Chapter 8) is unethical or impractical: multiple-baseline designs and changing-criterion designs.

Multiple-baseline designs stagger intervention introduction across behaviors, settings, or participants. Later tiers remain in baseline while earlier tiers receive treatment. If change appears reliably when—and only when—each tier is introduced, analysts gain replicated within-subject evidence without removing effective supports from everyone at once. The logic substitutes staggered onsets for withdrawal while preserving differentiated timing as the analytic lever.

Independence is an assumption you must defend—not a gift from the graph. Covariance threats include spillover reinforcement, shared staff training, imitation, and setting-wide events that lift multiple baselines together. When adjacent tiers improve before their scheduled introduction, document spillover hypotheses, widen stagger delays, tighten procedural boundaries between tiers, or acknowledge limits in the report.

Concurrent baseline stability precedes stagger choreography. Each untreated tier should show stable pre-intervention performance so onset timing—not ambient drift—explains the shift. Timestamped phase lines and fidelity notes make introduction schedules auditable.

Changing-criterion designs demonstrate control through stepwise performance criteria. Reinforcement or programmed consequences should change in correspondence with each criterion shift on the timeline. The analytic argument depends on coupling: if graphs announce elite criteria while schedules still run at entry level, correspondence breaks and causal claims collapse—similar to how covariance undermines multiple-baseline independence.

Both design families are often ethically preferable when reversal would strip essential communication, medical, or safety supports. Ethical substitution does not relax documentation—teams still owe transparent records of what contingency changed at each introduction or criterion step, plus socially valid benchmarks stakeholders recognize.

For BCBA exam prep: identify whether the stem describes staggered replication (multiple baseline) or stepwise criteria with contingent reinforcement (changing criterion). Name the tier dimension, check baseline stability, evaluate independence or correspondence, and discriminate Chapter 9 designs from Chapter 8 reversal and multielement alternation.`,
  footnotes: {
    ch9_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 9 — multiple-baseline designs across behaviors, settings, or participants (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Staggered introduction substitutes for withdrawal when replication is still required.",
        "Not quoted from CHH.",
      ],
    },
    ch9_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 9 — independence, covariance, and stagger safeguards.",
        "Linked improvements require documented hypotheses—not silent optimism.",
      ],
    },
    ch9_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 9 — concurrent baseline stabilization before staggered introductions.",
        "Domain C fidelity stabilizes phase definitions.",
      ],
    },
    ch9_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 9 — changing-criterion designs and reinforcement–criterion correspondence.",
        "Decoupled criterion hops without contingency alignment weaken inference.",
      ],
    },
    ch9_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 9 — ethical use when reversal designs are constrained.",
        "Socially valid benchmarks anchor criterion steps.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch9_1" },
    { afterSentenceIndex: 2, ref: "ch9_2" },
    { afterSentenceIndex: 4, ref: "ch9_3" },
    { afterSentenceIndex: 5, ref: "ch9_4" },
    { afterSentenceIndex: 6, ref: "ch9_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 9 recap",
    intro:
      "Chapter 9 covers two ways to prove your intervention works without yanking supports away from everyone: stagger introductions across tiers (multiple baseline), or raise the performance bar in steps while reinforcement keeps pace (changing criterion).",
    chunks: [
      {
        subtitle: "Multiple baseline logic",
        segments: [
          {
            type: "text",
            text: "Introduce treatment in one tier at a time while others stay in baseline. If each tier shifts when—and only when—its turn comes, you have replicated evidence without full withdrawal ",
          },
          { type: "footnote", ref: "ch9_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Defend independence",
        segments: [
          {
            type: "text",
            text: "If Tier B improves before its introduction, suspect spillover—shared staff, imitation, or setting events. Document it, widen stagger, or say so honestly ",
          },
          { type: "footnote", ref: "ch9_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Stable baselines first",
        segments: [
          {
            type: "text",
            text: "Untreated tiers should sit steady before their scheduled introduction so the jump tracks your schedule—not random drift ",
          },
          { type: "footnote", ref: "ch9_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Changing-criterion staircase",
        segments: [
          {
            type: "text",
            text: "Raise criteria in steps and change reinforcement in step with each hop. Criteria climbing alone while schedules lag is cosmetic relabeling ",
          },
          { type: "footnote", ref: "ch9_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethical substitutes still owe transparency",
        segments: [
          {
            type: "text",
            text: "When reversal would harm, Chapter 9 designs substitute—but you still document every contingency change and use benchmarks caregivers understand ",
          },
          { type: "footnote", ref: "ch9_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include confusing multiple baseline stagger with multielement alternation (Chapter 8), treating synchronized tier change as proof of independence, criterion shifts without reinforcement correspondence, and starting stagger before baselines stabilize. Resolve them by naming the design family, checking correspondence or independence, and aligning claims to fidelity evidence.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch9_v1: { label: "[V1]", lines: ["CHH Chapter 9 — multiple baseline across behaviors."] },
    ch9_v2: { label: "[V2]", lines: ["CHH Chapter 9 — multiple baseline across settings."] },
    ch9_v3: { label: "[V3]", lines: ["CHH Chapter 9 — multiple baseline across participants."] },
    ch9_v4: { label: "[V4]", lines: ["CHH Chapter 9 — stagger delay / temporal insulation."] },
    ch9_v5: { label: "[V5]", lines: ["CHH Chapter 9 — covariance / spillover threat."] },
    ch9_v6: { label: "[V6]", lines: ["CHH Chapter 9 — changing-criterion correspondence."] },
    ch9_v7: { label: "[V7]", lines: ["CHH Chapter 9 — socially valid criterion benchmarks."] },
    ch9_kc1: { label: "[KC1]", lines: ["Domain F: stagger or criterion logic must support control narrative."] },
    ch9_kc2: { label: "[KC2]", lines: ["Domain C: timestamped introductions and fidelity at each criterion step."] },
    ch9_kc3: { label: "[KC3]", lines: ["Domain E: report covariance limits and correspondence failures honestly."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 9",
    intro: "Discriminate multiple baseline (staggered onsets) from changing criterion (stepwise criteria with contingent reinforcement).",
    entries: [
      { term: "Multiple baseline across behaviors", definition: "Intervention staggered across distinct response classes.", footnoteRef: "ch9_v1" },
      { term: "Multiple baseline across settings", definition: "Intervention staggered across ecological contexts.", footnoteRef: "ch9_v2" },
      { term: "Multiple baseline across participants", definition: "Intervention staggered across separate learners.", footnoteRef: "ch9_v3" },
      { term: "Stagger delay", definition: "Temporal buffer reducing spillover between tier introductions.", footnoteRef: "ch9_v4" },
      { term: "Covariance / spillover", definition: "Linked improvements threatening independence assumptions.", footnoteRef: "ch9_v5" },
      { term: "Changing-criterion design", definition: "Stepwise criteria with reinforcement tracking each shift.", footnoteRef: "ch9_v6" },
      { term: "Reinforcement–criterion correspondence", definition: "Programmed consequences align with each criterion hop.", footnoteRef: "ch9_v6" },
      { term: "Socially valid benchmark", definition: "Criterion milestone stakeholders recognize as meaningful.", footnoteRef: "ch9_v7" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 9",
    intro: "Both families answer: How do we show control when we cannot—or should not—withdraw effective treatment?",
    concepts: [
      {
        title: "Staggered replication (multiple baseline)",
        segments: [
          { type: "text", text: "Replicated onsets across tiers substitute for withdrawal when ethics require preserved supports " },
          { type: "footnote", ref: "ch9_v1" },
          { type: "footnote", ref: "ch9_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Independence is defended, not assumed",
        segments: [
          { type: "text", text: "Premature tier lifts demand spillover hypotheses and stagger adjustments " },
          { type: "footnote", ref: "ch9_v5" },
          { type: "footnote", ref: "ch9_kc3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Criterion stepping with correspondence",
        segments: [
          { type: "text", text: "Each criterion hop should coincide with contingency change on the timeline " },
          { type: "footnote", ref: "ch9_v6" },
          { type: "footnote", ref: "ch9_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Socially valid stairs",
        segments: [
          { type: "text", text: "Benchmarks should be milestones caregivers and teachers recognize—not clinician-only thresholds " },
          { type: "footnote", ref: "ch9_v7" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Classify each vignette as multiple baseline (and name tier type) or changing criterion—and state one independence or correspondence check required.",
  matchActivityInstructions:
    "Select the design classification, threat, or remediation that best fits Cooper Chapter 9.",
  chainActivityInstructions:
    "Sequence Chapter 9 logic: stable baselines → plan stagger or criterion steps → implement with fidelity → interpret replication or correspondence with honest limits.",
  mts: [
    {
      sample_stimulus: "Intervention staggered across homeroom, cafeteria, and playground while each context stays in baseline until its turn.",
      comparison_options: [
        "Multiple baseline across settings",
        "Changing-criterion staircase",
        "Multielement alternation same day",
        "ABAB withdrawal",
      ],
      correct_match: "Multiple baseline across settings",
      error_feedback: "Sequential ecological contexts with staggered onsets define across-settings multiple baseline.",
    },
    {
      sample_stimulus: "Cafeteria improvements appear in playground data before playground introduction unless delays widen.",
      comparison_options: [
        "Covariance threatening independence—adjust stagger or document spillover",
        "Proof multiple baseline always invalid",
        "IOA formula error only",
        "Respondent extinction",
      ],
      correct_match: "Covariance threatening independence—adjust stagger or document spillover",
      error_feedback: "Cross-context spillover synchronizes slopes—investigate linkage.",
    },
    {
      sample_stimulus: "Token economy staggered for tantrums, then noncompliance, then elopement in one learner.",
      comparison_options: [
        "Multiple baseline across behaviors",
        "Multiple baseline across participants only",
        "Multielement alternation",
        "Group design",
      ],
      correct_match: "Multiple baseline across behaviors",
      error_feedback: "Sequential response-class tiers within one learner.",
    },
    {
      sample_stimulus: "On-task criterion steps from 5 to 10 to 15 minutes with praise and reinforcement thinning at each step.",
      comparison_options: [
        "Changing-criterion design with correspondence check",
        "Multiple baseline across settings",
        "Reversal ABAB",
        "Indirect FAST only",
      ],
      correct_match: "Changing-criterion design with correspondence check",
      error_feedback: "Stepwise criteria with contingent reinforcement define changing-criterion logic.",
    },
    {
      sample_stimulus: "Graph shows criterion at 80% accuracy but reinforcement schedule still delivers at 60% threshold.",
      comparison_options: [
        "Correspondence failure—fix contingency or downgrade causal claim",
        "Perfect changing-criterion proof",
        "Multiple baseline replication",
        "IOA only issue",
      ],
      correct_match: "Correspondence failure—fix contingency or downgrade causal claim",
      error_feedback: "Criterion and reinforcement must align on the timeline.",
    },
    {
      sample_stimulus: "All tiers stable; Tier 1 intervention starts while Tiers 2–3 remain untreated and steady.",
      comparison_options: [
        "Concurrent baseline stabilization preceding stagger",
        "Changing criterion only",
        "Proof baselines optional",
        "Multielement counterbalancing",
      ],
      correct_match: "Concurrent baseline stabilization preceding stagger",
      error_feedback: "Parallel stable anchors must precede stagger comparisons.",
    },
    {
      sample_stimulus: "Director removes covariance appendix so funders see 'textbook independence.'",
      comparison_options: [
        "Domain E violation—restore spillover documentation",
        "Standard reporting practice",
        "Proof independence held",
        "IOA substitute",
      ],
      correct_match: "Domain E violation—restore spillover documentation",
      error_feedback: "Selective reporting of limits violates transparent practice.",
    },
    {
      sample_stimulus: "Two treatments alternated within the same week on overlay graph with randomized order.",
      comparison_options: [
        "Multielement (Chapter 8)—not multiple baseline stagger",
        "Multiple baseline across participants",
        "Changing criterion",
        "No design identifiable",
      ],
      correct_match: "Multielement (Chapter 8)—not multiple baseline stagger",
      error_feedback: "Rapid alternation is Chapter 8 multielement—not Chapter 9 stagger.",
    },
  ],
  chainTitle: "Chapter 9 design workflow",
  chainFragments: [
    { id: "a", text: "Establish stable concurrent baselines (MB) or pre-step stability (CC)." },
    { id: "b", text: "Plan stagger schedule or criterion steps with socially valid benchmarks." },
    { id: "c", text: "Introduce sequentially or step criteria with fidelity-documented contingency changes." },
    { id: "d", text: "Interpret replication or correspondence; document independence/covariance limits honestly." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Across behaviors", back: "Stagger across response classes." },
    { front: "Across settings", back: "Stagger across contexts." },
    { front: "Across participants", back: "Stagger across learners." },
    { front: "Covariance", back: "Linked change threatening independence." },
    { front: "Correspondence", back: "Reinforcement tracks criterion shifts." },
    { front: "Stagger delay", back: "Temporal buffer between tier introductions." },
  ],
  worksheet: {
    title: "CHH Chapter 9 — multiple baseline & changing criterion",
    instructions:
      "Identify design type, tier dimension or criterion step, and independence/correspondence evidence. Discriminate from Chapter 8 designs.",
    scenario:
      "Scenario A — Tier 2 baseline rises when Tier 1 intervention begins; spillover memo unsigned.",
    scenario_follow_up:
      "Scenario B — Homeroom, cafeteria, playground staggered sequentially.\n\nScenario C — On-task 5→10→15 min with reinforcement thinning at each level.\n\nScenario D — Criterion at 80% but schedule still pays at 60%.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Primary threat?",
        options: [
          "Covariance threatening independence",
          "Proof intervention ineffective",
          "Respondent extinction",
          "IOA type error",
        ],
        correct: "Covariance threatening independence",
      },
      {
        id: "response_2",
        label: "Scenario A · BEST remediation?",
        options: [
          "Document spillover, widen stagger, tighten boundaries",
          "Delete Tier 2 data",
          "Claim independence proved",
          "Stop measurement",
        ],
        correct: "Document spillover, widen stagger, tighten boundaries",
      },
      {
        id: "response_3",
        label: "Scenario B · Design classification?",
        options: [
          "Multiple baseline across settings",
          "Changing criterion",
          "Multielement alternation",
          "Group design",
        ],
        correct: "Multiple baseline across settings",
      },
      {
        id: "response_4",
        label: "Scenario C · Design classification?",
        options: [
          "Changing-criterion with correspondence check",
          "Multiple baseline across behaviors",
          "Reversal ABAB",
          "Indirect assessment only",
        ],
        correct: "Changing-criterion with correspondence check",
      },
      {
        id: "response_5",
        label: "Scenario D · Primary problem?",
        options: [
          "Reinforcement–criterion correspondence failure",
          "Perfect replication envelope",
          "Baseline optional",
          "Multielement carryover",
        ],
        correct: "Reinforcement–criterion correspondence failure",
      },
      {
        id: "response_6",
        label: "Stagger delay MOST protects:",
        options: [
          "Independence between tier introductions",
          "Elimination of graphs",
          "Automatic FA",
          "Group statistics",
        ],
        correct: "Independence between tier introductions",
      },
      {
        id: "response_7",
        label: "Chapter 9 vs Chapter 8—key discrimination:",
        options: [
          "MB/CC stagger or step criteria; Ch 8 withdraws or alternates conditions",
          "Chapter 9 is group design only",
          "Chapter 8 never uses graphs",
          "Identical design families",
        ],
        correct: "MB/CC stagger or step criteria; Ch 8 withdraws or alternates conditions",
      },
      {
        id: "response_8",
        label: "Before criterion stepping, analysts should:",
        options: [
          "Establish stable baseline",
          "Skip baseline entirely",
          "Withdraw all reinforcement",
          "Use anecdotes only",
        ],
        correct: "Establish stable baseline",
      },
    ],
    remediationLog:
      "Rebuild Chapter 9 fluency: name design (MB tier type vs CC staircase) → baseline stability → stagger/criterion fidelity → independence or correspondence check → honest limits in report.",
  },
  bdsBank: CHAPTER_09_DESIGN_QUIZ_BANK,
};
