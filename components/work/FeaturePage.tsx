import Image from "next/image";
import Link from "next/link";
import { trackRecordData, type TrackRecordEntry } from "@/data/track-record";

export default function FeaturePage({ entry }: { entry: TrackRecordEntry }) {
  const images = entry.images ?? [];
  const heroImage = images[0];
  const inlineAfterOverview = images[1];
  const inlineAfterApproach = images[2];
  const extraImages = images.slice(3);

  const slugged = trackRecordData.filter((e) => !!e.slug);
  const idx = slugged.findIndex((e) => e.slug === entry.slug);
  const prevEntry =
    idx >= 0 ? slugged[(idx - 1 + slugged.length) % slugged.length] : null;
  const nextEntry =
    idx >= 0 ? slugged[(idx + 1) % slugged.length] : null;

  const docsHref = entry.links?.docs;

  return (
    <article>
      {heroImage && (
        <div className="relative w-full aspect-[16/10] mb-10 overflow-hidden rounded-lg bg-[#EFEDE8] ring-1 ring-[#E8E5DE]">
          <Image
            src={heroImage}
            alt={entry.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
            priority
          />
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mb-10 pb-8 border-b border-[#ECE9E2]">
        <MetaField label="Year" value={String(entry.year)} />
        <MetaField label="Type" value={entry.type} />
        {entry.company && (
          <MetaField label="Company" value={entry.company} />
        )}
        {docsHref && (
          <MetaField label="Docs" value="View docs" href={docsHref} arrow />
        )}
      </div>

      <h1 className="text-[30px] md:text-[36px] leading-[1.1] font-normal tracking-tight text-[#1A1A1A] mb-5">
        {entry.title}
      </h1>

      {entry.description && (
        <p className="text-[17px] leading-[1.7] text-[#2A2826] mb-16">
          {entry.description}
        </p>
      )}

      {entry.details?.what && (
        <Section label="Overview" image={inlineAfterOverview} alt={entry.title}>
          {entry.details.what}
        </Section>
      )}

      {entry.details?.how && (
        <Section label="Approach" image={inlineAfterApproach} alt={entry.title}>
          {entry.details.how}
        </Section>
      )}

      {entry.details?.impact && (
        <Section label="Outcome">{entry.details.impact}</Section>
      )}

      {extraImages.length > 0 && (
        <div className="space-y-6 mb-16">
          {extraImages.map((src, i) => (
            <div
              key={src}
              className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-[#EFEDE8] ring-1 ring-[#E8E5DE]"
            >
              <Image
                src={src}
                alt={`${entry.title} screenshot ${i + 4}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          ))}
        </div>
      )}

      {(prevEntry || nextEntry) && (
        <nav className="mt-4 pt-10 border-t border-[#ECE9E2] grid grid-cols-2 gap-6">
          {prevEntry ? (
            <Link href={`/work/${prevEntry.slug}`} className="group block">
              <div className="font-mono-tabular text-[10.5px] uppercase tracking-[0.14em] text-[#9A968F] mb-1.5 flex items-center gap-2">
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">
                  ←
                </span>
                <span>Previous</span>
              </div>
              <div className="text-[15px] text-[#1A1A1A] group-hover:underline underline-offset-4 decoration-1">
                {prevEntry.title}
              </div>
            </Link>
          ) : (
            <span />
          )}

          {nextEntry ? (
            <Link
              href={`/work/${nextEntry.slug}`}
              className="group block text-right"
            >
              <div className="font-mono-tabular text-[10.5px] uppercase tracking-[0.14em] text-[#9A968F] mb-1.5 flex items-center justify-end gap-2">
                <span>Next</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </div>
              <div className="text-[15px] text-[#1A1A1A] group-hover:underline underline-offset-4 decoration-1">
                {nextEntry.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  );
}

function MetaField({
  label,
  value,
  href,
  arrow,
}: {
  label: string;
  value: string;
  href?: string;
  arrow?: boolean;
}) {
  const content = (
    <>
      <div className="font-mono-tabular text-[10.5px] uppercase tracking-[0.14em] text-[#9A968F] mb-1">
        {label}
      </div>
      <div className="text-[14px] text-[#1A1A1A] inline-flex items-center gap-1">
        <span className={href ? "link-reveal" : ""}>{value}</span>
        {arrow && (
          <span className="text-[#9A968F] arrow-nudge inline-block">↗</span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

function Section({
  label,
  image,
  alt,
  children,
}: {
  label: string;
  image?: string;
  alt?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <h2 className="mb-3 text-[18px] font-normal tracking-tight text-[#1A1A1A]">
        {label}
      </h2>
      <p className="text-[16px] leading-[1.72] text-[#2A2826]">{children}</p>
      {image && (
        <div className="relative w-full aspect-[16/10] mt-8 overflow-hidden rounded-lg bg-[#EFEDE8] ring-1 ring-[#E8E5DE]">
          <Image
            src={image}
            alt={alt ?? label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      )}
    </section>
  );
}
