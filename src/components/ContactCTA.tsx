
import { Mail } from "lucide-react";

export const ContactCTA = () => {
  return (
    <div className="text-center">
      <a
        href="mailto:contact@debugdream.com"
        className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg hover:from-secondary hover:to-accent/80 transition-all transform hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        Reach Out to Us
      </a>
    </div>
  );
};
