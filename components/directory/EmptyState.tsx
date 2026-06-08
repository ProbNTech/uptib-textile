import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  resetLabel?: string;
}

export function EmptyState({
  title = "No companies match your filters",
  description = "Try clearing one of the filters or searching with a different term.",
  onReset,
  resetLabel = "Clear all filters",
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl bg-white border border-dashed border-[#CBD5E1] p-10 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F1F5F9] text-[#047857]">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="font-heading font-bold text-[#064E3B] text-lg mb-2">{title}</h3>
      <p className="text-sm text-[#475569] mb-5 max-w-md mx-auto">{description}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full bg-[#047857] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#065F46] transition-colors"
        >
          {resetLabel}
        </button>
      )}
    </div>
  );
}
