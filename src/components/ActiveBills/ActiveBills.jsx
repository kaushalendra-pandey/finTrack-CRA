import React from 'react'
import { MdAirlineSeatFlat } from 'react-icons/md'
 import styled from "styled-components"
import MainCarousel from '../Carousel/Carousel'

const activeBills = [
    {
        id:0,
        title: "Credit Card",
        date: "12 Nov 2021",
        amount: "1200",
        icon: <MdAirlineSeatFlat size={"3rem"}/>
    },
    {
        id:1,
        title: "Electricity",
        date: "12 Dec 2021",
        amount: "800",
        icon: <MdAirlineSeatFlat size={"3rem"}/>
    },
    {
        id:2,
        title: "Water Bill",
        date: "12 Jan 2021",
        amount: "788",
        icon: <MdAirlineSeatFlat size={"3rem"}/>
    },
    {
        id:3,
        title: "Netflix",
        date: "12 Noc 2021",
        amount: "800",
        icon: <MdAirlineSeatFlat size={"3rem"}/>
    },
    {
        id:4,
        title: "Netflix",
        date: "12 Noc 2021",
        amount: "800",
        icon: <MdAirlineSeatFlat size={"3rem"}/>
    }
]

const CardContainer = styled.div`
    display: flex;
`

const ActiveBills = () => {
    return (
        <>
            <CardContainer>
                <MainCarousel items={activeBills}/>
            </CardContainer>
        </>
    )
}

export default ActiveBills
