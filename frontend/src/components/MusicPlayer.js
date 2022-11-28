import React from "react"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const MusicPlayer = ({ file, title, artist }) => {
  return (
    <div className="player-bottom">
      <AudioPlayer
        autoPlay
        src={file}
        header={
        <>
        <span className="h4">{title}</span><span className="p"> {artist}</span>
        </>
        }
        // onPlay={e => console.log("onPlay")}
        // other props here
      />
    </div>
  )
}

export default MusicPlayer
