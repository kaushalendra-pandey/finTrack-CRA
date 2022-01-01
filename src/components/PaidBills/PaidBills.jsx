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
                <MainCarousel items={paidBills}/>
            </CardContainer>
        </>
    )
}

export default PaidBills
