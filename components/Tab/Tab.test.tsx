import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Tab from './Tab';

test('renders a heading', async () => {
  render(<Tab />);
  const tab = screen.getByRole('tab');
  console.log(tab);
  // expect().toBeDefined()
});
