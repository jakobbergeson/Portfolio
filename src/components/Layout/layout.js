/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import Title from "../Title/title";
import { layoutStyles } from '../../utils/';

const Layout = ({ children }) => {

  return (
    <>
      <article>
        <Title title='Portfolio' />
        <a
          sx={layoutStyles.icon}
        >
          [J]
        </a>
        <main>{children}</main>
      </article>
    </>
  );
};
export default Layout;
