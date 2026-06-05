import { Award, Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import type { ProductFacts } from "@/types";

const rows = [
  { key: "strength", label: "Pakistan's strength", icon: Award },
  { key: "ukDemand", label: "UK demand", icon: Globe2 },
  { key: "marketSize", label: "Market size", icon: TrendingUp },
  { key: "certifications", label: "Certifications", icon: ShieldCheck },
] as const;

export function FactsBox({ facts }: { facts: ProductFacts }) {
  return (
    <dl className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      {rows.map(({ key, label, icon: Icon }, i) => (
        <div
          key={key}
          className={`grid gap-2 p-5 sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-6 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <dt className="flex items-center gap-2.5 font-semibold text-primary-dark">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-4" aria-hidden />
            </span>
            {label}
          </dt>
          <dd className="text-body">{facts[key]}</dd>
        </div>
      ))}
    </dl>
  );
}
