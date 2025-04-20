import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/debugdream-launchpad-genesis/',
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      '8928-2400-1a00-b040-8e21-149-44e4-fe0-a6a7.ngrok-free.app' // replace with your actual ngrok domain
    ]
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
