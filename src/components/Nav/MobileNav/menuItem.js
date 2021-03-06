/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { navStyles } from '../../../utils';

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      y: { stiffness: 800 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      type: 'spring',
      y: { stiffness: 800 }
    }
  }
};

export const MenuItem = ({
  toggle,
  to,
  text
}) => {

  return (
    <motion.li
      sx={navStyles.menuItem}
      variants={itemVariants}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <Link
        to={to}
      >
        {text}
      </Link>
    </motion.li>
  );
};