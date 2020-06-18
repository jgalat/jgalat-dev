module.exports = {
  siteMetadata: {
    title: `jgalat.dev`,
    description: `My personal website. Yes, this is all.`,
    author: `Jorge Galat`,
    email: `jrgglt@gmail.com`,
    social: {
      github: `https://github.com/jgalat`,
      linkedin: `https://linkedin.com/in/jgalat`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jgalat.dev`,
        short_name: `jgalat.dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
