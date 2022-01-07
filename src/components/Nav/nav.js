/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { navStyles } from "../../utils";

const Nav = () => {

  return (
    <nav sx={navStyles.wrapper}>
      <div sx={navStyles.container}>
        <ul sx={navStyles.container.list} >
          <li sx={navStyles.container.list.circle} >
            <a>About</a>
          </li>
          <li sx={navStyles.container.list.circle} >
            <a>Work</a>
          </li>
          <li sx={navStyles.container.list.circle} >
            <a>Stacks</a>
          </li>
          <li sx={navStyles.container.list.circle} >
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;