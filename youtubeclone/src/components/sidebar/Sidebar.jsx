import React from 'react';
import './Sidebar.scss';
import {MdSubscriptions,MdExitToApp,MdOndemandVideo,MdThumbUp,MdHistory,MdHome,MdOutlineVideoLibrary,MdOutlineWatchLater,MdOutlineLightMode,MdOutlineDarkMode} from 'react-icons/md';
import {FaCompass} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/auth.actions';

const Sidebar = ({sidebar,handleToggleSidebar}) => {
  const dispatch=useDispatch();
  const handleLogout=()=>{
    dispatch(logout());
  }
  return (
    <div className={sidebar?"sidebar open":"sidebar"} onClick={()=>{handleToggleSidebar(false)}}>
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <FaCompass size={23}/>
        <span>Explore</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Liked Videos</span>
      </li>
      <hr />
      <li>
        <MdOutlineVideoLibrary size={23}/>
        <span>Library</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li>
        <MdOndemandVideo size={23}/>
        <span>Your videos</span>
      </li>
      <li>
        <MdOutlineWatchLater size={23}/>
        <span>Watch Later</span>
      </li>
      <li>
        <MdOutlineLightMode size={23}/>
        <span>Change theme</span>
      </li>
      <li onClick={handleLogout}>
        <MdExitToApp size={23}/>
        <span>Sign out</span>
      </li>
      <hr />
    </div>
  )
}

export default Sidebar;
