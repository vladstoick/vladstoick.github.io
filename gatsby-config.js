module.exports = {
  siteMetadata: {
    title: "Vlad Stoica",
    avatar: "http://gravatar.com/avatar/32ca7438bc506ad3ca9b3d3c2210d5f5?s=400",
    navigation: [
      {
        path: "/",
        name: "home"
      },
      {
        path: "/work/",
        name: "work"
      },
      {
        path: "/education/",
        name: "education"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-flow`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/md`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/json`,
        name: "json"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`
  ]
};
