import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  GraduationCap,
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check,
  Users,
  BookOpen,
  BarChart3,
  Zap,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";
import schoolImage from "@/assets/product-school.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arcode Studio — AI-Powered SaaS & IT Training" },
      {
        name: "description",
        content:
          "Arcode Studio builds futuristic SaaS products powered by AI and trains the next generation of IT professionals. Home of the Arcode School Management System.",
      },
      { property: "og:title", content: "Arcode Studio — AI-Powered SaaS & IT Training" },
      {
        property: "og:description",
        content:
          "Futuristic SaaS, AI engineering, and elite IT training. Discover the Arcode School Management System.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Logos />
      <Products />
      <Services />
      <Training />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
      <span className="text-foreground">arc</span>
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <span className="absolute -top-1 left-1/2 h-1 w-3 -translate-x-1/2 rounded-full bg-primary" />
        o
      </span>
      <span className="text-foreground">de</span>
      <span className="ml-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        studio
      </span>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#products" className="transition-colors hover:text-foreground">Products</a>
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#training" className="transition-colors hover:text-foreground">Training</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 glow-red"
        >
          Get started <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[600px]" style={{ background: "var(--gradient-hero)" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-float-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary">
              <Sparkles className="h-3 w-3" /> AI-native software studio
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              We engineer the{" "}
              <span className="text-gradient">future of software</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Arcode Studio builds AI-powered SaaS products and trains the next
              generation of IT professionals. From classrooms to cloud-scale
              platforms — we ship intelligent software that compounds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-red"
              >
                Explore products <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#training"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-card"
              >
                Join a training cohort
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> ISO-grade</span>
              <span className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> AI-first</span>
              <span className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" /> 24/7 support</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-[var(--shadow-card)]">
              <img
                src={heroImage}
                alt="AI neural network visualization"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/60 bg-background/70 px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Arcode AI Core / online
                  </span>
                </div>
                <span className="font-mono text-xs text-primary">v3.2.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const items = ["NeuralEdu", "ByteForge", "Lumen K-12", "Vertex Labs", "Kairo", "Synapse"];
  return (
    <section className="border-y border-border/40 bg-card/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by schools, startups & enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {items.map((n) => (
            <span key={n} className="font-display text-lg font-semibold tracking-tight text-muted-foreground">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          tag="Products"
          title="SaaS built with intelligence at the core"
          subtitle="Flagship platforms that turn complex operations into elegant, AI-augmented workflows."
        />

        {/* Featured: School Management System */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary">
                <GraduationCap className="h-3 w-3" /> Flagship product
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold md:text-4xl">
                Arcode School<span className="text-primary">.</span> Management System
              </h3>
              <p className="mt-4 text-muted-foreground">
                A unified, AI-powered platform for modern schools. Admissions,
                attendance, academics, fees, transport, and parent communication —
                orchestrated in one beautifully fast interface.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "AI attendance & analytics",
                  "Smart timetable engine",
                  "Online fees & payments",
                  "Parent & student portals",
                  "Exam & report card automation",
                  "Multi-branch ready",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Request a demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
                >
                  See pricing
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
              <img
                src={schoolImage}
                alt="Arcode School Management System dashboard"
                width={1280}
                height={896}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background/80" />
            </div>
          </div>
        </div>

        {/* Other products */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProductCard
            icon={<Brain className="h-5 w-5" />}
            name="Arcode Brain"
            description="In-house LLM assistant for businesses — knowledge base, RAG and copilots."
          />
          <ProductCard
            icon={<BarChart3 className="h-5 w-5" />}
            name="Arcode Insight"
            description="Real-time analytics & forecasting platform powered by predictive AI."
          />
          <ProductCard
            icon={<Zap className="h-5 w-5" />}
            name="Arcode Flow"
            description="Automation workflows that connect your stack with intelligent agents."
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h4 className="mt-4 font-display text-lg font-semibold">{name}</h4>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-primary">
          Learn more <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { icon: <Brain />, title: "AI & ML Engineering", desc: "Custom models, RAG pipelines, agents, and LLM integrations." },
    { icon: <Code2 />, title: "Custom SaaS Development", desc: "End-to-end product engineering — from MVP to scale." },
    { icon: <Cloud />, title: "Cloud & DevOps", desc: "AWS, GCP, Kubernetes, IaC and observability at scale." },
    { icon: <Cpu />, title: "Product Strategy", desc: "Discovery, UX, and roadmaps for ambitious software teams." },
    { icon: <ShieldCheck />, title: "Security & Compliance", desc: "Hardened architectures, audits and zero-trust patterns." },
    { icon: <Sparkles />, title: "Generative UI / UX", desc: "Beautiful interfaces with AI-assisted personalization." },
  ];
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          tag="Services"
          title="Engineering that moves at AI speed"
          subtitle="A full-stack team obsessed with shipping production-grade software."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-card p-8 transition-colors hover:bg-accent">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:scale-110">
                <span className="[&_svg]:h-5 [&_svg]:w-5">{s.icon}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  const tracks = [
    { title: "AI & Machine Learning", duration: "12 weeks", level: "Intermediate", topics: ["LLMs", "RAG", "Fine-tuning", "MLOps"] },
    { title: "Full-Stack with React + Node", duration: "16 weeks", level: "Beginner → Pro", topics: ["TypeScript", "Next.js", "Postgres", "Cloud"] },
    { title: "Cloud, DevOps & Kubernetes", duration: "10 weeks", level: "Intermediate", topics: ["AWS", "Docker", "K8s", "CI/CD"] },
    { title: "Cybersecurity Essentials", duration: "8 weeks", level: "All levels", topics: ["AppSec", "Pentest", "Cloud sec", "Compliance"] },
  ];
  return (
    <section id="training" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          tag="Training"
          title="Career-ready IT programs, taught by builders"
          subtitle="Hands-on cohorts led by senior engineers who ship real products every day."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                    <BookOpen className="h-3 w-3" /> {t.duration} · {t.level}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{t.title}</h3>
                </div>
                <div className="rounded-full border border-primary/40 bg-primary/10 p-2 text-primary transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.topics.map((tp) => (
                  <span key={tp} className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                    {tp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "120+", l: "Products shipped" },
    { v: "40k+", l: "Students trained" },
    { v: "98%", l: "Placement satisfaction" },
    { v: "24/7", l: "Engineering support" },
  ];
  return (
    <section className="border-y border-border/40 bg-card/30 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-4xl font-bold text-gradient md:text-5xl">{s.v}</div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center md:p-16">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="relative">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground glow-red">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold md:text-5xl">
              Let's build something <span className="text-gradient">intelligent</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tell us about your product, school, or team. We'll get back within 24 hours.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-red"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <Users className="h-3 w-3 text-primary" /> 50+ teams onboarded this quarter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Futuristic SaaS engineering & elite IT training. Built with code,
              powered by AI.
            </p>
            <div className="mt-5 flex gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Products" items={["School MS", "Arcode Brain", "Arcode Insight", "Arcode Flow"]} />
          <FooterCol title="Company" items={["About", "Training", "Careers", "Contact"]} />
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Arcode Studio. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest">Crafted with precision · v3.2</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition-colors hover:text-primary">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeading({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
        {tag}
      </div>
      <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{subtitle}</p>
    </div>
  );
}
