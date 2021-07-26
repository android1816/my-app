import React from "react";
import WebcamCapture from './WebCam';

const Main = (props) => {
  const { capture, listVideo } = props;

  return (
    <div className="main">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/DIgv-e18OzA?rel=0&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{display:"inline-block", height:"100%"}}
      ></iframe>
      {/* <WebcamCapture check={capture}/> */}
    </div>
  );
};

export default Main;
