import React from "react";
import { Button, Layout, Menu, Dropdown } from "antd";
import logoQuiz from "../../../images/quiz.svg";
import pf from "../../../images/pf.svg";
import { Link } from "react-router-dom";
const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/homeprofessor">Ajuda</Link>
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
          <Link to="/homeprofessor">Home</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/cadastraralunos">Cadastrar alunos</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/relatorioalunos">Relatório desempenho</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/cadastrartrilha">Cadastrar trilha</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/cadastrarpergunta">Cadastro de questões</Link>
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
