import React from "react";
import { Image } from "antd";

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
      {listVideo.map((item) => (
        <div className="sub-stream">
          <Image
            width="100%"
            height="100%"
            src={`https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500/500`}
          />
        </div>
      ))}
    </div>
  );
};

export default Picture;
