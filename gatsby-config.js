module.exports = {
  siteMetadata: {
    title: 'Gatsby Intro',
    description: 'A description to Gatsby Intro',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        presets: ['@emotion/babel-preset-css-prop'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
  ],
};
