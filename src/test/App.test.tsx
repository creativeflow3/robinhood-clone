import { render, screen } from '@testing-library/react';
import App from '../App.tsx';

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};

it('should have hello world', () => {
  render(<App />);
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeDefined();
});
