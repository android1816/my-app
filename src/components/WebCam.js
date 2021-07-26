import Webcam from "react-webcam";
import React, { useState } from "react";
import { Modal, Button } from "antd";
//const WebcamComponent = () => <Webcam />;

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { check } = props;
console.log("check ", check);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    showModal();
  }, [webcamRef, setImgSrc]);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        width="90%"
        screenshotFormat="image/jpeg"
      />
      {
      }
      {/* <Button type="primary" onClick={capture}>
        Open Modal
      </Button> */}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        footer={[
          <Button key="back" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >

        {imgSrc && <img src={imgSrc} />}
      </Modal>
      
    </>
  );
};

export default WebcamCapture;
