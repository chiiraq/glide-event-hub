import { Building2, Heart, Music2, GraduationCap, Crown, Mic2 } from "lucide-react";

const categories = [
  { icon: Building2, name: "Corporate", count: "1,240 events", grad: "from-primary/30 to-primary/5" },
  { icon: Heart, name: "Weddings", count: "560 events", grad: "from-pink-500/30 to-primary/5" },
  { icon: Music2, name: "Concerts", count: "3,120 events", grad: "from-cyan/30 to-primary/5" },
  { icon: GraduationCap, name: "Workshops", count: "890 events", grad: "from-warning/30 to-primary/5" },
  { icon: Crown, name: "Private", count: "320 events", grad: "from-primary-glow/30 to-primary/5" },
  { icon: Mic2, name: "Conferences", count: "740 events", grad: "from-primary/30 to-cyan/10" },
];

export const Categories = () => {
  return (
    <section id="categories" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-medium text-cyan tracking-widest uppercase mb-3">Browse the universe</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Every kind of <span className="text-gradient-violet">unforgettable</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#"
              className="group relative aspect-square rounded-3xl glass overflow-hidden hover-lift p-5 flex flex-col justify-between"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-card border border-border/60 grid place-items-center group-hover:border-primary/50 group-hover:shadow-glow transition-all">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="relative">
                <div className="font-display font-semibold text-base">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.count}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
