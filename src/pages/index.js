/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import Layout from '../components/Layout/layout';
import Nav from '../components/Nav/nav';
import Header from '../components/Header/header';
import Home from '../components/Home/home';


const IndexPage = () => {
  return (
    <Layout>
      <Nav />
      <Header />
      <div
        sx={{
          boxSizing: 'border-box',
          m: 0,
          minWidth: 0,
        }}
      >
        <Home />

      </div>
    </Layout>
  );
};

export default IndexPage;
