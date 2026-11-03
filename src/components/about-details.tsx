import { ArrowRight, Code2, GraduationCap, Brain } from "lucide-react";

export function AboutDetails() {
  const focus = [
    { icon: Code2, title: "Build useful software", text: "Our product focus is school management. We also work with teams to define and develop software around their workflows, from an initial idea to a usable application." },
    { icon: Brain, title: "Apply AI with purpose", text: "We look for tasks where AI assistance can save effort: searching information, preparing drafts and summarizing records. Clear inputs, review steps and meaningful evaluation come first." },
    { icon: GraduationCap, title: "Share practical skills", text: "Our training tracks cover AI, full-stack development, cloud engineering and cybersecurity. The emphasis is on understanding concepts through practical work and projects." },
  ];
  const process = [
    { title: "Understand", text: "Start with the people using the software, the problem they face and the constraints that matter. Agree on a clear scope before building." },
    { title: "Design", text: "Map the workflow and explore the interface. Review key screens and assumptions early so the product has a clear direction." },
    { title: "Build and review", text: "Develop in manageable stages, review progress together and test the important workflows. Use feedback to refine the experience." },
    { title: "Launch and improve", text: "Plan deployment, documentation and handover. Agree on support needs and prioritize improvements based on real use." },
  ];
  return (
    <div className="mx-auto max-w-7xl space-y-20 px-6 pb-24">
      <section>
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Our focus</p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Software, AI and learning — connected.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{focus.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-border bg-card p-7"><Icon className="h-6 w-6 text-primary" aria-hidden="true" /><h3 className="mt-5 font-display text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
      </section>
      <section className="rounded-3xl border border-border bg-card p-8 md:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">How we work</p>
        <h2 className="mt-4 font-display text-3xl font-bold">From a clear problem to a useful product.</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">{process.map((step, index) => <li key={step.title} className="flex items-start gap-5"><span className="font-mono text-2xl text-primary/70">0{index + 1}</span><div><h3 className="font-display text-xl font-semibold">{step.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p></div></li>)}</ol>
      </section>
      <section className="grid gap-10 lg:grid-cols-2">
        <div><p className="font-mono text-xs uppercase tracking-widest text-primary">People behind the work</p><h2 className="mt-4 font-display text-3xl font-bold">Led by experience. Driven by curiosity.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Founder Niraj Ghimire brings 16 years of experience, alongside co-founder Ayush Khatri with 6 years. Together, they guide Arcode Studio’s direction across software development and practical IT education.</p><a href="/team" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Meet our team <ArrowRight className="h-4 w-4" /></a></div>
        <div><h2 className="font-display text-3xl font-bold">What matters in our work</h2><ul className="mt-5 space-y-4 text-muted-foreground"><li><strong className="text-foreground">Clarity:</strong> understandable scope, clear communication and visible progress.</li><li><strong className="text-foreground">Practicality:</strong> tools that fit everyday work and can be maintained over time.</li><li><strong className="text-foreground">Care:</strong> accessible interfaces, appropriate data access and thoughtful review of AI outputs.</li><li><strong className="text-foreground">Learning:</strong> sharing knowledge and improving through feedback.</li></ul></div>
      </section>
      <section className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-primary/5 p-8"><div><h2 className="font-display text-2xl font-semibold">Have a problem worth solving?</h2><p className="mt-3 text-muted-foreground">Tell us about your school, product idea or learning goals.</p></div><a href="/contact" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Let’s talk</a></section>
    </div>
  );
}
