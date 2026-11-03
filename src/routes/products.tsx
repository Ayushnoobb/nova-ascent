import { pageHead } from "@/lib/seo";
import { SchoolAIFeatures } from "@/components/school-ai-features";
import { createFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/site";

export const Route = createFileRoute("/products")({
  head: () => pageHead({ title: "School Management System | Arcode Studio", description: "Explore Arcode School: attendance, academics, fees and parent communication in one platform, with AI feature concepts and a demo enquiry.", path: "/products", productImage: true }),
  component: () => <div className="min-h-[70vh] pt-16"><h1 className="sr-only">School Management System</h1><Products /><SchoolAIFeatures /></div>,
});
