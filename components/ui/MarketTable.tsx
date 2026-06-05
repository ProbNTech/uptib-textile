import type { MarketRow } from "@/types";

/** Compact figures grid for market data (products + services). */
export function MarketTable({ rows }: { rows: MarketRow[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
      {rows.map((row) => (
        <div key={row.label} className="bg-white p-5">
          <dt className="text-2xl font-bold tracking-tight text-primary">
            {row.value}
          </dt>
          <dd className="mt-1 text-sm text-muted">{row.label}</dd>
        </div>
      ))}
    </dl>
  );
}
