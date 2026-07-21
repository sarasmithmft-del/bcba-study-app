import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_37_ETHICS_CODE_NAVIGATOR_QUIZ_BANK } from "@/content/modules/quiz/chapter37EthicsCodeNavigatorQuizBank";

/**
 * BACB Ethics Code Navigator — section-by-section map + common violations.
 *
 * Supplements Cooper Chapter 31 (Ethics) with a structural walk through the
 * BACB Ethics Code for Behavior Analysts: which section governs which
 * situation, how sections cross-reference, common violation patterns, and a
 * layered decision-making framework. Verify current wording at bacb.com.
 */

export const MOD42_BLUEPRINT: ExtensionBlueprint = {
  id: "mod42",
  chapterNumber: 37,
  activityPrefix: 4200,
  title: "BACB Ethics Code Navigator — Section-by-Section Map + Common Violations",
  codexHeading: "READING — BACB Ethics Code Navigator (extends Cooper Ch. 31)",
  codexIntro: `Cooper Chapter 31 covers the philosophical + applied foundations of ethical practice. This module walks the STRUCTURE of the current BACB Ethics Code for Behavior Analysts so you can look up which section governs which situation — and recognize how real cases usually implicate MULTIPLE sections at once.

Approximate top-level structure (verify current wording at bacb.com/ethics-information):
Section 1 — Responsibility as a Professional (scope of competence; professional development; personal factors; integrity).
Section 2 — Responsibility in Practice (evidence-based practice; documentation; billing integrity; records; safe environment).
Section 3 — Responsibility to Clients & Stakeholders (informed consent; assent; multiple relationships; confidentiality; termination of services; cultural responsiveness).
Section 4 — Responsibility to Supervisees & Trainees (supervisor competence; supervision agreement; supervisee load; feedback; responsible termination of supervision).
Section 5 — Responsibility in Public Statements (truthful advertising; media/social media; workshop + training accuracy).
Section 6 — Responsibility in Research (ethical review; informed consent; participant protection; accurate reporting; conflicts of interest).

Common violation patterns map cleanly to sections but usually cross-reference:
- Practicing outside scope → Section 1 (competence), cross-referencing Section 3 (client welfare).
- Multiple relationship with a client's parent → Section 3 (multiple relationships), cross-referencing Section 1 (professional judgment).
- Accepting more supervisees than can be effectively supervised → Section 4 (supervisor caseload), cross-referencing Section 1 (competence) and Section 3 (client welfare).
- Advertising unsubstantiated expertise → Section 5 (public statements), cross-referencing Section 1 (competence).
- Billing for services not delivered → Section 2 (billing integrity), cross-referencing Section 3 (client welfare) and often legal statute.
- Confidentiality breach on social media → Section 3 (confidentiality), cross-referencing Section 5 (public statements).
- Retaliation against a complainant supervisee → Section 4 (responsible termination) + Section 1 (professional integrity).
- Falsified fieldwork sign-off → documentation integrity across Section 1 + Section 2 + Section 4.

Layered decision framework:
1. Identify the relevant section(s) — often multiple.
2. Consult the current BACB Code + relevant literature.
3. Consult a supervisor / colleague when uncertain.
4. Consider client + stakeholder welfare + assent.
5. Document the decision, rationale, and cross-referenced sections.
6. Follow up + reassess as new information emerges.

Mental model. Treat the Code as an ongoing decision-making guide organized by responsibility domain, not as a rulebook to memorize verbatim. The exam tests your ability to (a) identify which section governs a scenario, (b) recognize cross-referenced sections, and (c) select the most direct + protective action — not to quote section numbers from memory.

For lookup + verification always use the authoritative source at bacb.com/ethics-information. Editions update; wording changes; older summaries drift.`,
  footnotes: {
    ch37_1: {
      label: "[1]",
      lines: [
        "BACB Ethics Code for Behavior Analysts (current edition). Verify wording at https://www.bacb.com/ethics-information.",
        "Editions update — this module reflects the structural framework as of the current Code.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch37_1" },
    { afterSentenceIndex: 6, ref: "ch37_1" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Ethics Code Navigator recap",
    intro: "Six sections. Look up the section, recognize cross-references, pick the most protective action.",
    chunks: [
      { subtitle: "Section 1", segments: [{ type: "text", text: "Responsibility as a Professional — scope of competence, professional development, integrity." }] },
      { subtitle: "Section 2", segments: [{ type: "text", text: "Responsibility in Practice — evidence-based practice, documentation, billing integrity, records." }] },
      { subtitle: "Section 3", segments: [{ type: "text", text: "Responsibility to Clients & Stakeholders — consent, assent, multiple relationships, confidentiality, termination, cultural responsiveness." }] },
      { subtitle: "Section 4", segments: [{ type: "text", text: "Responsibility to Supervisees & Trainees — supervisor competence, agreement, load, feedback, responsible termination." }] },
      { subtitle: "Section 5", segments: [{ type: "text", text: "Responsibility in Public Statements — truthful advertising, social media, workshops." }] },
      { subtitle: "Section 6", segments: [{ type: "text", text: "Responsibility in Research — ethical review, consent, participant protection, accurate reporting." }] },
      { subtitle: "Framework", segments: [{ type: "text", text: "Identify sections → consult Code → consult colleague → consider welfare + assent → document → reassess." }] },
    ],
  },
  supplementalFootnotes: {
    ch37_v1: { label: "[V1]", lines: ["Section 1 — Responsibility as a Professional (scope of competence)."] },
    ch37_v2: { label: "[V2]", lines: ["Section 2 — Responsibility in Practice (evidence-based practice + billing + records)."] },
    ch37_v3: { label: "[V3]", lines: ["Section 3 — Responsibility to Clients & Stakeholders (consent + assent + multiple relationships + confidentiality)."] },
    ch37_v4: { label: "[V4]", lines: ["Section 4 — Responsibility to Supervisees & Trainees (supervisor competence + responsible termination)."] },
    ch37_v5: { label: "[V5]", lines: ["Section 5 — Responsibility in Public Statements (truthful advertising)."] },
    ch37_v6: { label: "[V6]", lines: ["Section 6 — Responsibility in Research (ethical review + consent + reporting)."] },
  },
  vocabularySection: {
    heading: "VOCABULARY — Ethics Code Navigator",
    intro: "Six top-level sections + the common patterns that cross them.",
    entries: [
      { term: "Section 1 · Responsibility as a Professional", definition: "Scope of competence, professional development, personal factors, integrity.", footnoteRef: "ch37_v1" },
      { term: "Section 2 · Responsibility in Practice", definition: "Evidence-based practice, documentation, billing integrity, records, safe environment.", footnoteRef: "ch37_v2" },
      { term: "Section 3 · Responsibility to Clients & Stakeholders", definition: "Informed consent, assent, multiple relationships, confidentiality, termination of services, cultural responsiveness.", footnoteRef: "ch37_v3" },
      { term: "Section 4 · Responsibility to Supervisees & Trainees", definition: "Supervisor competence, supervision agreement, supervisee load, feedback, responsible termination of supervision.", footnoteRef: "ch37_v4" },
      { term: "Section 5 · Responsibility in Public Statements", definition: "Truthful advertising, media and social media accuracy, workshop and training claims.", footnoteRef: "ch37_v5" },
      { term: "Section 6 · Responsibility in Research", definition: "Ethical review, informed consent, participant protection, accurate reporting, conflicts of interest.", footnoteRef: "ch37_v6" },
      { term: "Cross-referencing", definition: "Real ethical cases typically implicate multiple sections — competence violations affect client welfare; billing fraud affects client + practice + professional responsibility.", footnoteRef: "ch37_v1" },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Ethics Code Navigator",
    intro: "Section-mapping + common violation patterns + decision framework.",
    concepts: [
      { title: "Six-section structural map", segments: [{ type: "text", text: "Section 1 professional / 2 practice / 3 clients / 4 supervisees / 5 public statements / 6 research " }, { type: "footnote", ref: "ch37_v1" }, { type: "footnote", ref: "ch37_v3" }, { type: "footnote", ref: "ch37_v6" }, { type: "text", text: "." }] },
      { title: "Common violation patterns", segments: [{ type: "text", text: "Scope-of-competence (1+3); multiple relationship (3+1); supervisor overload (4+1+3); advertising misleadingly (5+1); billing fraud (2+3); confidentiality breach (3+5); retaliation (4+1); fieldwork falsification (1+2+4) " }, { type: "footnote", ref: "ch37_v2" }, { type: "footnote", ref: "ch37_v3" }, { type: "footnote", ref: "ch37_v4" }, { type: "footnote", ref: "ch37_v5" }, { type: "text", text: "." }] },
      { title: "Decision framework", segments: [{ type: "text", text: "Identify section(s) → consult current Code + literature → consult colleague if uncertain → consider client welfare + assent → document → reassess " }, { type: "footnote", ref: "ch37_v3" }, { type: "text", text: "." }] },
      { title: "Authoritative lookup", segments: [{ type: "text", text: "Always use bacb.com/ethics-information for current wording — editions update, summaries drift " }, { type: "footnote", ref: "ch37_v1" }, { type: "text", text: "." }] },
    ],
  },
  vocabularyMatchInstructions: "Match each scenario to the Ethics Code section(s) MOST directly implicated. Watch for cross-references.",
  matchActivityInstructions: "Select the section(s) + response that BEST addresses each ethics scenario.",
  chainActivityInstructions: "Sequence the layered ethical-decision framework for a scenario involving multiple sections.",
  mts: [
    { sample_stimulus: "Supervisor accepts more supervisees than can be effectively supervised.", comparison_options: ["Section 4 (supervisor caseload) + cross-references to Section 1 competence and Section 3 client welfare", "Section 5 only", "Section 6 only", "No section applies"], correct_match: "Section 4 (supervisor caseload) + cross-references to Section 1 competence and Section 3 client welfare", error_feedback: "Section 4 is direct; cross-references 1 and 3 are typical." },
    { sample_stimulus: "BCBA implements a treatment package they have never been trained in.", comparison_options: ["Section 1 (scope of competence) — obtain training + supervision before practicing new methods", "Section 5 only", "Section 6 only", "No section"], correct_match: "Section 1 (scope of competence) — obtain training + supervision before practicing new methods", error_feedback: "Scope of competence sits in Section 1." },
    { sample_stimulus: "BCBA and client's parent begin a romantic relationship during active services.", comparison_options: ["Section 3 (multiple relationships) — decline the dual role", "Section 5 only", "Not an ethics issue", "Only Section 2"], correct_match: "Section 3 (multiple relationships) — decline the dual role", error_feedback: "Section 3 governs multiple relationships." },
    { sample_stimulus: "BCBA advertises expertise in a method they do not hold competence in.", comparison_options: ["Section 5 (public statements) + cross-reference to Section 1 competence", "Section 6 only", "Section 3 only", "No section"], correct_match: "Section 5 (public statements) + cross-reference to Section 1 competence", error_feedback: "Section 5 governs public statements; Section 1 is cross-referenced." },
    { sample_stimulus: "BCBA charges for services never delivered.", comparison_options: ["Section 2 (billing integrity) + cross-references to Section 3 client welfare + Section 1 integrity", "Section 5 only", "Section 6 only", "Not an ethics issue"], correct_match: "Section 2 (billing integrity) + cross-references to Section 3 client welfare + Section 1 integrity", error_feedback: "Billing integrity sits in Section 2 with typical cross-references." },
    { sample_stimulus: "Social-media post identifies a client by initials + shares graph.", comparison_options: ["Section 3 (confidentiality) + Section 5 (public statements) — identifiable client info cannot be shared without authorization", "No issue if just initials", "No issue on personal accounts", "Only Section 1"], correct_match: "Section 3 (confidentiality) + Section 5 (public statements) — identifiable client info cannot be shared without authorization", error_feedback: "Sections 3 and 5 apply." },
    { sample_stimulus: "Supervisor terminates a trainee mid-contract for filing an ethics complaint.", comparison_options: ["Sections 4 (responsible termination) + 1 (integrity) — retaliation is prohibited; complaint filing is protected", "Supervisors may terminate at will", "Only Section 6", "No section"], correct_match: "Sections 4 (responsible termination) + 1 (integrity) — retaliation is prohibited; complaint filing is protected", error_feedback: "Retaliation and irresponsible termination violate Sections 4 + 1." },
    { sample_stimulus: "Looking up the current exact wording of an Ethics Code section.", comparison_options: ["Current BACB Ethics Code PDF at bacb.com/ethics-information — authoritative source", "Older textbook edition", "Unofficial internet summary", "Colleague memory"], correct_match: "Current BACB Ethics Code PDF at bacb.com/ethics-information — authoritative source", error_feedback: "The BACB website hosts the authoritative current version." },
  ],
  chainTitle: "Layered ethical-decision framework",
  chainFragments: [
    { id: "a", text: "Identify all Ethics Code sections implicated — real cases usually implicate multiple sections. Cross-reference is common." },
    { id: "b", text: "Consult the current BACB Code (bacb.com) and relevant literature; consult a supervisor or colleague when uncertain." },
    { id: "c", text: "Consider client + stakeholder welfare, assent, and cultural responsiveness in the specific case context." },
    { id: "d", text: "Select the most direct + protective action; document the decision, rationale, and cross-referenced sections; follow up and reassess." },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    { front: "Section 1", back: "Responsibility as a Professional — scope of competence." },
    { front: "Section 2", back: "Responsibility in Practice — billing + documentation + records." },
    { front: "Section 3", back: "Responsibility to Clients & Stakeholders — consent + assent + multiple relationships + confidentiality." },
    { front: "Section 4", back: "Responsibility to Supervisees & Trainees — supervision competence + responsible termination." },
    { front: "Section 5", back: "Responsibility in Public Statements — truthful advertising + social media." },
    { front: "Section 6", back: "Responsibility in Research — review + consent + reporting." },
    { front: "Cross-referencing", back: "Real cases usually implicate multiple sections — read broadly." },
    { front: "Authoritative source", back: "bacb.com/ethics-information — current wording." },
  ],
  worksheet: {
    title: "Ethics Code Navigator — section identification",
    instructions: "Identify the primary + cross-referenced sections for each scenario.",
    scenario: "Scenario A — Supervisor overload beyond effective capacity.",
    scenario_follow_up: "Scenario B — Practicing outside scope of competence.\n\nScenario C — Romantic relationship with client's parent.\n\nScenario D — Advertising unsubstantiated expertise.\n\nScenario E — Billing for services not delivered.\n\nScenario F — Client info on social media.\n\nScenario G — Retaliatory termination of trainee.\n\nScenario H — Look up current Code wording.",
    fields: [
      { id: "response_1", label: "A", options: ["Section 4 primary + 1/3 cross", "Section 5 only", "No section"], correct: "Section 4 primary + 1/3 cross" },
      { id: "response_2", label: "B", options: ["Section 1 primary", "Section 5 only", "No section"], correct: "Section 1 primary" },
      { id: "response_3", label: "C", options: ["Section 3 primary", "No section", "Section 6 only"], correct: "Section 3 primary" },
      { id: "response_4", label: "D", options: ["Section 5 primary + 1 cross", "Section 6 only", "No section"], correct: "Section 5 primary + 1 cross" },
      { id: "response_5", label: "E", options: ["Section 2 primary + 3/1 cross", "Section 5 only", "Not an issue"], correct: "Section 2 primary + 3/1 cross" },
      { id: "response_6", label: "F", options: ["Section 3 + 5", "No issue if initials", "Section 1 only"], correct: "Section 3 + 5" },
      { id: "response_7", label: "G", options: ["Sections 4 + 1 — retaliation prohibited", "May terminate at will", "Section 6 only"], correct: "Sections 4 + 1 — retaliation prohibited" },
      { id: "response_8", label: "H", options: ["bacb.com/ethics-information (current PDF)", "Older textbook", "Colleague memory"], correct: "bacb.com/ethics-information (current PDF)" },
    ],
    remediationLog: "Rebuild fluency: Six sections. Real cases cross-reference. Look up authoritative source. Document + reassess.",
  },
  bdsBank: CHAPTER_37_ETHICS_CODE_NAVIGATOR_QUIZ_BANK,
};
