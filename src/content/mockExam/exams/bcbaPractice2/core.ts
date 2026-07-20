/**
 * BCBA-style mock items for independent study only.
 * NOT affiliated with the BACB. Domain labels mirror the sixth-edition Test Content Outline (A–I).
 * Mock Exam 2 — core vignettes mock2-001 … mock2-050 (TCO A–I).
 */
import type { BDSQuestion } from "@/lib/content-types";
import { mockQ as q } from "@/content/mockExam/mockExamQuestionFactory";

export const BCBA_MOCK_EXAM_PRACTICE2_CORE: BDSQuestion[] = [
  q(
    "mock2-001",
    "A",
    "A colleague insists that because a client's 'anxiety' cannot be directly observed, it cannot be part of a behavior-analytic case formulation. Which response is MOST consistent with radical behaviorism?",
    [
      {
        text: "Private events such as feelings are behavior subject to the same laws as public behavior and can be addressed through verbal reports or physiological correlates.",
        correct: true,
        rationale: "Radical behaviorism treats private events as real behavior governed by contingencies, not as unmeasurable mental causes.",
      },
      {
        text: "Agree and exclude any reference to internal states from the case formulation.",
        correct: false,
        rationale: "This reflects methodological, not radical, behaviorism, which the exam distinguishes.",
      },
      {
        text: "Refer the client to a cognitive therapist because behavior analysis cannot address anxiety.",
        correct: false,
        rationale: "Behavior analysts can conceptualize private events within their own framework; referral is not automatically required.",
      },
      {
        text: "Treat the term 'anxiety' as an explanatory fiction and end the analysis there.",
        correct: false,
        rationale: "Labeling it a fiction without further functional analysis abandons the analytic task rather than completing it.",
      },
    ],
  ),
  q(
    "mock2-002",
    "A",
    "A BCBA states that a client's tantrums occur because of an 'oppositional personality.' Which philosophic assumption is MOST violated by this explanation?",
    [
      {
        text: "Determinism, because it invokes an internal trait as an uncaused cause rather than identifying environmental variables controlling the behavior.",
        correct: true,
        rationale: "Determinism holds that behavior has lawful causes in the environment and history, not in circular trait labels.",
      },
      {
        text: "Parsimony, because the explanation is too simple.",
        correct: false,
        rationale: "The label is not simple in an explanatory sense—it is circular, which is a determinism issue, not an over-simplicity issue.",
      },
      {
        text: "Selectionism, because it ignores phylogenic history.",
        correct: false,
        rationale: "Selectionism concerns behavior selected by consequences across generations or a lifetime; that is not the flaw here.",
      },
      {
        text: "Empiricism, because the term 'oppositional' has been measured reliably before.",
        correct: false,
        rationale: "The problem is not measurement reliability of the label but its circular, non-functional causal status.",
      },
    ],
  ),
  q(
    "mock2-003",
    "A",
    "A supervisee proposes explaining self-injury as due to 'low pain tolerance' without collecting any data. Applying philosophic doubt, what should the BCBA do FIRST?",
    [
      {
        text: "Treat the explanation as tentative and require data collection and functional assessment before accepting it.",
        correct: true,
        rationale: "Philosophic doubt requires questioning assumed explanations and testing them against data rather than accepting them at face value.",
      },
      {
        text: "Accept the explanation since the supervisee has clinical experience.",
        correct: false,
        rationale: "Experience alone does not substitute for data under philosophic doubt.",
      },
      {
        text: "Reject the explanation outright without further discussion.",
        correct: false,
        rationale: "Philosophic doubt calls for questioning and testing, not outright dismissal without inquiry.",
      },
      {
        text: "Document the explanation as an established fact in the treatment plan.",
        correct: false,
        rationale: "This adopts an untested mentalistic explanation as established fact, the opposite of philosophic doubt.",
      },
    ],
  ),
  q(
    "mock2-004",
    "A",
    "Two BCBAs disagree about whether one well-controlled case study is sufficient to change agency-wide protocol. Which principle should MOST guide the decision?",
    [
      {
        text: "Replication across additional clients and settings should occur before generalizing the protocol change.",
        correct: true,
        rationale: "Behavior analysis relies on replication to establish generality, not a single demonstration.",
      },
      {
        text: "A single well-controlled case is always sufficient evidence for organization-wide policy.",
        correct: false,
        rationale: "Single-case designs establish a functional relation for that case; broad policy requires replication.",
      },
      {
        text: "Vote among staff on which explanation feels most convincing.",
        correct: false,
        rationale: "Scientific decisions are not made by consensus opinion absent data.",
      },
      {
        text: "Adopt the change immediately because the requesting BCBA has more tenure.",
        correct: false,
        rationale: "Authority or tenure is not a substitute for replicated evidence.",
      },
    ],
  ),
  q(
    "mock2-005",
    "A",
    "A trainee explains a client's aggression by saying the client 'chose' to be aggressive, invoking free will. Which response is MOST appropriate?",
    [
      {
        text: "Explain that determinism assumes behavior is a function of environmental variables and history, not undetermined free choice.",
        correct: true,
        rationale: "The philosophic assumption of determinism replaces free-will explanations with lawful, identifiable variables.",
      },
      {
        text: "Agree that free will is a valid behavior-analytic construct in some cases.",
        correct: false,
        rationale: "Free will is inconsistent with the deterministic assumptions underlying behavior analysis.",
      },
      {
        text: "Avoid the topic since motivation is outside the BCBA's scope of practice.",
        correct: false,
        rationale: "Motivation, operationalized as motivating operations, is squarely within scope; the conceptual error should be addressed.",
      },
      {
        text: "Suggest a psychological evaluation to determine the client's intent.",
        correct: false,
        rationale: "This does not correct the conceptual error and is not the most direct response available to the BCBA.",
      },
    ],
  ),
  q(
    "mock2-006",
    "A",
    "A parent asks why 'reinforcement' is preferred over 'reward' in the treatment plan. Which explanation BEST reflects behavior analysis's use of technical terms?",
    [
      {
        text: "Reinforcement is defined functionally by its effect of increasing future behavior, whereas 'reward' implies a subjective quality unrelated to functional effect.",
        correct: true,
        rationale: "Technical terms are defined by their functional relations, avoiding mentalistic or subjective connotations.",
      },
      {
        text: "The terms are interchangeable and the distinction is purely stylistic.",
        correct: false,
        rationale: "The terms carry different conceptual implications; behavior analysis prioritizes functional definitions.",
      },
      {
        text: "'Reward' is the more scientific term because it is used broadly across psychology.",
        correct: false,
        rationale: "Broader popular use does not make a term functionally defined.",
      },
      {
        text: "'Reinforcement' only applies to punishment-based procedures.",
        correct: false,
        rationale: "This confuses reinforcement with punishment, which are opposite functional processes.",
      },
    ],
  ),
  q(
    "mock2-007",
    "A",
    "A behavior analyst evaluates a new curriculum by asking whether it 'works' to produce durable, generalized skill gains rather than whether it matches a favored theory. This reflects MOST directly which philosophic doctrine?",
    [
      {
        text: "Pragmatism, which evaluates the truth or value of an account by its practical, workable consequences.",
        correct: true,
        rationale: "Pragmatism as a truth criterion judges explanations and interventions by their practical success, consistent with applied behavior analysis.",
      },
      {
        text: "Mechanism, which requires a physical, machine-like causal chain before any action is taken.",
        correct: false,
        rationale: "Mechanism concerns causal chains of antecedent-behavior-consequence, not a workability criterion for adopting curricula.",
      },
      {
        text: "Structuralism, which prioritizes internal cognitive architecture over observed outcomes.",
        correct: false,
        rationale: "Structuralism concerns mental structure, essentially the opposite emphasis from a functional, outcomes-based curriculum choice.",
      },
      {
        text: "Selectionism, which explains behavior solely through phylogenic natural selection.",
        correct: false,
        rationale: "Selectionism is a specific causal-level concept unrelated to judging curricula by practical workability.",
      },
    ],
  ),
  q(
    "mock2-008",
    "B",
    "A child's hand-flapping occurs at high rates when alone and drops to near zero when others enter the room, with no identifiable social consequence maintaining it. Which reinforcement class MOST likely maintains this behavior?",
    [
      {
        text: "Automatic (non-socially-mediated) reinforcement.",
        correct: true,
        rationale: "Behavior maintained independent of social mediation, occurring preferentially when alone, is characteristic of automatic reinforcement.",
      },
      {
        text: "Negative reinforcement via escape from demands.",
        correct: false,
        rationale: "No demand context is described; escape requires an aversive task from which to escape.",
      },
      {
        text: "Positive reinforcement via attention.",
        correct: false,
        rationale: "Attention-maintained behavior would be expected to increase, not decrease, when others are present.",
      },
      {
        text: "Conditioned punishment suppressing a competing response.",
        correct: false,
        rationale: "Punishment decreases behavior; this vignette describes an increase in the target behavior when alone.",
      },
    ],
  ),
  q(
    "mock2-009",
    "B",
    "A student signs 'break' and the teacher immediately removes the worksheet. Over several weeks, the student begins signing 'break' as soon as materials are placed on the desk, before any instruction is given. This pattern BEST illustrates:",
    [
      {
        text: "The materials acquiring discriminative control (SD) that evokes the mand in anticipation of the demand-based aversive condition.",
        correct: true,
        rationale: "Repeated pairing of materials with the aversive demand context establishes them as an SD evoking escape-maintained manding.",
      },
      {
        text: "A tact controlled by the nonverbal properties of the worksheet.",
        correct: false,
        rationale: "The response is reinforced by escape, characteristic of a mand, not by generalized social reinforcement characteristic of a tact.",
      },
      {
        text: "Respondent conditioning of an unconditioned escape reflex.",
        correct: false,
        rationale: "Signing is an operant response shaped by consequences, not a reflexive respondent behavior.",
      },
      {
        text: "Extinction-induced variability in manding topography.",
        correct: false,
        rationale: "No extinction of the mand is described; the response is being reliably reinforced by escape.",
      },
    ],
  ),
  q(
    "mock2-010",
    "B",
    "During a token-earning task, a learner suddenly hits the table, screams, and throws materials right after the schedule requirement was raised from FR1 to FR5 with no additional teaching. This is MOST likely an example of:",
    [
      {
        text: "An extinction-like effect (ratio strain) produced by an abrupt increase in response requirement outpacing the learner's history of reinforcement delay.",
        correct: true,
        rationale: "Abrupt, large increases in ratio requirements can produce ratio strain, including increased problem behavior and response variability.",
      },
      {
        text: "Spontaneous recovery of a previously extinguished behavior.",
        correct: false,
        rationale: "Spontaneous recovery follows a rest period after extinction, not a schedule-thinning change.",
      },
      {
        text: "Resurgence of an earlier reinforced alternative response.",
        correct: false,
        rationale: "Resurgence occurs when a currently reinforced response is placed on extinction, reinstating an earlier response; no alternative response's extinction is described.",
      },
      {
        text: "Automatic reinforcement unrelated to the schedule change.",
        correct: false,
        rationale: "The temporal link to the schedule change strongly implicates ratio strain rather than an independent automatic function.",
      },
    ],
  ),
  q(
    "mock2-011",
    "B",
    "A BCBA thins a continuous schedule to a variable ratio schedule specifically to increase resistance to extinction. Which outcome would BEST confirm the intended effect was achieved?",
    [
      {
        text: "Responding persists at higher, steadier rates during a later extinction probe compared to a pre-thinning extinction probe.",
        correct: true,
        rationale: "Increased resistance to extinction is demonstrated by more persistent responding when reinforcement is withheld, relative to before thinning.",
      },
      {
        text: "The learner's overall response rate during reinforcement sessions decreases permanently.",
        correct: false,
        rationale: "A permanent rate decrease during reinforcement does not by itself demonstrate resistance to extinction.",
      },
      {
        text: "The learner shows a burst of aggression the first time reinforcement is delayed.",
        correct: false,
        rationale: "An extinction burst reflects an initial reaction, not evidence of durable resistance to extinction.",
      },
      {
        text: "IOA on the response definition improves across sessions.",
        correct: false,
        rationale: "IOA reflects measurement agreement, not resistance to extinction.",
      },
    ],
  ),
  q(
    "mock2-012",
    "B",
    "A teacher withholds a preferred snack for two hours before a session, then compliance with 'clean up' instructions increases sharply when access to the snack is contingent on compliance. Which concept BEST accounts for the increase?",
    [
      {
        text: "A motivating operation (deprivation) that increased the reinforcing value of the snack, evoking behavior that had previously produced it.",
        correct: true,
        rationale: "Deprivation functions as an establishing operation, increasing the value of a reinforcer and evoking behavior reinforced by it in the past.",
      },
      {
        text: "A discriminative stimulus that was newly presented during the session.",
        correct: false,
        rationale: "No new antecedent stimulus signaling reinforcement availability is described; the change involves reinforcer value via deprivation.",
      },
      {
        text: "Negative punishment of noncompliant behavior.",
        correct: false,
        rationale: "No consequence is described that decreases noncompliance directly; the vignette describes increased compliance via MO-altered reinforcer value.",
      },
      {
        text: "Respondent extinction of the snack's conditioned value.",
        correct: false,
        rationale: "Extinction would decrease, not increase, evocative or reinforcing effects; deprivation is an MO effect, not extinction.",
      },
    ],
  ),
  q(
    "mock2-013",
    "B",
    "In discrimination training, a learner responds correctly to a red card (SD) and withholds responding to a blue card (S-delta) after repeated differential reinforcement. Which term BEST describes this outcome?",
    [
      {
        text: "Stimulus control, in which the presence of specific antecedent stimuli reliably predicts the probability of the response.",
        correct: true,
        rationale: "Differential responding to SD versus S-delta following differential reinforcement is the definition of stimulus control.",
      },
      {
        text: "Stimulus generalization across untrained colors.",
        correct: false,
        rationale: "Generalization describes responding to novel, untrained stimuli sharing properties with the trained stimulus, not the discrimination itself.",
      },
      {
        text: "Response generalization to untrained topographies.",
        correct: false,
        rationale: "Response generalization concerns variation in response form, not antecedent discrimination.",
      },
      {
        text: "An unconditioned reflex elicited by the card color.",
        correct: false,
        rationale: "This is a learned operant discrimination, not an unconditioned respondent reflex.",
      },
    ],
  ),
  q(
    "mock2-014",
    "B",
    "A learner previously reinforced for hitting a switch to escape loud noise now hits a different, nearby lever when the switch is removed and noise onset continues. This is BEST described as:",
    [
      {
        text: "Response generalization, in which a functionally similar but topographically different response is emitted under the same MO/reinforcement contingency.",
        correct: true,
        rationale: "When the original response is unavailable, a new response that produces the same reinforcing consequence reflects response generalization.",
      },
      {
        text: "Stimulus generalization to a novel discriminative stimulus.",
        correct: false,
        rationale: "The change is in the response topography emitted, not merely in the antecedent stimulus controlling an unchanged response.",
      },
      {
        text: "Extinction-induced aggression toward the apparatus.",
        correct: false,
        rationale: "No extinction is described; the alternate response continues to be reinforced by escape.",
      },
      {
        text: "Spontaneous recovery of an unrelated operant.",
        correct: false,
        rationale: "Spontaneous recovery involves reappearance of an extinguished response after a rest period, not substitution of a new topography.",
      },
    ],
  ),
  q(
    "mock2-015",
    "B",
    "A client's rate of manding for attention is higher when a sibling is also seeking caregiver attention than when the client has the caregiver's undivided attention across the day. This pattern is MOST consistent with:",
    [
      {
        text: "The matching law, wherein relative response rates track the relative rate of reinforcement obtainable under increased competition for a limited reinforcer.",
        correct: true,
        rationale: "The matching law describes how response allocation shifts as availability/competition for reinforcement changes across sources.",
      },
      {
        text: "Simple extinction of the manding response.",
        correct: false,
        rationale: "Manding is increasing, not decreasing to zero, which rules out an extinction account.",
      },
      {
        text: "Negative punishment delivered by the sibling's presence.",
        correct: false,
        rationale: "No consequence reducing manding is described; manding increases rather than decreases.",
      },
      {
        text: "Overcorrection procedures applied contingently on manding.",
        correct: false,
        rationale: "No corrective consequence procedure is described in the vignette.",
      },
    ],
  ),
  q(
    "mock2-016",
    "C",
    "Two independent observers score a 30-minute session using partial-interval recording in 10-second intervals. Interval-by-interval IOA is 94%, but a closer review shows both observers systematically miss brief, high-rate bursts of hand-biting occurring near interval boundaries. Which conclusion is MOST warranted?",
    [
      {
        text: "The aggregate IOA percentage may mask a real, boundary-related measurement problem, and error patterns should be examined rather than relying on the summary statistic alone.",
        correct: true,
        rationale: "High aggregate IOA can coexist with systematic, patterned disagreement; reviewing error patterns is essential before trusting the summary number.",
      },
      {
        text: "94% IOA is definitive proof the measurement system has no flaws.",
        correct: false,
        rationale: "A high aggregate percentage does not rule out systematic bias, as illustrated by the described boundary effect.",
      },
      {
        text: "Partial-interval recording is invalid for any behavior and should never be used.",
        correct: false,
        rationale: "Partial-interval recording remains a legitimate estimate for many behaviors; the issue here is a specific known limitation with brief, boundary-timed events.",
      },
      {
        text: "The behavior should be redefined as a permanent product measure exclusively.",
        correct: false,
        rationale: "Switching to permanent product is not implied or necessarily feasible for hand-biting; refining interval procedures or recording method is the more direct step.",
      },
    ],
  ),
  q(
    "mock2-017",
    "C",
    "A BCBA needs to measure both how often a behavior occurs and how intense each occurrence is, because intensity varies from mild grabbing to forceful hitting. Which combination of measures is MOST appropriate?",
    [
      {
        text: "Frequency or rate for occurrence, paired with a magnitude/intensity rating scale collected concurrently for each occurrence.",
        correct: true,
        rationale: "Because two dimensions (occurrence and intensity) are both clinically relevant, both frequency and magnitude should be measured together.",
      },
      {
        text: "Latency alone, since it captures both how often and how intensely the behavior occurs.",
        correct: false,
        rationale: "Latency measures time to response initiation and does not capture frequency or intensity.",
      },
      {
        text: "Whole-interval recording alone, since it best estimates duration regardless of intensity.",
        correct: false,
        rationale: "Whole-interval recording underestimates occurrence and says nothing about intensity.",
      },
      {
        text: "Permanent product measurement exclusively, since it removes observer involvement.",
        correct: false,
        rationale: "There is no physical permanent product of grabbing/hitting intensity in this scenario to measure after the fact.",
      },
    ],
  ),
  q(
    "mock2-018",
    "C",
    "A graph shows a treatment phase with a clearly decreasing trend, but session-to-session data points bounce widely above and below the trend line. Which visual-analysis dimension is MOST directly reflected by the bouncing data points?",
    [
      {
        text: "Variability, which describes the degree of fluctuation of data points around the trend within a phase.",
        correct: true,
        rationale: "Variability specifically refers to the spread or fluctuation of data points, distinct from level and trend.",
      },
      {
        text: "Level, which describes the mean value of data points within a phase.",
        correct: false,
        rationale: "Level refers to the average magnitude of data, not the fluctuation around the trend.",
      },
      {
        text: "Trend, which describes the overall direction data are moving across a phase.",
        correct: false,
        rationale: "Trend is already described as decreasing; the question asks about the bouncing, which is variability.",
      },
      {
        text: "Immediacy of effect between phases.",
        correct: false,
        rationale: "Immediacy concerns how quickly change occurs at a phase change, not within-phase fluctuation.",
      },
    ],
  ),
  q(
    "mock2-019",
    "C",
    "A BCBA wants to know the percentage of trials in which a learner independently completed a chained task correctly from start to finish. Which measurement approach is MOST appropriate?",
    [
      {
        text: "Task analysis with trial-by-trial scoring of whether each step (or the full chain) was completed independently and correctly.",
        correct: true,
        rationale: "Breaking the chain into a task analysis and scoring independent, correct completion directly answers the clinical question.",
      },
      {
        text: "Overall session duration recorded in minutes.",
        correct: false,
        rationale: "Duration alone does not indicate whether steps were completed correctly or independently.",
      },
      {
        text: "Rate of unrelated vocal stereotypy during the session.",
        correct: false,
        rationale: "This measures an unrelated behavior, not chain completion accuracy.",
      },
      {
        text: "Partial-interval recording of on-task behavior.",
        correct: false,
        rationale: "Interval recording estimates occurrence within intervals, not step-by-step accuracy of a chained task.",
      },
    ],
  ),
  q(
    "mock2-020",
    "C",
    "During momentary time sampling at the end of each 1-minute interval, an observer records whether the behavior is occurring at that instant. Which limitation is MOST characteristic of this method?",
    [
      {
        text: "It can substantially underestimate or overestimate true occurrence because it only samples a single moment per interval rather than the whole interval.",
        correct: true,
        rationale: "Momentary time sampling estimates occurrence from brief snapshots, which can misrepresent behaviors that occur mostly between sampled moments.",
      },
      {
        text: "It always produces perfectly accurate estimates of total session duration.",
        correct: false,
        rationale: "Momentary time sampling is an estimate, not an exact duration measure; it can misrepresent actual occurrence.",
      },
      {
        text: "It cannot be used with any interval length shorter than 30 minutes.",
        correct: false,
        rationale: "There is no such restriction; interval length is a design choice unrelated to this stated limitation.",
      },
      {
        text: "It eliminates the need for any interobserver agreement checks.",
        correct: false,
        rationale: "IOA remains necessary regardless of recording method chosen.",
      },
    ],
  ),
  q(
    "mock2-021",
    "C",
    "A BCBA compares two observers' total counts of a behavior across an entire session and finds the totals are nearly identical, even though a moment-by-moment review shows they were rarely scoring the same specific instances. Which IOA calculation method would MOST likely have revealed this discrepancy?",
    [
      {
        text: "Interval-by-interval or exact-agreement IOA calculated on a smaller time unit, rather than total-count comparison across the whole session.",
        correct: true,
        rationale: "Total-count IOA can mask disagreement about which specific instances were scored; smaller time-based comparisons expose this.",
      },
      {
        text: "Recalculating the same total-count comparison a second time.",
        correct: false,
        rationale: "Repeating the same insensitive method would not reveal the discrepancy already present in the method itself.",
      },
      {
        text: "Averaging the two observers' totals together as the reported result.",
        correct: false,
        rationale: "Averaging does not assess agreement at all; it merely blends potentially disagreeing counts.",
      },
      {
        text: "Reporting only the higher of the two totals going forward.",
        correct: false,
        rationale: "This does not calculate agreement and discards useful information about measurement discrepancy.",
      },
    ],
  ),
  q(
    "mock2-022",
    "C",
    "A parent asks the BCBA to summarize six months of daily frequency data on a single line graph without a phase-change line separating baseline from intervention. What is the MOST significant problem with this graphing approach?",
    [
      {
        text: "Without phase-change lines, it becomes difficult to visually evaluate the functional relation between the intervention's introduction and any change in the data.",
        correct: true,
        rationale: "Phase-change lines are essential to visual analysis, marking exactly when conditions changed so effects can be evaluated relative to that point.",
      },
      {
        text: "Line graphs cannot display frequency data under any circumstances.",
        correct: false,
        rationale: "Line graphs are commonly and appropriately used to display frequency/rate data across sessions.",
      },
      {
        text: "Six months of data is too short a time span to graph meaningfully.",
        correct: false,
        rationale: "Duration of data collection is not the stated problem; the missing phase-change line is.",
      },
      {
        text: "Daily data points must always be converted to weekly averages before graphing.",
        correct: false,
        rationale: "There is no such requirement; daily data can be graphed directly and often should be to preserve visual detail.",
      },
    ],
  ),
  q(
    "mock2-023",
    "D",
    "A BCBA wants to demonstrate experimental control over a single target behavior by repeatedly introducing, withdrawing, and reintroducing the intervention across the same phases. Which design is being described?",
    [
      {
        text: "A reversal (ABAB) design, alternating baseline and intervention conditions to demonstrate the same effect recurs.",
        correct: true,
        rationale: "Repeated introduction and withdrawal of a single intervention across matched conditions defines the reversal/withdrawal design.",
      },
      {
        text: "A multiple baseline design across behaviors.",
        correct: false,
        rationale: "Multiple baseline designs stagger introduction across different behaviors, settings, or participants rather than repeating an A-B sequence on one target.",
      },
      {
        text: "An alternating treatments design comparing two interventions.",
        correct: false,
        rationale: "Alternating treatments compares two or more distinct interventions rapidly alternated, not a single intervention withdrawn and reinstated.",
      },
      {
        text: "A changing criterion design.",
        correct: false,
        rationale: "Changing criterion designs use successive criterion shifts within one continuous intervention, not withdrawal and reinstatement.",
      },
    ],
  ),
  q(
    "mock2-024",
    "D",
    "A behavior analyst cannot ethically withdraw a treatment for severe self-injury once it is effective, but still needs to demonstrate experimental control. Which design is MOST appropriate?",
    [
      {
        text: "A multiple baseline design, staggering the introduction of the intervention across behaviors, settings, or participants while never withdrawing it.",
        correct: true,
        rationale: "Multiple baseline designs avoid withdrawing effective treatment while still demonstrating control by staggered introduction.",
      },
      {
        text: "A reversal design with a return to baseline.",
        correct: false,
        rationale: "Reversal designs require withdrawing treatment, which is contraindicated for severe, dangerous behavior once treatment is effective.",
      },
      {
        text: "A simple AB design with no replication.",
        correct: false,
        rationale: "AB designs alone do not adequately demonstrate a functional relation due to lack of replication.",
      },
      {
        text: "A group pretest-posttest design.",
        correct: false,
        rationale: "Group designs are not standard single-case methodology and do not address the specific ethical constraint described.",
      },
    ],
  ),
  q(
    "mock2-025",
    "D",
    "A BCBA rapidly alternates two prompting procedures within the same session, counterbalancing order across days, to determine which produces faster acquisition for the same skill. Which design is being used?",
    [
      {
        text: "Alternating treatments design, which rapidly alternates two or more conditions to compare their relative effects.",
        correct: true,
        rationale: "Rapid alternation of two interventions with counterbalanced order to compare effects defines the alternating treatments design.",
      },
      {
        text: "Changing criterion design.",
        correct: false,
        rationale: "Changing criterion involves successive, gradual criterion shifts within a single intervention, not rapid alternation between two interventions.",
      },
      {
        text: "ABAB reversal design.",
        correct: false,
        rationale: "Reversal designs alternate baseline and one treatment, not two distinct treatments compared to each other.",
      },
      {
        text: "Multiple baseline across settings.",
        correct: false,
        rationale: "Multiple baseline staggers introduction of one intervention across settings rather than alternating two interventions.",
      },
    ],
  ),
  q(
    "mock2-026",
    "D",
    "In a changing criterion design targeting increased minutes of independent reading, the criterion is raised before the learner has stably met the previous criterion for at least three sessions. Which threat to the design's validity is MOST likely?",
    [
      {
        text: "It becomes difficult to attribute behavior change specifically to the criterion shift itself, weakening the demonstration of experimental control.",
        correct: true,
        rationale: "Changing criterion designs depend on stable performance at each criterion before advancing; premature shifts obscure whether the criterion is truly controlling behavior.",
      },
      {
        text: "The design converts automatically into a reversal design.",
        correct: false,
        rationale: "Advancing a criterion early does not transform the design type; it weakens the internal validity of the changing-criterion logic.",
      },
      {
        text: "IOA becomes mathematically impossible to calculate going forward.",
        correct: false,
        rationale: "IOA calculation is unaffected by criterion timing; it is a separate measurement issue.",
      },
      {
        text: "The behavior automatically will be classified as maintained by automatic reinforcement.",
        correct: false,
        rationale: "Nothing in the vignette supports a claim about reinforcement class; the concern is with criterion stability logic.",
      },
    ],
  ),
  q(
    "mock2-027",
    "D",
    "A multiple baseline graph shows the intervention introduced in Tier 1, Tier 2, and Tier 3 on the exact same calendar day, though baselines had been running for different lengths of time. What is the MOST significant concern with this graph?",
    [
      {
        text: "Simultaneous introduction across tiers undermines the staggered-introduction logic needed to rule out extraneous events as the cause of change.",
        correct: true,
        rationale: "The core logic of multiple baseline designs requires staggered introduction so that co-occurring baseline stability rules out confounds; simultaneous introduction weakens this.",
      },
      {
        text: "Multiple baseline designs cannot include more than two tiers.",
        correct: false,
        rationale: "Multiple baseline designs can include many tiers; the number of tiers is not the issue described.",
      },
      {
        text: "Baselines of different lengths automatically invalidate any single-case design.",
        correct: false,
        rationale: "Differing baseline lengths are common and acceptable; the issue is the lack of staggered introduction, not baseline length itself.",
      },
      {
        text: "Graphing three tiers on one page is not a valid way to display data.",
        correct: false,
        rationale: "Stacked tiers on one page are the standard convention for multiple baseline designs; that is not the problem.",
      },
    ],
  ),
  q(
    "mock2-028",
    "D",
    "During a functional analysis, the therapist in the attention condition inadvertently provides brief verbal reprimands during the control condition as well. Which type of validity is MOST directly threatened?",
    [
      {
        text: "Internal validity, because an extraneous variable (unintended attention) is confounded with the comparison between conditions.",
        correct: true,
        rationale: "Uncontrolled attention delivered across conditions confounds the comparison, threatening the ability to attribute effects to the intended manipulation.",
      },
      {
        text: "Social validity, because caregivers might disapprove of reprimands.",
        correct: false,
        rationale: "Social validity concerns the acceptability and significance of goals/procedures to stakeholders, not confounded experimental conditions.",
      },
      {
        text: "Predictive validity of a norm-referenced assessment tool.",
        correct: false,
        rationale: "This is a single-case experimental analysis, not a norm-referenced test with predictive validity concerns.",
      },
      {
        text: "Content validity of the FBA interview.",
        correct: false,
        rationale: "Content validity pertains to indirect assessment tools, not confounds within an experimental functional analysis.",
      },
    ],
  ),
  q(
    "mock2-029",
    "D",
    "A BCBA is choosing between a reversal design and a multiple baseline design for a case involving mild off-task behavior with no safety concerns. All else equal, which factor would MOST favor choosing the reversal design?",
    [
      {
        text: "The behavior is expected to return quickly and completely to baseline levels once treatment is withdrawn, allowing clean demonstration of control with fewer resources.",
        correct: true,
        rationale: "Reversal designs are efficient when behavior reliably reverses, providing strong, direct evidence of control with a single behavior/setting.",
      },
      {
        text: "The behavior is dangerous and treatment cannot ethically be withdrawn.",
        correct: false,
        rationale: "This factor would argue against a reversal design and in favor of a multiple baseline design instead.",
      },
      {
        text: "Only one setting is available for baseline and intervention data collection ever.",
        correct: false,
        rationale: "While relevant, a single setting alone does not specifically favor a reversal over other single-setting-compatible options; reversibility is the more decisive factor.",
      },
      {
        text: "The caregiver refuses to ever have the behavior measured twice in the same condition.",
        correct: false,
        rationale: "This is not a realistic or standard factor in choosing between single-case designs.",
      },
    ],
  ),
  q(
    "mock2-030",
    "E",
    "A BCBA is asked by an employer to bill for direct supervision time that was actually spent solely on unrelated administrative paperwork. What is the MOST appropriate response?",
    [
      {
        text: "Decline to bill inaccurately, document the actual services rendered, and address the billing practice through appropriate channels.",
        correct: true,
        rationale: "Accurate documentation and billing integrity are core ethical obligations; fraudulent billing must be refused regardless of employer pressure.",
      },
      {
        text: "Bill as instructed since the employer directed it.",
        correct: false,
        rationale: "Employer instructions do not override the ethical and legal obligation to bill accurately.",
      },
      {
        text: "Bill half the time as supervision and half as administrative to compromise.",
        correct: false,
        rationale: "Any inaccurate billing remains a misrepresentation of services actually rendered.",
      },
      {
        text: "Say nothing and continue the pattern to avoid conflict with the employer.",
        correct: false,
        rationale: "Silence perpetuates an ongoing ethical and potentially legal violation.",
      },
    ],
  ),
  q(
    "mock2-031",
    "E",
    "A BCBA is asked to design a feeding intervention for a child with a medical swallowing condition, an area outside the BCBA's training and experience. What should the BCBA do FIRST?",
    [
      {
        text: "Decline to proceed independently, seek appropriate training/supervision, or refer/collaborate with a qualified professional, staying within the boundaries of competence.",
        correct: true,
        rationale: "Practicing outside one's scope of competence is an ethical violation; the BCBA must seek training, collaboration, or referral before proceeding.",
      },
      {
        text: "Proceed using general ABA principles since behavior analysis techniques apply universally.",
        correct: false,
        rationale: "General principles do not substitute for the specialized competence required for medically complex feeding cases.",
      },
      {
        text: "Ask the family to sign a waiver releasing the BCBA from liability before proceeding.",
        correct: false,
        rationale: "A waiver does not resolve the underlying scope-of-competence violation.",
      },
      {
        text: "Delegate the entire case to an RBT without additional oversight.",
        correct: false,
        rationale: "Delegating to a less credentialed provider does not resolve the BCBA's own competence obligation and adds supervisory risk.",
      },
    ],
  ),
  q(
    "mock2-032",
    "E",
    "A caregiver wants to gift the BCBA an expensive item as a thank-you after a discharge. Which consideration is MOST important in deciding how to respond?",
    [
      {
        text: "Whether accepting the gift creates a conflict of interest, multiple relationship, or perception of impropriety that could compromise objectivity or professional boundaries.",
        correct: true,
        rationale: "Evaluating potential conflicts of interest and multiple relationships is central to ethically navigating gifts from clients or caregivers.",
      },
      {
        text: "Whether the gift is tax-deductible for the caregiver.",
        correct: false,
        rationale: "Tax implications for the caregiver are irrelevant to the BCBA's ethical obligations.",
      },
      {
        text: "Whether other staff members have accepted similar gifts previously.",
        correct: false,
        rationale: "Prior staff behavior does not determine the ethical appropriateness of this specific situation.",
      },
      {
        text: "Whether the gift was purchased on sale.",
        correct: false,
        rationale: "Price discount is irrelevant to the ethical analysis of conflict of interest.",
      },
    ],
  ),
  q(
    "mock2-033",
    "I",
    "A BCBA supervises 20 trainees but only provides 30 minutes of individual contact per trainee per month, well below required supervision standards. What is the MOST appropriate corrective action?",
    [
      {
        text: "Reduce the supervisory caseload or restructure supervision delivery to meet required contact standards, ensuring adequate oversight for each supervisee.",
        correct: true,
        rationale: "Supervision requirements exist to ensure adequate oversight; caseloads must be adjusted to meet minimum contact and quality standards.",
      },
      {
        text: "Continue as is since trainees are progressing toward certification eventually.",
        correct: false,
        rationale: "Eventual progress does not excuse failure to meet required supervision contact standards.",
      },
      {
        text: "Document supervision hours as compliant regardless of actual contact provided.",
        correct: false,
        rationale: "Falsifying supervision records is a serious ethical and professional violation.",
      },
      {
        text: "Delegate all supervisory responsibilities to senior trainees without BCBA oversight.",
        correct: false,
        rationale: "Supervisory responsibility cannot be fully delegated to individuals who are not yet credentialed to supervise.",
      },
    ],
  ),
  q(
    "mock2-034",
    "E",
    "A BCBA discovers that a colleague has fabricated data in a progress report to make an intervention appear more effective than it was. What is the MOST appropriate FIRST step?",
    [
      {
        text: "Address the concern directly with the colleague when feasible, and pursue appropriate reporting channels if the issue is not resolved and involves a genuine ethics violation.",
        correct: true,
        rationale: "Ethics codes generally favor attempting direct, informal resolution first when appropriate and safe, escalating to formal channels if unresolved.",
      },
      {
        text: "Say nothing to avoid damaging the professional relationship.",
        correct: false,
        rationale: "Remaining silent about data fabrication allows a serious ethical violation to continue unaddressed.",
      },
      {
        text: "Immediately post about the incident on public social media.",
        correct: false,
        rationale: "Public disclosure bypasses appropriate professional and confidential reporting channels.",
      },
      {
        text: "Alter the data personally to correct the report without informing anyone.",
        correct: false,
        rationale: "Unilaterally altering another professional's records is inappropriate and does not address the underlying violation transparently.",
      },
    ],
  ),
  q(
    "mock2-035",
    "E",
    "A school team wants to implement a restrictive procedure on a nonverbal learner without obtaining assent because 'he won't understand anyway.' What is the MOST appropriate response from the BCBA?",
    [
      {
        text: "Pursue developmentally appropriate methods of assessing assent/assent-withdrawal behaviors and involve the learner in the process to the maximum extent possible, rather than skipping it.",
        correct: true,
        rationale: "Assent considerations apply regardless of verbal ability; behavior analysts should use accessible methods to respect client autonomy wherever feasible.",
      },
      {
        text: "Skip assent entirely since the learner is nonverbal.",
        correct: false,
        rationale: "Nonverbal status does not eliminate the obligation to consider and support assent through appropriate means.",
      },
      {
        text: "Obtain only caregiver consent and consider the process complete.",
        correct: false,
        rationale: "Caregiver consent is necessary but does not substitute for considering the learner's own assent where feasible.",
      },
      {
        text: "Proceed with the restrictive procedure immediately given time constraints.",
        correct: false,
        rationale: "Time pressure does not justify bypassing appropriate ethical safeguards for restrictive procedures.",
      },
    ],
  ),
  q(
    "mock2-036",
    "E",
    "A parent in the waiting room asks the BCBA detailed questions about another family's child who is also receiving services at the clinic. What is the MOST appropriate response?",
    [
      {
        text: "Decline to share any identifying information about the other client, citing confidentiality obligations.",
        correct: true,
        rationale: "Confidentiality obligations prohibit disclosing another client's information without proper authorization, regardless of the requester's curiosity.",
      },
      {
        text: "Share general information since no names are used.",
        correct: false,
        rationale: "Even without names, contextual details can identify a client and would violate confidentiality.",
      },
      {
        text: "Confirm or deny the other family's enrollment status since it is not clinical information.",
        correct: false,
        rationale: "Enrollment status is still identifying information tied to services received and remains protected by confidentiality obligations.",
      },
      {
        text: "Ask the other family for verbal permission on the spot in front of the requesting parent.",
        correct: false,
        rationale: "This would still involve improperly discussing another client's case and does not follow a proper disclosure process.",
      },
    ],
  ),
  q(
    "mock2-037",
    "E",
    "A BCBA plans to terminate services with a client due to non-payment. Which action is MOST consistent with responsible service termination?",
    [
      {
        text: "Provide reasonable notice, facilitate continuity of care through appropriate transition or referral, and avoid abandoning the client abruptly.",
        correct: true,
        rationale: "Responsible termination requires planning for continuity of care and avoiding abrupt abandonment, even when discontinuing due to legitimate business reasons.",
      },
      {
        text: "Stop all services immediately with no notice once payment is late.",
        correct: false,
        rationale: "Abrupt termination without notice or transition planning risks client abandonment.",
      },
      {
        text: "Continue services indefinitely regardless of payment status.",
        correct: false,
        rationale: "While abandonment must be avoided, indefinite continuation regardless of business arrangements is not the standard expected either.",
      },
      {
        text: "Transfer the client's records to a new provider without any consent process.",
        correct: false,
        rationale: "Record transfer requires appropriate consent/authorization, not unilateral action.",
      },
    ],
  ),
  q(
    "mock2-038",
    "F",
    "A BCBA collects information solely through caregiver interviews and rating scales before writing a behavior intervention plan for severe aggression. What is the MOST significant limitation of this approach?",
    [
      {
        text: "Indirect methods alone cannot establish functional relations and should be supplemented with direct observation and, when appropriate, functional analysis before high-stakes interventions.",
        correct: true,
        rationale: "Indirect assessments generate hypotheses but do not confirm function; direct and functional analysis methods are needed to validate hypotheses, especially for severe behavior.",
      },
      {
        text: "Interviews and rating scales are never useful in any functional behavior assessment.",
        correct: false,
        rationale: "Indirect methods are a legitimate and useful first step; the issue is relying on them exclusively for severe behavior.",
      },
      {
        text: "Rating scales always produce more valid data than direct observation.",
        correct: false,
        rationale: "This overstates the validity of indirect tools relative to direct/experimental methods, which is generally not accurate.",
      },
      {
        text: "Caregiver report should be excluded entirely from any FBA process.",
        correct: false,
        rationale: "Caregiver report is valuable input; it should be triangulated with other methods, not excluded.",
      },
    ],
  ),
  q(
    "mock2-039",
    "F",
    "During a functional analysis, problem behavior occurs at the highest rate in the alone condition and rarely occurs in the attention, demand, or tangible conditions. Which function is MOST likely indicated?",
    [
      {
        text: "Automatic reinforcement, since the highest responding occurs in the absence of any social consequence.",
        correct: true,
        rationale: "Elevated responding specifically in the alone/no-interaction condition, with low rates elsewhere, is the classic pattern suggesting automatic reinforcement.",
      },
      {
        text: "Escape from demands, since demand conditions typically produce the highest rates for escape-maintained behavior.",
        correct: false,
        rationale: "The demand condition shows low rates here, inconsistent with an escape function.",
      },
      {
        text: "Access to tangibles, since removal of preferred items should evoke the behavior most.",
        correct: false,
        rationale: "The tangible condition shows low rates here, inconsistent with a tangible-maintained function.",
      },
      {
        text: "Attention, since caregiver proximity should be the primary evocative variable.",
        correct: false,
        rationale: "The attention condition shows low rates here, inconsistent with an attention-maintained function.",
      },
    ],
  ),
  q(
    "mock2-040",
    "F",
    "A BCBA conducts a multiple-stimulus-without-replacement (MSWO) preference assessment and identifies a top-ranked item, but the item fails to function as a reinforcer during subsequent teaching sessions. What is the MOST appropriate next step?",
    [
      {
        text: "Conduct a reinforcer assessment (e.g., progressive ratio or concurrent operants) to verify the item actually functions to increase behavior before relying on it further.",
        correct: true,
        rationale: "A stimulus preference assessment identifies preferred items, but only a reinforcer assessment confirms functional reinforcing efficacy in context.",
      },
      {
        text: "Repeat the identical MSWO procedure using the exact same items and trust the original ranking.",
        correct: false,
        rationale: "Repeating the same preference ranking procedure does not address whether the top item actually functions as a reinforcer.",
      },
      {
        text: "Discontinue all preference assessment procedures for this learner permanently.",
        correct: false,
        rationale: "This overreacts to a single result and discards a generally useful assessment methodology.",
      },
      {
        text: "Assume the item is a reinforcer and increase its magnitude without further testing.",
        correct: false,
        rationale: "Increasing magnitude without verifying function does not address the underlying uncertainty about reinforcing efficacy.",
      },
    ],
  ),
  q(
    "mock2-041",
    "F",
    "A caregiver interview and direct descriptive observation both suggest problem behavior is escape-maintained, but the caregiver amends the history mid-assessment to include a recent medical diagnosis relevant to pain. What is the MOST appropriate response?",
    [
      {
        text: "Revisit and, if needed, revise the functional hypothesis to consider the new medical information before finalizing assessment conclusions or intervention.",
        correct: true,
        rationale: "New relevant information, especially medical factors, warrants re-evaluating the hypothesis rather than proceeding with an assessment based on incomplete history.",
      },
      {
        text: "Ignore the new information since the original hypothesis was already well supported.",
        correct: false,
        rationale: "Disregarding clinically relevant new information risks an inaccurate or incomplete functional hypothesis.",
      },
      {
        text: "Immediately begin an extinction-based intervention regardless of the new information.",
        correct: false,
        rationale: "Proceeding directly to intervention without addressing potentially relevant medical factors is premature and could be harmful.",
      },
      {
        text: "Discard all previously collected descriptive data since the history changed.",
        correct: false,
        rationale: "Prior data remains useful; it should be integrated with the new information, not discarded wholesale.",
      },
    ],
  ),
  q(
    "mock2-042",
    "F",
    "A BCBA is planning a functional analysis for behavior with a low baseline rate but high-intensity episodes (e.g., self-injury with tissue damage). Which assessment sequencing is MOST appropriate?",
    [
      {
        text: "Begin with less intensive, less risky assessment methods (indirect and descriptive) and reserve functional analysis for when it can be conducted safely, with appropriate safeguards.",
        correct: true,
        rationale: "For high-risk behavior, a less-to-more-intrusive assessment sequence with safety planning is recommended before exposing the client to conditions that could evoke dangerous behavior.",
      },
      {
        text: "Begin immediately with a standard functional analysis using all four test conditions at full intensity.",
        correct: false,
        rationale: "Jumping directly to a full FA without safety precautions is inappropriate for high-risk, high-intensity behavior.",
      },
      {
        text: "Skip assessment altogether and implement a generic extinction-based protocol.",
        correct: false,
        rationale: "Intervening without any functional assessment risks selecting an ineffective or harmful, function-mismatched procedure.",
      },
      {
        text: "Rely exclusively on caregiver rating scales and never observe the client directly.",
        correct: false,
        rationale: "Some direct information is still needed; caregiver ratings alone are insufficient for high-risk behavior.",
      },
    ],
  ),
  q(
    "mock2-043",
    "F",
    "Descriptive (ABC) observation data show problem behavior is frequently preceded by transitions between activities, but a subsequent functional analysis shows the highest rates in the demand condition, not specifically during transitions. Which interpretation is MOST appropriate?",
    [
      {
        text: "The FA provides stronger evidence of a functional relation than the correlational descriptive data, and the demand-related hypothesis should be prioritized while noting transitions may co-occur with demands.",
        correct: true,
        rationale: "Functional analysis demonstrates a functional (causal) relation, which takes precedence over correlational descriptive patterns when conclusions differ.",
      },
      {
        text: "The descriptive data should always override functional analysis results.",
        correct: false,
        rationale: "This reverses the appropriate hierarchy of evidentiary strength; experimental FA data are generally more conclusive than correlational descriptive data.",
      },
      {
        text: "The two data sources are contradictory and both must be discarded entirely.",
        correct: false,
        rationale: "Discarding all data is unnecessary; the discrepancy can be reasonably reconciled by prioritizing the stronger experimental evidence.",
      },
      {
        text: "Transitions and demands are unrelated concepts that cannot co-occur.",
        correct: false,
        rationale: "Transitions often involve new demands, so the two are plausibly related rather than mutually exclusive.",
      },
    ],
  ),
  q(
    "mock2-044",
    "F",
    "A BCBA wants to identify the specific antecedent conditions under which problem behavior is most likely to occur across a full school day, without manipulating any variables. Which method is MOST appropriate?",
    [
      {
        text: "Descriptive assessment (direct observation of naturally occurring antecedents, behaviors, and consequences) such as ABC recording or scatterplot analysis.",
        correct: true,
        rationale: "Descriptive assessment involves direct, non-manipulated observation of naturally occurring events across the day, matching the stated goal.",
      },
      {
        text: "A brief analog functional analysis conducted in a controlled therapy room.",
        correct: false,
        rationale: "Analog FA involves manipulating variables in a controlled setting, which contradicts the 'without manipulating any variables' requirement.",
      },
      {
        text: "A preference assessment using paired-stimulus presentation.",
        correct: false,
        rationale: "Preference assessments identify preferred items, not antecedent conditions associated with problem behavior across the day.",
      },
      {
        text: "A reinforcer assessment using a progressive ratio schedule.",
        correct: false,
        rationale: "This assesses reinforcer strength, not naturally occurring antecedent conditions across the school day.",
      },
    ],
  ),
  q(
    "mock2-045",
    "G",
    "A BCBA wants to teach a novel, complex response that the learner has never emitted, using successive reinforcement of closer approximations to the target. Which procedure is being described?",
    [
      {
        text: "Shaping, which reinforces successive approximations toward a terminal target behavior that does not yet exist in the learner's repertoire.",
        correct: true,
        rationale: "Shaping is specifically defined as differential reinforcement of successive approximations to build a novel response.",
      },
      {
        text: "Chaining, which links together already-existing component responses into a sequence.",
        correct: false,
        rationale: "Chaining assumes component skills already exist and links them; shaping builds a genuinely novel response through approximations.",
      },
      {
        text: "Prompting, which provides additional antecedent stimuli to evoke an existing response.",
        correct: false,
        rationale: "Prompting relies on an already-available response being evoked by added cues, not building a new response via approximations.",
      },
      {
        text: "Modeling, which demonstrates the entire target behavior for imitation.",
        correct: false,
        rationale: "Modeling presents a complete demonstration for imitation, not gradual reinforcement of increasingly close approximations.",
      },
    ],
  ),
  q(
    "mock2-046",
    "H",
    "A learner masters a new skill only in the therapy room with the original trainer and fails to perform the skill with new people in new settings. Which programming strategy is MOST appropriate to address this?",
    [
      {
        text: "Program for generalization by training with multiple exemplars of trainers, settings, and materials, and by fading artificial training-only cues.",
        correct: true,
        rationale: "Generalization requires deliberate programming, such as multiple exemplar training across relevant stimulus and response dimensions.",
      },
      {
        text: "Continue training exclusively in the original room with the original trainer indefinitely.",
        correct: false,
        rationale: "Continuing the same narrow conditions does not promote generalization and may reinforce a lack thereof.",
      },
      {
        text: "Conclude the skill is not truly acquired and discontinue teaching it.",
        correct: false,
        rationale: "Failure to generalize does not mean the skill was never acquired; it indicates a need for generalization programming, not discontinuation.",
      },
      {
        text: "Assume generalization will occur automatically over time without further programming.",
        correct: false,
        rationale: "Generalization is not assumed to occur automatically; it typically requires deliberate programming strategies.",
      },
    ],
  ),
  q(
    "mock2-047",
    "G",
    "A BCBA implements extinction for attention-maintained problem behavior by having caregivers withhold all attention contingent on the behavior. Shortly after starting, the behavior temporarily increases in frequency and intensity. Which additional step is MOST important BEFORE continuing?",
    [
      {
        text: "Ensure a safety plan and consistent implementation across all caregivers, and pair extinction with reinforcement of an appropriate alternative response to reduce risk during the extinction burst.",
        correct: true,
        rationale: "Extinction bursts are expected and manageable when combined with safety planning, consistency, and differential reinforcement of alternatives.",
      },
      {
        text: "Immediately abandon extinction at the first sign of any increase.",
        correct: false,
        rationale: "Extinction bursts are an expected, typically temporary phenomenon; abandoning the procedure prematurely can reinforce inconsistency and worsen outcomes long-term.",
      },
      {
        text: "Increase the intensity of attention delivered contingent on the behavior to calm the learner.",
        correct: false,
        rationale: "Delivering attention contingent on the behavior would reinforce it, directly undermining the extinction procedure.",
      },
      {
        text: "Switch immediately to a punishment-based procedure without further planning.",
        correct: false,
        rationale: "Jumping to punishment without addressing safety and consistency first is not the most defensible next step.",
      },
    ],
  ),
  q(
    "mock2-048",
    "G",
    "A BCBA is fading physical prompts for a hand-washing task and wants to minimize prompt dependency while maintaining high accuracy. Which prompting fading strategy is MOST consistent with this goal?",
    [
      {
        text: "A most-to-least prompting hierarchy that systematically reduces prompt intrusiveness across sessions as independent responding increases.",
        correct: true,
        rationale: "Most-to-least prompting systematically fades prompt intrusiveness while maintaining accuracy, directly addressing prompt dependency concerns.",
      },
      {
        text: "Providing the same full physical prompt on every trial indefinitely.",
        correct: false,
        rationale: "Unchanging full prompting increases, rather than reduces, prompt dependency.",
      },
      {
        text: "Removing all prompts abruptly after a single correct independent response.",
        correct: false,
        rationale: "Abrupt removal after minimal evidence of independence risks errors and does not reflect a systematic fading strategy.",
      },
      {
        text: "Randomly alternating prompt levels with no data-based decision rule.",
        correct: false,
        rationale: "Unsystematic, non-data-based prompt changes are not a defensible fading strategy.",
      },
    ],
  ),
  q(
    "mock2-049",
    "H",
    "A token economy has been in place for six months with the same backup reinforcer menu, and staff report tokens have lost their effectiveness. Which explanation is MOST likely and what should the BCBA do?",
    [
      {
        text: "The backup reinforcers may have lost value (satiation) or tokens' conditioned reinforcing value has weakened; reassess and rotate backup reinforcers and verify the exchange schedule/ratio remains appropriate.",
        correct: true,
        rationale: "Static backup reinforcer menus over long periods commonly lead to satiation, requiring reassessment of reinforcer value and exchange parameters.",
      },
      {
        text: "Token economies inherently stop working after exactly six months for all learners.",
        correct: false,
        rationale: "There is no fixed universal timeline for token economy failure; effectiveness depends on maintained reinforcer value and system integrity.",
      },
      {
        text: "The learner has aged out of any token-based system permanently.",
        correct: false,
        rationale: "Age is not established as the relevant variable here; the described issue points to reinforcer value/satiation.",
      },
      {
        text: "Tokens should be replaced immediately with punishment-based procedures.",
        correct: false,
        rationale: "Switching to punishment does not address the underlying reinforcer-value problem and is not the most defensible next step.",
      },
    ],
  ),
  q(
    "mock2-050",
    "H",
    "After a learner reaches mastery criterion on a skill, the BCBA discontinues all programmed reinforcement and data collection immediately, assuming the skill will be maintained indefinitely. Which practice is MOST significantly missing?",
    [
      {
        text: "Planned maintenance and periodic follow-up probes (with thinned, naturalistic reinforcement as needed) to verify the skill persists over time without ongoing intensive support.",
        correct: true,
        rationale: "Maintenance programming, including periodic probes and thinned reinforcement, is necessary to confirm durable skill retention rather than assuming it without verification.",
      },
      {
        text: "Immediate discontinuation of all data collection is standard best practice after mastery.",
        correct: false,
        rationale: "Discontinuing all monitoring after mastery, without maintenance probes, is not best practice and risks unnoticed skill loss.",
      },
      {
        text: "Reinforcement should always remain at the exact acquisition-phase density forever.",
        correct: false,
        rationale: "Maintaining acquisition-level reinforcement density indefinitely is unnecessary and impractical; thinning toward naturalistic schedules is appropriate.",
      },
      {
        text: "Mastery criterion alone guarantees generalization and maintenance without further programming.",
        correct: false,
        rationale: "Mastery on acquisition criteria does not by itself guarantee maintenance or generalization; both require deliberate follow-up.",
      },
    ],
  ),
  q(
    "mock2-051",
    "H",
    "Two interventions have comparable evidence for the client's function: option 1 uses response blocking + tangible removal, option 2 uses noncontingent reinforcement + functional communication training. MOST consistent choice?",
    [
      {
        text: "Select option 2 because, when effectiveness is comparable, the intervention with the least-restrictive procedures and greatest constructional emphasis is preferred.",
        correct: true,
        rationale: "Domain H hierarchy prioritizes least-restrictive effective options; constructional/reinforcement-based interventions come before restriction when effectiveness is equal.",
      },
      {
        text: "Select option 1 because response blocking guarantees immediate suppression.",
        correct: false,
        rationale: "Immediate suppression is not the sole criterion; restrictiveness and long-term repertoire growth also matter.",
      },
      {
        text: "Toss a coin because the evidence base is equivalent.",
        correct: false,
        rationale: "Choice by chance ignores restrictiveness, constructional emphasis, and stakeholder input.",
      },
      {
        text: "Combine both regardless of function overlap because more is better.",
        correct: false,
        rationale: "Combining interventions absent function-based rationale invites confounds and unnecessary restriction.",
      },
    ],
  ),
  q(
    "mock2-052",
    "H",
    "A learner has a history of aversive experiences with edible reinforcers due to feeding challenges. MOST appropriate intervention design step?",
    [
      {
        text: "Probe non-edible reinforcers empirically and design the reinforcement system around what functions as reinforcement for this learner given history and context.",
        correct: true,
        rationale: "Individualization to learner history and empirical reinforcer identification are Domain H requirements—not defaulting to categories from a manual.",
      },
      {
        text: "Use edibles anyway because the manual specifies them.",
        correct: false,
        rationale: "Manuals cannot override individual reinforcer history and safety considerations.",
      },
      {
        text: "Use only social praise because non-tangible reinforcers are universally safer.",
        correct: false,
        rationale: "Universal defaults ignore individual reinforcer profiles; social praise may not function as reinforcement for this learner.",
      },
      {
        text: "Have the caregiver pick reinforcers and use whatever they name.",
        correct: false,
        rationale: "Caregiver input informs but does not replace empirical reinforcer identification with the learner.",
      },
    ],
  ),
  q(
    "mock2-053",
    "H",
    "A family cannot access the recommended 25 hours/week; they can commit to 12 hours with high fidelity in the natural environment. MOST defensible implementation adjustment?",
    [
      {
        text: "Right-size dosage/modality/environment together—deliver an intervention that fits the accessible hours, prioritizes generalization in the natural setting, and monitors outcomes to inform any dosage change.",
        correct: true,
        rationale: "Domain H requires matching dosage, modality, and environment to context while monitoring outcomes and adjusting as data indicate.",
      },
      {
        text: "Insist on 25 hours regardless of family capacity because that's the published range.",
        correct: false,
        rationale: "Rigid dosage insistence ignores contextual fit, access, and social validity.",
      },
      {
        text: "Reduce hours but keep every clinic-style component identical because fidelity matters.",
        correct: false,
        rationale: "Clinic-style structure may not fit the natural setting; components must be adapted, not merely proportionally shrunk.",
      },
      {
        text: "Discharge the case because the dosage recommendation cannot be met.",
        correct: false,
        rationale: "Discharging for reduced accessible dosage abandons the client without adaptation attempts.",
      },
    ],
  ),
  q(
    "mock2-054",
    "H",
    "A learner receives OT and speech services concurrently with ABA; goals overlap and occasionally conflict. MOST defensible coordination step?",
    [
      {
        text: "Establish regular interdisciplinary meetings, harmonize measurable objectives, and document a coordinated plan that respects each discipline's scope and the family's priorities.",
        correct: true,
        rationale: "Domain H care coordination requires interdisciplinary collaboration with harmonized measurable goals and scope-respecting documentation.",
      },
      {
        text: "Assume ABA leads and require OT/speech to align to your plan.",
        correct: false,
        rationale: "ABA does not automatically lead; each discipline retains its scope and expertise.",
      },
      {
        text: "Ignore the other disciplines because ABA methodology is distinct.",
        correct: false,
        rationale: "Ignoring collaborators risks contradictory contingencies for the learner.",
      },
      {
        text: "Wait for parents to resolve inter-team conflicts themselves.",
        correct: false,
        rationale: "Care coordination is a professional responsibility, not the family's alone.",
      },
    ],
  ),
  q(
    "mock2-055",
    "H",
    "The trend on the target dependent variable has been flat for four weeks despite good treatment integrity. MOST defensible response?",
    [
      {
        text: "Review the plan with data—check function match, MO/EO conditions, reinforcer magnitude, and schedule—and revise the intervention rather than continue unchanged.",
        correct: true,
        rationale: "Domain H requires monitoring and revising based on data; sustained flat trends despite integrity warrant analytic review, not persistence.",
      },
      {
        text: "Continue because integrity is high; performance will catch up.",
        correct: false,
        rationale: "Integrity alone cannot rescue an intervention with a hypothesis or reinforcer mismatch.",
      },
      {
        text: "Blame the learner's motivation and increase task difficulty.",
        correct: false,
        rationale: "Learner-blame framing skips the analytic responsibility to hypothesize and revise.",
      },
      {
        text: "Discharge because the plan is not working.",
        correct: false,
        rationale: "Premature discharge before analytic revision fails the client and abdicates programming responsibility.",
      },
    ],
  ),
  q(
    "mock2-056",
    "I",
    "A supervisor discovers their trainee inflated hours on the last accrual form. MOST consistent response?",
    [
      {
        text: "Refuse to certify the inflated hours; document the discrepancy; discuss corrective action with the trainee; determine whether the pattern rises to reportable misconduct.",
        correct: true,
        rationale: "Domain I supervision integrity and BACB obligations require refusal to certify inaccurate hours, documented corrective action, and consideration of reporting duties.",
      },
      {
        text: "Certify hours quietly to preserve the supervisory relationship.",
        correct: false,
        rationale: "Preserving the relationship at the cost of accurate certification is itself misconduct.",
      },
      {
        text: "Ignore the discrepancy since the trainee otherwise performs well.",
        correct: false,
        rationale: "Passive endorsement of documented inaccuracy compounds risk to the trainee and the public.",
      },
      {
        text: "Retaliate by ending supervision without corrective conversation.",
        correct: false,
        rationale: "Abrupt termination without corrective conversation violates supervisor responsibilities and can constitute retaliation.",
      },
    ],
  ),
  q(
    "mock2-057",
    "I",
    "A supervisor tells a trainee, 'You need to be more professional,' without specific criteria. MOST defensible restructuring of the feedback?",
    [
      {
        text: "Tie feedback to observable, measurable behaviors—punctuality, on-task session time, documentation completion—with specific examples and next-step actions.",
        correct: true,
        rationale: "Domain I feedback must be tied to observable, measurable performance criteria, not global adjectives that cannot be operationalized or shaped.",
      },
      {
        text: "Keep the general framing since trainees benefit from broad guidance.",
        correct: false,
        rationale: "Broad guidance without operational criteria does not shape behavior and creates ambiguity that harms the trainee.",
      },
      {
        text: "Add graded ratings on a global 'professionalism' scale each month.",
        correct: false,
        rationale: "Global rating scales lack behavioral specificity and do not fix the underlying operational gap.",
      },
      {
        text: "Have peers evaluate the trainee's professionalism collectively.",
        correct: false,
        rationale: "Peer averaging without observable criteria does not resolve the specificity problem and can introduce bias.",
      },
    ],
  ),
  q(
    "mock2-058",
    "I",
    "A trainee invites their supervisor to their wedding and offers to become close friends after supervision ends. MOST defensible response?",
    [
      {
        text: "Decline dual roles while supervision is active, discuss the boundary and its rationale, document the conversation, and reassess only after the supervisory relationship has ended and sufficient time has passed.",
        correct: true,
        rationale: "Domain I / Domain E boundary management prohibits dual relationships that create conflicts during supervision; renegotiation waits until after termination plus a reasonable interval.",
      },
      {
        text: "Accept because friendship deepens learning.",
        correct: false,
        rationale: "Friendship during active supervision compromises objectivity and evaluative fairness.",
      },
      {
        text: "Accept but avoid discussing cases at social events.",
        correct: false,
        rationale: "Compartmentalized social contact still constitutes a dual role during active supervision.",
      },
      {
        text: "Terminate supervision immediately to accept the friendship.",
        correct: false,
        rationale: "Ending supervision to convert to friendship exploits the trainee-supervisor power differential and disrupts continuity.",
      },
    ],
  ),
  q(
    "mock2-059",
    "I",
    "A supervisor learns their supervisee's employer is billing hours the supervisee did not deliver. MOST consistent supervisor response?",
    [
      {
        text: "Document facts, coach the supervisee on lawful reporting pathways, use internal channels first when safe, and pursue external reporting to the BACB or funder if internal escalation fails.",
        correct: true,
        rationale: "Domain I / Domain E escalation follows a documented internal-first pathway when safe, escalating externally when internal channels fail or safety is at risk.",
      },
      {
        text: "Tell the supervisee to keep quiet to protect the trainee's employment.",
        correct: false,
        rationale: "Silencing the supervisee compounds harm and violates ethics-reporting obligations.",
      },
      {
        text: "Report externally immediately without documenting facts or considering safe internal escalation.",
        correct: false,
        rationale: "Immediate external reporting without documentation or safe internal escalation is not the standard path when internal remedies are available and safe.",
      },
      {
        text: "Blame the supervisee for allowing the situation to occur.",
        correct: false,
        rationale: "Blaming the trainee reframes institutional misconduct as trainee responsibility, which is inaccurate and coercive.",
      },
    ],
  ),
  q(
    "mock2-060",
    "I",
    "A supervisor has never evaluated their own supervision effectiveness across supervisees. MOST defensible ongoing practice?",
    [
      {
        text: "Solicit anonymous supervisee feedback, review supervisee performance outcomes across cases, and revise supervision practices based on data—not solely on personal impression.",
        correct: true,
        rationale: "Domain I includes ongoing self-evaluation using supervisee feedback and outcome data; supervision itself is behavior subject to measurement and revision.",
      },
      {
        text: "Rely on years of experience because the supervisor knows their strengths.",
        correct: false,
        rationale: "Experience without outcome data does not certify supervision quality and invites drift.",
      },
      {
        text: "Only evaluate when a supervisee complains formally.",
        correct: false,
        rationale: "Complaint-only evaluation is reactive and misses trends across supervisees.",
      },
      {
        text: "Assume supervisee licensure success reflects supervisor quality.",
        correct: false,
        rationale: "Licensure exam outcomes reflect many variables beyond supervisor practice; they are not a valid single indicator of supervisor quality.",
      },
    ],
  ),
  q(
    "mock2-061",
    "H",
    "An agency wants to add a new intervention with enthusiastic anecdotes but limited peer-reviewed evidence. MOST defensible next step?",
    [
      {
        text: "Evaluate the evidence base rigorously, pilot with single-case design and predefined criteria, and only adopt broadly if replicated data support effectiveness for the target population.",
        correct: true,
        rationale: "Domain H allows piloting under single-case designs with predefined criteria; broader adoption follows replicated data.",
      },
      {
        text: "Adopt because enthusiasm suggests it works and delay costs clients.",
        correct: false,
        rationale: "Enthusiasm is a confound, not evidence; adopting on anecdote violates EBP.",
      },
      {
        text: "Reject entirely because it lacks RCT-level evidence.",
        correct: false,
        rationale: "Wholesale rejection of anything short of RCT-level evidence is stricter than the EBP standard requires and ignores graded evidence.",
      },
      {
        text: "Adopt it and treat every case as an informal test without design controls.",
        correct: false,
        rationale: "Uncontrolled adoption cannot yield interpretable data and risks harm.",
      },
    ],
  ),
  q(
    "mock2-062",
    "H",
    "A caregiver requests an intervention widely marketed on social media but with no credible evidence base and documented harms. MOST defensible response?",
    [
      {
        text: "Explain in accessible language why the intervention lacks evidence and has documented harms, propose evidence-supported alternatives that address the same goal, and document the conversation and family decision.",
        correct: true,
        rationale: "Domain H requires recommending evidence-supported alternatives with accessible rationale, respecting autonomy while documenting shared decision-making.",
      },
      {
        text: "Deliver it anyway because caregiver autonomy overrides evidence.",
        correct: false,
        rationale: "Autonomy does not obligate the analyst to deliver known-harmful interventions.",
      },
      {
        text: "Refuse further services if the caregiver won't drop the request.",
        correct: false,
        rationale: "Refusing all services without alternatives abandons the client and skips the collaborative step.",
      },
      {
        text: "Publicly criticize the caregiver's request to deter others.",
        correct: false,
        rationale: "Public criticism violates confidentiality and dignity even when the underlying request is misguided.",
      },
    ],
  ),
  q(
    "mock2-063",
    "H",
    "A team's default plan for every learner is discrete-trial teaching. MOST defensible programming diversification?",
    [
      {
        text: "Match the teaching modality to the target skill and learner—naturalistic teaching, incidental teaching, and DTT each fit different targets—and evaluate outcomes across modalities.",
        correct: true,
        rationale: "Domain H requires selecting modality by best fit to target, learner, and context with data-driven evaluation.",
      },
      {
        text: "Continue DTT-only because it produces reliable data.",
        correct: false,
        rationale: "Modality monoculture ignores skill-domain fit and generalization requirements.",
      },
      {
        text: "Randomly rotate teaching methods to add variety.",
        correct: false,
        rationale: "Random rotation undermines interpretability and fidelity.",
      },
      {
        text: "Switch entirely to naturalistic teaching to replace DTT.",
        correct: false,
        rationale: "Wholesale replacement swaps one monoculture for another instead of matching modality to target.",
      },
    ],
  ),
  q(
    "mock2-064",
    "H",
    "A plan has produced no improvement across eight weeks despite two revisions with documented adequate fidelity. MOST defensible next step?",
    [
      {
        text: "Meet the pre-established discontinuation criteria, revisit the assessment (including function and reinforcer), and select a different function-matched intervention rather than continue indefinitely.",
        correct: true,
        rationale: "Domain H requires pre-established discontinuation criteria and reassessment when a plan fails despite fidelity; another function-matched intervention is the next step.",
      },
      {
        text: "Continue because behavior change is slow sometimes.",
        correct: false,
        rationale: "'Wait longer' without a pre-defined threshold is data-averse persistence.",
      },
      {
        text: "Add a punishment component to accelerate change.",
        correct: false,
        rationale: "Adding punishment before reassessment reverses the least-restrictive hierarchy.",
      },
      {
        text: "Discontinue services entirely and refer out.",
        correct: false,
        rationale: "Reassessment and alternative selection typically precede discharge or referral.",
      },
    ],
  ),
  q(
    "mock2-065",
    "H",
    "The parent and the school disagree about intervention priorities: parent wants social-language goals, school wants classroom-compliance goals. MOST defensible next step?",
    [
      {
        text: "Facilitate a joint meeting, review data across settings, identify common ground, and prioritize goals that are function-supported and socially valid to both stakeholders while preserving assent from the learner.",
        correct: true,
        rationale: "Domain H stakeholder coordination requires transparent facilitation, data-informed goal-setting, and social-validity consideration across parties.",
      },
      {
        text: "Side with whoever pays for services.",
        correct: false,
        rationale: "Funder-alignment ignores client-centered ethics of goal-setting.",
      },
      {
        text: "Choose the target with stronger baseline data regardless of stakeholder input.",
        correct: false,
        rationale: "Baseline strength is one input; stakeholder collaboration and social validity are not skippable.",
      },
      {
        text: "Refuse to intervene until stakeholders agree independently.",
        correct: false,
        rationale: "Passive refusal abandons the analyst's coordination responsibility.",
      },
    ],
  ),
  q(
    "mock2-066",
    "I",
    "A newly certified BCBA—your former supervisee—is now supervising others for the first time. MOST defensible support to offer?",
    [
      {
        text: "Provide supervisor-of-supervisors mentorship, share resources on competency-based supervision (e.g., BST, feedback structure), and periodically review the new supervisor's supervisees' outcome data.",
        correct: true,
        rationale: "Domain I includes fostering supervisor competency in others; competency-based mentorship with outcome review supports new supervisors.",
      },
      {
        text: "Assume they'll figure it out because they saw you supervise.",
        correct: false,
        rationale: "Observational transfer alone is insufficient for supervision competency; supervising is a distinct repertoire.",
      },
      {
        text: "Take over their supervisees if any trainee struggles.",
        correct: false,
        rationale: "Taking over undermines the new supervisor's development and creates dependency.",
      },
      {
        text: "Prohibit them from supervising until they have five years of practice.",
        correct: false,
        rationale: "Arbitrary experience gates beyond BACB requirements are not the standard and delay development.",
      },
    ],
  ),
  q(
    "mock2-067",
    "I",
    "A supervisor logs 3% of the trainee's independent field experience hours as supervised—below the BACB minimum percentage. MOST defensible response?",
    [
      {
        text: "Increase supervision to meet BACB minimum percentage and frequency requirements immediately, document the correction, and notify the trainee that affected hours may need review.",
        correct: true,
        rationale: "Domain I compliance with BACB minimum supervision percentages and frequency is non-negotiable; corrections must be documented and communicated.",
      },
      {
        text: "Continue at 3% because the trainee performs well.",
        correct: false,
        rationale: "Trainee competence does not override structural minimums.",
      },
      {
        text: "Retroactively log additional hours to reach the minimum on paper.",
        correct: false,
        rationale: "Retroactive false logging is documentation fraud with enforcement consequences.",
      },
      {
        text: "Terminate the trainee's experience period.",
        correct: false,
        rationale: "Terminating for supervisor-side failure punishes the trainee inappropriately.",
      },
    ],
  ),
  q(
    "mock2-068",
    "I",
    "A new supervisor–supervisee pair begins without a written contract of goals, expectations, feedback frequency, or evaluation criteria. MOST defensible next step?",
    [
      {
        text: "Establish a written supervision contract covering goals, frequency, evaluation criteria, feedback methods, ethical-concerns pathway, and termination conditions—signed by both parties before continuing.",
        correct: true,
        rationale: "Domain I best practice and BACB requirements include a written supervision contract with observable expectations and pathways for concerns.",
      },
      {
        text: "Verbal agreement is sufficient because supervision is relational.",
        correct: false,
        rationale: "Verbal agreements produce ambiguity that harms supervision quality and accountability.",
      },
      {
        text: "Only sign a contract if the trainee requests one.",
        correct: false,
        rationale: "Contract initiation is a supervisor responsibility, not a trainee opt-in.",
      },
      {
        text: "Use the previous trainee's contract without modification.",
        correct: false,
        rationale: "Contracts must be individualized to the supervisee, setting, and current BACB requirements.",
      },
    ],
  ),
  q(
    "mock2-069",
    "I",
    "At the end of the experience period, a trainee has not met competency criteria on multiple task-list items. MOST defensible next step?",
    [
      {
        text: "Do not verify the experience period; document the specific gaps; discuss a remediation plan or extension; provide clear next steps consistent with BACB requirements.",
        correct: true,
        rationale: "Domain I requires competency-based verification; gaps require documentation, remediation, and honest communication with the trainee.",
      },
      {
        text: "Verify anyway because the trainee has completed the required hours.",
        correct: false,
        rationale: "Verification without competency is inaccurate certification and violates BACB standards.",
      },
      {
        text: "Verify with a private note that competency wasn't fully demonstrated.",
        correct: false,
        rationale: "Marginal caveats do not cure a false verification and confuse downstream reviewers.",
      },
      {
        text: "Refuse to explain the decision to protect the supervisor from accusations.",
        correct: false,
        rationale: "Withholding explanation prevents remediation and is unfair to the trainee.",
      },
    ],
  ),
  q(
    "mock2-070",
    "I",
    "A BCBA supervises multiple trainees but has never had their own supervision practices peer-reviewed. MOST defensible ongoing practice?",
    [
      {
        text: "Seek peer consultation or supervision-of-supervision periodically, use structured self-audit tools against BACB requirements, and revise practices based on external feedback.",
        correct: true,
        rationale: "Domain I includes ongoing supervisor development through peer consultation, structured audits, and revision—supervision is a repertoire subject to shaping.",
      },
      {
        text: "Rely on trainees' certification exam pass rates as evidence of quality.",
        correct: false,
        rationale: "Exam pass rate reflects many variables beyond supervision quality and is not a valid single indicator.",
      },
      {
        text: "Assume certified BCBAs no longer need external supervision.",
        correct: false,
        rationale: "Certification does not eliminate the need for peer review of practice, especially supervision practice.",
      },
      {
        text: "Only seek external review if a complaint is filed.",
        correct: false,
        rationale: "Complaint-only review is reactive and misses ongoing quality issues.",
      },
    ],
  ),
  q(
    "mock2-071",
    "G",
    "A learner has been reinforced on FR1 for a target response. The team abruptly thins to FR10 in one session and response rates collapse the next day. MOST likely explanation and best next step?",
    [
      {
        text: "Ratio strain from abrupt thinning; return to a leaner but contactable schedule (e.g., FR2–FR3), then thin gradually across sessions while monitoring rate maintenance.",
        correct: true,
        rationale: "Ratio strain is a classic effect of abrupt schedule thinning; gradual thinning with maintained contact is the standard remedy in Domain G schedule programming.",
      },
      {
        text: "The response was never truly acquired; return to baseline and re-teach from scratch.",
        correct: false,
        rationale: "Fluent FR1 responding indicates acquisition; the collapse followed the schedule jump, not an acquisition failure.",
      },
      {
        text: "The reinforcer has lost value; switch reinforcers permanently before probing again.",
        correct: false,
        rationale: "The variable changed was the ratio, not the reinforcer; switching reinforcers is premature without a probe.",
      },
      {
        text: "Continue FR10; the learner will adapt if the schedule holds long enough.",
        correct: false,
        rationale: "Holding a strained ratio typically produces extinction-like patterns rather than shaping tolerance.",
      },
    ],
  ),
  q(
    "mock2-072",
    "G",
    "A BCBA teaches a multi-step morning hygiene routine to a learner who has never completed any step independently. The team plans to teach the terminal step first to independence while the trainer performs earlier steps, then adds earlier steps in reverse order. Which procedure is being described?",
    [
      {
        text: "Backward chaining—the terminal step is taught to independence first (with prior steps performed by the trainer), then earlier steps are added in reverse order so the natural reinforcer follows completion of the growing chain.",
        correct: true,
        rationale: "Backward chaining places acquisition contact with the terminal reinforcer from the outset, which supports rapid engagement with the full chain over time.",
      },
      {
        text: "Forward chaining—the first step is taught first, then subsequent steps are added in order.",
        correct: false,
        rationale: "Forward chaining teaches steps in the opposite direction and delays contact with the terminal reinforcer.",
      },
      {
        text: "Total-task presentation—every step is prompted through on every trial.",
        correct: false,
        rationale: "Total-task presentation prompts all steps across every trial rather than teaching one step to independence at a time.",
      },
      {
        text: "Task analysis alone—no teaching sequence is specified until the analysis is complete.",
        correct: false,
        rationale: "Task analysis is a preparatory step (identifying the chain components), not a teaching sequence.",
      },
    ],
  ),
  q(
    "mock2-073",
    "G",
    "A learner engages in high-rate hand-flapping maintained by automatic reinforcement. The team wants to reinforce a topographically incompatible behavior (holding a two-handed object) that cannot physically co-occur with hand-flapping. Which differential-reinforcement variant is MOST specifically described?",
    [
      {
        text: "DRI (differential reinforcement of incompatible behavior)—reinforcement of a response that cannot physically co-occur with the target behavior.",
        correct: true,
        rationale: "DRI specifically requires an alternative response that is topographically incompatible with the target, exactly as described in the vignette.",
      },
      {
        text: "DRO (differential reinforcement of other behavior)—reinforcement contingent on the absence of the target behavior for a specified interval.",
        correct: false,
        rationale: "DRO is time-based omission of the target; the alternative response is not specified in the DRO contingency.",
      },
      {
        text: "DRA (differential reinforcement of alternative behavior)—reinforcement of any alternative response, whether or not it is topographically incompatible.",
        correct: false,
        rationale: "DRA is the broader category; DRI is the more specific variant when the alternative is physically incompatible with the target.",
      },
      {
        text: "DRL (differential reinforcement of low rates)—reinforcement of responses spaced apart in time or reduced in overall frequency.",
        correct: false,
        rationale: "DRL reduces rate of the target response; it does not reinforce an alternative response.",
      },
    ],
  ),
  q(
    "mock2-074",
    "G",
    "A learner's rate of non-compliance is highest when the first demand of the day is delivered cold. The team wants to reduce non-compliance without adding aversive consequences. Which antecedent-based procedure is MOST appropriate to try first?",
    [
      {
        text: "High-probability (high-p) request sequence—deliver two to three highly likely requests immediately before the target (low-p) request to increase compliance through behavioral momentum.",
        correct: true,
        rationale: "The high-p request sequence uses behavioral momentum as an antecedent-based, non-aversive strategy to increase the probability of the low-p response.",
      },
      {
        text: "Delay reinforcement for all responses to build tolerance to demand.",
        correct: false,
        rationale: "Delaying reinforcement is not an antecedent intervention and typically worsens compliance in this context.",
      },
      {
        text: "Introduce contingent restraint after any refusal to suppress future non-compliance.",
        correct: false,
        rationale: "Contingent restraint is a highly restrictive consequence-based procedure, not an antecedent intervention, and violates the stipulated non-aversive constraint.",
      },
      {
        text: "Wait until non-compliance appears and then deliver escape extinction.",
        correct: false,
        rationale: "Escape extinction is a consequence-based procedure, not an antecedent intervention, and the vignette explicitly requested a non-aversive antecedent approach.",
      },
    ],
  ),
];
