import React from 'react'

const item = [""]
const LiveView = (props) => {
  const {listVideo} = props;
    return (
      <div className="live-view">
        <div className="search-controller" id="myHeader">
          <button className="search-btn">
            <i class="bi bi-search"></i>
          </button>

          <input type="text" placeholder="search" />
        </div>
        {
          listVideo.map((item) => (
            <div className="sub-stream">
              <iframe
                width="100%"
                height="auto"
                src={item.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>DD:MM:YY ss:mm:hh</p>
            </div>
          ))
        }
      </div>
    );
}

export default LiveView;
