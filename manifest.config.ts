import { defineManifest } from '@crxjs/vite-plugin';

import pkg from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: 'Chrome EXT: Vite + TS + React + TailwindCSS',
  description: 'A Chrome extension that uses Vite + TS + React + TailwindCSS',
  version: pkg.version,
  icons: {
    48: 'public/logo-48x48.png',
  },
  action: {
    default_icon: {
      48: 'public/logo-48x48.png',
    },
    default_popup: 'src/popup/index.html',
  },
  content_scripts: [
    {
      js: ['src/content/main.ts'],
      matches: ['https://*/*'],
    },
  ],
  permissions: ['tabs', 'contentSettings'],
});
