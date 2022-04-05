import React from 'react';
import { Link } from 'gatsby';
import Loadable from '@loadable/component';
import 'evolux-ui-v2/dist/main.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
    font-size: 16px;
  }

  body {
    margin: 0;
    height: 100vh;
  }

  .gatsby-highlight {
    overflow: auto;
    max-width: 80vw;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0.75em;
    padding-left: 2.8em;
  }

  .gatsby-highlight .line-numbers-rows {
    padding: 0.75em;
  }

  .gatsby-highlight .line-numbers-rows > span:before {
    padding: 0;
  }
`;

const Text = Loadable(() => import('evolux-ui-v2'), {
  resolveComponent: (components) => components.Text,
});

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 50%);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const IndexLink = styled(Link)<{ $isVisible: boolean }>`
  && {
    .ev2-text--body {
      font-size: calc(0.4rem + 1vw);

      @media (min-width: 1366px) {
        font-size: calc(0.1rem + 0.75vw);
      }
    }

    visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
  }
`;

const BlogTitle = styled(Text)`
  && {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: calc(0.75rem + 1vw);
  }
`;

const Main = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Title = styled(Text)`
  && {
    font-size: 2em !important;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 20px;
  margin-top: 20px;
`;

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  index?: boolean;
  children: React.ReactNode;
};

const Layout = ({ title, index = false, children }: LayoutProps) => {
  return (
    <BlogWrapper>
      <GlobalStyle />
      <Nav>
        <IndexLink to={'/'} $isVisible={!index}>
          <Text type="body" bold>
            Back to index
          </Text>
        </IndexLink>
        <BlogTitle type="title" transparent>
          Evolux Tech Blog
        </BlogTitle>
      </Nav>

      <Main>
        <Title type="title" size="lg" transparent>
          {title}
        </Title>
        {children}
      </Main>
      <Footer>
        <Text type="body" size="lg" color="white" transparent bold>
          Made By Evolux Sistemas
        </Text>
      </Footer>
    </BlogWrapper>
  );
};

export default Layout;
