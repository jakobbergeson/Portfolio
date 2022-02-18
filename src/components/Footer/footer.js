/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Col } from '../Components';
import { Box } from '../Animations';
import DragButton from './dragButton';
import Instruction from './instructions';

const Footer = () => {

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #f6f6f6 0%, #f6f6f6 100%)",
    "linear-gradient(180deg, #48cae4 0%, #48cae4 100%)",
    "linear-gradient(180deg,  #f6f6f6 0%, #f6f6f6 100%)"
  ]);
  const color = useTransform(x, xInput, ["#48cae4", "#000000", "#48cae4"]);
  const opacity = useTransform(x, xInput, ["rgba(246, 246, 246, 0.0)", "rgba(246, 246, 246, 1.0)", "rgba(246, 246, 246, 0.0)"]);
  const drag = useTransform(x, [-100, 0, 100], [-50, 0, 50]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const tickPath2 = useTransform(x, [-10, -100], [0, 1]);

  return (
    <motion.div
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ['center', null, null, null, null, 'start'],
        p: ['16px', null, null, null, null, '100px'],
        height: ['350px', '440px', null, '506px', '600px'],
      }}
      style={{ background }}
    >
      <Instruction />
      <Box
        amount={0.25}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: ['center', null, null, null, null, 'flex-start']
        }}
      >
        <motion.div
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            m: 0,
            mb: [3],
            minWidth: 0,
            lineHeight: 1.1,
            fontWeight: 600,
            textTransform: 'uppercase',
            color: 'primary',
            fontSize: ['44px', null, '70px', null, '104px'],
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1px',
            'WebkitTextStrokeColor': 'primary',
          }}
        >
          LET'S BUILD
        </motion.div>
      </Box>
      <DragButton
        x={x}
        background={background}
        color={color}
        opacity={opacity}
        drag={drag}
        tickPath={tickPath}
        tickPath2={tickPath2}
      />
      <Col>
        <Text
          sx={{
            lineHeight: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            color: 'primary',
            fontSize: '16px',
            mb: ' 4px',
          }}
        >
          jakobbergeson.dev@gmail.com
        </Text>
        <motion.div
          sx={{
            bg: 'primary',
            height: '3px',
            width: '100%',
          }}
        />
      </Col>
    </motion.div>
  );
};

export default Footer;