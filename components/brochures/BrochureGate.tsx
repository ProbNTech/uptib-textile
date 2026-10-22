"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Building2, Check, Download, AlertCircle, ArrowRight, Lock } from "lucide-react";
import { brochures, type Brochure, type BrochureSlug } from "@/data/brochures";
import { CoverArt, Spinner } from "./parts";
import {
  type BrochureLead,
  clearLead,
  downloadBrochure,
  saveLead,
  startFileDownload,
} from "@/lib/brochure-lead";

type DownloadState = "busy" | "done" | "error";

const EASE = [0.22, 1, 0.36, 1] as const;

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';

/* Compact take on ContactForm's Field: label, left icon, focus ring. The input
   comes before the icon so the icon can follow its focus state via `peer`. */
function GateField({
  id,
  label,
  icon: Icon,
  error,
  ...input
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-1.5 block text-[12px] font-bold uppercase tracking-[0.12em] ${
          error ? "text-[#DC2626]" : "text-[#3D4152]"
        }`}
      >
        {label} <span className="text-[#DC2626]">*</span>
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`peer w-full rounded-xl border bg-[#F8F8F7] py-3 pl-11 pr-4 text-[15px] text-[#1A1A1A] placeholder-[#9A9EAF] outline-none transition-all duration-300 hover:border-[#B0B3BE] focus:bg-white ${
            error
              ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:ring-2 focus:ring-[#DC2626]/10"
              : "border-[#D8D5CF] focus:border-[#78899B]/50 focus:ring-2 focus:ring-[#78899B]/15"
          }`}
          {...input}
        />
        <Icon
          className={`pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 transition-colors duration-300 ${
            error ? "text-[#DC2626]" : "text-[#9A9EAF] peer-focus:text-[#394F73]"
          }`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-[#DC2626]">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

type BrochureGateProps = {
  brochure: Brochure;
  lead: BrochureLead | null;
  onLeadChange: (lead: BrochureLead | null) => void;
  onClose: () => void;
};

export default function BrochureGate({ brochure, lead, onLeadChange, onClose }: BrochureGateProps) {
  const [view, setView] = useState<"form" | "library">(lead ? "library" : "form");
  const [justUnlocked, setJustUnlocked] = useState(false);
  const [lastFile, setLastFile] = useState<{ url: string; filename: string } | null>(null);
  const [downloads, setDownloads] = useState<Partial<Record<BrochureSlug, DownloadState>>>({});

  const [form, setForm] = useState({ name: "", email: "", company: "", website: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  /* Scroll lock, Escape, focus trap, and focus restored to the trigger on close. */
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    // Desktop: straight into the first field. Touch: focus the dialog so the
    // keyboard doesn't jump up before the visitor has seen the catalogue.
    const frame = requestAnimationFrame(() => {
      const panel = panelRef.current;
      const first = window.matchMedia("(min-width: 768px)").matches
        ? panel?.querySelector<HTMLElement>("[data-autofocus]")
        : null;
      (first ?? panel)?.focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      trigger?.focus?.({ preventScroll: true });
    };
  }, []);

  // The form unmounts on success, taking focus with it: hand focus to the
  // confirmation the moment it mounts. Stable, so it runs on mount only.
  const focusOnMount = useCallback((el: HTMLHeadingElement | null) => {
    el?.focus({ preventScroll: true });
  }, []);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors(({ [key]: _, ...rest }) => rest);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email address";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email address";
    if (!form.company.trim()) e.company = "Please enter your company name";
    if (!consent) e.consent = "Please accept the privacy policy to continue";
    return e;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`gate-${firstError}`)?.focus();
      return;
    }

    const next = { name: form.name.trim(), email: form.email.trim(), company: form.company.trim() };
    setSubmitting(true);
    setServerError("");
    try {
      const file = await downloadBrochure(brochure.slug, next, { returning: false, website: form.website });
      saveLead(next);
      onLeadChange(next);
      setLastFile(file);
      setDownloads({ [brochure.slug]: "done" });
      setJustUnlocked(true);
      setView("library");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fetchOne = async (slug: BrochureSlug) => {
    if (!lead || downloads[slug] === "busy") return;
    setDownloads((d) => ({ ...d, [slug]: "busy" }));
    try {
      await downloadBrochure(slug, lead, { returning: true });
      setDownloads((d) => ({ ...d, [slug]: "done" }));
    } catch {
      setDownloads((d) => ({ ...d, [slug]: "error" }));
    }
  };

  const notYou = () => {
    clearLead();
    onLeadChange(null);
    setForm({ name: "", email: "", company: "", website: "" });
    setConsent(false);
    setDownloads({});
    setJustUnlocked(false);
    setView("form");
  };

  const firstName = lead?.name.split(/\s+/)[0] ?? "";
  const others = brochures.filter((b) => b.slug !== brochure.slug);
  const currentState = downloads[brochure.slug];

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-[#0E1318]/60 backdrop-blur-[6px]" onClick={onClose} aria-hidden />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="brochure-gate-title"
        tabIndex={-1}
        className="relative grid max-h-[92dvh] w-full overflow-y-auto overscroll-contain rounded-t-[20px] bg-white shadow-[0_40px_120px_-30px_rgba(14,19,24,0.55)] outline-none sm:max-w-[940px] sm:rounded-2xl md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3.5 top-3.5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] shadow-sm ring-1 ring-black/5 transition-colors hover:bg-[#F6F2EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78899B]"
        >
          <X className="h-[18px] w-[18px]" />
        </button>

        {/* ── Left: the catalogue ───────────────────────────────── */}
        <div
          className="relative overflow-hidden text-white"
          style={{
            background:
              "radial-gradient(700px circle at 0% 0%, rgba(216, 205, 186,0.16), transparent 55%), radial-gradient(600px circle at 100% 100%, rgba(140, 154, 171,0.22), transparent 55%), #394F73",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden
            style={{ backgroundImage: "radial-gradient(circle, white 0.6px, transparent 0.6px)", backgroundSize: "22px 22px" }}
          />

          {/* Mobile: compact header row */}
          <div className="relative flex items-center gap-4 px-5 pb-5 pr-16 pt-6 md:hidden">
            <div className="relative aspect-[1/1.414] w-[58px] shrink-0 overflow-hidden rounded-[2px] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.7)]">
              <CoverArt brochure={brochure} sizes="58px" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8CDBA]">{brochure.sector}</p>
              <p className="mt-1 font-heading text-xl leading-snug text-white">{brochure.title}</p>
              <p className="mt-0.5 text-[13px] text-white/65">
                {brochure.pages} pages · PDF · {brochure.sizeMb} MB
              </p>
            </div>
          </div>

          {/* Desktop: fanned cover + contents */}
          <div className="relative hidden h-full flex-col px-9 pb-9 pt-10 md:flex">
            <div className="relative mx-auto aspect-[1/1.414] w-[54%] max-w-[205px] -translate-x-[9%]">
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-[3px] bg-white shadow-[0_20px_40px_-18px_rgba(0,0,0,0.6)]"
                initial={{ rotate: 0, x: "0%" }}
                animate={{ rotate: 7, x: "22%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              >
                <Image src={brochure.inside} alt="" fill sizes="205px" className="object-cover" />
              </motion.div>
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-[3px] shadow-[0_34px_60px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
                initial={{ rotate: 0, y: 14 }}
                animate={{ rotate: -2.5, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              >
                <CoverArt brochure={brochure} sizes="205px" priority />
              </motion.div>
            </div>

            <div className="mt-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8CDBA]">{brochure.sector} catalogue</p>
              <h2 id="brochure-gate-title" className="mt-2 font-heading text-[1.7rem] leading-tight text-white">
                {brochure.title}
              </h2>
              <p className="mt-1.5 text-sm text-white/65">
                {brochure.pages} pages · PDF · {brochure.sizeMb} MB
              </p>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">Inside this catalogue</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {brochure.contents.map((item) => (
                  <li key={item} className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[12px] text-white/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Right: form, then the unlocked library ────────────── */}
        <div className="relative px-6 pb-7 pt-7 sm:px-9 sm:pb-9 sm:pt-10">
          <AnimatePresence mode="wait" initial={false}>
            {view === "form" ? (
              <motion.form
                key="form"
                onSubmit={submit}
                noValidate
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#394F73]">Free download</p>
                <h3 className="mt-2 font-heading text-[1.65rem] leading-tight text-[#1A1A1A]">Get the catalogue</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5A5F72]">
                  Tell us who you are and your PDF downloads straight away. One form unlocks all {brochures.length} catalogues.
                </p>

                <div className="mt-6 space-y-4">
                  <GateField
                    id="gate-name"
                    label="Full name"
                    icon={User}
                    value={form.name}
                    onChange={update("name")}
                    error={errors.name}
                    autoComplete="name"
                    placeholder="Your full name"
                    maxLength={120}
                    data-autofocus
                  />
                  <GateField
                    id="gate-email"
                    label="Email address"
                    icon={Mail}
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    error={errors.email}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    maxLength={200}
                  />
                  <GateField
                    id="gate-company"
                    label="Company name"
                    icon={Building2}
                    value={form.company}
                    onChange={update("company")}
                    error={errors.company}
                    autoComplete="organization"
                    placeholder="Your company"
                    maxLength={160}
                  />

                  {/* Honeypot: hidden from people, irresistible to bots. */}
                  <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
                    <label htmlFor="gate-website">Website</label>
                    <input id="gate-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} />
                  </div>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        id="gate-consent"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors(({ consent: _, ...rest }) => rest);
                        }}
                        aria-invalid={!!errors.consent}
                        className="peer sr-only"
                      />
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors peer-checked:border-[#394F73] peer-checked:bg-[#394F73] peer-focus-visible:ring-2 peer-focus-visible:ring-[#78899B]/40 ${
                          errors.consent ? "border-[#DC2626]" : "border-[#B0B3BE] bg-white"
                        }`}
                        aria-hidden
                      >
                        <Check className={`h-3.5 w-3.5 text-white ${consent ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
                      </span>
                      <span className="text-[13px] leading-relaxed text-[#5A5F72]">
                        I agree to the{" "}
                        <Link href="/privacy" target="_blank" className="font-semibold text-[#394F73] underline underline-offset-2">
                          Privacy Policy
                        </Link>{" "}
                        and to Pak Textiles Global Partners contacting me about these catalogues.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1.5 flex items-center gap-1.5 pl-8 text-[13px] font-medium text-[#DC2626]">
                        <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                {serverError && (
                  <p role="alert" className="mt-5 flex items-center gap-2 rounded-xl bg-[#DC2626]/[0.05] px-4 py-3 text-sm font-medium text-[#DC2626]">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative mt-6 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#394F73] px-6 py-4 font-heading text-[15px] font-bold text-white shadow-[0_10px_28px_-10px_rgba(57,79,115,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2E4061] hover:shadow-[0_14px_34px_-10px_rgba(57,79,115,0.75)] disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
                >
                  <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  {submitting ? (
                    <>
                      <Spinner /> Preparing your download…
                    </>
                  ) : (
                    <>
                      <Download className="h-[18px] w-[18px]" /> Download catalogue
                    </>
                  )}
                </button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-[#8A857C]">
                  <Lock className="h-3 w-3" /> Free PDF, {brochure.sizeMb} MB. Your details stay with our team.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="library"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <div role="status" className="flex items-start gap-4">
                  <motion.span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#394F73] text-white shadow-[0_10px_30px_-10px_rgba(57,79,115,0.7)]"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <motion.path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.span>
                  <div className="min-w-0 pr-8">
                    <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#394F73]">
                      {justUnlocked ? "Download started" : "Catalogues unlocked"}
                    </p>
                    <h3 ref={focusOnMount} tabIndex={-1} className="mt-1.5 font-heading text-[1.55rem] leading-tight text-[#1A1A1A] outline-none">
                      {justUnlocked ? `Thank you, ${firstName}` : `Welcome back, ${firstName}`}
                    </h3>
                  </div>
                </div>

                {justUnlocked ? (
                  <p className="mt-4 text-[15px] leading-relaxed text-[#5A5F72]">
                    <span className="font-semibold text-[#1A1A1A]">{brochure.title}</span> is downloading now ({brochure.sizeMb} MB).{" "}
                    {lastFile && (
                      <button
                        type="button"
                        onClick={() => startFileDownload(lastFile.url, lastFile.filename)}
                        className="font-semibold text-[#394F73] underline underline-offset-2 hover:text-[#1A1A1A]"
                      >
                        Not started? Download again
                      </button>
                    )}
                  </p>
                ) : (
                  <>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#5A5F72]">
                      Every catalogue is unlocked on this device. Download as many as you need.
                    </p>
                    <button
                      type="button"
                      data-autofocus
                      onClick={() => fetchOne(brochure.slug)}
                      disabled={currentState === "busy"}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#394F73] px-6 py-4 font-heading text-[15px] font-bold text-white shadow-[0_10px_28px_-10px_rgba(57,79,115,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2E4061] disabled:cursor-wait disabled:opacity-80"
                    >
                      {currentState === "busy" ? (
                        <>
                          <Spinner /> Preparing your download…
                        </>
                      ) : currentState === "done" ? (
                        <>
                          <Check className="h-[18px] w-[18px]" strokeWidth={2.6} /> Download started
                        </>
                      ) : (
                        <>
                          <Download className="h-[18px] w-[18px]" /> Download {brochure.title}
                        </>
                      )}
                    </button>
                    {currentState === "error" && (
                      <p role="alert" className="mt-2 text-center text-[13px] font-medium text-[#DC2626]">
                        That download failed. Please try again.
                      </p>
                    )}
                  </>
                )}

                <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A857C]">
                  {justUnlocked ? "Your other catalogues are ready" : "More catalogues"}
                </p>
                <ul className="mt-3 divide-y divide-[#EFEAE0] rounded-xl border border-[#E8E2D6]">
                  {others.map((b) => {
                    const state = downloads[b.slug];
                    return (
                      <li key={b.slug}>
                        <button
                          type="button"
                          onClick={() => fetchOne(b.slug)}
                          disabled={state === "busy"}
                          className="group flex w-full items-center gap-3.5 px-3.5 py-3 text-left transition-colors first:rounded-t-xl hover:bg-[#F6F2EA]/70 focus-visible:bg-[#F6F2EA] focus-visible:outline-none disabled:cursor-wait"
                        >
                          <span className="relative aspect-[1/1.414] w-9 shrink-0 overflow-hidden rounded-[2px] shadow-[0_4px_10px_-4px_rgba(26,26,26,0.5)]">
                            <Image src={b.cover} alt="" fill sizes="36px" className="object-cover" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[14px] font-semibold text-[#1A1A1A]">{b.title}</span>
                            <span className="block text-[12px] text-[#8A857C]">
                              {state === "error" ? (
                                <span className="text-[#DC2626]">Failed, tap to retry</span>
                              ) : (
                                <>
                                  {b.pages} pages · {b.sizeMb} MB
                                </>
                              )}
                            </span>
                          </span>
                          <span
                            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                              state === "done"
                                ? "bg-[#394F73] text-white"
                                : "bg-[#F6F2EA] text-[#394F73] group-hover:bg-[#78899B] group-hover:text-white"
                            }`}
                          >
                            {state === "busy" ? (
                              <Spinner className="h-3.5 w-3.5" />
                            ) : state === "done" ? (
                              <Check className="h-4 w-4" strokeWidth={2.6} />
                            ) : (
                              <Download className="h-4 w-4" />
                            )}
                            <span className="sr-only">
                              {state === "done" ? `${b.title} downloaded` : `Download ${b.title}`}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#EFEAE0] pt-5">
                  <p className="text-[13px] text-[#8A857C]">
                    Downloading as <span className="font-semibold text-[#3D4152]">{lead?.name}</span>
                    {lead?.company ? `, ${lead.company}` : ""}.{" "}
                    <button type="button" onClick={notYou} className="font-semibold text-[#394F73] underline underline-offset-2 hover:text-[#1A1A1A]">
                      Not you?
                    </button>
                  </p>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1A1A1A] hover:text-[#394F73]"
                  >
                    Request a quote <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
