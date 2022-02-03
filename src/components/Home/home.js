/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { About } from "../About/";
import { Projects } from "../Projects/";
import { Stacks } from "../Stacks/";
import { homeStyles } from "../../utils";

const Home = ({ content }) => {
  return (
    <div
      sx={homeStyles.wrapper}
    >
      <About
        content={content.about}

      />
      <Projects
        content={content.projects}
      />
      <Stacks
        content={content.stacks}
      />
    </div>
  );
};
export default Home;