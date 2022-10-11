import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import {Routes,Route, Navigate, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout=({children})=>{
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
          {children}
        </Container>
      </div>
    </div>
  );
}
const App=()=>{
  const {accessToken,loading}=useSelector(store=>store.auth);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!loading && !accessToken){
      navigate('/auth');
    }
  },[accessToken,loading,navigate])
  return (
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>}/>
      <Route path='/auth' element={<LoginPage/>}/>
      <Route path='/search' element={<Layout><h1>Search Results</h1></Layout>}/>
      <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;
