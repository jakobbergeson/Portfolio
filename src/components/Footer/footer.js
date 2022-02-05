/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Col } from '../Components';
import FooterHeading from './footerHeading';

const Footer = () => {
  return (
    <Col
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: ['350px', '440px', null, '506px', '600px'],
        bg: 'blue',
      }}
    >
      <FooterHeading />
    </Col>
  );
};

export default Footer;