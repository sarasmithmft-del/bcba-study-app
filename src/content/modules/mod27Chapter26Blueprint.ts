import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_26_ANTECEDENT_INTERVENTIONS_QUIZ_BANK } from "@/content/modules/quiz/chapter26AntecedentInterventionsQuizBank";

export const MOD27_BLUEPRINT: ExtensionBlueprint = {
  id: "mod27",
  chapterNumber: 26,
  activityPrefix: 2270,
  title: "Antecedent Interventions",
  codexHeading: "READING — Chapter 26 (Antecedent Interventions)",
  codexIntro: `Chapter 26 in Cooper, Heron, and Heward covers antecedent interventions—procedures that remodel contexts before challenging behavior contacts reinforcement. Rather than waiting for problem behavior to occur, analysts shift evocative variables proactively through noncontingent schedules, high-probability request sequences, environmental enrichments, and discriminative clarity.

Noncontingent reinforcement (NCR) delivers reinforcers on a time-based or fixed schedule independent of target behavior, often altering MO context so challenging behavior is less likely to occur. NCR requires schedule fidelity—hoarding tokens or skipping deliveries collapses integrity and voids analytic claims about antecedent effects.

High-probability (high-p) request sequences build behavioral momentum from easy compliance trials before presenting low-probability demands. MO manipulation adjusts establishing or abolishing operations before difficult tasks. Environmental rearrangement redesigns physical layout or schedules to reduce evocative triggers. Discriminative clarity sharpens SD sets so expected adaptive responses contact reinforcement predictably.

Design teams pair antecedent packages with functional hypotheses. MO manipulation, SD clarity, prompt hierarchies, and ecological redesign map to different analytic stories. Mixing multiple antecedent changes without documentation invites misattribution when graphs shift.

Measurement tracks NCR schedule integrity, latency from antecedent adjustment to engagement, collateral effects on untreated behaviors, and fidelity that staff actually implemented environmental moves—not merely verbalized plans in meetings.

Antecedent interventions differ from extinction (Chapter 24): NCR delivers reinforcers noncontingently; extinction withholds reinforcement for a target class. Antecedent work complements—not replaces—reinforcement for adaptive behavior and consequence-based strategies when needed.

Implementation avoids using antecedent tactics as masks for neglect, documents when strategies approximate restraint or seclusion risk, and keeps guardian-facing explanations honest about what changed environmentally.

For BCBA exam prep: check fidelity logs, MO context, which antecedent variable was manipulated, and collateral effects before choosing an answer.`,
  footnotes: {
    ch26_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 26 — antecedent intervention overview (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Remodel context before challenge contacts reinforcement.",
        "Not quoted from CHH.",
      ],
    },
    ch26_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 26 — noncontingent reinforcement (NCR).",
        "Schedule fidelity required.",
      ],
    },
    ch26_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 26 — high-probability request sequences.",
        "Behavioral momentum before low-p demands.",
      ],
    },
    ch26_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 26 — environmental rearrangement and discriminative clarity.",
        "Ecological redesign and SD sharpening.",
      ],
    },
    ch26_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 26 — fidelity, collateral effects, ethical implementation.",
        "Honest guardian communication; avoid neglect masks.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch26_1" },
    { afterSentenceIndex: 1, ref: "ch26_2" },
    { afterSentenceIndex: 2, ref: "ch26_3" },
    { afterSentenceIndex: 3, ref: "ch26_4" },
    { afterSentenceIndex: 4, ref: "ch26_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 26 recap",
    intro:
      "Chapter 26 is about changing the setup before problem behavior happens—schedules, environment, cues, and motivation—then proving staff actually did what the plan says.",
    chunks: [
      {
        subtitle: "Antecedent remodeling",
        segments: [
          {
            type: "text",
            text: "Shift evocative context proactively with NCR, high-p sequences, MO adjustments, environmental redesign, and clearer SDs—not only reacting after challenges occur ",
          },
          { type: "footnote", ref: "ch26_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "NCR fidelity",
        segments: [
          {
            type: "text",
            text: "Noncontingent schedules only work if deliveries happen on time. Hoarding tokens or skipping doses breaks integrity ",
          },
          { type: "footnote", ref: "ch26_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-p and MO",
        segments: [
          {
            type: "text",
            text: "Build momentum with easy requests before hard ones; adjust MO before difficult tasks when hypotheses support it ",
          },
          { type: "footnote", ref: "ch26_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Fidelity and ethics",
        segments: [
          {
            type: "text",
            text: "Document that environmental changes actually happened, watch collateral effects, and explain honestly to guardians—no slideshow-only plans ",
          },
          { type: "footnote", ref: "ch26_4" },
          { type: "footnote", ref: "ch26_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include NCR without schedule fidelity, confusing antecedent interventions with extinction, high-p sequences without MO consideration, and attributing change to one antecedent when multiple were changed simultaneously. Resolve them by checking fidelity logs, MO context, and which antecedent variable was actually manipulated before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch26_v1: { label: "[V1]", lines: ["CHH Chapter 26 — NCR."] },
    ch26_v2: { label: "[V2]", lines: ["CHH Chapter 26 — high-probability request sequence."] },
    ch26_v3: { label: "[V3]", lines: ["CHH Chapter 26 — environmental rearrangement."] },
    ch26_v4: { label: "[V4]", lines: ["CHH Chapter 26 — discriminative clarity."] },
    ch26_v5: { label: "[V5]", lines: ["CHH Chapter 26 — antecedent MO manipulation."] },
    ch26_v6: { label: "[V6]", lines: ["CHH Chapter 26 — NCR fidelity."] },
    ch26_kc1: { label: "[KC1]", lines: ["Domain F: match antecedent tactic to functional hypothesis."] },
    ch26_kc2: { label: "[KC2]", lines: ["Domain C: schedule fidelity, latency, collateral effects."] },
    ch26_kc3: { label: "[KC3]", lines: ["Domain E: honest implementation; no neglect masks."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 26",
    intro: "Chapter 26 antecedent interventions—FBA is Chapter 27.",
    entries: [
      { term: "Noncontingent reinforcement (NCR)", definition: "Time-based or fixed delivery of reinforcers independent of target behavior to alter MO context.", footnoteRef: "ch26_v1" },
      { term: "High-probability request sequence", definition: "Momentum from easy compliance before presenting low-probability demands.", footnoteRef: "ch26_v2" },
      { term: "Environmental rearrangement", definition: "Physical layout or schedule redesign adjusting evocative triggers proactively.", footnoteRef: "ch26_v3" },
      { term: "Discriminative clarity", definition: "Sharpening SD sets so expected responses contact reinforcement predictably.", footnoteRef: "ch26_v4" },
      { term: "Antecedent MO manipulation", definition: "Adjusting establishing or abolishing operations before difficult tasks.", footnoteRef: "ch26_v5" },
      { term: "NCR fidelity", definition: "Delivery logs verifying schedules truly ran—not symbolic plans alone.", footnoteRef: "ch26_v6" },
      { term: "Behavioral momentum", definition: "Increased compliance probability after high-p success series.", footnoteRef: "ch26_v2" },
      { term: "Collateral effects", definition: "Changes in untreated behaviors when antecedent packages implemented.", footnoteRef: "ch26_kc2" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 26",
    intro: "NCR, high-p, environment, SD clarity, fidelity, ethics.",
    concepts: [
      {
        title: "Antecedent intervention logic",
        segments: [
          { type: "text", text: "Remodel evocative context before challenge contacts reinforcement—pair with functional hypothesis " },
          { type: "footnote", ref: "ch26_1" },
          { type: "footnote", ref: "ch26_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "NCR and schedule fidelity",
        segments: [
          { type: "text", text: "Noncontingent delivery alters MO; integrity collapse voids antecedent claims " },
          { type: "footnote", ref: "ch26_v1" },
          { type: "footnote", ref: "ch26_v6" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "High-p, MO, and environmental redesign",
        segments: [
          { type: "text", text: "Momentum sequences, MO adjustments, layout changes—document which variable moved " },
          { type: "footnote", ref: "ch26_v2" },
          { type: "footnote", ref: "ch26_v3" },
          { type: "footnote", ref: "ch26_v5" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Measurement and ethical implementation",
        segments: [
          { type: "text", text: "Fidelity logs, latency to engagement, collateral effects, honest guardian explanations " },
          { type: "footnote", ref: "ch26_kc2" },
          { type: "footnote", ref: "ch26_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 26 antecedent vocabulary or reject if the stem describes pure extinction, consequence-only programming without antecedent change, or NCR without fidelity evidence.",
  matchActivityInstructions:
    "Select antecedent tactic, fidelity repair, MO/high-p fit, or ethical implementation critique for Cooper Chapter 26.",
  chainActivityInstructions:
    "Sequence antecedent workflow: analyze evocative variables → layer antecedent strategies with adaptive reinforcement → document NCR/high-p/environment fidelity → evaluate collateral effects before scaling.",
  mts: [
    {
      sample_stimulus: "District mandates NCR; staff hoard tokens, breaking schedules.",
      comparison_options: [
        "Restore schedule fidelity and coaching—integrity collapse voids claims",
        "Celebrate graphs anyway",
        "Replace NCR with seclusion casually",
        "Delete measurement columns",
      ],
      correct_match: "Restore schedule fidelity and coaching—integrity collapse voids claims",
      error_feedback: "NCR requires delivery fidelity.",
    },
    {
      sample_stimulus: "NCR on paper; tokens hoarded; graphs still touted.",
      comparison_options: [
        "Restore schedule fidelity plus coaching logs",
        "Celebrate intent documents",
        "Replace NCR with seclusion",
        "Delete measurement",
      ],
      correct_match: "Restore schedule fidelity plus coaching logs",
      error_feedback: "Correct action: Restore schedule fidelity plus coaching logs",
    },
    {
      sample_stimulus: "Antecedent plan only in slideshow; physical environment untouched for months.",
      comparison_options: [
        "Domain C fidelity failure—environment never changed; attributions lapse",
        "Slide decks substitute implementation",
        "MO excuses missing rearrangement",
        "Ignore collateral effects",
      ],
      correct_match: "Domain C fidelity failure—environment never changed; attributions lapse",
      error_feedback: "Correct action: Domain C fidelity failure—environment never changed; attributions lapse",
    },
    {
      sample_stimulus: "Easy requests stacked before difficult demand presented.",
      comparison_options: [
        "High-probability request sequence",
        "NCR schedule",
        "Extinction",
        "Positive punishment",
      ],
      correct_match: "High-probability request sequence",
      error_feedback: "Behavioral momentum tactic.",
    },
    {
      sample_stimulus: "Attention delivered every 3 minutes regardless of behavior.",
      comparison_options: [
        "NCR—noncontingent reinforcement",
        "DRA",
        "Extinction",
        "DRL",
      ],
      correct_match: "NCR—noncontingent reinforcement",
      error_feedback: "Time-based noncontingent delivery.",
    },
    {
      sample_stimulus: "Rearrange seating to reduce peer-triggered elopement.",
      comparison_options: [
        "Environmental rearrangement",
        "High-p sequence only",
        "Extinction only",
        "NCR only",
      ],
      correct_match: "Environmental rearrangement",
      error_feedback: "Ecological redesign.",
    },
    {
      sample_stimulus: "Withhold all reinforcement for target behavior only.",
      comparison_options: [
        "Extinction—not antecedent intervention alone",
        "NCR",
        "High-p sequence",
        "Environmental rearrangement",
      ],
      correct_match: "Extinction—not antecedent intervention alone",
      error_feedback: "Consequence withdrawal.",
    },
    {
      sample_stimulus: "Multiple antecedent changes at once; team credits only NCR.",
      comparison_options: [
        "Misattribution—document which variables changed",
        "Correct single-cause story",
        "Ignore fidelity",
        "Delete high-p data",
      ],
      correct_match: "Misattribution—document which variables changed",
      error_feedback: "Multiple changes require documentation.",
    },
  ],
  chainTitle: "Antecedent engineering sweep",
  chainFragments: [
    { id: "a", text: "Analyze hypothesized evocative variables before prescribing environmental moves." },
    { id: "b", text: "Layer antecedent strategies with reinforcing consequences still contacting adaptive behavior." },
    { id: "c", text: "Document fidelity on NCR, high-p, and environmental tweaks with stakeholder coaching." },
    { id: "d", text: "Evaluate collateral effects before scaling district-wide mandates." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "NCR", back: "Noncontingent delivery." },
    { front: "High-p", back: "Easy requests first." },
    { front: "Env rearrange", back: "Change triggers." },
    { front: "SD clarity", back: "Predictable cues." },
    { front: "NCR fidelity", back: "Schedule actually ran." },
    { front: "Collateral", back: "Untreated behavior effects." },
  ],
  worksheet: {
    title: "CHH Chapter 26 — antecedent interventions",
    instructions:
      "Classify antecedent tactic, fidelity status, NCR vs extinction, misattribution risk, and ethical implementation response.",
    scenario:
      "Scenario A — District NCR mandate; staff hoard tokens breaking schedules.",
    scenario_follow_up:
      "Scenario B — NCR on paper; deliveries skipped; graphs touted anyway.\n\nScenario C — Environmental plan in slideshow only; room unchanged for months.\n\nScenario D — Stack easy requests before hard demand.\n\nScenario E — Attention every 3 minutes regardless of behavior.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Supervisory priority?",
        options: ["Restore schedule fidelity and coaching", "Celebrate graphs", "Replace with seclusion"],
        correct: "Restore schedule fidelity and coaching",
      },
      {
        id: "response_2",
        label: "Scenario B · Supervisory fix?",
        options: ["Restore fidelity plus coaching logs", "Celebrate intent documents", "Delete measurement"],
        correct: "Restore fidelity plus coaching logs",
      },
      {
        id: "response_3",
        label: "Scenario C · Analytic critique?",
        options: ["Fidelity failure—environment never changed", "Slides equal implementation", "MO excuses gap"],
        correct: "Fidelity failure—environment never changed",
      },
      {
        id: "response_4",
        label: "Scenario D · Best label?",
        options: ["High-probability request sequence", "NCR", "Extinction"],
        correct: "High-probability request sequence",
      },
      {
        id: "response_5",
        label: "Scenario E · Best label?",
        options: ["NCR", "DRA", "Extinction"],
        correct: "NCR",
      },
      {
        id: "response_6",
        label: "NCR fidelity means:",
        options: ["Schedules truly delivered as planned", "Intent documents only", "Optional notes"],
        correct: "Schedules truly delivered as planned",
      },
      {
        id: "response_7",
        label: "Antecedent interventions differ from extinction because:",
        options: ["Antecedents remodel context proactively; extinction withholds target reinforcer", "Identical", "Extinction delivers NCR"],
        correct: "Antecedents remodel context proactively; extinction withholds target reinforcer",
      },
      {
        id: "response_8",
        label: "Ethical antecedent implementation prioritizes:",
        options: ["Honest fidelity logs and guardian explanations", "Slideshow-only plans", "Neglect masks"],
        correct: "Honest fidelity logs and guardian explanations",
      },
    ],
    remediationLog:
      "Rebuild Chapter 26 fluency: which antecedent tactic? → MO/functional fit? → fidelity logged? → NCR vs extinction? → collateral effects? → honest implementation?",
  },
  bdsBank: CHAPTER_26_ANTECEDENT_INTERVENTIONS_QUIZ_BANK,
};
