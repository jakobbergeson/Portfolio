/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";

const Layout = ({ children }) => {

  return (
    <>
      <article>
        <main>{children}</main>
      </article>
    </>
  );
};
export default Layout;
