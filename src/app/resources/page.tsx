import Link from "next/link";

/**
 * Companion official BACB / public resources.
 * Links point to publicly published PDFs/pages — verify current URLs at bacb.com.
 */

const RESOURCES = [
  {
    group: "BACB credentialing",
    items: [
      {
        title: "BACB BCBA Handbook",
        href: "https://www.bacb.com/bcba/",
        note: "Eligibility, fieldwork, exam, and maintenance requirements. Verify the current PDF on bacb.com.",
      },
      {
        title: "BCBA Test Content Outline (6th ed.)",
        href: "https://www.bacb.com/bcba/",
        note: "Domain weights A–I for exam blueprinting. Always use the currently published TCO.",
      },
      {
        title: "Ethics Code for Behavior Analysts",
        href: "https://www.bacb.com/ethics-information/",
        note: "Authoritative wording for Sections 1–6. Cross-reference workbook mod32 + mod42.",
      },
      {
        title: "RBT Handbook",
        href: "https://www.bacb.com/rbt/",
        note: "RBT scope, supervision ratios, and competency assessment context for Domain I items.",
      },
      {
        title: "Supervisor training & fieldwork resources",
        href: "https://www.bacb.com/supervision-and-training/",
        note: "Supervisor curriculum and fieldwork documentation expectations.",
      },
    ],
  },
  {
    group: "In this workbook",
    items: [
      {
        title: "Domain I — Supervision module",
        href: "/module/mod37/",
        note: "BST, PIC/NIC, RBT oversight, fieldwork, ethical supervision.",
      },
      {
        title: "Domain H — Intervention selection module",
        href: "/module/mod38/",
        note: "Social validity, function-matching, integrity, assent.",
      },
      {
        title: "Ethics Code navigator",
        href: "/module/mod42/",
        note: "Section-by-section map of common Ethics Code violations.",
      },
      {
        title: "Test-taking strategy",
        href: "/module/mod39/",
        note: "MOST/NEXT/EXCEPT parsing, time budget, elimination.",
      },
      {
        title: "Study schedule generator",
        href: "/schedule/",
        note: "Weeks-to-exam × domain weights × mock cadence.",
      },
    ],
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-4 py-16">
      <header className="space-y-4 border border-aba-divider bg-aba-depth px-8 py-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-aba-muted">
          Companion resources
        </p>
        <h1 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold leading-tight">
          Official links &amp; workbook anchors
        </h1>
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-aba-muted">
          This workbook is independent study material and is not affiliated with the BACB. Always verify
          requirements against currently published BACB documents — handbooks and the TCO update over time.
        </p>
      </header>

      {RESOURCES.map((section) => (
        <section key={section.group} className="space-y-4">
          <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
            {section.group}
          </h2>
          <ul className="flex flex-col gap-px border border-aba-divider">
            {section.items.map((item) => (
              <li key={item.title} className="border-b border-aba-divider last:border-b-0">
                <a
                  href={item.href}
                  {...(item.href.startsWith("http") ?
                    { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                  className="group flex flex-col gap-2 bg-black/35 px-5 py-6 transition-colors hover:bg-black/55"
                >
                  <span className="text-[1.05rem] font-semibold text-aba-fg group-hover:underline decoration-aba-muted underline-offset-[6px]">
                    {item.title}
                  </span>
                  <span className="text-[0.88rem] leading-relaxed text-aba-muted">{item.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <footer className="flex flex-wrap gap-4 border-t border-aba-divider pt-6 text-[0.75rem] text-aba-muted">
        <Link href="/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          ← Home
        </Link>
        <Link href="/mock-exams/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          Mock exams
        </Link>
        <Link href="/schedule/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          Study schedule
        </Link>
      </footer>
    </div>
  );
}
