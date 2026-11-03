import { Brain, CalendarDays, GraduationCap, MessageSquare, BookOpen, FileText } from "lucide-react";

const features = [
  { icon: Brain, title: "Attendance insights", description: "Review recorded attendance to spot repeated absences and changes over time. Summaries help staff decide when a supportive follow-up may be useful.", example: "Show classes with declining attendance this month.", review: "Staff check the underlying records and context before contacting a family." },
  { icon: CalendarDays, title: "Timetable suggestions", description: "Suggest schedules using teacher availability, room capacity and subject requirements. Flag clashes and suggest alternatives when a teacher is unavailable.", example: "Suggest a replacement slot without creating a teacher or room conflict.", review: "An administrator reviews and publishes the final timetable." },
  { icon: GraduationCap, title: "Learning support insights", description: "Summarize assessment results by topic so teachers can identify areas for revision and plan additional support. Insights assist teaching decisions rather than label students.", example: "Which topics need revision before the next mathematics assessment?", review: "Teachers verify the results and choose suitable follow-up activities." },
  { icon: MessageSquare, title: "Parent communication assistant", description: "Draft clear notices, meeting invitations and progress updates from information approved by the school. Offer translation drafts for families who prefer another language.", example: "Draft a parent meeting invitation in English and Nepali.", review: "Staff review accuracy, tone and translations before sending any message." },
  { icon: BookOpen, title: "School knowledge assistant", description: "Answer routine questions using school-approved calendars, policies and guides, with references to the relevant source. Unclear questions can be passed to staff.", example: "What documents are required for admission, according to our school guide?", review: "Answers depend on current source documents and the user’s access permissions." },
  { icon: FileText, title: "Reports and administrative summaries", description: "Turn selected school records into draft summaries of attendance, fee status or academic progress. Reduce repetitive writing while keeping source records available for review.", example: "Prepare a monthly operations summary for the school administrator.", review: "Authorized staff verify figures and approve reports before sharing." },
];

export function SchoolAIFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">AI feature concepts</p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Less routine work. More time for your school.</h2>
        <p className="mt-5 text-muted-foreground">Explore how AI assistance could support everyday school operations. These are proposed capabilities; the preview uses sample data. Ask for a demo to confirm current availability and integrations.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description, example, review }) => (
          <article key={title} className="rounded-2xl border border-border bg-card p-7">
            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            <div className="mt-5 rounded-lg border border-border bg-background/60 p-4">
              <p className="text-xs font-semibold text-primary">Example request</p>
              <p className="mt-2 text-sm">“{example}”</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{review}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-primary/30 bg-primary/5 p-7">
        <div><h3 className="font-display text-xl font-semibold">See what fits your school</h3><p className="mt-2 text-sm text-muted-foreground">Discuss your workflows, data permissions and available features with our team.</p></div>
        <a href="/contact" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Request a demo</a>
      </div>
    </section>
  );
}
