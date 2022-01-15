/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

export const NavList = ({
  sxContainerStyle,
  sxChildStyle,
  containerVariant,
  childVariant,
  animate,
  whileHover,
  whileTap,
  children,
}) => {

  return (
    <motion.ul
      sx={sxContainerStyle}
      initial='hidden'
      animate={animate}
      variants={containerVariant}
    >
      {
        children.map((child, i) => {
          return (
            <motion.li
              key={i}
              sx={sxChildStyle}
              variants={childVariant}
              whileHover={whileHover}
              whileTap={whileTap}
            >
              <a>{child}</a>
            </motion.li>
          );
        })
      }
    </motion.ul>
  );
};
export default NavList;