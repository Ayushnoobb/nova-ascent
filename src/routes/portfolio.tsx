import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/site";

export const Route = createFileRoute("/portfolio")({
  head: () => pageHead({ title: "School Software Design Walkthrough | Arcode Studio", description: "Explore the school-management design concept: the problem, interface decisions and approach to AI assistance. See how Arcode Studio develops ideas.", path: "/portfolio", productImage: true }),
  component: () => <div className="min-h-[70vh] pt-16"><h1 className="sr-only">Our work</h1><Portfolio /></div>,
});
