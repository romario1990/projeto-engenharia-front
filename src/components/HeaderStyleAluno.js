import React from 'react';
import { Button, Layout, Menu } from 'antd';
import logoQuiz from '../images/quiz.svg';
import pf from '../images/pf.svg';
import { Link } from 'react-router-dom';
const { Header } = Layout;


function HeaderStyle() {
  return (
    <Header style={{ background: 'white'}}>
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px', textAlign: 'center'}}
      >
        <img style={{ width: '55px'}} src={logoQuiz} alt="Logo quiz" />
        <Menu.Item key="1"><Link to="/">Iniciar quiz</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/">perguntas respondidas</Link></Menu.Item>
        <Button style={{ border: '0px'}} icon={<img style={{ width: '30px'}} src={pf} alt="Logo quiz" />}/>
      </Menu>
    </Header>
  );
}

export default HeaderStyle;
