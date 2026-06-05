/**
 * Tiny className combiner — joins truthy class fragments with a space.
 * Avoids pulling in clsx/tailwind-merge for a small site while keeping
 * the ergonomic `cn(...)` call sites.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** Build an internal URL with query params, dropping empty values. */
export function withQuery(
  path: string,
  params: Record<string, string | undefined>,
): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) search.set(key, value);
  }
  const qs = search.toString();
  return qs ? `${path}?${qs}` : path;
}
