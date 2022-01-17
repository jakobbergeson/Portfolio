/** @jsx jsx */
import * as React from 'react';
import { jsx, Avatar } from 'theme-ui';
import { motion } from 'framer-motion';
import { Box } from '../Animations/';
import { CtaButton } from '../CtaButton';
import JakobAvatar from '../../images/Avatar.svg';
import LinkedIn from '../../images/linkedin-brands.js';
import { aboutStyles } from '../../utils/';

const About = () => {

  return (
    <div
      sx={aboutStyles.wrapper}
    >
      <div
        sx={aboutStyles.column}
      >
        <Box
          sxContainerStyle={aboutStyles.heading}
          sxChildStyle={aboutStyles.header}
          children={'ABOUT ME'}
        />
        <Box
          sxChildStyle={aboutStyles.paragraph}
          children={'Amet sint dolore amet non ipsum. Laborum anim tempor velit Lorem quis quis est. Eu sunt est deserunt consequat proident magna quis voluptate culpa exercitation id. Id adipisicing consectetur tempor occaecat consectetur deserunt sunt. Exercitation labore nisi ea incididunt aliqua aliquip Lorem laboris.'}
        />
        <CtaButton
          sxContainerStyle={aboutStyles.ctaButton}
          sxChildStyle={aboutStyles.circle}
          sxBlurbStyle={aboutStyles.ctaBlurb}
          sxImageStyle={aboutStyles.circleImageBox}
          blurb={'Go To LinkedIn'}
          image={<LinkedIn />}
        />
      </div>
      <Avatar
        src={JakobAvatar}
        alt={'Jakob Avatar'}
        sx={{ width: '280px', height: '280px' }}
      />
    </div>
  );
};

export default About;