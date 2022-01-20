/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Box } from '../Animations/';
import { Circle } from '../Animations/';
import { ctaStyles } from '../../utils';

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
      sxContainerStyle={sxContainerStyle || ctaStyles.ctaButton}
      sxChildStyle={sxContainerStyle || ctaStyles.ctaButton}
      onHoverStart={() => setHoverState('visible')}
      onHoverEnd={() => setHoverState('hidden')}
      viewport={ctaViewport}
    >
      <div
        sx={sxBlurbStyle || ctaStyles.ctaBlurb}
      >
        {blurb}
      </div>
      <Circle
        sxCircleStyle={sxChildStyle || ctaStyles.circle}
        sxCircleChildStyle={sxImageStyle || ctaStyles.circleImageBox}
        animate={hoverState}
        children={image}
      >
      </Circle>
    </Box>
  );
};

export default CtaButton;