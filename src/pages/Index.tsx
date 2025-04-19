
import { ContactCTA } from "@/components/ContactCTA";
import { CompanyIntro } from "@/components/CompanyIntro";
import { MainHero } from "@/components/MainHero";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-primary-foreground flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto space-y-12 relative">
        {/* Glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] animate-pulse" />
        
        {/* Content */}
        <MainHero />
        <CompanyIntro />
        <ContactCTA />
        <SocialLinks />
      </div>

      {/* Code-like background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="text-xs text-muted-foreground animate-slide"
              style={{
                position: "absolute",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            >
              {"{debug_dream}"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
