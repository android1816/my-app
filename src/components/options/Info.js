import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Avatar, Drawer, Tabs } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Drawerr from "./Drawer";
import FormSizeDemo from "./Form";
const { Meta } = Card;
const { TabPane } = Tabs;
const list = [
  { name: "Camera 1" },
  { name: "Camera 2" },
  { name: "Camera 3" },
  { name: "Camera 4" },
];
const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

class Info extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const listVideo = this.props.listVideo;
    return (
      <div className="info">
        <div className="select-info">
          <Dropdown overlay={menu}>
            <Button>
              CAMERA <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="item-info">
          {listVideo.map((item) => (
            <>
              <Card
                style={{ width: "100%", marginBottom: "20px" }}
                cover={
                  <iframe
                    src={item.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                }
                onClick={this.showDrawer}
              >
                <Meta description={<a>Show Information</a>} />
              </Card>
              <Drawer
                width="90%"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <div className="form-config">
                  <div className="video-pre">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/DIgv-e18OzA"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="edit-info">
                    <Tabs defaultActiveKey="1" type="card">
                      <TabPane tab="Tab 1" key="1">
                        <Drawerr />
                      </TabPane>
                      <TabPane tab="Tab 2" key="2">
                        <Drawerr />
                      </TabPane>
                      <TabPane tab="Tab 3" key="3">
                        <Drawerr />
                      </TabPane>
                      <TabPane tab="Tab 4" key="4">
                        <Drawerr />
                      </TabPane>
                      <TabPane tab="Tab 5" key="5">
                        <Drawerr />
                      </TabPane>
                      <TabPane tab="Tab 6" key="6">
                        <Drawerr />
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </Drawer>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Info;
