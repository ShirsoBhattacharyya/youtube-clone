import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const VideoSkeleton = () => {
  return (
    <div style={{width:'100%',margin:'1rem 0'}}>
      <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'>
        <Skeleton height='180px'/>
        <div>
            <Skeleton inline style={{margin:'0.5rem'}} circle height='40px' width='40px'/>
            <Skeleton inline height='40px' width='75%'/>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default VideoSkeleton
