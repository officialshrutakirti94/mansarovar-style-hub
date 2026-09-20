import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Play,
} from "lucide-react";

const storeImage = "/images/storefront.jpeg";
const logoImage = "/favicon.png";
const ladiesTealImage = "/images/ladies-teal.jpeg";
const ladiesOrangeImage = "/images/ladies-orange.jpeg";
const menBlueImage = "/images/men-blue.jpeg";
const menFabricsImage = "/images/men-fabrics.jpeg";
const menFestiveImage = "/images/men-festive.jpeg";
const kidsGreenImage = "/images/kids-green.jpeg";
const kidsBlackImage = "/images/kids-black.jpeg";

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

const catalogGroups = [
  {
    name: "Ladies",
    number: "01",
    note: "Grace for every occasion",
    description: "Rich colours, fluid silhouettes and intricate details made for celebrations and everything around them.",
    items: [
      { name: "Festive Co-ords", note: "Occasion wear", image: ladiesTealImage, alt: "Woman wearing a teal embroidered festive co-ord set in the Mansarovar store" },
      { name: "Draped Elegance", note: "Contemporary sarees", image: ladiesOrangeImage, alt: "Woman wearing an orange draped saree in the Mansarovar store" },
    ],
  },
  {
    name: "Men",
    number: "02",
    note: "Classics, cut with confidence",
    description: "From refined everyday staples to distinguished festive looks, find a wardrobe that feels unmistakably yours.",
    items: [
      { name: "Regal Kurta Sets", note: "Festive edit", image: menBlueImage, alt: "Man wearing a blue kurta and patterned Nehru jacket in the Mansarovar store" },
      { name: "Fabrics", note: "All type fabrics", image: menFabricsImage, alt: "Colourful stacks of fabrics at Mansarovar" },
      { name: "Celebration Ready", note: "Signature looks", image: menFestiveImage, alt: "Man wearing a blue festive kurta outside the illuminated Mansarovar storefront" },
    ],
  },
  {
    name: "Kids",
    number: "03",
    note: "Little looks, big personality",
    description: "Playful, comfortable and celebration-ready styles for boys and girls—made for their brightest moments.",
    items: [
      { name: "Festive Charm", note: "Girls’ ethnic wear", image: kidsGreenImage, alt: "Young girl wearing a green embroidered festive outfit in the Mansarovar store" },
      { name: "Party Sparkle", note: "Girls’ occasion wear", image: kidsBlackImage, alt: "Young girl wearing an elegant black party outfit in the Mansarovar store" },
    ],
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
          <img src={logoImage} alt="Mansarovar Readymade" className="brand-logo" />
          <span className="hidden sm:block">Mansarovar Readymade</span>
        </a>
        <nav aria-label="Main navigation" className="header-nav">
          <a href="#collections">Collections</a>
          <a href="#about">Our story</a>
          <a href="#contact">Visit us</a>
          <a href="#contact" className="header-contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow"><span aria-hidden="true" /> Raniganj’s family fashion destination</p>
          <h1 id="hero-title">Style for<br /><em>everyone.</em></h1>
          <p className="hero-copy">
            One warm, welcoming space for the whole family to find their next favourite look.
          </p>
          <div className="hero-actions">
            <a href="#collections" className="primary-action">
              Explore collections <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="#about" className="secondary-action">
              Discover our story <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="arch-shadow" aria-hidden="true" />
          <figure className="hero-arch">
            <img
              src={storeImage}
              alt="The illuminated Mansarovar Readymade storefront in Raniganj"
              className="hero-image"
              width={886}
              height={710}
              fetchPriority="high"
            />
          </figure>
          <div className="hero-badge" aria-label="Wear what feels like you">
            <span>Wear</span><strong>what<br />feels<br />like you.</strong>
          </div>
          <span className="hero-spark hero-spark-one" aria-hidden="true">✦</span>
          <span className="hero-spark hero-spark-two" aria-hidden="true">✦</span>
        </div>
      </section>

      <section id="collections" className="collections-section" aria-labelledby="collections-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-primary">The Mansarovar catalog</p>
            <h2 id="collections-title">Made for every you.</h2>
          </div>
          <p>A closer look at our latest styles for ladies, men and kids—photographed right here at Mansarovar.</p>
        </div>

        <nav className="catalog-jump" aria-label="Catalog categories">
          {catalogGroups.map((group) => <a key={group.name} href={`#catalog-${group.name.toLowerCase()}`}>{group.name}</a>)}
        </nav>

        <div className="catalog-groups">
          {catalogGroups.map((group) => (
            <section className={`catalog-group catalog-${group.name.toLowerCase()}`} id={`catalog-${group.name.toLowerCase()}`} key={group.name} aria-labelledby={`catalog-${group.name.toLowerCase()}-title`}>
              <header className="catalog-group-heading">
                <span>{group.number}</span>
                <div>
                  <p>{group.note}</p>
                  <h3 id={`catalog-${group.name.toLowerCase()}-title`}>{group.name}</h3>
                </div>
                <p>{group.description}</p>
              </header>
              <div className="catalog-grid">
                {group.items.map((item, index) => (
                  <article className={`catalog-card catalog-card-${index + 1}`} key={item.name}>
                    <img src={item.image} alt={item.alt} loading="lazy" width={768} height={1024} />
                    <div className="catalog-card-caption">
                      <div><span>{item.note}</span><h4>{item.name}</h4></div>
                      <ArrowUpRight aria-hidden="true" />
                    </div>
                  </article>
                ))}
              </div>
            </section>
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
        <figure className="about-photo">
          <img
            src={storeImage}
            alt="The illuminated Mansarovar Readymade storefront in Raniganj at night"
            loading="lazy"
            width={886}
            height={710}
          />
        </figure>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="eyebrow">Let’s connect</p>
          <h2 id="contact-title">Your next look<br />starts here.</h2>
          <p>Follow our latest arrivals or get in touch with the store.</p>
        </div>
        <div className="contact-details">
          <a href="tel:+917501538752" className="contact-row" aria-label="Call Mansarovar Readymade">
            <Phone aria-hidden="true" />
            <span><small>Call us</small>+91 75015 38752</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="mailto:mansarovar48@gmail.com" className="contact-row" aria-label="Email Mansarovar Readymade">
            <Mail aria-hidden="true" />
            <span><small>Email us</small>mansarovar48@gmail.com</span>
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
          <img src={logoImage} alt="Mansarovar Readymade" />
          <p>Style for every story.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#top">Home</a>
          <a href="#collections">Collections</a>
          <a href="#about">Our Store</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-contact">
          <p>+91 75015 38752</p>
          <p>mansarovar48@gmail.com</p>
          <SocialLinks compact />
        </div>
        <p className="copyright">© 2026 Mansarovar Readymade. All rights reserved.</p>
      </footer>
    </main>
  );
}