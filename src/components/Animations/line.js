/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

const Line = ({
  sxContainerStyle,
  sxChildStyle,
  containerVariant,
  childVariant,
  animate,
  children,
}) => {
  return (
    <motion.div
      sx={sxContainerStyle}
      initial='hidden'
      animate={animate}
      variants={containerVariant}
    >
      {children.map((child, index) => {
        return (
          <motion.div
            key={index}
            sx={sxChildStyle}
            variants={childVariant}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Line;