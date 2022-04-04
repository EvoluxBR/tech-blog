import React from 'react';
import 'evolux-ui-v2/dist/main.css';
import Loadable from '@loadable/component';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Post, { MDXNode } from '../components/post';

type IndexProps = {
  data: {
    allMdx: {
      nodes: MDXNode[];
    };
  };
};

const Text = Loadable(() => import('evolux-ui-v2'), {
  resolveComponent: (components) => components.Text,
});

const IndexPage = ({ data }: IndexProps) => {
  return (
    <Layout title="Evolux Blog">
      {data.allMdx.nodes.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`;

export default IndexPage;
