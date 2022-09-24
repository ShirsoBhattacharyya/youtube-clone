import React from 'react';
import './Header.scss';
import {FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications,MdApps} from 'react-icons/md';
import {BiVideoPlus} from 'react-icons/bi';
import youtube from '../../assets/pngs/youtube_logo_dark.png';

const Header = ({handleToggleSidebar}) => {
  return (
    <div className='border border-dark header'>
      <div style={{display:'flex',gap:'1.6rem',alignItems:'center'}}>
        <FaBars className='header-menu' size={26} onClick={()=>handleToggleSidebar()}/>
        <img src={youtube} alt="youtube" className="header-logo" />
      </div>
      <form>
        <input type="text" placeholder='Search'/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>
      <div className="header-icons">
        <BiVideoPlus size={28}/>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://yt3.ggpht.com/yti/AJo0G0kuJXf5Ua63bFzjC5bD_kULCFzYQDA2HjHD6YNt=s108-c-k-c0x00ffffff-no-rj" alt="user-avatar" />
      </div>
    </div>
  )
}

export default Header;
