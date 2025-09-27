import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '~/assets/styles/tailwind.css';
import styles from '~/assets/styles/index.css?inline';

import App from '~/components/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <style precedence="medium">{styles}</style>

    <title>Chrome EXT: Vite + TS + React + TailwindCSS</title>

    <App />
  </StrictMode>,
);
