import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import StatsRow from '../components/StatsRow.tsx';

describe('Render StatsRow', () => {
  const testData = {
    name: 'AAPL',
    openPrice: 213.81,
    price: 212.49,
    volume: 22,
  };
  it('generate stats row', () => {
    const { getByTestId } = render(<StatsRow {...testData} />);
    expect(getByTestId('stats-row')).toBeInTheDocument();
  });
  it('test click on stats row', () => {
    const buyStockSpy = vi.fn();
    const { getByTestId } = render(
      <StatsRow {...testData} onClick={buyStockSpy} />
    );
    fireEvent.click(getByTestId('stats-row'));
    expect(buyStockSpy).toHaveBeenCalled();
  });
});
