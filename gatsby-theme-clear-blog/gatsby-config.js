const path = require("path");

module.exports =  (opts = {siteTitle, siteDescription}) => {
  const {
    path: posts = `src/pages/markdown`,
    siteTitle="stub title", 
    siteDescription='stub description'
  } = opts 

  return {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: { path: path.join(__dirname, "src/pages") }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(posts),
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ]
      }
    }
  ] }
};
