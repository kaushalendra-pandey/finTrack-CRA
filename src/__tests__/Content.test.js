import { render, screen } from '@testing-library/react';
import Content from "../../src/section/Content"

test('for App Component', () => {
    render(<Content/>);
    const mastercard = screen.getByText("Mastercard")
    expect(mastercard).toBeInTheDocument()

    const recentActivities = screen.getByText("Recent Activities")
    expect(recentActivities).toBeInTheDocument()

    const upcomingPayments = screen.getByText("Upcoming Payments")
    expect(upcomingPayments).toBeInTheDocument()
    

});


