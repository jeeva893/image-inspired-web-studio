import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Gift,
  Droplets,
  FileText,
  Armchair,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import housekeeping from "@/assets/housekeeping.jpg";
import corporateGifting from "@/assets/corporate-gifting.jpg";
import dispensers from "@/assets/dispensers.jpg";
import paperProducts from "@/assets/paper-products.jpg";
import carpetMarbleCare from "@/assets/carpet-marble-care.jpg";
import feminineHygiene from "@/assets/feminine-hygiene.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title: "Products & Supplies | Innovix Corporate Solutions",
      },
      {
        name: "description",
        content:
          "Housekeeping materials, corporate gifts, hygiene dispensers, paper products, carpet & marble care and feminine hygiene solutions.",
      },
      { property: "og:title", content: "Products & Supplies | Innovix Corporate Solutions" },
      {
        property: "og:description",
        content:
          "High-quality products for cleaner, healthier and better workspaces.",
      },
    ],
  }),
  component: Products,
});

const PRODUCTS = [
  {
    icon: Sparkles,
    image: housekeeping,
    title: "Housekeeping Materials & Cleaning Consumables",
    text: "Eco-friendly cleaning solutions, disinfectants, mops, brooms, microfiber cloths, vacuum cleaners and polishing equipment for everyday workplace cleaning.",
  },
  {
    icon: Gift,
    image: corporateGifting,
    title: "Corporate Gifting Solutions",
    text: "Thoughtful and customised corporate gifts for employee recognition, client appreciation, events and special occasions.",
  },
  {
    icon: Droplets,
    image: dispensers,
    title: "Hygiene Dispensers & Hand Dryers",
    text: "A wide range of modern and hygienic dispensers — soap, automatic soap, hand towel roll, M-fold, toilet roll dispensers and hand dryers.",
  },
  {
    icon: FileText,
    image: paperProducts,
    title: "Paper Products & Tissue Supplies",
    text: "Tissues, rolls, napkins and more for everyday needs — M-fold tissue, HRT rolls, jumbo roll tissue, toilet rolls, napkins, face tissues and kitchen rolls.",
  },
  {
    icon: Armchair,
    image: carpetMarbleCare,
    title: "Carpet, Chair & Marble Maintenance",
    text: "Professional cleaning, polishing and maintenance services for carpets, upholstery, marble and granite surfaces.",
  },
  {
    icon: HeartHandshake,
    image: feminineHygiene,
    title: "Feminine Hygiene Solutions",
    text: "Clean, comfortable and confidential feminine hygiene care services and dispensing solutions for modern workplaces.",
  },
];

function Products() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">
            Featured Products &amp; Services
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
            High-quality products and expert services for cleaner, healthier and better spaces.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map(({ icon: Icon, image, title, text }) => (
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
                <div className="p-6">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-5 w-5 text-teal" />
                    <h2 className="font-semibold leading-snug text-primary">{title}</h2>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal to-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Need a Customised Quotation?
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Tell us what your workplace needs and we'll put together the right solution for you.
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
