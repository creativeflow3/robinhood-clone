import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Stats from '../components/Stats.tsx';

describe('Render Stats', () => {
  it('generate stats', () => {
    const { getByTestId } = render(<Stats />);
    expect(getByTestId('stats-column')).toBeInTheDocument();
  });
});

describe('Testing UseEffect API calls', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders users when API call succeeds', async () => {});

  it('renders error when API call fails', async () => {});
});
