/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { Col } from '../Components';
import { Box } from '../Animations';
import FooterHeading from './footerHeading';
import DragButton from './dragButton';

const Footer = () => {

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
        bg: 'transparent',
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
      <DragButton />
    </Col>
  );
};

export default Footer;