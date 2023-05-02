import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      // เพิ่ม alias สำหรับตำแหน่งไฟล์ SVG
      "@/assets": "/path/to/your/assets/folder",
    },
  },
});
