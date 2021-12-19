import { render, screen } from '@testing-library/react';
import Searchbar from "../components/Searchbar/Searchbar"


test('for Searchbar component with heading and subheading', () => {
  render(<Searchbar/>);
  const searchIcon = screen.getByTestId("search-icon")
  expect(searchIcon).toBeInTheDocument()

  const searchText = screen.getByPlaceholderText("Search")
  expect(searchText).toBeInTheDocument()
  

});


