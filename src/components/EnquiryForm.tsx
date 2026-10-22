import { z } from "zod";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SERVICE_OPTIONS = [
  "Corporate Supplies",
  "Office & Building Maintenance",
  "Pantry & Café Solutions",
  "Housekeeping & Cleaning Supplies",
  "Hygiene & Paper Products",
  "Corporate Gifting",
  "Carpet, Chair & Marble Care",
  "Feminine Hygiene Solutions",
  "Other",
] as const;

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  companyName: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Phone number can only contain digits, spaces and + ( ) -"),
  service: z.string().max(80).optional(),
  message: z.string().trim().max(1500).optional(),
});

type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const inputClasses =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25";

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    setErrors({});

    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    const { error } = await supabase.from("enquiries").insert({
      full_name: parsed.data.fullName,
      company_name: parsed.data.companyName || null,
      business_email: parsed.data.email,
      phone_number: parsed.data.phone,
      service_required: parsed.data.service || null,
      message: parsed.data.message || null,
    });

    if (error) {
      setStatus("error");
      setServerError(
        "Something went wrong while sending your request. Please try again or call us directly.",
      );
      return;
    }

    setStatus("success");
    setForm(EMPTY);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-secondary p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-teal-foreground">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-primary">Thank you for reaching out!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We have received your enquiry and our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="fullName"
            className={inputClasses}
            value={form.fullName}
            onChange={update("fullName")}
            placeholder="Your name"
          />
          {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium">
            Company Name
          </label>
          <input
            id="companyName"
            className={inputClasses}
            value={form.companyName}
            onChange={update("companyName")}
            placeholder="Your organisation"
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-destructive">{errors.companyName}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Business Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClasses}
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 00000 00000"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
          Service Required
        </label>
        <select id="service" className={inputClasses} value={form.service} onChange={update("service")}>
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClasses}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your requirements"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      {serverError && (
        <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-teal-foreground transition-colors hover:bg-primary disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Request a Quote <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
