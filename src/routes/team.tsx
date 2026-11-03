import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Team } from "@/components/site";

export const Route = createFileRoute("/team")({
  head: () => pageHead({ title: "Meet Our Team | Niraj Ghimire & Ayush Khatri", description: "Meet Arcode Studio founder Niraj Ghimire and co-founder Ayush Khatri, bringing 22 years of combined experience to software and IT education.", path: "/team" }),
  component: () => <div className="min-h-[70vh] pt-16"><h1 className="sr-only">Our team</h1><Team /></div>,
});
