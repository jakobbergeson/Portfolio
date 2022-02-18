/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

const Line = ({
  sxContainerStyle,
  sxChildStyle,
  sxChildStyleVar,
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
      {children.map((child, i) => {
        return (
          <motion.div
            key={i}
            sx={i % 2 === 0 ? sxChildStyle : sxChildStyleVar}
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