import { Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { partnerOrganizations } from "@/data/organizations";

/**
 * Trust band of partner trade organisations. Rendered as a tidy "logo wall"
 * using names + a mark; swap in real logos under /public/assets/images later.
 */
export function OrgBanner() {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="py-12 sm:py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Working alongside leading trade organisations
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {partnerOrganizations.map((org) => (
            <li
              key={org}
              className="flex min-h-[104px] flex-col items-center justify-center gap-2 bg-white p-5 text-center transition-colors hover:bg-surface"
            >
              <Building2 className="size-6 text-primary/60" aria-hidden />
              <span className="text-xs font-semibold leading-snug text-primary-dark">
                {org}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-muted">
          Representative organisations — partner logos to be added.
        </p>
      </Container>
    </section>
  );
}
