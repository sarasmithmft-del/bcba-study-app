"use client";

/**
 * Local, on-device persistence for study attempts.
 *
 * Phase 1 (web / current): IndexedDB via the raw `indexedDB` API.
 * Phase 2 (iOS via Capacitor): we will swap the internals to
 *   `@capacitor-community/sqlite` while keeping this same public surface.
 *
 * All public functions swallow errors and log a warning, so calling code can
 * fire-and-forget without try/catch. Data privacy: everything lives in the
 * user's browser/app profile; nothing is transmitted off-device.
 */

const DB_NAME = "bcba-workbook";
const DB_VERSION = 1;
const STORE_ATTEMPTS = "studyAttempts";

export type StoredStudyAttempt = {
  id: string;
  moduleId: string;
  kind: string;
  reference: string;
  score: number | null;
  payload: Record<string, unknown> | null;
  /** ISO 8601 timestamp (lexicographically sortable). */
  createdAt: string;
};

export type StudyAttemptInput = {
  moduleId: string;
  kind: string;
  reference: string;
  score?: number | null;
  payload?: unknown;
};

export type ListAttemptsFilter = {
  kind?: string;
  /** When set, returns only the most recent N rows (still in ascending order). */
  limit?: number;
};

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof indexedDB !== "undefined";
}

function mintId(): string {
  const c: Crypto | undefined =
    typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  const rand = () =>
    Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, "0");
  return `${Date.now().toString(16)}-${rand()}-${rand()}`;
}

async function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!isBrowser()) {
      reject(new Error("attemptsStore: not in browser"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_ATTEMPTS)) {
        const store = db.createObjectStore(STORE_ATTEMPTS, { keyPath: "id" });
        store.createIndex("byKind", "kind", { unique: false });
        store.createIndex("byCreatedAt", "createdAt", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveAttempt(input: StudyAttemptInput): Promise<void> {
  if (!isBrowser()) return;
  try {
    const db = await openDb();
    const row: StoredStudyAttempt = {
      id: mintId(),
      moduleId: input.moduleId,
      kind: input.kind,
      reference: input.reference,
      score: input.score ?? null,
      payload:
        input.payload != null
          ? (JSON.parse(JSON.stringify(input.payload)) as Record<string, unknown>)
          : null,
      createdAt: new Date().toISOString(),
    };
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_ATTEMPTS, "readwrite");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(STORE_ATTEMPTS).add(row);
    });
    db.close();
  } catch (err) {
    console.warn(
      "[attemptsStore] Could not save attempt — progress not persisted on this device.",
      err,
    );
  }
}

export async function listAttempts(
  filter?: ListAttemptsFilter,
): Promise<StoredStudyAttempt[]> {
  if (!isBrowser()) return [];
  try {
    const db = await openDb();
    const rows = await new Promise<StoredStudyAttempt[]>((resolve, reject) => {
      const tx = db.transaction(STORE_ATTEMPTS, "readonly");
      const store = tx.objectStore(STORE_ATTEMPTS);
      const cursor: IDBRequest = filter?.kind
        ? store.index("byKind").openCursor(IDBKeyRange.only(filter.kind))
        : store.index("byCreatedAt").openCursor();
      const results: StoredStudyAttempt[] = [];
      cursor.onsuccess = () => {
        const c = cursor.result as IDBCursorWithValue | null;
        if (c) {
          results.push(c.value as StoredStudyAttempt);
          c.continue();
        } else {
          resolve(results);
        }
      };
      cursor.onerror = () => reject(cursor.error);
    });
    db.close();
    rows.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    if (filter?.limit && rows.length > filter.limit) {
      return rows.slice(rows.length - filter.limit);
    }
    return rows;
  } catch (err) {
    console.warn("[attemptsStore] Could not read attempts.", err);
    return [];
  }
}

/**
 * Debugging helper — deletes all attempt history on this device. Not exposed
 * in the UI yet; call from the browser console when needed:
 *   `import("/_next/…/attemptsStore.js").then(m => m.clearAllAttempts())`
 */
export async function clearAllAttempts(): Promise<void> {
  if (!isBrowser()) return;
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_ATTEMPTS, "readwrite");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.objectStore(STORE_ATTEMPTS).clear();
    });
    db.close();
  } catch (err) {
    console.warn("[attemptsStore] Could not clear attempts.", err);
  }
}
