import { ListChecks, Compass, AlertTriangle } from "lucide-react";

interface DirectorySEOContentProps {
  subject: string;
}

export function DirectorySEOContent({ subject }: DirectorySEOContentProps) {
  return (
    <section
      className="py-16 lg:py-20 bg-white"
      aria-labelledby="directory-seo-title"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl">
          <h2
            id="directory-seo-title"
            className="font-heading font-extrabold text-[#064E3B] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
          >
            About this {subject} directory
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            A working reference for buyers, partners, and recruiters comparing
            {" "}{subject.toLowerCase()} across the UK, Europe, and Pakistan — designed to
            make shortlisting and outreach faster.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <article className="rounded-2xl bg-white border border-[#E5E7EB] p-6 hover:border-[#047857]/30 hover:shadow-[0_8px_24px_-12px_rgba(4,120,87,0.18)] transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#D1FAE5] text-[#065F46] mb-4">
              <ListChecks className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-[#064E3B] text-lg mb-2">
              How we rank companies
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Listings are ordered primarily by aggregate rating, then by verified
              review count — so consistently well-rated firms with meaningful
              evidence base appear first. Verification status is shown on each card.
            </p>
          </article>

          <article className="rounded-2xl bg-white border border-[#E5E7EB] p-6 hover:border-[#047857]/30 hover:shadow-[0_8px_24px_-12px_rgba(4,120,87,0.18)] transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#CFFAFE] text-[#0E7490] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-[#064E3B] text-lg mb-2">
              Why use this directory
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Compare {subject.toLowerCase()} side-by-side — services, location, rating,
              and review volume — without bouncing between tabs. Useful when
              building a shortlist for procurement, partnerships, or hiring.
            </p>
          </article>

          <article className="rounded-2xl bg-white border border-[#E5E7EB] p-6 hover:border-[#047857]/30 hover:shadow-[0_8px_24px_-12px_rgba(4,120,87,0.18)] transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] mb-4">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-[#064E3B] text-lg mb-2">
              Important disclaimer
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Ratings, reviews, and company descriptions are aggregated from third-
              party sources for convenience only. Verify each listing on the
              original source before making procurement decisions or commitments.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
