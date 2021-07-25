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
import Drawerr from "./Drawer";

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
          {list.map((item) => (
            <>
              <Card
                style={{ width: "100%", marginBottom: "20px" }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta
                  description={
                    <a onClick={this.showDrawer}>Show Information</a>
                  }
                />
              </Card>
              <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <Drawerr />
              </Drawer>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Info;
