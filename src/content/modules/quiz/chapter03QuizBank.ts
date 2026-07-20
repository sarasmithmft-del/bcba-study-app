import type { BDSQuestion } from "@/lib/content-types";

/**
 * Cooper/Heron/Heward — workbook Chapter 3 module (Selecting & Measuring Behavior).
 * Fifty unique stems mirroring CHH Chapters 3–5 workbook excerpts (Pearson Global 3rd ed. TOC anchors).
 * Crosswalk emphasis: Domain F (assessment) plus Domain C (measurement,
 * display/interpretation biases, baseline, IOA)—with Domain E when vignettes involve honest reporting.
 */

function attachChhLocator(rationale: string, locator: string): string {
  if (!locator.trim()) return rationale;
  if (/\(\s\bp[\s.]?\d+/i.test(rationale)) return rationale;
  if (/\bCHH Chapter \d+[^.]*?\bp[\s.]?\d+/i.test(rationale)) return rationale;
  const t = rationale.trimEnd();
  if (t.endsWith(".")) return `${t.slice(0, -1)} (${locator}).`;
  return `${t} (${locator}).`;
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
  bx(
    "mod05-q1",
    "According to Cooper et al. Chapter 3, systematic assessment prior to intervention MOST centrally aims to:",
    "B",
    {
      A: {
        text: "Finalize billing codes before observing anything measurable.",
        rationale:
          "Administrative paperwork follows disciplined assessment—not replaces descriptive groundwork.",
      },
      B: {
        text: "Gather information about current repertoires, contexts, and stakeholder priorities feeding accountable intervention plans.",
        rationale:
          "CHH Chapter 3 foregrounds assessment organizing facts before committing scarce therapeutic resources.",
      },
      C: {
        text: "Eliminate caregiver narratives permanently from clinical records.",
        rationale:
          "Stakeholder narratives remain hypothesis sources requiring corroboration—not wholesale deletion.",
      },
      D: {
        text: "Prove experimental functional analyses concluded prior to intake paperwork.",
        rationale:
          "Experimental analyses depend on hypotheses assessment nurtures—they rarely precede every intake wholesale.",
      },
    },
    "CHH Chapter 3, pp. 68–69 — purpose of behavioral assessment within ABA service delivery",
  ),
  bx(
    "mod05-q2",
    "Assessment positioned early in Chapter 3 MOST contrasts with:",
    "D",
    {
      A: {
        text: "Collaboratively interviewing caregivers about routines affecting referrals.",
        rationale:
          "Interviews exemplify lawful assessment—not contrasts.",
      },
      B: {
        text: "Reviewing individualized education plans before observing classrooms.",
        rationale:
          "Archival review informs hypotheses aligned with Chapter 3 sequencing.",
      },
      C: {
        text: "Sketching provisional hypotheses about socially urgent repertoires.",
        rationale:
          "Hypothesis articulation embodies disciplined assessment—not avoidance.",
      },
      D: {
        text: "Launching packaged interventions without identifying measurable targets grounded in referral realities.",
        rationale:
          "Chapter 3 warns against skipping inventory stages that tether tactics to observable stakeholder stakes.",
      },
    },
    "CHH Chapter 3, pp. 68–69 — assessment preceding individualized intervention planning",
  ),
  bx(
    "mod05-q3",
    "Baseline / pretreatment measurement emphasized alongside assessment MOST directly enables:",
    "C",
    {
      A: {
        text: "Deleting socially valid rationales once graphs tint green.",
        rationale:
          "Social validity persists regardless of graphed hues.",
      },
      B: {
        text: "Avoiding operational definitions indefinitely.",
        rationale:
          "Assessment pushes definitions—not indefinite postponement.",
      },
      C: {
        text: "Comparing future intervention phases against credible estimates of present levels and variability.",
        rationale:
          "Assessment-linked baselines furnish contrast anchors accountable interpretations demand.",
      },
      D: {
        text: "Guaranteeing punishment tactics ethically regardless of context.",
        rationale:
          "Ethics hinge on individualized analyses—not blanket punishment mandates.",
      },
    },
    "CHH Chapter 3, pp. 69–71 — linking assessment data to evaluating behavior change",
  ),
  bx(
    "mod05-q4",
    "Chapter 3 treats archived records (IEP snippets, nursing notes, incident summaries) MOST as:",
    "A",
    {
      A: {
        text: "Hypothesis fodder contextualizing risks, medications, bans, and earlier measurement tries.",
        rationale:
          "CHH charts record review among assessment modalities accelerating informed observation agendas.",
      },
      B: {
        text: "Final authoritative diagnoses replacing observation permanently.",
        rationale:
          "Records complement—they rarely substitute contemporaneous behavioral measurement wholesale.",
      },
      C: {
        text: "Irrelevant paperwork ethically shredded absent caregiver consent.",
        rationale:
          "Records frequently remain clinically pertinent even when imperfect.",
      },
      D: {
        text: "Proof motivating operations vanished clinically.",
        rationale:
          "Records hint hypotheses—they seldom certify abolishing effects outright.",
      },
    },
    "CHH Chapter 3, p. 70 — review of records and available data",
  ),
  bx(
    "mod05-q5",
    "Assessment interviews with caregivers MOST serve Chapter 3 aims when clinicians:",
    "B",
    {
      A: {
        text: "Treat quoted anecdotes as immutable experimental proofs absent behavioral corroboration.",
        rationale:
          "Recall summaries seed hypotheses—they rarely finalize causal demonstrations alone.",
      },
      B: {
        text: "Translate stakeholder narratives into observable priorities guiding what deserves dense sampling later.",
        rationale:
          "CHH distinguishes indirect modalities narrowing focal behaviors awaiting operational definitions.",
      },
      C: {
        text: "Promise caregivers graphs require zero operational definitions afterward.",
        rationale:
          "Definitions deepen precisely because narratives mature.",
      },
      D: {
        text: "Skip documenting hypotheses entirely for confidentiality aesthetics.",
        rationale:
          "Documentation anchors accountable continuity.",
      },
    },
    "CHH Chapter 3, pp. 70–73 — interviews as assessment tools generating hypotheses",
  ),
  bx(
    "mod05-q6",
    "When Chapter 3 contrasts assessment versus rushing premature intervention packages, analysts MOST guard against:",
    "C",
    {
      A: {
        text: "Ever measuring behavior analytically.",
        rationale:
          "Measurement exemplifies analytic humility—not villain caricatures.",
      },
      B: {
        text: "Collaborating with classroom teachers altogether.",
        rationale:
          "Collaboration aligns stakeholder urgency—not violates Chapter 3.",
      },
      C: {
        text: "Selecting flashy tactics disconnected from assessed ecological constraints or stakeholder-valued outcomes.",
        rationale:
          "Assessment insists relevance—not toolkit roulette divorced from referral histories.",
      },
      D: {
        text: "Using dimensional vocabulary introduced later in Chapter 4.",
        rationale:
          "Later measurement chapters elaborate tactics assessment prepares analysts to wield responsibly.",
      },
    },
    "CHH Chapter 3, pp. 68–71 — grounding tactics in assessed referral realities",
  ),
  bx(
    "mod05-q7",
    "Chapter 3 emphasizes ongoing monitoring/evaluation threaded through programs MOST meaning clinicians:",
    "A",
    {
      A: {
        text: "Recycle assessment habits intermittently verifying targets remain socially urgent and measurable.",
        rationale:
          "CHH stresses evaluation woven throughout—not isolated intake rituals forgotten afterward.",
      },
      B: {
        text: "Pause measurement permanently once mastery banners hang.",
        rationale:
          "Continuous accountability contradicts abandonment caricatures.",
      },
      C: {
        text: "Discard stakeholder disagreement silently.",
        rationale:
          "Disagreement invites respectful reassessment—not suppression.",
      },
      D: {
        text: "Replace graphs with prestige testimonials exclusively.",
        rationale:
          "Empirical footing persists alongside stakeholder rapport.",
      },
    },
    "CHH Chapter 3, pp. 69–71 — evaluation integrated across intervention timelines",
  ),
  bx(
    "mod05-q8",
    "Within Chapter 3 sequencing, introducing dimensional quantities (counts, durations, latency analogues) BEST waits until:",
    "D",
    {
      A: {
        text: "Stakeholders veto socially significant rationales unanimously.",
        rationale:
          "Vetoes invite negotiation—not dimensional bans.",
      },
      B: {
        text: "Experimental FA concludes absent hypotheses.",
        rationale:
          "Hypotheses precede intensive experimentation caricatures invert sequencing.",
      },
      C: {
        text: "Whole-interval probes mandated universally regardless of referral question.",
        rationale:
          "Sampling tactics hinge on dimensional alignment unpacked Chapter 4—not universal fiat.",
      },
      D: {
        text: "Assessment narrows candidate behaviors deserving operational definitions aligned with referral questions.",
        rationale:
          "Chapter 3 sequencing anchors definitional clarity before dimensional bookkeeping expands systematically.",
      },
    },
    "CHH Chapter 3, pp. 68–71 bridging toward operational definitions & CHH Chapter 4 measurement dimensions",
  ),
  bx(
    "mod05-q9",
    "Caregivers insist bedtime routines—not laboratory convenience tasks—drive referral urgency. MOST aligns with Cooper Chapter 3 emphasis on:",
    "B",
    {
      A: { text: "Investigator convenience dominating target lists absent stakeholder dialogue.", rationale: "Applied posture foregrounds stakeholder-valued outcomes—not lone investigator hobbies." },
      B: { text: "Social significance: targets tied to routines communities and families actually care about.", rationale: "CHH treats socially significant behavior selection as foundational applied logic." },
      C: { text: "Deleting operational definitions once caregivers agree verbally.", rationale: "Agreement deepens definitional precision—not deletes measurement anchors." },
      D: { text: "Mandatory reliance on punitive tactics exclusively.", rationale: "Assessment informs tactic classes—not punitive defaults caricatures." },
    },
    "CHH Chapter 3, pp. 78–83 — social significance of potential target behaviors",
  ),
  bx(
    "mod05-q10",
    "Habilitation-oriented selection logic MOST prioritizes repertoires that:",
    "A",
    {
      A: { text: "Expand future contacts with reinforcing communities, vocational options, or adaptive routines.", rationale: "CHH frames habilitation as widening meaningful reinforcement histories—not shrinking ecological access." },
      B: { text: "Trap learners exclusively inside restrictive stereotypes absent stakeholder negotiation.", rationale: "Rigid warehousing contradicts habilitative ethics caricatures." },
      C: { text: "Avoid measurable definitions permanently.", rationale: "Habilitation still demands countable behavioral traction." },
      D: { text: "Eliminate graphs whenever families attend meetings.", rationale: "Measurement transparency complements caregiver participation caricatures." },
    },
    "CHH Chapter 3, pp. 78–82 — habilitation-oriented target selection",
  ),
  bx(
    "mod05-q11",
    "Two observers apply different unstated \"tantrum\" criteria producing incompatible counts. FIRST analytic failure:",
    "C",
    {
      A: { text: "Momentary probe spacing exclusively.", rationale: "Sampling pathology follows definitional drift—not causes it outright." },
      B: { text: "Scatterplot palettes exclusively.", rationale: "Cosmetic plotting trivia orthogonal definitional fidelity." },
      C: { text: "Operational definitions insufficiently specifying onset/offset/topography observers must score.", rationale: "CHH insists definitions explicit enough for agreement-ready measurement." },
      D: { text: "Respondent extinction pacing exclusively.", rationale: "Respondent arcs orthogonal definitional ambiguity caricatures." },
    },
    "CHH Chapter 3, pp. 86–88 — operational definitions enabling observer agreement",
  ),
  bx(
    "mod05-q12",
    "Life-threatening aggression competes with teaching a polite greeting during one condensed week. MOST ethical prioritization:",
    "D",
    {
      A: { text: "Coin-flip choreography absent documentation.", rationale: "Randomizing imminent harm violates accountability caricatures." },
      B: { text: "Defer all safety planning until greetings fluency criterion.", rationale: "Safety emergencies supersede elective microskills when schedules collide." },
      C: { text: "Suppress caregiver anxiety narratives legally.", rationale: "Ethics forbid silencing stakeholder alarm caricatures." },
      D: { text: "Address imminent injury-risk behaviors before lower-risk cosmetic repertoires when resources collide.", rationale: "CHH prioritization narratives emphasize acute harm reduction sequencing responsibly." },
    },
    "CHH Chapter 3, pp. 84–85 — prioritizing urgent versus elective targets",
  ),
  bx(
    "mod05-q13",
    "Indirect FAST-style checklists administered away from behavior streams MOST accelerate:",
    "B",
    {
      A: { text: "Final functional classifications absent corroborating observation.", rationale: "Indirect outputs remain hypotheses pending behavioral verification." },
      B: { text: "Hypotheses narrowing what clinicians deserve dense observation sessions next.", rationale: "CHH treats indirect modalities as hypothesis generators complementary—not replacements—for measurement." },
      C: { text: "Elimination of descriptive observation.", rationale: "Indirect complements—not deletes—direct sampling caricatures." },
      D: { text: "Automatic reinforcement proofs exclusively.", rationale: "Hypothesized reinforcement functions await corroboration caricatures." },
    },
    "CHH Chapter 3, pp. 70–77 — multimethod assessment pathways",
  ),
  bx(
    "mod05-q14",
    "Transparent written mastery criteria MOST give interdisciplinary teams:",
    "A",
    {
      A: { text: "Shared benchmarks for thinning reinforcement or fading supports without vague intuition alone.", rationale: "CHH ties criteria statements to observable performance indicators stakeholders can revisit." },
      B: { text: "Permission fabricating durations nightly.", rationale: "Falsification contradicts empirical commitments caricatures." },
      C: { text: "License skipping graphs permanently.", rationale: "Graph accountability persists alongside criterion clarity caricatures." },
      D: { text: "Immunity from IOA probes permanently.", rationale: "Agreement tactics deepen later—not vanish caricatures." },
    },
    "CHH Chapter 3, pp. 89–90 — criteria for acceptable behavior change",
  ),
  bx(
    "mod05-q15",
    "Complex chained toothbrushing routines MOST demand definitional scaffolding because:",
    "C",
    {
      A: { text: "Respondent extinction forbids chaining.", rationale: "Chaining orthogonal respondent extinction caricatures." },
      B: { text: "Momentary probes forbid sequential behaviors.", rationale: "Sampling orthogonal instructional chains caricatures." },
      C: { text: "Component responses must be identifiable before proportional measurement tactics apply.", rationale: "CHH expects analyzable links between complex targets and measurable components." },
      D: { text: "Stakeholders forbid task analyses universally.", rationale: "Stakeholders typically endorse clarity—not banning decomposition caricatures." },
    },
    "CHH Chapter 3, pp. 86–87 — analyzing complex behavior chains before measurement",
  ),
  bx(
    "mod05-q16",
    "Rigid \"normalization-only\" rationales without individualized habilitation dialogue MOST risk:",
    "B",
    {
      A: { text: "Excess measurement transparency.", rationale: "Normalization debates concern values—not transparency overflow caricatures." },
      B: { text: "Pressuring conformity agendas conflicting with stakeholder-valued habilitation trajectories.", rationale: "CHH stresses socially valid negotiations—not blanket imitation mandates caricatures." },
      C: { text: "Automating reinforcement histories.", rationale: "Histories remain individualized—not automated caricatures." },
      D: { text: "Deleting baseline logic permanently.", rationale: "Baselines remain foundational caricatures." },
    },
    "CHH Chapter 3, pp. 78–83 — normalization versus individualized social validity",
  ),
  bx(
    "mod05-q17",
    "Operational definitions referencing \"attention\" remain inadequate until planners specify:",
    "D",
    {
      A: { text: "Therapist shoe sizes exclusively.", rationale: "Irrelevant trivia caricatures." },
      B: { text: "Scatterplot quadrant palettes exclusively.", rationale: "Cosmetic trivia caricatures." },
      C: { text: "Annual astrology forecasts exclusively.", rationale: "Nonbehavioral folklore caricatures." },
      D: { text: "Observable trunk/posture/eye-orientation anchors observers code reliably.", rationale: "CHH insists covert shorthand translates into countable behavioral anchors aligned with referrals." },
    },
    "CHH Chapter 3, pp. 86–88 — translating constructs into observable responses",
  ),
  bx(
    "mod05-q18",
    "Stakeholders split whether vocational checkout fluency or aggression reduction deserves precedence FIRST. MOST defensible analytic posture:",
    "A",
    {
      A: { text: "Document conflicting priorities transparently while sequencing measurable interim bridges honoring safety.", rationale: "CHH emphasizes collaborative prioritization—not silent omission caricatures." },
      B: { text: "Delete caregiver perspectives electronically.", rationale: "Stakeholder erasure violates applied ethics caricatures." },
      C: { text: "Clone investigator priorities blindly.", rationale: "Applied posture rejects investigator convenience caricatures." },
      D: { text: "Postpone definitions indefinitely awaiting consensus fantasies.", rationale: "Operational drafting proceeds alongside mediation caricatures." },
    },
    "CHH Chapter 3, pp. 84–86 — negotiating prioritization under stakeholder disagreement",
  ),
  bx(
    "mod05-q19",
    "Assessment distinguishes hypotheses from conclusions MOST clearly when supervisors insist:",
    "C",
    {
      A: { text: "Indirect interviews finalize maintaining variables absent manipulating contingencies.", rationale: "Functional clarity demands behavioral corroboration—not interview fiat caricatures." },
      B: { text: "Graph colors substitute for dimensional definitions.", rationale: "Cosmetics never replace definitional accountability caricatures." },
      C: { text: "Statements remain provisional pending corroborating observations or experiments ethically arranged.", rationale: "CHH frames assessment outputs as iterative—not frozen dogma caricatures." },
      D: { text: "Measurement bans caregiver attendance.", rationale: "Measurement embraces stakeholder participation caricatures forbidden." },
    },
    "CHH Chapter 3, pp. 68–73 — hypotheses versus definitive conclusions",
  ),
  bx(
    "mod05-q20",
    "Selecting measurement tactics BEFORE locking operational definitions MOST threatens:",
    "B",
    {
      A: { text: "Replication ethos exclusively.", rationale: "Replication orthogonal sequencing caricatures." },
      B: { text: "Observer agreement because ambiguous response classes corrupt dimensional bookkeeping.", rationale: "Chapter sequencing insists definitional clarity precedes instrumentation discipline bridging Chapter 4." },
      C: { text: "Graph animation budgets exclusively.", rationale: "Cosmetic trivia caricatures." },
      D: { text: "Scatterplot etiquette exclusively.", rationale: "Irrelevant trivia caricatures." },
    },
    "CHH Chapter 3, pp. 86–88 bridging definitional clarity before Chapter 4 tactics",
  ),
  bx(
    "mod05-q21",
    "Separate operational codes for hitting versus throwing aggression MOST support:",
    "D",
    {
      A: { text: "Assuming identical reinforcement functions blindly.", rationale: "Topographies may correlate with differing contingencies—not assumed identical caricatures." },
      B: { text: "Ignoring caregiver narratives wholesale.", rationale: "Stakeholders inform prioritization—not disposable caricatures." },
      C: { text: "Deleting measurement altogether.", rationale: "Measurement persists—classification precision improves fidelity caricatures." },
      D: { text: "Agreement checks on narrower classes—or justified collapsing rules documented explicitly.", rationale: "CHH encourages definitional specificity fostering trustworthy graphs." },
    },
    "CHH Chapter 3, pp. 84–87 — collapsing versus separating response classes",
  ),
  bx(
    "mod05-q22",
    "Integrated Chapter 3 posture BEFORE borrowing Chapter 4 dimensional vocabulary MOST insists:",
    "A",
    {
      A: { text: "Referral complaints translate into observable targets stakeholders endorse measuring.", rationale: "Applied sequencing insists definitional social validity precedes dimensional bookkeeping expansions." },
      B: { text: "Measurement tactics dictate stakeholder values retroactively.", rationale: "Values guide measurement—not inverse caricatures." },
      C: { text: "Graph novelty dictates target importance.", rationale: "Cosmetics mislead prioritization caricatures." },
      D: { text: "Interview anecdotes permanently replace graphs.", rationale: "Indirect modalities funnel—not erase—measurement caricatures." },
    },
    "CHH Chapter 3, pp. 68–90 — integrating assessment, definitions, criteria before measurement tactics",
  ),
  bx(
    "mod05-q23",
    "Counts divided by observation minutes quantify:",
    "B",
    {
      A: { text: "Cumulative bout duration exclusively.", rationale: "Duration aggregates temporal engagement—not occurrences normalized over time caricatures." },
      B: { text: "Rate (frequency/time).", rationale: "CHH Chapter 4 defines rate relative to observation intervals responsibly." },
      C: { text: "Latency exclusively.", rationale: "Latency captures initiation delays—not normalized counts caricatures." },
      D: { text: "Momentary instantaneous percentages exclusively.", rationale: "Momentary sampling summarizes probes—not quotient counts caricatures." },
    },
    "CHH Chapter 4, pp. 96–102 — frequency and rate",
  ),
  bx(
    "mod05-q24",
    "Summed minutes with fingers contacting keyboard keys across algebra period measures:",
    "D",
    {
      A: { text: "Latency cue-to-keystroke exclusively.", rationale: "Latency indexes initiation—not cumulative engagement caricatures." },
      B: { text: "IRT between keystrokes exclusively.", rationale: "IRT spaces successive instances—not summed temporal engagement caricatures." },
      C: { text: "Momentary probe percentages exclusively.", rationale: "Momentary instantaneous snapshots differ." },
      D: { text: "Duration of topography occupying cumulative timeline.", rationale: "Duration aggregates temporal extent behavior occupies responsibly." },
    },
    "CHH Chapter 4, pp. 96–103 — duration",
  ),
  bx(
    "mod05-q25",
    "Latency clocks MOST commonly capture:",
    "A",
    {
      A: { text: "Elapsed interval between instructional onset cues and first qualified learner response.", rationale: "Latency indexes initiation readiness following signaled opportunities responsibly." },
      B: { text: "Total session minutes topography persists summed.", rationale: "That depicts duration—not latency caricatures." },
      C: { text: "Any fractional interval occupancy summaries exclusively.", rationale: "Interval aggregates distinct caricatures." },
      D: { text: "Newton grip amplitude exclusively.", rationale: "Magnitude dimension caricatures distinct." },
    },
    "CHH Chapter 4, pp. 96–97 — latency",
  ),
  bx(
    "mod05-q26",
    "IRT records:",
    "C",
    {
      A: { text: "Instantaneous probe hits exclusively.", rationale: "Momentary sampling caricatures distinct." },
      B: { text: "Whole-interval reinforcement deliveries exclusively.", rationale: "Irrelevant caricatures." },
      C: { text: "Elapsed time separating successive qualifying instances.", rationale: "Interresponse time spaces discrete occurrences responsibly." },
      D: { text: "Permanent product weights exclusively.", rationale: "Products distinct caricatures." },
    },
    "CHH Chapter 4, pp. 96–97 — interresponse time",
  ),
  bx(
    "mod05-q27",
    "Grip dynamometers indexing peak Newtons quantify:",
    "B",
    {
      A: { text: "Latency exclusively.", rationale: "Latency temporal—not force caricatures." },
      B: { text: "Response magnitude/intensity.", rationale: "CHH Chapter 4 discusses measurable magnitude dimensions responsibly." },
      C: { text: "Probe-derived prevalence exclusively.", rationale: "Momentary prevalence caricatures distinct." },
      D: { text: "Respondent extinction velocity exclusively.", rationale: "Respondent extinction caricatures orthogonal magnitude instrumentation." },
    },
    "CHH Chapter 4, pp. 96–98 — response magnitude",
  ),
  bx(
    "mod05-q28",
    "Traditional event counters increment when:",
    "A",
    {
      A: { text: "Discrete operationalized instances occur.", rationale: "Event recording tallies countable topography occurrences responsibly." },
      B: { text: "Behavior occupies entire observation bins uninterrupted.", rationale: "Whole-interval criterion caricatures distinct." },
      C: { text: "Random probes strike unrelated trivia exclusively.", rationale: "Instrumentation fantasies caricatures." },
      D: { text: "Scatterplots tint aesthetically exclusively.", rationale: "Cosmetic trivia caricatures." },
    },
    "CHH Chapter 4, pp. 104–105 — event recording",
  ),
  bx(
    "mod05-q29",
    "Continuous observation schedules MOST pursue:",
    "D",
    {
      A: { text: "Annual cafeteria snapshots exclusively.", rationale: "Sparse snapshots caricatures contradict continuity ethos." },
      B: { text: "Deleting dimensional definitions.", rationale: "Definitions prerequisite caricatures forbid deletion." },
      C: { text: "Guessing durations nightly absent timers.", rationale: "Fabrication violates empirical commitments caricatures." },
      D: { text: "Capturing qualifying instances continuously subject practical feasibility constraints.", rationale: "CHH contrasts continuous streams versus discontinuous shortcuts responsibly acknowledging logistics." },
    },
    "CHH Chapter 4, pp. 104–108 — continuous recording orientation",
  ),
  bx(
    "mod05-q30",
    "Partial-interval scoring MOST risks:",
    "B",
    {
      A: { text: "Underestimating prevalence whenever brief touches occur.", rationale: "Partial-interval errs toward overstating—not understating—sustained-looking engagement caricatures." },
      B: { text: "Inflating prevalence because momentary flashes still mark entire intervals present.", rationale: "Brief contacts score interval yes—inflating sustained depiction caricatures responsibly trimmed narrative." },
      C: { text: "Computing latency distributions spontaneously.", rationale: "Latency analytics demand timestamps caricatures distinct." },
      D: { text: "Measuring Newton forces spontaneously.", rationale: "Magnitude instrumentation caricatures orthogonal interval aggregates." },
    },
    "CHH Chapter 4, pp. 106–107 — partial-interval recording bias",
  ),
  bx(
    "mod05-q31",
    "Whole-interval scoring MOST masks:",
    "A",
    {
      A: { text: "Brief intense bursts occupying only portions of bins.", rationale: "Intervals credit presence only when behavior spans entire window—silencing mid-interval flashes caricatures responsibly trimmed narrative." },
      B: { text: "Latency initiation delays exclusively.", rationale: "Latency dimensional caricatures distinct." },
      C: { text: "Scatterplot correlations exclusively.", rationale: "Irrelevant caricatures." },
      D: { text: "Permanent products exclusively.", rationale: "Products caricatures distinct pathway." },
    },
    "CHH Chapter 4, pp. 106–107 — whole-interval recording bias",
  ),
  bx(
    "mod05-q32",
    "Momentary time sampling MOST omits:",
    "C",
    {
      A: { text: "Episodes occurring precisely during instantaneous probes erroneously absent.", rationale: "Opposite miss-direction caricatures exaggerated." },
      B: { text: "Perfect bout reconstruction guarantees spontaneously.", rationale: "MTS approximates—not reconstructs perfectly caricatures." },
      C: { text: "Behavior unfolding strictly between predetermined instantaneous probes.", rationale: "Snapshots risk silent clinically relevant elevations intervening probes caricatures responsibly trimmed narrative." },
      D: { text: "IRT distributions spontaneously.", rationale: "IRT analytics demand timed successive responses caricatures." },
    },
    "CHH Chapter 4, pp. 107–108 — momentary time sampling limitations",
  ),
  bx(
    "mod05-q33",
    "Teachers score aggression present whenever ANY instance fires inside lengthy bins yet bursts lasted seconds midway. MOST interpretation hazard:",
    "B",
    {
      A: { text: "Underestimating aggression visually versus duration totals.", rationale: "Partial-interval style aggregation inflates sustained depiction caricatures—not underestimates caricatures matching stem." },
      B: { text: "Inferring aggression saturated entire bins though topography remained episodic.", rationale: "Brief contacts still mark intervals—inflating visually sustained narratives caricatures responsibly trimmed narrative." },
      C: { text: "Eliminating stakeholder interviews.", rationale: "Stakeholder modality caricatures orthogonal interval illusion." },
      D: { text: "Whole-interval understatement pathology exclusively.", rationale: "Stem depicts partial-interval-style inflation caricatures—not whole-interval underestimate caricatures." },
    },
    "CHH Chapter 4, pp. 106–107 — interpreting interval aggregates honestly",
  ),
  bx(
    "mod05-q34",
    "Dense classrooms frequently justify:",
    "D",
    {
      A: { text: "Deleting operational definitions permanently.", rationale: "Definitions remain legally obligatory caricatures." },
      B: { text: "Fabricating cumulative durations nightly absent timers.", rationale: "Fabrication violates empirical commitments caricatures." },
      C: { text: "Eliminating graphed accountability culturally.", rationale: "Graph accountability persists caricatures." },
      D: { text: "Discontinuous sampling with documented probe/interval parameters plus transparent bias caveats.", rationale: "CHH acknowledges logistical constraints shaping measurement choices responsibly." },
    },
    "CHH Chapter 4, pp. 104–108 — feasibility-informed measurement choices",
  ),
  bx(
    "mod05-q35",
    "Permanent product measurement shines when:",
    "A",
    {
      A: { text: "Live observation burdens clinicians yet durable traces remain aligned with operational definitions.", rationale: "Worksheets, recordings, environmental traces extend measurement responsibly." },
      B: { text: "Respondent extinction concludes universally beforehand.", rationale: "Irrelevant contingency caricatures." },
      C: { text: "Latency bans timers.", rationale: "Latency requires timing caricatures forbid bans." },
      D: { text: "Stakeholders forbid graphs universally.", rationale: "Stakeholders seldom forbid accountable graphs caricatures." },
    },
    "CHH Chapter 4, pp. 113–116 — measurement via permanent products",
  ),
  bx(
    "mod05-q36",
    "Selecting event versus duration protocols SHOULD hinge FIRST on:",
    "B",
    {
      A: { text: "Scatterplot decoration palettes exclusively.", rationale: "Cosmetic trivia caricatures." },
      B: { text: "Whether referrals emphasize discrete occurrences versus cumulative temporal engagement.", rationale: "Dimensional alignment drives instrumentation responsibly." },
      C: { text: "Mandatory partial-interval mandates universally.", rationale: "No universal mandates caricatures." },
      D: { text: "Covert-only constructs exclusively.", rationale: "Covert avoidance blocks accountable measurement caricatures." },
    },
    "CHH Chapter 4, pp. 96–118 — aligning measurement methods with dimensional questions",
  ),
  bx(
    "mod05-q37",
    "Brief stereotypy bursts spanning seconds under widening whole-interval bins MOST:",
    "C",
    {
      A: { text: "Overestimate bursts automatically.", rationale: "Whole-interval underestimates—not overestimates—brief topography caricatures." },
      B: { text: "Guarantee continuous bout reconstruction spontaneously.", rationale: "Whole-interval summarizes—not reconstructs perfectly caricatures." },
      C: { text: "Under-represent bursts because entire bins seldom satisfy continuous occupancy thresholds.", rationale: "Wide bins exacerbate probability topography fails spanning entire interval caricatures responsibly trimmed narrative." },
      D: { text: "Eliminate social validity analysis culturally.", rationale: "Targeting orthogonal sampling pathology caricatures." },
    },
    "CHH Chapter 4, pp. 104–118 — fitting interval parameters to topography",
  ),
  bx(
    "mod05-q38",
    "\"Measurement fidelity\" bridging definitional writing plus instrumentation MOST means:",
    "A",
    {
      A: { text: "Operational clarity plus calibrated observers plus candid sampling disclosures keep graphs faithful to intended behavior.", rationale: "Fidelity stitches Chapter 3 definitions with Chapter 4 tactics anticipating Chapter 5 IOA deepening responsibly." },
      B: { text: "Selecting punishers arbitrarily nightly.", rationale: "Punishment planning caricatures orthogonal fidelity narrative." },
      C: { text: "Publishing anecdotes absent graphs universally.", rationale: "Graph accountability persists caricatures." },
      D: { text: "Banning partial-interval culturally globally.", rationale: "Context dictates tactic—not bans caricatures." },
    },
    "CHH Chapter 3, pp. 86–88; CHH Chapter 4, pp. 94–96; CHH Chapter 5, pp. 123–132 — fidelity pathway overview",
  ),
  bx(
    "mod05-q39",
    "Scratch gauges inventoried nightly as topography evidence exemplifies:",
    "D",
    {
      A: { text: "Latency sampling exclusively.", rationale: "Latency temporal—not artifact tallies caricatures." },
      B: { text: "Momentary instantaneous duplication continuously.", rationale: "Momentary caricatures distinct measurement family." },
      C: { text: "IRT averaging exclusively.", rationale: "IRT spacing caricatures distinct." },
      D: { text: "Permanent-product supplemented measurement proxies aligned with definitions.", rationale: "Environmental traces supplement observation responsibly." },
    },
    "CHH Chapter 4, pp. 113–115 — correlates and products",
  ),
  bx(
    "mod05-q40",
    "Widening whole-interval bins absent other procedural tweaks MOST exacerbates:",
    "A",
    {
      A: { text: "Difficulty scoring brief bursts never occupying widening uninterrupted spans.", rationale: "Whole-interval demands continuous occupancy entire bin—wide bins worsen omission caricatures responsibly trimmed narrative." },
      B: { text: "Latency underestimation universally spontaneously.", rationale: "Latency caricatures orthogonal interval widening pathology." },
      C: { text: "Momentary inflation pathology exclusively spontaneously.", rationale: "Wrong tactic caricatures." },
      D: { text: "Respondent extinction universally spontaneously.", rationale: "Respondent caricatures orthogonal measurement pathology." },
    },
    "CHH Chapter 4, pp. 106–107 — parameter effects on whole-interval sensitivity",
  ),
  bx(
    "mod05-q41",
    "Therapist plots total minutes tantrums persisted each day but labels the Y-axis 'Latency to compliance.' Chapter 2/4 dimensional lapse MOST concerns:",
    "C",
    {
      A: {
        text: "Confusing rate with magnitude exclusively.",
        rationale:
          "Stem centers initiation timing vs summed engagement—not rate vs magnitude caricatures.",
      },
      B: {
        text: "Confusing respondent vs operant topography.",
        rationale:
          "Classification error differs from mislabeling summed minutes as latency (CHH dimensional vocabulary).",
      },
      C: {
        text: "Mislabeling duration totals as latency—latency clocks cue-to-first-response, not cumulative bout time.",
        rationale:
          "Domain C items test whether you guard dimensional definitions before interpreting graphs (verify task IDs in BACB PDF).",
      },
      D: {
        text: "Automatic reinforcement saturating measurement.",
        rationale:
          "Concept orthogonal to dimensional mislabeling caricatures.",
      },
    },
    "CHH Chapter 4, pp. 96–99 — duration vs latency distinctions",
  ),
  bx(
    "mod05-q42",
    "Before logging partial-interval gym engagement, MOST essential upstream steps include:",
    "B",
    {
      A: {
        text: "Purchasing influencer dashboard themes first.",
        rationale:
          "Cosmetic decisions do not precede definitional or social-validity work (CHH sequencing).",
      },
      B: {
        text: "Socially validated target plus operational definition observers rehearse—then match tactic to referral question.",
        rationale:
          "Domain F prioritization/definition precedes Domain C tactic selection—a standard exam storyline.",
      },
      C: {
        text: "Completing extinction bursts absent consent.",
        rationale:
          "Ethically unsound caricature unrelated to measurement readiness.",
      },
      D: {
        text: "Eliminating stakeholder interviews universally.",
        rationale:
          "Indirect tools remain valuable hypothesis generators—not banned outright caricatures.",
      },
    },
    "CHH Chapter 3–4 — definitions and socially endorsed targets precede instrumentation",
  ),
  bx(
    "mod05-q43",
    "Team graphs both discrete aggression counts per session AND cumulative aggression minutes nightly. MOST accurate analytic stance:",
    "D",
    {
      A: {
        text: "Force both series into identical interpretation without caveat.",
        rationale:
          "Multiple dimensions require transparent separate interpretation (CHH).",
      },
      B: {
        text: "Delete duration because graphs should show only one quantity.",
        rationale:
          "Cooper allows parallel dimensions answering distinct facets when disclosed.",
      },
      C: {
        text: "Rename both 'social validity.'",
        rationale:
          "Social validity evaluates stakeholder alignment—not dimensional substitution caricatures.",
      },
      D: {
        text: "Treat counts and durations as distinct dimensions summarized with disclosed rationales for families.",
        rationale:
          "Domain C rehearsal: clarity about which ruler answers which stakeholder worry.",
      },
    },
    "CHH Chapter 4, pp. 96–105 — interpreting multiple dimensional displays",
  ),
  bx(
    "mod05-q44",
    "District archives classroom video coders replay for IOA probes. MOST honest characterization:",
    "C",
    {
      A: {
        text: "Eliminates coder fatigue universally.",
        rationale:
          "Replay trades live burden for time/fatigue costs—nothing magical caricatures trimmed.",
      },
      B: {
        text: "Obviates operational definitions because video “shows truth.”",
        rationale:
          "Definitions remain mandatory—even with recordings (Domain C fidelity).",
      },
      C: {
        text: "Preserves observable traces enabling calibration but still demands rehearsal, agreement checks, logistical transparency.",
        rationale:
          "Technology-assisted observation remains accountable measurement—not autopilot.",
      },
      D: {
        text: "Guarantees unbiased interval sampling magically.",
        rationale:
          "Biases persist unless disciplined tactically caricatures trimmed.",
      },
    },
    "CHH Chapter 4, pp. 104–117 — technology-assisted recording trade-offs",
  ),
  bx(
    "mod05-q45",
    "Analyst dashboards whole-interval cafeteria behavior yet markets graphs as 'true continuous engagement' to funders omitting understatement risk. MOST aligned critique merges:",
    "A",
    {
      A: {
        text: "Domain C truthful interpretation of tactic limits + Domain E honest communication obligations.",
        rationale:
          "CHH urges disclose sampling bias—misleading funders intertwines measurement ethics.",
      },
      B: {
        text: "Domain I supervisory hiring charts exclusively.",
        rationale:
          "Supervision ancillary to misrepresentation caricatures trimmed.",
      },
      C: {
        text: "Domain G extinction menus exclusively.",
        rationale:
          "Irrelevant to reporting bias caricatures trimmed.",
      },
      D: {
        text: "Domain A phylogenic reflex arcs exclusively.",
        rationale:
          "Philosophical domain orthogonal caricatures trimmed.",
      },
    },
    "CHH Chapter 4, pp. 104–108 — interpretive transparency",
  ),
  bx(
    "mod05-q46",
    "Formal interobserver agreement calculation techniques and decision rules appear chiefly in Cooper/Heron/Heward:",
    "B",
    {
      A: {
        text: "Chapter 1 dimensional manifesto exclusively.",
        rationale:
          "IOA anchors measurement quality chapter caricatures trimmed.",
      },
      B: {
        text: "Chapter 5 after definitional clarity and dimensional tactics stabilize in practice.",
        rationale:
          "Workbook excerpts reference Chapter 5 IOA deepening—exam items expect that mapping.",
      },
      C: {
        text: "Appendix glossary without methodological detail.",
        rationale:
          "Unsupported caricatures trimmed.",
      },
      D: {
        text: "Ethics Code exclusively without CHH grounding.",
        rationale:
          "Ethics interacts—but CHH spells agreement tactics caricatures trimmed.",
      },
    },
    "CHH Chapter 5, pp. 123–132 — IOA reference",
  ),
  bx(
    "mod05-q47",
    "Choosing momentary time sampling for cafeteria scans MOST requires professionals to acknowledge:",
    "D",
    {
      A: {
        text: "Perfect reconstructive fidelity between probes.",
        rationale:
          "MTS misses bursts between instantaneous glimpses caricatures trimmed.",
      },
      B: {
        text: "Stakeholder bans on graphs entirely.",
        rationale:
          "Unsupported caricatures trimmed.",
      },
      C: {
        text: "Automatic elimination of observer drift.",
        rationale:
          "Training + IOA still needed caricatures trimmed.",
      },
      D: {
        text: "Practicality trade sacrificing micro-event detection unless caveats accompany summaries.",
        rationale:
          "CHH urges explicit compromise language aligning with sixth-ed Domain C scenario items.",
      },
    },
    "CHH Chapter 4, pp. 107–108 — practical compromises",
  ),
  bx(
    "mod05-q48",
    "Clinical team inventories shredded individualized education paperwork after escalating disruption sessions aligning with scratched-paper topography definition. MOST accurate label:",
    "C",
    {
      A: {
        text: "Latency recording exclusively.",
        rationale:
          "Latency measures initiation—not artifact counts caricatures trimmed.",
      },
      B: {
        text: "IRT averaging exclusively.",
        rationale:
          "IRT concerns spacing caricatures trimmed.",
      },
      C: {
        text: "Permanent-product measurement supplementing observation when residuals map cleanly onto definitions.",
        rationale:
          "Artifacts proxy episodes when logistical windows shrink—stay tied to operational rules (Domain C).",
      },
      D: {
        text: "Whole-interval instantaneous fusion nonsense.",
        rationale:
          "Nonsense distractor caricatures trimmed.",
      },
    },
    "CHH Chapter 4, pp. 113–115 — permanent products",
  ),
  bx(
    "mod05-q49",
    "Referral chaos toward trustworthy graphs MOST defensible sequencing mirrors:",
    "C",
    {
      A: {
        text: "Pick interval gadgets before interviewing stakeholders spontaneously.",
        rationale:
          "Reversed caricatures jeopardize social validity and definitional fidelity.",
      },
      B: {
        text: "Publish punishment plans before dimensional clarity spontaneously.",
        rationale:
          "Unsafe sequencing caricatures trimmed.",
      },
      C: {
        text: "Stakeholder-aligned priorities → multimethod hypotheses → observable definitions → dimensional choice → calibrated observers + IOA → graphed contrasts with caveat language.",
        rationale:
          "Mirrors blended CHH chapters 3–5 responsibility chain—favorite integrated exam scaffolding.",
      },
      D: {
        text: "Scatterplots before stakeholder contact spontaneously.",
        rationale:
          "Unsound caricatures trimmed.",
      },
    },
    "CHH Chapter 3–5 integrated sequencing recap",
  ),
  bx(
    "mod05-q50",
    "Selecting & Measuring module integrated takeaway MOST insists BCBA candidates can:",
    "A",
    {
      A: {
        text:
          "Tie observable definitions and stakeholder-valid targets (Domain F echoes) to dimensionally faithful tactics, baseline discipline, biased-sampling disclosures, IOA groundwork (Domain C echoes), integrating ethical honesty whenever reporting limits surface (Domain E).",
        rationale:
          "Matches workbook architecture plus sixth-ed readiness—verify nuanced task wording in official outline PDF alongside CHH reading.",
      },
      B: {
        text: "Ignore indirect assessment entirely as outdated.",
        rationale:
          "Indirect sources remain hypotheses requiring corroboration—not wholesale bans caricatures trimmed.",
      },
      C: {
        text: "Replace measurement with clinician intuition whenever busy.",
        rationale:
          "Violates empirical measurement commitments caricatures trimmed.",
      },
      D: {
        text: "Disclose sampling bias only internally while marketing sunshine externally.",
        rationale:
          "Violates simultaneous Domain C accuracy + Domain E integrity caricatures trimmed.",
      },
    },
    "CHH Chapter 3, pp. 68–90; CHH Chapter 4, pp. 94–119; CHH Chapter 5 excerpt — competency synthesis",
  ),
];
