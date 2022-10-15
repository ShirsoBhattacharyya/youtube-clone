import React from 'react';
import { Row,Col } from 'react-bootstrap';
import VideoMetaData from '../../components/videoMetaData/videoMetaData';
import './WatchScreen.scss';

const WatchScreen = () => {
  return (
    <Row>
        <Col lg={8}>
            <div className="watchScreen-player">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                title='my-video' 
                allowFullScreen 
                frameBorder="0"
                width='100%'
                height='100%'></iframe>
            </div>
            <VideoMetaData/>
        </Col>
        <Col lg={4}></Col>
    </Row>
  )
}

export default WatchScreen
