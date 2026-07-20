import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 25 — Differential Reinforcement. */

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

export const CHAPTER_25_DIFFERENTIAL_REINFORCEMENT_QUIZ_BANK: BDSQuestion[] = [
  bx("mod26-q1", "Team implements DRO but reinforcers arrive rarely even when intervals clean—MOST immediate concern?", "A", {
    A: { text: "Schedule may function as omission-based coercion—fix reinforcement density and verify humane spacing.", rationale: "Correct move—Schedule may function as omission-based coercion—fix reinforcement density and verify humane spacing." },
    B: { text: "Proof of automatic mastery.", rationale: "Sparse reinforcement concern." },
    C: { text: "Ignore because behavior decreased.", rationale: "Ethical density matters." },
    D: { text: "Replace with punishment exclusively.", rationale: "Fix DR integrity first." },
  }),
  bx("mod26-q4", "Cooper Chapter 25 differential reinforcement:", "C", {
    A: { text: "Withholds all reinforcement for every behavior.", rationale: "Selective reinforcement arrangement." },
    B: { text: "Identical to punishment only.", rationale: "Reinforcement-forward procedures." },
    C: { text: "Thickens desirable classes while thinning challenges via differential reinforcement contingencies.", rationale: "DR overview." },
    D: { text: "Extinction without alternatives always.", rationale: "Often pairs alternatives." },
  }),
  bx("mod26-q5", "DRA (differential reinforcement of alternative behavior):", "B", {
    A: { text: "Reinforces intervals without any target topography.", rationale: "DRO." },
    B: { text: "Reinforces an adaptive alternative while withholding reinforcement for the challenge behavior.", rationale: "DRA definition." },
    C: { text: "Reinforces low rates only.", rationale: "DRL." },
    D: { text: "Adds aversive consequences.", rationale: "Reinforcement procedure." },
  }),
  bx("mod26-q6", "DRO (differential reinforcement of other behavior):", "D", {
    A: { text: "Reinforces incompatible topography only.", rationale: "DRI." },
    B: { text: "Reinforces alternative mand only.", rationale: "DRA." },
    C: { text: "Punishes target behavior.", rationale: "Reinforces non-target intervals." },
    D: { text: "Reinforces intervals during which target topography did not occur.", rationale: "DRO definition." },
  }),
  bx("mod26-q7", "DRI (differential reinforcement of incompatible behavior):", "A", {
    A: { text: "Reinforces a topography that physically blocks occurrence of the challenge behavior.", rationale: "DRI definition." },
    B: { text: "Reinforces any interval without target.", rationale: "DRO." },
    C: { text: "Reinforces low spacing only.", rationale: "DRL." },
    D: { text: "Identical to DRA always.", rationale: "Incompatibility emphasis." },
  }),
  bx("mod26-q8", "DRL (differential reinforcement of low rates):", "C", {
    A: { text: "Requires zero occurrences always.", rationale: "Reduction not always elimination." },
    B: { text: "Identical to DRO.", rationale: "Rate-focused spacing." },
    C: { text: "Reinforces lengthened spacing when reduction—not elimination—is clinically valid.", rationale: "DRL definition." },
    D: { text: "Extinction procedure.", rationale: "Reinforcement for lower rate." },
  }),
  bx("mod26-q9", "Full-session DRO caveat:", "B", {
    A: { text: "Always most humane option.", rationale: "Coercion risk when density low." },
    B: { text: "Interval spanning entire sessions risks coercion if reinforcement density punishes unavoidable lapses.", rationale: "Full-session DRO caveat." },
    C: { text: "Identical to DRA.", rationale: "Interval design issue." },
    D: { text: "Required for IOA.", rationale: "Ethical spacing concern." },
  }),
  bx("mod26-q10", "Exam trap: confusing DRA and DRO:", "D", {
    A: { text: "Correct—they are identical.", rationale: "DRA reinforces specific alternative; DRO reinforces interval without target." },
    B: { text: "Both reinforce intervals only.", rationale: "DRA specifies alternative." },
    C: { text: "DRO always requires incompatible topography.", rationale: "DRI emphasis." },
    D: { text: "High-yield error—identify whether alternative topography or interval without target is reinforced.", rationale: "Ch 25 confusion point." },
  }),
  bx("mod26-q11", "Exam trap: DRO without meaningful reinforcement density:", "A", {
    A: { text: "High-yield error—may function as omission-based coercion despite clean intervals.", rationale: "Density concern." },
    B: { text: "Best practice for all learners.", rationale: "Meaningful contact required." },
    C: { text: "IOA issue only.", rationale: "Domain E concern." },
    D: { text: "Required for DRL.", rationale: "DRO-specific." },
  }),
  bx("mod26-q12", "Exam trap: claiming DRA success without alternative behavior definition:", "C", {
    A: { text: "Acceptable if challenge decreased.", rationale: "Operationalize alternative." },
    B: { text: "Domain C only.", rationale: "Definition gap." },
    C: { text: "High-yield error—define and measure alternative acceleration alongside deceleration.", rationale: "Dual definition required." },
    D: { text: "Required for DRO only.", rationale: "DRA-specific." },
  }),
  bx("mod26-q13", "DRA schedules lean; alternatives rarely contact reinforcement while challenge falls:", "A", {
    A: { text: "Unintentional omission-based coercion—densify reinforcement and watch interval burdens.", rationale: "Correct move—Unintentional omission-based coercion—densify reinforcement and watch interval burdens." },
    B: { text: "Proof thin DR always humane mechanically.", rationale: "Sparse reinforcement can punish." },
    C: { text: "Delete deceleration metrics aesthetically.", rationale: "Dual tracking required." },
    D: { text: "Replace DR with punitive pitfalls exclusively.", rationale: "Fix DR package." },
  }),
  bx("mod26-q14", "Full-session DRO; vanishing reinforcement density; tears; team doubles down verbally:", "A", {
    A: { text: "Revisit humane interval design—verify reinforcement meaningfully contacts adaptive intervals before escalating.", rationale: "Correct move—Revisit humane interval design—verify reinforcement meaningfully contacts adaptive intervals before escalating." },
    B: { text: "Extend painful intervals reinforcing grit exclusively.", rationale: "Assent and compassion audit." },
    C: { text: "Ignore tears—intervals clean.", rationale: "Omission stress matters." },
    D: { text: "Delete graphs.", rationale: "Ethical redesign." },
  }),
  bx("mod26-q15", "Alternative reinforcement fidelity:", "D", {
    A: { text: "Hollow praise sufficient.", rationale: "Enriched reinforcer for adaptive class." },
    B: { text: "Optional decoration.", rationale: "Verified delivery required." },
    C: { text: "Identical to IOA on bursts.", rationale: "Reinforcer- behavior match." },
    D: { text: "Verified delivery of meaningful reinforcer for targeted adaptive class—not token drift alone.", rationale: "Fidelity definition." },
  }),
  bx("mod26-q16", "Operational definitions for DR should include:", "B", {
    A: { text: "Target behavior only.", rationale: "Deceleration and alternative/interval classes too." },
    B: { text: "Dimensionally accurate definitions of both target and reinforced alternative/interval/incompatible/low-rate classes.", rationale: "Dual operationalization." },
    C: { text: "Vague labels only.", rationale: "Observable measurable criteria." },
    D: { text: "Parent anecdotes replacing data.", rationale: "Operational definitions." },
  }),
  bx("mod26-q17", "Graphical logic for DR programs:", "C", {
    A: { text: "Deceleration graph only.", rationale: "Pair acceleration and deceleration." },
    B: { text: "Parent satisfaction only.", rationale: "Dual trends." },
    C: { text: "Pair reinforced alternative trends with deceleration metrics and practical significance.", rationale: "Dual-graph logic." },
    D: { text: "Punishment counts exclusively.", rationale: "Reinforcement-forward DR." },
  }),
  bx("mod26-q18", "MO documentation during DR:", "A", {
    A: { text: "Track reinforcer value shifts that affect alternative contact and interval success.", rationale: "MO overlay." },
    B: { text: "Irrelevant to DR.", rationale: "MO affects outcomes." },
    C: { text: "Replaces IOA.", rationale: "Complementary." },
    D: { text: "Excuses coercion.", rationale: "Ethical monitoring." },
  }),
  bx("mod26-q19", "IOA on thin or intermittent DR targets:", "D", {
    A: { text: "Unnecessary when behavior low.", rationale: "Thin targets need agreement." },
    B: { text: "Replaces fidelity checks.", rationale: "Measurement agreement." },
    C: { text: "Optional after mastery.", rationale: "Ongoing during DR." },
    D: { text: "Documents scoring agreement on alternative and deceleration classes.", rationale: "IOA in DR." },
  }),
  bx("mod26-q20", "Partial reinforcement histories and DRO/DRL:", "B", {
    A: { text: "Simplify interpretation automatically.", rationale: "May muddy interpretation." },
    B: { text: "Caution—histories can complicate simple interval or low-rate narratives.", rationale: "Partial history note." },
    C: { text: "Eliminate DR use.", rationale: "Document and analyze." },
    D: { text: "Prove punishment needed.", rationale: "Analytic caution." },
  }),
  bx("mod26-q21", "DR versus extinction (Chapter 24):", "C", {
    A: { text: "Identical always.", rationale: "DR adds reinforcement for alternative/interval." },
    B: { text: "Extinction reinforces alternatives.", rationale: "Extinction withholds only." },
    C: { text: "DR reinforces alternatives or intervals while often withholding target reinforcer; extinction withholds maintaining reinforcer.", rationale: "Integration discrimination." },
    D: { text: "DR never pairs with extinction.", rationale: "Common combination." },
  }),
  bx("mod26-q22", "Reinforce hands-on-desk; hands cannot simultaneously hit peer:", "A", {
    A: { text: "DRI—incompatible topography reinforced.", rationale: "Physical incompatibility." },
    B: { text: "DRO only.", rationale: "Specific incompatible form." },
    C: { text: "DRL.", rationale: "Rate not primary." },
    D: { text: "Pure extinction.", rationale: "Reinforcement present." },
  }),
  bx("mod26-q23", "Reinforce FCT mand instead of tantrum:", "D", {
    A: { text: "DRO interval.", rationale: "Specific alternative." },
    B: { text: "DRL low rate.", rationale: "Alternative mand." },
    C: { text: "Positive punishment.", rationale: "DRA pattern." },
    D: { text: "DRA—alternative adaptive behavior reinforced.", rationale: "Common clinical example." },
  }),
  bx("mod26-q24", "Reinforce any 30-second interval without stereotypy:", "B", {
    A: { text: "DRA alternative.", rationale: "Interval without target." },
    B: { text: "DRO—reinforcement for interval without target topography.", rationale: "DRO example." },
    C: { text: "DRI incompatible.", rationale: "Other behavior interval." },
    D: { text: "Extinction only.", rationale: "Reinforcer delivered." },
  }),
  bx("mod26-q25", "Goal is fewer requests per hour—not zero:", "C", {
    A: { text: "DRO always.", rationale: "Low-rate goal." },
    B: { text: "DRA only.", rationale: "DRL fit." },
    C: { text: "DRL—differential reinforcement of low rates.", rationale: "Reduction not elimination." },
    D: { text: "Extinction.", rationale: "Reinforcement for spacing." },
  }),
  bx("mod26-q26", "Domain F Chapter 25 items often test:", "A", {
    A: { text: "DRA/DRO/DRI/DRL discrimination, coercion-by-schedule, dual definitions.", rationale: "Domain F focus." },
    B: { text: "Chaining only.", rationale: "DR fundamentals." },
    C: { text: "Equivalence classes.", rationale: "DR subtypes." },
    D: { text: "Token economy ethics only.", rationale: "Broader DR." },
  }),
  bx("mod26-q27", "Weaponizing DRO windows as coercive delays:", "D", {
    A: { text: "Best practice for compliance.", rationale: "Domain E violation." },
    B: { text: "Required for DRL.", rationale: "Humane interval design." },
    C: { text: "IOA standard.", rationale: "Ethical guardrail." },
    D: { text: "Ethical violation—intervals must contact meaningful reinforcement and honor assent.", rationale: "Coercion guardrail." },
  }),
  bx("mod26-q28", "DR must not substitute for:", "B", {
    A: { text: "Operational definitions.", rationale: "Medical needs may require other supports." },
    B: { text: "Documented medical or clinical needs requiring appropriate non-DR interventions.", rationale: "Medical limits guardrail." },
    C: { text: "Graphing.", rationale: "Complementary." },
    D: { text: "IOA.", rationale: "Unrelated." },
  }),
  bx("mod26-q29", "Assent-aware pacing during dense DR schedules:", "C", {
    A: { text: "Ignore—data quota priority.", rationale: "Assent-sensitive ethics." },
    B: { text: "Punish assent withdrawal.", rationale: "Modify pacing." },
    C: { text: "Modify interval density and reinforcement when drill feels punishing to learner.", rationale: "Assent guardrail." },
    D: { text: "Skip documentation.", rationale: "Document assent status." },
  }),
  bx("mod26-q30", "High-Yield: DRI versus DRA:", "A", {
    A: { text: "DRI requires physically incompatible topography; DRA reinforces any specified adaptive alternative.", rationale: "Discrimination." },
    B: { text: "Identical always.", rationale: "Incompatibility criterion." },
    C: { text: "DRA requires physical blocking.", rationale: "DRI does." },
    D: { text: "Both are DRO.", rationale: "Distinct subtypes." },
  }),
  bx("mod26-q31", "DR setup workflow—FIRST step:", "D", {
    A: { text: "Implement full-session DRO.", rationale: "Define classes first." },
    B: { text: "Graph deceleration only.", rationale: "Operationalize dimensions." },
    C: { text: "Punish target.", rationale: "Reinforcement-forward DR." },
    D: { text: "Operationalize dimensions for target and decelerated classes with consensus.", rationale: "First step—establish preconditions before making analytic claims." },
  }),
  bx("mod26-q32", "Transparent notes when DR approximates omission control:", "B", {
    A: { text: "Hide from stakeholders.", rationale: "Honest reporting." },
    B: { text: "Document when sparse reinforcement may function as punishment despite DR label.", rationale: "Transparency guardrail." },
    C: { text: "Delete deceleration graph.", rationale: "Dual tracking." },
    D: { text: "Claim pure reinforcement always.", rationale: "Omission risk acknowledgment." },
  }),
  bx("mod26-q33", "Board stem: challenge behavior down; alternative never increases; reinforcers sparse:", "C", {
    A: { text: "Declare DRA mastery.", rationale: "Alternative acceleration required." },
    B: { text: "Switch to punishment only.", rationale: "Fix reinforcement density." },
    C: { text: "DR package may be omission-coercive—densify meaningful reinforcement for adaptive class.", rationale: "Dual-graph vignette." },
    D: { text: "Ignore alternative graph.", rationale: "Both dimensions matter." },
  }),
  bx("mod26-q34", "Selecting DR tactic should match:", "A", {
    A: { text: "Clinical goal—alternative, interval without target, incompatible form, or low rate.", rationale: "Tactic selection." },
    B: { text: "Random checklist.", rationale: "Goal-matched selection." },
    C: { text: "Clinician convenience only.", rationale: "Functional fit." },
    D: { text: "Punishment readiness.", rationale: "Reinforcement-forward." },
  }),
  bx("mod26-q35", "Integrity that reinforcers follow approximations:", "D", {
    A: { text: "Optional.", rationale: "Prevents token drift." },
    B: { text: "Replaces MO analysis.", rationale: "Delivery fidelity." },
    C: { text: "Identical to extinction integrity only.", rationale: "DR-specific delivery." },
    D: { text: "Verify reinforcers contact targeted adaptive approximations—not arbitrary economies.", rationale: "Integrity standard." },
  }),
  bx("mod26-q36", "BCBA stem: team uses DRO label but reinforces specific FCT mand only:", "B", {
    A: { text: "Correct DRO.", rationale: "DRA—specific alternative." },
    B: { text: "Mislabel—reinforcing specific alternative is DRA, not DRO.", rationale: "Subtype mislabel trap." },
    C: { text: "DRL.", rationale: "Alternative topography." },
    D: { text: "Extinction.", rationale: "Reinforcement present." },
  }),
  bx("mod26-q37", "Practical significance in DR reporting:", "A", {
    A: { text: "Stakeholder-meaningful change in alternative use and challenge reduction—not only statistical drops.", rationale: "Social validity in DR." },
    B: { text: "IOA percentage only.", rationale: "Functional outcomes." },
    C: { text: "Hidden from families.", rationale: "Transparent reporting." },
    D: { text: "Punishment reduction only.", rationale: "Dual significance." },
  }),
  bx("mod26-q38", "Ethical DR supervision prioritizes:", "C", {
    A: { text: "Maximal interval length regardless of tears.", rationale: "Humane density and assent." },
    B: { text: "Undefined alternatives acceptable.", rationale: "Operational definitions." },
    C: { text: "Meaningful reinforcement density, dual definitions, assent review, honest omission-risk notes.", rationale: "Domain E + C." },
    D: { text: "Deceleration-only marketing.", rationale: "Dual graphs." },
  }),
  bx("mod26-q39", "Supervisor asks for alternative acceleration graph when only deceleration shown:", "D", {
    A: { text: "Unnecessary if challenge down.", rationale: "DRA requires alternative data." },
    B: { text: "Punish supervisor.", rationale: "Quality assurance." },
    C: { text: "Replace with anecdotes.", rationale: "Objective graph." },
    D: { text: "Appropriate—dual tracking keeps DR claims honest.", rationale: "Supervisory standard." },
  }),
  bx("mod26-q40", "DRL versus DRO for elimination goal:", "B", {
    A: { text: "DRL always first.", rationale: "DRO/DRA/DRI more common for elimination." },
    B: { text: "DRL targets reduction—not typically first choice when zero rate is goal.", rationale: "Clinical fit." },
    C: { text: "Identical for elimination.", rationale: "DRL is low-rate." },
    D: { text: "Neither applies.", rationale: "DR family applies." },
  }),
  bx("mod26-q41", "Token economy drift during DRA:", "A", {
    A: { text: "Risk hollow tokens without verified backup reinforcer for adaptive class.", rationale: "Fidelity concern." },
    B: { text: "Always improves DRA.", rationale: "Meaningful reinforcer contact." },
    C: { text: "Replaces operational definitions.", rationale: "Complementary." },
    D: { text: "Identical to punishment.", rationale: "Delivery issue." },
  }),
  bx("mod26-q42", "BCBA stem: MO shift reduces reinforcer value; DRO failures increase:", "C", {
    A: { text: "Ignore MO.", rationale: "Assess MO and adjust density." },
    B: { text: "Punish failures.", rationale: "MO-informed programming." },
    C: { text: "Document MO shift; adjust reinforcer or interval design before blaming learner.", rationale: "MO vignette." },
    D: { text: "Delete interval data.", rationale: "Transparent analysis." },
  }),
  bx("mod26-q43", "Social validity review for DR intervals:", "D", {
    A: { text: "Optional after mastery.", rationale: "Before dense punishing schedules." },
    B: { text: "Clinician only.", rationale: "Stakeholder-centered." },
    C: { text: "Replaces graphs.", rationale: "Complements data." },
    D: { text: "Assess whether intervals feel fair and meaningful to learner and caregivers.", rationale: "Social validity." },
  }),
  bx("mod26-q44", "DR plus extinction combined clinically:", "B", {
    A: { text: "Impossible.", rationale: "Common package." },
    B: { text: "Withhold target reinforcer (extinction component) while reinforcing alternative or interval (DR component).", rationale: "Combined arrangement." },
    C: { text: "Identical to punishment.", rationale: "Reinforcement-forward." },
    D: { text: "Extinction adds reinforcers.", rationale: "DR adds selective reinforcement." },
  }),
  bx("mod26-q45", "Exam trap: ignoring MO during DR:", "A", {
    A: { text: "High-yield error—MO shifts affect reinforcer effectiveness and interval success.", rationale: "Ch 25 confusion point." },
    B: { text: "Best practice.", rationale: "MO documentation required." },
    C: { text: "Domain E only.", rationale: "Domain F programming." },
    D: { text: "Applies to chaining only.", rationale: "DR context." },
  }),
  bx("mod26-q46", "DRO interval clean but learner receives no meaningful reinforcer:", "D", {
    A: { text: "Perfect DRO.", rationale: "Density failure." },
    B: { text: "DRA mastery.", rationale: "Reinforcer contact required." },
    C: { text: "DRL only.", rationale: "Omission coercion risk." },
    D: { text: "Schedule may punish via omission—fix reinforcement delivery.", rationale: "mod26-q1 theme." },
  }),
  bx("mod26-q47", "Cooper emphasizes for DR design:", "C", {
    A: { text: "Punishment counts only.", rationale: "Subtype selection and fidelity." },
    B: { text: "Single graph sufficient always.", rationale: "Dual measurement." },
    C: { text: "Accurate definitions, subtype fit, dual graphs, MO/integrity overlays, ethical interval density.", rationale: "Design bundle." },
    D: { text: "Skip assent.", rationale: "Assent-aware pacing." },
  }),
  bx("mod26-q48", "DRI versus DRO for blocking hitting:", "B", {
    A: { text: "DRO—any interval without hitting.", rationale: "DRI when specific incompatible form trained." },
    B: { text: "DRI when reinforcing hands-on-desk or other topography that blocks hitting.", rationale: "Incompatible emphasis." },
    C: { text: "DRL only.", rationale: "Incompatibility focus." },
    D: { text: "Extinction only.", rationale: "Reinforcement for incompatible form." },
  }),
  bx("mod26-q49", "Deceleration without alternative acceleration in DRA:", "A", {
    A: { text: "Incomplete DRA evidence—challenge may fall for other reasons; verify alternative contact.", rationale: "Dual evidence standard." },
    B: { text: "Full DRA mastery proof.", rationale: "Alternative must increase." },
    C: { text: "IOA irrelevant.", rationale: "Alternative graph required." },
    D: { text: "Punishment effect proven.", rationale: "Analyze DR integrity." },
  }),
  bx("mod26-q50", "Closing Chapter 25 principle:", "B", {
    A: { text: "Long DRO intervals with sparse reinforcement are always humane.", rationale: "Density and assent matter." },
    B: { text: "Match DR subtype to goal; define target and reinforced class; graph both trends; verify meaningful reinforcer delivery; monitor MO and coercion risk.", rationale: "Chapter 25 integration." },
    C: { text: "DRA, DRO, DRI, DRL are identical.", rationale: "Subtype discrimination." },
    D: { text: "Alternative definition optional.", rationale: "Operationalization required." },
  }),
];
