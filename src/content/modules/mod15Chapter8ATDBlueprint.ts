import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_08_ATD_SUPPLEMENT_QUIZ_BANK } from "@/content/modules/quiz/chapter08ATDSupplementQuizBank";

export const MOD15_BLUEPRINT: ExtensionBlueprint = {
  id: "mod15",
  chapterNumber: 8,
  activityPrefix: 2150,
  title: "Alternating Treatments Design",
  codexHeading: "READING — Chapter 8 (Alternating Treatments Design)",
  codexIntro: `Chapter 8 in Cooper, Heron, and Heward includes alternating treatments designs (ATDs)—also called multielement designs when conditions alternate rapidly—as a method for comparing two or more active interventions without requiring lengthy withdrawal phases for every learner.

ATDs rotate distinct intervention packages across sessions or days so differentiated performance paths can emerge on concurrent overlays. Domain F comparative logic asks which humane support package produces better outcomes under controlled rotation—not which phase label looks best on a slide. Domain C fidelity matters through sequence ledgers, condition definitions, and graph overlays reviewers can replay. Domain E transparency matters when envelopes overlap and superiority claims must stay tentative.

Counterbalancing or randomized sequencing distributes mundane order effects—weekday staffing quality, fatigue, novelty—so they do not impersonate contingency superiority when one condition always lands on easier calendar slots.

Applied ATDs compare supports teams can ethically deliver in real classrooms: prompting styles, reinforcement menus, instructional packages. They are not deprivation theater dressed up as science.

Interpretive humility is mandatory. Multitreatment interference, carryover, and generalized enhancement can smear condition boundaries. Document fidelity, use washout intervals when feasible, annotate overlap candidly, and avoid declaring decisive winners from inseparable graphs.

For BCBA exam prep: rehearse discriminable packages, fair rotation, overlay separation versus interference, humane comparison rationale, and tentative language when bleed-through persists. Discriminate ATD rapid alternation from Chapter 9 multiple-baseline stagger.`,
  footnotes: {
    ch8_atd_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 8 — alternating treatments (multielement) logic comparing conditions via rapid rotation (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "Exam vignettes juxtapose differentiation claims with overlap reality—use tentative language until fidelity clears interference.",
        "Not quoted from CHH.",
      ],
    },
    ch8_atd_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 8 — counterbalancing / randomized sequencing controlling order effects.",
        "Predictable weekday pairings threaten sequence confounds absent redistribution documentation.",
      ],
    },
    ch8_atd_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 8 — applied uses comparing interventions without ethically indefensible withdrawals.",
        "Humane Domain E choices paired with disciplined Domain F comparative narratives.",
      ],
    },
    ch8_atd_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 8 — multitreatment interference, carryover, generalized enhancement.",
        "Overlap narratives stay accountable with Domain C logs—not cosmetic optimism.",
      ],
    },
    ch8_atd_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 8 — phase fidelity documentation across condition changes.",
        "Sequence matrices and fidelity checklists keep ATD arcs auditable.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch8_atd_1" },
    { afterSentenceIndex: 2, ref: "ch8_atd_2" },
    { afterSentenceIndex: 3, ref: "ch8_atd_3" },
    { afterSentenceIndex: 4, ref: "ch8_atd_4" },
    { afterSentenceIndex: 5, ref: "ch8_atd_5" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 8 ATD recap",
    intro:
      "Alternating treatments designs rotate two or more humane intervention packages quickly, compare concurrent graph paths fairly, and stay honest when sessions bleed together.",
    chunks: [
      {
        subtitle: "Rapid juxtaposition—not slow stagger",
        segments: [
          {
            type: "text",
            text: "ATDs alternate distinct interventions across sessions or days so comparative inference can emerge quickly on concurrent overlays—different from multiple-baseline stagger across months ",
          },
          { type: "footnote", ref: "ch8_atd_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Counterbalance the calendar",
        segments: [
          {
            type: "text",
            text: "Randomization or counterbalancing distributes fatigue, novelty, and staffing-quality effects so they do not impersonate reinforcement superiority ",
          },
          { type: "footnote", ref: "ch8_atd_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Compare supports learners can actually receive",
        segments: [
          {
            type: "text",
            text: "Applied ATDs contrast humane supports teachers might realistically rotate—not starvation routines dressed up as science ",
          },
          { type: "footnote", ref: "ch8_atd_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Interference and carryover require humility",
        segments: [
          {
            type: "text",
            text: "Multitreatment interference and carryover can smear envelopes when rotations stay tight. Document fidelity, annotate overlap, and avoid decisive winner language overnight ",
          },
          { type: "footnote", ref: "ch8_atd_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Document every condition change",
        segments: [
          {
            type: "text",
            text: "Fidelity notes and sequence logs must show which package was live when the graph shifted ",
          },
          { type: "footnote", ref: "ch8_atd_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include declaring superiority from inseparable overlays, predictable weekday scheduling without counterbalancing, confusing ATDs with multiple-baseline stagger (Chapter 9), and ignoring multitreatment interference. Resolve them by checking rotation fairness, overlay separation, and fidelity documentation before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch8_atd_v1: { label: "[V1]", lines: ["CHH Chapter 8 — alternating treatments (ATD) rapid juxtaposition."] },
    ch8_atd_v2: { label: "[V2]", lines: ["CHH Chapter 8 — counterbalancing / random rotation."] },
    ch8_atd_v3: { label: "[V3]", lines: ["CHH Chapter 8 — humane active comparison rationale."] },
    ch8_atd_v4: { label: "[V4]", lines: ["CHH Chapter 8 — multitreatment interference."] },
    ch8_atd_v5: { label: "[V5]", lines: ["CHH Chapter 8 — carryover between conditions."] },
    ch8_atd_v6: { label: "[V6]", lines: ["CHH Chapter 8 — washout interval when ethically feasible."] },
    ch8_atd_kc1: { label: "[KC1]", lines: ["Domain F: rapid contrast logic with tentative superiority language when overlap persists."] },
    ch8_atd_kc2: { label: "[KC2]", lines: ["Domain C: sequence matrices, fidelity checklists, IOA overlays."] },
    ch8_atd_kc3: { label: "[KC3]", lines: ["Domain E: no cherry-picking winning sessions while hiding overlap memos."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 8 (Alternating Treatments)",
    intro: "Fluency check: rapid contrast logic (Domain F), sequencing and fidelity scaffolding (Domain C), humane comparison plus honest overlap reporting (Domain E).",
    entries: [
      { term: "Alternating treatments design (ATD)", definition: "Rapid rotation juxtaposing interventions to accelerate comparative inference.", footnoteRef: "ch8_atd_v1" },
      { term: "Multielement design", definition: "Two or more conditions alternated rapidly for comparison on concurrent overlays.", footnoteRef: "ch8_atd_v1" },
      { term: "Counterbalancing", definition: "Fair rotation of condition order to control sequence effects.", footnoteRef: "ch8_atd_v2" },
      { term: "Humane active comparison", definition: "Contrasting ethical supports learners may receive—not deprivation theater.", footnoteRef: "ch8_atd_v3" },
      { term: "Multitreatment interference", definition: "Adjacent treatments elevate both overlays, obscuring contingency attribution.", footnoteRef: "ch8_atd_v4" },
      { term: "Carryover", definition: "Residual effects from a prior package infiltrate the next session.", footnoteRef: "ch8_atd_v5" },
      { term: "Washout interval", definition: "Neutral hiatus dampening multitreatment bleed when ethically feasible.", footnoteRef: "ch8_atd_v6" },
      { term: "Generalized enhancement", definition: "Improvement spreads across all conditions—may obscure which IV caused change.", footnoteRef: "ch8_atd_v4" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 8 (Alternating Treatments)",
    intro: "Panels braid Domain F comparative rigor with Domain C sequence honesty and Domain E stakeholder candor.",
    concepts: [
      {
        title: "Rapid juxtaposition—not stagger alone",
        segments: [
          { type: "text", text: "ATDs hinge on rotations compressing timelines so differentiation surfaces quickly when separation exists " },
          { type: "footnote", ref: "ch8_atd_v1" },
          { type: "footnote", ref: "ch8_atd_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Sequence fairness gatekeeps attribution",
        segments: [
          { type: "text", text: "Counterbalancing redistributes nuisance gradients so contingency claims stay defensible " },
          { type: "footnote", ref: "ch8_atd_v2" },
          { type: "footnote", ref: "ch8_atd_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Overlap demands humility—not denial",
        segments: [
          { type: "text", text: "Multitreatment interference inflates envelopes together; narrate tentative language plus remediation paths transparently " },
          { type: "footnote", ref: "ch8_atd_v4" },
          { type: "footnote", ref: "ch8_atd_kc3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Washouts when ethically feasible",
        segments: [
          { type: "text", text: "Neutral spacing dilutes lingering effects when humane logistics allow " },
          { type: "footnote", ref: "ch8_atd_v6" },
          { type: "text", text: "." },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Map each term to the ATD decision it supports, then name one sequence or interference threat that would weaken a superiority claim.",
  matchActivityInstructions:
    "Select ATD juxtaposition evidence, counterbalancing fix, multitreatment caveat, or washout logic for Cooper Chapter 8 alternating-treatments stems.",
  chainActivityInstructions:
    "Sequence ATD readiness: stabilize comparison anchors → define discriminable packages with fidelity checkpoints → counterbalance rotation transparently → interpret overlays with supplementary metrics when overlap persists.",
  mts: [
    {
      sample_stimulus: "Sessions alternate daily between dense praise-only contingencies versus praise-plus-token economies with concurrent overlays.",
      comparison_options: [
        "Alternating treatments demonstration comparing active packages rapidly",
        "Multiple baseline across participants staggered months apart",
        "Changing-criterion mastery staircase devoid of multitreatment rotation",
        "ABAB withdrawal only",
      ],
      correct_match: "Alternating treatments demonstration comparing active packages rapidly",
      error_feedback: "Daily juxtaposition of interventions typifies hallmark ATD choreography.",
    },
    {
      sample_stimulus: "Intervention X scheduled every Monday/Wednesday; Intervention Y only Tuesdays without counterbalancing weekdays.",
      comparison_options: [
        "Sequence confound threatening contingency attribution absent counterbalancing",
        "Ideal analytic hygiene demonstrated automatically",
        "Irrelevant logistics safely ignorable",
        "Proof baselines disposable",
      ],
      correct_match: "Sequence confound threatening contingency attribution absent counterbalancing",
      error_feedback: "Predictable weekday coupling invites mundane gradients masquerading as reinforcement superiority.",
    },
    {
      sample_stimulus: "Adjacent sessions elevate both envelopes so graphs fail to isolate which contingency deserves credit.",
      comparison_options: [
        "Multitreatment interference—interpret tentatively and tighten fidelity or spacing",
        "Proof ATDs categorically invalid because overlap exists",
        "Proof respondent extinction matured exclusively",
        "IOA formula error only",
      ],
      correct_match: "Multitreatment interference—interpret tentatively and tighten fidelity or spacing",
      error_feedback: "Bleed-through cautions monocausal superiority claims until separation clarifies.",
    },
    {
      sample_stimulus: "Brief neutral spacing dilutes presumed carryover before reintroducing active contrasts when logistics allow.",
      comparison_options: [
        "Washout interval attenuating spillover when ethically feasible",
        "Mandatory deletion of multitreatment overlays universally",
        "Proof baselines disposable once overlap appears",
        "Respondent extinction only",
      ],
      correct_match: "Washout interval attenuating spillover when ethically feasible",
      error_feedback: "Neutral windows can dampen lingering effects when humane care standards hold.",
    },
    {
      sample_stimulus: "AAC device cannot be removed; team alternates two prompting strategies across days with randomized order.",
      comparison_options: [
        "Ethical ATD comparison replacing unsafe withdrawal",
        "Covert reversal",
        "No design possible",
        "Changing criterion only",
      ],
      correct_match: "Ethical ATD comparison replacing unsafe withdrawal",
      error_feedback: "Alternation replaces unsafe withdrawal while preserving comparison.",
    },
    {
      sample_stimulus: "Regional office strips randomization spreadsheets while marketing balanced comparisons slideshows.",
      comparison_options: [
        "Misleading omission breaching Domain E candor plus Domain C reproducibility",
        "Standard slide minimalism when transparency unnecessary",
        "Proof graphed overlays optional for ATD reviews",
        "Required for maintenance claims",
      ],
      correct_match: "Misleading omission breaching Domain E candor plus Domain C reproducibility",
      error_feedback: "Scrubbing sequence documentation undermines accountable ATD dossiers.",
    },
    {
      sample_stimulus: "Overlay graph shows separated paths favoring DRA over extinction with low carryover.",
      comparison_options: [
        "Tentative ATD preference pending interference check",
        "Automatic mastery forever",
        "Reversal complete",
        "Multiple baseline stagger only",
      ],
      correct_match: "Tentative ATD preference pending interference check",
      error_feedback: "Alternation supports comparison—still note carryover and fidelity.",
    },
    {
      sample_stimulus: "Two treatments alternated within the same week on overlay graph with randomized order.",
      comparison_options: [
        "Multielement ATD (Chapter 8)—not multiple baseline stagger",
        "Multiple baseline across participants",
        "Changing criterion staircase",
        "Group t-test only",
      ],
      correct_match: "Multielement ATD (Chapter 8)—not multiple baseline stagger",
      error_feedback: "Rapid alternation is Chapter 8 ATD—not Chapter 9 stagger.",
    },
  ],
  chainTitle: "ATD readiness sweep",
  chainFragments: [
    { id: "a", text: "Establish stable baseline or concurrent comparison anchors reviewers recognize." },
    { id: "b", text: "Define discriminable intervention packages plus fidelity checklists." },
    { id: "c", text: "Counterbalance or randomize condition order across sessions transparently." },
    { id: "d", text: "Graph multitreatment overlays; interpret separation versus interference with tentative language when overlap persists." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "ATD", back: "Rapid treatment rotation." },
    { front: "Counterbalance", back: "Fair condition order." },
    { front: "Interference", back: "Treatments bleed together." },
    { front: "Carryover", back: "Prior condition persists." },
    { front: "Washout", back: "Neutral spacing between." },
    { front: "Overlay", back: "Concurrent path comparison." },
  ],
  worksheet: {
    title: "CHH Chapter 8 — alternating treatments design",
    instructions:
      "Check package discrimination, rotation fairness, overlay separation, and interference caveats before selecting an answer.",
    scenario:
      "Scenario A — Two reinforcement menus alternate daily yet graphs remain inseparable while supervisors insist decisive superiority overnight.",
    scenario_follow_up:
      "Scenario B — Observers suspect Wednesday staffing spikes inflate whichever condition lands mid-week.\n\nScenario C — Daily praise-only versus praise-token graphs juxtaposed on overlay.\n\nScenario D — Central office deletes counterbalancing appendix so funders read perfectly balanced rotations without accessing the rotation matrix.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · MOST plausible analytic stance?",
        options: [
          "Treat differentiation as tentative pending fidelity probes plus sequencing revisions",
          "Declare superiority absent supplementary separation metrics",
          "Delete alternating logic silently",
          "Ignore overlap permanently",
        ],
        correct: "Treat differentiation as tentative pending fidelity probes plus sequencing revisions",
      },
      {
        id: "response_2",
        label: "Scenario B · BEST remediation?",
        options: [
          "Randomize/counterbalance sessions across weekdays documenting staffing covariates",
          "Lock comparisons exclusively to Mondays forever",
          "Remove graphs permanently",
          "Stop measurement",
        ],
        correct: "Randomize/counterbalance sessions across weekdays documenting staffing covariates",
      },
      {
        id: "response_3",
        label: "Scenario C · Design classification?",
        options: [
          "Alternating treatments demonstration prototype",
          "Pure respondent extinction replication exclusively",
          "Changing criterion staircase absent multitreatment contrasts",
          "Multiple baseline across settings",
        ],
        correct: "Alternating treatments demonstration prototype",
      },
      {
        id: "response_4",
        label: "Multitreatment interference MOST centrally warns reviewers:",
        options: [
          "Adjacent interventions may elevate both envelopes obscuring contingency attribution",
          "Withdrawals obsolete universally regardless of ethics",
          "Baseline durations automatically irrelevant",
          "IOA percentages substitute for visuals entirely",
        ],
        correct: "Adjacent interventions may elevate both envelopes obscuring contingency attribution",
      },
      {
        id: "response_5",
        label: "Ethical rationale favoring ATD versus textbook reversal MOST aligns with:",
        options: [
          "Comparing humane interventions learners warrant rather than withholding care theatrically",
          "Eliminating stakeholder consent workflows",
          "Guaranteeing automatic reinforcement diagnoses",
          "Banning procedural fidelity notes",
        ],
        correct: "Comparing humane interventions learners warrant rather than withholding care theatrically",
      },
      {
        id: "response_6",
        label: "Counterbalancing in ATD designs controls for:",
        options: ["Order and sequence effects", "IOA only", "MO abolishment only", "Graph color"],
        correct: "Order and sequence effects",
      },
      {
        id: "response_7",
        label: "Scenario D · Deleting counterbalancing appendices while claiming balance merges:",
        options: [
          "Domain E transparency about sequence control plus Domain C reproducible rotation evidence",
          "Domain A phylogeny trivia unrelated to ATD ethics",
          "Facilities HVAC trivia unrelated to ATD ethics",
          "Latency measurement only",
        ],
        correct: "Domain E transparency about sequence control plus Domain C reproducible rotation evidence",
      },
      {
        id: "response_8",
        label: "Scenario D · MOST compliant remediation BEFORE governance review?",
        options: [
          "Restore rotation matrices with supervisor attestation; narrate residual staffing covariates honestly; attach tentative language if overlap persists",
          "Ship hero slides without appendices",
          "Password-protect sequence logs so reviewers cannot verify balance",
          "Delete overlap sessions silently",
        ],
        correct: "Restore rotation matrices with supervisor attestation; narrate residual staffing covariates honestly; attach tentative language if overlap persists",
      },
    ],
    remediationLog:
      "Rebuild Chapter 8 ATD fluency: discriminable packages? → counterbalanced rotation ledgers? → overlays narrating separation versus interference? → humane comparison rationale? → never scrub sequence evidence?",
  },
  bdsBank: CHAPTER_08_ATD_SUPPLEMENT_QUIZ_BANK,
};
