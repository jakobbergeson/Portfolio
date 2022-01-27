/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { motion } from "framer-motion";

const BadgeItem = ({
  delayPerPixel,
  i,
  originIndex = 0,
  originOffset,
  animate,
  children
}) => {

  const delayRef = useRef(8);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }
  }, [delayPerPixel]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: delayRef => ({
      opacity: 1,
      scale: 1,
      transition: { delay: delayRef.current }
    })
  };

  return (

    <motion.div
      ref={ref}
      variants={itemVariants}
      initial='hidden'
      animate={animate}
      custom={delayRef}
      sx={{
        bg: 'transparent',
        fontSize: ['14px', '16px'],
        fontWeight: 400,
        color: 'blue',
        boxShadow: 'inset 0 0 0 2px',
        p: 2,
        mr: 2,
        mb: 2
      }}
    >
      {children}
    </motion.div>

  );
};
export default BadgeItem;