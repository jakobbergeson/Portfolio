/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

const Box = ({
  sxContainerStyle,
  sxChildStyle,
  childVariant = 'default',
  initial = 'hidden',
  whileInView = 'visible',
  viewport = 'default',
  children,
}) => {

  const defaultVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.4
      }
    }
  };

  const defaultViewport = {
    once: true,
    amount: .6
  };

  return (
    <motion.div
      sx={sxContainerStyle}
      initial={initial}
      whileInView={whileInView}
      viewport={
        viewport === 'default'
          ? defaultViewport
          : viewport
      }
    >
      <motion.div
        sx={sxChildStyle}
        variants={
          childVariant === 'default'
            ? defaultVariants
            : childVariant
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Box;