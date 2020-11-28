import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;


function HeaderStyle() {
  return (
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px'}}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderStyle;
