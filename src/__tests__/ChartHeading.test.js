import { render, screen } from '@testing-library/react';
import ChartHeading from "../components/ChartHeading/ChartHeading"


test('for ChartHeading component with heading and subheading', () => {
  render(<ChartHeading/>);
  const headingElement = screen.getByText("$1500");
  expect(headingElement).toBeInTheDocument();

  const subHeadingElement = screen.getByText("PAST 30 DAYS");
  expect(subHeadingElement).toBeInTheDocument();

  const sideText = screen.getByText("Balance")
  expect(sideText).toBeInTheDocument()

});


