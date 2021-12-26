import React from 'react'
import styled from "styled-components"
import { numberGreaterThanZero } from '../../Proptypes/greaterThanZero'

const Circle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: red;
    position:absolute;
    text-align: center
`

const Count = styled.div`
    color: ${props => props.isNumber ? 'white' : "red"}
`

const Badge = ({notifications}) => {
    return (
        <>
        {
            notifications > 0 ? (
                <Circle data-testid="badge">
                    <Count isNumber> {notifications} </Count>
                </Circle>
            ) : (
                <Circle data-testid="badge">
                    <Count> {notifications} </Count>
                </Circle>
            )

        }
        </>
        
    )
}

Badge.defaultProps = {
    notifications: 0
}

Badge.propTypes = {
    notifications: numberGreaterThanZero
}

export default Badge
