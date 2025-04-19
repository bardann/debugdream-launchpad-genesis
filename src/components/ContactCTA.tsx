
import { Mail } from "lucide-react";

export const ContactCTA = () => {
  return (
    <div className="text-center">
      <a
        href="mailto:contact@debugdream.com"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-medium text-primary-foreground bg-primary/90 rounded-lg hover:bg-primary transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
      >
        <Mail className="w-4 h-4" />
        Start a Conversation
      </a>
    </div>
  );
};
