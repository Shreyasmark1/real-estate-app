import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/lib/network/api"),
      "@schema": path.resolve(__dirname, "./src/lib/schema")
    },
  },
  server: {
    host: true,
  },
//   build: {
//     rollupOptions: {
//         output:{
//             manualChunks(id) {
//                 if (id.includes('node_modules')) {
//                     return id.toString().split('node_modules/')[1].split('/')[0].toString();
//                 }
//             }
//         }
//     }
// }
})
