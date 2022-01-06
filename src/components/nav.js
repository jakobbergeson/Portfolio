/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { navStyles } from "../utils";

const Nav = () => {

  const [bg, setBg] = useState(false);

  const changeBg = () => {
    window.scrollY >= 60 ?
      setBg(true) :
      setBg(false);
  };

  window.addEventListener('scroll', changeBg);

  return (
    <nav sx={bg ? navStyles.wrapper.scroll : navStyles.wrapper}>
      <div sx={navStyles.container}>
        <div sx={navStyles.container.icon}>
          {bg ?
            <StaticImage
              src="../images/Icon_Blue.png"
              alt="Jakob Bergeson Development"
            />
            :
            <StaticImage
              src="../images/Icon.png"
              alt="Jakob Bergeson Development"
            />
          }
        </div>
        <ul sx={navStyles.container.list} >
          <li sx={bg ? navStyles.container.list.scroll : navStyles.container.list.listItem} >
            <a>About</a>
          </li>
          <li sx={bg ? navStyles.container.list.scroll : navStyles.container.list.listItem} >
            <a>Projects</a>
          </li>
          <li sx={bg ? navStyles.container.list.scroll : navStyles.container.list.listItem} >
            <a>Stacks</a>
          </li>
          <li sx={bg ? navStyles.container.list.scroll : navStyles.container.list.listItem} >
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;