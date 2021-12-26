import { render, screen } from '@testing-library/react';
import SideCard from "../components/SideCard/SideCard"
import {AiOutlineCar} from "react-icons/ai"

test('for SideCard component task, status and cost rendering', () => {
    render(<SideCard logo={<AiOutlineCar/>} task={"This is the task"} status={"Pending"} cost={"$1200"} />);
    const task = screen.getByText("This is the task")
    expect(task).toBeInTheDocument()

    const status = screen.getByText("Pending")
    expect(status).toBeInTheDocument()

    const cost = screen.getByText("$1200")
    expect(cost).toBeInTheDocument()


});

test('for SideCard component render', () => {
    render(<SideCard logo={<AiOutlineCar/>} task={"This is the task"} status={"status"} cost={"$1200"} />);
    const SidecardComponent = screen.getByTestId("sidecard")
    expect(SidecardComponent).toBeInTheDocument()


});


