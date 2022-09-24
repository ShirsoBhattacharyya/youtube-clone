import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';

const App=()=>{
  const [sidebar,setSidebar]=useState(false);
  const handleToggleSidebar=()=>{
    setSidebar(value=>!value);
  }
  return (
    <div style={{width:'100%'}}>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app-container'>
        <div>
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        </div>
        <Container className='main'>
          <Home/>
        </Container>
      </div>
    </div>
  );
}

export default App;
