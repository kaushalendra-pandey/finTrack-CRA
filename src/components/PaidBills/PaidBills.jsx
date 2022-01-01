import React from 'react'
 import styled from "styled-components"
import MainCarousel from '../Carousel/Carousel'

const CardContainer = styled.div`
    display: flex;
`

const PaidBills = ({paidBills}) => {
    return (
        <>
            <CardContainer>
               {paidBills.length > 0 ? <MainCarousel items={paidBills}/> : <h2> No paid bills found. </h2> } 
            </CardContainer>
        </>
    )
}

export default PaidBills
