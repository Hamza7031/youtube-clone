import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';

function ChannelRow({
    image, channel, verified, subs, noofvideoes, description
}) {
  return (
    <div className='channelRow'>

        <AccountCircle className="channelRow-logo"
        alt={channel} src={image} />

       <div className='channelRow-text'>

        </div>

        </div>
  )
}

export default ChannelRow