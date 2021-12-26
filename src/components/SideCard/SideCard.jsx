import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"
import { numberGreaterThanZero } from '../../Proptypes/greaterThanZero'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

`

const TextWrapper = styled.div`
    display:block;
    margin-left: 1rem;
`

const Task = styled.p`
    margin-bottom: 0;
    font-weight: 700;
    font-size: 15px;
`

const IconContainer = styled.div`
    display: grid;
    align-items: center;
    background-color: white;
    border-radius: 16px;
    width: 41px;
    height: 56px;

    svg {
        padding: 3px;
        padding-bottom: 6px;
        padding-left: 5px;
    }

`

const Status = styled.p`
    margin-top: 0;
    font-weight: 300;
    color: gray;
`

const Cost = styled.div`
    display: grid;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
    
`

const InnerWrapper = styled.div`
    display: flex;
`


const SideCard = ({logo, task, status,cost}) => {
    return (
        <Wrapper data-testid="sidecard">
            <InnerWrapper>
                <IconContainer> 
                    {logo}
                </IconContainer>
                <TextWrapper>
                    <Task> {task} </Task>
                    <Status> {status} </Status>
                </TextWrapper>
            
            </InnerWrapper>
           
           <Cost>
               <p> {cost} </p>
           </Cost>

       </Wrapper>
       
    )
}

SideCard.propTypes = {
    logo: PropTypes.any.isRequired,
    cost: numberGreaterThanZero,
    task: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["Pending","Successful"])
}

export default SideCard
