import { render, screen, fireEvent } from '@testing-library/react';
import Topnav from "../components/Topnav/Topnav"
import {AiOutlineCar} from "react-icons/ai"

test('for Topnav component task, status and cost rendering', () => {
    render(<Topnav logo={<AiOutlineCar/>} task={"This is the task"} status={"status"} cost={"$1200"} />);
   
    const icons = screen.getAllByTestId("icon")
    expect(icons).toHaveLength(3)

    const badge = screen.getByTestId("badge")
    expect(badge).toBeInTheDocument()

});




