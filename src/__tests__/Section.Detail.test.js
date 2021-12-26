import { render, screen } from '@testing-library/react';
import Detail from "../section/Details"

test('for all cards should be present in the detail section', async () => {
    render(<Detail/>);
    const cards = screen.getAllByTestId("main-detail-card")
    expect(cards).toHaveLength(4)    

});

test('for information being rendered in the card', async () => {
    render(<Detail/>);
    const text = screen.getByText("Transfer to Other Bank")
    expect(text).toBeInTheDocument()    

});


