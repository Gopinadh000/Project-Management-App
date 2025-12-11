import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker'; 
import path from "path";;

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: "", port: 4001 },
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
  },
});
