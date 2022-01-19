/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Box } from '../Animations';
import JakobAvatar from '../../images/Avatar.png';
import Geometry from '../../images/geometry_clear.png';


const ParallaxAvatar = () => {

  const elementTop = 620;

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(
    scrollY,
    [elementTop, elementTop + 20], [0, -1],
    { clamp: false }
  );
  const y2 = useTransform(
    scrollY,
    [elementTop, elementTop + 10], [0, -1],
    { clamp: false }
  );
  const y3 = useTransform(
    scrollY,
    [elementTop, elementTop + 5], [0, -1],
    { clamp: false }
  );
  const y4 = useTransform(
    scrollY,
    [elementTop, elementTop + 15], [0, -1],
    { clamp: false }
  );

  const childVariant1 = {
    hidden: {
      x: '-105%',
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const childVariant2 = {
    hidden: {
      x: '105%',
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div
      sx={{
        position: 'relative',
        minWidth: '240px',
        minHeight: '240px',
        maxWidth: '240px',
        maxHeight: '240px',
        width: '240px',
        height: '240px',
        mb: [6, null, null, 0],
      }}
    >
      <motion.div
        sx={{
          width: 'inherit',
          height: 'inherit',
          borderRadius: '20%',
          bg: 'blue',
        }}
        style={{ y: y1 }}
      />
      <motion.div
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          right: 0,
        }}
        style={{ y: y3 }}
      >
        <Image
          src={Geometry}
          sx={{
            width: '100%',
            objectFit: 'contain',
            height: 'auto',
          }}
        />
      </motion.div>

      <motion.div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          top: 0,
          bottom: 0,
        }}
        style={{ y: y2 }}
      >
        <Box
          childVariant={childVariant1}
          sxContainerStyle={{
            position: 'absolute',
            top: '100px',
            left: '-50px',
            width: '300px',
            height: '2px',
            bg: 'transparent',
            overflow: 'hidden',
            transform: 'rotate(-30deg)',
          }}
          sxChildStyle={{
            position: 'absolute',
            bg: 'black',
            width: '100%',
            height: '100%',
          }}
          delay={'3'}
        />
        <Box
          childVariant={childVariant2}
          sxContainerStyle={{
            position: 'absolute',
            top: '108px',
            left: '-20px',
            width: '300px',
            height: '2px',
            bg: 'transparent',
            overflow: 'hidden',
            transform: 'rotate(-30deg)',
          }}
          sxChildStyle={{
            position: 'absolute',
            bg: 'black',
            width: '100%',
            height: '100%',
          }}
        />
        <Box
          childVariant={childVariant1}
          sxContainerStyle={{
            position: 'absolute',
            top: '140px',
            left: '-20px',
            width: '280px',
            height: '2px',
            bg: 'transparent',
            overflow: 'hidden',
            transform: 'rotate(-30deg)',
          }}
          sxChildStyle={{
            position: 'absolute',
            bg: 'black',
            width: '100%',
            height: '100%',
          }}
        />
      </motion.div>
      <motion.div
        sx={{
          position: 'absolute',
          top: '15px',
          left: '25px',
        }}
        style={{ y: y4 }}
      >
        <div
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '30px',
            bg: 'transparent',
            background: ' linear-gradient(to bottom, rgba(246,246,246,0), rgba(246,246,246,1))'
          }}
        />
        <Image
          src={JakobAvatar}
          alt='Jakob Bergeson Avatar'
          sx={{
            height: ['240px', null, null, '250px'],
            objectFit: 'contain',
            userSelect: 'none',
          }}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxAvatar;