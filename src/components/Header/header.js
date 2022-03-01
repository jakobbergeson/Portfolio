/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import { Line } from '../Animations';
import { Icon } from '../Splash';
import { Nav } from '../Nav/';
import { MobileNav } from '../Nav/';
import Chevron from './chevron';
import { headerStyles } from '../../utils/headerStyles';

const Header = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.7,
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    }
  };

  const childVariant = {
    hidden: {
      x: '-9%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.4,
      }
    }
  };

  const wrapperVariant = {
    hidden: {
      clipPath: "circle(0% at 50% 50%)",
    },
    visible: (height = 800) => ({
      clipPath: `circle(${height * 2}px at 50% 50%)`,
      transition: {
        type: "spring",
        stiffness: 17,
        restDelta: 8
      }
    })
  };

  return (
    <motion.div
      sx={headerStyles.wrapper}
      variants={wrapperVariant}
      initial='hidden'
      animate='visible'
    >
      <div
        sx={headerStyles.container}
      >
        <Line
          sxContainerStyle={headerStyles.headingBox}
          sxChildStyle={headerStyles.heading2}
          sxChildStyleVar={headerStyles.heading1}
          containerVariant={containerVariant}
          childVariant={childVariant}
          animate={'visible'}
          children={['Full-Stack', 'Software', 'Developer']}
        />
        <Chevron />
        <Nav />
        <MobileNav />
      </div>
      <div
        sx={headerStyles.anglBox1}
      />
      <div
        sx={headerStyles.anglBox2}
      />
      <Icon />
    </motion.div>
  );
};

export default Header;