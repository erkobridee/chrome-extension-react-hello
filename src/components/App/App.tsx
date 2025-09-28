import { useState } from 'react';

import viteLogo from '/vite.svg';
import typescriptLogo from '~/assets/typescript.svg';
import crxLogo from '~/assets/crx.svg';
import reactLogo from '~/assets/react.svg';
import tailwindcssLogo from '~/assets/tailwindcss.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const buttonClickHandler = () => {
    setCount((count) => count + 1);
  };

  const openTab = () => {
    chrome.tabs.create({ url: 'https://github.com/erkobridee' });
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={typescriptLogo}
              className="logo typescript"
              alt="TypeScript logo"
            />
          </a>
        </div>
        <div className="flex flex-wrap justify-center">
          <a
            href="https://crxjs.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={crxLogo} className="logo crxjs" alt="CRXJS logo" />
          </a>

          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>

          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={tailwindcssLogo}
              className="logo tailwindcss"
              alt="TailwindCSS logo"
            />
          </a>
        </div>
      </div>

      <h2>
        Vite v7.x + TypeScript v5.x + CRXJS v2.x + React v19.x + TailwindCSS
        v4.x
      </h2>

      <div className="flex flex-col justify-center space-y-5">
        <div>
          <button onClick={buttonClickHandler}>count is {count}</button>
        </div>

        {import.meta.env.DEV && (
          <p>
            Edit <code>src/components/App/App.tsx</code> and save to test HMR
          </p>
        )}
      </div>

      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <button onClick={openTab}>open new tab: github/erkobridee</button>
      </div>
    </div>
  );
}

export default App;
