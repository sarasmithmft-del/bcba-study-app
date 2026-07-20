import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 22 — Shaping. */

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

export const CHAPTER_22_SHAPING_QUIZ_BANK: BDSQuestion[] = [
  bx("mod23-q1", "Graph flatlines after massive criterion jumps—MOST defensible analytic move?", "A", {
    A: { text: "Reduce leap size, verify MO, reintroduce denser reinforcement until contact resumes.", rationale: "Classic Ch 22 plateau vignette." },
    B: { text: "Escalate punishment until graphs move.", rationale: "Shaping expects environmental adjustment." },
    C: { text: "Cancel shaping permanently.", rationale: "Grain/MO adjustment indicated." },
    D: { text: "Hide flat panels from reports.", rationale: "Transparency breach." },
  }),
  bx("mod23-q4", "Cooper Chapter 22 defines shaping as:", "C", {
    A: { text: "Sequencing discrete multistep links into unified chains.", rationale: "Chaining—Ch 23." },
    B: { text: "Withholding all reinforcement until terminal form appears.", rationale: "Differential reinforcement of approximations." },
    C: { text: "Differentially reinforcing successive approximations toward a terminal topography.", rationale: "Shaping definition." },
    D: { text: "Punishing all non-terminal responses.", rationale: "Reinforcement-forward shaping." },
  }),
  bx("mod23-q5", "Successive approximation:", "B", {
    A: { text: "One-shot mastery requirement.", rationale: "Graded steps." },
    B: { text: "Reinforcing graded steps morphing current performance toward terminal criteria.", rationale: "Successive approximation definition." },
    C: { text: "Identical to backward chaining.", rationale: "Shaping one topography." },
    D: { text: "Extinction until correct form.", rationale: "Active reinforcement of approximations." },
  }),
  bx("mod23-q6", "Terminal definition in shaping:", "D", {
    A: { text: "Vague goal label only.", rationale: "Operational description required." },
    B: { text: "First approximation tier.", rationale: "Final criterion." },
    C: { text: "Prompt level documentation.", rationale: "Topography under stimulus control." },
    D: { text: "Operational description of final topography under acceptable stimulus control.", rationale: "Terminal definition." },
  }),
  bx("mod23-q7", "Dimensional grain:", "A", {
    A: { text: "Fineness of each leap—too large invites plateaus; too small wastes contact.", rationale: "Grain definition." },
    B: { text: "IOA statistic only.", rationale: "Programming parameter." },
    C: { text: "MO abolishing operation.", rationale: "Approximation step size." },
    D: { text: "Chain link count.", rationale: "Shaping dimension." },
  }),
  bx("mod23-q8", "Criterion shift during shaping:", "C", {
    A: { text: "Random tier jumps whenever clinician impatient.", rationale: "Preset stability rules." },
    B: { text: "Never raise demands once shaping starts.", rationale: "Shifts after stability." },
    C: { text: "Raising mastery demands once stability meets preset rules within an approximation tier.", rationale: "Criterion shift definition." },
    D: { text: "Identical to extinction.", rationale: "Reinforcement continues on new tier." },
  }),
  bx("mod23-q9", "Shaping plateau:", "B", {
    A: { text: "Proof of learner sabotage.", rationale: "Signals program adjustment." },
    B: { text: "Stability without progress—adjust grain, MO, or prompts—not blame.", rationale: "Plateau definition." },
    C: { text: "Required terminal state.", rationale: "Problem to solve analytically." },
    D: { text: "Reason to delete data.", rationale: "Document and adjust." },
  }),
  bx("mod23-q10", "Reinforcement thinning in shaping:", "D", {
    A: { text: "Begin session one with VR 10.", rationale: "After approximation stability." },
    B: { text: "Remove all reinforcement at first plateau.", rationale: "Systematic widening when stable." },
    C: { text: "Identical to punishment thinning.", rationale: "Schedule manipulation post-stability." },
    D: { text: "Systematically widening schedule requirements once approximations stabilize.", rationale: "Thinning definition." },
  }),
  bx("mod23-q11", "Exam trap: criterion jumps too large for current performance:", "A", {
    A: { text: "High-yield error—reduce grain and restore reinforcement contact.", rationale: "Ch 22 confusion point." },
    B: { text: "Best practice for rapid mastery.", rationale: "Invites extinction-heavy plateaus." },
    C: { text: "Required for chaining.", rationale: "Shaping grain issue." },
    D: { text: "IOA problem only.", rationale: "Programming logic error." },
  }),
  bx("mod23-q12", "Exam trap: mislabeling shaping plateaus as noncompliance:", "C", {
    A: { text: "Correct clinical framing.", rationale: "Plateaus cue environmental edits." },
    B: { text: "Domain C only issue.", rationale: "Domain E and F concern." },
    C: { text: "High-yield error—adjust grain/MO/environment with humane reinforcement.", rationale: "Blame misattributes cause." },
    D: { text: "Required for thinning.", rationale: "Opposite of analytic response." },
  }),
  bx("mod23-q13", "Exam trap: thinning reinforcement before stability:", "B", {
    A: { text: "Standard Cooper recommendation.", rationale: "Stability thresholds first." },
    B: { text: "High-yield error—document within-tier variability before thinning claims.", rationale: "mod23-q2 theme." },
    C: { text: "Identical to DRO.", rationale: "Schedule readiness issue." },
    D: { text: "Required for extinction.", rationale: "Shaping thinning logic." },
  }),
  bx("mod23-q14", "Shaping versus chaining:", "D", {
    A: { text: "Identical procedures.", rationale: "Shaping morphs one response; chaining links steps." },
    B: { text: "Chaining shapes one topography.", rationale: "Shaping does." },
    C: { text: "Shaping always uses forward chaining.", rationale: "Distinct concepts." },
    D: { text: "Shaping differentially reinforces approximations toward one criterion; chaining sequences discrete links.", rationale: "Discrimination." },
  }),
  bx("mod23-q15", "Thinning persists while dispersion explodes inside each approximation tier:", "A", {
    A: { text: "Annotate within-tier variability alongside stability thresholds before claiming thinning readiness.", rationale: "Correct move—Annotate within-tier variability alongside stability thresholds before claiming thinning readiness." },
    B: { text: "Suppress variability for hero captions.", rationale: "Misleading reporting." },
    C: { text: "Punish learners for jitter categorically.", rationale: "Jitter cues program edits." },
    D: { text: "Delete reinforcement after first plateau.", rationale: "Humane densification indicated." },
  }),
  bx("mod23-q16", "Massive leaps strand learner on plateau; clinician posts about sabotage:", "A", {
    A: { text: "Coach analytic accountability—adjust grain/MO/environment; remove blame-forward narratives.", rationale: "Correct move—Coach analytic accountability—adjust grain/MO/environment; remove blame-forward narratives." },
    B: { text: "Amplify public shaming reinforcing accountability.", rationale: "Shaming substitutes punishment." },
    C: { text: "Delete plateau sessions quietly.", rationale: "Cherry picking." },
    D: { text: "Declare sabotage empirically proven from chat.", rationale: "Needs measurement evidence." },
  }),
  bx("mod23-q17", "Operational definitions per approximation tier should be:", "C", {
    A: { text: "Subjective impressions only.", rationale: "Observable measurable criteria." },
    B: { text: "Identical to terminal form from trial one.", rationale: "Graded tiers differ." },
    C: { text: "Observable, measurable descriptions enabling IOA and criterion shifts.", rationale: "Operational definition standard." },
    D: { text: "Hidden from stakeholders.", rationale: "Transparency supports collaboration." },
  }),
  bx("mod23-q18", "Prompt hierarchies in shaping:", "B", {
    A: { text: "Permanent maximal prompts preferred.", rationale: "Fade toward independence." },
    B: { text: "Graduated assistance bridging plateaus while fading to independent control.", rationale: "Prompt hierarchy role." },
    C: { text: "Identical to punishment hierarchy.", rationale: "Antecedent assistance." },
    D: { text: "Unrelated to shaping.", rationale: "Common bridging tool." },
  }),
  bx("mod23-q19", "Supervisor reviews cumulative record—hero slope without dispersion commentary:", "D", {
    A: { text: "Sufficient for thinning approval.", rationale: "Variability within tiers required." },
    B: { text: "Proves sabotage.", rationale: "Measurement gap." },
    C: { text: "Replaces MO assessment.", rationale: "Complements MO analysis." },
    D: { text: "Request within-tier variability annotation before thinning or mastery claims.", rationale: "Domain C integrity." },
  }),
  bx("mod23-q20", "Grain so fine learner makes no measurable progress for weeks:", "A", {
    A: { text: "Increase leap size thoughtfully while monitoring reinforcement contact.", rationale: "Too-small grain wastes opportunities." },
    B: { text: "Punish lack of progress.", rationale: "Environmental adjustment." },
    C: { text: "Abandon terminal definition.", rationale: "Adjust grain—not goal." },
    D: { text: "Hide cumulative record.", rationale: "Transparency required." },
  }),
  bx("mod23-q21", "MO documentation in shaping matters because:", "C", {
    A: { text: "MO irrelevant to reinforcement contact.", rationale: "MO affects reinforcer effectiveness." },
    B: { text: "MO replaces operational definitions.", rationale: "Complementary analysis." },
    C: { text: "Plateaus may reflect MO/reinforcer value—not only grain errors.", rationale: "MO assessment on plateaus." },
    D: { text: "MO excuses intimidation.", rationale: "Ethical violation." },
  }),
  bx("mod23-q22", "Latency between reinforcements during shaping:", "B", {
    A: { text: "Irrelevant to programming.", rationale: "Documents stamina vs thinning pace." },
    B: { text: "Informs whether thinning matches learner stamina alongside stability rules.", rationale: "Domain C metric." },
    C: { text: "Replaces IOA.", rationale: "Performance dimension." },
    D: { text: "MO measure exclusively.", rationale: "Shaping fluency indicator." },
  }),
  bx("mod23-q23", "Regressing criteria compassionately:", "D", {
    A: { text: "Never permitted in shaping.", rationale: "Valid when leaps too large." },
    B: { text: "Identical to punishment.", rationale: "Restores contact opportunities." },
    C: { text: "Hides failure from team.", rationale: "Transparent analytic move." },
    D: { text: "Temporarily lowering criterion to re-establish reinforcement contact when leaps overshoot performance.", rationale: "Compassionate regression." },
  }),
  bx("mod23-q24", "Splitting dimensions during shaping:", "A", {
    A: { text: "Separating confounded response dimensions when progress stalls on combined criterion.", rationale: "Analytic refinement." },
    B: { text: "Deleting terminal definition.", rationale: "Clarifies control." },
    C: { text: "Identical to chaining.", rationale: "Still shaping dimensions." },
    D: { text: "Punishment procedure.", rationale: "Programming tactic." },
  }),
  bx("mod23-q25", "Chapter 22 pairs with Chapter 23 (Chaining) because:", "C", {
    A: { text: "They are identical.", rationale: "Distinct procedures." },
    B: { text: "Shaping sequences multistep links.", rationale: "Chaining does." },
    C: { text: "Shaping builds single topographies; chaining assembles discrete steps—exam discrimination required.", rationale: "Integration note." },
    D: { text: "Chaining replaces all shaping.", rationale: "Both remain relevant." },
  }),
  bx("mod23-q26", "Reinforcement-rich shaping supersedes:", "B", {
    A: { text: "Operational definitions.", rationale: "Complements definitions." },
    B: { text: "Intimidation choreography when progress stalls.", rationale: "Domain E alignment." },
    C: { text: "Variability documentation.", rationale: "Works alongside measurement." },
    D: { text: "Terminal definitions.", rationale: "Core to shaping." },
  }),
  bx("mod23-q27", "Discriminative stimuli in shaping:", "A", {
    A: { text: "Clarify contexts in which approximations contact reinforcement.", rationale: "SD role in shaping." },
    B: { text: "Replace reinforcers.", rationale: "Occasion reinforcement." },
    C: { text: "Identical to S-delta for all approximations.", rationale: "Context signaling." },
    D: { text: "Unnecessary if prompts used.", rationale: "Stimulus control target." },
  }),
  bx("mod23-q28", "Domain F Chapter 22 items often test:", "D", {
    A: { text: "Ethics codes unrelated to measurement.", rationale: "Grain and criterion logic." },
    B: { text: "Token economy only.", rationale: "Shaping fundamentals." },
    C: { text: "FBA functional classes.", rationale: "Approximation programming." },
    D: { text: "Grain size decisions, plateau interpretation, shaping vs chaining.", rationale: "Domain F shaping focus." },
  }),
  bx("mod23-q29", "IOA on approximation scoring:", "C", {
    A: { text: "Optional decoration.", rationale: "Supports defensible shifts." },
    B: { text: "Replaces MO analysis.", rationale: "Measurement agreement." },
    C: { text: "Documents agreement on tier classification before criterion shifts.", rationale: "IOA in shaping." },
    D: { text: "Required only after terminal mastery.", rationale: "Ongoing during shaping." },
  }),
  bx("mod23-q30", "High-Yield: confusing shaping with extinction:", "B", {
    A: { text: "Correct—shaping withholds all reinforcement.", rationale: "Active differential reinforcement." },
    B: { text: "Error—shaping reinforces approximations; extinction withholds prior reinforcer.", rationale: "Confusion point." },
    C: { text: "Identical processes.", rationale: "Opposite contingency arrangements." },
    D: { text: "Applies only to verbal behavior.", rationale: "All operant topographies." },
  }),
  bx("mod23-q31", "Initial repertoire assessment before shaping:", "A", {
    A: { text: "Identify starting approximation tier aligned with current performance.", rationale: "Baseline for ladder." },
    B: { text: "Skip—begin at terminal definition.", rationale: "Risk extinction contact loss." },
    C: { text: "Identical to whole-chain probe.", rationale: "Chaining assessment." },
    D: { text: "Punishment baseline only.", rationale: "Reinforcement-forward." },
  }),
  bx("mod23-q32", "Environmental revision when plateaus persist:", "D", {
    A: { text: "Blame learner noncompliance publicly.", rationale: "Analytic accountability." },
    B: { text: "Hide sessions from report.", rationale: "Transparency." },
    C: { text: "Automatic service termination.", rationale: "Adjust variables first." },
    D: { text: "Revise grain, MO, prompts, or setting variables before escalating aversive control.", rationale: "Environmental adjustment." },
  }),
  bx("mod23-q33", "Within-tier variability commentary:", "C", {
    A: { text: "Suppress to preserve marketing.", rationale: "Honest notes protect stakeholders." },
    B: { text: "Replaces cumulative record.", rationale: "Supplements graph review." },
    C: { text: "Safeguards against collapse surprises when thinning prematurely.", rationale: "mod23-q2 rationale." },
    D: { text: "Required only for chaining.", rationale: "Shaping thinning readiness." },
  }),
  bx("mod23-q34", "Humane error correction during shaping:", "B", {
    A: { text: "Escalate aversives after errors.", rationale: "Reinforcement-forward care." },
    B: { text: "Brief neutral correction plus renewed opportunity for reinforced approximation.", rationale: "Humane error correction." },
    C: { text: "Ignore all errors permanently.", rationale: "Correct errors with care." },
    D: { text: "Public shaming for plateaus.", rationale: "Domain E violation." },
  }),
  bx("mod23-q35", "Stability rules before criterion shift typically include:", "A", {
    A: { text: "Preset percentage or consecutive trial criteria met within current tier.", rationale: "Objective shift rules." },
    B: { text: "Clinician frustration threshold.", rationale: "Data-driven rules." },
    C: { text: "Parent request alone.", rationale: "Measurement-based." },
    D: { text: "Random number generator.", rationale: "Preset protocols." },
  }),
  bx("mod23-q36", "Board stem: average accuracy rises but individual trials scatter wildly within tier:", "C", {
    A: { text: "Thin immediately from average alone.", rationale: "Dispersion matters." },
    B: { text: "Punish scatter.", rationale: "Program adjustment." },
    C: { text: "Document dispersion; consider grain or MO adjustment before thinning.", rationale: "Variability vignette." },
    D: { text: "Delete outlier trials without note.", rationale: "Transparent reporting." },
  }),
  bx("mod23-q37", "Shaping ladder workflow—FIRST step:", "D", {
    A: { text: "Thin reinforcement to VR 10.", rationale: "Define repertoires first." },
    B: { text: "Punish non-terminal forms.", rationale: "Define and reinforce approximations." },
    C: { text: "Chain backward through task analysis.", rationale: "Chaining workflow." },
    D: { text: "Define terminal and initial repertoires operationally with stakeholders.", rationale: "First step—establish preconditions before making analytic claims." },
  }),
  bx("mod23-q38", "Truthful reporting when progress stalls:", "A", {
    A: { text: "Document plateau, adjustments attempted, and revised grain/MO plans.", rationale: "Domain E transparency." },
    B: { text: "Cherry pick ascending sessions only.", rationale: "Misleading." },
    C: { text: "Blame learner in external report.", rationale: "Analytic accountability." },
    D: { text: "Claim mastery despite flatline.", rationale: "Data integrity." },
  }),
  bx("mod23-q39", "Reinforcer selection in shaping aligns with:", "B", {
    A: { text: "Clinician convenience only.", rationale: "MO and learner preference." },
    B: { text: "MO documentation and learner-specific establishing conditions.", rationale: "Reinforcer alignment." },
    C: { text: "Punishment schedule.", rationale: "Appetitive reinforcement." },
    D: { text: "Extinction conditions.", rationale: "Contact maintenance." },
  }),
  bx("mod23-q40", "Extinction bursts during shaping often signal:", "C", {
    A: { text: "Learner sabotage proven.", rationale: "Criterion leap may be too large." },
    B: { text: "Successful terminal mastery.", rationale: "Contact loss indicator." },
    C: { text: "Grain too large or reinforcement contact lost—reduce leap or densify schedule.", rationale: "Burst interpretation." },
    D: { text: "Time to punish bursts.", rationale: "Environmental adjustment." },
  }),
  bx("mod23-q41", "BCBA stem: team forward-chains hand washing while calling it shaping:", "D", {
    A: { text: "Correct terminology.", rationale: "Chaining—not shaping." },
    B: { text: "Shaping because water involved.", rationale: "Procedure mislabel." },
    C: { text: "Extinction procedure.", rationale: "Chaining misnamed." },
    D: { text: "Mislabel—multistep sequencing is chaining; shaping builds one topography via approximations.", rationale: "High-yield discrimination." },
  }),
  bx("mod23-q42", "Cumulative record review prioritizes:", "A", {
    A: { text: "Trend, variability within tiers, and latency between reinforcements.", rationale: "Supervisor review focus." },
    B: { text: "Hero caption only.", rationale: "Dispersion required." },
    C: { text: "Parent satisfaction survey replacing data.", rationale: "Direct measurement." },
    D: { text: "Punishment count exclusively.", rationale: "Reinforcement shaping focus." },
  }),
  bx("mod23-q43", "Ethical shaping supervision prioritizes:", "B", {
    A: { text: "Blame-forward staff chat when plateaus occur.", rationale: "Coaching adjustment." },
    B: { text: "Measurement-led grain/MO edits and reinforcement-rich humane practice.", rationale: "Domain E + F." },
    C: { text: "Concealing flat graphs from families.", rationale: "Transparency." },
    D: { text: "Punishment-first plateau response.", rationale: "Reinforcement-rich shaping." },
  }),
  bx("mod23-q44", "Preset data rules governing criterion shifts prevent:", "C", {
    A: { text: "All measurement.", rationale: "Enable consistent decisions." },
    B: { text: "Stakeholder collaboration.", rationale: "Clarify shift timing." },
    C: { text: "Arbitrary massive leaps driven by impatience.", rationale: "Rule-governed shifts." },
    D: { text: "MO assessment.", rationale: "Complementary." },
  }),
  bx("mod23-q45", "Learner contacts reinforcement every trial at current tier for preset stability count:", "A", {
    A: { text: "Criterion shift may be justified if preset rules fully met—probe next approximation.", rationale: "Ready shift logic." },
    B: { text: "Jump three tiers immediately without probe.", rationale: "Single-tier shifts." },
    C: { text: "Extinction intentional.", rationale: "Maintain contact." },
    D: { text: "Remove all prompts without assessment.", rationale: "Systematic fade." },
  }),
  bx("mod23-q46", "Supervisor asks for variability logs when team claims thinning readiness:", "D", {
    A: { text: "Unnecessary if slope pretty.", rationale: "Within-tier dispersion required." },
    B: { text: "Punish supervisor request.", rationale: "Quality assurance." },
    C: { text: "Replace with parent anecdote.", rationale: "Objective logs." },
    D: { text: "Appropriate Domain C ask—annotate dispersion before thinning.", rationale: "Supervisory standard." },
  }),
  bx("mod23-q47", "BCBA stem: plateau after leap; RBT wants to add punishment:", "C", {
    A: { text: "Approve punishment for graph movement.", rationale: "Adjust grain/MO first." },
    B: { text: "Terminate shaping permanently.", rationale: "Environmental revision." },
    C: { text: "Coach reduce leap, verify MO, densify reinforcement—humane adjustment.", rationale: "Plateau vignette." },
    D: { text: "Hide plateau from BCBA.", rationale: "Supervision transparency." },
  }),
  bx("mod23-q48", "Too-large grain MOST likely produces:", "B", {
    A: { text: "Instant terminal mastery.", rationale: "Extinction contact loss." },
    B: { text: "Extinction-heavy plateau or burst before new approximations contact reinforcement.", rationale: "Large leap consequence." },
    C: { text: "Generalized imitation.", rationale: "Shaping grain issue." },
    D: { text: "Automatic chaining.", rationale: "Unrelated." },
  }),
  bx("mod23-q49", "Shaping versus prompt fading:", "A", {
    A: { text: "Shaping changes response topography via approximations; fading reduces prompt control while topography may stay constant.", rationale: "Related but distinct." },
    B: { text: "Identical always.", rationale: "Different mechanisms." },
    C: { text: "Fading replaces all shaping.", rationale: "Often combined." },
    D: { text: "Shaping never uses prompts.", rationale: "Prompts bridge plateaus." },
  }),
  bx("mod23-q50", "Closing Chapter 22 principle:", "B", {
    A: { text: "Massive criterion jumps accelerate ethical mastery.", rationale: "Grain must match performance." },
    B: { text: "Define terminal and approximations operationally; right-size grain; document variability; thin after stability; adjust environment—not blame—on plateaus.", rationale: "Chapter 22 integration." },
    C: { text: "Plateaus prove noncompliance.", rationale: "Program adjustment signal." },
    D: { text: "Shaping equals chaining.", rationale: "Distinct procedures." },
  }),
];
