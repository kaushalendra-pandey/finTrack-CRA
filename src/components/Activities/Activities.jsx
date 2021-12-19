import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import {BsDroplet, BsWallet} from "react-icons/bs"
import {AiOutlineThunderbolt,AiOutlineWifi} from "react-icons/ai"
import SideCard from '../SideCard/SideCard'

const activity = [
    {
        id: 1,
        logo:<BsDroplet size={"2rem"}/>,
        cost:"$120",
        status:"Successful",
        task:"Water Bill"
    },
    {
        id: 2,
        logo:<BsWallet size={"2rem"}/>,
        cost:"$4500",
        status:"Successful",
        task:"Income Salary"
    },
    {
        id: 3,
        logo:<AiOutlineThunderbolt size={"2rem"}/>,
        cost:"$150",
        status:"Successful",
        task:"Electricity Bill"
    },
    {
        id: 4,
        logo:<AiOutlineWifi size={"2rem"}/>,
        cost:"$60",
        status:"Successful",
        task:"Internet Bill"
    }
]


const Activites = () => {
    return (
        <div>
            <SectionTitle 
            heading={"Recent Activities"} 
            subHeading={"02 Mar 2021"} 
            isMini={true}
            />
            {
                activity.map(item => (
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

export default Activites
