import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "hooks": path.resolve(__dirname, "shared-libs/packages/hooks"),
      "ui": path.resolve(__dirname, "shared-libs/packages/ui"),
    },
  },
})
