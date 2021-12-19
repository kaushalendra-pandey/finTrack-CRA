import { render, screen } from '@testing-library/react';
import History from "../components/History/History"


test('for History component with heading and subheading', () => {
  render(<History/>);
  
  const  headingText = screen.getByText("History");
  expect(headingText).toBeInTheDocument();

  const  subHeadingText = screen.getByText("Transactions of last 6 months");
  expect(subHeadingText).toBeInTheDocument();

  const transactions = screen.getAllByTestId("transaction")
  expect(transactions).toHaveLength(3)

});


