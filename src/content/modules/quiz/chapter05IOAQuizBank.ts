import type { BDSQuestion } from "@/lib/content-types";

/**
 * Cooper/Heron/Heward Ch. 5 — Improving and Assessing the Quality of Behavioral Measurement.
 * IOA formulas, method selection, observer training, procedural integrity, and reporting ethics.
 */

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

export const CHAPTER_05_IOA_QUIZ_BANK: BDSQuestion[] = [
  bx(
    "mod05-q1",
    "Cooper Chapter 5 defines interobserver agreement (IOA) MOST centrally as:",
    "C",
    {
      A: { text: "Proof that a treatment caused behavior change.", rationale: "Causal inference requires experimental design—not IOA alone." },
      B: { text: "Caregiver satisfaction with intervention goals.", rationale: "Social validity differs from observer correspondence." },
      C: { text: "Quantified correspondence between independent observers scoring the same measurement samples.", rationale: "IOA evaluates whether observers apply definitions consistently." },
      D: { text: "Automatic reinforcement identification from graphs.", rationale: "Function analysis is separate from observer agreement." },
    },
  ),
  bx(
    "mod05-q2",
    "Total-count IOA is MOST appropriate when:",
    "A",
    {
      A: { text: "Observers tally discrete instances across an entire session and compare session totals.", rationale: "Total-count compares aggregate counts for event recording." },
      B: { text: "Momentary probes score presence at interval midpoints only.", rationale: "That describes interval-based IOA contexts." },
      C: { text: "Only one observer is available.", rationale: "IOA requires independent observers." },
      D: { text: "Behavior occurs at zero rate.", rationale: "Zero counts can yield ambiguous IOA interpretation." },
    },
  ),
  bx(
    "mod05-q3",
    "Observer A records 18 instances; Observer B records 22 for the same session. Total-count IOA formula uses:",
    "B",
    {
      A: { text: "Smaller count divided by larger count only.", rationale: "Cooper uses agreement relative to both observers' counts." },
      B: { text: "Agreement computed from the lower and higher total counts per Chapter 5 conventions.", rationale: "Total-count IOA compares session totals using the standard formula." },
      C: { text: "Average of latency scores.", rationale: "Latency is a dimension—not an IOA formula type here." },
      D: { text: "Interval agreement without counts.", rationale: "Interval-by-interval IOA differs from total-count." },
    },
  ),
  bx(
    "mod05-q4",
    "Mean count-per-interval IOA is preferred over total-count IOA when:",
    "D",
    {
      A: { text: "No intervals are used in recording.", rationale: "Mean count-per-interval requires intervalized data." },
      B: { text: "Caregivers complete questionnaires.", rationale: "Indirect tools are not IOA methods." },
      C: { text: "Only permanent products exist.", rationale: "Permanent products may use other IOA approaches." },
      D: { text: "Session length or number of intervals differs across comparison samples.", rationale: "Mean count-per-interval controls for unequal observation windows." },
    },
  ),
  bx(
    "mod05-q5",
    "Interval-by-interval IOA compares observers:",
    "C",
    {
      A: { text: "On whether each interval's count totals match session sums only.", rationale: "That collapses to total-count logic." },
      B: { text: "On caregiver recall narratives.", rationale: "IOA requires simultaneous or overlapping observation samples." },
      C: { text: "On whether they scored each interval the same way (agreement per interval).", rationale: "Interval-by-interval IOA is the strictest interval method." },
      D: { text: "On treatment integrity only.", rationale: "Procedural integrity is related but distinct." },
    },
  ),
  bx(
    "mod05-q6",
    "Trial-by-trial IOA is MOST associated with:",
    "A",
    {
      A: { text: "Discrete trial training where each trial is scored agree/disagree.", rationale: "Trial-by-trial IOA fits discrete trial formats." },
      B: { text: "Whole-day duration summaries without trials.", rationale: "Duration sessions typically use other IOA methods." },
      C: { text: "Indirect FAST questionnaires.", rationale: "Questionnaires are not trial-by-trial observation." },
      D: { text: "Scatterplot time analysis only.", rationale: "Scatterplots guide sampling—they are not IOA per trial." },
    },
  ),
  bx(
    "mod05-q7",
    "Low interval-by-interval IOA with high total-count IOA MOST suggests:",
    "B",
    {
      A: { text: "Observers disagree on definitions entirely.", rationale: "High total-count suggests rough agreement on overall rate." },
      B: { text: "Observers agree on overall totals but disagree on when behavior occurred within intervals.", rationale: "Timing disagreement within intervals depresses interval IOA." },
      C: { text: "Treatment caused behavior change.", rationale: "IOA patterns do not prove treatment effects." },
      D: { text: "IOA is unnecessary.", rationale: "Discrepant interval IOA signals need for retraining." },
    },
  ),
  bx(
    "mod05-q8",
    "Before interpreting graphed phase changes, Cooper Chapter 5 stresses:",
    "D",
    {
      A: { text: "Publishing graphs without observer checks to save time.", rationale: "IOA precedes confident interpretation." },
      B: { text: "Replacing definitions mid-project without retraining.", rationale: "Definition drift invalidates comparisons." },
      C: { text: "Using only one observer for efficiency.", rationale: "Independent observers are required for IOA." },
      D: { text: "Establishing acceptable IOA and resolving definition drift through observer training.", rationale: "Reliability gates precede inferential claims." },
    },
  ),
  bx(
    "mod05-q9",
    "Procedural integrity (treatment fidelity) in Chapter 5 refers to:",
    "A",
    {
      A: { text: "Whether intervention procedures were implemented as planned.", rationale: "Fidelity documents planned-versus-actual treatment delivery." },
      B: { text: "Whether caregivers liked the intervention.", rationale: "Acceptability differs from procedural integrity." },
      C: { text: "Whether IOA exceeded 100%.", rationale: "IOA cannot exceed 100% meaningfully." },
      D: { text: "Whether punishment was used.", rationale: "Fidelity applies to any procedure—not punishment only." },
    },
  ),
  bx(
    "mod05-q10",
    "Low procedural integrity during intervention MOST threatens:",
    "C",
    {
      A: { text: "Only billing codes.", rationale: "Low fidelity threatens internal validity of treatment evaluation." },
      B: { text: "Only vocabulary memorization.", rationale: "Fidelity affects whether the independent variable was actually implemented." },
      C: { text: "Interpretation that the planned intervention caused observed change.", rationale: "Without fidelity, graphs may reflect uncontrolled implementation drift." },
      D: { text: "IOA on permanent products only.", rationale: "Fidelity and IOA are complementary quality checks." },
    },
  ),
  bx(
    "mod05-q11",
    "Observer drift refers to:",
    "B",
    {
      A: { text: "Physical movement of observers around the room.", rationale: "Drift is scoring drift—not locomotion." },
      B: { text: "Gradual change in how an observer applies definitions over time.", rationale: "Drift degrades IOA unless caught and corrected." },
      C: { text: "Baseline trend upward.", rationale: "Trend is graph interpretation—not observer drift." },
      D: { text: "MO changes after meals.", rationale: "MO shifts differ from observer scoring drift." },
    },
  ),
  bx(
    "mod05-q12",
    "MOST defensible response when IOA falls below agency threshold mid-project:",
    "A",
    {
      A: { text: "Pause interpretation, retrain observers, and recollect overlapping samples until IOA stabilizes.", rationale: "Low IOA triggers remediation—not silent continuation." },
      B: { text: "Delete the disagreeing observer's data.", rationale: "Deleting data without remediation violates integrity." },
      C: { text: "Change the graph axis to hide variability.", rationale: "Graph manipulation does not fix reliability." },
      D: { text: "Report treatment success without noting IOA.", rationale: "Withholding IOA limits misleads stakeholders." },
    },
  ),
  bx(
    "mod05-q13",
    "Measurement reactivity occurs when:",
    "D",
    {
      A: { text: "Observers agree perfectly on every interval.", rationale: "High IOA is not reactivity." },
      B: { text: "Treatment fidelity is 100%.", rationale: "Fidelity is implementation accuracy—not reactivity." },
      C: { text: "Baseline is stable.", rationale: "Stable baseline is desirable—not reactivity." },
      D: { text: "Being observed changes the behavior being measured.", rationale: "Reactivity threatens external validity of measurements." },
    },
  ),
  bx(
    "mod05-q14",
    "To reduce measurement reactivity, analysts might:",
    "C",
    {
      A: { text: "Hide measurement from participants permanently without disclosure.", rationale: "Ethical practice requires appropriate consent and transparency." },
      B: { text: "Eliminate all observation.", rationale: "Observation is necessary—reactivity is managed, not avoided by abandoning measurement." },
      C: { text: "Use unobtrusive measures, allow habituation time, and monitor whether behavior stabilizes.", rationale: "Chapter 5 discusses managing reactivity." },
      D: { text: "Fabricate IOA scores.", rationale: "Fabrication violates ethics and science." },
    },
  ),
  bx(
    "mod05-q15",
    "Which IOA method is MOST stringent for interval recording data?",
    "B",
    {
      A: { text: "Total-count IOA", rationale: "Total-count can mask interval disagreements." },
      B: { text: "Interval-by-interval IOA", rationale: "Requires agreement on every interval scored." },
      C: { text: "Caregiver interview agreement", rationale: "Interviews are not IOA methods." },
      D: { text: "Mean count-per-interval only without interval agreement", rationale: "Mean count-per-interval is less strict than interval-by-interval." },
    },
  ),
  bx(
    "mod05-q16",
    "Two observers score 20 intervals; they agree on 16. Interval-by-interval IOA equals:",
    "A",
    {
      A: { text: "80% (16/20 intervals in agreement).", rationale: "Interval IOA is agreements divided by intervals compared." },
      B: { text: "100% because totals might match.", rationale: "Interval method requires per-interval agreement." },
      C: { text: "4% because four disagreed.", rationale: "IOA reports agreement—not disagreement rate alone without context." },
      D: { text: "Cannot compute for interval data.", rationale: "Interval-by-interval IOA is designed for this structure." },
    },
  ),
  bx(
    "mod05-q17",
    "IOA on partial-interval aggression recording MOST protects against:",
    "D",
    {
      A: { text: "Automatic reinforcement classification errors exclusively.", rationale: "IOA addresses observer agreement—not function." },
      B: { text: "MO abolishment.", rationale: "MO is separate from IOA." },
      C: { text: "Graph axis rescaling only.", rationale: "IOA precedes graph interpretation issues." },
      D: { text: "Inflated prevalence when observers disagree on whether behavior occurred in an interval.", rationale: "Partial-interval inflation plus low IOA undermines data trust." },
    },
  ),
  bx(
    "mod05-q18",
    "Exam stem: Team reports 92% IOA but never states which formula or observation samples. BEST critique:",
    "C",
    {
      A: { text: "IOA is irrelevant if graphs look good.", rationale: "IOA method and samples must be reported." },
      B: { text: "Any percentage above 50% is sufficient.", rationale: "Thresholds and methods matter—context is required." },
      C: { text: "Without IOA type, sample, and calculation transparency, reliability claims are incomplete.", rationale: "Domain C and E require reproducible reporting." },
      D: { text: "Only experimental FA requires IOA.", rationale: "IOA applies to descriptive measurement too." },
    },
  ),
  bx(
    "mod05-q19",
    "Pilot IOA sessions before baseline collection MOST help analysts:",
    "B",
    {
      A: { text: "Skip operational definitions.", rationale: "Pilot IOA tests definitions—not replaces them." },
      B: { text: "Refine definitions and observer training before data used for decisions.", rationale: "Piloting catches definitional ambiguity early." },
      C: { text: "Finalize treatment without baseline.", rationale: "Baseline still required for comparison." },
      D: { text: "Avoid stakeholder input.", rationale: "Stakeholders remain central to valid measurement." },
    },
  ),
  bx(
    "mod05-q20",
    "Permanent-product IOA might involve:",
    "A",
    {
      A: { text: "Independent scorers agreeing on worksheet items completed or artifacts produced.", rationale: "Two scorers can IOA permanent product counts." },
      B: { text: "Only subjective mood ratings.", rationale: "Behavioral measurement targets observable products." },
      C: { text: "FA condition manipulation.", rationale: "FA is experimental—not IOA on products." },
      D: { text: "Eliminating all paper records.", rationale: "Permanent products rely on durable records." },
    },
  ),
  bx(
    "mod05-q21",
    "Which pairing BEST distinguishes IOA from procedural integrity?",
    "D",
    {
      A: { text: "Both measure caregiver happiness.", rationale: "Neither measures happiness directly." },
      B: { text: "IOA is treatment delivery; integrity is observer agreement.", rationale: "Roles are reversed." },
      C: { text: "Both are identical constructs.", rationale: "They are related quality dimensions but distinct." },
      D: { text: "IOA is observer agreement on measurement; integrity is accuracy of treatment implementation.", rationale: "Chapter 5 treats both as measurement quality pillars." },
    },
  ),
  bx(
    "mod05-q22",
    "Supervisor notices IOA dropped after a new staff member joined. FIRST step aligned with Chapter 5:",
    "C",
    {
      A: { text: "Publish phase-change conclusions immediately.", rationale: "Low IOA blocks confident interpretation." },
      B: { text: "Change the target behavior label.", rationale: "Renaming without retraining does not fix agreement." },
      C: { text: "Retrain on operational definitions and conduct overlapping observations.", rationale: "Training and overlap restore IOA." },
      D: { text: "Switch to anecdotal reporting.", rationale: "Anecdotes replace accountable measurement." },
    },
  ),
  bx(
    "mod05-q23",
    "For discrete trial programs, IOA is often reported as:",
    "B",
    {
      A: { text: "Mean count-per-interval across gym class.", rationale: "Gym interval IOA differs from DTT trial IOA." },
      B: { text: "Trial-by-trial agreement on correct versus incorrect scoring.", rationale: "Each trial is a unit of comparison." },
      C: { text: "Total session duration only.", rationale: "Duration totals omit trial-level agreement." },
      D: { text: "Questionnaire interrater reliability exclusively.", rationale: "DTT IOA uses direct observation trials." },
    },
  ),
  bx(
    "mod05-q24",
    "High IOA on the wrong operational definition MOST illustrates:",
    "A",
    {
      A: { text: "Reliable but potentially invalid measurement—observers agree but may not measure the referral target.", rationale: "Validity and reliability are both required." },
      B: { text: "Perfect treatment fidelity.", rationale: "IOA on wrong target does not show fidelity." },
      C: { text: "Automatic punishment.", rationale: "Not relevant to validity-reliability distinction." },
      D: { text: "MO abolishing reinforcement.", rationale: "MO differs from definitional validity." },
    },
  ),
  bx(
    "mod05-q25",
    "When observation sessions differ in length, analysts should prefer:",
    "D",
    {
      A: { text: "Total-count IOA without adjustment.", rationale: "Unequal session lengths distort total-count comparisons." },
      B: { text: "No IOA until sessions are equal length only.", rationale: "Mean count-per-interval accommodates unequal lengths." },
      C: { text: "Deleting shorter sessions silently.", rationale: "Transparent methods beat deleting data." },
      D: { text: "Mean count-per-interval IOA or standardized observation windows.", rationale: "Chapter 5 recommends methods controlling for duration differences." },
    },
  ),
  bx(
    "mod05-q26",
    "Fidelity checklists during intervention MOST directly support:",
    "C",
    {
      A: { text: "IOA on caregiver mood.", rationale: "Fidelity targets procedure implementation." },
      B: { text: "Respondent extinction proofs.", rationale: "Fidelity is procedural—not respondent." },
      C: { text: "Claims that the independent variable was implemented as designed.", rationale: "Fidelity links procedure to outcomes." },
      D: { text: "Eliminating baseline.", rationale: "Baseline remains necessary." },
    },
  ),
  bx(
    "mod05-q27",
    "Board item: Observers calculate IOA only on 'easy' sessions. This MOST threatens:",
    "B",
    {
      A: { text: "Graph color choices.", rationale: "Selective IOA sampling threatens validity of reliability claims." },
      B: { text: "Representativeness—IOA should reflect typical measurement conditions.", rationale: "Cherry-picked IOA misleads reviewers." },
      C: { text: "MO only.", rationale: "Selective sampling is an ethics and methods issue broader than MO." },
      D: { text: "Stimulus equivalence.", rationale: "Unrelated construct." },
    },
  ),
  bx(
    "mod05-q28",
    "Chapter 5 positions IOA within measurement quality because:",
    "A",
    {
      A: { text: "Decision-makers must trust that recorded data reflect the defined behavior consistently.", rationale: "IOA is the reliability backbone for behavioral measurement." },
      B: { text: "IOA replaces social validity.", rationale: "Social validity is a separate concern." },
      C: { text: "IOA proves function.", rationale: "Function requires assessment logic beyond IOA." },
      D: { text: "IOA eliminates need for graphs.", rationale: "Graphs display data IOA validates." },
    },
  ),
  bx(
    "mod05-q29",
    "Two observers disagree primarily on whether brief hits count as one or two instances. BEST remediation:",
    "B",
    {
      A: { text: "Average their counts without discussion.", rationale: "Averaging hides definitional ambiguity." },
      B: { text: "Revise operational definition with examples/non-examples and retrain.", rationale: "Definitional clarity drives IOA." },
      C: { text: "Switch to permanent products only.", rationale: "Products still need clear definitions." },
      D: { text: "Stop measuring aggression.", rationale: "Measurement continues with improved definitions." },
    },
  ),
  bx(
    "mod05-q30",
    "Reporting IOA in multidisciplinary meetings WITHOUT noting low agreement intervals violates:",
    "D",
    {
      A: { text: "Only scheduling norms.", rationale: "Low IOA reporting is an ethics and measurement integrity issue." },
      B: { text: "Respondent conditioning rules.", rationale: "Unrelated." },
      C: { text: "Token economy guidelines exclusively.", rationale: "Reporting integrity applies broadly." },
      D: { text: "Honest communication about measurement limits (Domain C/E).", rationale: "Stakeholders need IOA context to interpret graphs." },
    },
  ),
  bx(
    "mod05-q31",
    "IOA calculated on 10% of sessions is acceptable when:",
    "C",
    {
      A: { text: "Never—100% of all data require dual observation.", rationale: "Practical IOA uses representative overlapping samples." },
      B: { text: "Only when IOA is 100% on those sessions and never reported otherwise.", rationale: "IOA sampling plan should be systematic and reported." },
      C: { text: "The sampling plan is systematic, reported, and representative of ongoing measurement.", rationale: "Chapter 5 supports planned IOA sampling with transparency." },
      D: { text: "Caregivers request secrecy.", rationale: "Secrecy conflicts with ethical reporting." },
    },
  ),
  bx(
    "mod05-q32",
    "Which scenario MOST requires trial-by-trial IOA?",
    "A",
    {
      A: { text: "DTT program scoring correct/incorrect per trial.", rationale: "Trial-by-trial fits discrete trial formats." },
      B: { text: "Whole-class interval engagement sampling.", rationale: "Interval IOA methods fit better." },
      C: { text: "Archival record review.", rationale: "Not simultaneous trial observation." },
      D: { text: "Scatterplot construction.", rationale: "Scatterplots summarize time—not trial IOA." },
    },
  ),
  bx(
    "mod05-q33",
    "Mean count-per-interval IOA differs from interval-by-interval IOA because mean count-per-interval:",
    "B",
    {
      A: { text: "Ignores all interval data.", rationale: "It uses interval counts averaged across session." },
      B: { text: "Compares average counts per interval between observers rather than agreement on each interval.", rationale: "Less strict than interval-by-interval agreement." },
      C: { text: "Requires FA conditions.", rationale: "IOA methods apply to measurement—not FA exclusively." },
      D: { text: "Is only for latency.", rationale: "Latency uses other IOA considerations." },
    },
  ),
  bx(
    "mod05-q34",
    "Treatment integrity data show prompts delivered inconsistently while graphs show improvement. Analyst should:",
    "D",
    {
      A: { text: "Credit the planned intervention fully.", rationale: "Low fidelity weakens causal attribution." },
      B: { text: "Delete fidelity notes.", rationale: "Withholding fidelity misleads." },
      C: { text: "Assume IOA fixes fidelity problems.", rationale: "IOA and fidelity are separate." },
      D: { text: "Interpret cautiously—change may reflect uncontrolled procedural variation.", rationale: "Chapter 5 pairs outcome graphs with integrity evidence." },
    },
  ),
  bx(
    "mod05-q35",
    "Zero occurrences for both observers in all intervals produces IOA that is:",
    "C",
    {
      A: { text: "Always 0% and useless.", rationale: "Zero behavior requires careful IOA interpretation—not automatic dismissal." },
      B: { text: "Always 100% regardless of definition quality.", rationale: "Perfect IOA with zero counts can mask definitional untestability." },
      C: { text: "Potentially ambiguous—analysts should note whether definitions were testable.", rationale: "Chapter 5 cautions about IOA when behavior absent." },
      D: { text: "Proof of extinction.", rationale: "Zero counts alone do not prove extinction process." },
    },
  ),
  bx(
    "mod05-q36",
    "Independent variable integrity checks often use:",
    "A",
    {
      A: { text: "Direct observation of procedural steps against a checklist.", rationale: "Fidelity observation parallels IOA logic for treatment." },
      B: { text: "Only caregiver interviews.", rationale: "Direct observation of implementation is stronger." },
      C: { text: "IOA on MO only.", rationale: "MO documentation differs from IV fidelity." },
      D: { text: "Graph rescaling.", rationale: "Visual tricks do not assess fidelity." },
    },
  ),
  bx(
    "mod05-q37",
    "Chapter 5 study priority for BCBA exam: when stem mentions percentages and two observers, FIRST ask:",
    "B",
    {
      A: { text: "Which punishment procedure applied?", rationale: "IOA stems focus on agreement methods." },
      B: { text: "Which IOA formula matches the recording method and data structure?", rationale: "Method-data fit is the core discrimination." },
      C: { text: "Which MO abolished reinforcement?", rationale: "MO may be background—not first IOA step." },
      D: { text: "Which graph color is best?", rationale: "Irrelevant to IOA calculation." },
    },
  ),
  bx(
    "mod05-q38",
    "Observers achieve 85% interval IOA on aggression but definitions changed mid-week without retraining. Concern:",
    "D",
    {
      A: { text: "None—85% always sufficient.", rationale: "Definition changes require recalibration." },
      B: { text: "Only billing impact.", rationale: "Comparability across phases is threatened." },
      C: { text: "MO only.", rationale: "Definition drift is a measurement integrity issue." },
      D: { text: "Data before and after definition change may not be comparable.", rationale: "Restart baseline or segregate phases when definitions shift." },
    },
  ),
  bx(
    "mod05-q39",
    "Linking Chapter 4 recording methods to Chapter 5 IOA: partial-interval data should use:",
    "C",
    {
      A: { text: "Total-count IOA only always.", rationale: "Interval methods are often preferred for interval recording." },
      B: { text: "No IOA because interval data are biased.", rationale: "Bias acknowledgment plus IOA is standard." },
      C: { text: "Interval-by-interval or mean count-per-interval IOA matching interval structure.", rationale: "IOA method should match data collection grain." },
      D: { text: "Trial-by-trial IOA exclusively.", rationale: "Trials differ from interval bins." },
    },
  ),
  bx(
    "mod05-q40",
    "Ethical reporting when IOA is low includes:",
    "A",
    {
      A: { text: "Disclosing IOA values, remediation steps, and limits on conclusions.", rationale: "Transparency aligns Domain C and E." },
      B: { text: "Reporting only highest IOA sessions.", rationale: "Cherry-picking violates ethics." },
      C: { text: "Replacing IOA with testimonials.", rationale: "Testimonials do not substitute measurement quality." },
      D: { text: "Stopping all services without analysis.", rationale: "Remediation—not abandonment—is professional." },
    },
  ),
  bx(
    "mod05-q41",
    "Concurrent measurement and IOA during baseline MOST supports:",
    "D",
    {
      A: { text: "Skipping intervention permanently.", rationale: "Baseline enables comparison—not permanent skip." },
      B: { text: "Ignoring procedural integrity.", rationale: "Integrity matters during intervention phases." },
      C: { text: "Final functional diagnosis from IOA alone.", rationale: "IOA does not diagnose function." },
      D: { text: "Confidence that baseline variability reflects defined behavior reliably.", rationale: "IOA stabilizes baseline interpretation." },
    },
  ),
  bx(
    "mod05-q42",
    "Which is NOT a Chapter 5 IOA formula type emphasized by Cooper?",
    "C",
    {
      A: { text: "Total count", rationale: "Total-count IOA is a standard method." },
      B: { text: "Interval-by-interval", rationale: "Interval-by-interval is standard for interval data." },
      C: { text: "Caregiver satisfaction percentage", rationale: "Satisfaction is not IOA." },
      D: { text: "Trial-by-trial", rationale: "Trial-by-trial IOA is standard for DTT." },
    },
  ),
  bx(
    "mod05-q43",
    "Team graphs intervention gains while IOA on target behavior was never collected. Primary risk:",
    "B",
    {
      A: { text: "MO confusion only.", rationale: "Unknown observer agreement threatens all graph claims." },
      B: { text: "Unknown whether recorded change reflects defined behavior or observer inconsistency.", rationale: "IOA is prerequisite for trusting data." },
      C: { text: "Automatic reinforcement mislabeling only.", rationale: "Broader than function labeling." },
      D: { text: "Token economy failure only.", rationale: "Applies to all measurement contexts." },
    },
  ),
  bx(
    "mod05-q44",
    "Habituation to observation after initial reactivity MOST helps:",
    "A",
    {
      A: { text: "Stabilize behavior toward more typical levels before decision-making.", rationale: "Chapter 5 discusses allowing reactivity to dissipate when ethical." },
      B: { text: "Eliminate need for IOA.", rationale: "IOA still required." },
      C: { text: "Skip operational definitions.", rationale: "Definitions remain essential." },
      D: { text: "Replace graphs with anecdotes.", rationale: "Measurement continues with improved conditions." },
    },
  ),
  bx(
    "mod05-q45",
    "Fidelity and IOA both contribute to measurement quality but differ because fidelity assesses:",
    "D",
    {
      A: { text: "Agreement among observers on scoring.", rationale: "That is IOA." },
      B: { text: "Caregiver mood exclusively.", rationale: "Not fidelity's focus." },
      C: { text: "Only baseline trend.", rationale: "Trend is separate analytic feature." },
      D: { text: "Correct implementation of treatment procedures.", rationale: "IV integrity versus observer scoring agreement." },
    },
  ),
  bx(
    "mod05-q46",
    "Exam trap: 'IOA was 90%' on duration recording using interval-by-interval formula on 10-s bins. Issue:",
    "C",
    {
      A: { text: "Duration cannot have IOA.", rationale: "Duration can have IOA with appropriate methods." },
      B: { text: "90% is always too low.", rationale: "Threshold depends on context—but method mismatch is key." },
      C: { text: "IOA method should align with how duration was recorded and compared.", rationale: "Method-data mismatch invalidates reported IOA." },
      D: { text: "IOA only applies to frequency.", rationale: "IOA applies across dimensions with matching methods." },
    },
  ),
  bx(
    "mod05-q47",
    "Before scaling intervention agency-wide, Cooper Chapter 5 logic requires:",
    "B",
    {
      A: { text: "Only one successful case anecdote.", rationale: "Replication requires measurement quality at scale." },
      B: { text: "Documented IOA and fidelity procedures others can replicate.", rationale: "Quality systems scale with explicit reliability and fidelity plans." },
      C: { text: "Eliminating all interval recording.", rationale: "Methods follow questions—not blanket bans." },
      D: { text: "Hiding IOA from funders.", rationale: "Transparency is required." },
    },
  ),
  bx(
    "mod05-q48",
    "Observer training until IOA meets criterion MOST exemplifies:",
    "A",
    {
      A: { text: "Proactive measurement quality control before inferential decisions.", rationale: "Training is Chapter 5 best practice." },
      B: { text: "Post-hoc graph decoration.", rationale: "Training precedes—not follows—decisions." },
      C: { text: "Punishment of observers.", rationale: "Training supports skill—not punitive control." },
      D: { text: "Respondent conditioning.", rationale: "Unrelated paradigm." },
    },
  ),
  bx(
    "mod05-q49",
    "Integrating Chapters 3–5 for exam prep: after operational definitions (Ch 3) and recording tactics (Ch 4), Chapter 5 answers:",
    "D",
    {
      A: { text: "Which target behavior is socially valid.", rationale: "That is Chapter 3 emphasis." },
      B: { text: "Which dimension to measure.", rationale: "Chapter 4 dimensional choice." },
      C: { text: "Which FA condition to run.", rationale: "FA is later assessment content." },
      D: { text: "Whether observers score the defined behavior reliably enough to trust the numbers.", rationale: "Chapter 5 closes the measurement quality loop." },
    },
  ),
  bx(
    "mod05-q50",
    "Closing Chapter 5 principle: behavioral analysts should treat low IOA as:",
    "B",
    {
      A: { text: "A minor paperwork issue.", rationale: "Low IOA blocks confident interpretation." },
      B: { text: "A stop signal for strong causal or treatment claims until remediated.", rationale: "Reliability gates inference—core Chapter 5 message." },
      C: { text: "Proof treatment failed.", rationale: "IOA addresses measurement—not treatment outcome directly." },
      D: { text: "Reason to change graph colors.", rationale: "Irrelevant response." },
    },
  ),
];
