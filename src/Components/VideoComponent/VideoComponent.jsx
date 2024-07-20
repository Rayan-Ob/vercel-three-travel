import "./VideoComponentStyle.css"
import { useState } from "react"

import poster from "../../../public/images/img-video.png"
import video from "../../../public/video/travel-video.mp4"
import play from "../../../public/images/play-button.svg"


function VideoComponent() {
  const [isPlaying, setisPlaying] = useState(false)
  const PlayPause = () =>{

    setisPlaying(!isPlaying)

  }
  return (
    <div className="video-container">

<video controls ={isPlaying}
   width= "100%" height=" 432px"
  poster={poster} playsInline>
  <source src={video} type="video/mp4" />
</video>
<button className= "play-button" onClick={PlayPause} style={{visibility: isPlaying ? "hidden" :"visible"}}>
  <img src={play} alt="" />
</button>


    </div>
  )
}

export default VideoComponent