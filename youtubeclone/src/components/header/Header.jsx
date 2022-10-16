import React, { useState } from 'react';
import './Header.scss';
import {FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications,MdApps} from 'react-icons/md';
import {BiVideoPlus} from 'react-icons/bi';
import youtube from '../../assets/pngs/youtube_logo_dark.png';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({handleToggleSidebar}) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`/search/${input}`)
  }
  const user = useSelector(store => store.auth?.user)
  return (
    <div className='border border-dark header'>
      <div style={{display:'flex',gap:'1.6rem',alignItems:'center'}}>
        <FaBars className='header-menu' size={26} onClick={()=>handleToggleSidebar()}/>
        <Link to='/'>
          <img src={youtube} alt="youtube" className="header-logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search' value={input} onChange={e => setInput(e.target.value)}/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>
      <div className="header-icons">
        <BiVideoPlus size={28}/>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src={`${user?.photoURL}`} alt="user-avatar" />
      </div>
    </div>
  )
}

export default Header;
