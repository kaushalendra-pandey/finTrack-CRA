import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const HeadingWrapper = styled.div`
    margin-top: 2.4rem;
`

const Heading = styled.h1`
    font-size: ${props => props.isMini ? "1rem" : "2rem"};

`
const SubHeading = styled.p`
    margin-top: -6px;
    color: grey;
    font-weight: 700;
`

const SectionTitle = ({heading, subHeading,isMini}) => {
    return (
        <HeadingWrapper>
            {
                isMini ? <Heading isMini> {heading} </Heading> :  <Heading> {heading} </Heading>
            }
            
            <SubHeading> {subHeading} </SubHeading>
        </HeadingWrapper>
    )
}

SectionTitle.defaultProps = {
    isMini: false
}

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    isMini: PropTypes.bool
}

export default SectionTitle



