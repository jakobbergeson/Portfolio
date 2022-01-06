/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { headerStyles } from "../../utils/headerStyles";

const Header = () => {
  return (
    <div
      sx={headerStyles.wrapper}
    >
      <div
        sx={headerStyles.container}
      >
        <div
          sx={headerStyles.headingBox}
        >
          <div
            sx={headerStyles.heading1}
          >
            Full-
            <div
              sx={headerStyles.heading2}
            >
              Stack
            </div>
          </div>
          <div
            sx={headerStyles.heading2}
          >
            Software
          </div>
          <div
            sx={headerStyles.heading2}
          >
            Developer
          </div>

        </div>

      </div>
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