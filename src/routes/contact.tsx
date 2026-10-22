import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Globe, Clock } from "lucide-react";

import EnquiryForm from "@/components/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us | Innovix Corporate Solutions",
      },
      {
        name: "description",
        content:
          "Contact Innovix Corporate Solutions to discuss your requirements and request a customised quotation.",
      },
      { property: "og:title", content: "Contact Us | Innovix Corporate Solutions" },
      {
        property: "og:description",
        content: "Request a customised quotation for your workplace requirements.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">Contact Us</h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium text-foreground/80">
            Let's Discuss Your Requirements
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            Whether you need recurring office supplies, building maintenance, pantry support or
            workplace hygiene products, our team is ready to understand your requirements.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Innovix Corporate Solutions</h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-accent" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Contact us to discuss suitable solutions for your organisation and request a
              customised quotation.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-teal">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+918015159421"
                    className="text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    +91 8015159421
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-teal">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:info@innovixcorpsolutions.com"
                    className="text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    info@innovixcorpsolutions.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-teal">
                  <Globe className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Website
                  </p>
                  <span className="text-sm font-semibold text-primary">
                    www.innovixcorpsolutions.com
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-teal">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Working Hours
                  </p>
                  <span className="text-sm font-semibold text-primary">Monday – Saturday</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8">
            <h2 className="text-xl font-semibold text-primary">Request a Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the form and we'll get back to you with a customised quotation.
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
