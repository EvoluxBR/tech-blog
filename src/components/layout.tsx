import React from 'react';
import Loadable from '@loadable/component';

const Text = Loadable(() => import('evolux-ui-v2'), {
  resolveComponent: (components) => components.Text,
});

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: React.ReactNode;
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
