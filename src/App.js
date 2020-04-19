import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './components/home/Home'
import './App.scss';
function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
    </Layout>
  );
}

export default App;
