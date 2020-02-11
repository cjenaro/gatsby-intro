import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(node => ({
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
    author: node.frontmatter.author,
    excerpt: node.excerpt,
  }));
};

export default usePosts