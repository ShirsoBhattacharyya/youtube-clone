import React, { useEffect, useState } from 'react';
import './VideoHorizontal.scss';
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import numeral from 'numeral';

const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
    const {
        id,
        snippet: {
           channelId,
           channelTitle,
           description,
           title,
           publishedAt,
           thumbnails: { medium },
           resourceId,
        },
     } = video
     const isVideo = !(id.kind === 'youtube#channel' || subScreen)
     const [views, setViews] = useState(null)
     const [duration, setDuration] = useState(null)
     const [channelIcon, setChannelIcon] = useState(null)  
     useEffect(() => {
        const get_video_details = async () => {
           const {data: { items }} = await request.get('/videos', {params: {
                 part: 'contentDetails,statistics',
                 id: id.videoId,
              }
           })
           setDuration(items[0].contentDetails.duration)
           setViews(items[0].statistics.viewCount)
        }
        if (isVideo) get_video_details()
     }, [id, isVideo])  
     useEffect(() => {
        const get_channel_icon = async () => {
           const {data: { items }} = await request.get('/channels', {params: {
                 part: 'snippet',
                 id: channelId,
              },
           })
           setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
     }, [channelId])
     const seconds = moment.duration(duration).asSeconds()
     const _duration = moment.utc(seconds * 1000).format('mm:ss')  
     const navigate = useNavigate() 
     const _channelId = resourceId?.channelId || channelId  
     const handleClick = () => {
        isVideo
           ? navigate(`/watch/${id.videoId}`)
           : navigate(`/channel/${_channelId}`)
     }  
     const thumbnail = !isVideo && 'videoHorizontal-thumbnail-channel' 
  return (
    <Row
        className='py-2 m-1 videoHorizontal align-items-center'
        onClick={handleClick}>
        {/* //TODO refractor grid */}
        <Col
            xs={6}
            md={searchScreen || subScreen ? 4 : 6}
            className='videoHorizontal-left'>
            <LazyLoadImage
               src={medium.url}
               effect='blur'
               className={`videoHorizontal-thumbnail ${thumbnail} `}
               wrapperClassName='videoHorizontal-thumbnail-wrapper'
            />
            {isVideo && (
               <span className='videoHorizontal-duration'>{_duration}</span>
            )}
        </Col>
        <Col
            xs={6}
            md={searchScreen || subScreen ? 8 : 6}
            className='p-0 videoHorizontal-right'>
            <p className='mb-1 videoHorizontal-title'>{title}</p>

            {isVideo && (
               <div className='videoHorizontal-details'>
                  <AiFillEye /> {numeral(views).format('0.a')} Views •
                  {moment(publishedAt).fromNow()}
               </div>
            )}

            {(searchScreen || subScreen) && (
               <p className='mt-1 videoHorizontal-desc'>{description}</p>
            )}

            <div className='my-1 videoHorizontal-channel d-flex align-items-center'>
               {isVideo && (
                  <LazyLoadImage src={channelIcon?.url} effect='blur' />
               )}
               <p className='mb-0'>{channelTitle}</p>
            </div>
            {subScreen && (
               <p className='mt-2'>
                  {video.contentDetails.totalItemCount} Videos
               </p>
            )}
        </Col>
    </Row>
  )
}

export default VideoHorizontal
