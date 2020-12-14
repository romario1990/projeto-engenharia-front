import React from "react";
import HeaderStyleProfessor from "./HeaderStyleProfessor";
import { Row, Col, Typography, Input, Button, Checkbox, Select } from "antd";

const Title = Typography.Title;

const { Option } = Select;

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

function CadastrarPergunta() {
  return (
    <>
      <HeaderStyleProfessor />
      <div>
        <Row
          gutter={[0, 12]}
          style={{
            width: "550px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            marginTop: "50px",
          }}
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Title level={2}>Cadatrar pergunta</Title>
          </Col>
          <Row gutter={[0, 8]}>
            <Col span={5}>
              <span>Nível da questão:</span>
            </Col>
            <Col>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Selecionar"
                optionFilterProp="children"
                size="small"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Iniciante</Option>
                <Option value="lucy">Intermediário</Option>
                <Option value="tom">Avançado</Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={5}>
              <span>Enunciado:</span>
            </Col>
            <Col>
              <Input.TextArea
                style={{ width: "345px", height: "100px" }}
                size="small"
              />
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={5}>
              <span>Opção 1:</span>
            </Col>
            <Col>
              <Input style={{ width: "266px" }} size="small" />
            </Col>
            <Col style={{ marginLeft: 5 }}>
              <Checkbox />
              <span> Correta?</span>
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={5}>
              <span>Opção 2:</span>
            </Col>
            <Col>
              <Input style={{ width: "266px" }} size="small" />
            </Col>
            <Col style={{ marginLeft: 5 }}>
              <Checkbox />
              <span> Correta?</span>
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={5}>
              <span>Opção 3:</span>
            </Col>
            <Col>
              <Input style={{ width: "266px" }} size="small" />
            </Col>
            <Col style={{ marginLeft: 5 }}>
              <Checkbox />
              <span> Correta?</span>
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            <Col span={5}>
              <span>Opção 4:</span>
            </Col>
            <Col>
              <Input style={{ width: "266px" }} size="small" />
            </Col>
            <Col style={{ marginLeft: 5 }}>
              <Checkbox />
              <span> Correta?</span>
            </Col>
          </Row>
          <Col
            size="small"
            span={24}
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <Button>Cadastrar pergunta</Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CadastrarPergunta;
