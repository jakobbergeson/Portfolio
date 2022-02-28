/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from "framer-motion";
import { useIsMedium } from '../../hooks/utils/mediaQuery';

const Instruction = () => {

  const isMedium = useIsMedium();
  console.log("IS MEDIUM", isMedium);
  const insVariant =
    isMedium ?
      {
        hidden: {
          y: -10,
          x: 100,
          opacity: 0
        },
        visible: {
          y: -10,
          x: 100,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.4,
          },
        }
      } :
      {
        hidden: {
          y: 50,
          x: '-50%',
          opacity: 0
        },
        visible: {
          y: 0,
          x: '-50%',
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.4,
          },
        }
      };

  return (
    <motion.div
      sx={{
        lineHeight: 1,
        width: 'fit-content',
        letterSpacing: 0,
        fontWeight: 600,
        textTransform: 'uppercase',
        fontSize: ['14px', '16px'],
        color: 'white',
        p: '16px',
        bg: 'black',
        position: 'absolute',
        top: ['-10px', null, null, null, null, 0],
        left: ['50%', null, null, null, null, 0],
        zIndex: 1000
      }}
      variants={insVariant}
      initial='hidden'
      animate='visible'
    >
      Slide circle to copy email
    </motion.div>
  );
};
export default Instruction;