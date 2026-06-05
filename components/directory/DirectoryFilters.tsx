import { cn } from "@/lib/utils";

type FilterGroupProps<T extends string> = {
  legend: string;
  options: readonly T[];
  selected: T[];
  onToggle: (value: T) => void;
};

function FilterGroup<T extends string>({
  legend,
  options,
  selected,
  onToggle,
}: FilterGroupProps<T>) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-primary-dark">
        {legend}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onToggle(option)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-white text-body hover:border-primary/40 hover:text-primary",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export type DirectoryFiltersProps<
  C extends string,
  L extends string,
  X extends string,
> = {
  categories: {
    options: readonly C[];
    selected: C[];
    onToggle: (v: C) => void;
  };
  locations: { options: readonly L[]; selected: L[]; onToggle: (v: L) => void };
  certifications: {
    options: readonly X[];
    selected: X[];
    onToggle: (v: X) => void;
  };
  onClear: () => void;
  hasFilters: boolean;
  resultCount: number;
};

export function DirectoryFilters<
  C extends string,
  L extends string,
  X extends string,
>({
  categories,
  locations,
  certifications,
  onClear,
  hasFilters,
  resultCount,
}: DirectoryFiltersProps<C, L, X>) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">
          <span className="font-semibold text-primary-dark">{resultCount}</span>{" "}
          {resultCount === 1 ? "company" : "companies"}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="mt-5 grid gap-6">
        <FilterGroup
          legend="By product"
          options={categories.options}
          selected={categories.selected}
          onToggle={categories.onToggle}
        />
        <FilterGroup
          legend="By location"
          options={locations.options}
          selected={locations.selected}
          onToggle={locations.onToggle}
        />
        <FilterGroup
          legend="By certification"
          options={certifications.options}
          selected={certifications.selected}
          onToggle={certifications.onToggle}
        />
      </div>
    </div>
  );
}
