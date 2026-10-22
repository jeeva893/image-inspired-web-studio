import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Globe, Linkedin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./SiteHeader";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Our Clients", to: "/clients" },
  { label: "Contact Us", to: "/contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
            Your trusted partner for corporate and residential solutions — committed to reliable
            services for a cleaner and better tomorrow.
          </p>
        </div>

        <div className="md:justify-self-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+918015159421" className="transition-colors hover:text-accent">
                +91 8015159421
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a
                href="mailto:info@innovixcorpsolutions.com"
                className="transition-colors hover:text-accent"
              >
                info@innovixcorpsolutions.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 shrink-0 text-accent" />
              <span>www.innovixcorpsolutions.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Innovix Corporate Solutions. All rights reserved.</p>
          <p>Designed for a Cleaner, Healthier Tomorrow</p>
        </div>
      </div>
    </footer>
  );
}
