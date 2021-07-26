import React from "react";
import { Image, Button } from "antd";
import { VideoCameraOutlined, CameraOutlined } from "@ant-design/icons";
const item = [""];
const Picture = (props) => {
  const { listVideo } = props;
  return (
    <div className="live-view">
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>
      <div className="lib">
        <div><Button shost>
          <CameraOutlined />
          Picture
        </Button></div>
        <div><Button shost>
        <VideoCameraOutlined />
          Video
        </Button></div>
        
      </div>
      {listVideo.map((item) => (
        <div className="sub-stream">
          <Image
            width="100%"
            height="100%"
            src={`https://picsum.photos/id/${Math.floor(
              Math.random() * 500
            )}/500/500`}
          />
        </div>
      ))}
    </div>
  );
};

export default Picture;
