"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  AlertCircle,
  Building2,
  Layers,
  UserRound,
  ShieldCheck,
  Users,
  FileText,
  Globe,
  MapPin,
  Phone,
  MessageCircle,
  Package,
  Mail,
  Briefcase,
  Flag,
  RotateCcw,
  X,
} from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ─── Industry sectors ─── */
const sectors = [
  "Artificial Intelligence & Machine Learning",
  "Software Development & SaaS",
  "Cybersecurity",
  "Cloud Computing & Infrastructure",
  "FinTech & Digital Banking",
  "HealthTech & BioTech",
  "EdTech & E-Learning",
  "E-Commerce & Retail Tech",
  "Clean Technology & GreenTech",
  "Telecommunications",
  "Data Analytics & Big Data",
  "IoT & Smart Systems",
  "Blockchain & Web3",
  "Consulting & Professional Services",
  "Manufacturing & Industrial Tech",
  "Logistics & Supply Chain Tech",
  "Legal & Regulatory Tech",
  "Real Estate & PropTech",
  "Media & Creative Technology",
  "Government & Public Sector",
  "Academic & Research",
  "Non-Profit & Social Enterprise",
];

/* ─── City lists per country ─── */
const ukCities = [
  "London", "Manchester", "Birmingham", "Leeds", "Edinburgh",
  "Glasgow", "Bristol", "Cambridge", "Oxford", "Belfast",
  "Cardiff", "Nottingham", "Sheffield", "Liverpool",
];

const pakistanCities = [
  "Islamabad", "Lahore", "Karachi", "Rawalpindi", "Peshawar",
  "Faisalabad", "Multan", "Sialkot", "Quetta", "Hyderabad",
];

function citiesFor(country: string): string[] {
  if (country === "uk") return ukCities;
  if (country === "pakistan") return pakistanCities;
  return [];
}

const hasCityList = (country: string) => country === "uk" || country === "pakistan";

/* ─── All other countries (alphabetical, UK and Pakistan pinned separately) ─── */
const otherCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
  "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)",
  "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
  "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
  "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany",
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
  "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

/* ─── Shared styles ─── */
const baseInputClass =
  "w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border text-[#064E3B] text-[15px] placeholder:text-[#94A3B8] focus:outline-none focus:ring-4 focus:ring-[#047857]/15 hover:border-[#94A3B8] transition-all duration-200 shadow-sm";
const baseSelectClass =
  "w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border text-[#064E3B] text-[15px] focus:outline-none focus:ring-4 focus:ring-[#047857]/15 hover:border-[#94A3B8] transition-all duration-200 appearance-none cursor-pointer shadow-sm";
const baseTextareaClass =
  "w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border text-[#064E3B] text-[15px] placeholder:text-[#94A3B8] focus:outline-none focus:ring-4 focus:ring-[#047857]/15 hover:border-[#94A3B8] transition-all duration-200 shadow-sm";

/* ─── Form data type ─── */
interface FormData {
  orgName: string;
  registrationNo: string;
  whatsapp: string;
  postalCode: string;
  address: string;
  country: string;
  city: string;
  cityOther: string;
  orgPhone: string;
  website: string;
  employees: string;
  coreProducts: string;
  otherSector: string;
  orgProfile: string;
  personName: string;
  personJobTitle: string;
  personEmail: string;
  personPhone: string;
  personNationality: string;
  termsAccepted: boolean;
  membershipTermsAccepted: boolean;
  arbitrationAccepted: boolean;
}

const initialFormData: FormData = {
  orgName: "",
  registrationNo: "",
  whatsapp: "",
  postalCode: "",
  address: "",
  country: "",
  city: "",
  cityOther: "",
  orgPhone: "",
  website: "",
  employees: "",
  coreProducts: "",
  otherSector: "",
  orgProfile: "",
  personName: "",
  personJobTitle: "",
  personEmail: "",
  personPhone: "",
  personNationality: "",
  termsAccepted: false,
  membershipTermsAccepted: false,
  arbitrationAccepted: false,
};

/* ─── Draft persistence ─── */
const DRAFT_STORAGE_KEY = "uptech:membershipDraft";
const DRAFT_TTL_MS = 14 * 24 * 60 * 60 * 1000;
const CONSENT_FIELDS: ReadonlyArray<keyof FormData> = [
  "termsAccepted",
  "membershipTermsAccepted",
  "arbitrationAccepted",
];

type DraftPayload = {
  savedAt: number;
  formData: Record<string, string>;
  selectedSectors: string[];
};

function loadDraft(): DraftPayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DraftPayload;
    if (!parsed || typeof parsed.savedAt !== "number") return null;
    if (Date.now() - parsed.savedAt > DRAFT_TTL_MS) {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function clearDraft() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch {
    // ignore
  }
}

function hasMeaningfulContent(formData: FormData, selectedSectors: string[]): boolean {
  if (selectedSectors.length > 0) return true;
  for (const [key, val] of Object.entries(formData)) {
    if (CONSENT_FIELDS.includes(key as keyof FormData)) continue;
    if (typeof val === "string" && val.trim() !== "") return true;
  }
  return false;
}

/* ─── Numbered step header ─── */
function StepHeader({
  index,
  icon: Icon,
  title,
  hint,
  color = "#047857",
}: {
  index: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  hint?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-3.5 mb-5">
      <div
        className="relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}DD 100%)`,
          boxShadow: `0 8px 22px -6px ${color}66`,
        }}
      >
        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5 mb-0.5">
          <span
            className="text-[10px] font-bold tracking-[0.18em] uppercase"
            style={{ color }}
          >
            Step {index}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#E2E8F0] to-transparent" />
        </div>
        <h3 className="font-heading font-bold text-[1.05rem] sm:text-[1.15rem] text-[#064E3B] leading-tight">
          {title}
          {hint && (
            <span className="ml-2 text-[13px] font-normal text-[#64748B]">
              {hint}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
}

export default function MembershipApplyForm() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [restoredAt, setRestoredAt] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Restore draft on mount (client only — consents are intentionally excluded so they must be re-confirmed)
  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      setFormData((prev) => {
        const merged: FormData = { ...prev };
        for (const key of Object.keys(initialFormData) as Array<keyof FormData>) {
          if (CONSENT_FIELDS.includes(key)) continue;
          const v = draft.formData?.[key as string];
          if (typeof v === "string") {
            (merged[key] as string) = v;
          }
        }
        return merged;
      });
      setSelectedSectors(Array.isArray(draft.selectedSectors) ? draft.selectedSectors : []);
      setRestoredAt(draft.savedAt);
    }
    setHydrated(true);
  }, []);

  // Debounced auto-save (skip until hydrated, while submitting, after success, or when empty)
  useEffect(() => {
    if (!hydrated || formSubmitted || submitting) return;
    if (!hasMeaningfulContent(formData, selectedSectors)) return;

    const t = setTimeout(() => {
      try {
        const persistable = Object.fromEntries(
          Object.entries(formData).filter(([, v]) => typeof v === "string")
        ) as Record<string, string>;
        const payload: DraftPayload = {
          savedAt: Date.now(),
          formData: persistable,
          selectedSectors,
        };
        window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
      } catch {
        // ignore (quota / private mode)
      }
    }, 600);

    return () => clearTimeout(t);
  }, [formData, selectedSectors, hydrated, formSubmitted, submitting]);

  const handleStartFresh = () => {
    setFormData(initialFormData);
    setSelectedSectors([]);
    setErrors({});
    setSubmitError("");
    clearDraft();
    setRestoredAt(null);
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "country") {
        next.city = "";
        next.cityOther = "";
      }
      return next;
    });
    if (errors[field as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as string];
        return next;
      });
    }
  };

  const toggleSector = (sector: string) => {
    setSelectedSectors((prev) =>
      prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]
    );
    if (errors.sectors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.sectors;
        return next;
      });
    }
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[+]?[\d\s()-]{7,}$/.test(phone);

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.orgName.trim()) newErrors.orgName = "Organisation name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Please select a country";
    else if (!hasCityList(formData.country)) {
      if (!formData.cityOther.trim()) newErrors.cityOther = "Please enter your city";
    } else {
      if (!formData.city) newErrors.city = "Please select a city";
      if (formData.city === "other" && !formData.cityOther.trim()) {
        newErrors.cityOther = "Please enter your city";
      }
    }
    if (!formData.orgPhone.trim()) newErrors.orgPhone = "Phone number is required";
    else if (!isValidPhone(formData.orgPhone)) newErrors.orgPhone = "Please enter a valid phone number";
    if (!formData.coreProducts.trim()) newErrors.coreProducts = "Please describe your core products/services";
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (starting with http:// or https://)";
    }

    if (selectedSectors.length === 0 && !formData.otherSector.trim()) {
      newErrors.sectors = "Please select at least one sector or specify other";
    }

    if (!formData.personName.trim()) newErrors.personName = "Name is required";
    if (!formData.personJobTitle.trim()) newErrors.personJobTitle = "Job title is required";
    if (!formData.personEmail.trim()) newErrors.personEmail = "Email is required";
    else if (!isValidEmail(formData.personEmail)) newErrors.personEmail = "Please enter a valid email address";
    if (!formData.personPhone.trim()) newErrors.personPhone = "Phone number is required";
    else if (!isValidPhone(formData.personPhone)) newErrors.personPhone = "Please enter a valid phone number";

    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
    if (!formData.membershipTermsAccepted) newErrors.membershipTermsAccepted = "You must accept the membership terms";
    if (!formData.arbitrationAccepted) newErrors.arbitrationAccepted = "You must accept the arbitration framework";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const scrollToFirstError = () => {
    const firstKey = Object.keys(errors)[0];
    if (firstKey) {
      const el = document.querySelector(`[data-field="${firstKey}"]`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }
    if (formRef.current) {
      const y = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setTimeout(scrollToFirstError, 50);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const payload = {
        ...formData,
        selectedSectors,
      };
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      clearDraft();
      setRestoredAt(null);
      setFormSubmitted(true);
      if (formRef.current) {
        const y = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `${baseInputClass} ${
      errors[field]
        ? "border-[#047857] bg-[#FEF2F4] focus:ring-[#047857]/15"
        : "border-[#E2E8F0] focus:border-[#047857]"
    }`;

  const selectClassFn = (field: string) =>
    `${baseSelectClass} ${
      errors[field]
        ? "border-[#047857] bg-[#FEF2F4] focus:ring-[#047857]/15"
        : "border-[#E2E8F0] focus:border-[#047857]"
    }`;

  const textareaClass = (field: string) =>
    `${baseTextareaClass} ${
      errors[field]
        ? "border-[#047857] bg-[#FEF2F4] focus:ring-[#047857]/15"
        : "border-[#E2E8F0] focus:border-[#047857]"
    }`;

  const InputIcon = ({ icon: Icon }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) => (
    <Icon
      className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#94A3B8] pointer-events-none"
      strokeWidth={1.75}
    />
  );

  const TextareaIcon = ({ icon: Icon }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) => (
    <Icon
      className="absolute left-3.5 top-4 w-[18px] h-[18px] text-[#94A3B8] pointer-events-none"
      strokeWidth={1.75}
    />
  );

  const FieldError = ({ field }: { field: string }) => {
    if (!errors[field]) return null;
    return (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#047857]"
      >
        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
        {errors[field]}
      </motion.p>
    );
  };

  const errorCount = Object.keys(errors).length;
  const ErrorBanner = () => {
    if (errorCount === 0) return null;
    return (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-start gap-3 p-4 rounded-xl bg-[#FEF2F4] border border-[#047857]/25"
        role="alert"
      >
        <div className="w-9 h-9 rounded-lg bg-[#047857]/10 flex items-center justify-center flex-shrink-0">
          <AlertCircle className="w-[18px] h-[18px] text-[#047857]" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#047857]">
            {errorCount === 1
              ? "Please complete the required field highlighted below."
              : `Please complete the ${errorCount} required fields highlighted below.`}
          </p>
        </div>
      </motion.div>
    );
  };

  const sectionAnim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  const cityOptions = citiesFor(formData.country);

  return (
    <section id="apply" className="scroll-mt-24">
      {formSubmitted ? (
        <Section variant="light">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="relative bg-white border border-[#E2E8F0] rounded-2xl p-10 sm:p-14 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#10B981] via-[#047857] to-[#10B981]" />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-20 h-20 mx-auto mb-6"
              >
                <div className="absolute inset-0 rounded-full bg-[#10B981]/15 animate-ping opacity-30" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-[0_12px_32px_rgba(16,185,129,0.35)]">
                  <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              </motion.div>
              <h2 className="font-heading font-extrabold text-[1.75rem] text-[#064E3B] mb-3">
                Application Submitted Successfully
              </h2>
              <p className="text-[#475569] text-base leading-relaxed mb-8 max-w-md mx-auto">
                Thank you for your interest in joining UPTIB. Our membership team will review your
                application and contact you within 5 business days regarding next steps.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#047857] text-white font-bold rounded-xl hover:bg-[#065F46] hover:-translate-y-0.5 transition-all duration-200 shadow-[0_8px_24px_rgba(4,120,87,0.3)]"
              >
                Return to homepage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </Section>
      ) : (
        <Section variant="light">
          <AnimatedSection>
            <SectionHeader
              label="Membership Application"
              title="Apply for Membership"
              subtitle="Tell us about your organisation. UPTIB will review your application and respond within 5 business days."
              color="blue"
            />
          </AnimatedSection>

          <AnimatePresence>
            {restoredAt !== null && (
              <motion.div
                key="draft-banner"
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
                role="status"
              >
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#ECFDF5] via-white to-[#F0F9FF] border border-[#047857]/20 shadow-[0_2px_12px_-2px_rgba(4,120,87,0.08)]">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#047857] to-[#065F46] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(4,120,87,0.25)]">
                      <RotateCcw className="w-[18px] h-[18px] text-white" strokeWidth={2.25} />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-[14.5px] font-semibold text-[#064E3B] leading-snug">
                        We restored your saved draft.
                      </p>
                      <p className="text-[13px] text-[#475569] mt-1 leading-relaxed">
                        Pick up where you left off. Consent checkboxes need to be re-confirmed before submitting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 sm:ml-2">
                    <button
                      type="button"
                      onClick={handleStartFresh}
                      className="px-3.5 py-2 text-[13px] font-semibold text-[#047857] bg-white border border-[#047857]/30 rounded-lg hover:bg-[#047857] hover:text-white hover:border-[#047857] hover:shadow-[0_4px_12px_rgba(4,120,87,0.25)] transition-all duration-200"
                    >
                      Start fresh
                    </button>
                    <button
                      type="button"
                      onClick={() => setRestoredAt(null)}
                      aria-label="Dismiss draft notice"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#064E3B] hover:bg-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={formRef}>
            <form onSubmit={handleSubmit} noValidate className="w-full">
              <div className="relative rounded-3xl border border-[#DBE6FE] p-6 sm:p-9 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#E6EEFE]">
                {/* Soft ambient glows */}
                <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#047857]/[0.06] blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -right-24 w-72 h-72 rounded-full bg-[#10B981]/[0.05] blur-3xl pointer-events-none" />

                {/* Brand accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#047857] via-[#10B981] to-[#047857]" />

                <div className="relative space-y-9 mt-2">
                  <ErrorBanner />

                  {/* SECTION 1 — Organisation */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="01"
                      icon={Building2}
                      title="Organisation Details"
                      color="#047857"
                    />

                    <div className="space-y-5">
                      <div data-field="orgName">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Organisation Name <span className="text-[#047857]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={Building2} />
                          <input
                            type="text"
                            value={formData.orgName}
                            onChange={(e) => updateField("orgName", e.target.value)}
                            placeholder="Enter your organisation name"
                            className={inputClass("orgName")}
                          />
                        </div>
                        <FieldError field="orgName" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#334155] mb-2">Number of Employees</label>
                          <div className="relative">
                            <InputIcon icon={Users} />
                            <select
                              value={formData.employees}
                              onChange={(e) => updateField("employees", e.target.value)}
                              className={selectClassFn("employees")}
                            >
                              <option value="">Select range</option>
                              <option value="1-10">1 – 10</option>
                              <option value="11-50">11 – 50</option>
                              <option value="51-200">51 – 200</option>
                              <option value="201-500">201 – 500</option>
                              <option value="501-1000">501 – 1,000</option>
                              <option value="over-1000">Over 1,000</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Registration No.
                          </label>
                          <div className="relative">
                            <InputIcon icon={FileText} />
                            <input
                              type="text"
                              value={formData.registrationNo}
                              onChange={(e) => updateField("registrationNo", e.target.value)}
                              placeholder="Company reg. number"
                              className={inputClass("registrationNo")}
                            />
                          </div>
                        </div>

                        <div data-field="country">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Country <span className="text-[#047857]">*</span>
                          </label>
                          <div className="relative">
                            <InputIcon icon={Globe} />
                            <select
                              value={formData.country}
                              onChange={(e) => updateField("country", e.target.value)}
                              className={selectClassFn("country")}
                            >
                              <option value="">Select country</option>
                              <option value="" disabled>── Primary ──</option>
                              <option value="uk">United Kingdom</option>
                              <option value="pakistan">Pakistan</option>
                              <option value="" disabled>── All countries ──</option>
                              {otherCountries.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                          </div>
                          <FieldError field="country" />
                        </div>

                        <div data-field="city">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            City <span className="text-[#047857]">*</span>
                          </label>
                          {formData.country && !hasCityList(formData.country) ? (
                            <div className="relative">
                              <InputIcon icon={MapPin} />
                              <input
                                type="text"
                                value={formData.cityOther}
                                onChange={(e) => updateField("cityOther", e.target.value)}
                                placeholder="Enter your city"
                                className={inputClass("cityOther")}
                              />
                            </div>
                          ) : (
                            <div className="relative">
                              <InputIcon icon={MapPin} />
                              <select
                                value={formData.city}
                                onChange={(e) => updateField("city", e.target.value)}
                                disabled={!formData.country}
                                className={`${selectClassFn("city")} ${!formData.country ? "opacity-60 cursor-not-allowed" : ""}`}
                              >
                                <option value="">
                                  {formData.country ? "Select city" : "Select a country first"}
                                </option>
                                {cityOptions.map((city) => (
                                  <option key={city} value={city}>{city}</option>
                                ))}
                                {formData.country && <option value="other">Other</option>}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                            </div>
                          )}
                          {hasCityList(formData.country) && formData.city === "other" && (
                            <div className="relative mt-2">
                              <InputIcon icon={MapPin} />
                              <input
                                type="text"
                                value={formData.cityOther}
                                onChange={(e) => updateField("cityOther", e.target.value)}
                                placeholder="Enter your city"
                                className={inputClass("cityOther")}
                              />
                            </div>
                          )}
                          <FieldError field="city" />
                          <FieldError field="cityOther" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                        <div data-field="address" className="sm:col-span-3">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Business Address <span className="text-[#047857]">*</span>
                          </label>
                          <div className="relative">
                            <InputIcon icon={MapPin} />
                            <input
                              type="text"
                              value={formData.address}
                              onChange={(e) => updateField("address", e.target.value)}
                              placeholder="Street address"
                              autoComplete="street-address"
                              className={inputClass("address")}
                            />
                          </div>
                          <FieldError field="address" />
                        </div>

                        <div className="sm:col-span-1">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Postal Code
                          </label>
                          <div className="relative">
                            <InputIcon icon={MapPin} />
                            <input
                              type="text"
                              value={formData.postalCode}
                              onChange={(e) => updateField("postalCode", e.target.value)}
                              placeholder="e.g. SW1A 1AA"
                              autoComplete="postal-code"
                              className={inputClass("postalCode")}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div data-field="orgPhone">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Mobile / Phone Number <span className="text-[#047857]">*</span>
                          </label>
                          <div className="relative">
                            <InputIcon icon={Phone} />
                            <input
                              type="tel"
                              value={formData.orgPhone}
                              onChange={(e) => updateField("orgPhone", e.target.value)}
                              placeholder="+44 20 XXXX XXXX"
                              className={inputClass("orgPhone")}
                            />
                          </div>
                          <FieldError field="orgPhone" />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            WhatsApp
                          </label>
                          <div className="relative">
                            <InputIcon icon={MessageCircle} />
                            <input
                              type="tel"
                              value={formData.whatsapp}
                              onChange={(e) => updateField("whatsapp", e.target.value)}
                              placeholder="+92 3XX XXXXXXX"
                              className={inputClass("whatsapp")}
                            />
                          </div>
                        </div>

                        <div data-field="website">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">Website</label>
                          <div className="relative">
                            <InputIcon icon={Globe} />
                            <input
                              type="url"
                              value={formData.website}
                              onChange={(e) => updateField("website", e.target.value)}
                              placeholder="https://www.example.com"
                              className={inputClass("website")}
                            />
                          </div>
                          <FieldError field="website" />
                        </div>
                      </div>

                      <div data-field="coreProducts">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Core Products / Services <span className="text-[#047857]">*</span>
                        </label>
                        <div className="relative">
                          <TextareaIcon icon={Package} />
                          <textarea
                            rows={3}
                            value={formData.coreProducts}
                            onChange={(e) => updateField("coreProducts", e.target.value)}
                            placeholder="Describe your core products and services"
                            className={`${textareaClass("coreProducts")} resize-none`}
                          />
                        </div>
                        <FieldError field="coreProducts" />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Organisation Profile{" "}
                          <span className="text-[#64748B] font-normal">— used for the member directory, max 100 words</span>
                        </label>
                        <div className="relative">
                          <TextareaIcon icon={FileText} />
                          <textarea
                            rows={4}
                            maxLength={800}
                            value={formData.orgProfile}
                            onChange={(e) => updateField("orgProfile", e.target.value)}
                            placeholder="Provide a brief description of your organisation, its mission, and key activities..."
                            className={`${textareaClass("orgProfile")} resize-none`}
                          />
                        </div>
                        <p className="text-[13px] text-[#64748B] mt-2.5 leading-relaxed">
                          UPTIB reserves the right to edit profiles that exceed 100 words.
                          Please send your high-resolution logo to{" "}
                          <a href="mailto:info@ukpaktrade.org.uk" className="text-[#047857] font-medium hover:underline">
                            info@ukpaktrade.org.uk
                          </a>{" "}
                          if you would like to be listed on the member directory.
                        </p>
                      </div>
                    </div>
                  </motion.section>

{/* SECTION 2 — Industry Sectors */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="02"
                      icon={Layers}
                      title="Industry Focus"
                      hint="— select all that apply"
                      color="#10B981"
                    />

                    <div
                      data-field="sectors"
                      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 ${
                        errors.sectors ? "ring-2 ring-[#047857]/25 rounded-xl p-2" : ""
                      }`}
                    >
                      {sectors.map((sector) => {
                        const active = selectedSectors.includes(sector);
                        return (
                          <label
                            key={sector}
                            className={`
                              group flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border cursor-pointer transition-all duration-200 text-[13px] font-medium
                              ${active
                                ? "bg-[#ECFDF5] border-[#047857] text-[#065F46] shadow-[0_2px_8px_rgba(4,120,87,0.12)]"
                                : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#047857]/40 hover:bg-[#F8FAFC] hover:text-[#064E3B]"
                              }
                            `}
                          >
                            <input
                              type="checkbox"
                              checked={active}
                              onChange={() => toggleSector(sector)}
                              className="sr-only"
                            />
                            <span
                              className={`
                                w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all duration-200
                                ${active ? "bg-[#047857] border-[#047857]" : "border-[#CBD5E1] group-hover:border-[#94A3B8]"}
                              `}
                            >
                              {active && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                            <span className="leading-tight">{sector}</span>
                          </label>
                        );
                      })}
                    </div>
                    <FieldError field="sectors" />
                    <div className="mt-5 max-w-xl">
                      <label className="block text-sm font-semibold text-[#334155] mb-2">Other (please specify)</label>
                      <div className="relative">
                        <InputIcon icon={Layers} />
                        <input
                          type="text"
                          value={formData.otherSector}
                          onChange={(e) => updateField("otherSector", e.target.value)}
                          placeholder="Enter other sectors"
                          className={inputClass("otherSector")}
                        />
                      </div>
                    </div>
                  </motion.section>

{/* SECTION 3 — Your Information */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="03"
                      icon={UserRound}
                      title="Your Details"
                      color="#047857"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div data-field="personName">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Name <span className="text-[#047857]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={UserRound} />
                          <input
                            type="text"
                            value={formData.personName}
                            onChange={(e) => updateField("personName", e.target.value)}
                            placeholder="Your full name"
                            className={inputClass("personName")}
                          />
                        </div>
                        <FieldError field="personName" />
                      </div>
                      <div data-field="personJobTitle">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Job Title <span className="text-[#047857]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={Briefcase} />
                          <input
                            type="text"
                            value={formData.personJobTitle}
                            onChange={(e) => updateField("personJobTitle", e.target.value)}
                            placeholder="e.g. CEO, Managing Director"
                            className={inputClass("personJobTitle")}
                          />
                        </div>
                        <FieldError field="personJobTitle" />
                      </div>
                      <div data-field="personEmail">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Email <span className="text-[#047857]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={Mail} />
                          <input
                            type="email"
                            value={formData.personEmail}
                            onChange={(e) => updateField("personEmail", e.target.value)}
                            placeholder="name@company.com"
                            className={inputClass("personEmail")}
                          />
                        </div>
                        <FieldError field="personEmail" />
                      </div>
                      <div data-field="personPhone">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Mobile / Phone Number <span className="text-[#047857]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={Phone} />
                          <input
                            type="tel"
                            value={formData.personPhone}
                            onChange={(e) => updateField("personPhone", e.target.value)}
                            placeholder="+44 7XXX XXXXXX"
                            className={inputClass("personPhone")}
                          />
                        </div>
                        <FieldError field="personPhone" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#334155] mb-2">Nationality</label>
                        <div className="relative">
                          <InputIcon icon={Flag} />
                          <input
                            type="text"
                            value={formData.personNationality}
                            onChange={(e) => updateField("personNationality", e.target.value)}
                            placeholder="e.g. British, Pakistani"
                            className={inputClass("personNationality")}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.section>

{/* SECTION 4 — Terms & Submit */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="04"
                      icon={ShieldCheck}
                      title="Confirmation & Submit"
                      color="#047857"
                    />

                    <div className="relative">
                      <p className="text-[#475569] mb-5 text-[14.5px] leading-relaxed text-center max-w-xl mx-auto">
                        Membership is non-transferable.
                      </p>

                      <div className="flex flex-col gap-2.5 max-w-2xl mx-auto mb-6">
                        {/* Terms 1 */}
                        <label
                          data-field="termsAccepted"
                          className={`
                            flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all duration-200
                            ${errors.termsAccepted
                              ? "border-[#047857]/40 bg-[#FEF2F4]"
                              : formData.termsAccepted
                                ? "border-[#047857]/30 bg-white shadow-sm"
                                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                            }
                          `}
                        >
                          <span
                            className={`
                              relative mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
                              ${formData.termsAccepted ? "bg-[#047857] border-[#047857]" : "bg-white border-[#CBD5E1]"}
                            `}
                          >
                            <input
                              type="checkbox"
                              checked={formData.termsAccepted}
                              onChange={(e) => updateField("termsAccepted", e.target.checked)}
                              className="sr-only"
                            />
                            {formData.termsAccepted && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[13.5px] text-[#334155] leading-relaxed">
                            I confirm the above information is accurate and I agree to UPTIB&apos;s{" "}
                            <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#047857] font-medium hover:underline">Terms &amp; Conditions</a>,{" "}
                            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#047857] font-medium hover:underline">Privacy Policy</a>, and{" "}
                            <a href="/code-of-conduct" target="_blank" rel="noopener noreferrer" className="text-[#047857] font-medium hover:underline">Code of Conduct</a>.
                            <span className="text-[#047857] font-semibold"> *</span>
                          </span>
                        </label>
                        {errors.termsAccepted && (
                          <p className="flex items-center gap-1.5 text-[13px] text-[#047857] -mt-1 ml-4">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            {errors.termsAccepted}
                          </p>
                        )}

                        {/* Terms 2 */}
                        <label
                          data-field="membershipTermsAccepted"
                          className={`
                            flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all duration-200
                            ${errors.membershipTermsAccepted
                              ? "border-[#047857]/40 bg-[#FEF2F4]"
                              : formData.membershipTermsAccepted
                                ? "border-[#047857]/30 bg-white shadow-sm"
                                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                            }
                          `}
                        >
                          <span
                            className={`
                              relative mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
                              ${formData.membershipTermsAccepted ? "bg-[#047857] border-[#047857]" : "bg-white border-[#CBD5E1]"}
                            `}
                          >
                            <input
                              type="checkbox"
                              checked={formData.membershipTermsAccepted}
                              onChange={(e) => updateField("membershipTermsAccepted", e.target.checked)}
                              className="sr-only"
                            />
                            {formData.membershipTermsAccepted && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[13.5px] text-[#334155] leading-relaxed">
                            I accept the{" "}
                            <a href="/membership/terms" target="_blank" rel="noopener noreferrer" className="text-[#047857] font-medium hover:underline">
                              Membership Terms &amp; Conditions
                            </a>, including non-transferability and disciplinary procedure.
                            <span className="text-[#047857] font-semibold"> *</span>
                          </span>
                        </label>
                        {errors.membershipTermsAccepted && (
                          <p className="flex items-center gap-1.5 text-[13px] text-[#047857] -mt-1 ml-4">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            {errors.membershipTermsAccepted}
                          </p>
                        )}

                        {/* Terms 3 */}
                        <label
                          data-field="arbitrationAccepted"
                          className={`
                            flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all duration-200
                            ${errors.arbitrationAccepted
                              ? "border-[#047857]/40 bg-[#FEF2F4]"
                              : formData.arbitrationAccepted
                                ? "border-[#047857]/30 bg-white shadow-sm"
                                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                            }
                          `}
                        >
                          <span
                            className={`
                              relative mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
                              ${formData.arbitrationAccepted ? "bg-[#047857] border-[#047857]" : "bg-white border-[#CBD5E1]"}
                            `}
                          >
                            <input
                              type="checkbox"
                              checked={formData.arbitrationAccepted}
                              onChange={(e) => updateField("arbitrationAccepted", e.target.checked)}
                              className="sr-only"
                            />
                            {formData.arbitrationAccepted && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[13.5px] text-[#334155] leading-relaxed">
                            I acknowledge and accept the{" "}
                            <a href="/arbitration/framework" target="_blank" rel="noopener noreferrer" className="text-[#047857] font-medium hover:underline">
                              Arbitration &amp; Dispute Resolution Framework
                            </a>{" "}governed under the Arbitration Act 1996 (UK).
                            <span className="text-[#047857] font-semibold"> *</span>
                          </span>
                        </label>
                        {errors.arbitrationAccepted && (
                          <p className="flex items-center gap-1.5 text-[13px] text-[#047857] -mt-1 ml-4">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            {errors.arbitrationAccepted}
                          </p>
                        )}
                      </div>

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-[#FEF2F4] border border-[#047857]/25 max-w-xl mx-auto"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#047857]/10 flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-[18px] h-[18px] text-[#047857]" />
                          </div>
                          <p className="text-sm font-medium text-[#047857]">{submitError}</p>
                        </motion.div>
                      )}

                      <div className="text-center">
                        <motion.button
                          type="submit"
                          disabled={
                            submitting ||
                            !formData.termsAccepted ||
                            !formData.membershipTermsAccepted ||
                            !formData.arbitrationAccepted
                          }
                          animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
                          transition={{ duration: 0.5 }}
                          className={`
                            group relative inline-flex items-center gap-3 px-10 py-4 font-bold text-[15px] rounded-xl transition-all duration-300 overflow-hidden
                            ${submitting || !formData.termsAccepted || !formData.membershipTermsAccepted || !formData.arbitrationAccepted
                              ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed shadow-none"
                              : "bg-gradient-to-r from-[#047857] via-[#065F46] to-[#047857] text-white hover:shadow-[0_12px_36px_rgba(4,120,87,0.4)] hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(4,120,87,0.28)]"
                            }
                          `}
                        >
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                          {submitting ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Submit Application
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>

                        <p className="text-[13px] text-[#64748B] mt-6 leading-relaxed max-w-md mx-auto">
                          Our membership team will review your application and respond within 5 business days.
                          For enquiries, contact{" "}
                          <a href="mailto:membership@ukpaktrade.org.uk" className="text-[#047857] font-medium hover:underline">
                            membership@ukpaktrade.org.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </div>
            </form>
          </div>
        </Section>
      )}
    </section>
  );
}
