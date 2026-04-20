import { TrendingUp, TrendingDown, Ticket, DollarSign, Users, Activity, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell,
} from "recharts";

const revenueData = [
  { d: "Mon", v: 3200 }, { d: "Tue", v: 4100 }, { d: "Wed", v: 3800 },
  { d: "Thu", v: 5200 }, { d: "Fri", v: 7800 }, { d: "Sat", v: 9400 }, { d: "Sun", v: 6600 },
];
const salesData = [
  { d: "W1", v: 240 }, { d: "W2", v: 320 }, { d: "W3", v: 280 },
  { d: "W4", v: 410 }, { d: "W5", v: 380 }, { d: "W6", v: 520 }, { d: "W7", v: 610 }, { d: "W8", v: 740 },
];
const tierData = [
  { name: "VIP", value: 24, color: "hsl(260 90% 66%)" },
  { name: "Standard", value: 56, color: "hsl(188 95% 58%)" },
  { name: "Early Bird", value: 20, color: "hsl(290 85% 70%)" },
];

const activity = [
  { who: "Lina Park", what: "purchased 2× VIP for", target: "Aurora Festival", time: "2m ago", color: "bg-primary" },
  { who: "Miguel R.", what: "checked in to", target: "Founders Summit", time: "8m ago", color: "bg-cyan" },
  { who: "Jordan Lee", what: "left a 5★ review on", target: "Velvet Hour Gala", time: "21m ago", color: "bg-warning" },
  { who: "Ayaka S.", what: "registered for", target: "Designers in Residence", time: "44m ago", color: "bg-primary-glow" },
  { who: "Tomás G.", what: "refunded 1× ticket from", target: "Neon Nights Berlin", time: "1h ago", color: "bg-destructive" },
];

const stats = [
  { label: "Total revenue", value: "$284,910", change: "+18.4%", up: true, icon: DollarSign },
  { label: "Tickets sold", value: "12,438", change: "+8.2%", up: true, icon: Ticket },
  { label: "Attendees", value: "9,810", change: "+12.1%", up: true, icon: Users },
  { label: "Conversion", value: "4.8%", change: "-0.3%", up: false, icon: Activity },
];

export const DashboardOverview = ({ onCreate }: { onCreate: () => void }) => {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-medium text-cyan tracking-widest uppercase mb-2">Welcome back, Amelia</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Tonight's command center</h1>
          <p className="text-muted-foreground mt-2">3 live events · 1,402 active check-ins · revenue trending up</p>
        </div>
        <Button variant="hero" onClick={onCreate}>
          <Plus className="h-4 w-4" /> New event
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 hover-lift">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-gradient-card border border-border grid place-items-center">
                <s.icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <span className={`inline-flex items-center gap-1 text-xs font-semibold ${s.up ? "text-success" : "text-destructive"}`}>
                {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {s.change}
              </span>
            </div>
            <div className="mt-4 font-display text-2xl md:text-3xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-semibold text-lg">Revenue this week</h3>
              <p className="text-xs text-muted-foreground">Across all live events</p>
            </div>
            <div className="text-2xl font-display font-bold text-gradient-violet">$40,100</div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(260 90% 66%)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="hsl(260 90% 66%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Area type="monotone" dataKey="v" stroke="hsl(260 90% 70%)" strokeWidth={2.5} fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg mb-1">Ticket tiers</h3>
          <p className="text-xs text-muted-foreground mb-4">Distribution this month</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={tierData} dataKey="value" innerRadius={50} outerRadius={75} paddingAngle={4}>
                  {tierData.map((d, i) => <Cell key={i} fill={d.color} stroke="none" />)}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {tierData.map((t) => (
              <div key={t.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: t.color }} />
                  <span>{t.name}</span>
                </div>
                <span className="text-muted-foreground">{t.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales bar + activity */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-semibold text-lg">Ticket sales trend</h3>
              <p className="text-xs text-muted-foreground">Last 8 weeks</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <defs>
                  <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(188 95% 65%)" />
                    <stop offset="100%" stopColor="hsl(260 90% 60%)" />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                  }}
                  cursor={{ fill: "hsl(var(--primary) / 0.08)" }}
                />
                <Bar dataKey="v" fill="url(#bar)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-semibold text-lg">Live activity</h3>
            <span className="inline-flex items-center gap-1.5 text-xs text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
              real-time
            </span>
          </div>
          <ul className="space-y-4">
            {activity.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className={`h-8 w-8 shrink-0 rounded-full ${a.color} grid place-items-center text-[11px] font-bold text-primary-foreground`}>
                  {a.who.split(" ").map(n => n[0]).join("")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm leading-snug">
                    <span className="font-semibold">{a.who}</span>
                    <span className="text-muted-foreground"> {a.what} </span>
                    <span className="font-medium">{a.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button variant="ghost" className="w-full mt-5 text-sm">View all activity <ArrowRight className="h-3.5 w-3.5" /></Button>
        </div>
      </div>
    </div>
  );
};
