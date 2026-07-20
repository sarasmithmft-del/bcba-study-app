import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_05_WORKBOOK_QUIZ_BANK } from "@/content/modules/quiz/chapter05QuizBank";

export const MOD06_BLUEPRINT: ExtensionBlueprint = {
  id: "mod06",
  chapterNumber: 5,
  activityPrefix: 2060,
  title: "Behavioral Assessment",
  codexHeading: "READING — Chapter 5 (Behavioral Assessment)",
  codexIntro: `Chapter 5 organizes behavioral assessment as a staged decision process, not a single test. Cooper frames assessment as the bridge between referral concerns and intervention intensity, requiring analysts to gather enough converging evidence to justify recommendations while naming uncertainty where evidence is still incomplete.

The chapter starts with problem clarification and intake-level context: target behavior topography, current repertoires, stakeholder priorities, setting constraints, safety concerns, and historical records. This front-end work prevents treatment plans from being driven by convenience or one stakeholder perspective alone.

Indirect assessment tools (including structured interviews and standardized rating/checklist formats) are used to generate plausible functional hypotheses efficiently. Cooper emphasizes their utility and limits: they are fast, inexpensive, and context-rich, but vulnerable to recall error, interpretation drift, and respondent bias.

Direct descriptive assessment adds live observation in natural contexts and typically includes ABC summaries, sequence patterns, and temporal clustering. These methods increase ecological validity and improve hypothesis precision, but they remain correlational unless contingencies are actively manipulated.

Structural/ecological assessment extends analysis to schedule design, transitions, staffing, task density, and environmental arrangement variables that may elevate risk or alter response probability. This helps teams avoid overattributing behavior to learner traits when context variables are major contributors.

Experimental functional analysis is presented as the strongest method for identifying maintaining contingencies when ethically and logistically feasible. By arranging evocative test conditions and comparison/control conditions, analysts can differentiate likely reinforcement functions more confidently than with descriptive data alone.

Cooper also highlights practical realities: resource limits, staffing, safety thresholds, and consent constraints may require abbreviated or phased assessment paths. In those cases, the ethical obligation is transparent reporting of method depth and limits, not overclaiming certainty.

Triangulation is the central integration skill in Chapter 5: combine indirect, descriptive, structural, and (when feasible) experimental streams, compare where they converge, and explicitly report where they conflict. The chapter treats disagreement between modalities as clinically meaningful information, not a formatting problem.

A core takeaway is proportionality of conclusions. Strong prescriptions should match evidence quality. When evidence is partial, recommendations should be staged, testable, and revisable, with clear criteria for escalation or refinement.

Overall, Chapter 5 establishes assessment discipline as both a technical and ethical competence: collect multimodal data, evaluate source strength, disclose limits, and build intervention decisions that can be defended to caregivers, teams, and reviewers.

For learning, treat Chapter 5 as a decision-calibration chapter: your job is to match confidence to evidence quality. Strong recommendations require strong evidence; preliminary evidence requires staged, testable next steps.`,
  footnotes: {
    x5_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 5, pp. 133–143 — multimethod behavioral assessment rationales (Pearson Global 3rd ed. TOC anchors).",
        "This chapter maps chiefly to  (problem identification / assessment) and to  when measurement quality and honest multimodal reporting keep hypotheses proportionate.",
        "Verify exact Competency Outline task wording in the official BACB PDF; this workbook summarizes CHH arcs only.",
        "Workbook note (not quoted from CHH)—bundles Cooper threads into one reading block before measurement chapters excerpted elsewhere.",
      ],
    },
    x5_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 5, pp. 143–152 — structured interviews, reinforcer surveys, and analogous instruments (FAST/MAS exemplars) that translate caregiver recall into testable guesses.",
        "They accelerate indirect assessment—they do not, alone, certify function or sanction single-cause treatment plans absent converging corroboration.",
      ],
    },
    x5_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 5, pp. 153–159 — descriptive correlational observation recording ABC summaries, sequences, scatter windows, or transition maps before contingency manipulation arrives.",
      ],
    },
    x5_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 5, pp. 159–167 — structural/ecological inventories of schedules, workloads, chokepoints, and supervision coverage that scaffold why behavior concentrates where it does.",
      ],
    },
    x5_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 5, pp. 167–176 — experimental functional analysis arranging evocative contrasts versus controls (when ethically and logistically defensible) to isolate reinforcing relations.",
      ],
    },
    x5_6: {
      label: "[6]",
      lines: [
        "CHH Chapter 5, pp. 177–182 — triangulation: juxtaposing imperfect streams—questionnaires, naturalistic summaries, ecological constraints, phased probes—without disguising modality disagreements.",
        "Exam vignettes pairing triangulation humility with truthful reporting routinely blend : label uncertainty and modality conflict instead of \"selling\" a single modality as certainty.",
      ],
    },
    x5_7: {
      label: "[7]",
      lines: [
        "CHH Chapter 5, pp. 182–188 — abbreviated experimental analogues, daylight windows, or sequenced probing when exhaustive overnight staffing is impossible; humility about limits stays on the record.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "x5_1" },
    { afterSentenceIndex: 1, ref: "x5_2" },
    { afterSentenceIndex: 2, ref: "x5_3" },
    { afterSentenceIndex: 3, ref: "x5_4" },
    { afterSentenceIndex: 4, ref: "x5_5" },
    { afterSentenceIndex: 5, ref: "x5_6" },
    { afterSentenceIndex: 6, ref: "x5_7" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — conversational recap",
    intro:
      "Put simply, Chapter 5 teaches how to think like an assessment scientist: gather multiple data streams, compare them honestly, and make recommendations that are as strong as the evidence allows.",
    chunks: [
      {
        subtitle: "Assessment is a staged workflow",
        segments: [
          {
            type: "text",
            text: "Start by clarifying what behavior is happening, where it happens, why it matters to stakeholders, and what constraints the setting creates. This keeps planning tied to real context before intervention intensity increases ",
          },
          { type: "footnote", ref: "x5_1" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Indirect tools are hypothesis generators",
        segments: [
          {
            type: "text",
            text: "Interviews and checklists can quickly suggest likely functions, but they are memory-based and should be treated as starting hypotheses, not final conclusions ",
          },
          { type: "footnote", ref: "x5_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Descriptive data improves precision, not certainty",
        segments: [
          {
            type: "text",
            text: "Naturalistic ABC and sequence data show where and when behavior clusters, and what events often surround it. That improves targeting, but by itself still does not prove causal function ",
          },
          { type: "footnote", ref: "x5_3" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Context variables are part of assessment",
        segments: [
          {
            type: "text",
            text: "Structural/ecological review asks whether schedule load, transitions, staffing coverage, and environmental design are contributing to behavior patterns before conclusions focus only on the learner ",
          },
          { type: "footnote", ref: "x5_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Functional analysis adds strongest causal evidence",
        segments: [
          {
            type: "text",
            text: "When feasible and safe, arranged test and control contrasts give stronger evidence about maintaining contingencies than correlational methods alone ",
          },
          { type: "footnote", ref: "x5_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Triangulation means compare streams openly",
        segments: [
          {
            type: "text",
            text: "Chapter 5 expects analysts to compare methods side by side, keep converging findings, and explicitly report disagreements or uncertainty rather than forcing one clean story ",
          },
          { type: "footnote", ref: "x5_6" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Right-size conclusions to method depth",
        segments: [
          {
            type: "text",
            text: "If assessment is abbreviated due to staffing, safety, or logistics, recommendations should also be staged and provisional. Honest limit statements are clinically stronger than overconfident claims built on partial evidence ",
          },
          { type: "footnote", ref: "x5_7" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Practical chapter rule",
        segments: [
          {
            type: "text",
            text: "Use the strongest feasible method, combine streams, and document what is known versus still uncertain before choosing high-impact intervention decisions.",
          },
        ],
      },
      {
        subtitle: "How to study Chapter 5 effectively",
        segments: [
          {
            type: "text",
            text: "Practice with an evidence ladder on each case: indirect findings first, then descriptive corroboration, then structural review, then experimental analysis when feasible. After each step, state what you know, what you suspect, and what would increase certainty. This is the core Chapter 5 habit.",
          },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points in this chapter include overcalling function from one data stream, treating descriptive correlation as causal proof, and presenting abbreviated assessment as definitive. Resolve them by matching confidence level to modality strength.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch5_v1: {
      label: "[V1]",
      lines: [
        "CHH Chapter 5, pp. 143–148.",
        "Indirect behavioral assessment: questionnaires, structured interviews, and reinforcer inventories that generate hypotheses contingent on corroborating data.",
      ],
    },
    ch5_v2: {
      label: "[V2]",
      lines: [
        "CHH Chapter 5, pp. 153–159.",
        "Direct correlational/descriptive observation: contemporaneous summaries of evocative antecedents and consequences without artificially arranging contingencies—yet preceding experimental isolation.",
      ],
    },
    ch5_v3: {
      label: "[V3]",
      lines: [
        "CHH Chapter 5, pp. 167–176.",
        "Experimental functional analysis: evocative tests contrasted against controls to differentiate suspected reinforcer classes when ethics and staffing allow.",
      ],
    },
    ch5_v4: {
      label: "[V4]",
      lines: [
        "CHH Chapter 5, pp. 177–182.",
        "Triangulation: integrating imperfect indirect, descriptive, structural, abbreviated experimental streams while naming disagreements plainly.",
      ],
    },
    ch5_kc1: {
      label: "[KC1]",
      lines: [
        "CHH Chapter 5, pp. 133–143.",
        "Multimethod assessment inventories topography, stakeholder priorities, and ecological scaffolding before escalating to costly experimentation.",
      ],
    },
    ch5_kc2: {
      label: "[KC2]",
      lines: [
        "CHH Chapter 5, pp. 143–152.",
        "Indirect modalities accelerate hypotheses—they do not waive the need for converging corroborating streams.",
      ],
    },
    ch5_kc3: {
      label: "[KC3]",
      lines: [
        "CHH Chapter 5, pp. 153–165.",
        "Naturalistic correlational observation narrates lived sequences empirical probes later adjudicate when feasible.",
      ],
    },
    ch5_kc4: {
      label: "[KC4]",
      lines: [
        "CHH Chapter 5, pp. 167–176.",
        "Controlled FA distinguishes suspected contingencies that descriptive anecdotes alone leave ambiguous.",
      ],
    },
    ch5_kc5: {
      label: "[KC5]",
      lines: [
        "CHH Chapter 5, pp. 177–188.",
        "Triangulation plus transparent uncertainty disclosures replace monocausal folklore when modalities conflict.",
      ],
    },
    ch5_exam_f: {
      label: "[F-exam]",
      lines: [
        "TCO Domain F items often cluster assessment inventories, multimethod corroboration, social validity, and phased intensity tied to stakes.",
        "Do not invent granular task identifiers here—cross-check headings and stems against the BACB competency PDF alongside CHH reading.",
      ],
    },
    ch5_ethics_multimodal: {
      label: "[E-multimodal]",
      lines: [
        "When questionnaires or spreadsheets replace feasible observation—or modality disagreements disappear from multidisciplinary reports—Domain E honest reporting collides with Domain F good assessment practice.",
        "Chapter 5's humility language is deliberate exam bait; rehearse admitting limits aloud.",
      ],
    },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 5 excerpts",
    intro:
      "Study with speed drills: discriminate indirect recall from descriptive correlational logs from manipulated FA rigs before debating triangulation vignettes—not after.",
    entries: [
      {
        term: "Indirect behavioral assessment",
        definition:
          "Caregiver interviews, questionnaires, reinforcer inventories, and archival glimpses shaping hypotheses contingent on corroboration.",
        footnoteRef: "ch5_v1",
      },
      {
        term: "Direct correlational/descriptive observation",
        definition:
          "Recorded ABC summaries, transitional scatter hotspots, sequential counts, or analogous naturalistic narration without artificially isolating reinforcement—yet prepping clearer experimental questions.",
        footnoteRef: "ch5_v2",
      },
      {
        term: "Experimental functional analysis",
        definition:
          "Controlled evocative contrasts juxtaposed with plausible comparisons to differentiate suspected reinforcing contingencies when consent, safeguards, staffing, and policy align.",
        footnoteRef: "ch5_v3",
      },
      {
        term: "Triangulation",
        definition:
          "Combining modalities that disagree politely with one another—and stating those tensions explicitly—rather than laundering questionnaires into monocausal folklore.",
        footnoteRef: "ch5_v4",
      },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 5 (multimodal assessment)",
    intro:
      "Use the summaries to rehearse aloud how multiple assessment modalities protect consumers—and when omitting modality conflicts crosses into ethics drift.",
    concepts: [
      {
        title: "Domain F: multimodal scaffolding before monocausal swagger",
        segments: [
          {
            type: "text",
            text: "Interviews, indirect scales, ecology maps, archival crumbs, correlational narration, phased FA analogues—all sequence accountable stakes before prescribing intensity clinicians cannot defend ethically ",
          },
          { type: "footnote", ref: "ch5_exam_f" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Domain E meets triangulation humility",
        segments: [
          {
            type: "text",
            text: "Laundering questionnaires into monocausal brochures, hiding descriptive contradictions, or exaggerating modality depth violates the multimethod transparency Cooper mandates—and the honest reporting supervisors audit ",
          },
          { type: "footnote", ref: "ch5_ethics_multimodal" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Multimethod behavioral assessment inventories topography before escalating intensity",
        segments: [
          {
            type: "text",
            text: "Bundles interviews, questionnaires, ecological sketches, stakeholder priorities, and archival breadcrumbs before multiplying intervention logistics ",
          },
          { type: "footnote", ref: "ch5_kc1" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Indirect modalities accelerate hypotheses—they still crave corroboration",
        segments: [
          {
            type: "text",
            text: "FAST/MAS summaries and analogous tools narrow contender contingencies yet resist monocausal prescriptions until convergent data arrive ",
          },
          { type: "footnote", ref: "ch5_kc2" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Descriptive correlational observation narrates ecology prospective experiments adjudicate later",
        segments: [
          {
            type: "text",
            text: "ABC sequences, transitional scatter hotspots, and dense natural observation steer what controlled contrasts should test next ",
          },
          { type: "footnote", ref: "ch5_kc3" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Experimental FA isolates contingencies descriptive folklore cannot finalize alone",
        segments: [
          {
            type: "text",
            text: "Evocative contrasts plus plausible comparisons differentiate suspected reinforcing histories ",
          },
          { type: "footnote", ref: "ch5_kc4" },
          { type: "text", text: "." },
        ],
      },
      {
        title: "Triangulation integrates imperfect streams—including transparent modality disagreements",
        segments: [
          {
            type: "text",
            text: "Ethical teams narrate divergence, label lingering uncertainty, and avoid polished monocausal brochures ",
          },
          { type: "footnote", ref: "ch5_kc5" },
          { type: "text", text: "." },
        ],
      },
    ],
    plainLanguageSummary: {
      heading: "Key concepts — plain-language companion",
      intro:
        "Chapter 5 is multimethod assessment science. Stack modalities intentionally—indirect hypotheses, descriptive density, ecological mapping, and ethically scaled experimental contrasts—then calibrate every conclusion to the evidence depth you actually have.",
      chunks: [
        {
          subtitle: "Domain F scaffolding before strong claims",
          segments: [
            {
              type: "text",
              text: "Exam items reward staged assessment: hypotheses escalate only after context, indirect intake, and descriptive scaffolding are in place ",
            },
            { type: "footnote", ref: "ch5_exam_f" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Ethics when streams disagree or vanish",
          segments: [
            {
              type: "text",
              text: "Domain E failures include laundering checklists into monocausal brochures, hiding descriptive contradictions, or reporting certainty a single modality cannot support ",
            },
            { type: "footnote", ref: "ch5_ethics_multimodal" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Multimethod inventory and context mapping",
          segments: [
            {
              type: "text",
              text: "Start with interviews, questionnaires, records, and ecological mapping so hypotheses reflect people, places, and histories—not clinic convenience ",
            },
            { type: "footnote", ref: "ch5_kc1" },
            { type: "text", text: ". Multimethod assessment is a vocabulary exam writers expect you to use precisely " },
            { type: "footnote", ref: "ch5_v1" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Indirect tools accelerate, not conclude",
          segments: [
            {
              type: "text",
              text: "Interviews and checklists buy speed but demand corroboration. Treat FAST/MAS-style outputs as provisional suspects awaiting stronger streams ",
            },
            { type: "footnote", ref: "ch5_kc2" },
            { type: "text", text: " " },
            { type: "footnote", ref: "ch5_v1" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Descriptive data improves precision",
          segments: [
            {
              type: "text",
              text: "ABC and scatter narration thickens where and when behavior clusters, but correlational description still does not prove causal function. It steers what to test next ",
            },
            { type: "footnote", ref: "ch5_kc3" },
            { type: "text", text: " " },
            { type: "footnote", ref: "ch5_v2" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Experimental analysis earns its name",
          segments: [
            {
              type: "text",
              text: "When feasible and safe, arranged evocative contrasts isolate maintaining contingencies anecdotes cannot. That is what separates experimental from descriptive modality ",
            },
            { type: "footnote", ref: "ch5_kc4" },
            { type: "text", text: " " },
            { type: "footnote", ref: "ch5_v3" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Triangulation and honest uncertainty",
          segments: [
            {
              type: "text",
              text: "Compare streams side by side, keep converging findings, and label residual uncertainty when modalities tension. Transparent limits are clinically stronger than polished monocausal stories ",
            },
            { type: "footnote", ref: "ch5_kc5" },
            { type: "text", text: " " },
            { type: "footnote", ref: "ch5_v4" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "High-Yield Confusion Points",
          segments: [
            {
              type: "text",
              text: "High-yield confusion points in this chapter include overcalling function from single-stream evidence, treating descriptive covariation as causal proof, and writing recommendations stronger than the data warrant. Resolve them by calibrating claim strength to evidence strength.",
            },
            { type: "footnote", ref: "ch5_kc3" },
            { type: "text", text: " " },
            { type: "footnote", ref: "ch5_kc5" },
            { type: "text", text: "." },
          ],
        },
      ],
    },
  },
  vocabularyMatchInstructions:
    "Discriminate indirect, descriptive, structural, and experimental modalities from actual procedures in the vignette, not from keywords alone. Explain why each non-selected option is weaker.",
  matchActivityInstructions:
    "For each Chapter 5 case, choose the best assessment modality and then decide what confidence level is justified by the evidence available. This chapter is about calibrated conclusions.",
  chainActivityInstructions:
    "Order the chain as real clinical decision-making: intake context, social validity priorities, descriptive and structural clarification, then experimental analysis only when safeguards and feasibility support it.",
  mts: [
    {
      sample_stimulus:
        "Mom completes rating scales describing bedtime routines without simultaneous observation.",
      comparison_options: [
        "Indirect assessment",
        "Descriptive observation",
        "Experimental functional analysis",
        "Structural analysis",
      ],
      correct_match: "Indirect assessment",
      error_feedback:
        "Indirect tools rely on respondent recall rather than contemporaneous observation.",
    },
    {
      sample_stimulus:
        "Therapists ABC-chart transitions live inside classrooms during ongoing routines.",
      comparison_options: [
        "Experimental functional analysis exclusively",
        "Descriptive correlational observation",
        "Structural magnetic resonance inventories",
        "Indirect questionnaires exclusively absent observation",
      ],
      correct_match: "Descriptive correlational observation",
      error_feedback:
        "Naturalistic correlational summaries differ from questionnaires and from arranged experimental contrasts.",
    },
    {
      sample_stimulus:
        "Analysts compare escape, attention, alone, tangible, and control probes isolating reinforcing contingencies when staffing permits.",
      comparison_options: [
        "Structural assessment exclusively",
        "Experimental functional analysis",
        "Scatterplot-guided descriptive observation exclusively",
        "Indirect caregiver questionnaire exclusively",
      ],
      correct_match: "Experimental functional analysis",
      error_feedback:
        "Controlled contrasts isolate suspected reinforcer histories beyond correlational description alone.",
    },
    {
      sample_stimulus:
        "Leadership restricts overnight probes yet escalating aggression persists between peers.",
      comparison_options: [
        "Abbreviated daytime experimental contrasts plus heightened descriptive probing while naming staffing limits plainly",
        "Produce exhaustive functional-analysis dashboards without ethically arranged evocative contrasts",
        "Freeze assessment indefinitely",
        "Withdraw caregiver questionnaires despite continued hypothesis needs",
      ],
      correct_match:
        "Abbreviated daytime experimental contrasts plus heightened descriptive probing while naming staffing limits plainly",
      error_feedback:
        "Prefer accountable multimodal scaffolding over fabrication, assessment paralysis, or discarding stakeholder interviews outright.",
    },
    {
      sample_stimulus:
        "FAST ranks attention-maintained hypotheses while midday ABC summaries show reinforcement tied to escaping instructional demands—you document both streams and label the conflict plainly before escalating treatment prescriptions.",
      comparison_options: [
        "Transparent triangulation that keeps modality tensions visible plus provisional hypotheses",
        "Publishing whichever modality fits the clinician's favorite intervention plan",
        "Deleting descriptive logs so FAST stays tidy for funders",
        "Substituting cranial scans for correlational narration",
      ],
      correct_match:
        "Transparent triangulation that keeps modality tensions visible plus provisional hypotheses",
      error_feedback:
        "Triangulation insists disagreements survive in the narrative—consumers revise plans with full evidence—not laundered checklists marketed as certainty.",
    },
    {
      sample_stimulus:
        "Grant writer labels the brief 'experimental functional analysis finalized' citing only caregiver interviews plus two walk-through observations devoid of evocative test contrasts.",
      comparison_options: [
        "Honest modality labeling distinguishing indirect/descriptive work from manipulated FA contrasts",
        "Marketing polish that ethically overstates experimental depth",
        "Structural magnetic resonance inventories exclusively diagnosing classrooms",
        "Indirect questionnaires replacing stakeholder consent indefinitely",
      ],
      correct_match:
        "Honest modality labeling distinguishing indirect/descriptive work from manipulated FA contrasts",
      error_feedback:
        "Ethical narration matches methods to modality names; fabricating FA depth invites Domain E failures even when desperation runs high.",
    },
  ],
  chainTitle: "Assessment triage chain",
  chainFragments: [
    {
      id: "a",
      text: "Collect archival breadcrumbs alongside structured stakeholder interviews that anchor referrals and safeguards.",
    },
    {
      id: "b",
      text: "Name socially validated outcomes prioritized by caregivers, educators, or related partners.",
    },
    {
      id: "c",
      text: "Run targeted correlational/descriptive probes where hypotheses hinge on density, hotspots, or transition maps.",
    },
    {
      id: "d",
      text: "Sequence phased daytime experimental contrasts only when safeguards and staffing admit them—then disclose modality gaps clearly.",
    },
  ],
  chainOrder: ["a", "b", "c", "d"],
  worksheet: {
    title: "Chapter 5 — multimodal discipline & truthful reporting",
    instructions:
      "Use this worksheet to train evidence calibration: classify modality first, identify uncertainty honestly, and choose the next step that increases confidence without overclaiming.",
    scenario:
      "Scenario A — District leadership forbids unattended overnight functional analyses; daytime coverage is sporadic.",
    scenario_follow_up:
      "Scenario B — Caregivers complete FAST-style checklists about bedtime escalations hours before clinicians observe first-hand.\n\nScenario C — Scatter plots cluster midday lunch transitions while caregivers insist meltdowns spike only overnight.\n\nScenario D — Regional report claims 'controlled FA contrasts completed' citing only questionnaires and unstructured walk-throughs devoid of evocative test manipulation.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · Most defensible next step while overnight FA remains off the table?",
        options: [
          "Launch unattended multi-element overnight FA probes immediately",
          "Layer indirect hypothesis tools with amplified correlational probing while documenting interim uncertainty",
          "Suspend all assessment tasks until indefinite FA staffing magically appears",
        ],
        correct:
          "Layer indirect hypothesis tools with amplified correlational probing while documenting interim uncertainty",
      },
      {
        id: "response_2",
        label: "Indirect instrument caveat?",
        options: [
          "Indirect scales alone certify definitive functional classification unconditionally",
          "Indirect tools inform tentative hypotheses awaiting convergent modalities",
          "Indirect tools permanently replace contemporaneous behavioral observation",
        ],
        correct: "Indirect tools inform tentative hypotheses awaiting convergent modalities",
      },
      {
        id: "response_3",
        label: "FAST vignette · Tool classification?",
        options: [
          "Indirect assessments generating prioritized hypotheses awaiting corroboration",
          "Experimental functional analysis already isolating reinforcer contrasts",
          "Continuous-duration measurement without hypothesized contingencies",
        ],
        correct: "Indirect assessments generating prioritized hypotheses awaiting corroboration",
      },
      {
        id: "response_4",
        label: "Therapists ABC-chart classroom transitions · Classification?",
        options: [
          "Descriptive correlational observation layering naturalistic summaries",
          "Indirect assessment divorced from eyeball verification",
          "Automatic reinforcement probing without evocative contrasts",
        ],
        correct: "Descriptive correlational observation layering naturalistic summaries",
      },
      {
        id: "response_5",
        label: "Ethics checkpoint · Treatments hinged solely on caregiver rankings?",
        options: [
          "Seek convergent observation or ethically arranged contrasts when feasibility allows",
          "Treat rankings as immortal reinforcer laws regardless of modality conflict",
          "Suspend stakeholder conversations entirely until FA completes",
          "Replace data displays with anecdotes permanently",
        ],
        correct:
          "Seek convergent observation or ethically arranged contrasts when feasibility allows",
      },
      {
        id: "response_6",
        label: "Scatterplot hotspot midday cluster · Highest-yield correlational escalation?",
        options: [
          "Intensify hypothesis-guided descriptive sampling around those clustered intervals",
          "Delete scatter timelines because indirect rankings disagree",
          "Certify reinforcement functions without further corroboration",
        ],
        correct: "Intensify hypothesis-guided descriptive sampling around those clustered intervals",
      },
      {
        id: "response_7",
        label:
          "Scenario D — Mislabeling interviews/walk-throughs as finalized experimental FA MOST fuses?",
        options: [
          "Domain E honest modality reporting collapsed with inflated Domain F claims",
          "Domain A phylogenic glossary debates exclusively",
          "Domain G punishment protocol menus exclusively",
        ],
        correct: "Domain E honest modality reporting collapsed with inflated Domain F claims",
      },
      {
        id: "response_8",
        label: "Scenario D — BEST remediation BEFORE submitting the grant appendix?",
        options: [
          "Rewrite documentation to match conducted modalities; label limits; schedule ethically defensible phased contrasts if safeguards unlock",
          "Ship the appendix unchanged to satisfy deadlines",
          "Delete caregiver interviews wholesale to reduce paperwork",
        ],
        correct:
          "Rewrite documentation to match conducted modalities; label limits; schedule ethically defensible phased contrasts if safeguards unlock",
      },
    ],
    remediationLog:
      "Rebuild Chapter 5 reasoning with an evidence ladder: indirect clues -> descriptive corroboration -> structural review -> experimental contrasts when feasible. At each rung, state what is known, unknown, and next verification step.",
  },
  bdsBank: CHAPTER_05_WORKBOOK_QUIZ_BANK,
};
