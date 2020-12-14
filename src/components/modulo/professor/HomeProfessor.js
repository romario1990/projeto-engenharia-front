import React from "react";
import HeaderStyleProfessor from "./HeaderStyleProfessor";
import { Row, Col, Typography, Table } from "antd";

const Title = Typography.Title;

const columns = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    render: (text) => text,
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },
];

const data = [
  {
    key: "1",
    name: "Aluno 1",
    email: "aluno1@gmail.com",
  },
  {
    key: "2",
    name: "Aluno 2",
    email: "aluno2@gmail.com",
  },
  {
    key: "3",
    name: "Aluno 3",
    email: "aluno3@gmail.com",
  },
];

const columns2 = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    render: (text) => text,
  },
  {
    title: "Tipo",
    dataIndex: "type",
    key: "type",
  },
];

const data2 = [
  {
    key: "1",
    name: "Trilha 1",
    type: "Trilha customizada",
  },
  {
    key: "2",
    name: "Trilha 2",
    type: "Trilha randômica",
  },
  {
    key: "3",
    name: "Trilha 3",
    type: "Trilha customizada",
  },
];

const columns3 = [
  {
    title: "Questão",
    dataIndex: "question",
    key: "question",
    render: (text) => text,
  },
  {
    title: "Resposta",
    dataIndex: "answer",
    key: "answer",
  },
];

const data3 = [
  {
    key: "1",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text?",
    answer: "b)",
  },
  {
    key: "2",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text?",
    answer: "d)",
  },
  {
    key: "3",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text?",
    answer: "c)",
  },
];

function HomeProfessor() {
  return (
    <>
      <HeaderStyleProfessor />
      <div style={{ overflowY: "scroll" }}>
        <Row gutter={[0, 12]} style={{ marginTop: "50px" }}>
          <Col span={15} offset={4}>
            <Col span={24}>
              <Title level={2}>Modulo Professor</Title>
            </Col>
            <Row gutter={[8, 8]}>
              <Col span={14}>
                <Title level={5}>Alunos cadastrados</Title>
                <Table size="small" columns={columns} dataSource={data} />
              </Col>
              <Col span={10}>
                <Title level={5}>Thilhas cadastradas</Title>
                <Table size="small" columns={columns2} dataSource={data2} />
              </Col>
            </Row>
            <Col span={24}>
              <Title level={5}>Questões cadastradas</Title>
              <Table size="small" columns={columns3} dataSource={data3} />
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomeProfessor;
