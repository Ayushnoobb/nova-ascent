import { pageHead } from "@/lib/seo";
import { AboutDetails } from "@/components/about-details";
import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => pageHead({ title: "About Arcode Studio | Our Approach & Experience", description: "Learn how Arcode Studio approaches software development, practical AI and IT education, with a clear process from discovery to delivery.", path: "/about" }),
  component: () => <div className="min-h-[70vh] pt-16"><h1 className="sr-only">About us</h1><About /><AboutDetails /></div>,
});
