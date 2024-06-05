import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from '../Header.tsx';

describe('render', () => {
  it('renders header', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('test-logo')).toBeInTheDocument();
    expect(getByTestId('test-menu-items')).toBeInTheDocument();
    expect(getByTestId('test-menu-items').children.length).toBe(5);
    expect(getByTestId('test-search')).toBeInTheDocument();
  });
});
