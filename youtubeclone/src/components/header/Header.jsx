import React from 'react';
import './Header.scss';
import {FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications,MdApps} from 'react-icons/md';

const Header = () => {
  return (
    <div className='border border-dark header'>
      <FaBars className='header-menu' size={26}/>
      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className="header-logo" />
      <form>
        <input type="text" placeholder='Search'/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>
      <div className="header-icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://yt3.ggpht.com/yti/AJo0G0kuJXf5Ua63bFzjC5bD_kULCFzYQDA2HjHD6YNt=s108-c-k-c0x00ffffff-no-rj" alt="user-avatar" />
      </div>
    </div>
  )
}

export default Header;
