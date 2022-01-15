import { space } from "./space";
import { breakpoints } from "./breakpoints";
import { fonts } from "./fonts";
import { fontSizes } from "./fontSizes";
import { fontWeights } from "./fontWeights";
import { lineHeights } from "./lineHeights";
import { colors } from "./colors";
import { flex } from "./flex";

const theme = {
  space,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  flex,

  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 1,
      bg: 'primary',
      letterSpacing: '.1em',
      boxSizing: 'border-box',
      minWidth: 0,
      ul: {
        listStyle: 'none',
      },
      a: {
        display: 'block',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
      },
    },
  },
  h1: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 5
  },
  h2: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 4
  },
  h3: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 3
  },
  h4: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 2
  },
  h5: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 1
  },
  h6: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontSize: 0
  },
  p: {
    color: 'text',
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body'
  },
};

export default theme;
