import { whyUptib } from "@/data/stats";
import { getIcon } from "@/lib/icons";

export function WhyUptib() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUptib.map((item) => {
        const Icon = getIcon(item.icon);
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-line bg-white p-6 shadow-card"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="size-6" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-primary-dark">
              {item.title}
            </h3>
            <p className="mt-2 text-body">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
