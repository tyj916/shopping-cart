import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App component', () => {
  it('renders hello world', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('renders success after button click', async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole('button', {name: 'Test Button'});

    await user.click(button);

    expect(screen.getByRole('heading').textContent).toMatch(/success/i);
  });
});