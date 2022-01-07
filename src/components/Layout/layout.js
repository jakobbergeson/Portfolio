/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {

  return (
    <>
      <article>
        <div sx={{
          position: 'fixed',
          top: 22,
          left: 22,
          width: '50px',
          zIndex: 1000,
        }}>

          <StaticImage
            src="../../images/Icon.png"
            alt="Jakob Bergeson Development"
          />

        </div>
        <main>{children}</main>
      </article>
    </>
  );
};
export default Layout;
