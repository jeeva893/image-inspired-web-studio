import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Settings,
  Users,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Package,
  Building2,
  Coffee,
  Sparkles,
  Gift,
  Droplets,
  FileText,
  Armchair,
  HeartHandshake,
} from "lucide-react";

import heroImage from "@/assets/hero-reception.jpg";
import buildingImage from "@/assets/building-facade.jpg";
import corporateSupplies from "@/assets/corporate-supplies.jpg";
import officeMaintenance from "@/assets/office-maintenance.jpg";
import pantryCafe from "@/assets/pantry-cafe.jpg";
import housekeeping from "@/assets/housekeeping.jpg";
import corporateGifting from "@/assets/corporate-gifting.jpg";
import dispensers from "@/assets/dispensers.jpg";
import paperProducts from "@/assets/paper-products.jpg";
import carpetMarbleCare from "@/assets/carpet-marble-care.jpg";
import feminineHygiene from "@/assets/feminine-hygiene.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Innovix Corporate Solutions | Reliable Solutions for Better Workspaces",
      },
      {
        name: "description",
        content:
          "Corporate supplies, facility maintenance, pantry solutions and workplace hygiene products for cleaner, safer and more productive work environments.",
      },
      { property: "og:title", content: "Innovix Corporate Solutions" },
      {
        property: "og:description",
        content:
          "Reliable solutions for better workspaces — corporate supplies, maintenance, pantry and hygiene.",
      },
    ],
  }),
  component: Home,
});

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    text: "Trusted brands & reliable sourcing",
  },
  {
    icon: Settings,
    title: "Comprehensive Solutions",
    text: "One-stop solution for all your needs",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "Professional & dedicated support",
  },
  {
    icon: Leaf,
    title: "Clean & Green",
    text: "Eco-friendly and sustainable options",
  },
];

const OFFERINGS = [
  {
    icon: Package,
    image: corporateSupplies,
    title: "Corporate Solutions",
    intro: "Everything your office needs, delivered with reliability and quality.",
    items: [
      "Day Today Office Requirements",
      "Janitorial Consumables & Toiletries",
      "Paper Products",
      "Office Stationery (Basic & Adhoc)",
      "Corporate Gifting",
      "White Goods",
      "MEP Spares & Consumables",
      "Calibration Services",
      "IT Consumables",
      "AV Requirements",
      "Carpentry and Furniture Support",
      "Medical Supplies",
      "PPE",
    ],
  },
  {
    icon: Building2,
    image: officeMaintenance,
    title: "Office / Building – Space Upkeep",
    intro: "Professional maintenance services to keep your spaces in top condition.",
    items: [
      "Carpet Maintenance",
      "Chair Maintenance",
      "Marble and Granite Maintenance",
      "Facade Maintenance",
      "Over Tank Cleaning",
      "STP Consumables and Maintenance",
      "Fumigation",
      "Pest Treatment",
      "Painting Services",
      "Aquarium Maintenance",
      "Landscaping",
    ],
  },
  {
    icon: Coffee,
    image: pantryCafe,
    title: "Pantry & Café Solutions",
    intro: "Delighting your teams with convenient and hygienic food & beverage options.",
    items: [
      "Hot Beverages",
      "Vending Machines",
      "Snack Vending Machines",
      "Tuck Shop",
      "Pantry Consumables – Recurring/Adhoc",
      "Business Working Lunch",
      "Snack Box",
    ],
  },
];

const FEATURED = [
  {
    icon: Sparkles,
    image: housekeeping,
    title: "Housekeeping Materials",
    text: "Eco-friendly cleaning solutions, equipment and consumables.",
  },
  {
    icon: Gift,
    image: corporateGifting,
    title: "Corporate Gifting",
    text: "Thoughtful and customised corporate gifts for every occasion.",
  },
  {
    icon: Droplets,
    image: dispensers,
    title: "Dispenser Options",
    text: "Wide range of modern and hygienic dispensers.",
  },
  {
    icon: FileText,
    image: paperProducts,
    title: "Paper Products",
    text: "Tissues, rolls, napkins and more for everyday needs.",
  },
  {
    icon: Armchair,
    image: carpetMarbleCare,
    title: "Carpet & Marble Maintenance",
    text: "Professional cleaning, polishing and maintenance services.",
  },
  {
    icon: HeartHandshake,
    image: feminineHygiene,
    title: "Feminine Hygiene",
    text: "Clean, comfortable and confidential hygiene care services.",
  },
];

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

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
              <span className="text-accent">Innovix</span> Corporate Solutions
            </h1>
            <p className="section-subtitle mt-4 text-sm text-teal">
              People&nbsp;&nbsp;|&nbsp;&nbsp;Spaces&nbsp;&nbsp;|&nbsp;&nbsp;Solutions
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Delivering comprehensive solutions for corporate and residential spaces with quality
              products, reliable services and a commitment to cleaner, safer and more productive
              environments.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-teal-foreground transition-colors hover:bg-primary"
              >
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
            <img
              src={heroImage}
              alt="Modern corporate office reception"
              width={1920}
              height={1088}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center gap-2 px-4 py-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-primary">{title}</h3>
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="order-2 overflow-hidden rounded-2xl shadow-xl shadow-primary/10 lg:order-1">
            <img
              src={buildingImage}
              alt="Corporate office building"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Our Goal - <span className="text-accent">Commitment</span>
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At Innovix, we are committed to delivering comprehensive solutions that meet the
              evolving needs of businesses and residential spaces. Our goal is to make everyday
              operations easier through reliable products, professional services and a
              customer-focused approach.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-teal-foreground transition-colors hover:bg-primary"
              >
                More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">Our Core Offerings</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Comprehensive solutions to keep your workspace efficient, clean and productive.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {OFFERINGS.map(({ icon: Icon, image, title, intro, items }) => (
              <div
                key={title}
                className="card-hover flex flex-col overflow-hidden rounded-2xl bg-card shadow-lg shadow-primary/5"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-teal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-primary">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{intro}</p>
                  <ul className="mt-4 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products & Services */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Featured Products &amp; Services
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              High-quality products and expert services for cleaner, healthier and better spaces.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map(({ icon: Icon, image, title, text }) => (
              <div
                key={title}
                className="card-hover overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-5 w-5 text-teal" />
                    <h3 className="font-semibold text-primary">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">Our Esteemed Clients</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-semibold text-primary/80 transition-colors hover:border-accent hover:text-accent"
              >
                {client}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Trusted by leading organisations across industries.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal to-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Let's Build a Cleaner, Safer and More Productive Space Together
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Get in touch with us for customized solutions for your business.
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
