/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { About } from "../About/";
import { homeStyles } from "../../utils";

const Home = () => {
  return (
    <div
      sx={homeStyles.wrapper}
    >
      <About />

    </div>
  );
};
export default Home;