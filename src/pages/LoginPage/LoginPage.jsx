import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/auth/auth.actions';
import './LoginPage.scss';

const LoginPage = () => {
  const dispatch=useDispatch();
  const accessToken=useSelector(store=>store.auth.accessToken); 
  const handleLogin=()=>{
    dispatch(login())
  }
  const navigate=useNavigate();
  useEffect(()=>{
    if(accessToken){
      navigate('/');
    }
  },[accessToken,navigate])
  return (
    <div className="login">
        <div className="login-container">
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="youtube-icon" />
            <button onClick={handleLogin}>Login with Google</button>
            <p>Made with ❤️ by Shirso Bhattacharyya.</p>
        </div>
    </div>
  )
}

export default LoginPage
