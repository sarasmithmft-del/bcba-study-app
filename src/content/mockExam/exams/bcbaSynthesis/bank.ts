/**
 * Cross-chapter synthesis mock items for independent study only.
 * NOT affiliated with the BACB. Domain labels mirror the sixth-edition Test Content Outline (A–I).
 * Each vignette requires multi-domain reasoning; tcoDomain tags the PRIMARY domain tested.
 * Items synth-001 … synth-025.
 */
import type { BDSQuestion } from "@/lib/content-types";
import { mockQ } from "@/content/mockExam/mockExamQuestionFactory";

export const BCBA_SYNTHESIS_BANK: BDSQuestion[] = [
  mockQ(
    "synth-001",
    "A",
    "A clinic BCBA reviews an FBA report stating that a learner's aggression is caused by an 'oppositional defiant trait' that cannot be measured, so staff should ignore environmental data and rely on the trait label when choosing consequences. The BCBA also notes that session notes bill every episode as 'crisis intervention' regardless of duration, and that staff collect only narrative anecdotes with no operational definition. Which action BEST integrates radical behaviorism, empiricism, and ethical documentation obligations?",
    [
      {
        text: "Keep the trait explanation because it matches the DSM language used by the referring psychologist, and continue narrative notes so billing codes stay flexible.",
        correct: false,
        rationale:
          "Matching diagnostic language does not justify circular trait explanations or flexible billing that misrepresents services.",
      },
      {
        text: "Reject the trait as an explanatory fiction, require an operational definition and quantitative measurement of aggression, analyze environmental contingencies, and correct billing so documentation matches services actually delivered.",
        correct: true,
        rationale:
          "Radical behaviorism and empiricism require lawful environmental analysis and measurable definitions; accurate documentation is an ethical obligation. The trait label, anecdote-only measurement, and mismatched billing must all be corrected.",
      },
      {
        text: "Accept that private events cannot be studied, abandon measurement, and refer the case out solely because aggression involves emotion.",
        correct: false,
        rationale:
          "Radical behaviorism treats private events as behavior; abandoning measurement is inconsistent with empiricism and does not fix the documentation problem.",
      },
      {
        text: "Keep the trait explanation but add a frequency tally so the file looks more data-based, without changing billing practices.",
        correct: false,
        rationale:
          "Adding a tally without discarding the circular explanation or correcting fraudulent/inaccurate billing leaves the core conceptual and ethical failures intact.",
      },
    ],
  ),
  mockQ(
    "synth-002",
    "B",
    "During an FBA interview, caregivers report that a child's property destruction spikes after long wait times at appointments and drops when preferred toys are available. Staff currently deliver reprimands after every instance and then immediately give a preferred toy 'to calm him down.' Rate data show destruction is increasing across sessions. The BCBA must identify the MOST accurate conceptual account before revising the procedure.",
    [
      {
        text: "Reprimands are functioning as conditioned punishers, so wait time is irrelevant and the preferred toy is incidental.",
        correct: false,
        rationale:
          "Increasing rates after reprimand-plus-toy sequences make punishment unlikely; wait-time reports implicate motivating operations.",
      },
      {
        text: "Long waits function as an establishing operation for escape/access, and the preferred toy delivered contingent on destruction is likely reinforcing the problem behavior despite the reprimand.",
        correct: false,
        rationale:
          "This is close on MO and reinforcement, but the correct choice also requires recognizing that the current contingency package is maintaining destruction.",
      },
      {
        text: "Long waits likely establish the value of termination/access to preferred items, and the contingent preferred toy after destruction is the functional reinforcer maintaining the response class—so the procedure must remove that contingency and teach an alternative, not add more reprimands.",
        correct: true,
        rationale:
          "This integrates EO analysis (wait), functional reinforcement (toy after destruction), and measurement trend (increasing rates) into a coherent principle-based account that directs procedure change.",
      },
      {
        text: "The behavior is respondent because wait times elicit emotion, so operant procedures are contraindicated until feelings decrease.",
        correct: false,
        rationale:
          "Property destruction maintained by social consequences is treated as operant; reframing it as purely respondent blocks appropriate contingency analysis.",
      },
    ],
  ),
  mockQ(
    "synth-003",
    "B",
    "A school team teaches a learner to request a break using a card. Probe data show correct card use only when the BCBA is present; when the RBT runs the session alone, the learner hits to escape difficult tasks. IOA on escape attempts is high. The BCBA suspects faulty stimulus control and must choose the NEXT action that also addresses supervision and treatment integrity.",
    [
      {
        text: "Retrain the RBT with BST on delivering the break only for the card (not for hitting), run integrity checks across BCBA-absent sessions, and fade BCBA presence so the card—not the BCBA—controls the mand.",
        correct: true,
        rationale:
          "High IOA suggests measurement is reliable; the discrepancy implicates stimulus control tied to the BCBA and inconsistent RBT consequences. BST, integrity monitoring, and fading address principles, procedures, and supervision together.",
      },
      {
        text: "Abandon the break card because IOA proves the learner cannot discriminate, and switch to extinction of all escape behavior without teaching a replacement.",
        correct: false,
        rationale:
          "IOA supports data quality, not discrimination failure; removing the replacement mand without fixing consequences risks worsening escape-maintained hitting.",
      },
      {
        text: "Keep BCBA-only sessions indefinitely so correct responding continues, and document that the RBT is not competent enough for this client.",
        correct: false,
        rationale:
          "Maintaining BCBA as the controlling stimulus prevents generalization and does not remediate RBT performance through training and feedback.",
      },
      {
        text: "Change the measurement system to discontinuous recording only, because high IOA means rate data are unnecessary for escape behavior.",
        correct: false,
        rationale:
          "Measurement method is not the problem; consequence delivery and stimulus control across implementers are.",
      },
    ],
  ),
  mockQ(
    "synth-004",
    "B",
    "A BCBA implements extinction for attention-maintained screaming after caregivers agree to withhold attention. Baseline used continuous event recording; during week 1 of extinction, rate doubles and caregivers ask to 'just give in once so he settles.' A graph of sessions shows an upward spike then a slight decline. The clinical director pressures the BCBA to abandon extinction after three days. Which decision BEST reflects schedule/extinction principles, data-based interpretation, and ethical communication with stakeholders?",
    [
      {
        text: "Immediately reinstate attention for screaming to reduce caregiver distress, because any increase proves extinction was the wrong function.",
        correct: false,
        rationale:
          "A transient rate increase is consistent with an extinction burst and does not by itself falsify the functional hypothesis.",
      },
      {
        text: "Tell caregivers the burst means the plan failed, switch to continuous reinforcement of screaming for one week, then try extinction again.",
        correct: false,
        rationale:
          "Reinforcing screaming would strengthen the problem behavior and reverse progress; it is not a principled response to an extinction burst.",
      },
      {
        text: "Ignore caregiver assent concerns and continue extinction without explaining the burst or offering supports.",
        correct: false,
        rationale:
          "Ethical practice requires informed collaboration; unexplained continuation risks withdrawal of consent and unsafe implementation.",
      },
      {
        text: "Explain that a temporary burst is expected when previously reinforced behavior contacts extinction, review safety/assent plans, coach caregivers on consistent withholding of attention while reinforcing an alternative mand, and continue graphing before abandoning the procedure.",
        correct: true,
        rationale:
          "This integrates extinction-burst principles, ongoing measurement, teaching a replacement, and ethical caregiver collaboration under pressure—without prematurely abandoning a conceptually coherent plan.",
      },
    ],
  ),
  mockQ(
    "synth-005",
    "C",
    "A BCBA is designing measurement for a home program targeting elopement that lasts from 2 seconds to several minutes, occurs at low-to-moderate rates, and is the primary risk target. Caregivers also want progress on task engagement during homework. An FA suggested escape as a function. The BCBA must select measures that will support both risk monitoring and treatment evaluation without overburdening caregivers.",
    [
      {
        text: "Use permanent-product counts of completed worksheets only, because products are always more valid than direct observation of elopement.",
        correct: false,
        rationale:
          "Worksheet products do not capture elopement risk or duration; they are insufficient as the primary safety measure.",
      },
      {
        text: "Use frequency or rate of elopement plus duration (or latency to return) for the risk target, and a separate engagement measure (e.g., momentary time sampling or percent intervals on-task) so escape-related treatment effects can be evaluated on both problem and alternative behavior.",
        correct: true,
        rationale:
          "Elopement's variable duration and safety stakes call for count and temporal dimensions; engagement needs its own measure. Dual measurement supports FBA-linked treatment decisions without collapsing everything into one inadequate index.",
      },
      {
        text: "Use only whole-interval recording of 'safe behavior' all day so caregivers never have to score elopement events.",
        correct: false,
        rationale:
          "Whole-interval 'safe behavior' underestimates risk events and obscures elopement specifically, weakening both safety monitoring and functional evaluation.",
      },
      {
        text: "Discontinue quantitative measurement because the FA already identified escape; rely on caregiver global ratings after each week.",
        correct: false,
        rationale:
          "Functional assessment does not replace ongoing measurement needed to evaluate procedures and monitor risk.",
      },
    ],
  ),
  mockQ(
    "synth-006",
    "C",
    "Two RBTs collect frequency of aggression during the same sessions. IOA averages 55%. The BCBA's treatment graph still shows a clear downward trend, and the supervising BCBA is asked to present the graph to the IEP team tomorrow as evidence the DRA is working. Billing notes already claim 'data-based progress.' Which action is MOST appropriate?",
    [
      {
        text: "Refine the operational definition, retrain observers with practice and feedback, withhold progress claims until IOA is acceptable, and correct any documentation that overstates data quality.",
        correct: true,
        rationale:
          "Low IOA undermines interpretation of trend; ethical presentation and billing require trustworthy measurement. Definition clarity, retraining, and honest documentation address measurement, supervision, and ethics together.",
      },
      {
        text: "Present the downward trend as definitive proof of DRA effectiveness because visual analysis overrides IOA concerns.",
        correct: false,
        rationale:
          "Visual analysis of unreliable data can mislead teams; IOA problems must be resolved before strong claims.",
      },
      {
        text: "Drop the second observer permanently so IOA is no longer calculated, then present the single-observer graph.",
        correct: false,
        rationale:
          "Eliminating IOA checks hides rather than solves measurement error and weakens supervisory oversight.",
      },
      {
        text: "Average the two observers' counts into one 'compromise' datum series and treat disagreement as cancelled out.",
        correct: false,
        rationale:
          "Averaging discrepant counts does not establish accuracy; it can create a fictional series that neither observer recorded.",
      },
    ],
  ),
  mockQ(
    "synth-007",
    "C",
    "A clinic switches from continuous event recording of hand-mouthing to 10-second partial-interval recording to reduce observer load. After the switch, graphed 'percent of intervals' rises sharply even though staff insist the behavior looks the same. A DRA for an alternative mand was started the same week. Leadership wants to intensify the DRA based on the apparent increase. What should the BCBA conclude and do?",
    [
      {
        text: "Treat the rise as definitive proof the DRA worsened hand-mouthing and immediately add a punishment contingency.",
        correct: false,
        rationale:
          "A measurement-system change confounds interpretation; adding punishment based on an artifact is inappropriate.",
      },
      {
        text: "Ignore the graph entirely and rely only on staff impressions going forward.",
        correct: false,
        rationale:
          "Staff impressions alone are insufficient; the BCBA should restore comparable measurement, not abandon data.",
      },
      {
        text: "Recognize that partial-interval recording can overestimate occurrence relative to event recording, avoid intensifying intervention based on the noncomparable series, and reestablish a consistent measurement system (or clearly separate phases) before judging the DRA.",
        correct: true,
        rationale:
          "Cross-chapter reasoning requires separating measurement artifacts from true behavior change and from procedure decisions. Noncomparable y-axes invalidate the intensification request.",
      },
      {
        text: "Convert all prior event data to partial-interval estimates by multiplying frequencies by 10 so the phases can be spliced on one graph.",
        correct: false,
        rationale:
          "Arbitrary conversion invents data and does not create true comparability across measurement methods.",
      },
    ],
  ),
  mockQ(
    "synth-008",
    "D",
    "A BCBA wants to evaluate a new differential reinforcement procedure for aggression across three students who share a classroom. Staff worry about withdrawing a seemingly helpful procedure. Caregivers consented to data collection but asked that no student lose access to an effective intervention solely for research elegance. Which experimental approach BEST balances demonstration of experimental control with ethical obligations?",
    [
      {
        text: "Use a withdrawal (ABAB) design for all three students simultaneously so control is clearest, regardless of caregiver concerns.",
        correct: false,
        rationale:
          "Simultaneous withdrawals ignore caregiver limits and may unnecessarily remove effective treatment for design purity alone.",
      },
      {
        text: "Skip experimental design entirely and implement the procedure for everyone without staggered or comparative evaluation.",
        correct: false,
        rationale:
          "Abandoning evaluation forgoes accountability for effectiveness and does not meet data-based practice standards.",
      },
      {
        text: "Collect only anecdotal pre/post testimonials from teachers as the sole evidence of control.",
        correct: false,
        rationale:
          "Testimonials do not demonstrate experimental control or meet measurement standards for intervention evaluation.",
      },
      {
        text: "Use a multiple-baseline across participants (stagger introduction), avoid unnecessary withdrawal of a beneficial procedure, continue sensitive measurement, and document assent/consent limits in the evaluation plan.",
        correct: true,
        rationale:
          "Multiple baseline can demonstrate control without reversing effective treatment, aligning experimental design with ethics, measurement, and caregiver constraints.",
      },
    ],
  ),
  mockQ(
    "synth-009",
    "D",
    "After an FBA implicated attention for a learner's loud vocalizations, a BCBA begins DRA in Classroom A only. Classrooms B and C remain in baseline. Vocalization rate drops in A after DRA starts, while B and C stay stable. Midway, the principal asks the BCBA to start DRA in B and C immediately 'because it worked,' and to stop graphing baselines. Which response BEST protects internal validity while remaining clinically responsive?",
    [
      {
        text: "Start DRA in all rooms immediately and discard baseline graphs to simplify the file for the principal.",
        correct: false,
        rationale:
          "Ending baselines early and dropping graphs weakens demonstration of control and documentation quality.",
      },
      {
        text: "Explain that staggered introduction with continued baseline measurement in B and C strengthens causal inference; begin DRA in B next if clinically indicated, keep graphing all tiers, and avoid simultaneous uncontrolled rollout.",
        correct: true,
        rationale:
          "This preserves multiple-baseline logic, ties treatment to the FBA function, and still allows clinically timed expansion—integrating design, assessment, and stakeholder communication.",
      },
      {
        text: "Withdraw DRA from Classroom A to prove the effect before any expansion.",
        correct: false,
        rationale:
          "Unnecessary withdrawal may be clinically undesirable when a multiple-baseline already offers a path to control.",
      },
      {
        text: "Change the dependent measure in B and C to a different behavior so baselines look more interesting on the graph.",
        correct: false,
        rationale:
          "Changing the target mid-evaluation confounds comparisons and is not a design or ethical solution.",
      },
    ],
  ),
  mockQ(
    "synth-010",
    "E",
    "A BCBA without feeding competence is asked to run an intensive food-refusal protocol involving escape extinction for a child with a complex medical swallowing history. The referring physician has not cleared oral trials. Caregivers demand immediate implementation and threaten to report the BCBA for 'withholding care' if the BCBA delays for assessment collaboration. Agency leadership notes the case is highly billable. What should the BCBA do FIRST?",
    [
      {
        text: "Decline independent implementation outside competence and medical clearance; seek appropriate collaboration/referral, document the rationale, and communicate the risk/ethics basis to caregivers and leadership without falsifying service need.",
        correct: true,
        rationale:
          "Scope of competence, client safety, and truthful service delivery override billing pressure and caregiver threats. Cross-chapter issues (assessment readiness, restrictive procedures, ethics) all require pause and collaboration first.",
      },
      {
        text: "Begin escape extinction immediately to retain the case, then read feeding articles after hours to catch up.",
        correct: false,
        rationale:
          "Post-hoc reading does not establish competence before a high-risk procedure, especially without medical clearance.",
      },
      {
        text: "Have an RBT start the protocol unsupervised so the BCBA is not personally practicing outside competence.",
        correct: false,
        rationale:
          "Delegating a high-risk procedure to an RBT worsens supervision and competence failures rather than resolving them.",
      },
      {
        text: "Implement the protocol but omit medical history from the record to reduce perceived risk.",
        correct: false,
        rationale:
          "Omitting relevant medical information is unethical documentation and increases client risk.",
      },
    ],
  ),
  mockQ(
    "synth-011",
    "E",
    "A team proposes a restrictive response-blocking procedure plus DRA for severe self-injury. Indirect assessment suggests automatic reinforcement; no functional analysis or competing-stimulus assessment has been completed. The learner is nonverbal. A caregiver signed a broad consent form last year. Staff argue assent is unnecessary 'because he can't talk,' and want to start tomorrow without baseline measurement. Which plan is MOST ethically and clinically sound?",
    [
      {
        text: "Start blocking tomorrow using last year's broad consent alone, skip baseline, and revisit assent only if the learner says 'no.'",
        correct: false,
        rationale:
          "Outdated broad consent, skipped assessment/measurement, and verbal-only assent standards are inadequate for restrictive procedures.",
      },
      {
        text: "Refuse any intervention forever until a full FA is completed in a research lab, even if self-injury poses imminent tissue damage.",
        correct: false,
        rationale:
          "Safety emergencies may require protective action; the error in the scenario is skipping appropriate assessment and assent processes, not providing necessary protection.",
      },
      {
        text: "Complete needed assessment steps commensurate with risk (including safer FA alternatives as appropriate), obtain informed consent for the specific restrictive package, assess assent/assent-withdrawal via observable indicators, collect baseline/sensitive measurement, and prefer least-restrictive effective components.",
        correct: true,
        rationale:
          "Ethics (consent/assent, restrictiveness), assessment, measurement, and procedure selection must move together—especially for nonverbal learners and automatic-reinforcement hypotheses.",
      },
      {
        text: "Implement blocking without DRA because assessment is incomplete, then add DRA later if staff have time.",
        correct: false,
        rationale:
          "Starting with restriction alone while delaying reinforcement-based alternatives increases restrictiveness without clinical justification.",
      },
    ],
  ),
  mockQ(
    "synth-012",
    "E",
    "A BCBA supervises a trainee who is also the BCBA's close friend. The trainee asks the BCBA to sign off supervision hours for weeks when only brief text check-ins occurred, because the caseload is heavy and 'everyone does it.' The same week, the trainee's client graph shows sudden improvement that coincides with a change from continuous to discontinuous measurement without phase annotation. What is the BEST course of action?",
    [
      {
        text: "Sign the hours to preserve the friendship, and present the graph as strong evidence of behavior change without mentioning the measurement change.",
        correct: false,
        rationale:
          "Falsifying supervision and misrepresenting data compound ethical violations across multiple relationships, supervision, and measurement.",
      },
      {
        text: "Refuse to verify inaccurate supervision hours, address the multiple-relationship risk with clearer boundaries or reassignment as needed, and correct the graph/documentation so measurement changes are transparent before claiming improvement.",
        correct: true,
        rationale:
          "Accurate supervision records, managing dual relationships, and honest data display are concurrent obligations; friendship does not justify false hours or obscured measurement artifacts.",
      },
      {
        text: "Ignore the supervision issue but quietly fix the graph labels so only the measurement problem is addressed.",
        correct: false,
        rationale:
          "Both problems require action; selective attention leaves a serious supervision-ethics violation unresolved.",
      },
      {
        text: "Report the trainee publicly on social media for fraud while continuing to sign the hours until HR responds.",
        correct: false,
        rationale:
          "Continuing false verification is unethical; public social-media reporting is not an appropriate professional channel.",
      },
    ],
  ),
  mockQ(
    "synth-013",
    "E",
    "During a consult, a teacher asks the BCBA in the hallway whether 'the Smith child' is on a behavior plan for aggression, because another parent is complaining. The BCBA also realizes an FBA report containing identifiers was left on a shared printer. Meanwhile, progress data needed for an upcoming eligibility meeting have not been summarized. Which prioritization BEST meets confidentiality, assessment, and professional practice duties?",
    [
      {
        text: "Answer the teacher's hallway question in detail to maintain rapport, leave the printer copy, and skip the data summary if time runs short.",
        correct: false,
        rationale:
          "Hallway disclosure and abandoned PHI violate confidentiality; skipping needed data harms decision-making.",
      },
      {
        text: "Discuss the case with the complaining parent directly to clear the air, using the printed report as a handout.",
        correct: false,
        rationale:
          "Disclosing to another parent and circulating PHI without authorization are clear confidentiality breaches.",
      },
      {
        text: "Provide the teacher all raw session videos via personal email so she can decide for herself, then shred the printer copy later.",
        correct: false,
        rationale:
          "Unsecured video sharing creates additional confidentiality risk and is not a controlled disclosure process.",
      },
      {
        text: "Decline hallway disclosure of protected information, secure/retrieve the printed report immediately, use appropriate channels for team communication, and prepare an accurate data summary for the eligibility decision.",
        correct: true,
        rationale:
          "The synthesis prioritizes stopping ongoing confidentiality breaches while still fulfilling the data-based assessment/decision duty through proper channels.",
      },
    ],
  ),
  mockQ(
    "synth-014",
    "F",
    "Indirect assessment checklists implicate attention for a learner's aggression, but descriptive ABC data show aggression most often during difficult demands and terminating when work is removed. Staff have been delivering reprimands and brief breaks after aggression. Caregivers want a dense token system for 'being good' without further assessment. Leadership wants billing for a full FA next month. Given safety is currently manageable, what is the BEST next assessment/clinical move?",
    [
      {
        text: "Treat the checklist as definitive, implement attention extinction only, and start the caregiver-requested token system immediately without clarifying function.",
        correct: false,
        rationale:
          "Conflicting descriptive data and break-contingent consequences suggest escape may be critical; skipping clarification risks a mismatched treatment package.",
      },
      {
        text: "Ignore descriptive data because checklists are always more valid than observation, and bill the FA as already completed.",
        correct: false,
        rationale:
          "Descriptive data are informative, and billing a completed FA that was not conducted is unethical.",
      },
      {
        text: "Reconcile the conflicting information with additional structured descriptive analysis and/or a safe FA clarifying escape vs. attention, delay an attention-only package, and avoid launching an intensive token economy that may not address the maintaining contingency.",
        correct: true,
        rationale:
          "Assessment quality drives procedure selection and ethics of service claims. Conflicting indirect vs. descriptive findings require clarification before committing to a function-mismatched intervention.",
      },
      {
        text: "Stop all measurement and rely on caregiver preference alone because assent for assessment was not obtained in writing this week.",
        correct: false,
        rationale:
          "Preference does not replace functional assessment; measurement cessation is not justified by a paperwork timing issue alone.",
      },
    ],
  ),
  mockQ(
    "synth-015",
    "F",
    "A BCBA plans a traditional FA of severe aggression. Medical history includes anticoagulation therapy; previous FA attempts produced injuries. Caregivers consent to assessment but ask for the least risky option that still clarifies function. An RBT suggests running alone-condition sessions in an unlocked lobby for convenience. Which plan BEST integrates assessment rigor, risk mitigation, and ethical implementation?",
    [
      {
        text: "Run the full standard FA in the lobby without protective procedures because ecological validity outweighs safety.",
        correct: false,
        rationale:
          "Unsafe settings and ignored medical risk violate ethical assessment practice.",
      },
      {
        text: "Skip assessment entirely and implement a restrictive punishment package to suppress aggression regardless of function.",
        correct: false,
        rationale:
          "Bypassing assessment for default punishment is neither function-based nor least-restrictive practice.",
      },
      {
        text: "Use a safer FA variation or alternative functional assessment strategy (e.g., latency/precursor FA, IISCA-style synthesized analysis, or competing-stimulus assessment as appropriate), ensure trained staffing and protective procedures, and reject unsupervised lobby sessions.",
        correct: true,
        rationale:
          "Function still matters, but method must match risk. Safer assessment options plus competent staffing satisfy assessment goals and ethics better than a hazardous standard FA.",
      },
      {
        text: "Have the RBT conduct alone sessions unsupervised in the lobby while the BCBA watches occasionally by camera from another building.",
        correct: false,
        rationale:
          "Remote occasional viewing does not constitute adequate supervision for high-risk FA conditions in an unsecured setting.",
      },
    ],
  ),
  mockQ(
    "synth-016",
    "F",
    "Before starting DRA for escape-maintained task refusal, a BCBA must identify reinforcers. A single-trial preference assessment in a noisy hallway ranks stickers highest, but during work sessions stickers do not increase compliance. Motivating operations appear strong for break time after long instructional blocks. Caregivers insist stickers 'should work' because they worked for a sibling. What should the BCBA do NEXT?",
    [
      {
        text: "Keep stickers as the DRA reinforcer indefinitely to honor caregiver preference, and interpret nonresponse as noncompliance with the token concept.",
        correct: false,
        rationale:
          "Failure of stickers under relevant MOs indicates they are not functioning as reinforcers for this context; preference reports are not sufficient.",
      },
      {
        text: "Reassess preference under conditions resembling the instructional context, consider breaks/task termination as candidate reinforcers matching the escape function, and verify reinforcer efficacy with brief reinforcer assessments before finalizing DRA.",
        correct: true,
        rationale:
          "Preference ≠ reinforcer efficacy; MO and function must inform what is delivered in DRA. Context-matched assessment links FBA, preference methods, and procedure design.",
      },
      {
        text: "Abandon DRA and move to continuous physical guidance without assessing reinforcers, because preference assessments are optional when siblings respond to stickers.",
        correct: false,
        rationale:
          "Sibling history is irrelevant; skipping reinforcer identification weakens DRA and jumps to a more restrictive prompt strategy prematurely.",
      },
      {
        text: "Switch measurement from compliance to a Likert teacher rating so sticker effects appear larger on the graph.",
        correct: false,
        rationale:
          "Changing to a coarser subjective scale to manufacture an effect is a measurement ethics problem, not an assessment solution.",
      },
    ],
  ),
  mockQ(
    "synth-017",
    "F",
    "A learner's SIB is hypothesized as automatically maintained. Competing-stimulus assessment shows Item X suppresses SIB when continuously available. Staff then provide Item X only after SIB 'to calm him,' and partial-interval data of SIB rise. A consultant claims the rise proves the automatic hypothesis was wrong and that attention is the true function. Which interpretation is MOST accurate?",
    [
      {
        text: "Agree that automatic reinforcement is disproved solely because SIB increased when Item X followed SIB.",
        correct: false,
        rationale:
          "Delivering a preferred item contingent on SIB can reinforce SIB even if automatic reinforcement also operates; the procedural contingency confounds interpretation.",
      },
      {
        text: "Conclude partial-interval data are invalid for SIB in all cases and discard the automatic hypothesis without further analysis.",
        correct: false,
        rationale:
          "Partial interval can be appropriate for some topographies; the main issue is the contingency change, not an absolute ban on the measure.",
      },
      {
        text: "Switch immediately to attention extinction only, because any increase after social delivery proves social function exclusively.",
        correct: false,
        rationale:
          "An added social reinforcer can create a new contingency without erasing a prior automatic function; exclusive attention extinction may be insufficient.",
      },
      {
        text: "Recognize that contingent delivery of Item X after SIB may have added a socially mediated reinforcement contingency on top of automatic maintenance; return to noncontingent/competing-stimulus arrangements supported by the CSA, and clarify function with further assessment rather than abandoning the automatic hypothesis prematurely.",
        correct: true,
        rationale:
          "This synthesizes CSA findings, contingency analysis, measurement trends, and assessment logic: the staff procedure likely reinforced SIB, confounding the consultant's leap to an attention-only conclusion.",
      },
    ],
  ),
  mockQ(
    "synth-018",
    "G",
    "Following an FA indicating attention-maintained aggression, a BCBA introduces DRA for appropriate mands and places aggression on extinction. Week 1 shows an extinction burst; IOA is adequate. Caregivers, stressed by the burst, begin intermittently attending to aggression 'just once.' Rates climb above baseline. An administrator demands adding a contingent reprimand procedure immediately. Which procedural decision is BEST?",
    [
      {
        text: "Restore consistent extinction of aggression, intensify DRA for the mand with high-quality attention, retrain caregivers on integrity, continue graphing, and avoid adding reprimands before integrity of the reinforcement/extinction package is reestablished.",
        correct: true,
        rationale:
          "Intermittent attention can worsen aggression via intermittent reinforcement. Procedure repair (integrity of DRA+extinction) comes before adding potentially aversive components under administrative pressure.",
      },
      {
        text: "Add reprimands immediately as requested, and discontinue DRA because the burst proves reinforcement strategies failed.",
        correct: false,
        rationale:
          "The burst and later increase are consistent with extinction followed by integrity failure; discontinuing DRA misreads the data pattern.",
      },
      {
        text: "Tell caregivers to attend to every instance of aggression for one week to 'reset' the burst, then restart extinction.",
        correct: false,
        rationale:
          "Continuous attention would strengthen aggression and is opposite of the indicated extinction contingency.",
      },
      {
        text: "Change the FA conclusion to automatic reinforcement solely because rates increased, and stop collecting IOA.",
        correct: false,
        rationale:
          "Integrity failure explains the increase better than a sudden function change; stopping IOA weakens measurement quality.",
      },
    ],
  ),
  mockQ(
    "synth-019",
    "G",
    "A BCBA teaches a 4-step handwashing chain with total-task presentation and most-to-least prompts. Probe data show the learner independently completes steps only when the RBT stands in the exact training position; in the bathroom used at home, the chain breaks down. Treatment integrity checklists reveal the RBT often completes steps for the learner when rushed. Caregivers ask for a 'simpler' procedure. What should the BCBA prioritize?",
    [
      {
        text: "Keep most-to-least prompting but move training to relevant bathrooms, teach discrimination of natural SD features, use BST/feedback to stop the RBT from completing steps, and plan prompt fading plus generalization probes across settings.",
        correct: true,
        rationale:
          "Stimulus control is tied to trainer presence/position and integrity errors. Procedure revision must address prompting, fading, generalization, and supervision of implementers together.",
      },
      {
        text: "Switch to a punishment package for errors because generalization failure means chaining is inappropriate for hygiene skills.",
        correct: false,
        rationale:
          "Generalization and integrity problems do not indicate punishment as the next step for a skill acquisition chain.",
      },
      {
        text: "Abandon quantitative probes and use caregiver satisfaction as the sole mastery criterion.",
        correct: false,
        rationale:
          "Satisfaction without performance data cannot verify chain acquisition or generalization.",
      },
      {
        text: "Have the RBT continue completing steps indefinitely to keep session times short for billing efficiency.",
        correct: false,
        rationale:
          "Completing steps for the learner prevents acquisition and raises integrity/ethics concerns around service quality.",
      },
    ],
  ),
  mockQ(
    "synth-020",
    "G",
    "A school team wants contingent manual restraint as the primary intervention for disruption after only two baseline sessions of frequency data and no functional assessment. A reinforcement-based plan has not been tried. The learner withdraws assent behaviors (turning away, dropping to the floor) when restraint is mentioned in a social story. State policy requires least-restrictive practices. Which recommendation is MOST appropriate?",
    [
      {
        text: "Approve restraint as primary because two baseline sessions are enough and assent can be ignored for classroom order.",
        correct: false,
        rationale:
          "Insufficient assessment, skipped reinforcement options, and ignored assent conflict with ethical and least-restrictive standards.",
      },
      {
        text: "Implement restraint first, then conduct an FBA only if restraint fails after a month.",
        correct: false,
        rationale:
          "Assessment and less-restrictive strategies should inform procedure selection before defaulting to restraint.",
      },
      {
        text: "Oppose restraint as the first-line package: complete functional assessment, implement reinforcement-based/function-matched procedures with adequate measurement, honor assent/assent-withdrawal indicators, and consider restrictive procedures only if justified by risk and documented failure/insufficiency of less-restrictive options.",
        correct: true,
        rationale:
          "Procedure selection here is inseparable from assessment adequacy, measurement, ethics (assent, restrictiveness), and legal/policy least-restrictive requirements.",
      },
      {
        text: "Replace all data collection with anonymous staff votes on whether restraint 'feels necessary.'",
        correct: false,
        rationale:
          "Votes are not a substitute for assessment, measurement, or ethical justification of restrictive procedures.",
      },
    ],
  ),
  mockQ(
    "synth-021",
    "G",
    "A token economy increases on-task behavior in the training room under a dense CRF exchange. When the BCBA thins to a fixed-ratio 10 exchange and moves sessions to the general education setting, on-task behavior collapses. Teachers stop delivering tokens with integrity. Parents report the learner now refuses school. Which revision BEST addresses procedures, generalization, and integrity?",
    [
      {
        text: "Jump immediately to an even thinner VR 50 schedule in the general education setting so the learner 'gets used to' lean reinforcement faster.",
        correct: false,
        rationale:
          "Further abrupt thinning without restoring integrity would likely worsen collapse rather than repair the token system.",
      },
      {
        text: "Abandon tokens permanently and switch to reprimands for off-task behavior as a simpler classroom fit.",
        correct: false,
        rationale:
          "Integrity and thinning problems do not justify replacing a working reinforcer system with reprimands as the primary fix.",
      },
      {
        text: "Keep FR 10 unchanged and blame the learner's motivation, documenting 'noncompliance' without observing token delivery.",
        correct: false,
        rationale:
          "Collapses after abrupt thinning plus integrity failure implicate the schedule and implementation, not a trait explanation.",
      },
      {
        text: "Reestablish effective token delivery and a denser schedule as needed, retrain implementers to integrity criteria, plan gradual schedule thinning, and explicitly program generalization to the general education setting rather than assuming transfer.",
        correct: true,
        rationale:
          "Token procedures fail here through abrupt thinning, poor integrity, and lack of generalization programming—all must be repaired together.",
      },
    ],
  ),
  mockQ(
    "synth-022",
    "H",
    "An IEP team must choose an intervention for escape-maintained refusal. Evidence supports DRA plus demand fading. Caregivers prefer a heavy punishment-based 'boot camp' approach used by a relative. Available staff cannot yet implement complex plans with integrity. Sensitive duration data of refusal are already being collected. Which selection process is MOST appropriate?",
    [
      {
        text: "Select DRA plus demand fading matched to function, incorporate caregiver goals where compatible, plan training/integrity supports for staff capacity, continue duration measurement, and decline a punishment-first package lacking assessment alignment and least-restrictive justification.",
        correct: true,
        rationale:
          "Intervention selection weighs function, evidence, stakeholder preference, contextual fit/capacity, restrictiveness, and ongoing measurement—not preference alone.",
      },
      {
        text: "Adopt the boot camp plan unchanged because caregiver preference always overrides functional assessment findings.",
        correct: false,
        rationale:
          "Preferences matter but do not override function-based, least-restrictive, evidence-informed selection responsibilities.",
      },
      {
        text: "Choose no intervention until staff spontaneously become fluent without training, and stop collecting duration data.",
        correct: false,
        rationale:
          "Capacity gaps are addressed through training and design simplification—not by abandoning intervention and measurement.",
      },
      {
        text: "Pick whichever plan bills at the highest rate, regardless of function match or integrity feasibility.",
        correct: false,
        rationale:
          "Billing maximization is not an ethical or clinical selection criterion.",
      },
    ],
  ),
  mockQ(
    "synth-023",
    "H",
    "A function-matched treatment for aggression shows no change after several weeks. Integrity averages 40%: staff often skip DRA and attend to aggression. The BCBA previously presented the flat graph to the team as possible evidence the FA was wrong. Caregivers ask whether to scrap the plan. What is the BEST implementation decision?",
    [
      {
        text: "Immediately scrap the FA-based plan and install an unrelated restrictive procedure, treating low integrity as proof of incorrect function.",
        correct: false,
        rationale:
          "You cannot evaluate a plan that was not implemented; integrity failure must be repaired before rejecting the FA-linked treatment.",
      },
      {
        text: "Leave integrity at 40% and wait two more months so natural maturation can improve the graph.",
        correct: false,
        rationale:
          "Waiting without addressing integrity prolongs ineffective/unsafe practice and misuses measurement.",
      },
      {
        text: "Pause strong claims about function being wrong, remediate integrity via BST/performance feedback to criterion, simplify the plan if needed for contextual fit, continue sensitive measurement, and only then decide whether to revise the intervention logic.",
        correct: true,
        rationale:
          "Selecting/implementing interventions requires distinguishing implementation failure from conceptual failure—integrating supervision, procedures, measurement, and honest stakeholder communication.",
      },
      {
        text: "Alter historical data points upward to show progress while integrity problems are quietly fixed.",
        correct: false,
        rationale:
          "Fabricating data is a serious ethical violation and destroys evaluation validity.",
      },
    ],
  ),
  mockQ(
    "synth-024",
    "I",
    "A BCBA supervises six RBTs implementing a complex toilet-training protocol. Weekly group lecture is the only 'training' provided. Integrity probes average 50%. Client progress is flat. The BCBA's caseload prevents individual BST. One RBT asks the BCBA to mark supervision documentation as comprehensive individual observation time that did not occur. How should the BCBA respond?",
    [
      {
        text: "Sign the false supervision documentation to avoid conflict, and continue lecture-only training because caseload pressure is unavoidable.",
        correct: false,
        rationale:
          "Falsifying supervision and neglecting competency-based training are concurrent ethics/supervision failures.",
      },
      {
        text: "Refuse false documentation, reduce or restructure caseload to allow BST with modeling/rehearsal/feedback, use integrity data for performance feedback, and tie client progress review to accurate supervision contact.",
        correct: true,
        rationale:
          "Personnel management requires truthful records, competency-based training (BST), and data-based feedback. Caseload must fit supervisory capacity when client outcomes and integrity are suffering.",
      },
      {
        text: "Replace integrity probes with RBT self-ratings of 100% so graphs look compliant without changing training methods.",
        correct: false,
        rationale:
          "Self-ratings that manufacture compliance hide performance problems and corrupt measurement used for supervision.",
      },
      {
        text: "Punish RBTs with public shaming in staff meetings instead of providing skill practice, while still signing inaccurate hours.",
        correct: false,
        rationale:
          "Public shaming is poor performance management, and signing false hours remains unethical.",
      },
    ],
  ),
  mockQ(
    "synth-025",
    "I",
    "An organization wants faster skill acquisition among new therapists. Leadership proposes a single written quiz on prompting hierarchies, then immediate independent caseloads. Client graphs will be reviewed only at quarterly meetings. A senior therapist suggests using weekly integrity scores and client acquisition data for feedback, with BST until mastery before solo implementation. The BCBA must recommend a supervision system. Which recommendation is BEST?",
    [
      {
        text: "Approve quiz-only training and quarterly graph review because it maximizes billable independent hours quickly.",
        correct: false,
        rationale:
          "Quiz scores alone do not ensure performance; delayed graph review is too infrequent for effective performance management.",
      },
      {
        text: "Allow independent caseloads first and train only after clients fail to progress for a full quarter.",
        correct: false,
        rationale:
          "Withholding competency training until client failure is reactive and risks harm; training should precede independent implementation.",
      },
      {
        text: "Use informal hallway compliments instead of integrity measurement, because quantitative supervision damages morale.",
        correct: false,
        rationale:
          "Morale concerns do not replace the need for objective integrity measurement and structured feedback.",
      },
      {
        text: "Require BST to mastery before independent implementation, monitor treatment integrity and client acquisition data frequently, and deliver ongoing performance feedback—rather than relying on a quiz-only gate and quarterly-only review.",
        correct: true,
        rationale:
          "Effective supervision integrates competency-based training, frequent integrity/outcome measurement, and feedback loops—not administrative shortcuts that prioritize billing speed over client progress.",
      },
    ],
  ),
];
