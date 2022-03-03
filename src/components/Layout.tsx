import React from 'react';
import { Text } from 'evolux-ui-v2';

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: JSX.Element;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div>
      <main>
        <Text type="title" size="lg">
          {title}
        </Text>
        {children}
      </main>
    </div>
  );
};

export default Layout;
