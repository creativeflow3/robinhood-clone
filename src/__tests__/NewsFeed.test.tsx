import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import NewsFeed from '../components/NewsFeed.tsx';

describe('Render NewsFeed', () => {
  it('generate newsfeed', () => {
    const { getByTestId } = render(<NewsFeed />);
    expect(getByTestId('test-newsfeed')).toBeInTheDocument();
  });
});
