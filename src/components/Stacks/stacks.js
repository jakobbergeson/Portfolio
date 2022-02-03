/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Col } from '../Components';
import { Heading } from '../Heading/';
import { Box } from '../Animations';

const Stacks = ({ content }) => {

  console.log("CONTENT", content);
  return (
    <Col
      id='stacks'
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        pt: [4],
        mb: [5, '80px', '144px'],
      }}
    >
      <Heading
        children={'Stacks'}
      />
      <div
        sx={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {content.edges.map(({ node }, i) => {
          return (
            <div
              key={node.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100vw',
                minWidth: 0,
                mt: '24px',
                mb: ['24px', null, null, '48px'],
                ml: [0, null, '24px'],
                mr: [0, null, '24px', null, null, '56px']
              }}
            >
              <Box
                sx={{
                  mb: ['16px', '24px'],
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: ['24px', null, null, '28px']
                }}
              >
                {node.title}
              </Box>
              <Box>
                {node.images.map((image, i) => {
                  return (
                    <Image
                      key={i}
                      src={image.file.url}
                      alt={image.title}
                      sx={{
                        maxWidth: ' 100%',
                        // p: 1,
                        width: '86px',
                        height: '86px',
                        filter: 'invert(1)',
                      }}
                    />
                  );
                })}
              </Box>
            </div>
          );
        })}
      </div>
    </Col>

  );
};

export default Stacks;