import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Header from './Header';

test('renders a heading', async () => {
  render(<Header />);
  const heading = screen.getByRole('heading');
  // expect().toBeDefined()
});
