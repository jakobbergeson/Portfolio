/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from "framer-motion";
import { navStyles } from "../../../utils";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#f6f6f6"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <motion.button
    initial={{ y: '-105%', x: -23 }}
    animate={{
      y: 0,
      x: -23,
      transition: {
        delay: 1.5,
        type: 'spring',
        stiffness: 120,
        duration: 0.2,
      }
    }}
    onClick={toggle}
    sx={navStyles.menuToggle}
  >
    <svg width="45" height="45" viewBox="-8 -8 37 37">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </motion.button>
);