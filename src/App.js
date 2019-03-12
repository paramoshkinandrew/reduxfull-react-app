import * as React from 'react';
import { Layout } from 'antd';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import { reducers } from './reducers';
import { NewTodoItemForm } from './NewTodoItemForm';
import { TodoItems } from './TodoItems';
import './App.css';

const { Content, Sider } = Layout;

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="layout" tagName="main">
          <Layout tagName="section">
            <Sider className="slider" width={300}>
              <NewTodoItemForm />
            </Sider>
            <Layout className="content-layout" tagName="section">
              <Content tagName="main">
                <TodoItems />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default App;
