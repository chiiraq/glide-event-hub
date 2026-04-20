import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, CalendarDays, Plus, Ticket, Users, BarChart3,
  MapPin, Settings, Sparkles, Search, Bell, ChevronsLeft, ChevronsRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { EventsTable } from "@/components/dashboard/EventsTable";
import { CreateEventWizard } from "@/components/dashboard/CreateEventWizard";
import { AttendeesPanel } from "@/components/dashboard/AttendeesPanel";

type Section = "overview" | "events" | "create" | "tickets" | "attendees" | "analytics" | "venues" | "settings";

const nav: { id: Section; label: string; icon: any }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "create", label: "Create event", icon: Plus },
  { id: "tickets", label: "Tickets", icon: Ticket },
  { id: "attendees", label: "Attendees", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "venues", label: "Venues", icon: MapPin },
  { id: "settings", label: "Settings", icon: Settings },
];

const Dashboard = () => {
  const [active, setActive] = useState<Section>("overview");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex w-full">
      {/* Sidebar */}
      <aside
        className={cn(
          "sticky top-0 h-screen shrink-0 border-r border-sidebar-border bg-sidebar flex flex-col transition-all duration-300",
          collapsed ? "w-[76px]" : "w-[260px]"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2.5 min-w-0">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div className="font-display font-semibold tracking-tight truncate">
                Swift<span className="text-gradient-violet">EventPro</span>
              </div>
            )}
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {nav.map((n) => {
            const Icon = n.icon;
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all group relative",
                  isActive
                    ? "bg-gradient-to-r from-primary/20 to-primary/5 text-foreground border border-primary/30 shadow-glow"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
                )}
                title={collapsed ? n.label : undefined}
              >
                <Icon className={cn("h-4.5 w-4.5 shrink-0", isActive && "text-primary")} />
                {!collapsed && <span className="truncate">{n.label}</span>}
                {isActive && !collapsed && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          {!collapsed ? (
            <div className="glass rounded-2xl p-4">
              <div className="text-xs font-medium text-cyan uppercase tracking-wider">Pro plan</div>
              <div className="text-sm font-semibold mt-1">Unlock real-time chat</div>
              <Button variant="hero" size="sm" className="w-full mt-3">Upgrade</Button>
            </div>
          ) : null}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mt-3 w-full h-10 grid place-items-center rounded-xl hover:bg-sidebar-accent text-muted-foreground"
          >
            {collapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 sticky top-0 z-30 backdrop-blur-xl bg-background/70 border-b border-border flex items-center gap-4 px-6">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search events, attendees, venues…"
              className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="relative h-10 w-10 grid place-items-center rounded-full hover:bg-secondary">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-cyan" />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-primary grid place-items-center text-sm font-semibold text-primary-foreground">
            AC
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 animate-fade-in">
          {active === "overview" && <DashboardOverview onCreate={() => setActive("create")} />}
          {active === "events" && <EventsTable />}
          {active === "create" && <CreateEventWizard onDone={() => setActive("events")} />}
          {active === "attendees" && <AttendeesPanel />}
          {active === "tickets" && <ComingSoon title="Tickets" />}
          {active === "analytics" && <ComingSoon title="Analytics" />}
          {active === "venues" && <ComingSoon title="Venues" />}
          {active === "settings" && <ComingSoon title="Settings" />}
        </main>
      </div>
    </div>
  );
};

const ComingSoon = ({ title }: { title: string }) => (
  <div className="glass rounded-3xl p-16 text-center">
    <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow mb-5">
      <Sparkles className="h-6 w-6 text-primary-foreground" />
    </div>
    <h2 className="font-display text-3xl font-bold">{title}</h2>
    <p className="mt-3 text-muted-foreground max-w-md mx-auto">
      This module is queued for the next release. Tell us how you'd like it to work.
    </p>
  </div>
);

export default Dashboard;
