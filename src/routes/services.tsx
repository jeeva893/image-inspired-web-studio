import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Package,
  Building2,
  Coffee,
  Sparkles,
  Droplets,
  Gift,
  Armchair,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Our Services | Innovix Corporate Solutions",
      },
      {
        name: "description",
        content:
          "Complete workplace solutions: corporate supplies, building maintenance, pantry & café services, housekeeping, hygiene products, gifting and more.",
      },
      { property: "og:title", content: "Our Services | Innovix Corporate Solutions" },
      {
        property: "og:description",
        content:
          "From everyday office essentials to building maintenance and workplace hygiene — complete solutions for your workplace.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: Package,
    title: "1. Corporate Supplies",
    intro:
      "Everything your office needs to function efficiently, from everyday essentials to specialised requirements.",
    items: [
      "Office stationery and paper products",
      "Janitorial consumables and toiletries",
      "IT and AV consumables",
      "MEP spare parts and consumables",
      "Corporate gifting",
      "White goods and furniture support",
      "Calibration services",
      "Medical supplies and personal protective equipment (PPE)",
    ],
  },
  {
    icon: Building2,
    title: "2. Office & Building Maintenance",
    intro:
      "Maintain clean, presentable and functional workspaces with our range of maintenance services.",
    items: [
      "Carpet shampooing and maintenance",
      "Chair and sofa maintenance",
      "Marble and granite maintenance",
      "Building facade maintenance",
      "Overhead tank cleaning",
      "STP consumables and maintenance",
      "Fumigation and pest treatment",
      "Painting services",
      "Aquarium maintenance",
      "Landscaping",
    ],
  },
  {
    icon: Coffee,
    title: "3. Pantry & Café Solutions",
    intro:
      "Make workplace refreshments and pantry management more convenient for your employees and visitors.",
    items: [
      "Hot beverage solutions",
      "Beverage vending machines",
      "Snack vending machines",
      "Tuck shop solutions",
      "Recurring and on-demand pantry consumables",
      "Business working lunch arrangements",
      "Snack boxes",
    ],
  },
  {
    icon: Sparkles,
    title: "4. Housekeeping & Cleaning Supplies",
    intro:
      "Support everyday cleaning and hygiene requirements with a selection of housekeeping materials, cleaning consumables and equipment.",
    items: [
      "Cleaning solutions and disinfectants",
      "Mops, brooms and cleaning tools",
      "Vacuum cleaners and polishing equipment",
      "Housekeeping consumables",
      "Workplace cleaning essentials",
    ],
  },
  {
    icon: Droplets,
    title: "5. Hygiene & Paper Products",
    intro:
      "Provide convenient hygiene facilities for offices and commercial environments with a range of dispensers and paper products.",
    groups: [
      {
        label: "Dispenser options",
        items: [
          "M-fold and hand towel roll dispensers",
          "Toilet roll dispensers",
          "Automatic dispensers",
          "Soap and automatic soap dispensers",
          "Hand dryers",
        ],
      },
      {
        label: "Paper products",
        items: [
          "M-fold tissue",
          "HRT rolls",
          "Jumbo roll tissue",
          "Toilet rolls",
          "Napkins and face tissues",
          "Kitchen and industrial rolls",
        ],
      },
    ],
  },
  {
    icon: Gift,
    title: "6. Corporate Gifting",
    intro:
      "Make business relationships more memorable with corporate gifting options for employee recognition, client appreciation, events and special occasions.",
    items: [],
  },
  {
    icon: Armchair,
    title: "7. Carpet, Chair & Marble Care",
    intro:
      "Maintain the appearance and cleanliness of your workplace with professional cleaning and surface-care services, including carpet shampooing, upholstery cleaning, blinds cleaning, marble maintenance and granite polishing.",
    items: [],
  },
  {
    icon: HeartHandshake,
    title: "8. Feminine Hygiene Solutions",
    intro:
      "Support workplace hygiene and convenience with feminine hygiene products and dispensing solutions, designed with a focus on accessibility, cleanliness and user privacy.",
    items: [],
  },
];

function Services() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">Our Services</h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium text-foreground/80">
            Complete Solutions for Your Workplace
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            From everyday office essentials to building maintenance and workplace hygiene, Innovix
            offers a range of solutions designed to support smooth business operations.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, intro, items, groups }) => (
              <div
                key={title}
                className="card-hover rounded-2xl border border-border bg-card p-7 shadow-lg shadow-primary/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-teal">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="text-lg font-semibold text-primary">{title}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{intro}</p>

                {items && items.length > 0 && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-1">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {groups && (
                  <div className="mt-4 space-y-4">
                    {groups.map((group) => (
                      <div key={group.label}>
                        <h3 className="text-sm font-semibold text-teal">{group.label}</h3>
                        <ul className="mt-2 grid gap-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-foreground/85"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal to-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Let's Discuss Your Requirements
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Your workplace needs, our corporate solutions — contact us to discuss suitable
              solutions for your organisation.
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
