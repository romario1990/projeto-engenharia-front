import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import SiderStyle from './SiderStyle';
import HeaderStyle from './HeaderStyle';


const { Content } = Layout;


function Home() {
  return (
    <Layout>
    <Layout>
        <HeaderStyle />
    </Layout>
    <Layout>
      <SiderStyle/>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Versão</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content 231231231231213231
        </Content>
      </Layout>
    </Layout>
    </Layout>
  );
}

export default Home;
