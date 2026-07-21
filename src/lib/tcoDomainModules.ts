import type { BDSQuestion } from "@/lib/content-types";

type TcoDomain = NonNullable<BDSQuestion["tcoDomain"]>;

export type DomainModuleLink = {
  id: string;
  label: string;
};

/**
 * Recommended study modules for weak TCO domains after a mock exam.
 * Approximations for study planning — not BACB-endorsed mappings.
 */
export const DOMAIN_RECOMMENDED_MODULES: Record<TcoDomain, DomainModuleLink[]> = {
  A: [
    { id: "mod01", label: "Ch. 1 — Definition & characteristics" },
    { id: "mod02", label: "Ch. 2 — Basic concepts & principles" },
  ],
  B: [
    { id: "mod02", label: "Ch. 2 — Basic concepts & principles" },
    { id: "mod17", label: "Ch. 16 — Motivating operations" },
    { id: "mod21", label: "Ch. 20 — Nonequivalence relations" },
    { id: "mod43", label: "RFT + ACT depth" },
  ],
  C: [
    { id: "mod05", label: "Ch. 4 — Measuring behavior" },
    { id: "mod11", label: "Ch. 6 — Graphic displays" },
  ],
  D: [
    { id: "mod10", label: "Ch. 7 — Analyzing behavior change" },
    { id: "mod12", label: "Ch. 8 — Reversal & multielement" },
    { id: "mod13", label: "Ch. 9 — Multiple baseline & changing criterion" },
  ],
  E: [
    { id: "mod32", label: "Ch. 31 — Ethical & professional responsibilities" },
    { id: "mod42", label: "BACB Ethics Code navigator" },
  ],
  F: [
    { id: "mod09", label: "Experimental FBA" },
    { id: "mod40", label: "FA protocols deep dive" },
    { id: "mod41", label: "Assessment tools compendium" },
  ],
  G: [
    { id: "mod24", label: "Ch. 23 — Extinction" },
    { id: "mod25", label: "Ch. 24 — Differential reinforcement" },
    { id: "mod26", label: "Ch. 25 — Antecedent interventions" },
  ],
  H: [{ id: "mod38", label: "Domain H — Selecting & implementing interventions" }],
  I: [{ id: "mod37", label: "Domain I — Supervision & performance management" }],
};

/** Approximate BACB 6th ed. TCO item allocations for a 185-item exam (study planning). */
export const TCO_TARGET_ITEMS_185: Record<TcoDomain, number> = {
  A: 9,
  B: 26,
  C: 22,
  D: 15,
  E: 24,
  F: 24,
  G: 26,
  H: 20,
  I: 19,
};
