import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, allowIndexing } from "@/lib/seo";

export const Route = createFileRoute("/robots.txt")({
  server: { handlers: { GET: () => new Response(
    allowIndexing
      ? `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`
      : "User-agent: *\nDisallow: /\n",
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  ) } },
});
