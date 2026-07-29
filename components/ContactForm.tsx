"use client";

import { useState } from "react";
import {
  User, Mail, MessageSquare, ChevronDown, CheckCircle2,
  Phone, Tag, AlertCircle, ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

/* Subjects that route a general enquiry to the right desk. Anything that needs
   business detail (company, volumes, services wanted) belongs on /register. */
const subjects = [
  "General enquiry",
  "Product information",
  "Services information",
  "Membership",
  "Partnership",
  "Careers",
  "Feedback or complaint",
  "Other",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

/* One field: label, left icon, and the focus/error accent bar.
   Note the input is NOT `relative` — it would then paint over the absolutely
   positioned icon and accent bar and hide them. */
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
  const fieldClass = `w-full bg-[#F8F8F7] border text-[#1A1A1A] placeholder-[#9A9EAF] text-[15px] py-3.5 rounded-xl transition-all duration-300 outline-none hover:border-[#B0B3BE] ${
    as === "select" ? "pl-11 pr-10 appearance-none cursor-pointer [&>option]:bg-white [&>option]:text-[#1A1A1A]" : "pl-11 pr-4"
  } ${as === "textarea" ? "resize-none" : ""} ${
    error
      ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
      : "border-[#D8D5CF] focus:border-[#78899B]/40 focus:bg-white focus:ring-2 focus:ring-[#78899B]/10"
  }`;

  return (
    <motion.div variants={itemVariants}>
      <label
        htmlFor={id}
        className={`block text-[13px] font-bold tracking-[0.12em] uppercase mb-2 transition-colors duration-300 ${
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
      <div className="relative">
        <div
          className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${
            error ? "bg-[#DC2626] opacity-100" : focused ? "bg-[#78899B] opacity-100" : "bg-transparent opacity-0"
          }`}
        />
        <Icon
          className={`absolute left-3.5 ${as === "textarea" ? "top-4" : "top-1/2 -translate-y-1/2"} w-[18px] h-[18px] pointer-events-none transition-colors duration-300 ${accent}`}
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
            rows={rows ?? 6}
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
              className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-300 ${accent}`}
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

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address";
    if (!form.enquiryType) e.enquiryType = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    if (Object.keys(e).length > 0) {
      const el = document.getElementById(Object.keys(e)[0]);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
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
      setApiError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
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

  /* ─── Success State ─── */
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="h-1.5 w-full bg-[#78899B]" />
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
            Message Sent Successfully
          </h3>
          <p className="text-[#5A5F72] text-base leading-relaxed max-w-md mx-auto">
            Thank you for reaching out. A member of our team will be in touch within 2 to 3 business days.
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
          <div className="w-[72px] h-[72px] rounded-2xl bg-[#DC2626] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(220,38,38,0.3)]">
            <AlertCircle className="w-9 h-9 text-white" strokeWidth={2} />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-3">
            Something went wrong
          </h3>
          <p className="text-[#5A5F72] text-base max-w-sm mx-auto">
            {apiError || "Please try again in a moment."}
          </p>
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
      className="relative"
    >
      <div className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
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
              <div className="flex items-center gap-3 px-7 py-3.5 bg-[#DC2626]/[0.04] border-b border-[#DC2626]/10">
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

        <div className="px-7 py-8 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
          <Field id="name" label="Full Name" icon={User} required value={form.name} onChange={handleChange} placeholder="Jane Smith" {...fProps("name")} />
          <Field id="email" label="Email Address" icon={Mail} type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" {...fProps("email")} />
          <Field id="phone" label="Phone" icon={Phone} type="tel" value={form.phone} onChange={handleChange} placeholder="+44 7000 000000" {...fProps("phone")} />
          <Field id="enquiryType" label="Subject" icon={Tag} as="select" required value={form.enquiryType} onChange={handleChange} {...fProps("enquiryType")}>
            <option value="" disabled>Select a subject</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Field>
          <div className="sm:col-span-2">
            <Field id="message" label="Message" icon={MessageSquare} as="textarea" required value={form.message} onChange={handleChange} placeholder="Tell us how we can help…" {...fProps("message")} />
          </div>
        </div>

        {/* ─── Footer ─── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D8D5CF] bg-white px-7 py-5"
        >
          <p className="text-sm text-[#7A7E8F]">
            Fields marked <span className="text-[#DC2626]">*</span> are required.
          </p>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="group relative shrink-0 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-heading font-bold text-[15px] text-white bg-gradient-to-r from-[#78899B] to-[#5E7088] hover:from-[#647689] hover:to-[#78899B] transition-all duration-300 shadow-[0_4px_20px_rgba(140,154,171,0.25)] hover:shadow-[0_8px_30px_rgba(140,154,171,0.35)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {state === "submitting" ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending…
              </span>
            ) : (
              <>
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </motion.form>
  );
}
