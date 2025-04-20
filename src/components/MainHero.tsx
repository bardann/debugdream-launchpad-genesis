
import { useEffect, useState } from "react";

export const MainHero = () => {
  const [glitchText, setGlitchText] = useState("DebugDream");
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() < 0.1;
      if (shouldGlitch) {
        setGlitchText("D3bugDr3am");
        setTimeout(() => setGlitchText("DebugDream"), 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="text-center space-y-4">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/70 antialiased py-3">
  DebugDream
</h1>

      
      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
        Transforming ideas into elegant digital solutions
      </p>
    </div>
  );
};
