/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';

const Col = ({
  sx,
  children,
  ...props
}) => {

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...sx,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Col;