import React, { useCallback} from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
import SiderStyle from './SiderStyle';
import HeaderStyle from './HeaderStyle';
import {AlunosProvider} from '../provider'

const { Content } = Layout;

function Home() {

  const requi = useCallback(async ()=>{
    const responnse = await AlunosProvider.getAlunos()
    console.log("🚀 ~ file: Home.js ~ line 12 ~ requi ~ responnse", responnse)
  }, [])

  return (
    <Layout>
    <Layout>
        <HeaderStyle />
    </Layout>
    <Layout>
      <SiderStyle/>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
        <Button onClick={requi}>Buscar Alunos</Button>
        </Content>
      </Layout>
    </Layout>
    </Layout>
  );
}

export default Home;
