import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="relative py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 md:p-16 text-center">
          <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-primary/40 blur-[120px]" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan/30 blur-[140px]" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              Your next event deserves <span className="text-gradient">a stage like this.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Spin up an event in minutes. Sell tickets in seconds. Run the night from one luminous dashboard.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/dashboard">
                  Open the dashboard <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="glass" size="xl">Talk to sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
