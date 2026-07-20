import type {
  BDSQuestion,
  CodexPlainLanguageSummary,
  FootnoteEntry,
  KeyConceptsSection,
  MatchStimulusSet,
  VocabularySection,
  WorksheetConfig,
} from "@/lib/content-types";

/** Blueprint shape assembled into `StudyModule` by `extensions.ts` `buildExtension`. */
export type ExtensionBlueprint = {
  id: string;
  chapterNumber: number;
  title: string;
  codexHeading: string;
  codexIntro: string;
  footnotes?: Record<string, FootnoteEntry>;
  codexFootnoteRefs?: { afterSentenceIndex: number; ref: string }[];
  activityPrefix: number;
  mts: MatchStimulusSet[];
  chainTitle: string;
  chainFragments: { id: string; text: string }[];
  chainOrder: string[];
  /**
   * Author-curated SAFMEDS fluency deck (short prompt / short answer pairs).
   * Surfaced onto the assembled `StudyModule` as `safmedsDeck` and consumed
   * by `ensureSafmeds` to build the SAFMEDS activity. When omitted, the SAFMEDS
   * activity falls back to the module's `vocabularySection.entries`.
   */
  safmedTerms?: { front: string; back: string }[];
  vocabularyMatchInstructions?: string;
  worksheet: Omit<WorksheetConfig, "title"> & { title: string };
  bdsBank?: BDSQuestion[];
  legacyBds?: BDSQuestion;
  codexPlainLanguageSummary?: CodexPlainLanguageSummary;
  supplementalFootnotes?: Record<string, FootnoteEntry>;
  vocabularySection?: VocabularySection;
  keyConceptsSection?: KeyConceptsSection;
  matchActivityInstructions?: string;
  chainActivityInstructions?: string;
};
