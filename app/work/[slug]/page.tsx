import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { trackRecordData } from "@/data/track-record";
import WorkPageLayout from "@/components/work/WorkPageLayout";
import FeaturePage from "@/components/work/FeaturePage";
import AIChatbotCaseStudy from "@/components/work/studies/AIChatbotCaseStudy";

// Map slugs to custom case study components (rich Template A).
// Entries with a slug not in this map fall through to Template B (FeaturePage).
const CUSTOM_STUDIES: Record<string, React.ComponentType> = {
  "ai-chatbot": AIChatbotCaseStudy,
};

export async function generateStaticParams() {
  return trackRecordData
    .filter((entry) => !!entry.slug)
    .map((entry) => ({ slug: entry.slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = trackRecordData.find((e) => e.slug === slug);
  if (!entry) return {};

  return {
    title: `${entry.title} — Mohammed Afsar`,
    description: entry.description,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = trackRecordData.find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  const CustomStudy = CUSTOM_STUDIES[slug];

  return (
    <WorkPageLayout>
      {CustomStudy ? <CustomStudy /> : <FeaturePage entry={entry} />}
    </WorkPageLayout>
  );
}
