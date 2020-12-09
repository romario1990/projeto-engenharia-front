import React from "react";
import HeaderStyleAluno from "./HeaderStyleAluno";
import { Row, Col, Typography, Table } from "antd";

const Title = Typography.Title;

const columns = [
  {
    title: "Meu desempenho",
    dataIndex: "performance",
    key: "performance",
    render: (text) => text,
  },
  {
    title: "Minha colocação",
    dataIndex: "position",
    key: "position",
  },
];

const data = [
  {
    key: "1",
    performance:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    position: "10ª",
  },
];

function HomeAluno() {
  return (
    <>
      <HeaderStyleAluno />
      <div style={{ overflowY: "scroll" }}>
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
          <Col span={30} offset={4}>
            <Col span={24}>
              <Title level={2}>Modulo Aluno</Title>
            </Col>
            <Row gutter={[8, 8]}>
              <Col span={30}>
                <Table size="small" columns={columns} dataSource={data} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomeAluno;
