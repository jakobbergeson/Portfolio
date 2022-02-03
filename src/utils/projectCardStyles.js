export const projectCardStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    width: '500px',
    minWidth: 0,
    mt: '24px',
    mb: ['24px', null, null, '48px'],
    ml: [0, null, '24px'],
    mr: [0, null, '24px', null, null, '56px']
  },
  header: {
    mb: [1],
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '0px',
    color: 'black',
    fontSize: ['24px', null, null, '28px']
  },
  subHeader: {
    mb: [1],
    textTransform: 'uppercase',
    letterSpacing: '0px',
    fontWeight: 'body',
    color: 'black',
    fontSize: ['18px', '20px']
  },
  devDate: {
    mb: [4],
    lineHeight: 1.5,
    fontWeight: 300,
    color: 'text',
    fontSize: ['14px', 2],
    fontStyle: 'italic',
    fontFamily: "'Roboto', sans-serif",
  },
  imageBox: {
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 0 1vw 0 #c0c0c0',
    maxWidth: '500px',
    mb: [4],
    minHeight: ['80vw', '330px'],
    '&:hover': {
      boxShadow: '0 0 1vw 0 #48cae4',
    },
    '&:hover > img': {
      filter: 'blur(6px)',
      transform: 'scale(1.1)',
      transition: '200ms ease-in-out'
    },
    '&:hover > div': {
      opacity: 1,
      transition: '200ms ease-in-out'
    }
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: '200ms ease-in-out',
  },
  descDiv: {
    opacity: 0,
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    bg: 'rgba(255,255,255, .9)',
    transition: '200ms ease-in-out',
    py: 2,
    px: 3
  },
  description: {
    mb: [4],
    lineHeight: 1.5,
    fontWeight: 300,
    color: 'text',
    fontSize: ['14px', '16px'],
    fontFamily: "'Roboto', sans-serif",
  },
  tools: {
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    lineHeight: 1,
    fontWeight: 'body',
    letterSpacing: '0px',
    textTransform: 'uppercase',
    color: 'black',
    fontSize: ['16px', '18px'],
    mx: 0
  }
}