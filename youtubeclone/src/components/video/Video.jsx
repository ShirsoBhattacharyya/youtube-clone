import React from 'react';
import './Video.scss';
import {AiFillEye} from 'react-icons/ai';

const Video = () => {
  return (
    <div>
      <div className="video">
        <div className="video-top">
          <img src="https://i.ytimg.com/vi/G4JuopziR3Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4KNSahRhXrS_RTsln0HovEDjICg" alt="thumbnail" />
          <span>02:45</span>
        </div>
        <div className="video-title">
          Exclusive Clip | Loki | Disney+
        </div>
        <div className="video-details">
          <span>
            <AiFillEye/> 12m views •{" "}
          </span>
          <span>
            6 days ago
          </span>
        </div>
        <div className="video-channel">
          <img src="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj" alt="channel-logo" />
          <p>Marvel Entertainment</p>
        </div>
      </div>
    </div>
  )
}

export default Video
