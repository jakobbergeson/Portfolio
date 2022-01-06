/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { headerStyles } from "../utils/headerStyles";

const Header = () => {
  return (
    <div
      sx={headerStyles.wrapper}
    >
      <div
        sx={headerStyles.anglBox1}
      />
      <div
        sx={headerStyles.anglBox2}
      />
    </div>
  );
};

export default Header;