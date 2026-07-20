import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 11 — Positive Reinforcement. */

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

export const CHAPTER_11_PR_QUIZ_BANK: BDSQuestion[] = [
  bx("mod02-q1", "Cooper Chapter 11 defines positive reinforcement as:", "C", {
    A: { text: "Any pleasant experience.", rationale: "Reinforcement is defined by effect on behavior, not subjective pleasantness." },
    B: { text: "Removal of an aversive stimulus.", rationale: "That describes negative reinforcement (Chapter 12)." },
    C: { text: "Contingent presentation of a stimulus following a response that increases future frequency of that response.", rationale: "Core positive reinforcement definition." },
    D: { text: "Presentation of a stimulus that decreases behavior.", rationale: "Decrease = punishment process." },
  }),
  bx("mod02-q4", "Positive in positive reinforcement refers to:", "A", {
    A: { text: "Addition/presentation of a stimulus.", rationale: "Positive = added; not moral valence." },
    B: { text: "Morally good consequences only.", rationale: "Reprimands can be positive reinforcers if behavior increases." },
    C: { text: "Group statistics.", rationale: "Operant contingency term." },
    D: { text: "Respondent elicitation.", rationale: "Operant reinforcement context." },
  }),
  bx("mod02-q5", "Reinforcement is defined functionally by:", "B", {
    A: { text: "Clinician intent.", rationale: "Effect on future behavior defines reinforcement." },
    B: { text: "Future increase in response frequency under similar conditions.", rationale: "Functional definition." },
    C: { text: "Immediate suppression.", rationale: "Suppression suggests punishment or other process." },
    D: { text: "Caregiver satisfaction only.", rationale: "Behavior change data required." },
  }),
  bx("mod02-q6", "Each correct response earns a sticker; accuracy increases over sessions:", "D", {
    A: { text: "Negative reinforcement.", rationale: "Stimulus presented contingent on response." },
    B: { text: "Positive punishment.", rationale: "Behavior increased." },
    C: { text: "Extinction.", rationale: "Reinforcer delivered." },
    D: { text: "Positive reinforcement.", rationale: "Contingent presentation strengthens responding." },
  }),
  bx("mod02-q7", "Public reprimands follow blurting; blurting increases across weeks:", "A", {
    A: { text: "Positive reinforcement via socially mediated stimuli.", rationale: "Added stimulus (reprimand/attention) increased behavior." },
    B: { text: "Positive punishment.", rationale: "Future frequency increased—not decreased." },
    C: { text: "Negative reinforcement escape.", rationale: "Chapter 12; no aversive removal described as maintaining blurting." },
    D: { text: "Extinction.", rationale: "Consequences follow responding." },
  }),
  bx("mod02-q8", "Unconditioned reinforcer:", "C", {
    A: { text: "Acquires function only through pairing.", rationale: "Conditioned reinforcer definition." },
    B: { text: "Has no effect on behavior.", rationale: "Unconditioned reinforcers are biologically effective." },
    C: { text: "Functions as reinforcer without prior pairing (e.g., food, water).", rationale: "Unconditioned reinforcer definition." },
    D: { text: "Always socially mediated.", rationale: "Can be automatic or mediated." },
  }),
  bx("mod02-q9", "Conditioned reinforcer:", "B", {
    A: { text: "Works only before any learning.", rationale: "Conditioned = learned through pairing." },
    B: { text: "Acquires reinforcing function through pairing with established reinforcers.", rationale: "Conditioned reinforcer definition." },
    C: { text: "Always decreases behavior.", rationale: "Reinforcer strengthens behavior." },
    D: { text: "Same as discriminative stimulus always.", rationale: "SR vs SD different functions." },
  }),
  bx("mod02-q10", "Generalized conditioned reinforcer (e.g., token, money, praise paired with many backups):", "D", {
    A: { text: "Works only when one backup is available.", rationale: "Generalized = paired with many reinforcers." },
    B: { text: "Cannot maintain behavior across MO shifts.", rationale: "Often maintains across varied MOs." },
    C: { text: "Is always unconditioned.", rationale: "Learned through extensive pairing." },
    D: { text: "Maintains behavior because paired with multiple backup reinforcers over time.", rationale: "Generalized conditioned reinforcer." },
  }),
  bx("mod02-q11", "Socially mediated positive reinforcement:", "A", {
    A: { text: "Another person delivers the reinforcing stimulus contingent on responding.", rationale: "Social mediation definition." },
    B: { text: "Behavior produces sensory consequence without others.", rationale: "Automatic reinforcement." },
    C: { text: "Always punishment.", rationale: "Can strengthen behavior." },
    D: { text: "Respondent conditioning only.", rationale: "Operant pathway." },
  }),
  bx("mod02-q12", "Stereotypy persists at equal rates alone with no social contact:", "C", {
    A: { text: "Socially mediated positive reinforcement only.", rationale: "No social delivery evident." },
    B: { text: "Positive punishment.", rationale: "Rate stable/increasing suggests reinforcement not suppression." },
    C: { text: "Automatic positive reinforcement (sensory consequence from response).", rationale: "Direct sensory feedback maintains behavior." },
    D: { text: "Negative reinforcement escape only.", rationale: "Chapter 12; isolation suggests automatic sensory." },
  }),
  bx("mod02-q13", "Premack principle:", "B", {
    A: { text: "Low-probability behavior reinforces high-probability behavior.", rationale: "Premack uses high-probability as reinforcer for low-probability." },
    B: { text: "High-probability behavior can reinforce low-probability behavior if made contingent.", rationale: "Premack / relativity theory of reinforcement." },
    C: { text: "Eliminates need for reinforcement.", rationale: "Premack is reinforcement tactic." },
    D: { text: "Applies only to respondent behavior.", rationale: "Operant application." },
  }),
  bx("mod02-q14", "After large lunch, edibles lose effectiveness as reinforcers:", "A", {
    A: { text: "Satiation (abolishing operation) reducing reinforcer effectiveness.", rationale: "MO reduces value of food reinforcer." },
    B: { text: "Positive punishment.", rationale: "Motivation shift—not stimulus presentation suppressing." },
    C: { text: "Extinction of skill.", rationale: "Reinforcer value changed." },
    D: { text: "Discriminative stimulus for punishment.", rationale: "MO concept." },
  }),
  bx("mod02-q15", "Deprivation of a reinforcer typically:", "D", {
    A: { text: "Decreases reinforcer effectiveness.", rationale: "Deprivation increases effectiveness." },
    B: { text: "Eliminates responding.", rationale: "Often increases motivation for reinforcer." },
    C: { text: "Is identical to extinction.", rationale: "Deprivation is MO; extinction withholds contingent SR." },
    D: { text: "Establishes or increases effectiveness of that reinforcer (establishing operation).", rationale: "Deprivation MO logic." },
  }),
  bx("mod02-q16", "Green light when requests produce snacks; amber when they never do tonight:", "C", {
    A: { text: "Green is SD signaling reinforcement availability for requests.", rationale: "SD correlates with reinforcement history." },
    B: { text: "Both are reinforcers.", rationale: "SD vs SR distinction." },
    C: { text: "Green = SD for reinforcement; amber = S-delta/extinction for that contingency.", rationale: "Discriminative control of reinforcement." },
    D: { text: "Respondent conditioning pair.", rationale: "Operant SD context." },
  }),
  bx("mod02-q17", "Natural reinforcer versus contrived reinforcer:", "B", {
    A: { text: "Identical concepts.", rationale: "Natural occurs in everyday ecology; contrived arranged for teaching." },
    B: { text: "Natural occurs without special arrangement; contrived is deliberately programmed for behavior change.", rationale: "Cooper distinction." },
    C: { text: "Contrived is always unethical.", rationale: "Contrived common in teaching." },
    D: { text: "Natural always stronger.", rationale: "Depends on context and MO." },
  }),
  bx("mod02-q18", "Reinforcer assessment / preference check purpose:", "A", {
    A: { text: "Identify stimuli that function as reinforcers for this learner in this context.", rationale: "Assessment before intervention." },
    B: { text: "Replace all measurement.", rationale: "Complements data collection." },
    C: { text: "Prove punishment needed.", rationale: "Identifies reinforcers for reinforcement plans." },
    D: { text: "Eliminate MO effects permanently.", rationale: "MO still monitored." },
  }),
  bx("mod02-q19", "Contingency requirement for positive reinforcement:", "D", {
    A: { text: "Stimulus delivered regardless of behavior.", rationale: "Contingency = depends on response." },
    B: { text: "Stimulus before response only.", rationale: "Consequence follows response." },
    C: { text: "Random delivery increases behavior.", rationale: "Contingent delivery required." },
    D: { text: "Presentation of stimulus depends on the response occurring.", rationale: "Contingency core feature." },
  }),
  bx("mod02-q20", "Three-term contingency for positive reinforcement:", "C", {
    A: { text: "US-UR-CS.", rationale: "Respondent triad." },
    B: { text: "MO-SD-R only.", rationale: "Need consequence (SR)." },
    C: { text: "SD → R → SR (discriminative stimulus, response, reinforcing consequence).", rationale: "Operant three-term unit." },
    D: { text: "R-SD-SP only.", rationale: "Standard order SD-R-SR." },
  }),
  bx("mod02-q21", "Differential reinforcement of alternative behavior (DRA) uses:", "A", {
    A: { text: "Positive reinforcement for an alternative response while withholding reinforcement for problem behavior.", rationale: "DRA combines reinforcement with extinction for target." },
    B: { text: "Punishment only.", rationale: "Reinforcement-based procedure." },
    C: { text: "No reinforcement.", rationale: "Alternative receives SR." },
    D: { text: "Respondent extinction.", rationale: "Operant DRA." },
  }),
  bx("mod02-q22", "Compound consequence (attention + deep pressure) and behavior increases; data do not isolate maintainer:", "B", {
    A: { text: "Definitely attention maintains behavior.", rationale: "Multiple consequences require isolation." },
    B: { text: "Insufficient data to identify specific reinforcer—FA or component analysis needed.", rationale: "Board-style ambiguity item." },
    C: { text: "Definitely automatic reinforcement.", rationale: "Social mediation present." },
    D: { text: "Not reinforcement because reprimand is aversive.", rationale: "Effect defines process—behavior increased." },
  }),
  bx("mod02-q23", "Token economy tokens function as:", "C", {
    A: { text: "Unconditioned reinforcers always.", rationale: "Tokens typically conditioned/generalized." },
    B: { text: "Punishers.", rationale: "Tokens exchange for backup reinforcers." },
    C: { text: "Generalized conditioned reinforcers when paired with varied backups.", rationale: "Token economy logic." },
    D: { text: "SD only never reinforcers.", rationale: "Tokens can function as conditioned reinforcers." },
  }),
  bx("mod02-q24", "Immediate versus delayed reinforcement—Chapter 11 emphasis:", "D", {
    A: { text: "Delay never matters.", rationale: "Delay reduces effectiveness typically." },
    B: { text: "Delayed always better.", rationale: "Immediate often more effective in acquisition." },
    C: { text: "Eliminates need for SD.", rationale: "Delay affects reinforcement effectiveness." },
    D: { text: "Immediacy and contiguity strengthen learning; delays may require bridging procedures.", rationale: "Applied teaching consideration." },
  }),
  bx("mod02-q25", "High-Yield: negative reinforcement vs positive reinforcement:", "A", {
    A: { text: "PR adds stimulus and increases behavior; NR removes/postpones aversive and increases behavior.", rationale: "Chapter 11 vs 12 discrimination." },
    B: { text: "Both decrease behavior.", rationale: "Both increase behavior." },
    C: { text: "NR is punishment.", rationale: "Common exam trap—NR reinforces." },
    D: { text: "PR removes stimuli.", rationale: "PR presents stimuli." },
  }),
  bx("mod02-q26", "Praise following task completion; on-task behavior increases:", "B", {
    A: { text: "Negative punishment.", rationale: "Behavior increased." },
    B: { text: "Positive reinforcement (socially mediated).", rationale: "Added social stimulus strengthens behavior." },
    C: { text: "Escape.", rationale: "No aversive removal maintaining on-task." },
    D: { text: "Extinction.", rationale: "Reinforcement delivered." },
  }),
  bx("mod02-q27", "Backup reinforcer in token system:", "D", {
    A: { text: "Token itself never reinforced.", rationale: "Token paired with backups." },
    B: { text: "Always punishment.", rationale: "Backup is appetitive exchange item." },
    C: { text: "SD only.", rationale: "Backup SR maintains token value." },
    D: { text: "Item/activity exchanged for tokens that maintains token as conditioned reinforcer.", rationale: "Token economy structure." },
  }),
  bx("mod02-q28", "Child screams; parent delivers massage; screaming increases. Multiple consequences present:", "C", {
    A: { text: "Label attention as maintainer without assessment.", rationale: "Sensory and social both possible." },
    B: { text: "Conclude punishment failed.", rationale: "Reinforcement increased behavior." },
    C: { text: "Reinforcement confirmed by rate increase but specific reinforcer requires further assessment.", rationale: "Conservative functional classification." },
    D: { text: "Automatic only because massage is sensory.", rationale: "Parent mediates—socially mediated pathway." },
  }),
  bx("mod02-q29", "Continuous reinforcement (CRF) during acquisition:", "A", {
    A: { text: "Reinforces every correct response—useful for establishing new behavior.", rationale: "Schedule concept tied to Ch 11 acquisition." },
    B: { text: "Never used in ABA.", rationale: "Common in initial teaching." },
    C: { text: "Same as extinction.", rationale: "CRF delivers reinforcer each time." },
    D: { text: "Punishment schedule.", rationale: "Reinforcement schedule." },
  }),
  bx("mod02-q30", "Function over topography means:", "D", {
    A: { text: "Only appearance matters.", rationale: "Consequence effect defines function." },
    B: { text: "Ignore measurement.", rationale: "Data verify function." },
    C: { text: "One topography = one function always.", rationale: "Same topography may have different functions." },
    D: { text: "Classify by maintaining consequence and future rate change, not form alone.", rationale: "Core applied analysis skill." },
  }),
  bx("mod02-q31", "Pairing neutral stimulus with unconditioned reinforcer repeatedly:", "B", {
    A: { text: "Creates punishment.", rationale: "Creates conditioned reinforcer." },
    B: { text: "May establish neutral stimulus as conditioned reinforcer.", rationale: "Classical/operant pairing history." },
    C: { text: "Eliminates MO.", rationale: "Pairing establishes SR function." },
    D: { text: "Proves respondent extinction.", rationale: "Reinforcer conditioning." },
  }),
  bx("mod02-q32", "Exam trap: 'positive' reinforcement means:", "C", {
    A: { text: "Only ethical pleasant rewards.", rationale: "Positive = added stimulus." },
    B: { text: "Only edible reinforcers.", rationale: "Any effective added stimulus." },
    C: { text: "Stimulus added contingent on behavior—regardless of social approval.", rationale: "Technical definition." },
    D: { text: "Same as negative reinforcement.", rationale: "Different operations." },
  }),
  bx("mod02-q33", "Withholding reinforcement for problem behavior while reinforcing alternative:", "A", {
    A: { text: "Combines extinction (for problem) with positive reinforcement (for alternative) in DRA.", rationale: "Standard DRA structure." },
    B: { text: "Positive punishment only.", rationale: "Reinforcement component for alternative." },
    C: { text: "Negative reinforcement only.", rationale: "PR for alternative response." },
    D: { text: "Respondent conditioning.", rationale: "Operant DRA." },
  }),
  bx("mod02-q34", "Reinforcer that works across many MO states because paired with multiple backups:", "D", {
    A: { text: "Unconditioned reinforcer only.", rationale: "Generalized conditioned reinforcer." },
    B: { text: "Aversive stimulus.", rationale: "Reinforcer strengthens behavior." },
    C: { text: "S-delta.", rationale: "SR function." },
    D: { text: "Generalized conditioned reinforcer.", rationale: "Definition match." },
  }),
  bx("mod02-q35", "Chapter 11 scope versus Chapter 12:", "B", {
    A: { text: "Chapter 11 covers escape and avoidance.", rationale: "Escape/avoidance are Chapter 12 NR." },
    B: { text: "Chapter 11 focuses on contingent stimulus presentation increasing behavior.", rationale: "Scope discrimination." },
    C: { text: "Chapter 11 covers punishment.", rationale: "Punishment is Chapters 14–15." },
    D: { text: "Chapter 11 eliminates MO concepts.", rationale: "MO affects reinforcer value." },
  }),
  bx("mod02-q36", "Edible reinforcer after fasting period more effective:", "A", {
    A: { text: "Deprivation as establishing operation increasing reinforcer effectiveness.", rationale: "EO logic preview." },
    B: { text: "Positive punishment.", rationale: "Increased effectiveness of SR." },
    C: { text: "Extinction.", rationale: "Reinforcer more effective." },
    D: { text: "Automatic punishment.", rationale: "MO effect." },
  }),
  bx("mod02-q37", "Contrived reinforcer example:", "C", {
    A: { text: "Social smile naturally occurring without programming.", rationale: "Natural reinforcer." },
    B: { text: "Removal of demands.", rationale: "NR (Ch 12)." },
    C: { text: "Sticker delivered systematically for correct responses during teaching.", rationale: "Arranged for behavior change." },
    D: { text: "Extinction.", rationale: "Withholding reinforcer." },
  }),
  bx("mod02-q38", "SD for reinforcement:", "D", {
    A: { text: "Signals punishment upcoming.", rationale: "SD signals available reinforcement." },
    B: { text: "Is always a reinforcer.", rationale: "SD occasions response; SR strengthens it." },
    C: { text: "Eliminates MO.", rationale: "SD is antecedent signal." },
    D: { text: "Antecedent correlated with availability of reinforcement for a response class.", rationale: "SD definition in reinforcement context." },
  }),
  bx("mod02-q39", "Behavior increases when peers cheer after sharing; sharing increases:", "B", {
    A: { text: "Automatic reinforcement.", rationale: "Peers mediate consequences." },
    B: { text: "Positive reinforcement (socially mediated).", rationale: "Added social stimulus contingent on sharing." },
    C: { text: "Negative punishment.", rationale: "Behavior increased." },
    D: { text: "Escape.", rationale: "No aversive removal described." },
  }),
  bx("mod02-q40", "Identifying reinforcers BEFORE intervention planning:", "A", {
    A: { text: "Best practice—preference/reinforcer assessment informs contingent delivery.", rationale: "Chapter 11 applied sequence." },
    B: { text: "Optional only.", rationale: "Assessment improves treatment precision." },
    C: { text: "Replaces informed consent.", rationale: "Ethics separate." },
    D: { text: "Proves FA always required for every case.", rationale: "Assessment can be simpler than FA." },
  }),
  bx("mod02-q41", "Reinforcement versus bribery (exam distinction):", "C", {
    A: { text: "Identical.", rationale: "Reinforcement is contingent on behavior; noncontingent delivery differs." },
    B: { text: "Reinforcement is always unethical.", rationale: "Reinforcement is core ethical ABA when used appropriately." },
    C: { text: "Reinforcement delivers stimulus contingent on desired behavior; noncontingent delivery before behavior may not strengthen target response.", rationale: "Contingency distinction." },
    D: { text: "Bribery is technical Cooper term.", rationale: "Colloquial vs contingent programming." },
  }),
  bx("mod02-q42", "Hand tapping produces audible sound learner seeks; no social audience:", "D", {
    A: { text: "Socially mediated positive reinforcement.", rationale: "No social agent." },
    B: { text: "Positive punishment.", rationale: "Behavior maintained/increased." },
    C: { text: "Negative reinforcement.", rationale: "Sensory addition not aversive removal." },
    D: { text: "Automatic positive reinforcement.", rationale: "Response produces own sensory consequence." },
  }),
  bx("mod02-q43", "Domain F Chapter 11 items test:", "B", {
    A: { text: "Graph construction only.", rationale: "Contingency classification." },
    B: { text: "Accurate identification of positive reinforcement and reinforcer type from vignettes.", rationale: "Domain F operant analysis." },
    C: { text: "Verbal operants only.", rationale: "Reinforcement chapter." },
    D: { text: "Ethics code memorization only.", rationale: "Conceptual analysis focus." },
  }),
  bx("mod02-q44", "Pairing procedure to establish new conditioned reinforcer requires:", "A", {
    A: { text: "Contiguous pairing of neutral stimulus with established reinforcer.", rationale: "Conditioning history." },
    B: { text: "Punishment for neutral stimulus.", rationale: "Pairing with SR." },
    C: { text: "Extinction only.", rationale: "Pairing establishes function." },
    D: { text: "Removal of all MOs.", rationale: "MO still relevant." },
  }),
  bx("mod02-q45", "Teacher adds free iPad time after homework completion; homework completion rises:", "B", {
    A: { text: "Negative reinforcement.", rationale: "Stimulus added (iPad access)." },
    B: { text: "Positive reinforcement (Premack / high-probability activity contingent on low-probability homework).", rationale: "Added access strengthens homework completion." },
    C: { text: "Positive punishment.", rationale: "Behavior increased." },
    D: { text: "Extinction.", rationale: "Reinforcer added." },
  }),
  bx("mod02-q46", "Satiation after repeated same reinforcer during session:", "C", {
    A: { text: "Rotate or reassess reinforcers; MO shifted.", rationale: "Applied adjustment." },
    B: { text: "Ignore and continue same reinforcer forever.", rationale: "Satiation reduces effectiveness." },
    C: { text: "May require reinforcer rotation or break—abolishing operation reduced value.", rationale: "MO-aware practice." },
    D: { text: "Proves punishment occurred.", rationale: "MO change." },
  }),
  bx("mod02-q47", "Reinforcement contingency documented but behavior unchanged:", "D", {
    A: { text: "Still call it reinforcement.", rationale: "Effect defines reinforcement—no increase = not functioning as SR." },
    B: { text: "Automatic proof of punishment.", rationale: "May not be effective reinforcer or wrong behavior targeted." },
    C: { text: "Delete all data.", rationale: "Reassess reinforcer, MO, SD, contingency." },
    D: { text: "Stimulus may not function as reinforcer for this learner in this context—reassess.", rationale: "Functional verification required." },
  }),
  bx("mod02-q48", "Chapter 11 sets foundation for:", "A", {
    A: { text: "Schedules, NR, punishment chapters by establishing consequence analysis vocabulary.", rationale: "Sequential Cooper structure." },
    B: { text: "Eliminating measurement.", rationale: "Measurement throughout." },
    C: { text: "Group designs only.", rationale: "Operant analysis applies broadly." },
    D: { text: "Respondent conditioning exclusively.", rationale: "Operant focus." },
  }),
  bx("mod02-q49", "BCBA stem: choose reinforcer from preference assessment showing highest approach rate:", "C", {
    A: { text: "Use lowest-ranked item to avoid satiation.", rationale: "Use assessed high-preference likely reinforcer." },
    B: { text: "Skip assessment; use analyst favorite.", rationale: "Idiographic assessment required." },
    C: { text: "Program high-preference item contingently and monitor whether behavior increases.", rationale: "Assessment informs SR selection; verify functionally." },
    D: { text: "Punishment is next step.", rationale: "Reinforcement-based planning." },
  }),
  bx("mod02-q50", "Closing Chapter 11 principle:", "B", {
    A: { text: "Label by how consequences feel emotionally.", rationale: "Label by effect on future behavior." },
    B: { text: "Identify contingent stimulus presentation that increases behavior; verify reinforcer function with data.", rationale: "Chapter 11 integration." },
    C: { text: "Positive reinforcement and punishment are interchangeable labels.", rationale: "Opposite effects on behavior." },
    D: { text: "Automatic and social reinforcement never coexist.", rationale: "Both pathways possible; assess which maintains." },
  }),
];
