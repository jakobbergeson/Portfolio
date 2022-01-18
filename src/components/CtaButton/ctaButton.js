/** @jsx jsx */
import { jsx, Avatar } from 'theme-ui';
import { useState } from 'react';
import { Box } from '../Animations/';
import { Circle } from '../Animations/';

const CtaButton = ({
  sxContainerStyle,
  sxChildStyle,
  sxBlurbStyle,
  sxImageStyle,
  blurb,
  image,
}) => {

  const [hoverState, setHoverState] = useState('hidden');

  const ctaViewport = {
    once: true,
    amount: .7
  };

  return (
    <Box
      sxContainerStyle={sxContainerStyle}
      sxChildStyle={sxContainerStyle}
      onHoverStart={() => setHoverState('visible')}
      onHoverEnd={() => setHoverState('hidden')}
      viewport={ctaViewport}
    >
      <div
        sx={sxBlurbStyle}
      >
        {blurb}
      </div>
      <Circle
        sxCircleStyle={sxChildStyle}
        sxCircleChildStyle={sxImageStyle}
        animate={hoverState}
        children={image}
      >
      </Circle>
    </Box>
  );
};

export default CtaButton;