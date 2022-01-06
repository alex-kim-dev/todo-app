import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import App from './App';

test('App should render a level 1 heading', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
