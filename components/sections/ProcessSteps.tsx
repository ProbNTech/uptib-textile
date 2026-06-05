import type { ProcessStep } from "@/types";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative space-y-6">
      {steps.map((step, i) => (
        <li key={step.step} className="relative flex gap-5">
          {/* Connector line */}
          {i < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute left-5 top-12 h-[calc(100%-1rem)] w-px bg-line"
            />
          ) : null}
          <span className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-white">
            {step.step}
          </span>
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:flex-1">
            <h3 className="font-semibold text-primary-dark">{step.title}</h3>
            <p className="mt-1 text-body">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
