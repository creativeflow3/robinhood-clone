import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import StatsRow from '../components/StatsRow.tsx';

describe('Render StatsRow, top portion', () => {
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
  it('test items in the row', () => {
    render(<StatsRow {...testData} />);

    expect(screen.getByText(testData.name)).toBeInTheDocument();
    expect(screen.getByText(`${testData.volume} shares`)).toBeInTheDocument();
  });

  it('test row click and volume increment', async () => {
    global.fetch = vi.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
      })
    );
    const { getByTestId } = render(<StatsRow {...testData} />);

    userEvent.click(getByTestId('stats-row'));

    expect(screen.getByText('shares', { exact: false })).toBeInTheDocument();
  });
});
