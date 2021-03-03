module.exports = {
  siteMetadata: {
    title: "New Super Dope Blog"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/blog/`,
      },
    }

  ],
};
