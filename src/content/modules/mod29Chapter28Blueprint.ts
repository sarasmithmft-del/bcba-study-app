import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_28_TOKEN_ECONOMY_QUIZ_BANK } from "@/content/modules/quiz/chapter28TokenEconomyQuizBank";

export const MOD29_BLUEPRINT: ExtensionBlueprint = {
  id: "mod29",
  chapterNumber: 28,
  activityPrefix: 2290,
  title: "Token Economy, Group Contingencies, and Contingency Contracting",
  codexHeading: "READING — Chapter 28 (Token Economy, Group Contingencies, and Contingency Contracting)",
  codexIntro: `Chapter 28 in Cooper, Heron, and Heward covers token economies, group contingencies, and contingency contracting—systems that organize reinforcement across individuals and groups with written clarity.

Token economies translate backup reinforcers through conditioned tokens. Integrity demands exchange schedules stakeholders understand, MO alignment so tokens retain value, and fraud-resistant bookkeeping so economies do not devolve into arbitrary control. When tokens are promised but never cashed out, the economy collapses—restore reliable exchange before continuing.

Independent group contingencies tie reinforcement to each individual meeting criteria regardless of peers. Dependent group contingencies make group reinforcement hinge on one member's performance—the "hero" model. Interdependent group contingencies require collective performance for all to earn reinforcement—watch for peer pressure, bullying, and equity harms for marginalized students.

Contingency contracts spell mutual if-then obligations, operational definitions, monitoring roles, and dispute resolution. Contracts must remain assent-sensitive and understandable—not coercive paperwork theater when power asymmetries dominate IEP tables. Plain-language clauses, assent checks, and disputing pathways are ethical prerequisites.

Measurement attributes change to planned contingencies—not confounded history. Graph individual and group metrics showing contingencies actually contacted target behaviors. Audit exchange integrity: tokens must reliably purchase promised backup reinforcers.

Ethical guardrails include transparent ratio changes, prohibiting token systems as substitutes for absent educational supports, documenting when group contingencies humiliate learners, and pairing economies with self-management (Chapter 29) where developmental goals warrant autonomy.

For BCBA exam prep: check exchange integrity, group contingency type (independent/dependent/interdependent), contract assent and comprehension, and whether backup reinforcers were actually delivered before choosing an answer.`,
  footnotes: {
    ch28_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 28 — token economies (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Conditioned tokens and backup reinforcers.",
        "Not quoted from CHH.",
      ],
    },
    ch28_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 28 — group contingencies.",
        "Independent, dependent, interdependent structures.",
      ],
    },
    ch28_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 28 — contingency contracting.",
        "Mutual obligations and monitoring.",
      ],
    },
    ch28_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 28 — exchange integrity and MO alignment.",
        "Trustworthy schedules and bookkeeping.",
      ],
    },
    ch28_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 28 — ethical guardrails.",
        "Equity, assent, no token substitute for supports.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch28_1" },
    { afterSentenceIndex: 1, ref: "ch28_2" },
    { afterSentenceIndex: 2, ref: "ch28_3" },
    { afterSentenceIndex: 3, ref: "ch28_4" },
    { afterSentenceIndex: 4, ref: "ch28_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 28 recap",
    intro:
      "Chapter 28 is about organized reinforcement systems—tokens, group rewards, and written contracts—with honest exchange, clear rules, and safeguards against coercion or peer harm.",
    chunks: [
      {
        subtitle: "Token economies",
        segments: [
          {
            type: "text",
            text: "Tokens buy backup reinforcers on a published schedule. If exchange fails, the system becomes fake money—fix delivery before continuing ",
          },
          { type: "footnote", ref: "ch28_1" },
          { type: "footnote", ref: "ch28_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Group contingencies",
        segments: [
          {
            type: "text",
            text: "Independent = each person earns on own performance. Dependent = one person's behavior earns for the group. Interdependent = everyone must meet criteria together—watch bullying and equity ",
          },
          { type: "footnote", ref: "ch28_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Contingency contracts",
        segments: [
          {
            type: "text",
            text: "Written if-then plans with monitoring and dispute paths—plain language and assent, not jargon signatures under pressure ",
          },
          { type: "footnote", ref: "ch28_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Ethics",
        segments: [
          {
            type: "text",
            text: "Tokens cannot replace missing educational supports. Document humiliation risks, transparent ratio changes, and pair with self-management when autonomy is the goal ",
          },
          { type: "footnote", ref: "ch28_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include tokens without reliable exchange, confusing independent and interdependent group contingencies, contracts without assent-sensitive monitoring, and backup reinforcer menus that do not match learner MO. Resolve them by checking exchange integrity, group contingency type, and whether reinforcers were actually delivered before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch28_v1: { label: "[V1]", lines: ["CHH Chapter 28 — token."] },
    ch28_v2: { label: "[V2]", lines: ["CHH Chapter 28 — backup reinforcer."] },
    ch28_v3: { label: "[V3]", lines: ["CHH Chapter 28 — independent group contingency."] },
    ch28_v4: { label: "[V4]", lines: ["CHH Chapter 28 — dependent group contingency."] },
    ch28_v5: { label: "[V5]", lines: ["CHH Chapter 28 — interdependent group contingency."] },
    ch28_v6: { label: "[V6]", lines: ["CHH Chapter 28 — contingency contract."] },
    ch28_kc1: { label: "[KC1]", lines: ["Domain F: group contingency type discrimination."] },
    ch28_kc2: { label: "[KC2]", lines: ["Domain C: exchange integrity, individual/group metrics."] },
    ch28_kc3: { label: "[KC3]", lines: ["Domain E: equity, assent, anti-bullying guardrails."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 28",
    intro: "Chapter 28 token/group/contract systems—self-management is Chapter 29.",
    entries: [
      { term: "Token", definition: "Conditioned reinforcer exchangeable for backup reinforcers per published schedule.", footnoteRef: "ch28_v1" },
      { term: "Backup reinforcer", definition: "Terminal reinforcer contacted when token exchange rules are honored.", footnoteRef: "ch28_v2" },
      { term: "Independent group contingency", definition: "Reinforcement hinges on each individual meeting criteria regardless of peers.", footnoteRef: "ch28_v3" },
      { term: "Dependent group contingency", definition: "Group reinforcement depends on one member's performance.", footnoteRef: "ch28_v4" },
      { term: "Interdependent group contingency", definition: "Reinforcement requires collective performance—monitor peer pressure harms.", footnoteRef: "ch28_v5" },
      { term: "Contingency contract", definition: "Written if-then obligations with monitoring and signature ethics.", footnoteRef: "ch28_v6" },
      { term: "Exchange integrity", definition: "Documented follow-through that tokens reliably purchase promised reinforcers.", footnoteRef: "ch28_v4" },
      { term: "Conditioned reinforcer", definition: "Stimulus that acquired reinforcing value through pairing with backup reinforcers.", footnoteRef: "ch28_v1" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 28",
    intro: "Tokens, group types, contracts, integrity, ethics.",
    concepts: [
      {
        title: "Token economy integrity",
        segments: [
          { type: "text", text: "Published exchange schedules, MO-aligned backup menus, fraud-resistant bookkeeping " },
          { type: "footnote", ref: "ch28_v1" },
          { type: "footnote", ref: "ch28_v2" },
          { type: "footnote", ref: "ch28_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Independent, dependent, and interdependent contingencies",
        segments: [
          { type: "text", text: "Discriminate who must perform for reinforcement to contact—individual, one hero, or collective " },
          { type: "footnote", ref: "ch28_v3" },
          { type: "footnote", ref: "ch28_v4" },
          { type: "footnote", ref: "ch28_v5" },
          { type: "footnote", ref: "ch28_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Contingency contracting",
        segments: [
          { type: "text", text: "Operational definitions, mutual monitoring, dispute resolution, plain-language assent " },
          { type: "footnote", ref: "ch28_v6" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Ethical guardrails",
        segments: [
          { type: "text", text: "Anti-bullying monitoring, equity, no token substitute for supports, transparent ratio changes " },
          { type: "footnote", ref: "ch28_kc3" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 28 vocabulary or reject if the stem describes tokens without exchange integrity, interdependent harm without safeguards, or coercive unreadable contracts.",
  matchActivityInstructions:
    "Select group contingency type, exchange integrity fix, contract ethics response, or MO/backup menu adjustment for Cooper Chapter 28.",
  chainActivityInstructions:
    "Sequence rollout: co-design backup menus and exchange rates → train integrity and anti-bullying guardrails → graph individual/group metrics → audit contracts for coercion risk.",
  mts: [
    {
      sample_stimulus: "Tokens promised never cash out—learners call system fake money.",
      comparison_options: [
        "Restore reliable exchange and transparent schedules before continuing",
        "Double demands without reinforcers",
        "Punish criticism of tokens",
        "Remove measurement to hide gap",
      ],
      correct_match: "Restore reliable exchange and transparent schedules before continuing",
      error_feedback: "Exchange integrity required.",
    },
    {
      sample_stimulus: "Interdependent contingency sparks peer mocking toward classmate missing criteria.",
      comparison_options: [
        "Pause collective contingencies; anti-bullying monitoring and humane redesign",
        "Ignore because averages improved",
        "Punish reporters",
        "Delete bullying notes",
      ],
      correct_match: "Pause collective contingencies; anti-bullying monitoring and humane redesign",
      error_feedback: "Correct action: Pause collective contingencies; anti-bullying monitoring and humane redesign",
    },
    {
      sample_stimulus: "Contract drafted in jargon; pressured signatures; caregivers cannot negotiate.",
      comparison_options: [
        "Domain E coercion risk—plain language, assent checks, dispute pathways",
        "Signatures settle ethics regardless of comprehension",
        "Delete dispute clauses",
        "Enforce immediately",
      ],
      correct_match: "Domain E coercion risk—plain language, assent checks, dispute pathways",
      error_feedback: "Correct action: Domain E coercion risk—plain language, assent checks, dispute pathways",
    },
    {
      sample_stimulus: "Each student earns tokens only for own behavior meeting criterion.",
      comparison_options: [
        "Independent group contingency",
        "Interdependent group contingency",
        "Dependent group contingency",
        "Extinction",
      ],
      correct_match: "Independent group contingency",
      error_feedback: "Individual criterion.",
    },
    {
      sample_stimulus: "Class party only if designated peer meets behavior goal.",
      comparison_options: [
        "Dependent group contingency",
        "Independent group contingency",
        "Interdependent group contingency",
        "Token extinction",
      ],
      correct_match: "Dependent group contingency",
      error_feedback: "One member determines group reinforcer.",
    },
    {
      sample_stimulus: "Reinforcement for all only if every group member meets criterion.",
      comparison_options: [
        "Interdependent group contingency",
        "Independent group contingency",
        "Dependent group contingency",
        "DRO only",
      ],
      correct_match: "Interdependent group contingency",
      error_feedback: "Collective performance required.",
    },
    {
      sample_stimulus: "Backup menu items no longer motivating; token exchange drops.",
      comparison_options: [
        "Reassess MO and refresh backup reinforcer menu",
        "Ignore—tokens sufficient",
        "Punish non-exchange",
        "Delete token economy permanently",
      ],
      correct_match: "Reassess MO and refresh backup reinforcer menu",
      error_feedback: "MO alignment.",
    },
    {
      sample_stimulus: "Token system used instead of required educational supports.",
      comparison_options: [
        "Domain E violation—tokens cannot substitute for absent supports",
        "Best practice cost saving",
        "Required for group contingencies",
        "IOA issue only",
      ],
      correct_match: "Domain E violation—tokens cannot substitute for absent supports",
      error_feedback: "Ethical guardrail.",
    },
  ],
  chainTitle: "Token and contract rollout",
  chainFragments: [
    { id: "a", text: "Co-design backup menus and exchange rates with stakeholders including assent pathways." },
    { id: "b", text: "Train staff on integrity and anti-bullying guardrails for group contingencies." },
    { id: "c", text: "Graph individual and group metrics showing planned contingencies actually contacted behaviors." },
    { id: "d", text: "Audit contracts for coercion risk and adjust reinforcement density humanely." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Token", back: "Conditioned exchange medium." },
    { front: "Backup reinforcer", back: "What tokens buy." },
    { front: "Independent", back: "Each earns alone." },
    { front: "Interdependent", back: "All must meet criteria." },
    { front: "Contract", back: "Written if-then plan." },
    { front: "Exchange integrity", back: "Tokens cash out reliably." },
  ],
  worksheet: {
    title: "CHH Chapter 28 — token economy, group contingencies, contracts",
    instructions:
      "Classify group contingency type, exchange/contract ethics response, MO menu fix, and integrity audit.",
    scenario:
      "Scenario A — Tokens never cash out; learners call economy fake money.",
    scenario_follow_up:
      "Scenario B — Interdependent contingency; peer mocking toward student missing criteria.\n\nScenario C — Contract in jargon with pressured signatures.\n\nScenario D — Each student earns tokens for own behavior only.\n\nScenario E — Class reward only if one designated peer meets goal.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Ethical fix?",
        options: ["Restore reliable exchange and transparent schedules", "Double demands without reinforcers", "Punish criticism"],
        correct: "Restore reliable exchange and transparent schedules",
      },
      {
        id: "response_2",
        label: "Scenario B · Safeguard?",
        options: ["Pause collective contingency; anti-bullying redesign", "Ignore average gains", "Punish reporters"],
        correct: "Pause collective contingency; anti-bullying redesign",
      },
      {
        id: "response_3",
        label: "Scenario C · Ethics concern?",
        options: ["Coercion risk—plain language and assent pathways", "Signatures sufficient", "Delete dispute clauses"],
        correct: "Coercion risk—plain language and assent pathways",
      },
      {
        id: "response_4",
        label: "Scenario D · Group type?",
        options: ["Independent group contingency", "Interdependent", "Dependent"],
        correct: "Independent group contingency",
      },
      {
        id: "response_5",
        label: "Scenario E · Group type?",
        options: ["Dependent group contingency", "Independent", "Interdependent"],
        correct: "Dependent group contingency",
      },
      {
        id: "response_6",
        label: "Interdependent contingency requires:",
        options: ["Collective performance for group reinforcement", "One hero only always", "No peer effects"],
        correct: "Collective performance for group reinforcement",
      },
      {
        id: "response_7",
        label: "Exchange integrity means:",
        options: ["Tokens reliably purchase promised reinforcers", "Optional bookkeeping", "Hero captions only"],
        correct: "Tokens reliably purchase promised reinforcers",
      },
      {
        id: "response_8",
        label: "Ethical token/group systems prioritize:",
        options: ["Equity, assent, honest exchange, no support substitution", "Peer pressure as motivation", "Unreadable contracts"],
        correct: "Equity, assent, honest exchange, no support substitution",
      },
    ],
    remediationLog:
      "Rebuild Chapter 28 fluency: exchange working? → group type identified? → backup MO aligned? → contract comprehensible/assented? → bullying/equity safeguards?",
  },
  bdsBank: CHAPTER_28_TOKEN_ECONOMY_QUIZ_BANK,
};
