import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './components/home/Home'
import './App.scss';
import Menu from './components/menu/Menu';
function App() {
  return (
    <>
      <Menu />
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    </>
  );
}

export default App;
