import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building } from "lucide-react";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      {
        title: "Our Clients | Innovix Corporate Solutions",
      },
      {
        name: "description",
        content:
          "Trusted by leading organisations across industries for corporate supplies, maintenance and workplace solutions.",
      },
      { property: "og:title", content: "Our Clients | Innovix Corporate Solutions" },
      {
        property: "og:description",
        content: "Trusted by leading organisations across industries.",
      },
    ],
  }),
  component: Clients,
});

const CLIENTS = [
  "Zoho",
  "ISS",
  "Rultivate",
  "Dow",
  "RMZ Future of Spaces",
  "Kumaraguru Institutions",
  "KCT Tech Park",
  "Xanadu",
  "Zifo",
  "Indialand",
  "COD Clinic",
  "Nature's Partner",
];

function Clients() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">Our Esteemed Clients</h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
            Organisations across industries rely on Innovix for reliable supplies, maintenance and
            everyday workplace solutions.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="card-hover flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-8 text-center"
              >
                <Building className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-primary/85">{client}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Trusted by leading organisations for a cleaner, better tomorrow.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal to-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Join Our Growing List of Happy Clients
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Experience reliable service and quality products for your workplace.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
