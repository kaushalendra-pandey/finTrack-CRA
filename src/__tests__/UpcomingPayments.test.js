import { render, screen } from '@testing-library/react';
import UpcomingPayments from "../components/UpcomingPayments/UpcomingPayments"

test('for UpcomingPayments component task, status and cost rendering', () => {
    render(<UpcomingPayments />);
    
    const heading = screen.getByText("Upcoming Payments")
    expect(heading).toBeInTheDocument()

    const subHeading = screen.getByText("13 Mar 2021")
    expect(subHeading).toBeInTheDocument()

    const cards = screen.getAllByTestId("sidecard")
    expect(cards).toHaveLength(2)

});


