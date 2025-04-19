
import { Mail } from "lucide-react";

export const ContactCTA = () => {
  return (
    <div className="text-center">
      <a
        href="mailto:contact@debugdream.com"
        className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        Reach Out to Us
      </a>
    </div>
  );
};
