import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";

// ...existing code...

export default defineConfig({
  server: { host: "localhost", port: 4001 },
  plugins: [checker({ typescript: false }), react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@components": "/src/components",
      "@pages": "/src/pages",
    },
  },
  build: {
    sourcemap: true,

    // keep CSS as separate file(s) and place them in styles/
    cssCodeSplit: true,

    // control output filenames so JS is bundled into a single bundle file,
    // images go to assets/, and css files go to styles/
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        // force most JS into a single bundle chunk
        // manualChunks returns the same name so Rollup emits a single JS file
        manualChunks: () => "bundle",

        // name for the produced JS bundle
        entryFileNames: "bundle/js/bundle.[hash].js",
        chunkFileNames: "bundle/js/bundle.[hash].js",

        // route assets (images, fonts, css) into organized folders
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";
          if (/\.(css)$/i.test(name)) {
            return "styles/[name].[hash][extname]";
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/i.test(name)) {
            return "assets/images/[name].[hash][extname]";
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
            return "assets/fonts/[name].[hash][extname]";
          }
          // fallback for other assets
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },
});
