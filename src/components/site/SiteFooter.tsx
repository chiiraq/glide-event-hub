import { Sparkles, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const cols = [
  {
    title: "Platform",
    links: ["Discover", "Categories", "Venues", "Pricing", "Mobile app"],
  },
  {
    title: "Organizers",
    links: ["Create event", "Dashboard", "Analytics", "Tickets", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Press", "Careers", "Partners", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help center", "Trust & safety", "Status", "API docs"],
  },
];

export const SiteFooter = () => {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="font-display font-semibold text-xl">
                Swift<span className="text-gradient-violet">EventPro</span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              The premium operating system for unforgettable events. From intimate gatherings to global productions.
            </p>
            <div className="flex gap-2 mt-6">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} SwiftEventPro. Crafted for unforgettable nights.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
