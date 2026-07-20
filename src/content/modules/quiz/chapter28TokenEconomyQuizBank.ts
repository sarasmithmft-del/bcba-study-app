import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 28 — Token Economy, Group Contingencies, and Contingency Contracting. */

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

export const CHAPTER_28_TOKEN_ECONOMY_QUIZ_BANK: BDSQuestion[] = [
  bx("mod29-q1", "Tokens promised never cash out—learners call system fake money. MOST immediate ethical fix?", "A", {
    A: { text: "Restore reliable exchange and transparent schedules before continuing the economy.", rationale: "Correct move—Restore reliable exchange and transparent schedules before continuing the economy." },
    B: { text: "Double demands without reinforcers.", rationale: "Exchange integrity required." },
    C: { text: "Punish criticism of tokens.", rationale: "Trust repair." },
    D: { text: "Remove measurement to hide gap.", rationale: "Transparency." },
  }),
  bx("mod29-q4", "Cooper Chapter 28 token economy:", "C", {
    A: { text: "Punishment system using points.", rationale: "Conditioned reinforcement exchange." },
    B: { text: "Extinction procedure.", rationale: "Backup reinforcer translation." },
    C: { text: "Translates backup reinforcers through conditioned tokens with published exchange schedules.", rationale: "Token economy overview." },
    D: { text: "Identical to interdependent contingency only.", rationale: "Economy structure." },
  }),
  bx("mod29-q5", "Token in a token economy:", "B", {
    A: { text: "Terminal backup reinforcer always.", rationale: "Exchangeable conditioned reinforcer." },
    B: { text: "Conditioned reinforcer exchangeable for backup reinforcers per published schedule.", rationale: "Token definition." },
    C: { text: "Punisher.", rationale: "Appetitive medium." },
    D: { text: "MO abolisher only.", rationale: "Conditioned reinforcer." },
  }),
  bx("mod29-q6", "Backup reinforcer:", "D", {
    A: { text: "Token sticker only—never consumed.", rationale: "Terminal reinforcer at exchange." },
    B: { text: "IOA statistic.", rationale: "Reinforcer contacted via exchange." },
    C: { text: "Group contingency type.", rationale: "Menu item." },
    D: { text: "Terminal reinforcer contacted when token exchange rules are honored.", rationale: "Backup reinforcer definition." },
  }),
  bx("mod29-q7", "Independent group contingency:", "A", {
    A: { text: "Reinforcement hinges on each individual meeting criteria regardless of peers.", rationale: "Independent definition." },
    B: { text: "All must meet criteria together.", rationale: "Interdependent." },
    C: { text: "One member determines group reinforcer.", rationale: "Dependent." },
    D: { text: "Extinction for group.", rationale: "Individual criterion." },
  }),
  bx("mod29-q8", "Dependent group contingency:", "C", {
    A: { text: "Each individual independent.", rationale: "Hero/rescue model." },
    B: { text: "Collective performance required.", rationale: "One member's behavior earns for group." },
    C: { text: "Group reinforcement depends on one member's performance.", rationale: "Dependent definition." },
    D: { text: "Punishment only.", rationale: "Group contingency type." },
  }),
  bx("mod29-q9", "Interdependent group contingency:", "B", {
    A: { text: "Individual criteria only.", rationale: "Collective requirement." },
    B: { text: "Reinforcement requires collective performance—monitor peer pressure harms.", rationale: "Interdependent definition." },
    C: { text: "One hero earns for group.", rationale: "Dependent." },
    D: { text: "Identical to DRO.", rationale: "Group structure." },
  }),
  bx("mod29-q10", "Contingency contract:", "D", {
    A: { text: "Verbal promise without monitoring.", rationale: "Written mutual obligations." },
    B: { text: "Punishment document only.", rationale: "If-then specification." },
    C: { text: "Token sticker.", rationale: "Contract structure." },
    D: { text: "Written specification of if-then obligations with monitoring and signature ethics.", rationale: "Contract definition." },
  }),
  bx("mod29-q11", "Exchange integrity:", "A", {
    A: { text: "Documented follow-through that tokens reliably purchase promised reinforcers.", rationale: "Exchange integrity definition." },
    B: { text: "Optional marketing.", rationale: "Core economy requirement." },
    C: { text: "Hero graph captions.", rationale: "Operational integrity." },
    D: { text: "IOA on tokens only.", rationale: "Delivery follow-through." },
  }),
  bx("mod29-q12", "Exam trap: tokens without reliable exchange:", "C", {
    A: { text: "Best practice when busy.", rationale: "Economy collapses." },
    B: { text: "IOA issue only.", rationale: "Domain E + integrity." },
    C: { text: "High-yield error—restore exchange before continuing; fake money destroys trust.", rationale: "Ch 28 confusion point." },
    D: { text: "Required for independent contingencies only.", rationale: "All token economies." },
  }),
  bx("mod29-q13", "Exam trap: confusing independent and interdependent group contingencies:", "B", {
    A: { text: "Correct—they are identical.", rationale: "Individual vs collective criteria." },
    B: { text: "High-yield error—identify whether each person or entire group must meet criterion.", rationale: "Group type discrimination." },
    C: { text: "Both require one hero.", rationale: "Dependent is separate." },
    D: { text: "Applies to contracts only.", rationale: "Group contingencies." },
  }),
  bx("mod29-q14", "Interdependent group contingency sparks peer mocking toward classmate missing criteria:", "A", {
    A: { text: "Pause collective contingencies until anti-bullying monitoring and humane redesign restore equity.", rationale: "Correct move—Pause collective contingencies until anti-bullying monitoring and humane redesign restore equity." },
    B: { text: "Ignore because averages improved.", rationale: "Targeted harm matters." },
    C: { text: "Punish reporters slowing momentum.", rationale: "Safeguard reporters." },
    D: { text: "Delete bullying notes from dossiers.", rationale: "Document harm." },
  }),
  bx("mod29-q15", "Contingency contract in jargon; pressured signatures; caregivers cannot negotiate:", "A", {
    A: { text: "Domain E coercion risk—redo plain-language clauses, assent checks, disputing pathways before enforcing.", rationale: "Correct move—Domain E coercion risk—redo plain-language clauses, assent checks, disputing pathways before enforcing." },
    B: { text: "Signatures settle ethics regardless of comprehension.", rationale: "Comprehension required." },
    C: { text: "Delete dispute clauses simplifying paperwork.", rationale: "Dispute paths protect." },
    D: { text: "Enforce immediately.", rationale: "Voluntary mutual obligations." },
  }),
  bx("mod29-q16", "MO alignment in token economies:", "D", {
    A: { text: "Irrelevant if tokens printed.", rationale: "Backup menu must retain value." },
    B: { text: "Replaces exchange schedule.", rationale: "Complementary design." },
    C: { text: "Punishment focus.", rationale: "Appetitive alignment." },
    D: { text: "Backup reinforcer menus must match learner establishing conditions so tokens retain value.", rationale: "MO alignment." },
  }),
  bx("mod29-q17", "Fraud-resistant bookkeeping in token economies:", "B", {
    A: { text: "Optional decoration.", rationale: "Prevents arbitrary control." },
    B: { text: "Transparent records preventing token manipulation and undocumented exchanges.", rationale: "Bookkeeping integrity." },
    C: { text: "Delete exchange logs.", rationale: "Accountability." },
    D: { text: "Caregiver anecdotes only.", rationale: "Objective records." },
  }),
  bx("mod29-q18", "Each student earns tokens only for own behavior meeting criterion:", "C", {
    A: { text: "Interdependent group contingency.", rationale: "Individual performance." },
    B: { text: "Dependent group contingency.", rationale: "Independent." },
    C: { text: "Independent group contingency.", rationale: "Independent example." },
    D: { text: "Contingency contract only.", rationale: "Group type." },
  }),
  bx("mod29-q19", "Class party only if designated peer meets behavior goal:", "A", {
    A: { text: "Dependent group contingency.", rationale: "Dependent example." },
    B: { text: "Independent group contingency.", rationale: "One member determines group reinforcer." },
    C: { text: "Interdependent group contingency.", rationale: "Hero model." },
    D: { text: "Extinction.", rationale: "Group reinforcement arrangement." },
  }),
  bx("mod29-q20", "Reinforcement for all only if every group member meets criterion:", "D", {
    A: { text: "Independent group contingency.", rationale: "Collective requirement." },
    B: { text: "Dependent group contingency.", rationale: "Interdependent." },
    C: { text: "DRA only.", rationale: "All must perform." },
    D: { text: "Interdependent group contingency.", rationale: "Interdependent example." },
  }),
  bx("mod29-q21", "Domain F Chapter 28 items often test:", "B", {
    A: { text: "FBA modalities only.", rationale: "Group contingency and exchange logic." },
    B: { text: "Group contingency type, exchange integrity, contract ethics.", rationale: "Domain F focus." },
    C: { text: "Equivalence classes.", rationale: "Token/group fundamentals." },
    D: { text: "Shaping grain only.", rationale: "Ch 28 content." },
  }),
  bx("mod29-q22", "Token system as substitute for absent educational supports:", "C", {
    A: { text: "Efficient best practice.", rationale: "Domain E violation." },
    B: { text: "Required for interdependent contingencies.", rationale: "Cannot replace supports." },
    C: { text: "Ethical violation—tokens organize reinforcement; they do not replace mandated supports.", rationale: "Support substitution guardrail." },
    D: { text: "IOA standard.", rationale: "Ethics issue." },
  }),
  bx("mod29-q23", "Transparent ratio changes in token economies:", "A", {
    A: { text: "Stakeholders understand when exchange rates change—avoid covert ratio shifts.", rationale: "Transparency guardrail." },
    B: { text: "Hide changes to preserve momentum.", rationale: "Honest communication." },
    C: { text: "Punish questions about ratios.", rationale: "Stakeholder trust." },
    D: { text: "Delete menus.", rationale: "Published schedules." },
  }),
  bx("mod29-q24", "Pairing token economies with self-management (Chapter 29):", "D", {
    A: { text: "Never appropriate.", rationale: "Autonomy goals." },
    B: { text: "Replaces all external reinforcement permanently.", rationale: "Developmental fade." },
    C: { text: "Identical to interdependent contingency.", rationale: "Self-management integration." },
    D: { text: "Appropriate when developmental goals warrant transferring control toward performer.", rationale: "Integration note." },
  }),
  bx("mod29-q25", "Graph individual and group metrics:", "B", {
    A: { text: "Optional decoration.", rationale: "Attribute change to contingencies." },
    B: { text: "Show planned contingencies actually contacted behaviors—not confounded history alone.", rationale: "Measurement purpose." },
    C: { text: "Replace exchange integrity.", rationale: "Complementary graphs." },
    D: { text: "Punishment counts only.", rationale: "Reinforcement systems." },
  }),
  bx("mod29-q26", "Equity for marginalized students in group contingencies:", "C", {
    A: { text: "Ignore if class average improves.", rationale: "Equity monitoring." },
    B: { text: "Peer pressure acceptable motivation.", rationale: "Anti-bullying guardrails." },
    C: { text: "Explicit integrity review—interdependent packages can harm marginalized learners.", rationale: "Equity guardrail." },
    D: { text: "Delete individual graphs.", rationale: "Dual tracking." },
  }),
  bx("mod29-q27", "Assent-sensitive contingency contracts:", "A", {
    A: { text: "Learner understands obligations and may assent/withdraw without coercion.", rationale: "Assent in contracts." },
    B: { text: "Signatures under pressure sufficient.", rationale: "Comprehension and voluntariness." },
    C: { text: "Jargon preferred.", rationale: "Plain language." },
    D: { text: "No dispute pathways.", rationale: "Dispute resolution." },
  }),
  bx("mod29-q28", "Token rollout—FIRST step:", "D", {
    A: { text: "Interdependent group contingency district-wide.", rationale: "Co-design menus first." },
    B: { text: "Punish noncompliance.", rationale: "Stakeholder co-design." },
    C: { text: "Hide exchange schedule.", rationale: "Transparent rates." },
    D: { text: "Co-design backup menus and exchange rates with stakeholders including assent pathways.", rationale: "First step—establish preconditions before making analytic claims." },
  }),
  bx("mod29-q29", "High-Yield: backup menu no longer motivating; exchange drops:", "B", {
    A: { text: "Ignore—tokens enough.", rationale: "Refresh backup menu; assess MO." },
    B: { text: "Reassess MO and update backup reinforcer menu to restore token value.", rationale: "MO vignette." },
    C: { text: "Punish non-exchange.", rationale: "Menu alignment." },
    D: { text: "Delete economy without analysis.", rationale: "Program adjustment." },
  }),
  bx("mod29-q30", "Exam trap: contracts without assent-sensitive monitoring:", "C", {
    A: { text: "Best practice.", rationale: "Monitoring and comprehension." },
    B: { text: "Domain C only.", rationale: "Domain E concern." },
    C: { text: "High-yield error—contracts require understandable mutual obligations and ongoing assent checks.", rationale: "Contract trap." },
    D: { text: "Required for independent contingencies only.", rationale: "All contracts." },
  }),
  bx("mod29-q31", "Conditioned reinforcer in token economy:", "A", {
    A: { text: "Token acquired reinforcing value through pairing with diverse backup reinforcers.", rationale: "Conditioned reinforcer role." },
    B: { text: "Unpaired neutral stimulus always.", rationale: "Pairing history." },
    C: { text: "Punisher.", rationale: "Generalized conditioned reinforcer." },
    D: { text: "MO only.", rationale: "Exchange medium." },
  }),
  bx("mod29-q32", "BCBA stem: interdependent contingency labeled independent:", "D", {
    A: { text: "Correct labeling.", rationale: "Collective vs individual." },
    B: { text: "IOA issue only.", rationale: "Mislabel trap." },
    C: { text: "Contract issue only.", rationale: "Group contingency type." },
    D: { text: "Mislabel—identify whether all members or each individual must meet criterion.", rationale: "High-yield discrimination." },
  }),
  bx("mod29-q33", "Audit contracts for coercion risk:", "B", {
    A: { text: "Optional after years.", rationale: "Ongoing humane audit." },
    B: { text: "Review power asymmetries, comprehension, assent, and reinforcement density.", rationale: "Final step—make claims and follow through with documented review." },
    C: { text: "Delete dispute clauses.", rationale: "Protect learners." },
    D: { text: "Enforce jargon versions.", rationale: "Plain language." },
  }),
  bx("mod29-q34", "Documenting when group contingencies humiliate learners:", "C", {
    A: { text: "Hide to preserve program.", rationale: "Domain E transparency." },
    B: { text: "Average gains sufficient.", rationale: "Individual harm documentation." },
    C: { text: "Ethical priority—adjust or pause contingencies causing humiliation.", rationale: "Humiliation guardrail." },
    D: { text: "Punish humiliated learners.", rationale: "Program revision." },
  }),
  bx("mod29-q35", "Train staff on anti-bullying guardrails for group contingencies:", "A", {
    A: { text: "Required especially for interdependent packages with peer exposure.", rationale: "Second step—operationalize and verify fidelity before continuing." },
    B: { text: "Unnecessary if graphs rise.", rationale: "Peer harm risk." },
    C: { text: "Replace exchange integrity.", rationale: "Complementary training." },
    D: { text: "Punish bullying victims.", rationale: "Safeguard design." },
  }),
  bx("mod29-q36", "Dependent versus interdependent contingency:", "B", {
    A: { text: "Identical.", rationale: "One hero vs all must meet." },
    B: { text: "Dependent: one member's performance earns for group; interdependent: all must meet criteria.", rationale: "Discrimination." },
    C: { text: "Both require no peer effects.", rationale: "Interdependent has peer effects." },
    D: { text: "Dependent requires collective performance.", rationale: "Opposite." },
  }),
  bx("mod29-q37", "Ethical token economy supervision prioritizes:", "D", {
    A: { text: "Peer mocking as motivation.", rationale: "Exchange integrity and equity." },
    B: { text: "Unreadable contracts.", rationale: "Plain language assent." },
    C: { text: "Hidden exchange failures.", rationale: "Transparent schedules." },
    D: { text: "Reliable exchange, MO-aligned menus, group-type safeguards, assent-sensitive contracts.", rationale: "Domain E + C." },
  }),
  bx("mod29-q38", "Supervisor asks for exchange logs when learners report fake money:", "A", {
    A: { text: "Appropriate—verify exchange integrity immediately.", rationale: "Supervisory standard." },
    B: { text: "Unnecessary if behavior improved.", rationale: "Trust collapse risk." },
    C: { text: "Punish learners.", rationale: "Integrity repair." },
    D: { text: "Delete complaints.", rationale: "Document and fix." },
  }),
  bx("mod29-q39", "Mutual obligations in contingency contracts include:", "C", {
    A: { text: "One-sided clinician demands only.", rationale: "Mutual if-then." },
    B: { text: "Hidden clauses.", rationale: "Transparent obligations." },
    C: { text: "Operational definitions, monitoring roles, and dispute resolution pathways.", rationale: "Contract components." },
    D: { text: "Punishment schedules only.", rationale: "Reinforcement-forward." },
  }),
  bx("mod29-q40", "Generalized conditioned reinforcer advantage for tokens:", "B", {
    A: { text: "Tied to one backup only always.", rationale: "Multiple backup pairings." },
    B: { text: "Exchangeable for variety of backup reinforcers—reduces satiation.", rationale: "Generalized token value." },
    C: { text: "Eliminates exchange schedule.", rationale: "Still needs schedule." },
    D: { text: "Replaces assent.", rationale: "Economy design." },
  }),
  bx("mod29-q41", "BCBA stem: tokens earned but exchange window consistently closed:", "A", {
    A: { text: "Exchange integrity failure—restore reliable purchase opportunities.", rationale: "Exchange vignette." },
    B: { text: "Proof of mastery.", rationale: "Omission coercion risk." },
    C: { text: "Switch to punishment.", rationale: "Fix economy." },
    D: { text: "Ignore complaints.", rationale: "Ethical response." },
  }),
  bx("mod29-q42", "Independent group contingency BEST when:", "D", {
    A: { text: "Peer pressure desired.", rationale: "Individual accountability." },
    B: { text: "One hero should earn for all.", rationale: "Dependent model." },
    C: { text: "Collective blame desired.", rationale: "Interdependent risks." },
    D: { text: "Each learner should be reinforced based solely on own performance.", rationale: "Independent fit." },
  }),
  bx("mod29-q43", "Interdependent group contingency requires monitoring for:", "C", {
    A: { text: "IOA only.", rationale: "Bullying and equity harms." },
    B: { text: "Token printing costs.", rationale: "Peer pressure risk." },
    C: { text: "Peer pressure, bullying, and disproportionate burden on struggling members.", rationale: "Interdependent safeguards." },
    D: { text: "Extinction bursts.", rationale: "Group social effects." },
  }),
  bx("mod29-q44", "Contingency contract dispute resolution pathways:", "B", {
    A: { text: "Unnecessary bureaucracy.", rationale: "Protect asymmetric power." },
    B: { text: "Allow stakeholders to challenge terms when performance or fairness disputed.", rationale: "Dispute pathway purpose." },
    C: { text: "Clinician decides unilaterally always.", rationale: "Mutual process." },
    D: { text: "Delete after signing.", rationale: "Ongoing contract ethics." },
  }),
  bx("mod29-q45", "Exam trap: backup reinforcer menus that do not match learner MO:", "D", {
    A: { text: "Best practice.", rationale: "Menu alignment required." },
    B: { text: "IOA issue only.", rationale: "Token value collapse." },
    C: { text: "Required for contracts only.", rationale: "Economy-wide." },
    D: { text: "High-yield error—refresh menus when MO shifts reduce exchange.", rationale: "Ch 28 confusion point." },
  }),
  bx("mod29-q46", "Cooper emphasizes measurement attributing change to:", "A", {
    A: { text: "Planned contingencies actually contacting behavior—not confounded history alone.", rationale: "Measurement emphasis." },
    B: { text: "Parent satisfaction surveys only.", rationale: "Contingency contact." },
    C: { text: "Punishment reduction exclusively.", rationale: "Reinforcement systems." },
    D: { text: "Hero captions.", rationale: "Individual/group graphs." },
  }),
  bx("mod29-q47", "Power asymmetries at IEP tables and contracts:", "C", {
    A: { text: "Excuse jargon and pressure.", rationale: "Plain language assent." },
    B: { text: "Eliminate monitoring.", rationale: "Mutual obligations." },
    C: { text: "Require understandable terms, assent pathways, and dispute routes.", rationale: "Coercion guardrail." },
    D: { text: "One-sided signatures sufficient.", rationale: "Comprehension ethics." },
  }),
  bx("mod29-q48", "Adjust reinforcement density humanely during contract audit:", "B", {
    A: { text: "Remove all reinforcement.", rationale: "Humane density when coercive." },
    B: { text: "Increase meaningful reinforcement contact when schedules function as omission coercion.", rationale: "Audit outcome." },
    C: { text: "Punish noncompliance.", rationale: "Reinforcement-forward." },
    D: { text: "Hide ratio changes.", rationale: "Transparent adjustment." },
  }),
  bx("mod29-q49", "Token economy versus simple sticker chart:", "A", {
    A: { text: "Token economy includes systematic exchange schedule for backup reinforcers—often broader and sustained.", rationale: "Distinction note." },
    B: { text: "Identical always.", rationale: "Exchange system depth." },
    C: { text: "Sticker charts are always token economies.", rationale: "May lack exchange system." },
    D: { text: "Token economies never use stickers.", rationale: "Medium varies." },
  }),
  bx("mod29-q50", "Closing Chapter 28 principle:", "B", {
    A: { text: "Tokens need not cash out if graphs look good.", rationale: "Exchange integrity." },
    B: { text: "Design trustworthy token exchange; discriminate group contingency types; use assent-sensitive understandable contracts; monitor equity and MO.", rationale: "Chapter 28 integration." },
    C: { text: "Interdependent contingencies need no bullying safeguards.", rationale: "Peer harm risk." },
    D: { text: "Contracts in jargon under pressure are fine.", rationale: "Comprehension ethics." },
  }),
];
