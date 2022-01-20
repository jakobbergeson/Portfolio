/** @jsx jsx */
import { jsx, Avatar } from 'theme-ui';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Box } from '../Animations/';
import LeftBrace from '../../images/Left_Bracer_sm.svg';
import RightBrace from '../../images/Right_Bracer_sm.svg';
import { headingStyles } from '../../utils';

const Heading = ({
  initial = 'hidden',
  viewport = 'default',
  whileInView = 'visible',
  children,
  styles
}) => {

  const leftBraceVariant = {
    hidden: {
      x: '-105%',
      y: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: -10,
      opacity: 1,
      transition: {
        delay: .3,
        type: "spring",
        bounce: 0.6,
        duration: 0.3
      }
    }
  };

  const rightBraceVariant = {
    hidden: {
      x: '105%',
      y: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      y: -10,
      opacity: 1,
      transition: {
        delay: .3,
        type: "spring",
        bounce: 0.6,
        duration: 0.3
      }
    }
  };

  const defaultViewport = {
    once: true,
    amount: 1
  };

  return (
    <motion.div
      sx={{
        maxWidth: 'max-content',
        display: 'flex',
      }}
    >
      <motion.img
        src={LeftBrace}
        sx={headingStyles.brace}
        variants={leftBraceVariant}
        initial={initial}
        whileInView={whileInView}
        viewport={
          viewport === 'default'
            ? defaultViewport
            : viewport
        }
      />
      <Box
        sxContainerStyle={headingStyles.heading}
        sxChildStyle={headingStyles.header}
      >
        {children}
      </Box>
      <motion.img
        src={RightBrace}
        sx={headingStyles.brace}
        variants={rightBraceVariant}
        initial={initial}
        whileInView={whileInView}
        viewport={
          viewport === 'default'
            ? defaultViewport
            : viewport
        }
      />
    </motion.div>
  );
};
export default Heading;