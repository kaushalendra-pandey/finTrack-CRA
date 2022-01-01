import React from 'react'
import styled from "styled-components"
import MainCarousel from '../Carousel/Carousel'


const CardContainer = styled.div`
    display: flex;
`

const ActiveBills = ({unpaidBills}) => {
    return (
        <>
            <CardContainer>
                { unpaidBills.length > 0 ? <MainCarousel items={unpaidBills}/> : <h2> No Active Bills found! </h2> } 
            </CardContainer>
        </>
    )
}

export default ActiveBills
