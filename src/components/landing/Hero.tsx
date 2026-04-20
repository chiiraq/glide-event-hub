import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-36 md:pt-44 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-32 -left-20 h-80 w-80 rounded-full bg-primary/30 blur-[120px] animate-glow-pulse -z-10" />
      <div className="absolute top-60 right-0 h-96 w-96 rounded-full bg-cyan/20 blur-[140px] animate-glow-pulse -z-10" style={{ animationDelay: "1.5s" }} />

      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
            </span>
            <span className="text-muted-foreground">Now powering 12,400+ live experiences globally</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-in-up">
            Discover the night.
            <br />
            <span className="text-gradient">Engineer the event.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            SwiftEventPro is the premium operating system for organizers and the cinematic discovery layer for guests. Concerts, galas, weddings, and conferences — orchestrated end-to-end.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Explore events
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="xl">
              <PlayCircle className="h-5 w-5" />
              Watch the platform
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl glass-strong overflow-hidden w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            {[
              { v: "12.4K", l: "Live events" },
              { v: "$84M", l: "Tickets processed" },
              { v: "2.1M", l: "Happy attendees" },
              { v: "99.99%", l: "Uptime SLA" },
            ].map((s) => (
              <div key={s.l} className="bg-card/40 p-6 md:p-8 text-center">
                <div className="font-display text-2xl md:text-4xl font-bold text-gradient-violet">{s.v}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating sparkles */}
      <Sparkles className="absolute top-40 right-[15%] h-6 w-6 text-primary animate-float -z-10" />
      <Sparkles className="absolute bottom-40 left-[12%] h-5 w-5 text-cyan animate-float -z-10" style={{ animationDelay: "2s" }} />
    </section>
  );
};
