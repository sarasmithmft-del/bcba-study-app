import type {
  GamifiedActivity,
  MatchStimulusSet,
  StudyModule,
  WorksheetConfig,
  WorksheetField,
} from "@/lib/content-types";

/** Minimum Match-to-Sample vignettes and worksheet dropdowns after deepening. */
export const MIN_MTS_SETS = 10;
export const MIN_WORKSHEET_FIELDS = 10;

type TermPair = { front: string; back: string };

function termHint(terms: TermPair[] | undefined, index: number, fallback: string): string {
  return terms?.[index]?.front ?? fallback;
}

/** Append chapter-themed MTS vignettes until the set meets the minimum depth target. */
export function deepenMts(
  mts: MatchStimulusSet[],
  chapterNumber: number,
  title: string,
  terms?: TermPair[],
): MatchStimulusSet[] {
  if (mts.length >= MIN_MTS_SETS) return mts;

  const termA = termHint(terms, 0, "core vocabulary");
  const termB = termHint(terms, 1, "measurement fidelity");
  const termC = termHint(terms, 2, "documentation");

  const pool: MatchStimulusSet[] = [
    {
      sample_stimulus: `Chapter ${chapterNumber} (${title}): Leadership requests deleting raw trial logs before a funder visit while public slides claim replicated mastery.`,
      comparison_options: [
        "Refuse opacity—restore logs or explicitly caveat limits in stakeholder language (Domain E)",
        "Comply because polished decks raise morale",
        "Replace logs with anecdotal testimonials exclusively",
      ],
      correct_match:
        "Refuse opacity—restore logs or explicitly caveat limits in stakeholder language (Domain E)",
      error_feedback:
        "Selective omission breaches transparent reporting even when graphics look compelling.",
    },
    {
      sample_stimulus: `Chapter ${chapterNumber}: Coders disagree on ${termB} definitions mid-project; means still climb yet supervisors freeze treatment changes anyway.`,
      comparison_options: [
        "Pause high-stakes decisions until IOA recalibration on definition exemplars (Domain C)",
        "Ignore drift when weekly means trend upward",
        "Collapse to single-coder scoring permanently without disclosure",
      ],
      correct_match:
        "Pause high-stakes decisions until IOA recalibration on definition exemplars (Domain C)",
      error_feedback:
        "Definitional drift without IOA undermines every graph story built on those codes.",
    },
    {
      sample_stimulus: `Chapter ${chapterNumber}: Team labels a case using ${termA} vocabulary borrowed from a different Cooper chapter while graphs lack chapter-appropriate measurement.`,
      comparison_options: [
        `Re-anchor to Chapter ${chapterNumber} ${title} logic before changing intensity (Domain F)`,
        "Ship labels because stakeholders recognize the buzzword",
        "Delete baselines to simplify interpretation",
      ],
      correct_match: `Re-anchor to Chapter ${chapterNumber} ${title} logic before changing intensity (Domain F)`,
      error_feedback:
        "Cross-chapter label drift is a high-yield distractor—match the stem's chapter machinery.",
    },
    {
      sample_stimulus: `Chapter ${chapterNumber}: Clinician expands ${termC} claims to families absent consent-aligned disclosure on limits and risks.`,
      comparison_options: [
        "Rewrite dissemination with understandable limits and corroborative evidence (Domain E)",
        "Speed adoption because outcomes look promising on one graph",
        "Suppress caregiver questions to preserve momentum",
      ],
      correct_match:
        "Rewrite dissemination with understandable limits and corroborative evidence (Domain E)",
      error_feedback:
        "Honest scope and consent-aware language are non-negotiable alongside analytic claims.",
    },
    {
      sample_stimulus: `Chapter ${chapterNumber} (${title}): Treatment intensity doubles after one encouraging week despite unstable baseline variability and no fidelity check.`,
      comparison_options: [
        "Stabilize measurement and document procedural fidelity before scaling claims (Domain C + F)",
        "Scale immediately because any upward slope proves control",
        "Remove baseline phases to reduce chart clutter",
      ],
      correct_match:
        "Stabilize measurement and document procedural fidelity before scaling claims (Domain C + F)",
      error_feedback:
        "Premature scaling without stability and fidelity invites misattribution on high-stakes exams.",
    },
    {
      sample_stimulus: `Chapter ${chapterNumber}: Supervisors ask staff to skip ${termA} probes when learners struggle, citing schedule pressure.`,
      comparison_options: [
        "Maintain probe integrity or document why probes were ethically modified—not deleted silently (Domain C + E)",
        "Delete probes whenever sessions run long",
        "Substitute caregiver applause for logged outcomes",
      ],
      correct_match:
        "Maintain probe integrity or document why probes were ethically modified—not deleted silently (Domain C + E)",
      error_feedback:
        "Probe omission without transparent rationale corrupts the evidence base supervisors must defend.",
    },
  ];

  const needed = MIN_MTS_SETS - mts.length;
  const existing = new Set(mts.map((s) => s.sample_stimulus));
  const extras = pool.filter((item) => !existing.has(item.sample_stimulus)).slice(0, needed);
  return [...mts, ...extras];
}

function appendScenarioBlock(followUp: string, block: string): string {
  const trimmed = followUp.trim();
  if (!trimmed) return block;
  if (followUp.includes(block.slice(0, 40))) return followUp;
  return `${trimmed}\n\n${block}`;
}

/** Append worksheet scenarios and fields until the arc meets the minimum depth target. */
export function deepenWorksheet(
  ws: WorksheetConfig,
  chapterNumber: number,
  title: string,
): WorksheetConfig {
  if (ws.fields.length >= MIN_WORKSHEET_FIELDS) return ws;

  let scenario_follow_up = ws.scenario_follow_up ?? "";
  if (!/Scenario C/i.test(`${ws.scenario}\n${scenario_follow_up}`)) {
    scenario_follow_up = appendScenarioBlock(
      scenario_follow_up,
      `Scenario C — Measurement integrity.\n\nObservers code ${title.toLowerCase()} trials inconsistently after staffing turnover; IOA drops below policy minimum while leadership asks to keep the chart moving.`,
    );
  }
  if (!/Scenario D/i.test(`${ws.scenario}\n${scenario_follow_up}`)) {
    scenario_follow_up = appendScenarioBlock(
      scenario_follow_up,
      "Scenario D — Governance review.\n\nCentral office asks teams to replace raw appendices with executive summaries that omit fidelity notes and IOA panels.",
    );
  }
  if (!/Scenario E/i.test(`${ws.scenario}\n${scenario_follow_up}`)) {
    scenario_follow_up = appendScenarioBlock(
      scenario_follow_up,
      `Scenario E — Cross-chapter drift.\n\nA trainee applies vocabulary from an earlier Cooper chapter to a Chapter ${chapterNumber} vignette while skipping chapter-specific measurement checks.`,
    );
  }

  const templates: Omit<WorksheetField, "id">[] = [
    {
      label: "Scenario C · FIRST supervisory move when IOA collapses?",
      options: [
        "Pause consequential decisions until definitions are re-trained and agreement recalculated on shared exemplars",
        "Publish mastery because weekly means still increase",
        "Switch to anecdotal reporting exclusively",
      ],
      correct:
        "Pause consequential decisions until definitions are re-trained and agreement recalculated on shared exemplars",
    },
    {
      label: `Chapter ${chapterNumber} · Which Domain F habit BEST prevents cross-chapter label drift?`,
      options: [
        `Name the central Chapter ${chapterNumber} procedure before sorting answer options`,
        "Pick whichever option sounds most clinical regardless of chapter",
        "Ignore Cooper vocabulary whenever time is short",
      ],
      correct: `Name the central Chapter ${chapterNumber} procedure before sorting answer options`,
    },
    {
      label: "Scenario D · Selective appendix removal MOST threatens:",
      options: [
        "Domain E transparent reporting plus Domain C reproducibility reviewers expect",
        "Domain A phylogeny trivia unrelated to dissemination",
        "Facilities scheduling trivia unrelated to dissemination",
      ],
      correct: "Domain E transparent reporting plus Domain C reproducibility reviewers expect",
    },
    {
      label: "Scenario D · MOST compliant remediation BEFORE external review?",
      options: [
        "Restore appendices, qualify conclusions, and document remaining uncertainty explicitly",
        "Ship hero dashboards without raw data access",
        "Password-protect all logs from multidisciplinary reviewers indefinitely",
      ],
      correct:
        "Restore appendices, qualify conclusions, and document remaining uncertainty explicitly",
    },
    {
      label: `Synthesis · ${title} claims stay defensible ONLY when teams pair:`,
      options: [
        "Chapter-accurate procedure logic + auditable measurement + honest stakeholder language",
        "Marketing decks with no methodological detail",
        "Single-session anecdotes replacing graphed accountability",
      ],
      correct:
        "Chapter-accurate procedure logic + auditable measurement + honest stakeholder language",
    },
    {
      label: "Scenario E · Trainee's cross-chapter label error · BEST coaching correction?",
      options: [
        `Map the vignette back to Chapter ${chapterNumber} definitions and evidence requirements before answering`,
        "Encourage fastest answer selection under time pressure only",
        "Memorize distractor letter patterns from prior chapters",
      ],
      correct: `Map the vignette back to Chapter ${chapterNumber} definitions and evidence requirements before answering`,
    },
    {
      label: `Exam-style · Before finalizing a Chapter ${chapterNumber} answer, analysts should:`,
      options: [
        "Verify procedure logic, measurement support, and ethics limits match the stem",
        "Choose the longest option automatically",
        "Skip documentation checks when graphs look positive",
      ],
      correct: "Verify procedure logic, measurement support, and ethics limits match the stem",
    },
    {
      label: `Chapter ${chapterNumber} · Fidelity notes MOST protect:`,
      options: [
        "Domain C reproducibility so supervisors can replay what was actually delivered",
        "Domain A respondent reflex classification exclusively",
        "Optional decoration whenever graphs look polished",
      ],
      correct: "Domain C reproducibility so supervisors can replay what was actually delivered",
    },
  ];

  const newFields: WorksheetField[] = [];
  let nextIndex = ws.fields.length + 1;
  for (const template of templates) {
    if (ws.fields.length + newFields.length >= MIN_WORKSHEET_FIELDS) break;
    const duplicate = ws.fields.some((f) => f.label === template.label);
    if (duplicate) continue;
    newFields.push({
      id: `response_${nextIndex}`,
      ...template,
    });
    nextIndex += 1;
  }

  while (ws.fields.length + newFields.length < MIN_WORKSHEET_FIELDS) {
    newFields.push({
      id: `response_${nextIndex}`,
      label: `Integration · Chapter ${chapterNumber} stem requires evidence from which pair?`,
      options: [
        "Domain F concept logic supported by Domain C measurement (and Domain E when reporting limits apply)",
        "Domain A phylogeny labels alone",
        "Caregiver satisfaction surveys replacing all observation",
      ],
      correct:
        "Domain F concept logic supported by Domain C measurement (and Domain E when reporting limits apply)",
    });
    nextIndex += 1;
  }

  return {
    ...ws,
    scenario_follow_up,
    fields: [...ws.fields, ...newFields],
  };
}

function vocabularyTerms(mod: StudyModule): TermPair[] | undefined {
  const entries = mod.vocabularySection?.entries;
  if (!entries?.length) return undefined;
  return entries.map((e) => ({ front: e.term, back: e.definition }));
}

function citationChapter(mod: StudyModule): number {
  return mod.cooperChapterNumber ?? mod.chapterNumber;
}

/** Apply MTS + worksheet deepening to a assembled study module. */
export function deepenStudyModule(mod: StudyModule): StudyModule {
  const terms = vocabularyTerms(mod);
  const ch = citationChapter(mod);
  const activities: GamifiedActivity[] = mod.activities.map((activity) => {
    if (activity.game_type !== "Match-to-Sample") return activity;
    return {
      ...activity,
      stimulus_sets: deepenMts(activity.stimulus_sets, ch, mod.title, terms),
    };
  });

  return {
    ...mod,
    activities,
    worksheet: deepenWorksheet(mod.worksheet, ch, mod.title),
  };
}
