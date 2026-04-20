import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import corp from "@/assets/event-corporate.jpg";
import concert from "@/assets/event-concert.jpg";
import wedding from "@/assets/event-wedding.jpg";
import workshop from "@/assets/event-workshop.jpg";

const events = [
  { img: concert, status: "Live", title: "Neon Nights — Aurora Festival", venue: "Marquee Arena, Berlin", date: "Sat, Jun 14 · 9:00 PM", price: "from $89", remaining: 312, accent: "from-primary to-cyan" },
  { img: corp, status: "Trending", title: "Founders Summit 2025", venue: "Skybridge, Singapore", date: "Wed, May 21 · 9:00 AM", price: "from $249", remaining: 84, accent: "from-cyan to-primary" },
  { img: wedding, status: "Featured", title: "Velvet Hour: Private Gala", venue: "The Orchid Hall, Paris", date: "Fri, Jul 4 · 7:30 PM", price: "by invitation", remaining: 12, accent: "from-primary-glow to-primary" },
  { img: workshop, status: "Few left", title: "Designers in Residence", venue: "Plaza One, NYC", date: "Mon, Apr 28 · 10:00 AM", price: "from $59", remaining: 7, accent: "from-warning to-primary" },
];

export const FeaturedEvents = () => {
  return (
    <section id="discover" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-cyan tracking-widest uppercase mb-3">Tonight & this week</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Featured <span className="text-gradient-violet">experiences</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">Hand-picked events with cinematic production, intimate venues, and stories worth telling.</p>
          </div>
          <Button variant="glass">View all events</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((e, i) => (
            <article
              key={e.title}
              className="group relative rounded-3xl overflow-hidden glass hover-lift cursor-pointer"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-strong text-[11px] font-semibold">
                  <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${e.accent} animate-pulse`} />
                  {e.status}
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-[11px] font-medium text-muted-foreground">
                  {e.remaining} left
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-display font-semibold text-lg leading-tight line-clamp-2">{e.title}</h3>
                <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" />{e.date}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{e.venue}</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-semibold text-gradient-violet">{e.price}</div>
                  <Button variant="hero" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Book now
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
