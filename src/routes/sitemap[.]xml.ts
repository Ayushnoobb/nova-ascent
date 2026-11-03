import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, indexablePaths } from "@/lib/seo";

const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export const Route = createFileRoute("/sitemap.xml")({
  server: { handlers: { GET: () => new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexablePaths.map(path => `<url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  ) } },
});
