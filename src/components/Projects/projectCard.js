/** @jsx jsx */
import { jsx, Text, Image } from 'theme-ui';
import { Box } from '../Animations';
import { projectCardStyles } from '../../utils';
import TrulyYours from '../../images/Truly_Yours.png';

const ProjectCard = () => {

  return (
    <div
      sx={projectCardStyles.container}
    >
      <Box
        amount={.7}
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Text
          variant='text.h2'
          sx={{
            mb: [1],
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: '0px',
            color: 'black'
          }}
        >
          Truly Yours
        </Text>
        <Text
          variant='text.h4'
          sx={{
            mb: [1],
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: '0px',
            fontWeight: 'body',
            color: 'black'
          }}
        >
          Business Platform
        </Text>
        <div
          sx={{
            mb: [4],
            lineHeight: 1.5,
            fontWeight: 300,
            color: 'text',
            fontSize: 2,
            fontStyle: 'italic',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Developed: December 2021
        </div>
      </Box>

      <Box
        amount={.25}
      >
        <Image
          src={TrulyYours}
          sx={{
            width: '100%',
            height: 'auto',
            mb: [2],
          }}
        />
      </Box>
    </div>
  );

};

export default ProjectCard;