/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from "framer-motion";
import { useState } from 'react';

const DragButton = ({
  x,
  color,
  opacity,
  drag,
  tickPath,
  tickPath2,
}) => {

  const [grab, setGrab] = useState(false);

  const dragVariant = {
    initial: {
      y: 50,
      x: 0,
      opacity: 0
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.4,
      },
    }
  };

  function onDrag() {
    setGrab(true);
    navigator.clipboard.writeText('jakobbergeson.dev@gmail.com');
  };

  return (
    <motion.div
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: ['column', null, null, null, null, 'row'],
        alignItems: 'center',
        mb: [3],
        width: ['100%', 'fit-content']
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
          'WebkitTextFillColor': '#48cae4',
          'WebkitTextStrokeWidth': '1px',
          'WebkitTextStrokeColor': '#48cae4',

        }}
        style={{
          marginRight: 3,
          position: 'relative',
          left: drag,
          right: drag,
        }}
        variants={dragVariant}
        initial='initial'
        animate='visible'
      >
        TOGETHER
      </motion.div>
      <motion.div
        sx={{
          borderRadius: '20%',
          position: ['static', null, null, null, null, 'absolute'],
          width: ['65px', '125px'],
          height: ['65px', '125px'],
          top: ['calc(80% - 65px / 2)', 'calc(50% - 125px / 2)'],
          left: ['calc(50% - 65px / 2)', ' calc(100% + 125px / 2)'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: ' center',
          cursor: grab ? 'grab' : 'pointer',
        }}
        style={{
          x,
          background: opacity
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onMouseEnter={() => setGrab(false)}
        onClick={onDrag}
      >
        <svg
          sx={{
            width: ' 80%',
            height: ' 80%',
          }}
          viewBox="0 0 50 50"
        >
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ translateX: 5, translateY: 5 }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath2 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default DragButton;