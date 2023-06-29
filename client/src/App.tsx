import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from '@shared/user';
import { getHelloWorld } from './services/testService';
function App() {
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  };
  useEffect(() => {
    getHelloWorld().then((res: any) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{user.name}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
