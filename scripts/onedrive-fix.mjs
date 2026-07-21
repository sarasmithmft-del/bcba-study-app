#!/usr/bin/env node
/**
 * OneDrive recovery helper for Windows.
 *
 * Do NOT relocate `.next` outside the project (junctions / absolute distDir
 * break Next.js module resolution for react/jsx-runtime).
 *
 * This script only:
 * 1. Stops if `.next` is a leftover junction and removes it
 * 2. Wipes a normal `.next` cache so the next `npm run dev` starts clean
 *
 * If EBUSY lock errors return, pause OneDrive sync for this folder
 * (OneDrive tray → Pause syncing) while developing, or move the project
 * out of OneDrive to a local path like C:\dev\aba.
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

console.log("[onedrive-fix] Cleaning Next.js cache (keeping build inside project)...");

if (existsSync(projectNext)) {
  try {
    const stat = lstatSync(projectNext);
    if (stat.isSymbolicLink() || (stat.isDirectory() && (stat.mode & 0o120000))) {
      // Junction/reparse point — remove link only
      try {
        execSync("cmd /c rmdir .next", { stdio: "inherit" });
      } catch {
        rmSync(projectNext, { recursive: true, force: true });
      }
    } else {
      rmSync(projectNext, { recursive: true, force: true });
    }
    console.log("[onedrive-fix] Removed .next");
  } catch (err) {
    console.error("[onedrive-fix] Could not remove .next:", err.message);
    console.error("[onedrive-fix] Stop `npm run dev` and retry.");
    process.exit(1);
  }
}

if (existsSync(staleTarget)) {
  try {
    rmSync(staleTarget, { recursive: true, force: true });
    console.log("[onedrive-fix] Removed stale", staleTarget);
  } catch (err) {
    console.warn("[onedrive-fix] Could not wipe stale cache:", err.message);
  }
}

console.log("[onedrive-fix] Done. Run: npm run dev");
console.log(
  "[onedrive-fix] Tip: if EBUSY returns, pause OneDrive sync while developing.",
);
