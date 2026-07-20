/**
 * Items mock6e-071 through mock6e-185 (TCO domains A–I).
 * Authored core covers 001–070 (including 051–070 for Domains H and I).
 * Not affiliated with the BACB; verify task wording with official materials.
 */
import type { BDSQuestion } from "@/lib/content-types";
import { mockQ } from "@/content/mockExam/mockExamQuestionFactory";

type Dom = NonNullable<BDSQuestion["tcoDomain"]>;

const DOMAINS: readonly Dom[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const ISSUES = [
  "Funding cuts IOA probes; dashboards still claim gold-standard fidelity.",
  "Caregiver reports consent form never adequately translated before signature.",
  "School asks to delete peer comparison bars for privacy obscuring segregation effects.",
  "BCBA pressured to certify outcomes never observed across community settings.",
  "Regional director requests billing units untied from observable delivery.",
  "Video data linger on clinician personal phones weeks without secure upload.",
  "FA elements run without trained IOA because we trust the vibe.",
  "Reinforcement thinning races ahead of contact history and rates collapse.",
  "Scatterplot lumps incompatible activity blocks; hypotheses blur.",
  "Supervisor praises 100% procedural integrity absent integrity measurement.",
  "Token board rarely redeemed; learner says points are imaginary.",
  "Extinction bursts met with escalating verbal reprimands from aides.",
  "FCT installs break-contact previously accessed via aggression bursts.",
  "Alternating treatments bleed across conditions while decks omit caveat.",
  "Baseline climbs before credited intervention absent MO narrative.",
  "Preference rank-one fails reinforcer probes in actual sessions.",
  "Aggression swipe definition misses low-intensity contact spikes.",
  "Latency demand-to-aggression shrinks after teacher thickens removals.",
  "Operant thinning collapse mislabeled respondent extinction only.",
  "Equivalence symmetry proofs demanded where simple discrimination rehearsal suffices.",
  "Graph lacks criterion lines yet claims SCC demonstration.",
  "Multiple baseline stagger misaligned implying simultaneous introductions.",
  "Caregiver later admits tangible element blended with covert escape reinforcement.",
  "School refuses extended FA pacing citing trauma; urgency clashes.",
  "Trainee posts identifiable hallway clip labeled as meme.",
  "Conference slide pastes Ethics Code without visible attribution framing.",
  "Employer wants BCBA to sign salesperson-authored plan unseen.",
  "Colleague offers side payments tied to inflated supervision hours.",
  "Parent ships luxury vacation thanking you for miracles tied to referrals.",
  "Agency marketing language oversells graphed slopes versus titles.",
  "PHI routed to unsecured consumer email for expedience.",
  "Narrow exemplars marketed as generalized mastery without probes.",
  "DRI window spans lunch merged with academics unstably.",
  "Self-monitoring forms inflated heroically only on supervised days.",
] as const;

const BEST_LINES: Record<Dom, readonly string[]> = {
  A: [
    "Tether claims to replication, philosophic doubt, and environment-focused interpretations—not slogan certainty.",
    "Contrast mentalistic shortcuts with verbally mediated behavior interpretations under analytic constraints.",
    "Keep private-events talk inside behavior-analytic discourse without Cartesian dualism.",
    "Treat poster certainty as tentative pending replication rivals pruned.",
    "Use selection metaphors without substituting individualized evidence.",
  ],
  B: [
    "Parse discriminative stimuli, EO, and consequence interactions before rebranding topography.",
    "Treat extinction bursts/resurgence as lawful—pair with humane programming guidance.",
    "Suspect schedule strain when thinning leaps ahead reinforcement contact histories.",
    "Isolate stimulus-control hypotheses from respondent-only folklore.",
    "Document MO/third-variable shifts when unexplained baseline trends emerge.",
  ],
  C: [
    "Sharpen definitions plus localized IOA on variance pockets aggregates hide.",
    "Report MTS/interval limits honestly—avoid turning samples into cumulative duration fantasies.",
    "Add initiation/latency when duration tallies mask sluggish starts systematically.",
    "Surface patterned coder omission despite friendly aggregate percentages.",
    "Pair permanent-product counts with accuracy or error metrics when stakes warrant.",
  ],
  D: [
    "Surface undocumented overlays (medication, staffing) compromising internal validity before causal praise.",
    "Align stagger introductions with covariance logic in multiple-baseline narratives.",
    "Flag ATD interference tempering superiority marketing.",
    "Verify criterion-shift correspondence before SCC claims finalize.",
    "Document withdrawal/resurgence parallels before maintenance language hardens.",
  ],
  E: [
    "Refuse false documentation routes; escalate through lawful supervisory channels documenting facts.",
    "Route PHI only through sanctioned secure-transfer workflows—even under schedule pressure.",
    "Align public claims with plotted evidence—not deck-friendly exaggerations.",
    "Separate gifts/conflicts from fiduciary duties with transparent disclosures.",
    "Pause or scaffold services until consent access is equitable—not performative signatures.",
  ],
  F: [
    "Blend indirect/descriptive richness before deepening experimental ethically per consented pacing.",
    "Revise modality integrity when caregiver amends intertwined consequences post hoc.",
    "Validate reinforcer function with probes—not assumption from preference ranks.",
    "State observation/IOA limitations honestly before causal certainty claims propagate.",
    "Sequence least-to-invasive paths honoring trauma-informed assent pacing.",
  ],
  G: [
    "Normalize bursts; reinforce function-matched alternatives; protect procedural fidelity humanely.",
    "Fade prompts respecting delay gradients—not impatient silent skips.",
    "Repair token-exchange integrity restoring trustworthy backup reinforcement.",
    "Plan maintenance/generalization sampling before proclaiming durable mastery.",
    "Frame DRL/DRI/DTO risks with omission-support packages where omissions could punish excessively.",
  ],
  H: [
    "Sequence intervention selection by function match, evidence base, least-restrictive fit, and consent quality before implementation.",
    "Build treatment integrity checklists with observable steps and independent fidelity probes.",
    "Contextualize evidence base to the learner's assent, culture, medical constraints, and setting before adopting the intervention.",
    "Pair every implementation with generalization and maintenance programming—not acquisition-only slopes.",
    "Coordinate care with medical, educational, and family stakeholders before finalizing the plan.",
  ],
  I: [
    "Honor caseload/ratio limits and document supervision time, content, and feedback quality per BACB requirements.",
    "Deliver competency-based supervision anchored in observable performance, BST cycles, and equity of access.",
    "Escalate ethical concerns through documented lawful channels—internal first, external when internal fails.",
    "Balance individual/group supervision, prohibit misrepresentation of hours, and audit accrual documentation.",
    "Model cultural humility and trauma-informed feedback while protecting confidentiality of trainees and clients.",
  ],
};

const DISTRACT: Record<Dom, readonly string[]> = {
  A: [
    "Ban private verbal reports categorically forever.",
    "Assert single graphs prove planetary laws mechanically.",
    "Adopt Cartesian soul-language for bedside rapport regardless.",
    "Dismiss philosophic doubt as academic noise ignore data.",
    "Replace behavior talk with unrestricted mental causes solely.",
    "Assume parsimony means whichever caregiver story comforts most.",
    "Reject experimentation because radical forbids hypotheticals.",
    "Conflate methodological and radical philosophies without distinctions.",
  ],
  B: [
    "Relabel reinforcement mistakes as respondent extinction automatically.",
    "Delete MO bookkeeping as cosmetics optional mechanically.",
    "Punish bursts morally absent safety/function review mechanically.",
    "Assume ratio strain mythical on VR thinning mechanically silently.",
    "Collapse operant distinctions into generic habit slang loosely.",
    "Interpret every topography shift as sensory automatic reinforcement proved.",
    "Freeze SD wording while EO shifts unnoticed mechanically.",
    "Ignore baseline mand trends devoid evocative documentation mechanically.",
  ],
  C: [
    "Celebrate aggregate IOA while ignoring clustered misses ethically bankrupt.",
    "Convert MTS samples into summed minutes silently.",
    "Delete low-frequency sessions to beautify spreadsheets quietly.",
    "Assume duration substitutes for accuracy mechanically.",
    "Mask systematic low-intensity misses behind means mechanically.",
    "Lock charts purely as marketing modality definitions absent mechanically.",
    "Force video-only fidelity rules categorically mechanically.",
    "Pool incompatible contexts into one aggregate mechanically.",
  ],
  D: [
    "Praise efficacy while medication confounds timelines hidden mechanically.",
    "Delete messy baseline phases ethically indefensible mechanically.",
    "Infer group RCT significance from lone single-case mechanically.",
    "Hide ATD bleed-through to placate reviewers mechanically mechanically.",
    "Declare sensory automatic reinforcement sans programmed contrasts mechanically mechanically.",
    "Treat stagger schedules optional mechanically mechanically mechanically.",
    "Omit reversal narratives yet claim maintenance mechanically mechanically.",
    "Present SCC superiority with misaligned reinforcement timestamps mechanically mechanically mechanically.",
  ],
  E: [
    "Quietly falsify CPT units mechanically mechanically mechanically.",
    "Dox families anonymously online mechanically mechanically mechanically.",
    "Assume consumer email HIPAA magically mechanically mechanically mechanically.",
    "Inflate supervisee hours for bonuses mechanically mechanically mechanically.",
    "Accept extravagant gifts tethered prescribing mechanically mechanically mechanically.",
    "Rubber-stamp plans unread mechanically mechanically mechanically.",
    "Conflate hustle with fiduciary obligation mechanically mechanically mechanically.",
    "Delegate misconduct silence to accountants mechanically mechanically mechanically.",
  ],
  F: [
    "Declare function unanimous from questionnaires alone mechanically mechanically mechanically.",
    "Run covert FA to dodge consent friction mechanically mechanically mechanically.",
    "Trash descriptive observation mechanically mechanically mechanically mechanically.",
    "Ignore caregiver revised histories mechanically mechanically mechanically mechanically.",
    "Start punishment before hypotheses disciplined mechanically mechanically mechanically mechanically.",
    "Skip reinforcement probes mechanically mechanically mechanically mechanically mechanically.",
    "Brand abbreviated FA as exhaustive mechanically mechanically mechanically mechanically mechanically.",
    "Assume FAST unanimity ends assessment mechanically mechanically mechanically mechanically mechanically.",
  ],
  G: [
    "Reprimand bursts morally before fidelity review.",
    "Soothe with dense attention risking reinforcer replenishment during extinction.",
    "Abort extinction on first burst without team review or safety plan.",
    "Keep tokens laminated without honoring the exchange schedule.",
    "Skip prompt-delay fidelity checks and remove prompts overnight.",
    "Close cases without maintenance probes or booster planning.",
    "Widen DRI omission windows without added supports when errors spike.",
    "Confuse DRH acceleration targets with DRL reduction objectives.",
  ],
  H: [
    "Pick the trendiest intervention regardless of function or fit.",
    "Copy last client's plan without individualization or consent review.",
    "Skip fidelity checks because the RBT reports the plan is easy.",
    "Adopt an intervention outside scope because the family requested it.",
    "Delete generalization and maintenance steps to shorten the plan.",
    "Rely on caregiver enthusiasm as a substitute for treatment integrity data.",
    "Change protocols mid-week without documented rationale.",
    "Bill for a package before consent is understandable to the caregiver.",
  ],
  I: [
    "Accept a caseload that makes competent supervision impossible.",
    "Bill supervision units for hours never delivered or observed.",
    "Deliver supervision as vague pep talks without observable performance criteria.",
    "Retaliate against a supervisee who raised an ethics concern.",
    "Skip BST fidelity, feedback, or documentation because the trainee is 'senior.'",
    "Blur boundaries with supervisees via barter, gifts, or social media.",
    "Ignore inequities in supervision access across cases or supervisees.",
    "Sign off on hours the trainee accrued outside your direct oversight.",
  ],
};

const EXPANDED_START = 71;

function vignette(index: number, dom: Dom) {
  const issue = ISSUES[index % ISSUES.length]!;
  const stem = `[Item ${String(EXPANDED_START + index).padStart(3, "0")} · TCO ${dom}] ${issue} MOST defensible next emphasis?`;

  const bestPool = BEST_LINES[dom];
  const best = bestPool[index % bestPool.length]!;
  const dpool = DISTRACT[dom];
  const w1 = dpool[(index * 3) % dpool.length]!;
  const w2 = dpool[(index * 5 + 1) % dpool.length]!;
  const w3 = dpool[(index * 7 + 2) % dpool.length]!;

  return mockQ(`mock6e-${String(EXPANDED_START + index).padStart(3, "0")}`, dom, stem, [
    {
      text: best,
      correct: true,
      rationale: `Best maps the issue to TCO ${dom} priorities (measurement, ethics, and scope as applicable).`,
    },
    {
      text: w1,
      correct: false,
      rationale: "Tempting but misroutes analytic priorities signaled in the vignette stem.",
    },
    {
      text: w2,
      correct: false,
      rationale: "Overclaims or overlooks documented contingency/modality stakes in the scenario.",
    },
    {
      text: w3,
      correct: false,
      rationale: "Common foil—check honesty, pacing, fidelity, or scope obligations before endorsing.",
    },
  ]);
}

function buildExpanded(): BDSQuestion[] {
  const out: BDSQuestion[] = [];
  for (let i = 0; i < 115; i++) {
    out.push(vignette(i, DOMAINS[i % DOMAINS.length]!));
  }
  return out;
}

export const BCBA_MOCK_EXAM_EXPANDED_BANK: BDSQuestion[] = buildExpanded();
