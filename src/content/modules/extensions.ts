import type {
  BehaviorChainActivity,
  BDSQuestion,
  CodexPlainLanguageSummary,
  CodexSegment,
  FootnoteEntry,
  GamifiedActivity,
  KeyConceptsSection,
  MatchToSampleActivity,
  MatchStimulusSet,
  StudyModule,
  VocabularyMatchActivity,
  VocabularyMatchItem,
  VocabularySection,
  WorksheetConfig,
} from "@/lib/content-types";
import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { alignStudyModuleToCooperChapter } from "@/content/cooperChapterAlign";
import { MOD02_BLUEPRINT } from "@/content/modules/mod02Chapter11Blueprint";
import { MOD05_BLUEPRINT } from "@/content/modules/mod05Chapter5Blueprint";
import { MOD33_BLUEPRINT } from "@/content/modules/mod33Chapter12Blueprint";
import { MOD34_BLUEPRINT } from "@/content/modules/mod34Chapter13Blueprint";
import { MOD35_BLUEPRINT } from "@/content/modules/mod35Chapter14Blueprint";
import { MOD36_BLUEPRINT } from "@/content/modules/mod36Chapter15Blueprint";
import { MOD17_BLUEPRINT } from "@/content/modules/mod17Chapter16Blueprint";
import { MOD18_BLUEPRINT } from "@/content/modules/mod18Chapter17Blueprint";
import { MOD19_BLUEPRINT } from "@/content/modules/mod19Chapter18Blueprint";
import { MOD20_BLUEPRINT } from "@/content/modules/mod20Chapter19Blueprint";
import { MOD21_BLUEPRINT } from "@/content/modules/mod21Chapter20Blueprint";
import { MOD22_BLUEPRINT } from "@/content/modules/mod22Chapter21Blueprint";
import { MOD23_BLUEPRINT } from "@/content/modules/mod23Chapter22Blueprint";
import { MOD24_BLUEPRINT } from "@/content/modules/mod24Chapter23Blueprint";
import { MOD25_BLUEPRINT } from "@/content/modules/mod25Chapter24Blueprint";
import { MOD26_BLUEPRINT } from "@/content/modules/mod26Chapter25Blueprint";
import { MOD27_BLUEPRINT } from "@/content/modules/mod27Chapter26Blueprint";
import { MOD28_BLUEPRINT } from "@/content/modules/mod28Chapter27Blueprint";
import { MOD29_BLUEPRINT } from "@/content/modules/mod29Chapter28Blueprint";
import { MOD30_BLUEPRINT } from "@/content/modules/mod30Chapter29Blueprint";
import { MOD31_BLUEPRINT } from "@/content/modules/mod31Chapter30Blueprint";
import { MOD32_BLUEPRINT } from "@/content/modules/mod32Chapter31Blueprint";
import { MOD37_BLUEPRINT } from "@/content/modules/mod37DomainISupervisionBlueprint";
import { MOD38_BLUEPRINT } from "@/content/modules/mod38DomainHInterventionSelectionBlueprint";
import { MOD39_BLUEPRINT } from "@/content/modules/mod39TestTakingStrategyBlueprint";
import { MOD40_BLUEPRINT } from "@/content/modules/mod40FAProtocolsBlueprint";
import { MOD41_BLUEPRINT } from "@/content/modules/mod41AssessmentToolsBlueprint";
import { MOD42_BLUEPRINT } from "@/content/modules/mod42EthicsCodeNavigatorBlueprint";
import { MOD43_BLUEPRINT } from "@/content/modules/mod43RftActBlueprint";
import { MOD10_BLUEPRINT } from "@/content/modules/mod10Chapter7Blueprint";
import { MOD11_BLUEPRINT } from "@/content/modules/mod11Chapter6Blueprint";
import { MOD12_BLUEPRINT } from "@/content/modules/mod12Chapter8Blueprint";
import { MOD13_BLUEPRINT } from "@/content/modules/mod13Chapter9Blueprint";
import { MOD07_BLUEPRINT } from "@/content/modules/mod07Chapter27IndirectFABBlueprint";
import { MOD08_BLUEPRINT } from "@/content/modules/mod08Chapter27DescriptiveFABBlueprint";
import { MOD09_BLUEPRINT } from "@/content/modules/mod09Chapter27ExperimentalFABBlueprint";
import { MOD14_BLUEPRINT } from "@/content/modules/mod14Chapter9ChangingCriterionBlueprint";
import { MOD15_BLUEPRINT } from "@/content/modules/mod15Chapter8ATDBlueprint";
import { MOD16_BLUEPRINT } from "@/content/modules/mod16Chapter10Blueprint";
import { PEARSON_LATE_CHAPTER_BLUEPRINTS } from "@/content/modules/pearsonLateChapterBlueprints";
import { EXTENSION_QUIZ_EXTRAS } from "@/content/modules/extensionQuizExtras";
import { CHAPTER_02_QUIZ_BANK } from "@/content/modules/quiz/chapter02QuizBank";
import { CHAPTER_04_WORKBOOK_QUIZ_BANK } from "@/content/modules/quiz/chapter04QuizBank";
import { CHAPTER_05_WORKBOOK_QUIZ_BANK } from "@/content/modules/quiz/chapter05QuizBank";

/** Cooper-aligned chapter stubs beyond blueprint Modules 01–03 (seed JSON). */

function defaultMatchActivityInstructions(bp: ExtensionBlueprint): string {
  return `Read each scenario, then select the comparison option that best aligns with Cooper/Heron/Heward Chapter ${bp.chapterNumber} (${bp.title}). Incorrect trials surface rationales—use them to refine discriminations before continuing.`;
}

function defaultChainActivityInstructions(bp: ExtensionBlueprint): string {
  return `Drag fragments until they match the Chapter ${bp.chapterNumber} workflow summarized by the chain title—the sequence should narrate sound practice from beginning to end.`;
}

function worksheetWithInstructions(bp: ExtensionBlueprint): WorksheetConfig {
  const ws = bp.worksheet;
  const trimmed = ws.instructions?.trim();
  if (trimmed) return ws;
  return {
    ...ws,
    instructions: `Work through each dropdown using Chapter ${bp.chapterNumber} (${bp.title}) concepts. Answer every prompt before selecting Grade worksheet—partial attempts earn no credit.`,
  };
}

function codexSegments(
  intro: string,
  refs: ExtensionBlueprint["codexFootnoteRefs"],
  footnotes: Record<string, FootnoteEntry>,
): CodexSegment[] {
  if (!refs?.length) {
    return [{ type: "text", text: intro }];
  }
  const paragraphs = intro.split(/\n\n+/).filter(Boolean);
  const segments: CodexSegment[] = [];
  paragraphs.forEach((paragraph, index) => {
    segments.push({ type: "text", text: paragraph });
    const marker = refs.find((item) => item.afterSentenceIndex === index);
    if (marker && footnotes[marker.ref]) {
      segments.push({ type: "footnote", ref: marker.ref });
    }
    if (index < paragraphs.length - 1) {
      segments.push({ type: "text", text: "\n\n" });
    }
  });
  return segments.length ? segments : [{ type: "text", text: intro }];
}

/** Stable ordering avoids SSR/client mismatches when embedding generated activity payloads */
function vocabularyMatchFromVocabularyEntries(
  activityId: number,
  chapterNumber: number,
  entries: NonNullable<VocabularySection["entries"]>,
  instructions?: string,
): VocabularyMatchActivity {
  const terms = entries.map((e) => e.term);
  const items: VocabularyMatchItem[] = entries.map((entry, index) => {
    const distractors = terms
      .filter((t) => t !== entry.term)
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 3);
    const options = [entry.term, ...distractors].sort((a, b) => a.localeCompare(b));
    return {
      id: `vm_${index + 1}`,
      prompt_definition: entry.definition,
      options,
      correct_term: entry.term,
    };
  });
  return {
    activity_id: activityId,
    game_type: "Vocabulary-Match",
    mechanics: { pass_threshold_accuracy: 1 },
    instructions:
      instructions ??
      `Each stem restates Chapter ${chapterNumber} practice terms without naming them outright—tap one bubble per row that best captures the definition.`,
    items,
  };
}

function buildActivities(bp: ExtensionBlueprint): GamifiedActivity[] {
  const p = bp.activityPrefix;
  const mts: MatchToSampleActivity = {
    activity_id: p + 1,
    game_type: "Match-to-Sample",
    mechanics: { pass_threshold_accuracy: 1 },
    instructions: bp.matchActivityInstructions ?? defaultMatchActivityInstructions(bp),
    stimulus_sets: bp.mts,
  };
  const chain: BehaviorChainActivity = {
    activity_id: p + 2,
    game_type: "Behavior-Chain",
    mechanics: { pass_threshold_accuracy: 1 },
    instructions: bp.chainActivityInstructions ?? defaultChainActivityInstructions(bp),
    chain: {
      title: bp.chainTitle,
      fragments: bp.chainFragments,
      correct_order: bp.chainOrder,
      remediation:
        "Reorder the sequence so indirect sources inform hypotheses before experimental isolation.",
    },
  };
  const vocabularyPractice = vocabularyMatchFromVocabularyEntries(
    p + 3,
    bp.chapterNumber,
    bp.vocabularySection?.entries ?? [],
    bp.vocabularyMatchInstructions,
  );
  return [mts, chain, vocabularyPractice];
}

function quizBank(bp: ExtensionBlueprint): BDSQuestion[] {
  const primary = bp.bdsBank?.length ? bp.bdsBank : bp.legacyBds ? [bp.legacyBds] : [];
  const extras = EXTENSION_QUIZ_EXTRAS[bp.id] ?? [];
  return [...primary, ...extras];
}

function buildExtension(bp: ExtensionBlueprint): StudyModule {
  const footnotes = bp.footnotes ?? {};
  const bank = quizBank(bp);
  const curatedDeck =
    bp.safmedTerms && bp.safmedTerms.length > 0
      ? bp.safmedTerms.map((card) => ({ front: card.front, back: card.back }))
      : undefined;
  const base: StudyModule = {
    id: bp.id,
    chapterNumber: bp.chapterNumber,
    title: bp.title,
    codex: {
      heading: bp.codexHeading,
      segments: codexSegments(bp.codexIntro, bp.codexFootnoteRefs, footnotes),
      footnotes,
      ...(bp.codexPlainLanguageSummary ? { plainLanguageSummary: bp.codexPlainLanguageSummary } : {}),
    },
    activities: buildActivities(bp),
    worksheet: worksheetWithInstructions(bp),
    ...(bank.length ? { bdsBank: bank } : {}),
    ...(bp.supplementalFootnotes ? { supplementalFootnotes: bp.supplementalFootnotes } : {}),
    ...(bp.vocabularySection ? { vocabularySection: bp.vocabularySection } : {}),
    ...(bp.keyConceptsSection ? { keyConceptsSection: bp.keyConceptsSection } : {}),
    ...(curatedDeck ? { safmedsDeck: curatedDeck } : {}),
  };
  return alignStudyModuleToCooperChapter(base, bp.chapterNumber);
}

/**
 * Chapter alignment for extension module ids:
 * - mod21–mod32 continue after Equivalence-Based Instruction (Pearson chapters 20–31; activityPrefix 2210–2320).
 *   See `pearsonLateChapterBlueprints.ts` for titles (Nonequivalence through Ethics).
 * - mod04–mod20 follow workbook sequencing aligned with Cooper Part 6–8 (mod01–mod03 are seeded JSON).
 * - Early extension entries: mod04/mod055 map to Cooper chapters 2 and 4; mod05 is Chapter 5 (IOA & measurement quality).
 */
const BLUEPRINTS: ExtensionBlueprint[] = [
  {
    id: "mod04",
    chapterNumber: 2,
    activityPrefix: 2040,
    title: "Basic Concepts and Principles",
    codexHeading: "READING — Chapter 2",
    codexIntro: `Chapter 2 in Cooper, Heron, and Heward establishes the foundational language used throughout applied behavior analysis. It is not a glossary to memorize in isolation; it is the conceptual frame that helps analysts describe behavior precisely, analyze causal relations, and communicate findings in ways other professionals can verify.

In this chapter, behavior is defined as the interaction of an organism with its environment. That definition matters because it keeps analysis tied to observable, measurable events and discourages explanations that rely on hidden internal agents. Cooper also introduces dimensional properties of behavior (for example, when behavior occurs, how long it lasts, and how often it happens), which later support measurement and graphing decisions.

Chapter 2 also clarifies that analysts work with classes, not just single topographies. Response classes group different actions that produce similar effects, while stimulus classes group different antecedents that function similarly. This keeps case formulation from becoming overly literal and supports generalization planning.

Scientific attitudes guide how analysts reason about data: determinism, empiricism, experimentation, replication, parsimony, and philosophic doubt. These attitudes are practical safeguards. They prevent teams from overinterpreting short-term improvements, mistaking correlation for function, or defending conclusions that have not held up under repeated observation.

Selectionism is the organizing logic for behavior change in this tradition. Variation occurs in responding, and consequences select which forms are likely to recur. In applied settings, this means clinicians should ask what contingencies are selecting current performance and what new contingencies might select more adaptive repertoires.

Respondent behavior is elicited by antecedent stimuli and is tied to phylogenic preparation and respondent conditioning. Unconditioned stimulus-response relations are present without learning, and neutral stimuli can acquire eliciting functions through pairing. These respondent processes remain relevant in applied work, especially when emotional or physiological reactions affect learning conditions.

Operant behavior is selected by consequences across ontogenic history. Behavior is emitted in context, and its future probability depends on what follows it. This chapter previews the consequence-based processes that later chapters formalize in depth, including reinforcement, punishment, extinction, and stimulus control.

The three-term contingency (SD-R-Sr) is introduced as a compact analytic unit for operant interpretation. Analysts identify antecedent conditions that signal consequence availability, define the response class, and track consequence effects on future behavior. This framework supports consistent case analysis across home, school, clinic, and community environments.

Chapter 2 emphasizes that real-world behavior is often multiply controlled and may include both respondent and operant processes in the same sequence. Good analysis does not force every case into one category prematurely. Instead, it separates control variables and tests interpretations against data.

Finally, Cooper contrasts methodological behaviorism with radical behaviorism and introduces rule-governed behavior as a bridge between language and contingency contact. Radical behaviorism does not exclude private events from analysis; it treats verbal reports about private events as behavior subject to history and context. This prepares readers for later chapters that deepen verbal behavior, motivating operations, and complex stimulus control.

To learn Chapter 2 deeply, rehearse it as a discrimination set: identify the unit of behavior, identify likely controlling variables, classify respondent versus operant features, and justify conclusions using scientific attitudes. That sequence turns vocabulary into usable analysis.`,
    footnotes: {
      x2_1: {
        label: "[1]",
        lines: [
          "CHH Chapter 2, pp. 43–60 (Basic Concepts and Principles); Cooper/Heron/Heward, Applied Behavior Analysis, 3rd ed.; locators align with Pearson Global Edition contents.",
          "TCO fit (6th ed., A–I): mainly Domain A (philosophical foundations) and Domain B (basic concepts and principles). Confirm exact task wording in the official BACB outline.",
          "Overview: positions the chapter as foundational vocabulary for the rest of the text.",
        ],
      },
      x2_2: {
        label: "[2]",
        lines: [
          "CHH Chapter 2, pp. 43–44 — definition of behavior as organism-environment interaction; emphasis on observable, measurable activity.",
          "Contrasts with everyday mentalistic vocabulary that substitutes unobserved agents for environmental histories.",
        ],
      },
      x2_3: {
        label: "[3]",
        lines: [
          "CHH Chapter 2, pp. 43–46 — scientific attitudes introduced with the foundational science framing: determinism, empiricism, experimentation, replication, parsimony, philosophic doubt.",
          "These attitudes discipline interpretation when graphs look convincing but causal stories remain debatable.",
        ],
      },
      x2_4: {
        label: "[4]",
        lines: [
          "CHH Chapter 2, pp. 49–50 onward — selectionism (behavior undergoing variation contacted by selectively arranged consequences across ontogenic histories).",
          "Skinner's selectionist analogy links ontogenic selection of operants with other levels of variation-and-selection accounts.",
        ],
      },
      x2_5: {
        label: "[5]",
        lines: [
          "CHH Chapter 2, pp. 47–48 — respondent (reflexive) behavior elicited by antecedent stimuli plus phylogenic preparation.",
          "Applied contrast: discriminate respondent (elicited) from operant (consequence-selected).",
        ],
      },
      x2_6: {
        label: "[6]",
        lines: [
          "CHH Chapter 2, pp. 47–48 — respondent (classical) conditioning: correlated CS–US presentations can transfer elicitation to previously neutral stimuli.",
          "Foundation for understanding conditioned emotional and physiological relations in applied settings.",
        ],
      },
      x2_7: {
        label: "[7]",
        lines: [
          "CHH Chapter 2, pp. 49–53 — operant behavior defined by contingency contact and ontogenic histories rather than phylogenic reflex alone.",
          "Previews reinforcement, punishment, extinction, and stimulus control developed in Parts 4–7 of CHH.",
        ],
      },
      x2_8: {
        label: "[8]",
        lines: [
          "CHH Chapter 2, pp. 49–53 introduces the analytic unit verbally; fuller contingency and measurement exposition continues in Chapter 4+ (measuring pp. 94–119 onward in CHH contents).",
          "Three-term contingency (SD–R–Sr) names the operant unit used throughout Cooper et al.",
        ],
      },
      x2_9: {
        label: "[9]",
        lines: [
          "CHH Chapter 2, pp. 58–59 — interplay of respondent and operant phenomena in recognizable human repertoires (neither class exhausts messy cases alone).",
        ],
      },
      x2_10: {
        label: "[10]",
        lines: [
          "CHH Chapter 2, pp. 44–46 — methodological behaviorism restricts primary scientific discourse to observable stimuli/responses versus radical behaviorism's treatment of verbal privacy.",
          "CHH Chapter 2, pp. 58–59 — rule-governed behavior bridging verbal governance and contingency contact; motivating operations explored systematically beginning CHH Chapter 17, pp. 412–431.",
        ],
      },
    },
    codexFootnoteRefs: [
      { afterSentenceIndex: 0, ref: "x2_1" },
      { afterSentenceIndex: 1, ref: "x2_2" },
      { afterSentenceIndex: 2, ref: "x2_3" },
      { afterSentenceIndex: 3, ref: "x2_4" },
      { afterSentenceIndex: 4, ref: "x2_5" },
      { afterSentenceIndex: 5, ref: "x2_6" },
      { afterSentenceIndex: 6, ref: "x2_7" },
      { afterSentenceIndex: 7, ref: "x2_8" },
      { afterSentenceIndex: 8, ref: "x2_9" },
      { afterSentenceIndex: 9, ref: "x2_10" },
    ],
    codexPlainLanguageSummary: {
      heading: "Plain language — conversational recap",
      intro:
        "Put simply, Chapter 2 is your operating system for the rest of ABA. If you can explain these concepts in plain language and then apply them to novel scenarios, later chapters become much easier to learn and use.",
      chunks: [
        {
          subtitle: "What this chapter is really doing",
          segments: [
            {
              type: "text",
              text: "Chapter 2 is the setup chapter for everything that follows. It gives teams shared language so they can describe behavior consistently, score behavior consistently, and debate interpretation with evidence instead of opinion. Behavior is defined as organism-environment interaction, which keeps analysis anchored to things that can be observed and measured ",
            },
            { type: "footnote", ref: "x2_2" },
            {
              type: "text",
              text: ". It also introduces dimensional and class-based thinking so teams avoid overfocusing on one topography and missing functional patterns.",
            },
          ],
        },
        {
          subtitle: "Scientific attitudes in practice",
          segments: [
            {
              type: "text",
              text: "The scientific attitudes in this chapter are practical quality controls: assume lawful causes, measure directly, test hypotheses when possible, replicate effects, prefer simpler explanations when they fit, and revise conclusions when better evidence arrives ",
            },
            { type: "footnote", ref: "x2_3" },
            {
              type: "text",
              text: ". Selectionism adds the key applied question: what contingencies are selecting this pattern now, and what contingencies would select a more adaptive alternative over time ",
            },
            { type: "footnote", ref: "x2_4" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Respondent vs operant, quickly and accurately",
          segments: [
            {
              type: "text",
              text: "Respondent behavior is elicited by antecedent stimuli and includes conditioned reflex relations after pairing procedures ",
            },
            { type: "footnote", ref: "x2_5" },
            {
              type: "text",
              text: "; respondent conditioning explains how previously neutral cues can acquire eliciting functions ",
            },
            { type: "footnote", ref: "x2_6" },
            {
              type: "text",
              text: ". Operant behavior is selected by consequences across lifetime learning history ",
            },
            { type: "footnote", ref: "x2_7" },
            {
              type: "text",
              text: ". The three-term contingency gives a practical structure for this analysis in applied contexts ",
            },
            { type: "footnote", ref: "x2_8" },
            {
              type: "text",
              text: ". Real cases often mix respondent and operant elements, so interpretation should stay data-driven rather than forced into one label too early ",
            },
            { type: "footnote", ref: "x2_9" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Philosophy and language bridge",
          segments: [
            {
              type: "text",
              text: "Chapter 2 also fixes a common misconception: radical behaviorism does not ban discussion of private events. It treats reports about private events as behavior that can be analyzed in context. Rule-governed behavior is introduced as a language-based route to behavior change that may differ from direct contingency-shaped learning ",
            },
            { type: "footnote", ref: "x2_10" },
            {
              type: "text",
              text: ". This chapter is the conceptual base you keep reusing in measurement, assessment, verbal behavior, and intervention design.",
            },
          ],
        },
        {
          subtitle: "How to study this chapter for BCBA prep",
          segments: [
            {
              type: "text",
              text: "Use a four-step self-check on every vignette: define the behavior in observable terms, identify the likely contingency class, name which scientific attitude protects interpretation, and explain why a competing interpretation is weaker. If you can do that quickly and accurately, you are learning Chapter 2 the way the exam expects.",
            },
          ],
        },
        {
          subtitle: "High-Yield Confusion Points",
          segments: [
            {
              type: "text",
              text: "High-yield confusion points in this chapter include confusing respondent elicitation with operant selection, treating SD as a generic antecedent rather than a discriminative relation, and collapsing methodological and radical behaviorism into one stance. Resolve them by identifying the history implied in the vignette before selecting a label.",
            },
          ],
        },
      ],
    },
    supplementalFootnotes: {
      ch2_v1: {
        label: "[V1]",
        lines: [
          "CHH Chapter 2, pp. 43–44.",
          "Behavior: interaction of the organism with the environment; activity that can be observed and measured in principle.",
        ],
      },
      ch2_v2: {
        label: "[V2]",
        lines: [
          "CHH Chapter 2, pp. 43–46.",
          "Determinism: behavior and other natural events are assumed to be lawful and discoverable—not capricious.",
        ],
      },
      ch2_v3: {
        label: "[V3]",
        lines: [
          "CHH Chapter 2, pp. 43–46.",
          "Empiricism: decisions rest on objective observation and measurement rather than authority alone.",
        ],
      },
      ch2_v4: {
        label: "[V4]",
        lines: [
          "CHH Chapter 2, pp. 49–53.",
          "Selectionism: behavior understood as subjected to selective pressure from contingent consequences.",
        ],
      },
      ch2_v5: {
        label: "[V5]",
        lines: [
          "CHH Chapter 2, pp. 47–48.",
          "Respondent behavior: elicited by antecedent stimuli; reflexive relations with phylogenic and/or respondent-conditioning histories.",
        ],
      },
      ch2_v6: {
        label: "[V6]",
        lines: [
          "CHH Chapter 2, pp. 49–53.",
          "Operant behavior: influenced by its consequences; shaped within the organism’s ontogenic learning history.",
        ],
      },
      ch2_v7: {
        label: "[V7]",
        lines: [
          "CHH Chapter 2, pp. 47–48.",
          "Phylogenic behavior: species history supplies unconditioned reflex forms before individual learning.",
        ],
      },
      ch2_v8: {
        label: "[V8]",
        lines: [
          "CHH Chapter 2, pp. 49–53.",
          "Ontogenic behavior: individual learning history; especially relevant to operant selection.",
        ],
      },
      ch2_v11: {
        label: "[V11]",
        lines: [
          "CHH Chapter 2, pp. 44–46 — methodological contrasts within the foundational science narration; fuller philosophy exposition CHH Chapter 1, pp. 11–18.",
          "Methodological behaviorism: restricts primary scientific vocabulary to publicly observable stimuli and responses; private events sidelined unless externally anchored.",
        ],
      },
      ch2_kc4: {
        label: "[KC4]",
        lines: [
          "CHH Chapter 2, pp. 44–46.",
          "Methodological behaviorism contrasts with radical behaviorism on privacy: whereas methodological strains hesitate on unobservable events, radical behaviorism analyzes verbal reports about privacy as behaving.",
        ],
      },
      ch2_v9: {
        label: "[V9]",
        lines: [
          "CHH Chapter 2, pp. 44–46, 58–59.",
          "Radical behaviorism: analyzes private events as behavior under environmental control rather than excluding them from science by fiat.",
        ],
      },
      ch2_v10: {
        label: "[V10]",
        lines: [
          "CHH Chapter 2, pp. 58–59; verbal mediation elaborated extensively in subsequent units (e.g., CHH Part 7).",
          "Rule-governed behavior: controlled by verbal descriptions of contingencies; contrasts with purely contingency-shaped performances.",
        ],
      },
      ch2_kc1: {
        label: "[KC1]",
        lines: [
          "CHH Chapter 2, pp. 43–46.",
          "Scientific attitudes discipline how behavior analysts interpret data and responsibility when claims affect clients.",
        ],
      },
      ch2_kc2: {
        label: "[KC2]",
        lines: [
          "CHH Chapter 2, pp. 47–53.",
          "Elicited versus selected-by-consequences is the primary structural distinction between respondent and operant classes.",
        ],
      },
      ch2_kc3: {
        label: "[KC3]",
        lines: [
          "CHH Chapter 2, pp. 44–46, 58–59.",
          "Radical behaviorism reframes privacy as part of the natural subject matter—not as mystical exemptions.",
        ],
      },
      ch2_exam_ab: {
        label: "[EX]",
        lines: [
          "Test Content Outline (6th ed., effective 2025): Chapter 2 content aligns primarily with Domain A (philosophical foundations) plus Domain B (concepts/principles—including respondent vs operant, contingency vocabulary preview).",
          "Use BACB PDF + Cooper together; rationales herein are study aids—not an official syllabus.",
        ],
      },
      ch2_goals_sci: {
        label: "[SG]",
        lines: [
          "Scientific attitudes in CHH (determinism, empiricism, experimentation, replication, parsimony, philosophic doubt, selectionism framing) underpin defensible interpretation.",
          "Practice explaining each attitude with a short classroom or clinic example.",
        ],
      },
      ch2_ethics_bridge: {
        label: "[EB]",
        lines: [
          "When philosophy items blend with truthful practice (e.g., overstating causal proof), integrate Domain E (Ethics & Professional Issues) alongside CHH fundamentals.",
          "Chapter 2 sets analytic humility; Ethics Code grounds what you advertise to caregivers.",
        ],
      },
      ch2_sdsr: {
        label: "[3T]",
        lines: [
          "CHH Chapter 2 previews SD–R–Sr as mnemonic for analytic units; fuller treatment appears in contingency and reinforcement chapters.",
          "Practice separating three-term contingency (operant unit) from respondent elicitation and from vague “antecedent” wording.",
        ],
      },
    },
    vocabularySection: {
      heading: "VOCABULARY — Chapter 2 anchors",
      intro:
        "Use each definition in realistic examples so elicited vs consequence-selected behavior, scientific attitudes, and philosophy contrasts stay distinct. Markers cite Cooper/Heron/Heward.",
      entries: [
        { term: "Behavior (technical)", definition: "Organism-environment interaction observable and measurable—not a covert homunculus.", footnoteRef: "ch2_v1" },
        { term: "Determinism", definition: "Assumption that behavior has discoverable causes and lawful relations.", footnoteRef: "ch2_v2" },
        { term: "Empiricism", definition: "Rooting conclusions in systematic observation rather than authoritative assertion.", footnoteRef: "ch2_v3" },
        { term: "Selectionism", definition: "Behavior understood as undergoing variation exposed to selective pressure from consequences.", footnoteRef: "ch2_v4" },
        { term: "Respondent behavior", definition: "Reflex-like behavior elicited by stimuli; phylogenic and respondent-conditioning histories.", footnoteRef: "ch2_v5" },
        { term: "Operant behavior", definition: "Behavior strengthened, weakened, or sculpted by its consequence history.", footnoteRef: "ch2_v6" },
        { term: "Phylogenic behavior", definition: "Species-given reflex substrates present before individualized learning.", footnoteRef: "ch2_v7" },
        { term: "Ontogenic behavior", definition: "Lifetime learning legacy—especially selection of operants by contingencies.", footnoteRef: "ch2_v8" },
        { term: "Radical behaviorism", definition: "Skinnerian philosophy treating private verbal activity as behaving, not banning inner talk.", footnoteRef: "ch2_v9" },
        { term: "Rule-governed behavior", definition: "Instruction-following mediated by verbal descriptions of what pays off or costs.", footnoteRef: "ch2_v10" },
        { term: "Methodological behaviorism", definition: "Emphasizes public observables first; hesitant to admit private events without external anchors.", footnoteRef: "ch2_v11" },
      ],
    },
    keyConceptsSection: {
      heading: "KEY CONCEPTS — Chapter 2",
      intro:
        "Practice contrasting philosophical foundations with basic concepts—then apply the same ideas in Activities and the worksheet. Markers summarize condensed citations.",
      concepts: [
        {
          title: "TCO domains A & B — vocabulary and vignette hinges",
          segments: [
            {
              type: "text",
              text: "Connect Cooper’s wording to how assessment cases mix attitudes, contingency classes, and ethics: definitions should map to observable histories ",
            },
            { type: "footnote", ref: "ch2_exam_ab" },
            {
              type: "text",
              text: ". Pair attitudes with concise stories—not labels without context ",
            },
            { type: "footnote", ref: "ch2_goals_sci" },
            {
              type: "text",
              text: ". When vignettes flirt with deceptive certainty, Ethics (Domain E) applies alongside measurement honesty ",
            },
            { type: "footnote", ref: "ch2_ethics_bridge" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Exam hinge — SD vs “just an antecedent”",
          segments: [
            {
              type: "text",
              text: "The three-term contingency belongs to operant bookkeeping; respondent relations foreground CS–US prediction—mixing jargon between columns produces attractive distractors on high-stakes items ",
            },
            { type: "footnote", ref: "ch2_sdsr" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Scientific attitudes anchor professional humility",
          segments: [
            { type: "text", text: "Replication, parsimony, and philosophic doubt keep supervisors from treating single flashy graphs as eternal truth when stakes involve vulnerable learners" },
            { type: "footnote", ref: "ch2_kc1" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Elicited versus consequence-selected behavior",
          segments: [
            { type: "text", text: "Exam items often pivot on whether antecedents reflexively evoke behavior (respondent) or consequences stamp in future likelihood (operant). Topography alone does not decide" },
            { type: "footnote", ref: "ch2_kc2" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Privacy under radical behaviorism",
          segments: [
            { type: "text", text: "Trainees sometimes mishear 'behaviorism' as banning anxiety talk; Chapter 2 reframes reports as verbal behavior with histories worth analyzing rather than soul weather off limits" },
            { type: "footnote", ref: "ch2_kc3" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Methodological versus radical contrasts",
          segments: [
            { type: "text", text: "Exam distractors exploit caricatures-both philosophies reject unexplained ghost-in-machine causes, yet they diverge sharply on whether science may analyze verbal reports about anxiety as behavior shaped by histories" },
            { type: "footnote", ref: "ch2_kc4" },
            { type: "text", text: "." },
          ],
        },
      ],
      plainLanguageSummary: {
        heading: "Key concepts — plain-language companion",
        intro:
          "Use this companion after the Key Concepts headings above. The goal is applied fluency: explain each idea in plain language, cite Cooper when challenged, and defend your answer on novel vignettes under exam pacing.",
        chunks: [
          {
            subtitle: "Domains A and B in practice",
            segments: [
              { type: "text", text: "Chapter 2 feeds Domain A (philosophical foundations) and Domain B (basic concepts). Pair definitions with vignette reading—not isolated flashcard recall " },
              { type: "footnote", ref: "ch2_exam_ab" },
              { type: "text", text: ". Rehearse scientific goals and attitudes until you can name which attitude protects a given interpretation " },
              { type: "footnote", ref: "ch2_goals_sci" },
              { type: "text", text: ", and add Domain E when a stem overstates certainty or misrepresents scope " },
              { type: "footnote", ref: "ch2_ethics_bridge" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Operant bookkeeping vs respondent elicitation",
            segments: [
              { type: "text", text: "The three-term contingency belongs to operant analysis; respondent relations foreground CS–US prediction. Mixing jargon between columns is a common high-yield distractor " },
              { type: "footnote", ref: "ch2_sdsr" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Scientific attitudes as quality control",
            segments: [
              { type: "text", text: "Replication, parsimony, and philosophic doubt keep teams from treating one flashy graph as final proof when vulnerable learners are involved " },
              { type: "footnote", ref: "ch2_kc1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Elicited vs consequence-selected behavior",
            segments: [
              { type: "text", text: "Most classification items pivot on whether antecedents reflexively evoke behavior (respondent) or consequences shape future likelihood (operant). Topography alone does not decide " },
              { type: "footnote", ref: "ch2_kc2" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Privacy under radical behaviorism",
            segments: [
              { type: "text", text: "Radical behaviorism does not ban anxiety talk; it treats verbal reports as behavior shaped by history and available for analysis " },
              { type: "footnote", ref: "ch2_kc3" },
              { type: "text", text: ". Methodological behaviorism is stricter about private events—know which philosophy the stem implies " },
              { type: "footnote", ref: "ch2_kc4" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "High-Yield Confusion Points",
            segments: [
              { type: "text", text: "High-yield confusion points in this chapter include respondent versus operant misclassification, SD versus generic antecedent wording, and flattening methodological and radical behaviorism into one stance. Resolve them by identifying the history the stem implies before choosing." },
              { type: "footnote", ref: "ch2_kc2" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch2_kc4" },
              { type: "text", text: "." },
            ],
          },
        ],
      },
    },
    mts: [
      {
        sample_stimulus:
          "A puff of air to the eye reliably produces a blink before any conditioning trials.",
        comparison_options: ["Operant behavior", "Respondent behavior", "Rule-governed behavior"],
        correct_match: "Respondent behavior",
        error_feedback:
          "Respondent behavior is reflexively elicited by antecedent stimuli; no reinforcement history is required for the blink-elicitation relation.",
      },
      {
        sample_stimulus:
          "Delivery of praise only increases email responsiveness after weeks where praise followed timely replies.",
        comparison_options: ["Respondent behavior", "Operant behavior", "Respondent extinction"],
        correct_match: "Operant behavior",
        error_feedback:
          "Operant behavior is strengthened by its consequence history — praise contingent on emailing demonstrates reinforcement.",
      },
      {
        sample_stimulus:
          "Faculty rave about flashy graphs from one pilot cohort but refuse replication studies or skeptical reviews; they declare the question closed forever.",
        comparison_options: [
          "Philosophic doubt + replication ethos",
          "Parsimony forbidding explanations",
          "Determinism denying causes",
          "Empiricism rejecting measurement",
        ],
        correct_match: "Philosophic doubt + replication ethos",
        error_feedback:
          "Scientific attitudes from CHH emphasize replication and skepticism—not treating preliminary results as immutable dogma.",
      },
      {
        sample_stimulus:
          "Bell rings before snack enough times that salivation begins to the bell alone; puff-to-eye blink unaffected. New relation classifies MOST as:",
        comparison_options: [
          "Classically conditioned respondent relation",
          "Operant extinction",
          "Respondent phylogenic reflex only forever",
          "Automatic reinforcement unrelated to pairing",
        ],
        correct_match: "Classically conditioned respondent relation",
        error_feedback:
          "Respondent conditioning transfers elicitation to previously neutral stimuli that predict biologically potent stimuli.",
      },
      {
        sample_stimulus:
          "Teacher says “raise hand quietly for computer time”; students comply before natural reinforcers contacted during daily routines. MOST accurate label:",
        comparison_options: ["Rule-governed behavior bridging to contingencies", "Pure phylogenic respondent", "Unconditioned operant only"],
        correct_match: "Rule-governed behavior bridging to contingencies",
        error_feedback:
          "Verbally mediated instruction following anticipates payoff—distinct from respondent reflex arcs alone.",
      },
      {
        sample_stimulus:
          "Consultant rejects adding extra hypothetical personality traits because baseline reinforcement history already predicts data without extras.",
        comparison_options: [
          "Parsimony — simpler adequate account preferred",
          "Empiricism — bans observation entirely",
          "Determinism — rejects lawful cause",
          "Replication — forbids duplication",
        ],
        correct_match: "Parsimony — simpler adequate account preferred",
        error_feedback:
          "Parsimony counsels simplest sufficient explanation aligning with observable histories.",
      },
      {
        sample_stimulus:
          "Poster labels any antecedent as SD without documenting historically occasioned reinforcement. Exam-style error?",
        comparison_options: [
          "SD requires history where stimulus signals available reinforcement for the response class",
          "SD means any stimuli preceding behavior automatically",
          "SD applies only to respondent US",
          "SD forbids measurement",
        ],
        correct_match: "SD requires history where stimulus signals available reinforcement for the response class",
        error_feedback:
          "Discriminative stimuli are defined by contingency histories—not by mere temporal priority.",
      },
      {
        sample_stimulus:
          "A BCBA asserts “genes choose tokens each session” instead of reinforcement schedules visibly arranged in the classroom. Primary violation:",
        comparison_options: [
          "Substituting mentalistic/agentic substitutes for observable environmental histories",
          "Demonstrating analytic integrity",
          "Honoring methodological behaviorism caricature banning talk",
          "Showing parsimony",
        ],
        correct_match: "Substituting mentalistic/agentic substitutes for observable environmental histories",
        error_feedback:
          "Exam items reward tracing control to observable contingencies—not unexplained choosing agents.",
      },
    ],
    chainTitle: "Science vocabulary to practice workflow",
    chainFragments: [
      { id: "a", text: "Operationalize referrable behaviors observers can score without mind-reading." },
      { id: "b", text: "Classify instances as respondent (elicited) versus operant (consequence-selected)." },
      { id: "c", text: "Note phylogenic reflex substrates versus ontogenic learning histories." },
      { id: "d", text: "Flag claims needing replication, simpler accounts, or richer measurement (CHH attitudes)." },
    ],
    chainOrder: ["a", "b", "c", "d"],
    vocabularyMatchInstructions:
      "Treat each stem as a concept-teaching prompt: identify the definition, say why it fits, and rule out at least one close distractor before selecting your answer.",
    matchActivityInstructions:
      "For each Chapter 2 vignette, classify the best concept match and briefly justify your choice using observable behavior language, controlling variables, and scientific attitudes.",
    chainActivityInstructions:
      "Build the chain in the same order you should think clinically: define behavior clearly, classify control relations, separate phylogenic from ontogenic influences, then test claims with scientific attitudes.",
    worksheet: {
      title: "CHH Chapter 2 — measurement stance",
      instructions:
        "Use each item as a mini-teaching drill: label the concept, cite one concrete reason from the vignette, then name the most tempting wrong option and why it is wrong. This is the Chapter 2 exam-thinking routine.",
      scenario:
        "Scenario A — A trainee reports exam anxiety rising but only graphs bathroom breaks because they are easy to count—she cites Cooper et al. Chapter 2 emphasis on observables.",
      scenario_follow_up:
        "Scenario B — Laboratory blink.\n\nAn air puff contacts the cornea and an immediate blink occurs before any respondent-conditioning trials.\n\nScenario C — Email reinforcement.\n\nPraise arrives only after timely replies across weeks; reply latency tightens progressively.",
      fields: [
        {
          id: "response_1",
          label: "Scenario A · Which stance best fits?",
          options: [
            "Prefer covert mediators over observable acts",
            "Operationalize observable behavior aligned with referral concerns",
            "Rely exclusively on caregiver verbal reports without corroboration",
          ],
          correct: "Operationalize observable behavior aligned with referral concerns",
        },
        {
          id: "response_2",
          label: "Scenario A blurting-after-hand-raise vignette (same trainee caseload): Respondent vs operant?",
          options: ["Respondent", "Operant", "Neither"],
          correct: "Operant",
        },
        {
          id: "response_3",
          label: "Scenario B · Blink to air puff before learning trials:",
          options: ["Respondent behavior", "Operant behavior", "Rule-governed behavior only"],
          correct: "Respondent behavior",
        },
        {
          id: "response_4",
          label: "Scenario C · Praise contingent histories shaping reply timing:",
          options: ["Operant behavior", "Respondent behavior", "Neither class applies"],
          correct: "Operant behavior",
        },
        {
          id: "response_5",
          label: "Contrast · Phylogenic substrates MOST closely describe:",
          options: [
            "Species-level reflex forms present before individualized learning",
            "Lifetime contingency histories stamping in novel operants",
            "Verbally mediated instructional control exclusively",
            "Whole-interval sampling artifacts",
          ],
          correct: "Species-level reflex forms present before individualized learning",
        },
        {
          id: "response_6",
          label: "Contrast · Selectionism emphasizes:",
          options: [
            "Environmental consequences differentially retaining behavioral variants across ontogenic time",
            "Banning measurement whenever caregivers disagree",
            "Exclusive reliance on respondent extinction",
            "Eliminating replication obligations",
          ],
          correct:
            "Environmental consequences differentially retaining behavioral variants across ontogenic time",
        },
        {
          id: "response_7",
          label: "Exam-style · Philosophic doubt MOST means analysts:",
          options: [
            "Treat today's interpretations as provisional—open better evidence—even when yesterday's slogans sounded final",
            "Reject all data outright forever",
            "Trust charisma whenever graphs trend upward once",
            "Ban replication as unprofessional",
          ],
          correct:
            "Treat today's interpretations as provisional—open better evidence—even when yesterday's slogans sounded final",
        },
        {
          id: "response_8",
          label: "Scenario · Staff pair bell then snack repeatedly; salivation to bell rises. phylogenic respondent relation vs newer conditioning?",
          options: [
            "New respondent conditioning layered on phylogenic unconditioned relations",
            "Operant extinction of bell only",
            "Rule-governed behavior exclusively without pairing",
            "Generality failure only",
          ],
          correct: "New respondent conditioning layered on phylogenic unconditioned relations",
        },
        {
          id: "response_9",
          label: "Ethics bridge (study Domain E).\n\nA clinician tells parents operant extinction “rewires amygdalas overnight guaranteed.” Besides conceptual sloppiness, primary professional concern?",
          options: [
            "Misleading certainty / misrepresentation—incompatible with truthful scope statements",
            "Respondent topography alone",
            "Automatic demonstration of analytic control",
            "Proof of cultural competence without further training",
          ],
          correct:
            "Misleading certainty / misrepresentation—incompatible with truthful scope statements",
        },
        {
          id: "response_10",
          label: "Scenario · Loud noise startles infants identically worldwide before learning. BEST label:",
          options: [
            "Phylogenic preparation for respondent relations",
            "Rule-governed compliance",
            "Operant punishment effect only",
            "MO abolishing reinforcement only",
          ],
          correct: "Phylogenic preparation for respondent relations",
        },
        {
          id: "response_11",
          label: "Experimentation attitude (scientific repertoire) MOST stresses:",
          options: [
            "Actively arranging comparisons to clarify causes when ethically feasible—not only passive observation forever",
            "Avoiding manipulated contrasts whenever possible",
            "Replacing caregiver consent indefinitely",
            "Publishing without measurement",
          ],
          correct:
            "Actively arranging comparisons to clarify causes when ethically feasible—not only passive observation forever",
        },
        {
          id: "response_12",
          label: "Three-term preview · SD MOST differs from respondent CS in that:",
          options: [
            "SD historically signals reinforcement availability for a response class—not merely predicts an eliciting US reflex relation",
            "SD never involves history",
            "CS never involves pairing",
            "They are interchangeable labels with no functional difference",
          ],
          correct:
            "SD historically signals reinforcement availability for a response class—not merely predicts an eliciting US reflex relation",
        },
      ],
      remediationLog:
        "Rebuild Chapter 2 fluency by rehearsing one sequence repeatedly: observable definition -> respondent vs operant classification -> phylogenic vs ontogenic analysis -> scientific-attitude check -> ethics and representation check. Then re-run missed items.",
    },
    bdsBank: CHAPTER_02_QUIZ_BANK,
  },
  MOD05_BLUEPRINT,
  {
    id: "mod055",
    chapterNumber: 4,
    activityPrefix: 2055,
    title: "Measuring Behavior",
    codexHeading: "READING — Chapter 4 (Measuring Behavior)",
    codexIntro: `Chapter 4 establishes how behavior analysts turn referral questions into quantified dimensions trustworthy graphs can defend in multidisciplinary meetings—not decorative dashboards divorced from stakeholder stakes.

Operational definitions articulate observable beginnings, endings, and topography contours so trained observers tally the intended response class; measurement discipline collapses if definitions drift while denominators inflate.

Measurement serves multiple analytic roles—documenting pretreatment levels and variability, contrasting intervention-linked change, probing procedural fidelity, underwriting research safeguards, aligning legal archives—yet every plot should tether to analytic questions caregivers and educators recognize aloud, not to whichever column an app defaulted overnight.

Dimensional vocabulary begins with discrete counts and rates scaled across observation denominators, cumulative durations once onset-offset cues qualify engagement, latency from signaled opportunities to compliant first responses, interresponse spacing between repetitions belonging to identical classes, magnitude when intensity distinguishes clinically decisive variations under shared topography labels—and analysts mix dimensions when hypotheses demand parallel portraits.

Repeated baseline probes capture typical elevations plus variability honest phase comparisons isolate rather than anecdotes retrofit afterward.

Whenever observers realistically span entire schedules continuously, discrete event tallies timed duration aggregates or latency-tracking protocols summarize behavior without collapsing observation windows into blunt interval proxies prematurely.

Whole-interval aggregation credits affirmative marks only if behavior occupies an entire coarse slice—a rule that typically minimizes brief fierce bursts slipping between boundaries—while partial-interval scoring rewards presence whenever behavior touches part of any slice—a habit that routinely exaggerates prevalence relative to continuous gauges or truthful duration bookkeeping.

Momentary probes score instantaneous glimpses dispersed across coarse intervals pragmatically approximating prevalence yet forfeiting fidelity between glimpses absent transparent caveat language.

Permanent-product inventories extend measurement into tangible residuals—completed worksheets, damaged materials tallied—as long as topography definitions align plainly with each surrogate, and technology-assisted coding makes coder fatigue and replay limits visible to consumers.

Interpretive humility plus phased observer calibration primes teams for Cooper’s Chapter 5 interobserver agreement exposition quantifying definitional fidelity before graphs parade certainty.`,
    footnotes: {
      x4_1: {
        label: "[1]",
        lines: [
          "CHH Chapter 4, pp. 94–96 — measurement attaches numbers to dimensional properties underpinning analytic decisions (Pearson Global 3rd ed. TOC anchors).",
          "This chapter maps primarily to Task List Domain C (measurement, display, analytic integrity)—and to Domain E when honestly reporting approximation limits to caregivers and teams. Verify exact wording in the official BACB outline PDF.",
          "Workbook note (not quoted from CHH)—clusters purposes before dimensional tactics align with assigned CHH passages.",
        ],
      },
      x4_2: {
        label: "[2]",
        lines: [
          "CHH Chapter 3, pp. 77–85 — operational definitions specify observable topography boundaries aligning observers before denominators inflate.",
          "CHH Chapter 4, pp. 94 onward — instrumentation discipline assumes definitional rehearsals occurred upstream.",
        ],
      },
      x4_3: {
        label: "[3]",
        lines: [
          "CHH Chapter 4, pp. 94–96 — enumerating measurement aims from assessment through evaluation safeguarding accountability narratives.",
          "Measurement purposes enumerated in the workbook distill Cooper’s catalog—they do not replace verbatim assigned reading passages.",
        ],
      },
      x4_4: {
        label: "[4]",
        lines: [
          "CHH Chapter 4, pp. 94–96 — foundational dimensions overview: frequency/rate, duration, latency, IRT, magnitude.",
          "Referral hypotheses steer which rulers deserve primacy—not spreadsheet defaults drifting silently.",
        ],
      },
      x4_5: {
        label: "[5]",
        lines: [
          "CHH Chapter 4, pp. 94–96 — repeated baseline documentation captures variability before intensive intervention contrasts.",
          "Comparable anchors thwart retrofit storytelling once enthusiasm spikes prematurely.",
        ],
      },
      x4_6: {
        label: "[6]",
        lines: [
          "CHH Chapter 4, pp. 96–105 — continuous recording procedures tally discrete occurrences, durations, latency spans without coarse interval collapsing when staffing permits realistically.",
        ],
      },
      x4_7: {
        label: "[7]",
        lines: [
          "CHH Chapter 4, pp. 106–109 — interval recording variants (whole-interval, partial-interval) embed predictable directional biases summarized alongside assigned readings.",
          "Momentary glimpses summarized immediately following interval exposition in workbook cadence aligning CHH narration.",
        ],
      },
      x4_8: {
        label: "[8]",
        lines: [
          "CHH Chapter 4, pp. 107–109 — momentary time sampling instantaneous probes approximate prevalence yet risk blind intervals responsibly caveated aloud.",
          "CHH Chapter 4, pp. 113–119 — permanent-product and technology-assisted ancillary measures bridging observation gaps responsibly.",
        ],
      },
      x4_9: {
        label: "[9]",
        lines: [
          "CHH Chapter 4, pp. 104–119 — practicality, accuracy, fidelity, technology notes foreground interpretive humility before graphs parade certainty prematurely.",
          "CHH Chapter 5, pp. 123–132 — interobserver agreement quantifies definitional fidelity after Chapter 4 recording tactics stabilize responsibly.",
          "Exam tie-in: calibrated observers plus IOA are still Domain C measurement/scoring integrity—even when vignettes cite Chapter 5 for the computations.",
        ],
      },
    },
    codexFootnoteRefs: [
      { afterSentenceIndex: 0, ref: "x4_1" },
      { afterSentenceIndex: 1, ref: "x4_2" },
      { afterSentenceIndex: 2, ref: "x4_3" },
      { afterSentenceIndex: 3, ref: "x4_4" },
      { afterSentenceIndex: 4, ref: "x4_5" },
      { afterSentenceIndex: 5, ref: "x4_6" },
      { afterSentenceIndex: 6, ref: "x4_7" },
      { afterSentenceIndex: 7, ref: "x4_8" },
      { afterSentenceIndex: 8, ref: "x4_9" },
    ],
    codexPlainLanguageSummary: {
      heading: "Plain language — conversational recap",
      intro:
        "Put simply, Chapter 4 teaches you to turn referral questions into defensible numbers: pick the dimension stakeholders actually asked about, lock definitions independent observers can share, disclose method limits honestly, and establish baseline variability before celebrating change. Domain C and Domain E braid here—beautiful graphs without caveat culture fail supervisory audit.",
      chunks: [
        {
          subtitle: "Numbers serve the referral question",
          segments: [
            {
              type: "text",
              text: "Measurement exists so teams can defend quantities in the same meetings where caregivers describe harm—not so analysts can decorate dashboards. ",
            },
            { type: "footnote", ref: "x4_1" },
            {
              type: "text",
              text: " Chapter 4 ties every display to analytic questions stakeholders already named during assessment and referral work, and it catalogs the usual reasons behavior analysts measure at all: documenting baseline and evaluating change, checking procedural integrity, supporting research and legal records, and related aims you should be able to state aloud for each graph ",
            },
            { type: "footnote", ref: "x4_3" },
            {
              type: "text",
              text: ".\n\nOperational definitions are rehearsed mainly in Chapter 3, but Chapter 4 assumes they are locked first: observers need observable onset, offset, and topography before any rate or duration means anything independent across people ",
            },
            { type: "footnote", ref: "x4_2" },
            {
              type: "text",
              text: ". After definitions hold, you pick dimensional vocabulary that mirrors the referral worry. Rate or frequency answers how densely incidents arrive in time; duration sums how long behavior occupies the clock once onset–offset rules engage; latency tracks elapsed time from a specified opportunity to the first qualified response; interresponse time disciplines spacing between successive instances of the same class; magnitude matters when intensity varies clinically beneath a shared label ",
            },
            { type: "footnote", ref: "x4_4" },
            {
              type: "text",
              text: ".\n\nBaseline measurement is deliberately repetitive sampling of pretreatment level and variability so later phases contrast against honest anchors instead of retrofit hero stories spun after a packaged curriculum ships ",
            },
            { type: "footnote", ref: "x4_5" },
            { type: "text", text: "." },
          ],
        },
        {
          subtitle: "Continuous fidelity, honest shortcuts",
          segments: [
            {
              type: "text",
              text: "When observers can stay with the session, continuous procedures are generally preferable: event recording counts discrete instances; duration protocols aggregate time engaged; latency procedures clock initiation delays—each preserves more information than collapsing the day into coarse interval guesses before you must ",
            },
            { type: "footnote", ref: "x4_6" },
            {
              type: "text",
              text: ". Real schools often cannot fund that fidelity everywhere, so discontinuous schedules trade observer minutes for approximation while printing known distortion onto summaries.\n\nWhole-interval recording credits an interval only if behavior occupies the entire slice—often silencing brief bursts that never blanket a whole minute. Partial-interval recording credits behavior that merely touches part of a slice—often inflating how continuously behavior appears compared with continuous sampling or duration truth. Momentary time sampling scores instantaneous glimpses and therefore misses events between probes unless conference language admits the blind spots alongside the graph ",
            },
            { type: "footnote", ref: "x4_7" },
            {
              type: "text",
              text: ". Saying which tactic you used—and which direction it biases the story—is part of mastery, not an afterthought.",
            },
          ],
        },
        {
          subtitle: "Artifacts, tech, humility, Chapter 5 IOA bridge",
          segments: [
            {
              type: "text",
              text: "When live coding thins out but behavior still leaves traces, permanent-product measurement turns to tangible outcomes—completed assignments, inventoried damage, other residuals—so long as definitions plainly tie each artifact to the target behavior class; video and technology extend reach but shift workload, fatigue, and interpretation rules you should disclose beside any trend line ",
            },
            { type: "footnote", ref: "x4_8" },
            {
              type: "text",
              text: ". Step back for the chapter’s broader accuracy, practicality, and fidelity cautions before graphs parade certainty.\n\nFinally, humility about shortcuts primes Chapter 5: once recording tactics stabilize, interobserver agreement quantifies whether independent observers implement the same operational definition when they score identical samples ",
            },
            { type: "footnote", ref: "x4_9" },
            {
              type: "text",
              text: ". Chapter 4 builds disciplined measurement; Chapter 5 asks whether multiple humans actually share that discipline before graphs claim victory.",
            },
          ],
        },
        {
          subtitle: "High-Yield Confusion Points",
          segments: [
            {
              type: "text",
              text: "High-yield confusion points in this chapter include confusing rate with duration, treating partial-interval totals as unbiased prevalence, and selecting recording tactics that do not match staffing or topography. Resolve them by naming the clinical question first, then the dimension, then the tactic and its caveat.",
            },
          ],
        },
      ],
    },
    supplementalFootnotes: {
      ch4_v1: {
        label: "[V1]",
        lines: [
          "CHH Chapter 4, pp. 94–96.",
          "Frequency / rate: counts—or counts scaled per denominators answering how densely episodes recur.",
        ],
      },
      ch4_v2: {
        label: "[V2]",
        lines: [
          "CHH Chapter 4, pp. 94–103.",
          "Duration recording: summed temporal engagement once onset-offset qualifiers activate faithfully.",
        ],
      },
      ch4_v3: {
        label: "[V3]",
        lines: [
          "CHH Chapter 4, pp. 96–97.",
          "Latency: elapsed interval cue-to-first-qualified-response responsibly logged.",
        ],
      },
      ch4_v4: {
        label: "[V4]",
        lines: [
          "CHH Chapter 4, pp. 96–97.",
          "IRT: elapsed intervals separating successive occurrences of the same response class whenever burst pacing motivates hypotheses responsibly.",
        ],
      },
      ch4_v5: {
        label: "[V5]",
        lines: [
          "CHH Chapter 4, pp. 96–98.",
          "Response magnitude: instrumentation scaling intensity topography shares labels yet differs clinically materially.",
        ],
      },
      ch4_v6: {
        label: "[V6]",
        lines: [
          "CHH Chapter 4, pp. 104–105.",
          "Event recording: discrete tallies each authorized instance as topography concludes responsibly.",
        ],
      },
      ch4_v7: {
        label: "[V7]",
        lines: [
          "CHH Chapter 4, pp. 106–107.",
          "Whole-interval recording credits affirmative marks only if behavior spans uninterrupted slices—typically under-representing brief bursts.",
        ],
      },
      ch4_v8: {
        label: "[V8]",
        lines: [
          "CHH Chapter 4, pp. 106–107.",
          "Partial-interval recording scores affirmative if behavior touches slice interiors—typically inflating sustained-looking summaries absent caveats.",
        ],
      },
      ch4_v9: {
        label: "[V9]",
        lines: [
          "CHH Chapter 4, pp. 107–109.",
          "Momentary time sampling scores instantaneous glimpses dispersed across coarse intervals—trading manpower for misses between glimpses responsibly disclosed aloud.",
        ],
      },
      ch4_v10: {
        label: "[V10]",
        lines: [
          "CHH Chapter 4, pp. 113–119.",
          "Permanent-product recording tallies ethically aligned residuals when observation windows shrink responsibly.",
        ],
      },
      ch4_kc1: {
        label: "[KC1]",
        lines: [
          "CHH Chapter 4, pp. 94–96.",
          "Measurement purposes tie numeric displays to plainly stated stakeholder-facing analytic missions.",
        ],
      },
      ch4_kc2: {
        label: "[KC2]",
        lines: [
          "CHH Chapter 4, pp. 94–118.",
          "Dimensional hypotheses precede logistical gadget fascination—matching rulers to caregiver questions responsibly.",
        ],
      },
      ch4_kc3: {
        label: "[KC3]",
        lines: [
          "CHH Chapter 4, pp. 96–105.",
          "Continuous recording honors fidelity when observers can span sessions without collapsing early into blunt interval proxies.",
        ],
      },
      ch4_kc4: {
        label: "[KC4]",
        lines: [
          "CHH Chapter 4, pp. 105–112.",
          "Discontinuous schedules publish directional bias footprints stakeholders review responsibly alongside plotted summaries.",
        ],
      },
      ch4_kc5: {
        label: "[KC5]",
        lines: [
          "CHH Chapter 4, pp. 113–119.",
          "Ancillary measures—from residues to mediated archives—preserve honesty when tethered ethically to topography definitions responsibly.",
          "CHH Chapter 5, pp. 123–132 elaborates interobserver agreement quantifying definitional fidelity after Chapter 4 recording tactics stabilize.",
        ],
      },
      ch4_exam_c: {
        label: "[C-exam]",
        lines: [
          "Sixth-edition Task List : measurement tactics, interpreting and displaying data responsibly, baseline logic, and analytic integrity.",
          "Do not memorize invented task IDs; align CHH wording with entries in the official BACB Competency Outline PDF.",
        ],
      },
      ch4_ethics_report: {
        label: "[E-report]",
        lines: [
          "Sixth-edition Task List  applies when vignettes withhold or soften acknowledged measurement limits (shortcut sampling, modality trade-offs).",
          "Transparent caveat discipline is simultaneously good measurement narration and ethically defensible stakeholder communication.",
        ],
      },
    },
    vocabularySection: {
      heading: "VOCABULARY — Chapter 4 excerpts",
      intro:
        "Each row pairs a measurement term with a short gloss keyed to CHH Chapter 4 (primarily pp. 94–119, Pearson Global 3rd ed. TOC anchors). Build  speed: discriminate rate vs duration vs latency vs IRT vs interval shortcuts before you memorize formulas—timed exams love clean dimensional confusion items.",
      entries: [
        { term: "Rate / frequency", definition: "Counts scaled across observation denominators summarizing how densely episodes occur.", footnoteRef: "ch4_v1" },
        { term: "Frequency", definition: "Instance counts referenced to observation windows or divisors producing rate when time enters the denominator.", footnoteRef: "ch4_v1" },
        { term: "Duration", definition: "Summed time topography occupies once observable onset-offset rules activate.", footnoteRef: "ch4_v2" },
        { term: "Latency", definition: "Elapsed cue-to-first-qualified-response interval indexing initiation readiness.", footnoteRef: "ch4_v3" },
        { term: "Interresponse time (IRT)", definition: "Spacing between successive qualified instances when burst pacing matters analytically.", footnoteRef: "ch4_v4" },
        { term: "Response magnitude", definition: "Instrumentation scaling clinically decisive intensity when topography shares labels materially.", footnoteRef: "ch4_v5" },
        { term: "Event recording", definition: "Each discrete qualified instance tallied as operational rules specify during observation.", footnoteRef: "ch4_v6" },
        { term: "Whole-interval recording", definition: "Credits affirmative marks only if behavior spans uninterrupted slices—often underestimating brief bursts; caveat accordingly.", footnoteRef: "ch4_v7" },
        {
          term: "Partial-interval recording",
          definition: "Credits affirmative if behavior occupies any fraction of coarse slices—often inflating sustained-looking summaries; caveat accordingly.",
          footnoteRef: "ch4_v8",
        },
        { term: "Momentary time sampling", definition: "Instantaneous probes inside coarse intervals—pragmatic prevalence estimates with blind intervals between probes to disclose.", footnoteRef: "ch4_v9" },
        {
          term: "Permanent-product recording",
          definition: "Tangible residues tallied when definitions tie each artifact plainly to topography during observation gaps.",
          footnoteRef: "ch4_v10",
        },
      ],
    },
    keyConceptsSection: {
      heading: "KEY CONCEPTS — Chapter 4 (measuring faithfully)",
      intro:
        "Citation markers tether each headline to Cooper. Classify vignettes primarily under Domain C measurement duties unless the stem targets honest disclosure—then integrate Domain E with explicit caveats.",
      concepts: [
        {
          title: "Domains C choreography: rulers, biases, graphs, observers",
          segments: [
            {
              type: "text",
              text: "Chapter 4 is measurement-heavy end-to-end: operationalized targets feed dimensional tactics, sampled schedules impose known limits, fidelity language keeps dashboards tied to analytic questions—you will meet these mixtures in vignettes routinely ",
            },
            { type: "footnote", ref: "ch4_exam_c" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Domain E merges with caveat discipline",
          segments: [
            {
              type: "text",
              text: "When logistic shortcuts tempt silent optimism in reports—to funders or families—exam items expect recognition that withheld bias disclosures violate measurement humility and professional reporting obligations concurrently ",
            },
            { type: "footnote", ref: "ch4_ethics_report" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Measurement purposes tether numerals accountable questions",
          segments: [
            { type: "text", text: "Measurement aims enumerated above ensure graphs expose socially intelligible rationales—from evaluation arcs through benchmarking integrity—not ornamental dashboards drifting from stakeholder urgency " },
            { type: "footnote", ref: "ch4_kc1" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Dimensional hypotheses precede logistical gadget fascination",
          segments: [
            { type: "text", text: "Referrals naming cumulative harmful minutes diverge analytically from incidents-per-hour crises—match dimensional rulers to that language before debating vendor gadgets or dashboard skins " },
            { type: "footnote", ref: "ch4_kc2" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Continuous recording honors fidelity when staffing allows",
          segments: [{ type: "text", text: "Observers spanning full sessions tally events and durations in real time without collapsing observation windows into blunt interval summaries when fidelity permits " }, { type: "footnote", ref: "ch4_kc3" }, { type: "text", text: "." }],
        },
        {
          title: "Discontinuous compromises broadcast bias footprints",
          segments: [{ type: "text", text: "Whole partial momentary strategies admit directional inflation or understatement audiences must reconcile alongside plotted summaries " }, { type: "footnote", ref: "ch4_kc4" }, { type: "text", text: "." }],
        },
        {
          title: "Ancillary measures plus Chapter 5 IOA braid accountability",
          segments: [{ type: "text", text: "Residual logs and mediated archives preserve honesty when definitions tether proxies to topography, priming Cooper’s Chapter 5 interobserver routines " }, { type: "footnote", ref: "ch4_kc5" }, { type: "text", text: "." }],
        },
      ],
      plainLanguageSummary: {
        heading: "Key concepts — plain-language companion",
        intro:
          "Chapter 4 (Measuring Behavior) is Domain C heavy. Before any staffing meeting, a supervisee should defend the referral question, the dimensional ruler, the recording tactic, its known bias, baseline anchors, and IOA plan in plain language.",
        chunks: [
          {
            subtitle: "Domain C measurement and display integrity",
            segments: [
              { type: "text", text: "Measurement spans tactic selection and graph integrity together—most clinical vignettes mix dimensional choice, recording method, and how results are displayed " },
              { type: "footnote", ref: "ch4_exam_c" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Honest reporting when shortcuts hide bias",
            segments: [
              { type: "text", text: "Domain E enters when logistic shortcuts bury distortion stories stakeholders deserve—partial-interval inflation, omitted IOA, or silent interval-method switches are reporting failures, not minor details " },
              { type: "footnote", ref: "ch4_ethics_report" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Measurement purposes stakeholders can hear",
            segments: [
              { type: "text", text: "Every graph should answer a question caregivers and funders actually asked—evaluation, benchmarking, procedural integrity, or research—not decorate a slide deck " },
              { type: "footnote", ref: "ch4_kc1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Dimensional vocabulary before gadgets",
            segments: [
              { type: "text", text: "Match rate, duration, latency, IRT, or magnitude to the referral worry before debating apps or dashboards " },
              { type: "footnote", ref: "ch4_kc2" },
              { type: "text", text: ". Frequency and rate answer how densely events arrive " },
              { type: "footnote", ref: "ch4_v1" },
              { type: "text", text: "; latency tracks cue-to-first-response delay " },
              { type: "footnote", ref: "ch4_v3" },
              { type: "text", text: "; magnitude matters when intensity varies beneath one label " },
              { type: "footnote", ref: "ch4_v5" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Continuous recording when fidelity allows",
            segments: [
              { type: "text", text: "Full-session observers preserve nuance interval methods lose. Event recording tallies discrete instances " },
              { type: "footnote", ref: "ch4_kc3" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch4_v6" },
              { type: "text", text: "; duration protocols sum time engaged once onset–offset rules hold " },
              { type: "footnote", ref: "ch4_v2" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Interval methods and directional bias",
            segments: [
              { type: "text", text: "Whole-interval, partial-interval, and momentary sampling each trade observer time for approximation. Name the tactic and its bias direction beside every summary " },
              { type: "footnote", ref: "ch4_kc4" },
              { type: "text", text: "—whole-interval often understates brief bursts " },
              { type: "footnote", ref: "ch4_v7" },
              { type: "text", text: ", partial-interval often inflates sustained-looking totals " },
              { type: "footnote", ref: "ch4_v8" },
              { type: "text", text: ", momentary probes miss events between checks " },
              { type: "footnote", ref: "ch4_v9" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Permanent products and IOA bridge",
            segments: [
              { type: "text", text: "When live observation thins, permanent-product tallies preserve honesty if definitions tie each artifact to topography " },
              { type: "footnote", ref: "ch4_kc5" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch4_v10" },
              { type: "text", text: ". IRT sharpens burst-pacing reads when spacing between instances drives the clinical question " },
              { type: "footnote", ref: "ch4_v4" },
              { type: "text", text: ". Chapter 5 IOA routines verify observers share the same definition before graphs claim victory." },
            ],
          },
          {
            subtitle: "High-Yield Confusion Points",
            segments: [
              { type: "text", text: "High-yield confusion points in this chapter include confusing rate with duration, treating partial-interval totals as unbiased prevalence, and selecting recording tactics that do not match staffing or topography. Resolve them by naming the clinical question first, then the dimension, then the tactic and its caveat." },
              { type: "footnote", ref: "ch4_kc2" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch4_kc4" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch4_kc5" },
              { type: "text", text: "." },
            ],
          },
        ],
      },
    },
    vocabularyMatchInstructions:
      "Discriminate Domain C terminology (rate vs duration vs latency vs IRT vs each discontinuous tactic) strictly from vignette wording—avoid matching on surface keywords alone.",
    matchActivityInstructions:
      "Read each scenario, then select the dimensional or recording tactic Cooper aligns with Chapter 4 (Measuring Behavior). Incorrect trials expose rationales tightening discriminations.",
    chainActivityInstructions:
      "Drag fragments until the ladder narrates sound practice—from operational definitions through dimensional selection, recording tactics, baseline documentation, and fidelity checkpoints.",
    mts: [
      {
        sample_stimulus:
          "Observers tally each discrete throat clear whenever it ends within the session regardless of pacing between instances.",
        comparison_options: ["Event recording", "Whole-interval tally exclusively", "Latency exclusively", "Permanent product tally"],
        correct_match: "Event recording",
        error_feedback: "Event tally counts discrete topography instances as operational rules specify.",
      },
      {
        sample_stimulus:
          "Staff sum seconds eyeContact occupies once onset-offset signals activate spanning entire instructional block.",
        comparison_options: ["Duration recording", "Partial-interval affirmative scoring", "IRT exclusively", "Latency exclusively"],
        correct_match: "Duration recording",
        error_feedback: "Duration aggregates time topography occupies—not spacing between bursts.",
      },
      {
        sample_stimulus:
          "Therapists glance once per sixty-second probe marking whether mouthing occupies exact instant glimpsed randomly.",
        comparison_options: ["Momentary time sampling", "Traditional event tally only", "Latency recording exclusively", "Whole-interval recording exclusively"],
        correct_match: "Momentary time sampling",
        error_feedback: "Momentary probes score instantaneous snapshots and miss what happens between probes unless you caveat the blind intervals.",
      },
      {
        sample_stimulus:
          "Teachers mark yelling present whenever yelling touches any fraction of sixty-second bins bursts rarely exceed five seconds midway.",
        comparison_options: [
          "Partial-interval recording",
          "Whole-interval recording exclusively",
          "Latency recording exclusively",
          "Respondent elicitation catalog exclusively",
        ],
        correct_match: "Partial-interval recording",
        error_feedback:
          "Partial-interval scores yes when behavior occurs anywhere inside the slice—often inflating sustained-looking prevalence; disclose that bias when you plot it.",
      },
      {
        sample_stimulus:
          "Observers credit scripted vocal stereotypy only if it occupies every second of each 30-second interval—brief spikes mid-interval that end before the slice closes still score absent.",
        comparison_options: [
          "Whole-interval recording",
          "Partial-interval recording exclusively",
          "Momentary time sampling exclusively",
          "Latency recording exclusively",
        ],
        correct_match: "Whole-interval recording",
        error_feedback:
          "Whole-interval scoring requires full-interval occupancy—often missing brief bursts that fail to fill the entire window.",
      },
      {
        sample_stimulus:
          "Regional center funds IOA calculators only after supervisors ran two weeks of event recording paired with scripted observer definitions—which Cooper chapter MOST naturally deepens numeric agreement rules?",
        comparison_options: [
          "Chapter 5 interobserver measurement",
          "Chapter 2 phylogenic glossary exclusively",
          "Chapter 1 scientific attitudes exclusively",
          "Appendix vendor contracts exclusively",
        ],
        correct_match: "Chapter 5 interobserver measurement",
        error_feedback:
          "Chapter 4 stabilizes definitional fidelity and tactic choice; Cooper elaborates calculation/decision norms for observer agreement thereafter—exam items routinely forward-reference that split.",
      },
    ],
    chainTitle: "Measurement ladder",
    chainFragments: [
      { id: "a", text: "Lock operational onset-offset boundaries aligning socially endorsed definitions." },
      { id: "b", text: "Name dimensional referral ruler frequency duration latency hybrids explicitly." },
      { id: "c", text: "Select continuous tactics when staffing permits—or interval substitutes with caveat scripts." },
      { id: "d", text: "Document baseline variability calibrate observers before intervention graphs trumpet mastery." },
    ],
    chainOrder: ["a", "b", "c", "d"],
    safmedTerms: [
      { front: "Frequency", back: "Count of instances scaled across an observation denominator (rate when time enters the divisor)." },
      { front: "Duration", back: "Cumulative time the behavior occupies the topography once onset–offset rules activate." },
      { front: "Latency", back: "Elapsed interval from a specified onset (e.g., instruction) to the first qualified response." },
      { front: "IRT", back: "Time between successive instances of the same response class—burst spacing." },
      { front: "Event recording", back: "Tally each discrete qualified instance during observation per operational rules." },
      { front: "Partial-interval", back: "Score yes if behavior occurs anywhere inside the interval—often inflates; say so when you graph." },
      { front: "Whole-interval", back: "Score yes only if behavior fills the entire interval—often misses brief bursts; caveat accordingly." },
      { front: "Momentary time sampling", back: "Score presence only at instantaneous probes—misses events between probes unless you disclose gaps." },
      { front: "Permanent product", back: "Infer occurrence from durable residues (work samples, damage tallies) tied to operational definitions." },
    ],
    worksheet: {
      title: "Chapter 4 — dimensional & sampling fidelity",
      instructions:
        "Timed-exam posture: classify each vignette’s primary dimensional question, shortcut bias (if any), and reporting obligation ( where stakeholders might be misled). Read CHH afterward to anchor detail.",
      scenario:
        "Scenario A — Supervisors mandated five-minute partial-interval affirmative bins while caregivers demanded cumulative biting minutes summarized honestly.",
      scenario_follow_up:
        "Scenario B — Wearable latency trackers ship dashboards yet individualized education referrals obsessed over incidents per cafeteria hour regardless.\n\nScenario C — Observation budgets shrink yet shredded assignment packets correlate with biting definitions nightly.\n\nScenario D — Central office dashboard aggregates partial-interval engagement across classrooms but captions each tile as uninterrupted continuous immersion.",
      fields: [
        {
          id: "response_1",
          label: "Scenario A · Dimensional clash MOST central?",
          options: ["Interval proxies versus duration storytelling requires parallel transparent graphs", "Delete caregiver interviews permanently", "Abandon definitional rehearsals"],
          correct: "Interval proxies versus duration storytelling requires parallel transparent graphs",
        },
        {
          id: "response_2",
          label: "Scenario A · Honest caveat obligation?",
          options: ["Disclose how partial-interval inflation diverges from continuous duration estimates", "Hide logistics tidily polishing slides", "Assert dashboards equal wristwatch timers magically"],
          correct: "Disclose how partial-interval inflation diverges from continuous duration estimates",
        },
        {
          id: "response_3",
          label: "Scenario B · Best alignment tactic?",
          options: ["Event or rate dashboards honoring incidents hourly referral language", "Duration totals exclusively irrespective referral", "Latency exclusively ignoring incident density"],
          correct: "Event or rate dashboards honoring incidents hourly referral language",
        },
        {
          id: "response_4",
          label: "Scenario B · Gadget default trap?",
          options: ["Letting slick latency defaults hijack dimensional questions caregivers voiced", "Recalibrating observers proactively", "Documenting socially valid priorities"],
          correct: "Letting slick latency defaults hijack dimensional questions caregivers voiced",
        },
        {
          id: "response_5",
          label: "Scenario C measurement parallel?",
          options: [
            "Permanent-product tallies that map shredded artifacts to the operational biting definition",
            "Latency timers exclusively irrespective of topography",
            "IRT spacing exclusively irrespective of topography",
          ],
          correct: "Permanent-product tallies that map shredded artifacts to the operational biting definition",
        },
        {
          id: "response_6",
          label: "Across scenarios A–D, shared discipline when shortcut graphs circulate?",
          options: [
            "Pair shortcut graphs with explicit bias language and, when possible, companion metrics that match the referral’s dimensional question",
            "Let dashboards imply unbiased truth because they look polished",
            "Stop describing sampling tactics once graphs are published",
          ],
          correct:
            "Pair shortcut graphs with explicit bias language and, when possible, companion metrics that match the referral’s dimensional question",
        },
        {
          id: "response_7",
          label:
            "Scenario D — Quarterly report labels partial-interval % as continuous immersion without caveat language MOST merges which concerns?",
          options: [
            "Domain C truth-in-display plus Domain E honest representation",
            "Domain A philosophical debate exclusively",
            "Domain G punishment menus exclusively",
          ],
          correct: "Domain C truth-in-display plus Domain E honest representation",
        },
        {
          id: "response_8",
          label: "Scenario D BEST remediation step before next funding cycle?",
          options: [
            "Pair each interval graph footnote admitting inflation direction plus complementary duration or continuous probe when logistic capacity allows",
            "Delete stakeholder meetings to avoid scrutiny",
            "Rename axes randomly to refresh aesthetics",
          ],
          correct:
            "Pair each interval graph footnote admitting inflation direction plus complementary duration or continuous probe when logistic capacity allows",
        },
      ],
      remediationLog:
        "Rebuild voiceovers: stakeholder referral question → ruler fit → logistic shortcut acknowledgment → baseline visibility → calibrated observers/IOA (Domain C echoes) plus transparent reporting when graphs could mislead (Domain E echoes). Cross-check nuanced task wording in the BACB PDF alongside assigned CHH pages.",
    },
    bdsBank: CHAPTER_04_WORKBOOK_QUIZ_BANK,
  },
  {
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
          "Chapter 5’s humility language is deliberate exam bait; rehearse admitting limits aloud.",
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
              { type: "text", text: "Exam items reward staged assessment: hypotheses escalate only after context, indirect intake, and descriptive scaffolding are in place " },
              { type: "footnote", ref: "ch5_exam_f" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Ethics when streams disagree or vanish",
            segments: [
              { type: "text", text: "Domain E failures include laundering checklists into monocausal brochures, hiding descriptive contradictions, or reporting certainty a single modality cannot support " },
              { type: "footnote", ref: "ch5_ethics_multimodal" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Multimethod inventory and context mapping",
            segments: [
              { type: "text", text: "Start with interviews, questionnaires, records, and ecological mapping so hypotheses reflect people, places, and histories—not clinic convenience " },
              { type: "footnote", ref: "ch5_kc1" },
              { type: "text", text: ". Multimethod assessment is a vocabulary exam writers expect you to use precisely " },
              { type: "footnote", ref: "ch5_v1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Indirect tools accelerate, not conclude",
            segments: [
              { type: "text", text: "Interviews and checklists buy speed but demand corroboration. Treat FAST/MAS-style outputs as provisional suspects awaiting stronger streams " },
              { type: "footnote", ref: "ch5_kc2" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch5_v1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Descriptive data improves precision",
            segments: [
              { type: "text", text: "ABC and scatter narration thickens where and when behavior clusters, but correlational description still does not prove causal function. It steers what to test next " },
              { type: "footnote", ref: "ch5_kc3" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch5_v2" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Experimental analysis earns its name",
            segments: [
              { type: "text", text: "When feasible and safe, arranged evocative contrasts isolate maintaining contingencies anecdotes cannot. That is what separates experimental from descriptive modality " },
              { type: "footnote", ref: "ch5_kc4" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch5_v3" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Triangulation and honest uncertainty",
            segments: [
              { type: "text", text: "Compare streams side by side, keep converging findings, and label residual uncertainty when modalities tension. Transparent limits are clinically stronger than polished monocausal stories " },
              { type: "footnote", ref: "ch5_kc5" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch5_v4" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "High-Yield Confusion Points",
            segments: [
              { type: "text", text: "High-yield confusion points in this chapter include overcalling function from single-stream evidence, treating descriptive covariation as causal proof, and writing recommendations stronger than the data warrant. Resolve them by calibrating claim strength to evidence strength." },
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
        correct_match: "Abbreviated daytime experimental contrasts plus heightened descriptive probing while naming staffing limits plainly",
        error_feedback:
          "Prefer accountable multimodal scaffolding over fabrication, assessment paralysis, or discarding stakeholder interviews outright.",
      },
      {
        sample_stimulus:
          "FAST ranks attention-maintained hypotheses while midday ABC summaries show reinforcement tied to escaping instructional demands—you document both streams and label the conflict plainly before escalating treatment prescriptions.",
        comparison_options: [
          "Transparent triangulation that keeps modality tensions visible plus provisional hypotheses",
          "Publishing whichever modality fits the clinician’s favorite intervention plan",
          "Deleting descriptive logs so FAST stays tidy for funders",
          "Substituting cranial scans for correlational narration",
        ],
        correct_match: "Transparent triangulation that keeps modality tensions visible plus provisional hypotheses",
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
        correct_match: "Honest modality labeling distinguishing indirect/descriptive work from manipulated FA contrasts",
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
          correct:
            "Indirect tools inform tentative hypotheses awaiting convergent modalities",
        },
        {
          id: "response_3",
          label: "FAST vignette · Tool classification?",
          options: [
            "Indirect assessments generating prioritized hypotheses awaiting corroboration",
            "Experimental functional analysis already isolating reinforcer contrasts",
            "Continuous-duration measurement without hypothesized contingencies",
          ],
          correct:
            "Indirect assessments generating prioritized hypotheses awaiting corroboration",
        },
        {
          id: "response_4",
          label: "Therapists ABC-chart classroom transitions · Classification?",
          options: [
            "Descriptive correlational observation layering naturalistic summaries",
            "Indirect assessment divorced from eyeball verification",
            "Automatic reinforcement probing without evocative contrasts",
          ],
          correct:
            "Descriptive correlational observation layering naturalistic summaries",
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
          correct:
            "Intensify hypothesis-guided descriptive sampling around those clustered intervals",
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
  },
  {
    id: "mod07",
    chapterNumber: 6,
    activityPrefix: 2070,
    title: "Indirect Functional Behavioral Assessment",
    codexHeading: "READING — Chapter 6 (Indirect Functional Behavioral Assessment)",
    codexIntro: `Chapter 6 in Cooper, Heron, and Heward explains how indirect functional assessment is used to generate defensible hypotheses before intensive observation or arranged experimental contrasts begin. The chapter treats indirect methods as efficient entry points, not as stand-alone proof of behavioral function.

Indirect functional assessment typically begins with structured interviews that organize respondent recall around routines, antecedent context, response topography, and likely consequence patterns. Standardized interview flow improves comparability across respondents and reduces drift from unstructured storytelling.

Questionnaire-style tools (including FAST-, MAS-, and related indirect formats) summarize informant estimates about likely maintaining contingencies. These tools can quickly prioritize where teams should allocate descriptive or experimental follow-up effort.

A core Chapter 6 caution is source limitation: indirect methods are vulnerable to memory error, wording effects, cultural interpretation differences, reporter expectations, and interviewer influence. These limitations do not invalidate indirect assessment, but they require explicit uncertainty statements.

Because of those limits, Cooper positions indirect assessment as one stream in a broader multimethod process. Teams should compare indirect output with direct descriptive data and, when feasible, experimental analyses before drawing high-stakes conclusions.

Indirect findings are most useful when translated into testable hypotheses. For example, a high escape ranking should guide where and when descriptive sampling is densest, what antecedent transitions are tracked, and which experimental test conditions might be ethically appropriate later.

The chapter also emphasizes social validity and contextual fit during indirect intake. Informants often identify priorities that determine whether assessment questions are clinically meaningful, feasible, and aligned with daily-life concerns rather than analyst convenience.

When informants disagree, Chapter 6 treats disagreement as data. Divergent reports should be documented, not averaged away, and should shape the next step in assessment design (additional interviews, focused descriptive probes, or revised operational definitions).

For teams working under staffing or scheduling constraints, indirect assessment helps stage workload while preserving analytical integrity. The key is to label conclusions proportionally and avoid presenting preliminary hypotheses as confirmed functions.

Overall, Chapter 6 establishes professional standards for indirect FAB work: structure interviews, document limits, use questionnaires to prioritize-not certify-hypotheses, and integrate all results transparently before intervention recommendations escalate.

For learning, Chapter 6 should be practiced as hypothesis discipline: extract clear testable statements from interviews and questionnaires, then plan exactly how those statements will be checked with stronger methods.`,
    footnotes: {
      x6_1: {
        label: "[1]",
        lines: [
          "CHH Chapter 6 — indirect functional behavioral assessment overview (Pearson Global 3rd ed.; verify exact pp. in your assigned TOC).",
          "Indirect FAB supports early assessment hypothesis-building and should be paired with transparent reporting when confidence is limited.",
          "Verify granular Task List entries in the official BACB competency PDF alongside CHH reading.",
          "Not quoted from CHH.",
        ],
      },
      x6_2: {
        label: "[2]",
        lines: [
          "CHH Chapter 6 — structured interviews organizing caregiver/educator narratives into comparable hypotheses.",
          "Not quoted from CHH.",
        ],
      },
      x6_3: {
        label: "[3]",
        lines: [
          "CHH Chapter 6 — indirect questionnaires (e.g., FAST/MAS-class summaries) estimating suspected contingencies.",
          "Not quoted from CHH.",
        ],
      },
      x6_4: {
        label: "[4]",
        lines: [
          "CHH Chapter 6 — integrating indirect evidence with descriptive and experimental modalities (triangulation discipline).",
          "Assessment conflicts belong in multidisciplinary documentation; do not hide disagreement between modalities.",
          "Not quoted from CHH.",
        ],
      },
    },
    codexFootnoteRefs: [
      { afterSentenceIndex: 0, ref: "x6_1" },
      { afterSentenceIndex: 1, ref: "x6_2" },
      { afterSentenceIndex: 3, ref: "x6_3" },
      { afterSentenceIndex: 5, ref: "x6_4" },
    ],
    codexPlainLanguageSummary: {
      heading: "Plain language — conversational recap",
      intro:
        "Put simply, Chapter 6 teaches you to use indirect tools correctly: fast for direction, careful about limits, and always connected to a plan for stronger follow-up evidence.",
      chunks: [
        {
          subtitle: "Indirect tools help you start fast",
          segments: [
            {
              type: "text",
              text: "Indirect FAB gives quick directional information when teams need to organize next steps. It helps clarify what might be maintaining behavior and where additional assessment should focus ",
            },
            { type: "footnote", ref: "x6_1" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Structure interviews to improve comparability",
          segments: [
            {
              type: "text",
              text: "Structured interviews reduce drift by asking comparable questions about routines, antecedents, consequences, and context. That makes cross-informant patterns easier to evaluate ",
            },
            { type: "footnote", ref: "x6_2" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Questionnaires rank hypotheses, they do not confirm function",
          segments: [
            {
              type: "text",
              text: "FAST-, MAS-, and related tools can rank likely functions and guide where to observe next. But they remain indirect estimates and should not be reported as confirmed functional outcomes by themselves ",
            },
            { type: "footnote", ref: "x6_3" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Triangulation is the professional standard",
          segments: [
            {
              type: "text",
              text: "Compare indirect findings with descriptive and (when feasible) experimental streams. If methods disagree, document the disagreement and let it guide the next assessment step instead of forcing false certainty ",
            },
            { type: "footnote", ref: "x6_4" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Practical chapter rule",
          segments: [
            {
              type: "text",
              text: "Use indirect methods to prioritize, direct methods to clarify, and experimental methods to strengthen causal confidence whenever safe and feasible.",
            },
          ],
        },
        {
          subtitle: "How to learn this chapter in teaching mode",
          segments: [
            {
              type: "text",
              text: "After each indirect interview or checklist result, write one sentence for hypothesis, one sentence for uncertainty, and one sentence for next verification method. If you cannot write all three, you do not yet have an assessment-ready conclusion.",
            },
          ],
        },
        {
          subtitle: "High-Yield Confusion Points",
          segments: [
            {
              type: "text",
              text: "High-yield confusion points in this chapter include reading FAST/MAS/QABF outputs as conclusions instead of hypotheses, smoothing over informant disagreement, and skipping explicit uncertainty language in reports. Resolve them by using indirect data to direct the next verification step, not end the analysis.",
            },
          ],
        },
      ],
    },
    supplementalFootnotes: {
      ch6_v1: {
        label: "[V1]",
        lines: [
          "CHH Chapter 6 — structured interviews sequence comparable prompts across caregivers/educators so narratives convert into hypotheses instead of unstructured gossip.",
        ],
      },
      ch6_v2: {
        label: "[V2]",
        lines: [
          "CHH Chapter 6 — indirect questionnaires (FAST-, MAS-class, QABF-style) estimate suspected reinforcer domains from recall—they accelerate prioritization, not causal proof.",
        ],
      },
      ch6_v3: {
        label: "[V3]",
        lines: [
          "Recall instruments inherit memory omissions, wording effects, culturally interpreted descriptors, and interviewer effects—explicit skepticism stays professional (Domain F integrity).",
        ],
      },
      ch6_v4: {
        label: "[V4]",
        lines: [
          "CHH Chapter 6 — triangulation: indirect outputs negotiate openly with descriptive observation and ethically feasible experimental assays so modality disagreements survive in the record.",
        ],
      },
      ch6_kc1: {
        label: "[KC1]",
        lines: [
          "CHH Chapter 6 — indirect FAB buys efficient hypotheses cheaply ahead of evocative manipulation or dense descriptive corroboration.",
        ],
      },
      ch6_kc2: {
        label: "[KC2]",
        lines: [
          "CHH Chapter 6 — structured interviews organize comparable timelines, evocative routines, and suspected consequences powering consistent hypothesis templates.",
        ],
      },
      ch6_kc3: {
        label: "[KC3]",
        lines: [
          "CHH Chapter 6 — questionnaires summarize stakeholder guesses about reinforcing histories; empirical preference or descriptive/experimental probes still adjudicate contenders.",
        ],
      },
      ch6_kc4: {
        label: "[KC4]",
        lines: [
          "Social validity insists caregiver-valued routines—not dashboard convenience alone—shape which indirect hypotheses merit scarce observation hours.",
        ],
      },
      ch6_kc5: {
        label: "[KC5]",
        lines: [
          "Transparent triangulation forbids laundering disagreements—especially before consequential treatment summaries reach schools or regional centers.",
        ],
      },
      ch6_exam_f: {
        label: "[F-exam]",
        lines: [
          " vignettes commonly stress indirect tools together with hypothesis statements, phased corroboration, and honest limits on each modality.",
          "Match vignette wording to official BACB PDF entries—outline titles here stay thematic only.",
        ],
      },
      ch6_ethics_recall: {
        label: "[E-recall]",
        lines: [
          "When questionnaires substitute for feasible observation—or findings cherry-picked—ethical reporting overlaps Domain E with sound Domain F discipline.",
          "Label uncertainty the way Chapter 6 keeps repeating—not as optional flair.",
        ],
      },
      ch6_v5: {
        label: "[V5]",
        lines: [
          "CHH Chapter 6 — FAST-class instruments: structured indirect checklists estimating relative behavioral-function hypotheses from respondent rankings.",
        ],
      },
      ch6_v6: {
        label: "[V6]",
        lines: [
          "CHH Chapter 6 — MAS-class surveys ranking presumed reinforcer or motivation domains that later empirical probes must contact.",
        ],
      },
      ch6_v7: {
        label: "[V7]",
        lines: [
          "CHH Chapter 6 — QABF-style questionnaires summarizing caregiver/educator function estimates awaiting descriptive or experimental corroboration.",
        ],
      },
      ch6_v8: {
        label: "[V8]",
        lines: [
          "CHH Chapter 6 — social validity: goals, targets, procedures, or outcomes endorsed as meaningful by consumers—not analyst convenience gloss.",
        ],
      },
      ch6_v9: {
        label: "[V9]",
        lines: [
          "CHH Chapter 6 — interobserver agreement (IOA): cross-coder correspondence guarding definitional fidelity before trusting tallies feeding triangulation.",
        ],
      },
    },
    vocabularySection: {
      heading: "VOCABULARY — Chapter 6 excerpts",
      intro:
        "Build verbal speed on  recall tools: discriminate structured interviews versus normed questionnaires versus the descriptive/experimental corroboration they demand.",
      entries: [
        { term: "Structured indirect interview", definition: "Comparable prompts yielding timelines/routines hypotheses before contingency manipulation.", footnoteRef: "ch6_v1" },
        { term: "Indirect questionnaires (FAST-/MAS-/QABF-class overview)", definition: "Normed recall scales estimating reinforcing histories—they accelerate—not finalize—classification.", footnoteRef: "ch6_v2" },
        { term: "FAST", definition: "Indirect checklist-style estimate of suspected behavioral-function profiles from respondent recall rankings.", footnoteRef: "ch6_v5" },
        { term: "MAS", definition: "Indirect reinforcer-domain survey inventories prioritizing what empirical probes should contact next.", footnoteRef: "ch6_v6" },
        { term: "QABF", definition: "Indirect questionnaire scaffolding behavioral-function guesses pending converging modalities.", footnoteRef: "ch6_v7" },
        {
          term: "Recall/wording limitation",
          definition: "Memory gaps, linguistic framing, interpreter needs, culturally loaded descriptors—professional skepticism belongs in analytic notes.",
          footnoteRef: "ch6_v3",
        },
        { term: "Triangulation", definition: "Open negotiation among indirect summaries, contemporaneous narratives, and controlled contrasts when ethically feasible.", footnoteRef: "ch6_v4" },
        { term: "Social validity", definition: "Stakeholders endorse targets/procedures/outcomes so measurement answers questions they—not dashboards alone—prioritize.", footnoteRef: "ch6_v8" },
        {
          term: "Interobserver agreement (IOA)",
          definition: "Agreement indices on coded samples guarding definitional fidelity before descriptive claims propagate.",
          footnoteRef: "ch6_v9",
        },
      ],
    },
    keyConceptsSection: {
      heading: "KEY CONCEPTS — Chapter 6 (indirect functional assessment)",
      intro:
        "Every heading below cues a vignette storyline on high-stakes exams: indirect tools accelerate—but never launder uncertainty away from multidisciplinary readers.",
      concepts: [
        {
          title: "Domain F: hypothesis generators—not verdict machines",
          segments: [
            {
              type: "text",
              text: "Interviews plus questionnaires shorten the runway to prioritized contingencies teammates later observe or manipulate—exam items punish treating recall snapshots as airtight functional certificates ",
            },
            { type: "footnote", ref: "ch6_exam_f" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Domain E collides when recall becomes marketing copy",
          segments: [
            {
              type: "text",
              text: "Hiding divergence between caregiver checklists and classroom ABC logs—or labeling questionnaire output as exhaustive FA—is an ethics failure simultaneous with sloppy assessment ",
            },
            { type: "footnote", ref: "ch6_ethics_recall" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Indirect FAB buys hypotheses before manipulation",
          segments: [{ type: "text", text: "Cheap early guesses focus scarce live hours—but Cooper pairs them with mandatory corroborating streams " }, { type: "footnote", ref: "ch6_kc1" }, { type: "text", text: "." }],
        },
        {
          title: "Structured interviews standardize conversational recall",
          segments: [{ type: "text", text: "Comparable item banks reduce drift between unstructured hallway anecdotes varying wildly across informants " }, { type: "footnote", ref: "ch6_kc2" }, { type: "text", text: "." }],
        },
        {
          title: "Questionnaires rank suspected reinforcer domains provisionally",
          segments: [{ type: "text", text: "Preference probes, descriptive density, phased FA analogues—not checklists alone—eventually contact contingencies underwriting claims " }, { type: "footnote", ref: "ch6_kc3" }, { type: "text", text: "." }],
        },
        {
          title: "Social validity steers hypotheses toward meaningful stakes",
          segments: [{ type: "text", text: "When indirect priorities ignore caregiver emergencies, spreadsheets misallocate observation energy even when statistically tidy " }, { type: "footnote", ref: "ch6_kc4" }, { type: "text", text: "." }],
        },
        {
          title: "Triangulation leaves modality disagreement visible",
          segments: [{ type: "text", text: "Accountable dossiers reconcile FAST guesses with ABC divergence instead of overwriting inconvenient streams " }, { type: "footnote", ref: "ch6_kc5" }, { type: "text", text: "." }],
        },
      ],
      plainLanguageSummary: {
        heading: "Key concepts — plain-language companion",
        intro:
          "Chapter 6 sharpens indirect-assessment discipline. For every datum, name the tool, state its limits aloud, and identify the corroborating stream that must follow before function claims harden.",
        chunks: [
          {
            subtitle: "Indirect tools shorten runway, not proof",
            segments: [
              { type: "text", text: "Domain F treats interviews and surveys as hypothesis accelerators—not functional certificates " },
              { type: "footnote", ref: "ch6_exam_f" },
              { type: "text", text: ". They buy direction when minutes are scarce but never replace converging observation " },
              { type: "footnote", ref: "ch6_kc1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Ethics when recall becomes marketing",
            segments: [
              { type: "text", text: "Cherry-picked questionnaire highlights buried under polished slides violate honest reporting. Recall-based data needs explicit skeptic language in notes and briefings " },
              { type: "footnote", ref: "ch6_ethics_recall" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Structured interviews reduce anecdote drift",
            segments: [
              { type: "text", text: "Comparable item banks tame inconsistent hallway stories so different informants answer the same questions " },
              { type: "footnote", ref: "ch6_kc2" },
              { type: "text", text: ". Structured interview protocols anchor what was actually asked " },
              { type: "footnote", ref: "ch6_v1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Questionnaires rank suspects provisionally",
            segments: [
              { type: "text", text: "FAST, MAS, and QABF-style scales summarize stakeholder guesses about reinforcer domains—they do not contact contingencies directly " },
              { type: "footnote", ref: "ch6_kc3" },
              { type: "text", text: ". Know each instrument's normed limits before treating output as diagnosis " },
              { type: "footnote", ref: "ch6_v2" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Recall and wording pitfalls",
            segments: [
              { type: "text", text: "Memory bias, leading questions, and informant disagreement are built-in limits—not surprises to hide. Document skeptic margins in supervisory notes " },
              { type: "footnote", ref: "ch6_v3" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Social validity steers observation energy",
            segments: [
              { type: "text", text: "Caregiver emergencies and stakeholder-valued routines—not spreadsheet inertia—should prioritize which hypotheses get scarce observation minutes next " },
              { type: "footnote", ref: "ch6_kc4" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Triangulation keeps disagreement visible",
            segments: [
              { type: "text", text: "When FAST output fights the ABC log, narrate the clash instead of overwriting the inconvenient stream. Triangulation is transparency, not tidy consensus theater " },
              { type: "footnote", ref: "ch6_kc5" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch6_v4" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "High-Yield Confusion Points",
            segments: [
              { type: "text", text: "High-yield confusion points in this chapter include treating FAST/MAS/QABF outputs as conclusions, smoothing over informant disagreement, and skipping explicit uncertainty language when reporting indirect results. Resolve them by documenting hypothesis, uncertainty, and next-step corroboration." },
              { type: "footnote", ref: "ch6_kc3" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch6_kc5" },
              { type: "text", text: "." },
            ],
          },
        ],
      },
    },
    vocabularyMatchInstructions:
      "Match each indirect tool to what it can and cannot conclude. The teaching goal is hypothesis discipline: fast direction, explicit limits, and planned corroboration.",
    matchActivityInstructions:
      "For each Chapter 6 vignette, pick the best indirect-assessment interpretation and then identify what follow-up evidence is required before function claims become high confidence.",
    chainActivityInstructions:
      "Order the sequence as a teaching workflow: structured indirect intake, operational definition refinement, convergence-divergence review, then targeted descriptive follow-up based on disagreements.",
    mts: [
      {
        sample_stimulus:
          "Teacher FAST checklist ranks escape highest across routines without verifying latency.",
        comparison_options: [
          "Hypothesis refinement pending corroboration",
          "Experimentally verified escape function",
          "Automatically reinforcement dominance",
        ],
        correct_match: "Hypothesis refinement pending corroboration",
        error_feedback:
          "Indirect rankings prioritize hypotheses yet remain provisional until corroborated.",
      },
      {
        sample_stimulus:
          "MAS identifies tangible reinforcers prior to preference assessment probes.",
        comparison_options: [
          "Indirect stimulus ranking",
          "Withdrawal design confirmation",
          "Latency shaping metric",
        ],
        correct_match: "Indirect stimulus ranking",
        error_feedback:
          "Motivation-at-scale questionnaires categorize reinforcer likelihood indirectly.",
      },
      {
        sample_stimulus:
          "IEP facilitator omits contradictory ABC summaries so FAST rankings match the predetermined treatment vendor pitch—ethical stance MOST aligned with:",
        comparison_options: [
          "Explicit triangulation admitting modality conflict alongside provisional hypotheses",
          "Selective reporting favoring flashy indirect narratives exclusively",
          "Deleting caregiver interviews indefinitely",
          "Replacing multidisciplinary review with billboard advertisements",
        ],
        correct_match: "Explicit triangulation admitting modality conflict alongside provisional hypotheses",
        error_feedback:
          "Domain F dossiers disclose disagreement; hiding streams collides with Domain E honest representation.",
      },
      {
        sample_stimulus:
          "District translations render ‘tantrums’ inconsistently yet structured prompts keep English and Spanish responders answering parallel items about routines and suspected consequences BEST exemplifies:",
        comparison_options: [
          "Structured indirect interview scaffolding comparable hypotheses despite linguistic variation",
          "Experimental FA already certifying reinforcement",
          "Indirect tools permanently replacing interpreters",
          "Scatterplot-exclusive measurement without narration",
        ],
        correct_match: "Structured indirect interview scaffolding comparable hypotheses despite linguistic variation",
        error_feedback:
          "Structured interviews tame recall into comparable hypotheses while still respecting translation layers.",
      },
      {
        sample_stimulus:
          "QABF-style checklist assigns high scores to sensory-maintained guesses while descriptive logs show caregiver removal of instructional demands MOST cautiously:",
        comparison_options: [
          "Maintain sensory hypothesis tentative while escalating descriptive probes around instructional escape pathways",
          "Declare sensory reinforcement definitive overnight",
          "Shred questionnaires because they annoyed staff",
          "Skip descriptive observation indefinitely",
        ],
        correct_match: "Maintain sensory hypothesis tentative while escalating descriptive probes around instructional escape pathways",
        error_feedback:
          "Indirect rankings stay provisional until converging streams—including denser narration around competing suspects.",
      },
      {
        sample_stimulus:
          "Regional brief states exhaustive experimental FA contrasts completed yet attachments list only questionnaires and unstructured walk-throughs—MOST corrective response:",
        comparison_options: [
          "Relabel modality honestly; document limits; arrange ethically defensible manipulated contrasts where staffing permits",
          "Ship appendix unchanged claiming FA polish",
          "Replace stakeholders with scripted actors",
          "Destroy descriptive datasets that disagree",
        ],
        correct_match: "Relabel modality honestly; document limits; arrange ethically defensible manipulated contrasts where staffing permits",
        error_feedback:
          "Mislabeling methods confuses reviewers and violates Domain E accountability—even when desperation peaks.",
      },
    ],
    chainTitle: "Indirect → descriptive bridge",
    chainFragments: [
      { id: "a", text: "Administer normed indirect instruments across caregivers." },
      { id: "c", text: "Summarize convergence vs divergence themes." },
      { id: "b", text: "Operationalize suspected consequences into descriptive coding schemes." },
      { id: "d", text: "Schedule descriptive sampling biased toward high-risk routines." },
    ],
    chainOrder: ["a", "b", "c", "d"],
    safmedTerms: [
      { front: "FAST", back: "Indirect checklist estimating behavioral functions." },
      { front: "MAS", back: "Survey motivating reinforcer domains." },
      { front: "QABF", back: "Questionnaire for behavioral function estimates." },
      { front: "Triangulation", back: "Multiple measurement modalities converge." },
      { front: "Social validity", back: "Stakeholder endorsement of targets." },
      { front: "IOA", back: "Agreement indices ensuring definitional fidelity." },
    ],
    worksheet: {
      title: "Chapter 6 — indirect FAB & honest triangulation",
      instructions:
        "Use each item as a three-part practice: identify the indirect method, identify its limitation, and choose the strongest next corroboration step. This converts Chapter 6 from recall into usable clinical reasoning.",
      scenario:
        "FAST ranks tangible reinforcement highest across routines yet archived descriptive ABC logs never document tangible deliveries immediately following episodes.",
      scenario_follow_up:
        "MAS surveys caregivers identifying edible reinforcers prior to preference-assessment probes on-site.\n\nScenario D — Bilingual guardians interpret ‘aggression’ differently on indirect forms; structured interview protocol still gathers parallel timeline data before descriptive sampling expands.",
      fields: [
        {
          id: "response_1",
          label: "FAST versus ABC divergence · Best analytic stance?",
          options: [
            "Maintain tangible hypothesis unchanged",
            "Flag discrepancy and broaden descriptive sampling",
            "Discard descriptive logs as invalid",
          ],
          correct: "Flag discrepancy and broaden descriptive sampling",
        },
        {
          id: "response_2",
          label: "FAST versus ABC divergence · Next permissible analytic step?",
          options: [
            "Immediately tangible intervention packet",
            "Preference assessment pairing tangible stimuli",
            "Terminate referral",
          ],
          correct: "Preference assessment pairing tangible stimuli",
        },
        {
          id: "response_3",
          label: "MAS vignette · Instrument classification?",
          options: [
            "Indirect reinforcer-domain ranking prior to empirical probes",
            "Experimental FA termination criterion",
            "Continuous duration sampling exclusively",
          ],
          correct: "Indirect reinforcer-domain ranking prior to empirical probes",
        },
        {
          id: "response_4",
          label: "Triangulation MOST centrally means:",
          options: [
            "Converging indirect, descriptive, and (when feasible) experimental streams before declaring certainty",
            "Accepting whichever modality arrives first regardless of conflicts",
            "Replacing graphs with anecdotes permanently",
            "Banning caregiver interviews outright",
          ],
          correct:
            "Converging indirect, descriptive, and (when feasible) experimental streams before declaring certainty",
        },
        {
          id: "response_5",
          label: "Social validity checkpoint · BEFORE prioritizing FAST-ranked tangible hypotheses:",
          options: [
            "Ensure caregiver-valued routines remain focal—not mere clinician convenience",
            "Ignore stakeholder priorities whenever graphs look tidy",
            "Exclude IOA considerations permanently",
            "Declare definitive FA outcomes absent observation",
          ],
          correct: "Ensure caregiver-valued routines remain focal—not mere clinician convenience",
        },
        {
          id: "response_6",
          label: "Scenario D — Parallel structured interviews MOST protect against:",
          options: [
            "Incomparable hypotheses when caregivers interpret topography labels differently yet timelines stay aligned",
            "Eliminating interpreters permanently",
            "Deleting descriptive observation once forms print",
          ],
          correct:
            "Incomparable hypotheses when caregivers interpret topography labels differently yet timelines stay aligned",
        },
        {
          id: "response_7",
          label:
            "Scenario D — Documenting multilingual indirect findings for multidisciplinary teams MOST requires:",
          options: [
            "Note linguistic descriptors, interviewer supports, provisional hypotheses—not laundering recall as monocausal mastery",
            "Ship English-only brochures regardless of respondent language",
            "Suppress divergence between translated forms silently",
          ],
          correct:
            "Note linguistic descriptors, interviewer supports, provisional hypotheses—not laundering recall as monocausal mastery",
        },
      ],
      remediationLog:
        "Rebuild the Chapter 6 loop: structured interview and questionnaire findings -> discrepancy mapping -> targeted descriptive checks -> transparent triangulation narrative. Keep hypothesis, uncertainty, and next-step language explicit.",
    },
    legacyBds: {
      id: "mod07-q1",
      stem: "FAST tangible hypothesis contradicts descriptive ABC — MOST defensible response?",
      options: [
        {
          key: "A",
          text: "Announce definitive tangible reinforcement diagnosis.",
          correct: false,
          rationale:
            "Contradiction prevents declarative certainty absent corroborating streams.",
        },
        {
          key: "B",
          text: "Extend descriptive sampling focusing on tangible deliveries.",
          correct: true,
          rationale:
            "Triangulation mandates extending—not abandoning—sampling keyed to contradictory caregiver recall until streams converge.",
        },
        {
          key: "C",
          text: "Delete FAST responses from records.",
          correct: false,
          rationale:
            "Suppressing indirect data violates transparency — integrate conflict explicitly.",
        },
        {
          key: "D",
          text: "Switch hypotheses weekly arbitrarily.",
          correct: false,
          rationale:
            "Lacks systematic analytic rationale.",
        },
      ],
    },
  },
  {
    id: "mod08",
    chapterNumber: 7,
    activityPrefix: 2080,
    title: "Descriptive Assessment Methods",
    codexHeading: "READING — Chapter 7 (Descriptive Assessment Methods)",
    codexIntro: `Chapter 7 deepens descriptive assessment as a disciplined observation method for understanding behavior in natural context before formal experimental contrast conditions are arranged. Cooper frames descriptive methods as high-value hypothesis work that can improve decision quality when teams keep method limits explicit.

Descriptive assessment asks practical questions first: when does behavior cluster, in which routines does it concentrate, who is present, what transitions precede it, and what events often follow it? Answering those questions well helps teams allocate observation effort efficiently instead of sampling randomly.

A key strength of Chapter 7 methods is ecological validity. Observation occurs where behavior actually matters-classrooms, homes, group settings, transitions, and unstructured periods-so the resulting data align with real implementation conditions rather than idealized clinic simulations.

Scatterplots and time-block summaries are used to detect temporal concentration patterns. They help teams identify high-density windows, compare days and routines, and prioritize where denser event-level tracking should occur next.

ABC narrative recording preserves sequential detail at the episode level. Analysts document antecedent context, response topography, and likely consequence events in time order, creating a reviewable narrative structure for team discussion and hypothesis refinement.

Temporal covariation analysis extends this work by checking repeated timing overlap between behavior and environmental events. Cooper emphasizes that overlap is a directional signal for further assessment, not direct proof of maintaining contingency.

Chapter 7 also requires measurement discipline within descriptive workflows. Operationally clear definitions, stable coding boundaries, and observer-consistency checks are necessary so descriptive findings are interpretable and reproducible across staff.

Interpretation standards remain conservative: descriptive methods are correlational. They support hypothesis prioritization and risk planning, but causal conclusions should be deferred until stronger corroboration is available through additional methods.

In practice, descriptive assessment is most powerful when integrated with multimethod assessment planning. Teams use descriptive findings to decide which hypotheses deserve targeted probes, what routines should be sampled more densely, and how to stage next-step assessment safely.

Overall, Chapter 7 teaches a high-utility professional posture: observe in context, document sequence clearly, graph concentrations honestly, and report uncertainty precisely so stakeholders receive useful guidance without false certainty.

To learn Chapter 7 deeply, practice converting descriptive observations into structured hypotheses without overclaiming cause. The chapter is about disciplined pattern reading, not shortcut conclusions.`,
    footnotes: {
      x7_1: {
        label: "[1]",
        lines: [
          "CHH Chapter 7 — descriptive correlational assessment overview (Pearson Global 3rd ed.; verify exact pp. in your assigned TOC).",
          "Descriptive/correlational summaries primarily support assessment hypothesis development; graph clarity, observer alignment, and honest interpretation language are essential.",
          "Verify granular Task List labels in the official BACB competency PDF alongside assigned CHH reading.",
          "Not quoted from CHH.",
        ],
      },
      x7_2: {
        label: "[2]",
        lines: [
          "CHH Chapter 7 — scatterplot/time-block summaries exposing temporal clustering.",
          "Not quoted from CHH.",
        ],
      },
      x7_3: {
        label: "[3]",
        lines: [
          "CHH Chapter 7 — ABC narrative recording synthesizing sequential dependencies.",
          "Not quoted from CHH.",
        ],
      },
      x7_4: {
        label: "[4]",
        lines: [
          "CHH Chapter 7 — temporal covariation motivating hypotheses versus guaranteeing inferred functions.",
          "Exam vignettes routinely pair temporal overlap with obligatory humility language—distinct from manipulated FA contrasts (often still Domain F scaffolding until contingency tests run).",
          "Not quoted from CHH.",
        ],
      },
      x7_5: {
        label: "[5]",
        lines: [
          "CHH Chapter 7 — ecological validity emphasis: descriptive data are gathered in naturally occurring routines and transitions where intervention decisions will be applied.",
          "Not quoted from CHH.",
        ],
      },
      x7_6: {
        label: "[6]",
        lines: [
          "CHH Chapter 7 — descriptive methods still require operational definitions, coding consistency, and conservative interpretation language.",
          "Not quoted from CHH.",
        ],
      },
    },
    codexFootnoteRefs: [
      { afterSentenceIndex: 0, ref: "x7_1" },
      { afterSentenceIndex: 3, ref: "x7_2" },
      { afterSentenceIndex: 4, ref: "x7_3" },
      { afterSentenceIndex: 5, ref: "x7_4" },
      { afterSentenceIndex: 2, ref: "x7_5" },
      { afterSentenceIndex: 6, ref: "x7_6" },
    ],
    codexPlainLanguageSummary: {
      heading: "Plain language — conversational recap",
      intro:
        "Put simply, Chapter 7 teaches you how to read behavior patterns in real settings with professional accuracy. You learn to gather high-quality descriptive evidence, then use it to guide what should be tested next.",
      chunks: [
        {
          subtitle: "What Chapter 7 is trying to prevent",
          segments: [
            {
              type: "text",
              text: "This chapter prevents teams from jumping from one visible pattern to one confident cause. Descriptive data can be strong and still be correlational. The goal is cleaner hypothesis targeting, not instant functional certification ",
            },
            { type: "footnote", ref: "x7_1" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Observe where life actually happens",
          segments: [
            {
              type: "text",
              text: "Chapter 7 favors ecological validity: observe in real routines, real transitions, and real staffing patterns. That makes descriptive output immediately useful to classrooms, caregivers, and clinical teams ",
            },
            { type: "footnote", ref: "x7_5" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Scatterplots guide scarce observation time",
          segments: [
            {
              type: "text",
              text: "Scatterplots are not just visuals; they are scheduling tools. Use them to find high-density periods, then place your highest-quality descriptive sampling in those windows first ",
            },
            { type: "footnote", ref: "x7_2" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "ABC narratives keep sequence accountable",
          segments: [
            {
              type: "text",
              text: "When teams disagree about what behavior means, ABC narratives help by preserving what happened before, during, and after each episode in order. That structure makes case discussion less impressionistic and more reviewable ",
            },
            { type: "footnote", ref: "x7_3" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Temporal overlap is directional evidence",
          segments: [
            {
              type: "text",
              text: "If behavior repeatedly clusters around specific events, treat that as a priority hypothesis for deeper follow-up. But keep language conservative until stronger differentiation is available ",
            },
            { type: "footnote", ref: "x7_4" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Reliability still matters in descriptive work",
          segments: [
            {
              type: "text",
              text: "Descriptive assessment still needs clear definitions and coding consistency. If observers are not scoring the same events similarly, descriptive conclusions become unstable no matter how polished the graph looks ",
            },
            { type: "footnote", ref: "x7_6" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Practical chapter rule",
          segments: [
            {
              type: "text",
              text: "Describe in context, separate patterns from causes, and let descriptive findings drive what should be tested next-not what should be declared final today.",
            },
          ],
        },
        {
          subtitle: "How to study Chapter 7 for application",
          segments: [
            {
              type: "text",
              text: "Use a repeatable drill: identify the descriptive method used, state what pattern it showed, state what it does not prove, and name the next assessment step. This builds the exact interpretive control Chapter 7 is designed to teach.",
            },
          ],
        },
        {
          subtitle: "High-Yield Confusion Points",
          segments: [
            {
              type: "text",
              text: "High-yield confusion points in this chapter include treating temporal covariation as proof of function, forgetting IOA and definition quality in descriptive work, and writing conclusions that outrun the method. Resolve them by keeping pattern statements separate from causal statements.",
            },
          ],
        },
      ],
    },
    supplementalFootnotes: {
      ch7_v1: {
        label: "[V1]",
        lines: [
          "CHH Chapter 7 — scatterplot/time-block displays concentrate observation on intervals where topography clusters ecologically meaningful anchors (e.g., transitions, staffing rotations).",
        ],
      },
      ch7_v2: {
        label: "[V2]",
        lines: [
          "CHH Chapter 7 — ABC narratives preserve sequential antecedent–behavior–consequence detail fueling hypotheses without claiming programmed manipulation occurred.",
        ],
      },
      ch7_v3: {
        label: "[V3]",
        lines: [
          "CHH Chapter 7 — temporal covariation links overlapping timing signatures across events; provocative—but not interchangeable with experimental isolation of reinforcement.",
        ],
      },
      ch7_v4: {
        label: "[V4]",
        lines: [
          "CHH Chapter 7 — ecological validity: observation windows mimic naturally occurring instructional and caregiving rhythms whenever dignity and logistics allow.",
        ],
      },
      ch7_v5: {
        label: "[V5]",
        lines: [
          "CHH Chapter 7 — interobserver agreement: independent coders’ correspondence protects descriptive prevalence and hotspot hypotheses from definitional drift.",
        ],
      },
      ch7_v6: {
        label: "[V6]",
        lines: [
          "CHH Chapter 7 — latency overlays: elapsed intervals from evocative antecedent or SD onset to topography onset sharpen temporal hypotheses alongside scatter summaries.",
        ],
      },
      ch7_kc1: {
        label: "[KC1]",
        lines: [
          "Descriptive assessment narrates correlations inside lived ecology—not definitive functional diagnoses absent corroborating contrasts.",
        ],
      },
      ch7_kc2: {
        label: "[KC2]",
        lines: [
          "Scatterplots steer scarce coder minutes toward hotspots deserving denser ABC or latency overlays.",
        ],
      },
      ch7_kc3: {
        label: "[KC3]",
        lines: [
          "Concurrent ABC exemplars tether qualitative storytelling to repeatable operational definitions underpinning reliability checks.",
        ],
      },
      ch7_kc4: {
        label: "[KC4]",
        lines: [
          "Annotated descriptive graphs cite phase windows and procedural fidelity so multidisciplinary audiences interpret correlations responsibly (Domain C display discipline).",
        ],
      },
      ch7_kc5: {
        label: "[KC5]",
        lines: [
          "Briefings differentiate hypotheses plainly from finalized classifications stakeholders might otherwise misread ethically (Domain E).",
        ],
      },
      ch7_exam_f: {
        label: "[F-desc]",
        lines: [
          "Expect to distinguish correlational/description packages from indirect recall-only work and from full experimental FA—label methods accurately.",
          "Outline titles here stay thematic—verify stems against the BACB PDF.",
        ],
      },
      ch7_exam_c: {
        label: "[C-graph]",
        lines: [
          "Scatterplots, phase markers, and IOA-backed descriptive protocols echo Domain C fidelity when measurement enables trustworthy correlations.",
        ],
      },
      ch7_ethics_plot: {
        label: "[E-plot]",
        lines: [
          "Selling temporal overlap as airtight proof of reinforcer maintenance—without modality-accurate language—violates stakeholder honesty simultaneous with sloppy assessment narration.",
        ],
      },
    },
    vocabularySection: {
      heading: "VOCABULARY — Chapter 7 excerpts",
      intro:
        "Drill verbal fluency distinguishing descriptive hypothesis logic (Domain F) from measurement and display habits (Domain C) that keep hypotheses auditable.",
      entries: [
        { term: "Scatterplot (time-block)", definition: "Time-block matrices plotting where occurrences concentrate relative to ecological anchors.", footnoteRef: "ch7_v1" },
        { term: "ABC narrative", definition: "Sequential qualitative antecedent–behavior–consequence summaries fueling hypotheses without implying manipulation.", footnoteRef: "ch7_v2" },
        { term: "Temporal covariation", definition: "Shared timing patterns across variables provoking hypotheses—not guaranteed functional diagnoses.", footnoteRef: "ch7_v3" },
        { term: "Ecological validity", definition: "Observation mirrors natural instructional and caregiving contingencies whenever dignity and logistics permit.", footnoteRef: "ch7_v4" },
        {
          term: "Interobserver agreement (IOA)",
          definition: "Cross-rater coding correspondence guarding definitional fidelity on descriptive protocols.",
          footnoteRef: "ch7_v5",
        },
        {
          term: "Latency codomain",
          definition: "Elapsed interval from evocative SD or instructional onset to qualified response sharpening hotspot reads.",
          footnoteRef: "ch7_v6",
        },
      ],
    },
    keyConceptsSection: {
      heading: "KEY CONCEPTS — Chapter 7 (descriptive correlational methods)",
      intro:
        "Panels below anchor vignettes you will defend aloud: correlations narrate—they do not license punitive jumps or monocausal brochures without later convergence.",
      concepts: [
        {
          title: "Domain F choreography: correlations before manipulated contrasts",
          segments: [
            {
              type: "text",
              text: "Descriptive arcs inventory ecology while refusing to impersonate differentiated FA contrasts exam items still love to juxtapose responsibly ",
            },
            { type: "footnote", ref: "ch7_exam_f" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Domains C & E braid graphs with humble captions",
          segments: [
            {
              type: "text",
              text: "Fidelity-heavy plots plus explicit hypothesis-versus-evidence captions keep multidisciplinary readers from mistaking hotspots for airtight reinforcer certificates ",
            },
            { type: "footnote", ref: "ch7_exam_c" },
            { type: "text", text: "; overstated claims ignite " },
            { type: "footnote", ref: "ch7_ethics_plot" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Descriptive humility: correlation lacks manipulation",
          segments: [{ type: "text", text: "Cooper underscores narrating overlaps without asserting experimental isolation prematurely " }, { type: "footnote", ref: "ch7_kc1" }, { type: "text", text: "." }],
        },
        {
          title: "Scatterplots focus observer bandwidth ethically",
          segments: [{ type: "text", text: "Temporal spikes signal where descriptive density buys clarity before teams escalate contingency tests " }, { type: "footnote", ref: "ch7_kc2" }, { type: "text", text: "." }],
        },
        {
          title: "ABC motifs bridge storytelling and measurement anchors",
          segments: [{ type: "text", text: "Vignettes plus operational exemplars scaffold IOA-able descriptive summaries " }, { type: "footnote", ref: "ch7_kc3" }, { type: "text", text: "." }],
        },
        {
          title: "Annotated summaries respect interpretive fidelity",
          segments: [{ type: "text", text: "Phase windows and fidelity notes tether plots to procedural reality auditors can scrutinize " }, { type: "footnote", ref: "ch7_kc4" }, { type: "text", text: "." }],
        },
        {
          title: "Stakeholder briefing discipline",
          segments: [{ type: "text", text: "Plain-language caveats differentiate motivated hypotheses from finished classifications circulating legally " }, { type: "footnote", ref: "ch7_kc5" }, { type: "text", text: "." }],
        },
      ],
      plainLanguageSummary: {
        heading: "Key concepts — plain-language companion",
        intro:
          "Before presenting scatterplots to guardians, rehearse the caveat script: descriptive patterns motivate hypotheses—not functional verdicts. Pair every hotspot with ecological anchors, operational definitions, transparent graph notes, and a plan for stronger probes.",
        chunks: [
          {
            subtitle: "Name the modality before the claim",
            segments: [
              { type: "text", text: "Correlational and descriptive work narrates ecology; it does not stand in for manipulated FA contrasts. Preserve that analytic boundary on every stem " },
              { type: "footnote", ref: "ch7_exam_f" },
              { type: "text", text: ". Covariation whispers hypotheses—it does not prove function " },
              { type: "footnote", ref: "ch7_kc1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Graphs need a measurement spine",
            segments: [
              { type: "text", text: "Scatter fidelity, ecological anchors, and coder agreement keep overlays trustworthy—not decorative " },
              { type: "footnote", ref: "ch7_exam_c" },
              { type: "text", text: ". Annotated summaries with phase windows and fidelity notes tether plots to procedural reality auditors can replay " },
              { type: "footnote", ref: "ch7_kc4" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Hotspots focus scarce observation",
            segments: [
              { type: "text", text: "Steer observation density toward time blocks scatterplots flag before escalating to experimental tests " },
              { type: "footnote", ref: "ch7_kc2" },
              { type: "text", text: ". Time-block logic tells you where eyes go next " },
              { type: "footnote", ref: "ch7_v1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "ABC chains stay qualitative yet coded",
            segments: [
              { type: "text", text: "Sequential ABC narratives must tether to operational definitions IOA teams can uphold " },
              { type: "footnote", ref: "ch7_kc3" },
              { type: "text", text: ". Vignettes plus exemplars scaffold summaries observers can score consistently " },
              { type: "footnote", ref: "ch7_v2" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Covariation motivates sharper questions",
            segments: [
              { type: "text", text: "Aligned timing between antecedents and behavior motivates sharper assessment questions—not functional certificates—until manipulated packages adjudicate " },
              { type: "footnote", ref: "ch7_v3" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Ecological windows over lab cosplay",
            segments: [
              { type: "text", text: "Observation windows should mirror dignified real schedules whenever logistics allow. Descriptive strength comes from ecological validity, not artificial tidiness " },
              { type: "footnote", ref: "ch7_v4" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Stakeholder briefing discipline",
            segments: [
              { type: "text", text: "Briefings must separate motivated hypotheses from finished classifications. Mislabeling descriptive work as FA erodes trust " },
              { type: "footnote", ref: "ch7_kc5" },
              { type: "text", text: ". Plot-honesty guardrails keep graphs from outrunning measurement integrity " },
              { type: "footnote", ref: "ch7_ethics_plot" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "High-Yield Confusion Points",
            segments: [
              { type: "text", text: "High-yield confusion points in this chapter include treating temporal overlap as confirmation, overlooking IOA and definition quality in descriptive summaries, and reporting correlational findings with causal wording. Resolve them by separating descriptive evidence from causal claims in every conclusion." },
              { type: "footnote", ref: "ch7_kc1" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch7_v5" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch7_ethics_plot" },
              { type: "text", text: "." },
            ],
          },
        ],
      },
    },
    vocabularyMatchInstructions:
      "Match each Chapter 7 descriptive method to its real analytic role: what pattern it can reveal, what it cannot prove, and how it should guide next assessment decisions.",
    matchActivityInstructions:
      "For each descriptive vignette, identify the method, state the pattern shown, and name the correct caveat language. Chapter 7 mastery means interpreting patterns without overclaiming causation.",
    chainActivityInstructions:
      "Order the descriptive workflow from observation design to communication: ecological windows, ABC documentation, pattern extraction, and stakeholder briefing with clear caveats.",
    mts: [
      {
        sample_stimulus:
          "Clinician plots occurrences across classroom periods detecting spikes before transitions.",
        comparison_options: ["Scatterplot analysis", "Functional analysis", "Standardized IQ assessment"],
        correct_match: "Scatterplot analysis",
        error_feedback:
          "Scatterplots visualize temporal covariation absent systematic manipulation.",
      },
      {
        sample_stimulus:
          "Observers narrate antecedent–behavior–consequence chains verbatim.",
        comparison_options: ["ABC narrative recording", "Whole-interval tally", "Permanent product"],
        correct_match: "ABC narrative recording",
        error_feedback:
          "Sequential qualitative detailing aligns with descriptive ABC narratives.",
      },
      {
        sample_stimulus:
          "Behavior analyst overlays median latency-to-first-aggression marker on scatterplot transitions before ethically scheduling denser probes—PRIMARY Chapter 7 extension MOST emphasized:",
        comparison_options: [
          "Temporal covariation + latency-informed descriptive deepening",
          "Completed multi-element FA certifying reinforcement overnight",
          "Indirect FAST checklist replacing observation",
          "Permanent-product weighing exclusively diagnosing function",
        ],
        correct_match: "Temporal covariation + latency-informed descriptive deepening",
        error_feedback:
          "Latency descriptors refine correlational hotspots—they do not certify FA conclusions absent arranged contrasts.",
      },
      {
        sample_stimulus:
          "Two coders tally transition-linked aggression bursts after operational definitions rehearse aloud—PRIMARY safeguard MOST aligns with:",
        comparison_options: [
          "IOA guarding definitional fidelity before interpreting descriptive prevalence",
          "Deleting divergent coder rows secretly",
          "Replacing graphed data with marketing snapshots",
          "Certifying respondent extinction cures graphically",
        ],
        correct_match: "IOA guarding definitional fidelity before interpreting descriptive prevalence",
        error_feedback:
          "Descriptive dashboards still hinge on observable agreement—classic Domain C support for trustworthy Domain F narratives.",
      },
      {
        sample_stimulus:
          "Regional special-ed director captions scatter-only slide “Experimental FA proved escape-maintained aggression.” MOST accountable correction:",
        comparison_options: [
          "Relabel honestly as correlational descriptive evidence pending modality-accurate contrasts",
          "Ship captions unchanged because slides look polished",
          "Delete contradictory ABC appendices silently",
          "Issue punishment plans immediately from hotspots",
        ],
        correct_match: "Relabel honestly as correlational descriptive evidence pending modality-accurate contrasts",
        error_feedback:
          "Correlation slides mislabeled as FA violate Domain E stakeholder honesty plus multimethod labeling discipline.",
      },
      {
        sample_stimulus:
          "Team defines scatterplot anchors using authentic campus bell/transitions rather than sterile lab cues—PRIMARY concept:",
        comparison_options: [
          "Ecological validity prioritizing dignified ecological windows",
          "Ignoring classroom transitions permanently",
          "Fabricating hotspots absent stakeholder input",
          "Replacing anchors with billboard schedules unrelated to site ecology",
        ],
        correct_match: "Ecological validity prioritizing dignified ecological windows",
        error_feedback:
          "Descriptive tools stay faithful to ecology consumers navigate daily.",
      },
    ],
    chainTitle: "Descriptive convergence workflow",
    chainFragments: [
      { id: "c", text: "Summarize recurrent ABC motifs linking MO variables." },
      { id: "a", text: "Define observation windows honoring ecological validity." },
      { id: "d", text: "Brief stakeholders with graphical summaries plus caveats." },
      { id: "b", text: "Collect concurrent ABC narratives tied to coded exemplars." },
    ],
    chainOrder: ["a", "b", "c", "d"],
    safmedTerms: [
      { front: "Scatterplot", back: "Time-block matrices plotting occurrences." },
      { front: "ABC narrative", back: "Sequential qualitative summaries." },
      { front: "Ecological validity", back: "Observation mirrors natural contingencies." },
      { front: "Temporal covariation", back: "Shared timing patterns across variables." },
      { front: "Interobserver agreement", back: "Cross-rater codings reliability." },
      { front: "Latency codomain", back: "Time between SD and response." },
    ],
    worksheet: {
      title: "Chapter 7 — descriptive plots, narratives & honest captions",
      instructions:
        "Practice Chapter 7 interpretation discipline: identify the descriptive method, describe the strongest supported hypothesis, and state what additional evidence is required before causal claims.",
      scenario:
        "Scatterplot spikes concentrate immediately before unstructured transitions while tangible deliveries rarely appear afterward.",
      scenario_follow_up:
        "Observers concurrently transcribe verbatim ABC chains tying transitions to challenging episodes.\n\nScenario D — District slide deck captions scatterplots as completed experimental FA while attachments include only annotated time-block summaries with no evocative test conditions.",
      fields: [
        {
          id: "response_1",
          label: "Scatterplot vignette · Function inference?",
          options: [
            "Escape from transitions emerges as plausible hypothesis",
            "Tangible reinforcement confirmed definitively",
            "Automatic reinforcement ruled out categorically",
          ],
          correct: "Escape from transitions emerges as plausible hypothesis",
        },
        {
          id: "response_2",
          label: "Scatterplot vignette · Responsible follow-up?",
          options: [
            "Dismiss descriptive spikes",
            "Layer latency-coded transitions plus hypothesized reinforcer removal probes ethically",
            "Issue punitive contingency immediately",
          ],
          correct: "Layer latency-coded transitions plus hypothesized reinforcer removal probes ethically",
        },
        {
          id: "response_3",
          label: "ABC narrative vignette · Tool classification?",
          options: [
            "Descriptive sequential qualitative recording",
            "Indirect FAST checklist exclusively",
            "Withdrawal design replication only",
          ],
          correct: "Descriptive sequential qualitative recording",
        },
        {
          id: "response_4",
          label: "Temporal covariation MOST closely refers to:",
          options: [
            "Aligned timing patterns motivating hypotheses across environmental events",
            "Guaranteed experimental isolation absent manipulation",
            "Respondent extinction termination criteria",
            "Latency shaping mastery definitions exclusively",
          ],
          correct: "Aligned timing patterns motivating hypotheses across environmental events",
        },
        {
          id: "response_5",
          label: "Ecological validity emphasizes:",
          options: [
            "Observation windows mirror naturally occurring contingencies where feasible",
            "Eliminating stakeholder explanations permanently",
            "Conducting FA exclusively inside laboratories unrelated to classrooms",
            "Ignoring scatterplots whenever inconvenient",
          ],
          correct: "Observation windows mirror naturally occurring contingencies where feasible",
        },
        {
          id: "response_6",
          label:
            "Scenario D — Labeling correlational slides as exhaustive FA MOST merges which concerns?",
          options: [
            "Domain E honest modality reporting plus Domain F accurate assessment labeling",
            "Domain A phylogenic glossaries exclusively",
            "Domain G punishment protocol menus exclusively",
          ],
          correct:
            "Domain E honest modality reporting plus Domain F accurate assessment labeling",
        },
        {
          id: "response_7",
          label: "Scenario D · BEST corrective move before stakeholder vote?",
          options: [
            "Rewrite captions to descriptive correlational status; cite planned/ethically phased contrasts separately",
            "Keep slides to appease leadership optics",
            "Delete ABC appendices to reduce confusion",
          ],
          correct:
            "Rewrite captions to descriptive correlational status; cite planned/ethically phased contrasts separately",
        },
      ],
      remediationLog:
        "Rebuild with a four-step script: collect ecologically valid observations, tighten ABC and IOA quality, summarize recurring patterns clearly, and communicate hypothesis vs proof boundaries in every report.",
    },
    legacyBds: {
      id: "mod08-q1",
      stem: "Temporal spikes precede transitions without tangible deliveries — MOST cautious stance?",
      options: [
        {
          key: "A",
          text: "Certify tangible reinforcement dominance.",
          correct: false,
          rationale:
            "No tangible deliveries observed — premature tangible attribution violates data alignment.",
        },
        {
          key: "B",
          text: "Infer escape from transition demands pending corroboration.",
          correct: true,
          rationale:
            "Correlational topography plus absence of tangible deliveries supports tentative escape hypotheses—Domain F rehearsal until converging modalities ethically adjudicate contenders.",
        },
        {
          key: "C",
          text: "Conclude behavior is respondent-only.",
          correct: false,
          rationale:
            "Operant hypotheses remain plausible absent respondent elicitation logic.",
        },
        {
          key: "D",
          text: "Ignore spikes completely.",
          correct: false,
          rationale:
            "Dismisses patterned descriptive evidence inconsistent with analytic discipline.",
        },
      ],
    },
  },
  {
    id: "mod09",
    chapterNumber: 8,
    activityPrefix: 2090,
    title: "Experimental Functional Behavioral Assessment",
    codexHeading: "READING — Chapter 8 (Experimental Functional Behavioral Assessment)",
    codexIntro: `Chapter 8 in Cooper, Heron, and Heward presents experimental functional behavioral assessment (functional analysis) as the strongest direct method for testing why behavior persists. Instead of inferring function from impressions, analysts arrange controlled condition contrasts to determine which consequences reliably increase responding.

The chapter also emphasizes that experimental analysis begins with safety and ethics infrastructure: informed consent, medical and risk review, clear target definitions, staffing ratios, emergency procedures, and explicit stop criteria. FA quality is not only about design logic; it is also about whether the analysis can be conducted safely and responsibly.

Interview-informed and record-informed hypotheses guide condition selection. Rather than running generic menus by default, Chapter 8 supports tailoring test conditions to realistic contingencies identified during intake while preserving enough experimental contrast to differentiate likely functions.

Replication and transparency are central interpretation rules. Differentiated response patterns are strengthened when effects repeat across sessions or phases, and when constraints force abbreviated probes, analysts should report limits directly rather than presenting preliminary evidence as complete FA confirmation.

Standard FA logic compares evocative test conditions (for example, attention, escape, and tangible arrangements) with control or enriched conditions that minimize motivating operations for the tested contingencies. Interpretation depends on relative response differentiation across those conditions, not single-session spikes.

Chapter 8 also reinforces that condition procedures must be operationalized in observable terms: what antecedent context is arranged, what response topography is scored, and what consequence follows each response. Tight procedural definitions allow observers to implement conditions consistently and support meaningful interpretation.

Measurement quality remains non-negotiable in FA. Analysts need continuous or otherwise defensible response measurement, procedural integrity checks, and interobserver agreement so differences across conditions can be trusted as analytic signals rather than recording drift.

When data are undifferentiated, the chapter advises against premature certainty. Teams may need to reassess definitions, motivating operations, establishing and abolishing variables, idiosyncratic contingencies, session length, sequence effects, or condition fidelity before making treatment-level conclusions.

Chapter 8 also helps analysts separate what FA can and cannot answer. Experimental assessment can identify probable maintaining contingencies, but treatment planning still requires social validity, feasibility analysis, stakeholder collaboration, and ongoing progress monitoring after intervention begins.

Overall, the chapter teaches a rigorous professional standard: manipulate contingencies deliberately, protect participants, measure cleanly, replicate findings when possible, and communicate confidence levels honestly so intervention decisions are both scientifically and ethically defensible.

For learning, Chapter 8 should be practiced as condition-logic fluency: identify what each condition arranges, what comparison it uses, what data pattern would support a function hypothesis, and what safety criteria govern whether the condition should run.`,
    footnotes: {
      x8_1: {
        label: "[1]",
        lines: [
          "CHH Chapter 8 - experimental functional analysis overview (Pearson Global 3rd ed.; verify exact pages in your assigned edition).",
          "Core chapter focus: arranged condition contrasts to identify likely maintaining contingencies through differential responding across test and control contexts.",
          "For exam prep, verify exact BACB Test Content Outline wording in the official outline PDF.",
          "Not quoted from CHH.",
        ],
      },
      x8_2: {
        label: "[2]",
        lines: [
          "CHH Chapter 8 - safety and ethics prerequisites before running experimental conditions.",
          "Typical safeguards include consent, risk review, staffing coverage, crisis response planning, and pre-set termination criteria tied to participant protection.",
          "Not quoted from CHH.",
        ],
      },
      x8_3: {
        label: "[3]",
        lines: [
          "CHH Chapter 8 - interview-informed and context-informed tailoring of FA conditions.",
          "Analysts can customize condition menus to likely contingencies while preserving sufficient contrast for differentiation.",
          "Not quoted from CHH.",
        ],
      },
      x8_4: {
        label: "[4]",
        lines: [
          "CHH Chapter 8 - replication, undifferentiated-data interpretation, and transparent reporting under practical constraints.",
          "When FA is abbreviated or inconclusive, conclusions should be proportionate and clearly labeled as preliminary rather than definitive.",
          "Not quoted from CHH.",
        ],
      },
    },
    codexFootnoteRefs: [
      { afterSentenceIndex: 0, ref: "x8_1" },
      { afterSentenceIndex: 1, ref: "x8_2" },
      { afterSentenceIndex: 2, ref: "x8_3" },
      { afterSentenceIndex: 3, ref: "x8_4" },
    ],
    codexPlainLanguageSummary: {
      heading: "Plain language — conversational recap",
      intro:
        "Put simply, Chapter 8 teaches functional analysis as a teachable decision process, not a script. You learn condition logic, safety logic, and interpretation logic together so your conclusions are both accurate and responsible.",
      chunks: [
        {
          subtitle: "Run true condition contrasts",
          segments: [
            {
              type: "text",
              text: "Experimental FA is not a casual checklist. You arrange specific test conditions that each model a suspected reinforcer class, compare them with control or enriched conditions, and look for consistent differentiation in responding across those contexts ",
            },
            { type: "footnote", ref: "x8_1" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Safety rules are part of the method",
          segments: [
            {
              type: "text",
              text: "You do not run high-risk conditions just because a schedule is open. Consent, staffing, risk planning, and stop criteria are built into Chapter 8 logic because participant protection and analytic quality go together ",
            },
            { type: "footnote", ref: "x8_2" },
            {
              type: "text",
              text: ". If safeguards are not in place, the right decision is to pause, redesign, or stage the assessment safely.",
            },
          ],
        },
        {
          subtitle: "Interview-informed tailoring",
          segments: [
            {
              type: "text",
              text: "Chapter 8 allows condition tailoring based on intake and descriptive findings. If the strongest hypothesis involves specific transitions, demands, or tangible loss, your FA should reflect that ecology while still preserving interpretable contrasts ",
            },
            { type: "footnote", ref: "x8_3" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Abbreviate without lying",
          segments: [
            {
              type: "text",
              text: "Replication strengthens confidence when differentiated patterns repeat. When realities force abbreviated probes, report exactly what was and was not tested, and keep conclusions proportional to evidence quality ",
            },
            { type: "footnote", ref: "x8_4" },
            {
              type: "text",
              text: ".",
            },
          ],
        },
        {
          subtitle: "Exam-ready decision rule",
          segments: [
            {
              type: "text",
              text: "For BCBA exam items, ask four questions in order: what contingency did this condition arrange, what comparison condition was used, were safeguards adequate, and does the data pattern justify the confidence level in the answer choice.",
            },
          ],
        },
        {
          subtitle: "How to learn Chapter 8 beyond memorization",
          segments: [
            {
              type: "text",
              text: "Study each FA condition as a contingency sentence: under this antecedent setup, this response produces this consequence. Then compare conditions and explain why one pattern supports a function hypothesis and another does not. That practice builds real Chapter 8 fluency.",
            },
          ],
        },
        {
          subtitle: "High-Yield Confusion Points",
          segments: [
            {
              type: "text",
              text: "High-yield confusion points in this chapter include misidentifying FA condition logic, interpreting single-session spikes as stable differentiation, and ignoring safeguard requirements when risk is high. Resolve them by checking condition contingency, safety readiness, and replication before final interpretation.",
            },
          ],
        },
      ],
    },
    supplementalFootnotes: {
      ch8_v1: {
        label: "[V1]",
        lines: ["CHH Chapter 8 — multi-element contrasts pair test conditions against plausible comparisons differentiating reinforcing histories—not correlational anecdotes."],
      },
      ch8_v2: {
        label: "[V2]",
        lines: ["CHH Chapter 8 — consent, supervisory ratios, medically cleared topography, termination logic, protective barriers preceding intensive manipulation agendas."],
      },
      ch8_v3: {
        label: "[V3]",
        lines: ["CHH Chapter 8 — interview-informed FA tailors evocative menus toward localized hypotheses instead of blindly rotating cookbook contrasts."],
      },
      ch8_v4: {
        label: "[V4]",
        lines: ["CHH Chapter 8 — replication plus abbreviated substitutes transparently cite staffing ceilings instead of implying exhaustive contrasts absent arranged data."],
      },
      ch8_kc1: {
        label: "[KC1]",
        lines: ["Evocative contrasts expose likely reinforcer classes when differentiation obligations meet ethical feasibility gates."],
      },
      ch8_kc2: {
        label: "[KC2]",
        lines: ["Escape, attention, tangible, alone/control analogues each manipulate distinct consequence packages exam discriminations hinge on cleanly."],
      },
      ch8_kc3: {
        label: "[KC3]",
        lines: ["Control/enriched baselines juxtapose minimized programmed reinforcement against test spikes for interpretive contrast."],
      },
      ch8_kc4: {
        label: "[KC4]",
        lines: ["Risk-managed sequencing may foreground descriptive substitutes or phased daylight probes pending safeguards—truthful modality labeling stays mandatory."],
      },
      ch8_kc5: {
        label: "[KC5]",
        lines: ["Replication strengthens inferential clarity when differentiated patterns recur across observers or abbreviated replications."],
      },
      ch8_exam_f: {
        label: "[F-exp]",
        lines: [
          "Assessment items emphasize contrast logic—the contingency each condition arranges—not acronyms detached from operations.",
          "Verify CHH-aligned terminology against the BACB PDF.",
        ],
      },
      ch8_ethics_fa: {
        label: "[E-FA]",
        lines: [
          "Proceeding unsupervised FA with medically risky topography typifies unethical sequencing even when analytic hunger spikes.",
          "Pair every manipulation narrative with what safeguards actually existed.",
        ],
      },
      ch8_supervisory_g: {
        label: "[G-coord]",
        lines: ["Supervisory oversight, staffing ratios, and emergency protocols routinely appear intertwined with FA ethics stems on high-stakes exams."],
      },
      ch8_v5: {
        label: "[V5]",
        lines: ["CHH Chapter 8 — escape FA: demand/academic removals contingent on occurrences isolate escape-maintained hypotheses."],
      },
      ch8_v6: {
        label: "[V6]",
        lines: ["CHH Chapter 8 — attention FA: programmable social acknowledgement episodes contingent on topography differentiating attention control."],
      },
      ch8_v7: {
        label: "[V7]",
        lines: ["CHH Chapter 8 — tangible FA: access to tangibles/leisure contingent on occurrences clarifying tangible reinforcement."],
      },
      ch8_v8: {
        label: "[V8]",
        lines: ["CHH Chapter 8 — alone / no-interaction analogue: solitude with minimized programmed reinforcement contrasted against evocative tests."],
      },
      ch8_v9: {
        label: "[V9]",
        lines: ["CHH Chapter 8 — latency FA: time contingent removal of reinforcement sharpening differentiation within safeguarded evocative menus."],
      },
      ch8_v10: {
        label: "[V10]",
        lines: ["CHH Chapter 8 — evocative control / enriched play comparison baselines juxtaposed against test spikes for interpretive contrast."],
      },
    },
    vocabularySection: {
      heading: "VOCABULARY — Chapter 8 excerpts",
      intro:
        "Fluency check: discriminate experimental FA packages (Domain F) from descriptive packages while naming Domain E and Domain G gatekeepers attaching to each vignette.",
      entries: [
        { term: "Evocative contrasts", definition: "Test conditions manipulating consequences to isolate reinforcing histories versus comparison baselines.", footnoteRef: "ch8_v1" },
        { term: "Escape FA", definition: "Demand or academic burden removal contingent on behavior isolating escape hypotheses.", footnoteRef: "ch8_v5" },
        { term: "Attention FA", definition: "Social acknowledgement delivered contingent on topography isolating attention-maintained arcs.", footnoteRef: "ch8_v6" },
        { term: "Tangible FA", definition: "Access to leisure or tangibles contingent on occurrences probing tangible reinforcement.", footnoteRef: "ch8_v7" },
        { term: "Alone / no-interaction FA", definition: "Solitude analogue minimizing programmed reinforcement compared with evocative contrasts.", footnoteRef: "ch8_v8" },
        { term: "Latency FA", definition: "Time-based reinforcement withholding schedules embedded in FA menus isolating evocative effects.", footnoteRef: "ch8_v9" },
        { term: "Control / enriched play comparison", definition: "Enriched contexts with minimized evocative tests anchoring differentiated spikes.", footnoteRef: "ch8_v10" },
        { term: "Safeguards & consent scaffolding", definition: "Protective staffing, medically cleared topography, guardian authorization, termination rules before intensive probes.", footnoteRef: "ch8_v2" },
        { term: "Interview-informed FA (IWFA)", definition: "Contrast menus shaped by multimethod hypotheses—not generic rotations ignoring ecology.", footnoteRef: "ch8_v3" },
        { term: "Replication / abbreviated substitutes", definition: "Confirmatory contrasts or ethically scaled substitutes narrated with staffing honesty.", footnoteRef: "ch8_v4" },
      ],
    },
    keyConceptsSection: {
      heading: "KEY CONCEPTS — Chapter 8 (experimental FAB)",
      intro:
        "Every panel pairs analytic differentiation mandates with humane sequencing—exam writers fuse Domain F, Domain C, and occasionally Domain E cues in single paragraphs.",
      concepts: [
        {
          title: "Domain F: evocative contrasts discriminate reinforcer classes",
          segments: [
            { type: "text", text: "FA isolates reinforcing histories programmers arrange—not hallway hunches camouflaged as data " },
            { type: "footnote", ref: "ch8_exam_f" },
            { type: "text", text: ", letting evocative contrasts surface differentiated reinforcer suspicions auditors later graph " },
            { type: "footnote", ref: "ch8_kc1" },
            { type: "text", text: "." },
          ],
        },
        {
          title: "Domains E + G throttle manipulation until safeguards exist",
          segments: [{ type: "text", text: "Supervision, staffing, medically informed risk review, guardian consent narratives, and termination logic precede improvisation-heavy contrasts " }, { type: "footnote", ref: "ch8_ethics_fa" }, { type: "text", text: "; supervisory oversight parallels " }, { type: "footnote", ref: "ch8_supervisory_g" }, { type: "text", text: "." }],
        },
        {
          title: "Condition logic: escape, attention, tangible, alone",
          segments: [{ type: "text", text: "Each analogue manipulates evocative consequences aligning with differentiated hypotheses—not interchangeable labels swapped casually " }, { type: "footnote", ref: "ch8_kc2" }, { type: "text", text: "." }],
        },
        {
          title: "Control/enriched comparisons anchor spikes",
          segments: [{ type: "text", text: "Minimized reinforcement baselines juxtaposed against evocative tests underpin interpretive contrasts " }, { type: "footnote", ref: "ch8_kc3" }, { type: "text", text: "." }],
        },
        {
          title: "IWFA tailors menus and ethics review",
          segments: [{ type: "text", text: "Localized hypotheses from interviews/indirect/descriptive streams guide which contrasts unlock first " }, { type: "footnote", ref: "ch8_v3" }, { type: "text", text: " responsibly." }],
        },
        {
          title: "Abbreviated probing stays accountable",
          segments: [{ type: "text", text: "When exhaustive overnight rigs stall, ethically scaled substitutes plus transparent limits beat certainty theater " }, { type: "footnote", ref: "ch8_kc4" }, { type: "text", text: "." }],
        },
        {
          title: "Replication reinforces inference",
          segments: [{ type: "text", text: "Independent verification or ethically defensible abbreviated replications buttress differentiated patterns reviewers trust " }, { type: "footnote", ref: "ch8_kc5" }, { type: "text", text: "." }],
        },
      ],
      plainLanguageSummary: {
        heading: "Key concepts — plain-language companion",
        intro:
          "Treat every FA vignette like triage intake: articulate the arranged contingency, cite safeguards and consent, confess modality limits honestly, and rehearse condition sequencing—then pick the answer.",
        chunks: [
          {
            subtitle: "What contingency did you actually arrange?",
            segments: [
              { type: "text", text: "Domain F contrasts hang on evocative operations you can sketch on a sticky note—not fuzzy alphabet soup " },
              { type: "footnote", ref: "ch8_exam_f" },
              { type: "text", text: ". Multi-element FA logic arranges test and control conditions that isolate likely reinforcement relations " },
              { type: "footnote", ref: "ch8_kc1" },
              { type: "text", text: " using vocabulary exam writers expect precisely " },
              { type: "footnote", ref: "ch8_v1" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Safeguards and consent before manipulation",
            segments: [
              { type: "text", text: "Medical clearance, guardian consent, risk review, and supervisory oversight gate manipulation-heavy agendas " },
              { type: "footnote", ref: "ch8_ethics_fa" },
              { type: "text", text: ". Domain G supervisory ratios and coordinated oversight are not optional extras " },
              { type: "footnote", ref: "ch8_supervisory_g" },
              { type: "text", text: ". Use scaffold checklists before improvising contrasts " },
              { type: "footnote", ref: "ch8_v2" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Escape, attention, tangible, alone conditions",
            segments: [
              { type: "text", text: "Exam discriminations hinge on cleanly separated consequence caricatures—each condition manipulates a different evocative contingency, not interchangeable labels " },
              { type: "footnote", ref: "ch8_kc2" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Control conditions anchor contrasts",
            segments: [
              { type: "text", text: "Minimized-reinforcement baselines juxtaposed against evocative tests let differentiated spikes read clearly against flattened comparison phases " },
              { type: "footnote", ref: "ch8_kc3" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "IWFA tailors menus to local hypotheses",
            segments: [
              { type: "text", text: "Interview-informed FA rotates toward ecology-specific hypotheses from prior indirect and descriptive streams—not a franchised one-size rotation " },
              { type: "footnote", ref: "ch8_v3" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Abbreviated probing with transparent limits",
            segments: [
              { type: "text", text: "When exhaustive overnight rigs stall, ethically scaled substitutes are acceptable—but modality labels and limitation language must stay honest " },
              { type: "footnote", ref: "ch8_kc4" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch8_v4" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "Replication strengthens inference",
            segments: [
              { type: "text", text: "Independent reruns or defensible abbreviated replications buttress differentiated readings when safeguards still permit " },
              { type: "footnote", ref: "ch8_kc5" },
              { type: "text", text: "." },
            ],
          },
          {
            subtitle: "High-Yield Confusion Points",
            segments: [
              { type: "text", text: "High-yield confusion points in this chapter include misidentifying FA condition contingencies, overreading single-session spikes as stable differentiation, and running interpretation ahead of safety and consent safeguards. Resolve them by verifying condition logic, replication quality, and safeguard status before claiming confidence." },
              { type: "footnote", ref: "ch8_kc2" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch8_kc5" },
              { type: "text", text: " " },
              { type: "footnote", ref: "ch8_ethics_fa" },
              { type: "text", text: "." },
            ],
          },
        ],
      },
    },
    vocabularyMatchInstructions:
      "Map each vignette to the exact contingency arranged in the FA condition and verify whether safety and implementation safeguards are sufficient for that condition.",
    matchActivityInstructions:
      "For each Chapter 8 item, identify the FA condition logic first, then decide whether the data interpretation and safety sequencing are justified.",
    chainActivityInstructions:
      "Order the FA process as taught in Chapter 8: risk and definition readiness, consent and safeguards, condition implementation, then differentiated interpretation with replication planning.",
    mts: [
      {
        sample_stimulus:
          "Therapist removes instructional demands contingent on aggression during the escape test segment of a multi-element FA.",
        comparison_options: ["Escape condition", "Attention condition", "Alone condition"],
        correct_match: "Escape condition",
        error_feedback:
          "Demand removal contingent on targeted aggressive episodes isolates escape hypotheses—not attention deliveries or unattended alone logic alone.",
      },
      {
        sample_stimulus:
          "Neutral directive prompts alternate toy engagement without programmed contingencies.",
        comparison_options: ["Control condition", "Tangible condition", "Pain attenuation probe"],
        correct_match: "Control condition",
        error_feedback:
          "Enriched contexts minimizing programmed reinforcement provide contrast baselines juxtaposed against evocative spikes.",
      },
      {
        sample_stimulus:
          "Isolation session withholds mediated attention tangibles demands—charting baseline rates MOST aligns with:",
        comparison_options: [
          "Alone condition inspecting automatic reinforcement hypotheses minus programmed mediated consequences",
          "Escape condition guaranteeing demand removal caricatures exclusively",
          "Attention FA delivering lavish praise caricatures exclusively",
        ],
        correct_match: "Alone condition inspecting automatic reinforcement hypotheses minus programmed mediated consequences",
        error_feedback:
          "Alone strips attention/tangible/evocative manipulations programmed elsewhere—exam writers expect clean discrimination.",
      },
      {
        sample_stimulus:
          "Regional report claims differentiated multi-element FA while attachments list only unstructured interviews—MOST aligns with:",
        comparison_options: [
          "Honest modality relabel plus ethically staged contrasts when safeguards unlock",
          "Shipping marketing claims unchanged",
          "Replacing safeguards with billboard slogans",
        ],
        correct_match: "Honest modality relabel plus ethically staged contrasts when safeguards unlock",
        error_feedback:
          "Domain E forbids laundering indirect interviews into exhaustive FA folklore absent arranged contrasts.",
      },
      {
        sample_stimulus:
          "Second clinician reruns abbreviated contrast packet verifying Week 1 attention spike—PRIMARY emphasis:",
        comparison_options: [
          "Replication strengthening inferential confidence when patterns reproduce ethically",
          "Deleting Week 1 data quietly",
          "Declaring punishment mastery graphically absent data",
        ],
        correct_match: "Replication strengthening inferential confidence when patterns reproduce ethically",
        error_feedback:
          "Replication buttresses differentiated readings once safeguards permit additional probes.",
      },
      {
        sample_stimulus:
          "FAST plus descriptive logs converge on escape-from-academic-demands hypotheses, yet rotations still linger on praise-heavy generic attention menus—PRIMARY accountable IWFA stance:",
        comparison_options: [
          "Re-sequence evocative contrasts so caregiver-informed hypotheses lead (escape contexts probed faithfully before mismatched templates)",
          "Maintain cookbook rotations oblivious to converging multimodal stories",
          "Delete consent scaffolding to chase quicker graphs",
        ],
        correct_match: "Re-sequence evocative contrasts so caregiver-informed hypotheses lead (escape contexts probed faithfully before mismatched templates)",
        error_feedback:
          "Interview-informed tailoring reframes FA menus toward ecology-backed priorities—not flashy templates divorced from hypotheses.",
      },
    ],
    chainTitle: "FA readiness mini-chain",
    chainFragments: [
      { id: "b", text: "Stakeholders authorize FA safeguards plus termination criteria." },
      { id: "d", text: "Graph differentiated patterns plus replication probes." },
      { id: "a", text: "Verify medically cleared aggression topography definitions." },
      { id: "c", text: "Implement alternating multi-element iterations counterbalanced." },
    ],
    chainOrder: ["a", "b", "c", "d"],
    safmedTerms: [
      { front: "Escape FA", back: "Demand removal contingent on behavior." },
      { front: "Attention FA", back: "Social acknowledgment contingent episodes." },
      { front: "Tangible FA", back: "Access to leisure paired with occurrences." },
      { front: "Alone FA", back: "Isolation minus programmed reinforcement." },
      { front: "IWFA", back: "Interview-informed contingency tailoring." },
      { front: "Latency FA", back: "Time-based reinforcement removals." },
    ],
    worksheet: {
      title: "Chapter 8 — FA contrasts, safeguards & honest modality labels",
      instructions:
        "Use each item as FA decision training: identify what condition is arranged, what comparison is available, whether safeguards are adequate, and what confidence level the data actually supports.",
      scenario:
        "Aggression topography produces documented tissue injury risk yet supervisors insist launching overnight FA immediately.",
      scenario_follow_up:
        "Interview-informed FA tailoring narrows relevant contrast conditions once safeguards stabilize.\n\nScenario D — Grant narrative claims differentiated multi-element FA completed while appendix lists only unstructured interviews absent programmed test conditions.",
      fields: [
        {
          id: "response_1",
          label: "Risk vignette · Immediate stance?",
          options: [
            "Delay FA pending protective barriers plus informed consent review",
            "Proceed overnight unsupervised",
            "Substitute placebo punishers prior to FA",
          ],
          correct: "Delay FA pending protective barriers plus informed consent review",
        },
        {
          id: "response_2",
          label: "Risk vignette · Alternate permissible tactic meanwhile?",
          options: [
            "Latency-based descriptive probes until FA staffing aligns",
            "Terminate referral silently",
            "Ignore differentiation mandate",
          ],
          correct: "Latency-based descriptive probes until FA staffing aligns",
        },
        {
          id: "response_3",
          label: "Contrast vignette · Therapist removes demands contingent on aggression:",
          options: ["Escape FA condition prototype", "Control condition prototype", "Alone sensory deprivation exclusively"],
          correct: "Escape FA condition prototype",
        },
        {
          id: "response_4",
          label: "Contrast vignette · Neutral play enriched without programmed reinforcement:",
          options: ["Control condition baseline analogue", "Attention FA prototype", "Automatic reinforcement FA"],
          correct: "Control condition baseline analogue",
        },
        {
          id: "response_5",
          label: "IWFA MOST centrally reminds clinicians to:",
          options: [
            "Tailor FA contrasts using caregiver-informed hypotheses—not cookie-cutter menus blindly",
            "Eliminate graphs permanently",
            "Skip consent conversations",
            "Guarantee tangible reinforcement absent differentiation data",
          ],
          correct:
            "Tailor FA contrasts using caregiver-informed hypotheses—not cookie-cutter menus blindly",
        },
        {
          id: "response_6",
          label:
            "Scenario D · Claiming exhaustive FA without arranged contrasts MOST collapses:",
          options: [
            "Domain E honest reporting plus Domain F accurate modality labeling",
            "Domain A philosophy-of-science trivia unrelated to modality mislabel",
            "Domain G supervisory hiring charts unrelated to modality mislabel",
          ],
          correct: "Domain E honest reporting plus Domain F accurate modality labeling",
        },
        {
          id: "response_7",
          label: "Scenario D · Responsible remediation BEFORE funders disburse?",
          options: [
            "Relabel methods honestly; assemble ethically defensible contrast packet once safeguards and staffing authorize manipulation",
            "Ship narrative unchanged to satisfy grant optics",
            "Destroy interview notes diverging from desired storyline",
          ],
          correct:
            "Relabel methods honestly; assemble ethically defensible contrast packet once safeguards and staffing authorize manipulation",
        },
      ],
      remediationLog:
        "Rebuild Chapter 8 fluency with the same sequence every time: condition logic, safeguard readiness, data differentiation, and confidence calibration. Never label work as full FA unless arranged contrasts were actually conducted.",
    },
    legacyBds: {
      id: "mod09-q1",
      stem: "High-risk topography without staffing — MOST compliant sequencing?",
      options: [
        {
          key: "A",
          text: "Launch FA overnight solo.",
          correct: false,
          rationale:
            "Violates supervision safeguards on intensive FA schedules.",
        },
        {
          key: "B",
          text: "Implement descriptive/interrupted probes until staffing safeguards stabilize.",
          correct: true,
          rationale:
            "Balances Domain F analytic obligations with Domain E duty to stabilize safeguards before evocative manipulation-heavy sessions.",
        },
        {
          key: "C",
          text: "Presume tangible reinforcement sans verification.",
          correct: false,
          rationale:
            "Circumvents analytic isolation obligations.",
        },
        {
          key: "D",
          text: "Skip baseline graphs.",
          correct: false,
          rationale:
            "Baseline omission obscures differentiation interpretation.",
        },
      ],
    },
  },
  MOD10_BLUEPRINT,
  MOD11_BLUEPRINT,
  MOD12_BLUEPRINT,
  MOD13_BLUEPRINT,
  MOD14_BLUEPRINT,
  MOD15_BLUEPRINT,
  MOD16_BLUEPRINT,
  MOD02_BLUEPRINT,
  MOD17_BLUEPRINT,
  MOD18_BLUEPRINT,
  MOD19_BLUEPRINT,
  MOD20_BLUEPRINT,
  MOD21_BLUEPRINT,
  MOD22_BLUEPRINT,
  MOD23_BLUEPRINT,
  MOD24_BLUEPRINT,
  MOD25_BLUEPRINT,
  MOD26_BLUEPRINT,
  MOD27_BLUEPRINT,
  MOD28_BLUEPRINT,
  MOD29_BLUEPRINT,
  MOD30_BLUEPRINT,
  MOD31_BLUEPRINT,
  MOD32_BLUEPRINT,
  MOD33_BLUEPRINT,
  MOD34_BLUEPRINT,
  MOD35_BLUEPRINT,
  MOD36_BLUEPRINT,
  MOD37_BLUEPRINT,
  MOD38_BLUEPRINT,
  MOD39_BLUEPRINT,
  MOD40_BLUEPRINT,
  MOD41_BLUEPRINT,
  MOD42_BLUEPRINT,
  MOD43_BLUEPRINT,
  ...PEARSON_LATE_CHAPTER_BLUEPRINTS,
];

export const EXTENSION_MODULES: StudyModule[] = BLUEPRINTS.map(buildExtension);
