import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import TimeLine from '../components/TimeLine.tsx';

describe('Render StatsRow', () => {
  it('generate stats row', () => {
    const { container } = render(<TimeLine />);
    expect(container).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('timeline__container');
    expect(container.firstChild.firstChild).toHaveClass(
      'timeline__buttons__container'
    );
    expect(container.firstChild.firstChild.children.length).toBe(6);
  });
});
