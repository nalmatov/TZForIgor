import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve:  {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'cn': path.resolve(__dirname, './src/common/lib/cn.ts'),
      '@components': path.resolve(__dirname, './src/components'),
      '@store': path.resolve(__dirname, './src/store/index.ts'),
    }
  }
});
