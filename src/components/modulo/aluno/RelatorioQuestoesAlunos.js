import React from "react";
import HeaderStyleAluno from "./HeaderStyleAluno";
import { Row, Col, Typography, Select, Button, Table } from "antd";

const Title = Typography.Title;

const { Option } = Select;

const columns = [
  {
    title: "Questões",
    dataIndex: "question",
    key: "question",
    render: (text) => text,
  },
  {
    title: "Escolhidas",
    dataIndex: "choose",
    key: "choose",
  },
  {
    title: "Corretas",
    dataIndex: "correct",
    key: "correct",
  },
];

const data = [
  {
    key: "1",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?",
    choose: "c) typesetting",
    correct: "b) simply dummy",
  },
  {
    key: "2",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?",
    choose: "a) typesetting",
    correct: "b) simply dummy",
  },
  {
    key: "3",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?",
    choose: "b) typesetting",
    correct: "c) simply dummy",
  },
];

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

function RelatorioQuestoesAlunos() {
  return (
    <>
      <HeaderStyleAluno />
      <div>
        <Row
          gutter={[0, 12]}
          style={{
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            marginTop: "50px",
          }}
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Title level={2}>Questões respondidas</Title>
          </Col>

          <Col>
            <Table size="small" columns={columns} dataSource={data} />
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button>Exportar para PDF</Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RelatorioQuestoesAlunos;
