import type { BDSQuestion } from "@/lib/content-types";

/** BACB Ethics Code navigator — section-by-section mapping + common violations. */

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
    tcoDomain: "E",
    options: letters.map((L) => ({
      key: L,
      text: bundle[L].text,
      correct: L === correctLetter,
      rationale: bundle[L].rationale,
    })),
  };
}

export const CHAPTER_37_ETHICS_CODE_NAVIGATOR_QUIZ_BANK: BDSQuestion[] = [
  bx("mod42-q1", "The BACB Ethics Code for Behavior Analysts (current edition) is organized into approximately how many top-level sections?", "B", {
    A: { text: "One monolithic section.", rationale: "It is organized into multiple sections.", },
    B: { text: "Six top-level sections (approximately): Responsibility as a Professional, Responsibility in Practice, Responsibility to Clients & Stakeholders, Responsibility to Supervisees & Trainees, Responsibility in Public Statements, and Responsibility in Research — verify current wording at bacb.com.", rationale: "Correct — six top-level sections in the current Ethics Code for Behavior Analysts. Verify exact current wording.", },
    C: { text: "Twelve sections.", rationale: "Overstates section count.", },
    D: { text: "No sections — one flat list.", rationale: "It is structured.", },
  }),
  bx("mod42-q2", "A supervisor accepts more supervisees than they can effectively supervise. Which section of the Ethics Code is MOST directly implicated?", "D", {
    A: { text: "Section 1 · Responsibility as a Professional only.", rationale: "Cross-cuts, but supervision-specific section is more direct.", },
    B: { text: "Section 5 · Public Statements.", rationale: "Not the direct fit.", },
    C: { text: "Section 6 · Research.", rationale: "Not the direct fit.", },
    D: { text: "Section 4 · Responsibility to Supervisees & Trainees — accepting more supervisees than can be effectively supervised violates supervisor caseload standards (with cross-references to Section 1 competence + Section 3 client welfare).", rationale: "Correct — Section 4 is the direct fit; violations often cross-reference other sections.", },
  }),
  bx("mod42-q3", "A BCBA implements a treatment package they have never been trained in. Which section is MOST directly implicated?", "A", {
    A: { text: "Section 1 · Responsibility as a Professional — practicing within scope of competence; obtain training + supervision before practicing new methods.", rationale: "Correct — scope of competence sits in Section 1 and is the direct fit.", },
    B: { text: "Section 5 · Public Statements.", rationale: "Not the direct fit.", },
    C: { text: "Section 6 · Research.", rationale: "Not the direct fit.", },
    D: { text: "No section applies.", rationale: "Scope of competence is a core Ethics Code requirement.", },
  }),
  bx("mod42-q4", "A BCBA and their client's parent begin a romantic relationship during active services. Which section is MOST directly implicated?", "C", {
    A: { text: "Section 1 only.", rationale: "Section 3 is more direct.", },
    B: { text: "Section 2 only.", rationale: "Section 3 is more direct.", },
    C: { text: "Section 3 · Responsibility to Clients & Stakeholders — multiple relationships that impair objectivity or create risk of exploitation are prohibited; this scenario is a canonical Section 3 violation.", rationale: "Correct — Section 3 addresses multiple relationships with clients/stakeholders.", },
    D: { text: "Not an Ethics Code issue.", rationale: "This is a clear Ethics Code issue.", },
  }),
  bx("mod42-q5", "A BCBA advertises expertise in a treatment method they do not hold competence in. Which section is MOST directly implicated?", "B", {
    A: { text: "Section 3 only.", rationale: "Section 5 is more direct for public statements.", },
    B: { text: "Section 5 · Responsibility in Public Statements — advertising must be truthful, non-misleading, and reflect actual competence (with cross-reference to Section 1 scope of competence).", rationale: "Correct — public-statement accuracy is Section 5; scope of competence in Section 1 is a cross-reference.", },
    C: { text: "Section 6 · Research.", rationale: "Not the direct fit.", },
    D: { text: "No section applies.", rationale: "Misleading advertising is an Ethics Code violation.", },
  }),
  bx("mod42-q6", "A BCBA conducts research without ethical review or documented informed consent. Which section is MOST directly implicated?", "C", {
    A: { text: "Section 1 only.", rationale: "Section 6 is more direct.", },
    B: { text: "Section 4 only.", rationale: "Section 6 is more direct.", },
    C: { text: "Section 6 · Responsibility in Research — research requires ethical review + informed consent + participant protection + accurate reporting.", rationale: "Correct — Section 6 addresses research responsibilities.", },
    D: { text: "No section applies.", rationale: "Research ethics is core Section 6.", },
  }),
  bx("mod42-q7", "A common ERROR when discussing Ethics Code violations is:", "A", {
    A: { text: "Treating the Code as a checklist to satisfy rather than as ongoing decision-making — ethical practice is continuous judgment, not a one-time compliance check.", rationale: "Correct — the Ethics Code guides ongoing decision-making, not one-time compliance.", },
    B: { text: "Consulting the Code too often.", rationale: "Frequent consultation is good practice.", },
    C: { text: "Cross-referencing multiple sections.", rationale: "Cross-referencing is often required.", },
    D: { text: "Documenting ethical decisions.", rationale: "Documentation is a strength.", },
  }),
  bx("mod42-q8", "A BCBA discovers another practitioner falsifying billing records. Their FIRST professional obligation is:", "B", {
    A: { text: "Ignore it.", rationale: "The Code requires action.", },
    B: { text: "Attempt to resolve informally first when appropriate (e.g., direct conversation), and if unresolved or serious, follow the reporting pathway (organizational, then to BACB and other appropriate bodies) — the Code addresses reporting obligations for violations that jeopardize client welfare or public trust.", rationale: "Correct — the current Code addresses tiered response: informal resolution when appropriate; formal reporting when required.", },
    C: { text: "Publicly shame the practitioner on social media.", rationale: "Public shaming is not the professional pathway.", },
    D: { text: "Retaliate.", rationale: "Retaliation is prohibited.", },
  }),
  bx("mod42-q9", "The BEST resource for looking up the exact current wording of a specific Ethics Code section is:", "C", {
    A: { text: "Older textbook editions.", rationale: "Editions can lag behind current Code updates.", },
    B: { text: "Unofficial internet summaries.", rationale: "Summaries may drift from current wording.", },
    C: { text: "The current BACB Ethics Code PDF at bacb.com/ethics-information — the authoritative and up-to-date source.", rationale: "Correct — the BACB website hosts the authoritative current version.", },
    D: { text: "Colleague memory.", rationale: "Memory can drift from current wording.", },
  }),
  bx("mod42-q10", "A BCBA is asked by a client's insurance company to release records without written authorization from the client's guardian. What is the MOST appropriate response?", "D", {
    A: { text: "Release records immediately.", rationale: "Confidentiality + authorization requirements apply.", },
    B: { text: "Ignore the request.", rationale: "Response is needed even if to decline.", },
    C: { text: "Release verbally only.", rationale: "Verbal release does not satisfy documentation requirements.", },
    D: { text: "Decline until written authorization from the appropriate party is obtained (guardian or client with legal capacity) — confidentiality + authorized-release requirements sit in Section 3 (Responsibility to Clients & Stakeholders) and Section 2 (Responsibility in Practice).", rationale: "Correct — Section 3 confidentiality + authorization requirements apply.", },
  }),
  bx("mod42-q11", "A supervisor terminates supervision of a struggling trainee mid-contract because the trainee filed an ethics complaint against the organization. What is the primary Ethics Code issue?", "B", {
    A: { text: "None — supervisors may terminate at will.", rationale: "Retaliation and irresponsible termination are prohibited.", },
    B: { text: "Retaliation + irresponsible termination of supervision (Sections 1 + 4) — protected complaint activity cannot be grounds for termination; termination must include notice, records transfer, and non-retaliation.", rationale: "Correct — retaliation is prohibited across sections; responsible termination is Section 4.", },
    C: { text: "The trainee should not have filed a complaint.", rationale: "Complaint filing is protected.", },
    D: { text: "The trainee automatically forfeits all accrued hours.", rationale: "Accrued hours documented before termination remain valid.", },
  }),
  bx("mod42-q12", "A BCBA charges for services never delivered. Which section is MOST directly implicated?", "A", {
    A: { text: "Section 2 · Responsibility in Practice — billing integrity is a core Section 2 issue with cross-references to Section 3 (client welfare) and Section 1 (professional responsibility).", rationale: "Correct — billing integrity is Section 2 with cross-referenced impact.", },
    B: { text: "Only Section 5.", rationale: "Section 5 concerns public statements.", },
    C: { text: "Only Section 6.", rationale: "Section 6 is research.", },
    D: { text: "Not an Ethics Code issue.", rationale: "Billing fraud is a clear Ethics Code + legal issue.", },
  }),
  bx("mod42-q13", "A BCBA social-media post identifies a specific client by initials, describes their behavior, and shares a program graph. What is the primary issue?", "C", {
    A: { text: "No issue if identifying info is 'just' initials.", rationale: "Initials + specific description can constitute PHI.", },
    B: { text: "No issue on personal accounts.", rationale: "Public-statement + confidentiality obligations apply regardless of account type.", },
    C: { text: "Confidentiality + Public Statements violation (Sections 3 + 5) — even initials + specific descriptions can identify a client; PHI protections and public-statement obligations apply on social media.", rationale: "Correct — Sections 3 + 5 apply; identifiable client information cannot be shared without authorization.", },
    D: { text: "Only a problem if names are used.", rationale: "Any identifiable info is protected.", },
  }),
  bx("mod42-q14", "The strongest ETHICAL-DECISION framework combines:", "D", {
    A: { text: "Look up the section number and copy it verbatim.", rationale: "Copy-paste is not decision-making.", },
    B: { text: "Ignore the Code and use personal judgment.", rationale: "The Code provides required constraints.", },
    C: { text: "Ask a colleague only.", rationale: "One consultation source is insufficient.", },
    D: { text: "(1) Identify the relevant section(s) — often multiple. (2) Consult current BACB Code + relevant literature. (3) Consult supervisor/colleague when uncertain. (4) Consider client + stakeholder welfare + assent. (5) Document the decision, rationale, and cross-referenced sections. (6) Follow up + reassess as new information emerges.", rationale: "Correct — layered decision-making with documentation is the best-practice framework.", },
  }),
  bx("mod42-q15", "The correct MENTAL MODEL of the Ethics Code is:", "B", {
    A: { text: "A rulebook to memorize verbatim.", rationale: "Understanding + application beats memorization.", },
    B: { text: "A structured guide to ongoing ethical decision-making — organized by responsibility domain (professional / practice / clients / supervisees / public statements / research) — that supports layered judgment rather than checklist compliance.", rationale: "Correct — the Code supports ongoing decision-making, not one-time compliance.", },
    C: { text: "A legal contract only.", rationale: "It is professional ethics, not solely legal.", },
    D: { text: "Optional for behavior analysts.", rationale: "It is required for BCBAs.", },
  }),
];
