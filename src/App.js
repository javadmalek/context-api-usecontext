import React from 'react';
import logo from './logo.svg';
import './App.css';


import DisplayUsers from './display_users.js.jsx';
import { UserContextProvider } from './user_context.js';

function App() {
  const users = [
      { name: 'Javad', field: 'Computer' },
      { name: 'Javad1', field: 'Computer1' },
      { name: 'Javad2', field: 'Computer2' },
      { name: 'Javad3', field: 'Computer3' },
    ];

  return (
    <UserContextProvider users={users}>
      <DisplayUsers />
    </UserContextProvider>
  );
}

export default App;
