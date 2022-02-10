/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Col } from '../Components';
import { Box } from '../Animations';
import FooterHeading from './footerHeading';
import DragButton from './dragButton';

const Footer = () => {

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #f6f6f6 0%, #f6f6f6 100%)",
    "linear-gradient(180deg, #48cae4 0%, #48cae4 100%)",
    "linear-gradient(180deg,  #f6f6f6 0%, #f6f6f6 100%)"
  ]);
  const color = useTransform(x, xInput, ["#48cae4", "#000000", "#48cae4"]);
  const opacity = useTransform(x, [10, 100], [0, 1]);
  const drag = useTransform(x, [-100, 0, 100], [-50, 0, 50]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const tickPath2 = useTransform(x, [-10, -100], [0, 1]);

  const insVariant = {
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
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ['center', 'start'],
        p: ['16px', '80px'],
        height: ['350px', '440px', null, '506px', '600px'],
      }}
      style={{ background }}
    >
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
          top: '-10px',
          left: '50%',
          zIndex: 1000
        }}
        variants={insVariant}
        initial='hidden'
        animate='visible'
      >
        Slide circle to copy email
      </motion.div>
      {/* <FooterHeading /> */}
      <Box
        amount={0.25}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: ['center', 'flex-start']
        }}
      >
        <motion.div
          // variant='text.h2'
          sx={{
            ...textSx,
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1px',
            'WebkitTextStrokeColor': 'primary',
          }}
        >
          LET'S BUILD
        </motion.div>
      </Box>
      <DragButton
        x={x}
        background={background}
        color={color}
        opacity={opacity}
        drag={drag}
        tickPath={tickPath}
        tickPath2={tickPath2}
      />
      <Col>
        <Text
          sx={{
            lineHeight: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            color: 'primary',
            fontSize: '16px',
            mb: ' 4px',
          }}
        >
          jakobbergeson.dev@gmail.com
        </Text>
        <motion.div
          sx={{
            bg: 'primary',
            height: '3px',
            width: '100%',
          }}
        />
      </Col>
    </motion.div>
  );
};

export default Footer;

const textSx = {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  m: 0,
  mb: [3],
  minWidth: 0,
  lineHeight: 1.1,
  fontWeight: 600,
  textTransform: 'uppercase',
  color: 'primary',
  fontSize: ['44px', null, '70px', null, '104px'],
};