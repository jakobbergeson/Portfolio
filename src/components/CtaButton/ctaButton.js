/** @jsx jsx */
import { jsx, Avatar } from 'theme-ui';
import { motion, useAnimation } from 'framer-motion';
import { Box } from '../Animations/';
import { Circle } from '../Animations/';

const CtaButton = ({
  sxContainerStyle,
  sxChildStyle,
  sxBlurbStyle,
  sxImageStyle,
  blurb,
  src,
}) => {

  const controls = useAnimation();

  return (
    <Box
      sxContainerStyle={sxContainerStyle}
      sxChildStyle={sxContainerStyle}
      onHoverStart={() => controls.start('visible')}
      onHoverEnd={() => controls.start('hidden')}
    >
      <div
        sx={sxBlurbStyle}
      >
        {blurb}
      </div>
      <Circle
        sxCircleStyle={sxChildStyle}
        animate={controls}
      >
        <Avatar
          src={src}
          sx={sxImageStyle}
        />
      </Circle>
    </Box>
  );
};

export default CtaButton;