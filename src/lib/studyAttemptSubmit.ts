"use client";

import {
  saveAttempt,
  type StudyAttemptInput,
} from "@/lib/storage/attemptsStore";

/**
 * Thin wrapper preserved for callsite compatibility. All persistence is now
 * on-device via `attemptsStore` (IndexedDB in the browser today; will swap to
 * Capacitor SQLite on iOS in Phase 2). No server round-trip.
 */
export async function submitStudyAttempt(input: StudyAttemptInput): Promise<void> {
  await saveAttempt(input);
}
