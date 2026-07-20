import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 10 — Planning and Evaluating ABA Research. */

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

export const CHAPTER_10_RESEARCH_QUIZ_BANK: BDSQuestion[] = [
  bx("mod16-q1", "Cooper Chapter 10 emphasizes single-subject research because:", "B", {
    A: { text: "Group statistics replace individual data.", rationale: "Single-subject logic centers individual performance paths." },
    B: { text: "Applied questions often require demonstrating control within individuals while preserving idiographic detail.", rationale: "Flexibility and individual focus are hallmarks." },
    C: { text: "Large N is always required for validity.", rationale: "Single-subject designs use replication within/between subjects." },
    D: { text: "Measurement is optional in applied work.", rationale: "Measurement is foundational." },
  }),
  bx("mod16-q4", "Internal validity refers to:", "A", {
    A: { text: "Confidence that changes in the dependent variable are attributable to the independent variable.", rationale: "Core internal validity definition." },
    B: { text: "Whether results generalize to new settings.", rationale: "External validity." },
    C: { text: "Whether stakeholders value the goals.", rationale: "Social validity." },
    D: { text: "IOA percentage only.", rationale: "Internal validity is broader design inference." },
  }),
  bx("mod16-q5", "External validity refers to:", "C", {
    A: { text: "Whether IOA is high.", rationale: "Generalization construct." },
    B: { text: "Whether graphs use proportional axes.", rationale: "Graph construction issue." },
    C: { text: "Extent findings generalize across behaviors, settings, people, or time.", rationale: "External validity definition." },
    D: { text: "Whether punishment was used.", rationale: "Unrelated." },
  }),
  bx("mod16-q6", "Social validity in applied research includes:", "D", {
    A: { text: "Only statistical significance.", rationale: "Social validity is consumer-centered." },
    B: { text: "Only graph color.", rationale: "Goals, procedures, outcomes matter." },
    C: { text: "Only IOA.", rationale: "Separate construct." },
    D: { text: "Social significance of goals, acceptability of procedures, and importance of outcomes to consumers.", rationale: "Wolf's social validity dimensions." },
  }),
  bx("mod16-q7", "First step in Cooper's internal validity evaluation sequence:", "B", {
    A: { text: "Declare treatment superior.", rationale: "Verify measurement first." },
    B: { text: "Decide whether data validly and accurately measure the target behavior.", rationale: "Measurement validity precedes design inference." },
    C: { text: "Skip baseline review.", rationale: "Baseline representativeness is step three." },
    D: { text: "Run group ANOVA.", rationale: "Single-subject visual sequence." },
  }),
  bx("mod16-q8", "Second step in evaluating internal validity (Cooper):", "A", {
    A: { text: "Examine graphic displays for distortion; replot with appropriate scaling if needed.", rationale: "Graph integrity check." },
    B: { text: "Ignore visual analysis.", rationale: "Visual inspection central." },
    C: { text: "Delete outliers without note.", rationale: "Honest graph review." },
    D: { text: "Survey caregivers only.", rationale: "Graphic examination step." },
  }),
  bx("mod16-q9", "Third step in evaluating internal validity (Cooper):", "C", {
    A: { text: "Eliminate all baselines.", rationale: "Baseline anchors comparison." },
    B: { text: "Replace IOA with anecdotes.", rationale: "Baseline representativeness assessed." },
    C: { text: "Assess whether baseline conditions represent a credible basis for evaluating IV effects.", rationale: "Stable, representative baseline required." },
    D: { text: "Publish without review.", rationale: "Analytic sequence required." },
  }),
  bx("mod16-q10", "Visual inspection favored in single-subject research because:", "D", {
    A: { text: "It eliminates need for measurement.", rationale: "Visual inspection uses measured data." },
    B: { text: "It replaces ethical review.", rationale: "Analytic preference—not ethics substitute." },
    C: { text: "It guarantees automatic causality.", rationale: "Still requires design logic." },
    D: { text: "Individual data paths, phase changes, and variability are directly evaluated without obscuring idiosyncratic effects.", rationale: "Cooper rationale for visual analysis." },
  }),
  bx("mod16-q11", "Limitation of visual analysis includes:", "B", {
    A: { text: "Works only with group designs.", rationale: "Single-subject primary context." },
    B: { text: "Interpreter bias and lack of formal decision rules if discipline weak.", rationale: "Known limitation—training mitigates." },
    C: { text: "Cannot use line graphs.", rationale: "Line graphs standard." },
    D: { text: "Eliminates IOA.", rationale: "IOA separate." },
  }),
  bx("mod16-q12", "Direct replication:", "A", {
    A: { text: "Repeats same IV with same type of behavior and similar subjects/settings.", rationale: "Direct replication definition." },
    B: { text: "Changes all variables simultaneously.", rationale: "Systematic replication varies features." },
    C: { text: "Uses only questionnaires.", rationale: "Experimental replication." },
    D: { text: "Eliminates measurement.", rationale: "Replication requires data." },
  }),
  bx("mod16-q13", "Systematic replication:", "C", {
    A: { text: "Exact duplicate only.", rationale: "Systematic varies one or more features." },
    B: { text: "No graphs required.", rationale: "Data still graphed." },
    C: { text: "Replicates effect while varying some feature (behavior, setting, subject, or IV form).", rationale: "Tests generality while confirming effect." },
    D: { text: "Replaces social validity.", rationale: "Replication type." },
  }),
  bx("mod16-q14", "Conceptual replication:", "D", {
    A: { text: "Identical procedure only.", rationale: "Conceptual uses different operations same principle." },
    B: { text: "Group t-test only.", rationale: "Replication logic." },
    C: { text: "Deleting baseline.", rationale: "Invalid." },
    D: { text: "Different procedures based on same underlying behavioral principle produce similar outcomes.", rationale: "Conceptual replication definition." },
  }),
  bx("mod16-q15", "Treatment integrity (procedural reliability) in research evaluation:", "B", {
    A: { text: "Is unrelated to internal validity.", rationale: "Low fidelity threatens IV attribution." },
    B: { text: "Must be monitored to know whether the planned IV was actually implemented.", rationale: "Fidelity gates causal inference." },
    C: { text: "Replaces IOA.", rationale: "Both matter." },
    D: { text: "Applies only to group designs.", rationale: "All research." },
  }),
  bx("mod16-q16", "Planning applied research should begin with:", "A", {
    A: { text: "Clear research question and socially important target aligned with stakeholder values.", rationale: "Planning starts with question and applied significance." },
    B: { text: "Selecting statistical software.", rationale: "Question precedes tools." },
    C: { text: "Choosing punishment first.", rationale: "Not planning sequence." },
    D: { text: "Deleting baseline data.", rationale: "Invalid." },
  }),
  bx("mod16-q17", "Descriptive research:", "C", {
    A: { text: "Demonstrates experimental control through IV manipulation.", rationale: "Descriptive documents without manipulation for control." },
    B: { text: "Never uses measurement.", rationale: "Descriptive uses measurement." },
    C: { text: "Records behavior characteristics without manipulating variables to demonstrate functional control.", rationale: "Descriptive research definition." },
    D: { text: "Is identical to FA.", rationale: "FA is experimental." },
  }),
  bx("mod16-q18", "Experimental (comparative) research in ABA:", "D", {
    A: { text: "Relies on correlation only.", rationale: "Experimental manipulates IV." },
    B: { text: "Avoids baseline.", rationale: "Baselines common." },
    C: { text: "Uses only surveys.", rationale: "Direct behavioral measurement." },
    D: { text: "Manipulates IV while measuring DV to demonstrate functional relations.", rationale: "Experimental control goal." },
  }),
  bx("mod16-q19", "Component analysis research:", "B", {
    A: { text: "Tests only one bundled package without isolation.", rationale: "Component analysis isolates elements." },
    B: { text: "Evaluates whether separate elements of a treatment package are necessary or sufficient.", rationale: "Component analysis definition." },
    C: { text: "Eliminates graphs.", rationale: "Graphs used." },
    D: { text: "Group design only.", rationale: "Single-subject common." },
  }),
  bx("mod16-q20", "Between-groups design limitation in applied behavior analysis:", "A", {
    A: { text: "Subject confounds and loss of individual performance detail.", rationale: "Cooper notes group model limits." },
    B: { text: "Too much idiographic data.", rationale: "Opposite problem." },
    C: { text: "Eliminates external validity always.", rationale: "Different tradeoffs." },
    D: { text: "Requires no ethics review.", rationale: "Ethics always apply." },
  }),
  bx("mod16-q21", "High IOA but wrong target behavior measured:", "C", {
    A: { text: "Perfect validity.", rationale: "Reliable measure of wrong behavior fails construct/validity." },
    B: { text: "Proves treatment worked.", rationale: "Wrong target invalidates claims." },
    C: { text: "Threatens construct validity despite reliability.", rationale: "Validity vs reliability distinction." },
    D: { text: "Eliminates need for graphs.", rationale: "Still need design evidence." },
  }),
  bx("mod16-q22", "Medication change during baseline and intervention simultaneously:", "B", {
    A: { text: "Strengthens internal validity.", rationale: "Confound threatens IV attribution." },
    B: { text: "Confound threatening internal validity.", rationale: "History/maturation confound." },
    C: { text: "External validity issue only.", rationale: "Internal validity threat." },
    D: { text: "Social validity only.", rationale: "Design confound." },
  }),
  bx("mod16-q23", "Social validity of goals asks:", "D", {
    A: { text: "Whether IOA exceeded 80%.", rationale: "Stakeholder value of targets." },
    B: { text: "Whether graph lines are blue.", rationale: "Irrelevant." },
    C: { text: "Whether punishment was avoided.", rationale: "Goal meaningfulness to consumers." },
    D: { text: "Whether selected targets are important and acceptable to consumers.", rationale: "Goals dimension." },
  }),
  bx("mod16-q24", "Social validity of procedures asks:", "A", {
    A: { text: "Whether treatment procedures are acceptable to those who implement and receive them.", rationale: "Procedures dimension." },
    B: { text: "Whether FA was run.", rationale: "Acceptability focus." },
    C: { text: "Whether N is large.", rationale: "Irrelevant." },
    D: { text: "Whether MO was abolished.", rationale: "Procedure acceptability." },
  }),
  bx("mod16-q25", "Social validity of outcomes (effects):", "C", {
    A: { text: "Only statistical p-values.", rationale: "Practical/clinical significance to consumers." },
    B: { text: "Only graph aesthetics.", rationale: "Outcome importance." },
    C: { text: "Whether behavior change is large enough and meaningful in daily life.", rationale: "Effects/social importance dimension." },
    D: { text: "Whether extinction was used.", rationale: "Outcome meaningfulness." },
  }),
  bx("mod16-q26", "Flexible experimental designs in ABA allow:", "B", {
    A: { text: "Changing hypotheses without documentation.", rationale: "Flexibility within ethical, documented design." },
    B: { text: "Adjusting phases as data emerge while maintaining analytic integrity.", rationale: "Cooper emphasizes flexible yet disciplined designs." },
    C: { text: "Eliminating all baselines.", rationale: "Baselines often retained." },
    D: { text: "Covert IV changes.", rationale: "Violates ethics and validity." },
  }),
  bx("mod16-q27", "Evaluating ABA research requires integrating:", "D", {
    A: { text: "Only visual inspection.", rationale: "Multiple validity types." },
    B: { text: "Only social validity.", rationale: "Internal, external, social, measurement." },
    C: { text: "Only group statistics.", rationale: "Single-subject emphasis." },
    D: { text: "Measurement quality, design logic, internal/external validity, and social validity.", rationale: "Holistic evaluation." },
  }),
  bx("mod16-q28", "Graph axis rescaling mid-report without annotation:", "A", {
    A: { text: "Threatens internal validity evaluation by distorting visual impression.", rationale: "Cooper warns about graphic distortion." },
    B: { text: "Best practice.", rationale: "Distortion misleads." },
    C: { text: "External validity only.", rationale: "Graphic integrity." },
    D: { text: "IOA substitute.", rationale: "Separate issue." },
  }),
  bx("mod16-q29", "Unstable, unrepresentative baseline:", "C", {
    A: { text: "Strengthens IV attribution.", rationale: "Weak baseline weakens comparison." },
    B: { text: "Irrelevant to evaluation.", rationale: "Baseline representativeness is step 3." },
    C: { text: "Weakens internal validity of phase-change interpretation.", rationale: "Cannot credibly compare to intervention." },
    D: { text: "Proves MO only.", rationale: "Design evaluation issue." },
  }),
  bx("mod16-q30", "Applied vs basic research distinction (Chapter 10):", "B", {
    A: { text: "Applied never uses experiments.", rationale: "Applied uses experimental designs." },
    B: { text: "Applied focuses on socially significant problems; basic focuses on fundamental processes.", rationale: "Classic distinction." },
    C: { text: "Basic avoids measurement.", rationale: "Both measure behavior." },
    D: { text: "Applied uses only groups.", rationale: "Single-subject common in applied." },
  }),
  bx("mod16-q31", "Inductive research approach:", "A", {
    A: { text: "Observations accumulate to form hypotheses and principles.", rationale: "Inductive builds from data." },
    B: { text: "Hypothesis tested without observation.", rationale: "Deductive tests preformed hypothesis." },
    C: { text: "Eliminates replication.", rationale: "Replication strengthens science." },
    D: { text: "Group design only.", rationale: "Approach not design type." },
  }),
  bx("mod16-q32", "Deductive research approach:", "D", {
    A: { text: "No prior theory.", rationale: "Deductive tests derived predictions." },
    B: { text: "Anecdotes only.", rationale: "Empirical test required." },
    C: { text: "Descriptive only always.", rationale: "Can be experimental." },
    D: { text: "Specific hypothesis derived from theory/principles is tested empirically.", rationale: "Deductive definition." },
  }),
  bx("mod16-q33", "Exam stem: impressive graph but IOA was never collected:", "B", {
    A: { text: "Accept data as valid automatically.", rationale: "Measurement quality unknown." },
    B: { text: "Question validity/accuracy of behavioral measurement before strong causal claims.", rationale: "Step 1 internal validity evaluation." },
    C: { text: "External validity only concern.", rationale: "Measurement validity first." },
    D: { text: "Social validity replaces IOA.", rationale: "Different constructs." },
  }),
  bx("mod16-q34", "Generalization across settings after single-setting demonstration:", "C", {
    A: { text: "Automatic without further evidence.", rationale: "External validity requires replication/generalization data." },
    B: { text: "Internal validity issue only.", rationale: "External validity/generalization." },
    C: { text: "External validity question requiring systematic replication or generalization probes.", rationale: "Setting generality not assumed." },
    D: { text: "Proves punishment needed.", rationale: "Unrelated." },
  }),
  bx("mod16-q35", "Stakeholder interview showing procedures are unacceptable:", "A", {
    A: { text: "Social validity concern requiring plan revision regardless of graph improvement.", rationale: "Procedures acceptability matters." },
    B: { text: "Irrelevant if data look good.", rationale: "Social validity is evaluative criterion." },
    C: { text: "Internal validity threat only.", rationale: "Social validity dimension." },
    D: { text: "IOA problem.", rationale: "Acceptability construct." },
  }),
  bx("mod16-q36", "Component analysis shows prompt fading unnecessary:", "D", {
    A: { text: "Ignore and keep all components.", rationale: "Efficiency and parsimony inform practice." },
    B: { text: "Proves internal validity failed.", rationale: "Valid component finding." },
    C: { text: "External validity only.", rationale: "Treatment package evaluation." },
    D: { text: "Informs treatment planning by identifying non-essential elements.", rationale: "Component analysis purpose." },
  }),
  bx("mod16-q37", "Chapter 10 vs Chapters 8–9 relationship:", "B", {
    A: { text: "Chapter 10 replaces all designs.", rationale: "Ch 10 evaluates/plans; Ch 8–9 are design families." },
    B: { text: "Chapter 10 provides frameworks for planning research and evaluating validity of design-based evidence.", rationale: "Meta-evaluation chapter." },
    C: { text: "Chapter 10 is only about punishment.", rationale: "Research planning/evaluation." },
    D: { text: "Chapter 10 eliminates visual inspection.", rationale: "Visual analysis emphasized." },
  }),
  bx("mod16-q38", "Practical significance vs statistical significance in ABA evaluation:", "C", {
    A: { text: "Identical concepts.", rationale: "Practical/social significance emphasizes meaningful change." },
    B: { text: "Statistical always sufficient.", rationale: "Single-subject emphasizes practical/visual." },
    C: { text: "Cooper emphasizes meaningful behavior change for consumers—not arbitrary statistical thresholds alone.", rationale: "Applied evaluation focus." },
    D: { text: "Practical significance irrelevant.", rationale: "Social validity central." },
  }),
  bx("mod16-q39", "Replication across three participants same procedure:", "A", {
    A: { text: "Direct replication strengthening confidence in effect.", rationale: "Same IV, similar subjects." },
    B: { text: "Conceptual replication only.", rationale: "Same procedure = direct." },
    C: { text: "Descriptive research.", rationale: "Experimental replication." },
    D: { text: "Eliminates external validity questions.", rationale: "Some generality evidence—not unlimited." },
  }),
  bx("mod16-q40", "Same principle, different intervention form across settings:", "D", {
    A: { text: "Direct replication only.", rationale: "Varied form/settings suggests systematic/conceptual." },
    B: { text: "Not replication.", rationale: "Systematic/conceptual replication." },
    C: { text: "Descriptive only.", rationale: "Still experimental if IV manipulated." },
    D: { text: "Systematic or conceptual replication testing generality.", rationale: "Varies features while testing principle." },
  }),
  bx("mod16-q41", "High-Yield Confusion Point—validity types:", "B", {
    A: { text: "Internal and external validity are identical.", rationale: "Different questions." },
    B: { text: "Internal = IV attribution; external = generalization; social = consumer meaningfulness.", rationale: "Core discrimination." },
    C: { text: "Social validity replaces measurement.", rationale: "All integrate." },
    D: { text: "IOA equals internal validity.", rationale: "IOA supports measurement step." },
  }),
  bx("mod16-q42", "Planning research: selecting setting should consider:", "C", {
    A: { text: "Only analyst convenience.", rationale: "Applied significance and generalization." },
    B: { text: "Only lowest IOA setting.", rationale: "Ecological relevance matters." },
    C: { text: "Where behavior matters socially and where effects should generalize.", rationale: "Applied planning logic." },
    D: { text: "Eliminating consent.", rationale: "Ethics required." },
  }),
  bx("mod16-q43", "Low treatment fidelity during intervention phase:", "A", {
    A: { text: "Threatens internal validity—unclear whether planned IV caused change.", rationale: "Fidelity gates attribution." },
    B: { text: "Strengthens causal claims.", rationale: "Opposite." },
    C: { text: "External validity only.", rationale: "Internal validity threat." },
    D: { text: "Social validity substitute.", rationale: "Different construct." },
  }),
  bx("mod16-q44", "Correlational descriptive data suggest hypothesis:", "D", {
    A: { text: "Proves functional relation.", rationale: "Correlation motivates experimental test." },
    B: { text: "Eliminates need for design.", rationale: "Experimental verification needed." },
    C: { text: "Replaces social validity.", rationale: "Different stage." },
    D: { text: "Inductive step preceding experimental analysis.", rationale: "Descriptive/correlational can inform planning." },
  }),
  bx("mod16-q45", "Exam: team skips stakeholder input on target selection:", "B", {
    A: { text: "Acceptable if graph improves.", rationale: "Social validity of goals compromised." },
    B: { text: "Weakens social validity and applied character of research.", rationale: "Consumer alignment required." },
    C: { text: "Internal validity only issue.", rationale: "Social/applied validity." },
    D: { text: "IOA issue.", rationale: "Target selection ethics/validity." },
  }),
  bx("mod16-q46", "Visual analysis shows overlap between baseline and intervention:", "C", {
    A: { text: "Automatic proof of control.", rationale: "Overlap weakens demonstration." },
    B: { text: "Delete intervention phase.", rationale: "Report honestly with tentative language." },
    C: { text: "Cautious interpretation—practical significance and design logic reviewed before strong claims.", rationale: "Chapter 7 overlap logic applies in evaluation." },
    D: { text: "External validity proved.", rationale: "Internal/practical significance issue." },
  }),
  bx("mod16-q47", "Evaluating research report before dissemination—BEST checklist:", "D", {
    A: { text: "Graph color only.", rationale: "Full validity evaluation." },
    B: { text: "IOA only.", rationale: "Multiple criteria." },
    C: { text: "Statistical test only.", rationale: "Visual and validity framework." },
    D: { text: "Measurement validity, graph integrity, baseline adequacy, fidelity, replication, and social validity.", rationale: "Chapter 10 integration." },
  }),
  bx("mod16-q48", "Subject confound in between-groups design:", "A", {
    A: { text: "Preexisting differences between groups masquerade as treatment effects.", rationale: "Classic group design threat." },
    B: { text: "IOA formula error.", rationale: "Selection/confound issue." },
    C: { text: "Carryover in multielement.", rationale: "Group design issue." },
    D: { text: "Social validity only.", rationale: "Internal validity threat in groups." },
  }),
  bx("mod16-q49", "BCBA stem: same DRA procedure replicated with new learner, similar behavior, home setting:", "B", {
    A: { text: "Conceptual replication only.", rationale: "Same procedure similar context = direct/systematic." },
    B: { text: "Direct or systematic replication depending on which features vary.", rationale: "Replication typology application." },
    C: { text: "Descriptive research.", rationale: "IV manipulated." },
    D: { text: "Not replication.", rationale: "Replication by definition." },
  }),
  bx("mod16-q50", "Closing Chapter 10 principle:", "C", {
    A: { text: "Research quality equals statistical significance only.", rationale: "Multi-validity evaluation." },
    B: { text: "Single-subject designs eliminate need for social validity.", rationale: "Social validity always relevant in applied work." },
    C: { text: "Plan research around meaningful questions; evaluate evidence through measurement quality, design logic, validity types, and replication.", rationale: "Chapter 10 integration message." },
    D: { text: "Visual inspection optional.", rationale: "Central to single-subject evaluation." },
  }),
];
