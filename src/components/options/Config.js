import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Avatar, Drawer } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import FormSizeDemo from "./Form.js";
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const { Meta } = Card;

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

class Config extends React.Component {
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
      <div className="config">
        <div className="select-config">
          <Dropdown overlay={menu}>
            <Button>
              CAMERA <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="item-config">
          {listVideo.map((item) => (
            <>
              <Card
                style={{ width: "100%", marginBottom: "20px", height: "100%" }}
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
                <Meta description={<a>Configuration</a>} />
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
                  <div className="edit-form">
                    <Tabs defaultActiveKey="1" type="card">
                      <TabPane tab="Tab 1" key="1">
                        <FormSizeDemo />
                      </TabPane>
                      <TabPane tab="Tab 2" key="2">
                        <FormSizeDemo />
                      </TabPane>
                      <TabPane tab="Tab 3" key="3">
                        <FormSizeDemo />
                      </TabPane>
                      <TabPane tab="Tab 4" key="4">
                        <FormSizeDemo />
                      </TabPane>
                      <TabPane tab="Tab 5" key="5">
                        <FormSizeDemo />
                      </TabPane>
                      <TabPane tab="Tab 6" key="6">
                        <FormSizeDemo />
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

export default Config;
