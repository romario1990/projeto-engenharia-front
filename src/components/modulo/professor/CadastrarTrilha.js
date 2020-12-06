import React from 'react';
import HeaderStyleProfessor from './HeaderStyleProfessor';
import {Row, Col, Typography, Select, Radio, Input, Button, Table } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const Title = Typography.Title;

const { Option } = Select;

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

function CadastrarTrilha() {
  return (
    <>
      <HeaderStyleProfessor />
      <div>
        <Row  gutter={[0,12]} style={{ width: '550px', marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '50px' }}>
          <Col span={24} style={{ textAlign: 'center'}}>
            <Title level={2}>Cadatrar trilha customizada</Title>
          </Col>
          {/* <Row gutter={[0,8]}>
            <Col span={10}>
              <span>Questões:</span>
            </Col>
            <Col>
              <Radio.Group size="small" onChange={()=> console.log("aqui")}>
                <Radio.Button value="questao1">Questão 1</Radio.Button>
                <Radio.Button value="questao2">Questão 2</Radio.Button>
                <Radio.Button value="questao3">Questão 3</Radio.Button>
              </Radio.Group>
            </Col>
          </Row> */}
          <Row gutter={[0,8]}>
            <Col span={10}>
              <span>Fases:</span>
            </Col>
            <Col>
              <Radio.Group size="small" onChange={()=> console.log("aqui")}>
                <Radio.Button value="fase1">Fase 1</Radio.Button>
                <Radio.Button value="fase2">Fase 2</Radio.Button>
                <Radio.Button value="fase3">Fase 3</Radio.Button>
                <Radio.Button value="fase3">Fase 4</Radio.Button>
                <Radio.Button value="fase3">Fase 5</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
          <Row gutter={[0,8]}>
            <Col span={10}>
              <span>Nome da trilha:</span>
            </Col>
            <Col>
              <Input style={{ width: '266px' }} size="small"/>
            </Col>
          </Row>
          <Row gutter={[0,8]}>
            <Col span={10}>
              <span>Nível da questão:</span>
            </Col>
            <Col>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                size="small"
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
          <Row gutter={[0,8]}>
            <Col span={10}>
              <span>Pesquisar pergunta:</span>
            </Col>
            <Col span={9}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                size="small"
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
            <Col>
              <PlusCircleOutlined onClick={()=> console.log("adicionar pergunta")} style={{ color: "#52c41a" }}/>
            </Col>
          </Row>
          <Row gutter={[0,8]}>
            <Col span={24}>
              <Table pagination={false} size="small" columns={columns} dataSource={data} />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: '10px', textAlign: 'center'}}>
              <Button size="small">Cadastrar trilha customizada</Button>
            </Col>
          </Row>
        </Row>
      </div>
    </>
    )
}

export default CadastrarTrilha;
