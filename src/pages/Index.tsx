
import { ContactCTA } from "@/components/ContactCTA";
import { CompanyIntro } from "@/components/CompanyIntro";
import { MainHero } from "@/components/MainHero";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-primary-foreground flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto space-y-16 relative">
        {/* Subtle glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* Content */}
        <MainHero />
        <CompanyIntro />
        <ContactCTA />
        <SocialLinks />
      </div>

      {/* Minimalistic background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          {Array.from({ length: 12 }).map((_, i) => (
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
              {"{dream}"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
