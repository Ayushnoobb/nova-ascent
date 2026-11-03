import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Training } from "@/components/site";

export const Route = createFileRoute("/training")({
  head: () => pageHead({ title: "IT Training Programs | AI, Web, Cloud & Security", description: "Explore four practical IT training programs: AI and machine learning, React and Node, cloud and DevOps, and cybersecurity. View topics and enquire.", path: "/training" }),
  component: () => <div className="min-h-[70vh] pt-16"><h1 className="sr-only">IT training</h1><Training /></div>,
});
