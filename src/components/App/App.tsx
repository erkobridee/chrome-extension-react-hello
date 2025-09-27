import { useState } from 'react';

import viteLogo from '/vite.svg';
import reactLogo from '~/assets/react.svg';

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
    <div className="flex flex-col space-y-5">
      <div className="flex justify-center space-x-5">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>Vite v7.x + TypeScript v5.x + React v19.x + TailwindCSS v4.x</h2>

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
