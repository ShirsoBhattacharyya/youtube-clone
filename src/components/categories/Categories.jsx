import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../store/videos/videos.actions';
import './Categories.scss';

const Categories = () => {
  const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Eminem',
    'Guitar',
    'John Cena',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Masai School',
    'Luka Modric',
    'Shwetabh'
 ];
  const [activeElement,setActiveElement]=useState('All');
  const dispatch=useDispatch();
  const handleClick=(el)=>{
    setActiveElement(el);
    if(el==="All"){
      dispatch(getPopularVideos())
    }else{
      dispatch(getVideosByCategory(el))
    }
  }
  return (
    <div className='categories'>
      {
        keywords.map((el,i)=><span className={activeElement===el?'active':''} onClick={()=>handleClick(el)} key={i+1}>{el}</span>)
      }
    </div>
  )
}

export default Categories
