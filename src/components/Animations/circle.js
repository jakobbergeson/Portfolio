/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import { navStyles } from '../../utils';


export const Circle = ({
  duration = 0.3,
  delay,
  hiddenY = '-105%',
  visibleY = 0,
  variants,
  animate,
  children,
}) => {

  return (
    <motion.li
      sx={navStyles.container.list.circle}
      initial='hidden'
      animate={animate}
      variants={variants ||
      {
        hidden: {
          y: hiddenY,
          opacity: 0
        },
        visible: {
          y: visibleY,
          opacity: 1,
          transition: {
            duration,
            delay,
          },
        }
      }
      }
    >
      {children}
    </motion.li>
  );
};