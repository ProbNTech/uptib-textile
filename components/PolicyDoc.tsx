import { ReactNode } from "react";

/**
 * Clean, document-style layout for policy / information pages.
 * No cards, no colour-block headers — just a readable measure, a quiet
 * sticky contents rail, and hairline dividers between sections.
 */
export function PolicyDoc({
  toc,
  children,
}: {
  toc?: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div
          className={
            toc
              ? "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20"
              : "mx-auto max-w-3xl"
          }
        >
          {toc && (
            <aside className="hidden lg:block">
              <nav className="sticky top-28">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9AA0AC]">
                  On this page
                </p>
                <ul className="space-y-0.5 border-l border-[#E7E7E2]">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[13.5px] leading-snug text-[#5A5F72] transition-colors duration-150 hover:border-[#2F7549] hover:text-[#16291E]"
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}

          <div className="min-w-0 [&>section+section]:mt-16 [&>section+section]:border-t [&>section+section]:border-[#ECECE6] [&>section+section]:pt-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/** A single document section: quiet green eyebrow + plain heading, then prose. */
export function PolicySection({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <header className="mb-6">
        {eyebrow && (
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2F7549]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-[1.6rem] sm:text-[1.95rem] font-bold leading-[1.2] text-[#16291E]">
          {title}
        </h2>
      </header>
      <div className="space-y-4 text-[15.5px] leading-[1.85] text-[#4B5563]">
        {children}
      </div>
    </section>
  );
}

/** A sub-heading within a section (e.g. "Information You Give Us Directly"). */
export function PolicySub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-heading text-[1.05rem] font-semibold text-[#16291E]">{title}</h3>
      {children}
    </div>
  );
}

/** A clean bulleted list with small brand-green markers. */
export function PolicyList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.7em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3E8F5E]" aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
