/** @jsx jsx */
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Title = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <Helmet title={`${data.site.siteMetadata.title} | ${title}`} />;
};

export default Title;
