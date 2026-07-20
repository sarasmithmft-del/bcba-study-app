import type { BDSQuestion } from "@/lib/content-types";

/**
 * Merged after each extension blueprint primary item so every chapter exposes a Chapter quizzes flow
 * (same pattern as the expanded bank in seeded module JSON).
 * mod07 extras pair with Chapter 7 tail items for fifty-item augmentation—sixth-ed triangulation rehearsals.
 * mod08 extras pair with Chapter 8 tails—descriptive / correlational reads plus IOA-aligned coding honesty.
 * mod09 extras pair with Chapter 9 tails—cues on evocative contrasts versus safeguards honesty.
 * mod10 extras pair with Chapter 10 tails—overlap/practical-significance reads plus fidelity overlays and transparent captions.
 * mod02 extras pair with Chapter 11 tails—reinforcer-type discrimination, social vs automatic pathways, and MO-aware reinforcement programming.
 * mod11 extras pair with Chapter 6 tails—inspection confounds (trend / variability), proportional fidelity, anti-deceptive decks.
 * mod12 extras pair with Chapter 8 tails—resurgence / withdrawal logic plus welfare redesigns (Domain E) and reversal fidelity dossiers (Domain C).
 * mod36 extras pair with Chapter 15 tails—response cost vs timeout, NP vs extinction discrimination, and punishment-trap safeguards.
 * mod35 extras pair with Chapter 14 tails—suppression vs durable decrease, PP vs NR discrimination, and side-effect safeguards.
 * mod33 extras pair with Chapter 12 tails—escape vs avoidance timing, NR-not-punishment discrimination, and ethical escape-maintained behavior.
 * mod13 extras pair with Chapter 13 tails—staggered replication logic plus covariance fidelity (Domain C) and transparent independence reporting (Domain E).
 * mod14 extras pair with Chapter 14 tails—changing-criterion correspondence (Domain F), delivery fidelity overlays (Domain C), and stakeholder-calibrated tiers (Domain E).
 * mod15 extras pair with Chapter 15 tails—multitreatment juxtaposition versus sequence transparency / fidelity and humane contrasts.
 * mod16 extras pair with Chapter 10 tails—validity-type discrimination, replication labels, and Cooper internal-validity evaluation sequence.
 * mod17 extras pair with Chapter 16 tails—AO/satiation versus SD-stable performance, CMO learned pathways, and context-log discipline.
 * mod18 extras pair with Chapter 17 tails—discrimination/generalization, SD fidelity + prompt topography logs (Domain C), truthful independence claims (Domain E).
 * mod19 extras pair with Chapter 18 tails—Verbal Behavior (mand/tact/intraverbal/echoic discrimination), evocative + MO documentation (Domain C), reinforcing speaker behavior (Domain F).
 * mod20 extras pair with Chapter 19 tails—equivalence/emergent relations, symmetry–transitivity probe logs (Domain C), truthful mastery claims (Domain E).
 * mod21 extras pair with Chapter 20 tails—nonequivalence/relational probes (Domain F) and dissemination honesty (Domain E).
 * mod22 extras pair with Chapter 21 tails—generalized imitation probes, model fidelity (Domain C), humane shaping ethics (Domain E).
 * mod23 extras pair with Chapter 22 tails—within-tier variability before thinning (Domain C), humane plateau coaching (Domain E).
 * mod24 extras pair with Chapter 23 tails—whole-chain integrity before mastery claims (Domain F), culturally valid task analysis (Domain E).
 * mod25 extras pair with Chapter 24 tails—resurgence teaching (Domain F), extinction integrity collapse (Domain C/E).
 * mod26 extras pair with Chapter 25 tails—omission coercion in lean DRA/DRO (Domain E), full-session DRO redesign (Domain E).
 * mod27 extras pair with Chapter 26 tails—NCR schedule fidelity (Domain C), slideshow-only environmental plans (Domain E).
 * mod28 extras pair with Chapter 27 tails—modality-accurate reporting (Domain E/F), FAST vs descriptive triangulation (Domain F).
 * mod29 extras pair with Chapter 28 tails—interdependent bullying safeguards (Domain E), coercive contract jargon (Domain E).
 * mod30 extras pair with Chapter 29 tails—collateral IOA mismatch (Domain C), unlimited self-reinforcement guardrails (Domain E).
 * mod32 extras pair with Chapter 31 tails—HIPAA/lawful disclosure vs PR scrubbing (Domain E), dual-relationship boundary plans (Domain E).
 */
export const EXTENSION_QUIZ_EXTRAS: Partial<Record<string, BDSQuestion[]>> = {
  mod02: [
    {
      id: "mod02-q2",
      stem: "Following each correct worksheet, teacher smiles and gives a thumbs-up sticker; completion rate climbs. MOST precise classification:",
      options: [
        {
          key: "A",
          text: "Positive reinforcement—presentation of reinforcing stimuli contingent on responding.",
          correct: true,
          rationale:
            "Added praise and sticker stimuli follow correct responses while future responding increases—a textbook positive reinforcement pattern.",
        },
        { key: "B", text: "Negative reinforcement.", correct: false, rationale: "No aversive stimulus is terminated or postponed after the responses." },
        { key: "C", text: "Positive punishment.", correct: false, rationale: "Consequences are appetitive and behavior increased—not suppressed." },
        { key: "D", text: "Extinction.", correct: false, rationale: "Relevant reinforcers are delivered rather than withheld." },
      ],
    },
    {
      id: "mod02-q3",
      stem: "Green light on desk means polite requests produce snack access; amber means requests never produce snacks tonight. MOST accurate mapping:",
      options: [
        {
          key: "A",
          text: "Green light functions as SD signaling reinforcement availability; amber signals extinction for that contingency.",
          correct: true,
          rationale:
            "SD correlates historically with reinforcement; S-delta/extinction conditions document non-reinforcement for the same response class.",
        },
        { key: "B", text: "Both lights abolish motivation equally.", correct: false, rationale: "Signals describe contingency availability—not satiation mechanics." },
        { key: "C", text: "Amber cues positive reinforcement for requests.", correct: false, rationale: "Snack access is withheld under amber signaling." },
        { key: "D", text: "Green light cues respondent elicitation of requests.", correct: false, rationale: "Requests remain operants occasioned by discriminative stimuli." },
      ],
    },
  ],
  mod36: [
    {
      id: "mod36-q2",
      stem: "Each out-of-seat episode costs two tokens exchangeable for tablet time; out-of-seat decreases—MOST precise process:",
      options: [
        {
          key: "A",
          text: "Negative punishment (response cost)—reinforcer removed contingent on behavior.",
          correct: true,
          rationale:
            "Tokens functioned as conditioned reinforcers and were removed contingent on out-of-seat with verified rate decrease.",
        },
        { key: "B", text: "Positive punishment.", correct: false, rationale: "Reinforcer removed—not stimulus added." },
        { key: "C", text: "Negative reinforcement.", correct: false, rationale: "NR increases behavior via aversive removal." },
        { key: "D", text: "Extinction.", correct: false, rationale: "Contingent per-response removal—not total withholding of maintaining SR." },
      ],
    },
    {
      id: "mod36-q3",
      stem: "Timeout from math worksheet; problem behavior increases over two weeks suggests:",
      options: [
        {
          key: "A",
          text: "Punishment trap—timeout may function as escape NR from aversive demands.",
          correct: true,
          rationale:
            "Cooper warns timeout can reinforce escape when it removes the learner from non-preferred tasks—rate increased.",
        },
        { key: "B", text: "Verified negative punishment.", correct: false, rationale: "Punishment requires durable decrease." },
        { key: "C", text: "Extinction.", correct: false, rationale: "Timeout removes access; rate increased." },
        { key: "D", text: "Positive punishment.", correct: false, rationale: "Reinforcer access removed—not stimulus added." },
      ],
    },
  ],
  mod35: [
    {
      id: "mod35-q2",
      stem: "Contingent reprimand; target behavior decreases over sessions—if verified, MOST precise process:",
      options: [
        {
          key: "A",
          text: "Positive punishment (added stimulus decreases future rate).",
          correct: true,
          rationale:
            "Stimulus added contingent on behavior with verified rate decrease—positive punishment when function is confirmed.",
        },
        { key: "B", text: "Negative reinforcement.", correct: false, rationale: "NR increases behavior via aversive removal." },
        { key: "C", text: "Negative punishment.", correct: false, rationale: "Negative punishment removes reinforcers." },
        { key: "D", text: "Extinction.", correct: false, rationale: "Extinction withholds maintaining reinforcer." },
      ],
    },
    {
      id: "mod35-q3",
      stem: "Immediate stop of behavior without durable rate decrease suggests:",
      options: [
        {
          key: "A",
          text: "Suppression—not sufficient evidence of positive punishment function.",
          correct: true,
          rationale:
            "Cooper stresses durable future rate decrease across conditions—not momentary halt during punisher delivery.",
        },
        { key: "B", text: "Verified punishment effect.", correct: false, rationale: "Punishment requires durable decrease." },
        { key: "C", text: "Automatic reinforcement.", correct: false, rationale: "Automatic reinforcement increases behavior." },
        { key: "D", text: "Negative reinforcement.", correct: false, rationale: "NR increases behavior." },
      ],
    },
  ],
  mod34: [
    {
      id: "mod34-q2",
      stem: "Steady high rate, brief pause after each reinforcer, FR schedule—pause length tracks ratio size. This pattern fits:",
      options: [
        {
          key: "A",
          text: "Fixed ratio post-reinforcement pause—not interval scalloping.",
          correct: true,
          rationale:
            "FR produces characteristic pauses after reinforcement delivery; pause length scales with ratio size.",
        },
        { key: "B", text: "Fixed interval scalloping.", correct: false, rationale: "FI scallops toward interval end." },
        { key: "C", text: "Variable interval steady moderate rate.", correct: false, rationale: "VR/FR ratio context differs." },
        { key: "D", text: "Extinction burst.", correct: false, rationale: "Reinforcement is occurring." },
      ],
    },
    {
      id: "mod34-q3",
      stem: "Slot-machine-like responding with minimal pausing and high resistance to extinction suggests:",
      options: [
        {
          key: "A",
          text: "Variable ratio schedule maintaining behavior.",
          correct: true,
          rationale:
            "VR produces high steady rates with minimal pausing and strong resistance to extinction.",
        },
        { key: "B", text: "Fixed interval 1.", correct: false, rationale: "FI produces scalloping." },
        { key: "C", text: "Continuous reinforcement only.", correct: false, rationale: "VR intermittent pattern." },
        { key: "D", text: "Fixed ratio 1 exclusively.", correct: false, rationale: "FR1 pause pattern differs from VR." },
      ],
    },
  ],
  mod33: [
    {
      id: "mod33-q2",
      stem: "Learner screams; adult removes demand; screaming increases next week—MOST precise label?",
      options: [
        {
          key: "A",
          text: "Escape via socially mediated negative reinforcement.",
          correct: true,
          rationale:
            "Adult removes ongoing aversive (demand) contingent on screaming while rate increases—socially mediated escape NR.",
        },
        { key: "B", text: "Positive reinforcement because adult acted.", correct: false, rationale: "Aversive removed—not appetitive stimulus added." },
        { key: "C", text: "Positive punishment because demand stopped.", correct: false, rationale: "Punishment requires rate decrease." },
        { key: "D", text: "Extinction because demand was removed.", correct: false, rationale: "Contingent removal strengthened behavior." },
      ],
    },
    {
      id: "mod33-q3",
      stem: "Walking a long route so a warning bell never rings—route walking increases. MOST accurate NR subtype?",
      options: [
        {
          key: "A",
          text: "Avoidance—responding prevents aversive contact before it begins.",
          correct: true,
          rationale:
            "Bell is prevented from contacting the organism—avoidance NR when route-taking increases.",
        },
        { key: "B", text: "Escape from ongoing bell.", correct: false, rationale: "Bell never occurred on the chosen route." },
        { key: "C", text: "Positive reinforcement for walking.", correct: false, rationale: "Prevention of aversive—not added SR." },
        { key: "D", text: "Automatic punishment.", correct: false, rationale: "Rate increased; no punisher added." },
      ],
    },
  ],
  mod07: [
    {
      id: "mod07-q2",
      stem: "Teacher FAST checklist ranks tangible reinforcement highest but descriptive observation shows aggression almost always precedes instructional demands. MOST defensible clinician response?",
      options: [
        { key: "A", text: "Disregard FAST because anecdotes trump checklists.", correct: false, rationale: "Ignoring data wastes triangulation—you integrate rather than discard wholesale." },
        { key: "B", text: "Frame tangible rankings as tentative while intensifying descriptive codes around instructional-demand routines and contingent tangible deliveries alike.", correct: true, rationale: "Domain F triangulation uses descriptive observation to adjudicate contradictory indirect guesses before certainty claims." },
        { key: "C", text: "Announce tangible reinforcement definitive without corroboration.", correct: false, rationale: "Conflicts undermine premature declarations." },
        { key: "D", text: "Stop all interviews with caregivers.", correct: false, rationale: "Stakeholder instruments remain informative when paired with observation." },
      ],
    },
    {
      id: "mod07-q3",
      stem: "MAS/FAST questionnaires primarily quantify:",
      options: [
        { key: "A", text: "Caregiver/stakeholder estimates of reinforcing consequences tied to referrals.", correct: true, rationale: "Indirect scales capture perceived probability rankings prior to probes." },
        { key: "B", text: "IRT distributions from continuous recordings.", correct: false, rationale: "IRT requires timestamped discrete data—not checklist recall." },
        { key: "C", text: "Experimental extinction curves.", correct: false, rationale: "Indirect tools lack contingency isolation intrinsic to experimentation." },
        { key: "D", text: "Permanent IQ classification.", correct: false, rationale: "Distinct measurement domain unrelated to indirect FA instruments." },
      ],
    },
  ],
  mod08: [
    {
      id: "mod08-q2",
      stem: "Scatterplot matrices MOST help clinicians by:",
      options: [
        { key: "A", text: "Pinpoint temporal windows needing denser qualitative observation.", correct: true, rationale: "Scatterplots localize Domain F hotspots while guiding where descriptive density (often Domain C-credible coding) earns funding." },
        { key: "B", text: "Obviating descriptive ABC summaries.", correct: false, rationale: "Scatterplots complement—not replace—behavioral narratives." },
        { key: "C", text: "Proving causal reinforcers without experimentation.", correct: false, rationale: "Correlation across time motivates hypotheses—not definitive functional classification." },
        { key: "D", text: "Eliminating interobserver calibration.", correct: false, rationale: "Agreement checks keep descriptive prevalence summaries auditable—a Domain C habit supporting Domain F interpretations." },
      ],
    },
    {
      id: "mod08-q3",
      stem: "ABC narrative recordings primarily support:",
      options: [
        { key: "A", text: "Sequentially documenting presumed antecedent–behavior–consequence links for hypothesis building.", correct: true, rationale: "Sequential ABC narration stays correlational/description scaffolding—not experimental proof—matching Chapter 7 Domain F expectations." },
        { key: "B", text: "Guaranteeing experimental control.", correct: false, rationale: "Narratives lack contingency isolation intrinsic to manipulated analyses." },
        { key: "C", text: "Replacing informed consent conversations.", correct: false, rationale: "Ethical collaboration remains obligatory." },
        { key: "D", text: "Removing graphs from reports.", correct: false, rationale: "Visual summaries often accompany descriptive packages." },
      ],
    },
  ],
  mod09: [
    {
      id: "mod09-q2",
      stem: "During a multi-element FA, an escape/test condition MOST directly evaluates whether:",
      options: [
        { key: "A", text: "Demand removals contingent on targeted behavior elevate future probability.", correct: true, rationale: "Escape test conditions programmatically withdraw demands contingent on occurrences—core Domain F contrast logic before interpreting spikes." },
        { key: "B", text: "Automatic reinforcement alone sustains responding.", correct: false, rationale: "Alone/isolation variants—not demand removal—isolate automatic pathways." },
        { key: "C", text: "Respondent extinction occurs.", correct: false, rationale: "Functional analyses manipulate operant consequences rather than extinguishing respondent arcs." },
        { key: "D", text: "Caregiver IQ predicts reinforcer hierarchies.", correct: false, rationale: "Irrelevant construct versus FA logic." },
      ],
    },
    {
      id: "mod09-q3",
      stem: "Control/enriched play comparisons within FA contexts primarily provide:",
      options: [
        { key: "A", text: "A contrast where programmed contingencies stay minimal absent high-quality reinforcement schedules.", correct: true, rationale: "Play/control baselines juxtapose evocative spikes with ethically thin reinforcement packages—distinct from punitive or automatic-reinforcement claims absent manipulation." },
        { key: "B", text: "Guaranteed punishment exposure.", correct: false, rationale: "Classic FA controls avoid programmed punishment unless explicitly designing punisher tests." },
        { key: "C", text: "Automatic FA termination rules.", correct: false, rationale: "Termination criteria depend on protocol safeguards rather than inherent control-phase definition." },
        { key: "D", text: "Replacement behavioral definitions unrelated to referrals.", correct: false, rationale: "Conditions still track referral-defined targets." },
      ],
    },
  ],
  mod10: [
    {
      id: "mod10-q2",
      stem: "When baseline and intervention latency distributions overlap extensively, MOST accurate interpretation?",
      options: [
        { key: "A", text: "Weak differentiation unless auxiliary metrics clarify separation.", correct: true, rationale: "Heavy overlap communicates tentative differentiation—layer dispersion, ancillary outcome metrics, stability, and IOA dashboards before certainty scripts." },
        { key: "B", text: "Airtight causal proof achieved.", correct: false, rationale: "Heavy overlap warns against prematurely claiming control." },
        { key: "C", text: "Measurement halted prematurely.", correct: false, rationale: "Overlap critiques interpretation—not necessarily cessation." },
        { key: "D", text: "Automatic reinforcement dominates.", correct: false, rationale: "Interpretive metric unrelated to contingency class." },
      ],
    },
    {
      id: "mod10-q3",
      stem: "Trend lines juxtaposed across phases MOST emphasize:",
      options: [
        { key: "A", text: "Directionality of responding despite within-phase variability.", correct: true, rationale: "Trend narration highlights directional velocity while dispersion stays visible—distinct from caregiver satisfaction or social validity overlays alone." },
        { key: "B", text: "Exact IOA percentages.", correct: false, rationale: "IOA summarizes observer agreement—not slope summaries." },
        { key: "C", text: "Respondent extinction readiness.", correct: false, rationale: "Interpretive overlays address operant time-series—not reflex arcs uniquely." },
        { key: "D", text: "Caregiver satisfaction exclusively.", correct: false, rationale: "Social validity distinct from graphed dimensional trends directly." },
      ],
    },
  ],
  mod11: [
    {
      id: "mod11-q2",
      stem: "Ignoring steady baseline drift attributing all post-intervention slope to treatment exemplifies:",
      options: [
        { key: "A", text: "Trend confound undermining attribution logic.", correct: true, rationale: "Visual inspection demands baseline drift overlays before monocausal blaming or praising interventions—paired with fidelity-visible graphs and surfaced disagreement when supervisors split." },
        { key: "B", text: "Proper exclusive reliance on overlap alone.", correct: false, rationale: "Overlap must align with trend appraisals holistically." },
        { key: "C", text: "Respondent calibration success.", correct: false, rationale: "Irrelevant domain." },
        { key: "D", text: "Guaranteed punisher identification.", correct: false, rationale: "Graph reading does not classify contingencies definitively." },
      ],
    },
    {
      id: "mod11-q3",
      stem: "High within-phase variability MOST often signals analysts to:",
      options: [
        { key: "A", text: "Interpret phase contrasts cautiously absent stability improvements.", correct: true, rationale: "Superiority claims stumble when dispersion explodes absent stability—invite IOA overlays and temperate captions stakeholders can trust." },
        { key: "B", text: "Skip IOA probes.", correct: false, rationale: "Variability may reflect measurement fidelity problems requiring IOA review." },
        { key: "C", text: "Guarantee automatic reinforcement hypotheses.", correct: false, rationale: "Interpretive ambiguity does not dictate contingency class prematurely." },
        { key: "D", text: "Publish definitive cures.", correct: false, rationale: "Volatile series resist confident dissemination claims." },
      ],
    },
  ],
  mod12: [
    {
      id: "mod12-q2",
      stem: "ABAB logic MOST directly demonstrates experimental control through:",
      options: [
        { key: "A", text: "Reintroducing interventions after withdrawal-attributed resurgence patterns.", correct: true, rationale: "AB rotations pair resurgence arcs with contingency returns—central reversal narration plus transparent phase logs (Domain C) and welfare safeguards (Domain E)." },
        { key: "B", text: "Group mean comparisons exclusively.", correct: false, rationale: "Single-subject withdrawals pivot on repeated phase contrasts within one organism." },
        { key: "C", text: "Eliminating all baseline documentation.", correct: false, rationale: "Withdrawals hinge on disciplined baseline depiction." },
        { key: "D", text: "Measuring respondent habituation curves only.", correct: false, rationale: "Target operant—not reflex—patterns." },
      ],
    },
    {
      id: "mod12-q3",
      stem: "When full withdrawals violate welfare constraints, MOST defensible analytic alternative referenced in practice:",
      options: [
        { key: "A", text: "Design staggered/multiple baseline or reversal-lite substitutes preserving ethical safeguards.", correct: true, rationale: "Domain E caps harmful removals yet Domain F still demands differentiation—ethical multiples, reversal-lite thinning, and ATDs recycle accountability without deprivation optics (Domain C fidelity logging)." },
        { key: "B", text: "Remove informed consent safeguards.", correct: false, rationale: "Violates professional obligations." },
        { key: "C", text: "Conduct covert deprivation trials.", correct: false, rationale: "Deceptive manipulations contradict ethical codes." },
        { key: "D", text: "Replace data with anecdotes.", correct: false, rationale: "Abandons technological accountability." },
      ],
    },
  ],
  mod13: [
    {
      id: "mod13-q2",
      stem: "Multiple baseline designs stagger intervention starts primarily to:",
      options: [
        { key: "A", text: "Reduce covariance threats where untreated series should remain stable absent intervention.", correct: true, rationale: "Stagger logic documents whether shifts track introduction timing—core Domain F multiple-baseline accountability—while Domain C logs defend phase boundaries and Domain E transparency demands naming spillover when tiers rise early." },
        { key: "B", text: "Guarantee identical baseline means across tiers.", correct: false, rationale: "Baseline parameters may differ socially; analytic logic hinges on responsiveness timing." },
        { key: "C", text: "Eliminate need for graphed overlays.", correct: false, rationale: "Graphs remain central persuasive media." },
        { key: "D", text: "Replace stakeholder consent obligations.", correct: false, rationale: "Ethics persist regardless." },
      ],
    },
    {
      id: "mod13-q3",
      stem: "When observers fear rapid generalization contaminates untreated baselines prematurely, MOST aligned response?",
      options: [
        { key: "A", text: "Adjust stagger pacing/documentation while probing independence assumptions.", correct: true, rationale: "Covariance cues force stagger buffers, procedural isolation, or documented linkage hypotheses—honest Domain E independence claims plus Domain C fidelity visibility and supervisory candor." },
        { key: "B", text: "Ignore covariance concerns indefinitely.", correct: false, rationale: "Threatens causal clarity." },
        { key: "C", text: "Delete contrasting baselines artificially.", correct: false, rationale: "Falsifying records violates analytic integrity." },
        { key: "D", text: "Switch to hypothetical dimensional analysis only.", correct: false, rationale: "Operational data still required." },
      ],
    },
  ],
  mod14: [
    {
      id: "mod14-q2",
      stem: "Changing-criterion designs attribute experimental control MOST convincingly when:",
      options: [
        { key: "A", text: "Stepwise mastery jumps covary systematically with calibrated reinforcement deliveries.", correct: true, rationale: "Correspondence—the changing-criterion hallmark—stands on timestamped reinforcement alignment (Domain C) with explicit milestone ethics signatures (Domain E) when reversing care would harm learners." },
        { key: "B", text: "Criterion leaps occur randomly irrespective of contingency schedules.", correct: false, rationale: "Disconnects sabotage causal inference." },
        { key: "C", text: "Baseline durations equal zero intervals.", correct: false, rationale: "Insufficient contrast space undermines persuasive graphs." },
        { key: "D", text: "Observers refuse interobserver calibration.", correct: false, rationale: "Measurement quality remains prerequisite regardless of design variant." },
      ],
    },
    {
      id: "mod14-q3",
      stem: "Socially calibrated benchmark increments within changing criterion logic aim to:",
      options: [
        { key: "A", text: "Keep performance targets aligned with stakeholder-valued outcomes—not arbitrary staircases.", correct: true, rationale: "Benchmark calibration keeps Domain E social-validity pledges tethered while Domain C graphs overlay deliveries and Domain F attribution stays contingency-visible." },
        { key: "B", text: "Maximize unknowable covert mediators exclusively.", correct: false, rationale: "Operational clarity still governs tiers." },
        { key: "C", text: "Eliminate graphs from supervision.", correct: false, rationale: "Criterion stair overlays remain persuasive documentation." },
        { key: "D", text: "Guarantee automatic reinforcement analyses.", correct: false, rationale: "Maintenance mechanisms still require investigative logic." },
      ],
    },
  ],
  mod15: [
    {
      id: "mod15-q2",
      stem: "Alternating treatments designs MOST directly accelerate comparative inference by:",
      options: [
        { key: "A", text: "Rotating interventions rapidly within comparable observation windows.", correct: true, rationale: "Domain F ATDs compress timelines for differentiation while Domain C ledgers tame sequence confounds plus fidelity visibility and Domain E keep comparisons humane—not theatrical withdrawals." },
        { key: "B", text: "Eliminating baseline measurement altogether.", correct: false, rationale: "Baselines or concurrent anchors remain analytically informative depending on variant." },
        { key: "C", text: "Guaranteeing zero multitreatment interference.", correct: false, rationale: "Rapid switches invite spillover reviewers must caveat explicitly." },
        { key: "D", text: "Replacing procedural fidelity obligations.", correct: false, rationale: "Documentation obligations persist regardless." },
      ],
    },
    {
      id: "mod15-q3",
      stem: "Multitreatment interference within alternating comparisons MOST warns clinicians:",
      options: [
        { key: "A", text: "Adjacent interventions may elevate both envelopes obscuring which contingency deserves credit.", correct: true, rationale: "Multitreatment interference cautions monocausal superiority—stay tentative, thicken fidelity overlays, and disclose limits honestly (Domain E) before marketing wins." },
        { key: "B", text: "Overlap proves respondent extinction dominance.", correct: false, rationale: "Irrelevant contingency classification absent respondent framing." },
        { key: "C", text: "Withdrawals obsolete universally.", correct: false, rationale: "Ethics still govern whether withdrawals—or contrasts—remain permissible." },
        { key: "D", text: "Social validity irrelevant permanently.", correct: false, rationale: "Stakeholder alignment persists across experimental tactics." },
      ],
    },
  ],
  mod16: [
    {
      id: "mod16-q2",
      stem: "A team reports strong treatment effects but fidelity data show the planned intervention ran at 45% integrity. MOST accurate evaluation concern:",
      options: [
        {
          key: "A",
          text: "Internal validity is weakened because attribution to the planned IV is uncertain.",
          correct: true,
          rationale:
            "Low treatment integrity means observed change may reflect unplanned variables, incomplete implementation, or staff drift—not the documented independent variable.",
        },
        { key: "B", text: "External validity is automatically proved.", correct: false, rationale: "Fidelity speaks to whether the IV was implemented—not whether effects generalize." },
        { key: "C", text: "Social validity replaces the need for procedural checks.", correct: false, rationale: "Social validity and treatment integrity answer different evaluation questions." },
        { key: "D", text: "Measurement reactivity exclusively explains all change.", correct: false, rationale: "Reactivity is one threat; low fidelity is a separate internal-validity concern." },
      ],
    },
    {
      id: "mod16-q3",
      stem: "Same intervention package replicated with a new learner showing similar target behavior in a comparable home program. This BEST illustrates:",
      options: [
        {
          key: "A",
          text: "Direct replication strengthening confidence in the effect.",
          correct: true,
          rationale:
            "Direct replication repeats the same IV with similar behavior and subjects. It supports inference while external-validity questions may still remain for unlike settings.",
        },
        { key: "B", text: "Descriptive research without experimental logic.", correct: false, rationale: "Replication presumes prior experimental demonstration of an effect." },
        { key: "C", text: "Conceptual replication requiring a different behavioral principle.", correct: false, rationale: "Conceptual replication varies the procedure while testing the same underlying principle." },
        { key: "D", text: "Proof that external validity is unlimited.", correct: false, rationale: "Replication adds evidence; it does not eliminate all generalization questions." },
      ],
    },
  ],
  mod17: [
    {
      id: "mod17-q2",
      stem: "A learner stops responding for edible backup reinforcers right after snack, even though SD delivery and token exchange steps stayed the same. What is the best first analytic move?",
      options: [
        {
          key: "A",
          text: "Document a likely AO/satiation hypothesis and review meal-timing context before concluding treatment failure.",
          correct: true,
          rationale:
            "When implementation is stable but reinforcer impact drops after eating, an AO explanation is often stronger than an immediate SD-failure conclusion. Context logs help verify that interpretation.",
        },
        {
          key: "B",
          text: "Conclude SD fidelity failed and ignore motivation variables.",
          correct: false,
          rationale: "SD stability can coexist with reduced reinforcer value, so motivation shifts should be checked first.",
        },
        {
          key: "C",
          text: "Permanently terminate edible reinforcement without reassessment.",
          correct: false,
          rationale: "Chapter 16 emphasizes reassessment and context-based plan updates, not permanent removal without review.",
        },
        {
          key: "D",
          text: "Reclassify the case as respondent extinction and drop MO analysis.",
          correct: false,
          rationale: "This vignette is about changing consequence value, which fits MO logic better than respondent-extinction framing.",
        },
      ],
    },
    {
      id: "mod17-q3",
      stem: "A neutral hallway bell repeatedly predicts upcoming vending access, and over time the bell is followed by increased manding. This best exemplifies:",
      options: [
        {
          key: "A",
          text: "A conditioned motivating operation pathway acquired through correlated learning history.",
          correct: true,
          rationale:
            "The bell starts neutral and gains motivation-related influence through repeated pairing with relevant consequence conditions, which fits CMO logic.",
        },
        {
          key: "B",
          text: "A pure UMO process with no learned correlation component.",
          correct: false,
          rationale: "UMOs are not learned in this way; this vignette specifically describes acquired motivational influence.",
        },
        {
          key: "C",
          text: "Respondent-only preparation that replaces all SD analysis.",
          correct: false,
          rationale: "A CMO interpretation does not erase SD analysis; it adds motivation-value context through learned pairing.",
        },
        {
          key: "D",
          text: "Automatic reinforcement diagnosis without additional observation.",
          correct: false,
          rationale: "This scenario describes learned motivational signaling, not an automatic-reinforcement diagnosis shortcut.",
        },
      ],
    },
  ],
  mod18: [
    {
      id: "mod18-q2",
      stem: "Graphs show accuracy climbing while data columns omit which prompt level contacted each trial—MOST central concern?",
      options: [
        {
          key: "A",
          text: "A prompt-traceability lapse that can mislabel prompt-dependent performance as independent stimulus control.",
          correct: true,
          rationale:
            "Prompt levels must be shown alongside accuracy to support credible independence claims and valid stimulus-control interpretation.",
        },
        {
          key: "B",
          text: "Proof IOA obsolete whenever dashboards look polished aesthetically.",
          correct: false,
          rationale: "Observer agreement persists regardless of glossy slides—prompt omission remains the lapse.",
        },
        {
          key: "C",
          text: "Automatic demonstration SD abolished extinction obligations categorically.",
          correct: false,
          rationale: "SD/SΔ logic differs from withheld prompt bookkeeping critique.",
        },
        {
          key: "D",
          text: "Proof generalization gradients obsolete clinically always.",
          correct: false,
          rationale: "Generalization probes remain orthogonal to prompt-column transparency issues.",
        },
      ],
    },
    {
      id: "mod18-q3",
      stem: "Learners respond similarly to rotated dog photos post training yet withhold to cats—MOST analytic pairing?",
      options: [
        {
          key: "A",
          text: "Stimulus generalization within the trained dog class plus stimulus discrimination from non-exemplars.",
          correct: true,
          rationale:
            "The learner generalizes across similar dog exemplars while still discriminating against cats, which matches generalization-plus-discrimination logic.",
        },
        {
          key: "B",
          text: "Proof discrimination vanished because responding touched multiple exemplars.",
          correct: false,
          rationale: "Withholding to contrast class confirms discrimination survives alongside generalized responding.",
        },
        {
          key: "C",
          text: "Motivating operation abolishing SD availability exclusively universally.",
          correct: false,
          rationale: "MO framing misaligns vignette emphasizing stimulus classes contacted.",
        },
        {
          key: "D",
          text: "Respondent elicitation arc exclusively.",
          correct: false,
          rationale: "Operant discriminative histories—not reflex arcs alone—explain category contrasts.",
        },
      ],
    },
  ],
  mod19: [
    {
      id: "mod19-q2",
      stem: "Photo cards plus snack deprivation coincide during preschool mand session—graphs omit EO column supervisors requested. MOST central methodological lapse?",
      options: [
        {
          key: "A",
          text: "A documentation gap: evocative context is missing, so mand claims are not adequately corroborated.",
          correct: true,
          rationale:
            "Mand interpretation depends on evocative-context evidence. Without EO/MO columns, functional claims should remain tentative.",
        },
        { key: "B", text: "Proof intraverbals abolished discriminative stimuli categorically.", correct: false, rationale: "Intraverbals differ footing from withheld EO spreadsheets." },
        { key: "C", text: "Automatic respondent diagnosis exclusively.", correct: false, rationale: "Operant evocative programming remains explanatory frame." },
        {
          key: "D",
          text: "Replace measurement with applause tallies universally.",
          correct: false,
          rationale: "Operational columns beat proxy applause—even when cheers feel motivating.",
        },
      ],
    },
    {
      id: "mod19-q3",
      stem: "After teacher models ‘rabbit,’ learner echoes ‘rabbit’ before praise—MOST accurate operant during modeling drill?",
      options: [
        {
          key: "A",
          text: "Echoic topography mediated by imitation control plus listener reinforcement.",
          correct: true,
          rationale:
            "Model-then-imitation with point-to-point correspondence fits echoic control. Programs can later fade toward other operants while keeping reinforcement and documentation clear.",
        },
        {
          key: "B",
          text: "Mand topography solely because teacher vocalized.",
          correct: false,
          rationale: "Listener speech alone skips evocative mand analysis.",
        },
        {
          key: "C",
          text: "Tact topography solely because animals named mechanically.",
          correct: false,
          rationale: "Tacting stresses non-verbal discriminative stimuli—not modeling drills alone.",
        },
        {
          key: "D",
          text: "Intraverbal topography exclusively.",
          correct: false,
          rationale: "Intraverbals hinge verbal discriminative completions—not pure imitation.",
        },
      ],
    },
  ],
  mod20: [
    {
      id: "mod20-q2",
      stem: "District charts merge taught A→B sessions with symmetrical B→A probes in one line graph devoid of legends. MOST central methodological lapse?",
      options: [
        {
          key: "A",
          text: "An analytic separation lapse: instructed and emergent relations are blended in one graph.",
          correct: true,
          rationale:
            "Taught trials and probe outcomes must be disaggregated so symmetry/transitivity claims can be audited before broader adoption claims are made.",
        },
        {
          key: "B",
          text: "Proof symmetry identical to transitive emergence mechanically universally.",
          correct: false,
          rationale: "Symmetry and transitivity answer distinct analytic questions—even when graphs blend them unethically.",
        },
        {
          key: "C",
          text: "Automatic respondent diagnosis exclusively.",
          correct: false,
          rationale: "Equivalence programming remains operant conditional discrimination—not reflex diagnosis.",
        },
        {
          key: "D",
          text: "Replace measurement with caregiver applause counts exclusively.",
          correct: false,
          rationale: "Stakeholder joy complements—not replaces—logged probe outcomes.",
        },
      ],
    },
    {
      id: "mod20-q3",
      stem: "Instruction explicitly trains C→B while prior history taught A→B + A→C with emergent B→C confirmed. Team now claims fresh transitive proof from C→B training alone. MOST precise critique?",
      options: [
        {
          key: "A",
          text: "Direct C→B training contaminates transitive emergence interpretation—reopen experimental control + probe documentation before claiming new nodal miracles.",
          correct: true,
          rationale:
            "Directly training the tested relation contaminates derived-relation interpretation. Probe logic, training history notes, and reporting language should be reset accordingly.",
        },
        {
          key: "B",
          text: "Proof transitivity obsolete once any arrow trains mechanically.",
          correct: false,
          rationale: "Transitive interpretation depends on which relations were directly trained versus probed.",
        },
        {
          key: "C",
          text: "Symmetry probes obsolete clinically universally.",
          correct: false,
          rationale: "Symmetry evidence remains part of fuller equivalence documentation.",
        },
        {
          key: "D",
          text: "MO abolishing equivalence classes categorically.",
          correct: false,
          rationale: "MO framing misaligns instructional contamination critique.",
        },
      ],
    },
  ],
  mod21: [
    {
      id: "mod21-q2",
      stem: "Curriculum rebrands a nonequivalence relational package as equivalence certification because hero slides depict mirrored icons without withheld-probe rows. MOST accountable supervisory fix?",
      options: [
        {
          key: "A",
          text: "Correct labels; segregate instructed acquisition from withheld relational probes before symmetry marketing ships.",
          correct: true,
          rationale:
            "Domain E claims must match programmed relation evidence while Domain C tables keep auditors honest—Domain F blocks laundering analogical work into equivalence rhetoric.",
        },
        {
          key: "B",
          text: "Ship certification whenever slides depict symmetry aesthetically.",
          correct: false,
          rationale: "Visual design substitutes neither probes nor symmetrical tests.",
        },
        {
          key: "C",
          text: "Delete withheld probes to shorten appendices.",
          correct: false,
          rationale: "Selective omission breaches analytic transparency.",
        },
        {
          key: "D",
          text: "Assume nodal primes cancel instructed/derived segregation duties.",
          correct: false,
          rationale: "Hub primes clarify branches—they never excuse merged data streams.",
        },
      ],
    },
    {
      id: "mod21-q3",
      stem: "Single spreadsheet lists taught relational pairs beside analogical withhold rows without row labels distinguishing acquisition versus probe strata. MOST concise Domain C flaw?",
      options: [
        {
          key: "A",
          text: "Strata-separation gap—combined rows launder mastery claims before emergent-relation language hardens.",
          correct: true,
          rationale:
            "Partition strata so reproducible summaries match actual programming—truthful shorthand for multidisciplinary readers (Domain C).",
        },
        {
          key: "B",
          text: "MO trivia renders merged tables acceptable mechanically.",
          correct: false,
          rationale: "MO hypotheses differ methodological segregation.",
        },
        {
          key: "C",
          text: "Relational curricula ban IOA categorically.",
          correct: false,
          rationale: "IOA strengthens fuzzy probes—it does not ban programming.",
        },
        {
          key: "D",
          text: "Single-case documentation obsolete once spreadsheets exist.",
          correct: false,
          rationale: "Case formats remain reputable with disciplined appendices.",
        },
      ],
    },
  ],
  mod22: [
    {
      id: "mod22-q2",
      stem: "Modeling fidelity vanished from notes while district slideshow claims generalized imitation mastery. MOST urgent supervisory action?",
      options: [
        {
          key: "A",
          text: "Reinstate model dimension logs, reinforcement contact, imitation latency slices, plus generalized imitation probes across novel exemplars.",
          correct: true,
          rationale:
            "Domain F imitation claims hinge on fidelity + diversity evidence—with Domain E attention to consent-aligned media.",
        },
        {
          key: "B",
          text: "Accept mastery solely because caregiver audience applauded.",
          correct: false,
          rationale: "Applause substitutes neither fidelity nor probes.",
        },
        {
          key: "C",
          text: "Delete imitation goals whenever latency jitter appears.",
          correct: false,
          rationale: "Latency guides—not erases—programming.",
        },
        {
          key: "D",
          text: "Treat poster exposure alone as observational-learning proof.",
          correct: false,
          rationale: "Observational learning requires contingency contact evidence.",
        },
      ],
    },
    {
      id: "mod22-q3",
      stem: "Clinician raises voice progressively after clumsy imitation approximations. MOST urgent ethics-aligned coaching note?",
      options: [
        {
          key: "A",
          text: "Domain E risk rises when pressure replaces reinforcement-forward shaping—de-escalate, document supports, supervise humane error correction.",
          correct: true,
          rationale:
            "Coerced imitation choreography misaligns professional duties even when targets feel minor.",
        },
        {
          key: "B",
          text: "Approve intensity whenever graphs move.",
          correct: false,
          rationale: "Graph motion never licenses coercive modeling.",
        },
        {
          key: "C",
          text: "Assent irrelevant during imitation drills mechanically.",
          correct: false,
          rationale: "Assent persists across topography classes.",
        },
        {
          key: "D",
          text: "MO diagnoses excuse intimidation.",
          correct: false,
          rationale: "MO hypotheses differ escalation ethics.",
        },
      ],
    },
  ],
  mod23: [
    {
      id: "mod23-q2",
      stem: "Thinning persists while dispersion explodes inside each approximation tier verbally dismissed in supervision. MOST defensible supervisory ask?",
      options: [
        {
          key: "A",
          text: "Annotate within-tier variability alongside stability thresholds governing each thinning move before claiming readiness.",
          correct: true,
          rationale:
            "Domain C variability commentary safeguards later collapse surprises while honest notes support Domain E pacing.",
        },
        {
          key: "B",
          text: "Suppress variability commentary preserving hero captions.",
          correct: false,
          rationale: "Hidden spread misleads stakeholders.",
        },
        {
          key: "C",
          text: "Punish learners for jitter categorically.",
          correct: false,
          rationale: "Jitter cues environmental/program edits—not cruelty.",
        },
        {
          key: "D",
          text: "Delete reinforcement after first plateau.",
          correct: false,
          rationale: "Humane densification—not abrupt omission—guides plateaus.",
        },
      ],
    },
    {
      id: "mod23-q3",
      stem: "Massive leaps strand learner on plateau; clinician posts about sabotage in staff chat. MOST code-aligned response?",
      options: [
        {
          key: "A",
          text: "Coach analytic accountability—adjust grain/MO/environment privately while removing blame-forward narratives.",
          correct: true,
          rationale:
            "Shaping plateaus invite measurement-led tweaks; blame breaches Domain E and warps analytic culture.",
        },
        {
          key: "B",
          text: "Amplify public shaming reinforcing accountability.",
          correct: false,
          rationale: "Shaming substitutes punishment for problem solving.",
        },
        {
          key: "C",
          text: "Delete plateau sessions quietly.",
          correct: false,
          rationale: "Cherry picking breaches transparency.",
        },
        {
          key: "D",
          text: "Declare sabotage empirically proven.",
          correct: false,
          rationale: "Accusations need evidence—not chat venting.",
        },
      ],
    },
  ],
  mod24: [
    {
      id: "mod24-q2",
      stem: "Flawless early-link data yet whole-chain classroom probes crumble while marketing asserts mastery complete. MOST accurate description?",
      options: [
        {
          key: "A",
          text: "Whole-chain control incomplete—defer mastery claims until naturalistic sequencing integrity evidences.",
          correct: true,
          rationale:
            "Domain F chaining demands fluent integration; Domain E honesty forbids partial-link bragging.",
        },
        {
          key: "B",
          text: "Discard task analyses after dual-link success.",
          correct: false,
          rationale: "Analysis continues guiding chaining.",
        },
        {
          key: "C",
          text: "Default to punitive correction for chain drops.",
          correct: false,
          rationale: "Engineer fades/prompt ladders—not cruelty—for missing links.",
        },
        {
          key: "D",
          text: "Ignore inter-response latency whenever endpoint achieved sporadically.",
          correct: false,
          rationale: "Latency exposes weak intermediary control.",
        },
      ],
    },
    {
      id: "mod24-q3",
      stem: "Family cites culturally disrespectful chaining step resisted at home routines. MOST priority?",
      options: [
        {
          key: "A",
          text: "Co-author culturally valid substitutions + stimuli before scripted repetition continues.",
          correct: true,
          rationale:
            "Domain E outweighs convenience; revise Domain F task analyses to match stakeholder validity.",
        },
        {
          key: "B",
          text: "Insist scripted sequence universal mechanically.",
          correct: false,
          rationale: "Manuals cannot override substantive validity concerns.",
        },
        {
          key: "C",
          text: "Frame refusal as categorical noncompliance exclusively.",
          correct: false,
          rationale: "Validity concerns differ oppositional narratives.",
        },
        {
          key: "D",
          text: "Remove caregiver objections from summaries.",
          correct: false,
          rationale: "Stakeholder critiques belong in analytic records.",
        },
      ],
    },
  ],
  mod25: [
    {
      id: "mod25-q2",
      stem: "Resurgence appears after vacations despite intermittent reinforcement history. MOST supervisory teaching point?",
      options: [
        {
          key: "A",
          text: "Teach resurgence histories; widen narrative + bolster alternatives before blaming learners.",
          correct: true,
          rationale:
            "Domain F recognizes lawful resurgence; Domain E mandates compassionate fidelity—not moralizing spikes.",
        },
        {
          key: "B",
          text: "Treat resurgence proof treatment failed.",
          correct: false,
          rationale: "Resurgence is phenomenon—not existential failure.",
        },
        {
          key: "C",
          text: "Omit resurgence panels from payer decks.",
          correct: false,
          rationale: "Selective omission misleads funders.",
        },
        {
          key: "D",
          text: "Reinforce extinction class covertly undocumented.",
          correct: false,
          rationale: "Covert reinforcement vaporizes extinction integrity.",
        },
      ],
    },
    {
      id: "mod25-q3",
      stem: "Staff admits slipped reinforcers during extinction lunches. MOST immediate methodological consequence?",
      options: [
        {
          key: "A",
          text: "Extinction integrity collapsed—redo phase narrative only after fidelity repair + stakeholder transparency.",
          correct: true,
          rationale:
            "Domain E honesty plus Domain C require forthright rework—not cosmetic graphs.",
        },
        {
          key: "B",
          text: "Minor snacks negligible if aggression dipped aesthetically.",
          correct: false,
          rationale: "Any reinforcer can replenish the extinguishing class.",
        },
        {
          key: "C",
          text: "Name/shame aides publicly without remediation plan.",
          correct: false,
          rationale: "Public shaming seldom restores systems.",
        },
        {
          key: "D",
          text: "Assume extinction truthful despite leaks.",
          correct: false,
          rationale: "Unlogged leakage voids omission interpretation.",
        },
      ],
    },
  ],
  mod26: [
    {
      id: "mod26-q2",
      stem: "DRA schedules so lean alternatives rarely contact reinforcement while challenge falls—MOST looming concern?",
      options: [
        {
          key: "A",
          text: "Unintentional omission-based coercion—densify reinforcement + watch interval burdens.",
          correct: true,
          rationale:
            "Domain E scrutinizes cruelty-by-schedule whenever Domain F claims tout differential reinforcement.",
        },
        {
          key: "B",
          text: "Proof thin DR always humane mechanically.",
          correct: false,
          rationale: "Sparse reinforcement can punish inadvertently.",
        },
        {
          key: "C",
          text: "Delete deceleration metrics aesthetically.",
          correct: false,
          rationale: "Dual tracking keeps DR honest.",
        },
        {
          key: "D",
          text: "Replace DR with punitive pitfalls exclusively.",
          correct: false,
          rationale: "DR packages still aim for reinforcement-forward alternatives.",
        },
      ],
    },
    {
      id: "mod26-q3",
      stem: "Full-session DRO with vanishing reinforcement density sparks tears yet team doubles down verbally. MOST ethical priority?",
      options: [
        {
          key: "A",
          text: "Revisit humane interval design—verify reinforcement meaningfully contacting adaptive intervals before escalating expectations.",
          correct: true,
          rationale:
            "Omission stress can coerce; Domain E mandates compassion audits alongside graphs.",
        },
        {
          key: "B",
          text: "Extend painful intervals reinforcing grit exclusively.",
          correct: false,
          rationale: "Grit narratives misalign omission ethics.",
        },
        {
          key: "C",
          text: "Ignore tears as manipulation universally.",
          correct: false,
          rationale: "Distress cues deserve analytic review.",
        },
        {
          key: "D",
          text: "Delete caregiver concerns from notes.",
          correct: false,
          rationale: "Stakeholder distress belongs in supervisory triage.",
        },
      ],
    },
  ],
  mod27: [
    {
      id: "mod27-q2",
      stem: "District NCR mandates exist on paper yet tokens hoarded for later reinforcement never delivered on schedule—graphs still touted. MOST supervisory fix?",
      options: [
        {
          key: "A",
          text: "Restore schedule fidelity plus coaching logs because integrity collapse nullifies antecedent interpretations.",
          correct: true,
          rationale:
            "Domain C evidence underpins Domain F antecedent stories—Domain E cannot market broken schedules.",
        },
        {
          key: "B",
          text: "Celebrate graphs citing intent documents.",
          correct: false,
          rationale: "Intent differs delivered contingencies.",
        },
        {
          key: "C",
          text: "Replace NCR with seclusion casually.",
          correct: false,
          rationale: "Seclusion escalation demands layered safeguards.",
        },
        {
          key: "D",
          text: "Delete measurement inconveniences.",
          correct: false,
          rationale: "Measurement keeps teams accountable.",
        },
      ],
    },
    {
      id: "mod27-q3",
      stem: "Antecedent plan exists only in slideshow—physical environment untouched for months. MOST analytic critique?",
      options: [
        {
          key: "A",
          text: "Domain C fidelity failure—hypothesized environmental rearrangement never materially occurred so outcome attributions lapse.",
          correct: true,
          rationale:
            "Meetings chatter differs implemented contexts; Domain E honesty mandates integrity checks.",
        },
        {
          key: "B",
          text: "Slide decks substitute implementation universally.",
          correct: false,
          rationale: "Actual environmental contact matters.",
        },
        {
          key: "C",
          text: "MO excuses missing rearrangements.",
          correct: false,
          rationale: "MO hypotheses differ fidelity failures.",
        },
        {
          key: "D",
          text: "Delete collateral behavior monitoring.",
          correct: false,
          rationale: "Antecedent work still tracks side effects.",
        },
      ],
    },
  ],
  mod28: [
    {
      id: "mod28-q2",
      stem: "Grant narrative cites full experimental FA Appendix only questionnaires appear. MOST accountable correction?",
      options: [
        {
          key: "A",
          text: "Relabel modalities honestly; outline supervised contrasts when staffing + safeguards permit.",
          correct: true,
          rationale:
            "Domain E plus Domain F forbid laundering indirect tools into completed FA folklore.",
        },
        {
          key: "B",
          text: "Ship unchanged because questionnaires faster.",
          correct: false,
          rationale: "Speed cannot substitute honesty.",
        },
        {
          key: "C",
          text: "Fabricate FA spikes preserving narrative.",
          correct: false,
          rationale: "Fabricated data breaches every code pillar.",
        },
        {
          key: "D",
          text: "Delete caregiver interviews preserving brevity.",
          correct: false,
          rationale: "Indirect sources belong when labeled accurately.",
        },
      ],
    },
    {
      id: "mod28-q3",
      stem: "Indirect FAST conflicts with descriptive observation yet team picks favorite modality silently. MOST defensible supervisory stance?",
      options: [
        {
          key: "A",
          text: "Document divergence + reconciliation plan openly before treatment intensity freezes.",
          correct: true,
          rationale:
            "Triangulation transparency anchors Domain F choices and Domain E trust.",
        },
        {
          key: "B",
          text: "Hide discord preserving confidence mechanically.",
          correct: false,
          rationale: "Hidden conflict misleads stakeholders.",
        },
        {
          key: "C",
          text: "Delete weaker modality arbitrarily.",
          correct: false,
          rationale: "Arbitrary pruning abandons analytic duty.",
        },
        {
          key: "D",
          text: "Assume questionnaires always trump observation.",
          correct: false,
          rationale: "Each modality earns contextual weight.",
        },
      ],
    },
  ],
  mod29: [
    {
      id: "mod29-q2",
      stem: "Interdependent group contingency sparks peer mocking toward classmate missing criteria. MOST immediate safeguard?",
      options: [
        {
          key: "A",
          text: "Pause collective contingencies until anti-bullying monitoring + humane redesign restore equity.",
          correct: true,
          rationale:
            "Domain E forbids peer-harm architectures masquerading as motivation—Domain C graphs must show safeguards.",
        },
        {
          key: "B",
          text: "Ignore because averages improved.",
          correct: false,
          rationale: "Average gains ignore targeted harm.",
        },
        {
          key: "C",
          text: "Punish reporters slowing momentum.",
          correct: false,
          rationale: "Retaliation silences safeguards.",
        },
        {
          key: "D",
          text: "Delete bullying notes from dossiers.",
          correct: false,
          rationale: "Harm narratives demand documentation.",
        },
      ],
    },
    {
      id: "mod29-q3",
      stem: "Contingency contract drafted in jargon caregivers cannot negotiate—pressure signatures witnessed. MOST ethics concern?",
      options: [
        {
          key: "A",
          text: "Domain E coercion risk—redo plain-language clauses, assent checks, disputing pathways before enforcing.",
          correct: true,
          rationale:
            "Understandable mutual obligations underpin ethical contracts—not opacity theater.",
        },
        {
          key: "B",
          text: "Signatures settle ethics regardless of comprehension.",
          correct: false,
          rationale: "Comprehension underpins voluntary consent.",
        },
        {
          key: "C",
          text: "Delete dispute clauses simplifying paperwork.",
          correct: false,
          rationale: "Dispute avenues protect asymmetric power dynamics.",
        },
        {
          key: "D",
          text: "Assume clinician authority voids caregiver questions.",
          correct: false,
          rationale: "Questions enrich collaborative planning.",
        },
      ],
    },
  ],
  mod30: [
    {
      id: "mod30-q2",
      stem: "Self-monitored graphs rosy whenever supervision absent—collateral spot checks wildly disagree routinely. MOST priority?",
      options: [
        {
          key: "A",
          text: "Engineer simpler recording plus scheduled IOA reconciliation before independence claims escalate.",
          correct: true,
          rationale:
            "Domain C verification protects clients from aspirational journaling; Domain E honesty supports autonomy goals.",
        },
        {
          key: "B",
          text: "Celebrate heroic trends ignoring mismatches.",
          correct: false,
          rationale: "Mismatch signals broken measurement—not mastery.",
        },
        {
          key: "C",
          text: "Punish logging errors exclusively.",
          correct: false,
          rationale: "Supportive redesign—not shame—guides recording.",
        },
        {
          key: "D",
          text: "Delete mismatched sessions quietly.",
          correct: false,
          rationale: "Cherry picking breaches transparency.",
        },
      ],
    },
    {
      id: "mod30-q3",
      stem: "Self-reinforcement contract grants unlimited coveted items sans oversight. MOST supervisory concern?",
      options: [
        {
          key: "A",
          text: "Guardrail collapse—tie self-managed reinforcers to monitored rules aligning with wellness plans.",
          correct: true,
          rationale:
            "Domain E supervises autonomy arrangements preventing unsafe escalation.",
        },
        {
          key: "B",
          text: "Unlimited access always reinforces optimally mechanically.",
          correct: false,
          rationale: "Unchecked access risks health/ethics pitfalls.",
        },
        {
          key: "C",
          text: "Clinician review obsolete after first session.",
          correct: false,
          rationale: "Ongoing checks scale with risks.",
        },
        {
          key: "D",
          text: "Self-management voids confidentiality duties.",
          correct: false,
          rationale: "Privacy protections persist.",
        },
      ],
    },
  ],
  mod31: [
    {
      id: "mod31-q2",
      stem: "District discharge cites mastery citing single therapist/clinic snapshots—home/generalization probes absent. MOST accurate analytic headline?",
      options: [
        {
          key: "A",
          text: "Stimulus generalization undocumented—defer closure claims until community exemplars evidenced.",
          correct: true,
          rationale:
            "Domain F generalization stays measured—not assumed—matching Domain E honest timelines.",
        },
        {
          key: "B",
          text: "Generalization irrelevant after clinic perfection.",
          correct: false,
          rationale: "Breadth probes remain central.",
        },
        {
          key: "C",
          text: "Delete stakeholder maintenance interviews.",
          correct: false,
          rationale: "Validity interviewing complements probes.",
        },
        {
          key: "D",
          text: "Blame home failures exclusively.",
          correct: false,
          rationale: "Support design—not blame—guides failed probes.",
        },
      ],
    },
    {
      id: "mod31-q3",
      stem: "Graphs trumpet durability while rapid reversion appears once vouchers end—panels omit caveat. MOST reporting lapse?",
      options: [
        {
          key: "A",
          text: "Domain E omission—figures must caveat fragility beside slopes so payers understand limits.",
          correct: true,
          rationale:
            "Transparent longevity narrative pairs Domain C maintenance samples with Domain E humane expectations.",
        },
        {
          key: "B",
          text: "Reversion irrelevant if discharge signed.",
          correct: false,
          rationale: "Paperwork cannot erase measured reversion.",
        },
        {
          key: "C",
          text: "Delete post-discharge data preserving optics.",
          correct: false,
          rationale: "Suppressing dips misleads stakeholders.",
        },
        {
          key: "D",
          text: "Assume natural communities always sustain gains mechanically.",
          correct: false,
          rationale: "Community reinforcement stays empirical.",
        },
      ],
    },
  ],
  // mod32-q2 / mod32-q3 now live in chapter31EthicsQuizBank.ts (folded into the primary 50).
};
