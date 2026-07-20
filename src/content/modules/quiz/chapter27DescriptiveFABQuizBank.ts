import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 27 supplement — Descriptive FBA (mod08). */

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

export const CHAPTER_27_DESCRIPTIVE_FAB_QUIZ_BANK: BDSQuestion[] = [
  bx("mod08-q1", "Temporal spikes precede transitions without tangible deliveries — MOST cautious stance?", "B", {
    A: { text: "Certify tangible reinforcement dominance.", rationale: "No tangible deliveries observed—premature attribution." },
    B: { text: "Infer escape from transition demands pending corroboration.", rationale: "Classic Ch 27 descriptive vignette." },
    C: { text: "Conclude behavior is respondent-only.", rationale: "Operant hypotheses remain plausible." },
    D: { text: "Ignore spikes completely.", rationale: "Dismisses patterned descriptive evidence." },
  }),
  bx("mod08-q4", "Cooper Chapter 27 descriptive functional behavioral assessment:", "D", {
    A: { text: "Interview ratings only.", rationale: "Naturalistic observation." },
    B: { text: "Controlled evocative contrasts.", rationale: "Experimental FA." },
    C: { text: "Punishment assessment.", rationale: "Correlational observation." },
    D: { text: "Naturalistic observation summarizing correlates without programmed contrasts.", rationale: "Descriptive FBA definition." },
  }),
  bx("mod08-q5", "Scatterplot (time-block) matrices primarily:", "A", {
    A: { text: "Plot where occurrences concentrate relative to ecological anchors.", rationale: "Scatterplot definition." },
    B: { text: "Prove maintaining contingencies experimentally.", rationale: "Descriptive tool." },
    C: { text: "Replace ABC narratives.", rationale: "Complementary methods." },
    D: { text: "Eliminate IOA requirements.", rationale: "IOA still needed." },
  }),
  bx("mod08-q6", "ABC narrative recording:", "C", {
    A: { text: "Experimental contrast condition.", rationale: "Qualitative descriptive log." },
    B: { text: "Definitive FA proof alone.", rationale: "Hypothesis support." },
    C: { text: "Sequential documentation of antecedent–behavior–consequence links for hypothesis building.", rationale: "ABC narrative definition." },
    D: { text: "Indirect FAST checklist.", rationale: "Descriptive method." },
  }),
  bx("mod08-q7", "Temporal covariation in descriptive FBA:", "B", {
    A: { text: "Guarantees experimental isolation.", rationale: "Directional signal only." },
    B: { text: "Shared timing patterns motivating hypotheses—not functional verdicts alone.", rationale: "Covariation definition." },
    C: { text: "Replaces informed consent.", rationale: "Unrelated." },
    D: { text: "Identical to token economy.", rationale: "Assessment method." },
  }),
  bx("mod08-q8", "Ecological validity in descriptive assessment:", "D", {
    A: { text: "Observation exclusively in sterile labs.", rationale: "Natural settings preferred." },
    B: { text: "Eliminating stakeholder explanations.", rationale: "Ecological fidelity." },
    C: { text: "Conducting FA inside unrelated facilities only.", rationale: "Real routines matter." },
    D: { text: "Observation mirrors natural instructional and caregiving contingencies where feasible.", rationale: "Ecological validity definition." },
  }),
  bx("mod08-q9", "IOA on descriptive FBA codes:", "A", {
    A: { text: "Documents observer agreement on episode coding before strong descriptive claims.", rationale: "IOA in descriptive FBA." },
    B: { text: "Unnecessary for scatterplots.", rationale: "Coding agreement matters." },
    C: { text: "Replaces hypothesis statements.", rationale: "Measurement quality." },
    D: { text: "Optional after treatment.", rationale: "During descriptive phase." },
  }),
  bx("mod08-q10", "Exam trap: treating temporal overlap as proof of function:", "C", {
    A: { text: "Best descriptive practice.", rationale: "Correlation ≠ causation." },
    B: { text: "Required for scatterplots.", rationale: "Conservative language needed." },
    C: { text: "High-yield error—overlap motivates hypotheses; manipulated contrasts strengthen claims.", rationale: "Ch 27 confusion point." },
    D: { text: "IOA formula error only.", rationale: "Interpretation issue." },
  }),
  bx("mod08-q11", "Exam trap: mislabeling scatter summaries as completed FA:", "A", {
    A: { text: "High-yield error—descriptive summarizes correlates; FA requires programmed contrasts.", rationale: "Modality discrimination." },
    B: { text: "Correct interchangeably.", rationale: "Different evidence depth." },
    C: { text: "Scatterplots equal FA always.", rationale: "Descriptive ≠ experimental." },
    D: { text: "ABC logs are FA always.", rationale: "Naturalistic vs manipulated." },
  }),
  bx("mod08-q12", "Scatterplots MOST help clinicians by:", "A", {
    A: { text: "Pinpointing temporal windows needing denser qualitative observation.", rationale: "Correct move—Pinpointing temporal windows needing denser qualitative observation." },
    B: { text: "Obviating descriptive ABC summaries.", rationale: "Complement—not replace." },
    C: { text: "Proving causal reinforcers without experimentation.", rationale: "Hypothesis motivation only." },
    D: { text: "Eliminating interobserver calibration.", rationale: "IOA still required." },
  }),
  bx("mod08-q13", "ABC narrative recordings primarily support:", "A", {
    A: { text: "Sequentially documenting presumed antecedent–behavior–consequence links for hypothesis building.", rationale: "Correct move—Sequentially documenting presumed antecedent–behavior–consequence links for hypothesis building." },
    B: { text: "Guaranteeing experimental control.", rationale: "Correlational scaffolding." },
    C: { text: "Replacing informed consent conversations.", rationale: "Ethics remain." },
    D: { text: "Removing graphs from reports.", rationale: "Visuals often accompany descriptive packages." },
  }),
  bx("mod08-q14", "ABC recording in descriptive FBA:", "B", {
    A: { text: "Experimental contrast.", rationale: "Naturalistic log." },
    B: { text: "Links antecedents, behavior, and consequences in natural settings.", rationale: "ABC descriptive tool." },
    C: { text: "Definitive FA proof alone.", rationale: "Hypothesis support." },
    D: { text: "Punishment log exclusively.", rationale: "Correlational data." },
  }),
  bx("mod08-q15", "Episode definitions and timestamp integrity:", "D", {
    A: { text: "Optional for grants.", rationale: "Core descriptive quality." },
    B: { text: "Replace consent process.", rationale: "Data integrity." },
    C: { text: "Identical to FAST rankings.", rationale: "Operational definitions." },
    D: { text: "Support defensible descriptive summaries and scatter interpretations.", rationale: "Domain C measurement." },
  }),
  bx("mod08-q16", "Descriptive convergence workflow—FIRST step:", "C", {
    A: { text: "Brief stakeholders before collecting data.", rationale: "Define windows first." },
    B: { text: "Publish treatment claims.", rationale: "Assessment sequencing." },
    C: { text: "Define observation windows honoring ecological validity.", rationale: "First step—establish preconditions before making analytic claims." },
    D: { text: "Fabricate FA graphs.", rationale: "Ethical breach." },
  }),
  bx("mod08-q17", "Scatterplot spikes before transitions with rare tangible deliveries suggest:", "A", {
    A: { text: "Tentative escape hypothesis pending corroboration.", rationale: "mod08-q1 pattern." },
    B: { text: "Definitive tangible reinforcement.", rationale: "Data misalignment." },
    C: { text: "Completed experimental FA.", rationale: "Descriptive correlate only." },
    D: { text: "Treatment mastery.", rationale: "Assessment phase." },
  }),
  bx("mod08-q18", "Latency overlays in descriptive FBA:", "B", {
    A: { text: "Replace scatterplots entirely.", rationale: "Sharpen temporal hypotheses." },
    B: { text: "Elapsed interval from evocative onset to response—refines hotspot reads.", rationale: "Latency codomain." },
    C: { text: "Prove punishment dominance.", rationale: "Temporal descriptor." },
    D: { text: "Eliminate ABC narratives.", rationale: "Complementary." },
  }),
  bx("mod08-q19", "Two coders disagree until definitions rehearsed—PRIMARY safeguard:", "D", {
    A: { text: "Delete divergent rows secretly.", rationale: "IOA and definitional fidelity." },
    B: { text: "Certify function from single observer.", rationale: "Agreement required." },
    C: { text: "Skip scatterplots.", rationale: "Unrelated." },
    D: { text: "IOA guarding definitional fidelity before interpreting descriptive prevalence.", rationale: "Domain C support." },
  }),
  bx("mod08-q20", "Regional slide captions scatterplots as 'FA proved escape'—MOST accountable correction:", "C", {
    A: { text: "Ship captions unchanged.", rationale: "Modality mislabel." },
    B: { text: "Delete ABC appendices.", rationale: "Integrate data." },
    C: { text: "Relabel honestly as correlational descriptive evidence pending modality-accurate contrasts.", rationale: "Domain E + F." },
    D: { text: "Issue punishment from hotspots.", rationale: "Assessment-led planning." },
  }),
  bx("mod08-q21", "ABC scatter shows attention after 80% of episodes:", "A", {
    A: { text: "Descriptive correlate supporting attention hypothesis—not experimental confirmation alone.", rationale: "Descriptive interpretation." },
    B: { text: "Definitive experimental FA completed.", rationale: "Correlational descriptive." },
    C: { text: "Indirect FAST proof.", rationale: "Observation summary." },
    D: { text: "Treatment mastery.", rationale: "Hypothesis support only." },
  }),
  bx("mod08-q22", "Domain F descriptive FBA items often test:", "B", {
    A: { text: "Token schedules only.", rationale: "Pattern vs cause discrimination." },
    B: { text: "Correlational interpretation, modality labels, hypothesis-vs-proof language.", rationale: "Domain F focus." },
    C: { text: "Chaining grain only.", rationale: "Assessment logic." },
    D: { text: "Group t-tests.", rationale: "Single-subject descriptive." },
  }),
  bx("mod08-q23", "Domain C descriptive items often test:", "D", {
    A: { text: "Phylogeny trivia.", rationale: "IOA and definitions." },
    B: { text: "Marketing claims only.", rationale: "Measurement fidelity." },
    C: { text: "Billing codes.", rationale: "Episode definitions and IOA." },
    D: { text: "Episode definitions, IOA on codes, timestamp integrity on descriptive protocols.", rationale: "Domain C focus." },
  }),
  bx("mod08-q24", "Domain E descriptive breaches include:", "C", {
    A: { text: "Plain-language caveats on correlational graphs.", rationale: "Good practice." },
    B: { text: "Annotated phase windows.", rationale: "Transparent reporting." },
    C: { text: "Selling temporal overlap as airtight proof or labeling descriptive work as completed FA.", rationale: "Stakeholder honesty breach." },
    D: { text: "Publishing motivated hypotheses.", rationale: "Appropriate when labeled." },
  }),
  bx("mod08-q25", "Descriptive FBA versus experimental FA evidence strength:", "A", {
    A: { text: "Experimental FA provides stronger functional confirmation when properly conducted; descriptive provides correlational support.", rationale: "Evidence hierarchy." },
    B: { text: "Identical always.", rationale: "Different depth." },
    C: { text: "Descriptive always stronger.", rationale: "Experimental isolates variables." },
    D: { text: "Indirect strongest.", rationale: "Weakest alone." },
  }),
  bx("mod08-q26", "Collect concurrent ABC narratives tied to coded exemplars—chain step:", "B", {
    A: { text: "Brief stakeholders (step d).", rationale: "After pattern summary." },
    B: { text: "Chain fragment b after ecological windows defined.", rationale: "Descriptive workflow order." },
    C: { text: "Skip operational definitions.", rationale: "Exemplars require definitions." },
    D: { text: "Publish treatment intensity.", rationale: "Assessment sequencing." },
  }),
  bx("mod08-q27", "Summarize recurrent ABC motifs—chain step:", "C", {
    A: { text: "First step before observation.", rationale: "After data collection." },
    B: { text: "Replace informed consent.", rationale: "Unrelated." },
    C: { text: "Chain fragment c after ABC collection.", rationale: "Workflow order." },
    D: { text: "Fabricate FA differentiation.", rationale: "Descriptive summary step." },
  }),
  bx("mod08-q28", "Brief stakeholders with hypothesis-vs-proof caveats—chain step:", "D", {
    A: { text: "Chain fragment d—final communication step.", rationale: "Workflow order." },
    B: { text: "First step before any observation.", rationale: "After analysis." },
    C: { text: "Replaces IOA.", rationale: "Complementary." },
    D: { text: "Optional if graphs look polished.", rationale: "Stakeholder honesty required." },
  }),
  bx("mod08-q29", "High-Yield: overlooking IOA in descriptive work:", "B", {
    A: { text: "Best practice for speed.", rationale: "Definitional fidelity required." },
    B: { text: "Error—unstable coding collapses descriptive conclusions regardless of graph polish.", rationale: "Ch 27 confusion point." },
    C: { text: "Required for FA only.", rationale: "Descriptive IOA too." },
    D: { text: "Scatterplot substitute.", rationale: "Separate safeguard." },
  }),
  bx("mod08-q30", "High-Yield: causal wording from correlational descriptive data:", "A", {
    A: { text: "Error—separate pattern statements from causal statements in every report.", rationale: "Interpretation trap." },
    B: { text: "Required when scatterplots spike.", rationale: "Conservative language." },
    C: { text: "IOA calculation issue.", rationale: "Reporting discipline." },
    D: { text: "Domain G only.", rationale: "Domain F + E." },
  }),
  bx("mod08-q31", "Team uses authentic campus bells as scatterplot anchors:", "C", {
    A: { text: "Ignores ecological validity.", rationale: "Ecological fidelity." },
    B: { text: "Fabricates hotspots.", rationale: "Stakeholder-aligned anchors." },
    C: { text: "Ecological validity—observation faithful to consumer ecology.", rationale: "MTS vignette." },
    D: { text: "Replaces ABC logs.", rationale: "Complementary." },
  }),
  bx("mod08-q32", "Median latency marker on transition scatterplot supports:", "D", {
    A: { text: "Completed FA certification.", rationale: "Descriptive deepening." },
    B: { text: "Deleting ABC appendices.", rationale: "Sharper temporal hypotheses." },
    C: { text: "Indirect FAST replacement.", rationale: "Layer modalities." },
    D: { text: "Temporal covariation plus latency-informed descriptive deepening.", rationale: "Chapter 7/27 extension." },
  }),
  bx("mod08-q33", "Descriptive methods within Chapter 27 FBA:", "B", {
    A: { text: "Replace all indirect and experimental streams.", rationale: "One aggregated modality." },
    B: { text: "Naturalistic correlational stream informing hypotheses before manipulated tests.", rationale: "Multimodal FBA." },
    C: { text: "Stand-alone proof replacing FA always.", rationale: "Corroboration layer." },
    D: { text: "Unrelated to triangulation.", rationale: "Triangulate with indirect/experimental." },
  }),
  bx("mod08-q34", "Responsible follow-up after transition scatterplot escape hypothesis:", "A", {
    A: { text: "Layer latency-coded transitions plus ethically phased contrast probes.", rationale: "Worksheet follow-up." },
    B: { text: "Dismiss descriptive spikes.", rationale: "Pattern warrants follow-up." },
    C: { text: "Issue punitive contingency immediately.", rationale: "Assessment-led planning." },
    D: { text: "Delete tangible data.", rationale: "Integrate patterns." },
  }),
  bx("mod08-q35", "Annotated descriptive graphs with phase windows support:", "C", {
    A: { text: "Marketing only.", rationale: "Procedural fidelity display." },
    B: { text: "Eliminating IOA.", rationale: "Complementary." },
    C: { text: "Domain C display discipline so multidisciplinary audiences interpret correlations responsibly.", rationale: "Annotated summaries." },
    D: { text: "Replacing hypothesis statements.", rationale: "Supports interpretation." },
  }),
  bx("mod08-q36", "BCBA stem: scatter-only data; team skips experimental FA when unsafe:", "D", {
    A: { text: "Label scatter as completed FA.", rationale: "Honest modality label." },
    B: { text: "Hide safety limits.", rationale: "Transparent reporting." },
    C: { text: "Fabricate contrasts.", rationale: "Ethical breach." },
    D: { text: "Report descriptive hypothesis with evidence depth; plan FA when safeguards align.", rationale: "Proportional claims." },
  }),
  bx("mod08-q37", "Permanent product recording in descriptive package:", "B", {
    A: { text: "Always replaces ABC narratives.", rationale: "May complement." },
    B: { text: "May supplement descriptive work when topography leaves durable traces—not automatic FA.", rationale: "Measurement option." },
    C: { text: "Equals experimental FA.", rationale: "Descriptive/measurement." },
    D: { text: "Eliminates IOA.", rationale: "Agreement still needed on definitions." },
  }),
  bx("mod08-q38", "Whole-interval tally vs ABC narrative:", "A", {
    A: { text: "ABC preserves sequential qualitative detail; whole-interval is structured frequency measure.", rationale: "Method discrimination." },
    B: { text: "Identical methods.", rationale: "Different data products." },
    C: { text: "Both prove FA.", rationale: "Descriptive/measurement." },
    D: { text: "Neither used in FBA.", rationale: "Both may appear." },
  }),
  bx("mod08-q39", "Setting events in descriptive hypothesis building:", "C", {
    A: { text: "Irrelevant to descriptive FBA.", rationale: "Contextual MO variables." },
    B: { text: "Replace scatterplots.", rationale: "Complementary." },
    C: { text: "Contextual variables altering MO—include when pattern data support.", rationale: "Hypothesis component." },
    D: { text: "Punishment triggers only.", rationale: "Establishing conditions." },
  }),
  bx("mod08-q40", "Exam trap: scatterplots obviating ABC summaries:", "D", {
    A: { text: "Cooper recommendation.", rationale: "Complementary methods." },
    B: { text: "Required for IOA.", rationale: "Both may be needed." },
    C: { text: "Best efficiency practice always.", rationale: "ABC adds sequential detail." },
    D: { text: "High-yield error—scatterplots complement ABC; neither replaces the other automatically.", rationale: "mod08-q2 distractor trap." },
  }),
  bx("mod08-q41", "Stakeholder briefing after descriptive phase should:", "B", {
    A: { text: "Declare functional mastery from hotspots.", rationale: "Hypothesis-vs-proof caveats." },
    B: { text: "Separate motivated hypotheses from finished classifications with plain language.", rationale: "Briefing discipline." },
    C: { text: "Hide modality limits.", rationale: "Transparent reporting." },
    D: { text: "Skip graphs entirely.", rationale: "Visual summaries useful." },
  }),
  bx("mod08-q42", "Descriptive FBA safmed scatterplot means:", "A", {
    A: { text: "Temporal hotspot map guiding observation density.", rationale: "Safmed back text." },
    B: { text: "Experimental FA completed.", rationale: "Descriptive tool." },
    C: { text: "Indirect FAST substitute.", rationale: "Descriptive stream." },
    D: { text: "Treatment discharge criterion.", rationale: "Assessment tool." },
  }),
  bx("mod08-q43", "Cooper Chapter 27 descriptive supplement emphasizes:", "C", {
    A: { text: "FAST rankings exclusively.", rationale: "Indirect stream." },
    B: { text: "Escape condition logic exclusively.", rationale: "Experimental stream." },
    C: { text: "Ecological observation, IOA discipline, conservative interpretation, honest modality labels.", rationale: "Descriptive emphasis." },
    D: { text: "Token economy schedules.", rationale: "Ch 28." },
  }),
  bx("mod08-q44", "Temporal covariation motivates sharper questions by:", "D", {
    A: { text: "Proving reinforcer maintenance definitively.", rationale: "Hypothesis motivation." },
    B: { text: "Eliminating experimental FA always.", rationale: "May motivate FA when safe." },
    C: { text: "Replacing informed consent.", rationale: "Unrelated." },
    D: { text: "Showing aligned timing between behavior and events—directing next assessment probes.", rationale: "Covariation role." },
  }),
  bx("mod08-q45", "District deck: scatterplots only; captions claim FA—remediation BEFORE funders:", "B", {
    A: { text: "Ship unchanged for optics.", rationale: "Honest relabel." },
    B: { text: "Rewrite captions to descriptive correlational status; cite planned contrasts separately.", rationale: "Worksheet Scenario D." },
    C: { text: "Delete ABC appendices.", rationale: "Integrate data." },
    D: { text: "Destroy interview notes.", rationale: "Layer modalities." },
  }),
  bx("mod08-q46", "Concurrent ABC exemplars tether narratives to:", "A", {
    A: { text: "Repeatable operational definitions underpinning IOA checks.", rationale: "ABC + definitions." },
    B: { text: "Experimental isolation proof.", rationale: "Descriptive scaffolding." },
    C: { text: "Punishment protocols.", rationale: "Assessment focus." },
    D: { text: "Grant budgets.", rationale: "Clinical product." },
  }),
  bx("mod08-q47", "Descriptive workflow drill Cooper teaches:", "C", {
    A: { text: "Name method → declare mastery.", rationale: "Include limits and next step." },
    B: { text: "Skip caveat language.", rationale: "Interpretation control." },
    C: { text: "Identify method → state pattern → state what it does not prove → name next assessment step.", rationale: "Teaching drill." },
    D: { text: "Delete IOA when graphs spike.", rationale: "Measurement integrity." },
  }),
  bx("mod08-q48", "Scatterplot matrix guides funding by:", "D", {
    A: { text: "Eliminating observer training.", rationale: "Focuses scarce coder minutes." },
    B: { text: "Proving function without FA.", rationale: "Hypothesis prioritization." },
    C: { text: "Replacing multidisciplinary review.", rationale: "Scheduling tool." },
    D: { text: "Localizing hotspots where denser descriptive density earns analytic clarity.", rationale: "mod08-q2 rationale." },
  }),
  bx("mod08-q49", "Descriptive FBA chain order BEST sequence:", "A", {
    A: { text: "Ecological windows → ABC narratives → summarize motifs → brief with caveats.", rationale: "Chain a→b→c→d." },
    B: { text: "Brief first → observe later.", rationale: "Workflow order." },
    C: { text: "Publish treatment → collect ABC.", rationale: "Assessment sequencing." },
    D: { text: "Skip ecological validity.", rationale: "Foundation step." },
  }),
  bx("mod08-q50", "Closing Chapter 27 descriptive FBA principle:", "B", {
    A: { text: "Temporal overlap equals completed FA.", rationale: "Modality accuracy." },
    B: { text: "Observe in context; graph patterns honestly; maintain IOA; separate hypotheses from proof; label methods accurately.", rationale: "Chapter 27 descriptive integration." },
    C: { text: "Skip experimental options always.", rationale: "When safeguards align." },
    D: { text: "Hide correlational limits from stakeholders.", rationale: "Transparent briefing." },
  }),
];
