import { render, screen } from '@testing-library/react';
import App from "../../src/App"

test('for App Component', () => {
    render(<App/>);
    const navIcons = screen.getAllByTestId("sidenav-icon")
    expect(navIcons).toHaveLength(6)

    const cards = screen.getByText("Transfer Other Banks")
    expect(cards).toBeInTheDocument()
    

});


