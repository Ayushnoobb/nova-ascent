import { trainingPrograms } from "./training";

// Override at build time when deploying to a different production domain.
export const siteOrigin = new URL(import.meta.env.VITE_SITE_URL || "https://arcodestudeo.com").origin;
export const siteName = "Arcode Studio";
export const allowIndexing = import.meta.env.PROD && import.meta.env.VITE_NOINDEX !== "true";
export const indexablePaths = ["/", "/about", "/products", "/portfolio", "/training", "/team", "/contact", ...trainingPrograms.map(program => `/training/${program.slug}`)];
export const absoluteUrl = (path: string) => new URL(path, `${siteOrigin}/`).href;

export function pageHead({ title, description, path, productImage = false }: { title: string; description: string; path: string; productImage?: boolean }) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(productImage ? "/images/school-social.png" : "/images/arcode-white.png");
  const imageAlt = productImage ? "Arcode School Management System concept preview with sample data" : "Arcode Studio white and red logo on a dark background";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: allowIndexing ? "index, follow, max-image-preview:large" : "noindex, nofollow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteOrigin}/#organization`,
  name: siteName,
  url: `${siteOrigin}/`,
  logo: absoluteUrl("/images/arcode-white.png"),
  email: "info@arcodestudeo.com",
  sameAs: ["https://www.linkedin.com/company/arcodestudeo/"],
  founder: [
    { "@type": "Person", name: "Niraj Ghimire" },
    { "@type": "Person", name: "Ayush Khatri" },
  ],
};
