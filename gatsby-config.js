module.exports = {
  siteMetadata: {
    title: 'Vlad Stoica',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/md`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/json`,
        name: "json",
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-transformer-json'
  ],
}
