import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Calculator from './components/Calculator';
import Users from './components/Users';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Users />
    </div>
  );
}

export default App;
