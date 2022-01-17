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

  return (
    <Box
      sxContainerStyle={sxContainerStyle}
      sxChildStyle={sxContainerStyle}
      onHoverStart={() => setHoverState('visible')}
      onHoverEnd={() => setHoverState('hidden')}
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