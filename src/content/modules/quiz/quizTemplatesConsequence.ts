/** Compact quiz stems for Cooper chapters 12–15 (mod33–mod36). */
import { cq, type CompactQuiz } from "./compactQuiz";

export const MOD33_T: CompactQuiz[] = [
  cq(
    "Learner screams; adult removes demand. Screaming increases next week—MOST precise label?",
    "Escape via socially mediated negative reinforcement when aversive removal is contingent and rate rises.",
    ["Positive reinforcement because adult acted", "Positive punishment because demand stopped", "Extinction because demand was removed"],
    [
      "Adult mediation plus rate increase fits NR—not generic adult action.",
      "Punishment requires rate decrease—not mere aversive offset.",
      "Extinction withholds reinforcer; here removal followed responding.",
      "Verify MO and temporal relation before finalizing.",
    ],
  ),
  cq(
    "Walking long route avoids bell that never rang—MOST accurate NR subtype?",
    "Avoidance—responding prevents aversive contact before it begins.",
    ["Escape from ongoing bell", "Positive reinforcement for walking", "Automatic punishment"],
    [
      "Avoidance prevents; escape terminates ongoing events.",
      "Walking increased—NR not PR unless added stimulus reinforced.",
      "No added punisher defined by rate decrease here.",
      "Temporal relation to aversive is the hinge.",
    ],
  ),
  cq(
    "Which statement BEST distinguishes negative reinforcement from positive punishment?",
    "NR increases future responding; positive punishment decreases it—verify with data.",
    ["NR always involves pain; punishment never does", "NR removes stimuli; punishment always adds stimuli", "They are identical when aversives appear"],
    [
      "Aversive presence alone does not define process—future rate does.",
      "Positive punishment adds stimuli; NR removes/reduces/postpones.",
      "Identical-process claim ignores functional definition.",
      "Board items test effect on future rate.",
    ],
  ),
  cq(
    "Break contingent on task completion increases work rate—MOST likely maintaining process?",
    "Negative reinforcement via escape/postponement from nonpreferred demands when MO supports break value.",
    ["Extinction of task behavior", "Positive punishment of breaks", "Respondent elicitation"],
    [
      "Postponement of aversive demand can function as NR.",
      "Extinction would decrease, not increase, work rate.",
      "Break delivery is not punishment unless rate falls.",
      "Operant contingency—not respondent reflex.",
    ],
  ),
  cq(
    "Automatic NR example MOST consistent with Cooper:",
    "Behavior directly terminates uncomfortable internal stimulus without social mediation.",
    ["Teacher removes homework after hand raise", "Peer praise after correct answer", "Extinction after ignoring"],
    [
      "Automatic NR bypasses social mediator.",
      "Teacher-mediated removal is social NR.",
      "Praise added is positive reinforcement territory.",
      "Extinction is not contingent removal increasing behavior.",
    ],
  ),
];

export const MOD34_T: CompactQuiz[] = [
  cq(
    "Steady high rate, brief pause after each reinforcer, FR schedule—pause length tracks ratio size. This pattern fits:",
    "Fixed ratio post-reinforcement pause—not interval scalloping.",
    ["Fixed interval scalloping", "Variable interval steady moderate rate", "Extinction burst"],
    [
      "FR pauses follow reinforcement delivery.",
      "FI scallops toward interval end.",
      "VI shows moderate steady rate without FR pause signature.",
      "Extinction decreases reinforced responding.",
    ],
  ),
  cq(
    "Slot-machine-like responding with minimal pausing and high resistance to extinction suggests:",
    "Variable ratio schedule maintaining behavior.",
    ["Fixed interval 1", "Continuous reinforcement only", "Fixed ratio 1 exclusively"],
    [
      "VR produces high steady rates and resistance.",
      "FI produces scalloping—not slot-machine steadiness.",
      "CRF shows different pause/resistance profile.",
      "FR1 pause pattern differs from VR.",
    ],
  ),
  cq(
    "Two reinforcers available; relative response rate approximates relative reinforcement rate. Cooper cites:",
    "Matching law under concurrent schedules.",
    ["Respondent conditioning", "Stimulus equivalence", "Automatic punishment"],
    [
      "Matching describes concurrent choice.",
      "Respondent paradigm differs operant choice.",
      "Equivalence is relational training—not schedule choice.",
      "Punishment decreases behavior.",
    ],
  ),
  cq(
    "Thinning from CRF to FR2 without data on pauses risks:",
    "Misinterpreting post-reinforcement pauses as noncompliance or punishment effects.",
    ["Automatic extinction", "MO abolishment permanently", "IOA inflation"],
    [
      "Schedule change produces predictable pause patterns.",
      "MO may shift but pauses are schedule-controlled.",
      "IOA unrelated to schedule thinning logic.",
      "Graph pause commentary belongs in fidelity notes.",
    ],
  ),
  cq(
    "Scalloped responding accelerating near end of timed period indicates:",
    "Fixed interval (or FI-like) schedule control.",
    ["Variable ratio", "Fixed ratio 1", "Differential reinforcement of low rates only"],
    [
      "FI scallop is classic board discrimination.",
      "VR lacks interval-bound scallop.",
      "FR1 shows post-reinforcement pause not scallop.",
      "DRL targets low rate—not scallop acceleration.",
    ],
  ),
];

export const MOD35_T: CompactQuiz[] = [
  cq(
    "Contingent reprimand; target behavior decreases over sessions—if verified, MOST precise process:",
    "Positive punishment (added stimulus decreases future rate).",
    ["Negative reinforcement", "Negative punishment", "Extinction"],
    [
      "Stimulus added contingent on behavior with rate decrease.",
      "NR increases behavior via aversive removal.",
      "Negative punishment removes reinforcers.",
      "Extinction withholds maintaining reinforcer.",
    ],
  ),
  cq(
    "Immediate stop of behavior without durable rate decrease suggests:",
    "Suppression—not sufficient evidence of positive punishment function.",
    ["Verified punishment effect", "Automatic reinforcement", "Negative reinforcement"],
    [
      "Cooper stresses future rate decrease across conditions.",
      "Punishment requires durable decrease—not momentary halt.",
      "Automatic reinforcement increases behavior.",
      "NR increases behavior.",
    ],
  ),
  cq(
    "Overcorrection procedures are classified as:",
    "Positive punishment variants requiring restitution plus extra correct behavior.",
    ["Negative punishment only", "Extinction", "Positive reinforcement"],
    [
      "Overcorrection adds work contingent on errors.",
      "Response cost removes reinforcers (negative punishment).",
      "Extinction withholds reinforcement.",
      "PR increases behavior.",
    ],
  ),
  cq(
    "Before implementing positive punishment, Cooper emphasizes:",
    "Least-restrictive alternatives and reinforcement-based strategies first.",
    ["Maximize punishment density for speed", "Skip measurement when aversive", "Replace consent with convenience"],
    [
      "Ethics and efficacy favor reinforcement-first packages.",
      "Density without data violates scientific practice.",
      "Measurement remains mandatory.",
      "Consent/assent obligations persist.",
    ],
  ),
  cq(
    "Side effects such as aggression or escape during punishment plans signal:",
    "Need to reassess contingencies and consider alternative reinforcement—not silent continuation.",
    ["Punishment succeeded automatically", "IOA unnecessary", "Graphs optional"],
    [
      "Side effects require analytic and ethical review.",
      "Success requires verified decrease on target.",
      "IOA/fidelity still mandatory.",
      "Graphs document collateral effects.",
    ],
  ),
];

export const MOD36_T: CompactQuiz[] = [
  cq(
    "Token fine after disruption; disruption decreases—tokens were reinforcing. MOST precise label:",
    "Negative punishment (response cost).",
    ["Positive punishment", "Negative reinforcement", "Extinction of all behavior"],
    [
      "Reinforcer removed contingent on response with rate decrease.",
      "Positive punishment adds aversive stimulus.",
      "NR increases behavior via aversive removal.",
      "Extinction targets specific response-reinforcer relation.",
    ],
  ),
  cq(
    "Timeout removes access to reinforcement for a period after target behavior. This is:",
    "Negative punishment when reinforcement loss is contingent and rate decreases.",
    ["Positive reinforcement", "Positive punishment adding stimuli", "Automatic NR"],
    [
      "Loss of access is reinforcer removal.",
      "PR increases behavior.",
      "Positive punishment presents stimuli.",
      "Automatic NR bypasses social mediation differently.",
    ],
  ),
  cq(
    "Punishment trap MOST often refers to:",
    "Attempted punishment increasing problem behavior via escape or other contingencies.",
    ["Successful extinction", "High IOA on graphs", "Schedule thinning success"],
    [
      "Traps involve unintended contingency maintenance.",
      "Extinction decreases target behavior.",
      "IOA is measurement quality.",
      "Thinning is reinforcement schedule concept.",
    ],
  ),
  cq(
    "Response cost differs from timeout primarily in:",
    "Specified reinforcer amount removed per response versus time-based loss of access.",
    ["Adding aversive stimuli", "Increasing future rate", "Eliminating MO documentation"],
    [
      "Both are negative punishment forms with different operations.",
      "Adding aversives is positive punishment.",
      "NP decreases future rate.",
      "MO documentation still required.",
    ],
  ),
  cq(
    "Best practice when using negative punishment includes:",
    "Reinforcing alternative behavior and monitoring MO/context for removed reinforcer.",
    ["Skip alternative reinforcement", "Hide removal procedures from caregivers", "Ignore data on replacement skills"],
    [
      "Alternative reinforcement is standard paired strategy.",
      "Transparency with caregivers is required.",
      "Replacement skill data documents comprehensive plans.",
      "MO affects reinforcer value of removed item.",
    ],
  ),
];
