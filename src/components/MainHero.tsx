
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
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent glitch-text">
        {glitchText}
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
        Our new digital home is under construction. Something awesome is coming soon.
      </p>
    </div>
  );
};
