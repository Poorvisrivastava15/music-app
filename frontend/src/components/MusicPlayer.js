import React from 'react';

const MusicPlayer = ({file}) => {
  return (
    <div className='player-bottom'>
        <audio className='audioplayer' src={file} controls></audio>
    </div>
  )
}

export default MusicPlayer;