module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Jakob Bergeson',
  },
  plugins: [

    'gatsby-plugin-image',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Merriweather+Sans\:300,400,500,600,700,800`,
    //       `Open+Sans\:300,400,500,600,700,800`,
    //       `Gudea\:400`,
    //     ],
    //     display: 'swap'
    //   }
    // },
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
