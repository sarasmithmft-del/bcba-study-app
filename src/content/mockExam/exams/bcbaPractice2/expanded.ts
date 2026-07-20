/**
 * Mock Exam 2 — expanded vignettes mock2-075 … mock2-185 (TCO A–I).
 * Authored core covers 001–074 (including 051–070 for Domains H and I,
 * and 071–074 for Domain G behavior-change procedures).
 */
import type { BDSQuestion } from "@/lib/content-types";
import { buildMockExamExpandedBank } from "@/content/mockExam/mockExamExpandedBuilder";

const DOMAINS = ["A", "B", "C", "D", "E", "F", "G", "H", "I"] as const;

const ISSUES = [
  "A BCBA markets 'guaranteed mastery' on social media using de-identified graphs without consent documentation.",
  "Supervisee runs alternating treatments but condition order flips mid-week without protocol amendment.",
  "Partial-interval IOA reads 92% while both observers systematically miss brief high-rate bursts.",
  "Parent requests BCBA prescribe psychiatric medication during team meeting citing rapport.",
  "School team wants to skip assent because the learner 'doesn't understand anyway.'",
  "Agency owner asks BCBA to cosign plans authored by uncredentialed sales staff.",
  "FCT break-contact installed but extinction for aggression never implemented—rates climb.",
  "Multiple-baseline graph shows stagger yet introduction dates overlap on two tiers.",
  "Latency from demand to compliance improves while accuracy on independent work collapses.",
  "Caregiver gifts luxury watch after discharge citing gratitude—no disclosure logged.",
  "RBT posts classroom video to personal story with visible student faces.",
  "Baseline trend rises sharply after illness; team credits intervention anyway.",
  "DRA thin schedule jumps from FR1 to FR10 in one session without contact data.",
  "FA test condition highest rates but therapist inadvertently delivers attention during control.",
  "Self-management graphs perfect only when BCBA present; collateral IOA fails.",
  "Token economy backup menu unchanged six months; exchange rate near zero.",
  "Supervisor approves punishment-heavy plan with no crisis protocol or assent review.",
  "Scatterplot shows problem behavior clustered during unstructured transitions only.",
  "Equivalence probe fails symmetry; team still claims class formation mastered.",
  "Employer instructs BCBA to bill 97155 while only RBT present in home.",
  "Maintenance probes skipped; discharge packet cites acquisition graph only.",
  "Narrow exemplar training on one flashcard set; community probe fails.",
  "Interdependent group contingency sparks peer ridicule toward lowest performer.",
  "BCBA asked to supervise 25 trainees with 2 hours/month oversight budget.",
  "Descriptive observation contradicts FAST on automatic reinforcement hypothesis.",
  "Changing-criterion steps advance despite missed reinforcement at prior tier.",
  "MO shift after schedule change undocumented; team interprets as treatment failure.",
  "Confidential IEP notes forwarded to parent group chat by well-meaning aide.",
  "BCBA implements feeding protocol outside scope—no medical clearance documented.",
  "Extinction burst met with physical blocking; no BIP revision or safety review.",
  "Graph y-axis rescaling makes flat data appear steeply improved.",
  "Caregiver trained on NCR but delivers on fixed 5-minute clock ignoring function.",
  "BCBA declines to report colleague's data falsification fearing retaliation.",
  "Preference assessment rank-1 item fails reinforcer probe in vivo sessions.",
  "Whole-chain forward chaining mastery claimed with only first link stable.",
  "Social validity interviews omitted; team declares goals met on graph alone.",
] as const;

const BEST_LINES = {
  A: [
    "Reframe private events as behavior subject to environmental analysis—not causes immune to measurement.",
    "Apply philosophic doubt: treat conclusions as tentative pending replication and rival explanations.",
    "Reject mentalistic shortcuts when operant contingencies parsimoniously account for the data.",
    "Distinguish selection-by-consequences metaphors from individualized single-case evidence.",
    "Keep scientific storytelling aligned with observable relations—not slogan certainty.",
  ],
  B: [
    "Parse EO, SD, and consequence interactions before relabeling topography as new function.",
    "Treat ratio strain as schedule hypothesis when VR thinning precedes sudden rate collapse.",
    "Document MO shifts when baseline trends change independent of intervention contact.",
    "Separate respondent from operant interpretations using programmed contrasts—not assumption.",
    "Plan for resurgence/renewal when reinforcement contingencies shift or are removed.",
  ],
  C: [
    "Repair definitions and localized IOA on high-variance windows aggregates hide.",
    "Report measurement limitations honestly—partial interval overcounts; MTS is sample not duration sum.",
    "Add latency or trial-by-trial accuracy when duration masks poor quality performance.",
    "Use permanent product plus accuracy checks when stakes require dual verification.",
    "Flag systematic observer drift despite acceptable mean IOA percentages.",
  ],
  D: [
    "Document confounds (medication, staffing, holidays) before attributing change to intervention.",
    "Align stagger logic with introduction dates in multiple-baseline narratives.",
    "Note ATD carryover when alternating treatments may bleed across conditions.",
    "Verify reinforcement-criterion alignment before changing-criterion claims finalize.",
    "Pair withdrawal/reversal data with maintenance language—not acquisition slopes alone.",
  ],
  E: [
    "Refuse falsification; document facts; pursue lawful reporting and supervisory escalation.",
    "Disclose dual relationships; reorganize lines; protect objectivity before conflicts compound.",
    "Obtain understandable consent/assent; pause intensive services until access is equitable.",
    "Stay within scope; refer or obtain clearance when medical or out-of-competence demands arise.",
    "Protect confidentiality with lawful disclosure pathways—not PR-driven record scrubbing.",
  ],
  F: [
    "Triangulate indirect, descriptive, and experimental modalities before treatment commitment.",
    "Revise function hypothesis when caregiver amends history or confounds emerge post hoc.",
    "Validate reinforcers with in-vivo probes—not preference rank alone.",
    "Sequence least-to-most invasive assessment honoring assent and trauma-informed pacing.",
    "Report observation limits and IOA before causal certainty propagates to stakeholders.",
  ],
  G: [
    "Pair extinction with function-matched reinforcement; coach staff through lawful burst response.",
    "Repair token-exchange integrity; audit backup reinforcer MO alignment.",
    "Program exemplar diversity and maintenance probes before generalized mastery claims.",
    "Thin prompts on delay gradients with integrity checks—not abrupt silent removal.",
    "Frame DRO/DRI/DRA with omission supports when lean schedules risk coercion.",
  ],
  H: [
    "Select the intervention by function match, evidence base, least-restrictive fit, assent, and cultural context.",
    "Operationalize implementation with observable steps, fidelity probes, and revision criteria.",
    "Program maintenance and generalization from day one—not as an afterthought at discharge.",
    "Coordinate with medical, educational, and family stakeholders before implementation begins.",
    "Match dosage, modality, and delivery agent to the learner's context, not to billing convenience.",
  ],
  I: [
    "Honor caseload/ratio limits; document supervision time, content, and feedback quality per BACB requirements.",
    "Deliver competency-based supervision via BST cycles anchored in observable performance.",
    "Escalate ethical concerns through documented lawful channels—internal first, external if unresolved.",
    "Prohibit misrepresentation of hours; audit accrual documentation before signing.",
    "Model cultural humility and trauma-informed feedback while protecting supervisee/client confidentiality.",
  ],
} as const;

const DISTRACT = {
  A: [
    "Ban all talk of private events as unscientific forever.",
    "Accept caregiver mentalistic explanations as sufficient causes.",
    "Treat one graph as proof of universal behavioral law.",
    "Dismiss replication as wasteful duplication.",
    "Replace contingency analysis with unrestricted trait labels.",
    "Conflate radical and methodological behaviorism without teaching distinctions.",
    "Use parsimony to mean whichever story feels simplest emotionally.",
    "Reject verbal behavior analysis for private-event talk categorically.",
  ],
  B: [
    "Label every rate change as respondent extinction automatically.",
    "Ignore MO documentation as optional bookkeeping.",
    "Punish extinction bursts as moral failure without safety review.",
    "Assume VR schedules cannot produce ratio strain.",
    "Collapse all operant classes into generic 'behavior' slang.",
    "Treat every sensory behavior as automatic reinforcement proved.",
    "Freeze SD wording while EO shifts go unmeasured.",
    "Skip resurgence planning when reinforcement is removed.",
  ],
  C: [
    "Trust mean IOA while ignoring clustered disagreement on bursts.",
    "Sum MTS intervals into cumulative duration minutes.",
    "Delete low-rate sessions to beautify trends.",
    "Use duration alone when accuracy is the performance target.",
    "Accept 90% IOA without reviewing error patterns.",
    "Report graphs without stating measurement method limits.",
    "Pool incompatible settings into one undifferentiated aggregate.",
    "Skip IOA because 'experienced' observers agree informally.",
  ],
  D: [
    "Credit intervention while medication changed same week undocumented.",
    "Delete messy baseline to improve visual impression.",
    "Generalize single-case results to population without caution.",
    "Hide ATD order effects to simplify marketing slides.",
    "Declare SCC success with misaligned reinforcement timing.",
    "Treat stagger as optional in multiple-baseline logic.",
    "Skip reversal or withdrawal probes when claiming maintenance.",
    "Present group statistics as substitute for single-case design fidelity.",
  ],
  E: [
    "Comply with unlawful billing to preserve employment silently.",
    "Share identifiable clips on social media for training optics.",
    "Accept gifts tied to referral volume without disclosure.",
    "Cosign plans never reviewed to meet quota deadlines.",
    "Skip assent because family prefers speed over process.",
    "Implement out-of-scope medical protocols without referral.",
    "Scrub clinical records for PR without legal review.",
    "Retaliate against supervisee who raised ethics concerns publicly.",
  ],
  F: [
    "Accept FAST results as definitive function without observation.",
    "Run experimental analysis without informed consent pacing.",
    "Discard descriptive data as 'anecdotal' automatically.",
    "Ignore revised caregiver interview after FA contradicts hypothesis.",
    "Start punishment before assessment sequence completes.",
    "Skip in-vivo reinforcer probes after preference assessment.",
    "Brand brief analog FA as exhaustive functional assessment.",
    "Assume questionnaire unanimity ends assessment obligations.",
  ],
  G: [
    "Reprimand bursts before reviewing extinction integrity and safety.",
    "Deliver dense attention during extinction that may replenish R+.",
    "Abort extinction at first burst without team review.",
    "Maintain token board without honoring exchange schedule.",
    "Remove all prompts overnight claiming 'independence.'",
    "Discharge without maintenance or generalization probes.",
    "Widen DRO intervals without supports when errors spike.",
    "Confuse DRH thinning targets with DRL reduction goals.",
  ],
  H: [
    "Adopt trending interventions without function match or evidence review.",
    "Copy a peer's plan verbatim without individualization or consent.",
    "Skip fidelity data collection because implementation feels smooth.",
    "Overlook generalization/maintenance programming to shorten timelines.",
    "Extend scope into medical territory without referral or clearance.",
    "Change protocols mid-week without documentation or rationale.",
    "Rely on caregiver enthusiasm as a substitute for treatment integrity.",
    "Bill for a bundled package before consent is understandable to the caregiver.",
  ],
  I: [
    "Accept a caseload guaranteeing inadequate supervision hours.",
    "Bill supervision units never delivered or directly observed.",
    "Deliver supervision as vague encouragement without performance criteria.",
    "Retaliate against a supervisee who raised an ethics concern.",
    "Skip BST fidelity/feedback because the trainee is experienced.",
    "Blur supervisor boundaries via barter, gifts, or dual roles.",
    "Sign off on hours accrued outside your direct oversight.",
    "Withhold equitable supervision access based on trainee background.",
  ],
} as const;

const STEM_VARIANTS = [
  (n: number, d: typeof DOMAINS[number], issue: string) =>
    `[Item ${String(n).padStart(3, "0")} · TCO ${d}] ${issue} Which action is MOST consistent with ethical and analytic practice?`,
  (n: number, d: typeof DOMAINS[number], issue: string) =>
    `[Item ${String(n).padStart(3, "0")} · TCO ${d}] ${issue} What should the BCBA do FIRST?`,
  (n: number, d: typeof DOMAINS[number], issue: string) =>
    `[Item ${String(n).padStart(3, "0")} · TCO ${d}] ${issue} Which response BEST addresses the primary concern?`,
] as const;

export const BCBA_MOCK_EXAM_PRACTICE2_EXPANDED_BANK = buildMockExamExpandedBank({
  idPrefix: "mock2",
  startNumber: 75,
  count: 111,
  domains: DOMAINS,
  issues: ISSUES,
  bestLines: BEST_LINES,
  distract: DISTRACT,
  stemTemplate: (itemNumber, domain, issue) => {
    const variant = STEM_VARIANTS[(itemNumber + domain.charCodeAt(0)) % STEM_VARIANTS.length]!;
    return variant(itemNumber, domain, issue);
  },
});
