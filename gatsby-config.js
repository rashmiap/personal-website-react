module.exports = {
  siteMetadata: {
    title: 'Rashmi AP',
    siteUrl: 'http://rashmiap.me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Signika`,
          `source sans pro\:300,400,600` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
