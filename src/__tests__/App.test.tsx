import React from 'react';
import { describe, it, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App.tsx';
// import Header from '../Header.tsx';
// const mockHeader = vi.fn();

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

/*
vi.mock('./Header', () => () => 'Header');
vi.mock('./NewsFeed', () => () => 'NewsFeed');
vi.mock('./Stats', () => () => 'Stats');
*/
test('demo', () => {
  expect(true).toBe(true);
});

describe('render', () => {
  it('renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
