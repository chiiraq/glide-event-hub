import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/landing/Hero";
import { FeaturedEvents } from "@/components/landing/FeaturedEvents";
import { Categories } from "@/components/landing/Categories";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedEvents />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
