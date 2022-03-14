require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Jakob Bergeson | Portfolio',
    description: `Full-Stack Engineer who loves building efficient code and enjoyable user interfaces.`,
    url: 'https://www.jakobbergeson.com/',
    image: `./static/images/link_preview.png`,
    author: `Jakob Bergeson`,
    keywords: `React, Javascript, Portfolio, Developer, Engineer, Frontend, Web, Software`,
  },
  plugins: [

    'gatsby-plugin-image',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/Icon_Blue.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
