import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './tailwind.css';
import styles from './index.css?inline';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <style precedence="medium">{styles}</style>

    <title>Chrome EXT: Vite + TS + React + TailwindCSS</title>

    <App />
  </StrictMode>,
);
