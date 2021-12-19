import React from 'react'
import styled from "styled-components"
import ProfileImage from '../ProfileImage/ProfileImage'
import PropTypes from "prop-types"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #9BA3AF;
    font-weight: 500;
    margin-top: 1rem;
    transition: transform 0.4s;
    border-radius: 1rem;

    &:hover{
        transform: scale(1.1);
        background-color: white;
        padding: 0.5rem;
    }

`

const Detail = styled.div`
    min-width: 7rem;
`

const Amount = styled.div`
    
`

const Status = styled.div`
    
`

const Time = styled.div`
    
`

const Transaction = ({imgSrc,detail,time,amount,status}) => {
    return (
        <Wrapper data-testid="transaction">
            <ProfileImage imgSrc={imgSrc} alt="profile"/>
            <Detail>
                {detail}
            </Detail>
            <Time>
                {time}
            </Time>
            <Amount>
                {amount}
            </Amount>
            <Status>
                {status}
            </Status>

        </Wrapper>
    )
}

Transaction.defaultProps = {
    imgSrc:"https://res.cloudinary.com/test-cloud-by-kaush/image/upload/v1616668958/samples/people/kitchen-bar.jpg"
}

Transaction.propTypes = {
    imgSrc: PropTypes.string,
    detail: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}

export default Transaction
