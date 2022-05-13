import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { Dropdown } from './shared/Dropdown';

function AppComponent() {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
        <div style={{ padding: 20 }}>          
          <br />
          <Dropdown
          onClose={() => console.log('test dd closed')}
          onOpen={() => console.log('test dd opened')}
          isOpen={true}
          button={<button>Test</button>}>
            <ul>
              <li>1</li>
            </ul>
          </Dropdown>
        </div>
      </Content>
    </Layout>
  );
};

export const App = hot(AppComponent);