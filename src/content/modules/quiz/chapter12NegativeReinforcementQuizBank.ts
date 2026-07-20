import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 12 — Negative Reinforcement. */

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

export const CHAPTER_12_NR_QUIZ_BANK: BDSQuestion[] = [
  bx("mod33-q1", "Cooper Chapter 12 defines negative reinforcement as:", "B", {
    A: { text: "Presentation of a stimulus that decreases behavior.", rationale: "That describes positive punishment." },
    B: { text: "Contingent removal, reduction, or postponement of an aversive stimulus that increases future responding.", rationale: "Core NR definition." },
    C: { text: "Any unpleasant activity.", rationale: "NR requires contingent effect on future rate." },
    D: { text: "Removal of a reinforcer decreasing behavior.", rationale: "Negative punishment (response cost)." },
  }),
  bx("mod33-q4", "Negative in negative reinforcement refers to:", "A", {
    A: { text: "Removal, reduction, or postponement of a stimulus.", rationale: "Negative = subtract; not moral valence." },
    B: { text: "Bad or unethical consequences only.", rationale: "NR is technical operant process." },
    C: { text: "Decrease in behavior.", rationale: "NR increases behavior." },
    D: { text: "Group statistics.", rationale: "Operant contingency term." },
  }),
  bx("mod33-q5", "Escape (negative reinforcement subtype):", "C", {
    A: { text: "Prevents aversive before it begins.", rationale: "Avoidance definition." },
    B: { text: "Decreases behavior.", rationale: "Escape increases behavior." },
    C: { text: "Response terminates or reduces an aversive already present.", rationale: "Escape NR definition." },
    D: { text: "Adds appetitive stimulus.", rationale: "Positive reinforcement." },
  }),
  bx("mod33-q6", "Avoidance (negative reinforcement subtype):", "D", {
    A: { text: "Terminates ongoing pain only.", rationale: "Escape." },
    B: { text: "Positive punishment.", rationale: "Avoidance increases behavior." },
    C: { text: "Extinction.", rationale: "Avoidance is NR when rate increases." },
    D: { text: "Response prevents or postpones aversive before it contacts the organism.", rationale: "Avoidance NR definition." },
  }),
  bx("mod33-q7", "Migraine pain present; medication terminates pain; pill-taking increases:", "A", {
    A: { text: "Negative reinforcement (escape).", rationale: "Ongoing aversive terminated by response." },
    B: { text: "Negative reinforcement (avoidance).", rationale: "Pain already present—escape." },
    C: { text: "Positive reinforcement.", rationale: "Aversive removed, not appetitive added." },
    D: { text: "Positive punishment.", rationale: "Behavior increased." },
  }),
  bx("mod33-q8", "Student completes homework Thursday to prevent Monday detention that never occurred:", "B", {
    A: { text: "Escape from ongoing detention.", rationale: "Detention prevented before onset." },
    B: { text: "Negative reinforcement (avoidance).", rationale: "Response prevents future aversive." },
    C: { text: "Positive punishment.", rationale: "Behavior increased." },
    D: { text: "Negative punishment.", rationale: "Rate increased—not reinforcer removal suppressing." },
  }),
  bx("mod33-q9", "Child screams; teacher removes worksheet; screaming increases:", "C", {
    A: { text: "Positive reinforcement.", rationale: "Aversive demand removed—NR not PR." },
    B: { text: "Positive punishment.", rationale: "Future screaming increased." },
    C: { text: "Escape via socially mediated negative reinforcement.", rationale: "Adult removes demand contingent on screaming." },
    D: { text: "Extinction.", rationale: "Removal followed response and strengthened it." },
  }),
  bx("mod33-q10", "NR versus positive punishment—key discrimination:", "D", {
    A: { text: "Both decrease behavior.", rationale: "NR increases behavior." },
    B: { text: "NR adds stimuli; punishment removes.", rationale: "Opposite operations." },
    C: { text: "Identical when aversives present.", rationale: "Future rate defines process." },
    D: { text: "NR increases future responding; positive punishment decreases it.", rationale: "Effect-based discrimination." },
  }),
  bx("mod33-q11", "NR versus positive reinforcement:", "A", {
    A: { text: "NR removes/postpones aversive; PR presents reinforcing stimulus.", rationale: "Addition vs removal." },
    B: { text: "Both remove stimuli.", rationale: "PR adds stimulus." },
    C: { text: "NR decreases behavior.", rationale: "NR increases behavior." },
    D: { text: "Identical processes.", rationale: "Different operations." },
  }),
  bx("mod33-q12", "Socially mediated negative reinforcement:", "B", {
    A: { text: "Behavior directly reduces discomfort without others.", rationale: "Automatic NR." },
    B: { text: "Another person removes/postpones aversive contingent on responding.", rationale: "Social mediation." },
    C: { text: "Always punishment.", rationale: "NR strengthens behavior." },
    D: { text: "Respondent extinction.", rationale: "Operant NR." },
  }),
  bx("mod33-q13", "Automatic negative reinforcement example:", "C", {
    A: { text: "Teacher ends timeout after hand raise.", rationale: "Socially mediated." },
    B: { text: "Sticker after correct answer.", rationale: "Positive reinforcement." },
    C: { text: "Scratching reduces itch; scratching increases.", rationale: "Direct sensory reduction without mediator." },
    D: { text: "Token fine decreases behavior.", rationale: "Negative punishment." },
  }),
  bx("mod33-q14", "Aversive stimulus in NR analysis:", "D", {
    A: { text: "Defined only by clinician dislike.", rationale: "Functional definition required." },
    B: { text: "Always physical pain.", rationale: "Demands, noise, tasks can be aversive." },
    C: { text: "Same as punisher always.", rationale: "Aversive removal can reinforce." },
    D: { text: "Event the organism escapes or avoids—defined by function.", rationale: "Cooper functional definition." },
  }),
  bx("mod33-q15", "Break after completing assignment increases work rate:", "A", {
    A: { text: "Negative reinforcement (escape/postponement from demands).", rationale: "Break removes/postpones nonpreferred activity." },
    B: { text: "Positive punishment.", rationale: "Work rate increased." },
    C: { text: "Extinction.", rationale: "Contingency strengthens behavior." },
    D: { text: "Respondent conditioning.", rationale: "Operant NR context." },
  }),
  bx("mod33-q16", "Unpleasant task alone does NOT prove NR because:", "B", {
    A: { text: "All hard tasks are automatically NR.", rationale: "Must verify contingent removal increases behavior." },
    B: { text: "Analysts must verify contingent aversive reduction increases future rate.", rationale: "Functional verification required." },
    C: { text: "Tasks cannot be aversive.", rationale: "Demands often function as aversives." },
    D: { text: "NR always decreases behavior.", rationale: "NR increases behavior." },
  }),
  bx("mod33-q17", "Escape versus avoidance discriminated by:", "C", {
    A: { text: "Reinforcer edibility.", rationale: "Temporal relation to aversive." },
    B: { text: "IOA percentage.", rationale: "Timing of aversive contact." },
    C: { text: "Aversive already present versus prevented before contact.", rationale: "Core discrimination." },
    D: { text: "Graph aesthetics.", rationale: "Temporal analysis." },
  }),
  bx("mod33-q18", "FA escape test condition evaluates:", "D", {
    A: { text: "Attention as reinforcer only.", rationale: "Escape test removes demands." },
    B: { text: "Automatic reinforcement only.", rationale: "Manipulates demand/aversive removal." },
    C: { text: "Respondent elicitation.", rationale: "Operant FA." },
    D: { text: "Whether behavior is maintained by escape from demands/aversive events.", rationale: "Standard FA escape logic." },
  }),
  bx("mod33-q19", "Long route taken; bell never rings on that route; route-taking increases:", "A", {
    A: { text: "Avoidance—prevents aversive contact.", rationale: "Bell prevented before contact." },
    B: { text: "Escape from ongoing bell.", rationale: "Bell never occurred on route." },
    C: { text: "Positive punishment.", rationale: "Behavior increased." },
    D: { text: "Extinction.", rationale: "Prevention maintained behavior." },
  }),
  bx("mod33-q20", "Screaming increases when demands removed contingent on screaming:", "B", {
    A: { text: "Positive reinforcement.", rationale: "Aversive removed—not appetitive added." },
    B: { text: "Escape from demands via socially mediated NR.", rationale: "Demand removal increased screaming." },
    C: { text: "Positive punishment.", rationale: "Rate increased." },
    D: { text: "Negative punishment.", rationale: "NR increases behavior." },
  }),
  bx("mod33-q21", "Adult removes noisy peer group already present when learner completes work; work rate increases:", "A", {
    A: { text: "Escape via socially mediated NR.", rationale: "Ongoing aversive (noise) removed contingent on responding." },
    B: { text: "Positive reinforcement because adult acted.", rationale: "Removal of aversive—not added SR." },
    C: { text: "Positive punishment because noise stopped.", rationale: "Work rate increased." },
    D: { text: "Automatic punishment.", rationale: "Social mediation present." },
  }),
  bx("mod33-q22", "Negative reinforcement is NOT punishment because:", "C", {
    A: { text: "It always feels pleasant.", rationale: "NR can involve aversive contexts." },
    B: { text: "It decreases behavior.", rationale: "NR increases behavior." },
    C: { text: "Reinforcement increases future responding; punishment decreases it.", rationale: "Functional definition." },
    D: { text: "It never involves aversives.", rationale: "NR removes aversives." },
  }),
  bx("mod33-q23", "Demand fading paired with escape from difficult trials illustrates:", "D", {
    A: { text: "Positive punishment.", rationale: "NR-based teaching tactic." },
    B: { text: "Extinction only.", rationale: "Uses escape/contingent removal." },
    C: { text: "Respondent extinction.", rationale: "Operant NR application." },
    D: { text: "Applied NR in skill acquisition.", rationale: "Escape from hard trials can reinforce approach." },
  }),
  bx("mod33-q24", "MO increases aversiveness of loud noise; escape behavior more likely:", "B", {
    A: { text: "MO irrelevant to NR.", rationale: "EO for aversive increases escape value." },
    B: { text: "Establishing operation for escape-maintained behavior.", rationale: "Stronger aversive increases NR power." },
    C: { text: "Abolishing operation only.", rationale: "Increased aversiveness = EO." },
    D: { text: "Positive reinforcement only.", rationale: "Escape NR context." },
  }),
  bx("mod33-q25", "Ethical concern when behavior is escape-maintained:", "A", {
    A: { text: "Environment may be aversive—consider antecedent reform and assent.", rationale: "Chapter 12 ethics emphasis." },
    B: { text: "Ignore and intensify demands.", rationale: "Least restrictive alternatives required." },
    C: { text: "NR is always unethical.", rationale: "Context and alternatives matter." },
    D: { text: "Skip measurement.", rationale: "Data and ethics both required." },
  }),
  bx("mod33-q26", "Free operant avoidance versus discriminated avoidance:", "C", {
    A: { text: "Identical concepts.", rationale: "Discriminated involves SD signaling impending aversive." },
    B: { text: "Free operant requires SD always.", rationale: "Free operant avoids without explicit warning stimulus." },
    C: { text: "Discriminated avoidance involves SD signaling aversive onset; response prevents it.", rationale: "Cooper distinction." },
    D: { text: "Neither is NR.", rationale: "Both are avoidance NR when rate increases." },
  }),
  bx("mod33-q27", "Exam trap: 'negative reinforcement is punishment'", "D", {
    A: { text: "True—they are synonyms.", rationale: "NR reinforces; punishment suppresses." },
    B: { text: "True when aversives involved.", rationale: "Effect direction differs." },
    C: { text: "True in applied settings only.", rationale: "Conceptual distinction universal." },
    D: { text: "False—NR increases behavior; punishment decreases it.", rationale: "High-yield confusion point." },
  }),
  bx("mod33-q28", "Hand raise terminates ongoing loud correction; hand raises increase:", "B", {
    A: { text: "Positive reinforcement.", rationale: "Correction removed—NR." },
    B: { text: "Escape from aversive correction via NR.", rationale: "Ongoing aversive terminated by response." },
    C: { text: "Positive punishment.", rationale: "Hand raises increased." },
    D: { text: "Negative punishment.", rationale: "NR increases behavior." },
  }),
  bx("mod33-q29", "Postponement of nonpreferred activity contingent on compliance increases compliance:", "A", {
    A: { text: "Avoidance or escape NR depending on whether activity was imminent/present.", rationale: "Postponement = NR when rate rises." },
    B: { text: "Positive punishment.", rationale: "Compliance increased." },
    C: { text: "Extinction.", rationale: "Contingency present." },
    D: { text: "Automatic positive reinforcement.", rationale: "Social arrangement likely." },
  }),
  bx("mod33-q30", "Chapter 12 versus Chapter 11:", "C", {
    A: { text: "Chapter 12 adds stimuli; Chapter 11 removes.", rationale: "Opposite." },
    B: { text: "Both add stimuli.", rationale: "Ch 11 adds; Ch 12 removes aversive." },
    C: { text: "Chapter 11 presents SR; Chapter 12 removes/postpones aversive to increase behavior.", rationale: "Scope discrimination." },
    D: { text: "Identical chapters.", rationale: "Different operant processes." },
  }),
  bx("mod33-q31", "Aggression produces peer retreat (ongoing teasing stops); aggression increases:", "D", {
    A: { text: "Positive reinforcement only.", rationale: "Removal of aversive social contact—NR escape." },
    B: { text: "Punishment.", rationale: "Aggression increased." },
    C: { text: "Extinction.", rationale: "Consequence strengthened behavior." },
    D: { text: "Escape via socially mediated NR if teasing was ongoing aversive.", rationale: "Peer retreat removes aversive stimulation." },
  }),
  bx("mod33-q32", "Token exchange buys delay of chore; chore completion increases:", "B", {
    A: { text: "Positive punishment.", rationale: "Behavior increased." },
    B: { text: "Avoidance NR—postpones aversive chore.", rationale: "Token contingency postpones nonpreferred activity." },
    C: { text: "Extinction.", rationale: "Reinforcement contingency." },
    D: { text: "Respondent conditioning.", rationale: "Operant NR." },
  }),
  bx("mod33-q33", "Functional verification for NR requires:", "A", {
    A: { text: "Future response rate increases when aversive reduction is contingent.", rationale: "Functional definition." },
    B: { text: "Clinician labels task aversive.", rationale: "Data on rate change required." },
    C: { text: "Immediate suppression.", rationale: "NR increases behavior." },
    D: { text: "Group statistics only.", rationale: "Single-subject functional analysis." },
  }),
  bx("mod33-q34", "Removing loud noise contingent on request; requests increase:", "C", {
    A: { text: "Positive reinforcement.", rationale: "Noise removed—NR." },
    B: { text: "Positive punishment.", rationale: "Requests increased." },
    C: { text: "Socially mediated escape NR.", rationale: "Mediator removes ongoing aversive." },
    D: { text: "Negative punishment.", rationale: "NR increases behavior." },
  }),
  bx("mod33-q35", "High-Yield: stimulus removal with behavior decrease:", "D", {
    A: { text: "Always NR.", rationale: "Decrease suggests punishment or extinction." },
    B: { text: "Always positive reinforcement.", rationale: "Rate decreased." },
    C: { text: "Always escape.", rationale: "Effect direction first." },
    D: { text: "NOT NR—check for punishment, extinction, or other process.", rationale: "NR requires rate increase." },
  }),
  bx("mod33-q36", "Three-term contingency for escape NR:", "B", {
    A: { text: "SD → R → added SR.", rationale: "NR removes aversive." },
    B: { text: "SD (demand/aversive context) → R → removal/reduction of aversive.", rationale: "Escape contingency structure." },
    C: { text: "US → UR → CS.", rationale: "Respondent triad." },
    D: { text: "R → SR only.", rationale: "Need antecedent context." },
  }),
  bx("mod33-q37", "Chapter 12 sets up Chapter 13 by:", "A", {
    A: { text: "Establishing consequence analysis before schedule effects on reinforced behavior.", rationale: "Sequential Cooper structure." },
    B: { text: "Replacing all NR with punishment.", rationale: "Schedules apply to all reinforcement." },
    C: { text: "Eliminating measurement.", rationale: "Measurement throughout." },
    D: { text: "Removing MO concepts.", rationale: "MO affects aversive value." },
  }),
  bx("mod33-q38", "BCBA stem: behavior increases only in demand conditions and stops when demands removed contingently:", "C", {
    A: { text: "Attention-maintained positive reinforcement.", rationale: "Demand removal maintains—escape NR." },
    B: { text: "Automatic sensory reinforcement.", rationale: "Social demand context." },
    C: { text: "Escape from demands (socially mediated NR).", rationale: "Classic escape-maintained pattern." },
    D: { text: "Positive punishment.", rationale: "Behavior increased in demand contexts." },
  }),
  bx("mod33-q39", "Mislabeling avoidance as escape causes:", "D", {
    A: { text: "Better treatment plans.", rationale: "Mislabeling harms precision." },
    B: { text: "IOA increase.", rationale: "Assessment error." },
    C: { text: "Automatic external validity.", rationale: "Wrong contingency label." },
    D: { text: "Wrong intervention targets—timing of aversive contact misidentified.", rationale: "Clinical consequence of error." },
  }),
  bx("mod33-q40", "Domain F Chapter 12 items test:", "B", {
    A: { text: "Graph construction only.", rationale: "Contingency classification." },
    B: { text: "Escape vs avoidance vs PR vs punishment from vignettes.", rationale: "Operant analysis." },
    C: { text: "Verbal operants only.", rationale: "NR chapter." },
    D: { text: "Ethics code memorization only.", rationale: "Conceptual analysis." },
  }),
  bx("mod33-q41", "Timeout used as punishment but learner escapes demands during timeout; problem behavior increases:", "A", {
    A: { text: "Punishment trap—intended punisher may function as escape NR.", rationale: "Classic applied error." },
    B: { text: "Perfect punishment effect.", rationale: "Behavior increased." },
    C: { text: "Positive reinforcement only.", rationale: "Escape from demands during timeout." },
    D: { text: "Extinction.", rationale: "Contingency strengthened behavior." },
  }),
  bx("mod33-q42", "Automatic NR for self-injury producing endorphin-mediated reduction:", "C", {
    A: { text: "Socially mediated escape only.", rationale: "Automatic sensory/biological reduction." },
    B: { text: "Positive punishment.", rationale: "SIB often increases with automatic NR." },
    C: { text: "Automatic NR—response directly produces reduction.", rationale: "No social mediator required." },
    D: { text: "Negative punishment.", rationale: "NR increases behavior." },
  }),
  bx("mod33-q43", "Least restrictive alternative for escape-maintained aggression:", "D", {
    A: { text: "Increase aversive demands.", rationale: "Reform environment; teach alternatives." },
    B: { text: "Covert NR arrangements.", rationale: "Transparency and ethics required." },
    C: { text: "Skip functional assessment.", rationale: "FA/clinical assessment guides plan." },
    D: { text: "Antecedent modification, FCT/DRA, and validated escape extinction with assent safeguards.", rationale: "Ethical treatment sequence." },
  }),
  bx("mod33-q44", "Warning tone precedes shock; rat presses lever to cancel tone; lever presses increase:", "B", {
    A: { text: "Escape from ongoing shock only.", rationale: "Tone warns before shock—avoidance." },
    B: { text: "Discriminated avoidance NR.", rationale: "SD signals impending aversive; response prevents it." },
    C: { text: "Positive reinforcement.", rationale: "Prevents aversive—not adds SR." },
    D: { text: "Respondent extinction.", rationale: "Operant avoidance." },
  }),
  bx("mod33-q45", "Exam: removal of attention decreases behavior:", "C", {
    A: { text: "Negative reinforcement.", rationale: "Rate decreased." },
    B: { text: "Escape NR.", rationale: "NR increases behavior." },
    C: { text: "Possible extinction or negative punishment—NOT NR.", rationale: "Effect direction rules out NR." },
    D: { text: "Avoidance.", rationale: "Rate decreased." },
  }),
  bx("mod33-q46", "Cooper emphasizes documenting for NR claims:", "A", {
    A: { text: "MO context, mediation type, and verified rate increase.", rationale: "Audit-ready NR analysis." },
    B: { text: "Only topography.", rationale: "Function and effect required." },
    C: { text: "Caregiver opinion only.", rationale: "Data required." },
    D: { text: "Punishment intensity.", rationale: "NR focus." },
  }),
  bx("mod33-q47", "Reduction versus postponement in NR:", "D", {
    A: { text: "Only reduction counts.", rationale: "Postponement also can reinforce." },
    B: { text: "Only postponement counts.", rationale: "Both escape and avoidance forms." },
    C: { text: "Neither is NR.", rationale: "Both are NR operations." },
    D: { text: "Both can increase behavior if contingent on response.", rationale: "Removal, reduction, or postponement." },
  }),
  bx("mod33-q48", "Chapter 12 paired with Chapter 11 means exam items may:", "B", {
    A: { text: "Never mix PR and NR.", rationale: "Board items nest contrasts." },
    B: { text: "Require discriminating added SR versus removed aversive with same topography.", rationale: "Common exam format." },
    C: { text: "Use only punishment options.", rationale: "Reinforcement chapters." },
    D: { text: "Eliminate three-term analysis.", rationale: "Contingency still required." },
  }),
  bx("mod33-q49", "BCBA stem: learner completes worksheets quickly only when adult removes noisy peers already present:", "A", {
    A: { text: "Escape via socially mediated negative reinforcement.", rationale: "Ongoing noise removed contingent on work." },
    B: { text: "Positive reinforcement because adult present.", rationale: "Removal of aversive." },
    C: { text: "Positive punishment because noise stopped.", rationale: "Work rate increased." },
    D: { text: "Automatic punishment.", rationale: "Social mediation." },
  }),
  bx("mod33-q50", "Closing Chapter 12 principle:", "C", {
    A: { text: "Label any hard task as NR.", rationale: "Verify contingent removal and rate increase." },
    B: { text: "NR and punishment are interchangeable.", rationale: "Opposite effects on behavior." },
    C: { text: "Classify by contingent removal/postponement of aversive with verified future rate increase; discriminate escape from avoidance.", rationale: "Chapter 12 integration." },
    D: { text: "Avoid all NR-based interventions always.", rationale: "Ethical use with alternatives." },
  }),
];
