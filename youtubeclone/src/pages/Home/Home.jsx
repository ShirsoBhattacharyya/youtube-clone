import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../../components/categories/Categories';
import Video from '../../components/video/Video';
import { getPopularVideos,getVideosByCategory } from '../../store/videos/videos.actions';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const dispatch=useDispatch();
  const {videos,activeCategory,loading}=useSelector(store=>store.homeVideos)
  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch]);
  const fetchData=()=>{
    if (activeCategory === 'All') dispatch(getPopularVideos())
      else {
         dispatch(getVideosByCategory(activeCategory))
      }
  }
  return (
    <Container>
        <Categories/>
        <hr className='bottomborder' style={{marginTop:'-0.01rem'}}/>
        <div>
            <InfiniteScroll 
            dataLength={videos.length} 
            next={fetchData} 
            hasMore={true}
            loader={
              <div className='spinner-border text-danger d-block mx-auto'>
              </div>
            }
            className='row'>
              {
                  videos.map((video)=><Col lg={3} md={4}><Video video={video} key={video.id}/></Col>)
              }
            </InfiniteScroll>
        </div>
    </Container>
  )
}

export default Home
