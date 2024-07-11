import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';
import { dirname } from 'path';

const __dirname = dirname(__filename)

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
    alias: {
        '@': resolve(__dirname, 'resources/js'),
    }
});
