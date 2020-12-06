import React from 'react';
import HeaderStyleAluno from './HeaderStyleAluno';
import {Row, Col, Typography, Select, Button } from 'antd';

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

function Quiz() {
  return (
    <>
      <HeaderStyleAluno />
      <div>
        <Row  gutter={[0,12]} style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '50px' }}>
          <Col span={24} style={{ textAlign: 'center'}}>
            <Title level={2}>Iniciar QUIZ</Title>
          </Col>
          <Row>
            <Col span={9}>
              <span>Selecione uma trilha:</span>
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
          <Col span={24} style={{ textAlign: 'center'}}>
            <Button>Iniciar</Button>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default Quiz;
