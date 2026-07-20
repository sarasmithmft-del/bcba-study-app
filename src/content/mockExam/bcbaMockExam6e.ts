/**
 * BCBA-style mock items for independent study only.
 * NOT affiliated with the BACB. Domain labels mirror the sixth-edition Test Content Outline (A–I).
 */
import type { BDSQuestion } from "@/lib/content-types";
import { BCBA_MOCK_EXAM_EXPANDED_BANK } from "@/content/mockExam/bcbaMockExamExpandedBundled";
import { BCBA_MOCK_EXAM_EXPECTED_ITEMS } from "@/content/mockExam/mockExamExpectedCount";
import { mockQ as q } from "@/content/mockExam/mockExamQuestionFactory";
import { mockExamTimeLimitSeconds } from "@/content/mockExam/mockExamTime";

export { mockExamTimeLimitSeconds };

export const BCBA_MOCK_EXAM_TITLE = "Mock Exam 1 — Full BCBA Simulation (185 items · TCO A–I)";

const BCBA_MOCK_EXAM_QUESTIONS_CORE: BDSQuestion[] = [
  q(
    "mock6e-001",
    "A",
    "A supervisee argues that because thoughts cannot be seen, they are off-limits to behavior-analytic treatment. Which response MOST aligns with radical behaviorism as typically presented in CHH-style foundations?",
    [
      {
        text: "Agree—only public motor behavior qualifies for measurement.",
        correct: false,
        rationale: "Radical behaviorism does not ban analysis of private events; verbal reports of private events are treated as behavior under environmental control.",
      },
      {
        text: "Explain that private verbal events can be treated as behavior with observability constraints and remain subject to environmental interpretation.",
        correct: true,
        rationale: "Domain A emphasizes treating verbal behavior about private events as behavior—not as magical causes immune to contingency analysis.",
      },
      {
        text: "Refer exclusively to psychotherapy because behavior analysis lacks tools for verbal behavior.",
        correct: false,
        rationale: "Behavior analysis analyzes verbal behavior; referral is orthogonal to philosophical stance.",
      },
      {
        text: "Dismiss the comment as methodological behaviorism outdated in the 1930s and end supervision.",
        correct: false,
        rationale: "Supervision warrants conceptual precision, not abrupt dismissal absent teaching.",
      },
    ],
  ),
  q(
    "mock6e-002",
    "A",
    "Which pairing BEST illustrates parsimony complaints when supervisors demand redundant explanations?",
    [
      {
        text: "Prefer simplest account consistent with replicated data versus multiplying hypothetical mechanisms.",
        correct: true,
        rationale: "Parsimony rewards simpler explanations that accommodate the dataset—central scientific attitude scaffolding.",
      },
      {
        text: "Always choose whichever story caregivers prefer emotionally.",
        correct: false,
        rationale: "Preference hierarchies violate parsimony grounded in explanatory sufficiency.",
      },
      {
        text: "Add constructs until graphs look perfectly smooth.",
        correct: false,
        rationale: "Overfitting narratives opposes parsimony.",
      },
      {
        text: "Reject replication because duplication wastes time.",
        correct: false,
        rationale: "Replication is foundational; parsimony complements—not replaces—it.",
      },
    ],
  ),
  q(
    "mock6e-003",
    "B",
    "Immediately before session start, caregiver delivers highly preferred snacks absent demands. Aggression toward demands later drops MOST plausibly because:",
    [
      {
        text: "Satiation abolished EO for aggression-maintained breakout historically.",
        correct: true,
        rationale: "Abolishing EO can reduce evocative strength for aggression if aggression contacted escape reinforcement under elevated establishing conditions.",
      },
      {
        text: "SD for aggression was extinguished selectively.",
        correct: false,
        rationale: "Snacks manipulate motivating operations—not SD offsets for aggression.",
      },
      {
        text: "Positive punishment suppressed all operants mechanically.",
        correct: false,
        rationale: "Snack delivery lacks scheduled contingent punishment linkage to aggression.",
      },
      {
        text: "Respondent extinction reversed automatically.",
        correct: false,
        rationale: "Vignette concerns operant demand contexts—not respondent arcs alone.",
      },
    ],
  ),
  q(
    "mock6e-004",
    "B",
    "Teacher states instruction; learner echoes accurately; praise follows listener-mediated reinforcement. MOST precise classification of the topography:",
    [
      {
        text: "Echoic under formal resemblance control.",
        correct: true,
        rationale: "Modeled verbal SD with vocal imitation product fits echoic—not mand—definitionally.",
      },
      {
        text: "Intraverbal fill-in because teacher spoke first.",
        correct: false,
        rationale: "Intraverbals require verbal discriminative fragments without imitation requirement.",
      },
      {
        text: "Tact solely because acoustics resemble words.",
        correct: false,
        rationale: "Tacting references non-verbal discriminative stimuli; imitation link specifies echoic.",
      },
      {
        text: "Mand because reinforcement is contingent.",
        correct: false,
        rationale: "Mands specify evocative control emanating from relevant deprivation—context specifies modeled echo.",
      },
    ],
  ),
  q(
    "mock6e-005",
    "C",
    "Two observers count head-hits hitting ≥2 N force across 10s epochs; definitions omit magnitude calibration. MOST immediate measurement threat:",
    [
      {
        text: "Drift-sensitive partial interval IOA collapsing despite social agreement anecdotes.",
        correct: true,
        rationale: "Discontinuous dimensional gaps magnify disagreement when topography boundaries fuzzy—Domain C fidelity issue.",
      },
      {
        text: "Continuous measurement obligatory therefore session invalid categorically.",
        correct: false,
        rationale: "Partial intervals can stay valid given sharpened thresholds + IOA.",
      },
      {
        text: "Frequency impossible therefore abandon graph.",
        correct: false,
        rationale: "Interval recording still indexes estimates when defined.",
      },
      {
        text: "Magnitude extinct automatically once IOA dips.",
        correct: false,
        rationale: "Magnitude persists as measurement construct independent of anecdotes.",
      },
    ],
  ),
  q(
    "mock6e-006",
    "D",
    "ABA graph shows duplicated baseline trending upward before intervention; supervisor attributes gain solely to withdrawal of punisher midway. MOST urgent critique:",
    [
      {
        text: "Confounded history—withdrawal overlays baseline drift threatens internal validity.",
        correct: true,
        rationale: "Domain D stresses isolating controlling variables relative to untreated trend confounds.",
      },
      {
        text: "Baselines meaningless therefore delete phase line.",
        correct: false,
        rationale: "Baselines contextualize—even when messy—versus deletion.",
      },
      {
        text: "Punishment cannot influence rates scientifically.",
        correct: false,
        rationale: "Punishment effects remain lawful; analytic issue is attribution control.",
      },
      {
        text: "Graph proves maintenance automatically.",
        correct: false,
        rationale: "Maintenance requires explicit phase logic.",
      },
    ],
  ),
  q(
    "mock6e-007",
    "E",
    "Employer insists billing CPT units for groups never rendered; analyst fears termination. MOST code-consistent FIRST step:",
    [
      {
        text: "Decline documenting false services and seek documented supervision/legal guidance pathways.",
        correct: true,
        rationale: "Domain E integrity prohibits fraudulent representations even under economic pressure.",
      },
      {
        text: "Comply quietly reallocating ethics to accounting.",
        correct: false,
        rationale: "Fraudulent billing breaches professional ethics.",
      },
      {
        text: "Anonymously gossip about employer online exclusively.",
        correct: false,
        rationale: "Professional channels outperform gossip.",
      },
      {
        text: "Bill accurately but sabotage caregiver rapport.",
        correct: false,
        rationale: "Harassment substitutes new harms.",
      },
    ],
  ),
  q(
    "mock6e-008",
    "F",
    "Indirect FAST clashes with descriptive observation on attention function. MOST defensible supervisory hierarchy BEFORE treatment?",
    [
      {
        text: "Treat indirect output as tentative; intensify correlational descriptive density; document conflicts.",
        correct: true,
        rationale: "Domain F emphasizes triangulation before experimental depth when ethically sequencing assessment.",
      },
      {
        text: "Delete observation because questionnaires faster.",
        correct: false,
        rationale: "Descriptive modality anchors correlations FAST cannot replace solo.",
      },
      {
        text: "Announce functional class resolved because FAST unanimous.",
        correct: false,
        rationale: "Unanimous questionnaires still lack evocative isolation.",
      },
      {
        text: "Start punisher component immediately.",
        correct: false,
        rationale: "Ethical sequencing demands hypotheses supported by modality mix.",
      },
    ],
  ),
  q(
    "mock6e-009",
    "G",
    "Extinction bursts spike; staff escalate reprimands verbally. MOST aligned supervisor coaching:",
    [
      {
        text: "Normalize bursts; tighten integrity plus function-based reinforcement for alternatives.",
        correct: true,
        rationale: "Burst phenomena lawful; humane programming pairs extinction with reinforcement alternatives—Domain G + ethics synergy.",
      },
      {
        text: "Punish bursts as treatment failure.",
        correct: false,
        rationale: "Bursts predictive—not moral indictments.",
      },
      {
        text: "Reinforce problem behavior verbally to soothe.",
        correct: false,
        rationale: "May replenish maintained class—depends on contingency analysis.",
      },
      {
        text: "Abort extinction whenever burst occurs categorically.",
        correct: false,
        rationale: "Safety reviews guide—not blanket abortion absent risk.",
      },
    ],
  ),
  q(
    "mock6e-010",
    "B",
    "VR 10 thinning to VR 35 produces stable highs then sudden collapse absent MO shift documentation. MOST analytic suspect:",
    [
      {
        text: "Ratio strain after abrupt thinning outpacing reinforcement contact.",
        correct: true,
        rationale: "Schedule strain underlies collapse when thinning races ahead contact history—classic schedule effect.",
      },
      {
        text: "Respondent inhibition exclusively.",
        correct: false,
        rationale: "Operant ratio schedules misalign respondent framing.",
      },
      {
        text: "Measurement invalid because VR cannot produce strain.",
        correct: false,
        rationale: "VR thinning can evoke strain analogous FR literature.",
      },
      {
        text: "automatic punishment adventitious.",
        correct: false,
        rationale: "No evidence vignette cites adventitious punishers uniformly.",
      },
    ],
  ),
  q(
    "mock6e-011",
    "C",
    "Calculating IOA on event recording with naive 90% cutoff but disagreement concentrated on bursts. MOST improvement:",
    [
      {
        text: "Refine operational boundary + drift checks on high-rate windows before trusting aggregate IOA.",
        correct: true,
        rationale: "Domain C mandates definitions capturing variance pockets IOA summarizes away.",
      },
      {
        text: "Discard disagreements arbitrarily.",
        correct: false,
        rationale: "Cherry disagreements sabotages fidelity.",
      },
      {
        text: "Switch to anecdotes once IOA high.",
        correct: false,
        rationale: "High mean IOA can mask systematic drift bursts.",
      },
      {
        text: "Assume observer malevolence exclusively.",
        correct: false,
        rationale: "Blame substitutes measurement repair.",
      },
    ],
  ),
  q(
    "mock6e-012",
    "D",
    "Changing-criterion design advertises mastery but reinforcement deliveries misaligned timestamps vs criterion jumps MOST undermines:",
    [
      {
        text: "Correspondence logic tying criterion shifts to programmed consequences.",
        correct: true,
        rationale: "Changing criterion persuades via reinforcement-criterion covariance evidence.",
      },
      {
        text: "Respondent preconditioning lore.",
        correct: false,
        rationale: "Irrelevant to operant SCC logic.",
      },
      {
        text: "Group design mandates.",
        correct: false,
        rationale: "Single-case still demands contingency alignment narrative.",
      },
      {
        text: "Scatterplot overlays exclusively.",
        correct: false,
        rationale: "Scatterplots descriptive—not correspondence substitute.",
      },
    ],
  ),
  q(
    "mock6e-013",
    "F",
    "Analog FA shows highest rates in tangible condition; caregiver later admits tangible delivery actually paired with instructional escape. MOST interpretation caution:",
    [
      {
        text: "Confounded tangible/escape amalgam threatens clean reinforcer attribution.",
        correct: true,
        rationale: "Multi-element exposures need programmed isolation—undocumented hybrids threaten Domain F hypotheses.",
      },
      {
        text: "Declare automatic reinforcement because alone low.",
        correct: false,
        rationale: "Alone interplay insufficient absent programmed automatic tests.",
      },
      {
        text: "Ignore caregiver revision as irrelevant hindsight.",
        correct: false,
        rationale: "Confession revises modality integrity obligations.",
      },
      {
        text: "Assume MO identical across elements mechanically.",
        correct: false,
        rationale: "MO varies by element choreography.",
      },
    ],
  ),
  q(
    "mock6e-014",
    "G",
    "Backward chaining emphasizes terminal link reinforcement first MOST because:",
    [
      {
        text: "Terminal reinforcement contact can anchor contiguous backward assembly when final product motivates.",
        correct: true,
        rationale: "Backward chaining leverages terminal reinforcer contact early—fitting task analyses where end product drives motivation.",
      },
      {
        text: "Forward chaining outlawed.",
        correct: false,
        rationale: "Forward chaining remains analytic option.",
      },
      {
        text: "SD control irrelevant until entire chain drilled.",
        correct: false,
        rationale: "Each link harbors discriminative stimuli.",
      },
      {
        text: "Punishment required for initiation.",
        correct: false,
        rationale: "Punishment orthogonal to chaining tactic rationale.",
      },
    ],
  ),
  q(
    "mock6e-015",
    "B",
    "Rule-governed compliance tracks instruction absent direct shaping on topography MOST exemplifies:",
    [
      {
        text: "Contingency-shaped repertoire.",
        correct: false,
        rationale: "Contingency-shaped implies direct contact—not rule-only history.",
      },
      {
        text: "Verbally mediated governance contacting outcomes indirectly.",
        correct: true,
        rationale: "Rule governance describes verbally controlled adherence without trial-by-trial shaping vignette cites.",
      },
      {
        text: "Respondent conditioning exclusively.",
        correct: false,
        rationale: "Operant textual governance differs respondent arcs.",
      },
      {
        text: "Extinction resurgence hallmark.",
        correct: false,
        rationale: "Irrelevant to rule compliance vignette.",
      },
    ],
  ),
  q(
    "mock6e-016",
    "C",
    "Latency measurement from prompt offset to initiation omitted while duration tallies soar. MOST gap:",
    [
      {
        text: "Fluency dimension silent—latency captures initiation sluggishness orthogonal to dwell time.",
        correct: true,
        rationale: "Latency vs duration quantify distinct facets—missing latency obscures bottleneck diagnosis.",
      },
      {
        text: "Latency illegal per ethics code.",
        correct: false,
        rationale: "No prohibition; analytic omission only.",
      },
      {
        text: "Duration subsumes latency mathematically universally.",
        correct: false,
        rationale: "Conceptually orthogonal measures.",
      },
      {
        text: "IOA forbids timers.",
        correct: false,
        rationale: "Timers compatible with calibrated definitions.",
      },
    ],
  ),
  q(
    "mock6e-017",
    "I",
    "Supervisee publishes case graph identifying school by mascot on TikTok captions. MOST immediate supervisor duty:",
    [
      {
        text: "Removable instruction on confidentiality scopes + rectify dissemination + document remediation.",
        correct: true,
        rationale: "Domain I supervisor duty—coach on confidentiality scope, rectify the disclosure, and document remediation (Domain E confidentiality violation is the underlying issue).",
      },
      {
        text: "Ignore because audience small.",
        correct: false,
        rationale: "Reach unpredictability unaffected by follower counts.",
      },
      {
        text: "Praise viral metrics.",
        correct: false,
        rationale: "Metrics clash confidentiality duties.",
      },
      {
        text: "Assume caregiver consent telepathically.",
        correct: false,
        rationale: "Consent pathways explicit.",
      },
    ],
  ),
  q(
    "mock6e-018",
    "F",
    "Scatterplot aggregates across incompatible teachers merging lunch + academic periods unstably. MOST measurement fix:",
    [
      {
        text: "Stratify intervals by evocative context matching hypothesis precision.",
        correct: true,
        rationale: "Descriptive aggregates must isolate schedules/settings before inferring evocative triggers.",
      },
      {
        text: "Delete scatterplots permanently.",
        correct: false,
        rationale: "Refine—not discard—descriptive modality.",
      },
      {
        text: "Convert to hypothetical FA unconditionally.",
        correct: false,
        rationale: "Ethics/staff gate experimental depth.",
      },
      {
        text: "Average teachers ignoring activity type.",
        correct: false,
        rationale: "Pooling obscures evocative differences.",
      },
    ],
  ),
  q(
    "mock6e-019",
    "H",
    "Prompt delay procedure implemented but staff advance prompts silently when impatient. MOST fidelity interpretation:",
    [
      {
        text: "Program drift—deliveries no longer honoring delay gradient invalidating interpretation.",
        correct: true,
        rationale: "Prompt hierarchies hinge integrity; silent skipping collapses analytic story.",
      },
      {
        text: "Faster prompting improves outcomes necessarily.",
        correct: false,
        rationale: "Outcome claims require documented fidelity first.",
      },
      {
        text: "MO irrelevant to prompt pacing.",
        correct: false,
        rationale: "MO interplay guides prompt thinning.",
      },
      {
        text: "IOA meaningless for prompts aesthetically.",
        correct: false,
        rationale: "Prompt fidelity observable + IOA-able.",
      },
    ],
  ),
  q(
    "mock6e-020",
    "A",
    "Scientific skepticism MOST directly coaches analysts to:",
    [
      {
        text: "Treat strongest claims as tentative until replication + rival hypotheses ruled responsibly.",
        correct: true,
        rationale: "Philosophic doubt tempers certainty—foundational analytic attitude pairing determinism empirical next steps.",
      },
      {
        text: "Reject data wholesale when inconvenient.",
        correct: false,
        rationale: "Doubt critiques interpretation—not censorship.",
      },
      {
        text: "Ignore caregiver lived experience uniformly.",
        correct: false,
        rationale: "Triangulation complements doubt.",
      },
      {
        text: "Assume single-case graphs prove universality mechanically.",
        correct: false,
        rationale: "Doubt slows overgeneralizing single cases.",
      },
    ],
  ),
  q(
    "mock6e-021",
    "B",
    "SΔ training highlights red circle as SΔ for withheld reinforcement under green—but green trials accidentally thicker reinforcement density. MOST concern:",
    [
      {
        text: "Confounded disparity risks stimulus control attributable to reinforcement skew—not color alone.",
        correct: true,
        rationale: "Multiple control threats arise when reinforcement density confounds discriminative stimuli.",
      },
      {
        text: "SΔ training impossible with reinforcement.",
        correct: false,
        rationale: "SΔ thrives with discriminative juxtaposition—skew threatens isolation.",
      },
      {
        text: "Red circle automatically becomes motivating operation universally.",
        correct: false,
        rationale: "Vignette concerns correlated reinforcement disparity—not automatic MO equivalence for color stimuli.",
      },
      {
        text: "Respondent overshadowing obligatory.",
        correct: false,
        rationale: "Vignette operant discriminative—not respondent overshadowing shorthand.",
      },
    ],
  ),
  q(
    "mock6e-022",
    "D",
    "Multiple baseline across settings shows intervention only where introduced; untreated settings flat. MOST primary conclusion supported:",
    [
      {
        text: "Experimental control via staggered introduction mapping to response covariation.",
        correct: true,
        rationale: "Staggered responsiveness across baselines supports intervention effect under MBD logic.",
      },
      {
        text: "Social validity conclusion alone suffices.",
        correct: false,
        rationale: "Social validity complements—not replaces—controlled design narratives.",
      },
      {
        text: "Respondent recovery demonstration.",
        correct: false,
        rationale: "Design concerns operant baselines—not respondent arcs.",
      },
      {
        text: "Infinite maintenance demonstration.",
        correct: false,
        rationale: "Maintenance requires phased evidence beyond initial introduction.",
      },
    ],
  ),
  q(
    "mock6e-023",
    "C",
    "Whole interval recording for 3-s out-of-seat: learner stands 1 s then sits remainder. MOST scoring per interval:",
    [
      {
        text: "Occurrence—the behavior appeared at least once.",
        correct: false,
        rationale: "That logic matches partial interval—not whole interval modality.",
      },
      {
        text: "Nonoccurrence—the behavior failed to fill the entire interval.",
        correct: true,
        rationale: "Whole interval marks occurrence only if behavior persists whole interval continuously.",
      },
      {
        text: "Score only using momentary-time-sampling equivalency.",
        correct: false,
        rationale: "Modality dictates scoring rules—substitution inappropriate.",
      },
      {
        text: "Divide duration by interval count automatically.",
        correct: false,
        rationale: "Whole interval dichotomous—not proportional duration calculus.",
      },
    ],
  ),
  q(
    "mock6e-024",
    "E",
    "Employer insists BCBA sign treatment plan Sight-unseen authored by salesperson. MOST appropriate response:",
    [
      {
        text: "Refuse and clarify scope/competency boundaries documented for stakeholders.",
        correct: true,
        rationale: "Integrity prohibits attesting unavailable work—not rubber-stamping marketing.",
      },
      {
        text: "Sign with disclaimer ‘not reviewed.’",
        correct: false,
        rationale: "Partial disclaimers seldom cure misrepresentation burdens.",
      },
      {
        text: "Delegate to caregiver signature.",
        correct: false,
        rationale: "Shifts undue burden; fails professional accountability.",
      },
      {
        text: "Approve because salesperson holds MBA.",
        correct: false,
        rationale: "Irrelevant credentialing.",
      },
    ],
  ),
  q(
    "mock6e-025",
    "F",
    "Descriptive data: demands precedent aggression; caregiver removes demands quickly after escalation. MOST defensible tentative function:",
    [
      {
        text: "Socially mediated escape from demands via aggression.",
        correct: true,
        rationale: "Correlational pattern aligns with reinforcement-by-removal—not proof but hypothesis-ready.",
      },
      {
        text: "Sensory reinforcement solely proved.",
        correct: false,
        rationale: "Sensory hypotheses need isolation absent here.",
      },
      {
        text: "Attention maintained exclusively.",
        correct: false,
        rationale: "Consequence depicts demand removal—not attention choreography.",
      },
      {
        text: "Automatic punishment contrast.",
        correct: false,
        rationale: "Consequence reinforcing removal—not punishment vignette cites.",
      },
    ],
  ),
  q(
    "mock6e-026",
    "G",
    "Staff deliver reinforcers every 120 s irrespective of stereotypy—in order to lessen motivation for repetitive behavior bursts before math. BEST describes:",
    [
      {
        text: "Noncontingent reinforcement manipulating establishing operations.",
        correct: true,
        rationale: "Time-based unconditional delivery aligns with MO-focused NCR package.",
      },
      {
        text: "Differential reinforcement of other behavior intervals contingent on omission.",
        correct: false,
        rationale: "DRO schedules reinforcement contingent on target omission—explicitly unconditional here.",
      },
      {
        text: "Escape extinction baseline.",
        correct: false,
        rationale: "No systematic demand removal omission described contingent on stereotypy.",
      },
      {
        text: "Punishment by removal of reinforcement.",
        correct: false,
        rationale: "Delivery thickens—not removes—ambient reinforcers.",
      },
    ],
  ),
  q(
    "mock6e-027",
    "B",
    "Baseline mand rate climbs before intervention without MO documentation; intervention graphs overlaid boasting technique. MOST missing analytic element:",
    [
      {
        text: "Historical variable control narrative isolating evocative shifts pre-intervention.",
        correct: true,
        rationale: "Unexplained baseline trends demand MO/third-variable scrutiny before causal praise.",
      },
      {
        text: "Respondent extinction statements.",
        correct: false,
        rationale: "Operant mand arc misaligns respondent story.",
      },
      {
        text: "Group mean comparisons exclusively.",
        correct: false,
        rationale: "Single-case still requires internal validity commentary.",
      },
      {
        text: "Unlimited punishment introduction.",
        correct: false,
        rationale: "Unrelated violent remedy.",
      },
    ],
  ),
  q(
    "mock6e-028",
    "C",
    "Permanent-product count of workbook pages ignores errors entirely. MOST interpretive caveat:",
    [
      {
        text: "Fluency of incorrect responding may inflate without accuracy metrics.",
        correct: true,
        rationale: "Products measure output—not mastery—risk silent error inflation.",
      },
      {
        text: "Permanent products illegal.",
        correct: false,
        rationale: "Legality irrelevant—measurement caveat only.",
      },
      {
        text: "Graphs forbidden.",
        correct: false,
        rationale: "Graphing permissible with captions clarifying dimensions.",
      },
      {
        text: "Trial-by-trial obligatory universally.",
        correct: false,
        rationale: "Context chooses grain— caveat not mandate.",
      },
    ],
  ),
  q(
    "mock6e-029",
    "D",
    "Overlapping alternating-treatment curves with documented multitreatment bleed-through in supervision notes yet public-facing deck claims superiority. MOST ethical/analytic lapse:",
    [
      {
        text: "Oversimplified causal marketing ignoring documented interference limiting attribution.",
        correct: true,
        rationale: "ATD bleed-through warrants humility—professional ethics forbids deceptive certainty.",
      },
      {
        text: "Overlap proves sensory automaticity.",
        correct: false,
        rationale: "No sensory logic established.",
      },
      {
        text: "Mandates delete baseline.",
        correct: false,
        rationale: "Baselines contextualize—even messy ATDs.",
      },
      {
        text: "Forces molecular FA universally.",
        correct: false,
        rationale: "Design depth ethically gated.",
      },
    ],
  ),
  q(
    "mock6e-030",
    "F",
    "Ranked preference survey completed but no contingent reinforcer probe before linking item to DT trials. MOST next empirical step:",
    [
      {
        text: "Empirically validate reinforcer potency with sampling under instructional context.",
        correct: true,
        rationale: "Preference assessments hypothesize potency—probes demonstrate function as reinforcer.",
      },
      {
        text: "Assume rank-one always reinforcer mechanically.",
        correct: false,
        rationale: "Context + satiation degrade rank-only logic.",
      },
      {
        text: "Switch to respondent pairing exclusively.",
        correct: false,
        rationale: "Irrelevant short-cut.",
      },
      {
        text: "Abandon reinforcement entirely.",
        correct: false,
        rationale: "Engineering—not abolition—is step.",
      },
    ],
  ),
  q(
    "mock6e-031",
    "G",
    "Trainer reduces full physical guidance to light shadow across chain links as accuracy stabilizes. Core fading dimension MOST clearly:",
    [
      {
        text: "Physical prompt magnitude intrusiveness.",
        correct: true,
        rationale: "Graduated guidance systematically thins intrusive physical prompts.",
      },
      {
        text: "Reinforcer quality thinning first unconditionally.",
        correct: false,
        rationale: "Reinforcement thinning orthogonal primary dimension cited.",
      },
      {
        text: "MO elimination.",
        correct: false,
        rationale: "MO not primary fade axis described.",
      },
      {
        text: "Respondent extinction integration.",
        correct: false,
        rationale: "Prompt fade operant—not respondent story.",
      },
    ],
  ),
  q(
    "mock6e-032",
    "A",
    "Ontogenic selectionism at the repertoire level MOST closely means:",
    [
      {
        text: "Variations contacting reinforcement multiply; variations contacting extinction/minimal payoffs dwindle.",
        correct: true,
        rationale: "Selection analogy emphasizes consequence-driven retention of behavioral forms across history.",
      },
      {
        text: "Reflex arcs explain all verbal governance.",
        correct: false,
        rationale: "Skinner contrasts reflex vs operant when teaching selection metaphors.",
      },
      {
        text: "Mental rehearsal replaces contingencies mechanically.",
        correct: false,
        rationale: "Radical behavioral stance still ties private talk to histories.",
      },
      {
        text: "Group means replace individualized histories.",
        correct: false,
        rationale: "Selection logic lives at organism history grain.",
      },
    ],
  ),
  q(
    "mock6e-033",
    "B",
    "Contrast training places red SD+ for reinforcement beside green SD- without reinforcement MOST targets:",
    [
      {
        text: "Discrimination of conditional reinforcement likelihood across exemplars.",
        correct: true,
        rationale: "Contrast juxtaposition hastens discriminative control by correlated rein vs no-rein settings.",
      },
      {
        text: "Symmetric equivalence symmetry proofs.",
        correct: false,
        rationale: "Equivalence choreography distinct from simple discrimination training.",
      },
      {
        text: "Respondent habituation universally.",
        correct: false,
        rationale: "Operant discriminative—not respondent habituation focus.",
      },
      {
        text: "Elimination of MO documentation.",
        correct: false,
        rationale: "MO still interacts with evocative control.",
      },
    ],
  ),
  q(
    "mock6e-034",
    "C",
    "Momentary-time-sample 10-min probe every 45 min shows on-task dots; supervisors infer total duration. MOST accurate limitation:",
    [
      {
        text: "MTS yields prevalence estimates—not literal cumulative duration totals without additional logic.",
        correct: true,
        rationale: "MTS instantaneous samples approximate engagement—not continuous duration transcription.",
      },
      {
        text: "MTS equals whole-interval summation mechanically.",
        correct: false,
        rationale: "Different sampling definitions.",
      },
      {
        text: "Forbidden for classrooms.",
        correct: false,
        rationale: "Permissible with transparent interpretation.",
      },
      {
        text: "Requires video exclusively.",
        correct: false,
        rationale: "Live instantaneous coding remains viable.",
      },
    ],
  ),
  q(
    "mock6e-035",
    "E",
    "Funders request emailing raw behavior videos with PHI to personal Gmail expediently; security team absent. MOST code-consistent refusal rationale:",
    [
      {
        text: "Confidentiality + secure-transfer obligations prohibit ad hoc PHI routes absent safeguards.",
        correct: true,
        rationale: "Domain E mandates protecting identifiable footage—even under schedule pressure.",
      },
      {
        text: "Gmail HIPAA-certified automatically universally.",
        correct: false,
        rationale: "Consumer email typically insufficient without BAA/policy alignment.",
      },
      {
        text: "PHI magically stripped because video blurry.",
        correct: false,
        rationale: "Identifiability persists via voice/context.",
      },
      {
        text: "Speed supersedes all duties mechanically.",
        correct: false,
        rationale: "Ethics survives logistics crunch via alternatives.",
      },
    ],
  ),
  q(
    "mock6e-036",
    "F",
    "Abbreviated FA substitutes teacher-implemented contrasts without IOA due to staffing. MOST supervisory documentation duty:",
    [
      {
        text: "Label modality fidelity limits transparently—including IOA omission risks—before causal certainty claims.",
        correct: true,
        rationale: "Modality honesty governs dissemination when staffing truncates safeguards.",
      },
      {
        text: "Call results multi-element exhaustive FA mechanically.",
        correct: false,
        rationale: "Mislabels breach integrity.",
      },
      {
        text: "Delete staffing caveats aesthetically.",
        correct: false,
        rationale: "Opacity unethical.",
      },
      {
        text: "Fabricate observer agreement percentages.",
        correct: false,
        rationale: "Fraud forbidden.",
      },
    ],
  ),
  q(
    "mock6e-037",
    "G",
    "DRO interval schedules reinforcement contingent on omission of aggression across windows; reinforcer withheld after one lapse midway despite prior clean stretches. MOST risk:",
    [
      {
        text: "Excessive omission-based punishment if intervals span punishing durations without supportive alternatives.",
        correct: true,
        rationale: "Wide DTO windows lapse into punishing omission when reinforcement vanishes after unavoidable challenges.",
      },
      {
        text: "Automatically positive reinforcement schedule.",
        correct: false,
        rationale: "DTO focuses omission contingencies—not SR+ thickening unconditionally.",
      },
      {
        text: "Respondent resurgence obligatory.",
        correct: false,
        rationale: "Resurgence may occur but optional descriptor.",
      },
      {
        text: "Mandatory extinction bursts elimination.",
        correct: false,
        rationale: "Bursts lawful phenomena—not banned targets.",
      },
    ],
  ),
  q(
    "mock6e-038",
    "D",
    "Withdrawal phase after effective intervention shows rapid return near baseline albeit slightly attenuated MOST consistent with:",
    [
      {
        text: "Reversal demonstrating experimental control contingent on analogous reinstatement logic.",
        correct: true,
        rationale: "Withdrawal juxtaposition supports contingency control when resurgence parallels removal.",
      },
      {
        text: "Maintenance proof exclusively.",
        correct: false,
        rationale: "Maintenance probes differ withdrawal narrative.",
      },
      {
        text: "Generality across persons automatically.",
        correct: false,
        rationale: "Generality unanswered by single reversal.",
      },
      {
        text: "Group statistical significance mechanically.",
        correct: false,
        rationale: "Single-case—not inferential grouping—emphasis.",
      },
    ],
  ),
  q(
    "mock6e-039",
    "G",
    "Inter-response time (IRT) reinforcement thickens reinforcement for bursts faster than criterion. MOST schedule family:",
    [
      {
        text: "Differential reinforcement of high rates emphasizing inter-response times below threshold.",
        correct: true,
        rationale: "DRH reinforces accelerated responding via IRT criteria.",
      },
      {
        text: "Differential reinforcement of low rates.",
        correct: false,
        rationale: "DRL reinforces lengthened spacing—opposite topography goal.",
      },
      {
        text: "Fixed interval exclusively.",
        correct: false,
        rationale: "FI schedules first response after elapsed interval—not IRT contingency described.",
      },
      {
        text: "Extinction adjunct.",
        correct: false,
        rationale: "No extinction narrative described.",
      },
    ],
  ),
  q(
    "mock6e-040",
    "B",
    "Establishing operation temporarily increases reinforcement effectiveness of water access after jogging. MOST accurate statement:",
    [
      {
        text: "Deprivation/evocative conditions elevated value of water as reinforcer before schedule contact.",
        correct: true,
        rationale: "EO/MO framing explains heightened reinforcer potency post exertion vignette cites.",
      },
      {
        text: "SD for water ingestion solely.",
        correct: false,
        rationale: "MO shifts value—not necessarily discriminative control definition alone.",
      },
      {
        text: "Punishment by stimulus presentation.",
        correct: false,
        rationale: "No punisher topography described.",
      },
      {
        text: "Reflex chaining exclusively.",
        correct: false,
        rationale: "Operant MO logic predominates vignette.",
      },
    ],
  ),
  q(
    "mock6e-041",
    "F",
    "Latency from demand onset to aggression drops sharply after escape thickens unintentionally teacher behavior. MOST updated hypothesis emphasis:",
    [
      {
        text: "Reinforcement schedule / magnitude shift strengthening escape contingency contact.",
        correct: true,
        rationale: "Thicker withdrawal inflates reinforcing effectiveness for aggression maintained by escape historically.",
      },
      {
        text: "Automatic reinforcement dominates solely mechanically.",
        correct: false,
        rationale: "Context cites social mediated removal thickness.",
      },
      {
        text: "Tact topography explains aggression.",
        correct: false,
        rationale: "Irrelevant.",
      },
      {
        text: "IOA disappearance solved function.",
        correct: false,
        rationale: "Measurement unrelated to hypothetical shift.",
      },
    ],
  ),
  q(
    "mock6e-042",
    "G",
    "Functional communication training replaces aggression with microphone icon press contacting brief break. MOST central mechanism emphasized:",
    [
      {
        text: "Differential reinforcement of communication alternative contacting same reinforcer class historically.",
        correct: true,
        rationale: "FCT aligns replacement topography with evocative reinforcer function previously accessed by aggression.",
      },
      {
        text: "Pure punishment suppression alone.",
        correct: false,
        rationale: "FCT reinforcement-forward alternative emphasis.",
      },
      {
        text: "Equivalence class symmetry demonstration.",
        correct: false,
        rationale: "Irrelevant framework.",
      },
      {
        text: "Respondent extinction of breaks.",
        correct: false,
        rationale: "Breaks reinforcing—not extinguished arcs story.",
      },
    ],
  ),
  q(
    "mock6e-043",
    "E",
    "Regional conference slide reproduces BACB Ethics Code verbatim without citation small font. MOST compliance concern:",
    [
      {
        text: "Copyright/attribution + accurate contextual framing still required ethically even for standards documents.",
        correct: true,
        rationale: "Professional presentation integrity includes transparent sourcing—not covert copying.",
      },
      {
        text: "BACB forbids quoting code entirely.",
        correct: false,
        rationale: "Quoting permissible with attribution norms.",
      },
      {
        text: "Slides exempt from plagiarism norms.",
        correct: false,
        rationale: "Academic honesty extends slide decks.",
      },
      {
        text: "Font size settles legal questions exclusively.",
        correct: false,
        rationale: "Attribution orthogonal font.",
      },
    ],
  ),
  q(
    "mock6e-044",
    "D",
    "Changing-criterion phases jump criteria without reinforcement contact alignment logged. MOST invalidated logic:",
    [
      {
        text: "Correspondence between criterion shifts + programmed reinforcement delivery.",
        correct: true,
        rationale: "SCC causal story depends on aligning tier advances with contingency contact timestamps.",
      },
      {
        text: "Respondent resurgence hallmark.",
        correct: false,
        rationale: "Irrelevant property.",
      },
      {
        text: "Group random assignment necessity.",
        correct: false,
        rationale: "Single-case design still demands contingency alignment clarity.",
      },
      {
        text: "Maintenance documentation exclusively.",
        correct: false,
        rationale: "Different analytic phase question.",
      },
    ],
  ),
  q(
    "mock6e-045",
    "C",
    "Agreement IOA totals 88% yet systematic bias where master coder misses low-intensity aggression swipes uniformly. MOST risk:",
    [
      {
        text: "Magnitude thresholds under-specified yielding biased miss pattern despite aggregated agreement.",
        correct: true,
        rationale: "Aggregate IOA can hide systematic omission bias—boundary calibration needed.",
      },
      {
        text: "Event recording outlawed.",
        correct: false,
        rationale: "Modality permissible with definitional sharpening.",
      },
      {
        text: "88% forbids graphs universally.",
        correct: false,
        rationale: "Graphing possible with caveat commentary.",
      },
      {
        text: "Bias proves malicious intent legally.",
        correct: false,
        rationale: "Bias warrants training—not indictment absent evidence.",
      },
    ],
  ),
  q(
    "mock6e-046",
    "A",
    "Methodological behaviorism differs from radical behaviorism MOST succinctly concerning:",
    [
      {
        text: "How private verbal events enter scientific discourse as behavior vs banned mental causes.",
        correct: true,
        rationale: "Domain A distinctions pivot on publicity rules vs treating verbal/private events analytically.",
      },
      {
        text: "Reinforcement laws exclusive to methodological wing.",
        correct: false,
        rationale: "Reinforcement operant—not ownership split.",
      },
      {
        text: "Radical forbids experimentation categorically.",
        correct: false,
        rationale: "Both embrace empirical approaches differing privacy philosophy.",
      },
      {
        text: "Methodological forbids organismic selection.",
        correct: false,
        rationale: "Distinction misplaced.",
      },
    ],
  ),
  q(
    "mock6e-047",
    "B",
    "Verbal relation where speaker names item touched while physically contacting item MOST aligns with:",
    [
      {
        text: "Tact under non-verbal discriminative control + generalized reinforcers mediated socially.",
        correct: true,
        rationale: "Tacting references environmental stimulus contacted—not mand—when naming item under evocative control historically.",
      },
      {
        text: "Echoic exclusively.",
        correct: false,
        rationale: "Echoic mandates model vocal stimulus—not merely contact tactile event.",
      },
      {
        text: "Pure intraverbal always.",
        correct: false,
        rationale: "Intraverbals keyed by verbal SD fragments absent direct contact mandate.",
      },
      {
        text: "Respondent elicitation alone.",
        correct: false,
        rationale: "Operant tact line.",
      },
    ],
  ),
  q(
    "mock6e-048",
    "G",
    "Token loses exchange value repeatedly because caregivers forget redemption nights. MOST programming fix:",
    [
      {
        text: "Restore exchange integrity + MO alignment documenting backup reinforcement contact reliability.",
        correct: true,
        rationale: "Token economies hinge trustworthy exchange contingencies—not symbolic charts alone.",
      },
      {
        text: "Punish token criticism mechanically.",
        correct: false,
        rationale: "Punishment sidesteps contingency repair.",
      },
      {
        text: "Delete tokens aesthetically.",
        correct: false,
        rationale: "Repair—not discard—is primary.",
      },
      {
        text: "Assume MO irrelevant once tokens laminated.",
        correct: false,
        rationale: "MO + exchange cadence interplay remains vital.",
      },
    ],
  ),
  q(
    "mock6e-049",
    "F",
    "School team wants immediate intensive FA timeline; caregiver refuses extended assessment citing trauma history. MOST ethical pacing response:",
    [
      {
        text: "Progress least-to-restrictive aligned modalities respecting assent-informed pacing while scaffolding indirect/descriptive richness.",
        correct: true,
        rationale: "Domain F+E intersect: trauma-informed consent sequences gate experimental contrasts.",
      },
      {
        text: "Execute FA covertly accelerating science.",
        correct: false,
        rationale: "Deceptive assessment violates ethics universally.",
      },
      {
        text: "Forbid supportive services outright.",
        correct: false,
        rationale: "Refusal adjusts sequence—not abandonment absent discussion.",
      },
      {
        text: "Rely punishment alone meanwhile.",
        correct: false,
        rationale: "Unrelated harmful shortcut.",
      },
    ],
  ),
  q(
    "mock6e-050",
    "E",
    "BACB licensee learns colleague fabricated supervision hours harming multiple supervisees licensee witnessed. MOST consistent reporting pathway emphasis:",
      [
      {
        text: "Follow lawful/professional reporting channels applicable to jurisdiction while documenting facts without vigilante retaliation.",
        correct: true,
        rationale: "Domain supervisory ethics includes escalating credible misconduct concerns through mandated mechanisms.",
      },
      {
        text: "Public social media dossier naming families.",
        correct: false,
        rationale: "Confidentiality breaches harm supervisees anew.",
      },
      {
        text: "Ignore because uninvolved personally.",
        correct: false,
        rationale: "Professional obligations may require action when credible harm surfaced.",
      },
      {
        text: "Extort colleague quietly for favors.",
        correct: false,
        rationale: "Coercion compounds misconduct.",
      },
    ],
  ),
  q(
    "mock6e-051",
    "H",
    "A 6-year-old's problem behavior functions as escape from math demands. The team debates plan choices. MOST defensible priority when selecting the intervention?",
    [
      {
        text: "Function-match first: pair differential reinforcement of an alternative escape-request with instructional design that reduces aversiveness, before weighing novelty or staff comfort.",
        correct: true,
        rationale: "Domain H sequencing places function match as the first sieve; evidence base, staff familiarity, and effort sit downstream of function fit.",
      },
      {
        text: "Adopt whichever intervention the RBT has run most often, regardless of function.",
        correct: false,
        rationale: "Staff familiarity supports fidelity but cannot substitute for function match; running a well-known but function-mismatched plan risks strengthening problem behavior.",
      },
      {
        text: "Copy the intervention the caregiver saw on social media so buy-in is guaranteed.",
        correct: false,
        rationale: "Caregiver buy-in matters but does not override function match; interventions decoupled from function typically show transient effects.",
      },
      {
        text: "Choose the least-effortful plan for staff so treatment integrity is easy to maintain.",
        correct: false,
        rationale: "Ease of implementation is a downstream criterion; picking an easy but function-mismatched plan trades short-term fidelity for long-term ineffectiveness.",
      },
    ],
  ),
  q(
    "mock6e-052",
    "H",
    "A published RCT supports intervention X for autistic children with vocal-verbal repertoires; your incoming client uses AAC and has a limited vocal repertoire. MOST defensible next move?",
    [
      {
        text: "Adopt X only after individualizing modality (e.g., AAC-based analogue) and confirming the evidence generalizes to this context; document the adaptation and monitor treatment response.",
        correct: true,
        rationale: "Domain H evidence-based practice combines external evidence, clinical expertise, and client characteristics; adaptation must be documented and evaluated with data.",
      },
      {
        text: "Apply X exactly as published because RCT evidence outranks context.",
        correct: false,
        rationale: "Rigid replication ignores individualization; EBP is not verbatim protocol transfer.",
      },
      {
        text: "Reject X outright because the RCT sample doesn't match the client.",
        correct: false,
        rationale: "Wholesale rejection wastes graded evidence; adaptation with monitoring is the mid path.",
      },
      {
        text: "Delay any intervention until an RCT exactly matches this client's demographics.",
        correct: false,
        rationale: "Perfect-match evidence rarely exists; endless waiting harms the client and misreads what EBP requires.",
      },
    ],
  ),
  q(
    "mock6e-053",
    "H",
    "Rate of on-task behavior looks great on the RBT's data sheet but the BCBA has not observed a session in six weeks. MOST defensible next step?",
    [
      {
        text: "Schedule direct observation and score treatment integrity against the written protocol before drawing programmatic conclusions from the data.",
        correct: true,
        rationale: "Domain H requires treatment integrity data anchored in observable protocol steps; effect claims are premature without direct-observation fidelity checks.",
      },
      {
        text: "Trust the data because the RBT is competent and the schedule is tight.",
        correct: false,
        rationale: "'Competent staff' is not integrity data; competence and current fidelity are separate constructs.",
      },
      {
        text: "Change the intervention because the numbers look suspiciously smooth.",
        correct: false,
        rationale: "Modifying a plan without integrity data confounds interpretation and may discard a working intervention.",
      },
      {
        text: "Ask the caregiver to verify the RBT's data as an integrity check.",
        correct: false,
        rationale: "Caregiver verification is not equivalent to protocol-based fidelity scoring against the written procedure.",
      },
    ],
  ),
  q(
    "mock6e-054",
    "H",
    "A social-skills package produces reliable performance in the clinic but not with peers at recess. Which design choice is MOST consistent with best practice?",
    [
      {
        text: "Program common stimuli, multiple exemplars, and loosely trained variants across relevant natural settings from the outset—not as a discharge-time afterthought.",
        correct: true,
        rationale: "Domain H generalization/maintenance programming is a design-time responsibility (Stokes & Baer, 1977); 'train and hope' is precisely what best practice replaces.",
      },
      {
        text: "Wait to see whether generalization emerges spontaneously after mastery.",
        correct: false,
        rationale: "Passive-generalization assumptions have poor empirical support outside programmed contingencies.",
      },
      {
        text: "Repeat clinic training until fluency doubles, then release to the natural setting.",
        correct: false,
        rationale: "Overtraining in one setting rarely bridges to novel contexts without programmed transfer supports.",
      },
      {
        text: "Discharge and re-refer if the family reports generalization failure.",
        correct: false,
        rationale: "Discharge without addressing generalization abdicates the programming responsibility.",
      },
    ],
  ),
  q(
    "mock6e-055",
    "H",
    "A child on your caseload has newly reported feeding difficulties that may have medical origins. MOST defensible response?",
    [
      {
        text: "Coordinate with the pediatric medical team and, until clearance and referral to a qualified feeding specialist are complete, restrict behavior-analytic work to areas within your scope.",
        correct: true,
        rationale: "Domain H requires coordinated care and staying within scope; feeding cases often involve dysphagia/GI risk that must be medically cleared first.",
      },
      {
        text: "Add feeding goals immediately because behavior analysis addresses all repertoires.",
        correct: false,
        rationale: "Feeding is a scope-of-competence issue absent specific training; aspiration and medical risk are real.",
      },
      {
        text: "Refer only if the caregiver requests it explicitly.",
        correct: false,
        rationale: "Referral obligations do not wait on caregiver initiative when the presenting problem exceeds scope.",
      },
      {
        text: "Instruct the RBT to try planned ignoring during meals to see what happens.",
        correct: false,
        rationale: "Experimental probes on eating carry aspiration/medical risk absent clearance; the intervention is not function-informed either.",
      },
    ],
  ),
  q(
    "mock6e-056",
    "I",
    "An employer offers a 40-trainee individual-supervision caseload with 30 minutes per trainee per month. MOST defensible response?",
    [
      {
        text: "Refuse the ratio; document the refusal and reasoning; propose a caseload that permits BACB-compliant frequency, observation, and feedback quality before continuing.",
        correct: true,
        rationale: "Domain I requires caseloads that permit competency-based, observation-anchored supervision; unmanageable ratios are themselves an ethics problem.",
      },
      {
        text: "Accept because the trainees are motivated and can compensate for the gap.",
        correct: false,
        rationale: "Trainee motivation does not offset structural under-supervision; BACB requirements are supervisor-side obligations.",
      },
      {
        text: "Accept and delegate observation duties to the most senior trainee.",
        correct: false,
        rationale: "Delegating supervision duties to non-credentialed trainees violates BACB requirements.",
      },
      {
        text: "Accept but average unused supervision minutes across the group monthly.",
        correct: false,
        rationale: "Averaging unused minutes misrepresents supervision actually delivered and is not compliant.",
      },
    ],
  ),
  q(
    "mock6e-057",
    "I",
    "A supervisee has struggled to run preference assessments correctly for three weeks. MOST evidence-based supervisor response?",
    [
      {
        text: "Deliver Behavioral Skills Training—instructions, modeling, rehearsal, performance-based feedback—with a fidelity checklist tied to observable steps, then re-probe integrity in vivo.",
        correct: true,
        rationale: "Domain I identifies BST as the empirically supported supervision method for skill acquisition; feedback must be performance-based against observable criteria.",
      },
      {
        text: "Send a written protocol and email until performance improves.",
        correct: false,
        rationale: "Written instructions alone lack modeling, rehearsal, and feedback components that BST research shows are necessary.",
      },
      {
        text: "Assume the trainee lacks aptitude and refer them out of the program.",
        correct: false,
        rationale: "'Aptitude' framing dodges the supervisor's responsibility to teach and evaluate skill acquisition.",
      },
      {
        text: "Model the procedure once and ask the trainee to describe it back verbally.",
        correct: false,
        rationale: "One-shot modeling with verbal description omits rehearsal and in-vivo feedback—incomplete BST.",
      },
    ],
  ),
  q(
    "mock6e-058",
    "I",
    "A trainee asks you to sign off on 20 supervised hours you did not directly observe because 'everyone at this site does it.' MOST consistent response with BACB requirements?",
    [
      {
        text: "Refuse to sign hours you did not actually supervise; document the request in writing; certify only hours consistent with what you observed per BACB experience-standards requirements.",
        correct: true,
        rationale: "Domain I accrual documentation must be accurate; misrepresenting hours violates BACB requirements and has enforcement consequences for both supervisor and trainee.",
      },
      {
        text: "Sign because the trainee is trustworthy and the site's culture permits it.",
        correct: false,
        rationale: "Cultural norms at a site cannot override BACB experience-accrual standards.",
      },
      {
        text: "Sign but note in the margin that the hours weren't directly supervised.",
        correct: false,
        rationale: "Marginal notes do not cure inaccurate certification of hours.",
      },
      {
        text: "Sign after having the trainee describe what they did in each hour.",
        correct: false,
        rationale: "A retrospective narrative is not equivalent to direct supervision required by the standard.",
      },
    ],
  ),
  q(
    "mock6e-059",
    "I",
    "In a supervision meeting the supervisor tells a trainee, 'Great job! Keep it up.' MOST defensible feedback restructuring?",
    [
      {
        text: "Tie feedback to observable performance criteria—specific behaviors observed, direct comparison to protocol steps, and next-step actions—delivered close in time to the behavior.",
        correct: true,
        rationale: "Domain I performance-based feedback is specific, observable, timely, and actionable; global praise does not shape target performance.",
      },
      {
        text: "Deliver global encouragement to sustain morale so trainees stay motivated.",
        correct: false,
        rationale: "Morale-only feedback fails to shape the target behaviors that supervision is meant to develop.",
      },
      {
        text: "Save feedback for the annual review to avoid disrupting workflow.",
        correct: false,
        rationale: "Delayed feedback loses proximity to the behavior it should shape and violates supervision-frequency norms.",
      },
      {
        text: "Give feedback only when the trainee explicitly requests it to protect autonomy.",
        correct: false,
        rationale: "Feedback frequency is a supervisor responsibility; opt-in-only feedback abdicates that duty.",
      },
    ],
  ),
  q(
    "mock6e-060",
    "I",
    "A supervisee from a marginalized community notes the family's discipline practices differ from the plan's assumptions. MOST defensible supervisor next step?",
    [
      {
        text: "Engage cultural humility—invite the supervisee's perspective, revisit assumptions with the family, and adjust goals and procedures to fit the family's values and safety while remaining within evidence base.",
        correct: true,
        rationale: "Domain I cultural humility and trauma-informed supervision require ongoing examination of assumptions and collaborative revision within the evidence base.",
      },
      {
        text: "Instruct the trainee to defer to the written plan because consistency matters most.",
        correct: false,
        rationale: "Rigid plan adherence overrides family values and undermines social validity.",
      },
      {
        text: "Reassign the case to avoid navigating cultural friction.",
        correct: false,
        rationale: "Avoidance abdicates the supervisor's cultural-humility and continuity-of-care responsibilities.",
      },
      {
        text: "Add the family's practices to the reinforcement schedule regardless of function match.",
        correct: false,
        rationale: "Unexamined incorporation without function analysis is not the standard; practices must fit the analytic framework and safety.",
      },
    ],
  ),
  q(
    "mock6e-061",
    "H",
    "Two function-matched interventions are on the table: one produces faster clinic gains, the other is easier for the family to sustain at home. MOST defensible weighing?",
    [
      {
        text: "Weigh social validity and stakeholder acceptability alongside efficacy—an intervention stakeholders can implement with fidelity in context typically outperforms a technically superior one they cannot sustain.",
        correct: true,
        rationale: "Domain H selection balances efficacy, feasibility, and social validity; sustainability under real-world fidelity is a first-order criterion.",
      },
      {
        text: "Always pick the intervention with the fastest clinic gains because efficiency matters most.",
        correct: false,
        rationale: "Speed of acquisition alone ignores maintenance and long-run outcomes tied to fidelity in the natural setting.",
      },
      {
        text: "Let the family vote on the design without providing technical recommendations.",
        correct: false,
        rationale: "Abdicating technical recommendations violates the analyst's role in intervention selection.",
      },
      {
        text: "Rotate the two interventions weekly until one produces consistent gains.",
        correct: false,
        rationale: "Uncontrolled rotation confounds interpretation and undermines fidelity.",
      },
    ],
  ),
  q(
    "mock6e-062",
    "H",
    "An intervention shows a strong effect but requires a 10:1 staff ratio and specialized equipment the setting cannot supply. MOST defensible next step?",
    [
      {
        text: "Evaluate cost-benefit and acceptability against alternatives; adopt a resource-appropriate intervention that the setting can implement with fidelity, and revisit if resources change.",
        correct: true,
        rationale: "Domain H requires matching selection to feasibility and resource availability while preserving fidelity of whatever is delivered.",
      },
      {
        text: "Adopt the intervention regardless of resource fit because the effect is strong.",
        correct: false,
        rationale: "Under-resourced adoption typically produces low-fidelity delivery and can be iatrogenic.",
      },
      {
        text: "Cut staffing but preserve the equipment to try the plan anyway.",
        correct: false,
        rationale: "Selective corner-cutting still delivers a plan designed for higher ratios at low fidelity.",
      },
      {
        text: "Refuse to serve the client because the ideal intervention isn't feasible.",
        correct: false,
        rationale: "Refusal ignores the range of resource-appropriate alternatives with adequate evidence.",
      },
    ],
  ),
  q(
    "mock6e-063",
    "H",
    "A caregiver signed a general services consent 18 months ago; the team now proposes adding a new intervention that includes brief physical guidance. MOST defensible next step?",
    [
      {
        text: "Obtain informed consent specific to the new intervention—describe procedures, risks, benefits, and alternatives in language the caregiver can restate—before implementation.",
        correct: true,
        rationale: "Domain H and Domain E require intervention-specific informed consent when procedures materially change, especially for procedures involving physical contact or restriction.",
      },
      {
        text: "Rely on the general consent because physical guidance is common practice.",
        correct: false,
        rationale: "General consent does not authorize specific new procedures.",
      },
      {
        text: "Implement first and inform the caregiver at the next monthly review.",
        correct: false,
        rationale: "Delayed disclosure violates consent-quality standards; consent must precede implementation.",
      },
      {
        text: "Have the RBT verbally confirm caregiver comfort during a session.",
        correct: false,
        rationale: "Verbal check by a subordinate is not documented informed consent for a new procedure.",
      },
    ],
  ),
  q(
    "mock6e-064",
    "H",
    "After two weeks on a reinforcement-based plan the team is frustrated by slow progress and proposes adding contingent physical restraint. MOST defensible response?",
    [
      {
        text: "Rule out fidelity, dosage, reinforcer strength, and MO/EO issues first; use the least-restrictive effective option; only escalate procedures after documented rationale, consent, and review.",
        correct: true,
        rationale: "Domain H procedural hierarchy requires analytic troubleshooting of reinforcement-based plans before escalating; consent revision and review precede any restrictive addition.",
      },
      {
        text: "Add restraint because reinforcement-based plans often need physical backup.",
        correct: false,
        rationale: "Skipping the analytic hierarchy for restriction violates least-restrictive principles.",
      },
      {
        text: "Discontinue and start a completely new plan from scratch.",
        correct: false,
        rationale: "Restarting discards data that inform targeted revision.",
      },
      {
        text: "Add restraint on a one-week trial without revising consent.",
        correct: false,
        rationale: "Trial escalation without consent revision is a boundary and ethics violation.",
      },
    ],
  ),
  q(
    "mock6e-065",
    "H",
    "A client meets discharge criteria on all program targets. MOST defensible discharge plan component?",
    [
      {
        text: "Schedule maintenance probes and pre-planned booster sessions in the natural environment, plus a stakeholder point-of-contact for regression, before releasing intensive services.",
        correct: true,
        rationale: "Domain H requires programmed maintenance with contingency for regression; discharge is a phased transition, not a termination event.",
      },
      {
        text: "End services entirely because criterion has been met.",
        correct: false,
        rationale: "End-and-hope discharges ignore known regression risks and abandon monitoring responsibility.",
      },
      {
        text: "Extend intensive services indefinitely to prevent any regression.",
        correct: false,
        rationale: "Indefinite intensive services undermine social validity, access, and independence.",
      },
      {
        text: "Transfer all monitoring responsibility to the family without training.",
        correct: false,
        rationale: "Untrained monitoring risks unnoticed regression and violates the standard of caregiver preparation.",
      },
    ],
  ),
  q(
    "mock6e-066",
    "I",
    "A supervisor discovers a supervisee is delivering services outside their competence to an underserved client at the supervisor's request. MOST defensible immediate response?",
    [
      {
        text: "Halt the out-of-competence delivery, arrange competent coverage or referral, document the corrective action, and examine your own role in creating the pressure.",
        correct: true,
        rationale: "Domain I supervision ethics require halting out-of-competence practice, arranging safe coverage, documenting corrective action, and self-review of supervisor contribution.",
      },
      {
        text: "Continue because access is scarce and some service is better than none.",
        correct: false,
        rationale: "'Some service is better than none' does not justify out-of-competence care; harm to the client is foreseeable.",
      },
      {
        text: "Blame the supervisee for accepting the assignment.",
        correct: false,
        rationale: "Blame reframes structural pressure as individual failure and evades supervisor responsibility.",
      },
      {
        text: "Terminate the supervisee to remove the exposure.",
        correct: false,
        rationale: "Termination without corrective action punishes the supervisee for the supervisor's decision.",
      },
    ],
  ),
  q(
    "mock6e-067",
    "I",
    "A supervisor delivers 100% group supervision because it's efficient; BACB standards require a minimum proportion of individual supervision. MOST defensible correction?",
    [
      {
        text: "Restructure the schedule to include individual supervision at the required proportion, with individualized performance feedback and observation.",
        correct: true,
        rationale: "Domain I compliance with BACB experience-standard structure includes individual supervision at the specified proportion.",
      },
      {
        text: "Continue group-only because the trainees prefer it.",
        correct: false,
        rationale: "Trainee preference does not override structural minimums set by the certifying body.",
      },
      {
        text: "Log group supervision as individual to satisfy documentation.",
        correct: false,
        rationale: "Misrepresenting format is documentation fraud with BACB enforcement consequences.",
      },
      {
        text: "Wait until a BACB audit before changing anything.",
        correct: false,
        rationale: "Reactive-only compliance risks harm to trainees and invalidation of their experience hours.",
      },
    ],
  ),
  q(
    "mock6e-068",
    "I",
    "At the end of a trainee's experience period the supervisor has never formally evaluated competencies against the BACB task list. MOST defensible next step?",
    [
      {
        text: "Conduct a task-list-anchored competency evaluation with observable criteria across multiple items, document gaps, and design remediation before verifying the experience period.",
        correct: true,
        rationale: "Domain I verification is competency-based; documented gaps require remediation before signing off.",
      },
      {
        text: "Verify the experience period based on cumulative hours alone.",
        correct: false,
        rationale: "Hours alone are not the verification standard; competency is.",
      },
      {
        text: "Ask the trainee to self-rate readiness and use that as the evaluation.",
        correct: false,
        rationale: "Self-rating is not equivalent to observable-performance evaluation by the supervisor.",
      },
      {
        text: "Defer competency evaluation to the certifying exam.",
        correct: false,
        rationale: "The BACB exam does not substitute for supervisor competency verification.",
      },
    ],
  ),
  q(
    "mock6e-069",
    "I",
    "A supervising BCBA has not completed continuing education for the current cycle. MOST defensible next step?",
    [
      {
        text: "Prioritize completing required CE units within the cycle window, document them, and adjust supervision responsibilities if certification lapse becomes imminent to protect trainees and clients.",
        correct: true,
        rationale: "Domain I includes maintaining one's own certification and CE currency; lapse jeopardizes trainees' experience-period validity.",
      },
      {
        text: "Continue supervising until the cycle closes because the certification is still active on paper.",
        correct: false,
        rationale: "Waiting until lapse risks invalidating trainee experience hours and violates the ongoing-development standard.",
      },
      {
        text: "Take a single hasty course to fill units regardless of relevance.",
        correct: false,
        rationale: "Rushed, unrelated CE undermines the professional-development purpose CE is meant to serve.",
      },
      {
        text: "Have trainees complete CE units on the supervisor's behalf.",
        correct: false,
        rationale: "Delegating CE credit to trainees is fraudulent and violates certification rules.",
      },
    ],
  ),
  q(
    "mock6e-070",
    "I",
    "A supervisee raises a concern that the supervisor's own billing practices are inaccurate. MOST defensible supervisor response?",
    [
      {
        text: "Take the concern seriously, examine the billing evidence transparently, correct any inaccuracies, and offer an independent reviewer if the supervisee prefers—without retaliation.",
        correct: true,
        rationale: "Domain I requires supervisors to be evaluable, to protect supervisees who raise ethics concerns, and to accept independent review pathways.",
      },
      {
        text: "Dismiss the concern because supervisees lack context to evaluate billing.",
        correct: false,
        rationale: "Reflexive dismissal violates the culture of ethics-concern responsiveness.",
      },
      {
        text: "Retaliate against the supervisee to discourage future concerns.",
        correct: false,
        rationale: "Retaliation against a supervisee raising an ethics concern is a direct BACB Ethics Code violation.",
      },
      {
        text: "Ask the supervisee to sign a non-disclosure agreement before further discussion.",
        correct: false,
        rationale: "Using NDAs to suppress ethics disclosures is coercive and unenforceable in this context.",
      },
    ],
  ),
];

export const BCBA_MOCK_EXAM_QUESTIONS: BDSQuestion[] = [
  ...BCBA_MOCK_EXAM_QUESTIONS_CORE,
  ...BCBA_MOCK_EXAM_EXPANDED_BANK,
];

const totalExamItems = BCBA_MOCK_EXAM_QUESTIONS_CORE.length + BCBA_MOCK_EXAM_EXPANDED_BANK.length;
if (totalExamItems !== BCBA_MOCK_EXAM_EXPECTED_ITEMS) {
  throw new Error(
    `[mock exam bank] Combined count ${totalExamItems} (${BCBA_MOCK_EXAM_QUESTIONS_CORE.length} core + ${BCBA_MOCK_EXAM_EXPANDED_BANK.length} expanded) !== BCBA_MOCK_EXAM_EXPECTED_ITEMS (${BCBA_MOCK_EXAM_EXPECTED_ITEMS}). Update mockExamExpectedCount.ts.`,
  );
}
