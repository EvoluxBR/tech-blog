import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export type MDXNode = {
  frontmatter: {
    title: string;
    date: string;
  };
  id: string;
  body: string;
  slug: string;
};

export type PostProps = {
  post: MDXNode;
};

const Post = ({ post }: PostProps) => {
  return (
    <article key={post.id}>
      <Link to={'/'}>
        <h2> Back to index </h2>
      </Link>
      <Link to={`/blog/${post.slug}`}>
        <h2>{post.frontmatter.title}</h2>
      </Link>
      <p>Posted: {post.frontmatter.date}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
  );
};

export default Post;
