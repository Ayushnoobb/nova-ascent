import { trainingPrograms } from "@/lib/training";
import { useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  Brain,
  Users,
  School,
  GraduationCap,
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check,
  BookOpen,
  Linkedin,
  Mail,
  LoaderCircle,
  Phone,
  MapPin,
  Target,
  Rocket,
  Heart,
} from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";
import schoolImage from "@/assets/product-school-ai.png";
import nirajPortrait from "@/assets/niraj-ghimire.png";
import ayushPortrait from "@/assets/ayush-khatri.png";

export function HomePage() {
  return <><Hero /><Logos /><Products /><Services /><Stats /></>;
}

function Logo() {
  return (
    <img src="/images/arcode-white.png" alt="Arcode Studeo" width={2048} height={768} className="h-auto w-28 shrink-0 object-contain mix-blend-screen sm:w-36" />
  );
}

const navigation = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/training", label: "Training" },
  { to: "/team", label: "Team" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-6">
        <Link to="/" aria-label="Arcode Studio home" onClick={() => setOpen(false)}><Logo /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navigation.map(({ to, label }) => <Link key={to} to={to} activeProps={{ className: "text-primary" }} className="transition-colors hover:text-foreground">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Contact <ArrowRight className="h-4 w-4" /></Link>
          <button type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="rounded-md border border-border px-3 py-2 text-sm md:hidden">{open ? "Close" : "Menu"}</button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
        {navigation.map(({ to, label }) => <Link key={to} to={to} onClick={() => setOpen(false)} activeProps={{ className: "text-primary" }} className="rounded-md px-3 py-3 hover:bg-card">{label}</Link>)}
      </nav>}
    </header>
  );
}

function Hero() {
  const [motionPaused, setMotionPaused] = useState(false);
  return (
    <section data-motion-paused={motionPaused} className="hero-motion relative flex min-h-[max(640px,100svh)] w-full items-center overflow-hidden pb-10 pt-28 md:pt-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="hero-backdrop h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />

      <div className="hero-atmosphere pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-orb" />
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="hero-particle" style={{ left: `${38 + (i * 17) % 60}%`, top: `${12 + (i * 23) % 78}%`, animationDelay: `${-i * 1.7}s`, animationDuration: `${8 + (i % 5) * 2}s` }} />
        ))}
      </div>
      {/* Floating scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 3px, oklch(0.62 0.24 25 / 0.04) 4px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="hero-content max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            AI-native software studio
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            We engineer the{" "}
            <span className="hero-shimmer text-gradient">future</span>
            <br /> of software.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
            Arcode Studio builds AI-powered SaaS products and trains the next
            generation of IT professionals. From classrooms to cloud-scale
            platforms — we ship intelligent software that compounds.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/products"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-red"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/60 hover:bg-card"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-muted-foreground md:mt-16">
          <a href="#explore" className="inline-flex items-center gap-4 rounded-sm py-2 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <span className="hero-scroll-line h-px w-12 bg-primary" />
            <span>Scroll to explore</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <span><span className="text-primary">1</span> product</span>
            <span><span className="text-primary">4</span> training tracks</span>
            <span>Remote collaboration</span>
          </div>
          <button type="button" onClick={() => setMotionPaused(!motionPaused)} aria-pressed={motionPaused} className="hero-motion-toggle rounded-md border border-border px-3 py-2 text-[10px] tracking-wide transition-colors hover:border-primary/50 hover:text-foreground">{motionPaused ? "Resume animation" : "Pause animation"}</button>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const audiences = [
    { label: "Schools", icon: School },
    { label: "Educators", icon: BookOpen },
    { label: "Students", icon: GraduationCap },
    { label: "Startups", icon: Rocket },
    { label: "Growing teams", icon: Users },
  ];
  return (
    <section id="explore" aria-labelledby="audience-heading" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="audience-panel mx-auto max-w-7xl rounded-3xl px-6 py-9 md:px-12 md:py-12">
        <div className="relative z-10">
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" aria-hidden="true" />
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Built around you</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" aria-hidden="true" />
          </div>
          <h2 id="audience-heading" className="text-center font-display text-xl font-medium text-foreground/90 md:text-2xl">For education, learning <span className="text-muted-foreground">& growing businesses.</span></h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {audiences.map(({ label, icon: Icon }) => (
              <li key={label} className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-3 py-6 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/[0.06] last:col-span-2 sm:last:col-span-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary transition-colors group-hover:bg-primary/15"><Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" /></div>
                <span className="text-center font-display text-sm font-medium tracking-tight text-foreground/85 md:text-base">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function About() {
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
              We bring software development and practical IT education together.
              Our focus is a School Management System that simplifies everyday
              school operations, alongside hands-on training for aspiring developers.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our edge: deep AI craft fused with relentless product taste. We don't
              just integrate models — we engineer experiences around them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-semibold hover:border-primary/50">
                See our work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/team" className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-primary hover:text-primary/80">
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
                  { v: "1", l: "Core product" },
                  { v: "4", l: "Training tracks" },
                  { v: "6", l: "Service areas" },
                  { v: "Remote", l: "Collaboration" },
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

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          tag="Our product"
          title="One platform for everyday school operations"
          subtitle="Our School Management System brings administration, learning and communication together."
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
                <a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-all hover:border-primary/50">
                  See pricing
                </a>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
              <img src={schoolImage} alt="Concept preview of Arcode School with attendance insights, timetable suggestions and a parent portal; sample data shown" width={1536} height={1024} loading="lazy" className="h-full w-full object-contain" />
              <p className="absolute inset-x-0 bottom-0 bg-background/90 px-4 py-2 text-center text-xs text-muted-foreground">Product concept · Illustrative interface and sample data</p>
            </div>
          </div>
        </div>


      </div>
    </section>
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

export function Portfolio() {
  const decisions = [
    { title: "Bring daily tasks together", text: "The design groups attendance, timetable planning, fee records and communication around the school day. The goal is to reduce the need to move between disconnected tools." },
    { title: "Make information easier to scan", text: "The dashboard concept uses clear summaries, focused charts and familiar navigation. Staff can start with an overview and then inspect the records behind it." },
    { title: "Keep people in control of AI", text: "Proposed AI features produce suggestions and drafts for staff review. Attendance patterns need context, messages need approval, and reports need verification." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHeading tag="Portfolio" title="A closer look at how we build" subtitle="Explore the thinking behind our work: the problem, the design choices and the next steps." />
      <article className="mt-14 overflow-hidden rounded-3xl border border-border bg-card">
        <div className="border-b border-border p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">In-house project · Design concept</p>
          <h2 className="mt-4 font-display text-3xl font-bold">Simplifying the school day</h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">Our School Management System is the focus of this project walkthrough. The interface shown is a generated concept using sample data; this is a look at the design direction, not a report of a client deployment or measured results.</p>
        </div>
        <img src={schoolImage} alt="School management dashboard design concept with sample data" width={1536} height={1024} loading="lazy" className="mx-auto w-full max-w-4xl" />
        <div className="grid gap-10 border-t border-border p-8 md:p-12 lg:grid-cols-2">
          <div><h3 className="font-display text-xl font-semibold">The problem we’re designing for</h3><p className="mt-4 leading-relaxed text-muted-foreground">School administrators, teachers and families need different views of the same information. Attendance sheets, schedules and messages can become difficult to coordinate when they live in separate places.</p></div>
          <div><h3 className="font-display text-xl font-semibold">The direction</h3><p className="mt-4 leading-relaxed text-muted-foreground">A shared platform with focused workflows for each role, clear records and a parent portal. AI assistance is explored where it can reduce repetitive work while leaving decisions with school staff.</p></div>
        </div>
      </article>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{decisions.map(item => <div key={item.title} className="rounded-2xl border border-border bg-card p-7"><h3 className="font-display text-xl font-semibold">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-primary/5 p-8">
        <div><h3 className="font-display text-xl font-semibold">Explore the product</h3><p className="mt-2 text-muted-foreground">See the feature overview and discuss what your school needs.</p></div>
        <a href="/products" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">View School Management System <ArrowRight className="h-4 w-4" /></a>
      </div>
    </section>
  );
}

export function Training() {
  const tracks = trainingPrograms;
  return (
    <section id="training" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tag="Training" title="Career-ready IT programs, taught by builders" subtitle="Hands-on cohorts led by senior engineers who ship real products every day." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {tracks.map((t) => (
            <Link to="/training/$slug" params={{ slug: t.slug }} key={t.title} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
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
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">View program <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const founders = [
    { image: nirajPortrait, name: "Niraj Ghimire", initials: "NG", role: "Founder", experience: 16, saying: "Build for the people who use it.", message: "Good software starts with understanding people. Our aim at Arcode is to simplify everyday work, build with care, and create tools that remain useful long after the first release." },
    { image: ayushPortrait, name: "Ayush Khatri", initials: "AK", role: "Co-founder", experience: 6, saying: "Keep learning. Keep building.", message: "The best way to understand technology is to build something meaningful with it. We want to bring that spirit to our products and training—turning curiosity into practical skills and ideas into software people can use." },
  ];
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading tag="Our team" title="Meet the people behind Arcode" subtitle="Founded by Niraj Ghimire and Ayush Khatri, bringing 22 years of combined experience." />
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
              <div className="aspect-[4/5] overflow-hidden bg-card">
                <img src={founder.image} alt={founder.name} width={founder.initials === "NG" ? 682 : 627} height={founder.initials === "NG" ? 823 : 658} className="h-full w-full object-cover object-top" />
              </div>
              <div className="border-t border-border p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{founder.role}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{founder.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground"><span className="font-semibold text-foreground">{founder.experience} years</span> of experience</p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="font-display text-lg font-semibold text-foreground">{founder.saying}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{founder.message}</p>
                  <p className="mt-4 text-xs text-muted-foreground/70">Draft message · Pending approval</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "1", l: "School management product" },
    { v: "4", l: "Training tracks" },
    { v: "8–16", l: "Weeks per program" },
    { v: "6", l: "Engineering services" },
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

export function Contact({ program }: { program?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const submitting = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    if (!String(fields.name ?? "").trim() || !String(fields.message ?? "").trim()) {
      setStatus("error");
      setFeedback("Please enter your name and a message.");
      return;
    }
    submitting.current = true;
    setStatus("sending");
    setFeedback("Sending your message…");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
        signal: controller.signal,
      });
      if (!response.ok) {
        setStatus("error");
        setFeedback(response.status === 429
          ? "Too many requests. Please wait a minute before trying again."
          : "We couldn’t submit your message. Please try again or email us directly.");
        return;
      }
      setStatus("success");
      setFeedback("Your message has been submitted. Thank you for getting in touch!");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(controller.signal.aborted
        ? "The request timed out. Delivery could not be confirmed. Please try again or email us directly."
        : "We couldn’t submit your message. Please try again or email us directly.");
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
    }
  }

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
                Tell us about your product, school, or team. We’ll get back to you by email.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="info@arcodestudeo.com" />
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="9851166047" />
                <ContactRow icon={<MapPin className="h-4 w-4" />} label="Studio" value="Remote collaboration" />
              </div>

              <div className="mt-10 flex gap-3">
                {[Linkedin].map((Icon, i) => (
                  <a key={i} href="https://www.linkedin.com/company/arcodestudeo/home/" target="_blank" rel="noopener noreferrer" aria-label="Arcode Studio on LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} onInvalid={() => { setStatus("error"); setFeedback("Please complete the required fields, use a valid email, and enter at least 10 characters in your message."); }} aria-busy={status === "sending"} action="https://formspree.io/f/xeaavjda" method="POST" className="space-y-4 rounded-2xl border border-border bg-background/40 p-6 backdrop-blur md:p-8">
              {program && <p className="rounded-md border border-primary/30 bg-primary/10 p-3 text-sm">Enquiry: <strong>{program}</strong></p>}
              {program && <input type="hidden" name="program" value={program} />}
              <input type="hidden" name="subject" value="New Arcode Studio website enquiry" />
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Jane Doe" required autoComplete="name" />
                <Field name="email" label="Email" placeholder="you@company.com" type="email" required autoComplete="email" />
              </div>
              <Field name="organization" label="Company / School (optional)" placeholder="Your organization" autoComplete="organization" />
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={4}
                  placeholder="Tell us about your project or training need…"
                  className="w-full resize-none rounded-md border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="disabled:cursor-wait disabled:opacity-70 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-red">
                {status === "sending" ? <>Sending… <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /></> : <>Send message <ArrowRight className="h-4 w-4" /></>}
              </button>
              <div role="status" aria-live="polite" aria-atomic="true" className="text-sm">
                {feedback && <p className={status === "error" ? "text-red-400" : "text-foreground"}>{feedback}</p>}
                {status === "error" && <a href="mailto:ayushwilltry@gmail.com" className="mt-2 inline-block text-primary underline">Email ayushwilltry@gmail.com</a>}
              </div>
              <p className="text-center text-xs text-muted-foreground">
                We’ll reply to the email address you provide.
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
        <div className="mt-0.5 break-words text-sm font-medium text-foreground">{label === "Email" ? <a href={`mailto:${value}`} className="hover:text-primary">{value}</a> : label === "Phone" ? <a href={`tel:${value}`} className="hover:text-primary">{value}</a> : value}</div>
      </div>
    </div>
  );
}

function Field({ name, label, placeholder, type = "text", required = false, autoComplete }: { name: string; label: string; placeholder: string; type?: string; required?: boolean; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={`contact-${name}`} className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={`contact-${name}`}
        name={name}
        required={required}
        maxLength={254}
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
    </div>
  );
}

export function Footer() {
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
              {[Linkedin].map((Icon, i) => (
                <a key={i} href="https://www.linkedin.com/company/arcodestudeo/home/" target="_blank" rel="noopener noreferrer" aria-label="Arcode Studio on LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Products" items={["School Management System"]} />
          <FooterCol title="Company" items={["About", "Portfolio", "Team", "Contact"]} />
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2019 Arcode Studio. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest">Crafted with precision</span>
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
            <a href={title === "Products" ? "/products" : `/${i.toLowerCase()}`} className="transition-colors hover:text-primary">{i}</a>
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
