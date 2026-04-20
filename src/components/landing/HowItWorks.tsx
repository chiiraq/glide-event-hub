import { Compass, Ticket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Compass,
    n: "01",
    title: "Discover the room",
    text: "Browse cinematic event cards, curated categories, and AI recommendations tailored to how you spend your nights.",
  },
  {
    icon: Ticket,
    n: "02",
    title: "Book in seconds",
    text: "Secure tiered tickets — Early Bird, Standard, VIP — with one tap. QR delivered instantly to wallet, calendar, and inbox.",
  },
  {
    icon: BarChart3,
    n: "03",
    title: "Orchestrate at scale",
    text: "Organizers run venues, attendees, schedules, and revenue from a real-time command center. Insights you can act on.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-medium text-cyan tracking-widest uppercase mb-3">How SwiftEventPro works</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            From spark <span className="text-gradient-violet">to standing ovation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative glass rounded-3xl p-8 hover-lift"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-display text-5xl font-bold text-gradient opacity-30">{s.n}</div>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
