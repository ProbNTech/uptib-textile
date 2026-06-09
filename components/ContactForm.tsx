"use client";

import { useState, useRef } from "react";
import {
  Send, User, Mail, Building2, MessageSquare,
  ChevronDown, CheckCircle2, Sparkles, Phone,
  AlertCircle, ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

const enquiryTypes = [
  "Source products",
  "Sell globally",
  "A service",
  "Membership",
  "Other",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    enquiryType: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address";
    if (!form.enquiryType) newErrors.enquiryType = "Please select an enquiry type";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Scroll to first error
      const firstKey = Object.keys(newErrors)[0];
      const el = document.getElementById(firstKey);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return Object.keys(newErrors).length === 0;
  };

  const filledFields = [form.name, form.email, form.enquiryType, form.message].filter(
    (v) => v.trim().length > 0
  ).length;
  const progress = Math.round((filledFields / 4) * 100);

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

  const errorCount = Object.keys(errors).length;

  const inputBase = (field: string, accent: string) => {
    const hasErr = !!errors[field];
    const isFocused = focusedField === field;
    return `relative w-full bg-[#F8F8F7] border text-[#16291E] placeholder-[#9A9EAF] text-[15px] pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none ${
      hasErr
        ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
        : isFocused
        ? `border-${accent}/40 bg-white ring-2 ring-${accent}/10`
        : `border-[#D8D5CF] hover:border-[#B0B3BE] focus:border-${accent}/40 focus:bg-white focus:ring-2 focus:ring-${accent}/10`
    }`;
  };

  /* ─── Success State ─── */
  if (state === "success") {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden"
        >
          <div className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            {/* Animated gradient top bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#3E8F5E] via-[#2F7549] to-[#3E8F5E] animate-[shimmer_3s_ease-in-out_infinite]" />

            <div className="relative px-10 py-20 text-center">
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="relative inline-flex items-center justify-center mb-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.6, 0.3], scale: [0.5, 1.4, 1] }}
                  transition={{ delay: 0.4, duration: 1.2 }}
                  className="absolute w-28 h-28 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }}
                />
                <div className="relative w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#3E8F5E] to-[#3C8F5E] flex items-center justify-center shadow-[0_8px_32px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="font-heading font-extrabold text-2xl text-[#16291E] mb-3"
              >
                Message Sent Successfully
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="text-[#5A5F72] text-base leading-relaxed max-w-md mx-auto"
              >
                Thank you for reaching out. A member of our team will be in touch within 2–3 business days.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#3E8F5E]/40 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
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
        <div className="h-1.5 w-full bg-gradient-to-r from-[#DC2626] via-[#DC2626] to-[#DC2626]" />
        <div className="px-10 py-16 text-center">
          <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#DC2626] to-[#DC2626] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(220,38,38,0.3)]">
            <AlertCircle className="w-9 h-9 text-white" strokeWidth={2} />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-[#16291E] mb-3">
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
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      <div className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] transition-shadow duration-500">
        {/* Progress bar */}
        <div className="h-[2px] bg-[#F0EFED]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2F7549] to-[#3E8F5E]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

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
                    ? "Please complete the required field below."
                    : `Please complete ${errorCount} required fields below.`}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Personal Details ─── */}
        <div className="relative px-7 pt-8 pb-2">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2F7549]/15 to-[#2F7549]/5 border border-[#2F7549]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(4,120,87,0.08)]">
              <User className="w-4 h-4 text-[#2F7549]" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#7A7E8F]">
                Step 1
              </span>
              <h3 className="text-sm font-bold text-[#16291E] leading-tight">Personal Details</h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className={`block text-[13px] font-bold tracking-[0.12em] uppercase mb-2 transition-colors duration-300 ${
                  errors.name ? "text-[#DC2626]" : focusedField === "name" ? "text-[#2F7549]" : "text-[#3D4152]"
                }`}
              >
                Full Name <span className="text-[#DC2626]">*</span>
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${
                  errors.name ? "bg-[#DC2626] opacity-100" : focusedField === "name" ? "bg-[#2F7549] opacity-100" : "bg-transparent opacity-0"
                }`} />
                <User className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] transition-colors duration-300 ${
                  errors.name ? "text-[#DC2626]" : focusedField === "name" ? "text-[#2F7549]" : "text-[#9A9EAF]"
                }`} />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`relative w-full bg-[#F8F8F7] border text-[#16291E] placeholder-[#9A9EAF] text-[15px] pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none hover:border-[#B0B3BE] ${
                    errors.name
                      ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
                      : "border-[#D8D5CF] focus:border-[#2F7549]/40 focus:bg-white focus:ring-2 focus:ring-[#2F7549]/10"
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className={`block text-[13px] font-bold tracking-[0.12em] uppercase mb-2 transition-colors duration-300 ${
                  errors.email ? "text-[#DC2626]" : focusedField === "email" ? "text-[#2F7549]" : "text-[#3D4152]"
                }`}
              >
                Email Address <span className="text-[#DC2626]">*</span>
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${
                  errors.email ? "bg-[#DC2626] opacity-100" : focusedField === "email" ? "bg-[#2F7549] opacity-100" : "bg-transparent opacity-0"
                }`} />
                <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] transition-colors duration-300 ${
                  errors.email ? "text-[#DC2626]" : focusedField === "email" ? "text-[#2F7549]" : "text-[#9A9EAF]"
                }`} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`relative w-full bg-[#F8F8F7] border text-[#16291E] placeholder-[#9A9EAF] text-[15px] pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none hover:border-[#B0B3BE] ${
                    errors.email
                      ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
                      : "border-[#D8D5CF] focus:border-[#2F7549]/40 focus:bg-white focus:ring-2 focus:ring-[#2F7549]/10"
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-7 my-6">
          <div className="h-px bg-gradient-to-r from-[#D8D5CF] via-[#E8E6E3] to-transparent" />
        </div>

        {/* ─── Enquiry Details ─── */}
        <div className="relative px-7 pb-2">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3E8F5E]/15 to-[#3E8F5E]/5 border border-[#3E8F5E]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(16,185,129,0.08)]">
              <Sparkles className="w-4 h-4 text-[#3E8F5E]" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#7A7E8F]">
                Step 2
              </span>
              <h3 className="text-sm font-bold text-[#16291E] leading-tight">Enquiry Details</h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Phone */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="phone"
                className={`block text-[13px] font-bold tracking-[0.12em] uppercase mb-2 transition-colors duration-300 ${
                  focusedField === "phone" ? "text-[#3E8F5E]" : "text-[#3D4152]"
                }`}
              >
                Phone <span className="text-[#9A9EAF] text-[11px] normal-case tracking-normal font-normal">(optional)</span>
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${focusedField === "phone" ? "bg-[#3E8F5E] opacity-100" : "bg-transparent opacity-0"}`} />
                <Phone className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] transition-colors duration-300 ${focusedField === "phone" ? "text-[#3E8F5E]" : "text-[#9A9EAF]"}`} />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 7000 000000"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-[#F8F8F7] border border-[#D8D5CF] text-[#16291E] placeholder-[#9A9EAF] text-[15px] pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none hover:border-[#B0B3BE] focus:border-[#3E8F5E]/40 focus:bg-white focus:ring-2 focus:ring-[#3E8F5E]/10"
                />
              </div>
            </motion.div>

            {/* Organisation */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="organisation"
                className={`block text-[13px] font-bold tracking-[0.12em] uppercase mb-2 transition-colors duration-300 ${
                  focusedField === "organisation" ? "text-[#3E8F5E]" : "text-[#3D4152]"
                }`}
              >
                Organisation <span className="text-[#9A9EAF] text-[11px] normal-case tracking-normal font-normal">(optional)</span>
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${focusedField === "organisation" ? "bg-[#3E8F5E] opacity-100" : "bg-transparent opacity-0"}`} />
                <Building2 className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] transition-colors duration-300 ${focusedField === "organisation" ? "text-[#3E8F5E]" : "text-[#9A9EAF]"}`} />
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  placeholder="Your company"
                  value={form.organisation}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("organisation")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-[#F8F8F7] border border-[#D8D5CF] text-[#16291E] placeholder-[#9A9EAF] text-[15px] pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none hover:border-[#B0B3BE] focus:border-[#3E8F5E]/40 focus:bg-white focus:ring-2 focus:ring-[#3E8F5E]/10"
                />
              </div>
            </motion.div>

            {/* Enquiry Type */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="enquiryType"
                className={`block text-[13px] font-bold tracking-[0.12em] uppercase mb-2 transition-colors duration-300 ${
                  errors.enquiryType ? "text-[#DC2626]" : focusedField === "enquiryType" ? "text-[#3E8F5E]" : "text-[#3D4152]"
                }`}
              >
                What do you need? <span className="text-[#DC2626]">*</span>
              </label>
              <div className="relative group">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${
                  errors.enquiryType ? "bg-[#DC2626] opacity-100" : focusedField === "enquiryType" ? "bg-[#3E8F5E] opacity-100" : "bg-transparent opacity-0"
                }`} />
                <MessageSquare className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] transition-colors duration-300 ${
                  errors.enquiryType ? "text-[#DC2626]" : focusedField === "enquiryType" ? "text-[#3E8F5E]" : "text-[#9A9EAF]"
                }`} />
                <ChevronDown className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-300 ${
                  errors.enquiryType ? "text-[#DC2626]" : focusedField === "enquiryType" ? "text-[#3E8F5E]" : "text-[#9A9EAF]"
                }`} />
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={form.enquiryType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("enquiryType")}
                  onBlur={() => setFocusedField(null)}
                  className={`relative w-full bg-[#F8F8F7] border text-[#16291E] text-[15px] pl-11 pr-10 py-3.5 rounded-xl transition-all duration-300 outline-none appearance-none cursor-pointer hover:border-[#B0B3BE] [&>option]:bg-white [&>option]:text-[#16291E] ${
                    errors.enquiryType
                      ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
                      : "border-[#D8D5CF] focus:border-[#3E8F5E]/40 focus:bg-white focus:ring-2 focus:ring-[#3E8F5E]/10"
                  }`}
                >
                  <option value="" disabled className="text-[#9A9EAF]">
                    Select a topic
                  </option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <AnimatePresence>
                {errors.enquiryType && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.enquiryType}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-7 my-6">
          <div className="h-px bg-gradient-to-r from-[#D8D5CF] via-[#E8E6E3] to-transparent" />
        </div>

        {/* ─── Message Section ─── */}
        <div className="relative px-7 pb-7">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2F7549]/15 to-[#2F7549]/5 border border-[#2F7549]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(4,120,87,0.08)]">
              <Send className="w-4 h-4 text-[#2F7549]" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#7A7E8F]">
                Step 3
              </span>
              <h3 className="text-sm font-bold text-[#16291E] leading-tight">Your Message</h3>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="message"
                className={`block text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${
                  errors.message ? "text-[#DC2626]" : focusedField === "message" ? "text-[#2F7549]" : "text-[#3D4152]"
                }`}
              >
                Message <span className="text-[#DC2626]">*</span>
              </label>
              <span className={`text-xs transition-colors ${form.message.length > 0 ? "text-[#7A7E8F]" : "text-transparent"}`}>
                {form.message.length} characters
              </span>
            </div>
            <div className="relative group">
              <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${
                errors.message ? "bg-[#DC2626] opacity-100" : focusedField === "message" ? "bg-[#2F7549] opacity-100" : "bg-transparent opacity-0"
              }`} />
              <MessageSquare className={`absolute left-3.5 top-4 w-[18px] h-[18px] transition-colors duration-300 ${
                errors.message ? "text-[#DC2626]" : focusedField === "message" ? "text-[#2F7549]" : "text-[#9A9EAF]"
              }`} />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`relative w-full bg-[#F8F8F7] border text-[#16291E] placeholder-[#9A9EAF] text-[15px] pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none resize-none hover:border-[#B0B3BE] ${
                  errors.message
                    ? "border-[#DC2626] bg-[#DC2626]/[0.02] focus:border-[#DC2626]/60 focus:ring-2 focus:ring-[#DC2626]/10 focus:bg-white"
                    : "border-[#D8D5CF] focus:border-[#2F7549]/40 focus:bg-white focus:ring-2 focus:ring-[#2F7549]/10"
                }`}
              />
            </div>
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#DC2626]"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── Footer ─── */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D8D5CF] bg-white px-7 py-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < filledFields ? "bg-[#3E8F5E] scale-100" : "bg-[#D8D5CF] scale-75"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-[#7A7E8F]">
              {filledFields === 4 ? "Ready to send" : `${4 - filledFields} required field${4 - filledFields !== 1 ? "s" : ""} remaining`}
            </p>
          </div>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="group relative shrink-0 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-heading font-bold text-[15px] text-white bg-gradient-to-r from-[#2F7549] to-[#245C3A] hover:from-[#3C8F5E] hover:to-[#2F7549] transition-all duration-300 shadow-[0_4px_20px_rgba(4,120,87,0.25)] hover:shadow-[0_8px_30px_rgba(4,120,87,0.35)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {state === "submitting" ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending...
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
