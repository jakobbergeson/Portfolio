/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuList } from "./menuList";
import { navStyles } from '../../../utils';

const sidebar = {
  open: (height = 800) => ({
    clipPath: `circle(${height * 2 + 200}px at 90vw 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 90vw 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      sx={navStyles.mobileWrapper}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      style={{ width: "100vw" }}
    >
      <motion.div sx={navStyles.mobileContainer} variants={sidebar} />
      <MenuToggle toggle={() => toggleOpen()} />
      <MenuList
        toggle={() => toggleOpen()}
        children={['About', 'Work', 'Stacks', 'Contact']}
      />
    </motion.nav>
  );
};

export default MobileNav;