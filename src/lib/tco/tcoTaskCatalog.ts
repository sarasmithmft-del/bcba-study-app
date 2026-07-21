/**
 * BACB BCBA Test Content Outline (6th ed.) — 104 tasks across domains A–I.
 * Source: Behavior Analyst Certification Board (2022/updated 2024).
 * Codes use study-app hyphen form (A-1); BACB publishes A.1.
 * Not affiliated with BACB — verify against the current published TCO.
 */

export type TcoDomain = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";

export type TcoTask = {
  code: string;
  domain: TcoDomain;
  title: string;
  /** Lowercase phrases scored against stem + option text for auto-tagging */
  keywords: string[];
};

/** Fallback when keyword score is zero within a domain (study approximation). */
export const TCO_DOMAIN_DEFAULT_CODE: Record<TcoDomain, string> = {
  A: "A-2",
  B: "B-4",
  C: "C-3",
  D: "D-7",
  E: "E-1",
  F: "F-6",
  G: "G-2",
  H: "H-2",
  I: "I-5",
};

export const TCO_TASKS: readonly TcoTask[] = [
  // A — Behaviorism and Philosophical Foundations (5)
  {
    code: "A-1",
    domain: "A",
    title: "Goals of behavior analysis as a science (description, prediction, control)",
    keywords: ["description", "prediction", "control", "goals of science", "scientific goals"],
  },
  {
    code: "A-2",
    domain: "A",
    title: "Philosophical assumptions (selectionism, determinism, empiricism, parsimony, pragmatism)",
    keywords: [
      "determinism",
      "empiricism",
      "parsimony",
      "pragmatism",
      "selectionism",
      "philosophical assumption",
      "philosophical assumptions",
    ],
  },
  {
    code: "A-3",
    domain: "A",
    title: "Radical behaviorism",
    keywords: ["radical behaviorism", "private events", "skinner", "radical behaviorist"],
  },
  {
    code: "A-4",
    domain: "A",
    title: "Distinguish behaviorism, EAB, ABA, and professional practice",
    keywords: [
      "experimental analysis",
      "eab",
      "professional practice",
      "applied behavior analysis vs",
      "distinguish among behaviorism",
    ],
  },
  {
    code: "A-5",
    domain: "A",
    title: "Dimensions of applied behavior analysis",
    keywords: [
      "seven dimensions",
      "baer wolf",
      "applied",
      "behavioral",
      "analytic",
      "technological",
      "conceptually systematic",
      "effective",
      "generality",
      "dimensions of aba",
    ],
  },

  // B — Concepts and Principles (24)
  {
    code: "B-1",
    domain: "B",
    title: "Behavior, response, and response class",
    keywords: ["response class", "topography", "response vs", "define behavior"],
  },
  {
    code: "B-2",
    domain: "B",
    title: "Stimulus and stimulus class",
    keywords: ["stimulus class", "stimulus vs", "antecedent stimulus"],
  },
  {
    code: "B-3",
    domain: "B",
    title: "Respondent and operant conditioning",
    keywords: [
      "respondent",
      "operant conditioning",
      "classical conditioning",
      "pavlov",
      "elicited",
      "emitted",
    ],
  },
  {
    code: "B-4",
    domain: "B",
    title: "Positive and negative reinforcement",
    keywords: [
      "positive reinforcement",
      "negative reinforcement",
      "reinforcement contingency",
      "escape",
      "avoidance",
      "sr+",
      "sr-",
    ],
  },
  {
    code: "B-5",
    domain: "B",
    title: "Positive and negative punishment",
    keywords: [
      "positive punishment",
      "negative punishment",
      "punishment contingency",
      "sp+",
      "sp-",
    ],
  },
  {
    code: "B-6",
    domain: "B",
    title: "Automatic and socially mediated contingencies",
    keywords: ["automatic reinforcement", "socially mediated", "automatic contingency", "sensory"],
  },
  {
    code: "B-7",
    domain: "B",
    title: "Unconditioned, conditioned, and generalized reinforcers",
    keywords: [
      "unconditioned reinforcer",
      "conditioned reinforcer",
      "generalized reinforcer",
      "primary reinforcer",
      "secondary reinforcer",
    ],
  },
  {
    code: "B-8",
    domain: "B",
    title: "Unconditioned, conditioned, and generalized punishers",
    keywords: ["unconditioned punisher", "conditioned punisher", "generalized punisher"],
  },
  {
    code: "B-9",
    domain: "B",
    title: "Simple schedules of reinforcement",
    keywords: [
      "fixed ratio",
      "variable ratio",
      "fixed interval",
      "variable interval",
      "fr ",
      "vr ",
      "fi ",
      "vi ",
      "simple schedule",
      "schedule of reinforcement",
    ],
  },
  {
    code: "B-10",
    domain: "B",
    title: "Concurrent, multiple, mixed, and chained schedules",
    keywords: [
      "concurrent schedule",
      "multiple schedule",
      "mixed schedule",
      "chained schedule",
      "compound schedule",
    ],
  },
  {
    code: "B-11",
    domain: "B",
    title: "Operant and respondent extinction",
    keywords: ["operant extinction", "respondent extinction", "extinction as operation", "extinction burst"],
  },
  {
    code: "B-12",
    domain: "B",
    title: "Stimulus control",
    keywords: ["stimulus control", "sd ", "s-delta", "discriminative stimulus"],
  },
  {
    code: "B-13",
    domain: "B",
    title: "Stimulus discrimination",
    keywords: ["stimulus discrimination", "discrimination training", "discriminate"],
  },
  {
    code: "B-14",
    domain: "B",
    title: "Stimulus and response generalization",
    keywords: ["stimulus generalization", "response generalization", "generalization gradient"],
  },
  {
    code: "B-15",
    domain: "B",
    title: "Response maintenance",
    keywords: ["response maintenance", "maintenance of", "maintain behavior"],
  },
  {
    code: "B-16",
    domain: "B",
    title: "Motivating operations",
    keywords: [
      "motivating operation",
      "establishing operation",
      "abolishing operation",
      "eo ",
      "ao ",
      "value-altering",
      "behavior-altering",
    ],
  },
  {
    code: "B-17",
    domain: "B",
    title: "Motivating operations vs stimulus control",
    keywords: ["mo vs", "motivating operation versus", "mo and sd", "distinguish between motivating"],
  },
  {
    code: "B-18",
    domain: "B",
    title: "Rule-governed and contingency-shaped behavior",
    keywords: ["rule-governed", "contingency-shaped", "rule governed", "instructions as rules"],
  },
  {
    code: "B-19",
    domain: "B",
    title: "Verbal operants",
    keywords: ["mand", "tact", "intraverbal", "echoic", "textual", "transcription", "verbal operant"],
  },
  {
    code: "B-20",
    domain: "B",
    title: "Multiple control in verbal behavior",
    keywords: ["multiple control", "convergent control", "divergent control", "impure tact"],
  },
  {
    code: "B-21",
    domain: "B",
    title: "Emergent relations and generative performance",
    keywords: [
      "emergent relation",
      "stimulus equivalence",
      "relational frame",
      "derived relation",
      "generative",
      "combinatorial entailment",
      "mutual entailment",
    ],
  },
  {
    code: "B-22",
    domain: "B",
    title: "Behavioral momentum",
    keywords: ["behavioral momentum", "response persistence", "high-p", "high probability"],
  },
  {
    code: "B-23",
    domain: "B",
    title: "Matching law",
    keywords: ["matching law", "response allocation", "relative rate of reinforcement"],
  },
  {
    code: "B-24",
    domain: "B",
    title: "Imitation and observational learning",
    keywords: ["imitation", "observational learning", "model", "generalized imitation"],
  },

  // C — Measurement, Data Display, and Interpretation (12)
  {
    code: "C-1",
    domain: "C",
    title: "Operational definitions of behavior",
    keywords: ["operational definition", "objective definition", "measurable definition"],
  },
  {
    code: "C-2",
    domain: "C",
    title: "Direct, indirect, and product measures",
    keywords: ["direct measure", "indirect measure", "permanent product", "product measure"],
  },
  {
    code: "C-3",
    domain: "C",
    title: "Measure occurrence",
    keywords: ["count", "frequency", "rate", "celeration", "occurrence"],
  },
  {
    code: "C-4",
    domain: "C",
    title: "Temporal dimensions (duration, latency, IRT)",
    keywords: ["duration", "latency", "interresponse time", "irt", "temporal dimension"],
  },
  {
    code: "C-5",
    domain: "C",
    title: "Continuous vs discontinuous measurement",
    keywords: ["continuous measurement", "discontinuous measurement", "event recording"],
  },
  {
    code: "C-6",
    domain: "C",
    title: "Discontinuous measurement (interval, time sampling)",
    keywords: [
      "partial interval",
      "whole interval",
      "momentary time sampling",
      "time sampling",
      "interval recording",
    ],
  },
  {
    code: "C-7",
    domain: "C",
    title: "Measure efficiency (trials to criterion, cost-benefit)",
    keywords: ["trials to criterion", "cost-benefit", "efficiency", "training duration"],
  },
  {
    code: "C-8",
    domain: "C",
    title: "Validity and reliability of measurement",
    keywords: ["interobserver agreement", "ioa", "validity", "reliability", "accuracy of measurement"],
  },
  {
    code: "C-9",
    domain: "C",
    title: "Select measurement for representative data",
    keywords: ["select a measurement", "representative data", "measurement procedure", "environmental constraints"],
  },
  {
    code: "C-10",
    domain: "C",
    title: "Graph data (equal-interval, bar, cumulative)",
    keywords: [
      "equal-interval",
      "cumulative record",
      "bar graph",
      "line graph",
      "standard celeration",
      "scc",
      "graph data",
    ],
  },
  {
    code: "C-11",
    domain: "C",
    title: "Interpret graphed data",
    keywords: ["level", "trend", "variability", "interpret graph", "visual analysis", "graphed data"],
  },
  {
    code: "C-12",
    domain: "C",
    title: "Procedural integrity measurement",
    keywords: ["procedural integrity", "treatment integrity", "fidelity", "dosage"],
  },

  // D — Experimental Design (9)
  {
    code: "D-1",
    domain: "D",
    title: "Dependent and independent variables",
    keywords: ["dependent variable", "independent variable", "dv ", "iv "],
  },
  {
    code: "D-2",
    domain: "D",
    title: "Internal and external validity",
    keywords: ["internal validity", "external validity"],
  },
  {
    code: "D-3",
    domain: "D",
    title: "Threats to internal validity",
    keywords: ["history", "maturation", "threat to internal", "confound", "testing threat"],
  },
  {
    code: "D-4",
    domain: "D",
    title: "Defining features of single-case designs",
    keywords: [
      "own control",
      "repeated measures",
      "prediction",
      "verification",
      "replication",
      "single-case",
      "single subject",
    ],
  },
  {
    code: "D-5",
    domain: "D",
    title: "Single-case vs group designs",
    keywords: ["group design", "between-group", "single-case experimental", "relative strengths"],
  },
  {
    code: "D-6",
    domain: "D",
    title: "Critique and interpret single-case data",
    keywords: ["critique", "interpret data from", "visual inspection", "experimental control demonstrated"],
  },
  {
    code: "D-7",
    domain: "D",
    title: "Reversal, multiple-baseline, multielement, changing-criterion",
    keywords: [
      "reversal",
      "withdrawal",
      "abab",
      "multiple baseline",
      "multielement",
      "alternating treatments",
      "changing criterion",
      "changing-criterion",
    ],
  },
  {
    code: "D-8",
    domain: "D",
    title: "Comparative, component, and parametric analyses",
    keywords: ["comparative analysis", "component analysis", "parametric analysis"],
  },
  {
    code: "D-9",
    domain: "D",
    title: "Apply single-case experimental designs",
    keywords: ["apply single-case", "select a design", "design selection", "which design"],
  },

  // E — Ethical and Professional Issues (12)
  {
    code: "E-1",
    domain: "E",
    title: "Core ethics principles",
    keywords: [
      "benefit others",
      "compassion",
      "dignity",
      "integrity",
      "core principle",
      "ethics code principle",
    ],
  },
  {
    code: "E-2",
    domain: "E",
    title: "Risks of unethical behavior",
    keywords: ["unethical", "risks to", "harm to the profession", "ethical risk"],
  },
  {
    code: "E-3",
    domain: "E",
    title: "Maintain competence / professional development",
    keywords: ["professional development", "competence", "continuing education", "mentor", "consultation"],
  },
  {
    code: "E-4",
    domain: "E",
    title: "Confidentiality",
    keywords: ["confidential", "hipaa", "disclose", "protecting information", "privacy"],
  },
  {
    code: "E-5",
    domain: "E",
    title: "Public statements / credentials / social media",
    keywords: [
      "public statement",
      "social media",
      "misrepresentation",
      "credentials",
      "advertising",
      "testimonial",
    ],
  },
  {
    code: "E-6",
    domain: "E",
    title: "Discontinuation and transition of services",
    keywords: ["discontinue", "transition", "termination of services", "transfer of services"],
  },
  {
    code: "E-7",
    domain: "E",
    title: "Multiple relationships",
    keywords: ["multiple relationship", "dual relationship", "conflict of interest"],
  },
  {
    code: "E-8",
    domain: "E",
    title: "Interpersonal / professional relationship skills",
    keywords: ["accepting feedback", "active listening", "collaborating", "professional relationship"],
  },
  {
    code: "E-9",
    domain: "E",
    title: "Cultural humility",
    keywords: ["cultural humility", "cultural competence"],
  },
  {
    code: "E-10",
    domain: "E",
    title: "Culturally responsive and inclusive services",
    keywords: ["culturally responsive", "inclusive service", "cultural variables in service"],
  },
  {
    code: "E-11",
    domain: "E",
    title: "Personal biases",
    keywords: ["personal bias", "biases", "interfere with professional"],
  },
  {
    code: "E-12",
    domain: "E",
    title: "Legal, regulatory, and practice requirements",
    keywords: ["licensure", "jurisprudence", "funding", "certification", "regulatory", "scope of practice"],
  },

  // F — Behavior Assessment (8)
  {
    code: "F-1",
    domain: "F",
    title: "Records review at outset",
    keywords: ["records review", "medical history", "educational records", "historical records", "outset of the case"],
  },
  {
    code: "F-2",
    domain: "F",
    title: "Cultural variables in assessment",
    keywords: ["cultural variables", "cultural factors in assessment", "assessment process"],
  },
  {
    code: "F-3",
    domain: "F",
    title: "Skill strengths and areas of need",
    keywords: [
      "skill assessment",
      "vb-mapp",
      "ablls",
      "afls",
      "peak",
      "vineland",
      "strengths and",
      "curriculum assessment",
    ],
  },
  {
    code: "F-4",
    domain: "F",
    title: "Preference assessments",
    keywords: [
      "preference assessment",
      "mswo",
      "paired stimulus",
      "free operant preference",
      "reinforcer assessment",
    ],
  },
  {
    code: "F-5",
    domain: "F",
    title: "Descriptive assessments",
    keywords: ["descriptive assessment", "abc data", "scatterplot", "narrative recording", "direct observation"],
  },
  {
    code: "F-6",
    domain: "F",
    title: "Functional analyses",
    keywords: [
      "functional analysis",
      "iwata",
      "iisca",
      "trial-based fa",
      "brief fa",
      "latency fa",
      "analog fa",
      "test condition",
    ],
  },
  {
    code: "F-7",
    domain: "F",
    title: "Need for services and/or referral",
    keywords: ["need for services", "referral", "interpret assessment data to determine"],
  },
  {
    code: "F-8",
    domain: "F",
    title: "Prioritize socially significant goals",
    keywords: [
      "socially significant",
      "prioritize",
      "client-informed",
      "goal selection",
      "behavior-change goals",
    ],
  },

  // G — Behavior-Change Procedures (19)
  {
    code: "G-1",
    domain: "G",
    title: "Positive and negative reinforcement procedures",
    keywords: ["reinforcement procedure", "design.*reinforcement", "negative reinforcement procedure"],
  },
  {
    code: "G-2",
    domain: "G",
    title: "Differential reinforcement (DRA, DRO, DRL, DRH)",
    keywords: ["dra", "dro", "drl", "drh", "differential reinforcement", "alt-r", "ncr vs dro"],
  },
  {
    code: "G-3",
    domain: "G",
    title: "Time-based reinforcement (NCR / fixed time)",
    keywords: ["noncontingent reinforcement", "fixed time", "variable time", "ncr", "time-based"],
  },
  {
    code: "G-4",
    domain: "G",
    title: "Conditioned reinforcers / token economies",
    keywords: ["token economy", "token", "backup reinforcer", "conditioned reinforcer"],
  },
  {
    code: "G-5",
    domain: "G",
    title: "Incorporate MOs and SDs into procedures",
    keywords: ["antecedent intervention", "incorporate motivating", "discriminative stimuli into"],
  },
  {
    code: "G-6",
    domain: "G",
    title: "Simple and conditional discriminations",
    keywords: ["conditional discrimination", "simple discrimination", "match-to-sample", "mts"],
  },
  {
    code: "G-7",
    domain: "G",
    title: "Prompting procedures",
    keywords: [
      "most-to-least",
      "least-to-most",
      "errorless",
      "prompt hierarchy",
      "response prompt",
      "stimulus prompt",
    ],
  },
  {
    code: "G-8",
    domain: "G",
    title: "Prompt fading",
    keywords: ["prompt delay", "stimulus fading", "fade prompt", "prompt fading"],
  },
  {
    code: "G-9",
    domain: "G",
    title: "Modeling procedures",
    keywords: ["modeling procedure", "video model", "live model"],
  },
  {
    code: "G-10",
    domain: "G",
    title: "Instructions and rules",
    keywords: ["instruction", "rule-governed procedure", "rules as intervention"],
  },
  {
    code: "G-11",
    domain: "G",
    title: "Shaping",
    keywords: ["shaping", "successive approximation", "shape dimensions"],
  },
  {
    code: "G-12",
    domain: "G",
    title: "Chaining",
    keywords: [
      "forward chain",
      "backward chain",
      "total task",
      "task analysis",
      "chaining",
      "behavior chain",
    ],
  },
  {
    code: "G-13",
    domain: "G",
    title: "Trial-based and free-operant procedures",
    keywords: ["discrete trial", "dtt", "free operant", "trial-based"],
  },
  {
    code: "G-14",
    domain: "G",
    title: "Group contingencies",
    keywords: ["group contingency", "independent group", "dependent group", "interdependent", "good behavior game"],
  },
  {
    code: "G-15",
    domain: "G",
    title: "Promote generalization",
    keywords: [
      "promote generalization",
      "generalization programming",
      "multiple exemplar",
      "loose training",
      "general case",
    ],
  },
  {
    code: "G-16",
    domain: "G",
    title: "Maintenance / schedule thinning",
    keywords: ["schedule thinning", "naturally occurring reinforcer", "maintain desired", "thin the schedule"],
  },
  {
    code: "G-17",
    domain: "G",
    title: "Punishment procedures",
    keywords: ["time-out", "response cost", "overcorrection", "punishment procedure", "contingent effort"],
  },
  {
    code: "G-18",
    domain: "G",
    title: "Emotional and elicited effects of procedures",
    keywords: ["emotional effect", "elicited", "side effect", "aggression as side"],
  },
  {
    code: "G-19",
    domain: "G",
    title: "Emergent relations / generative performance procedures",
    keywords: ["promote emergent", "equivalence-based instruction", "generative performance", "matrix training"],
  },

  // H — Selecting and Implementing Interventions (8)
  {
    code: "H-1",
    domain: "H",
    title: "Observable and measurable goals",
    keywords: ["intervention goal", "observable and measurable", "goal in measurable"],
  },
  {
    code: "H-2",
    domain: "H",
    title: "Recommend interventions from assessment + evidence + fit",
    keywords: [
      "recommend intervention",
      "contextual fit",
      "scientific evidence",
      "client preference",
      "select intervention",
    ],
  },
  {
    code: "H-3",
    domain: "H",
    title: "Socially valid alternative behavior",
    keywords: ["alternative behavior", "replacement behavior", "socially valid alternative"],
  },
  {
    code: "H-4",
    domain: "H",
    title: "Mitigate unwanted effects of reinforcement, extinction, punishment",
    keywords: ["unwanted effect", "side effect", "mitigate", "extinction burst", "resurgence risk"],
  },
  {
    code: "H-5",
    domain: "H",
    title: "Mitigate relapse of target behavior",
    keywords: ["relapse", "resurgence", "renewal", "reinstatement"],
  },
  {
    code: "H-6",
    domain: "H",
    title: "Data-based decisions about procedural integrity",
    keywords: ["procedural integrity decision", "integrity data", "fidelity decision"],
  },
  {
    code: "H-7",
    domain: "H",
    title: "Data-based decisions about intervention effectiveness",
    keywords: [
      "effectiveness of the intervention",
      "need for modification",
      "data-based decision",
      "modify the intervention",
    ],
  },
  {
    code: "H-8",
    domain: "H",
    title: "Collaborate to support client services",
    keywords: ["collaborate", "interdisciplinary", "team meeting", "caregiver collaboration"],
  },

  // I — Personnel Supervision and Management (7)
  {
    code: "I-1",
    domain: "I",
    title: "Benefits of behavior-analytic supervision",
    keywords: ["benefits of supervision", "staff retention", "improved client outcomes", "supervision benefit"],
  },
  {
    code: "I-2",
    domain: "I",
    title: "Effective supervisory relationships",
    keywords: [
      "supervisory relationship",
      "supervisee contract",
      "clear expectations",
      "giving feedback",
      "accepting feedback",
    ],
  },
  {
    code: "I-3",
    domain: "I",
    title: "Equity in supervision",
    keywords: ["equity in supervision", "equitable supervision", "promote equity"],
  },
  {
    code: "I-4",
    domain: "I",
    title: "Supervision goals from assessment of supervisee",
    keywords: ["supervision goal", "supervisee's skills", "assess supervisee"],
  },
  {
    code: "I-5",
    domain: "I",
    title: "Performance management procedures",
    keywords: [
      "performance management",
      "task clarification",
      "bst",
      "behavioral skills training",
      "staff training",
      "feedback",
      "modeling",
    ],
  },
  {
    code: "I-6",
    domain: "I",
    title: "Function-based approach / performance diagnostics",
    keywords: ["performance diagnostic", "pdc", "function-based approach to", "supervisee behavior"],
  },
  {
    code: "I-7",
    domain: "I",
    title: "Data-based decisions about supervisory practices",
    keywords: ["efficacy of supervisory", "supervisory practices", "supervision data"],
  },
];

export const TCO_TASK_BY_CODE: Record<string, TcoTask> = Object.fromEntries(
  TCO_TASKS.map((task) => [task.code, task]),
);

export function tcoTasksForDomain(domain: TcoDomain): TcoTask[] {
  return TCO_TASKS.filter((task) => task.domain === domain);
}

export function formatTcoCodeLabel(code: string): string {
  const task = TCO_TASK_BY_CODE[code];
  return task ? `${task.code} · ${task.title}` : code;
}
