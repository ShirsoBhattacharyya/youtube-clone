import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';

const App=()=>{
  return (
    <>
      <Header/>
      <div className='container border border-info'>
        <Sidebar/>
        <Container fluid className='main border border-warning'>
          <Home/>
        </Container>
      </div>
    </>
  );
}

export default App;
