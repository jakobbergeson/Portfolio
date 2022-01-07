export const navStyles = {
  wrapper: {
    bg: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'heading',
    fontSize: [1, null, 2, 3],
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    list: {
      display: 'flex',
      flexDirection: 'column',
      p: 0,
      m: 0,
      circle: {
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
        display: 'flex',
        position: 'relative',
        borderRadius: '50%',
        transform: 'scale(1)',
        transition: 'border-radius .3s ease, background-color .3s ease, color .3s ease, transform .3s ease',
        WebkitAlignItems: 'center',
        WebkitBoxAlign: 'center',
        msFlexAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'center',
        WebkitJustifyContent: 'center',
        msFlexPack: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '1px solid #f6f6f6',
        width: ['50px', null, '80px'],
        height: ['50px', null, '80px'],
        overflow: 'hidden',
        bg: 'transparent',
        marginTop: '8px',
        marginBottom: '8px',
        '&:hover': {
          borderRadius: '20%',
          bg: 'primary',
          color: 'darkBlue',
          transform: 'scale(1.1)',
          transition: 'border-radius .3s ease, background-color .3s ease, color .3s ease, transform .3s ease'
        },
        'a': {
          m: 0,
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: [1, null, 2],
          position: ' absolute',
        }
      }
    }
  }
}