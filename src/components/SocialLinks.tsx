
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  );
};
