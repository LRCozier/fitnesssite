import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,  
    target: ['es2019', 'safari13']
  },
});