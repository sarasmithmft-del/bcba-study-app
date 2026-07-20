import type { ExtensionBlueprint } from "@/content/modules/extensionBlueprintTypes";
import { CHAPTER_31_ETHICS_QUIZ_BANK } from "@/content/modules/quiz/chapter31EthicsQuizBank";

export const MOD32_BLUEPRINT: ExtensionBlueprint = {
  id: "mod32",
  chapterNumber: 31,
  activityPrefix: 2320,
  title: "Ethical and Professional Responsibilities of Applied Behavior Analysts",
  codexHeading: "READING — Chapter 31 (Ethics and Professional Responsibilities)",
  codexIntro: `Chapter 31 in Cooper, Heron, and Heward closes the text with ethical and professional responsibilities—the braid of professional codes, cultural humility, scope-of-practice boundaries, supervision ratios, privacy, and accountability for marketing claims. Behavior analysts align practice with the BACB Ethics Code and relevant regulations even when employers pressure silent corners. The BACB Ethics Code organizes duties into clusters: responsibility as a professional, responsibility in practice, responsibility to clients and stakeholders, responsibility to supervisees and trainees, responsibility in public statements, and responsibility in research—Chapter 31 previews how these clusters show up in day-to-day decisions.

Informed consent means voluntary authorization after understandable disclosure of services, risks, and alternatives; disclosure must be given in language the client or guardian can actually explain back. Assent processes respect learners who cannot fully consent, and assent is not a one-time signature—it is checked across sessions, and a learner's clear refusal (verbal or behavioral) is treated as meaningful data, not defiance. Scope of competence requires delivering only services supported by training, supervision, and regulatory permissions. Dual relationships are conflict-prone overlaps between professional and nonprofessional roles requiring boundaries, disclosure, and reorganization when conflicts emerge—gifts, bartering, and social-media contact all fall in this territory.

Documentation practices must survive audits: accurate billing, conflict-of-interest disclosures, and boundaries separating personal relationships from professional roles—all central to supervisory accountability (Domain I) and closely tied to Domain E ethics obligations. Confidentiality protects identifiable information per law, payor rules, and professional code; sharing case examples for marketing, training, or research requires specific authorization, not general goodwill. Reporting obligations require mandatory disclosures when harm, misconduct, or unsafe practice surfaces—first through internal channels when safe, then externally to regulators or the BACB when internal escalation fails.

Measurement ethics overlap: withholding IOA, cherry-picking sessions, or mislabeling modalities misleads families and violates scientific integrity simultaneously. When an employer demands deleting IOA rows before insurer review, refuse falsification, document concerns, and seek lawful reporting pathways per the ethics code. Supervisors treat analytic dishonesty as ethical breaches, not mere style preferences. Research and program-evaluation activities carry additional consent and IRB obligations even when they blend with routine services.

Supervision ratios, caseload management, and cultural humility make ethics operational. Supervisors monitor total supervised hours, quality of feedback, and equitable access across cases; caseloads that make competent supervision impossible are themselves an ethics problem. Cultural humility is ongoing—analysts examine their own assumptions about goals, communication, and family life rather than expecting families to translate themselves into a clinician's frame. Public statements—testimonials, "cured" or "recovered" claims, and outcome infographics—must align with actual evidence and scope; celebrity endorsements and unqualified promises are code violations.

Termination and transition are ethics events, not administrative afterthoughts: end-of-service planning, referrals, and continuity supports protect clients from abandonment when funding ends, staff turn over, or scope changes. Ongoing professional development, responsive reporting of ethical concerns, equitable access to services, and refusal to implement coercive plans without safeguards round out the chapter's reminder that technical excellence without ethics fails the field's mission.

For BCBA exam prep: check BACB Ethics Code duty clusters, documentation integrity, scope fit, consent quality, assent monitoring, dual-relationship boundaries, supervision ratios, public-statement honesty, and termination planning before choosing an answer.`,
  footnotes: {
    ch31_1: {
      label: "[1]",
      lines: [
        "CHH Chapter 31 — ethics overview (Pearson Global 3rd ed.; verify pp. in your TOC).",
        "BACB Ethics Code duty clusters: professional, practice, clients/stakeholders, supervisees, public statements, research.",
        "Code alignment persists even under employer pressure.",
      ],
    },
    ch31_2: {
      label: "[2]",
      lines: [
        "CHH Chapter 31 — informed consent, assent, and scope of competence.",
        "Consent = voluntary authorization after understandable disclosure of services, risks, and alternatives.",
        "Assent is ongoing; a learner's clear refusal is meaningful data, not defiance.",
        "Scope of competence limits services to what training, supervision, and regulations support.",
      ],
    },
    ch31_3: {
      label: "[3]",
      lines: [
        "CHH Chapter 31 — dual/multiple relationships, boundaries, gifts, bartering, and social-media contact.",
        "Disclose, document a boundary plan, and reorganize supervisory lines when conflicts emerge.",
        "Some overlaps are unavoidable in small communities—transparency and safeguards, not silence.",
      ],
    },
    ch31_4: {
      label: "[4]",
      lines: [
        "CHH Chapter 31 — confidentiality and information sharing.",
        "Protect identifiable information per law, payor rules, and the code; marketing/training/research use requires specific authorization.",
        "PR optics never trump lawful clinical disclosure to the care team.",
      ],
    },
    ch31_5: {
      label: "[5]",
      lines: [
        "CHH Chapter 31 — measurement ethics and honest reporting.",
        "IOA integrity, honest modality labels, and complete session reporting are ethical duties, not preferences.",
        "Analytic dishonesty (deleting IOA, cherry-picking, mislabeling FA vs FBA) is treated as an ethics breach.",
      ],
    },
    ch31_6: {
      label: "[6]",
      lines: [
        "CHH Chapter 31 — supervision, caseload ratios, and Domain I (Personnel Supervision & Management).",
        "Supervisors document oversight time and content, ensure quality of feedback, and monitor equitable access.",
        "Caseloads that make competent supervision impossible are themselves an ethics problem.",
      ],
    },
    ch31_7: {
      label: "[7]",
      lines: [
        "CHH Chapter 31 — public statements, marketing, and testimonials.",
        "Claims must align with actual evidence and scope; 'cured' or 'recovered' language and unqualified guarantees are code violations.",
        "Testimonials and case sharing require specific consent and honest scope framing.",
      ],
    },
    ch31_8: {
      label: "[8]",
      lines: [
        "CHH Chapter 31 — termination, transition, and reporting obligations.",
        "End-of-service planning, referrals, and continuity protect against abandonment when funding, staff, or scope change.",
        "Report ethical concerns first through safe internal channels, then externally when internal escalation fails.",
      ],
    },
  },
  codexFootnoteRefs: [
    { afterSentenceIndex: 0, ref: "ch31_1" },
    { afterSentenceIndex: 1, ref: "ch31_2" },
    { afterSentenceIndex: 2, ref: "ch31_3" },
    { afterSentenceIndex: 3, ref: "ch31_4" },
    { afterSentenceIndex: 4, ref: "ch31_5" },
    { afterSentenceIndex: 5, ref: "ch31_6" },
    { afterSentenceIndex: 6, ref: "ch31_7" },
    { afterSentenceIndex: 7, ref: "ch31_8" },
  ],
  codexPlainLanguageSummary: {
    heading: "Plain language — Chapter 31 recap",
    intro:
      "Chapter 31 is the ethics capstone—consent, competence, boundaries, honest data, supervision, marketing honesty, termination planning, and courage when employers push you to cut corners.",
    chunks: [
      {
        subtitle: "Consent, assent, and scope",
        segments: [
          {
            type: "text",
            text: "Informed consent = understandable disclosure before services start. Ask the family to explain what services are in their own words—if they cannot, the consent quality has failed. Assent is checked across sessions, and a learner's clear refusal is meaningful data. Scope of competence means staying within training, supervision, and licensure—not chasing every trendy intervention ",
          },
          { type: "footnote", ref: "ch31_2" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Boundaries, gifts, and social media",
        segments: [
          {
            type: "text",
            text: "Dual/multiple relationships need disclosure and a written boundary plan—especially with gifts, bartering, and social-media friend requests. Confidentiality follows law, payor rules, and code; marketing or training use of case content requires specific authorization ",
          },
          { type: "footnote", ref: "ch31_3" },
          { type: "footnote", ref: "ch31_4" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Honest measurement and reporting",
        segments: [
          {
            type: "text",
            text: "Do not delete IOA rows, cherry-pick sessions, or mislabel modalities. Refuse falsification, keep the failed probes in the packet, and use lawful reporting pathways when pressured otherwise ",
          },
          { type: "footnote", ref: "ch31_5" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Supervision ratios and cultural humility",
        segments: [
          {
            type: "text",
            text: "Document supervision time and content. Caseloads that make competent supervision impossible are themselves an ethics problem. Cultural humility is ongoing—examine your own assumptions about family goals and communication before asking the family to translate themselves into your frame ",
          },
          { type: "footnote", ref: "ch31_6" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "Marketing, termination, and reporting",
        segments: [
          {
            type: "text",
            text: "Public statements must match evidence and scope—no 'cured' claims, no unqualified guarantees. Plan termination and transition so no client is abandoned. Report ethical concerns through safe channels; escalate externally when internal escalation fails ",
          },
          { type: "footnote", ref: "ch31_7" },
          { type: "footnote", ref: "ch31_8" },
          { type: "text", text: "." },
        ],
      },
      {
        subtitle: "High-Yield Confusion Points",
        segments: [
          {
            type: "text",
            text: "High-yield confusion points include (1) scope-of-practice violations under employer pressure, (2) dual-relationship conflicts without boundary plans, (3) selective or falsified data, (4) consent that a family cannot restate in plain language, (5) missed assent checks in adolescents, (6) 'cured/recovered' marketing claims, (7) caseloads too large for meaningful supervision, and (8) treating termination as paperwork instead of continuity of care. Resolve them by checking BACB Ethics Code duty clusters, documentation integrity, and supervisory accountability before choosing an answer.",
          },
        ],
      },
    ],
  },
  supplementalFootnotes: {
    ch31_v1: {
      label: "[V1]",
      lines: [
        "CHH Chapter 31 — informed consent: voluntary authorization after understandable disclosure.",
        "Family should be able to restate services, risks, and alternatives in their own words.",
      ],
    },
    ch31_v2: {
      label: "[V2]",
      lines: [
        "CHH Chapter 31 — scope of competence.",
        "Stay within training, supervision, and licensure; expand only with structured training and oversight.",
      ],
    },
    ch31_v3: {
      label: "[V3]",
      lines: [
        "CHH Chapter 31 — dual/multiple relationships.",
        "Disclose, document a boundary plan, and reorganize supervisory lines when conflicts emerge.",
        "Includes gifts, bartering, and social-media contact.",
      ],
    },
    ch31_v4: {
      label: "[V4]",
      lines: [
        "CHH Chapter 31 — confidentiality.",
        "Protect identifiable information per law, payor rules, and code.",
        "Marketing/training/research use requires specific authorization.",
      ],
    },
    ch31_v5: {
      label: "[V5]",
      lines: [
        "CHH Chapter 31 — supervisory accountability.",
        "Document oversight time and content; monitor quality of feedback and equitable access.",
      ],
    },
    ch31_v6: {
      label: "[V6]",
      lines: [
        "CHH Chapter 31 — reporting obligations.",
        "Escalate through safe internal channels first; use regulator/BACB pathways when internal escalation fails.",
      ],
    },
    ch31_v7: {
      label: "[V7]",
      lines: [
        "CHH Chapter 31 — cultural humility.",
        "Ongoing self-examination of assumptions about goals, communication, and family life.",
      ],
    },
    ch31_v8: {
      label: "[V8]",
      lines: [
        "CHH Chapter 31 — public statements and marketing accountability.",
        "Claims must align with evidence and scope; no 'cured/recovered' language or unqualified guarantees.",
      ],
    },
    ch31_v9: {
      label: "[V9]",
      lines: [
        "CHH Chapter 31 — termination and transition.",
        "Plan referrals and continuity supports; do not abandon clients when funding, staff, or scope change.",
      ],
    },
    ch31_v10: {
      label: "[V10]",
      lines: [
        "CHH Chapter 31 — assent processes.",
        "Assent is ongoing; a learner's clear refusal (verbal or behavioral) is meaningful data, not defiance.",
      ],
    },
    ch31_kc1: {
      label: "[KC1]",
      lines: [
        "Domain E + G integration — ethics-code duties and supervisory accountability.",
        "Document oversight, correct errors, and align practice with the code even under employer pressure.",
      ],
    },
    ch31_kc2: {
      label: "[KC2]",
      lines: [
        "Domain C + E integration — IOA integrity, honest modality reporting, complete session data.",
        "Analytic dishonesty (deleted IOA, cherry-picked sessions, mislabeled FA vs FBA) is treated as an ethics breach.",
      ],
    },
    ch31_kc3: {
      label: "[KC3]",
      lines: [
        "Domain E — refuse falsification and coercive plans; escalate through lawful reporting pathways.",
        "Preserve records; do not destroy potential evidence of the concern.",
      ],
    },
    ch31_kc4: {
      label: "[KC4]",
      lines: [
        "Domain E + I — supervision ratios, caseload management, cultural humility, and equitable access.",
        "Caseloads that make competent supervision impossible are themselves an ethics problem.",
      ],
    },
  },
  vocabularySection: {
    heading: "VOCABULARY — Chapter 31",
    intro:
      "Chapter 31 ethics and professional responsibilities—capstone terms that recur in BCBA vignettes: consent quality, boundary plans, public statements, supervision ratios, termination planning, and reporting pathways.",
    entries: [
      {
        term: "Informed consent",
        definition:
          "Voluntary authorization after understandable disclosure of services, risks, and alternatives—valid only when the client or guardian can restate what was agreed to.",
        footnoteRef: "ch31_v1",
      },
      {
        term: "Assent (and assent withdrawal)",
        definition:
          "Ongoing affirmative agreement from learners who cannot fully consent; clear refusal is meaningful data that pauses or revises the plan.",
        footnoteRef: "ch31_v10",
      },
      {
        term: "Scope of competence",
        definition:
          "Delivering only services supported by training, supervision, and regulatory permissions; expand only through structured training and oversight.",
        footnoteRef: "ch31_v2",
      },
      {
        term: "Multiple relationships",
        definition:
          "Overlaps between professional and nonprofessional roles (gifts, bartering, friendships, social media) that require disclosure and a documented boundary plan.",
        footnoteRef: "ch31_v3",
      },
      {
        term: "Confidentiality",
        definition:
          "Protecting identifiable information per law, payor rules, and code; marketing/training/research use requires specific authorization, not general goodwill.",
        footnoteRef: "ch31_v4",
      },
      {
        term: "Supervisory accountability",
        definition:
          "Documented oversight covering supervision time, quality of feedback, and equitable access—including refusal of unmanageable caseloads.",
        footnoteRef: "ch31_v5",
      },
      {
        term: "Reporting obligations",
        definition:
          "Escalation of harm, misconduct, or unsafe practice—first through safe internal channels, then external regulators/BACB when internal escalation fails.",
        footnoteRef: "ch31_v6",
      },
      {
        term: "Cultural humility",
        definition:
          "Ongoing self-examination of assumptions about goals, communication, and family life rather than requiring families to translate themselves into a clinician's frame.",
        footnoteRef: "ch31_v7",
      },
      {
        term: "Public-statement accountability",
        definition:
          "Marketing, testimonials, and outcome claims must align with actual evidence and scope; 'cured/recovered' language and unqualified guarantees are code violations.",
        footnoteRef: "ch31_v8",
      },
      {
        term: "Termination and transition",
        definition:
          "Planned end-of-service with referrals and continuity supports so no client is abandoned when funding, staff, or scope changes.",
        footnoteRef: "ch31_v9",
      },
      {
        term: "Measurement ethics",
        definition:
          "Honest IOA, accurate modality labels, and complete session reporting—cherry-picking or deletion is an ethics breach, not a style preference.",
        footnoteRef: "ch31_kc2",
      },
      {
        term: "Boundary plan",
        definition:
          "Documented plan to manage an unavoidable role overlap: transparency, reorganized supervisory lines, and periodic review.",
        footnoteRef: "ch31_v3",
      },
    ],
  },
  keyConceptsSection: {
    heading: "KEY CONCEPTS — Chapter 31",
    intro:
      "Ethics operationalized: consent quality, scope discipline, boundary management, measurement honesty, supervision, marketing accountability, termination planning, and reporting pathways.",
    concepts: [
      {
        title: "Informed consent and scope of competence",
        segments: [
          {
            type: "text",
            text: "Consent quality is measured by what the family can restate, not by signatures on a form. If services, risks, and alternatives cannot be explained back in the family's own words, pause and re-consent in plain language. Scope of competence limits services to what training, supervision, and regulations support—expand only with structured training and documented oversight ",
          },
          { type: "footnote", ref: "ch31_v1" },
          { type: "footnote", ref: "ch31_v2" },
          { type: "footnote", ref: "ch31_kc1" },
          { type: "text",
            text: ". Example: family signs a jargon-heavy 12-page form but cannot explain what discrete-trial teaching is—consent is not valid until disclosure is revised.",
          },
        ],
      },
      {
        title: "Assent and assent withdrawal",
        segments: [
          {
            type: "text",
            text: "Assent is ongoing, not a one-time signature. Behavioral refusal (leaving the area, blocking materials, distress) is meaningful data—treat it as information to revise the plan, not as noncompliance to punish. Adolescents receiving intensive services deserve assent-sensitive check-ins even after guardians consent ",
          },
          { type: "footnote", ref: "ch31_v10" },
          { type: "text",
            text: ". Example: teen consistently walks out of drill blocks—review MO, reinforcer fit, session length, and whether assent has effectively been withdrawn.",
          },
        ],
      },
      {
        title: "Multiple relationships and boundary plans",
        segments: [
          {
            type: "text",
            text: "Not every overlap is avoidable in small communities. Disclose, write a boundary plan, and reorganize supervisory lines when conflicts emerge. Gifts, bartering, and social-media friend requests all count as boundary events—default to transparency and code review, not silence ",
          },
          { type: "footnote", ref: "ch31_v3" },
          { type: "footnote", ref: "ch31_v4" },
          { type: "text",
            text: ". Example: parent offers home-cooked meals in lieu of a copay—decline the barter, document the request, and route billing questions to a designated administrator.",
          },
        ],
      },
      {
        title: "Measurement ethics and IOA integrity",
        segments: [
          {
            type: "text",
            text: "Refuse deleting IOA rows, cherry-picking sessions, or mislabeling modalities. Preserve failed probes in the packet; report modality (FBA vs functional analysis, DTT vs NET) exactly as conducted. Analytic dishonesty is an ethics breach with both Domain C and Domain E consequences ",
          },
          { type: "footnote", ref: "ch31_kc2" },
          { type: "footnote", ref: "ch31_kc3" },
          { type: "text",
            text: ". Example: supervisor discovers a supervisee omitted three failed probes before insurer submission—correct the packet, retrain, and document the supervisory action.",
          },
        ],
      },
      {
        title: "Supervision ratios and cultural humility",
        segments: [
          {
            type: "text",
            text: "Supervisors document oversight time and content, monitor quality of feedback, and refuse caseloads that make competent supervision impossible. Cultural humility is an ongoing practice—examine assumptions about goals, communication, and family life before asking the family to translate themselves ",
          },
          { type: "footnote", ref: "ch31_kc4" },
          { type: "footnote", ref: "ch31_v7" },
          { type: "text",
            text: ". Example: agency adds ten new BT hires without adding BCBA supervisors—refuse the ratio, document the concern, and escalate.",
          },
        ],
      },
      {
        title: "Public statements, marketing, and termination",
        segments: [
          {
            type: "text",
            text: "Public claims must align with actual evidence and scope. Avoid 'cured/recovered' language and unqualified guarantees; testimonials require specific consent and honest scope framing. Termination is an ethics event—plan referrals, transition supports, and continuity long before the last session ",
          },
          { type: "footnote", ref: "ch31_v8" },
          { type: "footnote", ref: "ch31_v9" },
          { type: "text",
            text: ". Example: marketing draft claims '95% of clients recover'—require dataset, denominator, definition of recovery, and code-aligned rewording before publication.",
          },
        ],
      },
      {
        title: "Reporting pathways and refusal of coercive plans",
        segments: [
          {
            type: "text",
            text: "Report ethical concerns through safe internal channels first—supervisor, ethics committee, compliance officer—then escalate externally (regulator, BACB) when internal escalation fails. Refuse coercive or restrictive plans without required safeguards; preserve documentation and do not destroy potential evidence ",
          },
          { type: "footnote", ref: "ch31_v6" },
          { type: "footnote", ref: "ch31_kc3" },
          { type: "text",
            text: ". Example: employer directs unsupervised aversive contingency—refuse, propose an ethical alternative, document the request, and escalate through the compliance officer.",
          },
        ],
      },
    ],
  },
  vocabularyMatchInstructions:
    "Match each vignette to Chapter 31 ethics vocabulary. Reject stems that describe scope violations without disclosure, falsified IOA, consent without understandable language, unmanaged multiple relationships, 'cured/recovered' marketing, unmanageable supervision ratios, or termination without continuity planning.",
  matchActivityInstructions:
    "Select the ethics-code duty, boundary response, measurement-integrity action, supervisory-ratio move, marketing rewrite, termination step, or reporting pathway that best fits Cooper Chapter 31.",
  chainActivityInstructions:
    "Sequence ethics readiness: verify consent/assent/scope → document supervision ratios and cultural humility → align honest measurement and modality reporting → escalate employer conflicts through proper channels while planning termination and continuity.",
  mts: [
    {
      sample_stimulus: "Employer demands deleting IOA rows before insurer review.",
      comparison_options: [
        "Refuse falsification; document concerns; seek lawful reporting pathways per ethics code",
        "Comply quietly to keep the job and hope the audit never notices",
        "Submit only high-IOA sessions and omit the rest from the insurer packet",
        "Ask a colleague to alter the file so your name stays off the record",
      ],
      correct_match:
        "Refuse falsification; document concerns; seek lawful reporting pathways per ethics code",
      error_feedback:
        "Deleting or selectively omitting IOA is fraudulent reporting—refuse, document, and use lawful reporting pathways.",
    },
    {
      sample_stimulus:
        "Director orders withholding clinically necessary details from multidisciplinary notes so a PR summary looks cleaner.",
      comparison_options: [
        "Refuse unlawful omissions; pursue lawful disclosures and documented supervision aligned with confidentiality rules",
        "Comply immediately to placate administrators",
        "Post a redacted success story publicly without consent",
        "Assume marketing staff can waive confidentiality for the care team",
      ],
      correct_match:
        "Refuse unlawful omissions; pursue lawful disclosures and documented supervision aligned with confidentiality rules",
      error_feedback:
        "PR optics never trump lawful clinical disclosure—omit only what rules allow, never care-critical content the team needs.",
    },
    {
      sample_stimulus: "BCBA babysits payer's relatives off-hours while billing same agency.",
      comparison_options: [
        "Disclose, document boundary plan, reorganize supervisory lines per ethics code",
        "Keep quiet preserving friendships",
        "Bill family rates secretly",
        "Assume informal ties exempt BACB ethics",
      ],
      correct_match: "Disclose, document boundary plan, reorganize supervisory lines per ethics code",
      error_feedback:
        "Multiple relationships need disclosure and a boundary plan before conflicts compound—silence is not a solution.",
    },
    {
      sample_stimulus: "Supervisee mislabels FBA as functional analysis in payer report.",
      comparison_options: [
        "Correct modality reporting; retrain; document supervisory action—measurement ethics breach",
        "Approve for billing optics",
        "Leave the label; add a vague caveat in the appendix",
        "Transfer the case without correcting the report",
      ],
      correct_match:
        "Correct modality reporting; retrain; document supervisory action—measurement ethics breach",
      error_feedback:
        "Mislabeling assessment modality misleads payers and families—correct the report, retrain, and document oversight.",
    },
    {
      sample_stimulus: "Intensive plan launches without assent process for adolescent learner.",
      comparison_options: [
        "Pause—verify consent, assent, and scope fit before intensive plan",
        "Proceed—assent optional once guardians signed",
        "Continue billing and obtain assent at the next quarterly review",
        "Treat noncompliance as proof assent was unnecessary",
      ],
      correct_match: "Pause—verify consent, assent, and scope fit before intensive plan",
      error_feedback:
        "Ethics readiness starts with consent, assent, and scope fit—do not launch intensive services first and fix later.",
    },
    {
      sample_stimulus: "BCBA asked to implement aversive plan with no oversight safeguards.",
      comparison_options: [
        "Refuse coercive plan without safeguards; propose ethical alternatives",
        "Implement quietly for one week to 'see if it works'",
        "Hide side-effect data so the plan looks successful",
        "Delegate the aversive component to an untrained technician",
      ],
      correct_match: "Refuse coercive plan without safeguards; propose ethical alternatives",
      error_feedback:
        "Coercive or restrictive plans require safeguards and oversight—refuse quiet implementation and propose ethical alternatives.",
    },
    {
      sample_stimulus: "Cherry-picked sessions submitted to insurer; omitted failed probes.",
      comparison_options: [
        "Domain E + C—fraudulent selective reporting; refuse and document",
        "Acceptable marketing of best outcomes",
        "Domain F graphing preference only",
        "Required packaging for maintenance claims",
      ],
      correct_match: "Domain E + C—fraudulent selective reporting; refuse and document",
      error_feedback:
        "Selective omission of failed probes is fraudulent reporting—measurement ethics and code duties both apply.",
    },
    {
      sample_stimulus: "Employer demands silent compliance when ethics code breached.",
      comparison_options: [
        "Escalate through proper reporting channels; document concerns",
        "Comply silently and revisit only if someone is harmed",
        "Post accusations on social media without using agency process",
        "Destroy notes that could evidence the concern",
      ],
      correct_match: "Escalate through proper reporting channels; document concerns",
      error_feedback:
        "Reporting obligations require documented escalation through proper channels—not silent compliance or public rants.",
    },
    {
      sample_stimulus:
        "Agency adds ten new behavior-technician hires without adding BCBA supervisors; caseload doubles overnight.",
      comparison_options: [
        "Refuse the ratio; document the concern; request added supervision or reduced caseload before continuing",
        "Accept quietly; supervision quality is not your problem",
        "Copy the supervision log from last month and rebill",
        "Delegate all supervision decisions to the most senior BT",
      ],
      correct_match:
        "Refuse the ratio; document the concern; request added supervision or reduced caseload before continuing",
      error_feedback:
        "Caseloads that make competent supervision impossible are themselves an ethics problem—refuse, document, and escalate.",
    },
    {
      sample_stimulus:
        "Marketing draft says '95% of our clients recover from autism' with no dataset attached.",
      comparison_options: [
        "Rewrite in scope-aligned language; require dataset, denominator, and honest definition before publication",
        "Approve because it will help recruit families",
        "Add a small disclaimer at the bottom and publish",
        "Delete outcome data internally so the claim cannot be checked",
      ],
      correct_match:
        "Rewrite in scope-aligned language; require dataset, denominator, and honest definition before publication",
      error_feedback:
        "'Recovered/cured' language and unqualified outcome claims are code violations—require evidence, denominators, and honest framing.",
    },
    {
      sample_stimulus:
        "Parent offers weekly home-cooked meals in lieu of a copay because family is struggling to pay.",
      comparison_options: [
        "Decline the barter; document the request; connect family with financial or sliding-scale resources",
        "Accept quietly since it helps everyone",
        "Accept and reduce services by an equivalent 'fee'",
        "Ignore the offer and hope the copay eventually clears",
      ],
      correct_match:
        "Decline the barter; document the request; connect family with financial or sliding-scale resources",
      error_feedback:
        "Bartering creates a multiple-relationship risk—decline, document, and route financial hardship through proper channels.",
    },
    {
      sample_stimulus:
        "Funding will end in 60 days; BCBA has not discussed transition, referral options, or continuity supports with the family.",
      comparison_options: [
        "Begin termination planning now: notify the family, identify referrals, and transfer records with consent",
        "Wait until the last session and send a template letter",
        "Stop returning the family's calls to avoid the awkward conversation",
        "Extend services quietly by billing another payer without disclosure",
      ],
      correct_match:
        "Begin termination planning now: notify the family, identify referrals, and transfer records with consent",
      error_feedback:
        "Termination is an ethics event—plan continuity supports and referrals in advance to avoid abandonment.",
    },
    {
      sample_stimulus:
        "Teen client consistently blocks task materials and leaves the area during intensive drill blocks.",
      comparison_options: [
        "Treat as assent-withdrawal data; review MO, reinforcer fit, session length, and program design",
        "Increase demand density to push through noncompliance",
        "Add a punishment component to reduce leaving",
        "Ignore behavioral refusal because guardians already signed consent",
      ],
      correct_match:
        "Treat as assent-withdrawal data; review MO, reinforcer fit, session length, and program design",
      error_feedback:
        "Assent is ongoing—behavioral refusal is meaningful data that revises the plan, not defiance to punish.",
    },
    {
      sample_stimulus:
        "Family requests goals rooted in cultural or religious values that differ from clinician's default templates.",
      comparison_options: [
        "Adopt cultural humility: revise goals with family; document rationale; verify social validity across sessions",
        "Insist on the template because it is 'evidence based'",
        "Adopt the requests silently without documenting why goals changed",
        "Refer the family out because the goals are unusual",
      ],
      correct_match:
        "Adopt cultural humility: revise goals with family; document rationale; verify social validity across sessions",
      error_feedback:
        "Cultural humility means examining our assumptions—goals should reflect family values with documented social-validity review.",
    },
  ],
  chainTitle: "Ethics readiness sweep",
  chainFragments: [
    { id: "a", text: "Verify consent quality, ongoing assent, and scope fit before any intensive plan launches." },
    {
      id: "b",
      text: "Confirm supervision ratios and document cultural-humility practices supporting equitable care.",
    },
    {
      id: "c",
      text: "Align measurement, modality labels, and public-statement claims with transparent ethics-code expectations.",
    },
    {
      id: "d",
      text: "Escalate conflicts through proper reporting channels and plan termination/continuity when code duties are threatened.",
    },
  ],
  chainOrder: ["a", "b", "c", "d"],
  safmedTerms: [
    {
      front: "Informed consent",
      back: "Voluntary authorization after understandable disclosure of services, risks, and alternatives.",
    },
    {
      front: "Assent (ongoing)",
      back: "Affirmative agreement checked across sessions; clear refusal is meaningful data.",
    },
    {
      front: "Scope of competence",
      back: "Deliver only services supported by training, supervision, and regulatory permissions.",
    },
    {
      front: "Multiple relationships",
      back: "Role overlaps (gifts, barter, friendship, social media) requiring disclosure and a documented boundary plan.",
    },
    {
      front: "Confidentiality",
      back: "Protect identifiable information per law, payor rules, and code; marketing/training/research requires specific authorization.",
    },
    {
      front: "Supervisory accountability",
      back: "Documented oversight covering time, feedback quality, and equitable access—including refusal of unmanageable ratios.",
    },
    {
      front: "Reporting obligations",
      back: "Escalate harm/misconduct through safe internal channels first; regulator/BACB when internal fails.",
    },
    {
      front: "Cultural humility",
      back: "Ongoing self-examination of assumptions about family goals, communication, and life.",
    },
    {
      front: "Public-statement accountability",
      back: "Marketing/testimonials aligned with actual evidence and scope; no 'cured/recovered' claims.",
    },
    {
      front: "Termination & transition",
      back: "Planned referrals and continuity so no client is abandoned when funding/staff/scope change.",
    },
    {
      front: "Measurement ethics",
      back: "Honest IOA, accurate modality labels, complete session data—cherry-picking is a code breach.",
    },
    {
      front: "Boundary plan",
      back: "Written management of an unavoidable role overlap: transparency, reorganized lines, periodic review.",
    },
  ],
  worksheet: {
    title: "CHH Chapter 31 — ethics and professional responsibilities",
    instructions:
      "Classify ethics duty, boundary response, measurement integrity action, supervision-ratio move, marketing rewrite, termination step, and escalation pathway.",
    scenario: "Scenario A — Employer demands deleting IOA rows before insurer review.",
    scenario_follow_up:
      "Scenario B — Director orders withholding clinically necessary details from multidisciplinary notes for a cleaner PR summary.\n\nScenario C — Agency doubles BT caseload overnight without adding BCBA supervisors.\n\nScenario D — Marketing draft claims '95% of clients recover from autism' with no dataset attached.\n\nScenario E — Funding ends in 60 days; termination has never been discussed with the family.\n\nScenario F — Teen client blocks materials and leaves the area during intensive drill blocks.\n\nScenario G — Family requests goals rooted in cultural or religious values.",
    fields: [
      {
        id: "response_1",
        label: "Scenario A · MOST appropriate response?",
        options: [
          "Refuse falsification; document; lawful reporting pathways",
          "Comply quietly to keep the job",
          "Submit only high-IOA sessions and omit the rest",
        ],
        correct: "Refuse falsification; document; lawful reporting pathways",
      },
      {
        id: "response_2",
        label: "Scenario B · Code-first move?",
        options: [
          "Refuse unlawful omissions; lawful disclosures + documented supervision",
          "Comply so the PR summary looks cleaner",
          "Post a redacted success story publicly without consent",
        ],
        correct: "Refuse unlawful omissions; lawful disclosures + documented supervision",
      },
      {
        id: "response_3",
        label: "Scenario C · Supervision-ratio duty?",
        options: [
          "Refuse the ratio; document; request added supervision or reduced caseload",
          "Accept quietly; supervision quality is someone else's problem",
          "Delegate supervision decisions to the most senior BT",
        ],
        correct: "Refuse the ratio; document; request added supervision or reduced caseload",
      },
      {
        id: "response_4",
        label: "Scenario D · Marketing rewrite?",
        options: [
          "Rewrite in scope-aligned language; require dataset, denominator, honest definition",
          "Approve because it will help recruit families",
          "Add a small disclaimer and publish",
        ],
        correct: "Rewrite in scope-aligned language; require dataset, denominator, honest definition",
      },
      {
        id: "response_5",
        label: "Scenario E · Termination duty?",
        options: [
          "Begin termination planning: notify family; identify referrals; transfer records with consent",
          "Wait until the last session and send a template letter",
          "Stop returning calls to avoid the awkward conversation",
        ],
        correct: "Begin termination planning: notify family; identify referrals; transfer records with consent",
      },
      {
        id: "response_6",
        label: "Scenario F · Assent-withdrawal read?",
        options: [
          "Treat as assent-withdrawal data; review MO, reinforcer fit, session length, program design",
          "Increase demand density to push through noncompliance",
          "Add a punishment component to reduce leaving",
        ],
        correct: "Treat as assent-withdrawal data; review MO, reinforcer fit, session length, program design",
      },
      {
        id: "response_7",
        label: "Scenario G · Cultural humility?",
        options: [
          "Revise goals with family; document rationale; verify social validity across sessions",
          "Insist on the template because it is 'evidence based'",
          "Refer the family out because the goals are unusual",
        ],
        correct: "Revise goals with family; document rationale; verify social validity across sessions",
      },
      {
        id: "response_8",
        label: "Ethical BCBA practice prioritizes:",
        options: [
          "Code alignment, honest data, boundaries, accountable supervision, continuity planning",
          "Billing volume over IOA",
          "Silent compliance with unlawful orders",
        ],
        correct: "Code alignment, honest data, boundaries, accountable supervision, continuity planning",
      },
    ],
    remediationLog:
      "Rebuild Chapter 31 fluency: consent quality? → assent monitoring? → scope discipline? → boundary plan? → measurement/modality honesty? → supervision ratio? → marketing accountability? → termination continuity? → reporting pathway?",
  },
  bdsBank: CHAPTER_31_ETHICS_QUIZ_BANK,
};
