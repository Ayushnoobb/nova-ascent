import { pageHead } from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { trainingPrograms } from "@/lib/training";

export const Route = createFileRoute("/training_/$slug")({
  loader: ({ params }) => {
    const program = trainingPrograms.find((item) => item.slug === params.slug);
    if (!program) throw notFound();
    return program;
  },
  head: ({ loaderData }) => loaderData ? pageHead({
    title: `${loaderData.title} Training | Arcode Studio`,
    description: `${loaderData.duration} · ${loaderData.level}. ${loaderData.description}`,
    path: `/training/${loaderData.slug}`,
  }) : { meta: [{ title: "Program not found | Arcode Studio" }, { name: "robots", content: "noindex, nofollow" }] },
  component: TrainingDetail,
});

function TrainingDetail() {
  const program = Route.useLoaderData();
  return (
    <article className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-28 md:pt-36">
      <Link to="/training" className="text-sm text-muted-foreground hover:text-primary">← All training programs</Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Training program</p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">{program.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{program.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{program.topics.map(topic => <span key={topic} className="rounded-md border border-border bg-card px-3 py-1 text-sm">{topic}</span>)}</div>
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold">Who this is for</h2>
            <p className="mt-4 text-muted-foreground">{program.audience}</p>
          </section>
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold">What you’ll learn</h2>
            <ul className="mt-5 space-y-4">{program.modules.map(module => <li key={module} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" /><span>{module}</span></li>)}</ul>
          </section>
          <section className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-7">
            <h2 className="font-display text-2xl font-semibold">Practical project</h2>
            <p className="mt-4 text-muted-foreground">{program.project}</p>
          </section>
        </div>
        <aside className="h-fit rounded-2xl border border-border bg-card p-7 lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold">Program at a glance</h2>
          <dl className="mt-6 space-y-5">
            <div><dt className="text-sm text-muted-foreground">Duration</dt><dd className="mt-1 font-semibold">{program.duration}</dd></div>
            <div><dt className="text-sm text-muted-foreground">Level</dt><dd className="mt-1 font-semibold">{program.level}</dd></div>
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">Contact us for fees, upcoming dates and available delivery options.</p>
          <Link to="/contact" search={{ program: program.title }} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Enquire about this program <ArrowRight className="h-4 w-4" /></Link>
        </aside>
      </div>
    </article>
  );
}
