import { MapPin, Factory } from "lucide-react";
import type { Company } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { withQuery } from "@/lib/utils";

export function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-primary-dark">
            {company.name}
          </h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3.5" aria-hidden />
              {company.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Factory className="size-3.5" aria-hidden />
              {company.type}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {company.categories.map((cat) => (
          <Badge key={cat} tone="blue">
            {cat}
          </Badge>
        ))}
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        <div>
          <dt className="font-semibold text-primary-dark">Key products</dt>
          <dd className="text-body">{company.keyProducts.join(", ")}</dd>
        </div>
        {company.certifications.length > 0 ? (
          <div>
            <dt className="font-semibold text-primary-dark">Certifications</dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {company.certifications.map((cert) => (
                <Badge key={cert} tone="green">
                  {cert}
                </Badge>
              ))}
            </dd>
          </div>
        ) : null}
        {company.moq ? (
          <div className="flex gap-2">
            <dt className="font-semibold text-primary-dark">MOQ / lead:</dt>
            <dd className="text-body">
              {company.moq}
              {company.lead ? ` · ${company.lead}` : ""}
            </dd>
          </div>
        ) : null}
        {company.markets ? (
          <div className="flex gap-2">
            <dt className="font-semibold text-primary-dark">Markets:</dt>
            <dd className="text-body">{company.markets}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-auto pt-5">
        <Button
          href={withQuery("/contact", {
            topic: "intro",
            company: company.name,
          })}
          variant="outline"
          className="w-full"
          withArrow
        >
          Request introduction
        </Button>
        {company.note ? (
          <p className="mt-2 text-center text-xs text-muted">{company.note}</p>
        ) : null}
      </div>
    </article>
  );
}
