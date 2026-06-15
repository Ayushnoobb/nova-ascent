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
  MapPin,
  Phone,
  Target,
  Rocket,
  Heart,
} from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";
import schoolImage from "@/assets/product-school.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arcode Studio — AI-Powered SaaS & IT Training" },
      {
        name: "description",
        content:
          "Arcode Studio builds futuristic AI-powered SaaS products and trains the next generation of IT professionals. Home of the Arcode School Management System.",
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
      <About />
      <Products />
      <Services />
      <Portfolio />
      <Training />
      <Team />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-1 font-display text-xl font-bold tracking-tight">
      <span className="text-foreground">arc</span>
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <span className="absolute -top-1 left-1/2 h-1 w-3 -translate-x-1/2 rounded-full bg-primary" />
        o
      </span>
      <span className="text-foreground">de</span>
      <span className="ml-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        studio
      </span>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#products" className="transition-colors hover:text-foreground">Products</a>
          <a href="#portfolio" className="transition-colors hover:text-foreground">Portfolio</a>
          <a href="#training" className="transition-colors hover:text-foreground">Training</a>
          <a href="#team" className="transition-colors hover:text-foreground">Team</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 glow-red"
        >
          Contact <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />

      {/* Floating scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 3px, oklch(0.62 0.24 25 / 0.04) 4px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl animate-float-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            AI-native software studio
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            We engineer the{" "}
            <span className="text-gradient">future</span>
            <br /> of software.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
            Arcode Studio builds AI-powered SaaS products and trains the next
            generation of IT professionals. From classrooms to cloud-scale
            platforms — we ship intelligent software that compounds.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-red"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/60 hover:bg-card"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-6 right-6 flex items-end justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-primary" />
            <span>Scroll to explore</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <span><span className="text-primary">120+</span> products</span>
            <span><span className="text-primary">40k+</span> trained</span>
            <span><span className="text-primary">12</span> countries</span>
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
          Trusted by schools, startups & enterprises across 12 countries
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

function About() {
  const pillars = [
    { icon: <Target />, title: "Mission", desc: "Bring AI-grade software to every classroom, startup and enterprise — beautifully." },
    { icon: <Rocket />, title: "Vision", desc: "Become the go-to studio for intelligent SaaS and the technologists who build it." },
    { icon: <Heart />, title: "Values", desc: "Craft. Curiosity. Speed. We obsess over details and outcomes in equal measure." },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              About us
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
              A studio of <span className="text-gradient">engineers, designers & AI builders</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We're a tight-knit team of senior engineers, AI researchers, product
              designers and educators. Since 2019 we've shipped flagship SaaS for
              schools, fintechs, healthcare and logistics — while training
              thousands of developers through our cohort-based academy.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our edge: deep AI craft fused with relentless product taste. We don't
              just integrate models — we engineer experiences around them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-semibold hover:border-primary/50">
                See our work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#team" className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-primary hover:text-primary/80">
                Meet the team
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
                  <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-card to-background p-7">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  { v: "2019", l: "Founded" },
                  { v: "50+", l: "Engineers" },
                  { v: "12", l: "Countries" },
                  { v: "120+", l: "Launches" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                  "Exam & report automation",
                  "Multi-branch ready",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-all hover:border-primary/50">
                  See pricing
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
              <img src={schoolImage} alt="Arcode School Management System dashboard" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background/80" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProductCard icon={<Brain className="h-5 w-5" />} name="Arcode Brain" description="In-house LLM assistant for businesses — knowledge base, RAG and copilots." />
          <ProductCard icon={<BarChart3 className="h-5 w-5" />} name="Arcode Insight" description="Real-time analytics & forecasting platform powered by predictive AI." />
          <ProductCard icon={<Zap className="h-5 w-5" />} name="Arcode Flow" description="Automation workflows that connect your stack with intelligent agents." />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
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
        <SectionHeading tag="Services" title="Engineering that moves at AI speed" subtitle="A full-stack team obsessed with shipping production-grade software." />
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

function Portfolio() {
  const works = [
    { img: work1, title: "Lumen Commerce", category: "SaaS · Retail", desc: "AI-driven storefront analytics for a multi-brand retail group." },
    { img: work2, title: "Nova Assist", category: "AI · Conversational", desc: "Enterprise LLM assistant with RAG over 1M+ internal documents." },
    { img: work3, title: "Pesa Bank", category: "Fintech · Mobile", desc: "Neobank app with biometric KYC and predictive spending insights." },
    { img: work4, title: "Vita Health", category: "Healthcare · SaaS", desc: "Hospital management suite serving 40+ clinics across East Africa." },
    { img: work5, title: "RouteX Logistics", category: "Logistics · Realtime", desc: "Fleet tracking and AI route optimization for last-mile delivery." },
    { img: work6, title: "Kairo Trade", category: "Fintech · Trading", desc: "Crypto analytics terminal with sentiment-aware market signals." },
  ];
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Portfolio
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
              Selected work from our <span className="text-gradient">studio</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From AI assistants to fintech platforms — a glimpse of products
            we've shipped with founders, schools and Fortune 500 teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <a
              key={w.title}
              href="#contact"
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{w.category}</div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{w.title}</h3>
                  <div className="rounded-full border border-primary/40 bg-primary/10 p-2 text-primary transition-transform group-hover:rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </a>
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
        <SectionHeading tag="Training" title="Career-ready IT programs, taught by builders" subtitle="Hands-on cohorts led by senior engineers who ship real products every day." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
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

function Team() {
  const members = [
    { img: team1, name: "Daniel Mwangi", role: "Founder & CEO" },
    { img: team2, name: "Aisha Khan", role: "Head of AI" },
    { img: team3, name: "Lucas Berg", role: "Principal Engineer" },
    { img: team4, name: "Mei Tanaka", role: "Design Director" },
  ];
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading tag="Our team" title="Builders, researchers & educators" subtitle="The senior people who'll actually work on your product or teach your cohort." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
              <div className="aspect-square overflow-hidden">
                <img src={m.img} alt={m.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{m.role}</p>
                <div className="mt-3 flex gap-2">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <a key={i} href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-background/40 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
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
    { v: "98%", l: "Client satisfaction" },
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

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-[var(--shadow-card)]">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                Contact us
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">
                Let's build something <span className="text-gradient">intelligent</span>.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us about your product, school, or team. We respond within 24 hours.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@arcode.studio" />
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+254 700 000 000" />
                <ContactRow icon={<MapPin className="h-4 w-4" />} label="Studio" value="Nairobi · Remote-first, worldwide" />
              </div>

              <div className="mt-10 flex gap-3">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-4 rounded-2xl border border-border bg-background/40 p-6 backdrop-blur md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" placeholder="Jane Doe" />
                <Field label="Email" placeholder="you@company.com" type="email" />
              </div>
              <Field label="Company / School" placeholder="Acme Inc." />
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project or training need…"
                  className="w-full resize-none rounded-md border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-red">
                Send message <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We reply within 24 hours · No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
    </div>
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
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Products" items={["School MS", "Arcode Brain", "Arcode Insight", "Arcode Flow"]} />
          <FooterCol title="Company" items={["About", "Portfolio", "Team", "Contact"]} />
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

function SectionHeading({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
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
