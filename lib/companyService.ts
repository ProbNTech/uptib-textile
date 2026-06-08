// Company directory service layer.
//
// Today this reads from the static mock file. When a real source (Clutch
// sync, internal DB, or third-party API) is available, swap the bodies of
// `getTopAICompanies`, `getTopITCompanies`, and `getAllITCompanies` to call
// the new source. The public function signatures and return shapes are
// intentionally stable so pages and components don't change.
//
// Replacement sketch:
//   export async function getTopAICompanies() {
//     const res = await fetch(`${process.env.DIRECTORY_API}/ai/top`, {
//       headers: { authorization: `Bearer ${process.env.DIRECTORY_API_KEY}` },
//       next: { revalidate: 3600 },
//     });
//     return (await res.json()) as DirectoryCompany[];
//   }

import {
  companies,
  IT_CATEGORIES,
  type CompanyCategory,
  type DirectoryCompany,
} from "@/data/companies";
import { pakistaniMemberCompanies, featuredMemberCompanies } from "@/lib/memberCompanies";

export type SortKey = "rating" | "reviews" | "name";

export interface CompanyFilters {
  search?: string;
  country?: string;
  service?: string;
  category?: CompanyCategory | "";
  minRating?: number;
}

const TOP_LIMIT = 12;

/** AI + every IT-adjacent category. Used by /pakistan-top-companies. */
export const PAKISTAN_TOP_CATEGORIES: CompanyCategory[] = ["AI", ...IT_CATEGORIES];

/**
 * Real verified UPTIB members based in Pakistan. Source is `data/members.ts`
 * via the `lib/memberCompanies.ts` adapter. Adding a new member there
 * automatically surfaces here.
 */
export async function getAllPakistanTopCompanies(): Promise<DirectoryCompany[]> {
  return [...pakistaniMemberCompanies].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Members editorially pinned via `featured: true` in data/members.ts.
 * `limit` is honored but the curator's pick comes first — today only Prob N Tech.
 */
export async function getTopPakistanCompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  return featuredMemberCompanies.slice(0, limit);
}

function byRatingThenReviews(a: DirectoryCompany, b: DirectoryCompany) {
  const ar = a.rating ?? -1;
  const br = b.rating ?? -1;
  if (br !== ar) return br - ar;
  const arc = a.reviewCount ?? 0;
  const brc = b.reviewCount ?? 0;
  return brc - arc;
}

export async function getTopAICompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => c.category === "AI")
    .sort(byRatingThenReviews)
    .slice(0, limit);
}

export async function getTopITCompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => IT_CATEGORIES.includes(c.category))
    .sort(byRatingThenReviews)
    .slice(0, limit);
}

export async function getAllITCompanies(): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => IT_CATEGORIES.includes(c.category))
    .sort(byRatingThenReviews);
}

export async function getAllAICompanies(): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => c.category === "AI")
    .sort(byRatingThenReviews);
}

export function filterCompanies(
  list: DirectoryCompany[],
  filters: CompanyFilters,
): DirectoryCompany[] {
  const query = filters.search?.trim().toLowerCase() ?? "";
  return list.filter((c) => {
    if (query) {
      const haystack = `${c.name} ${c.description} ${c.services.join(" ")} ${c.location}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    if (filters.country && c.country !== filters.country) return false;
    if (filters.service && !c.services.includes(filters.service)) return false;
    if (filters.category && c.category !== filters.category) return false;
    if (typeof filters.minRating === "number" && filters.minRating > 0) {
      if (typeof c.rating !== "number" || c.rating < filters.minRating) return false;
    }
    return true;
  });
}

export function sortCompanies(list: DirectoryCompany[], key: SortKey): DirectoryCompany[] {
  const copy = [...list];
  switch (key) {
    case "rating":
      return copy.sort(byRatingThenReviews);
    case "reviews":
      return copy.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
    case "name":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
  }
}

/** Distinct facet helpers for filter UI dropdowns. */
export function getCountryOptions(list: DirectoryCompany[]): string[] {
  return Array.from(new Set(list.map((c) => c.country))).sort();
}

export function getServiceOptions(list: DirectoryCompany[]): string[] {
  return Array.from(new Set(list.flatMap((c) => c.services))).sort();
}

export function getCategoryOptions(list: DirectoryCompany[]): CompanyCategory[] {
  return Array.from(new Set(list.map((c) => c.category))).sort() as CompanyCategory[];
}
