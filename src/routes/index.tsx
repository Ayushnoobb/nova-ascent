import { pageHead, organizationSchema } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ ...pageHead({ title: "Arcode Studio | School Management, Software & IT Training", description: "Explore Arcode Studio\u2019s School Management System, custom software services and practical training in AI, web development, cloud and cybersecurity.", path: "/" }), scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }] }),
  component: HomePage,
});

