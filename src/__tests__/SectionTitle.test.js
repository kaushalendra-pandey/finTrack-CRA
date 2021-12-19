import { render, screen } from '@testing-library/react';
import SectionTitle from "../components/SectionTitle/SectionTitle"


test('for SectionTitle component with isMini as false', () => {
    render(<SectionTitle heading={"Heading"} subHeading={"Subheading"} isMini={false} />);
    const heading = screen.getByText("Heading")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle("font-size:2rem")

    const subHeading = screen.getByText("Subheading")
    expect(subHeading).toBeInTheDocument()
    expect(subHeading).toHaveStyle("font-weight: 700")

});


test('for SectionTitle component with isMini as true', () => {
    render(<SectionTitle heading={"Heading"} subHeading={"Subheading"} isMini={true} />);
    const heading = screen.getByText("Heading")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle("font-size:1rem")

    const subHeading = screen.getByText("Subheading")
    expect(subHeading).toBeInTheDocument()
    expect(subHeading).toHaveStyle("font-weight: 700")

});


