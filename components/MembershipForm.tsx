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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

/* ── Option lists ──────────────────────────────────────────────── */
const employeeBands = ["1–10", "11–50", "51–200", "201–500", "500+"];

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

const sectorOptions = [
  "Home Textile",
  "Apparel & Accessories",
  "Sportswear & Activewear",
  "Healthcare Textile",
  "Accessories & Allied Supplies",
  "Other",
];

const hasCityList = (country: string) => country === "uk" || country === "pakistan";

const initialForm = {
  // Organisation
  orgName: "",
  employees: "",
  registrationNo: "",
  country: "",
  city: "",
  cityOther: "",
  address: "",
  postalCode: "",
  orgPhone: "",
  whatsapp: "",
  website: "",
  coreProducts: "",
  orgProfile: "",
  // Industry
  selectedSectors: [] as string[],
  otherSector: "",
  // Applicant
  personName: "",
  personJobTitle: "",
  personEmail: "",
  personPhone: "",
  personNationality: "",
  // Consents
  termsAccepted: false,
  membershipTermsAccepted: false,
  arbitrationAccepted: false,
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
  const accent = error ? "text-[#DC2626]" : focused ? "text-[#2F7549]" : "text-[#9A9EAF]";
  const fieldClass = `relative w-full bg-[#FBFBFA] border text-[#16291E] placeholder-[#A8ACB8] text-[14px] py-2.5 rounded-lg transition-all duration-300 outline-none hover:border-[#D1D5DB] ${
    as === "select" ? "pl-10 pr-9 appearance-none cursor-pointer [&>option]:bg-white [&>option]:text-[#16291E]" : "pl-10 pr-4"
  } ${as === "textarea" ? "resize-none" : ""} ${
    error
      ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
      : "border-[#EBEBE9] focus:border-[#2F7549]/40 focus:bg-white focus:ring-2 focus:ring-[#2F7549]/10"
  }`;

  return (
    <motion.div variants={itemVariants}>
      <label
        htmlFor={id}
        className={`block text-[12px] font-bold tracking-[0.1em] uppercase mb-1.5 transition-colors duration-300 ${
          error ? "text-[#DC2626]" : focused ? "text-[#2F7549]" : "text-[#3D4152]"
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
            error ? "bg-[#DC2626] opacity-100" : focused ? "bg-[#2F7549] opacity-100" : "bg-transparent opacity-0"
          }`}
        />
        <Icon
          className={`absolute left-3 ${as === "textarea" ? "top-3" : "top-1/2 -translate-y-1/2"} w-[16px] h-[16px] transition-colors duration-300 ${accent}`}
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
function SectionHead({ step, title, icon: Icon }: { step: string; title: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-5">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2F7549]/15 to-[#2F7549]/5 border border-[#2F7549]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(4,120,87,0.08)]">
        <Icon className="w-3.5 h-3.5 text-[#2F7549]" />
      </div>
      <div>
        <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#7A7E8F]">{step}</span>
        <h3 className="text-sm font-bold text-[#16291E] leading-tight">{title}</h3>
      </div>
    </motion.div>
  );
}

const Divider = () => (
  <div className="mx-6 my-4">
    <div className="h-px bg-gradient-to-r from-[#EBEBE9] via-[#F0EFED] to-transparent" />
  </div>
);

export function MembershipForm() {
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

  const toggleSector = (sector: string) => {
    setForm((prev) => {
      const selected = prev.selectedSectors.includes(sector)
        ? prev.selectedSectors.filter((s) => s !== sector)
        : [...prev.selectedSectors, sector];
      return { ...prev, selectedSectors: selected };
    });
    clearError("selectedSectors");
  };

  const toggleConsent = (name: "termsAccepted" | "membershipTermsAccepted" | "arbitrationAccepted") => {
    setForm((prev) => ({ ...prev, [name]: !prev[name] }));
    clearError(name);
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.orgName.trim()) e.orgName = "Organisation name is required";
    if (!form.country) e.country = "Please select a country";
    if (!form.personName.trim()) e.personName = "Contact name is required";
    if (!form.personEmail.trim()) e.personEmail = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.personEmail))
      e.personEmail = "Please enter a valid email address";
    if (form.selectedSectors.length === 0) e.selectedSectors = "Select at least one sector";
    if (!form.termsAccepted) e.termsAccepted = "Required";
    if (!form.membershipTermsAccepted) e.membershipTermsAccepted = "Required";

    setErrors(e);
    if (Object.keys(e).length > 0) {
      const el = document.getElementById(Object.keys(e)[0]);
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
      const res = await fetch("/api/membership", {
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
      setTimeout(() => setState("idle"), 5000);
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

  /* ─── Success State ─── */
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#3E8F5E] via-[#2F7549] to-[#3E8F5E]" />
        <div className="relative px-10 py-20 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
            className="relative inline-flex items-center justify-center mb-8"
          >
            <div className="relative w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#3E8F5E] to-[#3C8F5E] flex items-center justify-center shadow-[0_8px_32px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={2} />
            </div>
          </motion.div>
          <h3 className="font-heading font-extrabold text-2xl text-[#16291E] mb-3">
            Application Received
          </h3>
          <p className="text-[#5A5F72] text-base leading-relaxed max-w-md mx-auto">
            Thank you for applying to Pakistan Textile Partners. Our membership team will review your
            details and be in touch within 2–3 business days.
          </p>
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
          <h3 className="font-heading font-extrabold text-2xl text-[#16291E] mb-3">Something went wrong</h3>
          <p className="text-[#5A5F72] text-base max-w-sm mx-auto">{apiError || "Please try again in a moment."}</p>
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

        {/* ─── Organisation ─── */}
        <div className="relative px-6 pt-6 pb-2">
          <SectionHead step="Step 1" title="Organisation Details" icon={Building2} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3.5">
            <Field id="orgName" label="Organisation Name" icon={Building2} required value={form.orgName} onChange={handleChange} placeholder="Your company" {...fProps("orgName")} />
            <Field id="employees" label="Employees" icon={Users} as="select" value={form.employees} onChange={handleChange} {...fProps("employees")}>
              <option value="">Select a band</option>
              {employeeBands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </Field>
            <Field id="registrationNo" label="Registration No." icon={Hash} value={form.registrationNo} onChange={handleChange} placeholder="Company / NTN reg. no." {...fProps("registrationNo")} />
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

            <Field id="postalCode" label="Postal Code" icon={MapPin} value={form.postalCode} onChange={handleChange} placeholder="e.g. 75500" {...fProps("postalCode")} />
            <div className="sm:col-span-2 lg:col-span-3">
              <Field id="address" label="Address" icon={MapPin} value={form.address} onChange={handleChange} placeholder="Street address" {...fProps("address")} />
            </div>
            <Field id="orgPhone" label="Phone" icon={Phone} type="tel" value={form.orgPhone} onChange={handleChange} placeholder="+92 300 0000000" {...fProps("orgPhone")} />
            <Field id="whatsapp" label="WhatsApp" icon={Phone} type="tel" value={form.whatsapp} onChange={handleChange} placeholder="+92 300 0000000" {...fProps("whatsapp")} />
            <Field id="website" label="Website" icon={Globe2} type="url" value={form.website} onChange={handleChange} placeholder="https://example.com" {...fProps("website")} />
            <div className="sm:col-span-2 lg:col-span-3">
              <Field id="coreProducts" label="Core Products / Services" icon={Factory} value={form.coreProducts} onChange={handleChange} placeholder="e.g. bed linen, towels" {...fProps("coreProducts")} />
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <Field id="orgProfile" label="Organisation Profile" icon={MessageSquare} as="textarea" rows={3} value={form.orgProfile} onChange={handleChange} placeholder="A short description of your business, capacity and export experience…" {...fProps("orgProfile")} />
            </div>
          </div>
        </div>

        <Divider />

        {/* ─── Industry / Sectors ─── */}
        <div className="relative px-6 pb-2">
          <SectionHead step="Step 2" title="Industry Sectors" icon={Layers} />
          <fieldset>
            <legend
              className={`block text-[12px] font-bold tracking-[0.1em] uppercase mb-2.5 ${
                errors.selectedSectors ? "text-[#DC2626]" : "text-[#3D4152]"
              }`}
            >
              Which sectors do you operate in? <span className="text-[#DC2626]">*</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {sectorOptions.map((sector) => {
                const checked = form.selectedSectors.includes(sector);
                return (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => toggleSector(sector)}
                    aria-pressed={checked}
                    className={`flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-left text-[14px] transition-all duration-200 ${
                      checked
                        ? "border-[#2F7549]/50 bg-[#2F7549]/[0.06] text-[#16291E]"
                        : "border-[#EBEBE9] bg-[#FBFBFA] text-[#3D4152] hover:border-[#D1D5DB]"
                    }`}
                  >
                    <span
                      className={`inline-flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                        checked ? "bg-[#2F7549] border-[#2F7549] text-white" : "border-[#B0B3BE] bg-white"
                      }`}
                    >
                      {checked && <Check className="size-3.5" strokeWidth={3} />}
                    </span>
                    {sector}
                  </button>
                );
              })}
            </div>
            <AnimatePresence>
              {errors.selectedSectors && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.selectedSectors}
                </motion.p>
              )}
            </AnimatePresence>
          </fieldset>

          {form.selectedSectors.includes("Other") && (
            <div className="mt-3.5">
              <Field id="otherSector" label="Other Sector" icon={Layers} value={form.otherSector} onChange={handleChange} placeholder="Tell us your sector" {...fProps("otherSector")} />
            </div>
          )}
        </div>

        <Divider />

        {/* ─── Applicant ─── */}
        <div className="relative px-6 pb-2">
          <SectionHead step="Step 3" title="Applicant Details" icon={User} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3.5">
            <Field id="personName" label="Full Name" icon={User} required value={form.personName} onChange={handleChange} placeholder="Jane Smith" {...fProps("personName")} />
            <Field id="personJobTitle" label="Job Title" icon={User} value={form.personJobTitle} onChange={handleChange} placeholder="e.g. Export Manager" {...fProps("personJobTitle")} />
            <Field id="personEmail" label="Email Address" icon={Mail} type="email" required value={form.personEmail} onChange={handleChange} placeholder="jane@example.com" {...fProps("personEmail")} />
            <Field id="personPhone" label="Phone" icon={Phone} type="tel" value={form.personPhone} onChange={handleChange} placeholder="+92 300 0000000" {...fProps("personPhone")} />
            <Field id="personNationality" label="Nationality" icon={Globe2} value={form.personNationality} onChange={handleChange} placeholder="e.g. Pakistani" {...fProps("personNationality")} />
          </div>
        </div>

        <Divider />

        {/* ─── Consents ─── */}
        <div className="relative px-6 pb-2">
          <SectionHead step="Step 4" title="Agreements" icon={ShieldCheck} />
          <div className="space-y-2.5">
            {(
              [
                {
                  key: "termsAccepted" as const,
                  node: (
                    <>
                      I accept the{" "}
                      <Link href="/terms" target="_blank" className="font-semibold text-[#2F7549] underline underline-offset-2">
                        Terms &amp; Conditions
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  key: "membershipTermsAccepted" as const,
                  node: (
                    <>
                      I accept the{" "}
                      <Link href="/membership/terms" target="_blank" className="font-semibold text-[#2F7549] underline underline-offset-2">
                        Membership Terms
                      </Link>
                      .
                    </>
                  ),
                },
              ]
            ).map(({ key, node }) => {
              const checked = form[key];
              const hasErr = !!errors[key];
              return (
                <label
                  key={key}
                  className={`flex items-start gap-3 rounded-lg border px-3.5 py-3 cursor-pointer transition-colors ${
                    hasErr
                      ? "border-[#DC2626] bg-[#DC2626]/[0.02]"
                      : checked
                      ? "border-[#2F7549]/40 bg-[#2F7549]/[0.04]"
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
                      checked ? "bg-[#2F7549] border-[#2F7549] text-white" : hasErr ? "border-[#DC2626] bg-white" : "border-[#B0B3BE] bg-white"
                    }`}
                  >
                    {checked && <Check className="size-3.5" strokeWidth={3} />}
                  </span>
                  <span className="text-sm leading-relaxed text-[#3D4152]">
                    {node} <span className="text-[#DC2626]">*</span>
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
            className="group relative shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-lg font-heading font-bold text-[14px] text-white bg-gradient-to-r from-[#2F7549] to-[#245C3A] hover:from-[#3C8F5E] hover:to-[#2F7549] transition-all duration-300 shadow-[0_4px_20px_rgba(4,120,87,0.25)] hover:shadow-[0_8px_30px_rgba(4,120,87,0.35)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
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
                Submit Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </motion.form>
  );
}
