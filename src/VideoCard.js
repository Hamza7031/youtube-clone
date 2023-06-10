import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./VideoCard.css"

function VideoCard({image,title,channel,timestamp, channelImage, views}) {
  return (
    <div className='videoCard'>
        <img className='videocard-thumbnail' src={image} alt='' />
        <div className='videocard-info'>
            <AccountCircle className="videocard-avatar"
             alt={channel}
             src={channelImage} />

             <div className="video-text">
                <h4>{title}</h4>
                <p>{channel}</p>

                <p>
                    {views} . {timestamp}
                </p>
             </div>

        </div>
    </div>
  )
}

export default VideoCard