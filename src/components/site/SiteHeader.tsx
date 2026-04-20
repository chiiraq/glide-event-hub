import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Discover", href: "/#discover" },
  { label: "Categories", href: "/#categories" },
  { label: "How it works", href: "/#how" },
  { label: "Dashboard", href: "/dashboard" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all duration-500",
            scrolled ? "glass-strong" : "bg-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Sparkles className="h-4.5 w-4.5 text-primary-foreground" />
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-60 blur-md -z-10 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="font-display font-semibold text-lg tracking-tight">
              Swift<span className="text-gradient-violet">EventPro</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground transition-colors",
                  pathname === l.href && "text-foreground"
                )}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/dashboard">Host an event</Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-secondary text-sm">
                  {l.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <Link to="/dashboard">Host an event</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
