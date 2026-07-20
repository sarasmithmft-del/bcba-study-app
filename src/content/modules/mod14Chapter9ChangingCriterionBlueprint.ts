import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_09_CHANGING_CRITERION_SUPPLEMENT_QUIZ_BANK } from "@/content/modules/quiz/chapter09ChangingCriterionSupplementQuizBank";

export const MOD14_BLUEPRINT: ExtensionBlueprint = {
  id: "mod14",
  chapterNumber: 9,
  activityPrefix: 2140,
  title: "Changing-Criterion Designs",
  codexHeading: "READING — Chapter 9 (Changing-Criterion Designs)",
  codexIntro: `Chapter 9 in Cooper, Heron, and Heward includes changing-criterion designs as a stepwise demonstration of experimental control when full withdrawal is unethical or impractical. Performance criteria increase in stages, and reinforcement or programmed consequences should change in correspondence with each criterion shift on the timeline. The analytic argument depends on coupling—not cosmetic relabeling.

Changing-criterion designs are often ethically preferable when reversal would remove essential communication, medical, or safety supports. The substitute does not relax documentation standards. Teams still owe transparent records of what contingency changed at each step and socially valid benchmarks stakeholders recognize.

Baseline stability precedes the staircase. If pre-step variability is chaotic, criterion hops can be mistaken for noise rather than treatment effects. Stabilize context before marching tiers upward.

Interpretive failure happens when graphs announce elite criteria while reinforcement schedules drift asynchronously. That decoupling collapses causal claims the same way covariance threatens multiple-baseline independence elsewhere in Chapter 9.

For BCBA exam prep: on every changing-criterion stem, ask whether reinforcement changed with the criterion on the timeline, whether baseline was stable, whether benchmarks are socially valid, and whether fidelity logs support the stair narrative.`,
  footnotes: {
    ch9_cc_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 9 — changing-criterion designs and reinforcement–criterion correspondence (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Exam stems haunt criteria climbing while schedules lag—rehearse why correspondence collapses causal claims.",
        "Not quoted from CHH.",
      ],
    },
    ch9_cc_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 9 — ethical use when reversal designs are constrained.",
        "Substitution still demands honest contingency documentation at each criterion step.",
      ],
    },
    ch9_cc_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 9 — baseline stability prerequisites before criterion stepping.",
        "Domain C fidelity makes jitter versus genuine criterion effects discriminable.",
      ],
    },
    ch9_cc_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 9 — threats when criterion shifts decouple from programmed contingencies.",
        "Asynchronous drift undermines reinforcement-controlled interpretations.",
      ],
    },
    ch9_cc_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 9 — socially valid criterion benchmarks.",
        "Milestones should be outcomes caregivers and teachers recognize.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch9_cc_1" },
    { afterSentenceIndex: 1, ref: "ch9_cc_2" },
    { afterSentenceIndex: 2, ref: "ch9_cc_3" },
    { afterSentenceIndex: 3, ref: "ch9_cc_4" },
    { afterSentenceIndex: 4, ref: "ch9_cc_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 9 changing-criterion recap",
    intro:
      "Changing-criterion designs raise the performance bar in steps while reinforcement keeps pace—especially when reversal would strip essential supports.",
    chunks: [
      {
        subtitle: "Reinforcement must climb with the criterion",
        segments: [
          {
            type: "text",
            text: "Each criterion hop should coincide with payoff changes—thinning, mastery gating, richer praise—so viewers see control, not cosmetic relabeling ",
          },
          { type: "footnote", ref: "ch9_cc_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethical substitute still owes transparency",
        segments: [
          {
            type: "text",
            text: "When ABAB reversals would remove essential help, staircases substitute ethically—but teams still document what contingency flipped at each landing ",
          },
          { type: "footnote", ref: "ch9_cc_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Stable baselines before the climb",
        segments: [
          {
            type: "text",
            text: "If baseline variability is high, premature criterion hops mix jitter with mastery. Stabilize context so observers can discriminate real steps from noise ",
          },
          { type: "footnote", ref: "ch9_cc_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Async drift kills correspondence",
        segments: [
          {
            type: "text",
            text: "When announcements sprint ahead of programmable schedules, downgrade causal claims, fix fidelity, and disclose lag before stakeholders reuse the deck ",
          },
          { type: "footnote", ref: "ch9_cc_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Socially valid benchmarks anchor the stairs",
        segments: [
          {
            type: "text",
            text: "Criterion tiers should be milestones caregivers and teachers recognize—not clinician-only riddles ",
          },
          { type: "footnote", ref: "ch9_cc_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include criterion shifts without reinforcement correspondence, unstable baselines before stepping, cosmetic phase relabeling without contingency change, and confusing changing-criterion stairs with multiple-baseline stagger. Resolve them by verifying coupling on the timeline and calibrating claims to fidelity evidence.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch9_cc_v1: { label: "[V1]", lines: ["CHH Chapter 9 — reinforcement–criterion correspondence."] },
    ch9_cc_v2: { label: "[V2]", lines: ["CHH Chapter 9 — criterion shift / stepwise mastery increment."] },
    ch9_cc_v3: { label: "[V3]", lines: ["CHH Chapter 9 — stepwise reinforcement contingent on attainment."] },
    ch9_cc_v4: { label: "[V4]", lines: ["CHH Chapter 9 — pre-stair baseline stability."] },
    ch9_cc_v5: { label: "[V5]", lines: ["CHH Chapter 9 — socially valid benchmark calibration."] },
    ch9_cc_v6: { label: "[V6]", lines: ["CHH Chapter 9 — decoupled criterion threat / overfitting."] },
    ch9_cc_kc1: { label: "[KC1]", lines: ["Domain F: correspondence logic must support control narrative."] },
    ch9_cc_kc2: { label: "[KC2]", lines: ["Domain C: timestamped reinforcement logs at each criterion hop."] },
    ch9_cc_kc3: { label: "[KC3]", lines: ["Domain E: honest milestone labeling and stakeholder-facing tier rationales."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 9 (Changing-Criterion)",
    intro: "Fluency check: correspondence (Domain F), auditable delivery logs (Domain C), and socially calibrated benchmarks (Domain E).",
    entries: [
      { term: "Changing-criterion design", definition: "Stepwise performance criteria with reinforcement tracking each shift.", footnoteRef: "ch9_cc_v1" },
      { term: "Reinforcement–criterion correspondence", definition: "Programmed consequences align with each criterion hop on the timeline.", footnoteRef: "ch9_cc_v1" },
      { term: "Criterion shift", definition: "Documented mastery increment stepping once prior tier meets stability.", footnoteRef: "ch9_cc_v2" },
      { term: "Stepwise reinforcement", definition: "Reinforcer density adjusts contingent on attaining each plotted criterion hop.", footnoteRef: "ch9_cc_v3" },
      { term: "Pre-stair baseline stability", definition: "Controlled variability before hopping criteria so jitter is not mistaken for steps.", footnoteRef: "ch9_cc_v4" },
      { term: "Benchmark calibration", definition: "Stakeholder-aligned mastery tiers observers recognize before closure claims.", footnoteRef: "ch9_cc_v5" },
      { term: "Decoupled criterion threat", definition: "Criterion hops ahead of contingency contact collapsing experimental attribution.", footnoteRef: "ch9_cc_v6" },
      { term: "Ethical reversal substitute", definition: "Changing-criterion path when deprivation is unsafe yet contingencies remain transparent.", footnoteRef: "ch9_cc_v2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 9 (Changing-Criterion)",
    intro: "Each step piles Domain F inference duties atop Domain C logs and Domain E candor.",
    concepts: [
      {
        title: "Correspondence—not cosmetics—signals control",
        segments: [
          { type: "text", text: "Reinforcement hops must coincide with plotted criterion shifts observers can reconcile " },
          { type: "footnote", ref: "ch9_cc_v1" },
          { type: "footnote", ref: "ch9_cc_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Stable baselines before hops",
        segments: [
          { type: "text", text: "Unstable ribbons masquerading as mastery reactions invite false positives—freeze variability context first " },
          { type: "footnote", ref: "ch9_cc_v4" },
          { type: "footnote", ref: "ch9_cc_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Stakeholder tiers anchor benchmarks",
        segments: [
          { type: "text", text: "Criteria must remain socially plausible milestones caregivers recognize—not whisper-network staircases " },
          { type: "footnote", ref: "ch9_cc_v5" },
          { type: "footnote", ref: "ch9_cc_kc3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Async drift freezes strong claims",
        segments: [
          { type: "text", text: "If schedules stray from announcements, caveat attribution until fidelity realigns " },
          { type: "footnote", ref: "ch9_cc_v6" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Map each vignette to changing-criterion vocabulary and state one correspondence or benchmark check required before strong causal claims.",
  matchActivityInstructions:
    "Select correspondence evidence, baseline stability issue, benchmark calibration gap, or decoupling threat for Cooper Chapter 9 changing-criterion stems.",
  chainActivityInstructions:
    "Sequence correspondence readiness: verify baseline stability → calibrate socially valid benchmarks → align reinforcement with each criterion hop → graph overlays and disclose limits honestly.",
  mts: [
    {
      sample_stimulus: "Weekly criterion increments coincide with tightened reinforcement thinning only after plotted mastery confirmations.",
      comparison_options: [
        "Changing-criterion demonstration with reinforcement–criterion correspondence",
        "Multiple baseline across settings exclusively",
        "Multielement alternation same day",
        "ABAB withdrawal",
      ],
      correct_match: "Changing-criterion demonstration with reinforcement–criterion correspondence",
      error_feedback: "Stepwise tiers reinforced contingent on attainment define changing-criterion structure.",
    },
    {
      sample_stimulus: "Slides announce mastery jumps while programmable schedules drift days behind slide deck promises.",
      comparison_options: [
        "Decoupled correspondence threatening reinforcement-controlled attribution",
        "Demonstration of airtight analytic coupling",
        "Proof baselines optional once criteria begin",
        "Respondent extinction only",
      ],
      correct_match: "Decoupled correspondence threatening reinforcement-controlled attribution",
      error_feedback: "Misaligned leaps plus drifting schedules shred correspondence assumptions.",
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
      sample_stimulus: "On-task criterion steps from 5 to 10 to 15 minutes with praise and reinforcement thinning at each step.",
      comparison_options: [
        "Changing-criterion design with correspondence check",
        "Multiple baseline across behaviors",
        "Reversal ABAB",
        "Indirect FAST only",
      ],
      correct_match: "Changing-criterion design with correspondence check",
      error_feedback: "Stepwise criteria with contingent reinforcement define changing-criterion logic.",
    },
    {
      sample_stimulus: "Graphs jitter wildly in baseline yet team advances criterion ladders weekly.",
      comparison_options: [
        "Premature hopping across unstable anchors confounding attribution",
        "Demonstration of textbook baseline stability",
        "Proof scatterplots obsolete for CC designs",
        "Multielement carryover",
      ],
      correct_match: "Premature hopping across unstable anchors confounding attribution",
      error_feedback: "Sustainable variability context must precede defensible mastery strides.",
    },
    {
      sample_stimulus: "Funding brief claims ethical reversal substitute yet omits stakeholder agreement on mastery increments.",
      comparison_options: [
        "Stakeholder-aligned benchmark calibration lapse (Domain E)",
        "Proof reinforcement correspondence irrelevant",
        "Proof baselines disposable once criteria begin",
        "IOA formula error only",
      ],
      correct_match: "Stakeholder-aligned benchmark calibration lapse (Domain E)",
      error_feedback: "Shortcuts still require socially validated tiers caregivers understand.",
    },
    {
      sample_stimulus: "Clinical lead overlays graphed reinforcement density markers atop criterion staircase breakpoints each week.",
      comparison_options: [
        "Visual coupling QA reviewers audit for correspondence honesty",
        "Proof legends optional when graphs look polished",
        "Automatic respondent extinction diagnosis",
        "Multiple baseline stagger only",
      ],
      correct_match: "Visual coupling QA reviewers audit for correspondence honesty",
      error_feedback: "Stair overlays tied to reinforcement markers keep supervisors honest about alignment.",
    },
    {
      sample_stimulus: "Regional office deletes reinforcement delivery spreadsheets before accreditation while stair graphs stay polished.",
      comparison_options: [
        "Misleading omission breaching Domain C fidelity and Domain E honesty",
        "Standard documentation trimming when fidelity intact",
        "Proof IOA substitutes correspondence logs",
        "Required for maintenance claims",
      ],
      correct_match: "Misleading omission breaching Domain C fidelity and Domain E honesty",
      error_feedback: "Scrubbing delivery evidence while hawking mastery stairs corrodes accountable dossiers.",
    },
  ],
  chainTitle: "Correspondence readiness sweep",
  chainFragments: [
    { id: "a", text: "Verify baseline stability before any criterion stepping begins." },
    { id: "b", text: "Calibrate socially valid benchmark increments stakeholders recognize." },
    { id: "c", text: "Align reinforcement deliveries with each criterion hop on the timeline." },
    { id: "d", text: "Graph overlays tying deliveries to stair steps; disclose correspondence limits honestly before strong causal claims." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Correspondence", back: "Reinforcement tracks criterion shifts." },
    { front: "Criterion shift", back: "Stepwise mastery increment." },
    { front: "Stepwise R+", back: "Delivery contingent on tier." },
    { front: "Baseline stable", back: "Before hopping criteria." },
    { front: "Benchmark", back: "Stakeholder-valid tier." },
    { front: "Decoupling", back: "Criteria ahead of schedules." },
  ],
  worksheet: {
    title: "CHH Chapter 9 — changing-criterion designs",
    instructions:
      "Identify correspondence evidence, baseline stability, benchmark calibration, and decoupling threats before selecting an answer.",
    scenario:
      "Scenario A — Criterion increments accelerate weekly yet reinforcement deliveries drift unpredictably relative to mastery announcements on supervisory slides.",
    scenario_follow_up:
      "Scenario B — Reinforcement densities align tightly with each mastery marker; baseline variability stable before hopping.\n\nScenario C — Graph shows criterion at 80% but schedule still pays at 60%.\n\nScenario D — Grants office asks teams to omit delivery spreadsheets before audit so staircase charts stay presentation-ready.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Primary analytic concern?",
        options: [
          "Violates reinforcement–criterion correspondence assumptions",
          "Confirms impeccable analytic hygiene automatically",
          "Demonstrates respondent extinction mastery only",
        ],
        correct: "Violates reinforcement–criterion correspondence assumptions",
      },
      {
        id: "response_2",
        label: "Scenario A · Remediation priority?",
        options: [
          "Align reinforcement deliveries tightly with criterion attainment graphs",
          "Remove reinforcement altogether",
          "Randomize benchmarks intentionally",
        ],
        correct: "Align reinforcement deliveries tightly with criterion attainment graphs",
      },
      {
        id: "response_3",
        label: "Scenario B · BEST characterization?",
        options: [
          "Correspondence between reinforcement and criterion hops supports interpretation",
          "Proves respondent extinction dominance exclusively",
          "Eliminates need for procedural fidelity notes",
        ],
        correct: "Correspondence between reinforcement and criterion hops supports interpretation",
      },
      {
        id: "response_4",
        label: "Scenario C · Primary problem?",
        options: [
          "Reinforcement–criterion correspondence failure",
          "Perfect replication envelope",
          "Baseline optional",
          "Multielement carryover",
        ],
        correct: "Reinforcement–criterion correspondence failure",
      },
      {
        id: "response_5",
        label: "Benchmark calibration MOST centrally anchors thresholds to:",
        options: [
          "Stakeholder-valued mastery definitions observers can verify",
          "Clinician convenience absent caregiver input",
          "Random fluctuation unrelated to measurement",
          "Indirect questionnaires exclusively",
        ],
        correct: "Stakeholder-valued mastery definitions observers can verify",
      },
      {
        id: "response_6",
        label: "Decoupled criterion threat emerges when:",
        options: [
          "Criterion leaps occur without contingency alignment confusing attribution",
          "Reinforcement tightly tracks staged mastery shifts",
          "Graph axes remain proportional across phases",
          "Multiple baseline tiers stagger ethically",
        ],
        correct: "Criterion leaps occur without contingency alignment confusing attribution",
      },
      {
        id: "response_7",
        label: "Scenario D · Hiding delivery spreadsheets while boasting correspondence merges:",
        options: [
          "Domain E honest reporting plus Domain C fidelity expectations",
          "Domain A phylogeny trivia unrelated to staircase ethics",
          "Facilities thermostat trivia unrelated to ethics",
          "IOA type selection only",
        ],
        correct: "Domain E honest reporting plus Domain C fidelity expectations",
      },
      {
        id: "response_8",
        label: "Scenario D · MOST compliant remediation BEFORE auditors arrive?",
        options: [
          "Restore verified delivery logs overlaid against criterion hops; annotate any lag; circulate supervisor-signed coupling narrative",
          "Ship sanitized decks preserving optics alone",
          "Password-protect raw schedules so inconsistencies vanish from review",
          "Delete criterion phases entirely",
        ],
        correct: "Restore verified delivery logs overlaid against criterion hops; annotate any lag; circulate supervisor-signed coupling narrative",
      },
    ],
    remediationLog:
      "Rebuild Chapter 9 CC fluency: stable baseline? → socially calibrated increments? → reinforcement timestamped with criterion hops? → graph overlays auditing coupling? → no scrubbing delivery evidence?",
  },
  bdsBank: CHAPTER_09_CHANGING_CRITERION_SUPPLEMENT_QUIZ_BANK,
};
