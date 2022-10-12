import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../../components/categories/Categories';
import Video from '../../components/video/Video';
import { getPopularVideos } from '../../store/videos/videos.actions';

const Home = () => {
  const dispatch=useDispatch();
  const {videos}=useSelector(store=>store.homeVideos)
  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch]);
  return (
    <Container style={{width:'95%'}}>
        <Categories/>
        <hr className='bottomborder' style={{marginTop:'-0.01rem'}}/>
        <div style={{width:'95%'}}>
          <Row>
              {
                  videos.map((video)=><Col lg={3} md={4} key={video.id}><Video video={video}/></Col>)
              }
          </Row>
        </div>
    </Container>
  )
}

export default Home
