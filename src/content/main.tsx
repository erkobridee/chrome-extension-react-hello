import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '~/content/views/App.tsx';

console.log('[CRXJS] Hello world from content script!');
console.log(
  'A Chrome extension that uses Vite + TS + CRXJS + React + TailwindCSS.',
);

const container = document.createElement('div');
container.id = 'crxjs-content-app';
document.body.appendChild(container);

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
