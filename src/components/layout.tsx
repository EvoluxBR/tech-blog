import React from 'react';
import Loadable from '@loadable/component';
import 'evolux-ui-v2/dist/main.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: React.ReactNode;
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  && {
    font-size: 48px;
  }
`;

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Title type="title" size="lg" transparent>
          {title}
        </Title>
        {children}
      </Main>
    </>
  );
};

export default Layout;
