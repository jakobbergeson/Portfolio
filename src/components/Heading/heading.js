/** @jsx jsx */
import { jsx, Avatar } from 'theme-ui';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Box } from '../Animations/';
import LeftBrace from '../../images/Left_Bracer.svg';
import RightBrace from '../../images/Right_Bracer_sm.svg';
import { headingStyles } from '../../utils';

const Heading = ({
  initial = 'hidden',
  viewport = 'default',
  whileInView = 'visible',
  children
}) => {

  const leftBraceVariant = {
    hidden: {
      x: '-33%',
      y: -10,
      opacity: 0,
    },
    visible: {
      x: 50,
      y: -10,
      opacity: 1,
      transition: {
        delay: .3,
        type: "spring",
        bounce: 0.3,
        duration: 0.5
      }
    }
  };

  const rightBraceVariant = {
    hidden: {
      x: '33%',
      y: -10,
      opacity: 0
    },
    visible: {
      x: -50,
      y: -10,
      opacity: 1,
      transition: {
        delay: .3,
        type: "spring",
        bounce: 0.3,
        duration: 0.5
      }
    }
  };

  const defaultViewport = {
    once: true,
    amount: .6
  };

  return (
    <motion.div
      sx={{
        maxWidth: 'max-content',
        display: 'flex',
        justifyContent: 'center'
      }}
    // initial={initial}
    // whileInView={whileInView}
    // viewport={
    //   viewport === 'default'
    //     ? defaultViewport
    //     : viewport
    // }
    >
      <motion.img
        src={LeftBrace}
        sx={{
          height: ['55px', '75px'],
          width: '75px',
          borderRadius: 0,
        }}
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
        sx={{
          height: ['55px', '75px'],
          width: '75px',
          borderRadius: 0,
        }}
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