import type { BDSQuestion, StudyModule } from "@/lib/content-types";

type TcoDomain = NonNullable<BDSQuestion["tcoDomain"]>;

/**
 * Approximate primary BACB 6th ed. TCO domain assignment for each module,
 * used only for study-planning focus flags on the chapter-quiz results view.
 *
 * These are single-domain approximations for a chapter that may in reality
 * span multiple domains; they are NOT authoritative and users should verify
 * against the currently published BACB TCO.
 *
 * Legend:
 *   A — Foundations & philosophy
 *   B — Concepts & principles
 *   C — Measurement, data display, interpretation
 *   D — Experimental design
 *   E — Ethics
 *   F — Behavior assessment
 *   G — Behavior-change procedures
 *   H — Selecting & implementing interventions
 *   I — Personnel supervision & management
 */
const MODULE_TCO_DOMAIN: Record<string, TcoDomain> = {
  mod01: "A",
  mod02: "B",
  mod03: "F",
  mod04: "B",
  mod05: "C",
  mod055: "C",
  mod06: "F",
  mod07: "F",
  mod08: "F",
  mod09: "F",
  mod10: "D",
  mod11: "C",
  mod12: "D",
  mod13: "D",
  mod14: "D",
  mod15: "D",
  mod16: "D",
  mod17: "B",
  mod18: "B",
  mod19: "B",
  mod20: "B",
  mod21: "B",
  mod22: "G",
  mod23: "G",
  mod24: "G",
  mod25: "G",
  mod26: "G",
  mod27: "G",
  mod28: "F",
  mod29: "G",
  mod30: "G",
  mod31: "G",
  mod32: "E",
  mod33: "B",
  mod34: "B",
  mod35: "G",
  mod36: "G",
  mod37: "I",
  mod38: "H",
  mod40: "F",
  mod41: "F",
  mod42: "E",
  mod43: "B",
};

/** Attach `primaryTcoDomain` when we have a lookup entry for this module id. */
export function assignPrimaryTcoDomain(module: StudyModule): StudyModule {
  const domain = MODULE_TCO_DOMAIN[module.id];
  if (!domain) return module;
  if (module.primaryTcoDomain === domain) return module;
  return { ...module, primaryTcoDomain: domain };
}
