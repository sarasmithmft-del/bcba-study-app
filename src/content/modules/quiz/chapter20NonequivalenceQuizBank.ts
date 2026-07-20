import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 20 — Nonequivalence Relations. */

function bx(
  id: string,
  stem: string,
  correctLetter: "A" | "B" | "C" | "D",
  bundle: Record<"A" | "B" | "C" | "D", { text: string; rationale: string }>,
): BDSQuestion {
  const letters = ["A", "B", "C", "D"] as const;
  return {
    id,
    stem,
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_20_NE_QUIZ_BANK: BDSQuestion[] = [
  bx("mod21-q1", "District deck claims full emergent literacy after only forward-trained relations—no reversed or analogical probes documented—MOST accountable critique:", "B", {
    A: { text: "Automatic proof because slides use appealing design.", rationale: "Probe evidence required for emergence claims." },
    B: { text: "Withhold omnibus emergence marketing until probe evidence matches the relation class actually programmed.", rationale: "Classic Ch 20 accountability vignette." },
    C: { text: "Rename trained trials as probes arbitrarily.", rationale: "Integrity violation." },
    D: { text: "Delete appendices to protect branding.", rationale: "Transparency required." },
  }),
  bx("mod21-q4", "Cooper Chapter 20 (nonequivalence relations) contrasts with Chapter 19 EBI because:", "C", {
    A: { text: "Chapter 20 requires symmetry and transitivity proofs.", rationale: "Ch 20 may not target equivalence properties." },
    B: { text: "Chapter 20 eliminates probe requirements.", rationale: "Probes still required—different relation class." },
    C: { text: "Chapter 20 engineers relational learning where symmetry/transitivity may not be the prized property—equivalence rhetoric may not apply.", rationale: "Core Ch 19/20 distinction." },
    D: { text: "Identical programming.", rationale: "Different analytic targets." },
  }),
  bx("mod21-q5", "Nonequivalence programming:", "A", {
    A: { text: "Instructional targets where equivalence properties are not assumed or marketed—relational control still engineered deliberately.", rationale: "Definition from Cooper Ch 20." },
    B: { text: "Exhaustive pairwise training only.", rationale: "Efficiency with relational probes." },
    C: { text: "MO programming exclusively.", rationale: "Conditional relational training." },
    D: { text: "Respondent conditioning only.", rationale: "Operant relational frameworks." },
  }),
  bx("mod21-q6", "Relational framing in Chapter 20:", "D", {
    A: { text: "Simple one-to-one discrimination only.", rationale: "Abstract relations (sameness, opposition, hierarchy)." },
    B: { text: "Identical to stimulus equivalence class.", rationale: "May not assume equivalence." },
    C: { text: "Verbal operants only.", rationale: "Contextual control over relations." },
    D: { text: "Contextual control linking stimuli along abstract relations tracked through explicit probes.", rationale: "Relational framing definition." },
  }),
  bx("mod21-q7", "Derived performance in nonequivalence curricula:", "B", {
    A: { text: "Requires exhaustive pairwise rehearsal always.", rationale: "Novel relations when histories warrant." },
    B: { text: "Novel relational responses contacting reinforcement without exhaustive pairwise training when programming supports it.", rationale: "Derived performance definition." },
    C: { text: "Respondent reflex only.", rationale: "Operant derived relations." },
    D: { text: "Proven by forward training alone.", rationale: "Probe evidence needed." },
  }),
  bx("mod21-q8", "Nodal primes:", "C", {
    A: { text: "Eliminate need for probe segregation.", rationale: "Hub stimuli organize training—probes still segregated." },
    B: { text: "MO establishing operations.", rationale: "Hub stimuli in relational networks." },
    C: { text: "Hub stimuli organizing correlated training so branching probes stay interpretable.", rationale: "Nodal prime definition." },
    D: { text: "Punishment procedures.", rationale: "Relational design element." },
  }),
  bx("mod21-q9", "Probe segregation:", "A", {
    A: { text: "Separate data streams for instructed acquisition versus withheld relational tests.", rationale: "Probe segregation definition." },
    B: { text: "Blending taught and probe on one graph.", rationale: "Opposite of segregation." },
    C: { text: "Deleting failed probes.", rationale: "Ethical violation." },
    D: { text: "IOA substitute.", rationale: "Documentation structure." },
  }),
  bx("mod21-q10", "Modest dissemination in Chapter 20:", "D", {
    A: { text: "Marketing Sidman-grade equivalence regardless of probes.", rationale: "Language matches evidence." },
    B: { text: "Omitting appendices.", rationale: "Transparent reporting." },
    C: { text: "Billboard metaphors for partial data.", rationale: "Guardian-facing accuracy." },
    D: { text: "Reporting language matching demonstrated probe outcomes—not inflated adoption claims.", rationale: "Modest dissemination definition." },
  }),
  bx("mod21-q11", "Exam trap: claiming equivalence-class mastery when programming nonequivalence relations:", "B", {
    A: { text: "Correct integration.", rationale: "Relation class must match claims." },
    B: { text: "High-yield error—Ch 20 targets may not require symmetry/transitivity proofs.", rationale: "Ch 19/20 confusion." },
    C: { text: "IOA issue only.", rationale: "Conceptual mislabeling." },
    D: { text: "Applies only to mands.", rationale: "Relational programming." },
  }),
  bx("mod21-q12", "Exam trap: blending trained and probe trials on one graph:", "A", {
    A: { text: "High-yield measurement error—cannot audit taught versus derived.", rationale: "Domain C lapse." },
    B: { text: "Best practice.", rationale: "Segregation required." },
    C: { text: "Proof transitivity.", rationale: "Analytic separation lapse." },
    D: { text: "Required for nonequivalence.", rationale: "Must separate strata." },
  }),
  bx("mod21-q13", "Relational framing versus simple discrimination:", "C", {
    A: { text: "Identical.", rationale: "Relational framing involves abstract relation control." },
    B: { text: "Simple discrimination is always relational framing.", rationale: "Distinct levels of analysis." },
    C: { text: "Relational framing tracks abstract relations (sameness, opposition, hierarchy)—not mere SD control alone.", rationale: "High-yield discrimination." },
    D: { text: "Relational framing eliminates probes.", rationale: "Probes still required." },
  }),
  bx("mod21-q14", "Marketing Sidman-grade equivalence when targets are purposely nonequilibrium:", "D", {
    A: { text: "Ethical best practice.", rationale: "Misleading dissemination." },
    B: { text: "Required for funding.", rationale: "Domain E violation." },
    C: { text: "IOA substitute.", rationale: "Accurate labels required." },
    D: { text: "Ethical/analytic breach—claims must match programmed relation class.", rationale: "Cooper emphasis." },
  }),
  bx("mod21-q15", "Thematic analogy probes in nonequivalence instruction:", "B", {
    A: { text: "Unnecessary.", rationale: "Test derived analogical relations." },
    B: { text: "Document whether derived analogical substitutions emerged versus required booster training.", rationale: "Probe purpose." },
    C: { text: "Replace all direct training.", rationale: "Complement instructed relations." },
    D: { text: "Prove reflexivity.", rationale: "Analogical relation probes." },
  }),
  bx("mod21-q16", "Opposition relations in relational framing:", "A", {
    A: { text: "Abstract relation type tracked through explicit probes—not assumed from equivalence.", rationale: "Relation class example." },
    B: { text: "Identical to symmetry.", rationale: "Distinct relation frames." },
    C: { text: "MO only.", rationale: "Relational programming." },
    D: { text: "Respondent only.", rationale: "Operant relational control." },
  }),
  bx("mod21-q17", "Documenting which derived performances arrived versus required booster training:", "C", {
    A: { text: "Optional.", rationale: "Honest emergence reporting." },
    B: { text: "Replaces IOA.", rationale: "Probe row documentation." },
    C: { text: "Required—without separation dashboards misrepresent emergence.", rationale: "Cooper measurement emphasis." },
    D: { text: "Proof equivalence failed.", rationale: "Instructional information." },
  }),
  bx("mod21-q18", "IOA calibrated for fuzzy relational judgments:", "D", {
    A: { text: "Unnecessary for nonequivalence.", rationale: "Relational scoring can be ambiguous." },
    B: { text: "Replaces probe segregation.", rationale: "Complements measurement." },
    C: { text: "Only for forward training.", rationale: "Probes need IOA too." },
    D: { text: "Supports reliable scoring when relational trial judgments vary across observers.", rationale: "Domain C standard." },
  }),
  bx("mod21-q19", "Fidelity notes on prompting policies during relational instruction:", "A", {
    A: { text: "Support interpretable probe outcomes—prompt levels affect derived-relation claims.", rationale: "Fidelity documentation." },
    B: { text: "Irrelevant.", rationale: "Prompt contamination concerns." },
    C: { text: "Replace emergence criteria.", rationale: "Complements measurement." },
    D: { text: "MO logs only.", rationale: "Prompt fidelity for relations." },
  }),
  bx("mod21-q20", "Contextual controlled comparisons in Chapter 20:", "B", {
    A: { text: "Eliminate nodal design.", rationale: "Engineered comparison contexts." },
    B: { text: "Structured comparison contexts supporting relational control—not textbook equivalence choreography alone.", rationale: "Instructional design element." },
    C: { text: "Punishment traps.", rationale: "Teaching procedure." },
    D: { text: "Extinction only.", rationale: "Relational training." },
  }),
  bx("mod21-q21", "Stabilizing minimally sufficient conditional performances before probing:", "C", {
    A: { text: "Skip to marketing.", rationale: "Foundation before derived probes." },
    B: { text: "Delete probes.", rationale: "Instructional sequence." },
    C: { text: "Best practice—establish instructed relations before testing derived nonequivalence performances.", rationale: "Rollout sequence." },
    D: { text: "Proves equivalence class.", rationale: "Instructed baseline." },
  }),
  bx("mod21-q22", "Humane error-correction during relational training:", "D", {
    A: { text: "Forbidden.", rationale: "Reinforcement-forward error handling." },
    B: { text: "Replaces probe segregation.", rationale: "Teaching phase practice." },
    C: { text: "Proves emergence without probes.", rationale: "Ethical instruction." },
    D: { text: "Recommended—supports acquisition without coercive suppression.", rationale: "Cooper ethical emphasis." },
  }),
  bx("mod21-q23", "Rebranding nonequivalence package as equivalence certification without withheld probes:", "A", {
    A: { text: "Correct labels; segregate instructed from withheld probes before symmetry marketing.", rationale: "Correct move—Correct labels; segregate instructed from withheld probes before symmetry marketing." },
    B: { text: "Ship certification when slides look symmetric.", rationale: "Aesthetics ≠ probes." },
    C: { text: "Delete withheld probes.", rationale: "Transparency breach." },
    D: { text: "Nodal primes cancel segregation duties.", rationale: "Hub primes clarify—not merge streams." },
  }),
  bx("mod21-q24", "Single spreadsheet lists taught pairs beside analogical withhold rows without labels:", "B", {
    A: { text: "Ideal documentation.", rationale: "Strata separation gap." },
    B: { text: "Domain C flaw—combined rows launder mastery claims before emergent language is justified.", rationale: "Correct move—Domain C flaw—combined rows launder mastery claims before emergent language is justified." },
    C: { text: "MO renders merged tables acceptable.", rationale: "Methodological segregation required." },
    D: { text: "IOA bans relational curricula.", rationale: "IOA supports fuzzy probes." },
  }),
  bx("mod21-q25", "Domain F Chapter 20 items often test:", "C", {
    A: { text: "Schedule notation only.", rationale: "Relation class and probe logic." },
    B: { text: "UMO phylogeny only.", rationale: "Nonequivalence relational analysis." },
    C: { text: "Ch 19 versus Ch 20 claims; taught vs derived; relation class matching dissemination.", rationale: "Domain F focus." },
    D: { text: "Graph color only.", rationale: "Relational probe interpretation." },
  }),
  bx("mod21-q26", "Chapter 20 pairs with Chapter 19 because:", "D", {
    A: { text: "Both require identical symmetry proofs.", rationale: "Ch 20 may not target equivalence." },
    B: { text: "Chapter 20 replaces EBI.", rationale: "Sequential relational chapters." },
    C: { text: "Unrelated.", rationale: "Both address emergent relations." },
    D: { text: "Ch 19 targets equivalence-class properties; Ch 20 engineers relational learning without assuming those properties.", rationale: "Sequential Cooper arc." },
  }),
  bx("mod21-q27", "Withheld relational probes:", "A", {
    A: { text: "Test derived relations not directly trained under controlled conditions.", rationale: "Probe logic parallels Ch 19 but relation class differs." },
    B: { text: "Identical to instructed trials for reporting.", rationale: "Must segregate." },
    C: { text: "Optional decoration.", rationale: "Core to emergence claims." },
    D: { text: "Replace nodal primes.", rationale: "Complement training design." },
  }),
  bx("mod21-q28", "Families deserve accurate labels about which skills were:", "C", {
    A: { text: "Marketed as full equivalence regardless.", rationale: "Trained, probed, or absent." },
    B: { text: "Hidden from reports.", rationale: "Transparent disclosure." },
    C: { text: "Trained, probed, or still absent.", rationale: "Modest dissemination to stakeholders." },
    D: { text: "Assumed emergent without data.", rationale: "Evidence-based labels." },
  }),
  bx("mod21-q29", "Appendices that survive skeptical replication:", "D", {
    A: { text: "Optional marketing materials.", rationale: "Audit-ready probe documentation." },
    B: { text: "Deleted when probes fail.", rationale: "Transparency required." },
    C: { text: "IOA substitute.", rationale: "Full methodological record." },
    D: { text: "Segregated probe ledgers with operational definitions supervisors can replay.", rationale: "Cooper supervisory standard." },
  }),
  bx("mod21-q30", "High-Yield: forward-trained relations only; no reversed probes:", "B", {
    A: { text: "Full emergent literacy verified.", rationale: "Insufficient probe battery." },
    B: { text: "Withhold broad emergence claims—probe evidence incomplete for relation class.", rationale: "Exam trap." },
    C: { text: "Proof transitivity.", rationale: "Forward training only." },
    D: { text: "Symmetry verified.", rationale: "Reversed/analogical probes missing." },
  }),
  bx("mod21-q31", "Hierarchy relations in relational framing:", "A", {
    A: { text: "Abstract relation type probed explicitly—not assumed from equivalence.", rationale: "Relation frame example." },
    B: { text: "Identical to FR schedule.", rationale: "Relational not schedule." },
    C: { text: "MO only.", rationale: "Contextual relation control." },
    D: { text: "Negative punishment.", rationale: "Relational programming." },
  }),
  bx("mod21-q32", "Sameness relations in nonequivalence programming:", "C", {
    A: { text: "Automatically prove stimulus equivalence class.", rationale: "Sameness frame ≠ equivalence class proof." },
    B: { text: "Unrelated to instruction.", rationale: "Relation type in framing." },
    C: { text: "May be programmed and probed without claiming full equivalence properties.", rationale: "Ch 20 nuance." },
    D: { text: "Replace all probes.", rationale: "Still require probe segregation." },
  }),
  bx("mod21-q33", "Graphs segregating instructed blocks from withheld probes:", "D", {
    A: { text: "Optional aesthetics.", rationale: "Auditable emergence interpretation." },
    B: { text: "Proof MO obsolete.", rationale: "Measurement discipline." },
    C: { text: "Replace reinforcement.", rationale: "Documentation structure." },
    D: { text: "Support modest, reviewable emergence claims.", rationale: "Best practice." },
  }),
  bx("mod21-q34", "Renaming trained trials as probes to inflate emergence:", "C", {
    A: { text: "Acceptable shortcut.", rationale: "Integrity violation." },
    B: { text: "Required for nonequivalence.", rationale: "Fraudulent relabeling." },
    C: { text: "High-yield ethical error—strata must reflect actual programming.", rationale: "Domain E issue." },
    D: { text: "IOA solution.", rationale: "Honest labeling required." },
  }),
  bx("mod21-q35", "Booster training when derived probe fails:", "B", {
    A: { text: "Delete probe rows.", rationale: "Instructional response." },
    B: { text: "Document booster need honestly—does not prove unprompted emergence.", rationale: "Transparent reporting." },
    C: { text: "Claim full equivalence class.", rationale: "Probe failure informs design." },
    D: { text: "Stop all measurement.", rationale: "Redesign and re-probe." },
  }),
  bx("mod21-q36", "Minimal instructed mappings before derived probes:", "A", {
    A: { text: "Efficiency principle—train minimal network then test derived relations.", rationale: "Parallels EBI efficiency with different relation target." },
    B: { text: "Exhaustive all-pairs required.", rationale: "Minimal sufficient instruction." },
    C: { text: "Eliminates probes.", rationale: "Probes follow instruction." },
    D: { text: "MO programming only.", rationale: "Conditional relation training." },
  }),
  bx("mod21-q37", "Emergent substitutions tied to thematic analogies:", "D", {
    A: { text: "Proven by slide design.", rationale: "Probe documentation required." },
    B: { text: "Respondent only.", rationale: "Derived relational performance." },
    C: { text: "Identical to symmetry.", rationale: "Analogical probe type." },
    D: { text: "Tested via segregated probes—not assumed from forward training.", rationale: "Ch 20 probe logic." },
  }),
  bx("mod21-q38", "Supervisor reviewing nonequivalence curriculum should verify:", "C", {
    A: { text: "Sidman-grade equivalence marketing regardless of design.", rationale: "Relation class match." },
    B: { text: "Forward training accuracy only.", rationale: "Insufficient." },
    C: { text: "Relation class targeted, probe segregation, IOA, modest dissemination language.", rationale: "Comprehensive review." },
    D: { text: "Caregiver applause only.", rationale: "Probe ledgers required." },
  }),
  bx("mod21-q39", "Explicit prompts that do not copy textbook equivalence choreography:", "B", {
    A: { text: "Forbidden in Ch 20.", rationale: "Different instructional design." },
    B: { text: "Appropriate—nonequivalence engineering uses deliberate relational design.", rationale: "Ch 20 design feature." },
    C: { text: "Prove MO control only.", rationale: "Prompt and comparison structure." },
    D: { text: "Replace measurement.", rationale: "Teaching procedure." },
  }),
  bx("mod21-q40", "Partial derived relation success:", "A", {
    A: { text: "Report partial emergence honestly—do not claim full relational mastery.", rationale: "Modest dissemination." },
    B: { text: "Claim full emergent literacy.", rationale: "Partial ≠ complete." },
    C: { text: "Hide failed analogical probes.", rationale: "Transparent appendices." },
    D: { text: "Rebrand as equivalence.", rationale: "Accurate relation labels." },
  }),
  bx("mod21-q41", "Mastery criteria on instructed relations plus derived trial summaries:", "D", {
    A: { text: "Blended on one metric always.", rationale: "Separate instructed vs derived." },
    B: { text: "Derived replaces instructed.", rationale: "Both tracked." },
    C: { text: "Unnecessary.", rationale: "Dual measurement streams." },
    D: { text: "Appropriate dual measurement—do not merge into single mastery claim.", rationale: "Cooper measurement blend." },
  }),
  bx("mod21-q42", "Confusing nonequivalence with 'no probes needed':", "C", {
    A: { text: "Correct—Ch 20 skips probes.", rationale: "Probes still required." },
    B: { text: "Best practice.", rationale: "Segregated probes essential." },
    C: { text: "High-yield error—nonequivalence changes relation target, not probe discipline.", rationale: "Exam trap." },
    D: { text: "IOA issue only.", rationale: "Conceptual error." },
  }),
  bx("mod21-q43", "Board stem: only A→B forward trained; marketing claims full relational emergence:", "D", {
    A: { text: "Valid claim.", rationale: "Probe battery incomplete." },
    B: { text: "Symmetry verified.", rationale: "Forward only." },
    C: { text: "Transitivity verified.", rationale: "Emergence unverified." },
    D: { text: "Withhold omnibus emergence claims—probe evidence insufficient.", rationale: "Classic board critique." },
  }),
  bx("mod21-q44", "Relational networks scaffolding generative repertoires:", "B", {
    A: { text: "Require full equivalence class always.", rationale: "May use nonequivalence engineering." },
    B: { text: "Possible when nodal primes, comparisons, and probes are deliberately designed.", rationale: "Ch 20 rationale." },
    C: { text: "Impossible without Sidman proofs.", rationale: "Alternative relational pathways." },
    D: { text: "Respondent only.", rationale: "Operant relational learning." },
  }),
  bx("mod21-q45", "Domain E forbids in Chapter 20 reporting:", "A", {
    A: { text: "Inflated adoption language beyond demonstrated probe outcomes.", rationale: "Modest dissemination." },
    B: { text: "Any probe appendices.", rationale: "Appendices required." },
    C: { text: "IOA on relational trials.", rationale: "IOA encouraged." },
    D: { text: "Humane error correction.", rationale: "Ethical teaching." },
  }),
  bx("mod21-q46", "Domain C requires for nonequivalence programs:", "C", {
    A: { text: "Merged vanity charts only.", rationale: "Segregated probe streams." },
    B: { text: "Deletion of withhold rows.", rationale: "Transparent strata." },
    C: { text: "Reproducible separation of instructed acquisition from withheld relational probes.", rationale: "Domain C standard." },
    D: { text: "MO logs only.", rationale: "Relational probe documentation." },
  }),
  bx("mod21-q47", "Nodal primes clarify branching probes—they do NOT:", "B", {
    A: { text: "Organize correlated training.", rationale: "They do organize." },
    B: { text: "Excuse merging instructed and derived data streams.", rationale: "Segregation still required." },
    C: { text: "Support interpretable probe design.", rationale: "They do support." },
    D: { text: "Guide relational rollout.", rationale: "Design function." },
  }),
  bx("mod21-q48", "Teams resist equivalence rhetoric when targets are nonequilibrium because:", "D", {
    A: { text: "Equivalence never exists.", rationale: "Ch 20 may not target those properties." },
    B: { text: "Probes unnecessary.", rationale: "Different relation class." },
    C: { text: "MO eliminates relations.", rationale: "Accurate labeling." },
    D: { text: "Marketing equivalence misrepresents the relation class actually programmed.", rationale: "Ethical/analytic reason." },
  }),
  bx("mod21-q49", "BCBA stem: mirrored icons on slides; no withheld-probe rows; equivalence certification requested:", "A", {
    A: { text: "Withhold certification—segregate instructed from withheld probes; match labels to relation class.", rationale: "Composite exam vignette." },
    B: { text: "Approve because icons mirror.", rationale: "Aesthetics insufficient." },
    C: { text: "Delete probes to shorten report.", rationale: "Integrity breach." },
    D: { text: "Assume nodal primes prove equivalence.", rationale: "Probe evidence required." },
  }),
  bx("mod21-q50", "Closing Chapter 20 principle:", "B", {
    A: { text: "Nonequivalence means no measurement.", rationale: "Probe discipline persists." },
    B: { text: "Engineer relational learning deliberately; segregate instructed from probed; match claims to relation class—avoid equivalence rhetoric when not targeted.", rationale: "Chapter 20 integration." },
    C: { text: "Forward training proves emergence.", rationale: "Probe evidence required." },
    D: { text: "Blend all trials on one graph.", rationale: "Segregation required." },
  }),
];
