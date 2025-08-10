import './VideoPlayer.css'
import video from '../../assets/video.mp4'
import { useRef } from 'react';

function VideoPlayer({playState, setPlayState}){
  const close =useRef()

  const play = (e) => {
    if(e.target === close.current){
      setPlayState(false);
    }
  }
  return(
    <div ref={close} className= {`video-player ${playState? '':'hide'}`}
    onClick={(e) => play(e)}>
    <video src={video} autoPlay loop muted controls></video>
    </div>
  )
}

export default VideoPlayer;