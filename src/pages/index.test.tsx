import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from './index';

describe('Index page', () => {
  it('Should render the page', () => {
    render(<IndexPage />);
    expect(screen.getByText('Evolux Blog')).toBeVisible();
    expect(screen.getByText('Work in progress')).toBeVisible();
  });
});
