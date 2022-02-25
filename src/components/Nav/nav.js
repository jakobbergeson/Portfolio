/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { NavList } from '../Animations';
import { navStyles } from '../../utils';

const Nav = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.7,
        when: 'beforeChildren',
        // staggerChildren: 0.0,
        mass: 0.2,
      },
    }
  };

  const childVariant = {
    hidden: {
      y: '-90%',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: [0, 0, 0, 0, 0, 1],
      transition: {
        type: 'spring',
        stiffness: 120,
        duration: 0.2,
      }
    }
  };

  const whileHover = {
    boxShadow: '0px 0px 8px #ffffff',
    scale: 1.2,
    borderRadius: '20%'
  };

  const whileTap =
    { scale: 0.95 };

  const navItems = [
    { text: 'About', to: '/#about' },
    { text: 'Work', to: '/#projects' },
    { text: 'Stacks', to: '/#stacks' },
    { text: 'Contact', to: '/#contact' }
  ];

  return (
    <>
      <nav sx={navStyles.wrapper}>
        <div sx={navStyles.container}>
          <NavList
            sxContainerStyle={navStyles.container.list}
            sxChildStyle={navStyles.container.list.circle}
            containerVariant={containerVariant}
            childVariant={childVariant}
            animate={'visible'}
            whileHover={whileHover}
            whileTap={whileTap}
            children={navItems}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;