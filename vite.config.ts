import { fileURLToPath, URL } from "node:url";
import VueTypeImports from "vite-plugin-vue-type-imports";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueTypeImports()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` @import "@/assets/scss/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
