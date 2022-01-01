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
                <MainCarousel items={unpaidBills}/>
            </CardContainer>
        </>
    )
}

export default ActiveBills
