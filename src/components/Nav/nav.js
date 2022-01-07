/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import { navStyles } from '../../utils';

const Nav = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.25,
        mass: 0.2,
      },
    }
  };

  const childVariant = {
    hidden: {
      y: '-100%',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        duration: 0.2,
      }
    }
  };

  return (
    <nav sx={navStyles.wrapper}>
      <div sx={navStyles.container}>
        <motion.ul
          sx={navStyles.container.list}
          variants={containerVariant}
          initial='hidden'
          animate='visible'
        >
          <motion.li
            sx={navStyles.container.list.circle}
            variants={childVariant}
            whileHover={{
              boxShadow: '0px 0px 8px #ffffff',
              scale: 1.2,
              borderRadius: '20%'
            }}
          >
            <a>About</a>
          </motion.li>
          <motion.li
            sx={navStyles.container.list.circle}
            whileHover={{
              boxShadow: '0px 0px 8px #ffffff',
              scale: 1.2,
              borderRadius: '20%'
            }}
            variants={childVariant}
          >
            <a>Work</a>
          </motion.li>
          <motion.li
            sx={navStyles.container.list.circle}
            whileHover={{
              boxShadow: '0px 0px 8px #ffffff',
              scale: 1.2,
              borderRadius: '20%'
            }}
            variants={childVariant}
          >
            <a>Stacks</a>
          </motion.li>
          <motion.li
            sx={navStyles.container.list.circle}
            whileHover={{
              boxShadow: '0px 0px 8px #ffffff',
              scale: 1.2,
              borderRadius: '20%'
            }}
            variants={childVariant}
          >
            <a>Contact</a>
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Nav;