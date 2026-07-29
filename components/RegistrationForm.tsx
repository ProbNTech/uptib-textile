"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  User,
  Mail,
  Phone,
  Globe2,
  MapPin,
  Hash,
  Users,
  MessageSquare,
  Layers,
  Factory,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Briefcase,
  ShoppingCart,
  Megaphone,
  Warehouse,
  Truck,
  ClipboardCheck,
  BadgeCheck,
  CalendarClock,
  Package,
  Target,
  Send,
  Radio,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

/* ── Option lists ──────────────────────────────────────────────── */
const accountTypes = [
  {
    value: "buyer",
    title: "I want to source from Pakistan",
    desc: "Buyers, importers, brands and retailers looking for vetted Pakistani manufacturers.",
    icon: ShoppingCart,
  },
  {
    value: "exporter",
    title: "I want to sell globally",
    desc: "Pakistani manufacturers and exporters looking for buyers, visibility and market access.",
    icon: Factory,
  },
  {
    value: "both",
    title: "Both, or still exploring",
    desc: "Tell us what you need and we will route you to the right team.",
    icon: Globe2,
  },
];

const businessTypes = [
  "Manufacturer",
  "Exporter",
  "Importer / Buyer",
  "Brand / Retailer",
  "Wholesaler / Distributor",
  "E-commerce seller",
  "Agent / Trading house",
  "Other",
];

const employeeBands = ["1 to 10", "11 to 50", "51 to 200", "201 to 500", "500+"];

const tradingYears = ["Less than 1 year", "1 to 3 years", "3 to 5 years", "5 to 10 years", "More than 10 years"];

const countries = [
  { value: "pakistan", label: "Pakistan" },
  { value: "uk", label: "United Kingdom" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United States", label: "United States" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Germany", label: "Germany" },
  { value: "Other", label: "Other" },
];

const cityLists: Record<string, string[]> = {
  pakistan: [
    "Karachi",
    "Lahore",
    "Faisalabad",
    "Sialkot",
    "Multan",
    "Gujranwala",
    "Islamabad",
    "Rawalpindi",
    "other",
  ],
  uk: ["London", "Manchester", "Birmingham", "Leeds", "Bradford", "Leicester", "Glasgow", "other"],
};

const hasCityList = (country: string) => country === "uk" || country === "pakistan";

/* Services mirror the site's four service pillars, plus the two support lines
   international buyers most often register for. */
const serviceOptions = [
  { value: "Marketing & Sales", icon: Megaphone },
  { value: "E-commerce & Warehouse", icon: Warehouse },
  { value: "Buying House (Outsourcing)", icon: ShoppingCart },
  { value: "Logistics", icon: Truck },
  { value: "Quality Control & Inspection", icon: ClipboardCheck },
  { value: "Membership", icon: BadgeCheck },
];

const categoryOptions = [
  "Home Textile",
  "Apparel & Accessories",
  "Sportswear & Activewear",
  "Healthcare Textile",
  "Accessories & Allied Supplies",
  "Other",
];

const volumeBands = [
  "Under 1,000 units",
  "1,000 to 5,000 units",
  "5,000 to 20,000 units",
  "20,000 to 100,000 units",
  "Over 100,000 units",
  "Not sure yet",
];

const timelines = [
  "Immediately",
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "Just exploring",
];

const referralSources = [
  "Search engine",
  "Social media",
  "Trade fair or exhibition",
  "Referral from a partner",
  "Email or newsletter",
  "Other",
];

const initialForm = {
  // Registration type
  accountType: "",
  // Company
  orgName: "",
  businessType: "",
  registrationNo: "",
  website: "",
  employees: "",
  yearsTrading: "",
  country: "",
  city: "",
  cityOther: "",
  address: "",
  // Contact person
  personName: "",
  personJobTitle: "",
  personEmail: "",
  personPhone: "",
  whatsapp: "",
  preferredContact: "",
  // Interests
  selectedServices: [] as string[],
  selectedCategories: [] as string[],
  otherCategory: "",
  // Requirement
  orderVolume: "",
  targetMarkets: "",
  timeline: "",
  certifications: "",
  requirement: "",
  // Finish
  howHeard: "",
  termsAccepted: false,
  marketingOptIn: false,
};

type FormShape = typeof initialForm;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

/* ── Reusable text/select/textarea field ───────────────────────── */
function Field({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  error,
  focused,
  onFocus,
  onBlur,
  required,
  type = "text",
  placeholder,
  as = "input",
  rows,
  children,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  rows?: number;
  children?: React.ReactNode;
}) {
  const accent = error ? "text-[#DC2626]" : focused ? "text-[#394F73]" : "text-[#9A9EAF]";
  // Not `relative`: a positioned input paints over the absolutely positioned
  // icon and accent bar that sit before it in the DOM, hiding them.
  const fieldClass = `w-full bg-[#FBFBFA] border text-[#1A1A1A] placeholder-[#A8ACB8] text-[14px] py-2.5 rounded-lg transition-all duration-300 outline-none hover:border-[#D1D5DB] ${
    as === "select" ? "pl-10 pr-9 appearance-none cursor-pointer [&>option]:bg-white [&>option]:text-[#1A1A1A]" : "pl-10 pr-4"
  } ${as === "textarea" ? "resize-none" : ""} ${
    error
      ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
      : "border-[#EBEBE9] focus:border-[#78899B]/40 focus:bg-white focus:ring-2 focus:ring-[#78899B]/10"
  }`;

  return (
    <motion.div variants={itemVariants}>
      <label
        htmlFor={id}
        className={`block text-[12px] font-bold tracking-[0.1em] uppercase mb-1.5 transition-colors duration-300 ${
          error ? "text-[#DC2626]" : focused ? "text-[#394F73]" : "text-[#3D4152]"
        }`}
      >
        {label}{" "}
        {required ? (
          <span className="text-[#DC2626]">*</span>
        ) : (
          <span className="text-[#9A9EAF] text-[11px] normal-case tracking-normal font-normal">(optional)</span>
        )}
      </label>
      <div className="relative group">
        <div
          className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${
            error ? "bg-[#DC2626] opacity-100" : focused ? "bg-[#78899B] opacity-100" : "bg-transparent opacity-0"
          }`}
        />
        <Icon
          className={`absolute left-3 ${as === "textarea" ? "top-3" : "top-1/2 -translate-y-1/2"} w-[16px] h-[16px] pointer-events-none transition-colors duration-300 ${accent}`}
        />
        {as === "input" && (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            className={fieldClass}
          />
        )}
        {as === "textarea" && (
          <textarea
            id={id}
            name={id}
            rows={rows ?? 4}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            className={fieldClass}
          />
        )}
        {as === "select" && (
          <>
            <ChevronDown
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-300 ${accent}`}
            />
            <select
              id={id}
              name={id}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              className={fieldClass}
            >
              {children}
            </select>
          </>
        )}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Section header with step badge ─────────────────────────────── */
function SectionHead({
  step,
  title,
  hint,
  required,
  icon: Icon,
}: {
  step: string;
  title: string;
  hint?: string;
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div variants={itemVariants} className="flex items-start gap-2.5 mb-5">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#78899B]/15 to-[#78899B]/5 border border-[#78899B]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(140,154,171,0.08)] flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-[#394F73]" />
      </div>
      <div>
        <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#7A7E8F]">{step}</span>
        <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight">
          {title} {required && <span className="text-[#DC2626]">*</span>}
        </h3>
        {hint && <p className="text-[13px] text-[#7A7E8F] mt-1 leading-relaxed">{hint}</p>}
      </div>
    </motion.div>
  );
}

/* ── Multi-select pill ──────────────────────────────────────────── */
function ToggleCard({
  label,
  checked,
  onClick,
  icon: Icon,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={checked}
      className={`flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-left text-[14px] transition-all duration-200 ${
        checked
          ? "border-[#78899B]/50 bg-[#78899B]/[0.06] text-[#1A1A1A]"
          : "border-[#EBEBE9] bg-[#FBFBFA] text-[#3D4152] hover:border-[#D1D5DB]"
      }`}
    >
      <span
        className={`inline-flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
          checked ? "bg-[#78899B] border-[#78899B] text-white" : "border-[#B0B3BE] bg-white"
        }`}
      >
        {checked && <Check className="size-3.5" strokeWidth={3} />}
      </span>
      {Icon && <Icon className={`size-4 shrink-0 ${checked ? "text-[#394F73]" : "text-[#9A9EAF]"}`} />}
      <span className="leading-snug">{label}</span>
    </button>
  );
}

const Divider = () => (
  <div className="mx-6 my-4">
    <div className="h-px bg-gradient-to-r from-[#EBEBE9] via-[#F0EFED] to-transparent" />
  </div>
);

export function RegistrationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormShape>(initialForm);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState("");

  const clearError = (name: string) =>
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      // Reset dependent city fields when the country changes.
      if (name === "country") return { ...prev, country: value, city: "", cityOther: "" };
      return { ...prev, [name]: value };
    });
    clearError(name);
  };

  const toggleIn = (key: "selectedServices" | "selectedCategories", value: string) => {
    setForm((prev) => {
      const list = prev[key];
      return {
        ...prev,
        [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
      };
    });
    clearError(key);
  };

  const toggleConsent = (name: "termsAccepted" | "marketingOptIn") => {
    setForm((prev) => ({ ...prev, [name]: !prev[name] }));
    clearError(name);
  };

  const selectAccountType = (value: string) => {
    setForm((prev) => ({ ...prev, accountType: value }));
    clearError("accountType");
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.accountType) e.accountType = "Please tell us what you are registering for";
    if (!form.orgName.trim()) e.orgName = "Company name is required";
    if (!form.businessType) e.businessType = "Please select a business type";
    if (!form.country) e.country = "Please select a country";
    if (!form.personName.trim()) e.personName = "Full name is required";
    if (!form.personEmail.trim()) e.personEmail = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.personEmail))
      e.personEmail = "Please enter a valid email address";
    if (!form.personPhone.trim()) e.personPhone = "Phone number is required";
    if (form.selectedServices.length === 0) e.selectedServices = "Select at least one service";
    if (form.selectedCategories.length === 0)
      e.selectedCategories = "Select at least one product category";
    if (!form.termsAccepted) e.termsAccepted = "Required";

    setErrors(e);
    if (Object.keys(e).length > 0) {
      const firstKey = Object.keys(e)[0];
      const el = document.getElementById(firstKey) ?? document.getElementById(`${firstKey}-anchor`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setApiError("");
    if (!validate()) return;
    setState("submitting");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setState("success");
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  };

  const fProps = (name: string) => ({
    focused: focusedField === name,
    onFocus: () => setFocusedField(name),
    onBlur: () => setFocusedField(null),
    error: errors[name],
  });

  const errorCount = Object.keys(errors).length;
  const showCityDropdown = hasCityList(form.country);

  /* Step 6 asks the same four things of everyone, but a supplier and a buyer
     mean different things by "volume" or "certifications", so the labels and
     the help text follow whichever side they picked in step 1. */
  const isSupplier = form.accountType === "exporter";
  const requirementCopy = isSupplier
    ? {
        hint: "What you can make, and where you want to sell it.",
        volume: "Monthly Production Capacity",
        markets: "Target Export Markets",
        certifications: "Certifications You Hold",
        certificationsHint: "e.g. OEKO-TEX, BCI, WRAP, Sedex, GOTS",
        detail: "Tell Us About Your Business",
        detailHint:
          "Your product range, machinery and capacity, existing export markets and the buyers you already supply.",
      }
    : {
        hint: "What you need, in what quantity and by when.",
        volume: "Typical Order Volume",
        markets: "Markets You Sell Into",
        certifications: "Certifications You Require",
        certificationsHint: "e.g. OEKO-TEX, BCI, WRAP, Sedex, GOTS",
        detail: "Tell Us About Your Requirement",
        detailHint:
          "Products and specifications, quantities, target price, packaging and delivery terms, and anything else that helps us prepare.",
      };

  /* ─── Success State ─── */
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#78899B] via-[#78899B] to-[#78899B]" />
        <div className="relative px-10 py-20 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
            className="relative inline-flex items-center justify-center mb-8"
          >
            <div className="relative w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#78899B] to-[#647689] flex items-center justify-center shadow-[0_8px_32px_rgba(138,133,124,0.3)]">
              <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={2} />
            </div>
          </motion.div>
          <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-3">
            Registration Received
          </h3>
          <p className="text-[#5A5F72] text-base leading-relaxed max-w-md mx-auto">
            Thank you for registering with Pak Textiles Global Partners. Our team will review your
            details and be in touch within 2 to 3 business days with your next steps.
          </p>
          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setState("idle");
            }}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#394F73] underline underline-offset-4"
          >
            Register another company
          </button>
        </div>
      </motion.div>
    );
  }

  /* ─── Error State ─── */
  if (state === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="h-1.5 w-full bg-[#DC2626]" />
        <div className="px-10 py-16 text-center">
          <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#DC2626] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(220,38,38,0.3)]">
            <AlertCircle className="w-9 h-9 text-white" strokeWidth={2} />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-3">
            Something went wrong
          </h3>
          <p className="text-[#5A5F72] text-base max-w-sm mx-auto">
            {apiError || "Please try again in a moment."}
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#394F73] underline underline-offset-4"
          >
            Back to the form
          </button>
        </div>
      </motion.div>
    );
  }

  /* ─── Form State ─── */
  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      <div className="relative bg-white rounded-2xl border border-[#EBEBE9] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
        {/* Validation summary */}
        <AnimatePresence>
          {errorCount > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-[#DC2626]/[0.04] border-b border-[#DC2626]/10">
                <AlertCircle className="w-4 h-4 text-[#DC2626] flex-shrink-0" />
                <p className="text-sm font-medium text-[#DC2626]">
                  {errorCount === 1
                    ? "Please complete the highlighted field below."
                    : `Please complete ${errorCount} highlighted fields below.`}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Registration type ─── */}
        <div className="relative px-6 pt-6 pb-2" id="accountType-anchor">
          <SectionHead
            step="Step 1"
            title="What are you registering for?"
            hint="This decides which team picks up your registration."
            required
            icon={Target}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {accountTypes.map((t) => {
              const checked = form.accountType === t.value;
              const Icon = t.icon;
              return (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => selectAccountType(t.value)}
                  aria-pressed={checked}
                  className={`flex flex-col gap-2 rounded-xl border p-4 text-left transition-all duration-200 ${
                    checked
                      ? "border-[#78899B]/50 bg-[#78899B]/[0.06] shadow-[0_2px_12px_rgba(140,154,171,0.12)]"
                      : errors.accountType
                      ? "border-[#DC2626]/50 bg-[#DC2626]/[0.02]"
                      : "border-[#EBEBE9] bg-[#FBFBFA] hover:border-[#D1D5DB]"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span
                      className={`inline-flex size-9 items-center justify-center rounded-lg border ${
                        checked
                          ? "bg-[#78899B] border-[#78899B] text-white"
                          : "bg-white border-[#EBEBE9] text-[#394F73]"
                      }`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span
                      className={`inline-flex size-5 items-center justify-center rounded-full border transition-colors ${
                        checked ? "bg-[#78899B] border-[#78899B] text-white" : "border-[#B0B3BE] bg-white"
                      }`}
                    >
                      {checked && <Check className="size-3" strokeWidth={3} />}
                    </span>
                  </span>
                  <span className="font-heading font-bold text-[14px] text-[#1A1A1A] leading-snug">
                    {t.title}
                  </span>
                  <span className="text-[13px] text-[#6B7280] leading-relaxed">{t.desc}</span>
                </button>
              );
            })}
          </div>
          <AnimatePresence>
            {errors.accountType && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-1.5 mt-2.5 text-[13px] font-medium text-[#DC2626]"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.accountType}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <Divider />

        {/* ─── Company ─── */}
        <div className="relative px-6 pb-2">
          <SectionHead step="Step 2" title="Company Details" icon={Building2} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3.5">
            <Field id="orgName" label="Company Name" icon={Building2} required value={form.orgName} onChange={handleChange} placeholder="Your company" {...fProps("orgName")} />
            <Field id="businessType" label="Business Type" icon={Briefcase} as="select" required value={form.businessType} onChange={handleChange} {...fProps("businessType")}>
              <option value="">Select a type</option>
              {businessTypes.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </Field>
            <Field id="registrationNo" label="Registration No." icon={Hash} value={form.registrationNo} onChange={handleChange} placeholder="Company / NTN reg. no." {...fProps("registrationNo")} />
            <Field id="website" label="Website" icon={Globe2} type="url" value={form.website} onChange={handleChange} placeholder="https://example.com" {...fProps("website")} />
            <Field id="employees" label="Employees" icon={Users} as="select" value={form.employees} onChange={handleChange} {...fProps("employees")}>
              <option value="">Select a band</option>
              {employeeBands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </Field>
            <Field id="yearsTrading" label="Years Trading" icon={CalendarClock} as="select" value={form.yearsTrading} onChange={handleChange} {...fProps("yearsTrading")}>
              <option value="">Select a range</option>
              {tradingYears.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </Field>
            <Field id="country" label="Country" icon={Globe2} as="select" required value={form.country} onChange={handleChange} {...fProps("country")}>
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </Field>

            {/* City — dropdown for UK/Pakistan, free-text otherwise */}
            {showCityDropdown ? (
              <Field id="city" label="City" icon={MapPin} as="select" value={form.city} onChange={handleChange} {...fProps("city")}>
                <option value="">Select a city</option>
                {cityLists[form.country].map((c) => (
                  <option key={c} value={c}>{c === "other" ? "Other" : c}</option>
                ))}
              </Field>
            ) : (
              <Field id="cityOther" label="City" icon={MapPin} value={form.cityOther} onChange={handleChange} placeholder="Your city" {...fProps("cityOther")} />
            )}

            {/* When UK/Pakistan + "Other" city chosen, capture the city name */}
            {showCityDropdown && form.city === "other" && (
              <Field id="cityOther" label="City (other)" icon={MapPin} value={form.cityOther} onChange={handleChange} placeholder="Enter your city" {...fProps("cityOther")} />
            )}

            <div className="sm:col-span-2 lg:col-span-3">
              <Field id="address" label="Address" icon={MapPin} value={form.address} onChange={handleChange} placeholder="Street address, postcode" {...fProps("address")} />
            </div>
          </div>
        </div>

        <Divider />

        {/* ─── Contact person ─── */}
        <div className="relative px-6 pb-2">
          <SectionHead step="Step 3" title="Primary Contact" icon={User} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3.5">
            <Field id="personName" label="Full Name" icon={User} required value={form.personName} onChange={handleChange} placeholder="Jane Smith" {...fProps("personName")} />
            <Field id="personJobTitle" label="Job Title" icon={Briefcase} value={form.personJobTitle} onChange={handleChange} placeholder="e.g. Export Manager" {...fProps("personJobTitle")} />
            <Field id="personEmail" label="Work Email" icon={Mail} type="email" required value={form.personEmail} onChange={handleChange} placeholder="jane@example.com" {...fProps("personEmail")} />
            <Field id="personPhone" label="Phone" icon={Phone} type="tel" required value={form.personPhone} onChange={handleChange} placeholder="+92 300 0000000" {...fProps("personPhone")} />
            <Field id="whatsapp" label="WhatsApp" icon={Phone} type="tel" value={form.whatsapp} onChange={handleChange} placeholder="+92 300 0000000" {...fProps("whatsapp")} />
            <Field id="preferredContact" label="Preferred Contact" icon={Send} as="select" value={form.preferredContact} onChange={handleChange} {...fProps("preferredContact")}>
              <option value="">No preference</option>
              {["Email", "Phone call", "WhatsApp"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Field>
          </div>
        </div>

        <Divider />

        {/* ─── Services wanted ─── */}
        <div className="relative px-6 pb-2" id="selectedServices-anchor">
          <SectionHead
            step="Step 4"
            title="Which services do you need?"
            hint="Choose as many as apply. You can change this later."
            required
            icon={Layers}
          />
          <fieldset>
            <legend className="sr-only">Services you need</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {serviceOptions.map((s) => (
                <ToggleCard
                  key={s.value}
                  label={s.value}
                  icon={s.icon}
                  checked={form.selectedServices.includes(s.value)}
                  onClick={() => toggleIn("selectedServices", s.value)}
                />
              ))}
            </div>
          </fieldset>
          <AnimatePresence>
            {errors.selectedServices && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.selectedServices}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <Divider />

        {/* ─── Product categories ─── */}
        <div className="relative px-6 pb-2" id="selectedCategories-anchor">
          <SectionHead
            step="Step 5"
            title="Product categories"
            hint="The categories you buy, make or want to sell."
            required
            icon={Package}
          />
          <fieldset>
            <legend className="sr-only">Product categories</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {categoryOptions.map((c) => (
                <ToggleCard
                  key={c}
                  label={c}
                  checked={form.selectedCategories.includes(c)}
                  onClick={() => toggleIn("selectedCategories", c)}
                />
              ))}
            </div>
          </fieldset>
          <AnimatePresence>
            {errors.selectedCategories && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.selectedCategories}
              </motion.p>
            )}
          </AnimatePresence>
          {form.selectedCategories.includes("Other") && (
            <div className="mt-3.5 max-w-sm">
              <Field id="otherCategory" label="Other Category" icon={Layers} value={form.otherCategory} onChange={handleChange} placeholder="Tell us the category" {...fProps("otherCategory")} />
            </div>
          )}
        </div>

        <Divider />

        {/* ─── Requirement ─── */}
        <div className="relative px-6 pb-2">
          <SectionHead step="Step 6" title="Your Requirement" hint={requirementCopy.hint} icon={MessageSquare} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3.5">
            <Field id="orderVolume" label={requirementCopy.volume} icon={Package} as="select" value={form.orderVolume} onChange={handleChange} {...fProps("orderVolume")}>
              <option value="">Select a volume</option>
              {volumeBands.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </Field>
            <Field id="timeline" label="How Soon Do You Need Us?" icon={CalendarClock} as="select" value={form.timeline} onChange={handleChange} {...fProps("timeline")}>
              <option value="">Select a timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </Field>
            <Field id="targetMarkets" label={requirementCopy.markets} icon={Globe2} value={form.targetMarkets} onChange={handleChange} placeholder="e.g. UK, Germany, UAE" {...fProps("targetMarkets")} />
            <div className="sm:col-span-2 lg:col-span-3">
              <Field id="certifications" label={requirementCopy.certifications} icon={ShieldCheck} value={form.certifications} onChange={handleChange} placeholder={requirementCopy.certificationsHint} {...fProps("certifications")} />
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <Field id="requirement" label={requirementCopy.detail} icon={MessageSquare} as="textarea" rows={4} value={form.requirement} onChange={handleChange} placeholder={requirementCopy.detailHint} {...fProps("requirement")} />
            </div>
          </div>
        </div>

        <Divider />

        {/* ─── Finish ─── */}
        <div className="relative px-6 pb-2" id="termsAccepted-anchor">
          <SectionHead step="Step 7" title="Finish Up" icon={ShieldCheck} />
          <div className="max-w-sm mb-4">
            <Field id="howHeard" label="How Did You Hear About Us?" icon={Radio} as="select" value={form.howHeard} onChange={handleChange} {...fProps("howHeard")}>
              <option value="">Select an option</option>
              {referralSources.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </Field>
          </div>

          <div className="space-y-2.5">
            {(
              [
                {
                  key: "termsAccepted" as const,
                  required: true,
                  node: (
                    <>
                      I accept the{" "}
                      <Link href="/terms" target="_blank" className="font-semibold text-[#394F73] underline underline-offset-2">
                        Terms &amp; Conditions
                      </Link>{" "}
                      and the{" "}
                      <Link href="/privacy" target="_blank" className="font-semibold text-[#394F73] underline underline-offset-2">
                        Privacy Policy
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  key: "marketingOptIn" as const,
                  required: false,
                  node: <>Send me market updates, buyer alerts and news by email.</>,
                },
              ]
            ).map(({ key, required, node }) => {
              const checked = form[key];
              const hasErr = !!errors[key];
              return (
                <label
                  key={key}
                  className={`flex items-start gap-3 rounded-lg border px-3.5 py-3 cursor-pointer transition-colors ${
                    hasErr
                      ? "border-[#DC2626] bg-[#DC2626]/[0.02]"
                      : checked
                      ? "border-[#78899B]/40 bg-[#78899B]/[0.04]"
                      : "border-[#EBEBE9] bg-[#FBFBFA] hover:border-[#D1D5DB]"
                  }`}
                >
                  <input
                    id={key}
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleConsent(key)}
                    className="sr-only"
                  />
                  <span
                    className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                      checked ? "bg-[#78899B] border-[#78899B] text-white" : hasErr ? "border-[#DC2626] bg-white" : "border-[#B0B3BE] bg-white"
                    }`}
                  >
                    {checked && <Check className="size-3.5" strokeWidth={3} />}
                  </span>
                  <span className="text-sm leading-relaxed text-[#3D4152]">
                    {node} {required && <span className="text-[#DC2626]">*</span>}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* ─── Footer ─── */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#EBEBE9] bg-white px-6 py-4 mt-4"
        >
          <p className="text-sm text-[#7A7E8F]">
            Fields marked <span className="text-[#DC2626]">*</span> are required.
          </p>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="group relative shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-lg font-heading font-bold text-[14px] text-white bg-gradient-to-r from-[#78899B] to-[#5E7088] hover:from-[#647689] hover:to-[#78899B] transition-all duration-300 shadow-[0_4px_20px_rgba(140,154,171,0.25)] hover:shadow-[0_8px_30px_rgba(140,154,171,0.35)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {state === "submitting" ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Submitting…
              </span>
            ) : (
              <>
                Complete Registration
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </motion.form>
  );
}
