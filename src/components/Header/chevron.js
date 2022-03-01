/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import ChevDown from '../../images/chevron-down-solid.svg';

const Chevron = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      transition: {
        delay: 6,
        when: 'beforeChildren',
        mass: 0.2,
      },
    }
  };

  const childVariant = {
    hidden: {
      y: 0,
      opacity: 1
    },
    visible: {
      y: '30%',
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 1.3,
        stiffness: 120,
        duration: 1.7,
        yoyo: Infinity
      }
    }
  };

  return (
    <motion.div
      variants={containerVariant}
      initial='hidden'
      animate='visible'
      sx={{
        display: ['flex', 'flex', 'none'],
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: -6,
        zIndex: -1,
      }}
    >
      <motion.img
        variants={childVariant}
        sx={{
          width: '4rem',
        }}
        src={ChevDown}
      />

    </motion.div>
  );
};
export default Chevron;