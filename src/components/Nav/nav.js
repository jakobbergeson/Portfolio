/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Circle } from '../Animations';
import MobileNav from './mobileNav';
import { navStyles } from '../../utils';

const Nav = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
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

  return (
    <>
      <nav sx={navStyles.wrapper}>
        <div sx={navStyles.container}>
          <Circle
            sxContainerStyle={navStyles.container.list}
            sxChildStyle={navStyles.container.list.circle}
            containerVariant={containerVariant}
            childVariant={childVariant}
            animate={'visible'}
            whileHover={whileHover}
            whileTap={whileTap}
            children={['About', 'Work', 'Stacks', 'Contact']}
          />
        </div>
      </nav>
      <MobileNav />
    </>
  );
};

export default Nav;