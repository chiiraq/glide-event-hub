import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Calendar, MapPin, Ticket, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const steps = [
  { id: 1, label: "Basics", icon: Sparkles },
  { id: 2, label: "Schedule", icon: Calendar },
  { id: 3, label: "Venue", icon: MapPin },
  { id: 4, label: "Tickets", icon: Ticket },
  { id: 5, label: "Review", icon: Check },
];

export const CreateEventWizard = ({ onDone }: { onDone: () => void }) => {
  const [step, setStep] = useState(1);

  const next = () => (step < steps.length ? setStep(step + 1) : finish());
  const back = () => step > 1 && setStep(step - 1);
  const finish = () => {
    toast.success("Event created", { description: "Your event is in draft. Tickets are ready to publish." });
    onDone();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="font-display text-3xl font-bold">Create a new event</h1>
        <p className="text-muted-foreground mt-1">Set the stage in five quick steps.</p>
      </div>

      {/* Stepper */}
      <div className="glass rounded-2xl p-5">
        <div className="flex items-center justify-between gap-2">
          {steps.map((s, i) => {
            const done = step > s.id;
            const active = step === s.id;
            const Icon = s.icon;
            return (
              <div key={s.id} className="flex items-center gap-3 flex-1 min-w-0">
                <div
                  className={cn(
                    "h-10 w-10 shrink-0 rounded-full grid place-items-center transition-all border",
                    active && "bg-gradient-primary border-transparent shadow-glow text-primary-foreground",
                    done && "bg-success/20 border-success/40 text-success",
                    !active && !done && "bg-secondary border-border text-muted-foreground"
                  )}
                >
                  {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                </div>
                <div className="hidden md:block min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Step {s.id}</div>
                  <div className={cn("text-sm font-semibold truncate", !active && !done && "text-muted-foreground")}>{s.label}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px bg-border relative overflow-hidden">
                    <div className={cn("absolute inset-y-0 left-0 bg-gradient-primary transition-all duration-500", done ? "w-full" : "w-0")} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step body */}
      <div className="glass rounded-2xl p-6 md:p-8 min-h-[420px]">
        {step === 1 && <StepBasics />}
        {step === 2 && <StepSchedule />}
        {step === 3 && <StepVenue />}
        {step === 4 && <StepTickets />}
        {step === 5 && <StepReview />}
      </div>

      <div className="flex justify-between">
        <Button variant="glass" onClick={back} disabled={step === 1}>
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <Button variant="hero" onClick={next}>
          {step === steps.length ? "Publish event" : "Continue"} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Field = ({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    {children}
    {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
  </div>
);

const inputCls =
  "w-full h-11 px-4 rounded-xl bg-secondary/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";

const StepBasics = () => (
  <div className="space-y-5 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">The essentials</h2>
    <Field label="Event name">
      <input className={inputCls} placeholder="e.g. Aurora Festival — Berlin" />
    </Field>
    <Field label="Tagline">
      <input className={inputCls} placeholder="A cinematic night under neon skies" />
    </Field>
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Category">
        <select className={inputCls}>
          {["Concert", "Corporate", "Wedding", "Workshop", "Conference", "Private"].map(c => <option key={c}>{c}</option>)}
        </select>
      </Field>
      <Field label="Visibility">
        <select className={inputCls}>
          <option>Public</option><option>Unlisted</option><option>Invite only</option>
        </select>
      </Field>
    </div>
    <Field label="Cover image">
      <div className="border-2 border-dashed border-border rounded-2xl h-32 grid place-items-center text-sm text-muted-foreground hover:border-primary/50 hover:bg-primary/5 transition cursor-pointer">
        Drag & drop or browse — recommended 1920×1080
      </div>
    </Field>
  </div>
);

const StepSchedule = () => (
  <div className="space-y-5 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">Schedule the moment</h2>
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Start date"><input type="date" className={inputCls} /></Field>
      <Field label="End date"><input type="date" className={inputCls} /></Field>
      <Field label="Doors open"><input type="time" className={inputCls} /></Field>
      <Field label="Show time"><input type="time" className={inputCls} /></Field>
    </div>
    <Field label="Agenda timeline">
      <div className="space-y-2">
        {["Doors & welcome cocktail", "Opening act", "Headline performance", "After party"].map((s, i) => (
          <div key={s} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border">
            <div className="h-7 w-7 rounded-lg bg-gradient-primary text-[11px] font-bold text-primary-foreground grid place-items-center">{i + 1}</div>
            <span className="text-sm">{s}</span>
            <span className="ml-auto text-xs text-muted-foreground">+ {30 * (i + 1)} min</span>
          </div>
        ))}
        <Button variant="glass" size="sm" className="w-full">+ Add timeline block</Button>
      </div>
    </Field>
  </div>
);

const StepVenue = () => (
  <div className="space-y-5 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">Pick the room</h2>
    <Field label="Search venues">
      <input className={inputCls} placeholder="City, venue, or capacity…" />
    </Field>
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        { n: "Marquee Arena", c: "Berlin, DE", cap: "9,000 cap" },
        { n: "The Orchid Hall", c: "Paris, FR", cap: "350 cap" },
        { n: "Skybridge", c: "Singapore", cap: "1,200 cap" },
        { n: "Plaza One", c: "New York, US", cap: "640 cap" },
      ].map((v, i) => (
        <button key={v.n} className={cn(
          "text-left rounded-2xl p-4 border bg-secondary/30 hover:border-primary/60 hover:bg-primary/5 transition-all",
          i === 0 ? "border-primary/60 ring-2 ring-primary/20" : "border-border"
        )}>
          <div className="font-semibold">{v.n}</div>
          <div className="text-xs text-muted-foreground mt-1">{v.c}</div>
          <div className="text-xs mt-3 inline-flex px-2 py-0.5 rounded-full bg-cyan/10 text-cyan">{v.cap}</div>
        </button>
      ))}
    </div>
  </div>
);

const StepTickets = () => (
  <div className="space-y-5 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">Configure tiers</h2>
    {[
      { name: "Early Bird", price: "$59", qty: 200, color: "from-cyan to-primary" },
      { name: "Standard", price: "$89", qty: 600, color: "from-primary to-primary-glow" },
      { name: "VIP", price: "$249", qty: 80, color: "from-primary-glow to-warning" },
    ].map(t => (
      <div key={t.name} className="rounded-2xl border border-border bg-secondary/40 p-5 flex flex-col md:flex-row gap-4 md:items-center">
        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${t.color} grid place-items-center text-primary-foreground`}>
          <Ticket className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">Visible to all attendees</div>
        </div>
        <input className={cn(inputCls, "md:w-28")} defaultValue={t.price} />
        <input className={cn(inputCls, "md:w-28")} defaultValue={t.qty} />
      </div>
    ))}
    <Button variant="glass" className="w-full">+ Add ticket tier</Button>
  </div>
);

const StepReview = () => (
  <div className="space-y-5 animate-fade-in">
    <h2 className="font-display text-2xl font-bold">Final check</h2>
    <p className="text-muted-foreground">Everything looks great. Publish to start selling tickets in seconds.</p>
    <div className="grid sm:grid-cols-3 gap-4">
      {[
        { k: "Capacity", v: "880" },
        { k: "Tiers", v: "3" },
        { k: "Est. revenue", v: "$94,820" },
      ].map(s => (
        <div key={s.k} className="rounded-2xl bg-secondary/40 border border-border p-5">
          <div className="text-xs text-muted-foreground">{s.k}</div>
          <div className="font-display text-2xl font-bold mt-1 text-gradient-violet">{s.v}</div>
        </div>
      ))}
    </div>
    <div className="rounded-2xl border border-success/40 bg-success/5 p-5 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-success/20 grid place-items-center text-success">
        <Check className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold">Ready to publish</div>
        <div className="text-xs text-muted-foreground">Your event will be discoverable instantly across SwiftEventPro.</div>
      </div>
    </div>
  </div>
);
