import { useState } from "react";
import { Search, Download, CheckCircle2, Clock, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CheckIn = "Checked in" | "Pending" | "No-show";

const attendees: { name: string; email: string; tier: "VIP" | "Standard" | "Early Bird"; event: string; status: CheckIn }[] = [
  { name: "Lina Park", email: "lina@northwind.co", tier: "VIP", event: "Aurora Festival", status: "Checked in" },
  { name: "Miguel Rivera", email: "miguel@orbit.io", tier: "Standard", event: "Founders Summit", status: "Checked in" },
  { name: "Jordan Lee", email: "j.lee@velvet.studio", tier: "VIP", event: "Velvet Hour Gala", status: "Pending" },
  { name: "Ayaka Sato", email: "ayaka@designers.house", tier: "Early Bird", event: "Designers in Residence", status: "Pending" },
  { name: "Tomás Garcia", email: "tomas@plazaone.nyc", tier: "Standard", event: "Aurora Festival", status: "No-show" },
  { name: "Priya Mehta", email: "priya@skybridge.sg", tier: "VIP", event: "Founders Summit", status: "Checked in" },
  { name: "Noah Becker", email: "noah@obsidian.de", tier: "Standard", event: "Aurora Festival", status: "Checked in" },
  { name: "Hana Kim", email: "hana@quantumconf.jp", tier: "Early Bird", event: "Quantum Conf 2024", status: "Checked in" },
];

const statusIcon = {
  "Checked in": { icon: CheckCircle2, color: "text-success bg-success/15 border-success/30" },
  Pending: { icon: Clock, color: "text-warning bg-warning/15 border-warning/30" },
  "No-show": { icon: XCircle, color: "text-destructive bg-destructive/15 border-destructive/30" },
};

const tierColor = {
  VIP: "from-primary-glow to-primary",
  Standard: "from-cyan to-primary",
  "Early Bird": "from-warning to-primary",
};

export const AttendeesPanel = () => {
  const [q, setQ] = useState("");
  const filtered = attendees.filter(a => (a.name + a.email + a.event).toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Attendees</h1>
          <p className="text-muted-foreground mt-1">Search, filter, and check guests in across all events.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="glass" size="sm"><Download className="h-4 w-4" /> Export CSV</Button>
          <Button variant="hero" size="sm">Open scanner</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { l: "Total", v: "9,810", sub: "across 12 events" },
          { l: "Checked in", v: "6,402", sub: "65% rate" },
          { l: "VIP guests", v: "284", sub: "+12 today" },
          { l: "No-shows", v: "118", sub: "1.2%" },
        ].map(s => (
          <div key={s.l} className="glass rounded-2xl p-5">
            <div className="text-xs text-muted-foreground">{s.l}</div>
            <div className="font-display text-2xl font-bold mt-1">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex gap-3 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search attendees…"
              className="w-full h-9 pl-10 pr-4 rounded-full bg-secondary/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60"
            />
          </div>
          <div className="flex gap-1.5 ml-auto">
            {["All", "Checked in", "Pending", "No-show"].map((f, i) => (
              <button key={f} className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition",
                i === 0 ? "bg-primary/20 text-primary border border-primary/30" : "bg-secondary/60 text-muted-foreground hover:text-foreground border border-transparent"
              )}>{f}</button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="px-6 py-3 font-medium">Attendee</th>
                <th className="px-6 py-3 font-medium">Event</th>
                <th className="px-6 py-3 font-medium">Tier</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => {
                const S = statusIcon[a.status];
                const Icon = S.icon;
                return (
                  <tr key={a.email} className="border-b border-border/60 hover:bg-secondary/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${tierColor[a.tier]} grid place-items-center text-xs font-bold text-primary-foreground`}>
                          {a.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-semibold">{a.name}</div>
                          <div className="text-xs text-muted-foreground">{a.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{a.event}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold bg-secondary border border-border">
                        {a.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border", S.color)}>
                        <Icon className="h-3 w-3" />
                        {a.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
