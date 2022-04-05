import React from 'react';
import styled from 'styled-components';
import Loadable from '@loadable/component';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextProps } from 'evolux-ui-v2';

import Layout from '../../components/layout';

const Text = Loadable(() => import('evolux-ui-v2'), {
  resolveComponent: (components) => components.Text,
});

const Header = styled.header`
  margin-bottom: 20px;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroCaptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px;
  margin-bottom: 80px;
`;

const MDXParagraph = styled(Text)<TextProps>`
  && {
    font-size: 16px;
  }
`;

const MDXH2 = styled(Text)<TextProps>`
  && {
    margin-top: 30px;
    font-size: 18px;
  }
`;

const MDXH3 = styled(Text)<TextProps>`
  && {
    margin-top: 30px;
    font-size: 16px;
  }
`;

const Anchor = styled.a`
  color: #0096a9;
  font-size: 16px;
`;

const mdxComponents = {
  p: (props: TextProps) => <MDXParagraph {...props} as="p" />,
  h1: (props: TextProps) => <Text type="title" size="lg" {...props} />,
  h2: (props: TextProps) => <MDXH2 type="title" as="h2" {...props} />,
  h3: (props: TextProps) => <MDXH3 type="title" as="h3" bold {...props} />,
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Anchor target="_blank" rel="noopener noreferrer" {...props} />
  ),
};

type BlogPostProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        author: string;
        authorEmail?: string;
        authorUrl?: string;
        heroImageAlt?: string;
        heroImageCreditLink?: string;
        heroImageCreditText?: string;
        heroImage?: any;
      };
      id: string;
      body: string;
      slug: string;
    };
  };
};

const BlogPost = ({ data }: BlogPostProps) => {
  const post = data.mdx;
  const hasAuthorUrl = post.frontmatter.authorUrl;
  const hasAuthorEmail = post.frontmatter.authorEmail;
  const heroImage = post.frontmatter.heroImage
    ? getImage(post.frontmatter.heroImage)
    : null;

  return (
    <Layout title={post.frontmatter.title}>
      <article>
        <Header>
          <Text type="title" size="md">
            Posted: {post.frontmatter.date}
          </Text>
          <Text type="title" size="md" as="span">
            Author:{'  '}
          </Text>
          <Text
            type={hasAuthorUrl ? 'link' : 'title'}
            href={hasAuthorUrl && post.frontmatter.authorUrl}
            target={hasAuthorUrl && '_blank'}
            rel={hasAuthorUrl && 'noopener noreferrer'}
            size="md"
            bold
          >
            {post.frontmatter.author}
          </Text>
          {hasAuthorEmail && (
            <Text type="title" size="md" as="span">
              {' '}
              ({post.frontmatter.authorEmail})
            </Text>
          )}
        </Header>

        {heroImage && (
          <HeroWrapper>
            <GatsbyImage
              image={heroImage}
              alt={post.frontmatter.heroImageAlt as string}
            />
            <HeroCaptionsWrapper>
              <Text type="body" as="span">
                Image credits:
              </Text>
              <Text
                type="link"
                href={post.frontmatter.heroImageCreditLink}
                target="_blank"
              >
                {post.frontmatter.heroImageCreditText}
              </Text>
            </HeroCaptionsWrapper>
          </HeroWrapper>
        )}
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
        author
        authorEmail
        authorUrl
        heroImageAlt
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        heroImageCreditLink
        heroImageCreditText
      }
      id
      body
      slug
    }
  }
`;

export default BlogPost;
