import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button, ButtonTest, ButtonAny } from '@test/vite-test-library';

import ButtonDefault from '@test/vite-test-library/dist/lib/ButtonAny';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <ButtonDefault style={{ background: 'red' }}>{'Hola 1'}</ButtonDefault>
        <br />
        <br />
        <Button style={{ background: 'red' }}>{'Hola 1'}</Button>
        <br />
        <br />
        <ButtonTest>{'Hola 2'}</ButtonTest>
        <br />
        <br />
        <ButtonAny style={{ background: 'black' }}>{'Hola 3'}</ButtonAny>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
