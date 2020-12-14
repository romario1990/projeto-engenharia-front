import React from "react";
import HeaderStyleProfessor from "./HeaderStyleProfessor";
import { Row, Col, Typography, Select, Button, Table } from "antd";

const Title = Typography.Title;

const { Option } = Select;

const columns = [
  {
    title: "Relatório do aluno Jack",
    dataIndex: "report",
    key: "report",
    render: (text) => text,
  },
];

const data = [
  {
    key: "1",
    report:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    key: "2",
    report:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    key: "3",
    report:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    key: "4",
    report:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
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

function RelatorioAlunos() {
  return (
    <>
      <HeaderStyleProfessor />
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
            <Title level={2}>Relatório dos alunos</Title>
          </Col>
          {/* <Title level={5}>Cadastro individual</Title> */}
          <Row>
            <Col span={9}>
              <span>Selecione o aluno:</span>
            </Col>
            <Col span={15}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Selecionar"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
          </Row>
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

export default RelatorioAlunos;
