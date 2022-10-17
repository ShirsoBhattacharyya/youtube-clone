import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import {Routes,Route, Navigate, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import WatchScreen from './pages/WatchScreen/WatchScreen';
import SearchResults from './pages/searchResults/SearchResults';
import ChannelPage from './pages/ChannelPage/ChannelPage';
import SubscriptionsPage from './pages/SubscriptionsPage/SubscriptionsPage';

const Layout=({children})=>{
  const [sidebar,setSidebar]=useState(false);
  const handleToggleSidebar=()=>{
    setSidebar(value=>!value);
  }
  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app-container'>
        <div>
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        </div>
        <Container fluid className='app-main'>
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
      <Route path='/search/:query' element={<Layout><SearchResults/></Layout>}/>
      <Route path='/watch/:id' element={<Layout><WatchScreen/></Layout>}/>
      <Route path='/channel/:channelId' element={<Layout><ChannelPage/></Layout>}/>
      <Route path='feed/subscriptions' element={<Layout><SubscriptionsPage/></Layout>}/>
      <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;
