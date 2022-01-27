/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Col } from '../Components';
import { Heading } from '../Heading/';
import { CtaButton } from '../CtaButton/';
import ProjectCard from './projectCard';
import GitHub from '../../images/github-brands.js';
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
        <ProjectCard />
        <ProjectCard />
      </div>
      <CtaButton
        blurb={'Go To GitHub'}
        image={<GitHub />}
      />
    </Col>
  );

};

export default Projects;