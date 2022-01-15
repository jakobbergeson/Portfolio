/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Title from '../Title/title';
import { layoutStyles } from '../../utils/';

const Layout = ({ children }) => {

  const svgVariants = {
    hidden: {
      fill: 'none',
    },
    visible: {
      fill: '#63cfe9',
      transition: {
        duration: 3,
        ease: 'easeInOut',
      }
    }
  };

  const svgBracerVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        delay: 3.5,
        duration: 1.1,
        ease: 'easeInOut'
      }
    }
  };

  const svgLetterVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        delay: 4.6,
        duration: .7,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <>
      <article>
        <Title title='Portfolio' />
        <motion.a
          sx={layoutStyles.icon}
        >
          <motion.svg
            version='1.0' xmlns='http://www.w3.org/2000/svg'
            sx={{
              width: ['55px', null, '60px', '75px'],
              height: ['55px', null, '60px', '75px']

            }}
            viewBox='0 0 55.000000 55.000000'
            preserveAspectRatio='xMidYMid meet'
            variants={svgVariants}
            initial='hidden'
            animate='visible'
          >
            <metadata>
              Created by potrace 1.16, written by Peter Selinger 2001-2019
            </metadata>
            <motion.g
              transform='translate(0.000000,55.000000) scale(0.005309,-0.005723)'
              stroke='#f6f6f6'
              strokeWidth='120'
            >
              <motion.path
                variants={svgBracerVariants}
                initial='hidden'
                animate='visible'
                d='M90 4810 l0 -4710 1225 0 1225 0 0 305 0 305 -845 0 -845 0 0 4100 0
4100 845 0 845 0 0 305 0 305 -1225 0 -1225 0 0 -4710z'/>
              <motion.path
                variants={svgBracerVariants}
                initial='hidden'
                animate='visible'
                d='M7820 9215 l0 -305 845 0 845 0 0 -4100 0 -4100 -845 0 -845 0 0
-305 0 -305 1225 0 1225 0 0 4710 0 4710 -1225 0 -1225 0 0 -305z'/>
              <motion.path
                variants={svgLetterVariants}
                initial='hidden'
                animate='visible'
                d='M4510 7830 l0 -310 710 0 710 0 0 -2057 c0 -2039 -4 -2289 -35 -2525
-65 -499 -305 -733 -832 -810 -143 -21 -661 -18 -797 5 -150 26 -518 118 -611
153 -13 5 -15 -37 -15 -364 l0 -370 115 -21 c351 -66 918 -119 1130 -106 365
21 644 86 903 210 473 227 783 614 892 1113 52 237 50 131 50 2858 l0 2534
-1110 0 -1110 0 0 -310z'/>
            </motion.g>
          </motion.svg>
        </motion.a>
        <main>{children}</main>
      </article>
    </>
  );
};
export default Layout;
