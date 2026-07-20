import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 18 — Verbal Behavior. */

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

export const CHAPTER_18_VB_QUIZ_BANK: BDSQuestion[] = [
  bx("mod19-q1", "Learner orients to therapist and says truncated 'juice now'; juice delivered after intermittent withholding before sessions—no picture tact SD—MOST precise operant:", "A", {
    A: { text: "Mand under evocative (EO) control specifying a reinforcer.", rationale: "EO-linked requesting for specific reinforcer = mand." },
    B: { text: "Tact because lexical items referenced beverages.", rationale: "Tact requires nonverbal SD control, not evocative requesting." },
    C: { text: "Echoic diagnosing vocal resonance.", rationale: "No point-to-point model correspondence emphasized." },
    D: { text: "Respondent elicitation only.", rationale: "Operant mand analysis." },
  }),
  bx("mod19-q4", "Cooper Chapter 18 defines verbal behavior as:", "C", {
    A: { text: "Any vocalization emitted by a human.", rationale: "Requires listener-mediated reinforcement." },
    B: { text: "Written language only.", rationale: "Includes vocal and other forms mediated by listeners." },
    C: { text: "Behavior reinforced through the mediation of other persons (listeners).", rationale: "Core verbal behavior definition." },
    D: { text: "Private speech only.", rationale: "Verbal behavior is operant behavior with social mediation." },
  }),
  bx("mod19-q5", "Verbal operants are classified by:", "B", {
    A: { text: "Word length and phonology alone.", rationale: "Function/controlling variables define operant class." },
    B: { text: "Controlling variables and consequences—not topography alone.", rationale: "Functional classification." },
    C: { text: "Speaker age.", rationale: "Contingency analysis." },
    D: { text: "Grammar rules exclusively.", rationale: "Behavior analytic functional units." },
  }),
  bx("mod19-q6", "Mand (Cooper/Skinner analysis):", "D", {
    A: { text: "Labeling environmental stimuli under nonverbal SD.", rationale: "Tact definition." },
    B: { text: "Verbal SD evokes complementary verbal response.", rationale: "Intraverbal." },
    C: { text: "Point-to-point correspondence with verbal model.", rationale: "Echoic." },
    D: { text: "Verbal behavior under evocative (MO/EO) control specifying a reinforcer.", rationale: "Mand definition." },
  }),
  bx("mod19-q7", "Tact:", "A", {
    A: { text: "Verbal behavior under control of nonverbal discriminative stimuli; maintained by generalized reinforcement.", rationale: "Tact definition." },
    B: { text: "Requesting under EO control.", rationale: "Mand." },
    C: { text: "Imitation of verbal model.", rationale: "Echoic." },
    D: { text: "Reading written text.", rationale: "Textual (related but distinct)." },
  }),
  bx("mod19-q8", "Intraverbal:", "C", {
    A: { text: "Naming visible object in photo.", rationale: "Tact when nonverbal SD present." },
    B: { text: "Echoing therapist model.", rationale: "Echoic." },
    C: { text: "Verbal discriminative stimulus evokes verbal response without point-to-point correspondence with nonverbal referent.", rationale: "Intraverbal definition." },
    D: { text: "Mand during deprivation only.", rationale: "Verbal-to-verbal control." },
  }),
  bx("mod19-q9", "Echoic:", "B", {
    A: { text: "Fill-in song lyric after verbal SD.", rationale: "Intraverbal when completion not point-to-point imitation." },
    B: { text: "Verbal behavior under point-to-point correspondence with a verbal model; reinforced by listener.", rationale: "Echoic definition." },
    C: { text: "Tact of environmental event.", rationale: "Echoic requires verbal model." },
    D: { text: "Mand specifying reinforcer.", rationale: "Formal similarity to model." },
  }),
  bx("mod19-q10", "Teacher: 'What is it?' Learner: 'Ladybug!' while viewing photo—not requesting task removal:", "D", {
    A: { text: "Mand because question was asked.", rationale: "Nonverbal SD (photo) controls naming." },
    B: { text: "Echoic because teacher spoke.", rationale: "Response names stimulus, not imitates model." },
    C: { text: "Intraverbal exclusively.", rationale: "Tact when labeling nonverbal stimulus." },
    D: { text: "Tact under nonverbal discriminative stimulus control.", rationale: "Classic tact vignette." },
  }),
  bx("mod19-q11", "Clinician: 'Cow says…?' Learner: 'Moo' without visible animal:", "A", {
    A: { text: "Intraverbal—verbal SD evokes complementary verbal response.", rationale: "Verbal-to-verbal control." },
    B: { text: "Tact because animal named.", rationale: "No nonverbal referent contacted." },
    C: { text: "Mand because clinician spoke.", rationale: "Intraverbal fill-in." },
    D: { text: "Echoic only.", rationale: "Completion not full imitation of model." },
  }),
  bx("mod19-q12", "Therapist says 'bubble'; learner approximates 'buh-buh' before praise:", "C", {
    A: { text: "Mand because sound emitted.", rationale: "Resemblance to model." },
    B: { text: "Tact automatically.", rationale: "Echoic shaping drill." },
    C: { text: "Echoic under imitation/point-to-point correspondence control.", rationale: "Classic echoic vignette." },
    D: { text: "Intraverbal exclusively.", rationale: "Model-resemblance reinforcement." },
  }),
  bx("mod19-q13", "Learner says 'Snack' toward vending area after withheld preferred snacks with logged deprivation:", "B", {
    A: { text: "Tact solely because word occurred.", rationale: "EO-supported requesting." },
    B: { text: "Mand under evocative control specifying snack reinforcer.", rationale: "Mand with MO documentation." },
    C: { text: "Respondent only.", rationale: "Operant mand." },
    D: { text: "Automatic punishment.", rationale: "Requesting topography." },
  }),
  bx("mod19-q14", "Same spoken form can function as different verbal operants because:", "D", {
    A: { text: "Topography always determines function.", rationale: "Controlling variables differ." },
    B: { text: "Only mands can be spoken.", rationale: "All operants can share form." },
    C: { text: "Listeners irrelevant.", rationale: "Listener mediation defines verbal behavior." },
    D: { text: "Controlling variables (EO, nonverbal SD, verbal SD, model) differ across contexts.", rationale: "High-yield VB principle." },
  }),
  bx("mod19-q15", "Mand sessions without EO/MO documentation:", "A", {
    A: { text: "Weak mand attribution—evocative context must be logged.", rationale: "Domain C MO columns for mands." },
    B: { text: "Ideal VB measurement.", rationale: "EO context required." },
    C: { text: "Proof tact training succeeded.", rationale: "Documentation gap." },
    D: { text: "IOA substitute.", rationale: "Evocative evidence needed." },
  }),
  bx("mod19-q16", "Photo cards plus snack deprivation during mand session; graphs omit EO column:", "C", {
    A: { text: "Minor formatting issue.", rationale: "Evocative context missing." },
    B: { text: "Proof intraverbals abolished SD.", rationale: "Mand documentation lapse." },
    C: { text: "Documentation gap—mand claims not adequately corroborated without evocative context.", rationale: "Correct move—Documentation gap—mand claims not adequately corroborated without evocative context." },
    D: { text: "Respondent diagnosis only.", rationale: "Operant mand programming." },
  }),
  bx("mod19-q17", "Exam trap: labeling by word form alone:", "B", {
    A: { text: "Best practice.", rationale: "Functional classification required." },
    B: { text: "High-yield error—classify by controlling variables.", rationale: "Core Ch 18 confusion point." },
    C: { text: "IOA issue only.", rationale: "Conceptual error." },
    D: { text: "Applies only to echoics.", rationale: "All verbal operants." },
  }),
  bx("mod19-q18", "Hybrid vignette: hungry learner plus picture on table says 'cookie':", "D", {
    A: { text: "Label mand instantly.", rationale: "Decompose evocative + SD control." },
    B: { text: "Label tact instantly.", rationale: "Both variables may be active." },
    C: { text: "Ignore MO.", rationale: "Component analysis required." },
    D: { text: "Decompose evocative components, discriminative stimuli, and reinforcer history before classifying.", rationale: "Mixed control protocol." },
  }),
  bx("mod19-q19", "Textual (reading) in Cooper's verbal behavior analysis:", "A", {
    A: { text: "Verbal behavior under control of written verbal stimuli (point-to-point with text).", rationale: "Textual operant." },
    B: { text: "Identical to mand.", rationale: "Written SD control." },
    C: { text: "Respondent behavior only.", rationale: "Operant textual." },
    D: { text: "Nonverbal SD tact.", rationale: "Verbal SD form." },
  }),
  bx("mod19-q20", "Transcription (writing/speaking from dictation):", "C", {
    A: { text: "Echoic when writing.", rationale: "Transcription = written response to verbal model." },
    B: { text: "Mand only.", rationale: "Transcription operant." },
    C: { text: "Verbal behavior with point-to-point correspondence between verbal stimulus and written/spoken product.", rationale: "Transcription definition." },
    D: { text: "Intraverbal only.", rationale: "Correspondence with model." },
  }),
  bx("mod19-q21", "Generalized reinforcement for tacts means:", "B", {
    A: { text: "Same specific reinforcer every tact.", rationale: "Social/generalized consequences maintain tacts." },
    B: { text: "Reinforcement not tied to one specific reinforcer—social attention, praise, etc.", rationale: "Generalized reinforcer for tact." },
    C: { text: "No reinforcement for tacts.", rationale: "Tacts contact generalized reinforcement." },
    D: { text: "MO not relevant to tacts.", rationale: "MO can alter value; tact controlled by nonverbal SD." },
  }),
  bx("mod19-q22", "Listener-mediated reinforcement means:", "D", {
    A: { text: "Automatic sensory reinforcement only.", rationale: "Another person mediates consequences." },
    B: { text: "No social component.", rationale: "Listener is essential to verbal behavior." },
    C: { text: "Respondent conditioning only.", rationale: "Operant verbal behavior." },
    D: { text: "Another person's behavior (listener) produces reinforcement for the speaker.", rationale: "Defining feature of verbal behavior." },
  }),
  bx("mod19-q23", "Fill-in song lyric after verbal SD without visible referent:", "A", {
    A: { text: "Intraverbal.", rationale: "Verbal SD → verbal completion." },
    B: { text: "Tact exclusively.", rationale: "No nonverbal referent required for intraverbal." },
    C: { text: "Mand.", rationale: "Verbal chain control." },
    D: { text: "Echoic exclusively.", rationale: "Completion may not imitate full model." },
  }),
  bx("mod19-q24", "Dashboard hides EO spreadsheets while claiming organic mand growth:", "C", {
    A: { text: "Normal reporting.", rationale: "Transparency breach." },
    B: { text: "Proof MO irrelevant.", rationale: "Mand claims need evocative evidence." },
    C: { text: "Reporting transparency breach—mand claims without evocative-context evidence.", rationale: "Ethical/documentation issue." },
    D: { text: "IOA calculation error.", rationale: "VB reporting integrity." },
  }),
  bx("mod19-q25", "Data sheet tags Mand/Tact/IVB/ECHO with evocative column during mand blocks:", "B", {
    A: { text: "Optional decoration.", rationale: "Operant-coded logs support review." },
    B: { text: "Operant-coded logs supporting transparent classification.", rationale: "Best practice VB measurement." },
    C: { text: "Proof IOA prohibits VB.", rationale: "VB requires coded trials." },
    D: { text: "Replaces reinforcement.", rationale: "Documentation complement." },
  }),
  bx("mod19-q26", "Ethical VB programming prioritizes:", "D", {
    A: { text: "Punitive error rituals suppressing approximations.", rationale: "Reinforcement-rich shaping." },
    B: { text: "Withholding reinforcement until adult dictation matched.", rationale: "Approximation shaping." },
    C: { text: "Marketing mastery without IOA.", rationale: "Transparent documentation." },
    D: { text: "Reinforcement-rich shaping with transparent evocative and consequence documentation.", rationale: "Cooper ethical emphasis." },
  }),
  bx("mod19-q27", "Misclassifying tact as mand when picture and EO overlap:", "A", {
    A: { text: "High-yield Chapter 18 error—decompose controlling variables.", rationale: "Hybrid vignette trap." },
    B: { text: "Correct always.", rationale: "Functional analysis required." },
    C: { text: "IOA only.", rationale: "Classification error." },
    D: { text: "Applies only to echoics.", rationale: "Mand/tact confusion common." },
  }),
  bx("mod19-q28", "Treating echoic as mand because imitation occurred:", "C", {
    A: { text: "Correct integration.", rationale: "Echoic ≠ mand without EO control." },
    B: { text: "Best practice.", rationale: "Classify by controlling variable." },
    C: { text: "High-yield error—echoic under model correspondence; mand under EO.", rationale: "Exam trap." },
    D: { text: "Applies only to intraverbals.", rationale: "Echoic/mand confusion." },
  }),
  bx("mod19-q29", "Domain F Chapter 18 items often test:", "B", {
    A: { text: "Schedule notation only.", rationale: "Verbal operant classification." },
    B: { text: "Mand/tact/intraverbal/echoic discrimination by controlling variables.", rationale: "Domain F VB analysis." },
    C: { text: "Graph axes only.", rationale: "Functional classification." },
    D: { text: "UMO phylogeny only.", rationale: "VB focus." },
  }),
  bx("mod19-q30", "Chapter 18 builds on Chapter 17 because:", "D", {
    A: { text: "VB replaces stimulus control.", rationale: "VB uses SD/MO framework." },
    B: { text: "Unrelated chapters.", rationale: "SD and MO apply to verbal operants." },
    C: { text: "Chapter 17 covers mands.", rationale: "Ch 17 = SD; Ch 18 = VB." },
    D: { text: "Verbal operants are analyzed using stimulus control and MO variables.", rationale: "Sequential Cooper chapters." },
  }),
  bx("mod19-q31", "Autoclitic (brief Cooper/Skinner reference):", "A", {
    A: { text: "Verbal behavior that modifies the effect of other verbal behavior on the listener.", rationale: "Autoclitic function." },
    B: { text: "Identical to mand.", rationale: "Secondary verbal operant class." },
    C: { text: "Nonverbal SD only.", rationale: "Verbal modifier." },
    D: { text: "Extinction process.", rationale: "Verbal behavior subclass." },
  }),
  bx("mod19-q32", "Pure mand versus impure mand distinction relates to:", "C", {
    A: { text: "Schedule thinning.", rationale: "Whether response specifies reinforcer under EO." },
    B: { text: "Graph color.", rationale: "Functional purity of mand control." },
    C: { text: "Degree to which evocative control and specified reinforcer contact dominate the response.", rationale: "Mand analysis nuance." },
    D: { text: "IOA only.", rationale: "Controlling variable analysis." },
  }),
  bx("mod19-q33", "Speaker versus listener repertoires:", "B", {
    A: { text: "Identical—no distinction in VB analysis.", rationale: "Listener behavior also analyzed." },
    B: { text: "Speaker operants (mand/tact/etc.) differ from listener understanding—both part of verbal behavior field.", rationale: "VB includes both repertoires." },
    C: { text: "Only speaker behavior counts.", rationale: "Listener mediation essential." },
    D: { text: "Respondent only.", rationale: "Operant analysis." },
  }),
  bx("mod19-q34", "IOA on verbal operant coding supports:", "D", {
    A: { text: "Optional decoration.", rationale: "Reliability on operant classification." },
    B: { text: "Replacement for MO logs.", rationale: "Complements documentation." },
    C: { text: "Proof echoics are mands.", rationale: "Observer agreement on codes." },
    D: { text: "Reliable mand/tact/intraverbal/echoic classification across observers.", rationale: "Domain C standard." },
  }),
  bx("mod19-q35", "Prompt fading in echoic programs:", "A", {
    A: { text: "Transfer from model-dependent to independent verbal control for target operants.", rationale: "Echoic as scaffold." },
    B: { text: "Permanent echoic only.", rationale: "Fade toward tact/mand etc." },
    C: { text: "Eliminate all reinforcement.", rationale: "Fade prompts/models systematically." },
    D: { text: "MO manipulation only.", rationale: "Prompt/model fading." },
  }),
  bx("mod19-q36", "Claiming mand milestones while hiding evocative appendices:", "C", {
    A: { text: "Best practice.", rationale: "Ethics breach." },
    B: { text: "IOA substitute.", rationale: "Transparent mand reporting." },
    C: { text: "Truthful mand reporting and reproducible evocative evidence both compromised.", rationale: "Domain E + C." },
    D: { text: "Proof tacts obsolete.", rationale: "Mand documentation issue." },
  }),
  bx("mod19-q37", "Best remediation when evocative logs deleted but mand gains claimed:", "B", {
    A: { text: "Ship hero dashboards without appendices.", rationale: "Restore evidence." },
    B: { text: "Restore evocative logs, recap mand contingencies, caveat marketing until documentation matches.", rationale: "Cooper remediation." },
    C: { text: "Password-protect spreadsheets from funders.", rationale: "Transparency required." },
    D: { text: "Rename all mands tacts.", rationale: "Fix documentation." },
  }),
  bx("mod19-q38", "Nonverbal SD present; learner names object; no EO; social praise follows:", "D", {
    A: { text: "Mand under EO.", rationale: "Nonverbal SD + generalized reinforcement." },
    B: { text: "Echoic.", rationale: "Naming not imitation." },
    C: { text: "Intraverbal.", rationale: "Tact when labeling stimulus." },
    D: { text: "Tact under nonverbal SD with generalized reinforcement.", rationale: "Classic tact conditions." },
  }),
  bx("mod19-q39", "Verbal behavior is operant behavior because:", "A", {
    A: { text: "It is selected by consequences mediated through listeners.", rationale: "Operant VB analysis." },
    B: { text: "It is reflexive only.", rationale: "Emitted and reinforced." },
    C: { text: "It requires no history.", rationale: "Learning history required." },
    D: { text: "Topography alone defines function.", rationale: "Functional analysis." },
  }),
  bx("mod19-q40", "High-Yield: teacher models 'rabbit'; learner echoes before praise:", "C", {
    A: { text: "Mand because teacher vocalized.", rationale: "Echoic during modeling drill." },
    B: { text: "Tact because animal named.", rationale: "Imitation of model." },
    C: { text: "Echoic under imitation control with listener reinforcement.", rationale: "Correct move—Echoic under imitation control with listener reinforcement." },
    D: { text: "Intraverbal exclusively.", rationale: "Point-to-point with model." },
  }),
  bx("mod19-q41", "Intraverbal differs from tact because:", "B", {
    A: { text: "Intraverbal requires nonverbal SD.", rationale: "Intraverbal = verbal SD control." },
    B: { text: "Intraverbal controlled by verbal SD without naming immediate nonverbal referent.", rationale: "Key discrimination." },
    C: { text: "Tact is always mand.", rationale: "Distinct operants." },
    D: { text: "Identical processes.", rationale: "Different controlling variables." },
  }),
  bx("mod19-q42", "Mand differs from tact because:", "D", {
    A: { text: "Mand under nonverbal SD; tact under EO.", rationale: "Reversed." },
    B: { text: "Identical controlling variables.", rationale: "Mand = EO + specifies reinforcer; tact = nonverbal SD." },
    C: { text: "Only tacts are reinforced.", rationale: "Both contact reinforcement." },
    D: { text: "Mand under evocative control specifying reinforcer; tact under nonverbal SD with generalized reinforcement.", rationale: "High-yield exam contrast." },
  }),
  bx("mod19-q43", "Echoic differs from intraverbal because:", "A", {
    A: { text: "Echoic requires point-to-point correspondence with verbal model; intraverbal does not.", rationale: "Formal correspondence distinction." },
    B: { text: "Identical.", rationale: "Different control." },
    C: { text: "Intraverbal requires imitation.", rationale: "Echoic requires resemblance." },
    D: { text: "Echoic is always mand.", rationale: "Operant classes differ." },
  }),
  bx("mod19-q44", "Four-process VB check for 'juice please' with deprivation and juice delivery:", "C", {
    A: { text: "Tact only.", rationale: "EO + specified reinforcer." },
    B: { text: "Echoic only.", rationale: "Requesting topography." },
    C: { text: "Mand.", rationale: "Evocative control + reinforcer specification." },
    D: { text: "Extinction.", rationale: "Reinforcement follows." },
  }),
  bx("mod19-q45", "Skinner's verbal behavior analysis emphasizes:", "B", {
    A: { text: "Mentalistic causes of speech.", rationale: "Behavior analytic functional units." },
    B: { text: "Functional units defined by controlling relations—not traditional grammar alone.", rationale: "Radical behaviorism applied to language." },
    C: { text: "Respondent only.", rationale: "Operant verbal behavior." },
    D: { text: "Topography determines operant class exclusively.", rationale: "Function over form." },
  }),
  bx("mod19-q46", "Vague 'speech trial' summaries without operant codes:", "D", {
    A: { text: "Adequate VB documentation.", rationale: "Operant-coded trials required." },
    B: { text: "IOA substitute.", rationale: "Classification lapse." },
    C: { text: "Best practice.", rationale: "Trial-level operant tagging." },
    D: { text: "Insufficient—coded operant data with context required.", rationale: "Domain C VB standard." },
  }),
  bx("mod19-q47", "Board stem: deprivation logged; 'cookie' said toward cookie jar; cookie delivered:", "A", {
    A: { text: "Mand.", rationale: "EO + specified reinforcer." },
    B: { text: "Tact only.", rationale: "Requesting function." },
    C: { text: "Echoic.", rationale: "No model emphasis." },
    D: { text: "Respondent.", rationale: "Operant mand." },
  }),
  bx("mod19-q48", "Coercive error correction suppressing emerging mand attempts:", "C", {
    A: { text: "Ethical VB best practice.", rationale: "Reinforcement-rich shaping preferred." },
    B: { text: "Required by Cooper.", rationale: "Humane error correction." },
    C: { text: "Ethical concern—reinforce approximations; avoid punitive suppression.", rationale: "Domain E VB practice." },
    D: { text: "IOA issue only.", rationale: "Clinical ethics." },
  }),
  bx("mod19-q49", "BCBA stem: photo present, learner names item, praise only—no EO, not requesting:", "D", {
    A: { text: "Mand.", rationale: "Nonverbal SD naming." },
    B: { text: "Echoic.", rationale: "Tact conditions." },
    C: { text: "Intraverbal.", rationale: "Labeling photo." },
    D: { text: "Tact.", rationale: "Classic board tact vignette." },
  }),
  bx("mod19-q50", "Closing Chapter 18 principle:", "B", {
    A: { text: "Classify verbal behavior by word form.", rationale: "Function over topography." },
    B: { text: "Classify by controlling variables (EO, nonverbal SD, verbal SD, model); document context; reinforce speaker behavior.", rationale: "Chapter 18 integration." },
    C: { text: "Mand and tact are interchangeable.", rationale: "Distinct operants." },
    D: { text: "MO documentation optional for mands.", rationale: "EO logs required." },
  }),
];
