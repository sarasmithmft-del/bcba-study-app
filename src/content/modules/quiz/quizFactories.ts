import { cq, type CompactQuiz } from "./compactQuiz";
import {
  MOD06_T,
  MOD07_T,
  MOD08_T,
  MOD09_T,
  MOD10_T,
  MOD11_T,
  MOD12_T,
  MOD13_T,
  MOD14_T,
  MOD15_T,
  MOD16_T,
  MOD17_T,
  MOD18_T,
  MOD19_T,
  MOD20_T,
} from "./quizTemplatesExtension";
import {
  MOD21_T,
  MOD22_T,
  MOD23_T,
  MOD24_T,
  MOD25_T,
  MOD26_T,
  MOD27_T,
  MOD28_T,
  MOD29_T,
  MOD30_T,
  MOD31_T,
  MOD32_T,
} from "./quizTemplatesPearsonLate";
import { MOD33_T, MOD34_T, MOD35_T, MOD36_T } from "./quizTemplatesConsequence";

export type QuizFactory = (qn: number, chapterNumber: number, title: string) => CompactQuiz;

function rot(templates: CompactQuiz[], qn: number): CompactQuiz {
  const row = templates[qn % templates.length];
  return {
    stem: row.stem,
    choices: row.choices,
    rat: row.rat,
  };
}

const MOD01_T: CompactQuiz[] = [
  cq(
    "A clinic graphs \"motivation aura spikes\" hourly without countable behaviors observers could agree on. Which Baer/Wolf/Risley dimension is violated FIRST?",
    "Behavioral dimension — interventions must center measurable behavior tied to socially urgent outcomes.",
    ["Applied dimension exclusively—labs never measure behavior.", "Technological dimension—too little graph animation.", "Generality dimension—too few therapists rotated"],
    [
      "Baer et al. insist targets stay anchored on countable acts tied to stakes—not surrogate constructs mistaken for behavior.",
      "Applied critiques socially meaningless targets; here the lapse is behavioral definability.",
      "Technological critiques unreadable protocols—different fault.",
      "Generality critiques portability—not the primary definitional flaw.",
    ],
  ),
  cq(
    "Marketing insists \"visual proof\" without reversed phases or isolation of controlling variables. Primary lapse?",
    "Analytic dimension — convincing demonstrations of experimental control belong before wholesale adoption.",
    ["Conceptually systematic dimension exclusively because graphs look messy", "Effective dimension—because caregivers dislike graphs", "Behavioral dimension—because topography varies"],
    [
      "Analytic accountability asks whether observed changes owe to the intervention—not coincidence.",
      "Conceptually systematic faults pull tactics away from behavioral principles—not primarily shown.",
      "Effective faults stress magnitude/admin viability—not isolated here.",
      "Behavioral faults stress definability—not causal isolation.",
    ],
  ),
  cq(
    "Protocols omit prompting hierarchies, mastery definitions, or integrity checks unfamiliar substitutes could rerun verbatim. Primary lapse?",
    "Technological dimension — procedures must be described clearly enough for replication.",
    ["Radical behaviorism bans caregivers", "Respondent extinction saturation", "Whole-interval sampling exclusively"],
    [
      "Technological clarity lets independent clinicians approximate procedures faithfully.",
      "Philosophical contrasts do not excuse omitted procedural specs.",
      "Respondent extinction unrelated.",
      "Sampling tactics unrelated unless measurement worksheet targeted.",
    ],
  ),
  cq(
    "Online gimmicks parade reinforcement gadgets divorced from MOs, extinction risks, or reinforcement histories grounded in textbooks. Primary lapse?",
    "Conceptually systematic dimension — tactics must instantiate explanatory behavioral principles.",
    ["Technological dimension exclusively—fonts matter most", "Generality dimension—because gadgets glow", "Behavioral dimension—because gadgets weigh ounces"],
    [
      "Conceptually systematic ties tactics to reinforcement/escape/extinction rationales—not fad choreography.",
      "Technological faults concern replication specs—not lore divorced from mechanisms.",
      "Generality faults stress portability—not conceptual grounding.",
      "Behavioral faults stress countable targets—not theoretical grounding.",
    ],
  ),
  cq(
    "Graphs soar inside coached demos yet caregivers abandon nightly protocols once paperwork balloons; community gains evaporate. Primary lapse?",
    "Effective dimension — meaningful magnitude must survive stakeholder-feasible constraints.",
    ["Applied dimension exclusively—labs forbid caregivers", "Analytic dimension—graphs lack sparklines", "Behavioral dimension—graphs lack crayons"],
    [
      "Effective stresses clinically meaningful results under tolerable logistics—not slideshow victories.",
      "Applied faults targets lacking social relevance—not purely logistics collapse.",
      "Analytic faults causal demonstrations—not sustainability ceilings.",
      "Behavioral faults definability—not administrative viability.",
    ],
  ),
  cq(
    "Analyst refuses urban classrooms until glossy clinic probes plateau—never thinning prompts across aides or probing novel exemplars. Primary lapse?",
    "Generality dimension — durable gains across contexts, people, stimuli, and time.",
    ["Radical bans measurement outdoors", "Respondent extinction indoors only", "Automatic reinforcement mandates exclusively"],
    [
      "Generality insists breadth planning—not perpetual scaffold dependence.",
      "Radical philosophy contrasts unrelated.",
      "Respondent arcs unrelated.",
      "Automatic reinforcement orthogonal fault.",
    ],
  ),
  cq(
    "Supervisor writes meltdowns off as \"unyielding defiance residing inside the learner\" bypassing reinforcement histories. Primary lapse?",
    "Mentalism substituting hypothetical agents for environmentally anchored histories.",
    ["Radical behaviorism bans caregiver interviews categorically", "Methodological behaviorism insists graphs animate", "Technological dimension obsession exclusively"],
    [
      "Mentalism swaps hypothetical inner agents for histories analysts could measure.",
      "Radical behaviorism analyzes verbal behavior—including anxiety reports—not bans caregivers.",
      "Methodological contrasts misapplied—fault here is mentalistic substitution.",
      "Technological lapse differs.",
    ],
  ),
  cq(
    "Trainee hears methodological caution about privacy and concludes anxiety reports must never appear on datasheets. Mischaracterizes whom?",
    "Radical behaviorism still analyzes verbal anxiety reports as behaving—not banning emotion vocabulary outright.",
    ["Applied dimension mandates ignoring caregivers", "Automatic reinforcement forbids interviews", "Respondent extinction forbids latency metrics"],
    [
      "Radical behaviorism integrates privacy within measurement—not mythical exemptions.",
      "Applied dimension unrelated caricature.",
      "Automatic reinforcement unrelated.",
      "Respondent extinction unrelated.",
    ],
  ),
  cq(
    "Which posture MOST matches philosophic doubt as scientific attitude?",
    "Treat today's favored explanations as revisable when tomorrow's evidence contradicts them.",
    ["Treat replication as unnecessary theater", "Assume single flashy graphs crown eternal truth", "Discard observation whenever inconvenient"],
    [
      "Philosophic doubt couples humility with willingness to revise.",
      "Replication matters—contrary stance.",
      "Single-graph certainty violates doubt posture.",
      "Empiricism rejects ignoring observations.",
    ],
  ),
  cq(
    "Which pairing MOST distinguishes methodological from radical behaviorism on privacy?",
    "Methodological strains historically hesitate on private events unless anchored externally; radical analyzes verbal privacy reports as behaving.",
    ["Both ban emotion vocabulary wholesale identically", "Both insist graphs animate exclusively", "Both forbid caregiver interviews uniformly"],
    [
      "Contrasts hinge on analyzing versus sidelining privacy—not identical bans.",
      "Neither mandates animated graphs.",
      "Neither forbids stakeholder interviews universally.",
      "Neither mandates respondent extinction framing.",
    ],
  ),
  cq(
    "Baer/Wolf/Risley articulated seven dimensions chiefly so practitioners could:",
    "Differentiate accountable applied behavior-analytic practice from loosely behavioral rhetoric.",
    ["Eliminate measurement altogether", "Replace caregivers with algorithms", "Guarantee neurotypical conformity"],
    [
      "Dimensions scaffold accountability—not abolishing measurement.",
      "Stakeholders remain central—not algorithm substitution mandates.",
      "ABA commits to individualized socially significant aims—not conformity caricatures.",
    ],
  ),
  cq(
    "Which stance MOST reflects determinism?",
    "Assume behavior interacts lawfully with environmental histories discoverable through systematic inquiry.",
    ["Assume causes are unknowable permanently", "Assume graphs cancel reinforcement laws", "Assume punishment lacks histories"],
    [
      "Determinism presumes lawful—not chaotic—relations analyzable empirically.",
      "Science attitudes contrast chaos—not deterministic anchors.",
      "Punishment remains lawful—not historically exempt.",
      "Graphs visualize—not negate—lawfulness.",
    ],
  ),
  cq(
    "Which stance MOST reflects empiricism?",
    "Ground conclusions in observable evidence rather than authority alone.",
    ["Trust brochures without observation", "Prefer anecdotes exclusively when flashy", "Discard measurement whenever inconvenient"],
    [
      "Empiricism insists evidentiary footing—not authoritative decree.",
      "Brochures absent observation contradict empiricism.",
      "Flashy anecdotes insufficient alone.",
      "Measurement anchors empirical discipline.",
    ],
  ),
];

const MOD02_T: CompactQuiz[] = [
  cq(
    "Medication terminates migraine pain already underway—behavior increases future medication-taking. MOST precise label?",
    "Negative reinforcement (escape) — terminating an ongoing aversive stimulus strengthens behavior.",
    ["Positive reinforcement exclusively—because swallowing moves", "Positive punishment—because migraines hurt", "Negative punishment—because pills disappear"],
    [
      "Removal/reduction of existing pain reinforces ingestion.",
      "Presentation of appetitive stimuli differs—the consequence removes pain.",
      "Pain magnitude irrelevant to contingency class naming.",
      "Loss of reinforcer pattern differs.",
    ],
  ),
  cq(
    "Student completes packets Thursday night so Monday detention never begins—completion strengthens. MOST precise label?",
    "Negative reinforcement (avoidance) — postpones/prevents onset of aversive events.",
    ["Negative reinforcement (escape)—pain already raging", "Positive reinforcement exclusively—packets glow", "Automatic reinforcement exclusively"],
    [
      "Avoidance prevents scheduled punisher onset versus escaping ongoing pain.",
      "Escape deals with active aversives.",
      "Presentation reinforcer storyline inaccurate.",
      "Social mediation unspecified versus automatic classification.",
    ],
  ),
  cq(
    "Each yell earns booming teacher proximity attention—yelling climbs across weeks. MOST precise classification?",
    "Positive reinforcement via socially mediated stimuli when attention presentations strengthen behavior.",
    ["Positive punishment delivered loudly therefore decreases yelling necessarily", "Negative reinforcement escape exclusively", "Automatic reinforcement exclusively"],
    [
      "Added stimuli contingent on acts increasing frequency equals positive reinforcement—even if stimuli seem punitive socially.",
      "If yelling rises, punishment storyline contradicts data.",
      "Escape removes aversives—not primarily described.",
      "Mediated delivery contradicts purely automatic storyline.",
    ],
  ),
  cq(
    "Each aggressive grab loses tokens linked to outings—grabbing declines. MOST precise classification?",
    "Negative punishment — removing reinforcer access contingent on behavior decreases future frequency.",
    ["Positive punishment exclusively—tokens clang", "Negative reinforcement avoidance exclusively", "Positive reinforcement exclusively"],
    [
      "Loss of conditioned reinforcer contingent on acts suppresses responding.",
      "Presentation punishers differ.",
      "Avoidance postpones future punisher—not removing reinforcer.",
      "Positive reinforcement escalates—not suppresses.",
    ],
  ),
  cq(
    "Stereotypy persists identical alone without demands—staff praise fails to alter rates. MOST plausible maintaining source?",
    "Automatic reinforcement — sensory consequence produced directly by responses independent of social mediation.",
    ["Positive punishment exclusively—because stereotypy moves", "Negative reinforcement escape exclusively—because rooms quiet", "Positive reinforcement exclusively via invisible fairies"],
    [
      "Automatic reinforcement maintains acts producing sensory consequences absent social consequence schedule.",
      "If praise ineffective alone, simplistic punishment attribution unsupported.",
      "Escape removes demands—not evidenced absent transitions.",
      "Social reinforcement storyline contradicts isolation stability.",
    ],
  ),
  cq(
    "Delivery of stickers contingent on accuracy boosts accuracy across sessions. MOST precise classification?",
    "Positive reinforcement — stimulus presentations contingent on responses strengthen behavior.",
    ["Negative reinforcement avoidance exclusively", "Negative punishment exclusively", "Respondent extinction exclusively"],
    [
      "Added stimuli contingent on responding increases likelihood—classic positive reinforcement.",
      "Avoidance prevents future events—not sticker additions.",
      "Negative punishment removes reinforcers—not supplies stickers.",
      "Respondent arcs unrelated.",
    ],
  ),
  cq(
    "Contrast negative reinforcement versus positive punishment succinctly:",
    "Negative reinforcement removes/reduces/postpones aversives to strengthen behavior; positive punishment presents stimuli/decreases behavior.",
    ["Both strengthen identical acts equally always", "NR always removes appetitive stimuli exclusively", "Positive punishment removes reinforcers exclusively"],
    [
      "Definitions hinge on stimulus operations paired with frequency directions.",
      "Both processes differ functionally—not identical strengthening.",
      "NR manipulates aversives—not appetitive removals exclusively.",
      "Removal punishers describe negative punishment—not positive punishment.",
    ],
  ),
  cq(
    "Teacher removes breaks contingent on yelling—yelling declines. MOST precise classification?",
    "Negative punishment — removing reinforcer access contingent on acts decreases behaviors.",
    ["Positive reinforcement exclusively—because breaks calm", "Negative reinforcement escape exclusively", "Automatic reinforcement exclusively"],
    [
      "Loss of reinforcing break contingent on yelling suppresses yelling.",
      "Positive reinforcement escalates—not suppresses.",
      "Escape removes ongoing aversives—not reinforcer removals.",
      "Automatic reinforcement unrelated absent sensory storyline.",
    ],
  ),
  cq(
    "Which contingency BEST illustrates socially mediated reinforcement?",
    "Peer delivers praise contingent on sharing—sharing increases.",
    ["Stereotypy maintained by sensory feedback alone without peers delivering stimuli", "Blink elicited by air puff phylogenetically", "Heart-rate conditioned minus behavior strengthened"],
    [
      "Social mediation involves another agent delivering programmed consequences.",
      "Automatic reinforcement excludes mediated deliveries.",
      "Blink arcs respondent—not mediated reinforcement storyline.",
      "Physiology vignette diverges.",
    ],
  ),
  cq(
    "Positive punishment ALWAYS involves:",
    "Presentations of stimuli contingent on responses that decrease future frequency.",
    ["Removing reinforcers contingent on responding exclusively", "Removing ongoing pain contingent on responding exclusively", "Presentation reinforcers exclusively"],
    [
      "Positive punishment stresses stimulus presentations suppressing acts.",
      "Removal punishers describe negative punishment.",
      "Pain termination storyline aligns with reinforcement—not punishment definitions.",
      "Presentation reinforcers describe reinforcement—not suppression.",
    ],
  ),
  cq(
    "Negative reinforcement ALWAYS strengthens behavior via:",
    "Removal/reduction/postponement of aversive stimuli contingent on responding.",
    ["Presentation of punishers contingent on responding exclusively", "Removal of appetitive stimuli exclusively without strengthening storyline", "Respondent extinction exclusively"],
    [
      "NR strengthens via escape/avoidance operations tied to aversives.",
      "Positive punishment suppresses—not strengthens.",
      "Negative punishment removes reinforcers—distinct mechanism.",
      "Respondent extinction unrelated classification.",
    ],
  ),
  cq(
    "Which vignette MOST illustrates avoidance versus escape?",
    "Taking migraine meds before headache spikes prevents pain onset versus swallowing meds once pounding begins.",
    ["Both vignettes identical contingencies necessarily", "Escape prevents onset exclusively always", "Avoidance terminates ongoing shocks exclusively"],
    [
      "Avoidance prevents/precludes onset; escape terminates ongoing aversives.",
      "Contrasts hinge on temporal relation to aversive onset.",
      "Escape terminates ongoing—not prevents impending exclusively.",
      "Avoidance prevents—not terminates ongoing shocks exclusively.",
    ],
  ),
  cq(
    "Which statement aligns with distinguishing reinforcement versus punishment?",
    "Reinforcement increases future frequencies; punishment decreases future frequencies—sign matters regardless of stimulus polarity labels.",
    ["Positive punishment strengthens acts automatically", "Negative reinforcement decreases responding necessarily", "Negative punishment strengthens responding necessarily"],
    [
      "Functional classification focuses on whether responding climbs or drops—not merely polite wording.",
      "Positive punishment suppresses—not strengthens.",
      "NR strengthens—not suppresses.",
      "Negative punishment suppresses—not strengthens.",
    ],
  ),
];

const MOD03_T: CompactQuiz[] = [
  cq(
    "Draft defines aggression via \"visible anger losing emotional control underlying frustration.\" Primary definitional flaw?",
    "Imports non-observable mentalisms observers cannot score reliably.",
    ["Specifies topography too precisely exclusively", "Splits multiple classes prematurely exclusively", "Defines latency thresholds excessively"],
    [
      "Operational definitions scrub invisible emotion constructs.",
      "Too precise topography uncommon fault here.",
      "Multiple classes fault differs.",
      "Latency thresholds unrelated flaw cited.",
    ],
  ),
  cq(
    "Teaching neighborhood biking unlocks apprenticeships unreachable before transit mastery. BEST classification?",
    "Behavioral cusp opening wholly new ecological reinforcers/contingencies.",
    ["Pivotal behavior exclusively—because biking rotates ankles", "Respondent extinction exclusively", "Automatic reinforcement checklist exclusively"],
    [
      "Cusps widen ecological reinforcer worlds—not merely correlated tweaks.",
      "Pivotal emphasizes collateral untreated repertoires emphasized differently.",
      "Respondent arcs unrelated.",
      "Automatic reinforcement orthogonal.",
    ],
  ),
  cq(
    "Teaching snack signing correlates with spontaneous untrained bathroom mands absent direct drills. BEST classification?",
    "Pivotal behavior producing collateral shifts across untreated families.",
    ["Behavioral cusp exclusively—because bathrooms novel continents", "Negative punishment exclusively", "Respondent induction exclusively"],
    [
      "Pivotal targets reorganize repertoires broadly absent drilling each topography.",
      "Cusp emphasizes ecological openings—not emphasized collateral emergence vignette.",
      "Negative punishment unrelated.",
      "Respondent storyline unrelated.",
    ],
  ),
  cq(
    "Team selects budgeting targets maximizing lifelong reinforcement contacts versus clinician-preferred nail clipping convenience. MOST exemplifies?",
    "Habilitation prioritizing durable reinforcement opportunities aligned with learner futures.",
    ["Respondent extinction exclusively", "Automatic reinforcement mandates exclusively", "Punishment saturation exclusively"],
    [
      "Habilitation evaluates targets boosting reinforcement contacts minimizing lifelong punishment pitfalls.",
      "Respondent arcs unrelated.",
      "Automatic reinforcement unrelated.",
      "Punishment saturation contradicts vignette.",
    ],
  ),
  cq(
    "Stakeholders insist toilet training outcomes families value trump flashy clinician hobby targets. MOST exemplifies?",
    "Social validity embedding consumer-valued meaningful outcomes.",
    ["Technological dimension exclusively—fonts decide validity", "Respondent extinction exclusively", "Whole-interval sampling exclusively"],
    [
      "Social validity insists consumer priorities—not clinician hobbies—drive targets.",
      "Technological lapse differs.",
      "Respondent arcs unrelated.",
      "Sampling unrelated.",
    ],
  ),
  cq(
    "Definition anchors observers to countable onset-offset boundaries describing observable strikes excluding inferred motives. MOST aligns with?",
    "Objective operational definitions maximizing IOA fidelity.",
    ["Mentalistic summaries guaranteeing richer graphs automatically", "Respondent extinction exclusively", "Automatic reinforcement mandates exclusively"],
    [
      "Objective specs prioritize observable boundaries fostering measurement fidelity.",
      "Mentalisms degrade observer alignment.",
      "Respondent arcs unrelated.",
      "Automatic reinforcement unrelated.",
    ],
  ),
  cq(
    "Before trusting archived graphs naive observers pilot definitions primarily to verify:",
    "Interobserver agreement thresholds stabilize prior scaling measurement.",
    ["Eliminate stakeholder interviews permanently", "Finalize FA absent observation", "Replace graphs with anecdotes permanently"],
    [
      "Pilot IOA probes definitional clarity.",
      "Stakeholders remain integral—not discarded.",
      "FA conclusions absent observation risky.",
      "Anecdotes replace measurement improperly.",
    ],
  ),
  cq(
    "Which selection rationale MOST aligns with maximizing reinforcement contacts?",
    "Choose targets expanding durable access to reinforcement minimizing lifelong pitfalls.",
    ["Choose targets maximizing clinician commute convenience exclusively", "Choose targets guaranteeing respondent extinction exclusively", "Choose targets forbidding caregiver consent exclusively"],
    [
      "Habilitation stresses reinforcement ecology—not clinician logistics alone.",
      "Respondent extinction unrelated criterion.",
      "Consent remains ethical—not forbidden.",
      "Commute convenience caricature contradicts learner-centered emphasis.",
    ],
  ),
  cq(
    "Which difference MOST cleanly separates behavioral cusp from pivotal behavior?",
    "Cusp stresses accessing novel environments/reinforcers; pivotal stresses collateral untreated repertoires shifting broadly.",
    ["They describe identical constructs exclusively always", "Pivotal forbids ecological novelty exclusively", "Cusp forbids collateral shifts exclusively"],
    [
      "Overlapping concepts diverge emphasis—not identical jargon.",
      "Pivotal still admits novelty—but vignettes spotlight collateral emergence versus ecological widening.",
      "Cusp narrative allows collateral shifts—but emphasizes ecological portals.",
      "Identical construct caricature invalid.",
    ],
  ),
  cq(
    "Operational definitions prior to intervention MOST immediately protect:",
    "Graph integrity—ambiguous definitions crater IOA and obscure hypothesis tests.",
    ["Respondent extinction saturation exclusively", "Automatic reinforcement rulings exclusively", "Whole-interval mastery exclusively"],
    [
      "Measurement clarity anchors observers.",
      "Respondent arcs orthogonal.",
      "Automatic reinforcement orthogonal.",
      "Sampling tactic orthogonal unless measurement instructional.",
    ],
  ),
  cq(
    "Staff propose targeting compliance defined via cooperative attitudes respecting authority without countable acts. Analyst declines—PRIMARY concern?",
    "Construct imports subjective mentalisms incompatible with behavioral definitions.",
    ["Too much topography detail exclusively", "Too many graphs exclusively", "Too little reinforcement exclusively"],
    [
      "Attitudes/respect imports mentalisms—not countable behaviors.",
      "Topography overspecification uncommon fault.",
      "Graph counts unrelated flaw cited.",
      "Reinforcement density orthogonal definitional critique.",
    ],
  ),
  cq(
    "Which habit MOST aligns with socially valid goal selection?",
    "Interview stakeholders aligning outcomes with valued routines—not solely expedient clinic metrics.",
    ["Suppress stakeholder narratives permanently", "Ignore referral records systematically", "Replace measurement permanently"],
    [
      "Stakeholder interviews anchor relevance.",
      "Suppressing narratives violates validity commitments.",
      "Records remain foundational—not ignored.",
      "Measurement complements—not replaces—validity.",
    ],
  ),
  cq(
    "Which definitional practice MOST improves completeness?",
    "Specify topography latency magnitude duration thresholds observers discriminate reliably.",
    ["Embed inferred motives richly exclusively", "Reference vibes exclusively without boundaries", "Avoid onset-offset cues exclusively"],
    [
      "Dimensional specificity boosts completeness versus vague summaries.",
      "Motive inference undermines objectivity.",
      "Vibes lacking boundaries degrade reliability.",
      "Onset-offset cues help—not hinder—observer calibration.",
    ],
  ),
];

export const FACTORIES: Record<string, QuizFactory> = {
  mod01: (qn, _ch, _t) => rot(MOD01_T, qn),
  mod02: (qn, _ch, _t) => rot(MOD02_T, qn),
  mod03: (qn, _ch, _t) => rot(MOD03_T, qn),
  mod06: (qn, _ch, _t) => rot(MOD06_T, qn),
  mod07: (qn, _ch, _t) => rot(MOD07_T, qn),
  mod08: (qn, _ch, _t) => rot(MOD08_T, qn),
  mod09: (qn, _ch, _t) => rot(MOD09_T, qn),
  mod10: (qn, _ch, _t) => rot(MOD10_T, qn),
  mod11: (qn, _ch, _t) => rot(MOD11_T, qn),
  mod12: (qn, _ch, _t) => rot(MOD12_T, qn),
  mod13: (qn, _ch, _t) => rot(MOD13_T, qn),
  mod14: (qn, _ch, _t) => rot(MOD14_T, qn),
  mod15: (qn, _ch, _t) => rot(MOD15_T, qn),
  mod16: (qn, _ch, _t) => rot(MOD16_T, qn),
  mod17: (qn, _ch, _t) => rot(MOD17_T, qn),
  mod18: (qn, _ch, _t) => rot(MOD18_T, qn),
  mod19: (qn, _ch, _t) => rot(MOD19_T, qn),
  mod20: (qn, _ch, _t) => rot(MOD20_T, qn),
  mod21: (qn, _ch, _t) => rot(MOD21_T, qn),
  mod22: (qn, _ch, _t) => rot(MOD22_T, qn),
  mod23: (qn, _ch, _t) => rot(MOD23_T, qn),
  mod24: (qn, _ch, _t) => rot(MOD24_T, qn),
  mod25: (qn, _ch, _t) => rot(MOD25_T, qn),
  mod26: (qn, _ch, _t) => rot(MOD26_T, qn),
  mod27: (qn, _ch, _t) => rot(MOD27_T, qn),
  mod28: (qn, _ch, _t) => rot(MOD28_T, qn),
  mod29: (qn, _ch, _t) => rot(MOD29_T, qn),
  mod30: (qn, _ch, _t) => rot(MOD30_T, qn),
  mod31: (qn, _ch, _t) => rot(MOD31_T, qn),
  mod32: (qn, _ch, _t) => rot(MOD32_T, qn),
  mod33: (qn, _ch, _t) => rot(MOD33_T, qn),
  mod34: (qn, _ch, _t) => rot(MOD34_T, qn),
  mod35: (qn, _ch, _t) => rot(MOD35_T, qn),
  mod36: (qn, _ch, _t) => rot(MOD36_T, qn),
};
