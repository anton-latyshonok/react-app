//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Navbar from './components/Header/Header.jsx';
import Header from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      
      
    </div>
  );
}





export default App;
