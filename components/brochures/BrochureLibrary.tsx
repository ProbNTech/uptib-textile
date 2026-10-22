"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AlertCircle, BookOpen, Check, Download, Lock } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { brochures, totalBrochurePages, type Brochure, type BrochureSlug } from "@/data/brochures";
import { type BrochureLead, clearLead, downloadBrochure, loadLead } from "@/lib/brochure-lead";
import { CoverArt, Spinner } from "./parts";

// Only needed once someone clicks; prefetched after mount so it opens instantly.
const loadGate = () => import("./BrochureGate");
const BrochureGate = dynamic(loadGate, { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;
const COVER_SIZES = "(min-width: 1024px) 20vw, (min-width: 768px) 30vw, (min-width: 640px) 40vw, 64vw";

type Toast = { tone: "busy" | "done" | "error"; text: string };

function BrochureCard({
  brochure,
  index,
  busy,
  onPreview,
  onDownload,
}: {
  brochure: Brochure;
  index: number;
  busy: boolean;
  onPreview: () => void;
  onDownload: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group relative flex h-full flex-col hover:z-10"
      // Same initial state on server and client (no hydration mismatch);
      // reduced motion just reveals it without the travel.
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.6, delay: index * 0.08, ease: EASE }}
    >
      <button
        type="button"
        onClick={onPreview}
        aria-label={`Look inside the ${brochure.title} catalogue`}
        className="relative block w-full rounded-[4px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78899B] focus-visible:ring-offset-4"
      >
        <div className="relative aspect-[1/1.414]">
          {/* Contents page tucked behind the cover; fans out on hover */}
          <div
            aria-hidden
            className="absolute inset-0 origin-bottom-right translate-x-[3%] rotate-[2deg] overflow-hidden rounded-[3px] bg-white shadow-[0_12px_28px_-14px_rgba(26,26,26,0.45)] ring-1 ring-black/5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[9%] group-hover:rotate-[5deg] motion-reduce:transition-none"
          >
            <Image src={brochure.inside} alt="" fill sizes={COVER_SIZES} className="object-cover" />
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-[3px] bg-[#394F73] shadow-[0_24px_44px_-22px_rgba(26,26,26,0.6)] ring-1 ring-black/10 transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_38px_60px_-24px_rgba(26,26,26,0.65)] motion-reduce:transition-none">
            <CoverArt brochure={brochure} sizes={COVER_SIZES} />
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full motion-reduce:hidden"
            />
          </div>

          <span className="pointer-events-none absolute inset-x-3 bottom-3 z-10 inline-flex translate-y-2 items-center justify-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-[12px] font-semibold text-[#1A1A1A] opacity-0 shadow-lg backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <BookOpen className="h-3.5 w-3.5" /> Look inside
          </span>
        </div>
      </button>

      <div className="mt-6 flex flex-1 flex-col">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#394F73]">{brochure.sector}</p>
        <h3 className="mt-1.5 font-heading text-lg leading-snug text-[#1A1A1A] xl:text-xl">{brochure.title}</h3>
        <p className="mt-1 text-[13px] text-[#8A857C]">
          {brochure.pages} pages · PDF · {brochure.sizeMb} MB
        </p>
        {/* Too cramped at lg's five narrow columns; back from xl */}
        <div className="lg:hidden xl:block">
          <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-[#5A5F72]">{brochure.description}</p>
        </div>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={onDownload}
            disabled={busy}
            className="group/btn inline-flex w-full items-center justify-between gap-3 rounded-full border border-[#E5DFD3] bg-white py-1.5 pl-5 pr-1.5 text-[13px] font-semibold text-[#1A1A1A] transition-colors duration-300 hover:border-[#78899B] hover:bg-[#78899B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78899B] disabled:cursor-wait"
          >
            <span>{busy ? "Preparing…" : "Download PDF"}</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F6F2EA] text-[#394F73] transition-colors duration-300 group-hover/btn:bg-white/15 group-hover/btn:text-white">
              {busy ? <Spinner className="h-3.5 w-3.5" /> : <Download className="h-4 w-4" />}
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function BrochureLibrary() {
  const [mounted, setMounted] = useState(false);
  const [lead, setLead] = useState<BrochureLead | null>(null);
  const [active, setActive] = useState<Brochure | null>(null);
  const [busy, setBusy] = useState<BrochureSlug | null>(null);
  const [toast, setToast] = useState<Toast | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
    setLead(loadLead());
    loadGate();
    return () => window.clearTimeout(toastTimer.current);
  }, []);

  const showToast = (next: Toast, hideAfter?: number) => {
    window.clearTimeout(toastTimer.current);
    setToast(next);
    if (hideAfter) toastTimer.current = window.setTimeout(() => setToast(null), hideAfter);
  };

  /* Unlocked visitors skip the form: log the download and start it in place. */
  const download = async (b: Brochure) => {
    if (!lead) {
      setActive(b);
      return;
    }
    if (busy) return;
    setBusy(b.slug);
    showToast({ tone: "busy", text: `Preparing ${b.title}…` });
    try {
      await downloadBrochure(b.slug, lead, { returning: true });
      showToast({ tone: "done", text: `${b.title} is downloading (${b.sizeMb} MB)` }, 4500);
    } catch (err) {
      showToast({ tone: "error", text: err instanceof Error ? err.message : "Download failed. Please try again." }, 6000);
    } finally {
      setBusy(null);
    }
  };

  const stats = [
    { value: String(brochures.length), label: "Catalogues" },
    { value: String(totalBrochurePages), label: "Pages" },
    { value: "Free", label: "PDF download" },
  ];

  return (
    <section id="catalogues" className="relative z-[1] sec-y scroll-mt-24 overflow-hidden bg-white" aria-label="Product catalogues">
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #1A1A1A 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        <AnimatedSection animation="blur-in">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <SectionLabel
              label="Catalogues"
              title="Download our product catalogues"
              body="Home textiles, hospitality linen, towels, hospital textiles and uniforms, each with specifications, fabrics and sizes. Free to download as PDF."
              color="#394F73"
            />
            <div className="sec-head lg:text-right">
              <dl className="flex gap-8 sm:gap-10 lg:justify-end">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dt className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A857C]">{s.label}</dt>
                    <dd className="font-heading text-[2.2rem] leading-none text-[#1A1A1A] sm:text-[2.6rem]">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 inline-flex items-center gap-2 text-[13px] text-[#5A5F72]">
                {lead ? (
                  <>
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#394F73] text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>
                      Unlocked for <span className="font-semibold text-[#1A1A1A]">{lead.name}</span>.{" "}
                      <button
                        type="button"
                        onClick={() => {
                          clearLead();
                          setLead(null);
                        }}
                        className="font-semibold text-[#394F73] underline underline-offset-2 hover:text-[#1A1A1A]"
                      >
                        Not you?
                      </button>
                    </span>
                  </>
                ) : (
                  <>
                    <Lock className="h-3.5 w-3.5 text-[#394F73]" />
                    One short form unlocks all {brochures.length} catalogues.
                  </>
                )}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative mt-4 lg:mt-6">
          {/* Ivory plinth the covers stand on; runs off the section's bottom edge */}
          <div aria-hidden className="pointer-events-none absolute -inset-x-[50vw] -bottom-[200px] top-[40%] bg-[#F6F2EA]" />

          <ul className="relative -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-4 pt-3 [scrollbar-width:none] sm:-mx-10 sm:scroll-px-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {brochures.map((b, i) => (
              <li key={b.slug} className="w-[64%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-auto">
                <BrochureCard
                  brochure={b}
                  index={i}
                  busy={busy === b.slug}
                  onPreview={() => setActive(b)}
                  onDownload={() => download(b)}
                />
              </li>
            ))}
          </ul>

          <div className="relative mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#E5DFD3] pt-6 sm:flex-row sm:items-center lg:mt-10">
            <p className="max-w-2xl text-sm leading-relaxed text-[#5A5F72] sm:text-[15px]">
              <span className="font-semibold text-[#1A1A1A]">Looking for something that isn&apos;t in a catalogue?</span>{" "}
              Send us your specification and we&apos;ll source it from our manufacturer network in Pakistan.
            </p>
            <div className="shrink-0">
              <PillButton href="/contact" variant="dark">Talk to our team</PillButton>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <BrochureGate
            key="brochure-gate"
            brochure={active}
            lead={lead}
            onLeadChange={setLead}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {mounted &&
        createPortal(
          <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-[95] flex justify-center px-4 sm:bottom-8">
            <AnimatePresence>
              {toast && (
                <motion.div
                  key="brochure-toast"
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="pointer-events-auto flex max-w-md items-center gap-3 rounded-full bg-[#1A1A1A] py-2.5 pl-2.5 pr-5 text-sm text-white shadow-[0_18px_40px_-14px_rgba(14,19,24,0.6)]"
                >
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      toast.tone === "error" ? "bg-[#DC2626]" : "bg-white/15"
                    }`}
                  >
                    {toast.tone === "busy" ? (
                      <Spinner className="h-3.5 w-3.5" />
                    ) : toast.tone === "done" ? (
                      <Check className="h-4 w-4" strokeWidth={2.6} />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                  </span>
                  {toast.text}
                </motion.div>
              )}
            </AnimatePresence>
          </div>,
          document.body
        )}
    </section>
  );
}
