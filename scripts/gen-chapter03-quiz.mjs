/**
 * Generates src/content/modules/quiz/chapter03QuizBank.ts — run: node scripts/gen-chapter03-quiz.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "src", "content", "modules", "quiz", "chapter03QuizBank.ts");

const O = (text, rationale) => ({ text, rationale });
const rows = [];

function push(q) {
  rows.push(q);
}

function Q(id, stem, cor, loc, bundle) {
  push({ id, stem, cor, loc, bundle });
}

/* Selecting / defining — CHH Ch. 3 */
Q("mod05-q1","Before designing an intervention, assessing potential targets primarily helps teams:","B","CHH Chapter 3, pp. 68–70 — assessment functions prior to interventions",{
  A:O("Prove interventions succeeded without measuring baselines first.","Baselines precede accountable comparisons."),
  B:O("Select socially meaningful behaviors that can change ethically and need precise definitions/metrics.","CHH anchors assessment logic to stakeholder-valued targets feeding measurement."),
  C:O("Eliminate stakeholder interviews universally.","Interviews complement other tools."),
  D:O("Avoid operational definitions indefinitely.","Definitions sharpen through assessment."),
});

Q("mod05-q2","\"Social validity\" MOST asks whether:","C","CHH Chapter 3, pp. 78–83 — social significance",{
  A:O("Laboratories deem the topography elegant.","Significance is defined by stakeholder outcomes."),
  B:O("Inferential statistics hit p-values alone.","Inferential significance is not social validity."),
  C:O("Clients and caregivers value the behavioral improvements in daily life.","Applied targets prioritize meaningful societal outcomes."),
  D:O("Observers never collect data again.","Measurement persists."),
});

Q("mod05-q3","Operational definitions are adequate when independent observers:","A","CHH Chapter 3, pp. 86–88 — observable definitions",{A:O("Match on whether the episode occurred following the manualized description.","Observer agreement hinges on observable anchors."),B:O("Infer covert intent privately without criteria.","Private inference defeats agreement."),C:O("Rotate synonyms weekly without notifying families.","Stability fuels replication."),D:O("Ignore mastery criteria indefinitely.","Criteria operationalize socially valid endpoints."),});

Q("mod05-q4","Targeting vague \"attention issues\" FIRST conflicts with:","D","CHH Chapter 3, pp. 86–87 — hypothetical constructs",{A:O("Whole-interval biases exclusively.","Undefined acts break every tactic."),B:O("Establishing operations disappearing.","Conceptual caricature."),C:O(\"Radical behaviorism forbidding measurement.\",'Radicalism analyzes measurable verbal acts—targets still observable.'),D:O("Need to anchor improvement plans in measurable behavioral episodes or authorized products.","Abstract complaints require translation prior to graphs."),});

Q("mod05-q5","When hours are scarce, behavior analysts FIRST prioritize:","B","CHH Chapter 3, pp. 84–86 — prioritization",{A:O(\"Targets easiest to pronounce aloud.\",'Trivial pronunciation ease mis-serves urgency.'),B:O(\"Imminent injury, caregiver priorities, habilitation widening reinforcement contacts.\",'CHH urges ethical sequencing emphasizing safety plus meaningful repertoire expansion.'),C:O(\"Graph coloring conventions.\",'Cosmetic trivia irrelevant.'),D:O(\"Targets mastered years ago unrelated to referral.\",'Irrelevance wastes resources.'),});

Q("mod05-q6","Indirect records (FAST, ABC interviews, summaries) MOST serve as:","C","CHH Chapter 3, pp. 70–77 — multimethod assessment",{A:O(\"Final functional diagnoses unchanged forever.\",'Hypotheses require corroboration.'),B:O(\"Banned once measurement arrives.\",'They contextualize indefinitely.'),C:O(\"Hypothesis generators narrowing later observation and instrumentation.\",'Recall tools seed empiricism—not replace it.'),D:O(\"Experimentally manipulated contingencies alone.\",'Manipulation awaits later designs.'),});

Q("mod05-q7","Archival record review MOST helps clinicians:","A","CHH Chapter 3, p. 70 — review of records",{A:O("Surface prior diagnoses, meds, bans, reinforcement histories influencing hypotheses.","Contextual fidelity precedes naive observation."),B:O(\"Replace caregiver consent universally.\",'Ethics unaffected.'),C:O(\"Obviate descriptive observation totally.\",'Direct data still matters.'),D:O(\"Guarantee automatic punishment plans.\",'No automatic tactics.'),});

Q("mod05-q8","Transparent mastery criteria MOST give stakeholders:","D","CHH Chapter 3, pp. 89–90 — criteria",{A:O(\"Mystery about when thinning may begin.\",'Criteria reduce vague discretion.'),B:O(\"License to fabricate durations.\",'Falsification remains unethical.'),C:O(\"Exemption from graphed summaries.\",'Graphs bolster transparency.'),D:O(\"Shared measurable thresholds marking acceptable change.\",'Explicit criteria tether decisions to plotted evidence.'),});

Q("mod05-q9","Replacement behaviors fit applied logic BEST when:","A","CHH Chapter 3, pp. 78–83 — stakeholder-valued repertoires",{A:O("Caregivers endorse them and reinforcement contacts widen beyond escalating crises alone.","Meaningfulness plus adaptive contact hallmark habilitative rationale."),B:O("Only supervisors care about topography.","Stakeholder resonance remains core."),C:O(\"They forbid measurement operations.\",'Measurement remains essential.'),D:O(\"They postpone definitions until discharge.\",'Definitions cannot wait indefinitely.'),});

Q("mod05-q10","Two staff code \"elopement\" inconsistently FIRST jeopardizes:","B","CHH Chapter 3, pp. 86–88 — observer agreement",{A:O(\"MO abolishing automatically.\",'Unrelated caricature.'),B:O("Reliability because tallies summarize different topography classes.","Definition drift defeats trustworthy graphs."),C:O(\"Scatterplot quadrant coloring.\",'Trivial plotting detail.'),D:O(\"Mandatory respondent extinction.\",'Unrelated caricature.'),});

Q("mod05-q11","Ordered multi-step brushing routines MOST require:","C","CHH Chapter 3, pp. 86–87 — task-analysis logic",{A:O(\"Respondent extinguishing alone.\",'Reflex arcs rarely entail instructional chains here.'),B:O(\"Private-only constructs.\",'Operational components still observable.'),C:O(\"Chained definitional scaffolding prior to proportional measurement choices.\",'Complex skills entail sequenced mastery steps definable independently.'),D:O(\"Whole-interval sampling mandates.\",'Measurement tactic contingent on dimensional question.'),});

Q("mod05-q12","LEAST defensible maneuver when stakeholder priorities collide silently:","C","CHH Chapter 3, pp. 78–84 — negotiation",{A:O(\"Document constraints and phase targets collaboratively.\",'Transparency aligns ethics.'),B:O(\"Select interim measurable bridges honoring safety.\",'Sequencing applied logic.'),C:O(\"Drop caregiver-valued repertoires without rationale on the permanent record.\",'Applied analysis documents trade-offs ethically.'),D:O(\"Revisit social-validity rationales aloud in supervision.\",'Supervision reinforces accountability.'),});

Q("mod05-q13","Habilitation-flavored prioritization MOST widens:","A","CHH Chapter 3, pp. 78–82 — enriching lifestyles",{A:O(\"Future contacts with reinforcing activities, peers, settings.\",'CHH underscores expanding ecological opportunities.'),B:O(\"Trapping learners in deprivation.\",'Opposite of aim.'),C:O(\"Arbitrary topography roulette.\",'Rationales grounded in significance data.'),D:O(\"Immeasurable constructs forever.\",'Immeasurability undermines accountability.'),});

Q("mod05-q14","Baseline quantification MOST supports:","D","CHH Chapter 3, pp. 68–71 — evaluation scaffolding",{A:O(\"Publishing without graphs.\",'Graphs visualize accountability.'),B:O(\"Guessing functions without observing.\",'Observation remains essential.'),C:O(\"Negating stakeholder interviews.\",'Narratives still inform hypotheses.'),D:O("Comparing later intervention levels to credible pre-change estimates.","Interpretation hinges on disciplined contrasts."),});

Q("mod05-q15","Which checklist question bridges definitions into measurement chapters BEST?","B","CHH Chapter 3, pp. 86–87; CHH Chapter 4, pp. 96–98 — dimensional alignment",{A:O(\"Did we cite Plato sufficiently.\",'Historical trivia irrelevant.'),B:O("Which frequency rate, cumulative count, latency, duration, IRT, or product index tracks this goal?", "Operational goals tether to dimensional quantities expanded in Chapter 4."),C:O(\"Did caregivers promise never to graph.\",'Graphing encouraged.'),D:O(\"Can we postpone criteria forever.\",'Criteria remain essential.'),});

Q("mod05-q16","Declaring \"therapy felt complete today\" lacks operational criteria MOST risks:","A","CHH Chapter 3, pp. 89–90 — specificity",{A:O(\"Teams lacking shared thinning/termination/decision benchmarks.\",'Vague endings undermine reproducible care.'),B:O(\"Momentary probes becoming unbiased spontaneously.\",'Method bias unaffected.'),C:O(\"IOA outlawed.\",'Unrelated caricature.'),D:O(\"Permanent products exploding.\",'Unrelated caricature.'),});

Q("mod05-q17","Breadth mandates (communication + daily living targets) MOST mean planners should:","B","CHH Chapter 3, pp. 78–80 — applied breadth",{A:O(\"Select only covert constructs.\",'Observables required.'),B:O("Operationalize varied meaningful repertoires supported by stakeholder data.","Breadth aligns with stakeholder missions—not convenience alone."),C:O(\"Ship plans without graphs.\",'Graph accountability persists.'),D:O(\"Ignore safety considerations.\",'Safety remains paramount.'),});

Q("mod05-q18","Interviews versus live ABC recording differ MOST because interviews:","C","CHH Chapter 3, pp. 70–73",{A:O(\"Prove experimental isolation.\",'No arranged contrasts.'),B:O(\"Delete hypotheses.\",'They generate hypotheses.'),C:O("Compress recall timelines that observers might partition differently minute-by-minute.","Indirect modalities smooth or omit granular temporal texture."),D:O(\"Ban measurement ethically.\",'They inform measurement.'),});

Q("mod05-q19","Urgent medically risky aggression should usually outrank elective leisure micro-targets during:","A","CHH Chapter 3, pp. 84–85",{A:O(\"Identical condensed resource windows risking harm if deferred.\",'Imminent hazard commands precedence ethically.'),B:O(\"Post-discharge eras alone.\",'Urgency can exist anytime.'),C:O(\"Graph-color tie-breakers.\",'Trivial gimmick irrelevant.'),D:O(\"Random priority dice.\",'Unethical randomizing.'),});

Q("mod05-q20","Blind imitation-only rationales MOST invite critique when:","D","CHH Chapter 3, pp. 78–83",{A:O(\"Uniform consensus already exists universally.\",'Real teams disagree often.'),B:O(\"Measurement impossible.\",'Measurement still mandated.'),C:O(\"Habilitation satisfied automatically.\",'Not automatic.'),D:O("Rigid conformity overshadows individualized habilitation negotiated with caregivers.","Applied logic centers stakeholder-valued outcomes."),});

Q("mod05-q21","Before picking partial-interval probes, clinicians need FIRST:","B","CHH Chapter 3, pp. 86–88; CHH Chapter 4, pp. 94–96",{A:O(\"scatterplot palettes finalized.\",'Aesthetic plotting secondary.'),B:O(\"Operational definitions reproducible observers can execute.\",'Definitions precede instrumentation discipline.'),C:O(\"FA reversals concluded.\",'Not prerequisite for introductory measurement vignettes.'),D:O(\"MRI clearance.\",'Neuro caricature irrelevant.'),});

Q("mod05-q22","Separate hit/kick topography codes MOST help:","C","CHH Chapter 3, pp. 84–87",{A:O(\"Guessing identical reinforcement histories blindly.\",'Topographies may correlate with differing contingencies.'),B:O(\"Ignoring caregivers entirely.\",'Narratives still matter.'),C:O(\"Running agreement checks on narrow classes or documenting defensible collapsing rules.\",'Operational clarity fosters trustworthy tallies."),D:O(\"Banning sequential observation.\",'Observation continues.'),});

/* Measurement CHH Ch. 4 */

Q("mod05-q23","Counts divided by session minutes quantify:","B","CHH Chapter 4, pp. 96–102",{A:O(\"Duration totals exclusively.\",'Duration sums temporal extent.'),B:O(\"Rate (frequency/time).",'Rate adjusts raw counts by exposure.'),C:O(\"IRT exclusively.\",'IRT spaces successive events.'),D:O(\"Magnitude spectra.\",'Magnitude gauges intensity.'),});

Q("mod05-q24","Total time hand-raising persists during lecture measures:","D","CHH Chapter 4, pp. 96–103",{A:O(\"Latency cue-to-response.\",'Latency initiation metric.'),B:O(\"IRT between raises.\",'IRT spaces discrete events.'),C:O(\"Momentary probe hits only.\",'Momentary instantaneous sampling.'),D:O(\"Duration of raised-hand posture summed.\",'Duration aggregates temporal engagement.'),});

Q("mod05-q25","Latency records:","A","CHH Chapter 4, pp. 96–97",{A:O(\"Elapsed time between SD/onset cues and first qualified response.\",'Latency indexes initiation readiness.'),B:O(\"Cumulative bout length.\",'That is duration.'),C:O(\"Intervals marked present if touched.\",'Interval aggregates differ.'),D:O(\"Force output.\",'Intensity dimension differs.'),});

Q("mod05-q26","IRT indexes:","C","CHH Chapter 4, pp. 96–97",{A:O(\"Probe yes/no densities.\",'MTS instantaneous.'),B:O(\"Total minutes topography occupies.\",'Duration metric.'),C:O(\"Time between successive members of an instance class.\",'IRT spaces responses.'),D:O(\"Archived artwork alone.\",'May support products but unrelated definition.'),});

Q("mod05-q27","Grip dynamometers measuring peak Newtons quantify:","B","CHH Chapter 4, pp. 96–98",{A:O(\"Momentary instantaneous hits.\",'Momentary categorical.'),B:O(\"Response magnitude/amplitude.\",'Force gauges intensify topography metrics.'),C:O(\"IRT exclusively.\",'IRT timing—not Newtons.'),D:O(\"Permanent product latency.\",'Mislabel.'),});

Q("mod05-q28","Classic event counters increment:","A","CHH Chapter 4, pp. 104–105",{A:O(\"Discrete qualifying instances observed.\",'Event recording tallies topography occurrences.'),B:O(\"Entire-interval occupation only.\",'Whole-interval criterion differs.'),C:O(\"Random therapist mood anecdotes.\",'Not measurement.'),D:O(\"Only momentary-aligned segments.\",'Different measurement family.'),});

Q("mod05-q29","Continuous schedules attempt capturing:","D","CHH Chapter 4, pp. 104–108",{A:O(\"Zero occurrences deliberately.\",'Contradicts continuous ethos.'),B:O(\"Annual snapshots alone.\",'Not continuous observation.'),C:O(\"Unspecified constructs.\",'Definitions prerequisite.'),D:O(\"All qualifying instances feasible within practical constraints.\",'Feasibility still acknowledged in CHH.'),});

Q("mod05-q30","Partial-interval scoring inflates portrayal of:","B","CHH Chapter 4, pp. 106–107",{A:O(\"Muted low-rate behavior artificially downward.\",'Direction wrong for partial-interval.'),B:O(\"Continuous engagement because momentary dips still mark intervals present.\",'Brief contacts mark whole interval—“prevalence” inflates visually.'),C:O(\"Pure latency variability.\",'Different dimension.'),D:O(\"Punishment magnitudes exclusively.\",'Contingency class differs.'),});

Q("mod05-q31","Whole-interval scoring masks:","A","CHH Chapter 4, pp. 106–107",{A:O(\"Brief intense bursts occupying only mid-interval segments.\",'Full-bin requirement silences clinically salient flashes.'),B:O(\"Any detection whatsoever.\",'Whole-interval errs toward omission not omniscience.'),C:O(\"Momentary instantaneous alignment.\",'Different tactic.'),D:O(\"Response magnitude.\",'Magnitude orthogonal.'),});

Q("mod05-q32","Momentary time sampling MOST omits:","C","CHH Chapter 4, pp. 107–108",{A:O(\"Anything occurring during probes erroneously marked absent.\",'Errors possible but omission primary concern exaggerated opposite direction.'),B:O(\"Duration totals reconstructed perfectly.\",'MTS approximate.'),C:O(\"Elevations occurring strictly between instantaneous scans.\",'Probes snapshot—miss intervening bursts.'),D:O(\"IRT histograms spontaneously.\",'IRT needs timed events not snapshots.'),});

Q("mod05-q33","Any-instance-inside-interval scoring with long bins after 10-second yell MOST risks interpreters assuming:","B","CHH Chapter 4, pp. 106–107",{A:O(\"Whole-interval understatement bias.\",'This describes partial-interval style inflation risk.'),B:O(\"Sustained yelling filled the interval though only a fleeting bout occurred.\",'Partial-interval fosters sustained-looking graphs from brief elevations.'),C:O(\"Automatic reinforcement masked everything.\",'Contingency analysis separate.'),D:O(\"MO abolished yell reinforcers permanently.\",'MO logic distinct.'),});

Q("mod05-q34","Dense classrooms often justify:","D","CHH Chapter 4, pp. 104–108",{A:O(\"Deleting definitions.\",'Definitions remain mandatory.'),B:O(\"Guessing counts.\",'Empiricism forbids fabrication.'),C:O(\"Banning graphs.\",'Graphs encouraged.'),D:O("Discontinuous sampling with documented interval/probe parameters and honest bias caveats.","CHH acknowledges logistics guiding method choice plus interpretation discipline."),});

Q("mod05-q35","Permanent products help when:","A","CHH Chapter 4, pp. 113–116",{A:O(\"Live observation is costly yet durable traces index the behavior.\",'Worksheets, videos, damage tallies extend measurement.'),B:O(\"Extinction completed beforehand always.\",'Unrelated condition.'),C:O(\"Latency banned universally.\",'Latency still viable elsewhere.'),D:O(\"Stakeholders veto data.\",'Stakeholders integrated differently.'),});

Q("mod05-q36","Choosing event versus duration recording hinges FIRST on:","B","CHH Chapter 4, pp. 96–118",{A:O(\"Palette popularity.\",'Trivial.'),B:O("Whether stakeholders care about discrete episodes or total time-in-behavior.","Dimensional question drives tactic selection."),C:O(\"Mandatory partial-interval rules.\",'No universal mandate.'),D:O(\"Covert-only definitions.\",'Covert avoidance blocks accountability.'),});

Q("mod05-q37","Brief stereotypy flares under wide whole-interval bins MOST:","C","CHH Chapter 4, pp. 104–118",{A:O(\"Overestimate bursts automatically.\",'Whole-interval underestimates short bursts.'),B:O(\"Align perfectly with continuous duration without trade-offs.\",'Trade-offs persist.'),C:O("Under-detect short bursts because entire bin must fill to credit presence.","Wide bins exacerbate whole-interval insensitivity to brief behavior."),D:O(\"Replace social validity analysis.\",'Targeting remains separate.'),});

Q("mod05-q38","Measurement fidelity bridging Chapters 3–5 MOST means:","A","CHH Chapter 3, pp. 86–88; CHH Chapter 4, pp. 94–96; CHH Chapter 5, pp. 123–132",{A:O("Definitions, calibrated observers, and candid sampling choices keep graphs faithful to intended behavior.", "Fidelity couples selection + measurement + later IOA chapters."),B:O(\"Random punishment introduction.\",'Unrelated.'),C:O(\"Ignoring stakeholders.\",'Stakeholders remain in loop.'),D:O(\"Deleting baseline logic.\",'Baselines foundational.'),});

Q("mod05-q39","Desk gouges inventoried nightly as scratching evidence exemplifies:","D","CHH Chapter 4, pp. 113–115",{A:O(\"Pure latency tally.\",'Latency needs timers.'),B:O(\"Continuous momentary duplication.\",'MTS instantaneous.'),C:O(\"IRT averaging exclusively.\",'IRT spaces responses.'),D:O(\"Permanent product supplemented measurement proxying topography.\",'Traces corroborate responses when aligned with definitions.'),});

Q("mod05-q40","Widening whole-interval bins without other changes MOST exacerbates:","A","CHH Chapter 4, pp. 106–107",{A:O(\"Difficulty qualifying brief bursts that never fill widening bins entirely.\",'Longer uninterrupted engagement required marks interval+.'),B:O(\"Sudden punishment artifact.\",'Unrelated caricature.'),C:O(\"Momentary instantaneous inflation.\",'Wrong tactic caricature.'),D:O(\"IRT collapse.\",'Unrelated caricature.'),});

Q("mod05-q41","Mislabeling cumulative session minutes as:","C","CHH Chapter 4, pp. 96–99",{A:O(\"Latency while actually summing durations.\",'Dimension mis-specification threatens interpretation.'),B:O(\"Rate while graphing durations.\",'Mislabel analogous.'),C:O("\"Latency\" when tallying sums of durations across trials rather than initiation delays.","Latency tracks cue-to-response times—not summed engagement minutes."),D:O(\"Momentary instantaneous counts.\",'Category error.'),});

Q("mod05-q42","Selecting a measurement method FINAL step after:","B","CHH Chapter 4, pp. 94–118 — decision flow",{A:O(\"Posting social media teaser graphs.\",'Unserious caricature.'),B:O("Clarifying the referral dimensional question matching socially valid operational definitions.", "Dimensional alignment precedes procedural tactic selection."),C:O(\"Guessing IOA arbitrarily.\",'IOA disciplined later.'),D:O(\"Running FA without referrals.\",'Sequencing mis-ordered caricature.'),});

Q("mod05-q43","Hybrid plans logging event counts plus summed bout minutes simultaneously track:","D","CHH Chapter 4, pp. 96–105",{A:O(\"Purely magnitude.\",'Hybrid described frequency + duration.'),B:O(\"Only momentary instantaneous states.\",'Continuous dimension blend differs.'),C:O(\"Only respondent extinction velocities.\",'Unrelated caricature.'),D:O("Distinct dimensions—instances per session and temporal engagement—they must interpret separately.", "Multiple dimensions permissible when rationales disclosed."),});

Q("mod05-q44","Video coding sessions later MOST preserves:","C","CHH Chapter 4, pp. 104–117 — technology-assisted observation",{A:O(\"Respondent extinction automatically.\",'Unrelated caricature.'),B:O(\"Elimination of definitions.\",'Definitions still necessary.'),C:O(\"Permanent trace enabling repeated passes albeit with coder fatigue considerations.\",'Archival media approximates delayed continuous review.'),D:O(\"Guaranteed unbiased partial-interval magically.\",'Bias persists.'),});

Q("mod05-q45","Discontinuous tactic choice without noting known biases MOST violates:","A","CHH Chapter 4, pp. 104–108",{A:O(\"Empirical humility about summaries versus actual engagement.\",'CHH stresses transparent interpretation reflecting measurement limits.'),B:O(\"Legal caregiver consent magically.\",'Ethics caricature unrelated.'),C:O(\"Reinforcer magnitude laws.\",'Separate domain.'),D:O(\"MO abolishing arcs exclusively.\",'Unrelated caricature.'),});

Q("mod05-q46","IOA deepening trustworthiness primarily elaborated in:","B","CHH Chapter 5, pp. 123–132",{A:O(\"Chapter 2 respondent extinction exclusively.\",'Wrong chapter specialization.'),B:O("Chapter 5 after foundational measurement dimensional choices stabilize.", "Measurement quality chapter expands agreement tactics."),C:O(\"Fiction appendix.\",'Textbook appendix irrelevant.'),D:O(\"Behavior chain games alone.\",'Unsupported caricature.'),});

Q("mod05-q47","Selecting momentary probes for approximate \"on-task\" engagement acknowledges:","D","CHH Chapter 4, pp. 107–108",{A:O(\"Certainty capturing every micromovement automatically.\",'MTS sacrifices precision for feasibility.'),B:O(\"Ignoring operational definitions permanently.\",'Definitions remain required.'),C:O(\"Zero stakeholder input.\",'Significance still applies.'),D:O(\"Trade-off between practicality and risking misses between instantaneous scans.\",'CHH urges matching logic to logistical limits.'),});

Q("mod05-q48","Counting shredded paperwork after session as disruption evidence mirrors:","C","CHH Chapter 4, pp. 113–115",{A:O(\"Momentary instantaneous sampling purely.\",'MTS instantaneous.'),B:O(\"Respondent extinction graphing exclusively.\",'Unrelated caricature.'),C:O(\"Permanent product supplemented measurement.\",'Residual products index behavior when correlated with ops definitions.'),D:O(\"Whole-interval instantaneous fusion.\",'Nonsense pairing.'),});

Q("mod05-q49","Workbook vignette aligning referral definitions before observer calibration MOST matches chain:","C","CHH Chapter 3, pp. 86–87; CHH Chapter 4, pp. 94–96",{A:O(\"Graph before defining behavior.\",'Reversed order.'),B:O(\"Select punishment before measuring.\",'Sequentially unsound caricature.'),C:O("Operational definition → dimensional choice → tactic → IOA probes when feasible.", "Sound sequencing parallels extension chain reminders."),D:O(\"scatterplot fad before stakeholder contact.\",'Sequentially unsound caricature.'),});

Q("mod05-q50","Integrated takeaway for Selecting + Measuring modules:","A","CHH Chapter 3, pp. 68–90; CHH Chapter 4, pp. 94–119",{A:O("Operationalize socially significant targets—then marry dimensions to recording tactics whose biases supervisors disclose.", "This mirrors Cooper et al.: applied targets feed accountable measurement."),B:O(\"Pick sampling tactics blindly before stakeholder agreement.\",'Reversed caricature.'),C:O(\"Replace measurement with anecdotes once FEELING confident.\",'Anti-empirical caricature.'),D:O(\"Ignore logistics entirely.\",'CHH pragmatically acknowledges constraints.'),});

function emit(row) {
  const { id, stem, cor, loc, bundle } = row;
  const j = JSON.stringify(
    {
      A: { text: bundle.A.text, rationale: bundle.A.rationale },
      B: { text: bundle.B.text, rationale: bundle.B.rationale },
      C: { text: bundle.C.text, rationale: bundle.C.rationale },
      D: { text: bundle.D.text, rationale: bundle.D.rationale },
    },
    null,
    2,
  );
  const pretty = j.replace(/^/gm, "    ");
  return `  bx(\n    ${JSON.stringify(id)},\n    ${JSON.stringify(stem)},\n    "${cor}",\n${pretty},\n    ${JSON.stringify(loc)}\n  )`;
}

const header = `import type { BDSQuestion } from "@/lib/content-types";

/** Workbook chapter 3 (mod05 — Selecting \\u002b Measuring) — unique items; aligns with Cooper et al. Ch. 3 (select/define targets) \\u0026 Ch. 4 (measurement dimensions/methods). */

function attachChhLocator(rationale: string, locator: string): string {
  if (!locator.trim()) return rationale;
  if (/\\(\\s*CHH Chapter \\d+[^)]*\\bp[\\s.]?\\d+/i.test(rationale)) return rationale;
  if (/\\bCHH Chapter \\d+[^.]*?\\bp[\\s.]?\\d+/i.test(rationale)) return rationale;
  const t = rationale.trimEnd();
  if (t.endsWith(".")) return \`\${t.slice(0, -1)} (\${locator}).\`;
  return \`\${t} (\${locator}).\`;
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

export const CHAPTER_03_WORKBOOK_QUIZ_BANK: BDSQuestion[] = [
`;

if (rows.length !== 50) {
  console.error("Expected 50 items, got", rows.length);
  process.exit(1);
}

fs.writeFileSync(outPath, `${header}${rows.map(emit).join(",\n")}\n];\n`);
