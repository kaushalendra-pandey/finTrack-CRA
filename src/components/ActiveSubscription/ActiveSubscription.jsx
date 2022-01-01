import React from 'react'
 import styled from "styled-components"
import MainCarousel from '../Carousel/Carousel'


const CardContainer = styled.div`
    display: flex;
`

const ActiveSubscription = ({activeSubscription}) => {

    return (
        <>
            <CardContainer>
                {
                   activeSubscription.length > 0 ? <MainCarousel items={activeSubscription}/> : <h2> No subscription found. </h2>
                }
                
            </CardContainer>
        </>
    )
}

export default ActiveSubscription
