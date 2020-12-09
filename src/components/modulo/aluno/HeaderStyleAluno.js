import React from "react";
import { Button, Layout, Menu, Dropdown } from "antd";
import logoQuiz from "../../../images/quiz.svg";
import pf from "../../../images/pf.svg";
import { Link } from "react-router-dom";
const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/homealuno">Ajuda</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">Sair</Link>
    </Menu.Item>
  </Menu>
);

function HeaderStyle() {
  return (
    <Header style={{ background: "white" }}>
      <Menu
        mode="horizontal"
        style={{ lineHeight: "64px", textAlign: "center" }}
      >
        <img style={{ width: "55px" }} src={logoQuiz} alt="Logo quiz" />
        <Menu.Item key="0">
          <Link to="/homealuno">Home</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/quiz">Iniciar quiz</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/relatorioquestoesaluno">Perguntas respondidas</Link>
        </Menu.Item>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button
            style={{ border: "0px" }}
            icon={<img style={{ width: "30px" }} src={pf} alt="Logo quiz" />}
          />
        </Dropdown>
      </Menu>
    </Header>
  );
}

export default HeaderStyle;
