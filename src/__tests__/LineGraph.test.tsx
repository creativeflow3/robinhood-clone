import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import LineGraph from '../components/LineGraph.tsx';

// tests will error out because chart.js has a built in ResizeObserver.
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('Render Line Graph', () => {
  it('generate line graph', () => {
    const { getByTestId } = render(<LineGraph />);
    expect(getByTestId('test-graph')).toBeInTheDocument();
  });
});
