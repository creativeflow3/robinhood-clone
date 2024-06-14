import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StatsRow from '../components/StatsRow.tsx';

describe('Render StatsRow', () => {
  it('generate stats row', () => {
    const { getByTestId } = render(<StatsRow />);
    expect(getByTestId('stats-row')).toBeInTheDocument();
  });
});
