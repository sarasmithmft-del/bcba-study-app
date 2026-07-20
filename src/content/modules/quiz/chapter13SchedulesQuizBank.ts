import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 13 — Schedules of Reinforcement. */

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

export const CHAPTER_13_SCHEDULES_QUIZ_BANK: BDSQuestion[] = [
  bx("mod34-q1", "Cooper Chapter 13 schedules of reinforcement arrange:", "B", {
    A: { text: "When punishment occurs only.", rationale: "Schedules arrange reinforcement delivery." },
    B: { text: "When and under what conditions reinforcement follows responding.", rationale: "Core schedule definition." },
    C: { text: "Respondent elicitation only.", rationale: "Operant schedule context." },
    D: { text: "Group statistics exclusively.", rationale: "Single-subject schedule logic." },
  }),
  bx("mod34-q4", "Continuous reinforcement (CRF):", "A", {
    A: { text: "Reinforces every occurrence of the response.", rationale: "CRF definition." },
    B: { text: "Never used in teaching.", rationale: "Common during acquisition." },
    C: { text: "Same as variable ratio.", rationale: "CRF is every response." },
    D: { text: "Eliminates responding.", rationale: "CRF maintains/acquires behavior." },
  }),
  bx("mod34-q5", "Fixed ratio (FR) schedule:", "C", {
    A: { text: "Reinforces first response after fixed time.", rationale: "Interval schedule." },
    B: { text: "Produces scalloping near interval end.", rationale: "FR produces post-reinforcement pause." },
    C: { text: "Reinforces after a fixed number of responses—post-reinforcement pause scales with ratio size.", rationale: "FR definition and pattern." },
    D: { text: "Never produces pauses.", rationale: "FR characteristic pause after reinforcement." },
  }),
  bx("mod34-q6", "Variable ratio (VR) schedule:", "D", {
    A: { text: "Reinforces on fixed time intervals.", rationale: "VR is response-based." },
    B: { text: "Produces long post-reinforcement pauses like large FR.", rationale: "VR minimal pausing." },
    C: { text: "Low resistance to extinction.", rationale: "VR high resistance." },
    D: { text: "Reinforces after varying number of responses averaging a criterion—high steady rate, strong resistance to extinction.", rationale: "VR definition and pattern." },
  }),
  bx("mod34-q7", "Fixed interval (FI) schedule:", "B", {
    A: { text: "Reinforces every third response.", rationale: "Ratio schedule." },
    B: { text: "First response after fixed time produces reinforcement—scalloped pattern accelerating near interval end.", rationale: "FI definition and scallop." },
    C: { text: "Identical pattern to FR.", rationale: "FI time-based scallop vs FR pause." },
    D: { text: "Eliminates all responding.", rationale: "FI maintains responding." },
  }),
  bx("mod34-q8", "Variable interval (VI) schedule:", "A", {
    A: { text: "First response after variable time periods averaging a criterion—moderate steady responding.", rationale: "VI definition and pattern." },
    B: { text: "Scallops sharply like FI always.", rationale: "VI more moderate/steady." },
    C: { text: "Same as VR.", rationale: "Time vs response dimension." },
    D: { text: "CRF only.", rationale: "Intermittent interval schedule." },
  }),
  bx("mod34-q9", "Post-reinforcement pause after FR reinforcement:", "C", {
    A: { text: "Proves punishment occurred.", rationale: "Characteristic FR pattern—not punishment." },
    B: { text: "Indicates extinction.", rationale: "Pause followed by resumed responding." },
    C: { text: "Typical FR pattern; pause length related to ratio size.", rationale: "Cooper FR signature." },
    D: { text: "IOA error only.", rationale: "Schedule-controlled pattern." },
  }),
  bx("mod34-q10", "Slot-machine-like steady high responding with minimal pausing suggests:", "D", {
    A: { text: "Fixed interval 1.", rationale: "FI scallops." },
    B: { text: "Extinction.", rationale: "High rate suggests reinforcement." },
    C: { text: "CRF only.", rationale: "VR slot-machine pattern." },
    D: { text: "Variable ratio schedule.", rationale: "VR classic applied analogy." },
  }),
  bx("mod34-q11", "Scalloped responding increasing near end of timed period indicates:", "A", {
    A: { text: "Fixed interval (or FI-like) schedule control.", rationale: "FI scallop signature." },
    B: { text: "Variable ratio.", rationale: "VR lacks interval scallop." },
    C: { text: "Fixed ratio 1 only.", rationale: "FR post-reinforcement pause pattern." },
    D: { text: "Positive punishment.", rationale: "Schedule pattern." },
  }),
  bx("mod34-q12", "Ratio versus interval schedules—key dimension:", "B", {
    A: { text: "Both based on time only.", rationale: "Ratio = responses; interval = time." },
    B: { text: "Ratio based on number of responses; interval based on time.", rationale: "Core discrimination." },
    C: { text: "Identical dimensions.", rationale: "Different requirements." },
    D: { text: "Ratio always produces scallops.", rationale: "Interval scallops; ratio pauses." },
  }),
  bx("mod34-q13", "Intermittent reinforcement typically produces:", "C", {
    A: { text: "Lower resistance to extinction than CRF.", rationale: "Intermittent increases resistance." },
    B: { text: "Immediate elimination on extinction.", rationale: "Opposite of partial reinforcement effect." },
    C: { text: "Greater resistance to extinction than continuous reinforcement.", rationale: "Partial reinforcement effect." },
    D: { text: "No graph patterns.", rationale: "Distinctive patterns per schedule." },
  }),
  bx("mod34-q14", "Concurrent schedules:", "D", {
    A: { text: "Only one contingency available.", rationale: "Concurrent = simultaneous alternatives." },
    B: { text: "Respondent design only.", rationale: "Operant choice." },
    C: { text: "Eliminates choice.", rationale: "Choice is defining feature." },
    D: { text: "Two or more reinforcement contingencies available simultaneously.", rationale: "Concurrent definition." },
  }),
  bx("mod34-q15", "Matching law under concurrent schedules:", "A", {
    A: { text: "Relative rate of responding often matches relative rate of reinforcement.", rationale: "Matching law definition." },
    B: { text: "Responses always equal reinforcement rates exactly.", rationale: "Approximate matching." },
    C: { text: "Applies only to punishment.", rationale: "Concurrent reinforcement choice." },
    D: { text: "Eliminates MO effects.", rationale: "MO still relevant." },
  }),
  bx("mod34-q16", "Schedule thinning:", "B", {
    A: { text: "Abrupt removal of all reinforcement without data.", rationale: "Systematic shift to leaner schedules." },
    B: { text: "Systematic transition to leaner schedules while monitoring performance.", rationale: "Thinning definition." },
    C: { text: "Same as extinction always.", rationale: "Thinning maintains some reinforcement." },
    D: { text: "Graph decoration only.", rationale: "Clinical programming tactic." },
  }),
  bx("mod34-q17", "Moving from CRF to FR2 without noting pauses risks:", "D", {
    A: { text: "Perfect interpretation always.", rationale: "Pauses may be misread as noncompliance." },
    B: { text: "IOA inflation.", rationale: "Schedule confound." },
    C: { text: "Automatic punishment proof.", rationale: "Post-reinforcement pause is FR pattern." },
    D: { text: "Misinterpreting post-reinforcement pauses as noncompliance or punishment effects.", rationale: "Common clinical error." },
  }),
  bx("mod34-q18", "Every third correct response earns token (FR 3); brief pause then steady work:", "C", {
    A: { text: "FI 3 minutes.", rationale: "Every third response = ratio." },
    B: { text: "VI schedule.", rationale: "Fixed response requirement." },
    C: { text: "FR 3 with post-reinforcement pause.", rationale: "Classic FR vignette." },
    D: { text: "Extinction.", rationale: "Reinforcement delivered." },
  }),
  bx("mod34-q19", "Extinction burst after shift from CRF to extinction:", "A", {
    A: { text: "Temporary increase in responding early in extinction—common after dense reinforcement history.", rationale: "Extinction burst phenomenon." },
    B: { text: "Proof reinforcement increased.", rationale: "Extinction phase." },
    C: { text: "IOA only issue.", rationale: "Schedule transition effect." },
    D: { text: "VR schedule.", rationale: "Extinction context." },
  }),
  bx("mod34-q20", "VR versus FR—pattern difference:", "B", {
    A: { text: "VR produces longer post-reinforcement pauses than large FR.", rationale: "VR minimal pausing vs FR." },
    B: { text: "VR sustains high rate with minimal pausing; FR shows post-reinforcement pause scaling with ratio.", rationale: "Key pattern discrimination." },
    C: { text: "Identical patterns.", rationale: "Different pause profiles." },
    D: { text: "VR always scallops.", rationale: "FI scallops." },
  }),
  bx("mod34-q21", "High-Yield: FR pause is NOT:", "D", {
    A: { text: "Schedule-controlled.", rationale: "It is schedule-controlled." },
    B: { text: "Related to ratio size.", rationale: "True of FR." },
    C: { text: "Visible on graphs.", rationale: "Observable pattern." },
    D: { text: "Evidence of positive punishment unless rate decreases.", rationale: "Pause with resumed responding = FR." },
  }),
  bx("mod34-q22", "Problem behavior maintained on unpredictable attention after many responses:", "A", {
    A: { text: "Possible VR-like intermittent reinforcement—high persistence.", rationale: "VR maintenance analogy." },
    B: { text: "CRF only.", rationale: "Unpredictable = variable." },
    C: { text: "FI only always.", rationale: "Response-based vs time-based check needed." },
    D: { text: "Extinction.", rationale: "Behavior maintained." },
  }),
  bx("mod34-q23", "First response after 2 minutes earns reinforcement every 2 minutes:", "C", {
    A: { text: "FR 2.", rationale: "Time-based = interval." },
    B: { text: "VR 2.", rationale: "Fixed time = FI." },
    C: { text: "FI 2.", rationale: "Fixed interval schedule." },
    D: { text: "CRF.", rationale: "Intermittent time schedule." },
  }),
  bx("mod34-q24", "Reinforcement available on average every 30 seconds unpredictably:", "B", {
    A: { text: "FI 30 seconds.", rationale: "Variable timing = VI." },
    B: { text: "VI with mean 30 seconds.", rationale: "Variable interval." },
    C: { text: "FR 30.", rationale: "Time not response count." },
    D: { text: "CRF.", rationale: "Intermittent." },
  }),
  bx("mod34-q25", "Chapter 13 versus Chapter 11:", "D", {
    A: { text: "Chapter 13 defines reinforcement; Chapter 11 defines schedules.", rationale: "Opposite." },
    B: { text: "Identical chapters.", rationale: "Ch 11 process; Ch 13 arrangement." },
    C: { text: "Chapter 13 eliminates reinforcement.", rationale: "Schedules arrange reinforcement." },
    D: { text: "Chapter 11 defines reinforcement processes; Chapter 13 arranges when reinforcement occurs.", rationale: "Sequential scope." },
  }),
  bx("mod34-q26", "Large FR ratio (e.g., FR 100) typically:", "A", {
    A: { text: "Produces longer post-reinforcement pause and high overall rate.", rationale: "Ratio size affects pause." },
    B: { text: "Eliminates all responding.", rationale: "High ratio still reinforces." },
    C: { text: "Scallops like FI.", rationale: "FR pause not scallop." },
    D: { text: "Same pause as FR 1.", rationale: "Larger ratio longer pause." },
  }),
  bx("mod34-q27", "Two reinforcers available; learner allocates more responses to richer alternative:", "C", {
    A: { text: "Simple schedule only.", rationale: "Concurrent choice." },
    B: { text: "Respondent conditioning.", rationale: "Matching/choice." },
    C: { text: "Concurrent schedule with matching tendency.", rationale: "Choice behavior." },
    D: { text: "Extinction.", rationale: "Reinforcement available." },
  }),
  bx("mod34-q28", "Translating vignette to schedule notation FIRST requires:", "B", {
    A: { text: "Ignoring time and response requirements.", rationale: "Both dimensions matter." },
    B: { text: "Identifying whether requirement is response count or time and whether fixed or variable.", rationale: "Exam workflow." },
    C: { text: "Assuming FR always.", rationale: "Discriminate schedules." },
    D: { text: "Using punishment labels.", rationale: "Reinforcement schedules." },
  }),
  bx("mod34-q29", "CRF during initial acquisition then thinning to FR:", "D", {
    A: { text: "Never recommended.", rationale: "Standard teaching sequence." },
    B: { text: "Same as extinction.", rationale: "Thinning maintains reinforcement." },
    C: { text: "Eliminates MO monitoring.", rationale: "MO still matters when thinning." },
    D: { text: "Common pattern—establish behavior on CRF then lean schedule with data.", rationale: "Applied programming." },
  }),
  bx("mod34-q30", "VI schedule pattern versus FI:", "A", {
    A: { text: "VI more moderate/steady; FI scallops toward interval end.", rationale: "Pattern discrimination." },
    B: { text: "Identical scalloping.", rationale: "FI more scalloped." },
    C: { text: "VI always produces post-reinforcement pause like FR.", rationale: "FR pause pattern." },
    D: { text: "Neither produces measurable patterns.", rationale: "Both have signatures." },
  }),
  bx("mod34-q31", "Resistance to extinction highest among common schedules often cited for:", "C", {
    A: { text: "CRF.", rationale: "CRF lowest resistance." },
    B: { text: "FI only always lowest.", rationale: "VR typically high." },
    C: { text: "VR (variable ratio).", rationale: "VR resistance classic finding." },
    D: { text: "Extinction schedule.", rationale: "Not reinforcement schedule." },
  }),
  bx("mod34-q32", "Fixed versus variable schedules:", "B", {
    A: { text: "Fixed means random delivery.", rationale: "Fixed = predictable requirement." },
    B: { text: "Fixed = predictable requirement; variable = requirement varies around average.", rationale: "Fixed/variable discrimination." },
    C: { text: "Variable means every response.", rationale: "CRF is every response." },
    D: { text: "No practical difference.", rationale: "Different patterns." },
  }),
  bx("mod34-q33", "Domain F Chapter 13 items test:", "D", {
    A: { text: "MO definition only.", rationale: "Schedule translation and prediction." },
    B: { text: "Verbal operants only.", rationale: "Schedule chapter." },
    C: { text: "Ethics code only.", rationale: "Conceptual analysis." },
    D: { text: "Schedule notation, pattern prediction, and thinning logic from vignettes.", rationale: "Domain F schedule skills." },
  }),
  bx("mod34-q34", "Calling VR high rate motivation instead of schedule control:", "A", {
    A: { text: "High-yield confusion—pattern reflects reinforcement schedule not personality.", rationale: "Exam trap." },
    B: { text: "Correct interpretation.", rationale: "Schedule language preferred." },
    C: { text: "IOA issue.", rationale: "Conceptual error." },
    D: { text: "Punishment effect.", rationale: "Reinforcement schedule." },
  }),
  bx("mod34-q35", "Partial reinforcement schedule:", "C", {
    A: { text: "Reinforces every response.", rationale: "CRF is continuous." },
    B: { text: "Never used in applied work.", rationale: "Most applied schedules intermittent." },
    C: { text: "Reinforces some but not all responses—intermittent schedule.", rationale: "Partial/intermittent definition." },
    D: { text: "Same as punishment.", rationale: "Still reinforcement." },
  }),
  bx("mod34-q36", "Token economy on FR 5 then shifted to FR 10—expect:", "B", {
    A: { text: "Shorter post-reinforcement pauses.", rationale: "Larger ratio longer pause typically." },
    B: { text: "Longer post-reinforcement pauses and need to monitor MO/reinforcer value.", rationale: "Thinning to leaner FR." },
    C: { text: "Automatic extinction.", rationale: "Still reinforced on FR." },
    D: { text: "FI scalloping.", rationale: "Still ratio schedule." },
  }),
  bx("mod34-q37", "Exam stem: responding low early in interval then surges before timer—schedule:", "D", {
    A: { text: "FR 10.", rationale: "Surge near time cue = interval." },
    B: { text: "VR.", rationale: "Scallop pattern." },
    C: { text: "CRF.", rationale: "Intermittent time." },
    D: { text: "FI or FI-like interval schedule.", rationale: "Scallop signature." },
  }),
  bx("mod34-q38", "Schedule effects Cooper emphasizes are:", "A", {
    A: { text: "Measurable response patterns on graphs—not folk motivation labels.", rationale: "Behavior analytic emphasis." },
    B: { text: "Personality traits only.", rationale: "Schedule-controlled operant behavior." },
    C: { text: "Unmeasurable.", rationale: "Graph patterns documented." },
    D: { text: "Respondent reflexes only.", rationale: "Operant schedules." },
  }),
  bx("mod34-q39", "Concurrent choice when one alternative provides richer reinforcement:", "A", {
    A: { text: "Matching law predicts relative response allocation toward richer alternative.", rationale: "Concurrent schedule choice." },
    B: { text: "Learner must respond equally always.", rationale: "Matching describes typical allocation." },
    C: { text: "Extinction of both alternatives.", rationale: "Reinforcement still available." },
    D: { text: "Schedules become irrelevant.", rationale: "Concurrent schedules central." },
  }),
  bx("mod34-q40", "Simple versus complex schedules:", "B", {
    A: { text: "Identical concepts.", rationale: "Complex combine simple schedules." },
    B: { text: "Complex schedules combine simple schedule elements (e.g., multiple, concurrent, chained).", rationale: "Cooper hierarchy." },
    C: { text: "Simple schedules never used applied.", rationale: "FR, VR, FI, VI are simple." },
    D: { text: "Complex means punishment only.", rationale: "Reinforcement arrangements." },
  }),
  bx("mod34-q41", "Misreading FR post-reinforcement pause as noncompliance causes:", "D", {
    A: { text: "Better treatment decisions.", rationale: "Misinterpretation harms plans." },
    B: { text: "IOA increase.", rationale: "Conceptual error." },
    C: { text: "Proof of punishment.", rationale: "Schedule pattern." },
    D: { text: "Unnecessary punitive escalation when pause is schedule-controlled.", rationale: "Clinical consequence." },
  }),
  bx("mod34-q42", "VR 10 means:", "C", {
    A: { text: "Reinforcement every 10 seconds.", rationale: "VR is response-based." },
    B: { text: "Exactly 10 responses every time.", rationale: "Variable around average." },
    C: { text: "Reinforcement after varying number of responses averaging 10.", rationale: "VR notation." },
    D: { text: "Fixed interval 10.", rationale: "Ratio not interval." },
  }),
  bx("mod34-q43", "When thinning schedules, analysts should:", "A", {
    A: { text: "Monitor performance, MO, and graph patterns; adjust gradually with fidelity data.", rationale: "Ethical thinning practice." },
    B: { text: "Jump to extinction immediately.", rationale: "Thinning maintains some contact." },
    C: { text: "Ignore post-reinforcement pauses.", rationale: "Pauses inform interpretation." },
    D: { text: "Stop measuring.", rationale: "Data required." },
  }),
  bx("mod34-q44", "FI scallop differs from FR pause because:", "B", {
    A: { text: "Identical patterns.", rationale: "FI accelerates toward interval; FR pauses after reinforcement." },
    B: { text: "FI shows accelerating responding toward interval end; FR pauses after reinforcement delivery.", rationale: "Pattern discrimination." },
    C: { text: "FR scallops; FI pauses.", rationale: "Reversed." },
    D: { text: "Neither visible on graphs.", rationale: "Both graphically visible." },
  }),
  bx("mod34-q45", "Exam trap: confusing ratio with interval:", "C", {
    A: { text: "Rare on BCBA exam.", rationale: "Common exam trap." },
    B: { text: "Irrelevant distinction.", rationale: "Fundamental schedule dimension." },
    C: { text: "High-yield—check whether requirement is response count or time.", rationale: "Resolution strategy." },
    D: { text: "Same as MO confusion.", rationale: "Schedule dimension." },
  }),
  bx("mod34-q46", "Behavior on VR maintains during extinction longer than CRF history because:", "D", {
    A: { text: "VR is punishment.", rationale: "VR is reinforcement schedule." },
    B: { text: "CRF increases resistance.", rationale: "CRF lower resistance." },
    C: { text: "Extinction not applicable.", rationale: "Partial reinforcement effect." },
    D: { text: "Partial/intermittent reinforcement history increases resistance to extinction.", rationale: "Classic finding." },
  }),
  bx("mod34-q47", "Reinforcement after unpredictable number of responses averaging 5:", "B", {
    A: { text: "FR 5.", rationale: "Unpredictable = variable." },
    B: { text: "VR 5.", rationale: "Variable ratio notation." },
    C: { text: "FI 5.", rationale: "Response-based." },
    D: { text: "CRF.", rationale: "Intermittent." },
  }),
  bx("mod34-q48", "Chapter 13 sets up punishment chapters by:", "A", {
    A: { text: "Clarifying reinforcement arrangements before consequence-suppression procedures.", rationale: "Sequential Cooper structure." },
    B: { text: "Replacing all reinforcement.", rationale: "Schedules arrange reinforcement." },
    C: { text: "Eliminating graphs.", rationale: "Graphs essential." },
    D: { text: "Removing MO concepts.", rationale: "MO affects thinning." },
  }),
  bx("mod34-q49", "BCBA stem: every 3rd token exchange brief pause then steady responding—MOST accurate:", "C", {
    A: { text: "FI 3 with scalloping.", rationale: "Every third response = ratio." },
    B: { text: "VI schedule.", rationale: "Fixed response count." },
    C: { text: "FR 3 with post-reinforcement pause.", rationale: "Classic FR vignette from Cooper." },
    D: { text: "Extinction burst.", rationale: "Reinforcement occurring." },
  }),
  bx("mod34-q50", "Closing Chapter 13 principle:", "D", {
    A: { text: "Schedules are personality types.", rationale: "Schedule-controlled operant behavior." },
    B: { text: "Only CRF matters clinically.", rationale: "Intermittent schedules ubiquitous." },
    C: { text: "Ignore graph patterns.", rationale: "Patterns are evidence." },
    D: { text: "Translate vignettes to schedule notation; predict pauses, scallops, and resistance; thin with data.", rationale: "Chapter 13 integration." },
  }),
];
