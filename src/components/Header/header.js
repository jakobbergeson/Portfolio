/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Nav from '../Nav/nav';
import { headerStyles } from '../../utils/headerStyles';

const Header = () => {
  return (
    <div
      sx={headerStyles.wrapper}
    >
      <div
        sx={headerStyles.container}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4, type: 'spring', }}
          sx={headerStyles.headingBox}
        >
          <div
            sx={headerStyles.heading1}
          >
            Full-
            <div
              sx={headerStyles.heading2}
            >
              Stack
            </div>
          </div>
          <div
            sx={headerStyles.heading2}
          >
            Software
          </div>
          <div
            sx={headerStyles.heading2}
          >
            Developer
          </div>
        </motion.div>
        <Nav />

      </div>
      <div
        sx={headerStyles.anglBox1}
      />
      <div
        sx={headerStyles.anglBox2}
      />
    </div>
  );
};

export default Header;