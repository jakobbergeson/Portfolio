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
  to,
  blurb,
  image,
}) => {

  const [hoverState, setHoverState] = useState('hidden');

  const ctaViewport = {
    once: true,
    amount: 1
  };

  return (
    <Box
      sxContainerStyle={sxContainerStyle || ctaStyles.ctaButton}
      sxChildStyle={sxContainerStyle || ctaStyles.ctaButton}
      onHoverStart={() => setHoverState('visible')}
      onHoverEnd={() => setHoverState('hidden')}
      viewport={ctaViewport}
    >
      <a
        href={to}
        rel="noreferrer"
        target='_blank'
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
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
      </a>
    </Box>
  );
};

export default CtaButton;