import { render, screen } from '@testing-library/react';
import Badge from "../components/Badge/Badge"

test('for Badge component with notifications', () => {
  render(<Badge notifications={2} />);
  const linkElement = screen.getByText("2");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveStyle("color: white") 
});

test('for Badge component with no notification', () => {
    render(<Badge notifications={0} />);
    const linkElement = screen.getByText(0); 
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle("color: red")
  });


