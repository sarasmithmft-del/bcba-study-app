import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 27 supplement — Experimental FA (mod09). */

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

export const CHAPTER_27_EXPERIMENTAL_FA_QUIZ_BANK: BDSQuestion[] = [
  bx("mod09-q1", "High-risk topography without staffing — MOST compliant sequencing?", "B", {
    A: { text: "Launch FA overnight solo.", rationale: "Violates supervision safeguards." },
    B: { text: "Implement descriptive/interrupted probes until staffing safeguards stabilize.", rationale: "Classic Ch 27 safeguard vignette." },
    C: { text: "Presume tangible reinforcement sans verification.", rationale: "Circumvents analytic isolation." },
    D: { text: "Skip baseline graphs.", rationale: "Baseline supports differentiation." },
  }),
  bx("mod09-q4", "Cooper Chapter 27 experimental functional analysis:", "C", {
    A: { text: "Parent questionnaire only.", rationale: "Programmed contrasts." },
    B: { text: "ABC log only.", rationale: "Controlled conditions." },
    C: { text: "Evocative contrasts isolating reinforcer classes when safeguards permit manipulation.", rationale: "Experimental FA definition." },
    D: { text: "Hypothesis statement only.", rationale: "Experimental test." },
  }),
  bx("mod09-q5", "Escape FA condition:", "A", {
    A: { text: "Demand or task removal contingent on behavior isolating escape hypotheses.", rationale: "Escape FA definition." },
    B: { text: "Social praise contingent on behavior.", rationale: "Attention FA." },
    C: { text: "Solitude with minimized reinforcement.", rationale: "Alone condition." },
    D: { text: "Enriched play without programmed contingencies on target.", rationale: "Control condition." },
  }),
  bx("mod09-q6", "Attention FA condition:", "D", {
    A: { text: "Demand removal contingent on behavior.", rationale: "Escape FA." },
    B: { text: "Access to tangibles contingent on behavior.", rationale: "Tangible FA." },
    C: { text: "No programmed social reinforcement.", rationale: "Control/alone logic." },
    D: { text: "Social acknowledgement delivered contingent on topography.", rationale: "Attention FA definition." },
  }),
  bx("mod09-q7", "Tangible FA condition:", "B", {
    A: { text: "Demand removal.", rationale: "Escape FA." },
    B: { text: "Access to leisure or tangibles contingent on occurrences.", rationale: "Tangible FA definition." },
    C: { text: "Isolation minus attention.", rationale: "Alone FA." },
    D: { text: "Hypothesis statement only.", rationale: "Condition logic." },
  }),
  bx("mod09-q8", "Alone / no-interaction FA analogue:", "C", {
    A: { text: "Lavish praise contingent on behavior.", rationale: "Attention FA." },
    B: { text: "Demand removal.", rationale: "Escape FA." },
    C: { text: "Solitude with minimized programmed reinforcement compared to evocative tests.", rationale: "Alone FA definition." },
    D: { text: "Token economy.", rationale: "Ch 28." },
  }),
  bx("mod09-q9", "Control / enriched play comparison:", "A", {
    A: { text: "Minimized reinforcement baseline juxtaposed against evocative test spikes.", rationale: "Correct move—Minimized reinforcement baseline juxtaposed against evocative test spikes." },
    B: { text: "Guaranteed punishment exposure.", rationale: "Classic controls avoid punishment unless designed." },
    C: { text: "Automatic FA termination rules.", rationale: "Protocol-dependent." },
    D: { text: "Replacement definitions unrelated to referral.", rationale: "Still tracks referral targets." },
  }),
  bx("mod09-q10", "During multi-element FA, escape test condition MOST directly evaluates whether:", "A", {
    A: { text: "Demand removals contingent on targeted behavior elevate future probability.", rationale: "Correct move—Demand removals contingent on targeted behavior elevate future probability." },
    B: { text: "Automatic reinforcement alone sustains responding.", rationale: "Alone/isolation variants." },
    C: { text: "Respondent extinction occurs.", rationale: "Operant FA logic." },
    D: { text: "Caregiver IQ predicts reinforcer hierarchies.", rationale: "Irrelevant construct." },
  }),
  bx("mod09-q11", "Exam trap: misidentifying FA condition contingencies:", "B", {
    A: { text: "Minor labeling issue only.", rationale: "Condition logic is core." },
    B: { text: "High-yield error—verify arranged contingency before interpreting spikes.", rationale: "Ch 27 confusion point." },
    C: { text: "Domain C only.", rationale: "Domain F focus." },
    D: { text: "Required for alone condition only.", rationale: "All conditions." },
  }),
  bx("mod09-q12", "Exam trap: single-session spikes as stable differentiation:", "D", {
    A: { text: "Best FA practice always.", rationale: "Replication strengthens inference." },
    B: { text: "Required when IOA high.", rationale: "Differentiation across conditions." },
    C: { text: "IOA substitute.", rationale: "Pattern stability issue." },
    D: { text: "High-yield error—seek replication and check condition fidelity before strong claims.", rationale: "Interpretation trap." },
  }),
  bx("mod09-q13", "Exam trap: running FA ahead of safeguards:", "C", {
    A: { text: "Acceptable when grant urgent.", rationale: "Safety gate." },
    B: { text: "Domain C issue only.", rationale: "Domain E + G." },
    C: { text: "High-yield error—consent, staffing, risk review precede manipulation.", rationale: "Safeguard trap." },
    D: { text: "Required for attention FA only.", rationale: "All high-risk FA." },
  }),
  bx("mod09-q14", "Planning experimental FA requires:", "A", {
    A: { text: "Staffing, consent, safety review, and supervisory ratios when risk elevated.", rationale: "FA safeguards." },
    B: { text: "No safeguards when convenient.", rationale: "Ethical requirement." },
    C: { text: "Fabricated graphs.", rationale: "Data integrity." },
    D: { text: "Deleting indirect data.", rationale: "Layer modalities." },
  }),
  bx("mod09-q15", "Interview-informed FA (IWFA):", "D", {
    A: { text: "Generic rotation ignoring ecology.", rationale: "Hypothesis tailoring." },
    B: { text: "Eliminates consent.", rationale: "Safeguards remain." },
    C: { text: "Replaces measurement.", rationale: "Condition selection." },
    D: { text: "Tailors contrast menus using multimethod hypotheses—not cookie-cutter rotations.", rationale: "IWFA definition." },
  }),
  bx("mod09-q16", "Replication in FA:", "B", {
    A: { text: "Optional decoration.", rationale: "Strengthens inference." },
    B: { text: "Strengthens confidence when differentiated patterns reproduce.", rationale: "Replication role." },
    C: { text: "Replaces IOA.", rationale: "Complementary." },
    D: { text: "Eliminates alone condition.", rationale: "Design element." },
  }),
  bx("mod09-q17", "Undifferentiated FA data after one session:", "C", {
    A: { text: "Announce escape function definitive.", rationale: "Premature certainty." },
    B: { text: "Delete sessions silently.", rationale: "Reassess design." },
    C: { text: "Reassess definitions, MO, fidelity, sequence—avoid premature certainty.", rationale: "Undifferentiated data response." },
    D: { text: "Skip baseline.", rationale: "Baseline aids interpretation." },
  }),
  bx("mod09-q18", "Abbreviated multi-element FA substitutes:", "A", {
    A: { text: "May be used when full FA exceeds resources—but label modality accurately.", rationale: "Abbreviated FA note." },
    B: { text: "May be labeled full FA always.", rationale: "Accurate reporting." },
    C: { text: "Replace all descriptive work.", rationale: "Layer modalities." },
    D: { text: "Eliminate consent.", rationale: "Safeguards remain." },
  }),
  bx("mod09-q19", "FA readiness chain—FIRST step:", "D", {
    A: { text: "Implement alternating conditions immediately.", rationale: "Risk inventory first." },
    B: { text: "Graph differentiated patterns.", rationale: "After implementation." },
    C: { text: "Publish treatment claims.", rationale: "Assessment sequencing." },
    D: { text: "Verify medically cleared topography definitions and risk inventory.", rationale: "First step—establish preconditions before making analytic claims." },
  }),
  bx("mod09-q20", "FA readiness chain—stakeholders authorize safeguards:", "B", {
    A: { text: "Chain fragment b after risk verification.", rationale: "Consent and safeguards." },
    B: { text: "Optional after FA completes.", rationale: "Prerequisite." },
    C: { text: "Replaces IOA.", rationale: "Complementary." },
    D: { text: "First step before definitions.", rationale: "Order a then b." },
  }),
  bx("mod09-q21", "Therapist removes demands contingent on aggression:", "C", {
    A: { text: "Attention FA prototype.", rationale: "Escape logic." },
    B: { text: "Control condition prototype.", rationale: "Minimized reinforcement play." },
    C: { text: "Escape FA condition prototype.", rationale: "Worksheet Scenario B." },
    D: { text: "Alone sensory deprivation exclusively.", rationale: "Alone differs." },
  }),
  bx("mod09-q22", "Neutral enriched play without programmed reinforcement on target:", "A", {
    A: { text: "Control condition baseline analogue.", rationale: "Worksheet Scenario B." },
    B: { text: "Attention FA prototype.", rationale: "Social R+ contingent." },
    C: { text: "Automatic reinforcement FA.", rationale: "Alone logic differs." },
    D: { text: "Escape FA prototype.", rationale: "Demand removal." },
  }),
  bx("mod09-q23", "Supervisory ratios during aggression FA:", "D", {
    A: { text: "Unnecessary.", rationale: "Safety staffing." },
    B: { text: "Replace IOA.", rationale: "Risk management." },
    C: { text: "Optional for descriptive only.", rationale: "Experimental risk." },
    D: { text: "Required safeguard when aggression topography elevates risk during manipulation.", rationale: "Supervisory ratio guardrail." },
  }),
  bx("mod09-q24", "Medically informed plans before intensive FA manipulation:", "B", {
    A: { text: "Never needed.", rationale: "When medical/safety dimensions present." },
    B: { text: "Appropriate when behavior has medical or safety dimensions.", rationale: "Medical guardrail." },
    C: { text: "Replace consent.", rationale: "Complementary." },
    D: { text: "Optional marketing.", rationale: "Risk management." },
  }),
  bx("mod09-q25", "Assent during FA procedures:", "C", {
    A: { text: "Irrelevant for manipulation.", rationale: "Assent-sensitive practice." },
    B: { text: "Replace informed consent.", rationale: "Complementary." },
    C: { text: "Honor assent/withdrawal especially during intensive or repeated assessment.", rationale: "Assent guardrail." },
    D: { text: "Skip when grant funded.", rationale: "Ethical requirement." },
  }),
  bx("mod09-q26", "Procedural integrity in FA:", "A", {
    A: { text: "Conditions implemented as designed so differentiation reflects arranged contingencies.", rationale: "Fidelity requirement." },
    B: { text: "Optional after graphs look good.", rationale: "Core analytic requirement." },
    C: { text: "Replaces consent.", rationale: "Complementary." },
    D: { text: "Identical to indirect FAST.", rationale: "Experimental implementation." },
  }),
  bx("mod09-q27", "IOA during FA:", "D", {
    A: { text: "Unnecessary if supervisor present.", rationale: "Observer agreement on responses." },
    B: { text: "Replaces replication.", rationale: "Complementary." },
    C: { text: "Optional post hoc only.", rationale: "During FA sessions." },
    D: { text: "Documents agreement on response scoring so condition differences are trustworthy.", rationale: "Domain C in FA." },
  }),
  bx("mod09-q28", "Grant claims differentiated FA; appendix only interviews:", "B", {
    A: { text: "Ship unchanged.", rationale: "Modality mislabel." },
    B: { text: "Relabel honestly; assemble defensible contrast packet once safeguards authorize.", rationale: "Worksheet Scenario D." },
    C: { text: "Fabricate spikes.", rationale: "Fabrication breach." },
    D: { text: "Delete interviews.", rationale: "Label indirect accurately." },
  }),
  bx("mod09-q29", "FAST plus descriptive converge on escape; FA still uses generic praise menus only:", "A", {
    A: { text: "Re-sequence contrasts so converging escape hypotheses lead—not mismatched templates.", rationale: "IWFA MTS vignette." },
    B: { text: "Maintain cookbook rotations.", rationale: "Hypothesis tailoring." },
    C: { text: "Delete consent scaffolding.", rationale: "Safeguard breach." },
    D: { text: "Label interviews as FA.", rationale: "Honest labels." },
  }),
  bx("mod09-q30", "Second clinician reruns abbreviated contrast verifying Week 1 spike:", "C", {
    A: { text: "Deleting Week 1 data.", rationale: "Replication ethics." },
    B: { text: "Punishment mastery claim.", rationale: "Replication strengthens inference." },
    C: { text: "Replication strengthening confidence when patterns reproduce.", rationale: "MTS vignette." },
    D: { text: "Skip IOA permanently.", rationale: "Measurement still required." },
  }),
  bx("mod09-q31", "Domain F experimental FA items often test:", "D", {
    A: { text: "Token schedules only.", rationale: "Condition contingency logic." },
    B: { text: "Scatterplot axes only.", rationale: "FA contrasts." },
    C: { text: "Chaining grain only.", rationale: "Assessment focus." },
    D: { text: "Condition logic, differentiation, replication, modality-accurate labels.", rationale: "Domain F focus." },
  }),
  bx("mod09-q32", "Domain E + G FA items often test:", "B", {
    A: { text: "Graph font selection.", rationale: "Safeguards and supervision." },
    B: { text: "Consent, staffing, risk review before manipulation-heavy sessions.", rationale: "Ethics + supervision." },
    C: { text: "IOA formula trivia only.", rationale: "Broader safeguards." },
    D: { text: "Billing codes.", rationale: "Safety sequencing." },
  }),
  bx("mod09-q33", "Latency FA:", "A", {
    A: { text: "Time-based reinforcement withholding embedded in FA menus.", rationale: "Latency FA definition." },
    B: { text: "Scatterplot matrix only.", rationale: "Experimental variant." },
    C: { text: "Indirect MAS survey.", rationale: "Descriptive/indirect." },
    D: { text: "Token thinning.", rationale: "Ch 28." },
  }),
  bx("mod09-q34", "Isolation withholds attention, tangibles, demands—charting baseline:", "C", {
    A: { text: "Escape condition exclusively.", rationale: "Alone logic." },
    B: { text: "Attention FA exclusively.", rationale: "Alone strips programmed R+." },
    C: { text: "Alone condition inspecting automatic reinforcement minus programmed mediated consequences.", rationale: "MTS alone vignette." },
    D: { text: "Control play with rich reinforcement on target.", rationale: "Opposite of alone." },
  }),
  bx("mod09-q35", "High-Yield: labeling interviews as completed FA:", "D", {
    A: { text: "Acceptable when busy.", rationale: "Modality mislabel." },
    B: { text: "IOA issue only.", rationale: "Reporting integrity." },
    C: { text: "Required for IWFA.", rationale: "Honest labels always." },
    D: { text: "Error—Domain E breach; relabel and plan arranged contrasts when conducted.", rationale: "Confusion point." },
  }),
  bx("mod09-q36", "FA can identify probable maintaining contingencies but treatment still requires:", "B", {
    A: { text: "Nothing further.", rationale: "Social validity, feasibility, monitoring." },
    B: { text: "Social validity, feasibility analysis, stakeholder collaboration, ongoing monitoring.", rationale: "FA limits." },
    C: { text: "Deleting descriptive data.", rationale: "Integrate modalities." },
    D: { text: "Skipping hypothesis.", rationale: "Hypothesis guides intervention." },
  }),
  bx("mod09-q37", "Sequence effects in undifferentiated FA:", "A", {
    A: { text: "May require reassessment of condition order, length, or fidelity.", rationale: "Design troubleshooting." },
    B: { text: "Prove automatic reinforcement always.", rationale: "One possible factor." },
    C: { text: "Eliminate consent requirement.", rationale: "Unrelated." },
    D: { text: "Replace IOA with anecdotes.", rationale: "Measurement integrity." },
  }),
  bx("mod09-q38", "Controlled attention, escape, and play conditions with IOA:", "C", {
    A: { text: "Indirect interview.", rationale: "Programmed contrasts." },
    B: { text: "Descriptive ABC only.", rationale: "Experimental FA." },
    C: { text: "Experimental functional analysis modality.", rationale: "FA identification." },
    D: { text: "Hypothesis statement only.", rationale: "Manipulation phase." },
  }),
  bx("mod09-q39", "Aggression with tissue injury risk; supervisor insists overnight FA:", "D", {
    A: { text: "Proceed overnight unsupervised.", rationale: "Safeguard breach." },
    B: { text: "Substitute placebo punishers.", rationale: "Ethical alternative is staged probes." },
    C: { text: "Skip baseline.", rationale: "Safety first." },
    D: { text: "Delay FA pending protective barriers plus informed consent review.", rationale: "Worksheet Scenario A." },
  }),
  bx("mod09-q40", "Alternate tactic while FA staffing stabilizes:", "A", {
    A: { text: "Descriptive or interrupted probes until safeguards align.", rationale: "Worksheet Scenario A follow-up." },
    B: { text: "Terminate referral silently.", rationale: "Continue assessment." },
    C: { text: "Ignore differentiation mandate.", rationale: "Analytic obligation." },
    D: { text: "Fabricate FA graphs.", rationale: "Ethical breach." },
  }),
  bx("mod09-q41", "FA readiness chain—implement alternating conditions:", "B", {
    A: { text: "Chain fragment c after safeguards authorized.", rationale: "Workflow order." },
    B: { text: "First step before risk review.", rationale: "Order a,b then c." },
    C: { text: "Replaces replication planning.", rationale: "Followed by graphing step d." },
    D: { text: "Optional if interviews complete.", rationale: "Arranged contrasts required." },
  }),
  bx("mod09-q42", "Graph differentiated patterns plus replication—chain step:", "C", {
    A: { text: "Chain fragment d—final analytic communication step.", rationale: "Workflow order." },
    B: { text: "First step.", rationale: "After implementation." },
    C: { text: "Replaces consent.", rationale: "Complementary." },
    D: { text: "Skips limits language.", rationale: "Honest reporting required." },
  }),
  bx("mod09-q43", "Evocative contrasts in Chapter 27 FA:", "D", {
    A: { text: "Hallway hunches labeled as data.", rationale: "Programmed arrangements." },
    B: { text: "Scatterplot summaries only.", rationale: "Descriptive stream." },
    C: { text: "FAST rankings.", rationale: "Indirect stream." },
    D: { text: "Test conditions manipulating consequences to isolate reinforcing histories.", rationale: "Evocative contrast definition." },
  }),
  bx("mod09-q44", "Social praise contingent during attention test:", "A", {
    A: { text: "Attention FA condition.", rationale: "MTS attention vignette." },
    B: { text: "Escape FA condition.", rationale: "Demand removal." },
    C: { text: "Alone condition.", rationale: "Minimal programming." },
    D: { text: "Control only if no contingency on target.", rationale: "Attention delivers contingent SR." },
  }),
  bx("mod09-q45", "Cooper Chapter 27 experimental supplement emphasizes:", "B", {
    A: { text: "Scatterplot interpretation exclusively.", rationale: "Experimental stream." },
    B: { text: "Condition logic, safeguards, differentiation, replication, honest modality labels.", rationale: "Experimental emphasis." },
    C: { text: "FAST recall exclusively.", rationale: "Indirect stream." },
    D: { text: "Token economy.", rationale: "Ch 28." },
  }),
  bx("mod09-q46", "FA safmed control/play means:", "C", {
    A: { text: "Demand removal contingent.", rationale: "Escape FA." },
    B: { text: "Social R+ contingent.", rationale: "Attention FA." },
    C: { text: "Minimized reinforcement baseline for contrast.", rationale: "Safmed back text." },
    D: { text: "Treatment discharge.", rationale: "Assessment condition." },
  }),
  bx("mod09-q47", "Four-question FA exam drill order:", "A", {
    A: { text: "Contingency arranged → comparison used → safeguards adequate → data supports confidence level.", rationale: "Exam-ready rule from blueprint." },
    B: { text: "Treatment plan → billing → discharge.", rationale: "Assessment focus." },
    C: { text: "Skip safeguards if differentiated.", rationale: "Safety first." },
    D: { text: "Label FA before any contrasts.", rationale: "Honest labels." },
  }),
  bx("mod09-q48", "Staffing ceilings gating full FA:", "D", {
    A: { text: "Excuse fabricating FA.", rationale: "Transparent alternatives." },
    B: { text: "Hide from stakeholders.", rationale: "Document limits." },
    C: { text: "Delete indirect data.", rationale: "Layer modalities." },
    D: { text: "Use abbreviated substitutes with accurate labels when safeguards permit partial probes.", rationale: "Resource honesty." },
  }),
  bx("mod09-q49", "Claiming exhaustive FA without arranged contrasts collapses:", "B", {
    A: { text: "Domain A trivia only.", rationale: "Domain E + F." },
    B: { text: "Domain E honest reporting plus Domain F accurate modality labeling.", rationale: "Worksheet Scenario D." },
    C: { text: "IOA type selection only.", rationale: "Reporting breach." },
    D: { text: "Graph axis scaling only.", rationale: "Modality mislabel." },
  }),
  bx("mod09-q50", "Closing Chapter 27 experimental FA principle:", "C", {
    A: { text: "Interviews equal completed FA.", rationale: "Modality accuracy." },
    B: { text: "Single-session spikes always sufficient.", rationale: "Replication and differentiation." },
    C: { text: "Arrange contrasts when safeguards align; measure cleanly; replicate when feasible; report confidence honestly; never mislabel modalities.", rationale: "Chapter 27 experimental integration." },
    D: { text: "Skip descriptive and indirect streams.", rationale: "Multimodal FBA." },
  }),
];
