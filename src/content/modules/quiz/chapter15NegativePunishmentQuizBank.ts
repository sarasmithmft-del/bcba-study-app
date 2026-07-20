import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 15 — Negative Punishment. */

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

export const CHAPTER_15_NP_QUIZ_BANK: BDSQuestion[] = [
  bx("mod36-q1", "Cooper Chapter 15 defines negative punishment as:", "B", {
    A: { text: "Presentation of a stimulus decreasing behavior.", rationale: "Positive punishment." },
    B: { text: "Contingent removal of a reinforcer that decreases future probability of the response.", rationale: "Core negative punishment definition." },
    C: { text: "Removal of an aversive increasing behavior.", rationale: "Negative reinforcement." },
    D: { text: "Withholding all reinforcement indefinitely.", rationale: "Extinction or non-contingent removal—not NP definition alone." },
  }),
  bx("mod36-q4", "Negative in negative punishment refers to:", "A", {
    A: { text: "Removal/subtraction of a reinforcer.", rationale: "Negative = removed." },
    B: { text: "Morally good procedures only.", rationale: "Technical operant term." },
    C: { text: "Increase in behavior.", rationale: "Punishment decreases behavior." },
    D: { text: "Added stimulus only.", rationale: "Positive punishment adds." },
  }),
  bx("mod36-q5", "Negative punishment is defined functionally by:", "C", {
    A: { text: "Clinician intent to penalize.", rationale: "Future rate decrease defines punishment." },
    B: { text: "Immediate stop only.", rationale: "Durable decrease required." },
    C: { text: "Decrease in future response frequency after contingent reinforcer removal.", rationale: "Functional definition." },
    D: { text: "Loss of any item regardless of function.", rationale: "Removed event must function as reinforcer." },
  }),
  bx("mod36-q6", "Each out-of-seat episode costs two tokens exchangeable for tablet time; out-of-seat decreases:", "D", {
    A: { text: "Positive punishment because tokens were taken.", rationale: "Reinforcer removed; rate decreased." },
    B: { text: "Extinction because reinforcement stopped.", rationale: "Contingent removal per response—not total withholding." },
    C: { text: "Negative reinforcement because out-of-seat stopped.", rationale: "Rate decreased after reinforcer removal." },
    D: { text: "Negative punishment (response cost) removing conditioned reinforcers.", rationale: "Classic Cooper response-cost vignette." },
  }),
  bx("mod36-q7", "Response cost is:", "A", {
    A: { text: "Negative punishment subtype removing a specific amount of reinforcer per response.", rationale: "Response cost definition." },
    B: { text: "Positive punishment only.", rationale: "Removes reinforcers." },
    C: { text: "Negative reinforcement.", rationale: "Decreases behavior." },
    D: { text: "Extinction of all behavior.", rationale: "Per-response removal." },
  }),
  bx("mod36-q8", "Timeout is:", "C", {
    A: { text: "Adding aversive stimuli contingent on behavior.", rationale: "Positive punishment." },
    B: { text: "Permanent loss of all privileges.", rationale: "Designated period of lost access." },
    C: { text: "Loss of access to reinforcement for a designated period contingent on responding.", rationale: "Timeout definition." },
    D: { text: "Negative reinforcement escape.", rationale: "Timeout removes access; classified as NP when rate decreases." },
  }),
  bx("mod36-q9", "Negative punishment versus positive punishment:", "B", {
    A: { text: "Both add stimuli.", rationale: "NP removes reinforcer." },
    B: { text: "NP removes reinforcer and decreases behavior; PP presents stimulus and decreases behavior.", rationale: "Operation discrimination." },
    C: { text: "Both increase behavior.", rationale: "Both decrease when functioning as punishment." },
    D: { text: "Identical operations.", rationale: "Remove vs add." },
  }),
  bx("mod36-q10", "Negative punishment versus extinction:", "D", {
    A: { text: "Identical processes.", rationale: "Extinction withholds maintaining SR; NP removes contingent reinforcer." },
    B: { text: "Both always remove same reinforcer.", rationale: "Extinction targets maintaining contingency." },
    C: { text: "Extinction adds stimuli.", rationale: "Extinction = non-reinforcement." },
    D: { text: "Extinction withholds maintaining reinforcer for the response; NP removes a reinforcer contingent on the response.", rationale: "High-yield discrimination." },
  }),
  bx("mod36-q11", "Negative punishment versus negative reinforcement:", "A", {
    A: { text: "NP removes reinforcer and decreases behavior; NR removes/postpones aversive and increases behavior.", rationale: "Effect direction differs." },
    B: { text: "Both decrease behavior.", rationale: "NR increases behavior." },
    C: { text: "Both remove reinforcers.", rationale: "NR removes aversive." },
    D: { text: "Identical when tokens removed.", rationale: "Check what was removed and rate effect." },
  }),
  bx("mod36-q12", "Before classifying response cost, analyst must verify:", "C", {
    A: { text: "Token color only.", rationale: "Reinforcer function under current MO." },
    B: { text: "Caregiver annoyance.", rationale: "Functional reinforcer verification." },
    C: { text: "Removed event functioned as reinforcement and future target rate decreased.", rationale: "Cooper verification sequence." },
    D: { text: "Immediate suppression only.", rationale: "Durable decrease required." },
  }),
  bx("mod36-q13", "Loss of privilege contingent on misbehavior is functionally:", "B", {
    A: { text: "Positive punishment whenever privilege ends.", rationale: "Response cost/NP when reinforcer removed and rate decreases." },
    B: { text: "Negative punishment (response cost) when removed activity was reinforcing.", rationale: "Privilege loss = contingent reinforcer removal." },
    C: { text: "Negative reinforcement.", rationale: "Rate should decrease for NP." },
    D: { text: "Extinction of all reinforcement.", rationale: "Contingent removal per instance." },
  }),
  bx("mod36-q14", "Timeout from reinforcement area after aggression; aggression decreases across sessions:", "A", {
    A: { text: "Negative punishment (timeout) if access to reinforcement was lost contingently.", rationale: "Timeout NP classification." },
    B: { text: "Positive reinforcement.", rationale: "Rate decreased." },
    C: { text: "Positive punishment only.", rationale: "Reinforcer access removed—not stimulus added." },
    D: { text: "Automatic NR.", rationale: "Socially mediated timeout." },
  }),
  bx("mod36-q15", "Punishment trap in Chapter 15 context:", "D", {
    A: { text: "Verified NP always succeeds.", rationale: "Trap = problem behavior increases via escape/other contingencies." },
    B: { text: "IOA below 80%.", rationale: "Contingency misanalysis." },
    C: { text: "Graph axis error.", rationale: "Behavioral trap definition." },
    D: { text: "Attempted punishment increases problem behavior via escape or related contingencies.", rationale: "Cooper punishment trap concept." },
  }),
  bx("mod36-q16", "Timeout may inadvertently reinforce escape when:", "B", {
    A: { text: "Learner gains access to preferred demands.", rationale: "Escape from non-preferred context can reinforce problem behavior." },
    B: { text: "Timeout removes learner from aversive demands—problem behavior may increase via NR escape.", rationale: "Classic timeout side-effect trap." },
    C: { text: "Reinforcement density increases.", rationale: "Escape from demands is NR." },
    D: { text: "Tokens are added.", rationale: "Reinforcer removal context." },
  }),
  bx("mod36-q17", "Exam trap: any penalty or fine is negative punishment:", "C", {
    A: { text: "True.", rationale: "Must verify reinforcer removal and rate decrease." },
    B: { text: "True for timeouts only.", rationale: "All NP requires functional analysis." },
    C: { text: "False—verify removed event was reinforcing and future rate decreased.", rationale: "Functional analysis required." },
    D: { text: "False because NP never uses tokens.", rationale: "Token fines are common response cost." },
  }),
  bx("mod36-q18", "MO shift during response cost plan:", "A", {
    A: { text: "Removed event may no longer function as reinforcer—reassess NP classification and plan.", rationale: "MO alters reinforcer value." },
    B: { text: "Irrelevant to NP.", rationale: "MO central to reinforcer function." },
    C: { text: "Proves extinction.", rationale: "MO changes reinforcer status." },
    D: { text: "Eliminates need for data.", rationale: "Monitor under shifting MO." },
  }),
  bx("mod36-q19", "Pairing negative punishment with alternative reinforcement:", "D", {
    A: { text: "Forbidden.", rationale: "Best practice strengthens replacements." },
    B: { text: "Optional only.", rationale: "Comprehensive BIP standard." },
    C: { text: "Replaces measurement.", rationale: "Track target and alternative paths." },
    D: { text: "Recommended—strengthen replacement responses while reducing problem behavior.", rationale: "Cooper applied emphasis." },
  }),
  bx("mod36-q20", "Documentation for negative punishment should include:", "B", {
    A: { text: "Only punishment menu.", rationale: "Objective measurement required." },
    B: { text: "Definition of removed reinforcer, magnitude/duration, baseline and outcome rates, alternative behavior data.", rationale: "Cooper documentation standards." },
    C: { text: "Graph color only.", rationale: "Comprehensive data." },
    D: { text: "Caregiver opinion without graphs.", rationale: "Data-driven practice." },
  }),
  bx("mod36-q21", "Timeout versus extinction in a classroom:", "C", {
    A: { text: "Identical.", rationale: "Timeout = contingent loss of access for period; extinction = no SR for response." },
    B: { text: "Timeout always strengthens behavior.", rationale: "Timeout can function as NP." },
    C: { text: "Timeout removes access to reinforcement for a period after the response; extinction withholds the maintaining reinforcer for that response.", rationale: "Operation discrimination." },
    D: { text: "Extinction adds aversives.", rationale: "Extinction withholds SR." },
  }),
  bx("mod36-q22", "Immediate behavior stop during timeout without durable rate decrease:", "A", {
    A: { text: "Insufficient evidence of punishment function.", rationale: "Cooper requires future rate decrease." },
    B: { text: "Verified negative punishment.", rationale: "Momentary halt insufficient." },
    C: { text: "Negative reinforcement.", rationale: "Rate not durably decreased." },
    D: { text: "Positive reinforcement.", rationale: "Suppression vs decrease." },
  }),
  bx("mod36-q23", "Token economy fine of five points after each outburst; outbursts decrease:", "D", {
    A: { text: "Positive punishment.", rationale: "Reinforcer removed contingent on behavior." },
    B: { text: "Extinction.", rationale: "Contingent per-response removal." },
    C: { text: "Negative reinforcement.", rationale: "Rate decreased." },
    D: { text: "Negative punishment (response cost).", rationale: "Classic token fine." },
  }),
  bx("mod36-q24", "Chapter 15 completes the consequence block with Chapters:", "B", {
    A: { text: "1–4 only.", rationale: "Ch 11–15 cover reinforcement and punishment." },
    B: { text: "11–14 (reinforcement and positive punishment) plus 15 (negative punishment).", rationale: "Consequence analysis arc." },
    C: { text: "20–31 only.", rationale: "Operant consequence chapters." },
    D: { text: "Schedules only.", rationale: "Broader contingency block." },
  }),
  bx("mod36-q25", "High-Yield: reinforcer removed; behavior increases:", "C", {
    A: { text: "Verified negative punishment.", rationale: "Rate increased." },
    B: { text: "Extinction.", rationale: "Check function—may be NR escape or reinforcement." },
    C: { text: "NOT negative punishment—reassess contingency (possible punishment trap or NR).", rationale: "Effect defines process." },
    D: { text: "Positive punishment.", rationale: "Reinforcer was removed." },
  }),
  bx("mod36-q26", "Ethical negative punishment practice includes:", "A", {
    A: { text: "Least-restrictive alternatives, transparent caregiver training, data on target and replacements.", rationale: "Ethics bundle." },
    B: { text: "Maximum restriction first.", rationale: "LRA applies to punishment too." },
    C: { text: "Skip side-effect monitoring.", rationale: "Monitor escape traps and MO shifts." },
    D: { text: "No operational definitions.", rationale: "Define removal magnitude and duration." },
  }),
  bx("mod36-q27", "Negative punishment ALWAYS involves:", "D", {
    A: { text: "Presentation of aversive stimuli.", rationale: "Positive punishment." },
    B: { text: "Removal of aversive stimuli.", rationale: "Negative reinforcement." },
    C: { text: "No change in behavior rate.", rationale: "Must decrease when functioning as punishment." },
    D: { text: "Contingent removal of a reinforcer with decreased future response frequency.", rationale: "Definition." },
  }),
  bx("mod36-q28", "Confusing timeout with extinction:", "B", {
    A: { text: "High-yield correct pairing.", rationale: "Different operations." },
    B: { text: "High-yield error—timeout removes access for a period; extinction withholds maintaining SR.", rationale: "Exam trap." },
    C: { text: "IOA issue only.", rationale: "Process classification error." },
    D: { text: "Both are positive punishment.", rationale: "Neither necessarily adds stimuli." },
  }),
  bx("mod36-q29", "Domain F Chapter 15 items test:", "C", {
    A: { text: "Verbal operants only.", rationale: "Consequence classification." },
    B: { text: "Schedule notation only.", rationale: "NP/response cost/timeout focus." },
    C: { text: "Discriminating reinforcer removal from PP, NR, and extinction.", rationale: "Domain F operant analysis." },
    D: { text: "Graph axis labels only.", rationale: "Contingency focus." },
  }),
  bx("mod36-q30", "Chapter 15 pairs with Chapter 14 because:", "A", {
    A: { text: "Both are punishment processes—Ch 14 adds stimulus; Ch 15 removes reinforcer.", rationale: "Punishment pair." },
    B: { text: "Both are reinforcement.", rationale: "Both decrease behavior when effective." },
    C: { text: "Both remove aversives.", rationale: "NR removes aversive." },
    D: { text: "Both are extinction.", rationale: "Distinct from extinction." },
  }),
  bx("mod36-q31", "Response cost magnitude should be:", "D", {
    A: { text: "Undefined.", rationale: "Specify amount removed per response." },
    B: { text: "Random without documentation.", rationale: "Operational definition required." },
    C: { text: "Maximum always.", rationale: "Least effective amount that works." },
    D: { text: "Operationally defined—how much reinforcer removed per instance.", rationale: "Fidelity and measurement." },
  }),
  bx("mod36-q32", "Timeout duration should be:", "B", {
    A: { text: "Undefined.", rationale: "Specify length of lost access." },
    B: { text: "Operationally defined and monitored for side effects.", rationale: "Duration is treatment parameter." },
    C: { text: "Infinite.", rationale: "Finite designated period." },
    D: { text: "Irrelevant.", rationale: "Duration affects function and side effects." },
  }),
  bx("mod36-q33", "Problem behavior increases when timeout removes child from math worksheet:", "C", {
    A: { text: "Verified negative punishment.", rationale: "Rate increased—reassess." },
    B: { text: "Positive punishment.", rationale: "Possible NR escape from demands." },
    C: { text: "Punishment trap—timeout may function as escape NR.", rationale: "Cooper side-effect warning." },
    D: { text: "Extinction.", rationale: "Escape from aversive context." },
  }),
  bx("mod36-q34", "Removing tablet access for 10 minutes after hitting; hitting decreases:", "A", {
    A: { text: "Negative punishment (timeout/loss of privilege) if tablet was reinforcing.", rationale: "Contingent removal + rate decrease." },
    B: { text: "Positive punishment.", rationale: "Access removed—not stimulus added." },
    C: { text: "Negative reinforcement.", rationale: "Rate decreased." },
    D: { text: "Extinction of all behavior.", rationale: "Contingent on hitting only." },
  }),
  bx("mod36-q35", "Extinction for attention-maintained behavior withholds:", "D", {
    A: { text: "All reinforcers in environment.", rationale: "Maintaining reinforcer for target response." },
    B: { text: "Aversive stimuli.", rationale: "Attention is reinforcer." },
    C: { text: "Added punishers.", rationale: "Non-reinforcement of maintaining SR." },
    D: { text: "The maintaining reinforcer contingent on the target response.", rationale: "Extinction vs NP contrast." },
  }),
  bx("mod36-q36", "Negative punishment requires contingency:", "B", {
    A: { text: "Reinforcer removed regardless of behavior.", rationale: "Contingent on response." },
    B: { text: "Reinforcer removal depends on the response occurring.", rationale: "Contingency core." },
    C: { text: "Random removal.", rationale: "Contingent required." },
    D: { text: "Before response only.", rationale: "Consequence follows response." },
  }),
  bx("mod36-q37", "Board item: two tokens removed per outburst; tokens buy preferred items; outbursts down:", "D", {
    A: { text: "Positive punishment.", rationale: "Reinforcer removed." },
    B: { text: "Negative reinforcement.", rationale: "Rate down." },
    C: { text: "Extinction.", rationale: "Per-response cost." },
    D: { text: "Negative punishment (response cost).", rationale: "Classic exam vignette." },
  }),
  bx("mod36-q38", "Monitoring alternative behaviors during NP plan:", "A", {
    A: { text: "Ensures comprehensive BIP—target decrease plus replacement increase.", rationale: "Best practice." },
    B: { text: "Unnecessary.", rationale: "Track both paths." },
    C: { text: "Replaces baseline.", rationale: "Both tracked." },
    D: { text: "Only for reinforcement plans.", rationale: "NP plans too." },
  }),
  bx("mod36-q39", "Inequitable access when MO shifts during token economy:", "C", {
    A: { text: "Irrelevant.", rationale: "MO changes reinforcer value." },
    B: { text: "Proves NP succeeded.", rationale: "May invalidate response cost function." },
    C: { text: "Risk—removed tokens may no longer be reinforcing; reassess plan fairness and function.", rationale: "Cooper MO note." },
    D: { text: "IOA substitute.", rationale: "Clinical MO concern." },
  }),
  bx("mod36-q40", "Socially mediated negative punishment:", "B", {
    A: { text: "Automatic sensory removal only.", rationale: "Person mediates removal." },
    B: { text: "Another person removes reinforcer contingent on behavior.", rationale: "Social mediation pathway." },
    C: { text: "Always positive punishment.", rationale: "Can decrease behavior." },
    D: { text: "Respondent elicitation.", rationale: "Operant punishment." },
  }),
  bx("mod36-q41", "Four-process discrimination: removed reinforcer, rate down:", "D", {
    A: { text: "Negative reinforcement.", rationale: "NR removes aversive; increases." },
    B: { text: "Positive punishment.", rationale: "Adds stimulus." },
    C: { text: "Positive reinforcement.", rationale: "Rate down." },
    D: { text: "Negative punishment.", rationale: "Remove reinforcer + decrease." },
  }),
  bx("mod36-q42", "Four-process discrimination: removed aversive, rate up:", "A", {
    A: { text: "Negative reinforcement.", rationale: "Remove aversive + increase." },
    B: { text: "Negative punishment.", rationale: "Rate up." },
    C: { text: "Positive punishment.", rationale: "Adds stimulus." },
    D: { text: "Extinction.", rationale: "Rate up." },
  }),
  bx("mod36-q43", "Four-process discrimination: added stimulus, rate down:", "C", {
    A: { text: "Negative punishment.", rationale: "Adds stimulus." },
    B: { text: "Negative reinforcement.", rationale: "Rate down with add = PP." },
    C: { text: "Positive punishment.", rationale: "Add + decrease." },
    D: { text: "Extinction.", rationale: "Stimulus added." },
  }),
  bx("mod36-q44", "Four-process discrimination: withheld maintaining SR, rate down:", "B", {
    A: { text: "Negative punishment always.", rationale: "Extinction withholds maintaining SR." },
    B: { text: "Extinction (when maintaining reinforcer withheld for target response).", rationale: "Extinction definition." },
    C: { text: "Positive reinforcement.", rationale: "Rate down." },
    D: { text: "Negative reinforcement.", rationale: "Withhold SR." },
  }),
  bx("mod36-q45", "Caregiver removes dessert after tantrum; tantrums unchanged—BEST conclusion:", "D", {
    A: { text: "Verified negative punishment.", rationale: "No rate decrease." },
    B: { text: "Positive punishment.", rationale: "Dessert may not be maintaining reinforcer." },
    C: { text: "Negative reinforcement.", rationale: "Rate unchanged." },
    D: { text: "Removal alone insufficient—dessert may not function as reinforcer for tantrums or plan ineffective.", rationale: "Functional verification." },
  }),
  bx("mod36-q46", "Least-restrictive alternative for NP plans:", "A", {
    A: { text: "Try reinforcement-based and antecedent strategies before punishment.", rationale: "Ethical sequence." },
    B: { text: "Maximum timeout first.", rationale: "LRA applies." },
    C: { text: "Skip consent.", rationale: "Consent/assent required." },
    D: { text: "No data on alternatives.", rationale: "Measure replacements." },
  }),
  bx("mod36-q47", "High-Yield: token fine described but tokens were not exchangeable for anything:", "C", {
    A: { text: "Still negative punishment.", rationale: "No reinforcer function." },
    B: { text: "Positive punishment.", rationale: "Nothing removed that functioned as SR." },
    C: { text: "Cannot classify as NP without verified reinforcer—tokens may be neutral.", rationale: "Reinforcer verification required." },
    D: { text: "Negative reinforcement.", rationale: "No aversive removed." },
  }),
  bx("mod36-q48", "Transparent caregiver training for NP:", "B", {
    A: { text: "Optional.", rationale: "Fidelity requires trained implementation." },
    B: { text: "Required for consistent removal magnitude, duration, and side-effect monitoring.", rationale: "Cooper applied emphasis." },
    C: { text: "Replaces graphs.", rationale: "Training plus data." },
    D: { text: "Only for PP.", rationale: "NP needs fidelity too." },
  }),
  bx("mod36-q49", "BCBA stem: each out-of-seat costs two tokens for tablet; out-of-seat drops two weeks:", "D", {
    A: { text: "Positive punishment.", rationale: "Reinforcer removed." },
    B: { text: "Extinction.", rationale: "Per-response cost." },
    C: { text: "Negative reinforcement.", rationale: "Rate down." },
    D: { text: "Negative punishment (response cost).", rationale: "Classic Cooper vignette." },
  }),
  bx("mod36-q50", "Closing Chapter 15 principle:", "B", {
    A: { text: "Any penalty is negative punishment.", rationale: "Verify reinforcer function and rate decrease." },
    B: { text: "Classify by contingent reinforcer removal and verified future rate decrease; pair with alternatives and watch for punishment traps.", rationale: "Chapter 15 integration." },
    C: { text: "Timeout equals extinction.", rationale: "Different operations." },
    D: { text: "Immediate suppression equals punishment.", rationale: "Durable decrease required." },
  }),
];
