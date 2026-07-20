import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MockExamRunner } from "@/components/mockExam/MockExamRunner";
import { getMockExam, getMockExamSlugs } from "@/content/mockExam";

type PageProps = {
  params: Promise<{ examId: string }>;
};

export async function generateStaticParams() {
  return getMockExamSlugs().map((examId) => ({ examId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { examId } = await params;
  const exam = getMockExam(examId);
  if (!exam) return { title: "Mock Exam | BCBA Interactive Study Workbook" };
  return {
    title: `${exam.title} | BCBA Interactive Study Workbook`,
    description: exam.description,
  };
}

export default async function MockExamByIdPage({ params }: PageProps) {
  const { examId } = await params;
  const exam = getMockExam(examId);
  if (!exam) notFound();

  return (
    <>
      <MockExamRunner
        moduleId={exam.moduleId}
        questions={exam.questions}
        intro={{
          title: exam.title,
          itemCount: exam.itemCount,
          timeLimitSeconds: exam.timeLimitSeconds,
          description: exam.description,
        }}
      />
      <div className="mx-auto max-w-3xl pb-8">
        <Link
          prefetch={false}
          href="/mock-exams"
          className="inline-flex rounded border border-aba-divider px-4 py-2 text-[0.78rem] uppercase tracking-[0.16em] text-aba-muted hover:border-aba-muted hover:text-aba-fg"
        >
          ← All mock exams
        </Link>
      </div>
    </>
  );
}
