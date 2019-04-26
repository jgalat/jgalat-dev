console.log();
module.exports = {
  siteMetadata: {
    title: `jgalat.dev`,
    description: `My personal website. Yes, this is all.`,
    author: `Jorge Galat <jrgglt@gmail.com>`,
    social: {
      github: `https://github.com/jgalat`,
      linkedin: `https://linkedin.com/in/jgalat`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            subsets: [`latin`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.NODE_ENV === `production` && `UA-89945529-4`,
      },
    },
  ],
};
