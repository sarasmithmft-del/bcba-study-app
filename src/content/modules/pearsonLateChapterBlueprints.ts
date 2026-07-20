/**
 * Pearson Global 3e Cooper/Heron/Heward — Part 8 onward (numbered chapters 20–31).
 * These extend the workbook so every main-text chapter has a matching module after Chapter 19.
 */
import type { ExtensionBlueprint } from "./extensionBlueprintTypes";

type TermRow = { front: string; back: string };

type LateSpec = {
  id: string;
  chapterNumber: number;
  activityPrefix: number;
  title: string;
  /** Four reading paragraphs (each becomes a codex block with a footnote). */
  paragraphs: [string, string, string, string];
  terms: TermRow[];
  chainTitle: string;
  chainFragments: [string, string, string, string];
  /** First quiz stem line */
  quizStem: string;
  /** Correct quiz option key A–D */
  quizCorrectKey: "A" | "B" | "C" | "D";
  quizOptions: [string, string, string, string];
  quizRationaleCorrect: string;
  /** Optional chapter-specific high-yield confusion summary */
  highYieldText?: string;
};

function cleanTermBack(back: string): string {
  return back.replace(/\s+ethically\.?$/i, ".").replace(/\.$/, "") + (back.endsWith(".") ? "" : ".");
}

function supplementalForChapter(n: number, title: string, terms: TermRow[]): ExtensionBlueprint["supplementalFootnotes"] {
  const out: NonNullable<ExtensionBlueprint["supplementalFootnotes"]> = {};
  terms.forEach((t, i) => {
    out[`ch${n}_v${i + 1}`] = {
      label: `[V${i + 1}]`,
      lines: [`CHH Chapter ${n} — ${cleanTermBack(t.back).replace(/\.$/, "")}`],
    };
  });
  out[`ch${n}_kc1`] = {
    label: "[KC1]",
    lines: [`Domain F (${title}): interpret cases with chapter vocabulary before choosing answers—not buzzwords from other chapters.`],
  };
  out[`ch${n}_kc2`] = {
    label: "[KC2]",
    lines: [`Domain C: measurement, fidelity, and reproducible documentation keep ${title.toLowerCase()} claims auditable under supervision.`],
  };
  out[`ch${n}_kc3`] = {
    label: "[KC3]",
    lines: [`Domain E (+ G): honest scope, consent-aware practice, and transparent reporting when stakes involve vulnerable learners.`],
  };
  out[`ch${n}_exam`] = {
    label: `[F-ch${n}]`,
    lines: [
      `Domain F items on Chapter ${n} test ${title.toLowerCase()} logic with corroborating measurement—not memorized labels alone.`,
      "Verify CHH wording + BACB PDF alignment.",
    ],
  };
  out[`ch${n}_measurement_c`] = {
    label: `[C-ch${n}]`,
    lines: [`Definitions, fidelity checklists, IOA where coding matters, and graphs reviewers can replay—Domain C guardrails for Chapter ${n}.`],
  };
  out[`ch${n}_ethics`] = {
    label: `[E-ch${n}]`,
    lines: [`Domain E forbids marketing outcomes while hiding limits, failed probes, or coercive implementation details.`],
  };
  return out;
}

function defaultHighYield(n: number, title: string, terms: TermRow[]): string {
  const termHint = terms.slice(0, 2).map((t) => t.front).join(" versus ");
  return `High-yield confusion points in Chapter ${n} (${title}) include mixing vocabulary from other chapters, claiming mastery without measurement support, and ignoring ethics when logistics pressure teams to oversell results${termHint ? `—watch especially ${termHint}` : ""}. Resolve them by naming the chapter procedure, checking documentation quality, and matching reporting language to actual evidence before choosing an answer.`;
}

function putSimplyChunks(n: number, title: string, paragraphs: LateSpec["paragraphs"], xk: (i: number) => string, highYield: string) {
  const subtitles = [
    "Core idea",
    "Procedure and measurement",
    "Documentation discipline",
    "Ethics and reporting",
  ];
  const chunks = paragraphs.map((para, i) => ({
    subtitle: subtitles[i] ?? `Theme ${i + 1}`,
    segments: [
      { type: "text" as const, text: para },
      { type: "footnote" as const, ref: xk(i + 1) },
    ],
  }));
  chunks.push({
    subtitle: `How to study Chapter ${n} for BCBA prep`,
    segments: [
      {
        type: "text" as const,
        text: `On every Chapter ${n} stem about ${title.toLowerCase()}, ask: What procedure or concept is central? What measurement or fidelity evidence supports the claim? What ethics or scope limit applies? If any answer is unclear, keep interpretation tentative.`,
      },
    ],
  });
  chunks.push({
    subtitle: "High-Yield Confusion Points",
    segments: [{ type: "text" as const, text: highYield }],
  });
  return chunks;
}

function keyConceptPanels(n: number, terms: TermRow[]) {
  const panels = terms.slice(0, 3).map((t, i) => ({
    title: t.front,
    segments: [
      { type: "text" as const, text: `${cleanTermBack(t.back).replace(/\.$/, "")} ` },
      { type: "footnote" as const, ref: `ch${n}_v${i + 1}` },
      { type: "text" as const, text: "." },
    ],
  }));
  panels.push(
    {
      title: "Measurement keeps claims replayable",
      segments: [
        { type: "text" as const, text: "Graphs, trial notes, and fidelity logs should let a supervisor reproduce what changed, when, and under which definitions " },
        { type: "footnote" as const, ref: `ch${n}_measurement_c` },
        { type: "text" as const, text: " " },
        { type: "footnote" as const, ref: `ch${n}_kc2` },
        { type: "text" as const, text: "." },
      ],
    },
    {
      title: "Ethics gates adoption language",
      segments: [
        { type: "text" as const, text: "When claims outpace data or ethics guardrails are thin, tighten documentation and disclosures before acting " },
        { type: "footnote" as const, ref: `ch${n}_ethics` },
        { type: "text" as const, text: " " },
        { type: "footnote" as const, ref: `ch${n}_kc3` },
        { type: "text" as const, text: "." },
      ],
    },
  );
  return panels;
}

function companionChunks(n: number, title: string, terms: TermRow[], highYield: string) {
  const chunks = terms.slice(0, 4).map((t, i) => ({
    subtitle: t.front,
    segments: [
      { type: "text" as const, text: `${cleanTermBack(t.back).replace(/\.$/, "")} ` },
      { type: "footnote" as const, ref: `ch${n}_v${i + 1}` },
      { type: "text" as const, text: "." },
    ],
  }));
  chunks.push(
    {
      subtitle: "Domain F first, then measurement",
      segments: [
        {
          type: "text" as const,
          text: `Name the Chapter ${n} procedure or concept the stem spotlights, then disqualify alluring vocabulary from unrelated chapters `,
        },
        { type: "footnote" as const, ref: `ch${n}_exam` },
        { type: "text" as const, text: " " },
        { type: "footnote" as const, ref: `ch${n}_kc1` },
        { type: "text" as const, text: "." },
      ],
    },
    {
      subtitle: "Report what the data actually show",
      segments: [
        {
          type: "text" as const,
          text: `For ${title.toLowerCase()}, pair outcome claims with the measurement package that supports them—not brochure language alone `,
        },
        { type: "footnote" as const, ref: `ch${n}_measurement_c` },
        { type: "text" as const, text: "." },
      ],
    },
    {
      subtitle: "High-Yield Confusion Points",
      segments: [
        { type: "text" as const, text: highYield },
        { type: "footnote" as const, ref: `ch${n}_exam` },
        { type: "text" as const, text: " " },
        { type: "footnote" as const, ref: `ch${n}_ethics` },
        { type: "text" as const, text: "." },
      ],
    },
  );
  return chunks;
}

function chapterMts(spec: LateSpec): ExtensionBlueprint["mts"] {
  const n = spec.chapterNumber;
  const vignette = `${spec.title}: `;
  const termA = spec.terms[0]?.front ?? "core vocabulary";
  const termB = spec.terms[1]?.front ?? "measurement";
  const termC = spec.terms[2]?.front ?? "documentation";

  return [
    {
      sample_stimulus: vignette + spec.quizStem,
      comparison_options: [
        spec.quizOptions[({ A: 0, B: 1, C: 2, D: 3 } as const)[spec.quizCorrectKey]],
        spec.quizOptions[spec.quizCorrectKey === "A" ? 1 : 0],
        "Irrelevant respondent-only explanation with no operant logic",
      ],
      correct_match: spec.quizOptions[({ A: 0, B: 1, C: 2, D: 3 } as const)[spec.quizCorrectKey]],
      error_feedback: spec.quizRationaleCorrect,
    },
    {
      sample_stimulus:
        vignette +
        `Team conflates ${termA} with vocabulary from an earlier chapter while graphs lack fidelity notes.`,
      comparison_options: [
        "Re-anchor interpretation to Chapter " + String(n) + " definitions before changing the plan",
        "Ship hero charts because trends look encouraging",
        "Delete baseline phases to simplify the deck",
      ],
      correct_match: "Re-anchor interpretation to Chapter " + String(n) + " definitions before changing the plan",
      error_feedback: `Chapter ${n} items reward precise vocabulary—Domain F logic with Domain C documentation.`,
    },
    {
      sample_stimulus:
        vignette + `Observers drift from the ${termB} definition mid-project yet graphs still claim mastery.`,
      comparison_options: [
        "Recalibrate IOA and definitions before interpreting phase changes confidently",
        "Ignore drift if means still climb",
        "Collapse measurement to anecdote-only summaries",
      ],
      correct_match: "Recalibrate IOA and definitions before interpreting phase changes confidently",
      error_feedback: "Observer agreement and definitional fidelity support trustworthy interpretation.",
    },
    {
      sample_stimulus:
        vignette + "Regional office strips appendices auditors requested while marketing omnibus mastery.",
      comparison_options: [
        "Reject selective reporting—restore appendices or explicitly caveat limits in stakeholder summaries",
        "Comply silently with opacity requests",
        "Replace graphs with slogan slides",
      ],
      correct_match: "Reject selective reporting—restore appendices or explicitly caveat limits in stakeholder summaries",
      error_feedback: "Integrity of dissemination maps to Domain E (+ G) expectations alongside analytic accountability.",
    },
    {
      sample_stimulus:
        vignette +
        `Funding brief cites Chapter ${n} mastery yet raw ${termA} probe rows and ${termB} fidelity notes never appear in appendices.`,
      comparison_options: [
        "Restore segregated probe/fidelity documentation before adoption language hardens (Domain C + E)",
        "Ship slides because caregivers applauded once",
        "Merge instructed and probe trials on one hero graph without labels",
      ],
      correct_match: "Restore segregated probe/fidelity documentation before adoption language hardens (Domain C + E)",
      error_feedback: `Chapter ${n} reviewers expect auditable evidence—not brochure claims detached from appendices.`,
    },
    {
      sample_stimulus:
        vignette +
        `Supervisor asks staff to skip ${termC} checks when sessions run long, citing census pressure.`,
      comparison_options: [
        "Document scope limits and maintain minimum fidelity/probe integrity—or ethically modify plans with consent (Domain E)",
        "Delete checks silently whenever schedules slip",
        "Replace measurement with staff confidence ratings exclusively",
      ],
      correct_match:
        "Document scope limits and maintain minimum fidelity/probe integrity—or ethically modify plans with consent (Domain E)",
      error_feedback: "Schedule pressure never licenses silent omission of the measurement package supporting claims.",
    },
  ];
}

function buildLateBlueprint(spec: LateSpec): ExtensionBlueprint {
  const n = spec.chapterNumber;
  const xk = (i: number) => `x${n}_${i}`;
  const intro = spec.paragraphs.join("\n\n");
  const highYield = spec.highYieldText ?? defaultHighYield(n, spec.title, spec.terms);
  const cleanedTerms = spec.terms.map((t) => ({ front: t.front, back: cleanTermBack(t.back) }));

  const footnotes: ExtensionBlueprint["footnotes"] = {};
  for (let i = 0; i < 4; i++) {
    footnotes[xk(i + 1)] = {
      label: `[${i + 1}]`,
      lines: [
        `CHH Chapter ${n} — ${spec.title} (Pearson Global 3rd ed.). Confirm page numbers against your assigned TOC.`,
        i === 0 ? "Not quoted from CHH." : undefined,
      ].filter(Boolean) as string[],
    };
  }

  const quizKeyIdx = ({ A: 0, B: 1, C: 2, D: 3 } as const)[spec.quizCorrectKey];
  const legacyBds: ExtensionBlueprint["legacyBds"] = {
    id: `${spec.id}-q1`,
    stem: spec.quizStem,
    options: spec.quizOptions.map((text, idx) => ({
      key: (["A", "B", "C", "D"] as const)[idx],
      text: text.replace(/\s+ethically\.?$/i, "."),
      correct: idx === quizKeyIdx,
      rationale:
        idx === quizKeyIdx
          ? spec.quizRationaleCorrect.replace(/\s+ethically\.?$/gi, ".")
          : `Contrast this option against CHH Chapter ${n} (${spec.title}) emphases.`,
    })),
  };

  const chainFragments = spec.chainFragments.map((text, i) => ({
    id: (["a", "b", "c", "d"] as const)[i],
    text: text.replace(/\s+ethically\.?$/gi, "."),
  }));

  return {
    id: spec.id,
    chapterNumber: n,
    title: spec.title,
    codexHeading: `READING — Chapter ${n} (${spec.title})`,
    codexIntro: intro,
    footnotes,
    codexFootnoteRefs: [
      { afterSentenceIndex: 0, ref: xk(1) },
      { afterSentenceIndex: 1, ref: xk(2) },
      { afterSentenceIndex: 2, ref: xk(3) },
      { afterSentenceIndex: 3, ref: xk(4) },
    ],
    codexPlainLanguageSummary: {
      heading: "Plain language — conversational recap",
      intro: `Put simply, Chapter ${n} covers ${spec.title.toLowerCase()}. Use this recap to connect procedures, measurement, and ethics before exam-style vignettes.`,
      chunks: putSimplyChunks(n, spec.title, spec.paragraphs, xk, highYield),
    },
    activityPrefix: spec.activityPrefix,
    mts: chapterMts({ ...spec, terms: cleanedTerms }),
    chainTitle: spec.chainTitle,
    chainFragments,
    chainOrder: ["a", "b", "c", "d"],
    safmedTerms: cleanedTerms,
    supplementalFootnotes: supplementalForChapter(n, spec.title, cleanedTerms),
    vocabularySection: {
      heading: `VOCABULARY — Chapter ${n} excerpts`,
      intro: `Fluency check: define each term in plain language, then apply it to Chapter ${n} cases with accurate measurement and reporting logic (Domain F, C, E).`,
      entries: cleanedTerms.map((t, i) => ({
        term: t.front,
        definition: t.back.replace(/\.$/, ""),
        footnoteRef: `ch${n}_v${i + 1}`,
      })),
    },
    keyConceptsSection: {
      heading: `KEY CONCEPTS — Chapter ${n} (${spec.title})`,
      intro: "Panels braid Domain F interpretation with Domain C measurement honesty and Domain E stakeholder candor.",
      concepts: keyConceptPanels(n, cleanedTerms),
      plainLanguageSummary: {
        heading: "Key concepts — plain-language companion",
        intro: `Before choosing an answer on Chapter ${n}, name the central procedure, check fidelity and IOA where relevant, and confirm reporting language matches the evidence.`,
        chunks: companionChunks(n, spec.title, cleanedTerms, highYield),
      },
    },
    vocabularyMatchInstructions: `Map each term to the Chapter ${n} decision it supports, then name one measurement or ethics threat that would weaken the claim.`,
    matchActivityInstructions: `For each Chapter ${n} vignette, identify the primary issue—core procedure logic, measurement/fidelity fix, or ethics/reporting caveat—then justify your answer.`,
    chainActivityInstructions: `Order the Chapter ${n} workflow using the chain fragments: define targets, implement with fidelity, measure honestly, then report with appropriate scope limits.`,
    worksheet: {
      title: `Chapter ${n} — ${spec.title}`,
      instructions: `Use each item as Chapter ${n} training: check procedure logic (Domain F), measurement and fidelity (Domain C), and reporting ethics (Domain E) before selecting the answer.`,
      scenario:
        "Scenario A — Marketing language outruns the measurement package exported to reviewers while families report harmful routines unchanged.",
      scenario_follow_up:
        "Scenario B — Supervision bandwidth thins yet leadership demands faster rollouts without IOA recalibration.\n\nScenario C — Observers code trials inconsistently after staffing turnover; IOA falls below policy minimum.\n\nScenario D — Central office asks teams to replace raw appendices with executive blurbs devoid of methodological detail.\n\nScenario E — A trainee applies vocabulary from an earlier Cooper chapter to this case while skipping chapter-specific measurement checks.",
      fields: [
        {
          id: "response_1",
          label: "Scenario A · MOST disciplined supervisory stance?",
          options: [
            "Pair plots with corroborative outcome stakes plus honest limits when visuals oversell lived impact",
            "Ship decks unchanged because fundraisers prefer optimism",
            "Delete caregiver interviews to reduce paperwork",
          ],
          correct: "Pair plots with corroborative outcome stakes plus honest limits when visuals oversell lived impact",
        },
        {
          id: "response_2",
          label: "IOA drift vignette · FIRST remediation?",
          options: [
            "Pause high-stakes decisions until reviewers re-standardize definitions and recalc agreement on exemplar clips",
            "Lock dissenting coder notes permanently",
            "Boost monitor gamma settings only",
          ],
          correct: "Pause high-stakes decisions until reviewers re-standardize definitions and recalc agreement on exemplar clips",
        },
        {
          id: "response_3",
          label: `Which statement BEST captures why solid measurement habits matter for Chapter ${n}?`,
          options: [
            "Clear definitions and reproducible records keep interpretations honest for supervisors and stakeholders",
            "Chapter numbers alone decide clinical choices",
            "Ethics questions make measurement unnecessary",
            "Graphs are optional whenever schedules are tight",
          ],
          correct: "Clear definitions and reproducible records keep interpretations honest for supervisors and stakeholders",
        },
        {
          id: "response_4",
          label: "Scenario D — Suppressing appendices MOST threatens:",
          options: [
            "Domain E transparent methodology reporting plus Domain C multidisciplinary replayability",
            "Domain A phylogeny trivia unrelated to dissemination",
            "Facilities HVAC trivia unrelated to dissemination",
          ],
          correct: "Domain E transparent methodology reporting plus Domain C multidisciplinary replayability",
        },
        {
          id: "response_5",
          label: "Scenario D · MOST compliant remediation BEFORE governance review?",
          options: [
            "Restore appendices with supervisor attestation, qualify conclusions, and show remaining uncertainty",
            "Ship hero dashboards absent appendices",
            "Password-protect raw logs from every reviewer indefinitely",
          ],
          correct: "Restore appendices with supervisor attestation, qualify conclusions, and show remaining uncertainty",
        },
      ],
      remediationLog: `Rebuild Chapter ${n} fluency: anchor answers to ${spec.title.toLowerCase()} vocabulary, separate claims from evidence, document fidelity, and keep dissemination language aligned with appendices.`,
    },
    legacyBds,
  };
}

const LATE_SPECS: LateSpec[] = [];

export const PEARSON_LATE_CHAPTER_BLUEPRINTS: ExtensionBlueprint[] = LATE_SPECS.map(buildLateBlueprint);
