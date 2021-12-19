import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"

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
                <Circle>
                    <Count isNumber> {notifications} </Count>
                </Circle>
            ) : (
                <Circle>
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
    notifications: PropTypes.number
}

export default Badge
