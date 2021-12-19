import { render, screen } from '@testing-library/react';
import Card from "../components/Card/Card"
import {AiOutlineCar} from "react-icons/ai"

test('for Card component with proper props rendering', () => {
  render(<Card logo={<AiOutlineCar/>} text={"This is test text"} price={"$1200"} />);
  const priceElement = screen.getByText("$1200");
  expect(priceElement).toBeInTheDocument();
  const textElement = screen.getByText("This is test text");
  expect(textElement).toBeInTheDocument();
  const logoElement = screen.getByTestId("logo");
  expect(logoElement).toBeInTheDocument()

});




