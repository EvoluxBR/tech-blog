import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

describe('Layout component', () => {
  it('Should render the component', () => {
    render(<Layout title="title"> Something </Layout>);
    expect(screen.getByText('title')).toBeVisible();
    expect(screen.getByText('Something')).toBeVisible();
  });
});
