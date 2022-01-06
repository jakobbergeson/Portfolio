/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Header from '../components/header';


const IndexPage = () => {
  return (
    <Layout>
      <Nav />
      <Header />
      <div
        sx={{ height: '200vh' }}
      >

      </div>
    </Layout>
  );
};

export default IndexPage;
