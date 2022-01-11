/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

export const Circle = ({
  sxContainerStyle,
  sxChildStyle,
  containerVariant,
  childVariant,
  animate,
  whileHover,
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
        children.map((child, index) => {
          return (
            <motion.li
              key={index}
              sx={sxChildStyle}
              variants={childVariant}
              whileHover={whileHover}
            >
              <a>{child}</a>
            </motion.li>
          );
        })
      }
    </motion.ul>
  );
};
export default Circle;