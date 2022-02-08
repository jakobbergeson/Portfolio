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
          alignItems: ['center', 'flex-start']
        }}
      >
        <Text
          variant='text.h2'
          sx={{
            ...textSx,
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1px',
            'WebkitTextStrokeColor': '#48cae4',
          }}
        >
          GET IN
        </Text>
        <Text
          variant='text.h2'
          sx={{
            ...textSx,
            mb: [3],
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1px',
            'WebkitTextStrokeColor': '#48cae4',
          }}
        >
          TOUCH
        </Text>
        <Col>
          <Text
            sx={{
              lineHeight: 1,
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'blue',
              fontSize: '16px',
              mb: ' 4px',
            }}
          >
            jakobbergeson.dev@gmail.com
          </Text>
          <div
            sx={{
              bg: 'blue',
              height: '3px',
              width: '100%',
            }}
          />
        </Col>
      </Box>
    </Col>
  );
};
export default FooterHeading;

const boxSx = {
  alignItems: ['center', 'flex-start'],
  justifyContent: ['flex-start', 'center'],
  position: 'absolute',
  mt: '60px',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  pl: [0, 5]
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
  fontSize: ['60px', null, '70px', null, '104px'],
};