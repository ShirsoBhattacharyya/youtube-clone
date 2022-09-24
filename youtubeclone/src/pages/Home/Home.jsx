import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../../components/categories/Categories';
import Video from '../../components/video/Video';

const Home = () => {
  return (
    <Container>
        <Categories/>
        <div style={{width:'95%'}}>
          <Row>
              {
                  [...new Array(20)].map(()=><Col lg={3} md={4}><Video/></Col>)
              }
          </Row>
        </div>
    </Container>
  )
}

export default Home
