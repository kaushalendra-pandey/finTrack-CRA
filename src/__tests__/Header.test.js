import { render, screen } from '@testing-library/react';
import Header from "../components/Header/Header"


test('for Header component with heading and subheading', () => {
  render(<Header/>);
  
  const  searchPlaceholder = screen.getByPlaceholderText("Search");
  expect(searchPlaceholder).toBeInTheDocument();
  
  const  headingText = screen.getByText("Dashboard");
  expect(headingText).toBeInTheDocument();

  const  subHeadingText = screen.getByText("Payment Updates");
  expect(subHeadingText).toBeInTheDocument();



});


