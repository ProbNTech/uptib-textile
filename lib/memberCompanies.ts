// Adapter: real verified UPTIB members → DirectoryCompany shape.
//
// This is the source feeding the Pakistan-Top-Companies directory and the
// homepage showcase. Add new entries in data/members.ts and they appear here
// automatically.

import { members, type Member } from "@/data/members";
import type { CompanyCategory, DirectoryCompany } from "@/data/companies";

/**
 * Per-member category is set explicitly in data/members.ts to reflect what
 * each company actually does. When omitted, we fall back to a heuristic so
 * adding a new member doesn't crash the page if the editor forgets the field.
 */
function pickCategory(m: Member): CompanyCategory {
  if (m.category) return m.category;
  const sectors = m.sectors.map((s) => s.toLowerCase());
  const tech = m.technologies.map((t) => t.toLowerCase());
  if (sectors.includes("cybersecurity")) return "Cybersecurity";
  if (tech.includes("cloud & devops")) return "Cloud";
  if (
    tech.includes("ai & machine learning") ||
    sectors.includes("artificial intelligence")
  )
    return "AI & Automation";
  if (tech.includes("custom software") || tech.includes("mobile development"))
    return "Software Development";
  return "Consulting";
}

function deriveCountry(location: string): string {
  const parts = location.split(",").map((p) => p.trim());
  return parts[parts.length - 1] || location;
}

/** Compact, card-friendly service list: dedup of sectors + technologies. */
function buildServices(m: Member): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const t of [...m.technologies, ...m.sectors]) {
    if (!seen.has(t)) {
      seen.add(t);
      out.push(t);
    }
  }
  return out;
}

export function memberToDirectoryCompany(m: Member): DirectoryCompany {
  return {
    id: `member-${m.slug}`,
    slug: m.slug,
    name: m.name,
    category: pickCategory(m),
    services: buildServices(m),
    location: m.location,
    country: deriveCountry(m.location),
    description: m.description,
    logoUrl: m.logo,
    websiteUrl: m.website,
    source: "Member",
    verified: true,
    // rating / reviewCount intentionally omitted — verified members aren't
    // graded by external review counts.
  };
}

/** All real UPTIB members, adapted to the directory shape. */
export const memberCompanies: DirectoryCompany[] = members.map(memberToDirectoryCompany);

/**
 * Drives /pakistan-top-companies and the homepage showcase. Includes every
 * verified UPTIB member — including UK-based ones like Aulysius — because the
 * page positions UPTIB's whole roster as part of Pakistan's tech corridor.
 */
export const pakistaniMemberCompanies: DirectoryCompany[] = memberCompanies;

/** Members the editorial team has pinned as featured in data/members.ts. */
export const featuredMemberCompanies: DirectoryCompany[] = members
  .filter((m) => m.featured)
  .map(memberToDirectoryCompany);
