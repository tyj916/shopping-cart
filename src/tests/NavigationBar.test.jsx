import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import NavigationBar from '../components/NavigationBar';

describe("Navigation bar component", () => {
  it("renders navigation bar", () => {
    const { container } = render(<NavigationBar />);
    expect(container).toMatchSnapshot();
  });
});