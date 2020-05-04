import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './Layout';
import Home from './components/home/Home'
import './App.scss';
import Menu from './components/menu/Menu';
function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    </Provider>
  );
}

export default App;
