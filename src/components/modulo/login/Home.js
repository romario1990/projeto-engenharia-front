/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import HeaderStyle from './HeaderStyle';
import {Row, Col, Typography, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const Title = Typography.Title;

function Home() {
  const [telaLogin, setTelaLogin] = useState(false);

  const logar = useCallback(()=>{
    console.log("chamar provider logar")  
  }, [])

  const alterarTelaLogin = useCallback(()=>{
    setTelaLogin(!telaLogin)
  }, [telaLogin])

  return (
    <>
      <HeaderStyle />
      <div>
        <Row  gutter={[0,12]} style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '50px' }}>
          <Col span={24} style={{ textAlign: 'center'}}>
            {telaLogin ? (
              <Title level={2}>Criar Conta</Title>
            ):(
              <Title level={2}>Entrar no Modulo</Title>
            )}
          </Col>
          <Col span={24}>
            <span>Usuário/e-mail</span>
            <Input/>
          </Col>
          <Col span={24}>
            <span>password(6-8)</span>
            <Input.Password />
          </Col>
          <Col span={24} style={{ textAlign: 'center'}}>
            <Button onClick={logar}>Entrar</Button>
          </Col>
          {telaLogin ? (
            <>
              <Col span={24}>
                <span>Possui conta?</span><a onClick={alterarTelaLogin}> Entrar</a>
              </Col>
            </>
          ):(
            <>
              <Col span={24}>
                <span>Não possui conta?</span><a onClick={alterarTelaLogin}> Criar</a>
              <Col span={24}>
                <span>Esqueceu a senha?</span><Link to="/redefinirsenha"> Click aqui</Link>
              </Col>
              </Col>
            </>
          )}
        </Row>
      </div>
    </>
    )
}

export default Home;
