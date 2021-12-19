import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import {MdOutlineMapsHomeWork} from "react-icons/md"
import {AiOutlineCar} from "react-icons/ai"
import SideCard from '../SideCard/SideCard'

const payments = [
    {
        id: 1,
        logo:<AiOutlineCar size={"2rem"}/>,
        cost:"$120",
        status:"Pending",
        task:"Car Insurance"
    },
    {
        id: 2,
        logo:<MdOutlineMapsHomeWork size={"2rem"}/>,
        cost:"$4500",
        status:"Pending",
        task:"Home Rent"
    }
]


const UpcomingPayments = () => {
    return (
        <div>
            <SectionTitle 
            heading={"Upcoming Payments"} 
            subHeading={"13 Mar 2021"} 
            isMini={true}
            />
            {
                payments.map(item => (
                    <SideCard 
                    key={item.id} 
                    logo={item.logo} 
                    cost={item.cost} 
                    status={item.status} 
                    task={item.task}
                    />
                ))
            }
           
            
        </div>
    )
}

export default UpcomingPayments
