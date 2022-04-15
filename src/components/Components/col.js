/** @jsx jsx */
import { jsx } from 'theme-ui';

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