import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { crx } from '@crxjs/vite-plugin';
import zip from 'vite-plugin-zip-pack';

import { name, version } from './package.json';
import manifest from './manifest.config.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
    crx({ manifest }),
    zip({ outDir: 'release', outFileName: `${name}-${version}.zip` }),
  ],
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
});
