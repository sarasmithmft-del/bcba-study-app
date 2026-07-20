import type { BDSQuestion } from "@/lib/content-types";

/** Cooper/Heron/Heward Ch. 31 — Ethical and Professional Responsibilities. */

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

export const CHAPTER_31_ETHICS_QUIZ_BANK: BDSQuestion[] = [
  bx("mod32-q1", "Employer demands deleting IOA rows before insurer review—MOST appropriate BCBA response?", "B", {
    A: {
      text: "Comply quietly to keep the job and hope the audit never notices.",
      rationale: "Job pressure does not authorize falsifying measurement records.",
    },
    B: {
      text: "Refuse falsification; document concerns; seek lawful reporting pathways per ethics code.",
      rationale:
        "IOA deletion is fraudulent reporting—refuse, document, and escalate through lawful pathways (Domain E + C).",
    },
    C: {
      text: "Submit only high-IOA sessions and omit the rest from the insurer packet.",
      rationale: "Selective omission is still dishonest reporting, not a workaround.",
    },
    D: {
      text: "Ask a colleague to alter the file so your name stays off the record.",
      rationale: "Delegating falsification still violates integrity and accountability duties.",
    },
  }),
  bx(
    "mod32-q2",
    "Director orders withholding clinically necessary details from multidisciplinary notes so a PR summary looks cleaner. MOST code-first move?",
    "A",
    {
      A: {
        text: "Refuse unlawful omissions; pursue lawful disclosures and documented supervision aligned with confidentiality rules.",
        rationale:
          "PR optics never trump lawful clinical disclosure—coordinate legal/supervisory guidance; omit only what rules allow (Domain E).",
      },
      B: {
        text: "Comply immediately to placate administrators.",
        rationale: "Unlawful instructions to withhold care-critical information warrant accountable refusal.",
      },
      C: {
        text: "Post a redacted success story publicly without consent.",
        rationale: "Public sharing still requires consent and ethics pathways; it does not fix the disclosure failure.",
      },
      D: {
        text: "Assume marketing staff can waive confidentiality for the care team.",
        rationale: "Confidentiality and disclosure duties persist across departments.",
      },
    },
  ),
  bx(
    "mod32-q3",
    "Dual relationship emerges when BCBA babysits payer's relatives off-hours while billing same agency. MOST immediate duty?",
    "A",
    {
      A: {
        text: "Disclose, document boundary plan, reorganize supervisory lines per ethics code—even if socially awkward.",
        rationale:
          "Boundary management protects objectivity before conflicts compound—disclose and reorganize (Domain E).",
      },
      B: {
        text: "Keep quiet preserving friendships.",
        rationale: "Silence violates transparency duties and lets conflicts deepen.",
      },
      C: {
        text: "Bill family rates secretly.",
        rationale: "Secret billing deepens the conflict of interest.",
      },
      D: {
        text: "Assume informal ties exempt BACB ethics.",
        rationale: "Professional codes persist regardless of informal ties.",
      },
    },
  ),
  bx(
    "mod32-q4",
    "Agency doubles behavior-technician caseload overnight without adding BCBA supervisors, so each supervisor now covers roughly twice as many cases as the last quarter. MOST appropriate BCBA response?",
    "B",
    {
      A: {
        text: "Accept quietly—supervision quality is administrative, not clinical.",
        rationale: "Supervision quality is a clinical ethics issue, not a scheduling detail.",
      },
      B: {
        text: "Refuse the ratio; document the concern; request added supervision or reduced caseload before continuing.",
        rationale:
          "Caseloads that make competent supervision impossible are themselves an ethics problem—refuse, document, and escalate.",
      },
      C: {
        text: "Delegate all supervision decisions to the most senior behavior technician.",
        rationale: "Supervision cannot be delegated to unqualified staff.",
      },
      D: {
        text: "Copy last month's supervision log and rebill unchanged.",
        rationale: "Falsifying supervision records is a code violation on top of the ratio problem.",
      },
    },
  ),
  bx(
    "mod32-q5",
    "A family signed paperwork but cannot explain services, risks, or alternatives in their own words. Informed consent requires:",
    "C",
    {
      A: {
        text: "A signature without further explanation.",
        rationale: "A signature alone is not understandable disclosure.",
      },
      B: {
        text: "Verbal assent from the learner only, always.",
        rationale: "Assent may be needed but does not replace guardian/client informed consent.",
      },
      C: {
        text: "Voluntary authorization after understandable disclosure of services, risks, and alternatives.",
        rationale: "Consent quality hinges on understandable disclosure, not paperwork optics.",
      },
      D: {
        text: "Billing authorization only.",
        rationale: "Clinical consent is broader than payment authorization.",
      },
    },
  ),
  bx(
    "mod32-q6",
    "A BCBA is asked to deliver an intervention outside training with no available supervision. Scope of competence means:",
    "D",
    {
      A: {
        text: "Any service if the client requests it.",
        rationale: "Client request does not expand competence boundaries.",
      },
      B: {
        text: "Whatever the employer assigns that day.",
        rationale: "Employer assignment does not replace professional competence judgment.",
      },
      C: {
        text: "The same thing as informed consent.",
        rationale: "Consent authorizes services; competence limits which services you may deliver.",
      },
      D: {
        text: "Delivering only services supported by training, supervision, and regulatory permissions.",
        rationale: "Decline, refer, or obtain supervision before practicing outside competence.",
      },
    },
  ),
  bx(
    "mod32-q7",
    "A BCBA socializes off-hours with a client's caregiver while also supervising that case. Dual relationships are best described as:",
    "B",
    {
      A: {
        text: "Encouraged for rapport building.",
        rationale: "Rapport does not justify unmanaged role overlaps.",
      },
      B: {
        text: "Conflict-prone overlaps between professional and nonprofessional roles requiring boundaries.",
        rationale: "Disclose, document a boundary plan, and reorganize when conflicts emerge.",
      },
      C: {
        text: "Illegal in every circumstance.",
        rationale: "Some overlaps can be managed with disclosure and reorganization—not ignored.",
      },
      D: {
        text: "Irrelevant once services have started.",
        rationale: "Boundary risks require ongoing monitoring.",
      },
    },
  ),
  bx(
    "mod32-q8",
    "A marketing request conflicts with protecting identifiable client information. Confidentiality means:",
    "A",
    {
      A: {
        text: "Protecting identifiable information per law, payor rules, and professional code.",
        rationale: "Marketing never waives legal and code confidentiality duties.",
      },
      B: {
        text: "Sharing all data publicly if outcomes look strong.",
        rationale: "Strong outcomes do not authorize public disclosure without proper authorization.",
      },
      C: {
        text: "Marketing goals waive HIPAA and code rules.",
        rationale: "Legal and ethical obligations persist across departments.",
      },
      D: {
        text: "An optional courtesy when time allows.",
        rationale: "Confidentiality is an ethical and legal duty, not a courtesy.",
      },
    },
  ),
  bx(
    "mod32-q9",
    "A supervisor signs off without reviewing supervisee reports that mislabel assessment modalities. Supervisory accountability requires:",
    "D",
    {
      A: {
        text: "Optional documentation if outcomes look fine.",
        rationale: "Oversight must be documented even when outcomes look positive.",
      },
      B: {
        text: "Blaming supervisees only when problems surface.",
        rationale: "Supervisors share accountability for ethical and technical standards.",
      },
      C: {
        text: "Matching billing totals to authorized units only.",
        rationale: "Billing checks matter but do not replace clinical/ethical oversight.",
      },
      D: {
        text: "Documented oversight ensuring supervisees meet ethical and technical standards.",
        rationale: "Domain G: correct, retrain, and document when reports mislead.",
      },
    },
  ),
  bx(
    "mod32-q10",
    "A colleague's unsafe practice surfaces and may harm clients. Reporting obligations require:",
    "C",
    {
      A: {
        text: "Waiting until it is convenient for the team.",
        rationale: "Reporting is mandatory when harm or unsafe practice surfaces—not when convenient.",
      },
      B: {
        text: "A public social media post naming the colleague.",
        rationale: "Use proper channels; public rants are not the required pathway.",
      },
      C: {
        text: "Mandatory disclosures when harm, misconduct, or unsafe practice surfaces.",
        rationale: "Document concerns and escalate through lawful reporting pathways.",
      },
      D: {
        text: "Never reporting colleagues to preserve workplace harmony.",
        rationale: "Loyalty to colleagues does not override client-protection duties.",
      },
    },
  ),
  bx("mod32-q11", "Exam trap: scope-of-practice / competence violations under employer pressure:", "B", {
    A: {
      text: "Acceptable if the employer assigns the work.",
      rationale: "Employer assignment does not expand competence.",
    },
    B: {
      text: "High-yield error—deliver only within training, supervision, and regulatory permissions.",
      rationale: "Stay within competence; refer or obtain supervision before expanding (Domain E + G).",
    },
    C: {
      text: "A Domain C measurement issue only.",
      rationale: "This is primarily Domain E (and often G), not measurement alone.",
    },
    D: {
      text: "Relevant only when assent is discussed.",
      rationale: "Competence limits apply across service delivery, not only assent.",
    },
  }),
  bx("mod32-q12", "Exam trap: treating a signature as informed consent without understandable disclosure:", "A", {
    A: {
      text: "High-yield error—consent requires understandable risks, services, and alternatives.",
      rationale: "If the family cannot explain services, re-consent in plain language.",
    },
    B: {
      text: "A signature is always sufficient.",
      rationale: "Understandable language is required for valid informed consent.",
    },
    C: {
      text: "A billing form equals clinical consent.",
      rationale: "Payment authorization is not the same as clinical informed consent.",
    },
    D: {
      text: "Assent always replaces consent.",
      rationale: "Assent and consent serve different roles; both may be needed.",
    },
  }),
  bx(
    "mod32-q13",
    "Director orders withholding clinically necessary details from multidisciplinary notes citing PR optics:",
    "A",
    {
      A: {
        text: "Refuse unlawful omissions; pursue lawful disclosures and documented supervision aligned with confidentiality rules.",
        rationale:
          "Withholding care-critical information for PR is an unlawful omission—lawful disclosure duties come first.",
      },
      B: {
        text: "Comply immediately to placate administrators.",
        rationale: "Administrative pressure does not authorize withholding needed clinical information.",
      },
      C: {
        text: "Post a redacted success story publicly without consent.",
        rationale: "Public posting without consent creates a new ethics breach.",
      },
      D: {
        text: "Assume marketing staff waive confidentiality.",
        rationale: "Obligations persist across departments.",
      },
    },
  ),
  bx("mod32-q14", "BCBA babysits payer's relatives off-hours while billing same agency:", "A", {
    A: {
      text: "Disclose, document boundary plan, reorganize supervisory lines per ethics code—even if socially awkward.",
      rationale: "Dual relationships require disclosure and reorganization before conflicts compound.",
    },
    B: {
      text: "Keep quiet preserving friendships.",
      rationale: "Transparency is required; silence deepens risk.",
    },
    C: {
      text: "Bill family rates secretly.",
      rationale: "Secret billing deepens the conflict.",
    },
    D: {
      text: "Assume informal ties exempt BACB ethics.",
      rationale: "The ethics code still applies.",
    },
  }),
  bx("mod32-q15", "Exam trap: falsifying or selectively reporting data:", "D", {
    A: {
      text: "Marketing best practice.",
      rationale: "Selective reporting is an ethical breach, not marketing skill.",
    },
    B: {
      text: "Domain F only.",
      rationale: "This overlaps Domain C (measurement) and Domain E (ethics).",
    },
    C: {
      text: "Allowed before insurer review.",
      rationale: "Falsification is never permitted for payer optics.",
    },
    D: {
      text: "High-yield error—refuse cherry-picking, IOA deletion, and modality mislabeling.",
      rationale: "Measurement dishonesty is treated as an ethics violation, not a style preference.",
    },
  }),
  bx("mod32-q16", "Exam trap: failing to report ethical violations:", "C", {
    A: {
      text: "Loyalty to employer is sufficient.",
      rationale: "Employer loyalty does not cancel reporting obligations.",
    },
    B: {
      text: "Optional kindness toward colleagues.",
      rationale: "Reporting is mandatory when harm or misconduct surfaces.",
    },
    C: {
      text: "High-yield error—escalate through proper channels when the code is breached.",
      rationale: "Document concerns and use lawful reporting pathways.",
    },
    D: {
      text: "Domain C only.",
      rationale: "Reporting spans Domain E and often G.",
    },
  }),
  bx("mod32-q17", "Ethics readiness sweep—FIRST step before intensive services:", "B", {
    A: {
      text: "Bill intensive services to secure authorization.",
      rationale: "Billing is not the first ethics-readiness step.",
    },
    B: {
      text: "Verify consent, assent, and scope fit before any intensive plan launches.",
      rationale: "Consent/assent/scope fit comes before launch—pause if any piece is missing.",
    },
    C: {
      text: "Delete incomplete IOA rows for a cleaner start.",
      rationale: "Never begin by falsifying measurement records.",
    },
    D: {
      text: "Launch a public marketing campaign for the new program.",
      rationale: "Marketing is not an ethics-readiness prerequisite.",
    },
  }),
  bx("mod32-q18", "Documenting supervision and cultural humility practices primarily:", "A", {
    A: {
      text: "Supports equitable care and supervisory accountability.",
      rationale: "Documented oversight and cultural humility are Domain G ethics-in-practice duties.",
    },
    B: {
      text: "Serves as optional decoration for charts.",
      rationale: "This is a supervisory duty, not decoration.",
    },
    C: {
      text: "Replaces informed consent.",
      rationale: "Supervision documentation complements consent; it does not replace it.",
    },
    D: {
      text: "Substitutes for accurate billing.",
      rationale: "Oversight documentation is not a billing substitute.",
    },
  }),
  bx("mod32-q19", "Aligning measurement and modality reporting with the ethics code means:", "D", {
    A: {
      text: "Mislabeling FA as FBA when payers prefer a shorter label.",
      rationale: "Modality labels must match what was actually conducted.",
    },
    B: {
      text: "Cherry-picking best sessions for the packet.",
      rationale: "Selective reporting violates measurement ethics.",
    },
    C: {
      text: "Deleting failed probes before external review.",
      rationale: "Failed probes belong in honest documentation.",
    },
    D: {
      text: "Accurate IOA, modality labels, and session integrity in all reports.",
      rationale: "Transparent measurement reporting is both Domain C and Domain E.",
    },
  }),
  bx("mod32-q20", "When an employer demands a breach of ethics-code duties, the BCBA should:", "C", {
    A: {
      text: "Comply silently forever.",
      rationale: "Silent compliance abandons reporting obligations.",
    },
    B: {
      text: "Post a social media rant without using proper process.",
      rationale: "Use proper channels; public rants are not the required pathway.",
    },
    C: {
      text: "Document concerns; seek lawful reporting pathways per ethics code.",
      rationale: "Escalate through documented, lawful channels when ordered to breach the code.",
    },
    D: {
      text: "Delete all records that could evidence the conflict.",
      rationale: "Destroying records worsens the ethics breach.",
    },
  }),
  bx(
    "mod32-q21",
    "A parent offers weekly home-cooked meals in lieu of a copay because the family is struggling financially. MOST appropriate BCBA response?",
    "C",
    {
      A: {
        text: "Accept quietly since it helps everyone.",
        rationale: "Bartering creates a multiple-relationship risk; silence deepens it.",
      },
      B: {
        text: "Accept and reduce services by an equivalent 'fee.'",
        rationale: "Trading services for meals still creates the boundary problem.",
      },
      C: {
        text: "Decline the barter; document the request; connect the family with financial or sliding-scale resources.",
        rationale:
          "Bartering is a multiple-relationship risk—decline, document, and route financial hardship through proper channels.",
      },
      D: {
        text: "Ignore the offer and hope the copay eventually clears.",
        rationale: "Nonresponse leaves both the boundary issue and the payment issue unresolved.",
      },
    },
  ),
  bx("mod32-q22", "Measurement ethics overlap means:", "A", {
    A: {
      text: "Withholding IOA, cherry-picking, or mislabeling modalities misleads families and violates scientific integrity.",
      rationale: "Measurement dishonesty is both a Domain C and Domain E problem.",
    },
    B: {
      text: "Measurement quality is unrelated to ethics.",
      rationale: "Honest data are an ethics duty as well as a measurement duty.",
    },
    C: {
      text: "An optional style preference for supervisors.",
      rationale: "Supervisors treat analytic dishonesty as an ethics breach.",
    },
    D: {
      text: "Required only for marketing packets.",
      rationale: "Integrity applies to clinical reports, not only marketing.",
    },
  }),
  bx("mod32-q23", "Assent processes for learners who cannot fully consent:", "D", {
    A: {
      text: "Always replace informed consent.",
      rationale: "Assent complements consent; it does not replace it.",
    },
    B: {
      text: "Optional for adolescents once guardians signed.",
      rationale: "Assent-sensitive practice still matters for adolescents.",
    },
    C: {
      text: "Satisfied by a billing authorization form.",
      rationale: "Billing forms are not assent processes.",
    },
    D: {
      text: "Respect learners who cannot fully consent with ongoing assent checks.",
      rationale: "Assent is affirmative agreement with ongoing checks during services.",
    },
  }),
  bx("mod32-q24", "Conflict-of-interest disclosures should be:", "B", {
    A: {
      text: "Hidden to preserve rapport.",
      rationale: "Rapport does not justify hiding conflicts.",
    },
    B: {
      text: "Required documentation that can survive audits.",
      rationale: "Disclose and document so oversight and audits can verify integrity.",
    },
    C: {
      text: "Optional for experienced BCBAs.",
      rationale: "Experience does not waive disclosure duties.",
    },
    D: {
      text: "Decided solely by the marketing department.",
      rationale: "The analyst remains responsible for ethical disclosure.",
    },
  }),
  bx("mod32-q25", "Refusal to implement coercive plans without safeguards is:", "C", {
    A: {
      text: "Disloyalty to the employer.",
      rationale: "Refusal with ethical alternatives is a code duty, not disloyalty.",
    },
    B: {
      text: "A Domain F graphing issue only.",
      rationale: "This is Domain E practice ethics.",
    },
    C: {
      text: "Required—propose ethical alternatives with oversight.",
      rationale: "Do not implement restrictive/coercive plans without required safeguards.",
    },
    D: {
      text: "Optional if the client agrees verbally.",
      rationale: "Client agreement does not erase safeguard requirements.",
    },
  }),
  bx("mod32-q26", "Equitable access to services is:", "A", {
    A: {
      text: "An ongoing ethical duty—not optional after certification.",
      rationale: "Chapter 31 frames equitable access as continuing professional responsibility.",
    },
    B: {
      text: "Left entirely to market forces.",
      rationale: "Analysts still hold professional responsibility for equitable access.",
    },
    C: {
      text: "Irrelevant to BCBAs.",
      rationale: "Equitable access is emphasized in the ethics chapter.",
    },
    D: {
      text: "Decided exclusively by the payer.",
      rationale: "Payers matter, but analysts retain advocacy and ethics duties.",
    },
  }),
  bx(
    "mod32-q27",
    "Funding will end in 60 days; the BCBA has not yet discussed transition, referral options, or continuity supports with the family. MOST appropriate response?",
    "D",
    {
      A: {
        text: "Wait until the last session and send a template farewell letter.",
        rationale: "Waiting until the last session leaves no time for real continuity planning.",
      },
      B: {
        text: "Stop returning the family's calls to avoid the awkward conversation.",
        rationale: "Nonresponse is a form of abandonment.",
      },
      C: {
        text: "Quietly extend services by billing another payer without disclosure.",
        rationale: "Undisclosed billing changes create both financial and ethics problems.",
      },
      D: {
        text: "Begin termination planning now: notify the family, identify referrals, and transfer records with consent.",
        rationale:
          "Termination is an ethics event—plan referrals and continuity in advance to avoid abandonment.",
      },
    },
  ),
  bx(
    "mod32-q28",
    "A teen client consistently blocks task materials and leaves the area during intensive drill blocks. MOST appropriate BCBA read?",
    "B",
    {
      A: {
        text: "Increase demand density to push through the noncompliance.",
        rationale: "Pushing through ignores assent as ongoing data.",
      },
      B: {
        text: "Treat as assent-withdrawal data; review MO, reinforcer fit, session length, and program design.",
        rationale:
          "Assent is ongoing—behavioral refusal is meaningful data that revises the plan, not defiance to punish.",
      },
      C: {
        text: "Add a punishment component to reduce leaving.",
        rationale: "Punishment does not resolve an assent problem; it can escalate ethical risk.",
      },
      D: {
        text: "Ignore behavioral refusal because guardians already signed consent.",
        rationale: "Guardian consent does not eliminate the learner's ongoing assent role.",
      },
    },
  ),
  bx("mod32-q29", "Supervisee submits a report omitting failed sessions:", "C", {
    A: {
      text: "Approve for positive optics.",
      rationale: "Approving selective omission endorses fraudulent reporting.",
    },
    B: {
      text: "Treat as Domain C only and ignore ethics.",
      rationale: "Selective reporting is Domain E + C.",
    },
    C: {
      text: "Correct reporting; retrain; document supervisory action—selective reporting is fraudulent.",
      rationale: "Supervisors correct, retrain, and document—do not approve for optics.",
    },
    D: {
      text: "Fire the supervisee immediately without review.",
      rationale: "Use accountable supervisory process; do not skip review.",
    },
  }),
  bx("mod32-q30", "Asked to deliver an intervention outside training with no supervision:", "A", {
    A: {
      text: "Decline—scope of competence violation; refer or obtain supervision.",
      rationale: "Stay within competence; expand only with training/supervision.",
    },
    B: {
      text: "Proceed—client urgency overrides competence limits.",
      rationale: "Urgency does not erase competence boundaries.",
    },
    C: {
      text: "Bill and learn on the job silently.",
      rationale: "Silent on-the-job practice outside competence is a violation.",
    },
    D: {
      text: "Delegate to untrained staff.",
      rationale: "Delegation without competence/supervision worsens the breach.",
    },
  }),
  bx("mod32-q31", "Cultural humility in ethical practice means:", "D", {
    A: {
      text: "An optional nicety.",
      rationale: "It supports equitable, respectful care—not optional decoration.",
    },
    B: {
      text: "A replacement for measurement.",
      rationale: "It complements measurement; it does not replace it.",
    },
    C: {
      text: "A marketing buzzword only.",
      rationale: "It should appear in documented practice, not slogans alone.",
    },
    D: {
      text: "Documented practices supporting equitable, respectful care.",
      rationale: "Cultural humility is practiced and documented, not merely claimed.",
    },
  }),
  bx("mod32-q32", "Personal relationships versus professional roles:", "B", {
    A: {
      text: "Merge freely for rapport.",
      rationale: "Unmanaged merges create dual-relationship risk.",
    },
    B: {
      text: "Maintain boundaries; disclose dual relationships; reorganize when conflicts emerge.",
      rationale: "Boundary management protects objectivity and client welfare.",
    },
    C: {
      text: "Irrelevant after the first session.",
      rationale: "Boundary risks need ongoing monitoring.",
    },
    D: {
      text: "Social media friendship is always exempt.",
      rationale: "Informal online ties can still create dual relationships.",
    },
  }),
  bx(
    "mod32-q33",
    "A family requests goals rooted in cultural or religious values that differ from the clinician's default templates. MOST ethically appropriate move?",
    "C",
    {
      A: {
        text: "Insist on the template because it is 'evidence based.'",
        rationale: "Rigid template use ignores cultural humility and social validity.",
      },
      B: {
        text: "Adopt the requests silently without documenting why goals changed.",
        rationale: "Undocumented changes undermine oversight and audit trails.",
      },
      C: {
        text: "Adopt cultural humility: revise goals with the family; document the rationale; verify social validity across sessions.",
        rationale:
          "Cultural humility means examining our assumptions—goals should reflect family values with documented social-validity review.",
      },
      D: {
        text: "Refer the family out because the goals are unusual.",
        rationale: "Referral is not a substitute for cultural humility within scope of competence.",
      },
    },
  ),
  bx("mod32-q34", "Supervisor treats IOA withholding as an ethical breach:", "A", {
    A: {
      text: "Correct—measurement dishonesty is not a style preference.",
      rationale: "Supervisors should frame IOA withholding as Domain E + C.",
    },
    B: {
      text: "An overreaction.",
      rationale: "Integrity of agreement data is a real ethics issue.",
    },
    C: {
      text: "Optional if graphs look polished.",
      rationale: "Visual polish never replaces honest IOA.",
    },
    D: {
      text: "Allowed before payer review.",
      rationale: "Never acceptable before payer or audit review.",
    },
  }),
  bx(
    "mod32-q35",
    "Marketing draft says '95% of our clients recover from autism' with no dataset attached. MOST appropriate BCBA response?",
    "D",
    {
      A: {
        text: "Approve because it will help recruit families.",
        rationale: "Recruitment goals do not authorize unsupported claims.",
      },
      B: {
        text: "Add a small disclaimer at the bottom and publish.",
        rationale: "A disclaimer does not correct 'recovered/cured' language.",
      },
      C: {
        text: "Delete the outcome data internally so the claim cannot be checked.",
        rationale: "Destroying data is a code violation on top of the claim problem.",
      },
      D: {
        text: "Rewrite in scope-aligned language; require dataset, denominator, and honest definition before publication.",
        rationale:
          "'Recovered/cured' language and unqualified outcome claims are code violations—require evidence and honest framing.",
      },
    },
  ),
  bx("mod32-q36", "Exam trap: employer pressure for silent corners on ethics:", "B", {
    A: {
      text: "Comply silently—job security first.",
      rationale: "Code duties persist under employer pressure.",
    },
    B: {
      text: "High-yield error—document and escalate through lawful reporting pathways.",
      rationale: "Document concerns; do not silently cut ethics corners.",
    },
    C: {
      text: "Delete the ethics code from onboarding files.",
      rationale: "Removing references does not remove duties.",
    },
    D: {
      text: "Blame clients publicly for the conflict.",
      rationale: "Public blame is not an ethical resolution pathway.",
    },
  }),
  bx("mod32-q37", "Domain G supervisory items in Chapter 31 emphasize:", "C", {
    A: {
      text: "That supervision is unrelated to the ethics chapter.",
      rationale: "Supervisory accountability is central to Chapter 31.",
    },
    B: {
      text: "Billing ratios only.",
      rationale: "Oversight includes ethical and technical standards, not billing alone.",
    },
    C: {
      text: "Documented oversight, corrective action, cultural humility, and reporting.",
      rationale: "Domain G pairs oversight documentation with ethics duties.",
    },
    D: {
      text: "Optional duties for experienced BCBAs.",
      rationale: "Supervisory ethics duties are ongoing.",
    },
  }),
  bx("mod32-q38", "Consent form is jargon-heavy; family cannot explain services:", "D", {
    A: {
      text: "Signature is sufficient.",
      rationale: "Understandable disclosure is still missing.",
    },
    B: {
      text: "Proceed—the form is signed.",
      rationale: "A signed form without understanding fails consent quality.",
    },
    C: {
      text: "Assent replaces the need for clarity.",
      rationale: "Assent does not fix unclear consent language.",
    },
    D: {
      text: "Revise to plain language; re-consent—understandable disclosure required.",
      rationale: "Pause and repair consent quality before intensive services continue.",
    },
  }),
  bx("mod32-q39", "Mislabeling a functional analysis as a descriptive FBA:", "A", {
    A: {
      text: "Measurement ethics breach—correct modality labels in all reports.",
      rationale: "Wrong modality labels mislead payers and families.",
    },
    B: {
      text: "Acceptable billing shorthand.",
      rationale: "Shorthand that misstates methods is still misleading.",
    },
    C: {
      text: "Domain F only.",
      rationale: "This is Domain C + E.",
    },
    D: {
      text: "Required for insurance.",
      rationale: "Insurers do not require false modality labels.",
    },
  }),
  bx("mod32-q40", "Technical excellence without ethics:", "B", {
    A: {
      text: "Is sufficient for the field's mission.",
      rationale: "Cooper's capstone rejects technique without ethics.",
    },
    B: {
      text: "Fails the field's mission—Chapter 31 capstone principle.",
      rationale: "Ethics and technical practice must braid together.",
    },
    C: {
      text: "Is an optional capstone.",
      rationale: "Ethics is a core requirement, not optional.",
    },
    D: {
      text: "Can be replaced by marketing.",
      rationale: "Marketing cannot replace ethical practice.",
    },
  }),
  bx("mod32-q41", "Ethical supervision when a supervisee mislabels modalities:", "C", {
    A: {
      text: "Ignore if outcomes look good.",
      rationale: "Good outcomes do not excuse misleading reports.",
    },
    B: {
      text: "Public shaming.",
      rationale: "Use professional retraining and documentation, not shaming.",
    },
    C: {
      text: "Retrain, correct reports, and document supervisory action.",
      rationale: "Accountable supervision corrects the record and the skill gap.",
    },
    D: {
      text: "Delete all prior reports silently.",
      rationale: "Silent deletion is not transparent correction.",
    },
  }),
  bx("mod32-q42", "Lawful clinical disclosure versus PR-driven omissions:", "D", {
    A: {
      text: "PR always wins.",
      rationale: "Lawful clinical disclosure duties come first.",
    },
    B: {
      text: "Delete all clinical notes.",
      rationale: "Destroying notes is not a lawful pathway.",
    },
    C: {
      text: "Public posting without consent.",
      rationale: "Public posting without consent violates confidentiality rules.",
    },
    D: {
      text: "Clinical necessity and confidentiality rules govern—not marketing optics.",
      rationale: "Share what lawful care requires; protect what rules protect—PR does not decide.",
    },
  }),
  bx("mod32-q43", "Boundary plan when a dual relationship emerges:", "A", {
    A: {
      text: "Disclose, document, and reorganize supervisory lines per the code.",
      rationale: "Immediate duty is transparency plus a workable boundary plan.",
    },
    B: {
      text: "Silent continuation.",
      rationale: "Silence lets conflicts compound.",
    },
    C: {
      text: "Secret billing adjustment.",
      rationale: "Secret adjustments deepen conflicts of interest.",
    },
    D: {
      text: "Assume friendship exempts the code.",
      rationale: "Friendship does not exempt professional boundaries.",
    },
  }),
  bx("mod32-q44", "Responsive reporting of ethical concerns means:", "B", {
    A: {
      text: "Waiting until a lawsuit appears.",
      rationale: "Report when harm or misconduct surfaces—not after litigation.",
    },
    B: {
      text: "Document and pursue proper channels when harm or misconduct surfaces.",
      rationale: "Timely, documented escalation through proper pathways.",
    },
    C: {
      text: "Gossip only.",
      rationale: "Informal gossip is not a reporting pathway.",
    },
    D: {
      text: "Delete evidence.",
      rationale: "Preserve and document concerns; do not destroy evidence.",
    },
  }),
  bx("mod32-q45", "Exam trap: dual relationship without disclosure:", "C", {
    A: {
      text: "Acceptable if outcomes look good.",
      rationale: "Outcomes do not erase disclosure duties.",
    },
    B: {
      text: "Domain C only.",
      rationale: "This is Domain E boundary management.",
    },
    C: {
      text: "High-yield error—disclose and reorganize before conflicts compound.",
      rationale: "Unmanaged dual relationships are a classic ethics trap.",
    },
    D: {
      text: "Required only when consent forms are updated.",
      rationale: "Boundary management is broader than form updates.",
    },
  }),
  bx("mod32-q46", "Cooper emphasizes that behavior analysts align with:", "A", {
    A: {
      text: "The BACB Ethics Code and relevant regulations even under employer pressure.",
      rationale: "Employer pressure does not override code alignment.",
    },
    B: {
      text: "Employer policy exclusively.",
      rationale: "Employer policy cannot cancel the ethics code.",
    },
    C: {
      text: "The marketing department.",
      rationale: "Marketing does not set professional ethics standards.",
    },
    D: {
      text: "Insurer preferences over the code.",
      rationale: "Payer preferences do not outrank ethics-code duties.",
    },
  }),
  bx("mod32-q47", "Intensive plan launches; assent never obtained for an adolescent:", "D", {
    A: {
      text: "Proceed and obtain assent retroactively.",
      rationale: "Pause and obtain assent; do not proceed first.",
    },
    B: {
      text: "Assent is irrelevant for teens.",
      rationale: "Assent-sensitive practice still applies for adolescents.",
    },
    C: {
      text: "Bill while fixing later.",
      rationale: "Ethics readiness comes before billing continuation.",
    },
    D: {
      text: "Pause—verify consent, assent, and scope before intensive services.",
      rationale: "Launch only after consent, assent, and scope fit are verified.",
    },
  }),
  bx("mod32-q48", "Separating personal from professional relationships is:", "C", {
    A: {
      text: "Unnecessary formality.",
      rationale: "Boundaries are a core ethics requirement.",
    },
    B: {
      text: "Impossible in small towns, so ignore it.",
      rationale: "Small communities still require disclosure and management.",
    },
    C: {
      text: "A central documentation practice that survives audits and ethics review.",
      rationale: "Document boundaries so conflicts can be managed and reviewed.",
    },
    D: {
      text: "A replacement for IOA.",
      rationale: "Boundaries complement measurement ethics; they do not replace IOA.",
    },
  }),
  bx("mod32-q49", "Supervisory ratios and oversight should ensure:", "B", {
    A: {
      text: "An optional suggestion when caseloads are light.",
      rationale: "Oversight expectations are regulatory and code-linked, not optional.",
    },
    B: {
      text: "Documented oversight ensuring ethical and competent service delivery.",
      rationale: "Ratios/oversight exist to protect ethical, competent care.",
    },
    C: {
      text: "A billing metric only.",
      rationale: "Oversight is about quality and ethics, not billing alone.",
    },
    D: {
      text: "A replacement for informed consent.",
      rationale: "Supervision complements consent; it does not replace it.",
    },
  }),
  bx("mod32-q50", "Closing Chapter 31 principle—ethical practice requires:", "C", {
    A: {
      text: "Technical skill alone to complete Cooper.",
      rationale: "Ethics is the capstone, not an optional add-on.",
    },
    B: {
      text: "Letting employer demands override the BACB code.",
      rationale: "Code alignment persists under pressure.",
    },
    C: {
      text: "Consent/assent/scope checks, boundaries, honest reporting, accountable supervision, and refusal of falsification—technique without ethics fails the mission.",
      rationale: "Integrate readiness, boundaries, measurement honesty, supervision, and reporting.",
    },
    D: {
      text: "Deleting IOA before insurer review when asked.",
      rationale: "That is an ethical violation, not a principle.",
    },
  }),
];
