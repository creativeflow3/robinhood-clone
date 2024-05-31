import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App.tsx';
import React from 'react';

test('should have hello world', () => {
  render(<App />);
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeDefined();
});
