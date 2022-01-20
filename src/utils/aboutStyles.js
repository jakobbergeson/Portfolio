
export const aboutStyles = {
  wrapper: {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    display: 'flex',
    position: 'relative',
    flexDirection: ['column-reverse', null, null, 'row'],
    alignItems: ['center', null, null, 'start'],
    mb: ['64px', '80px', '192px'],
    pt: ['64px', '80px', null, '32px'],
    px: ['8px', '16px', '24px'],
  },
  column: {
    m: 0,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    maxWidth: '600px',
    mr: [0, null, null, '96px'],
  },
  paragraph: {
    m: 0,
    minWidth: 0,
    fontFamily: "'Roboto', sans-serif",
    lineHeight: 1.5,
    fontWeight: 300,
    color: 'text',
    fontSize: 2,
    mb: ['24px', null, null, '48px'],
  }
};