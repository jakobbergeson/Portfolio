export const navStyles = {
  wrapper: {
    bg: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'heading',
    fontSize: [1, null, 2, 3],
    zIndex: 1000,
    ml: 4,
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
        width: ['50px', null, '70px', null, '90px'],
        height: ['50px', null, '70px', null, '90px'],
        overflow: 'hidden',
        bg: 'transparent',
        marginTop: '8px',
        marginBottom: '8px',
        '&:hover': {
          bg: 'primary',
          color: 'darkBlue',
        },
        'a': {
          m: 0,
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: [0, null, 0, null, 2],
          position: ' absolute',
        }
      }
    }
  }
}