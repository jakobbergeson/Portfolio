/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { layoutStyles } from '../../utils/';

const Layout = ({ children }) => {

  return (
    <>
      <article>
        <a
          sx={layoutStyles.icon}
          href='#header'
        >
          [J]
        </a>
        <main>{children}</main>
      </article>
    </>
  );
};
export default Layout;
