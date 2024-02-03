import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  const PORT = env.PORT || "http://localhost:5500"
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: PORT,
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
});
