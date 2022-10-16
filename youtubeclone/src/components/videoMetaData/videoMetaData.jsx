import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './VideoMetaData.scss';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';
import { checkSubscriptionStatus, getChannelDetails } from '../../store/channel/channel.actions';
import numeral from 'numeral';
import moment from 'moment/moment';
import HelmetCustom from '../helmetCustom/HelmetCustom';

const VideoMetaData = ({ video: { snippet:{ channelId, channelTitle, description, title, publishedAt }, statistics:{ viewCount, likeCount, dislikeCount } }, videoId }) => { 
  const dispatch = useDispatch()
  const {snippet:channelSnippet,statistics:channelStatistics} = useSelector(store => store.channelDetails.channel)
  const subscriptionStatus = useSelector(store => store.channelDetails.subscriptionStatus)
  useEffect(() => {
    dispatch(getChannelDetails(channelId))
    dispatch(checkSubscriptionStatus(channelId))
 }, [dispatch, channelId])
  return (
    <div className='py-2 videoMetaData'>
        <HelmetCustom title={title} description={description} />

        <div className='videoMetaData-top'>
            <h5>{title}</h5>
            <div className='py-1 d-flex justify-content-between align-items-center'>
              <span>
                  {numeral(viewCount).format('0.a')} Views •{' '}
                  {moment(publishedAt).fromNow()}
              </span>
              <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} /> {numeral(likeCount).format('0.a')}
                  </span>
                  <span className='mr-3'>
                     <MdThumbDown size={26} />{' '}
                     {numeral(dislikeCount).format('0.a')}
                  </span>
              </div>
            </div>
        </div>
        <div className='py-3 my-2 videoMetaData-channel d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
               <img
                  src={channelSnippet?.thumbnails?.default?.url}
                  alt=''
                  className='mr-3 rounded-circle'
               />
               <div className='d-flex flex-column'>
                  <span>{channelTitle}</span>
                  <span>
                     {' '}
                     {numeral(channelStatistics?.subscriberCount).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                  </span>
               </div>
            </div>

            <button className={`p-2 m-2 border-0 btn ${subscriptionStatus && 'btn-gray'}`}>
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
        </div>
        <div className='videoMetaData-description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               {description}
            </ShowMoreText>
        </div>
    </div>
  )
}

export default VideoMetaData
