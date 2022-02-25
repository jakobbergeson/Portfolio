/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import Title from '../Title/title';
import { Footer } from "../Footer";

const Layout = ({ children }) => {

  return (
    <>
      <article>
        <Title title='Portfolio' />
        <main>{children}</main>
        <Footer />
      </article>
    </>
  );
};
export default Layout;
