import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 29 — Self-Management. */

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

export const CHAPTER_29_SELF_MANAGEMENT_QUIZ_BANK: BDSQuestion[] = [
  bx("mod30-q1", "Learner skips self-recording whenever stressed—graphs show hero trends only on supervised days. MOST defensible response?", "D", {
    A: { text: "Celebrate independence claims.", rationale: "Verification required." },
    B: { text: "Delete unsupervised sessions from dataset quietly.", rationale: "Cherry picking." },
    C: { text: "Punish noncompliance with self-charting exclusively.", rationale: "Redesign ecology." },
    D: { text: "Engineer simplified recording cues and intermittent IOA reconciliation before claiming mastery.", rationale: "Correct move—Engineer simplified recording cues and intermittent IOA reconciliation before claiming mastery." },
  }),
  bx("mod30-q4", "Cooper Chapter 29 self-management:", "B", {
    A: { text: "External control only permanently.", rationale: "Transfer toward performer." },
    B: { text: "Transfers stimulus and consequence control toward the performer with operational clarity.", rationale: "Self-management overview." },
    C: { text: "Aspirational journaling without measurement.", rationale: "Actual contingencies required." },
    D: { text: "Identical to token economy only.", rationale: "Self-management tactics." },
  }),
  bx("mod30-q5", "Self-monitoring:", "A", {
    A: { text: "Person records own behavior against operational definition for feedback.", rationale: "Self-monitoring definition." },
    B: { text: "Access reinforcers without rules.", rationale: "Recording behavior." },
    C: { text: "Clinician records only always.", rationale: "Self-directed recording." },
    D: { text: "Punishment for errors.", rationale: "Feedback function." },
  }),
  bx("mod30-q6", "Self-evaluation:", "C", {
    A: { text: "Record behavior only.", rationale: "Compare to criterion." },
    B: { text: "Unlimited reinforcer access.", rationale: "Adjust tactics." },
    C: { text: "Compares performance to criterion and adjusts tactics with or without external coaching.", rationale: "Self-evaluation definition." },
    D: { text: "Extinction procedure.", rationale: "Evaluation component." },
  }),
  bx("mod30-q7", "Self-reinforcement:", "D", {
    A: { text: "Unsupervised unlimited access always.", rationale: "Oversight safeguards." },
    B: { text: "Identical to self-monitoring.", rationale: "Self-administered consequences." },
    C: { text: "External punishment.", rationale: "Contingent access." },
    D: { text: "Arranged access to reinforcers contingent on meeting self-set rules when oversight safeguards exist.", rationale: "Self-reinforcement definition." },
  }),
  bx("mod30-q8", "Goal specification in self-management:", "B", {
    A: { text: "Vague aspiration.", rationale: "Measurable target required." },
    B: { text: "Measurable target with deadlines and environmental supports clearly listed.", rationale: "Goal specification definition." },
    C: { text: "IOA statistic only.", rationale: "Planning component." },
    D: { text: "Punishment plan.", rationale: "Self-management goal." },
  }),
  bx("mod30-q9", "Accuracy check in self-management:", "A", {
    A: { text: "Independent verification probes ensuring self-monitored logs align with observable events.", rationale: "Accuracy check definition." },
    B: { text: "Optional after mastery.", rationale: "Before independence claims." },
    C: { text: "Self-punishment for errors.", rationale: "Collateral verification." },
    D: { text: "Delete mismatched sessions.", rationale: "Transparent reconciliation." },
  }),
  bx("mod30-q10", "Exam trap: claiming self-management mastery without accuracy checks:", "C", {
    A: { text: "Best practice.", rationale: "IOA/collateral required." },
    B: { text: "Domain E only.", rationale: "Domain C integrity." },
    C: { text: "High-yield error—collateral verification before independence claims.", rationale: "Ch 29 confusion point." },
    D: { text: "Required for self-evaluation only.", rationale: "All self-mgmt claims." },
  }),
  bx("mod30-q11", "Exam trap: confusing self-monitoring with self-reinforcement:", "B", {
    A: { text: "Correct—they are identical.", rationale: "Recording vs contingent access." },
    B: { text: "High-yield error—monitoring records behavior; self-reinforcement delivers consequences.", rationale: "Component discrimination." },
    C: { text: "Both are punishment.", rationale: "Operant self-management." },
    D: { text: "Monitoring delivers reinforcers.", rationale: "Separate components." },
  }),
  bx("mod30-q12", "Exam trap: coercive self-punishment plans lacking oversight:", "A", {
    A: { text: "High-yield error—Domain E violation; clinical oversight required.", rationale: "Ethical guardrail." },
    B: { text: "Encouraged for autonomy.", rationale: "Coercive self-punishment prohibited." },
    C: { text: "Required for IOA.", rationale: "Ethics issue." },
    D: { text: "Best when stressed.", rationale: "Humane supports." },
  }),
  bx("mod30-q13", "Self-monitored graphs rosy when supervision absent; collateral spot checks disagree:", "A", {
    A: { text: "Engineer simpler recording plus scheduled IOA reconciliation before independence claims escalate.", rationale: "Correct move—Engineer simpler recording plus scheduled IOA reconciliation before independence claims escalate." },
    B: { text: "Celebrate heroic trends ignoring mismatches.", rationale: "Mismatch signals broken measurement." },
    C: { text: "Punish logging errors exclusively.", rationale: "Supportive redesign." },
    D: { text: "Delete mismatched sessions quietly.", rationale: "Transparency." },
  }),
  bx("mod30-q14", "Self-reinforcement contract grants unlimited coveted items sans oversight:", "A", {
    A: { text: "Guardrail collapse—tie self-managed reinforcers to monitored rules aligning with wellness plans.", rationale: "Correct move—Guardrail collapse—tie self-managed reinforcers to monitored rules aligning with wellness plans." },
    B: { text: "Unlimited access always reinforces optimally.", rationale: "Unchecked access risks." },
    C: { text: "Clinician review obsolete after first session.", rationale: "Ongoing oversight." },
    D: { text: "Approve for autonomy.", rationale: "Safeguarded self-reinforcement." },
  }),
  bx("mod30-q15", "Prompt fading in self-management:", "D", {
    A: { text: "Remove all supports immediately.", rationale: "Sustainable transfer." },
    B: { text: "Permanent maximal prompts.", rationale: "Fade to covert cues." },
    C: { text: "Identical to punishment fading.", rationale: "Self-cue transfer." },
    D: { text: "Transfers control from overt devices to covert self-cues sustainably.", rationale: "Prompt fading definition." },
  }),
  bx("mod30-q16", "Architect low-effort recording supports:", "C", {
    A: { text: "Complex forms only.", rationale: "Digital nudges, simple forms." },
    B: { text: "Punish recording failures.", rationale: "Feasible ecology." },
    C: { text: "Prompts, data forms, digital nudges, environmental supports for accurate self-recording.", rationale: "Recording architecture." },
    D: { text: "Delete unsupervised data.", rationale: "Support design." },
  }),
  bx("mod30-q17", "Collateral verification compares:", "B", {
    A: { text: "Parent satisfaction only.", rationale: "Self vs independent logs." },
    B: { text: "Self-recorded data to independent observation logs.", rationale: "Collateral verification." },
    C: { text: "Punishment counts.", rationale: "Accuracy assessment." },
    D: { text: "Token exchange rates.", rationale: "Self-management metric." },
  }),
  bx("mod30-q18", "Ignoring MO when self-recording fails under stress:", "D", {
    A: { text: "Best practice.", rationale: "MO-informed redesign." },
    B: { text: "Proof of sabotage.", rationale: "Simplify recording." },
    C: { text: "Required for self-evaluation only.", rationale: "All components." },
    D: { text: "High-yield error—adjust recording ecology and supports when MO blocks monitoring.", rationale: "MO consideration." },
  }),
  bx("mod30-q19", "Domain F Chapter 29 items often test:", "A", {
    A: { text: "Self-monitoring vs self-reinforcement, accuracy checks, ethical oversight.", rationale: "Domain F focus." },
    B: { text: "FBA modalities only.", rationale: "Self-mgmt components." },
    C: { text: "Chaining only.", rationale: "Self-management logic." },
    D: { text: "Token group types only.", rationale: "Ch 29 fundamentals." },
  }),
  bx("mod30-q20", "Crisis window and self-management:", "C", {
    A: { text: "Insist on independence always.", rationale: "Temporary external control." },
    B: { text: "Punish crisis.", rationale: "Social validity reversion." },
    C: { text: "Temporarily shift control back to external reinforcers when safety or validity demands.", rationale: "Crisis reversion." },
    D: { text: "Delete crisis data.", rationale: "Document and adjust." },
  }),
  bx("mod30-q21", "Privacy for self-reported data:", "B", {
    A: { text: "Share publicly without consent.", rationale: "Privacy guardrail." },
    B: { text: "Maintain appropriate confidentiality for self-management records.", rationale: "Ethical privacy." },
    C: { text: "Optional decoration.", rationale: "Domain E requirement." },
    D: { text: "Post on bulletin board.", rationale: "Confidentiality." },
  }),
  bx("mod30-q22", "Blaming clients when environment withholds supports:", "D", {
    A: { text: "Correct clinical framing.", rationale: "Revise environment." },
    B: { text: "Required for independence.", rationale: "Support not blame." },
    C: { text: "Domain C only.", rationale: "Domain E concern." },
    D: { text: "Domain E violation—engineer supports and feasible recording before blame narratives.", rationale: "Ethical guardrail." },
  }),
  bx("mod30-q23", "Self-management packaging—FIRST step:", "A", {
    A: { text: "Operationalize targets and prompts with collaborator input including assent.", rationale: "First step—establish preconditions before making analytic claims." },
    B: { text: "Claim independence.", rationale: "Define targets first." },
    C: { text: "Unlimited self-reinforcement.", rationale: "Assent and clarity." },
    D: { text: "Punish recording errors.", rationale: "Collaborative operationalization." },
  }),
  bx("mod30-q24", "Pilot self-monitoring with collateral samples:", "C", {
    A: { text: "Skip verification.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    B: { text: "Delete mismatches.", rationale: "Verification samples." },
    C: { text: "Compare self-records to independent observation before scaling independence.", rationale: "Pilot verification." },
    D: { text: "Replace with anecdotes.", rationale: "Objective samples." },
  }),
  bx("mod30-q25", "Chapter 29 pairs with Chapter 30 (Generalization) because:", "D", {
    A: { text: "Unrelated.", rationale: "Self-mgmt then generalize/maintain." },
    B: { text: "Self-management replaces generalization.", rationale: "Sequential goals." },
    C: { text: "Generalization is self-punishment.", rationale: "Autonomy across settings." },
    D: { text: "Self-management builds performer control; generalization/maintenance extend across time and settings.", rationale: "Integration note." },
  }),
  bx("mod30-q26", "Treatment adherence to self-administered consequences:", "B", {
    A: { text: "Irrelevant.", rationale: "Track whether rules followed." },
    B: { text: "Document whether self-reinforcement/self-correction rules were actually contacted.", rationale: "Adherence measurement." },
    C: { text: "Replaces IOA.", rationale: "Complementary metric." },
    D: { text: "Punish non-adherence only.", rationale: "Supportive monitoring." },
  }),
  bx("mod30-q27", "Accuracy incentives for self-monitoring:", "A", {
    A: { text: "Reinforce accurate recording when collateral checks confirm alignment.", rationale: "Accuracy incentive role." },
    B: { text: "Punish all errors harshly.", rationale: "Reinforcement-forward." },
    C: { text: "Unnecessary if graphs pretty.", rationale: "IOA spot checks." },
    D: { text: "Replace operational definitions.", rationale: "Incentivize honesty." },
  }),
  bx("mod30-q28", "High-Yield: aspirational journaling without operational definitions:", "C", {
    A: { text: "Sufficient self-management.", rationale: "Operational clarity required." },
    B: { text: "Self-reinforcement proof.", rationale: "Measurable targets." },
    C: { text: "Error—not self-management without operationalized targets and verification.", rationale: "Confusion point." },
    D: { text: "Required for privacy.", rationale: "Definition issue." },
  }),
  bx("mod30-q29", "Shape self-evaluation honoring realistic MO contexts:", "D", {
    A: { text: "Ignore MO.", rationale: "Third step—implement transparently with honest measurement." },
    B: { text: "Punish MO shifts.", rationale: "Realistic criteria." },
    C: { text: "Delete goals when stressed.", rationale: "Adjust supports." },
    D: { text: "Set achievable criteria and adjust when MO changes block performance.", rationale: "MO-aware shaping." },
  }),
  bx("mod30-q30", "Review autonomy risks and privacy guardrails routinely:", "B", {
    A: { text: "Once at intake only.", rationale: "Final step—make claims and follow through with documented review." },
    B: { text: "Ongoing supervisory review as independence increases.", rationale: "Routine review." },
    C: { text: "Never—autonomy absolute.", rationale: "Safeguard monitoring." },
    D: { text: "Public posting of self-data.", rationale: "Privacy protection." },
  }),
  bx("mod30-q31", "BCBA stem: self-monitoring accurate only when therapist present:", "C", {
    A: { text: "Declare self-management mastered.", rationale: "Unsupervised verification needed." },
    B: { text: "Punish unsupervised days.", rationale: "Simplify cues; IOA." },
    C: { text: "Recording ecology fails under independence—redesign cues and verify before mastery claims.", rationale: "Supervised-only vignette." },
    D: { text: "Delete unsupervised data.", rationale: "Transparent fix." },
  }),
  bx("mod30-q32", "Self-monitoring versus external monitoring:", "A", {
    A: { text: "Self-monitoring: performer records; external: observer records—both need IOA when self-directed.", rationale: "Discrimination." },
    B: { text: "Identical always.", rationale: "Verifier needed for self." },
    C: { text: "External never needs IOA.", rationale: "Both may need agreement checks." },
    D: { text: "Self-monitoring is punishment.", rationale: "Recording function." },
  }),
  bx("mod30-q33", "Ethical self-management supervision prioritizes:", "D", {
    A: { text: "Independence claims without IOA.", rationale: "Verification and privacy." },
    B: { text: "Coercive self-punishment.", rationale: "Oversight safeguards." },
    C: { text: "Blame for recording failures.", rationale: "Support redesign." },
    D: { text: "Collateral checks, feasible recording, overseen self-reinforcement, privacy, crisis reversion.", rationale: "Domain E + C." },
  }),
  bx("mod30-q34", "Digital nudges in self-management:", "B", {
    A: { text: "Coercive punishment.", rationale: "Low-effort recording prompts." },
    B: { text: "Environmental supports prompting timely self-recording.", rationale: "Recording support." },
    C: { text: "Replace all IOA.", rationale: "Complementary tool." },
    D: { text: "Unlimited self-reinforcement.", rationale: "Antecedent prompt." },
  }),
  bx("mod30-q35", "Supervisor asks for IOA on self-monitored hand-raising:", "A", {
    A: { text: "Appropriate—verify self-records against observation before independence claims.", rationale: "Supervisory standard." },
    B: { text: "Unnecessary if learner sincere.", rationale: "Objective verification." },
    C: { text: "Replace with parent anecdote.", rationale: "Collateral IOA." },
    D: { text: "Punish discrepancies.", rationale: "Redesign system." },
  }),
  bx("mod30-q36", "Social validity demands external reinforcers temporarily:", "C", {
    A: { text: "Ignore social validity.", rationale: "Crisis reversion." },
    B: { text: "Permanent external control only.", rationale: "Temporary shift." },
    C: { text: "Shift back to external reinforcement when autonomy plan not yet valid for context.", rationale: "Social validity reversion." },
    D: { text: "Delete self-data.", rationale: "Adjust plan." },
  }),
  bx("mod30-q37", "Goal setting in self-management requires:", "D", {
    A: { text: "Vague intentions.", rationale: "Measurable specification." },
    B: { text: "Punishment targets.", rationale: "Appetitive self-management." },
    C: { text: "No deadlines.", rationale: "Goal specification." },
    D: { text: "Operational measurable targets, deadlines, listed supports.", rationale: "Goal setting standard." },
  }),
  bx("mod30-q38", "Exam trap: ignoring recording feasibility:", "B", {
    A: { text: "Best practice.", rationale: "Feasible ecology required." },
    B: { text: "High-yield error—complex forms under stress fail; simplify and verify.", rationale: "Feasibility trap." },
    C: { text: "Domain E only.", rationale: "Domain C + F." },
    D: { text: "Applies to chaining only.", rationale: "Self-mgmt context." },
  }),
  bx("mod30-q39", "Person accesses break after self-chart shows criterion; BCBA spot-checks schedule:", "C", {
    A: { text: "Self-monitoring only.", rationale: "Self-reinforcement with oversight." },
    B: { text: "Coercive self-punishment.", rationale: "Contingent access." },
    C: { text: "Self-reinforcement with appropriate oversight safeguards.", rationale: "Integrated example." },
    D: { text: "External punishment.", rationale: "Self-administered reinforcer." },
  }),
  bx("mod30-q40", "Intermittent IOA reconciliation purpose:", "A", {
    A: { text: "Periodic collateral checks maintaining accuracy as independence increases.", rationale: "Intermittent IOA." },
    B: { text: "Replace self-monitoring permanently.", rationale: "Ongoing verification." },
    C: { text: "Punish learner.", rationale: "Quality assurance." },
    D: { text: "Delete all self-data.", rationale: "Reconcile discrepancies." },
  }),
  bx("mod30-q41", "Cooper warns self-monitoring graphs without spot checks:", "D", {
    A: { text: "Always accurate.", rationale: "Optimistic misleading graphs." },
    B: { text: "IOA irrelevant.", rationale: "Verification required." },
    C: { text: "Proof of punishment need.", rationale: "Measurement integrity." },
    D: { text: "Mislead teams optimistically—require collateral verification.", rationale: "Cooper emphasis." },
  }),
  bx("mod30-q42", "BCBA stem: team punishes self-charting errors exclusively:", "B", {
    A: { text: "Approve punishment-forward approach.", rationale: "Redesign recording supports." },
    B: { text: "Coach simplify cues, accuracy incentives, IOA—not shame for broken ecology.", rationale: "Punishment vignette." },
    C: { text: "Delete all self-data.", rationale: "Supportive fix." },
    D: { text: "Claim mastery.", rationale: "Verification first." },
  }),
  bx("mod30-q43", "Collaborator input including assent when operationalizing targets:", "C", {
    A: { text: "Optional.", rationale: "Assent-sensitive self-mgmt." },
    B: { text: "Clinician only.", rationale: "Collaborative design." },
    C: { text: "Required ethical practice for self-management goals and recording plans.", rationale: "Assent in self-mgmt." },
    D: { text: "Replaces IOA.", rationale: "Complementary." },
  }),
  bx("mod30-q44", "Self-management versus external management fade:", "A", {
    A: { text: "Self-management transfers control gradually with verification—not instant abandonment of supports.", rationale: "Fade logic." },
    B: { text: "Instant full independence always.", rationale: "Gradual verified transfer." },
    C: { text: "External control permanent always.", rationale: "Autonomy goal." },
    D: { text: "Identical to extinction.", rationale: "Self-management arrangement." },
  }),
  bx("mod30-q45", "Wellness-aligned self-reinforcement rules:", "D", {
    A: { text: "Unlimited harmful items.", rationale: "Wellness guardrails." },
    B: { text: "No oversight.", rationale: "Monitored rules." },
    C: { text: "Coercive self-punishment.", rationale: "Health-aligned menus." },
    D: { text: "Self-managed reinforcers tied to monitored rules consistent with health/wellness plans.", rationale: "mod30-q3 rationale." },
  }),
  bx("mod30-q46", "Environmental supports for self-recording:", "B", {
    A: { text: "Unrelated to self-management.", rationale: "Forms, prompts, nudges." },
    B: { text: "Reduce effort and increase accuracy of self-monitored data.", rationale: "Support purpose." },
    C: { text: "Replace assent.", rationale: "Ecology design." },
    D: { text: "Punishment devices.", rationale: "Antecedent supports." },
  }),
  bx("mod30-q47", "Cooper emphasizes comparing self-recorded to collateral logs:", "A", {
    A: { text: "Honest Domain C practice before autonomy claims.", rationale: "Measurement emphasis." },
    B: { text: "Optional marketing.", rationale: "Core verification." },
    C: { text: "Parent applause sufficient.", rationale: "Objective collateral." },
    D: { text: "Replaces goal specification.", rationale: "Complementary." },
  }),
  bx("mod30-q48", "Self-evaluation after self-monitoring sequence:", "C", {
    A: { text: "Self-evaluation always first.", rationale: "Monitor then evaluate." },
    B: { text: "Identical step.", rationale: "Sequential components." },
    C: { text: "Typically follows accurate self-monitoring data comparing performance to criterion.", rationale: "Component sequence." },
    D: { text: "Replaces reinforcement.", rationale: "Related steps." },
  }),
  bx("mod30-q49", "Oversight safeguards for self-reinforcement include:", "D", {
    A: { text: "None—full autonomy day one.", rationale: "Spot checks and rules." },
    B: { text: "Public shaming.", rationale: "Clinical oversight." },
    C: { text: "Unlimited access.", rationale: "Monitored contingencies." },
    D: { text: "Periodic review, wellness alignment, and rules preventing unsafe escalation.", rationale: "Safeguard bundle." },
  }),
  bx("mod30-q50", "Closing Chapter 29 principle:", "B", {
    A: { text: "Independence claims need no IOA.", rationale: "Verification required." },
    B: { text: "Operationalize goals; support feasible accurate self-monitoring; verify with collateral IOA; oversee self-reinforcement; protect privacy; revert externally during crisis; support—not blame.", rationale: "Chapter 29 integration." },
    C: { text: "Self-monitoring equals self-reinforcement.", rationale: "Component discrimination." },
    D: { text: "Coercive self-punishment accelerates autonomy.", rationale: "Ethical violation." },
  }),
];
