/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { navStyles } from '../../utils';


const listVariants = {
  open: {
    display: 'block',
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    display: 'none',
    transition: {
      delay: 1,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

export const MenuList = ({
  toggle
}) => (
  <motion.ul
    sx={navStyles.menuList}
    variants={listVariants}>
    {itemIds.map(i => (
      <MenuItem
        toggle={toggle}
        i={i}
        key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3];