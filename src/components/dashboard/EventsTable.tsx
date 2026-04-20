import { useState } from "react";
import { Search, Filter, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "Live" | "Upcoming" | "Sold out" | "Draft" | "Ended";

const events: { name: string; venue: string; date: string; sold: number; cap: number; revenue: string; status: Status }[] = [
  { name: "Aurora Festival — Berlin", venue: "Marquee Arena", date: "Jun 14, 2025", sold: 8420, cap: 9000, revenue: "$748,200", status: "Live" },
  { name: "Founders Summit 2025", venue: "Skybridge, Singapore", date: "May 21, 2025", sold: 612, cap: 800, revenue: "$152,200", status: "Upcoming" },
  { name: "Velvet Hour: Private Gala", venue: "The Orchid Hall, Paris", date: "Jul 4, 2025", sold: 188, cap: 200, revenue: "$94,000", status: "Upcoming" },
  { name: "Designers in Residence", venue: "Plaza One, NYC", date: "Apr 28, 2025", sold: 320, cap: 320, revenue: "$18,880", status: "Sold out" },
  { name: "Neon Nights Tour — Lisbon", venue: "Obsidian Hall", date: "Aug 9, 2025", sold: 0, cap: 1200, revenue: "$0", status: "Draft" },
  { name: "Quantum Conf 2024", venue: "Orbit Center, Tokyo", date: "Nov 12, 2024", sold: 1080, cap: 1200, revenue: "$324,000", status: "Ended" },
];

const statusStyle: Record<Status, string> = {
  Live: "bg-success/15 text-success border-success/30",
  Upcoming: "bg-primary/15 text-primary border-primary/30",
  "Sold out": "bg-cyan/15 text-cyan border-cyan/30",
  Draft: "bg-muted text-muted-foreground border-border",
  Ended: "bg-secondary text-muted-foreground border-border",
};

export const EventsTable = () => {
  const [q, setQ] = useState("");
  const filtered = events.filter(e => e.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">All events</h1>
          <p className="text-muted-foreground mt-1">Manage productions, schedules, and tickets across your venues.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="glass" size="sm"><Filter className="h-4 w-4" /> Filters</Button>
          <Button variant="hero" size="sm">+ New event</Button>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex gap-3 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search events…"
              className="w-full h-9 pl-10 pr-4 rounded-full bg-secondary/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60"
            />
          </div>
          <div className="text-xs text-muted-foreground ml-auto">{filtered.length} of {events.length}</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="px-6 py-3 font-medium">
                  <button className="flex items-center gap-1.5">Event <ArrowUpDown className="h-3 w-3" /></button>
                </th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Sold</th>
                <th className="px-6 py-3 font-medium">Revenue</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium w-12"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => {
                const pct = (e.sold / e.cap) * 100;
                return (
                  <tr key={e.name} className="border-b border-border/60 hover:bg-secondary/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold">{e.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{e.venue}</div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{e.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 min-w-[140px]">
                        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground tabular-nums">{e.sold}/{e.cap}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold">{e.revenue}</td>
                    <td className="px-6 py-4">
                      <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border", statusStyle[e.status])}>
                        {e.status === "Live" && <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />}
                        {e.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="h-8 w-8 grid place-items-center rounded-lg hover:bg-secondary text-muted-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
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
