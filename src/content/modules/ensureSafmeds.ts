import type {
  SafmedsActivity,
  SafmedsCard,
  StudyModule,
} from "@/lib/content-types";

const SAFMEDS_MIN_CARDS = 6;
const SAFMEDS_MAX_CARDS = 24;
const SAFMEDS_THRESHOLD = 0.85;

const DEFAULT_INSTRUCTIONS =
  "Fluency drill: reveal each definition, self-mark correct/incorrect, and cycle the deck until the session ends. Aim for high rate paired with high accuracy—SAFMEDS builds retrieval fluency, not just recognition.";

/**
 * Append a SAFMEDS activity to any StudyModule that doesn't already have one,
 * sourcing cards from (in priority order):
 *   1. `module.safmedsDeck` — author-curated fluency deck (short prompts/answers).
 *   2. `module.vocabularySection.entries` — richer prose definitions, used as
 *      a fallback so every module still gets a deck.
 *
 * Runs after all other module enrichment so every module (JSON or blueprint-
 * derived) picks it up uniformly.
 *
 * Skips when:
 *  - Module already ships a SAFMEDS activity (JSON authors opting in explicitly).
 *  - Fewer than SAFMEDS_MIN_CARDS cards are available from any source (below
 *    that, the fluency drill would be trivial and mostly recognition-only).
 */
export function ensureSafmeds(module: StudyModule): StudyModule {
  const alreadyHasSafmeds = module.activities.some(
    (activity) => activity.game_type === "SAFMEDS",
  );
  if (alreadyHasSafmeds) return module;

  const curatedDeck = module.safmedsDeck ?? [];
  const vocabEntries = module.vocabularySection?.entries ?? [];

  let cards: SafmedsCard[];
  if (curatedDeck.length >= SAFMEDS_MIN_CARDS) {
    cards = curatedDeck
      .slice(0, SAFMEDS_MAX_CARDS)
      .map((card) => ({ front: card.front, back: card.back }));
  } else if (vocabEntries.length >= SAFMEDS_MIN_CARDS) {
    cards = vocabEntries.slice(0, SAFMEDS_MAX_CARDS).map((entry) => ({
      front: entry.term,
      back: entry.definition,
    }));
  } else {
    return module;
  }

  const nextActivityId =
    module.activities.reduce(
      (max, activity) => Math.max(max, activity.activity_id),
      0,
    ) + 1;

  const safmedsActivity: SafmedsActivity = {
    activity_id: nextActivityId,
    game_type: "SAFMEDS",
    mechanics: { pass_threshold_accuracy: SAFMEDS_THRESHOLD },
    instructions: DEFAULT_INSTRUCTIONS,
    cards,
  };

  return {
    ...module,
    activities: [...module.activities, safmedsActivity],
  };
}
