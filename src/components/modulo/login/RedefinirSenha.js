import React, { useCallback, useState } from 'react';
import HeaderStyle from './HeaderStyle';
import {Row, Col, Typography, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const Title = Typography.Title;

function RedefinirSenha() {
  const [login, setLogin] = useState("");

  const redefinirSenha = useCallback(()=>{
    console.log(login)
    console.log("chamar provider redefinir senha")  
  }, [login])


  return (
    <>
      <HeaderStyle />
      <div>
        <Row  gutter={[0,12]} style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '50px' }}>
          <Col span={24} style={{ textAlign: 'center'}}>
              <Title level={2}>Redefinir senha</Title>
          </Col>
          <Col span={24}>
            <span>Usuário/e-mail</span>
            <Input onChange={setLogin}/>
          </Col>
          <Col span={24} style={{ textAlign: 'center'}}>
            <Button onClick={redefinirSenha}>Enviar</Button>
          </Col>
          <Col span={24}>
            <Link to="/">Voltar</Link>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default RedefinirSenha;
