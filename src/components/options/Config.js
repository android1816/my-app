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

const { Meta } = Card;

const list = [{name: "Camera 1"}, {name: "Camera 2"}, {name: "Camera 3"}, {name: "Camera 4"}]
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
    render(){
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
        {list.map((item) => (
            <>
              <Card
                style={{ width: "100%", marginBottom: "20px", height: "100%"}}
                cover={
                  <img
                    alt="example"
                    src={`https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500/500`}
                  />
                }
                onClick={this.showDrawer}
              >
                <Meta
                  description={
                    <a >Configuration</a>
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
                <FormSizeDemo />
              </Drawer>
            </>
          ))}
        </div>
        </div>
    )
    }
    
}

export default Config;