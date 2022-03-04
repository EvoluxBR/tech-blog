import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

describe('Layout component', () => {
  it('Should render the component', async () => {
    render(<Layout title="title"> Something </Layout>);
    expect(await screen.findByText('title')).toBeVisible();
    expect(screen.getByText('Something')).toBeVisible();
  });
});
