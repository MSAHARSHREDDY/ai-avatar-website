// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     proxy: {
//       "/api": {
//         //target: "https://ai-avatar-website-backend.onrender.com/",
//         target: "http://localhost:5001",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, "")
//       }
//     }
//   },
//   plugins: [
//     react(),
//     mode === 'development' &&
//     componentTagger(),
//   ].filter(Boolean),
  
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
  
// }));






import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: {
      proxy: isDev
        ? {
            "/api": {
              target: "http://localhost:5001",
              changeOrigin: true,
              secure: false,
              rewrite: (path: string) =>
                path.replace(/^\/api/, ""),
            },
          }
        : undefined,
    },

    plugins: [
      react(),
      isDev && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    define: {
      __API_URL__: JSON.stringify(
        isDev
          ? "/api"
          : "https://ai-avatar-website-backend.onrender.com"
      ),
      __LIVEKIT_URL__: JSON.stringify(
        "wss://your-project.livekit.cloud"
      ),
    },
  };
});