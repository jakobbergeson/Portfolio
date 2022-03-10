/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { Col } from '../Components';
import { Box } from '../Animations/';
import { CtaButton } from '../CtaButton';
import { Heading } from '../Heading/';
import Avatar from './avatar';
import LinkedIn from '../../images/linkedin-brands.js';
import { aboutStyles } from '../../utils/';

const About = ({ content }) => {

  return (
    <div
      sx={aboutStyles.wrapper}
      id="about"
    >
      <Col
        sx={aboutStyles.column}
      >
        <Heading
          children={'ABOUT ME'}
        />
        <Box
        >
          <Text
            variant='text.h2'
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: '0px',
              color: 'blue',
              fontSize: ['24px', null, null, '28px']
            }}
          >
            Hey, I'm Jakob
          </Text>
        </Box>
        <Box
          sxContainerStyle={{
            mb: '16px'
          }}
        >
          <Text
            variant='text.h2'
            sx={{
              mb: [1],
              textTransform: 'uppercase',
              letterSpacing: '0px',
              fontWeight: 300,
              color: 'text',
              fontSize: ['18px', '20px']
            }}
          >
            I build stuff for the web.
          </Text>
        </Box>
        <Box
          sxChildStyle={aboutStyles.paragraph}
          amount={.25}
          children={content.text.text}
        />
        <CtaButton
          to={'https://www.linkedin.com/in/jakobbergeson/'}
          blurb={'Go To LinkedIn'}
          image={<LinkedIn />}
        />
      </Col>
      <Avatar />
    </div>
  );
};

export default About;