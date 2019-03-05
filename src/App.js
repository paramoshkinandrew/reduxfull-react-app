import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout" style={{ height: "100vh" }} tagName="main">
        <Layout tagName="section">
          <Sider width={300} style={{ background: '#fff', padding: '24px' }}>
            Form
          </Sider>
          <Layout style={{ padding: '24px' }} tagName="section">
            <Content tagName="main">
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
