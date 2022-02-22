/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Line } from '../Animations';
import { Nav } from '../Nav/';
import { MobileNav } from '../Nav/';
import { headerStyles } from '../../utils/headerStyles';

const Header = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        when: 'beforeChildren',
        // staggerChildren: 0.25,
      },
    }
  };

  const childVariant = {
    hidden: {
      x: '-10%',
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
          sxChildStyleVar={headerStyles.heading1}
          containerVariant={containerVariant}
          childVariant={childVariant}
          animate={'visible'}
          children={['Full - Stack', 'Software', 'Developer']}
        />
        <Nav />
        <MobileNav />
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