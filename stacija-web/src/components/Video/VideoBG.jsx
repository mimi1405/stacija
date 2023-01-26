import React from "react";
import '../../Styles/Video.css';


export default function VideoBG(props) {
  return (
    <div id="video-container">
      <video playsInline autoPlay loop muted src={props.source}>
            
      </video>
    </div>
  );
}
