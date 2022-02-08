/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { useMotionValue, useTransform } from "framer-motion";
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
    <Col
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: ['350px', '440px', null, '506px', '600px'],
      }}
    >
      <Box
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
          left: ['50%', '16px']
        }}
        childVariant={insVariant}
      >
        Slide circle to copy email
      </Box>
      <FooterHeading />
      <DragButton
        x={x}
        background={background}
        color={color}
        tickPath={tickPath}
        tickPath2={tickPath2}
      />
    </Col>
  );
};

export default Footer;