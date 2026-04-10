import { notFound } from "next/navigation";
import { getProgramBySlug, programs } from "@/data/programs";
import { ProgramDetailPage } from "../program-detail-page";

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailPage program={program} />;
}
