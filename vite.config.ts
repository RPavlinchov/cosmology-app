import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
// import { polyfillNode } from "esbuild-plugin-polyfill-node";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills(), react()],
});
