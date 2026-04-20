import { Star } from "lucide-react";

const items = [
  {
    name: "Amelia Chen",
    role: "Festival Director, Aurora Sound",
    quote: "SwiftEventPro replaced four tools overnight. We sold 14,000 tickets in 36 hours and the dashboards are genuinely beautiful.",
  },
  {
    name: "Marcus Holt",
    role: "Head of Events, Northwind Co.",
    quote: "The wizard takes a complete corporate offsite from idea to live tickets in twelve minutes. Our ops team has hours back per week.",
  },
  {
    name: "Sienna Rao",
    role: "Wedding Planner, Velvet Studios",
    quote: "Clients see a luxurious experience from invite to QR check-in. Everything finally feels as premium as the events themselves.",
  },
];

const partners = ["AURORA", "NORTHWIND", "VELVET", "PLAZA ONE", "ORBIT", "SKYBRIDGE", "MARQUEE", "OBSIDIAN"];

export const Testimonials = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-medium text-cyan tracking-widest uppercase mb-3">Loved by world-class teams</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Trusted by <span className="text-gradient-violet">organizers</span> who don't compromise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="glass rounded-3xl p-7 hover-lift flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-snug flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-sm font-semibold text-primary-foreground">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Partner marquee */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-16 marquee w-max">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="font-display font-bold text-2xl text-muted-foreground/50 tracking-[0.3em] whitespace-nowrap">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
