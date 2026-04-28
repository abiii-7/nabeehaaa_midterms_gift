import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/nabeeha_midterms_gift/" : "/",
  plugins: [react()]
});
