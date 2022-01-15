/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion, useAnimation } from 'framer-motion';

const Circle = ({
  sxCircleStyle,
  sxCircleChildStyle,
  variants = 'default',
  animate,
  children,
  ...props
}) => {

  const controls = useAnimation();

  console.log("CONTROLS", animate);

  const defaultVariants = {
    hidden: {
      scale: 1,
      borderRadius: '50%',
      transition: { duration: 0.2 }
    },
    visible: {
      boxShadow: '0px 0px 8px #ffffff',
      scale: 1.2,
      borderRadius: '20%',
      transition: { duration: 0.2 }
    }
  };

  // controls.start({
  //   hidden: {
  //     boxShadow: 'none',
  //     transition: { duration: 0.3 }
  //   },
  //   visible: {
  //     boxShadow: '0px 0px 8px #ffffff',
  //     scale: 1.2,
  //     borderRadius: '20%',
  //     transition: { duration: 0.3 }
  //   }

  // });

  const whileTap = { scale: 0.95 };


  return (
    <motion.div
      sx={sxCircleStyle}
      onHoverStart={() => controls.start('visible')}
      onHoverEnd={() => controls.start('hidden')}
      animate={controls}
      initial={'hidden'}
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
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Circle;