/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useMemo } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import Home from '../components/Home/home';


const IndexPage = ({ data }) => {

  const content = useMemo(() => ({
    projects: data?.projects,
    about: data?.about,
    stacks: data?.stacks,
  }), []);

  return (
    <Layout>
      <Header />
      <Home content={content} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    projects: allContentfulProjectCard(sort: { fields: date, order: ASC }) {
    edges {
      node {
        id
        header
        subHeader
        devDate
        description
        tools
        siteUrl
        repoUrl
        sitePic {
          file {
            url
          }
        }
      }
    }
  }
    about: contentfulAbout {
      text {
        text
      }
    }
    stacks: allContentfulStacks(sort: { fields: date, order: ASC }) {
      edges {
        node {
          title
          images {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;
