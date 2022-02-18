/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Col } from '../Components';
import { Heading } from '../Heading/';
import StackColumn from './stackColumn';
import { stackStyles } from '../../utils';

const Stacks = ({ content }) => {
  console.log("STACKS", content);
  return (
    <Col
      id='stacks'
      sx={stackStyles.column}
    >
      <Heading
        children={'Stacks'}
      />
      <div
        sx={stackStyles.box}
      >
        {content.edges.map(({ node }, i) => {
          return (
            <StackColumn
              key={i}
              title={node.title}
              images={node.images}
            />
          );
        })}
      </div>
    </Col>
  );
};

export default Stacks;