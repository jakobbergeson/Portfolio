/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion, useAnimation } from 'framer-motion';

const Circle = ({
  sxCircleStyle,
  sxCircleChildStyle,
  variants = 'default',
  initial = 'hidden',
  animate,
  children,
  ...props
}) => {

  const defaultVariants = {
    hidden: {
      scale: 1,
      borderRadius: '50%',
      transition: {
        duration: 0.2
      }
    },
    visible: {
      boxShadow: '0px 0px 8px #48cae4',
      backgroundColor: '#48cae4',
      scale: 1.2,
      borderRadius: '20%',
      transition: {
        duration: 0.2,
        mass: .4,
        type: 'spring',
        stiffness: 120,
        ease: 'easeInOut'
      }
    }
  };

  const defaultChildVariants = {
    hidden: {
      fill: '#48cae4',
    },
    visible: {
      fill: '#f6f6f6',
    }
  };

  const whileTap = { scale: 0.95 };


  return (
    <motion.div
      sx={sxCircleStyle}
      animate={animate}
      initial={initial}
      whileTap={whileTap}
      variants={
        variants === 'default'
          ? defaultVariants
          : variants
      }
      {...props}
    >
      <motion.div
        sx={sxCircleChildStyle}
        variants={
          variants === 'default'
            ? defaultChildVariants
            : variants
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Circle;