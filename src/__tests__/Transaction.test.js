import { render, screen } from '@testing-library/react';
import Transaction from "../components/Transaction/Transaction"

test('for Transaction component task, status and cost rendering', () => {
    render(<Transaction imgSrc={""} detail={"detail"} time={"time"} amount={"$1200"} status={"status"}/>);
    
    const detail = screen.getByText("detail")
    expect(detail).toBeInTheDocument()

    const status = screen.getByText("status")
    expect(status).toBeInTheDocument()

    const amount = screen.getByText("$1200")
    expect(amount).toBeInTheDocument()

    const altText = screen.getByAltText("profile")
    expect(altText).toBeInTheDocument()

});


