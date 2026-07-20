import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_16_MO_QUIZ_BANK } from "@/content/modules/quiz/chapter16MotivatingOperationsQuizBank";

export const MOD17_BLUEPRINT: ExtensionBlueprint = {
  id: "mod17",
  chapterNumber: 16,
  activityPrefix: 2170,
  title: "Motivating Operations",
  codexHeading: "READING — Chapter 16 (Motivating Operations)",
  codexIntro: `Chapter 16 in Cooper, Heron, and Heward defines motivating operations (MOs) as environmental variables that alter the reinforcing or punishing effectiveness of a stimulus and alter the frequency of behavior that has been reinforced or punished by that consequence. MOs have two effects: value-altering (changing how effective a consequence is) and behavior-altering (changing current response frequency because consequence value changed). This differs from discriminative stimuli, which signal when a consequence is available—not how valuable it is.

The chapter distinguishes unconditioned motivating operations (UMOs)—based on phylogenic or respondent processes such as food deprivation, pain, or illness—from conditioned motivating operations (CMOs) acquired through correlation with other MOs or reinforcement conditions. CMO subtypes include reflexive (CMO-R: paired with another MO), transitive (CMO-T: correlated with delayed reinforcement), and surrogate (CMO-S: neutral stimulus paired with an MO stimulus).

Establishing operations (EOs) increase current reinforcer or punisher effectiveness; abolishing operations (AOs) decrease it. Deprivation of food is a classic EO; satiation after a meal is a classic AO. When edibles lose impact after lunch while token SDs and delivery rituals stay unchanged, analysts should suspect AO satiation—not automatic SD failure.

In daily practice, teams must track meals, sleep, illness, medication timing, and stress alongside behavior data. Without context logs, performance shifts may be misread as treatment failure or noncompliance when motivation variables provide the more accurate explanation. Ethical practice revises reinforcer hierarchies transparently when MO conditions change rather than blaming learners.

Chapter 16 pairs with Chapter 17 (stimulus control). For BCBA exam prep: separate MO value shifts from SD availability, discriminate UMO from CMO pathways, know EO versus AO, and anchor conclusions to documented context before choosing an answer.`,
  footnotes: {
    ch16_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 16 — motivating operations altering reinforcer/punisher effectiveness (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Value-altering and behavior-altering effects define MO analysis.",
        "Not quoted from CHH.",
      ],
    },
    ch16_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 16 — UMO versus CMO (reflexive, transitive, surrogate subtypes).",
        "Discriminating learned from unlearned MO pathways.",
      ],
    },
    ch16_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 16 — establishing operations versus abolishing operations; deprivation and satiation.",
        "EO increases effectiveness; AO decreases effectiveness.",
      ],
    },
    ch16_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 16 — MO versus SD: availability cues differ from value shifts.",
        "SD-stable performance collapse invites MO hypotheses.",
      ],
    },
    ch16_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 16 — context documentation, plan revision, ethical reporting when motivation shifts.",
        "Avoid blame narratives when AO/EO explain performance changes.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch16_1" },
    { afterSentenceIndex: 1, ref: "ch16_2" },
    { afterSentenceIndex: 2, ref: "ch16_3" },
    { afterSentenceIndex: 3, ref: "ch16_4" },
    { afterSentenceIndex: 4, ref: "ch16_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 16 recap",
    intro:
      "Ask two questions on every case: Is reinforcement available (SD)? Is it currently valuable (MO)? That split prevents most Chapter 16 mistakes.",
    chunks: [
      {
        subtitle: "Value versus availability",
        segments: [
          {
            type: "text",
            text: "An MO changes how much a consequence matters right now. When responding drops, check whether payoff value changed before assuming staff implementation failed ",
          },
          { type: "footnote", ref: "ch16_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "UMO, CMO, EO, AO",
        segments: [
          {
            type: "text",
            text: "Some motivation shifts are biological (UMO); others are learned through pairing (CMO-R, CMO-T, CMO-S). Deprivation raises value (EO); satiation lowers it (AO) ",
          },
          { type: "footnote", ref: "ch16_2" },
          { type: "footnote", ref: "ch16_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "SD can stay stable while value shifts",
        segments: [
          {
            type: "text",
            text: "The same token SD can signal availability while edibles lose power after lunch. MO and SD answer different questions—report both when needed ",
          },
          { type: "footnote", ref: "ch16_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Context logs and ethical revision",
        segments: [
          {
            type: "text",
            text: "Track meals, meds, sleep, and illness with behavior data. Revise reinforcer menus when motivation changes—do not convert context shifts into blame ",
          },
          { type: "footnote", ref: "ch16_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include treating SD availability as reinforcer value, mislabeling satiation as SD failure, ignoring UMO versus CMO pathways, and blaming learners when context logs were omitted. Resolve them by separating MO from SD, checking deprivation/satiation timelines, and anchoring conclusions to documented context before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch16_v1: { label: "[V1]", lines: ["CHH Chapter 16 — motivating operation definition."] },
    ch16_v2: { label: "[V2]", lines: ["CHH Chapter 16 — UMO versus CMO subtypes."] },
    ch16_v3: { label: "[V3]", lines: ["CHH Chapter 16 — EO and AO."] },
    ch16_v4: { label: "[V4]", lines: ["CHH Chapter 16 — MO versus SD."] },
    ch16_v5: { label: "[V5]", lines: ["CHH Chapter 16 — context documentation."] },
    ch16_kc1: { label: "[KC1]", lines: ["Domain F: value shift (MO) versus availability cue (SD)."] },
    ch16_kc2: { label: "[KC2]", lines: ["Domain E: revise plans transparently—avoid blame when AO/EO explain drops."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 16",
    intro: "Chapter 16 motivating operations—stimulus control is Chapter 17.",
    entries: [
      { term: "Motivating operation (MO)", definition: "Variable altering reinforcer/punisher effectiveness and related response frequency.", footnoteRef: "ch16_v1" },
      { term: "Value-altering effect", definition: "MO changes how effective a consequence is.", footnoteRef: "ch16_v1" },
      { term: "Behavior-altering effect", definition: "MO changes current frequency of behavior contacting that consequence.", footnoteRef: "ch16_v1" },
      { term: "Establishing operation (EO)", definition: "MO increasing current reinforcer or punisher effectiveness.", footnoteRef: "ch16_v3" },
      { term: "Abolishing operation (AO)", definition: "MO decreasing current reinforcer or punisher effectiveness.", footnoteRef: "ch16_v3" },
      { term: "UMO", definition: "Unconditioned MO based on phylogeny/respondent history.", footnoteRef: "ch16_v2" },
      { term: "CMO", definition: "Conditioned MO acquired through correlated learning history.", footnoteRef: "ch16_v2" },
      { term: "MO versus SD", definition: "MO changes value; SD signals consequence availability.", footnoteRef: "ch16_v4" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 16",
    intro: "Value shift versus availability cue—document context, revise plans.",
    concepts: [
      {
        title: "MO alters consequence value",
        segments: [
          { type: "text", text: "Value-altering and behavior-altering effects define MO analysis—not trait labels or SD availability alone " },
          { type: "footnote", ref: "ch16_v1" },
          { type: "footnote", ref: "ch16_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "UMO versus CMO pathways",
        segments: [
          { type: "text", text: "Biological deprivation/pain (UMO) differs from learned CMO-R, CMO-T, and CMO-S pathways—interpretation and intervention implications differ " },
          { type: "footnote", ref: "ch16_v2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "EO/AO and deprivation/satiation",
        segments: [
          { type: "text", text: "Deprivation increases reinforcer value (EO); satiation decreases it (AO)—track meal and medication timelines with behavior data " },
          { type: "footnote", ref: "ch16_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "MO versus SD and ethical revision",
        segments: [
          { type: "text", text: "SD can remain stable while value shifts; revise hierarchies with context documentation—not blame narratives " },
          { type: "footnote", ref: "ch16_v4" },
          { type: "footnote", ref: "ch16_kc2" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each definition to Chapter 16 MO vocabulary or reject if the stem describes SD availability, wrong EO/AO direction, or non-MO process.",
  matchActivityInstructions:
    "Select the MO interpretation (EO, AO, UMO, CMO), SD-only explanation, or context-documentation response for Cooper Chapter 16.",
  chainActivityInstructions:
    "Sequence motivation analysis: detect value shifts → separate MO from SD → document context → verify trends → revise plans with transparent reporting.",
  mts: [
    {
      sample_stimulus: "After skipping breakfast, edibles highly effective at 9 a.m.; after lunch effectiveness drops—SD unchanged.",
      comparison_options: ["EO then AO (deprivation then satiation)", "Pure SD failure", "Respondent extinction only", "Positive punishment"],
      correct_match: "EO then AO (deprivation then satiation)",
      error_feedback: "Changing consequence value across the day—not sudden cue breakdown.",
    },
    {
      sample_stimulus: "Staff badge still signals token availability; edibles lose impact after heavy snack.",
      comparison_options: [
        "MO changed value while SD stayed stable",
        "SD disappeared because motivation changed",
        "Automatic data invalidity",
        "Extinction only",
      ],
      correct_match: "MO changed value while SD stayed stable",
      error_feedback: "MO and SD answer different questions.",
    },
    {
      sample_stimulus: "Neutral hallway odor repeatedly predicts vending access; odor alone increases manding over time.",
      comparison_options: [
        "Conditioned MO through learned correlation",
        "UMO only",
        "Identical to SD with no MO distinction",
        "Negative punishment",
      ],
      correct_match: "Conditioned MO through learned correlation",
      error_feedback: "Acquired motivational influence fits CMO logic.",
    },
    {
      sample_stimulus: "Report removes meal and medication notes, then claims reinforcement plan failed.",
      comparison_options: [
        "Documentation problem distorting MO interpretation",
        "Normal reporting with no analytic impact",
        "Proof AO irrelevant",
        "IOA error only",
      ],
      correct_match: "Documentation problem distorting MO interpretation",
      error_feedback: "Hidden context logs misattribute value shifts.",
    },
    {
      sample_stimulus: "Painful injury day; escape-maintained responding increases despite unchanged demands.",
      comparison_options: [
        "MO shift increasing escape/aversive-termination value",
        "Permanent SD breakdown",
        "Stimulus equivalence",
        "Positive reinforcement only",
      ],
      correct_match: "MO shift increasing escape/aversive-termination value",
      error_feedback: "Physiological events alter motivational effectiveness.",
    },
    {
      sample_stimulus: "Responding drops after sedating medication; SD cues and token procedures unchanged.",
      comparison_options: [
        "Likely AO/MO shift requiring context-based plan review",
        "Proof SD never learned",
        "Reinforcement impossible for this learner",
        "Verified positive punishment",
      ],
      correct_match: "Likely AO/MO shift requiring context-based plan review",
      error_feedback: "Stable implementation + value shift → MO first.",
    },
    {
      sample_stimulus: "Reinforcer menu updated after sleep/appetite changes; rates recover without SD prompt changes.",
      comparison_options: [
        "Motivation-informed plan revision (Chapter 16)",
        "Proof SD was only relevant factor",
        "Stop collecting context data",
        "Extinction verified",
      ],
      correct_match: "Motivation-informed plan revision (Chapter 16)",
      error_feedback: "Revise MO assumptions when context changes.",
    },
    {
      sample_stimulus: "Which statement best distinguishes MO from SD?",
      comparison_options: [
        "MO changes consequence value; SD signals availability",
        "MO and SD are interchangeable",
        "SD changes value; MO signals availability",
        "Both only apply to punishment",
      ],
      correct_match: "MO changes consequence value; SD signals availability",
      error_feedback: "Core Chapter 16 discrimination.",
    },
  ],
  chainTitle: "Motivation analysis workflow",
  chainFragments: [
    { id: "a", text: "Identify context events that could change current consequence value (EO/AO)." },
    { id: "b", text: "State whether the primary issue is MO value shift, SD availability, or both." },
    { id: "c", text: "Collect context logs (meals, meds, sleep, illness) aligned with session timing." },
    { id: "d", text: "Review behavior patterns against context before labeling treatment failure." },
    { id: "e", text: "Revise reinforcer/punisher assumptions based on current motivation conditions." },
    { id: "f", text: "Report with caveats about context limits—avoid blame-based language." },
  ],
  chainOrder: ["a", "b", "c", "d", "e", "f"],
  safmedTerms: [
    { front: "MO", back: "Alters consequence value + related behavior." },
    { front: "EO", back: "Increases effectiveness." },
    { front: "AO", back: "Decreases effectiveness." },
    { front: "UMO", back: "Unlearned MO." },
    { front: "CMO", back: "Learned MO." },
    { front: "SD vs MO", back: "Availability vs value." },
  ],
  worksheet: {
    title: "CHH Chapter 16 — motivating operations",
    instructions:
      "Decide whether each case is best explained by MO (EO/AO/UMO/CMO), SD availability, or documentation failure. Choose the most defensible answer.",
    scenario:
      "Scenario A — Edibles effective at 9 a.m.; drop after lunch; token SD and delivery unchanged.",
    scenario_follow_up:
      "Scenario B — Meal/medication logs removed; report claims reinforcement failed.\n\nScenario C — Hallway smell predicts snack access; smell alone increases manding.\n\nScenario D — Sedating medication started; rates drop; SD fidelity high.\n\nScenario E — Skipped breakfast; edible effectiveness increased.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Strongest first interpretation?",
        options: ["AO (satiation) after lunch", "Permanent SD failure", "Positive punishment", "Extinction only"],
        correct: "AO (satiation) after lunch",
      },
      {
        id: "response_2",
        label: "Scenario A · MO versus SD?",
        options: ["MO changed value; SD stable", "SD and MO identical", "SD changed value; MO stable", "Neither applies"],
        correct: "MO changed value; SD stable",
      },
      {
        id: "response_3",
        label: "Scenario E · Skipped breakfast increased edible effects:",
        options: ["Establishing operation (deprivation)", "Abolishing operation", "SD shift", "Response cost"],
        correct: "Establishing operation (deprivation)",
      },
      {
        id: "response_4",
        label: "Scenario C · Best classification:",
        options: ["Conditioned MO pathway", "UMO only", "Pure SD only", "Negative punishment"],
        correct: "Conditioned MO pathway",
      },
      {
        id: "response_5",
        label: "Scenario B · Core problem?",
        options: ["Documentation integrity failure", "Normal reporting", "Proof MO irrelevant", "IOA only"],
        correct: "Documentation integrity failure",
      },
      {
        id: "response_6",
        label: "Scenario D · Best first move?",
        options: ["Evaluate AO/MO effects; update plan with context", "Assume SD never learned", "Conclude reinforcement impossible", "Intensify punishment"],
        correct: "Evaluate AO/MO effects; update plan with context",
      },
      {
        id: "response_7",
        label: "MO ALWAYS involves:",
        options: [
          "Altered reinforcer/punisher effectiveness with related behavior change",
          "SD signaling availability only",
          "Added punisher contingent on behavior",
          "Withholding all reinforcement forever",
        ],
        correct: "Altered reinforcer/punisher effectiveness with related behavior change",
      },
      {
        id: "response_8",
        label: "Ethical Chapter 16 supervision language:",
        options: [
          "Update reinforcer assumptions with context—avoid blame",
          "Treat all drops as noncompliance",
          "Delay all changes until certainty",
          "Fixed hierarchy never revised",
        ],
        correct: "Update reinforcer assumptions with context—avoid blame",
      },
    ],
    remediationLog:
      "Rebuild Chapter 16 fluency: value shift (MO)? → SD status? → context evidence? → EO/AO/UMO/CMO pathway? → revise plan.",
  },
  bdsBank: CHAPTER_16_MO_QUIZ_BANK,
};
