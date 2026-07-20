import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 14 — Positive Punishment. */

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

export const CHAPTER_14_PP_QUIZ_BANK: BDSQuestion[] = [
  bx("mod35-q1", "Cooper Chapter 14 defines positive punishment as:", "C", {
    A: { text: "Removal of a reinforcer decreasing behavior.", rationale: "Negative punishment." },
    B: { text: "Removal of an aversive increasing behavior.", rationale: "Negative reinforcement." },
    C: { text: "Contingent presentation of a stimulus that decreases future probability of the response.", rationale: "Core positive punishment definition." },
    D: { text: "Any unpleasant experience.", rationale: "Defined by effect on future rate." },
  }),
  bx("mod35-q4", "Positive in positive punishment refers to:", "A", {
    A: { text: "Addition/presentation of a stimulus.", rationale: "Positive = added." },
    B: { text: "Morally wrong procedures only.", rationale: "Technical operant term." },
    C: { text: "Increase in behavior.", rationale: "Punishment decreases behavior." },
    D: { text: "Group design only.", rationale: "Operant contingency." },
  }),
  bx("mod35-q5", "Punishment is defined functionally by:", "B", {
    A: { text: "Clinician intent to suppress.", rationale: "Future rate decrease defines punishment." },
    B: { text: "Decrease in future response frequency under similar conditions.", rationale: "Functional definition." },
    C: { text: "Immediate stop only.", rationale: "Durable decrease required." },
    D: { text: "Loudness of consequence.", rationale: "Effect not volume." },
  }),
  bx("mod35-q6", "Contingent loud reprimand after hitting; hitting rate drops over two weeks:", "D", {
    A: { text: "Negative reinforcement because hitting stopped.", rationale: "Stimulus added; rate decreased." },
    B: { text: "Extinction.", rationale: "Stimulus presented contingent on behavior." },
    C: { text: "Negative punishment.", rationale: "Added stimulus not removed reinforcer." },
    D: { text: "Positive punishment via socially mediated reprimand.", rationale: "Added stimulus decreased future hitting." },
  }),
  bx("mod35-q7", "Immediate suppression without durable rate decrease:", "A", {
    A: { text: "Insufficient evidence of punishment function.", rationale: "Cooper requires future rate decrease." },
    B: { text: "Proof of positive punishment.", rationale: "Momentary halt insufficient." },
    C: { text: "Negative reinforcement.", rationale: "NR increases behavior." },
    D: { text: "Automatic reinforcement.", rationale: "Suppression vs durable decrease." },
  }),
  bx("mod35-q8", "Positive punishment versus negative reinforcement:", "C", {
    A: { text: "Both increase behavior.", rationale: "Punishment decreases." },
    B: { text: "Both remove stimuli.", rationale: "PP adds; NR removes aversive." },
    C: { text: "PP adds stimulus and decreases behavior; NR removes/postpones aversive and increases behavior.", rationale: "High-yield discrimination." },
    D: { text: "Identical when aversives involved.", rationale: "Effect direction differs." },
  }),
  bx("mod35-q9", "Positive punishment versus negative punishment:", "B", {
    A: { text: "Both remove reinforcers.", rationale: "PP presents stimulus." },
    B: { text: "PP presents stimulus; negative punishment removes reinforcer—both decrease behavior if effective.", rationale: "Operation discrimination." },
    C: { text: "Both increase behavior.", rationale: "Both decrease when functioning as punishment." },
    D: { text: "Identical operations.", rationale: "Add vs remove." },
  }),
  bx("mod35-q10", "Positive punishment versus extinction:", "D", {
    A: { text: "Identical processes.", rationale: "Extinction withholds reinforcer; PP adds stimulus." },
    B: { text: "Both add stimuli.", rationale: "Extinction withholds maintaining SR." },
    C: { text: "Extinction adds aversive.", rationale: "Extinction = non-reinforcement." },
    D: { text: "Extinction withholds maintaining reinforcer; PP presents stimulus contingent on response.", rationale: "Different operations." },
  }),
  bx("mod35-q11", "Overcorrection procedures:", "A", {
    A: { text: "Positive punishment variants requiring restitution plus additional correct behavior.", rationale: "Overcorrection classification." },
    B: { text: "Negative punishment only.", rationale: "Adds work/stimuli contingent on error." },
    C: { text: "Positive reinforcement.", rationale: "Decreases target behavior." },
    D: { text: "Extinction.", rationale: "Contingent added requirements." },
  }),
  bx("mod35-q12", "Restitutional overcorrection requires:", "C", {
    A: { text: "Only verbal warning.", rationale: "Restore environment plus extra." },
    B: { text: "Removal of all reinforcers forever.", rationale: "Restitution + often positive practice." },
    C: { text: "Restoring environment to better than before error, often plus positive practice.", rationale: "Overcorrection subtype." },
    D: { text: "Respondent extinction.", rationale: "Operant punishment variant." },
  }),
  bx("mod35-q13", "Before implementing positive punishment, Cooper emphasizes:", "B", {
    A: { text: "Maximize punishment density.", rationale: "Least-restrictive alternatives first." },
    B: { text: "Least-restrictive alternatives and reinforcement-based strategies first.", rationale: "Ethical mandate." },
    C: { text: "Skip measurement.", rationale: "Data required." },
    D: { text: "Avoid consent when urgent.", rationale: "Consent/assent required." },
  }),
  bx("mod35-q14", "Side effects during punishment (aggression, escape, emotional responding):", "D", {
    A: { text: "Prove punishment succeeded.", rationale: "Side effects warrant reassessment." },
    B: { text: "Eliminate need for graphs.", rationale: "Document collateral effects." },
    C: { text: "IOA substitute.", rationale: "Analytic and ethical review needed." },
    D: { text: "Signal need to reassess and consider alternative reinforcement—not silent continuation.", rationale: "Cooper emphasis." },
  }),
  bx("mod35-q15", "Reprimand as positive punishment requires:", "A", {
    A: { text: "Verified decrease in future rate—not volume alone.", rationale: "Functional verification." },
    B: { text: "Maximum volume.", rationale: "Effect defines function." },
    C: { text: "No data collection.", rationale: "Measurement required." },
    D: { text: "Automatic classification whenever adult speaks.", rationale: "Contingent effect required." },
  }),
  bx("mod35-q16", "Contingent exercise after misbehavior; behavior decreases across sessions:", "C", {
    A: { text: "Negative reinforcement.", rationale: "Rate decreased after added exercise." },
    B: { text: "Positive reinforcement.", rationale: "Behavior decreased." },
    C: { text: "Positive punishment if future rate decrease verified.", rationale: "Added activity contingent on behavior." },
    D: { text: "Extinction only.", rationale: "Stimulus added." },
  }),
  bx("mod35-q17", "Exam trap: any aversive consequence is punishment:", "B", {
    A: { text: "True.", rationale: "Aversive can reinforce (NR) or not change rate." },
    B: { text: "False—check whether stimulus was added/removed and future rate decreased.", rationale: "Functional analysis required." },
    C: { text: "True for reprimands only.", rationale: "All consequences need functional check." },
    D: { text: "False because punishment never uses aversives.", rationale: "PP often presents aversive stimuli." },
  }),
  bx("mod35-q18", "Hitting stops momentarily when reprimand delivered but returns at same rate next week:", "D", {
    A: { text: "Verified positive punishment.", rationale: "No durable decrease." },
    B: { text: "Negative reinforcement.", rationale: "Rate not decreased." },
    C: { text: "Extinction.", rationale: "Temporary suppression only." },
    D: { text: "Temporary suppression—not sufficient punishment evidence.", rationale: "Cooper distinction." },
  }),
  bx("mod35-q19", "Documentation for positive punishment should include:", "A", {
    A: { text: "Baseline rate, punisher definition, target and alternative behavior data, side effects.", rationale: "Cooper documentation standards." },
    B: { text: "Only caregiver opinion.", rationale: "Objective measurement required." },
    C: { text: "Graph color only.", rationale: "Comprehensive data." },
    D: { text: "Punishment menu without measurement.", rationale: "Data-driven practice." },
  }),
  bx("mod35-q20", "Unintended suppression of desirable behavior during punishment plan:", "C", {
    A: { text: "Expected and ignored.", rationale: "Monitor collateral suppression." },
    B: { text: "Proof plan succeeded.", rationale: "May indicate overgeneralized suppression." },
    C: { text: "Side effect requiring monitoring and possible plan adjustment.", rationale: "Ethical/analytic concern." },
    D: { text: "IOA error only.", rationale: "Clinical side effect." },
  }),
  bx("mod35-q21", "Positive practice overcorrection:", "B", {
    A: { text: "Removes reinforcers only.", rationale: "Requires performing correct behavior repeatedly." },
    B: { text: "Contingent requirement to engage in correct forms of behavior after error.", rationale: "Overcorrection subtype." },
    C: { text: "Positive reinforcement only.", rationale: "Punishment variant." },
    D: { text: "Extinction.", rationale: "Added response requirement." },
  }),
  bx("mod35-q22", "Chapter 14 versus Chapter 12 (NR):", "D", {
    A: { text: "Both decrease behavior.", rationale: "NR increases behavior." },
    B: { text: "Both add stimuli.", rationale: "NR removes aversive." },
    C: { text: "Identical.", rationale: "Opposite effect directions possible with aversives." },
    D: { text: "PP adds stimulus and decreases rate; NR removes aversive and increases rate.", rationale: "High-yield exam contrast." },
  }),
  bx("mod35-q23", "Socially mediated positive punishment:", "A", {
    A: { text: "Another person presents punishing stimulus contingent on behavior.", rationale: "Social mediation pathway." },
    B: { text: "Automatic sensory only.", rationale: "Person delivers consequence." },
    C: { text: "Always reinforcement.", rationale: "Can decrease behavior." },
    D: { text: "Respondent elicitation.", rationale: "Operant punishment." },
  }),
  bx("mod35-q24", "Pairing punishment with alternative reinforcement:", "C", {
    A: { text: "Optional only.", rationale: "Best practice pairs NP/PP with reinforcement for alternatives." },
    B: { text: "Forbidden.", rationale: "Comprehensive BIP standard." },
    C: { text: "Recommended—strengthen replacement while reducing problem behavior.", rationale: "Applied ethics and efficacy." },
    D: { text: "Replaces all measurement.", rationale: "Data on both paths." },
  }),
  bx("mod35-q25", "High-Yield: loud aversive added; behavior increases:", "B", {
    A: { text: "Positive punishment.", rationale: "Rate increased." },
    B: { text: "NOT positive punishment—possibly NR or positive reinforcement.", rationale: "Effect defines process." },
    C: { text: "Negative punishment.", rationale: "Stimulus added." },
    D: { text: "Extinction.", rationale: "Rate increased." },
  }),
  bx("mod35-q26", "Ethical constraints on positive punishment include:", "D", {
    A: { text: "No supervision needed.", rationale: "Heavy oversight often required." },
    B: { text: "Use before trying reinforcement.", rationale: "Least restrictive first." },
    C: { text: "Skip side-effect monitoring.", rationale: "Monitor aggression, escape, etc." },
    D: { text: "Last-resort status, consent/assent, least-restrictive alternatives, ongoing data.", rationale: "Ethics bundle." },
  }),
  bx("mod35-q27", "Positive punishment ALWAYS involves:", "A", {
    A: { text: "Presentation of a stimulus contingent on responding with decreased future frequency.", rationale: "Definition." },
    B: { text: "Removal of reinforcers exclusively.", rationale: "Negative punishment." },
    C: { text: "Termination of aversive stimuli.", rationale: "NR." },
    D: { text: "No change in behavior rate.", rationale: "Must decrease." },
  }),
  bx("mod35-q28", "Mislabeling NR as punishment because aversive stopped:", "C", {
    A: { text: "Correct labeling.", rationale: "If behavior increased, NR not punishment." },
    B: { text: "IOA issue.", rationale: "Process classification error." },
    C: { text: "High-yield error—check future rate direction.", rationale: "Exam trap." },
    D: { text: "Extinction only.", rationale: "NR vs PP." },
  }),
  bx("mod35-q29", "Domain F Chapter 14 items test:", "B", {
    A: { text: "Schedule notation only.", rationale: "Punishment classification." },
    B: { text: "Discriminating added-stimulus suppression from NR, extinction, and negative punishment.", rationale: "Domain F operant analysis." },
    C: { text: "Verbal operants only.", rationale: "Consequence chapter." },
    D: { text: "Graph axis labels only.", rationale: "Contingency focus." },
  }),
  bx("mod35-q30", "Chapter 14 pairs with Chapter 15 because:", "D", {
    A: { text: "Both are reinforcement.", rationale: "Both punishment types." },
    B: { text: "Both add stimuli.", rationale: "Ch 15 removes reinforcer." },
    C: { text: "Unrelated.", rationale: "Positive vs negative punishment pair." },
    D: { text: "Together cover punishment by addition versus removal of reinforcer.", rationale: "Sequential Cooper structure." },
  }),
  bx("mod35-q31", "Contingent electric shock decreasing rate (historical lab example):", "A", {
    A: { text: "Positive punishment when future rate decreases.", rationale: "Added stimulus suppresses." },
    B: { text: "Negative reinforcement.", rationale: "Rate decreased." },
    C: { text: "Positive reinforcement.", rationale: "Opposite effect." },
    D: { text: "Extinction.", rationale: "Stimulus added." },
  }),
  bx("mod35-q32", "Punishment trap related to positive punishment may involve:", "C", {
    A: { text: "Perfect behavior improvement always.", rationale: "Trap = unintended maintenance via escape/NR." },
    B: { text: "IOA only.", rationale: "Contingency misanalysis." },
    C: { text: "Attempted punishment increasing problem behavior via escape or other contingencies.", rationale: "Punishment trap concept." },
    D: { text: "CRF schedule.", rationale: "Contingency interaction." },
  }),
  bx("mod35-q33", "Functional verification for punishment requires:", "D", {
    A: { text: "One instance suppression.", rationale: "Durable decrease across conditions." },
    B: { text: "Clinician discomfort with behavior.", rationale: "Behavioral data." },
    C: { text: "Caregiver demand only.", rationale: "Objective measurement." },
    D: { text: "Documented decrease in future rate under similar MO/context.", rationale: "Functional standard." },
  }),
  bx("mod35-q34", "Added stimulus contingent on behavior; rate unchanged:", "B", {
    A: { text: "Positive punishment proved.", rationale: "No decrease." },
    B: { text: "Not functioning as positive punishment for that response.", rationale: "Effect defines function." },
    C: { text: "Negative reinforcement.", rationale: "NR increases rate." },
    D: { text: "Automatic NR.", rationale: "Rate unchanged." },
  }),
  bx("mod35-q35", "Treatment fidelity for punishment procedures:", "A", {
    A: { text: "Document that punisher delivered contingent on target as planned.", rationale: "Fidelity gates inference." },
    B: { text: "Optional.", rationale: "Required for accountability." },
    C: { text: "Replaces IOA.", rationale: "Both matter." },
    D: { text: "Only for reinforcement.", rationale: "All IV implementation." },
  }),
  bx("mod35-q36", "BCBA stem: spanking added; aggression decreases 3 weeks across settings:", "C", {
    A: { text: "Negative reinforcement.", rationale: "Added stimulus; rate down." },
    B: { text: "Extinction.", rationale: "Stimulus added." },
    C: { text: "Possible positive punishment IF ethically authorized and function verified—still prioritize alternatives.", rationale: "Technical classification plus ethics." },
    D: { text: "Negative punishment.", rationale: "Added aversive." },
  }),
  bx("mod35-q37", "Escape behavior increases when timeout used as punishment:", "D", {
    A: { text: "Proof punishment worked.", rationale: "May be punishment trap/NR escape." },
    B: { text: "Positive reinforcement.", rationale: "Reassess contingency." },
    C: { text: "Ignore.", rationale: "Side effect requires review." },
    D: { text: "Reassess—timeout may function as escape from demands (NR) not punishment.", rationale: "Punishment trap logic." },
  }),
  bx("mod35-q38", "Positive punishment and positive reinforcement both:", "B", {
    A: { text: "Decrease behavior.", rationale: "PP decreases; PR increases." },
    B: { text: "Involve adding a stimulus contingent on behavior—but opposite effects on future rate.", rationale: "Operation similarity, functional difference." },
    C: { text: "Remove stimuli.", rationale: "Both add in positive procedures." },
    D: { text: "Are unethical always.", rationale: "Context and ethics govern use." },
  }),
  bx("mod35-q39", "Overcorrection differs from simple reprimand because:", "A", {
    A: { text: "Overcorrection adds restitution/positive practice requirements beyond brief reprimand.", rationale: "Procedural distinction." },
    B: { text: "Reprimand always stronger.", rationale: "Overcorrection more elaborate." },
    C: { text: "Overcorrection is reinforcement.", rationale: "Punishment variant." },
    D: { text: "Identical.", rationale: "Different topographies." },
  }),
  bx("mod35-q40", "Exam: behavior stops during punisher delivery then returns—BEST label:", "C", {
    A: { text: "Verified positive punishment.", rationale: "No durable decrease." },
    B: { text: "Negative reinforcement.", rationale: "Temporary suppression." },
    C: { text: "Temporary suppression—insufficient for punishment classification.", rationale: "Cooper standard." },
    D: { text: "Extinction burst.", rationale: "Wrong context." },
  }),
  bx("mod35-q41", "Least restrictive alternative (LRA) means:", "D", {
    A: { text: "Use punishment first for speed.", rationale: "Reinforcement/antecedent first." },
    B: { text: "Avoid all data.", rationale: "Evidence-based selection." },
    C: { text: "Skip functional assessment.", rationale: "FA informs LRA." },
    D: { text: "Select effective intervention that minimizes restriction/punishment when options exist.", rationale: "Ethics definition." },
  }),
  bx("mod35-q42", "Chapter 14 scope versus Chapter 11:", "B", {
    A: { text: "Chapter 14 defines reinforcement.", rationale: "Ch 11 PR; Ch 14 PP." },
    B: { text: "Chapter 11 adds SR increasing behavior; Chapter 14 adds stimulus decreasing behavior.", rationale: "Scope discrimination." },
    C: { text: "Identical.", rationale: "Opposite effects." },
    D: { text: "Chapter 14 removes reinforcers.", rationale: "Ch 15 negative punishment." },
  }),
  bx("mod35-q43", "Aggression toward implementer after contingent exercise program:", "A", {
    A: { text: "Side effect documented; reassess and consider reinforcement-based alternatives.", rationale: "Ethical response." },
    B: { text: "Ignore and intensify exercise.", rationale: "Ethical violation." },
    C: { text: "Proof exercise is reinforcement.", rationale: "Aggression may be escape/retaliatory." },
    D: { text: "Delete data.", rationale: "Report side effects." },
  }),
  bx("mod35-q44", "Three-term contingency for positive punishment:", "C", {
    A: { text: "SD → R → SR.", rationale: "Punisher (SP) not reinforcer." },
    B: { text: "US → UR → CS.", rationale: "Respondent." },
    C: { text: "SD → R → SP (punishing stimulus presented contingent on response).", rationale: "Operant punishment unit." },
    D: { text: "R → removal of SR only.", rationale: "Negative punishment/extinction." },
  }),
  bx("mod35-q45", "Calling reprimand punishment when blurting increases:", "D", {
    A: { text: "Correct.", rationale: "Rate increased—possibly reinforcement." },
    B: { text: "Negative punishment.", rationale: "Added stimulus." },
    C: { text: "Extinction.", rationale: "Effect wrong." },
    D: { text: "Misclassification—reprimand may function as positive reinforcement.", rationale: "Chapter 11 crossover." },
  }),
  bx("mod35-q46", "Positive punishment requires contingency:", "B", {
    A: { text: "Stimulus delivered regardless of behavior.", rationale: "Contingent on response." },
    B: { text: "Stimulus presentation depends on the response occurring.", rationale: "Contingency core." },
    C: { text: "Random delivery.", rationale: "Contingent required." },
    D: { text: "Before response only.", rationale: "Consequence follows response." },
  }),
  bx("mod35-q47", "Board item: added stimulus, rate down, removed event was NOT reinforcer:", "A", {
    A: { text: "Positive punishment—not negative punishment.", rationale: "Added vs removed discrimination." },
    B: { text: "Negative punishment.", rationale: "Nothing removed." },
    C: { text: "Negative reinforcement.", rationale: "Rate down." },
    D: { text: "Extinction.", rationale: "Stimulus added." },
  }),
  bx("mod35-q48", "Monitoring alternative behaviors during punishment:", "C", {
    A: { text: "Unnecessary.", rationale: "Ensure replacements grow while target falls." },
    B: { text: "Replaces baseline.", rationale: "Both tracked." },
    C: { text: "Ensures comprehensive BIP—target decrease plus replacement increase.", rationale: "Best practice." },
    D: { text: "Only for reinforcement plans.", rationale: "Punishment plans too." },
  }),
  bx("mod35-q49", "BCBA stem: contingent loud reprimand; hitting rate drops two weeks similar settings:", "D", {
    A: { text: "Negative reinforcement.", rationale: "Added stimulus; decreased rate." },
    B: { text: "Extinction.", rationale: "Presentation contingent." },
    C: { text: "Negative punishment.", rationale: "Added not removed." },
    D: { text: "Positive punishment via socially mediated reprimand.", rationale: "Classic Cooper vignette." },
  }),
  bx("mod35-q50", "Closing Chapter 14 principle:", "B", {
    A: { text: "Use punishment before reinforcement for efficiency.", rationale: "LRA favors reinforcement first." },
    B: { text: "Classify by added stimulus and verified future rate decrease; use ethically with alternatives and side-effect monitoring.", rationale: "Chapter 14 integration." },
    C: { text: "Immediate suppression equals punishment.", rationale: "Durable decrease required." },
    D: { text: "Aversive equals punishment always.", rationale: "Functional analysis required." },
  }),
];
