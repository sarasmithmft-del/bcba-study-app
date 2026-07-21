/** Structured Codex narrative segments */
export type CodexSegment =
  | { type: "text"; text: string }
  | { type: "footnote"; ref: string };

export interface FootnoteEntry {
  /** Inline citation label shown next to markers in text */
  label: string;
  lines: string[];
}

export interface MatchStimulusSet {
  sample_stimulus: string;
  comparison_options: string[];
  correct_match: string;
  error_feedback: string;
}

export interface ActivityMechanics {
  pass_threshold_accuracy?: number;
}

export interface MatchToSampleActivity {
  activity_id: number;
  game_type:
    | "Match-to-Sample"
    | "Contingency-Matrix-Sorter"
    | "Concept-Classifier-Matrix";
  mechanics: ActivityMechanics;
  /** Facilitator-facing directions shown above the activity */
  instructions?: string;
  stimulus_sets: MatchStimulusSet[];
}

export interface ChainFragment {
  id: string;
  text: string;
}

export interface BehaviorChainActivity {
  activity_id: number;
  game_type: "Behavior-Chain";
  mechanics: ActivityMechanics;
  instructions?: string;
  chain: {
    title?: string;
    fragments: ChainFragment[];
    correct_order: string[];
    remediation?: string;
  };
}

export interface SafmedsCard {
  front: string;
  back: string;
}

export interface SafmedsActivity {
  activity_id: number;
  game_type: "SAFMEDS";
  mechanics: ActivityMechanics;
  instructions?: string;
  cards: SafmedsCard[];
}

/** Match glossary-style terms to definitional prompts */
export interface VocabularyMatchItem {
  id: string;
  prompt_definition: string;
  options: string[];
  correct_term: string;
}

export interface VocabularyMatchActivity {
  activity_id: number;
  game_type: "Vocabulary-Match";
  mechanics: ActivityMechanics;
  instructions?: string;
  items: VocabularyMatchItem[];
}

export type GamifiedActivity =
  | MatchToSampleActivity
  | BehaviorChainActivity
  | SafmedsActivity
  | VocabularyMatchActivity;

export interface WorksheetField {
  id: string;
  label: string;
  options: string[];
  correct: string;
}

export interface WorksheetConfig {
  title: string;
  instructions?: string;
  scenario: string;
  /** Optional second vignette shown beneath the primary premise */
  scenario_follow_up?: string;
  fields: WorksheetField[];
  remediationLog: string;
}

export interface BDSOption {
  key: string;
  text: string;
  correct: boolean;
  rationale: string;
}

export interface BDSQuestion {
  id: string;
  stem: string;
  options: BDSOption[];
  /**
   * BACB 6th ed. Test Content Outline domain (A–I), when tagged for mock exams.
   * A: Foundations/Philosophy · B: Concepts & Principles · C: Measurement, Data Display, Interpretation ·
   * D: Experimental Design · E: Ethics · F: Behavior Assessment ·
   * G: Behavior-Change Procedures · H: Selecting & Implementing Interventions ·
   * I: Personnel Supervision & Management.
   */
  tcoDomain?: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";
  /**
   * Optional granular TCO task code (e.g. "B-3", "H-2"). Progressive tagging —
   * not every bank item is coded yet. Verify codes against the current BACB TCO.
   */
  tcoCode?: string;
}

export interface VocabularySection {
  heading?: string;
  intro?: string;
  entries: Array<{
    term: string;
    definition: string;
    /** Key into merged Codex + supplemental footnotes map */
    footnoteRef?: string;
  }>;
}

/** Plain-language recap shown below scholarly panels (Codex, Key concepts, etc.) */
export interface CodexPlainChunk {
  subtitle?: string;
  /** Plain body (no clickable citations). Prefer `segments` when footnote markers are needed. */
  text?: string;
  /** Same segment model as chapter reading—footnote buttons open the merged References aside. */
  segments?: CodexSegment[];
}

export interface CodexPlainLanguageSummary {
  heading?: string;
  intro?: string;
  chunks: CodexPlainChunk[];
}

export interface KeyConceptBlock {
  title: string;
  segments: CodexSegment[];
}

export interface KeyConceptsSection {
  heading?: string;
  intro?: string;
  concepts: KeyConceptBlock[];
  /** Plain-language recap below the scholarly lattice */
  plainLanguageSummary?: CodexPlainLanguageSummary;
}

export interface StudyModule {
  id: string;
  /** Sequential workbook chapter shown on the home list and module header (1…N, unique). */
  chapterNumber: number;
  /** Cooper/Heron/Heward source chapter cited in readings, activities, and quizzes. */
  cooperChapterNumber?: number;
  /** When set, shown instead of `Chapter {chapterNumber}`. */
  chapterLabel?: string;
  /** Official Cooper chapter title for this module's anchor chapter. */
  cooperChapterTitle?: string;
  /**
   * Approximate BACB 6th ed. TCO domain(s) this module primarily aligns with.
   * Used only for study-planning focus flags on the chapter-quiz results view.
   * Populated in `src/content/modules/moduleTcoDomain.ts`.
   */
  primaryTcoDomain?: BDSQuestion["tcoDomain"];
  /** When false, module is omitted from the home chapter list. */
  includeInChapterIndex?: boolean;
  title: string;
  codex: {
    heading: string;
    segments: CodexSegment[];
    footnotes: Record<string, FootnoteEntry>;
    plainLanguageSummary?: CodexPlainLanguageSummary;
  };
  /** Extra keyed citations shared by vocabulary / key concepts panels */
  supplementalFootnotes?: Record<string, FootnoteEntry>;
  vocabularySection?: VocabularySection;
  keyConceptsSection?: KeyConceptsSection;
  activities: GamifiedActivity[];
  worksheet: WorksheetConfig;
  /** Legacy single chapter-quiz item — omit when `bdsBank` drives the quiz tab */
  bds?: BDSQuestion;
  /** Multi-item high-discrimination simulation (preferred when present) */
  bdsBank?: BDSQuestion[];
  /**
   * Author-curated SAFMEDS fluency deck for this module. When present,
   * `ensureSafmeds` will build the SAFMEDS activity from this deck instead of
   * falling back to `vocabularySection.entries`. Populated from blueprint
   * `safmedTerms` at extension-build time.
   */
  safmedsDeck?: SafmedsCard[];
}
