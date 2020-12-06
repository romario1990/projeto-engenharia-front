import React from 'react';
import HeaderStyleAluno from './HeaderStyleAluno';
import {Row, Col, Typography, Table } from 'antd';

const Title = Typography.Title;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => text,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function HomeAluno() {

  return (
    <>
      <HeaderStyleAluno />
      <div style={{ overflowY: 'scroll' }}>
        <Row  gutter={[0,12]} style={{ marginTop: '50px' }}>
          <Col span={15} offset={4}>
            <Col span={24}>
              <Title level={2}>Modulo Aluno</Title>
            </Col>
            <Row gutter={[8,8]}>
              <Col span={14}>
                <Title level={5}>Alunos cadastrados</Title>
                <Table size="small" columns={columns} dataSource={data} />
              </Col>
              <Col span={10}>
                <Title level={5}>Thilhas cadastradas</Title>
                <Table size="small" columns={columns} dataSource={data} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default HomeAluno;
