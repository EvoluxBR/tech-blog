import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import Post, { MDXNode } from '../../components/post';

type BlogPostProps = {
  data: {
    mdx: MDXNode;
  };
};

const BlogPost = ({ data }: BlogPostProps) => {
  return (
    <Layout title={data.mdx.frontmatter.title}>
      <Post post={data.mdx} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
      id
      body
      slug
    }
  }
`;

export default BlogPost;
