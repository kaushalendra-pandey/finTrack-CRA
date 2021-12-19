import { render, screen } from '@testing-library/react';
import Activities from "../components/Activities/Activities"


test('for Activities component with heading and subheading', () => {
  render(<Activities/>);
  const headingElement = screen.getByText("Recent Activities");
  expect(headingElement).toBeInTheDocument();

  const subHeadingElement = screen.getByText("02 Mar 2021");
  expect(subHeadingElement).toBeInTheDocument();

  const sideCard = screen.getByText("Electricity Bill")
  expect(sideCard).toBeInTheDocument()

  const sideCards = screen.getAllByTestId("sidecard")
  expect(sideCards).toHaveLength(4)

});


