import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`

const HeadingWrapper = styled.div`
    display: block;
`

const Heading = styled.div`
    h1{
        font-size: 2rem;
        font-weight: 800;
        margin-top: -21px;
        color: #262626
    }
`

const Subheading = styled.div`
    h3 {
        color:#aeb3b3;
        font-weight: 200;
    }
`

const Sidetext = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    color:#aeb3b3;  
`

const ChartHeading = () => {
    return (
        <Wrapper>
            <HeadingWrapper>
                <Subheading>
                    <h3> Balance </h3>
                </Subheading>
                <Heading>
                    <h1> $1500 </h1>
                </Heading>
                
            </HeadingWrapper>
            <Sidetext>
                PAST 30 DAYS
            </Sidetext>
        </Wrapper>
    )
}

export default ChartHeading
