import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { getSubscribedChannels } from '../../store/videos/videos.actions'

const SubscriptionsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getSubscribedChannels())
    }, [dispatch])
    const { loading, videos } = useSelector(store => store.subscriptionsChannel)
    return (
       <Container fluid>
            {
                !loading ? (
                    videos?.map(video => (
                        <VideoHorizontal video={video} key={video.id} subScreen />
                    ))
                    ) : (
                        <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'>
                            <Skeleton width='100%' height='160px' count={20} />
                        </SkeletonTheme>
                    )
            }
       </Container>
    )
}

export default SubscriptionsPage
