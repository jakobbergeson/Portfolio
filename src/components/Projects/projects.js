/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Col } from '../Components';
import { Heading } from '../Heading/';
import { CtaButton } from '../CtaButton/';
import ProjectCard from './projectCard';
import GitHub from '../../images/github-brands.js';
import { projectStyles } from '../../utils';


const Projects = ({ content }) => {
  return (
    <Col
      id='projects'
      sx={projectStyles.column}
    >
      <Heading
        children={'Projects'}
      />
      <div
        sx={projectStyles.box}
      >
        {content.edges.map(({ node }, i) => {
          return (
            <ProjectCard
              i={i}
              key={node.id}
              header={node.header}
              subHeader={node.subHeader}
              devDate={node.devDate}
              description={node.description}
              tools={node.tools}
              siteUrl={node.siteUrl}
              repoUrl={node.repoUrl}
              sitePic={node.sitePic.file.url}
            />
          );
        })}
      </div>
      <CtaButton
        to={'https://github.com/jakobbergeson'}
        blurb={'Go To GitHub'}
        image={<GitHub />}
      />
    </Col>
  );

};

export default Projects;