/** @jsx jsx */
import { jsx } from 'theme-ui';
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