import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AddToCart from "../components/AddToCart";
import userEvent from "@testing-library/user-event";

describe('Add to cart component', () => {
  it('renders add to cart button with number control', () => {
    const { container } = render(<AddToCart />);
    expect(container).toMatchSnapshot();
  });

  it('renders value 2 after add button is clicked', async () => {
    const user = userEvent.setup();

    render(<AddToCart />);
    const button = screen.getByRole('button', { name: '+' });

    await user.click(button);

    expect(+screen.getByLabelText('quantity').value).toBe(2);
  });

  it('should minus 1 quantity after minus button is clicked', async () => {
    const user = userEvent.setup();

    render(<AddToCart />);
    const addButton = screen.getByRole('button', { name: '+' });
    const minusButton = screen.getByRole('button', { name: '-' });
    const input = screen.getByLabelText('quantity');

    await user.click(addButton);
    await user.click(minusButton);

    expect(+input.value).toBe(1);
  });

  it('should not lower than 1', async () => {
    const user = userEvent.setup();

    render(<AddToCart />);
    const minusButton = screen.getByRole('button', { name: '-' });
    const input = screen.getByLabelText('quantity');

    await user.click(minusButton);

    expect(+input.value).toBe(1);
  });
});