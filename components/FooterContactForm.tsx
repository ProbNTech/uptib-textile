"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const enquiryTypes = [
  "General Enquiry",
  "Partnership",
  "Membership",
  "Sponsorship",
  "Events",
  "Media & Press",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function FooterContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    enquiryType: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.enquiryType.trim() ||
      !form.message.trim()
    ) {
      setErrorMsg("Please complete all fields.");
      setState("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setState("error");
      return;
    }

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "footer" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed.");
      }
      setState("success");
      setForm({ name: "", email: "", enquiryType: "", message: "" });
      setTimeout(() => setState("idle"), 5000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
      setTimeout(() => setState("idle"), 5000);
    }
  };

  const inputClass =
    "w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder-white/60 outline-none transition-all duration-300 focus:bg-white/15 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="footer-name" className="sr-only">Name</label>
        <input
          id="footer-name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="footer-email" className="sr-only">Email</label>
        <input
          id="footer-email"
          name="email"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="footer-enquiryType" className="sr-only">Enquiry type</label>
        <select
          id="footer-enquiryType"
          name="enquiryType"
          value={form.enquiryType}
          onChange={handleChange}
          required
          className={`${inputClass} appearance-none cursor-pointer [&>option]:bg-[#0a1929] [&>option]:text-white`}
        >
          <option value="" disabled className="text-white/60">
            Select enquiry type
          </option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="footer-message" className="sr-only">Message</label>
        <textarea
          id="footer-message"
          name="message"
          rows={3}
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === "success" && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 text-sm text-white">
          <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
          <span>Thanks — we&apos;ll be in touch.</span>
        </div>
      )}

      {state === "error" && errorMsg && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#047857]/20 border border-[#047857]/40 text-sm text-white">
          <AlertCircle className="w-4 h-4 text-[#FB7185] flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#047857] to-[#10B981] text-white font-semibold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {state === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
