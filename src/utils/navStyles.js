export const navStyles = {
  wrapper: {
    width: '100%',
    height: 60,
    bg: 'transparent',
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    transition: 'background-color .2s ease',
    fontWeight: 'heading',
    fontSize: [1, null, 2, 3],
    zIndex: 1000,
    scroll: {
      width: '100%',
      height: 60,
      bg: 'primary',
      position: 'sticky',
      top: 0,
      display: 'flex',
      alignItems: 'center',
      color: 'text',
      transition: 'background-color .2s ease',
      fontWeight: 'heading',
      fontSize: [1, null, 2, 3],
      zIndex: 1000,
      boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)',
    }
  },
  container: {
    width: '100%',
    ml: 'auto',
    mr: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    icon: {
      width: '50px',
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
      listItem: {
        'a': {
          pl: '1rem',
          pr: '1rem',
          pt: 0,
          pb: 0,
          transition: 'color .2s ease',
          '&:after': {
            content: '""',
            display: 'block',
            width: '100%',
            transform: 'scaleX(0)',
            height: '2px',
            bg: 'primary',
            transformOrigin: 'bottom right',
            transition: 'transform 0.25s ease-out',
          },
          '&:hover': {
            '&:after': {
              transform: 'scaleX(1)',
              transformOrigin: 'bottom left',
            }
          }
        }
      },
      scroll: {
        'a': {
          pl: '1rem',
          pr: '1rem',
          pt: 0,
          pb: 0,
          transition: 'color .2s ease',
          '&:after': {
            content: '""',
            display: 'block',
            width: '100%',
            transform: 'scaleX(0)',
            height: '2px',
            bg: 'blue',
            transformOrigin: 'bottom right',
            transition: 'transform 0.25s ease-out',
          },
          '&:hover': {
            color: 'blue',
            transition: 'color .2s ease',
            '&:after': {
              transform: 'scaleX(1)',
              transformOrigin: 'bottom left',
            }
          }
        }
      }
    }
  }
}