/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { Box } from '../Animations/';
import { CtaButton } from '../CtaButton';
import { Heading } from '../Heading/';
import Avatar from './avatar';
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
        <Heading
          children={'ABOUT ME'}
        />
        <Box
          sxChildStyle={aboutStyles.paragraph}
          amount={.25}
          children={'Amet sint dolore amet non ipsum. Laborum anim tempor velit Lorem quis quis est. Eu sunt est deserunt consequat proident magna quis voluptate culpa exercitation id. Id adipisicing consectetur tempor occaecat consectetur deserunt sunt. Exercitation labore nisi ea incididunt aliqua aliquip Lorem laboris.'}
        />
        <CtaButton
          blurb={'Go To LinkedIn'}
          image={<LinkedIn />}
        />
      </div>
      <Avatar />
    </div>
  );
};

export default About;