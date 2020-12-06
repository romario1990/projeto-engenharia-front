import React from 'react';
import { Layout, Menu } from 'antd';
import logoQuiz from '../../../images/quiz.svg';
const { Header } = Layout;


function HeaderStyle() {
  return (
    <Header style={{ background: 'white'}}>
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px', marginLeft: '200px', marginRight: '200px'}}
      >
        <img style={{ width: '55px'}} src={logoQuiz} alt="Logo quiz" />
      </Menu>
    </Header>
  );
}

export default HeaderStyle;
