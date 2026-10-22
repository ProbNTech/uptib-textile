import type { BrochureSlug } from "@/data/brochures";

/* Who unlocked the catalogues on this device, so later downloads are one
   click. Every storage call is guarded: private windows and blocked site data
   make localStorage throw or come back empty, and the form simply shows again. */

export type BrochureLead = { name: string; email: string; company: string };

const KEY = "ptgp.brochureLead.v1";
const MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

export function loadLead(): BrochureLead | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const { name, email, company, savedAt } = JSON.parse(raw);
    if (!name || !email || !company || Date.now() - Number(savedAt) > MAX_AGE_MS) return null;
    return { name, email, company };
  } catch {
    return null;
  }
}

export function saveLead(lead: BrochureLead) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ ...lead, savedAt: Date.now() }));
  } catch {
    /* not persisted; the visitor fills the form again next time */
  }
}

export function clearLead() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* nothing stored */
  }
}

/** Log the download, then start it. Throws with a user-facing message. */
export async function downloadBrochure(
  slug: BrochureSlug,
  lead: BrochureLead,
  { returning, website = "" }: { returning: boolean; website?: string }
) {
  const res = await fetch("/api/brochures", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      brochure: slug,
      consent: true,
      returning,
      website,
      page: window.location.pathname,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.url) {
    throw new Error(data.error || "Failed to prepare your download. Please try again.");
  }
  startFileDownload(data.url, data.filename);
  return data as { url: string; filename: string };
}

export function startFileDownload(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
