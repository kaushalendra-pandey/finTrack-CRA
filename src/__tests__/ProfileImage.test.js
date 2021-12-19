import { render, screen } from '@testing-library/react';
import ProfileImage from "../components/ProfileImage/ProfileImage"


test('for ProfileImage component with heading and subheading', () => {
  render(<ProfileImage/>);
  const profileImg = screen.getByAltText("profile")
  expect(profileImg).toBeInTheDocument()
  expect(profileImg).toHaveStyle("border-radius:50%")

});


