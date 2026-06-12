import { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";

interface PolicyHeroProps {
  /** Small uppercase label shown in the chip. */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Brand icon used in the chip and as a faint watermark. */
  icon?: LucideIcon;
  /** Optional "Last updated" stamp (e.g. "June 2026"). */
  updated?: string;
  /** Current-page label for the breadcrumb (defaults to eyebrow). */
  breadcrumb?: string;
  /** Optional actions (e.g. a download button). */
  children?: ReactNode;
}

/**
 * Corporate, image-less hero for the policy / information pages
 * (Privacy, Terms, Cookies, GDPR, FAQs). Deep-green brand gradient with a
 * subtle dot grid and a faded watermark icon — no stock photography.
 */
export function PolicyHero({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  updated,
  breadcrumb,
  children,
}: PolicyHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#16291E]">
      {/* Gradient base */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0B1410 0%, #16291E 55%, #0B1410 100%)" }}
      />
      {/* Radial brand glow */}
      <div
        className="absolute -top-32 right-[-12%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(62,143,94,0.22), transparent 70%)" }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Faded watermark icon */}
      {Icon && (
        <Icon
          aria-hidden="true"
          className="absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 w-[210px] h-[210px] lg:w-[320px] lg:h-[320px] text-white opacity-[0.045] pointer-events-none"
          strokeWidth={0.9}
        />
      )}

      <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20 py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/45 mb-6">
            <Link href="/" className="hover:text-[#8FD3AE] transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-white/75">{breadcrumb ?? eyebrow}</span>
          </nav>

          {/* Eyebrow chip */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3E8F5E]/40 bg-[#3E8F5E]/10 px-4 py-1.5 mb-5 backdrop-blur-sm">
              {Icon && <Icon className="w-4 h-4 text-[#8FD3AE]" strokeWidth={1.8} aria-hidden="true" />}
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8FD3AE]">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.12] tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* Last updated */}
          {updated && (
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/55">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E8F5E]" aria-hidden="true" />
              Last updated: {updated}
            </p>
          )}

          {/* Actions */}
          {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
        </div>
      </div>

      {/* Bottom brand accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2F7549] via-[#3E8F5E] to-[#2F7549]" />
    </section>
  );
}
