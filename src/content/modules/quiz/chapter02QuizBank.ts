import type { BDSQuestion } from "@/lib/content-types";

/**
 * Cooper/Heron/Heward Applied Behavior Analysis — Chapter 2 (Basic Concepts and Principles).
 * Fifty unique stems; no recycled workbook templates.
 *
 * Page locators use the Pearson 3rd ed. Global Edition table of contents
 * (e.g., Ch. 2 “Basic Concepts and Principles”: Behavior p. 43; Environment p. 44;
 * Respondent behavior p. 47; Operant behavior p. 49; human-behavior complexity p. 58; summary p. 60).
 * Matches the Chapter 1 quiz pattern `(CHH Chapter …, p./pp. …)` in rationales (`mod01.json` bdsBank).
 *
 * Rationales may name sixth-edition TCO domains (A–I) where it clarifies scope.
 */

/** Append CHH locator when rationale does not already include a numbered page citation. */
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

export const CHAPTER_02_QUIZ_BANK: BDSQuestion[] = [
  bx(
    "mod04-q1",
    "According to Cooper, Heron, and Heward Chapter 2, behavior analysis treats behavior MOST fundamentally as:",
    "B",
    {
      A: {
        text: "Hypothetical mental agents deciding actions independently of observable histories.",
        rationale:
          "Chapter 2 contrasts everyday mentalistic substitution with measurable organism-environment interactions—not detached agents.",
      },
      B: {
        text: "What an organism does—interaction with the environment through movement or other detectable activity measurable in principle.",
        rationale:
          "CHH Chapter 2 anchors behavior as interaction observers could track—not inaccessible homunculi metaphors.",
      },
      C: {
        text: "Covert intentions that science must never reference even indirectly.",
        rationale:
          "Radical behaviorism analyzes verbal/private behavior naturalistically rather than banning emotion vocabulary outright caricatures.",
      },
      D: {
        text: "Fixed glandular reflexes that never contact learning histories.",
        rationale:
          "Chapter 2 acknowledges phylogenic substrates yet emphasizes respondent conditioning plus operant ontogenic histories shaping repertoires.",
      },
    },
    "CHH Chapter 2, pp. 43–44",
  ),
  bx(
    "mod04-q2",
    "Determinism as a scientific attitude—for Chapter 2 behavior analysts—primarily commits analysts to:",
    "A",
    {
      A: {
        text: "Searching for lawful environmental and historical influences rather than treating behavior as capricious.",
        rationale:
          "Determinism invites disciplined causal inquiry anchored to observable histories (CHH Ch. 2 scientific attitudes overview).",
      },
      B: {
        text: "Ignoring challenging behavior whenever explanations feel politically tense.",
        rationale:
          "Avoidance contradicts analytic obligation to investigate controlling variables ethically—not dodge lawful accounts.",
      },
      C: {
        text: "Accepting caregiver anecdotes as sufficient permanent substitutes for measurement.",
        rationale:
          "Empiricism still demands observable anchoring beyond anecdotes despite respecting stakeholder narratives.",
      },
      D: {
        text: "Rejecting experimentation categorically whenever graphs exist.",
        rationale:
          "Experimentation remains central attitude—not abolished—because arranging contrasts clarifies causality.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes and the science of behavior",
  ),
  bx(
    "mod04-q3",
    "Empiricism MOST centrally insists practitioners:",
    "C",
    {
      A: {
        text: "Prioritize charismatic keynote metaphors over reproducible observations.",
        rationale:
          "Empiricism contrasts authority theater with anchored measurements—not substitutes folklore.",
      },
      B: {
        text: "Eliminate stakeholder interviews permanently from assessment pipelines.",
        rationale:
          "Interviews generate hypotheses requiring verification—not forbidden outright empirically.",
      },
      C: {
        text: "Ground decisions in systematic observation/measurement rather than prestige appeals alone.",
        rationale:
          "CHH Chapter 2 stresses observable anchoring aligning rhetoric with evidentiary footing.",
      },
      D: {
        text: "Publish mastery conclusions prior to graphed verification.",
        rationale:
          "Empirical commitments contradict declaring certainty absent plotted accountable evidence.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes and the science of behavior",
  ),
  bx(
    "mod04-q4",
    "Experimentation as attitude MOST contrasts with:",
    "D",
    {
      A: {
        text: "Replication attempts verifying duplicated protocols.",
        rationale:
          "Experimentation complements replication—not contradicts—it actively arranges contrasts.",
      },
      B: {
        text: "Parsimony shaving redundant explanatory constructs.",
        rationale:
          "Parsimony trims explanatory fat orthogonal to arranging ethical contrasts.",
      },
      C: {
        text: "Philosophic doubt revisiting cherished hypotheses.",
        rationale:
          "Doubt integrates humility—not avoidance—with experimentation ethos.",
      },
      D: {
        text: "Passive rumor acceptance lacking deliberate arrangement isolating causal candidates.",
        rationale:
          "Experimentation stresses manipulating arrangements ethically—not gossip substitutes.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes and the science of behavior",
  ),
  bx(
    "mod04-q5",
    "Replication MOST directly safeguards interpretation against:",
    "B",
    {
      A: {
        text: "Dimensional mismatch between latency versus duration graphs exclusively.",
        rationale:
          "Replication tackles reproducibility—not dimensional bookkeeping trivia exclusively.",
      },
      B: {
        text: "Idiosyncratic flashy demonstrations surviving solely inside original charismatic demos.",
        rationale:
          "Independent reruns verify effects transcend solitary showcases—core replication rationale.",
      },
      C: {
        text: "Scatterplots plotting bedtime routines exclusively.",
        rationale:
          "Scatterplots descriptive—not synonymous—with replication mandates broadly.",
      },
      D: {
        text: "Whole-interval underestimation mechanics exclusively.",
        rationale:
          "Sampling biases differ analytic topic—not replication definition cores.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes and the science of behavior",
  ),
  bx(
    "mod04-q6",
    "Parsimony MOST advises analysts to:",
    "A",
    {
      A: {
        text: "Prefer simpler explanations fitting observed data until complexity earns supportive evidence.",
        rationale:
          "CHH Chapter 2 ties parsimony to explanatory restraint—not mystical layering defaults.",
      },
      B: {
        text: "Layer speculative unconscious machinery whenever graphs plateau.",
        rationale:
          "Parsimony discourages ornate metaphysics lacking empirical warrants—not invites them.",
      },
      C: {
        text: "Discard graphs whenever narratives sound plausible orally.",
        rationale:
          "Parsimony trims constructs—not deletes visualization accountability.",
      },
      D: {
        text: "Eliminate stakeholder involvement systematically.",
        rationale:
          "Parsimony concerns explanatory economy—not stakeholder participation bans.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes and the science of behavior",
  ),
  bx(
    "mod04-q7",
    "Philosophic doubt MOST aligns with:",
    "C",
    {
      A: {
        text: "Declaring immutable truths after inaugural probe sessions permanently.",
        rationale:
          "Doubt embraces revisability—not immutable certainty caricatures.",
      },
      B: {
        text: "Ignoring contradictory datasets systematically whenever inconvenient politically.",
        rationale:
          "Doubt insists confronting contradictory evidence—not suppression instincts.",
      },
      C: {
        text: "Treating today's favored causal accounts as provisional pending future evidentiary challenges.",
        rationale:
          "CHH couples philosophic doubt with humility revising narratives responsibly.",
      },
      D: {
        text: "Banning replication culturally inside clinics permanently.",
        rationale:
          "Replication complements—not contradicts—philosophic doubt commitments.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes and the science of behavior",
  ),
  bx(
    "mod04-q8",
    "Selectionism—as Chapter 2 introduces operant phenomena—emphasizes:",
    "D",
    {
      A: {
        text: "Respondent arcs never undergoing respondent extinction sequences.",
        rationale:
          "Selectionism stresses consequence-selected variants—not respondent extinction bans.",
      },
      B: {
        text: "Random reinforcement deliveries unrelated organism histories exclusively.",
        rationale:
          "Selection references systematic differential retention—not chaos caricatures.",
      },
      C: {
        text: "Eliminating observability mandates permanently.",
        rationale:
          "Selection integrates measurable histories—not rejects observation outright.",
      },
      D: {
        text: "Behavior variants contacting differential consequences persist while unsupported variants diminish.",
        rationale:
          "Skinnerian selection analogy stresses ontogenic consequence histories shaping distributions.",
      },
    },
    "CHH Chapter 2, pp. 49–50 — selection by consequences (operant introduction)",
  ),
  bx(
    "mod04-q9",
    "Respondent behavior—per Chapter 2—is MOST accurately described as:",
    "B",
    {
      A: {
        text: "Behavior strengthened primarily because reinforcing stimuli followed topography last Tuesday exclusively.",
        rationale:
          "Consequence-selected strengthening narratives anchor operants—not respondent elicitation arcs.",
      },
      B: {
        text: "Behavior elicited by antecedent stimuli owing to phylogenic and/or respondent-conditioning preparations.",
        rationale:
          "CHH contrasts respondents reflexively evoked versus operants consequence-controlled.",
      },
      C: {
        text: "Behavior occurring only during verbal instructions lacking reinforcement histories.",
        rationale:
          "Instruction control complements—not replaces—respondent reflex scaffolding narratives.",
      },
      D: {
        text: "Behavior requiring token economies phylogenetically innate universally.",
        rationale:
          "Token economies culturally engineered—not phylogenic reflex prerequisites globally.",
      },
    },
    "CHH Chapter 2, pp. 47–48 — respondent behavior",
  ),
  bx(
    "mod04-q10",
    "Operant behavior MOST contrasts respondent behavior because operants:",
    "A",
    {
      A: {
        text: "Are influenced by consequences shaping future likelihood across ontogenic histories.",
        rationale:
          "CHH stresses consequence-selected classes—not reflex-only elicitation defining operants.",
      },
      B: {
        text: "Never contact discriminative stimuli historically.",
        rationale:
          "Operants routinely encounter SD histories controlling reinforcement occasions.",
      },
      C: {
        text: "Cannot undergo extinction contingencies.",
        rationale:
          "Operants remain sensitive extinction withholding reinforcement—not extinction immunity fictions.",
      },
      D: {
        text: "Always imply respondent conditioning arcs exclusively.",
        rationale:
          "Operants coexist—not collapse—into respondent arcs exclusively.",
      },
    },
    "CHH Chapter 2, pp. 47–50 — respondent vs. operant contrast",
  ),
  bx(
    "mod04-q11",
    "Salivation when meat powder enters an organism's mouth prior Pavlovian episodes illustrates:",
    "C",
    {
      A: {
        text: "Positive punishment suppressing chewing permanently exclusively.",
        rationale:
          "Appetitive respondent relation—not punitive suppression caricatures.",
      },
      B: {
        text: "Negative reinforcement escaping utensils categorically.",
        rationale:
          "Salivation respondent—not NR escape vignettes emphasized.",
      },
      C: {
        text: "Unconditioned respondent relation phylogenetically scaffolded needing zero respondent-conditioning trials.",
        rationale:
          "Classic UR illustration grounding respondent conditioning introductions.",
      },
      D: {
        text: "Rule-governed compliance referencing cafeteria menus verbally exclusively.",
        rationale:
          "No instructional governance prerequisite reflex arcs emphasized.",
      },
    },
    "CHH Chapter 2, pp. 47–48 — unconditioned respondent (UR) relations",
  ),
  bx(
    "mod04-q12",
    "Repeated CS–US pairings culminating conditioned salivation to bell tones BEST illustrates:",
    "D",
    {
      A: {
        text: "Operant extinction withholding praise exclusively.",
        rationale:
          "Classical pairing contrasts—not exclusively—with operant extinction withholding tactics.",
      },
      B: {
        text: "Negative punishment removing tokens contingent refusing bites exclusively.",
        rationale:
          "Token removals punitive classes—not respondent conditioning vignettes.",
      },
      C: {
        text: "Automatic reinforcement sensory loops absent environmental stimuli exclusively.",
        rationale:
          "Pairings emphasize explicit stimulus relations—not purely automatic sensory closures exclusively.",
      },
      D: {
        text: "Respondent conditioning transferring elicitation via conditioned stimuli historically correlated with US presentations.",
        rationale:
          "CHH Chapter 2 respondent conditioning foundations emphasize pairing histories.",
      },
    },
    "CHH Chapter 2, pp. 47–48 — respondent (classical) conditioning",
  ),
  bx(
    "mod04-q13",
    "Phylogenic behavior MOST centrally refers to:",
    "A",
    {
      A: {
        text: "Species histories furnishing reflex substrates prior individualized learning arcs.",
        rationale:
          "Chapter 2 distinguishes phylogenic preparedness versus ontogenic selection narratives.",
      },
      B: {
        text: "Token reinforcement histories accrued across adolescent classrooms exclusively.",
        rationale:
          "Arbitrary reinforcement culturally engineered—not phylogenic reflex catalogs exclusively.",
      },
      C: {
        text: "Scatterplots plotting bedtime routines exclusively.",
        rationale:
          "Descriptive visuals orthogonal phylogenic conceptual definitions.",
      },
      D: {
        text: "Whole-interval underestimates masking bursts exclusively.",
        rationale:
          "Measurement biases unrelated phylogenic terminology cores.",
      },
    },
    "CHH Chapter 2, pp. 47–48 — phylogenic (species) history in respondent relations",
  ),
  bx(
    "mod04-q14",
    "Ontogenic behavior MOST centrally emphasizes:",
    "B",
    {
      A: {
        text: "Species extinction timelines geological epochs exclusively.",
        rationale:
          "Ontogenic references lifetime—not geological epochs caricatures.",
      },
      B: {
        text: "Individual learning histories especially consequence-selected operant repertoires.",
        rationale:
          "CHH contrasts ontogenic histories shaping individuals versus phylogenic readiness substrates.",
      },
      C: {
        text: "MRI voxel smoothing algorithms exclusively.",
        rationale:
          "Neuro imagery orthogonal foundational definitions emphasized Chapter 2.",
      },
      D: {
        text: "Respondent arcs forbidding reinforcement contacts categorically forever.",
        rationale:
          "Ontogenic arcs embrace reinforcement narratives—not forbid them universally.",
      },
    },
    "CHH Chapter 2, pp. 49–53 — ontogenic (individual learning) history",
  ),
  bx(
    "mod04-q15",
    "Chapter 2 reminds analysts real-world repertoires MOST often:",
    "C",
    {
      A: {
        text: "Pure respondent exclusively excluding operant mixes permanently practically.",
        rationale:
          "CHH warns neither respondent nor operant classes exhaust messy everyday blends.",
      },
      B: {
        text: "Pure operant excluding respondent arcs clinically universally.",
        rationale:
          "Dogmatic single-class caricatures contradict interplay reminders Chapter 2.",
      },
      C: {
        text: "Blend respondent elicitation with operant consequence control requiring analytic discrimination.",
        rationale:
          "Chapter stresses interplay—not forcing crude binary reductions prematurely.",
      },
      D: {
        text: "Exclude reinforcement histories categorically whenever verbal behavior emerges exclusively.",
        rationale:
          "Verbal behavior remains analyzable—not reinforcement immunity mythical.",
      },
    },
    "CHH Chapter 2, pp. 58–59 — interplay of respondent and operant repertoires",
  ),
  bx(
    "mod04-q16",
    "Three-term contingency shorthand SD–R–Sr—as Chapter 2 previews—labels:",
    "D",
    {
      A: {
        text: "Respondent extinction termination criterion exclusively.",
        rationale:
          "Extinction withholding reinforcement differs—not identical—with contingency shorthand emphasized.",
      },
      B: {
        text: "Whole-interval mastery checklist exclusively.",
        rationale:
          "Sampling unrelated contingency mnemonic emphasized introductory Chapter 2.",
      },
      C: {
        text: "Scatterplot smoothing kernels exclusively.",
        rationale:
          "Graph smoothing orthogonal contingency anatomy previews.",
      },
      D: {
        text: "Discriminative stimulus occasioning response contacting reinforcing consequence historically.",
        rationale:
          "CHH forwards analytic unit bridging toward fuller contingency chapters later.",
      },
    },
    "CHH Chapter 2, pp. 49–53 — three-term contingency / SD preview",
  ),
  bx(
    "mod04-q17",
    "Discriminative stimuli MOST centrally set occasions wherein:",
    "A",
    {
      A: {
        text: "Specified responses historically contacted reinforcement under comparable contextual controls.",
        rationale:
          "SD correlates reinforcement availability histories—not reflex arcs exclusively definitions.",
      },
      B: {
        text: "Reflex arcs trigger inevitably ignoring reinforcement histories permanently universally.",
        rationale:
          "SD emphasizes operant occasions—not phylogenic reflex mandates universally.",
      },
      C: {
        text: "Punishment impossible categorically forever analytically universally.",
        rationale:
          "Punishment may coexist contextual analytic narratives—not impossible caricatures.",
      },
      D: {
        text: "Respondent extinction cycles initiate automatically universally simultaneously.",
        rationale:
          "Extinction arcs contingent withholding—not automatic inevitabilities universally tied SD onset.",
      },
    },
    "CHH Chapter 2, pp. 49–53 — discriminative stimulus (SD)",
  ),
  bx(
    "mod04-q18",
    "Chapter 2 introduces reinforcement punishment extinction stimulus control chiefly as:",
    "B",
    {
      A: {
        text: "Respondent-only mechanisms banning operant explanations permanently exclusively.",
        rationale:
          "Concepts scaffold operant consequence tools—not respondent exclusivity bans.",
      },
      B: {
        text: "Environmental processes shaping probability/topography future operant responding previewed deeper later chapters.",
        rationale:
          "CHH previews toolkit fuller elaborations forthcoming—not exhaustive Chapter 2 derivations exclusively.",
      },
      C: {
        text: "Measurement tactics replacing graphed accountability permanently exclusively.",
        rationale:
          "They consequence processes—not measurement substitutes caricatures.",
      },
      D: {
        text: "Structural MRI interpretations exclusively permanently universally.",
        rationale:
          "Neuro orthogonal foundational behavioral vocabulary introductions Chapter 2.",
      },
    },
    "CHH Chapter 2, pp. 49–57 — preview of reinforcement, punishment, extinction, stimulus control",
  ),
  bx(
    "mod04-q19",
    "Methodological behaviorism—as Chapter 2 contrasts—historically stresses:",
    "C",
    {
      A: {
        text: "Analyzing verbal anxiety reports identical radical behaviorism without distinction permanently universally.",
        rationale:
          "Contrasts hinge differentiated privacy treatments—not identical merges caricatures.",
      },
      B: {
        text: "Eliminating observable measurement mandates systematically universally permanently.",
        rationale:
          "Methodological strains emphasized observables—not abolishing measurement mandates caricatures backwards.",
      },
      C: {
        text: "Restricting scientific vocabulary primarily publicly observable stimuli/responses hesitating privacy admissions absent anchors.",
        rationale:
          "CHH distinguishes methodological caution versus radical analyses verbal privacy behaving.",
      },
      D: {
        text: "Mandating unconscious drives scientifically measurable universally permanently exclusively.",
        rationale:
          "Methodological contrasts emphasize observable anchors—not endorsement metaphysical drives mandates universally.",
      },
    },
    "CHH Chapter 2, pp. 44–46 — methodological vs. radical behaviorism (environment / privacy contrasts)",
  ),
  bx(
    "mod04-q20",
    "Radical behaviorism—Chapter 2 framing—regarding verbal panic reports MOST asserts:",
    "A",
    {
      A: {
        text: "They constitute verbal behavior analyzable via reinforcement histories—not mystical exemptions immune measurement.",
        rationale:
          "Radical integrates privacy behaving—not banning discourse outright caricatures methodological confusion.",
      },
      B: {
        text: "They prove soul substances scientifically measurable universally permanently exclusively.",
        rationale:
          "Radical avoids dualistic substances—not insists soul proofs caricatures.",
      },
      C: {
        text: "They must disappear datasheets categorically permanently universally exclusively.",
        rationale:
          "Radical analyzes—not deletes—privacy verbal streams responsibly measurement-wise.",
      },
      D: {
        text: "They cancel reinforcement laws uniquely universally permanently exclusively.",
        rationale:
          "Private verbal acts obey overarching principles—not metaphysical exemptions overriding laws caricatures.",
      },
    },
    "CHH Chapter 2, pp. 44–46, 58–59 — radical behaviorism / privacy as behaving",
  ),
  bx(
    "mod04-q21",
    "Rule-governed behavior MOST centrally highlights:",
    "D",
    {
      A: {
        text: "Respondents eliminating reinforcement histories permanently universally exclusively.",
        rationale:
          "Rule governance complements—not replaces—respondent arcs distinctions emphasized separately.",
      },
      B: {
        text: "Extinction withholding reinforcement exclusively respondent arcs universally permanently exclusively.",
        rationale:
          "Extinction spans classes—not respondent-exclusive caricatures universally permanently.",
      },
      C: {
        text: "Automatic reinforcement sensory isolation absent histories universally permanently exclusively.",
        rationale:
          "Rule governance emphasizes verbally mediated antecedents—not sensory isolation caricatures globally.",
      },
      D: {
        text: "Control via verbal descriptions contingencies preceding exhaustive natural contingency contacts akin purely contingency-shaped repertoires.",
        rationale:
          "CHH contrasts instructional governance bridging language contingencies shaping histories differentially.",
      },
    },
    "CHH Chapter 2, pp. 58–59 — rule-governed vs. contingency-shaped behavior",
  ),
  bx(
    "mod04-q22",
    "Contingency-shaped behavior MOST centrally emerges when:",
    "B",
    {
      A: {
        text: "Formal verbal descriptions rehearsed repeatedly without reinforcement or punishment histories contacting behavior.",
        rationale:
          "That portrait aligns better with instructional histories than purely contingency-shaped acquisition emphasized here.",
      },
      B: {
        text: "Acts strengthen or weaken because reinforcing/punishing consequences historically followed particular responses.",
        rationale:
          "CHH distinguishes histories contacting contingencies directly versus instructional shortcuts bridging gaps responsibly.",
      },
      C: {
        text: "Reflexive behavior elicits solely because phylogenic stimuli fired regardless of reinforcement schedules.",
        rationale:
          "Respondent arcs contrast—not substitute—for contingency-shaped operant strengthening narratives Chapter foregrounds.",
      },
      D: {
        text: "Scatterplots documenting temporal spikes substitute for manipulating reinforcement deliveries.",
        rationale:
          "Descriptive plotting summarizes correlational timing—not contingency-shaped histories contacting consequences.",
      },
    },
    "CHH Chapter 2, pp. 58–59 — rule-governed vs. contingency-shaped behavior",
  ),
  bx(
    "mod04-q23",
    "Laboratory rats lever press faster for grain after hours without food—Chapter 2 motivating-operation teaser MOST casts food deprivation as:",
    "A",
    {
      A: {
        text: "An establishing operation temporarily increasing grain's reinforcing effectiveness.",
        rationale:
          "Deprivation heightens reinforcer value—full motivating-operation taxonomy unfolds systematically beginning in CHH Chapter 16, pp. 412–431.",
      },
      B: {
        text: "An abolishing operation analogous to finishing a large meal immediately beforehand.",
        rationale:
          "Satiation—not deprivation—chiefly parallels abolishing reductions in reinforcer effectiveness.",
      },
      C: {
        text: "Respondent extinction eliminating conditioned lever presses altogether permanently universally exclusively.",
        rationale:
          "MO vignettes alter motivation—not respondent extinction arcs emphasized universally trimmed:",
      },
      D: {
        text: "Positive punishment suppressing presses via deprivation shocks categorically universally permanently exclusively.",
        rationale:
          "Deprivation adjusts motivating effectiveness—not punitive stimulus presentations caricatures trimmed:",
      },
    },
    "CHH Chapter 2 motivating-operation preview — systematic MO taxonomy CHH Chapter 16, pp. 412–431",
  ),
  bx(
    "mod04-q24",
    "Immediately after consuming free pellets until satiated a pigeon seldom pecks the grain key despite pellets physically remaining—Chapter 2 MOST ties satiation to:",
    "C",
    {
      A: {
        text: "Establishing operations intensifying pellet reinforcement universally permanently exclusively.",
        rationale:
          "Satiation lowers—not raises—momentary reinforcing potency caricatures contradictory trimmed:",
      },
      B: {
        text: "Respondent extinction terminating keypecks phylogenetically universally permanently exclusively.",
        rationale:
          "Satiation adjusts motivational backdrop—not phylogenic respondent extinction caricatures universally trimmed:",
      },
      C: {
        text: "Abolishing-style effects lowering reinforcing effectiveness analogous to motivational shifts Chapter previews.",
        rationale:
          "CHH previews abolishing motivating effects contrasting deprivation vignettes expanded in CHH Chapter 16, pp. 412–431.",
      },
      D: {
        text: "Positive punishment presentations contingent keypecks universally permanently exclusively.",
        rationale:
          "Satiation motivational—not punitive suppression caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2 motivating-operation preview — systematic MO taxonomy CHH Chapter 16, pp. 412–431",
  ),
  bx(
    "mod04-q25",
    "Chapter 2 explicitly forwards systematic motivating-operation analysis primarily to:",
    "D",
    {
      A: {
        text: "Chapter 21 procedural fidelity audits exclusively universally permanently exclusively.",
        rationale:
          "Forward reference cites MO-focused chapters—not unrelated procedural fidelity audit caricatures universally trimmed:",
      },
      B: {
        text: "Structural MRI interpretations exclusively universally permanently exclusively.",
        rationale:
          "Forward references behavioral—not neuro imaging caricatures universally trimmed:",
      },
      C: {
        text: "Whole-interval sampling formulas exclusively universally permanently exclusively.",
        rationale:
          "MO framing contrasts—not merges—with sampling notation caricatures universally trimmed:",
      },
      D: {
        text: "CHH Chapter 16 detailing establishing operations, abolishing operations, conditioned motivating operations, and allied motivating phenomena (opening sections pp. 412–418 in Pearson Global TOC).",
        rationale:
          "Chapter 2 preview deliberately routes systematic motivating-operation exposition to CHH Chapter 16 rather than unpacking full MO taxonomy prematurely.",
      },
    },
    "CHH Chapter 2 forward reference — MO chapters (esp. systematic treatment CHH Chapter 16, pp. 412–431)",
  ),
  bx(
    "mod04-q26",
    "Within respondent conditioning narratives Chapter emphasizes neutral stimuli becoming conditioned stimuli ONLY after:",
    "B",
    {
      A: {
        text: "Delivering arbitrary praise contingent keystrokes historically exclusively universally permanently exclusively.",
        rationale:
          "That portrayal aligns better with operant contingencies—not respondent pairing prerequisites caricatures universally trimmed:",
      },
      B: {
        text: "Pairing histories correlate formerly neutral stimuli with unconditioned stimuli eliciting unconditioned respondents.",
        rationale:
          "Respondent conditioning hinges correlated stimulus presentations scaffolding conditioned elicitation responsibly.",
      },
      C: {
        text: "Withholding reinforcement extinction phases exclusively universally permanently exclusively.",
        rationale:
          "Extinction withholding contrasts—not duplicates—respondent pairing prerequisites caricatures universally trimmed:",
      },
      D: {
        text: "Issuing verbal instructions forbidding respondent arcs categorically universally permanently exclusively.",
        rationale:
          "Instructions orthogonal respondent pairing mechanics caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 47–48 — respondent conditioning (CS–US relations)",
  ),
  bx(
    "mod04-q27",
    "Unconditioned stimulus within respondent-conditioning introductions MOST denotes:",
    "A",
    {
      A: {
        text: "Stimulus eliciting respondent reliably absent respondent-conditioning trials owing phylogenic/US histories.",
        rationale:
          "US anchors respondent-conditioning arcs pairing neutral stimuli predictive histories responsibly.",
      },
      B: {
        text: "Neutral tone preceding food lacking elicitation powers historically universally permanently exclusively.",
        rationale:
          "Neutral stimuli acquire power via pairing—not inherently unconditional caricatures universally trimmed:",
      },
      C: {
        text: "Discriminative stimulus signaling reinforcement exclusively universally permanently exclusively.",
        rationale:
          "SD emphasizes operant reinforcement histories—not respondent US definitions caricatures universally trimmed:",
      },
      D: {
        text: "Conditioned stimulus evoking conditioned respondents historically universally permanently exclusively.",
        rationale:
          "Conditioned stimuli derive pairing—not unconditional reflex arcs caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 47–48 — unconditioned stimulus (US) definitions",
  ),
  bx(
    "mod04-q28",
    "Conditioned stimulus after pairing MOST:",
    "C",
    {
      A: {
        text: "Signals reinforcement availability historically controlling operants exclusively universally permanently exclusively.",
        rationale:
          "That wording mirrors SD analogues—not respondent CS definitions caricatures universally trimmed:",
      },
      B: {
        text: "Functions exclusively establishing motivating operations analogous deprivation vignettes universally permanently exclusively.",
        rationale:
          "MO contrasts—not overlaps tidily—with respondent CS terminology caricatures universally trimmed:",
      },
      C: {
        text: "Evokes conditioned respondent owing correlated histories predictive previously neutral stimuli presentations.",
        rationale:
          "Conditioned respondent arcs hinge predictive stimulus relations respondent-conditioning scaffolding responsibly.",
      },
      D: {
        text: "Guarantees automatic reinforcement sensory isolation socially mediated universally permanently exclusively.",
        rationale:
          "Automatic reinforcement vignettes orthogonal respondent conditioning terminology caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 47–48 — conditioned stimulus (CS) and conditioned respondent",
  ),
  bx(
    "mod04-q29",
    "Same muscular topography—blink—may instantiate respondent arcs puff-elicited versus operant arcs reinforced histories MOST illustrates:",
    "D",
    {
      A: {
        text: "Topography alone settles respondent classification reliably universally permanently exclusively.",
        rationale:
          "CHH warns topography insufficient discriminator absent controlling relation analyses caricatures universally trimmed:",
      },
      B: {
        text: "Respondents forbid reinforcement histories categorically universally permanently exclusively.",
        rationale:
          "Respondents coexist—not forbid—histories caricatures universally trimmed:",
      },
      C: {
        text: "Operants forbid respondent arcs clinically universally permanently exclusively.",
        rationale:
          "Operants coexist—not forbid respondents caricatures universally trimmed:",
      },
      D: {
        text: "Identical movements demand analytic scrutiny specifying elicitation versus consequence-selection controlling variables.",
        rationale:
          "Chapter underscores analytic—not superficial muscular—classification commitments responsibly.",
      },
    },
    "CHH Chapter 2, pp. 58–59 — topography alone does not define respondent vs. operant",
  ),
  bx(
    "mod04-q30",
    "Chapter 2 framing reinforcement MOST emphasizes reinforcement:",
    "A",
    {
      A: {
        text: "Processes strengthening future probabilities targeted responses contingent consequence deliveries previewed elaborations later chapters.",
        rationale:
          "CHH previews reinforcement strengthens—not exhaustive computational formulas Chapter 4 expands responsibly.",
      },
      B: {
        text: "Respondents eliciting reflex arcs phylogenetically exclusively universally permanently exclusively.",
        rationale:
          "Reinforcement terminology anchors operant consequence histories—not respondent elicitation caricatures universally trimmed:",
      },
      C: {
        text: "Scatterplots smoothing bedtime spikes exclusively universally permanently exclusively.",
        rationale:
          "Graph smoothing orthogonal reinforcement definitional previews caricatures universally trimmed:",
      },
      D: {
        text: "Whole-interval underestimates masking bursts exclusively universally permanently exclusively.",
        rationale:
          "Sampling orthogonal reinforcement previews caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 49–57 — reinforcement vocabulary (extended treatment later in text)",
  ),
  bx(
    "mod04-q31",
    "Chapter 2 framing punishment MOST emphasizes punishment:",
    "B",
    {
      A: {
        text: "Processes strengthening respondent blinks phylogenetically universally permanently exclusively.",
        rationale:
          "Punishment previews suppression—not phylogenic respondent strengthening caricatures universally trimmed:",
      },
      B: {
        text: "Processes weakening future probabilities targeted responses contingent consequence deliveries preview elaborations later chapters.",
        rationale:
          "CHH previews punishment suppresses fuller taxonomy expands forthcoming textbook chapters responsibly.",
      },
      C: {
        text: "Neutral stimuli predictive respondent extinction exclusively universally permanently exclusively.",
        rationale:
          "Neutral stimuli orthogonal punishment previews caricatures universally trimmed:",
      },
      D: {
        text: "Motivating operations establishing reinforcers exclusively universally permanently exclusively.",
        rationale:
          "MO contrasts—not merges—with punishment previews caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 49–57 — punishment vocabulary (extended treatment begins CHH Chapter 14, p. 364; CHH Chapter 15, p. 392, Global ed. TOC)",
  ),
  bx(
    "mod04-q32",
    "Chapter 2 extinction preview MOST emphasizes withholding:",
    "C",
    {
      A: {
        text: "Discriminative stimuli occasions reinforcement historically universally permanently exclusively.",
        rationale:
          "SD previews reinforcement occasions—not extinction withholding caricatures universally trimmed:",
      },
      B: {
        text: "Unconditioned stimuli respondent pairing phases exclusively universally permanently exclusively.",
        rationale:
          "Respondent pairing orthogonal extinction withholding previews caricatures universally trimmed:",
      },
      C: {
        text: "Reinforcement historically maintaining responding thereby reducing future frequencies contingent omission responsibly previewed deeper later chapters.",
        rationale:
          "CHH previews extinction withholds reinforcement fuller schedules unfold subsequent readings responsibly.",
      },
      D: {
        text: "Punishment deliveries contingent topography exclusively universally permanently exclusively.",
        rationale:
          "Punishment contrasts—not duplicates—with extinction omission caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 49–57 — operant extinction preview (respondent extinction contrast CHH Chapter 2, pp. 47–48)",
  ),
  bx(
    "mod04-q33",
    "Stimulus control preview Chapter 2 MOST stresses:",
    "D",
    {
      A: {
        text: "Respondent extinction manipulating CS-US correlations exclusively universally permanently exclusively.",
        rationale:
          "Respondent extinction arcs distinct—not identical—with stimulus control previews caricatures universally trimmed:",
      },
      B: {
        text: "Whole-interval mastery formulas exclusively universally permanently exclusively.",
        rationale:
          "Sampling orthogonal stimulus control previews caricatures universally trimmed:",
      },
      C: {
        text: "MRI interpretations exclusively universally permanently exclusively.",
        rationale:
          "Neuro orthogonal stimulus control previews caricatures universally trimmed:",
      },
      D: {
        text: "Environmental stimuli historically correlated reinforcement/punishment gaining discriminative influence shaping responding probabilities responsibly previewed expansions later chapters.",
        rationale:
          "CHH previews discriminative stimulus control elaborations deepen forthcoming readings responsibly.",
      },
    },
    "CHH Chapter 2, pp. 49–57 — stimulus control preview (later CHH Chapter 17, pp. 437–451)",
  ),
  bx(
    "mod04-q34",
    "Everyday mentalistic phrases substituting unseen agents bypassing histories MOST contradict Chapter commitments emphasizing:",
    "A",
    {
      A: {
        text: "Observable organism-environment interactions analyzable versus hypothetical inner agents exempt measurement.",
        rationale:
          "Chapter contrasts everyday mentalisms versus measurable behavioral histories responsibly anchored scientifically trimmed:",
      },
      B: {
        text: "Ignoring stakeholder narratives systematically universally permanently exclusively.",
        rationale:
          "Stakeholder narratives inform—not contradict—scientific attitudes caricatures universally trimmed:",
      },
      C: {
        text: "Eliminating graphed accountability systematically universally permanently exclusively.",
        rationale:
          "Graphical accountability complements—not contradicts—scientific attitudes caricatures universally trimmed:",
      },
      D: {
        text: "Banning respondent arcs clinically universally permanently exclusively.",
        rationale:
          "Respondents acknowledged—not banned caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 43–46 — science of behavior rejects mentalistic substitutes",
  ),
  bx(
    "mod04-q35",
    "Scientific attitudes collectively MOST discipline:",
    "B",
    {
      A: {
        text: "Eliminating caregiver interviews clinically universally permanently exclusively.",
        rationale:
          "Interviews complement—not sabotage—scientific humility caricatures universally trimmed:",
      },
      B: {
        text: "Overconfident marketing narratives lacking replication parsimony experimentation observable anchors responsibly.",
        rationale:
          "Attitudes curb hype insisting lawful observable replicated accountable interpretations responsibly trimmed:",
      },
      C: {
        text: "Scatterplots smoothing bedtime spikes exclusively universally permanently exclusively.",
        rationale:
          "Graph smoothing orthogonal attitudes bundles caricatures universally trimmed:",
      },
      D: {
        text: "Token economies phylogenetically innate universally permanently exclusively.",
        rationale:
          "Tokens culturally engineered—not phylogenic caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes and skepticism toward hype",
  ),
  bx(
    "mod04-q36",
    "Verbal behavior—including caregiver panic statements Chapter cites—fits radical stance because:",
    "C",
    {
      A: {
        text: "Statements bypass reinforcement histories magically universally permanently exclusively.",
        rationale:
          "Radical denies—not promotes—magical exemptions caricatures universally trimmed:",
      },
      B: {
        text: "Statements forbid measurement systematically universally permanently exclusively.",
        rationale:
          "Radical analyzes—not forbids—measurement caricatures universally trimmed:",
      },
      C: {
        text: "Statements constitute measurable verbal acts contacting histories analyzable akin publicly observable behaviors responsibly.",
        rationale:
          "Radical integrates privacy behaving—not mythical soul weather caricatures methodological trainees confuse responsibly trimmed:",
      },
      D: {
        text: "Statements identical methodological bans emotion vocabulary wholesale universally permanently exclusively.",
        rationale:
          "Radical contrasts methodological exclusion caricatures—not identical bans responsibly trimmed:",
      },
    },
    "CHH Chapter 2, pp. 44–46, 58–59 — verbal behavior analyzed as behavior (vs. methodological exclusion)",
  ),
  bx(
    "mod04-q37",
    "Instructions prompting learner rehearse routines faster contacting consequences mature MOST illustrates bridging:",
    "D",
    {
      A: {
        text: "Respondents eliminating reinforcement histories phylogenetically universally permanently exclusively.",
        rationale:
          "Instruction bridging contrasts—not merges—with respondent phylogeny caricatures universally trimmed:",
      },
      B: {
        text: "Whole-interval mastery formulas exclusively universally permanently exclusively.",
        rationale:
          "Sampling orthogonal instructional bridging caricatures universally trimmed:",
      },
      C: {
        text: "MRI smoothing kernels exclusively universally permanently exclusively.",
        rationale:
          "Neuro orthogonal instructional bridging caricatures universally trimmed:",
      },
      D: {
        text: "Rule-governed repertoires verbally mediated bridging toward eventual contingency-shaped contacts responsibly Chapter previews deeper analyses upcoming readings trimmed:",
        rationale:
          "CHH introduces instructional governance bridging natural contingency contacts responsibly trimmed:",
      },
    },
    "CHH Chapter 2, pp. 58–59 — verbally mediated governance before exhaustive natural-contact exposure",
  ),
  bx(
    "mod04-q38",
    "Chapter contrasts methodological hesitation analyzing privacy absent anchors versus radical analyses MOST intends trainees avoid:",
    "A",
    {
      A: {
        text: "Equating methodological caution about privacy with caricature bans disallowing measurable verbal anxiety reporting wholly responsibly trimmed:",
        rationale:
          "Chapter warns trainee confusion methodological excludes radical analyzes—not identical bans responsibly trimmed:",
      },
      B: {
        text: "Interviewing caregivers responsibly universally permanently exclusively.",
        rationale:
          "Interviews encouraged—not discouraged caricatures universally trimmed:",
      },
      C: {
        text: "Graphing countable behaviors responsibly universally permanently exclusively.",
        rationale:
          "Graphing encouraged—not discouraged caricatures universally trimmed:",
      },
      D: {
        text: "Conducting replication responsibly universally permanently exclusively.",
        rationale:
          "Replication encouraged—not discouraged caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 44–46 — methodological vs. radical misunderstanding trainees should avoid",
  ),
  bx(
    "mod04-q39",
    "Conditioned respondent fading when CS repeatedly presents absent US MOST previews:",
    "B",
    {
      A: {
        text: "Operant extinction withholding reinforcement contingent topography historically universally permanently exclusively.",
        rationale:
          "Operant extinction parallels withholding reinforcement—not respondent CS-alone arcs caricatures universally trimmed:",
      },
      B: {
        text: "Respondent extinction analogous repeated CS-alone presentations weakening conditioned respondent responsibly textbook expands later respondent chapters trimmed:",
        rationale:
          "Chapter previews respondent extinction parallels respondent-conditioning scaffolding responsibly trimmed:",
      },
      C: {
        text: "Positive punishment suppressing respondents phylogenetically universally permanently exclusively.",
        rationale:
          "Punishment contrasts—not duplicates—respondent extinction caricatures universally trimmed:",
      },
      D: {
        text: "Motivating operations abolishing respondents phylogenetically universally permanently exclusively.",
        rationale:
          "MO arcs distinct—not respondent extinction caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 47–48 — respondent extinction preview (distinct from operant extinction)",
  ),
  bx(
    "mod04-q40",
    "Neutral stimulus predicting shock onset producing conditioned emotional arousal MOST exemplifies:",
    "C",
    {
      A: {
        text: "Positive reinforcement strengthening avoidance keystrokes historically universally permanently exclusively.",
        rationale:
          "Emotional respondent vignettes emphasize respondent pairing—not PR caricatures universally trimmed:",
      },
      B: {
        text: "Negative punishment removing reinforcers contingent tantrums historically universally permanently exclusively.",
        rationale:
          "Negative punishment arcs distinct—not respondent conditioning caricatures universally trimmed:",
      },
      C: {
        text: "Respondent conditioning translating predictive stimulus relations into conditioned physiological/emotional respondents responsibly ethically condensed vignettes trimmed:",
        rationale:
          "Chapter previews respondent conditioning foundations underpinning conditioned emotional relations responsibly trimmed:",
      },
      D: {
        text: "Automatic reinforcement sensory isolation socially mediated universally permanently exclusively.",
        rationale:
          "Automatic reinforcement vignettes orthogonal respondent pairing caricatures universally trimmed:",
      },
    },
    "CHH Chapter 2, pp. 47–48 — conditioned emotional respondent relations",
  ),
  bx(
    "mod04-q41",
    "Finger withdrawal withdrawn reflexively touching hot skillet BEFORE respondent-conditioning episodes MOST:",
    "D",
    {
      A: {
        text: "Demonstrates conditioned respondent owing pairing histories universally permanently exclusively.",
        rationale:
          "Conditioned respondents demand pairing—not innate reflex arcs caricatures universally trimmed:",
      },
      B: {
        text: "Demonstrates positive reinforcement strengthening withdrawals historically universally permanently exclusively.",
        rationale:
          "Reflex arcs emphasize respondents—not consequence reinforcement caricatures universally trimmed:",
      },
      C: {
        text: "Demonstrates negative punishment removing reinforcers contingent withdrawals historically universally permanently exclusively.",
        rationale:
          "Punishment arcs distinct—not respondent reflex caricatures universally trimmed:",
      },
      D: {
        text: "Demonstrates phylogenic respondent preparedness interacting painful stimuli histories responsibly trimmed:",
        rationale:
          "Pain-mediated reflex arcs illustrate phylogenic substrates respondent introductions responsibly trimmed:",
      },
    },
    "CHH Chapter 2, pp. 47–48 — unconditioned (phylogenic) respondent relations",
  ),
  bx(
    "mod04-q42",
    "A candidate insists supervisors must accept their theory because a famous clinician endorsed it—not because independent labs replicated results. Chapter 2 scientific attitudes highlight the lapse as weakest on:",
    "B",
    {
      A: {
        text: "Determinism — searching for lawful relations.",
        rationale:
          "Determinism encourages causal inquiry—not blind appeal to prestige (CHH Ch. 2 scientific attitudes framing). Aligns with TCO Domain A study of scientific foundations.",
      },
      B: {
        text: "Empiricism and replication expectations — knowledge anchored in systematic observation/independent repetition undermines authority-only appeals.",
        rationale:
          "CHH contrasts scientific footing with folklore; empiricism + replication skepticism rejects replacing evidence with influencer endorsements.",
      },
      C: {
        text: "Selectionism exclusively—denying variation.",
        rationale:
          "Selectionism concerns consequence-driven retention—not whether claims rest on charismatic testimony alone.",
      },
      D: {
        text: "Respondent extinction exclusively.",
        rationale:
          "Respondent extinction is a respondent process—not the attitude fault described.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — scientific attitudes / empiricism, replication",
  ),
  bx(
    "mod04-q43",
    "Clinical director explains challenging behavior citing “immutable defiance circulating in the bloodstream” without observable environmental histories. Chapter 2 labels this pattern MOST accurately as:",
    "D",
    {
      A: {
        text: "Radical behaviorism treating private physiology as behaving.",
        rationale:
          "Radical behaviorism analyzes verifiable behaving—not unexplained bloodstream agents caricatures trimmed.",
      },
      B: {
        text: "Methodological behaviorism insisting on public observation.",
        rationale:
          "Methodological hesitation differs from mystical interior agents—still cites observable anchors.",
      },
      C: {
        text: "Selectionism emphasizing ontogenic reinforcement.",
        rationale:
          "Selectionism cites consequences—not mysterious circuits bypassing histories.",
      },
      D: {
        text: "Mentalistic accounts substituting unexplained agents/constructs instead of observable environmental histories.",
        rationale:
          "CHH Chapter 2 distinguishes mentalisms from analytic accounts tethered to measurement-friendly relations.",
      },
    },
    "CHH Chapter 2, pp. 43–44 — behavior as interaction vs mentalisms",
  ),
  bx(
    "mod04-q44",
    "Bell preceding snack eventually elicits mouth-watering absent food; puff-to-eye blink remains unchanged phylogenically. The mouth-watering to bell MOST exemplifies:",
    "C",
    {
      A: {
        text: "Operant punishment suppressing saliva.",
        rationale:
          "Punishment concerns consequence suppression—not appetitive respondent conditioning caricatures trimmed.",
      },
      B: {
        text: "Rule-governed compliance only.",
        rationale:
          "Instructional histories differ from automatic respondent conditioning caricatures trimmed.",
      },
      C: {
        text: "Respondent/classical conditioning—CS comes to evoke respondent component formerly tied to biologically potent stimulus.",
        rationale:
          "CHH respondent conditioning overview shows neutral stimuli forecasting US onset acquire eliciting power.",
      },
      D: {
        text: "Automatic reinforcement devoid of histories.",
        rationale:
          "Automatic reinforcement concerns consequences without mediated social stimuli—not respondent pairing caricatures trimmed.",
      },
    },
    "CHH Chapter 2, pp. 47–48 — respondent/classical conditioning",
  ),
  bx(
    "mod04-q45",
    "BCBA cites two elaborate trait theories predicting identical classroom aggression data equally well yet refuses simpler reinforcement account. Supervisor invokes Chapter 2 attitude MOST directly:",
    "A",
    {
      A: {
        text: "Parsimony—prefer simplest sufficient explanatory account aligning with lawful environmental accounts.",
        rationale:
          "Parsimony trims unnecessary explanatory machinery when simpler histories suffice (CHH scientific attitudes overview). Maps to sixth-ed Domain A rehearsals.",
      },
      B: {
        text: "Philosophic doubt forbidding explanations.",
        rationale:
          "Philosophic doubt encourages humility—not prohibition of all explanation caricatures trimmed.",
      },
      C: {
        text: "Replication denying measurement.",
        rationale:
          "Replication encourages verification—not measurement bans caricatures trimmed.",
      },
      D: {
        text: "Determinism claiming random behavior.",
        rationale:
          "Determinism assumes lawfulness—not caprice caricatures trimmed.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — parsimony among scientific attitudes",
  ),
  bx(
    "mod04-q46",
    "Poster states SD “means whatever happens before tantrums.” Chapter 2 + later contingency logic imply SD differs because it:",
    "B",
    {
      A: {
        text: "Elicits blinks phylogenically absent conditioning.",
        rationale:
          "Phylogenic elicitation characterizes respondent US relations—not discriminative stimuli caricatures trimmed.",
      },
      B: {
        text: "Historically occasions reinforcement for specified operant responses—signals availability of payoff for THAT class.",
        rationale:
          "CHH mnemonic SD–R–Sr ties discriminative stimuli to histories of reinforcement (preview before deeper contingency chapters).",
      },
      C: {
        text: "Guarantees punishment delivery.",
        rationale:
          "SD signals reinforcement availability—not automatic punishment caricatures trimmed.",
      },
      D: {
        text: "Replaces respondent CS entirely.",
        rationale:
          "SD belongs to operant analytic vocabulary—distinct respondent CS roles caricatures trimmed.",
      },
    },
    "CHH Chapter 2, pp. 49–53 — SD–R–Sr preview versus generic antecedents",
  ),
  bx(
    "mod04-q47",
    "District pairs PBIS raffle + mindfulness audio simultaneously—office referrals dip but no contrasts isolate ingredient. Practitioner claims causal proof citing correlation. Chapter attitude MOST violated:",
    "D",
    {
      A: {
        text: "Selectionism forbidding reinforcement.",
        rationale:
          "Selectionism concerns differential retention—not ignoring experimental contrast caricatures trimmed.",
      },
      B: {
        text: "Empiricism forbidding stakeholder opinions.",
        rationale:
          "Empiricism values measurement—not forbidding stakeholder input caricatures trimmed.",
      },
      C: {
        text: "Technological mandates.",
        rationale:
          "Technology concerns reproducible procedural detail—not causal attribution caricatures trimmed.",
      },
      D: {
        text: "Experimentation / analytic skepticism demanding arranged comparisons—not correlation-as-proof alone.",
        rationale:
          "CHH underscores arranging manipulations illuminating causes; correlation absent isolation misrepresents causal rigor.",
      },
    },
    "CHH Chapter 2, pp. 43–46 — experimentation as scientific attitude",
  ),
  bx(
    "mod04-q48",
    "Trainee asserts radical behaviorism demands ignoring caregivers’ fearful vocal reports because physiology blocks science. MOST accurate textbook correction:",
    "C",
    {
      A: {
        text: "Dismiss verbal reports indefinitely as folklore automatically.",
        rationale:
          "Radical stance analyzes verbal fears as behaving—not blanket dismissal caricatures trimmed.",
      },
      B: {
        text: "Require MRI before recording anxiety statements.",
        rationale:
          "Measurement sophistication varies—not mandatory neuroimaging caricatures trimmed.",
      },
      C: {
        text: "Analyze verbal apprehension statements as behaving under histories while still insisting operational measurement where feasible.",
        rationale:
          "CHH contrasts radical privacy analysis with methodological exclusion caricatures emphasizing measurable behaving streams.",
      },
      D: {
        text: "Replace measurement with anecdotes exclusively.",
        rationale:
          "Empirical discipline still insists on disciplined observation—not anecdote caricatures trimmed.",
      },
    },
    "CHH Chapter 2, pp. 44–46 — radical vs methodological contrasts",
  ),
  bx(
    "mod04-q49",
    "Behavior analyst publishes webinar promising “immediate brain rewiring extinction across all diagnoses” referencing Chapter 2 language loosely. Aside from overstated neuroscience, MOST aligned professional failure pairs Chapter 2 with:",
    "D",
    {
      A: {
        text: "Generality mandates only.",
        rationale:
          "Generality concerns breadth across contexts—not advertising integrity caricatures trimmed.",
      },
      B: {
        text: "Phylogenic reflex denial.",
        rationale:
          "Phylogenic relations orthogonal misrepresentation caricatures trimmed.",
      },
      C: {
        text: "Respondent extinction alone.",
        rationale:
          "Respondent extinction not central advertising ethics caricatures trimmed.",
      },
      D: {
        text: "Ethics (TCO Domain E) misrepresentation/feasibility—truthful depiction of analytic limits and individualized outcomes.",
        rationale:
          "CHH fosters humility; BACB Ethics Code governs truthful marketing—integrated exam prep merges philosophy with Domain E rehearsals.",
      },
    },
    "CHH Chapter 2, pp. 43–60 — integrate conceptual humility with ethics",
  ),
  bx(
    "mod04-q50",
    "Field supervisor quizzes intern: blink to air puff before learning histories vs increased hand-raising following teacher smiles contingent on raises. MOST diagnostic question:",
    "A",
    {
      A: {
        text: "Was topography reflexively evoked by antecedent stimuli independent of reinforcing consequences—or strengthened because consequences selectively followed occurrences?",
        rationale:
          "CHH contrasts respondent elicitation with operant selection by contingency contact—exam hinge distinguishing classes.",
      },
      B: {
        text: "Did behavior involve skeletal muscle only?",
        rationale:
          "Topography inadequate discriminator—respondent vs operant hinges controlling relations caricatures trimmed.",
      },
      C: {
        text: "Did participants verbally describe contingencies?",
        rationale:
          "Verbal mediation awareness orthogonal classification caricatures trimmed.",
      },
      D: {
        text: "Did punishment exceed reinforcement magnitude?",
        rationale:
          "Relative magnitude not decisive respondent vs operant hinge caricatures trimmed.",
      },
    },
    "CHH Chapter 2, pp. 47–53 — respondent vs operant diagnostic question",
  ),
];
