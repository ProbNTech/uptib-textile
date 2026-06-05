"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  contactSchema,
  enquiryNeeds,
  type EnquiryNeed,
} from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<string, string[]>>;

const topicToNeed: Record<string, EnquiryNeed> = {
  source: "Source products",
  sell: "Sell to the UK",
  service: "A service",
  quote: "Source products",
  brief: "Source products",
  intro: "Source products",
};

export function EnquiryForm() {
  const params = useSearchParams();
  const presetCompany = params.get("company") ?? "";
  const topic = params.get("topic") ?? "";
  const presetNeed = topicToNeed[topic] ?? "";

  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setFormError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      need: String(fd.get("need") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };

    // Client-side validation first (same schema as the server).
    const local = contactSchema.safeParse(payload);
    if (!local.success) {
      setErrors(local.error.flatten().fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      const json = (await res.json().catch(() => null)) as {
        errors?: FieldErrors;
      } | null;
      if (json?.errors) setErrors(json.errors);
      setFormError("Please check the highlighted fields and try again.");
      setStatus("idle");
    } catch {
      setFormError(
        "Something went wrong. Please try again, or email us directly.",
      );
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-tertiary/25 bg-tertiary/5 p-10 text-center">
        <CheckCircle2 className="size-10 text-tertiary" aria-hidden />
        <h3 className="text-xl font-semibold text-primary-dark">
          Thanks — your enquiry is on its way.
        </h3>
        <p className="max-w-md text-body">
          We&apos;ll point you to the right person and reply shortly. For
          anything urgent, call our London or Lahore office.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="outline"
          className="mt-2"
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Company"
          name="company"
          defaultValue={presetCompany}
          error={errors.company}
          autoComplete="organization"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={errors.email}
          autoComplete="email"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          error={errors.phone}
          autoComplete="tel"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="need"
          className="block text-sm font-semibold text-primary-dark"
        >
          What do you need? <span className="text-secondary">*</span>
        </label>
        <select
          id="need"
          name="need"
          required
          defaultValue={presetNeed}
          aria-invalid={Boolean(errors.need)}
          className={cn(
            "mt-1.5 w-full rounded-xl border bg-white px-4 py-2.5 text-body transition-colors focus:border-primary",
            errors.need ? "border-secondary" : "border-line",
          )}
        >
          <option value="" disabled>
            Choose one…
          </option>
          {enquiryNeeds.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
        <FieldError error={errors.need} />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-primary-dark"
        >
          Message <span className="text-secondary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your product, quantities, timelines or service needs."
          aria-invalid={Boolean(errors.message)}
          className={cn(
            "mt-1.5 w-full rounded-xl border bg-white px-4 py-2.5 text-body transition-colors focus:border-primary",
            errors.message ? "border-secondary" : "border-line",
          )}
        />
        <FieldError error={errors.message} />
      </div>

      {/* Honeypot — visually hidden, off-screen, not announced. */}
      <div
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {formError ? (
        <p className="mt-5 rounded-lg bg-secondary/5 px-4 py-3 text-sm text-secondary-dark">
          {formError}
        </p>
      ) : null}

      <div className="mt-6">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            "Send enquiry"
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string[];
  defaultValue?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-primary-dark"
      >
        {label}
        {required ? <span className="text-secondary"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={cn(
          "mt-1.5 w-full rounded-xl border bg-white px-4 py-2.5 text-body transition-colors focus:border-primary",
          error ? "border-secondary" : "border-line",
        )}
      />
      <FieldError error={error} />
    </div>
  );
}

function FieldError({ error }: { error?: string[] }) {
  if (!error?.length) return null;
  return <p className="mt-1.5 text-sm text-secondary-dark">{error[0]}</p>;
}
