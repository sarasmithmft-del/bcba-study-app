import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_20_NE_QUIZ_BANK } from "@/content/modules/quiz/chapter20NonequivalenceQuizBank";

export const MOD21_BLUEPRINT: ExtensionBlueprint = {
  id: "mod21",
  chapterNumber: 20,
  activityPrefix: 2210,
  title: "Engineering Emergent Learning with Nonequivalence Relations",
  codexHeading: "READING — Chapter 20 (Nonequivalence Relations)",
  codexIntro: `Chapter 20 in Cooper, Heron, and Heward extends relational instruction beyond stimulus equivalence classes. Where Chapter 19 targets reflexivity, symmetry, and transitivity as evidence of equivalence-class formation, Chapter 20 engineers emergent learning through relational frames—sameness, opposition, hierarchy, analogy—where those equivalence properties may not be the prized or assumed outcome.

Nonequivalence programming deliberately builds relational control without marketing Sidman-grade equivalence rhetoric when the analytic targets are purposely nonequilibrium. Practitioners use nodal primes (hub stimuli), contextual controlled comparisons, and explicit prompts that need not copy textbook equivalence choreography. Instruction stabilizes minimally sufficient conditional performances, then probes emergent substitutions—including thematic analogies and opposition relations—while documenting which derived performances actually arrived versus which required booster training.

Measurement still separates instructed acquisition from withheld relational probes, logs prompting fidelity, applies IOA to fuzzy relational judgments, and uses modest graphs stakeholders can audit. Blending taught and probe trials on one dashboard misrepresents emergence. Families and supervisors deserve accurate labels about what was trained, probed, or still absent.

Chapter 20 pairs with Chapter 19: both pursue efficient relational learning, but Ch 19 claims equivalence-class properties while Ch 20 may target other relation classes. For BCBA exam prep: verify relation class programmed, confirm probe segregation, reject equivalence marketing when nonequivalence was targeted, and match dissemination language to probe evidence.`,
  footnotes: {
    ch20_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 20 — nonequivalence relations / engineering emergent learning (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Relational framing without assuming equivalence-class properties.",
        "Not quoted from CHH.",
      ],
    },
    ch20_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 20 — contrast with Ch 19 equivalence-based instruction.",
        "Symmetry/transitivity may not be targeted relation properties.",
      ],
    },
    ch20_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 20 — probe segregation; instructed vs derived/withheld relational tests.",
        "Disaggregated measurement supports honest emergence claims.",
      ],
    },
    ch20_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 20 — nodal primes, contextual comparisons, relational framing types.",
        "Deliberate engineering of relational networks.",
      ],
    },
    ch20_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 20 — modest dissemination; ethical reporting without inflated equivalence rhetoric.",
        "Appendices auditable under skeptical review.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch20_1" },
    { afterSentenceIndex: 0, ref: "ch20_2" },
    { afterSentenceIndex: 1, ref: "ch20_4" },
    { afterSentenceIndex: 2, ref: "ch20_3" },
    { afterSentenceIndex: 3, ref: "ch20_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 20 recap",
    intro:
      "Chapter 20 teaches relational skills without assuming full equivalence classes. You still probe for emergence—but the relation type and the claims must match what you actually programmed.",
    chunks: [
      {
        subtitle: "Not Chapter 19 again",
        segments: [
          {
            type: "text",
            text: "Chapter 19 hunts symmetry and transitivity for equivalence classes. Chapter 20 builds other relational frames—analogy, opposition, hierarchy—without automatically claiming Sidman-grade equivalence ",
          },
          { type: "footnote", ref: "ch20_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Engineer, then probe",
        segments: [
          {
            type: "text",
            text: "Use nodal hubs and deliberate comparisons. Train minimal instructed mappings, then run withheld probes for derived relations—including analogies ",
          },
          { type: "footnote", ref: "ch20_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Keep strata separate",
        segments: [
          {
            type: "text",
            text: "Never blend taught rows with probe rows on one graph. Document booster training when probes fail—not deleted rows ",
          },
          { type: "footnote", ref: "ch20_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Report modestly",
        segments: [
          {
            type: "text",
            text: "Tell families what was trained, probed, or still missing. Skip billboard equivalence language when your curriculum was purposely nonequilibrium ",
          },
          { type: "footnote", ref: "ch20_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include claiming equivalence-class mastery when programming nonequivalence relations, blending trained and probe trials on one graph, confusing relational framing with simple discrimination, and marketing Sidman-grade emergence without appropriate probes. Resolve them by checking whether equivalence properties were actually targeted, verifying probe segregation, and matching dissemination language to probe evidence before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch20_v1: { label: "[V1]", lines: ["CHH Chapter 20 — nonequivalence programming."] },
    ch20_v2: { label: "[V2]", lines: ["CHH Chapter 20 — relational framing."] },
    ch20_v3: { label: "[V3]", lines: ["CHH Chapter 20 — derived performance."] },
    ch20_v4: { label: "[V4]", lines: ["CHH Chapter 20 — nodal primes."] },
    ch20_v5: { label: "[V5]", lines: ["CHH Chapter 20 — probe segregation."] },
    ch20_kc1: { label: "[KC1]", lines: ["Domain F: Ch 19 vs Ch 20 relation classes; taught vs derived."] },
    ch20_kc2: { label: "[KC2]", lines: ["Domain C: segregated probe ledgers + IOA on relational trials."] },
    ch20_kc3: { label: "[KC3]", lines: ["Domain E: modest dissemination—no equivalence laundering."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 20",
    intro: "Chapter 20 nonequivalence relations—equivalence-based instruction is Chapter 19.",
    entries: [
      { term: "Nonequivalence programming", definition: "Relational targets without assuming or marketing equivalence-class proofs.", footnoteRef: "ch20_v1" },
      { term: "Relational framing", definition: "Contextual control over abstract relations (sameness, opposition, hierarchy).", footnoteRef: "ch20_v2" },
      { term: "Derived performance", definition: "Novel relational responses without exhaustive pairwise training when warranted.", footnoteRef: "ch20_v3" },
      { term: "Nodal primes", definition: "Hub stimuli organizing training for interpretable branching probes.", footnoteRef: "ch20_v4" },
      { term: "Probe segregation", definition: "Separate streams for instructed acquisition vs withheld relational tests.", footnoteRef: "ch20_v5" },
      { term: "Modest dissemination", definition: "Reporting language matching demonstrated probe outcomes.", footnoteRef: "ch20_v5" },
      { term: "Withheld probe", definition: "Relational test not directly trained under controlled conditions.", footnoteRef: "ch20_v3" },
      { term: "Booster training", definition: "Additional instruction when derived probe fails—document honestly.", footnoteRef: "ch20_v3" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 20",
    intro: "Relation class match, probe segregation, modest claims.",
    concepts: [
      {
        title: "Ch 19 versus Ch 20 targets",
        segments: [
          { type: "text", text: "Equivalence properties (Ch 19) vs engineered nonequilibrium relations (Ch 20)—do not interchange marketing language " },
          { type: "footnote", ref: "ch20_2" },
          { type: "footnote", ref: "ch20_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Relational engineering and probes",
        segments: [
          { type: "text", text: "Nodal primes and minimal instructed mappings followed by segregated analogical/opposition probes " },
          { type: "footnote", ref: "ch20_4" },
          { type: "footnote", ref: "ch20_v3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Measurement discipline persists",
        segments: [
          { type: "text", text: "Separate instructed from withheld probes; IOA on fuzzy relational scoring; fidelity on prompts " },
          { type: "footnote", ref: "ch20_3" },
          { type: "footnote", ref: "ch20_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical modest reporting",
        segments: [
          { type: "text", text: "Accurate labels for trained/probed/absent skills—no equivalence certification without appropriate evidence " },
          { type: "footnote", ref: "ch20_5" },
          { type: "footnote", ref: "ch20_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 20 vocabulary or reject if the stem describes Ch 19 equivalence proofs, merged data streams, or mislabeled equivalence certification.",
  matchActivityInstructions:
    "Select nonequivalence rationale, probe-segregation fix, relational-framing interpretation, or modest-reporting response for Cooper Chapter 20.",
  chainActivityInstructions:
    "Sequence nonequivalence rollout: operationalize relation targets and nodal primes → train minimal mappings → run segregated probes → report with methodological modesty.",
  mts: [
    {
      sample_stimulus: "Forward A→B trained only; district claims full emergent literacy—no reversed or analogical probes.",
      comparison_options: [
        "Withhold omnibus emergence marketing until probes match relation class",
        "Automatic proof from slide design",
        "Rename trained trials as probes",
        "Delete appendices",
      ],
      correct_match: "Withhold omnibus emergence marketing until probes match relation class",
      error_feedback: "Probe evidence insufficient.",
    },
    {
      sample_stimulus: "Nonequivalence package rebranded as equivalence certification—mirrored icons, no withheld-probe rows.",
      comparison_options: [
        "Correct labels; segregate instructed from withheld probes",
        "Certify when slides look symmetric",
        "Delete withheld probes",
        "Nodal primes cancel segregation",
      ],
      correct_match: "Correct labels; segregate instructed from withheld probes",
      error_feedback: "Relation class must match claims.",
    },
    {
      sample_stimulus: "Spreadsheet lists taught pairs beside analogical withhold rows—no row labels.",
      comparison_options: [
        "Strata-separation gap—combined rows launder mastery claims",
        "Ideal documentation",
        "MO makes merge acceptable",
        "IOA bans relational curricula",
      ],
      correct_match: "Strata-separation gap—combined rows launder mastery claims",
      error_feedback: "Domain C flaw.",
    },
    {
      sample_stimulus: "Graphs segregate instructed blocks from withheld probes with IOA on relational trials.",
      comparison_options: [
        "Credible nonequivalence measurement dossier",
        "Optional decoration",
        "Proves Sidman equivalence automatically",
        "Replaces reinforcement",
      ],
      correct_match: "Credible nonequivalence measurement dossier",
      error_feedback: "Auditable probe structure.",
    },
    {
      sample_stimulus: "Team programs opposition and analogy relations—not symmetry/transitivity targets.",
      comparison_options: [
        "Nonequivalence programming—avoid equivalence-class marketing",
        "Must prove full stimulus equivalence",
        "No probes needed",
        "Identical to Ch 19 EBI claims",
      ],
      correct_match: "Nonequivalence programming—avoid equivalence-class marketing",
      error_feedback: "Ch 20 relation class.",
    },
    {
      sample_stimulus: "Derived analogical probe fails; booster training added; team hides failure in report.",
      comparison_options: [
        "Integrity breach—document booster need honestly",
        "Standard practice",
        "Proof emergence succeeded",
        "Delete all probes",
      ],
      correct_match: "Integrity breach—document booster need honestly",
      error_feedback: "Transparent reporting required.",
    },
    {
      sample_stimulus: "Nodal hub A links to B and C; analogical B→D probe tested after minimal AB, AC instruction.",
      comparison_options: [
        "Deliberate relational engineering with segregated probe",
        "Proves reflexivity only",
        "MO programming",
        "No measurement needed",
      ],
      correct_match: "Deliberate relational engineering with segregated probe",
      error_feedback: "Ch 20 design pattern.",
    },
    {
      sample_stimulus: "Chapter 20 versus Chapter 19—key difference in claims?",
      comparison_options: [
        "Ch 20 may not target equivalence-class properties; Ch 19 does",
        "Ch 20 eliminates probes",
        "Identical relation targets",
        "Ch 19 has no probes",
      ],
      correct_match: "Ch 20 may not target equivalence-class properties; Ch 19 does",
      error_feedback: "Core chapter distinction.",
    },
  ],
  chainTitle: "Late relational rollout",
  chainFragments: [
    { id: "a", text: "Operationalize relational targets and nodal primes distinct from equivalence-only curricula." },
    { id: "b", text: "Train minimal instructed mappings with humane error-correction." },
    { id: "c", text: "Run segregated probes for derived nonequivalence performances." },
    { id: "d", text: "Report outcomes with methodological modesty and auditable appendices." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Nonequivalence", back: "Relational targets ≠ equivalence proof." },
    { front: "Relational framing", back: "Abstract relation control." },
    { front: "Nodal prime", back: "Hub stimulus in network." },
    { front: "Probe segregation", back: "Taught vs withheld separate." },
    { front: "Derived", back: "Not directly trained." },
    { front: "Modest dissemination", back: "Claims match probes." },
  ],
  worksheet: {
    title: "CHH Chapter 20 — nonequivalence relations",
    instructions:
      "Identify relation class, probe segregation quality, and whether reporting matches programmed targets.",
    scenario:
      "Scenario A — Forward relations trained; marketing claims full emergent literacy; no reversed/analogical probes documented.",
    scenario_follow_up:
      "Scenario B — Nonequivalence curriculum rebranded as equivalence certification (mirrored icons, no withheld-probe rows).\n\nScenario C — Single spreadsheet mixes taught pairs and analogical withhold rows without labels.\n\nScenario D — Segregated graphs with IOA on relational probes; modest guardian language.\n\nScenario E — Analogical probe fails; booster training given; failures removed from appendix.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Best critique?",
        options: [
          "Withhold omnibus emergence marketing until probes match relation class",
          "Approve from slide design",
          "Rename trained as probes",
        ],
        correct: "Withhold omnibus emergence marketing until probes match relation class",
      },
      {
        id: "response_2",
        label: "Scenario B · Best fix?",
        options: [
          "Correct labels; segregate instructed from withheld probes",
          "Certify from mirrored icons",
          "Delete withheld probes",
        ],
        correct: "Correct labels; segregate instructed from withheld probes",
      },
      {
        id: "response_3",
        label: "Scenario C · Domain C flaw?",
        options: [
          "Strata-separation gap—combined rows launder mastery claims",
          "Ideal hygiene",
          "MO makes merge acceptable",
        ],
        correct: "Strata-separation gap—combined rows launder mastery claims",
      },
      {
        id: "response_4",
        label: "Scenario D · Best description?",
        options: [
          "Credible nonequivalence measurement and modest reporting",
          "Optional decoration",
          "Proves Sidman equivalence automatically",
        ],
        correct: "Credible nonequivalence measurement and modest reporting",
      },
      {
        id: "response_5",
        label: "Scenario E · Core problem?",
        options: [
          "Integrity breach—report booster need and probe failures honestly",
          "Standard practice",
          "Proof full emergence",
        ],
        correct: "Integrity breach—report booster need and probe failures honestly",
      },
      {
        id: "response_6",
        label: "Ch 20 vs Ch 19—MOST accurate?",
        options: [
          "Ch 20 may target relations without assuming equivalence-class properties",
          "Identical targets and claims",
          "Ch 20 eliminates all probes",
        ],
        correct: "Ch 20 may target relations without assuming equivalence-class properties",
      },
      {
        id: "response_7",
        label: "Nonequivalence programming means:",
        options: [
          "Relational control engineered without marketing equivalence proofs",
          "No relational training",
          "Exhaustive all-pairs only",
        ],
        correct: "Relational control engineered without marketing equivalence proofs",
      },
      {
        id: "response_8",
        label: "Ethical Ch 20 dissemination:",
        options: [
          "Language matching demonstrated probe outcomes",
          "Sidman-grade marketing regardless of design",
          "Hide failed probes",
        ],
        correct: "Language matching demonstrated probe outcomes",
      },
    ],
    remediationLog:
      "Rebuild Chapter 20 fluency: relation class targeted? → instructed vs withheld segregated? → probes match claims? → modest reporting?",
  },
  bdsBank: CHAPTER_20_NE_QUIZ_BANK,
};
