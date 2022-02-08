/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion, useMotionValue, useTransform } from "framer-motion";

export const DragButton = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg,  #63cfe9 0%, #17acfa 100%)",
    "linear-gradient(180deg, #f6f6f6 0%, #f6f6f6 100%)",
    "linear-gradient(180deg, #63cfe9 0%, #17acfa 100%)"
  ]);
  const color = useTransform(x, xInput, ["#48cae4", "#17acfa", "#48cae4"]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const tickPath2 = useTransform(x, [-10, -100], [0, 1]);

  return (
    <motion.div
      sx={{
        width: '100%',
        height: ' 100%',
      }}
      style={{ background }}>
      <motion.div
        sx={{
          background: '#f6f6f6',
          borderRadius: '20%',
          position: 'absolute',
          width: ['65px', '150px'],
          height: ['65px', '150px'],
          top: ['calc(80% - 65px / 2)', 'calc(50% - 150px / 2)'],
          left: ['calc(50% - 65px / 2)', ' calc(50% - 150px / 2)'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: ' center',
        }}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
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
