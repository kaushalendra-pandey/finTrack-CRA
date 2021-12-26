import React from 'react'
import { MdAirlineSeatFlat } from 'react-icons/md'
 import styled from "styled-components"
import MainCarousel from '../Carousel/Carousel'

const activeSubscription = [
    {
        id:0,
        title: "Netflix",
        date: "12 Nov 2021",
        amount: "800",
        icon: <MdAirlineSeatFlat size={"3rem"}/>
    },
    {
        id:1,
        title: "Netflix",
        date: "12 Noc 2021",
        amount: "800",
        icon: <MdAirlineSeatFlat size={"3rem"}/>
    },
    {
        id:2,
        title: "Netflix",
        date: "12 Noc 2021",
        amount: "800",
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

const ActiveSubscription = () => {
    return (
        <>
            <CardContainer>
                <MainCarousel items={activeSubscription}/>
            </CardContainer>
        </>
    )
}

export default ActiveSubscription
