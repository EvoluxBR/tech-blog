import React from 'react';
import styled from 'styled-components';
import Loadable from '@loadable/component';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const Text = Loadable(() => import('evolux-ui-v2'), {
  resolveComponent: (components) => components.Text,
});

const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

const PostHeader = styled.header`
  margin-bottom: 40px;
`;

const PostTitle = styled(Link)`
  && {
    .ev2-text--title {
      font-size: calc(1.5rem + 1vw);
    }
    text-decoration: none;
  }
`;

const CaptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CaptionsLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const CaptionsRightSide = styled.div`
  display: flex;
  text-align: right;
  flex-direction: column;
`;

const AuthorName = styled(Text)`
  && {
    flex-grow: 1;
  }
`;

const TimeToRead = styled(Text)`
  && {
    text-align: right;
  }
`;

const PostFooter = styled.footer`
  margin-top: 40px;
`;

type MDXPostExcerpt = {
  frontmatter: {
    date: string;
    title: string;
    author: string;
    authorEmail?: string;
  };
  id: string;
  excerpt: string;
  timeToRead: number;
  slug: string;
};

type IndexProps = {
  data: {
    allMdx: {
      nodes: MDXPostExcerpt[];
    };
  };
};

const IndexPage = ({ data }: IndexProps) => {
  return (
    <Layout title="Blog Posts" index>
      {data.allMdx.nodes.map((post) => (
        <PostWrapper key={post.id}>
          <PostHeader>
            <PostTitle to={`/blog/${post.slug}`}>
              <Text type="title" transparent>
                {post.frontmatter.title}
              </Text>
            </PostTitle>

            <CaptionsWrapper>
              <CaptionsLeftSide>
                <AuthorName type="body" transparent>
                  {post.frontmatter.author}
                </AuthorName>
                {post.frontmatter.authorEmail && (
                  <Text type="body" transparent>
                    {post.frontmatter.authorEmail}
                  </Text>
                )}
              </CaptionsLeftSide>

              <CaptionsRightSide>
                <TimeToRead type="body" transparent>
                  Time to read: {post.timeToRead} min
                </TimeToRead>
                <Text type="body" transparent>
                  {post.frontmatter.date}
                </Text>
              </CaptionsRightSide>
            </CaptionsWrapper>
          </PostHeader>

          <Text type="body">{post.excerpt}</Text>

          <PostFooter>
            <Link to={`/blog/${post.slug}`}>
              <Text type="link" as="span">
                Read more
              </Text>
            </Link>
          </PostFooter>
        </PostWrapper>
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
          author
          authorEmail
        }
        id
        excerpt
        timeToRead
        slug
      }
    }
  }
`;

export default IndexPage;
