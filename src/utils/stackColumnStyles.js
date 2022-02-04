export const stackColumnStyles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100vw',
    minWidth: 0,
    mt: '24px',
    mb: ['24px', null, null, '48px'],
    ml: [0, null, '24px'],
    mr: [0, null, '24px', null, null, '56px']
  },
  title: {
    mb: ['16px', '24px'],
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '0px',
    textAlign: 'center',
    color: 'black',
    fontSize: ['24px', null, null, '28px']
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '330px',
  },
  image: {
    maxWidth: ' 100%',
    width: '86px',
    height: '86px',
    filter: 'invert(1)',
  },
  text: {
    textAlign: 'center',
    lineHeight: 1.5,
    fontWeight: 300,
    color: 'text',
    fontSize: ['14px', '16px'],
    fontFamily: "'Roboto', sans-serif",
  }
}