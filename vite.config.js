import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@data': path.resolve(__dirname, 'src/data'),
            components: path.resolve(__dirname, 'src/components'),
        },
    },
    plugins: [vue()],
});
