/**
 * Authored Mock Exam 2 expanded items — Domains A, D, H, I.
 * Harder / ethics-adjacent vignettes. Independent study only.
 * Not affiliated with the BACB.
 */
import type { BDSQuestion } from "@/lib/content-types";
import { authored2 } from "@/content/mockExam/exams/bcbaPractice2/expandedAuthoredHelper";

export const EXPANDED2_A: BDSQuestion[] = [
  authored2(
    2001,
    "A",
    "A clinic markets a 'guaranteed breakthrough' package and asks BCBAs to attribute every week-to-week improvement to the client's 'inner readiness to change,' even when session logs show denser escape contingencies were simultaneously removed. A senior clinician objects that this framing treats an unmeasured inner state as the cause while discarding manipulable environmental history. Which foundational stance BEST supports the senior clinician's objection?",
    "C",
    [
      "Methodological behaviorism that permanently excludes verbal reports of private events from any clinical discussion.",
      "Mentalism that privileges inner readiness as the primary causal unit whenever marketing language is persuasive.",
      "Radical behaviorism and environmental selection—private events may be discussed as behavior, but public contingency changes remain the accountable explanatory focus when they covary with outcomes.",
      "Structuralism that classifies topographies by appearance alone and forbids analysis of consequence history.",
    ],
    [
      "Radical behaviorism does not require silencing private-event talk; the issue is displacing contingency analysis with unverified inner causes.",
      "Mentalistic readiness accounts are exactly what the senior clinician is rejecting as explanatory shortcuts.",
      "Radical behaviorism allows private events as behavior under environmental influence while keeping prediction and control anchored in observable contingency relations—especially when those relations changed in the same window as the claimed 'breakthrough.'",
      "Structural classification without function/history analysis is not the corrective stance here.",
    ],
  ),
  authored2(
    2002,
    "A",
    "After one poorly controlled school consultation, an agency owner demands that staff present the result as definitive proof that a branded protocol 'always works' across all ages and diagnoses. The BCBA refuses and instead frames the finding as tentative, notes rival explanations (staffing change, medication start), and requests replication under cleaner conditions before any public claim. A board member calls this 'excessively skeptical.' Which scientific attitude MOST justifies the BCBA's refusal?",
    "A",
    [
      "Philosophic doubt—hold conclusions tentatively, seek rival accounts, and require adequate evidence before generalizing or marketing certainty.",
      "Fatalism—outcomes are predetermined, so replication cannot change what should be advertised.",
      "Circular reasoning—define the protocol as effective because the agency already purchased it.",
      "Pragmatism redefined as whatever narrative maximizes enrollment this quarter.",
    ],
    [
      "Philosophic doubt treats knowledge as provisional and resists overclaiming from weak demonstrations—especially when commercial stakes push certainty.",
      "Fatalism contradicts experimental evaluation and does not justify advertising certainty.",
      "Purchase history is not evidence; circular endorsement is the problem the BCBA is resisting.",
      "Clinical pragmatism concerns useful prediction and control under data, not enrollment rhetoric.",
    ],
  ),
];

export const EXPANDED2_D: BDSQuestion[] = [
  authored2(
    2011,
    "D",
    "A BCBA evaluates FCT for aggression using a multiple-baseline across three demand contexts. Intervention begins in Context 1; Contexts 2 and 3 remain in baseline. Midway through Context 1's intervention, the school quietly adds a new 'calm corner' that removes all demands after any protest in every classroom, including untreated contexts. Aggression then drops in Contexts 2 and 3 before those tiers receive FCT. Leadership wants to market the graph as clean experimental control. What is the MOST serious interpretive threat?",
    "B",
    [
      "Multiple-baseline designs forbid more than two tiers, so the third context invalidates the study regardless of data.",
      "An uncontrolled school-wide contingency change (demand removal) likely produced concurrent baseline improvements, undermining staggered demonstration of experimental control.",
      "Any improvement in untreated baselines automatically proves FCT is ineffective in Context 1.",
      "Marketing slides require deleting Contexts 2 and 3 so only the treated tier remains visible.",
    ],
    [
      "Tier count is not the flaw; three tiers are acceptable when stagger and stability support control.",
      "MBD persuasion requires untreated tiers to remain stable until independent introduction; a concurrent school-wide escape contingency is a classic history/confound threat that can mimic or mask treatment effects across baselines.",
      "Untreated-tier improvement threatens attribution; it does not by itself prove the treated tier's IV failed.",
      "Deleting control series to beautify marketing worsens validity and raises ethics-adjacent misrepresentation concerns.",
    ],
  ),
  authored2(
    2012,
    "D",
    "An ABAB evaluation of a DRA plan for property destruction shows clear suppression in both B phases. During the second A (withdrawal), caregivers—afraid of liability after a prior incident—continue delivering the functional reinforcer at home on a dense schedule while clinic staff follow withdrawal. Clinic rates partially recover but less than in the first A phase. The agency wants to claim 'proof of irreversibility' and skip further analysis. Which conclusion is MOST justified?",
    "D",
    [
      "Partial recovery proves the behavior is biologically irreversible and single-case designs are inappropriate forever.",
      "Any incomplete return to baseline converts the design into a perfect changing-criterion demonstration.",
      "Clinic graphs alone guarantee that home reinforcement cannot threaten internal validity.",
      "Extraexperimental reinforcement during withdrawal confounds interpretation of incomplete recovery; irreversibility should not be asserted without accounting for competing contingencies.",
    ],
    [
      "Incomplete recovery under contaminated withdrawal does not establish biological irreversibility.",
      "Changing-criterion logic is not created by a messy withdrawal; criteria were not systematically stepped here.",
      "Orderly clinic plotting does not cancel uncontrolled home contingencies that alter phase comparisons.",
      "When caregivers continue the functional reinforcer during planned withdrawal, recovery patterns are confounded—claiming irreversibility (and ending analysis) overstates what the design can support.",
    ],
  ),
  authored2(
    2013,
    "D",
    "A clinic compares two feeding-prompt packages in an alternating-treatments design. Therapists are told Package Red is 'the research-backed one' and Package Blue is 'the one leadership doubts.' Session notes show therapists often soften Package Blue trials with extra escape and praise mid-trial 'to be humane,' while Package Red is run exactly as written. Graphs later favor Package Red dramatically. Compliance officers ask whether the comparison is interpretable for protocol adoption. What analytic problem is MOST critical?",
    "A",
    [
      "Condition integrity failure and expectancy/bleed-through—differential soft implementation prevents clean attribution of effects to the named packages.",
      "Alternating-treatments designs are unethical whenever food is involved, so all data must be discarded automatically.",
      "Internal validity is assured whenever two conditions are color-coded on one graph.",
      "The design should have been a multiple baseline across therapists rather than any within-subject comparison.",
    ],
    [
      "ATD requires discriminable, faithfully implemented conditions; expectancy-driven soft implementation of one package is multitreatment interference/integrity failure that blocks causal claims—and raises ethics-adjacent issues if the graph is used to justify agency-wide adoption.",
      "Food-related work can be evaluated with careful design and consent; the vignette's flaw is integrity, not a blanket ban on ATD.",
      "Color-coding does not create experimental control when conditions are unequally implemented.",
      "MB across therapists is a different question; the immediate problem is contaminated ATD condition integrity.",
    ],
  ),
  authored2(
    2014,
    "D",
    "A changing-criterion design targets independent toileting initiations per day. Criteria rise from 2 to 4 to 6, and points are supposed to be earned only when the daily criterion is met. Audit logs show that after a parent complaint about 'not enough rewards,' staff began delivering the backup reinforcer every afternoon regardless of whether the criterion was met, while still advancing criterion lines on the graph. Performance appears to 'track' the steps. Which design logic is MOST undermined?",
    "C",
    [
      "The requirement to embed a full ABAB withdrawal inside every criterion step.",
      "The prohibition against ever increasing a criterion more than once per month.",
      "Correspondence between criterion shifts and differential reinforcement actually contingent on meeting those criteria.",
      "Mandatory use of a concurrent multiple baseline across untreated siblings.",
    ],
    [
      "Reversal embedding is not required for changing-criterion persuasion.",
      "There is no universal monthly step rule that defines this design's logic.",
      "Changing-criterion designs persuade when performance covaries with criterion changes that are differentially reinforced; noncontingent delivery severs that correspondence and makes 'tracking' visually deceptive—especially if used to claim success after a complaint-driven integrity collapse.",
      "Sibling baselines are not the core logic of this SCD vignette.",
    ],
  ),
  authored2(
    2015,
    "D",
    "Baseline for self-injury is highly variable and already trending downward after a medical workup began (pain management started, undocumented in the behavior graph). The team introduces a dense DRA package and later attributes the continued decrease solely to DRA in a funding report. The funder asks whether experimental control was demonstrated. Which critique MOST directly addresses internal validity?",
    "B",
    [
      "Downward baseline trends prove DRA can never work, so the evaluation should be abandoned without further design planning.",
      "Pre-intervention downward trend plus an undocumented medical confound makes it difficult to isolate DRA as the cause of further decreases.",
      "Internal validity concerns apply only to randomized group trials, never to single-case graphs used in funding reports.",
      "Any phase line drawn after a medical consult automatically validates the behavioral IV.",
    ],
    [
      "A trending/confounded baseline warns against premature causal claims; it does not by itself prove future ineffectiveness under a cleaner evaluation.",
      "Unstable or trending baselines and concurrent medical changes threaten demonstrations of experimental control—especially when reports omit the confound while claiming DRA causation.",
      "Internal validity is central to single-case experimental logic used in applied decision-making and reporting.",
      "Phase lines do not create control when ongoing baseline processes and medical changes already predict improvement.",
    ],
  ),
  authored2(
    2016,
    "D",
    "In a multiple-baseline across three students in the same classroom, the BCBA introduces the intervention for Student 1 and Student 2 on the same morning because a consultant is visiting and 'needs to see something working.' Both students improve that day; Student 3 remains in baseline and stays flat. The consultant praises the 'staggered control.' What is the PRIMARY design problem?",
    "A",
    [
      "Inadequate stagger—concurrent introduction for two students weakens the demonstration that change tracks independent introductions across tiers.",
      "Using classmates as tiers is forbidden in all multiple-baseline evaluations.",
      "Baseline data for Student 3 must be deleted once any peer improves.",
      "Multiple-baseline designs require simultaneous introduction across all tiers to prove generality.",
    ],
    [
      "MBD control depends on staggered, independent introductions; starting two tiers together for optics reduces opportunities to show tier-by-tier covariation and risks overclaiming control to an audience.",
      "Across-person MBDs are common; the flaw is timing, not the use of classmates.",
      "Untreated tiers should remain for comparison; deleting them removes the control series.",
      "Simultaneous introduction across all tiers would destroy, not fulfill, MBD stagger logic.",
    ],
  ),
  authored2(
    2017,
    "D",
    "After a successful intervention phase for elopement, the team plans a brief, consented withdrawal to strengthen experimental control. Risk review clears a short return to baseline with enhanced safety staffing. During withdrawal, elopement rises toward prior baseline; reinstatement suppresses it again. A parent advocate later argues that any withdrawal automatically 'invalidates the entire dataset ethically and scientifically.' What does the carefully managed withdrawal pattern MOST support analytically?",
    "D",
    [
      "That elopement is irreversible and therefore unsuitable for any single-case evaluation.",
      "That only a changing-criterion design can ever demonstrate control for elopement.",
      "That withdrawal phases always erase internal validity even when behavior covaries with IV presence/absence.",
      "Experimental control via reversal—behavior covaries with presence versus absence of the intervention contingency—while ethical review governs whether withdrawal is appropriate, not whether covariation is informative.",
    ],
    [
      "Clear recovery and re-suppression indicate reversibility under these conditions, strengthening analysis.",
      "Changing-criterion is one option; reversal recovery specifically supports withdrawal/reversal logic.",
      "A managed withdrawal that shows orderly covariation is analytically informative; ethics review addresses risk, not a rule that data become scientifically meaningless.",
      "Classic reversal logic supports a functional relation when behavior worsens upon removal and improves upon reinstatement; ethics and design validity are related but not identical questions.",
    ],
  ),
  authored2(
    2018,
    "D",
    "A BCBA presents an AB design for a crisis-reduction package after a dangerous spike: baseline, then intervention, with a clear level change. Stakeholders push to advertise the graph as establishing a functional relation 'equal to a completed reversal' for marketing and insurance appeals. What is the MOST accurate response?",
    "C",
    [
      "AB designs provide the strongest possible demonstration of experimental control available in applied work.",
      "Any level change after a phase line proves causation regardless of medication changes, staffing, or maturation.",
      "AB designs can suggest a promising clinical effect and guide cautious decisions but offer weaker control than designs that replicate effects across phases, tiers, or conditions—and should not be oversold as equivalent to a completed reversal.",
      "AB designs are never useful for clinical decision-making because they lack all validity.",
    ],
    [
      "AB is among the weaker demonstrations; stronger control comes from replication strategies.",
      "Phase-line coincidence is necessary but not sufficient; threats remain.",
      "Honest appraisal: AB can inform practice under urgency yet remains experimentally modest; equating it to reversal for marketing/insurance overclaims the design—an ethics-adjacent reporting issue.",
      "AB can still guide cautious clinical decisions while remaining experimentally limited.",
    ],
  ),
];

export const EXPANDED2_H: BDSQuestion[] = [
  authored2(
    2021,
    "H",
    "Functional analysis indicates a teen's aggression during vocational tasks is primarily escape-maintained. A vendor urges adoption of a popular attention-heavy 'relationship reset' curriculum because it is trending on social media and comes with glossy fidelity apps. Teachers can implement a simpler FCT-plus-demand-fading plan during actual job trials. Caregivers prioritize community employment over clinic optics. Which selection priority is MOST defensible?",
    "A",
    [
      "Match intervention to function and context—prefer the function-based plan teachers can run in real vocational routines with sustained fidelity and social validity, rather than a mismatched trendy package.",
      "Adopt the trending curriculum first because marketing reach is a primary clinical selection criterion.",
      "Select whichever package requires the most novel technology to impress funders, regardless of function fit.",
      "Defer all decisions until a vendor webinar names a single mandatory protocol for every escape-maintained topography.",
    ],
    [
      "Domain H prioritizes function match, contextual fit, implementability, and client/caregiver goals over trendiness—especially when a mismatched package could delay least-restrictive, employment-relevant intervention.",
      "Social-media popularity is not a substitute for function-based selection.",
      "Novelty and funder optics do not outrank efficacy, fit, and assent/contextual appropriateness.",
      "External products may inform options but do not replace individualized, function-matched selection.",
    ],
  ),
  authored2(
    2022,
    "H",
    "A reinforcement-based plan for severe property destruction has three weeks of incomplete integrity (often <40%), thin reinforcer contact, and no EO assessment update. Overnight staff—after a costly incident—demand immediate contingent basket holds 'for liability control.' No medical contraindication review, crisis reassessment, or revised informed consent has occurred. What is the MOST defensible response?",
    "C",
    [
      "Add restraint immediately because staff fear and property costs alone establish clinical necessity for restrictive procedures.",
      "Keep the failed plan forever without troubleshooting because escalation is never permitted in behavior analysis.",
      "First restore and verify integrity, reinforcer efficacy, and EO/demand variables; escalate to more restrictive components only with least-restrictive sequencing, documented rationale, safety review, and informed consent.",
      "Replace all reinforcement with continuous physical guidance as the default educational strategy to reassure leadership.",
    ],
    [
      "Fear and cost are signals to support the team and analyze risk—not automatic authorization to skip least-restrictive process and consent.",
      "Least-restrictive practice allows escalation after analytic troubleshooting, not perpetual inaction under unsafe conditions.",
      "Domain H requires integrity troubleshooting and proper authorization before adding restrictive procedures—especially when the current plan was never adequately implemented.",
      "Continuous physical guidance as a default skips function-based, less restrictive options and consent safeguards.",
    ],
  ),
  authored2(
    2023,
    "H",
    "Weekly graphs show rising independent mands, but the BCBA has not observed in six weeks. An RBT reports perfect fidelity; a floating supervisor's notes describe skipped prompts and unauthorized edible bribes before hard tasks. Funding renews next month based on the graphs. What should the BCBA do FIRST before raising mastery criteria or submitting outcome claims?",
    "B",
    [
      "Raise mastery criteria immediately based solely on the submitted graphs to secure funding.",
      "Conduct direct observation and score treatment integrity against the written protocol before interpreting outcomes, modifying targets, or forwarding unverified claims.",
      "Discharge the client because conflicting notes imply services are unnecessary.",
      "Switch curricula overnight without assessing whether the current plan was implemented as designed.",
    ],
    [
      "Outcome graphs without integrity can mislead; raising criteria may punish a fidelity problem and inflate claims.",
      "Integrity observation is required to know whether data reflect the intended independent variable—especially when funding stakes create pressure to overclaim.",
      "Discharge requires more than suspicion; integrity assessment and clinical review come first.",
      "Curriculum hopping without integrity assessment compounds interpretive error.",
    ],
  ),
  authored2(
    2024,
    "H",
    "A 12-year-old pulls away, says 'no more,' and attempts to leave when a new invasive physical prompting package for hygiene is introduced, even after preference-based rapport routines. Caregivers signed broad consent months ago for 'prompts as needed.' Staff argue that stopping will 'reward escape.' What is the MOST appropriate immediate emphasis?",
    "D",
    [
      "Increase prompt intrusiveness to push through protest because broad prior consent covers all future prompt topographies.",
      "Ignore vocal and motor withdrawal signals if acquisition graphs are trending upward for the week.",
      "Continue unchanged and address assent only at the annual plan review meeting.",
      "Honor ongoing assent/withdrawal signals—pause or modify the procedure, assess comfort and alternatives, and obtain intervention-specific informed consent before continuing aversive prompting.",
    ],
    [
      "Broad prior consent does not authorize ignoring clear dissent or escalating aversive procedures without review.",
      "Progress data do not override present assent/withdrawal during potentially aversive care routines.",
      "Assent is ongoing, not merely an annual paperwork event.",
      "Dignity and informed consent require responsive modification; material changes in intrusiveness warrant specific consent—and 'don't reinforce escape' is not a license to override clear withdrawal without reassessment.",
    ],
  ),
  authored2(
    2025,
    "H",
    "A family's mealtime prayer and greeting customs differ from the clinic's default 'neurotypical social skills' targets. An RBT drafts goals requiring the child to abandon home cultural practices during family meals 'so peers won't notice differences,' and proposes response-cost for home-cultural forms observed in clinic. Caregivers object. What is the MOST culturally responsive selection/implementation move?",
    "A",
    [
      "Collaborate with the family to revise goals and procedures so valued cultural practices are respected while targeting only skills that serve the client's meaningful contexts—and reject punitive suppression of cultural forms.",
      "Keep clinic-default assimilation goals unchanged and label caregiver concern as nonadherence.",
      "Add punishment for home-cultural greeting forms to accelerate 'normalization.'",
      "Discharge the family for holding values that differ from staff preferences.",
    ],
    [
      "Cultural responsiveness means co-constructing socially valid goals without imposing unnecessary assimilation or punishing cultural practice.",
      "Dismissing caregiver values undermines partnership and social validity.",
      "Punishing cultural practices is neither ethical nor clinically justified selection.",
      "Value differences call for collaborative revision, not termination.",
    ],
  ),
  authored2(
    2026,
    "H",
    "After five weeks, a DRA plan for task refusal shows no reliable improvement despite verified integrity above 90%, validated reinforcers, and reviewed demand aversiveness. Leadership prefers to keep the identical plan unchanged until the next annual review to avoid 'looking inconsistent' on audits. What is the MOST data-based next modification?",
    "C",
    [
      "Continue the identical plan indefinitely because high integrity alone obligates perpetual nonmodification.",
      "Abandon measurement and rely on leadership anecdotes until the annual review.",
      "Modify the intervention based on the data—adjust parameters or select a better-supported function-matched alternative and evaluate the change experimentally, documenting the rationale.",
      "Add an unrelated sensory package without linking changes to the functional assessment to satisfy optics.",
    ],
    [
      "High integrity with flat outcomes signals need for analytic change, not ritual repetition for audit appearance.",
      "Dropping data collection undermines accountable modification.",
      "Domain H expects data-based revision when a well-implemented plan fails to produce meaningful change; documentation addresses audit concerns better than stagnation.",
      "Unrelated add-ons that ignore function obscure the path to improvement.",
    ],
  ),
  authored2(
    2027,
    "H",
    "A residential program wants to adopt locked egress and continuous physical blocking for a client whose elopement is maintained by access to outdoor play. A less restrictive function-matched plan (functional communication for outdoor access, scheduled play, and environmental enrichment) has not been implemented with integrity. Risk meetings cite staffing convenience for night shift. What selection decision is MOST consistent with least-restrictive practice?",
    "B",
    [
      "Install locked egress first because it is administratively simple for night staff and reduces documentation burden.",
      "Implement and evaluate the less restrictive function-matched plan with integrity before escalating to more restrictive environmental restriction, unless imminent danger uniquely requires temporary emergency measures with proper authorization.",
      "Use the most restrictive option available immediately to guarantee zero elopement risk forever without trying lesser alternatives.",
      "Skip function-matched alternatives whenever leadership prefers restriction for census optics.",
    ],
    [
      "Administrative ease does not justify skipping less restrictive, function-matched options.",
      "Least-restrictive practice requires trying effective, less intrusive function-matched interventions with integrity before escalating—except true emergencies under appropriate consent/authorization pathways.",
      "Maximal restriction by default conflicts with least-restrictive, dignity-oriented selection.",
      "Leadership preference and optics do not override least-restrictive sequencing.",
    ],
  ),
];

export const EXPANDED2_I: BDSQuestion[] = [
  authored2(
    2031,
    "I",
    "An RBT repeatedly fails stimulus-control transfer during DTT despite emailed protocol PDFs and a passing quiz. Clients are making little progress on those programs. The supervisor has avoided live feedback because the RBT is a close friend of the clinic owner. What supervision strategy is MOST aligned with competency-based practice?",
    "D",
    [
      "Continue email-only reminders until graphs improve on their own to avoid workplace tension.",
      "Reassign all cases permanently without attempting structured skill building or documentation of the performance problem.",
      "Deliver only global praise in group meetings, omitting specific performance criteria, to protect relationships.",
      "Use Behavioral Skills Training with an observable fidelity checklist—instructions, modeling, rehearsal, and performance-based feedback—then re-probe in vivo, documenting contacts despite dual-relationship pressure.",
    ],
    [
      "Passive written contact rarely remediates complex implementation skills and may abandon client interests.",
      "Reassignment without training can abandon supervisory responsibility for skill development when remediation is feasible.",
      "Nonspecific praise does not shape protocol-accurate performance.",
      "BST with performance criteria is the competency-based standard; friendship with ownership does not waive the duty to observe, train, and document—and may require role remediation if objectivity is impaired.",
    ],
  ),
  authored2(
    2032,
    "I",
    "A training program advances trainees to independent session leadership after a single 80% quiz, no live demonstration, and no fidelity sign-off. Several trainees later show critical safety-protocol failures. The owner prefers the quiz gate because it is fast for hiring. Which training approach should the supervisor insist on instead?",
    "A",
    [
      "Competency-based training—trainees demonstrate each critical skill to mastery criteria under observation before independent performance is authorized.",
      "Knowledge quizzes alone as sufficient evidence of readiness for independent practice.",
      "Time-in-seat hour totals without observing performance quality.",
      "Peer popularity ratings as the primary competency gate for safety skills.",
    ],
    [
      "Competency-based gates require observed mastery of critical skills before independent practice—especially where safety and client welfare are at stake.",
      "Quizzes assess verbal knowledge, not fluent accurate implementation under session conditions.",
      "Hours without verified performance do not establish competence.",
      "Social popularity is unrelated to protocol fidelity.",
    ],
  ),
  authored2(
    2033,
    "I",
    "A supervisor's corrective feedback to one trainee is rare, delayed, and inconsistently paired with any improvement in prompt timing; correct performances also go unacknowledged. The trainee stops asking questions after a harsh public critique. Using PIC/NIC analysis, which change is MOST likely to strengthen desired supervisee performance while remaining professional?",
    "C",
    [
      "Make all feedback negative, uncertain, and delayed to 'keep trainees humble' under evaluation pressure.",
      "Deliver feedback only in annual reviews so consequences remain distant from session performance.",
      "Provide positive, immediate, and certain consequences for correct performances; deliver corrective feedback privately, timely, and consistently tied to observable criteria rather than rare public reprimands.",
      "Avoid observing sessions so consequences never contact supervisee behavior and conflict is minimized.",
    ],
    [
      "NIC-heavy climates suppress reporting and fail to differentially reinforce correct performance.",
      "Annual-only feedback maximizes delay and weakens contingency contact with session behavior.",
      "PIC consequences for correct performance—and reliable, respectful corrective contact—are more effective than rare/uncertain/delayed or publicly humiliating patterns.",
      "Without observation, performance consequences cannot systematically shape skill; avoiding observation abandons supervision duties.",
    ],
  ),
  authored2(
    2034,
    "I",
    "An RBT works 40 hours in a two-week period. Documentation shows 20 minutes of qualifying supervision, no observation of service delivery, and several entries labeled 'supervision' that were actually billing meetings the RBT did not attend. The owner asks the BCBA to 'leave the logs' because an audit is unlikely. What supervisory correction is MOST aligned with the RBT supervision percentage/observation standard?",
    "B",
    [
      "Treat quiz completion and hallway greetings as substitutes for the required supervision percentage and observation.",
      "Increase qualifying supervision to meet the required percentage of hours worked for the period, include the observational component, correct inaccurate documentation, and refuse to leave falsified logs unchanged.",
      "Waive supervision for busy months when experienced RBTs are on the roster.",
      "Allow the RBT to self-attest that informal chats met the standard without supervisor verification.",
    ],
    [
      "Didactic quizzes and informal chats do not replace structured supervision percentage and observation requirements.",
      "Supervisors must meet percentage/observation standards and maintain truthful records; leaving falsified logs is an ethics-adjacent documentation failure.",
      "Experience does not eliminate ongoing supervision obligations.",
      "Self-attestation without qualifying contact fails the standard.",
    ],
  ),
  authored2(
    2035,
    "I",
    "A fieldwork trainee asks the BCBA to sign a monthly experience form that includes 18 hours labeled as unrestricted activities the BCBA never assigned, observed, or discussed. The trainee says the site 'always estimates those hours' and that refusing will delay their exam eligibility. What is the MOST responsible supervisor action?",
    "D",
    [
      "Sign the form to preserve the trainee's timeline and correct totals later if audited.",
      "Sign now and coach the trainee to invent narrative notes that match the inflated hours.",
      "Transfer signing authority to an office manager who never supervised the activities.",
      "Refuse to attest to hours not actually supervised or verified; document only accurate activities consistent with fieldwork requirements and explain the refusal.",
    ],
    [
      "Signing inaccurate hours is a documentation integrity violation, not a kindness.",
      "Fabricating notes compounds misrepresentation.",
      "Attestation responsibility cannot be offloaded to someone without supervisory knowledge.",
      "Supervisors may attest only to fieldwork they can honestly verify; exam-timeline pressure does not justify false attestation.",
    ],
  ),
  authored2(
    2036,
    "I",
    "A BCBA supervising an RBT begins a romantic relationship with that RBT while still evaluating performance, assigning cases, setting schedules, and signing documentation. The BCBA believes private feelings will not affect judgment and prefers not to disclose to the organization. What is the MOST appropriate ethical supervision response?",
    "A",
    [
      "Recognize a multiple relationship that risks impaired objectivity; discontinue the dual-role arrangement through appropriate transfer of supervision, disclose as required by policy/ethics, and document the transition.",
      "Continue both roles unchanged because intent to remain unbiased is sufficient protection.",
      "Increase evaluative power over the RBT to 'test' whether the relationship affects ratings.",
      "Keep the romance private and retain supervisory authority while blocking the RBT from raising concerns.",
    ],
    [
      "Romantic involvement with a current supervisee is a classic multiple relationship requiring role remediation to protect objectivity, the supervisee, and clients.",
      "Good intentions do not neutralize structural conflicts in evaluative supervision.",
      "Intensifying power differentials worsens the conflict.",
      "Concealment preserves the conflict and adds transparency and potential retaliation risks.",
    ],
  ),
  authored2(
    2037,
    "I",
    "A clinic director tells a BCBA to have an RBT 'write the full behavior plan and pick the restrictive procedures' for a complex new case while the BCBA remains supervisor of record for billing. The RBT has not demonstrated competence in assessment or plan design. The director cites productivity targets. What is the MOST appropriate supervisory stance?",
    "C",
    [
      "Delegate plan authorship and restrictive-procedure selection wholesale because RBTs bill at a lower rate.",
      "Allow the RBT to practice beyond competence if the BCBA promises to glance at the plan after submission.",
      "Decline unsafe delegation—retain responsibility for assessment and plan decisions within BCBA scope, assign only tasks within the RBT's demonstrated competence, and document concerns up the appropriate chain.",
      "Accept the directive without documentation to avoid workplace conflict and meet productivity quotas.",
    ],
    [
      "Cost savings do not justify delegating activities outside RBT scope and competence.",
      "Post-hoc glancing does not constitute adequate supervisory control of restricted activities.",
      "Supervisors must delegate only within competence/scope and remain accountable for restricted decision-making—productivity pressure does not waive that duty.",
      "Avoiding conflict does not excuse supervisory abandonment; documentation protects clients and the record.",
    ],
  ),
  authored2(
    2038,
    "I",
    "A BCBA is resigning in three weeks. Several trainees still need observation hours and performance feedback tied to that supervisor. The clinic has not named a receiving supervisor; leadership suggests the BCBA 'pre-sign next month's hours' so trainees are not delayed. What termination-of-supervision practice is MOST responsible?",
    "B",
    [
      "Stop all contact immediately and leave trainees to find coverage without notice or transfer plan.",
      "Provide timely notice, coordinate an orderly transfer to a qualified supervisor, continue required contacts through the transition, document the handoff of responsibilities and pending competencies, and refuse to attest to future hours not yet supervised.",
      "Sign remaining anticipated hours in advance for the next two months to 'clear the books' before departure.",
      "Tell trainees to list a different BCBA's name on forms without that BCBA's agreement.",
    ],
    [
      "Abrupt abandonment harms trainees and clients and violates responsible termination expectations.",
      "Responsible termination includes notice, continuity planning, ongoing duties through transition, clear documentation, and honest attestation—only for supervision actually provided.",
      "Prospective attestation of uncompleted supervision is dishonest documentation.",
      "Listing another BCBA without agreement falsifies supervision relationships.",
    ],
  ),
];
