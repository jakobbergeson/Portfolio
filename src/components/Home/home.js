/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { About } from "../About/";
import { Projects } from "../Projects/";
import { homeStyles } from "../../utils";

const Home = () => {
  return (
    <div
      sx={homeStyles.wrapper}
    >
      <About />
      <Projects />
    </div>
  );
};
export default Home;