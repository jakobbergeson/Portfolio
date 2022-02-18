/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import { Col } from '../Components';
import { Box } from '../Animations';


const FooterHeading = () => {

  return (
    <Col
      sx={{
        alignItems: ['center', 'flex-start'],
        justifyContent: ['flex-start', 'center'],
        position: 'absolute',
        mt: '60px',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        pl: [0, 5]
      }}
    >
      <Box
        amount={0.25}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: ['center', 'flex-start'],
        }}
      >
        <motion.div
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            m: 0,
            minWidth: 0,
            lineHeight: 1.1,
            fontWeight: 600,
            textTransform: 'uppercase',
            color: 'primary',
            fontSize: ['44px', null, '70px', null, '104px'],
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1px',
            'WebkitTextStrokeColor': 'primary',
          }}
        >
          LET'S BUILD
        </motion.div>
      </Box>
    </Col>
  );
};
export default FooterHeading;
