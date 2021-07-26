import React from "react";
import { Tooltip, Button } from "antd";
import {
  MenuFoldOutlined,
  CameraOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

const record = <span>Record</span>;
const captureImg = <span>Capture</span>;

const buttonWidth = 70;

const Header = (props) => {
  const sendData = (option) => {
    props.parentCallback(option);
  };

  const capture = (capture) => {
    props.capture(capture);
  };

  return (
    <>
      <div className="open-close" onClick={() => sendData(null)}>
        <MenuFoldOutlined />
      </div>
      <div className="capture" onClick={() => capture(true)}>
        <div style={{ marginRight: "30px" }}>
          <Tooltip placement="bottom" title={captureImg}>
            <CameraOutlined />
          </Tooltip>
        </div>
        <div style={{ marginRight: "10px" }}>
          <Tooltip placement="bottom" title={record}>
            <VideoCameraAddOutlined />
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Header;
