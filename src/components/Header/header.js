/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { Line } from '../Animations';
import Nav from '../Nav/nav';
import { headerStyles } from '../../utils/headerStyles';

const Header = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    }
  };

  const childVariant = {
    hidden: {
      x: '-20%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 70,
        duration: 0.2,
      }
    }
  };

  return (
    <div
      sx={headerStyles.wrapper}
    >
      <div
        sx={headerStyles.container}
      >
        <Line
          sxContainerStyle={headerStyles.headingBox}
          sxChildStyle={headerStyles.heading2}
          containerVariant={containerVariant}
          childVariant={childVariant}
          animate={'visible'}
          children={['Full - Stack', 'Software', 'Developer']}
        />
        <Nav />

      </div>
      <div
        sx={headerStyles.anglBox1}
      />
      <div
        sx={headerStyles.anglBox2}
      />
    </div>
  );
};

export default Header;