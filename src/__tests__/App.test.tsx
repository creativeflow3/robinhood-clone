import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App.tsx';

// tests will error out because chart.js has a built in ResizeObserver.
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('render', () => {
  it('renders the main page', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
