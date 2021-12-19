import React from 'react'
import styled from "styled-components"
import {AiOutlineGlobal} from "react-icons/ai"

const Container = styled.div`
    background-image: linear-gradient(to right, #565958 , #201E2A);
    /* background-color: black; */
    border-radius: 24px;
    height: 5rem;
    width: 11rem;
    margin-top: 2.4rem;
    padding: 21px;
    box-shadow: 12px 28px 15px #888888;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
        pointer: cursor;
    }
`

const Wrapper = styled.div`
    
`

const CardNumber = styled.div`
    color: #CCCDCD;
    position: absolute;
    margin-top: 26px;
    font-size: 14px;
    font-weight: 500;
`

const CardHolder = styled.div`
    margin-top: 52px;
    color: #CCCDCD;
    font-weight: 200;
    font-size: xx-small;
    
`
const CardHolderName = styled.div`
    color: #CCCDCD;
    font-size: small;
    
`

const FirstCircle = styled.div`
    background-color: #EA001B;
    border-radius: 50%;
    position: absolute;
    height: 21px;
    width: 21px;
    margin-top: -28px;
    margin-left: 137px;
`

const SecondCircle = styled.div`
    background-color: #F79F19;
    border-radius: 50%;
    position: absolute;
    height: 21px;
    width: 21px;
    margin-top: -28px;
    margin-left: 150px;
`

const MasterCard = styled.div`
    position: absolute;
    margin-left: 128px;
    margin-top: -7px;
    color: #CCCDCD;
    font-size: x-small;
`

const TopLogo = styled.div`
    position: absolute;
    color: #CCCDCD;
   
`

const Mastercard = () => {
    return (
       <Container>
         <TopLogo> <AiOutlineGlobal size={"1rem"}/> </TopLogo>
         <CardNumber> 1234 5678 9011 1213 </CardNumber>
         <CardHolder> Card Holder </CardHolder>
         <CardHolderName> <b>Kaushalendra</b> </CardHolderName>
         <FirstCircle/>
        <SecondCircle/>
        <MasterCard> Mastercard </MasterCard>
       </Container>
    )
}

export default Mastercard
