import React from "react";
import HeaderStyleProfessor from "./HeaderStyleProfessor";
import { Row, Col, Typography, Input, Button } from "antd";

const Title = Typography.Title;

function CadastrarAlunos() {
  return (
    <>
      <HeaderStyleProfessor />
      <div>
        <Row
          gutter={[0, 12]}
          style={{
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            marginTop: "50px",
          }}
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Title level={2}>Cadastrar alunos</Title>
          </Col>
          <Title level={5}>Cadastro individual</Title>
          <Col span={24}>
            <span>Matricula</span>
            <Input />
          </Col>
          <Col span={24}>
            <span>Nome</span>
            <Input />
          </Col>
          <Col span={24}>
            <span>E-mail</span>
            <Input />
          </Col>
          <Col span={24}>
            <span>CPF</span>
            <Input />
          </Col>
          <Col span={24}>
            <Title level={5}>Cadastro por arquivo</Title>
            <Title level={5}>
              Selecione um arquivo XLS ou CSV com (Código de matrícula, nome,
              email e CPF)
            </Title>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button>Upload de Arquivo</Button>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button>Cadastrar</Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CadastrarAlunos;
