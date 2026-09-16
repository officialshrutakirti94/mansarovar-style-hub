import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Play,
  Shirt,
  Sparkles,
} from "lucide-react";

import storeAsset from "@/assets/mansarovar-store.jpg.asset.json";
import logoAsset from "@/assets/mansarovar-logo.png.asset.json";
import mensCollection from "@/assets/mens-collection.jpg";
import ladiesCollection from "@/assets/ladies-collection.jpg";
import kidsCollection from "@/assets/kids-collection.jpg";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_mansarovar__?stkn=MWxhNmFtbnZvYWRnOQ%3D%3D&utm_source=qr",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1D5SYnpHpP/",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@_mansarovar_raniganj?si=Pe7ghLqBIiDx5SXO",
    icon: Play,
  },
];

const collections = [
  {
    name: "Men’s Wear",
    note: "Sharp tailoring · Everyday ease",
    image: mensCollection,
    alt: "Man wearing a tailored charcoal suit",
  },
  {
    name: "Ladies’ Wear",
    note: "Elegant classics · Modern silhouettes",
    image: ladiesCollection,
    alt: "Woman wearing an elegant red saree",
  },
  {
    name: "Kids’ Wear",
    note: "Boys · Girls",
    image: kidsCollection,
    alt: "Boy and girl wearing festive outfits",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mansarovar Readymade | Fashion for the Family" },
      {
        name: "description",
        content:
          "Discover stylish readymade clothing for men, women, boys and girls at Mansarovar Readymade, Raniganj.",
      },
      { property: "og:title", content: "Mansarovar Readymade | Fashion for the Family" },
      {
        property: "og:description",
        content: "A trusted local destination for fashionable, comfortable clothing for the whole family.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={compact ? "social-link social-link-small" : "social-link"}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a href="#top" className="brand-link" aria-label="Mansarovar Readymade home">
          <img src={logoAsset.url} alt="Mansarovar Readymade" className="brand-logo" />
          <span className="hidden sm:block">Mansarovar Readymade</span>
        </a>
        <nav aria-label="Main navigation" className="header-nav">
          <a href="#collections">Collections</a>
          <a href="#about">Our Store</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <img
          src={storeAsset.url}
          alt="The illuminated Mansarovar Readymade storefront in Raniganj"
          className="hero-image"
          width={1024}
          height={768}
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="fashion-line fashion-line-one" aria-hidden="true" />
        <div className="fashion-line fashion-line-two" aria-hidden="true" />
        <Shirt className="floating-mark floating-shirt" aria-hidden="true" />
        <Sparkles className="floating-mark floating-spark" aria-hidden="true" />

        <div className="hero-content">
          <img src={logoAsset.url} alt="" className="hero-logo" aria-hidden="true" />
          <p className="eyebrow">A family fashion destination</p>
          <h1 id="hero-title">Style for everyone,<br />all in one place.</h1>
          <p className="hero-copy">
            Readymade clothing for men, women and kids—chosen for comfort,
            confidence and every moment worth dressing for.
          </p>
          <a href="#collections" className="primary-action">
            Explore Collections <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <div className="hero-footnote" aria-hidden="true">
          <span>Raniganj</span>
          <span>Men · Women · Kids</span>
        </div>
      </section>

      <section id="collections" className="collections-section" aria-labelledby="collections-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-primary">Curated for your story</p>
            <h2 id="collections-title">Find your fit.</h2>
          </div>
          <p>From everyday favourites to celebration-ready looks, discover style for every generation.</p>
        </div>

        <div className="collection-grid">
          {collections.map((collection, index) => (
            <article className="collection-card" key={collection.name}>
              <img
                src={collection.image}
                alt={collection.alt}
                loading="lazy"
                width={1024}
                height={1280}
              />
              <div className="collection-overlay" />
              <span className="collection-number">0{index + 1}</span>
              <div className="collection-copy">
                <p>{collection.note}</p>
                <h3>{collection.name}</h3>
                <span className="collection-link" aria-hidden="true">
                  Discover <ArrowUpRight />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true">M</div>
        <div className="about-kicker">
          <span className="rule" />
          <p>Rooted in Raniganj</p>
        </div>
        <div className="about-copy">
          <h2 id="about-title">A local store,<br />dressed for today.</h2>
          <p>
            Mansarovar Readymade is a trusted neighbourhood destination for
            fashionable, comfortable clothing. We bring together well-chosen
            styles for the whole family, with a warm shopping experience that
            always feels personal.
          </p>
          <a href="#contact" className="text-action">
            Visit our store <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="eyebrow">Let’s connect</p>
          <h2 id="contact-title">Your next look<br />starts here.</h2>
          <p>Follow our latest arrivals or get in touch with the store.</p>
        </div>
        <div className="contact-details">
          <a href="tel:" className="contact-row" aria-label="Phone number to be added">
            <Phone aria-hidden="true" />
            <span><small>Call us</small>[ADD NUMBER]</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="mailto:" className="contact-row" aria-label="Email address to be added">
            <Mail aria-hidden="true" />
            <span><small>Email us</small>[ADD EMAIL]</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <span>Follow Mansarovar</span>
            <SocialLinks />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={logoAsset.url} alt="Mansarovar Readymade" />
          <p>Style for every story.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#top">Home</a>
          <a href="#collections">Collections</a>
          <a href="#about">Our Store</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-contact">
          <p>[ADD NUMBER]</p>
          <p>[ADD EMAIL]</p>
          <SocialLinks compact />
        </div>
        <p className="copyright">© 2026 Mansarovar Readymade. All rights reserved.</p>
      </footer>
    </main>
  );
}