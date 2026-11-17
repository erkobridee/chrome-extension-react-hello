import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import zip from 'vite-plugin-zip-pack';

import manifest from './manifest.config.js';

// https://github.com/eslint/eslint/discussions/15305
import { readFileSync } from 'fs';
const packageJSON = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' }),
);

const { name, version } = packageJSON;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    crx({ manifest }),
    zip({ outDir: 'release', outFileName: `${name}-${version}.zip` }),
  ],
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
