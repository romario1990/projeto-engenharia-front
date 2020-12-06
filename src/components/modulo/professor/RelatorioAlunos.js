/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderStyleProfessor from './HeaderStyleProfessor';
import {Row, Col, Typography, Select, Button, Table } from 'antd';

const Title = Typography.Title;

const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
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

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

function RelatorioAlunos() {
  return (
    <>
      <HeaderStyleProfessor />
      <div>
        <Row  gutter={[0,12]} style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '50px' }}>
          <Col span={24} style={{ textAlign: 'center'}}>
            <Title level={2}>Relatório dos alunos</Title>
          </Col>
          <Title level={5}>Cadastro individual</Title>
          <Row>
            <Col span={9}>
              <span>Selecione o aluno:</span>
            </Col>
            <Col span={15}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
          <Col span={24} style={{ textAlign: 'center'}}>
            <Button>Exportar para PDF</Button>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default RelatorioAlunos;
