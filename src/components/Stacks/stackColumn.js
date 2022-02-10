/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import { Col } from '../Components';
import { Box } from '../Animations';
import { stackColumnStyles } from '../../utils';

const StackColumn = ({
  title,
  images,
}) => {
  return (
    <Col
      sx={stackColumnStyles.column}
    >
      <Box
        sx={stackColumnStyles.title}
      >
        {title}
      </Box>
      <div
        sx={stackColumnStyles.box}
      >
        {images.map((image, i) => {
          return (
            <Box
              key={i}
              sx={{
                width: '90px',
                m: [1],
              }}
            >
              <Col
                sx={{
                  alignItems: 'center'
                }}
              >
                <Image
                  key={i}
                  src={image.file.url}
                  alt={image.title}
                  sx={stackColumnStyles.image}
                />
                <Text
                  sx={stackColumnStyles.text}
                >
                  {image.title}
                </Text>
              </Col>
            </Box>
          );
        })}
      </div>
    </Col>
  );
};

export default StackColumn;