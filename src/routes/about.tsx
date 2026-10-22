import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Compass, HeartHandshake, ArrowRight } from "lucide-react";

import buildingImage from "@/assets/building-facade.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Innovix Corporate Solutions | Our Mission & Vision",
      },
      {
        name: "description",
        content:
          "Simplifying workplace operations through reliable corporate supplies, facility upkeep, pantry services and hygiene solutions.",
      },
      { property: "og:title", content: "About Innovix Corporate Solutions" },
      {
        property: "og:description",
        content:
          "Simplifying workplace operations through reliable solutions — our mission, vision and approach.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver dependable products and practical solutions that help create cleaner, more efficient and comfortable working environments.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become a trusted corporate solutions partner by consistently focusing on service quality, customer satisfaction and long-term business relationships.",
  },
  {
    icon: Compass,
    title: "Our Approach",
    text: "We focus on understanding each client's requirements, identifying suitable solutions and supporting their day-to-day operational needs with a professional and service-oriented approach.",
  },
  {
    icon: HeartHandshake,
    title: "Our Commitment to Clients",
    text: "We strive to provide a dependable experience through responsive communication, suitable product choices and solutions tailored to each client's requirements.",
  },
];

function About() {
  return (
    <div>
      {/* Page hero */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">About Innovix Corporate Solutions</h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium text-foreground/80">
            Simplifying Workplace Operations Through Reliable Solutions
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Who We Are</h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At Innovix Corporate Solutions, we aim to make workplace management more convenient by
              bringing together essential corporate supplies, facility upkeep, pantry services and
              hygiene solutions.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We understand that an efficient workplace depends on reliable supplies,
              well-maintained spaces and convenient everyday services. Our portfolio is designed to
              help businesses manage these needs through a single, coordinated service partner.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-teal-foreground transition-colors hover:bg-primary"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
            <img
              src={buildingImage}
              alt="Innovix corporate office building"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">What Drives Us</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-hover rounded-2xl bg-card p-7 shadow-lg shadow-primary/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal to-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Let's Build Better Workspaces Together
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Looking for a dependable partner for your workplace requirements?
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
