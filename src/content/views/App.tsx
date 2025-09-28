import { useState } from 'react';

import Logo from '~/assets/crx.svg';

import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className="popup-container">
      <button className="toggle-button" onClick={toggle}>
        <img src={Logo} alt="CRXJS logo" className="button-icon" />
      </button>

      {show && (
        <div className={`popup-content ${show ? 'opacity-100' : 'opacity-0'}`}>
          <h2>Hello CRXJS</h2>
        </div>
      )}
    </div>
  );
}

export default App;
