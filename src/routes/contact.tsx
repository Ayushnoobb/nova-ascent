import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { program?: string } => ({ program: typeof search.program === "string" ? search.program.slice(0, 120) : undefined }),
  head: () => pageHead({ title: "Contact Arcode Studio | Projects, Demos & Training", description: "Talk to Arcode Studio about a school-management demo, software project or IT training. Contact our team by email, phone or the enquiry form.", path: "/contact" }),
  component: ContactPage,
});

function ContactPage() {
  const { program } = Route.useSearch();
  return <div className="min-h-[70vh] pt-16"><h1 className="sr-only">Contact us</h1><Contact program={program} /></div>;
}
