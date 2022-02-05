/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { Col } from '../Components';
import { Box } from '../Animations';


const FooterHeading = () => {

  return (
    <Col
      sx={boxSx}
    >
      <Box
        amount={0.25}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Text
          variant='text.h2'
          sx={{
            ...textSx,
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1px',
            'WebkitTextStrokeColor': 'primary',
          }}
        >
          GET IN
        </Text>
        <Text
          variant='text.h2'
          sx={{ ...textSx, mb: [3] }}
        >
          TOUCH
        </Text>
      </Box>
    </Col>
  );
};
export default FooterHeading;

const boxSx = {
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  pl: [3, 5]
};

const textSx = {
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
};