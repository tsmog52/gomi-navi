import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { dirname } from 'path';

const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/index.jsx',
            'resources/css/app.css',  // ここにCSSファイルを追加
        ]),
        react(),
    ],
    alias: {
        '@': resolve(__dirname, 'resources/js'),
    }
});
