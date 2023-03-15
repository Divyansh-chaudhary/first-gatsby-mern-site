/**
 * @type {import('gatsby').GatsbyConfig}
 */
// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    }
  ]
};
