#!/usr/bin/env node
/**
 * OneDrive recovery helper for Windows.
 *
 * Do NOT relocate `.next` outside the project (custom distDir / junctions
 * break Next.js module resolution for react/jsx-runtime).
 *
 * This script:
 * 1. Removes leftover junctions / in-project `.next`
 * 2. Removes any stale %LOCALAPPDATA%\bcba-workbook-next cache
 *
 * Then pause OneDrive sync (tray → Pause syncing) and run: npm run dev
 */
import { execSync } from "node:child_process";
import { existsSync, lstatSync, rmSync } from "node:fs";
import { join } from "node:path";
import { platform } from "node:os";

if (platform() !== "win32") {
  console.log("[onedrive-fix] Non-Windows platform; nothing to do.");
  process.exit(0);
}

const projectNext = ".next";
const staleTarget = join(
  process.env.LOCALAPPDATA || process.env.TEMP || ".",
  "bcba-workbook-next",
);

function removePath(target, label) {
  if (!existsSync(target)) return;
  try {
    const stat = lstatSync(target);
    if (stat.isSymbolicLink()) {
      try {
        execSync(`cmd /c rmdir "${target}"`, { stdio: "inherit" });
      } catch {
        rmSync(target, { recursive: true, force: true });
      }
    } else {
      rmSync(target, { recursive: true, force: true });
    }
    console.log(`[onedrive-fix] Removed ${label}`);
  } catch (err) {
    console.error(`[onedrive-fix] Could not remove ${label}:`, err.message);
    console.error("[onedrive-fix] Stop `npm run dev` and retry.");
    process.exit(1);
  }
}

console.log("[onedrive-fix] Cleaning Next.js cache (keeping build inside project)...");
removePath(projectNext, ".next");
removePath(staleTarget, staleTarget);
console.log("[onedrive-fix] Done. Pause OneDrive sync, then: npm run dev");
