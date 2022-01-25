/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Col } from '../Components';
import { Heading } from '../Heading/';
import { Box } from '../Animations';
import ProjectCard from './projectCard';
import { projectStyles } from '../../utils';


const Projects = () => {
  return (
    <Col
      id="projects"
      sx={projectStyles.column}
    >
      <Heading
        children={'Projects'}
      />
      <div
        sx={projectStyles.box}

      >
        <ProjectCard />

      </div>
    </Col>
  );

};

export default Projects;