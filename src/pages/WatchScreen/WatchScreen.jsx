import React, { useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import { getRelatedVideos, getVideoById } from '../../store/videos/videos.actions';
import './WatchScreen.scss';
import { Helmet } from 'react-helmet';
import Comments from '../../components/comments/Comments';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';

const WatchScreen = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getVideoById(id))
      dispatch(getRelatedVideos(id))
  }, [dispatch, id])
  const { videos, loading: relatedVideosLoading } = useSelector(store => store.relatedVideos)
  const { video, loading } = useSelector(store => store.selectedVideo)
  return (
    <Row>
        <Helmet>
            <title>{video?.snippet?.title}</title>
        </Helmet>
        <Col lg={8}>
            <div className="watchScreen-player">
                <iframe src={`https://www.youtube.com/embed/${id}`}
                title={video?.snippet?.title} 
                allowFullScreen 
                frameBorder="0"
                width='100%'
                height='100%'></iframe>
            </div>
            {!loading ? (
               <VideoMetaData video={video} videoId={id} />
            ) : (
               <h6>Loading...</h6>
            )}
            <Comments
               videoId={id}
               totalComments={video?.statistics?.commentCount}
            />
        </Col>
        <Col lg={4}>
          {
            !loading?(
               videos?.filter(video=>video.snippet).map(video => (
                     <VideoHorizontal video={video} key={video.id.videoId} />
                  ))
            ) : (
               <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )
          }
        </Col>
    </Row>
  )
}

export default WatchScreen
