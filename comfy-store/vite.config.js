import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(
        new URL("./src/components", import.meta.url).pathname
      ),
      "@pages": path.resolve(new URL("./src/pages", import.meta.url).pathname),
      "@assets": path.resolve(
        new URL("./src/assets", import.meta.url).pathname
      ),
      "@data": path.resolve(new URL("./src/data", import.meta.url).pathname),
      "@styles": path.resolve(
        new URL("./src/styles", import.meta.url).pathname
      ),
    },
  },
});
