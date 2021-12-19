import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"

const CardContainer = styled.div`
    height: 12rem;
    width: 12rem;
    background-color: white;
    border-radius:10px;
    margin: 10px;
    transition: transform 0.2s;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

`
const Wrapper = styled.div`
    margin: 1rem;
    
`

const Icon = styled.div`
    

`

const Description = styled.p`
    font-weight: 700;
    color: #9BA3AF

`
const Price = styled.h3`
    font-weight: 800;

`

const Card = ({logo, text, price}) => {
    return (
       <CardContainer>
           <Wrapper>

            <Icon>
                    {logo}
                </Icon>
                <Description>
                    {text}
                </Description>
                <Price>
                    {price}
                </Price>

           </Wrapper>
           
       </CardContainer>
    )
}

Card.propTypes = {
    logo: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired

}

export default Card
