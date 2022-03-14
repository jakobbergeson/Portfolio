/** @jsx jsx */
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Title = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        url
        image
        author
        keywords
      }
    }
  }
`);

  const { title, description, url, image, author, keywords } = data.site.siteMetadata;

  return <Helmet
    title={title}

    meta={[
      {
        name: 'description',
        content: description
      },
      {
        name: 'author',
        content: author
      },
      {
        name: 'keywords',
        content: keywords
      },
      {
        property: 'og:image',
        content: url + image
      },
      {
        property: 'og:url',
        content: url
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]}

  />;
};

export default Title;
