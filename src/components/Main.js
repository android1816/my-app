import React from "react";
import WebcamCapture from './WebCam';

const Main = (props) => {
  const { capture, listVideo } = props;

  return (
    <div className="main">
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/K3beVcHIGTs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <WebcamCapture check={capture}/> */}
    </div>
  );
};

export default Main;
