/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from "react";
import { motion } from "framer-motion";
import { navStyles } from '../../utils';

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 100 }
    }
  }
};

export const MenuItem = ({ i, toggle }) => {

  return (
    <motion.li
      sx={navStyles.menuItem}
      variants={itemVariants}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <div

      >
        MenuItem
      </div>
    </motion.li>
  );
};