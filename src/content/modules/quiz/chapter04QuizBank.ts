import type { BDSQuestion } from "@/lib/content-types";
import { CHAPTER_03_WORKBOOK_QUIZ_BANK } from "@/content/modules/quiz/chapter03QuizBank";

/**
 * Cooper/Heron/Heward — workbook Chapter 4 (Measuring Behavior), extension .
 *
 * Items mod055-q1…q28 re-key measurement strands from the blended Chapter 3/4 bank (CHH excerpts in `chapter03QuizBank.ts`).
 * Items mod055-q29…q50 supplement to fifty workbook items with dedicated Chapter 4 depth.
 * Framing cue: prioritize  (dimensions, shortcuts, fidelity, baseline, IOA references)—plus 
 * wherever graphs could mislead; verify Task List wording in the official BACB PDF.
 */

const CORE: BDSQuestion[] = CHAPTER_03_WORKBOOK_QUIZ_BANK.slice(22, 50).map((q, i) => ({
  ...q,
  id: `mod055-q${i + 1}`,
}));

function attachChhLocator(rationale: string, locator: string): string {
  if (!locator.trim()) return rationale;
  if (/\(\s\bp[\s.]?\d+/i.test(rationale)) return rationale;
  if (/\bCHH Chapter \d+[^.]*?\bp[\s.]?\d+/i.test(rationale)) return rationale;
  const t = rationale.trimEnd();
  if (t.endsWith(".")) return `${t.slice(0, -1)} (${locator}).`;
  return `${rationale} (${locator}).`;
}

function bx(
  id: string,
  stem: string,
  correctLetter: "A" | "B" | "C" | "D",
  bundle: Record<"A" | "B" | "C" | "D", { text: string; rationale: string }>,
  locator?: string,
): BDSQuestion {
  const letters = ["A", "B", "C", "D"] as const;
  return {
    id,
    stem,
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: locator ? attachChhLocator(bundle[L].rationale, locator) : bundle[L].rationale,
    })),
  };
}

function L(which: number): string {
  if (which <= 32) return "CHH Chapter 4, pp. 96–108 — dimensional + recording tactics recap";
  if (which <= 42) return "CHH Chapter 4, pp. 105–112 — discontinuous schedules; interpretation";
  return "CHH Chapter 4, pp. 113–119 — products; practicality; honesty in reporting";
}

const EXTRA: BDSQuestion[] = [
  bx(
    "mod055-q29",
    "During cafeteria observation totaling 240 minutes, coders tally 96 discrete yelling episodes. MOST straightforward rate estimate:",
    "B",
    {
      A: {
        text: "Average bout duration summed across topography.",
        rationale: "Duration sums time topography occupies—not counts divided by denominator minutes.",
      },
      B: {
        text: "Near 0.4 instances per observation minute absent other normalization.",
        rationale: "Divide authorized instances by total observation minutes; Domain C vignettes expect fluent rate arithmetic paired with denominator disclosure.",
      },
      C: {
        text: "Latency from cafeteria bell to pooled responses.",
        rationale: "Latency measures initiation timing—not frequency scaled by denominator.",
      },
      D: {
        text: "Percent affirmative whole-interval bins only.",
        rationale: "Whole-interval summarizes interval occupancy differently from raw discrete counts over clock time.",
      },
    },
    L(29),
  ),
  bx(
    "mod055-q30",
    "BCBA investigates spacing between successive bites during free play—not how long caregivers wait before the first bite after a verbal SD. MOST fitting dimension:",
    "C",
    {
      A: {
        text: "Latency from SD onset to first bite only.",
        rationale: "Stem isolates burst pacing—not cue-to-initiation responsiveness.",
      },
      B: {
        text: "Partial-interval affirmative percentages exclusively.",
        rationale: "Coarse prevalence proxies answer different questions than IRT pacing.",
      },
      C: {
        text: "Interresponse times between successive qualified bites.",
        rationale: "IRT indexes intervals separating repeated instances within the defined class (verify Task List nuances in BACB PDF).",
      },
      D: {
        text: "Respondent elicitation velocity.",
        rationale: "Respondent topography classification is orthogonal to pacing analytics here.",
      },
    },
    L(30),
  ),
  bx(
    "mod055-q31",
    "District uploads classroom video archived for evening coding rotations. MOST accurate characterization of technology-assisted observation:",
    "D",
    {
      A: {
        text: "Deleting operational definitions to reduce storage footprint.",
        rationale: "Operational rules remain obligatory regardless of modality.",
      },
      B: {
        text: "Eliminating discrete observation intervals.",
        rationale: "Archived samples still embody sampling intervals and coder workload trade-offs.",
      },
      C: {
        text: "Removing partial- or whole-interval biases automatically.",
        rationale: "Discontinuous distortions reside in rules—not whether footage is digital.",
      },
      D: {
        text: "Preserving observable traces while budgeting coder fatigue/time against replay fidelity honestly.",
        rationale: "CHH casts mediated archives as logistical trades requiring transparent limits (Domain C integrity).",
      },
    },
    L(31),
  ),
  bx(
    "mod055-q32",
    "Aggressive hits scored with 12-minute whole-interval bins when typical bursts ~12 seconds risks:",
    "A",
    {
      A: {
        text: "Under-representation because behavior seldom fills uninterrupted bins.",
        rationale: "Whole-interval credits marks only after continuous occupancy—wide bins rarely capture brief topography.",
      },
      B: {
        text: "Partial-interval-equivalent inflation.",
        rationale: "Whole-interval errs toward understatement; partial-interval tendencies differ.",
      },
      C: {
        text: "Automatic latency remediation.",
        rationale: "Latency measurement does not emerge from widening whole-interval widths.",
      },
      D: {
        text: "Automatic reinforcement proofs.",
        rationale: "Contingency analysis is distinct from shortcut interval sensitivity.",
      },
    },
    L(32),
  ),
  bx(
    "mod055-q33",
    "Grant narrative proposes momentary time sampling of on-task glimpses yet promises funders micron-level bout reconstruction between probes. BEST correction:",
    "D",
    {
      A: {
        text: "Assert perfect reconstruction fidelity between probes.",
        rationale: "Momentary misses events occurring between instantaneous snapshots absent companion methods.",
      },
      B: {
        text: "Ban caregiver interviews.",
        rationale: "Indirect interviews remain permissible hypothesis tools.",
      },
      C: {
        text: "Delete operational definitions permanently.",
        rationale: "Momentary hinges on plainly operationalized classes.",
      },
      D: {
        text: "Document logistic compromise: practicality trades against blind intervals absent transparent caveat scripts.",
        rationale: "Cooper urges humble disclosure—Domain C fidelity plus Domain E when external audiences read claims.",
      },
    },
    L(33),
  ),
  bx(
    "mod055-q34",
    "Supervisor captions dashboard 'Total minutes yelling' though cells average partial-interval affirmative hits. MOST concise error label:",
    "C",
    {
      A: {
        text: "Disciplined transparency.",
        rationale: "Mislabeled axes conceal tactic limits rather than illuminate them.",
      },
      B: {
        text: "Improved respondent baseline.",
        rationale: "Respondents are irrelevant to labeling interval proxies.",
      },
      C: {
        text: "Conflating prevalence proxies with summed duration narratives stakeholders may misunderstand.",
        rationale: "Keep tactics, axes, and interpretive captions parallel-favorite integrated high-yield confusion point.",
      },
      D: {
        text: "Guaranteed inflated IOA.",
        rationale: "Label errors do not automagically control observer agreement percentages.",
      },
    },
    L(34),
  ),
  bx(
    "mod055-q35",
    "DTT data sheet clocks seconds from discriminative stimulus onset to compliant first response—per discrete trial across session. MOST accurate dimension:",
    "A",
    {
      A: {
        text: "Initiation responsiveness under signaled instructional opportunities.",
        rationale: "Per-trial latency tracks prompt-to-compliant-first-response timing Cooper defines.",
      },
      B: {
        text: "Cumulative topography minutes summed across session.",
        rationale: "Totals reflect duration topography occupies—not SD-to-first-response timing.",
      },
      C: {
        text: "Partial-interval affirmative prevalence.",
        rationale: "Discontinuous aggregates differ from individualized trial latency timelines.",
      },
      D: {
        text: "Permanent-product tally of binder pages intact.",
        rationale: "Residual measurement answers different referral questions.",
      },
    },
    L(35),
  ),
  bx(
    "mod055-q36",
    "Teachers score completed handwriting rows against operational rubrics after handwriting goals roll out. MOST parallel measurement tactic:",
    "D",
    {
      A: {
        text: "Latency timers exclusively.",
        rationale: "Latency indices differ from countable completed rows.",
      },
      B: {
        text: "IRT pacing exclusively.",
        rationale: "IRT concerns spacing—not rubric-aligned completion counts.",
      },
      C: {
        text: "Respondent catalogs exclusively.",
        rationale: "Respondent distinctions do not hinge on tallying residuals.",
      },
      D: {
        text: "Permanent-product summaries when residuals map transparently onto accepted definitions.",
        rationale: "Completed artifacts responsibly proxy topography when calibrated (CHH).",
      },
    },
    L(36),
  ),
  bx(
    "mod055-q37",
    "Regional meeting reviews partial-interval on-task dashboards without caveat language—caregivers assume charts equal continuous vigilance percentages. MOST integrated critique:",
    "B",
    {
      A: {
        text: "Ignoring social-significance stories.",
        rationale: "Primary lapse is withheld sampling bias narration undermining fidelity and truthful reporting.",
      },
      B: {
        text: "Undermining empirical humility Dimensions C & E expect when proportion estimates mislead collaborators.",
        rationale: "Name partial-interval inflation direction beside plots; secrecy invites mis-calibrated instructional decisions.",
      },
      C: {
        text: "Failing MRI screening protocols.",
        rationale: "Clinical imaging is irrelevant to withheld sampling disclaimers.",
      },
      D: {
        text: "Neglecting respondent elicitation reviews.",
        rationale: "Stem concerns measurement reporting—not respondent classification trivia.",
      },
    },
    L(37),
  ),
  bx(
    "mod055-q38",
    "Regional analyst defaults reporting tool to summed bout minutes because spreadsheets ship that widget—even though IEP narratives emphasize incidents per unstructured recess hour:",
    "A",
    {
      A: {
        text: "Violates marrying dimensional rulers to referral hypotheses stakeholders already voiced.",
        rationale: "Match measurement to analytic questions before vendor palettes (Domain C storylines).",
      },
      B: {
        text: "Exemplifies culturally responsive assessment.",
        rationale: "Ignoring caregiver incident framing contradicts responsiveness.",
      },
      C: {
        text: "Guarantees exhaustive functional-analysis validity.",
        rationale: "FA conclusions do not hinge on spreadsheet defaults caricatured here.",
      },
      D: {
        text: "Substitutes metaphysical realism for radical behaviorism.",
        rationale: "Philosophical branch irrelevant to pragmatic dimensional mismatch.",
      },
    },
    L(38),
  ),
  bx(
    "mod055-q39",
    "Observers mark stereotypy only when presence is scored at predetermined end-of-interval snapshots. BEST procedural label:",
    "C",
    {
      A: {
        text: "Whole-interval uninterrupted occupancy tally.",
        rationale: "Whole-interval requires affirmative marks across entire interval slices—not single glimpse rules.",
      },
      B: {
        text: "Traditional event-frequency recording continuously.",
        rationale: "Event recording tallies occurrences—not instantaneous probe decisions.",
      },
      C: {
        text: "Momentary time sampling at scheduled instantaneous checkpoints.",
        rationale: "Predetermined instantaneous scoring reflects momentary probes (consult CHH procedural tables).",
      },
      D: {
        text: "Partial-interval credit anywhere touches slice.",
        rationale: "Partial rules differ from instantaneous snapshot scoring.",
      },
    },
    L(39),
  ),
  bx(
    "mod055-q40",
    "Repeated baseline cafeteria probes capture wide elevation swings before reinforcement plan launches. MOST direct justification:",
    "D",
    {
      A: {
        text: "Deleting questionnaires permanently.",
        rationale: "Indirect tools remain permissible companions—not mandatory deletions.",
      },
      B: {
        text: "Guarantee full experimental FA completion.",
        rationale: "Rich baseline variability supports comparisons without promising FA completeness.",
      },
      C: {
        text: "Erasing partial-interval bias mechanically.",
        rationale: "Shortcut biases persist independent of baseline sampling density.",
      },
      D: {
        text: "Anchoring believable phase contrasts against authentic pretreatment variability.",
        rationale: "Baseline discipline is core Domain C logic before intervention claims.",
      },
    },
    L(40),
  ),
  bx(
    "mod055-q41",
    "Plan graphs mean bites per minute alongside summed bout minutes nightly for the same classroom. MOST defensible analytic habit:",
    "B",
    {
      A: {
        text: "Force both metrics onto one KPI line without explanation.",
        rationale: "Parallel dimensions require disciplined separate narratives plus bias notes.",
      },
      B: {
        text: "Separate interpretive write-ups—including shortcut disclosure where applicable—for each dimensional portrait.",
        rationale: "Transparent parallel storytelling prevents stakeholder misreads on blended dashboards.",
      },
      C: {
        text: "Remove graphs culturally.",
        rationale: "Accountability insists keeping plots with caveat discipline—not deleting evidence.",
      },
      D: {
        text: "Retire operational definitions mid-year.",
        rationale: "Definitions deepen when hybrid metrics multiply.",
      },
    },
    L(41),
  ),
  bx(
    "mod055-q42",
    "Referral urgently asks whether self-injury concentrates into extended tissue-damaging bouts versus quick isolated contacts. Selecting continuous tactic FIRST MOST hinges on:",
    "C",
    {
      A: {
        text: "Vendor aesthetics exclusively.",
        rationale: "Gadget marketing must not overshadow referral dimensional questions.",
      },
      B: {
        text: "Universal partial-interval mandate.",
        rationale: "No universal mandate—partial intervals carry directional bias footprints.",
      },
      C: {
        text: "Whether analytic priority targets countable episodic spikes versus summed temporal occupancy.",
        rationale: "Event tallies emphasize discrete occurrences; durations aggregate engagement time—often both answer distinct facets responsibly.",
      },
      D: {
        text: "Banning latency timers.",
        rationale: "Latency remains valid when hypotheses warrant initiation timing—not automatic bans.",
      },
    },
    L(42),
  ),
  bx(
    "mod055-q43",
    "Momentary glimpses spaced across lunch miss micro meltdowns between probes despite polished trend lines for funders. MOST accountability move:",
    "A",
    {
      A: {
        text: "Narrate blind intervals plainly so captions align with clinician-observed burst density.",
        rationale: "Caveats pair Domain C truthful display with Domain E stakeholder honesty.",
      },
      B: {
        text: "Delete scatterplots to hide mismatch.",
        rationale: "Supplementary plots can coexist with honest sampling disclosures.",
      },
      C: {
        text: "Certify monocausal automatic reinforcement absent data.",
        rationale: "Unsupported functional leap.",
      },
      D: {
        text: "Shred archival IEP paperwork without consent.",
        rationale: "Professional records obligations forbid destructive shortcuts.",
      },
    },
    L(43),
  ),
  bx(
    "mod055-q44",
    "Partial-interval affirmative bins widen from thirty seconds to three minutes absent narrative edits. MOST likely measurement consequence:",
    "B",
    {
      A: {
        text: "Faithful reconstruction of continuous engagement.",
        rationale: "Wider partial slices exaggerate affirmative hits relative to continuous observation truths.",
      },
      B: {
        text: "Inflated prevalence estimates versus narrower continuous gauges unless caveats escalate accordingly.",
        rationale: "Transparent reporting must track bin width revisions Cooper discusses.",
      },
      C: {
        text: "Automatic extinction of topography.",
        rationale: "Recording parameters do not remove behavior topography.",
      },
      D: {
        text: "Operational definition revocation.",
        rationale: "Definitions remain binding while intervals widen.",
      },
    },
    L(44),
  ),
  bx(
    "mod055-q45",
    "BCBA inventories dried saliva cuffs nightly using operational dribble definitions clinicians rehearsed aloud. MOST accurate tactic label:",
    "C",
    {
      A: {
        text: "Latency pacing exclusively.",
        rationale: "Latency indexes delays—not countable residue surrogates.",
      },
      B: {
        text: "IRT reinforcement proofs exclusively.",
        rationale: "IRT spacing differs materially from surrogate counts.",
      },
      C: {
        text: "Permanent-product correlates tethered ethically to topography rules.",
        rationale: "Artifacts extend measurement when residuals map cleanly to definitions.",
      },
      D: {
        text: "Whole-interval fusion with momentary scoring.",
        rationale: "Nonsense procedural mash-up.",
      },
    },
    L(45),
  ),
  bx(
    "mod055-q46",
    "Selecting discontinuous cafeteria scans maturely MOST waits until teams clarify:",
    "B",
    {
      A: {
        text: "Dashboard color palettes alone.",
        rationale: "Presentation choices trail definitional and dimensional sequencing.",
      },
      B: {
        text: "Observable operational boundaries plus prioritized referral hypotheses.",
        rationale: "CHH insists definitional coherence precedes logistical shortcut gadgets.",
      },
      C: {
        text: "Every FA reversal contingency.",
        rationale: "FA completions are orthogonal to baseline measurement pacing for generic referrals.",
      },
      D: {
        text: "Universal stakeholder bans on quantification.",
        rationale: "Unsupported distractor.",
      },
    },
    L(46),
  ),
  bx(
    "mod055-q47",
    "Lead analyst trains observers immediately after scripted definitions stabilize but before exporting polished intervention graphs campus-wide. Sequence MOST foreshadows:",
    "A",
    {
      A: {
        text: "Interobserver probes Cooper expands in Chapter 5 once foundational recording tactics hold.",
        rationale: "IOA computations formalize thereafter—exam forward references recur with Domain C scaffolding.",
      },
      B: {
        text: "Deleting archived student records spontaneously.",
        rationale: "Retention policies forbid destructive whims unrelated to fidelity.",
      },
      C: {
        text: "Certifying solitary automatic reinforcement.",
        rationale: "Irrelevant categorical jump.",
      },
      D: {
        text: "Respondent extinction saturation.",
        rationale: "Measurement staging differs from respondent behavior arcs.",
      },
    },
    L(47),
  ),
  bx(
    "mod055-q48",
    "'Measurement fidelity' in Chapter 4 discourse MOST insists trend lines remain faithful to:",
    "C",
    {
      A: {
        text: "Whatever modality supervisors aesthetically prefer.",
        rationale: "Fidelity transcends supervisory taste.",
      },
      B: {
        text: "Punishment inventories exclusively.",
        rationale: "Punishment selection is orthogonal to fidelity definition here.",
      },
      C: {
        text: "Operational clarity plus disciplined sampling with disclosed approximation limits.",
        rationale: "Fidelity couples definitions with honest instrumentation narration—Domain C nucleus.",
      },
      D: {
        text: "Anecdotes absent numeric substrates.",
        rationale: "CHH rejects anecdote-only defense of measurement claims.",
      },
    },
    L(48),
  ),
  bx(
    "mod055-q49",
    "Logistics force discontinuous cafeteria scans—what humility practice MOST parallels Cooper?",
    "D",
    {
      A: {
        text: "Silencing staffing constraints.",
        rationale: "Constraints belong in captions or methodological notes—not hidden disclaimers.",
      },
      B: {
        text: "Claiming spreadsheets alone reconstruct uninterrupted continuous engagement.",
        rationale: "Discontinuous tactics cannot honestly promise uninterrupted continuous fidelity absent caveats.",
      },
      C: {
        text: "Erasing modality disagreements spontaneously.",
        rationale: "Document conflicts openly for multidisciplinary integrity.",
      },
      D: {
        text: "Publish sampling windows plus directional biases audiences should mentally discount.",
        rationale: "Humility pairing data with caveat vocabulary—Domain C+E when external readers attend.",
      },
    },
    L(49),
  ),
  bx(
    "mod055-q50",
    "Integrated Chapter 4 mastery for BCBA candidates MOST synthesizes:",
    "B",
    {
      A: {
        text: "Rotely memorizing a single universally mandated recording tactic.",
        rationale: "Contextual analyses pick tactics aligned to referral plus logistics.",
      },
      B: {
        text: "Locking rulers to referral language, admitting logistic trades, tagging shortcut biases auditors can scrutinize—and rehearsing how each graph reads against official Task List wording (BACB PDF) plus Cooper.",
        rationale: "Closes workbook measurement arc with humility + analytic integrity consonant with sixth-ed Domains C and E echoes.",
      },
      C: {
        text: "Suppressing stakeholder interviews permanently.",
        rationale: "Interviews nurture hypotheses—even when corroborated by direct sampling.",
      },
      D: {
        text: "Publishing graphs bereft of definitional rehearsals.",
        rationale: "Definitions precede instrumentation consistently.",
      },
    },
    L(50),
  ),
];

export const CHAPTER_04_WORKBOOK_QUIZ_BANK: BDSQuestion[] = [...CORE, ...EXTRA];
