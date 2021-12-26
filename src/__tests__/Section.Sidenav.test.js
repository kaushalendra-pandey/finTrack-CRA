import { render, screen } from '@testing-library/react';
import Sidenav from "../section/Sidenav"

test('for all icons should be present in the sidebar', async () => {
    render(<Sidenav/>);
    const icons = screen.getAllByTestId("sidenav-icon")
    expect(icons).toHaveLength(6)    

});


