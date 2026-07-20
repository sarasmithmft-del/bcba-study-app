import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 23 — Chaining. */

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

export const CHAPTER_23_CHAINING_QUIZ_BANK: BDSQuestion[] = [
  bx("mod24-q1", "Learner masters first two links but collapses when entire chain required—MOST plausible priority?", "D", {
    A: { text: "Declare chain mastered after partial links only.", rationale: "Whole-chain integrity required." },
    B: { text: "Remove task analysis permanently.", rationale: "Analysis guides adjustments." },
    C: { text: "Switch to punishment-only correction.", rationale: "Engineer supports and fades." },
    D: { text: "Blend total-task supports or backward chaining while measuring whole-chain integrity.", rationale: "Correct move—Blend total-task supports or backward chaining while measuring whole-chain integrity." },
  }),
  bx("mod24-q4", "Cooper Chapter 23 defines a behavior chain as:", "B", {
    A: { text: "Differential reinforcement of successive approximations toward one topography.", rationale: "Shaping—Ch 22." },
    B: { text: "A sequence wherein each response becomes the SD for the next in the series.", rationale: "Behavior chain definition." },
    C: { text: "Withholding reinforcement until terminal form appears.", rationale: "Operant chain structure." },
    D: { text: "Respondent reflex sequence.", rationale: "Operant chaining." },
  }),
  bx("mod24-q5", "Task analysis:", "A", {
    A: { text: "Ordered decomposition listing each discriminable response product in a chain.", rationale: "Task analysis definition." },
    B: { text: "MO assessment only.", rationale: "Step decomposition." },
    C: { text: "Extinction protocol.", rationale: "Chaining prerequisite." },
    D: { text: "Identical to FBA.", rationale: "Skill decomposition tool." },
  }),
  bx("mod24-q6", "Forward chaining:", "C", {
    A: { text: "Teach terminal links first.", rationale: "Backward chaining." },
    B: { text: "Support entire chain each trial with fading.", rationale: "Total-task chaining." },
    C: { text: "Teach initial links to criterion before adding subsequent components sequentially.", rationale: "Forward chaining definition." },
    D: { text: "Shape one response dimension.", rationale: "Chaining assembles links." },
  }),
  bx("mod24-q7", "Backward chaining:", "D", {
    A: { text: "Never teach terminal links first.", rationale: "Terminal-first tactic." },
    B: { text: "Identical to forward chaining.", rationale: "Distinct sequence order." },
    C: { text: "Extinction of early links.", rationale: "Active teaching of links." },
    D: { text: "Teach terminal links first then add preceding components.", rationale: "Backward chaining definition." },
  }),
  bx("mod24-q8", "Total-task chaining:", "B", {
    A: { text: "Teach only link one until mastery.", rationale: "Full chain each trial." },
    B: { text: "Support entire chain each trial with systematic prompt fading across components.", rationale: "Total-task definition." },
    C: { text: "Punish errors on any link.", rationale: "Prompt fading support." },
    D: { text: "Identical to shaping.", rationale: "Multistep sequencing." },
  }),
  bx("mod24-q9", "Inter-response chain latency:", "A", {
    A: { text: "Timing between components flagging where fluency or prompts still lag.", rationale: "Latency definition." },
    B: { text: "MO measure only.", rationale: "Link-to-link timing." },
    C: { text: "IOA statistic replacing prompts.", rationale: "Performance dimension." },
    D: { text: "Irrelevant to chaining.", rationale: "Core metric." },
  }),
  bx("mod24-q10", "Exam trap: claiming chain mastery from partial links only:", "D", {
    A: { text: "Best practice when early links perfect.", rationale: "Whole-chain probes required." },
    B: { text: "Required for forward chaining.", rationale: "Mastery = integrated performance." },
    C: { text: "IOA issue only.", rationale: "Conceptual overclaim." },
    D: { text: "High-yield error—defer mastery until whole-chain integrity under naturalistic SDs.", rationale: "Ch 23 confusion point." },
  }),
  bx("mod24-q11", "Exam trap: confusing forward and backward chaining:", "C", {
    A: { text: "Correct—they are identical.", rationale: "Different link order emphasis." },
    B: { text: "Both always start at link one.", rationale: "Backward starts terminal." },
    C: { text: "High-yield error—forward builds from first link; backward from terminal link.", rationale: "Tactic discrimination." },
    D: { text: "Applies only to verbal behavior.", rationale: "Motor chains too." },
  }),
  bx("mod24-q12", "Exam trap: fading prompts before each link is stable:", "B", {
    A: { text: "Cooper recommendation for speed.", rationale: "Link-level stability first." },
    B: { text: "High-yield error—collect per-link prompt data before whole-chain independence claims.", rationale: "Prompt fade readiness." },
    C: { text: "Required for total-task only.", rationale: "All tactics need link stability." },
    D: { text: "Identical to MO thinning.", rationale: "Prompt hierarchy issue." },
  }),
  bx("mod24-q13", "Chaining versus shaping:", "A", {
    A: { text: "Chaining sequences discrete links; shaping reinforces approximations toward one topography.", rationale: "High-yield discrimination." },
    B: { text: "Identical procedures.", rationale: "Distinct concepts." },
    C: { text: "Shaping always uses forward chaining.", rationale: "Shaping one dimension." },
    D: { text: "Chaining morphs one response via approximations.", rationale: "Shaping does." },
  }),
  bx("mod24-q14", "Flawless early-link data; whole-chain classroom probes crumble; marketing asserts mastery:", "A", {
    A: { text: "Whole-chain control incomplete—defer mastery claims until naturalistic sequencing integrity evidences.", rationale: "Correct move—Whole-chain control incomplete—defer mastery claims until naturalistic sequencing integrity evidences." },
    B: { text: "Discard task analyses after dual-link success.", rationale: "Analysis continues guiding chaining." },
    C: { text: "Default to punitive correction for chain drops.", rationale: "Engineer fades—not cruelty." },
    D: { text: "Ignore inter-response latency when endpoint achieved sporadically.", rationale: "Latency exposes weak control." },
  }),
  bx("mod24-q15", "Family cites culturally disrespectful chaining step resisted at home:", "A", {
    A: { text: "Co-author culturally valid substitutions and stimuli before scripted repetition continues.", rationale: "Correct move—Co-author culturally valid substitutions and stimuli before scripted repetition continues." },
    B: { text: "Insist scripted sequence universal mechanically.", rationale: "Domain E social validity." },
    C: { text: "Delete chain goal without discussion.", rationale: "Collaborative revision." },
    D: { text: "Punish home noncompliance.", rationale: "Revise task analysis." },
  }),
  bx("mod24-q16", "When to pause linking if earlier links wobble:", "C", {
    A: { text: "Never pause—always add next link.", rationale: "Stabilize wobbling links first." },
    B: { text: "Switch to punishment.", rationale: "Re-teach or adjust prompts." },
    C: { text: "Stabilize earlier links with prompt/error-correction plans before advancing.", rationale: "Link stability prerequisite." },
    D: { text: "Delete task analysis.", rationale: "Refine analysis—not abandon." },
  }),
  bx("mod24-q17", "Stimulus control transfer in chaining:", "D", {
    A: { text: "Keep maximal instructor prompts permanently.", rationale: "Fade to naturalistic SDs." },
    B: { text: "Identical to extinction.", rationale: "Transfer to natural cues." },
    C: { text: "Unnecessary if chain fluent in clinic.", rationale: "Generalization target." },
    D: { text: "Fade instructor prompts to naturalistic cues families recognize outside sessions.", rationale: "SD transfer definition." },
  }),
  bx("mod24-q18", "Backward chaining often preferred when:", "B", {
    A: { text: "Early steps most motivating.", rationale: "Terminal product motivation." },
    B: { text: "Terminal products matter most or early steps are error-prone.", rationale: "Backward chaining rationale." },
    C: { text: "Never appropriate clinically.", rationale: "Valid tactic." },
    D: { text: "Shaping one topography.", rationale: "Chaining context." },
  }),
  bx("mod24-q19", "Long inter-response latency between links three and four:", "C", {
    A: { text: "Ignore—chain mastered if endpoint sometimes reached.", rationale: "Latency flags weak links." },
    B: { text: "Proof of sabotage.", rationale: "Program adjustment signal." },
    C: { text: "Suggests weak intermediary control—adjust prompts or fading at those links.", rationale: "Latency interpretation." },
    D: { text: "MO abolishing operation only.", rationale: "Link-level fluency issue." },
  }),
  bx("mod24-q20", "Chaining checklist integrity:", "A", {
    A: { text: "Documents whether each link met criterion under specified prompt levels.", rationale: "Checklist purpose." },
    B: { text: "Optional marketing tool.", rationale: "Domain C documentation." },
    C: { text: "Replaces whole-chain probes.", rationale: "Complements probes." },
    D: { text: "Identical to IOA only.", rationale: "Implementation integrity." },
  }),
  bx("mod24-q21", "Maintenance probes after chain fluency:", "D", {
    A: { text: "Unnecessary once clinic mastery achieved.", rationale: "Sample over time/settings." },
    B: { text: "Replace task analysis permanently.", rationale: "Ongoing verification." },
    C: { text: "Punishment probes only.", rationale: "Performance sampling." },
    D: { text: "Verify continued whole-chain integrity under naturalistic conditions.", rationale: "Maintenance definition." },
  }),
  bx("mod24-q22", "Humane error correction during chaining:", "B", {
    A: { text: "Escalate aversives after missed links.", rationale: "Minimize emotional escalation." },
    B: { text: "Brief neutral correction plus renewed opportunity with appropriate prompt level.", rationale: "Humane chain correction." },
    C: { text: "Restart entire chain with punishment every error.", rationale: "Targeted correction." },
    D: { text: "Ignore all errors.", rationale: "Correct with care." },
  }),
  bx("mod24-q23", "Domain F Chapter 23 items often test:", "C", {
    A: { text: "Token economy rules only.", rationale: "Chaining tactics and integrity." },
    B: { text: "Extinction bursts.", rationale: "Chain assembly logic." },
    C: { text: "Whole-chain integrity, tactic selection, shaping vs chaining.", rationale: "Domain F focus." },
    D: { text: "Equivalence class probes.", rationale: "Chaining fundamentals." },
  }),
  bx("mod24-q24", "IOA on chain link scoring:", "A", {
    A: { text: "Documents agreement on whether each link met criterion before advancing.", rationale: "IOA in chaining." },
    B: { text: "Replaces task analysis.", rationale: "Measurement agreement." },
    C: { text: "Required only after terminal mastery.", rationale: "Ongoing during training." },
    D: { text: "Optional decoration.", rationale: "Supports defensible claims." },
  }),
  bx("mod24-q25", "Chapter 23 pairs with Chapter 22 (Shaping) because:", "D", {
    A: { text: "They are identical.", rationale: "Distinct procedures." },
    B: { text: "Shaping sequences multistep links.", rationale: "Chaining does." },
    C: { text: "Chaining shapes one topography via approximations.", rationale: "Shaping does." },
    D: { text: "Exam requires discriminating assembly of discrete links from approximation of one response.", rationale: "Integration note." },
  }),
  bx("mod24-q26", "Total-task chaining differs from forward chaining because:", "B", {
    A: { text: "Total-task never uses prompts.", rationale: "Systematic fading across full chain." },
    B: { text: "Total-task supports entire chain each trial rather than building link-by-link sequentially.", rationale: "Tactic distinction." },
    C: { text: "Forward chaining supports full chain every trial.", rationale: "Forward adds links sequentially." },
    D: { text: "Identical tactics.", rationale: "Different assembly approaches." },
  }),
  bx("mod24-q27", "Prompt levels per component should be logged because:", "C", {
    A: { text: "Prompts irrelevant to chaining.", rationale: "Per-link fade tracking." },
    B: { text: "Marketing requires prompt counts only.", rationale: "Clinical decision data." },
    C: { text: "Independence claims require evidence each link stabilized under faded prompts.", rationale: "Link-level documentation." },
    D: { text: "Replaces inter-response latency.", rationale: "Complementary metrics." },
  }),
  bx("mod24-q28", "Social validity review of task analysis:", "A", {
    A: { text: "Ensures chain steps are meaningful, dignified, and culturally acceptable to stakeholders.", rationale: "Social validity in chaining." },
    B: { text: "Optional after mastery.", rationale: "Before intensive drill." },
    C: { text: "Replaces measurement.", rationale: "Complements data." },
    D: { text: "Clinician convenience only.", rationale: "Stakeholder-centered." },
  }),
  bx("mod24-q29", "Assent around repetitive chain drill when fatigue rises:", "D", {
    A: { text: "Ignore—complete data quota.", rationale: "Honor assent; modify pacing." },
    B: { text: "Punish fatigue.", rationale: "Assent-sensitive ethics." },
    C: { text: "Skip documentation.", rationale: "Document assent status." },
    D: { text: "Modify pacing, honor assent, revisit task validity and reinforcement.", rationale: "Domain E priority." },
  }),
  bx("mod24-q30", "High-Yield: team calls forward chaining shaping:", "B", {
    A: { text: "Correct terminology.", rationale: "Chaining assembles links." },
    B: { text: "Error—forward chaining is multistep sequencing, not successive approximation of one topography.", rationale: "Confusion point." },
    C: { text: "Both mean extinction.", rationale: "Operant chaining." },
    D: { text: "Applies only to echoics.", rationale: "Motor chains common." },
  }),
  bx("mod24-q31", "Transparent reporting when community cannot reproduce full chain:", "A", {
    A: { text: "Document partial implementation status; revise generalization plan honestly.", rationale: "Domain E transparency." },
    B: { text: "Claim full mastery in external report.", rationale: "Data integrity." },
    C: { text: "Blame family noncompliance publicly.", rationale: "Collaborative problem solving." },
    D: { text: "Delete failed probe data.", rationale: "Honest reporting." },
  }),
  bx("mod24-q32", "Each response in a chain functions as:", "C", {
    A: { text: "Unrelated operant with no relation to next step.", rationale: "SD for next link." },
    B: { text: "MO only.", rationale: "Stimulus product of prior response." },
    C: { text: "SD for the next response after producing its stimulus change.", rationale: "Chain mechanism." },
    D: { text: "Punisher for prior link.", rationale: "Occasioning function." },
  }),
  bx("mod24-q33", "Chaining assembly workflow—FIRST step:", "D", {
    A: { text: "Declare whole-chain mastery.", rationale: "Task analysis first." },
    B: { text: "Thin reinforcement to extinction.", rationale: "Define and teach links." },
    C: { text: "Punish chain breaks.", rationale: "Analysis and validity review." },
    D: { text: "Conduct task analysis and social validity review with stakeholders.", rationale: "First step—establish preconditions before making analytic claims." },
  }),
  bx("mod24-q34", "Board stem: instructor prompts still on link five; team claims independence:", "A", {
    A: { text: "Prompt fade incomplete—continue link-level data before independence claims.", rationale: "Per-link prompt issue." },
    B: { text: "Accept from clinic average.", rationale: "Link-specific evidence." },
    C: { text: "Delete link five from analysis.", rationale: "Refine fading plan." },
    D: { text: "Punish prompt dependence.", rationale: "Systematic fade." },
  }),
  bx("mod24-q35", "Selecting chaining tactic should consider:", "B", {
    A: { text: "Clinician preference only.", rationale: "Motivation, safety, error patterns." },
    B: { text: "Motivation across links, safety constraints, and where errors cluster.", rationale: "Tactic selection factors." },
    C: { text: "Random assignment.", rationale: "Analytic matching." },
    D: { text: "Punishment readiness.", rationale: "Reinforcement-forward." },
  }),
  bx("mod24-q36", "Partial-link mastery without whole-chain integrity misleads:", "C", {
    A: { text: "Only insurers—not partners.", rationale: "Community partners too." },
    B: { text: "No one—partial links sufficient.", rationale: "Integrated performance required." },
    C: { text: "Community partners expecting functional multistep performance.", rationale: "Generalization accountability." },
    D: { text: "IOA observers only.", rationale: "Functional outcome focus." },
  }),
  bx("mod24-q37", "Generalize chains to natural SDs means:", "A", {
    A: { text: "Chain runs under cues present in daily routines—not only therapist verbal prompts.", rationale: "Naturalistic SD transfer." },
    B: { text: "Chain never leaves clinic.", rationale: "Generalization target." },
    C: { text: "Remove all reinforcement permanently.", rationale: "Maintain contingencies in natural settings." },
    D: { text: "Identical to DRO.", rationale: "Stimulus control transfer." },
  }),
  bx("mod24-q38", "BCBA stem: latency spikes at middle links during probe:", "D", {
    A: { text: "Ignore—endpoint reached once.", rationale: "Middle-link weakness." },
    B: { text: "Declare sabotage.", rationale: "Adjust prompts at weak links." },
    C: { text: "Abandon chaining permanently.", rationale: "Targeted re-teaching." },
    D: { text: "Analyze intermediary links; adjust prompts, fading, or tactic.", rationale: "Latency-guided programming." },
  }),
  bx("mod24-q39", "Dignified task selection in chaining:", "B", {
    A: { text: "Any clinician-chosen sequence acceptable.", rationale: "Stakeholder dignity and validity." },
    B: { text: "Prioritize meaningful, age-appropriate, culturally valid multistep skills.", rationale: "Ethical task selection." },
    C: { text: "Maximize repetitive drill regardless of assent.", rationale: "Assent-sensitive pacing." },
    D: { text: "Hide steps from families.", rationale: "Collaborative transparency." },
  }),
  bx("mod24-q40", "Re-teaching a collapsed link during forward chaining:", "C", {
    A: { text: "Always add next link anyway.", rationale: "Stabilize collapsed link." },
    B: { text: "Switch to punishment-only.", rationale: "Prompt and reinforcement adjustment." },
    C: { text: "Pause advancement; reinforce and fade prompts on weak link before proceeding.", rationale: "Forward chain adjustment." },
    D: { text: "Delete entire chain goal.", rationale: "Targeted remediation." },
  }),
  bx("mod24-q41", "Whole-chain probe in classroom fails while clinic dual-link perfect:", "A", {
    A: { text: "Generalization/integrity incomplete—program naturalistic SDs and whole-chain supports.", rationale: "Setting transfer issue." },
    B: { text: "Chain mastered—ignore classroom.", rationale: "Probe setting matters." },
    C: { text: "Punish classroom performance.", rationale: "Environmental programming." },
    D: { text: "Discard task analysis.", rationale: "Refine generalization plan." },
  }),
  bx("mod24-q42", "Ethical chaining supervision prioritizes:", "D", {
    A: { text: "Partial-link marketing claims.", rationale: "Honest whole-chain reporting." },
    B: { text: "Universal scripted steps ignoring culture.", rationale: "Social validity." },
    C: { text: "Punishment-first chain correction.", rationale: "Humane error correction." },
    D: { text: "Culturally valid task analyses, link-level data, assent, transparent reporting.", rationale: "Domain E + C." },
  }),
  bx("mod24-q43", "Supervisor asks for inter-response latency when team claims fluency:", "B", {
    A: { text: "Unnecessary if endpoint reached.", rationale: "Latency validates fluency." },
    B: { text: "Appropriate Domain C ask—latency exposes weak intermediary control.", rationale: "Supervisory standard." },
    C: { text: "Replace with parent anecdote.", rationale: "Objective measurement." },
    D: { text: "Punish latency.", rationale: "Program adjustment." },
  }),
  bx("mod24-q44", "Forward chaining BEST when:", "C", {
    A: { text: "Terminal product only motivating.", rationale: "Often backward chaining." },
    B: { text: "Never use forward chaining.", rationale: "Valid when early links accessible." },
    C: { text: "Initial links are accessible and success builds momentum sequentially.", rationale: "Forward chaining fit." },
    D: { text: "Shaping one topography.", rationale: "Chaining context." },
  }),
  bx("mod24-q45", "BCBA stem: RBT wants to claim chain mastery after links 1–2 only:", "A", {
    A: { text: "Defer mastery—require whole-chain integrity and naturalistic probes.", rationale: "Partial-link trap." },
    B: { text: "Approve for marketing.", rationale: "Data integrity." },
    C: { text: "Punish links 3+ errors.", rationale: "Engineer supports." },
    D: { text: "Delete remaining links from analysis.", rationale: "Complete task analysis." },
  }),
  bx("mod24-q46", "Chaining versus task analysis:", "D", {
    A: { text: "Identical terms.", rationale: "Analysis precedes chaining." },
    B: { text: "Task analysis is the finished performance.", rationale: "Analysis is planning tool." },
    C: { text: "Chaining replaces need for analysis.", rationale: "Analysis guides chaining." },
    D: { text: "Task analysis decomposes the skill; chaining is the teaching procedure assembling links.", rationale: "Discrimination." },
  }),
  bx("mod24-q47", "Link-level prompt data before whole-chain claims prevents:", "C", {
    A: { text: "All measurement.", rationale: "Premature independence claims." },
    B: { text: "Social validity review.", rationale: "Prompt fade accountability." },
    C: { text: "Hidden prompt dependence on middle links during alleged fluency.", rationale: "Documentation purpose." },
    D: { text: "MO assessment.", rationale: "Complementary." },
  }),
  bx("mod24-q48", "Cooper emphasizes measuring integrity of:", "B", {
    A: { text: "Parent satisfaction only.", rationale: "Chaining checklists and probes." },
    B: { text: "Chaining checklists, link prompts, latency, and whole-chain performance.", rationale: "Measurement bundle." },
    C: { text: "Punishment counts exclusively.", rationale: "Reinforcement-forward chaining." },
    D: { text: "Extinction bursts only.", rationale: "Chaining metrics." },
  }),
  bx("mod24-q49", "Total-task with systematic fading versus forward chaining:", "A", {
    A: { text: "Total-task runs full chain each trial; forward adds links sequentially after criterion.", rationale: "Tactic comparison." },
    B: { text: "Identical always.", rationale: "Different assembly." },
    C: { text: "Forward never uses prompts.", rationale: "Both use prompts/fades." },
    D: { text: "Total-task teaches one link only.", rationale: "Full chain each trial." },
  }),
  bx("mod24-q50", "Closing Chapter 23 principle:", "B", {
    A: { text: "Partial early links prove chain mastery.", rationale: "Whole-chain integrity required." },
    B: { text: "Valid task analysis, appropriate tactic, link-level prompts/latency data, whole-chain probes, natural SD transfer, culturally valid ethical practice.", rationale: "Chapter 23 integration." },
    C: { text: "Chaining equals shaping.", rationale: "Distinct procedures." },
    D: { text: "Ignore inter-response latency.", rationale: "Core fluency metric." },
  }),
];
