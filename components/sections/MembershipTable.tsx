import { Check } from "lucide-react";
import type { MembershipTier } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function MembershipTable({ tiers }: { tiers: MembershipTier[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.tier}
          className={cn(
            "flex flex-col rounded-2xl border bg-white p-6 shadow-card",
            tier.featured
              ? "border-primary ring-1 ring-primary"
              : "border-line",
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-semibold text-primary-dark">
              {tier.tier}
            </h3>
            {tier.featured ? <Badge tone="red">Most popular</Badge> : null}
          </div>
          <p className="mt-1 text-sm font-medium text-muted">{tier.price}</p>
          <ul className="mt-5 flex-1 space-y-2.5">
            {tier.includes.split(" · ").map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-sm text-body"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-tertiary"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-lg bg-surface px-3 py-2 text-sm text-muted">
            <span className="font-semibold text-primary-dark">Best for:</span>{" "}
            {tier.bestFor}
          </p>
          <Button
            href="/contact?topic=sell&service=marketing-sales"
            className="mt-5 w-full"
            variant={tier.featured ? "primary" : "outline"}
          >
            Become a member
          </Button>
        </div>
      ))}
    </div>
  );
}
