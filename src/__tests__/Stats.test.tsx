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
