import "./VideoComponentStyle.css"
import { useState } from "react"


function VideoComponent() {
  const [isPlaying, setisPlaying] = useState(false)
  const PlayPause = () =>{

    setisPlaying(!isPlaying)

  }
  return (
    <div className="video-container">

<video controls ={isPlaying}
   width= "100%" height=" 432px"
  poster="../../../public/images/img-video.png" playsInline>
  <source src="../../../public/video/travel-video.mp4" type="video/mp4" />
</video>
<button className= "play-button" onClick={PlayPause} style={{visibility: isPlaying ? "hidden" :"visible"}}>
  <img src="../../../public/images/play-button.svg" alt="" />
</button>


    </div>
  )
}

export default VideoComponent