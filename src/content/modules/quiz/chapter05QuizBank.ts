import type { BDSQuestion } from "@/lib/content-types";

/**
 * Cooper/Heron/Heward — workbook Chapter 5 (Behavioral Assessment, ).
 * Fifty stems keyed to multimethod arcs in CHH Ch. 5 (Pearson Global 3rd ed. TOC anchors).
 * TCO cues: vignettes overwhelmingly map to , with  when reporting,
 * measurement fidelity, or triangulation disclosures sit in the storyline—verify wording in the official BACB PDF.
 */

function attachChhLocator(rationale: string, locator: string): string {
  if (!locator.trim()) return rationale;
  if (/\(\s\bp[\s.]?\d+/i.test(rationale)) return rationale;
  if (/\bCHH Chapter \d+[^.]*?\bp[\s.]?\d+/i.test(rationale)) return rationale;
  const t = rationale.trimEnd();
  if (t.endsWith(".")) return `${t.slice(0, -1)} (${locator}).`;
  return `${t} (${locator}).`;
}

function bx(
  id: string,
  stem: string,
  correctLetter: "A" | "B" | "C" | "D",
  bundle: Record<"A" | "B" | "C" | "D", { text: string; rationale: string }>,
  locator?: string,
): BDSQuestion {
  const letters = ["A", "B", "C", "D"] as const;
  return {
    id,
    stem,
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: locator ? attachChhLocator(bundle[L].rationale, locator) : bundle[L].rationale,
    })),
  };
}

/** Locator bands recycle across stems; aligns with multimethod behavioral assessment arc in CHH Ch. 5. */
function L(which: number): string {
  if (which <= 12) return "CHH Chapter 5, pp. 133–145 — purposes of behavioral assessment; multimethod overview";
  if (which <= 25) return "CHH Chapter 5, pp. 145–158 — indirect assessment; hypothesis generation";
  if (which <= 38) return "CHH Chapter 5, pp. 158–170 — direct descriptive observation; correlational summaries";
  return "CHH Chapter 5, pp. 170–188 — experimental functional analysis contrasts; multimodal synthesis and ethics";
}

export const CHAPTER_05_WORKBOOK_QUIZ_BANK: BDSQuestion[] = [
  bx(
    "mod06-q1",
    "Cooper et al. Chapter 5 presents behavioral assessment as MOST centrally intended to:",
    "C",
    {
      A: {
        text: "Replace stakeholder interviews permanently once questionnaires finish.",
        rationale: "Interviews remain hypothesis sources requiring integration—not wholesale deletion.",
      },
      B: {
        text: "Finalize reinforcer classifications from recall instruments alone unconditionally.",
        rationale: "Hypotheses seeded indirectly still demand corroborating behavioral streams.",
      },
      C: {
        text: "Gather multimodal information narrowing hypotheses about behavior and context before intensive intervention commits resources.",
        rationale: "Chapter 5 aligns assessment inventories with accountable planning—not blind tactics.",
      },
      D: {
        text: "Eliminate descriptive observation categorically whenever functional analysis someday becomes possible.",
        rationale: "Correlational summaries remain foundational—even when experimentation later complements them.",
      },
    },
    L(1),
  ),
  bx(
    "mod06-q2",
    "Indirect behavioral assessment MOST characteristically:",
    "D",
    {
      A: {
        text: "Documents ABC narratives simultaneously inside busy cafeterias without recall dependence.",
        rationale: "Contemporaneous ABC logging belongs under direct descriptive—not indirect—methods.",
      },
      B: {
        text: "Manipulates evocative test conditions comparing reinforcement pathways overnight.",
        rationale: "Contingency manipulation exemplifies experimental functional analysis—not indirect recall modalities.",
      },
      C: {
        text: "Codes IOA-stable durations using whole-interval spreadsheets exclusively onsite.",
        rationale: "Calibrated descriptive coding differs from questionnaires administered away from streams.",
      },
      D: {
        text: "Uses interviews, questionnaires, and rating scales away from contemporaneous behavior streams accelerating hypotheses awaiting corroboration.",
        rationale: "Indirect modalities trade temporal precision yet seed accountable prioritization before denser probes.",
      },
    },
    L(2),
  ),
  bx(
    "mod06-q3",
    "Therapists summarize antecedent–behavior–consequence sequences live during classroom transitions — classification MOST aligned with Chapter 5:",
    "B",
    {
      A: {
        text: "Indirect assessment exclusively referencing caregiver recall narratives.",
        rationale: "Simultaneous naturalistic summaries differ from questionnaires absent direct streams.",
      },
      B: {
        text: "Direct descriptive correlational observation documenting sequential correlates absent contingency manipulation.",
        rationale: "ABC narratives scaffold hypotheses experimental designs later adjudicate.",
      },
      C: {
        text: "Completed experimental functional analysis certifying reinforcement domains definitively absent manipulated contrasts narrative alone.",
        rationale: "Correlation absent manipulation cannot substitute controlled isolation logic.",
      },
      D: {
        text: "Structural magnetic resonance inventories exclusively diagnosing topography absent behavior.",
        rationale: "Structural assessment references ecological arrangements—not clinical neuroimaging caricatures.",
      },
    },
    L(3),
  ),
  bx(
    "mod06-q4",
    "Declaring final functional classifications using indirect checklist outputs alone MOST conflicts with multimethod Chapter 5 discipline because:",
    "A",
    {
      A: {
        text: "Indirect tools generate hypotheses—they do not ethically substitute corroborating descriptive/experimental streams when stakes demand convergence.",
        rationale: "Triangulation foregrounds provisional certainty admitting evidentiary hierarchy restrictions.",
      },
      B: {
        text: "Indirect outputs never inform priorities whatsoever.",
        rationale: "Cooper underscores indirect modalities accelerate hypotheses ethically prior to corroborating streams.",
      },
      C: {
        text: "Indirect instruments delete individualized education mandates categorically unconditionally.",
        rationale: "Archival mandates integrate ethically—not erased via questionnaires.",
      },
      D: {
        text: "Indirect interviews guarantee respondent extinction classifications overnight.",
        rationale: "Extinction classifications require contingency logic—not conversational recall caricatures exclusively.",
      },
    },
    L(4),
  ),
  bx(
    "mod06-q5",
    "Administrative bans on prolonged experimental probes yet referral urgency persists — MOST defensible clinician pathway resonates with:",
    "C",
    {
      A: {
        text: "Halt hypotheses indefinitely withholding permissible descriptive correlational amplification.",
        rationale: "Ethics favors accountable probes feasible—not paralysis absent manipulated overnight designs.",
      },
      B: {
        text: "Publish definitive manipulated FA conclusions fabricated absent data preserving comfort.",
        rationale: "Honest uncertainty labeling matters—fabricating experimental conclusions violates professionalism.",
      },
      C: {
        text: "Layer indirect hypotheses with enriched descriptive summaries acknowledging limits transparently while planning ethically phased experimentation unlocked later.",
        rationale: "Multimodal integration honors staffing constraints—not certainty theater.",
      },
      D: {
        text: "Delete descriptive contradictions politely preserving monocausal folklore.",
        rationale: "Conflicts merit integration—not deleting contradictory records quietly.",
      },
    },
    L(5),
  ),
  bx(
    "mod06-q6",
    "FAST-like indirect checklists MOST help clinicians ethically by:",
    "A",
    {
      A: {
        text: "Prioritize routines, suspected reinforcement domains, contexts warranting finer descriptive scrutiny.",
        rationale: "Indirect rankings accelerate hypotheses—not replace observation streams.",
      },
      B: {
        text: "Certify definitive automatic reinforcement rulings exempt from corroboration.",
        rationale: "Automatic reinforcement hypotheses demand experimental/descriptive bridging—not checklist certainty alone.",
      },
      C: {
        text: "Replace calibrated measurement spreadsheets permanently simplifying billing.",
        rationale: "Measurement integrity persists ethically despite indirect scaffolding.",
      },
      D: {
        text: "Eliminate stakeholder collaboration conversations ethically altogether.",
        rationale: "Consumers remain ethically central—even when indirect scaffolding accelerates priorities.",
      },
    },
    L(6),
  ),
  bx(
    "mod06-q7",
    "Structural assessment inventories MOST emphasize:",
    "B",
    {
      A: {
        text: "Caregiver mood metaphors devoid of observable ecological referents exclusively.",
        rationale: "Structural focus references environmental arrangements—not unobserved mood caricatures exclusively.",
      },
      B: {
        text: "Physical arrangements—scheduling density, staffing ratios, instructional demands prompting behavior before nuanced behavioral hypotheses finalize.",
        rationale: "Structural snapshots contextualize evocative ecologies ethically alongside behavioral streams.",
      },
      C: {
        text: "Latencies from discriminative stimuli measured exclusively remotely.",
        rationale: "Structural inventories differ principally from micrometric latency recording exclusively.",
      },
      D: {
        text: "Experimental isolation of reinforcing contingencies overnight categorically unconditionally.",
        rationale: "Manipulation embodies FA—not structural inventories alone.",
      },
    },
    L(7),
  ),
  bx(
    "mod06-q8",
    "Scatterplot summaries portraying clustered episodes MOST directly assist:",
    "B",
    {
      A: {
        text: "Certifying respondent extinction classifications absent manipulated probes.",
        rationale: "Extinction certification requires contingency logic—not scatter correlation alone.",
      },
      B: {
        text: "Highlight temporal pockets deserving denser hypothesis-guided descriptive probes.",
        rationale: "Temporal summaries steer intensive sampling ethically proportionate hotspots.",
      },
      C: {
        text: "Replace individualized education mandates overnight unconditionally.",
        rationale: "Individualized mandates integrate ethically—not categorical overnight deletion caricatures exclusively.",
      },
      D: {
        text: "Guarantee overnight FA completions absent staffing.",
        rationale: "Scatterplots motivate hypotheses—they never guarantee experimental completion absent resources.",
      },
    },
    L(8),
  ),
  bx(
    "mod06-q9",
    "Triangulation across indirect plus descriptive streams MOST centrally protects against:",
    "A",
    {
      A: {
        text: "Premature monocausal certainty when multimodal streams disagree materially.",
        rationale: "Integrating conflicting signals transparently—not declaring victory from questionnaires alone.",
      },
      B: {
        text: "Using graphs whatsoever in individualized education contexts.",
        rationale: "Visualization supports accountability—not the threat triangulation guards against.",
      },
      C: {
        text: "Ever interviewing caregivers about routines affecting referrals.",
        rationale: "Interviews ethically seed hypotheses; triangulation insists they pair with corroborating streams.",
      },
      D: {
        text: "Preference assessments probing suspected reinforcers after indirect hypotheses.",
        rationale: "Empirical probes embody good practice—not the failure mode triangulation addresses.",
      },
    },
    L(9),
  ),
  bx(
    "mod06-q10",
    "Experimental functional analysis MOST distinctively compared with correlational descriptive assessment because FA:",
    "D",
    {
      A: {
        text: "Avoids manipulating evocative contingencies systematically to protect convenience.",
        rationale: "Controlled manipulation is definitive of FA—not its absence.",
      },
      B: {
        text: "Replaces stakeholder questionnaires permanently once observation begins.",
        rationale: "FA complements multimodal intake—it does not erase indirect tools outright.",
      },
      C: {
        text: "Is identical descriptively to ABC narratives lacking manipulated contrasts whatsoever.",
        rationale: "Correlation alone lacks experimental isolation hallmark to FA.",
      },
      D: {
        text: "Arranges evocative test and control contrasts isolating suspected reinforcers when ethics and staffing permit—not only narrating natural correlations.",
        rationale: "Manipulation adjudicates hypotheses descriptive work motivates.",
      },
    },
    L(10),
  ),
  bx(
    "mod06-q11",
    "Descriptive summaries preceding manipulated analyses MOST ethically justify by:",
    "B",
    {
      A: {
        text: "Eliminating individualized education timelines categorically unconditionally overnight.",
        rationale: "Individualized mandates integrate ethically—not categorical deletion.",
      },
      B: {
        text: "Building contextual hypotheses plus feasibility anchors guiding controlled experimental contrasts later when unlocked ethically—not skipping accountable descriptive groundwork casually.",
        rationale: "Descriptive streams contextualize ethically experimental designs proportionate prerequisites.",
      },
      C: {
        text: "Deleting baseline summaries to polish monocausal anecdotes before descriptive work is documented.",
        rationale: "Baseline and descriptive scaffolding remain ethically foundational—graphs should reflect ongoing accountable work.",
      },
      D: {
        text: "Fabricating respondent-extinction classifications without calibrated observation streams.",
        rationale: "Operational claims demand evidence—not invented extinction narratives unsupported by data.",
      },
    },
    L(11),
  ),
  bx(
    "mod06-q12",
    "FAST ranks tangible reinforcement highest yet descriptive ABC shows aggression removing demands—not tangibles. MOST accountable stance:",
    "C",
    {
      A: {
        text: "Delete descriptive ABC contradictory rows polishing indirect optimism secretly.",
        rationale: "Conflicts merit transparent integration—not covert row deletion.",
      },
      B: {
        text: "Finalize tangible classifications immune from corroborating streams indefinitely forever unconditionally.",
        rationale: "Competing modalities demand convergence—not monocausal folklore prematurely.",
      },
      C: {
        text: "Flag discrepancy plainly; intensify descriptive sampling around evocative demands while labeling hypotheses provisional.",
        rationale: "Triangulation treats divergent streams as signal—not something to disguise with confident theater.",
      },
      D: {
        text: "Announcing mastery of tangible interventions without differentiated empirical support.",
        rationale: "Integrated transparency beats premature polished announcements unsupported by corroborating streams.",
      },
    },
    L(12),
  ),
  bx(
    "mod06-q13",
    "Formal caregiver interviews MOST help compared with hallway anecdotes by:",
    "D",
    {
      A: {
        text: "Replacing calibrated measurement spreadsheets permanently ethically unconditionally overnight.",
        rationale: "Measurement streams integrate—not vanish—from structured interviews.",
      },
      B: {
        text: "Guaranteeing experimental FA completions overnight staffing absent ethically unconditionally.",
        rationale: "Interviews ethically accelerate—not guarantee—experimentation unlocked ethically later.",
      },
      C: {
        text: "Deleting scatterplot hotspots systematically ethically permanently unconditionally.",
        rationale: "Temporal summaries should be integrated—not deleted wholesale for narrative convenience.",
      },
      D: {
        text: "Systematically probing timelines, evocative routines, medically relevant constraints structuring accountable hypotheses.",
        rationale: "Protocol depth reduces recall omission risks ethically scaffolding multimodal coherence.",
      },
    },
    L(13),
  ),
  bx(
    "mod06-q14",
    "Indirect tangible hypothesis aligned with descriptive data showing contingent tangible removal MOST cautiously:",
    "A",
    {
      A: {
        text: "Treats correlational hypotheses about tangible contact deserving experimental assay ethically permitted—not final certification absent manipulated contrasts.",
        rationale: "Controlled contrasts adjudicate ethically—not monocausal anecdotes prematurely exclusively unconditionally.",
      },
      B: {
        text: "Certifies tangible diagnosis overnight immune from corroborating streams indefinitely indefinitely.",
        rationale: "Checklists ethically seed—not certify—hypotheses absent convergence streams ethically multimodally.",
      },
      C: {
        text: "Deletes individualized education mandates overnight ethically unconditionally ethically unconditionally.",
        rationale: "Archival mandates stay in the dossier—they do not vanish for optics.",
      },
      D: {
        text: "Issuing respondent-extinction “cures” without contingency evidence.",
        rationale: "Treatments anchored in measurement and experimental logic—not fabricated caricatures of extinction.",
      },
    },
    L(14),
  ),
  bx(
    "mod06-q15",
    "IOA checks during correlational descriptive coding MOST safeguards:",
    "B",
    {
      A: {
        text: "Automatic reinforcement diagnoses needing no corroborating streams.",
        rationale: "Agreement addresses observer alignment—not automatic reinforcement classifications alone.",
      },
      B: {
        text: "Operational definition fidelity so independent observers tally the same response class.",
        rationale: "Interobserver agreement stabilizes descriptive corpora prior to causal interpretation.",
      },
      C: {
        text: "Replacing descriptive observation with questionnaires permanently.",
        rationale: "Agreement supplements—not replaces—multimodal evidence.",
      },
      D: {
        text: "Guaranteeing preference rankings equal reinforcer potency.",
        rationale: "IOA pertains to scorer alignment—not reinforcing effectiveness.",
      },
    },
    L(15),
  ),
  bx(
    "mod06-q16",
    "Transparent ethical narration while experimental probing remains indefinitely deferred MOST condemns:",
    "C",
    {
      A: {
        text: "Labeling hypotheses provisional until converging streams accumulate.",
        rationale: "Provisional wording aligns with multimethod restraint.",
      },
      B: {
        text: "Increasing descriptive bandwidth when escalation risk climbs.",
        rationale: "Risk-responsive sampling embodies accountable practice—not forbidden conduct.",
      },
      C: {
        text: "Claiming airtight functional classifications from questionnaires alone despite feasible descriptive corroboration paths.",
        rationale: "Monocausal recall certainty conflicts with Chapter 5 triangulation ethos.",
      },
      D: {
        text: "Discussing timelines for phased experimentation with stakeholders plainly.",
        rationale: "Plain dialogue supports—not violates—ethical integration.",
      },
    },
    L(16),
  ),
  bx(
    "mod06-q17",
    "Empirical tangible preference probes after indirect rankings MOST clarify:",
    "A",
    {
      A: {
        text: "Whether stimuli actually reinforce under contingent delivery—not caregiver guesses absent probes.",
        rationale: "Preference assessments contact contingencies questionnaires only approximate.",
      },
      B: {
        text: "Whether caregivers withheld honesty intentionally.",
        rationale: "Indirect tools limit reliability—they do not license attributing deception default.",
      },
      C: {
        text: "Whether scatterplots may be shredded legally.",
        rationale: "Temporal summaries remain ethically valuable—not disposable.",
      },
      D: {
        text: "Whether latency replaces event recording universally.",
        rationale: "Dimensional choices sit apart from reinforcing stimulus validation probes.",
      },
    },
    L(17),
  ),
  bx(
    "mod06-q18",
    "Archival records plus structured stakeholder interviews MOST accelerate assessment by:",
    "D",
    {
      A: {
        text: "Obviating calibrated measurement dashboards permanently.",
        rationale: "Archives contextualize—they never erase measurement accountability.",
      },
      B: {
        text: "Guaranteeing exhaustive experimental FA completions next week unconditionally.",
        rationale: "Archives seed—they never unconditionally guarantee manipulated analyses.",
      },
      C: {
        text: "Deleting descriptive summaries contradicting caregiver optimism.",
        rationale: "Conflicts deserve integration—not deletion.",
      },
      D: {
        text: "Steering hypotheses about medically relevant histories, prior interventions, and evocative routines before observers invest scarce live hours.",
        rationale: "Context narrows hypotheses descriptive sampling adjudicates.",
      },
    },
    L(18),
  ),
  bx(
    "mod06-q19",
    "Professionals confronted with conflicting multimodal evidence MOST ethically:",
    "B",
    {
      A: {
        text: "Suppress dissenting modalities preserving tidy monocausal folklore.",
        rationale: "Suppression wastes triangulation ethically demanding integration.",
      },
      B: {
        text: "Document disagreements plainly and integrate multimodal summaries stakeholders understand—including uncertainty labels—not cherry-picking single streams.",
        rationale: "Transparency honors consumers navigating messy ecologies.",
      },
      C: {
        text: "Delete graphs supervisors dislike aesthetically.",
        rationale: "Graphs anchor accountability ethically—not disposable décor.",
      },
      D: {
        text: "Rotate referrals weekly lacking analytic scaffolding.",
        rationale: "Structured integration—not arbitrary rotation.",
      },
    },
    L(19),
  ),
  bx(
    "mod06-q20",
    "Severe self-injury cases MOST justify intensifying multimodal safeguards because:",
    "C",
    {
      A: {
        text: "Low-risk referrals excuse skipping measurement indefinitely.",
        rationale: "Assessment intensity scales ethically with harm severity—not negligible dismissals.",
      },
      B: {
        text: "Indirect questionnaires suffice whenever caregivers sound confident verbally.",
        rationale: "High stakes demand corroborating streams—not questionnaires alone.",
      },
      C: {
        text: "Consumer safety requires convergent multimodal safeguards minimizing premature monocausal treatment prescriptions absent behavioral corroboration.",
        rationale: "Escalating methodological rigor tracks escalating harm risk ethically proportional accountability.",
      },
      D: {
        text: "Scatterplots negate descriptive observation obligations automatically.",
        rationale: "Temporal plots guide—they never negate accountable observation.",
      },
    },
    L(20),
  ),
  bx(
    "mod06-q21",
    "Brief experimental variants when exhaustive FA remains staffing-infeasible MOST align ethically with:",
    "A",
    {
      A: {
        text: "Selecting phased abbreviated analogue designs referencing descriptive hypotheses acknowledging limitations plainly.",
        rationale: "Controlled probes scaled ethically—not abandoned—when exhaustive overnight FA blocked responsibly.",
      },
      B: {
        text: "Fabricating multi-element curves absent data preserving marketing polish.",
        rationale: "Honest limitation labels matter—not fabricated experimental polish.",
      },
      C: {
        text: "Deleting descriptive contradictions ethically permanently unconditionally.",
        rationale: "Descriptive corpora integrate with other modalities—they must not silently disappear.",
      },
      D: {
        text: "Declaring indirect outputs definitive monocausal cures overnight absent stakeholders.",
        rationale: "Recall instruments ethically accelerate—not ethically finalize—classification absent convergence.",
      },
    },
    L(21),
  ),
  bx(
    "mod06-q22",
    "Assessing instructional demands clustered before aggression episodes MOST yields ethically:",
    "B",
    {
      A: {
        text: "Experimental proofs escape reinforcement maintains aggression absent FA analogues.",
        rationale: "Correlational summaries ethically scaffold—not finalize—experimentation ethically adjudicating.",
      },
      B: {
        text: "Correlational hypotheses that evocative instructional antecedents contact aggression deserving cautious experimental assays—not guaranteed causal pronouncements absent manipulated contrasts.",
        rationale: "Naturalistic correlations seed hypotheses ethically; experimental contrasts adjudicate ethically when unlocked.",
      },
      C: {
        text: "Claims automatic reinforcement is proven absent alone testing forever.",
        rationale: "Hypothesized automatic reinforcement demands isolation—not checklist certainty.",
      },
      D: {
        text: "Causal proof that instructional demands alone inevitably cause aggression absent any experimental contrast.",
        rationale: "Naturalistic correlations scaffold hypotheses—they do not certify inevitability prematurely.",
      },
    },
    L(22),
  ),
  bx(
    "mod06-q23",
    "Questionnaires approximating suspected reinforcer functions MOST appropriately represent:",
    "C",
    {
      A: {
        text: "Final experimental proof of reinforcing function without subsequent observation.",
        rationale: "Hypotheses require corroborating streams—not questionnaire verdicts alone.",
      },
      B: {
        text: "Substitutes for baseline measurement whenever paperwork finishes faster.",
        rationale: "Baseline accountability persists regardless of indirect acceleration.",
      },
      C: {
        text: "Hypothesized functions awaiting descriptive or experimental corroboration—not definitive causal certainty absent convergence.",
        rationale: "Indirect tools generate hypotheses Cooper positions ahead of controlled validation.",
      },
      D: {
        text: "Automatic classification of sensory-maintained behavior without alone or test analogues.",
        rationale: "Automatic reinforcement claims require isolation logic—not checklist defaults.",
      },
    },
    L(23),
  ),
  bx(
    "mod06-q24",
    "Multimodal integration MOST sharply contrasts with monocausal folklore when analysts:",
    "A",
    {
      A: {
        text: "Document disagreements across modalities plainly and weave convergent narratives stakeholders follow—including explicit uncertainty—not cherry-picking a single favored stream.",
        rationale: "Triangulation foregrounds accountable synthesis across imperfect evidence.",
      },
      B: {
        text: "Delete inconvenient graphs supervisors dislike aesthetically.",
        rationale: "Graphs anchor accountable integration—not discretionary deletion.",
      },
      C: {
        text: "Suspend caregiver interviews indefinitely to avoid messy recall.",
        rationale: "Interviews ethically seed hypotheses; integration—not avoidance—guides practice.",
      },
      D: {
        text: "Rotate referrals weekly lacking analytic scaffolding.",
        rationale: "Structured integration—not arbitrary rotation—is the ethical stance.",
      },
    },
    L(24),
  ),
  bx(
    "mod06-q25",
    "Naturalistic descriptive observation MOST honors dignity when clinicians:",
    "C",
    {
      A: {
        text: "Fabricate covert ABC narratives misrepresenting what observers witnessed.",
        rationale: "Fabrication violates fidelity and stakeholder trust—not dignity.",
      },
      B: {
        text: "Publish identifying video broadly without safeguards.",
        rationale: "Confidentiality safeguards remain obligatory—not optional décor.",
      },
      C: {
        text: "Align consent protections, minimize intrusiveness, and document hypotheses proportionate referral stakes ethically demand.",
        rationale: "Dignity-respecting observation balances accountability with ecological realism.",
      },
      D: {
        text: "Manipulate contingencies covertly while labeling sessions descriptive.",
        rationale: "Correlational phases avoid undisclosed manipulation—experimental phases disclose controls.",
      },
    },
    L(25),
  ),
  bx(
    "mod06-q26",
    "Culturally responsive behavioral assessment MOST emphasizes:",
    "B",
    {
      A: {
        text: "Exporting standardized English-only questionnaires without interpretation support whenever convenient.",
        rationale: "Meaning—not convenience—anchors culturally responsive practice.",
      },
      B: {
        text: "Clarifying stakeholder meaning of behaviors, consequences, and priorities before locking focal hypotheses.",
        rationale: "Culture shapes what counts as problem or strength—assessment must respect that lens.",
      },
      C: {
        text: "Deleting individualized education accommodations because paperwork feels redundant.",
        rationale: "Accommodations remain legally and clinically relevant—not disposable.",
      },
      D: {
        text: "Replacing graphs with marketing brochures permanently.",
        rationale: "Visual accountability persists despite cultural responsiveness.",
      },
    },
    L(26),
  ),
  bx(
    "mod06-q27",
    "Structural inventories reveal dense transitions precede escalations while indirect tools ignore transitions. BEST integration:",
    "C",
    {
      A: {
        text: "Dismiss structural summaries because questionnaires carry more authority.",
        rationale: "Multiple modalities deserve integration—not hierarchy by convenience.",
      },
      B: {
        text: "Replace all classroom routines with unstructured recess permanently.",
        rationale: "Ecological adjustments should be hypothesis-driven—not wholesale chaos.",
      },
      C: {
        text: "Weight environmental constraints while targeting descriptive probes around transitions highlighted structurally and indirectly.",
        rationale: "Multimodal synthesis focuses scarce observation where hypotheses converge.",
      },
      D: {
        text: "Declare automatic reinforcement solely from silence in interviews.",
        rationale: "Automatic reinforcement requires isolation analogues—not silence alone.",
      },
    },
    L(27),
  ),
  bx(
    "mod06-q28",
    "Indirect recall instruments MOST sacrifice compared with contemporaneous observation:",
    "A",
    {
      A: {
        text: "Temporal precision and shared operational referents absent calibrated streams—while still accelerating prioritization hypotheses.",
        rationale: "Chapter 5 stresses indirect modalities trade fidelity for hypotheses awaiting corroboration.",
      },
      B: {
        text: "Any ability to summarize socially valid priorities.",
        rationale: "Stakeholder priorities integrate—not vanish—with indirect scaffolding.",
      },
      C: {
        text: "Any obligation to archive individualized education mandates.",
        rationale: "Records remain ethically integrated—not erased—via indirect modalities.",
      },
      D: {
        text: "Any future possibility of manipulated experimental assays.",
        rationale: "Indirect tools do not permanently ban ethical experimentation—they sequence it responsibly.",
      },
    },
    L(28),
  ),
  bx(
    "mod06-q29",
    "Descriptive baselines summarized before ethically permitted experimental probes MOST responsibly justify:",
    "D",
    {
      A: {
        text: "Deleting baseline variability narratives polishing marketing anecdotes.",
        rationale: "Baseline variability contextualizes—not decorates—informed experimental planning.",
      },
      B: {
        text: "Guaranteeing exhaustive FA completion next fiscal quarter unconditionally.",
        rationale: "Resources constrain experimental timing—ethical planning acknowledges limits plainly.",
      },
      C: {
        text: "Replacing stakeholder consent dialogue with silent enrollment.",
        rationale: "Consent remains foundational—not optional—ahead of manipulated analyses.",
      },
      D: {
        text: "Feasibility estimates plus contextual hypotheses guiding ethically scaled experimental contrasts when staffing and consent unlock—not skipping accountable descriptive groundwork.",
        rationale: "Descriptive scaffolding informs ethical—not theatrical—experimentation.",
      },
    },
    L(29),
  ),
  bx(
    "mod06-q30",
    "Brief experimental analogue designs whenever exhaustive overnight FA remains infeasible MOST align with:",
    "A",
    {
      A: {
        text: "Scaling controlled contrasts to staffing reality while labeling limitations and planning phased extensions transparently.",
        rationale: "Abbreviated probes beat abandoning accountability—or fabricating exhaustive curves absent data.",
      },
      B: {
        text: "Fabricating multi-element outcomes absent observation.",
        rationale: "Honest reporting matters—not fictional experimental polish.",
      },
      C: {
        text: "Deleting descriptive contradictions preserving tidy marketing.",
        rationale: "Integrate conflicts—not delete them—across modalities.",
      },
      D: {
        text: "Halting all hypothesis work until unlimited FA staffing appears.",
        rationale: "Ethics favors feasible accountable probes—not paralysis caricatures.",
      },
    },
    L(30),
  ),
  bx(
    "mod06-q31",
    "Disparate caregivers supply incompatible indirect rankings about suspected reinforcers. MOST defensible response:",
    "B",
    {
      A: {
        text: "Cherry-pick the caregiver matching clinician hunches.",
        rationale: "Cherry-picking wastes triangulation discipline.",
      },
      B: {
        text: "Document dissensus plainly; broaden sampling and clarify routines with culturally responsive follow-up.",
        rationale: "Ecological complexity often explains divergent recall—expand evidence.",
      },
      C: {
        text: "Delete dissenting questionnaires silently.",
        rationale: "Evidence integration—not suppression—defines ethical practice.",
      },
      D: {
        text: "Publish definitive reinforcer mastery absent corroboration.",
        rationale: "Recall instruments remain hypotheses—not final verdicts.",
      },
    },
    L(31),
  ),
  bx(
    "mod06-q32",
    "QABF-style questionnaires MOST approximate:",
    "C",
    {
      A: {
        text: "Experimental FA conclusions without manipulation.",
        rationale: "Experimental proof requires arranged contrasts—not questionnaire recall alone.",
      },
      B: {
        text: "Respondent extinction proofs overnight.",
        rationale: "Extinction analysis requires contingency contact—not recall checklists.",
      },
      C: {
        text: "Hypothesized reinforcement functions awaiting corroboration—not definitive functional diagnoses absent experimental or strong descriptive convergence.",
        rationale: "Indirect tools accelerate—not certify—functional hypotheses.",
      },
      D: {
        text: "Whole-interval duration totals verbatim.",
        rationale: "Sampling tactics differ from functional hypothesis tools.",
      },
    },
    L(32),
  ),
  bx(
    "mod06-q33",
    "Social validity touching assessment priorities MOST insists analysts weight:",
    "B",
    {
      A: {
        text: "Clinician dashboard defaults minimizing observer effort exclusively.",
        rationale: "Convenience sampling alone conflicts with consumer-centered assessment.",
      },
      B: {
        text: "Stakeholder-valued routines and outcomes—not convenience alone—even when inconvenient analytically.",
        rationale: "Social validity ties assessment goals to meaningful everyday consequences.",
      },
      C: {
        text: "Vendor gadget aesthetics exclusively polishing conference slides.",
        rationale: "Gadgets never substitute stakeholder priorities.",
      },
      D: {
        text: "Whole-interval spreadsheets because they feel simpler.",
        rationale: "Measurement tactics follow hypotheses—not spreadsheet convenience defaults.",
      },
    },
    L(33),
  ),
  bx(
    "mod06-q34",
    "Interobserver agreement during descriptive coding MOST protects:",
    "A",
    {
      A: {
        text: "Shared operational definitions powering trustworthy prevalence summaries—not mystical agreement folklore absent definitional coherence.",
        rationale: "IOA operationalizes fidelity before causal interpretation—even for correlational data.",
      },
      B: {
        text: "Automatic reinforcement rulings categorical overnight.",
        rationale: "Reinforcer identification requires multimodal—not IOA-exclusive—logic.",
      },
      C: {
        text: "Preference rankings equal reinforcer potency without probes.",
        rationale: "Reinforcer validation remains empirically distinct from scorer agreement.",
      },
      D: {
        text: "Deletion of questionnaires supervisors dislike aesthetically.",
        rationale: "IOA pertains to coder alignment—not document disposal.",
      },
    },
    L(34),
  ),
  bx(
    "mod06-q35",
    "Teachers ABC-chart transitional episodes sequentially without manipulating contingencies. This stream MOST embodies:",
    "B",
    {
      A: {
        text: "Indirect caregiving questionnaires exclusively.",
        rationale: "Recall instruments differ sharply from contemporaneous sequential logs.",
      },
      B: {
        text: "Correlational descriptive observation summarizing evocative sequences ethically preceding experimental assays when ethically permitted.",
        rationale: "Descriptive scaffolding bridges hypotheses ethically ahead of manipulated contrasts.",
      },
      C: {
        text: "Completed experimental FA certifying causal reinforcers narratively absent contrasts.",
        rationale: "Controlled contrasts adjudicate—not narrative imitation alone.",
      },
      D: {
        text: "Structural neuroimaging exclusively unrelated ecologies.",
        rationale: "Structural inventories reference ecology—not irrelevant neuroscience caricatures.",
      },
    },
    L(35),
  ),
  bx(
    "mod06-q36",
    "Prescribing treatments from caregiver FAST summaries alone—even though teams could feasibly corroborate with observation paths—MOST conflicts with:",
    "C",
    {
      A: {
        text: "Provisional hypotheses labeled honestly pending convergence.",
        rationale: "Provisional framing aligns—not conflicts—with multimethod restraint.",
      },
      B: {
        text: "Triangulating indirect plus descriptive modalities while naming uncertainty plainly.",
        rationale: "Transparency reflects Chapter 5 integration posture.",
      },
      C: {
        text: "Multimethod accountability—indirect hypotheses must meet corroborating behavioral streams whenever observation remains practicable before cementing monocausal prescriptions.",
        rationale: "Checklists accelerate priorities; they rarely substitute converging evidence.",
      },
      D: {
        text: "Documenting modality disagreements for stakeholders plainly.",
        rationale: "Open disagreement narratives support—not violate—ethical practice.",
      },
    },
    L(36),
  ),
  bx(
    "mod06-q37",
    "Administrators forbid overnight functional analyses yet peer-directed aggression spikes daily during transitions. MOST defensible interim pathway:",
    "B",
    {
      A: {
        text: "Announce a definitive escape function diagnosis from questionnaires alone.",
        rationale: "Definitive classifications require corroborating streams—not caregiver recall caricatures prematurely.",
      },
      B: {
        text: "Intensify targeted daytime descriptive probes plus stakeholder validation while scheduling abbreviated daytime experimental contrasts admitting transparent limitations plainly.",
        rationale: "Elevated injury risk ethically justifies escalating accountable multimodal scaffolding instead of monocausal improvisation.",
      },
      C: {
        text: "Rotate intervention targets arbitrarily each week awaiting unlimited FA staffing.",
        rationale: "Rotation without hypotheses wastes resources—and endangers classmates.",
      },
      D: {
        text: "Delete descriptive logs contradicting indirect optimism.",
        rationale: "Integrity demands reconciling contradictory modalities—not shredding evidence.",
      },
    },
    L(37),
  ),
  bx(
    "mod06-q38",
    "FAST escape ranks highest whereas descriptive summaries show aggression removing instructional demands MOST cautiously:",
    "A",
    {
      A: {
        text: "Interpret as converging hypotheses about instructional escape deserving cautious experimental assays—not guaranteed tangible-mediated reinforcement absent probe data.",
        rationale: "Descriptive correlations narrow suspects; manipulated contrasts certify them when ethically permitted.",
      },
      B: {
        text: "Finalize tangible reinforcement dominance immune from corroborating streams indefinitely.",
        rationale: "Tangible hypotheses invite empirical validation—not permanent checklist certainty.",
      },
      C: {
        text: "Discard individualized education accommodations because questionnaires disagree.",
        rationale: "Integrated education records contextualize—they never evaporate casually.",
      },
      D: {
        text: "Publish respondent extinction cures overnight absent calibrated observation.",
        rationale: "Extinction narratives require—not fabricate—contingency evidence.",
      },
    },
    L(38),
  ),
  bx(
    "mod06-q39",
    "Scatterplot summaries concentrating episodes midday MOST help clinicians ethically by:",
    "B",
    {
      A: {
        text: "Certifying respondent extinction classifications absent probing.",
        rationale: "Extinction arguments require—not scatterplots alone.",
      },
      B: {
        text: "Prioritizing windows for denser hypothesis-guided descriptive sampling aligned with hotspots.",
        rationale: "Temporal clustering signals where scarce observation hours buy clarity.",
      },
      C: {
        text: "Replacing stakeholder interviews permanently.",
        rationale: "Interviews ethically seed—they never substitute temporally sharper sampling.",
      },
      D: {
        text: "Guaranteeing FA completion unconditionally next week absent staffing scrutiny.",
        rationale: "Plots motivate hypotheses—they never unconditionally guarantee manipulated analyses.",
      },
    },
    L(39),
  ),
  bx(
    "mod06-q40",
    "Recall-based indirect instruments MOST risk compared with calibrated observation ethically because:",
    "A",
    {
      A: {
        text: "Stakeholders omit, misremember, or interpret events differently—even while accelerating hypothesis formation awaiting corroboration.",
        rationale: "Indirect modalities trade fidelity for prioritized hypotheses ethically positioned ahead observational bridging.",
      },
      B: {
        text: "Stakeholders universally fabricate malignant lies clinicians must ignore.",
        rationale: "Professionals presume good faith—even when recall biases persist.",
      },
      C: {
        text: "Automatically erasing individualized education documents because paperwork feels redundant.",
        rationale: "Archives contextualize—they do not evaporate—from indirect intake.",
      },
      D: {
        text: "Postponing all experimental planning forever because questionnaires finished first.",
        rationale: "Indirect tools sequence hypotheses—they seldom terminate ethical manipulated analyses permanently.",
      },
    },
    L(40),
  ),
  bx(
    "mod06-q41",
    "Selecting assessment intensity proportionate escalating harm severity MOST reflects Chapter 5 stress on:",
    "C",
    {
      A: {
        text: "Ignoring measurement whenever referrals sound polite verbally.",
        rationale: "Courtesy never excuses negligent measurement.",
      },
      B: {
        text: "Using indirect questionnaires alone universally regardless of harm severity climbing.",
        rationale: "Elevated stakes usually demand corroborating streams—not monocausal folklore.",
      },
      C: {
        text: "Scaling multimodal safeguards and transparency—with explicit uncertainty—in proportion escalating harm poses to consumers peers cannot ignore.",
        rationale: "Methodological rigor tracks risk severity—not convenience defaults.",
      },
      D: {
        text: "Rotating arbitrary weekly targets lacking analytic scaffolding.",
        rationale: "Structured integration—not improvisation—guides accountable assessment.",
      },
    },
    L(41),
  ),
  bx(
    "mod06-q42",
    "Responsible scaling of abbreviated experimental analogues when exhaustive FA staffing is unavailable MOST contrasts with:",
    "D",
    {
      A: {
        text: "Labeling phased experimental limitations plainly for stakeholders.",
        rationale: "Transparency aligns—not violates—ethical accountability decidedly.",
      },
      B: {
        text: "Planning fuller experimental probes ethically when staffing and consent realistically unlock later.",
        rationale: "Phased fuller experimental probes embody accountable continuity—not abandonment—when abbreviated probes open the sequence.",
      },
      C: {
        text: "Openly documenting descriptive contradictions while reconciling modality tensions transparently.",
        rationale: "Transparent reconciliation honors stakeholders—not secrecy—when modalities disagree.",
      },
      D: {
        text: "Fabricating polished multi-element graphs absent underlying experimental observations.",
        rationale: "Honest limitation narration matters—not counterfeit experimental polish.",
      },
    },
    L(42),
  ),
  bx(
    "mod06-q43",
    "Sharing assessment findings with multidisciplinary teams when indirect and descriptive streams diverge MOST ethically exemplifies:",
    "B",
    {
      A: {
        text: "Publishing whichever modality matches clinician preference alone.",
        rationale: "Cherry-picking violates triangulation humility Chapter 5 foregrounds.",
      },
      B: {
        text: "Presenting modality timelines—including disagreements—with plain-language reconciliation and labelled uncertainty—not pretending monocausal mastery absent convergence.",
        rationale: "Transparent integration—not selective storytelling—is the ethical hallmark.",
      },
      C: {
        text: "Withholding descriptive summaries entirely preserving polished indirect narratives indefinitely.",
        rationale: "Withholding contradictory modalities wastes the point of multimethod integration.",
      },
      D: {
        text: "Deleting graphs supervisors dislike aesthetically.",
        rationale: "Graphs anchor accountability—not disposable aesthetics.",
      },
    },
    L(43),
  ),
  bx(
    "mod06-q44",
    "Structured indirect questionnaires MOST appropriately pair with contemporaneous descriptive observation because:",
    "C",
    {
      A: {
        text: "Indirect outputs permanently replace calibrated observation once paperwork finishes.",
        rationale: "Recall instruments accelerate hypotheses—they seldom substitute behavioral corroboration when practicable.",
      },
      B: {
        text: "Indirect tools legally prohibit experimental analyses categorically.",
        rationale: "Indirect modalities sequence—not ban—experimentation unlocked responsibly later.",
      },
      C: {
        text: "They prioritize contexts and suspected reinforcer domains deserving denser corroborating streams without pretending recall equals measurement.",
        rationale: "Indirect acceleration pairs—not substitutes—for accountable behavioral validation.",
      },
      D: {
        text: "They automatically delete individualized education documentation overnight unconditionally.",
        rationale: "Archival records contextualize—they do not evaporate—from questionnaire intake.",
      },
    },
    L(44),
  ),
  bx(
    "mod06-q45",
    "Empirical preference assessments following indirect caregiver rankings MOST clarify:",
    "B",
    {
      A: {
        text: "Whether caregivers purposely misled clinicians about reinforcers.",
        rationale: "Preference probes assay stimulus effects—not presumed dishonesty.",
      },
      B: {
        text: "Whether candidate stimuli reinforce under contingent delivery—not caregiver rankings absent empirical contact.",
        rationale: "Contingency contact validates—or falsifies—indirect reinforcer hypotheses.",
      },
      C: {
        text: "Whether scatterplots replace individualized education mandates legally wholesale.",
        rationale: "Scatterplots steer sampling—they do not nullify individualized education timelines.",
      },
      D: {
        text: "Whether latency replaces descriptive observation unconditionally forever.",
        rationale: "Reinforcer validation probes differ from micrometric dimensional recording choices.",
      },
    },
    L(45),
  ),
  bx(
    "mod06-q46",
    "Administrators ethically forbid deceptive experimental graphs yet clinicians still owe accountable interim hypotheses. MOST ethical stance parallels:",
    "A",
    {
      A: {
        text: "Document plainly what descriptive and staffing constraints permit—including honest limits—rather than inventing counterfeit multi-element graphs absent manipulated data.",
        rationale: "Honesty about analytic limits beats counterfeit certainty staged without supportive data.",
      },
      B: {
        text: "Fabricate exhaustive functional analysis visuals polishing conference decks absent observation.",
        rationale: "Fabrication violates analytic integrity—not ethical improvisation.",
      },
      C: {
        text: "Delete descriptive contradictions quietly preserving monocausal folklore.",
        rationale: "Integrate conflicting modalities plainly—don't hide discordant records.",
      },
      D: {
        text: "Rotate referral targets arbitrarily weekly awaiting unlimited FA staffing.",
        rationale: "Hypothesis fidelity beats arbitrary weekly rotations without scaffolding.",
      },
    },
    L(46),
  ),
  bx(
    "mod06-q47",
    "Live ABC sequences documenting classroom transitions absent contingency manipulation MOST closely align with:",
    "B",
    {
      A: {
        text: "Indirect caregiver questionnaires referencing bedtime routines remotely.",
        rationale: "Recall tools differ materially from contemporaneous sequential logs.",
      },
      B: {
        text: "Descriptive correlational observation summarizing evocative sequences ethically preceding experimental assays when ethically permitted.",
        rationale: "Correlation seeds hypotheses ethically; manipulation adjudicates ethically when unlocked.",
      },
      C: {
        text: "Completed experimental functional analyses certifying reinforcers narratively.",
        rationale: "FA demands arranged contrasts—not narrative imitation alone.",
      },
      D: {
        text: "Structural neuroimaging scans of unrelated classroom ecologies.",
        rationale: "Structural assessment inventories reference ecologies—not brain scans.",
      },
    },
    L(47),
  ),
  bx(
    "mod06-q48",
    "Culturally responsive behavioral assessment conversations MOST centrally require clinicians first to:",
    "B",
    {
      A: {
        text: "Ship English-only questionnaires without interpretation resources whenever expedient.",
        rationale: "Language access—not speed—guides culturally responsive fidelity.",
      },
      B: {
        text: "Clarify stakeholder meaning signals, culturally interpreted routines, and valued outcomes before sealing focal hypotheses.",
        rationale: "Cultural responsiveness foregrounds stakeholder meaning—not exported monocultural forms alone.",
      },
      C: {
        text: "Removing individualized-education accommodations because forms feel inconvenient.",
        rationale: "Plans stay legally and clinically relevant—even when questionnaires lengthen workflows.",
      },
      D: {
        text: "Swap accountability graphs for marketing brochures polishing conference optics.",
        rationale: "Graphs anchor multimodal honesty—not interchangeable brochure décor.",
      },
    },
    L(48),
  ),
  bx(
    "mod06-q49",
    "Synthesizing Chapter 5 behavioral assessment MOST ethically models professional humility when teams:",
    "B",
    {
      A: {
        text: "Treat caregiver questionnaires as irrevocable causal verdicts exempt from corroborating streams.",
        rationale: "Humility labels hypotheses provisional—not certainties—until convergent evidence accumulates.",
      },
      B: {
        text: "Present multimodal timelines—including modality disagreements—with plain-language provisional hypotheses and phased plans for corroborating observation or experimentation ethically when feasible.",
        rationale: "Chapter 5 foregrounds accountable integration—not polished monocausal storytelling.",
      },
      C: {
        text: "Delete descriptive contradictions quietly to preserve monocausal folklore.",
        rationale: "Integrity folds modality conflicts into the record—rather than sanitizing disagreement.",
      },
      D: {
        text: "Rotating referrals weekly despite absent analytic scaffolding tracking hypotheses.",
        rationale: "Accountable multimodal hypotheses deserve structured coherence—not improvisation.",
      },
    },
    L(49),
  ),
  bx(
    "mod06-q50",
    "Closing ethical caution: Chapter 5 urges behavioral analysts MOST urgently to refuse:",
    "C",
    {
      A: {
        text: "Structuring stakeholder interviews ahead of prioritized descriptive probes.",
        rationale: "Sequencing interviews before observation aligns with hypothesis-driven assessment.",
      },
      B: {
        text: "Documenting baseline descriptive variability ahead of ethically scaled abbreviated experimental contrasts when staffing unlocks.",
        rationale: "Descriptive baselines contextualize—even shape—later abbreviated experimental probing.",
      },
      C: {
        text: "Issuing consequential treatment prescriptions based solely on recall instruments while ignoring feasible multimodal corroboration paths.",
        rationale: "Monocausal shortcuts clash with multimethod corroboration when other streams remain practicable.",
      },
      D: {
        text: "Telling multidisciplinary teams which modalities disagree and why uncertainty labeling matters.",
        rationale: "Transparent uncertainty supports Chapter 5's integration ethos—this option describes sound practice rather than something to refuse.",
      },
    },
    L(50),
  ),
];
