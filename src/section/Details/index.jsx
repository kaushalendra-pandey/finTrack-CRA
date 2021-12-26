import React from 'react'
import Card from '../../components/Card/Card'
import styled from "styled-components"
import {BsCardHeading,BsBank} from "react-icons/bs"
import {BiTransfer} from "react-icons/bi"
import {CgNotes} from "react-icons/cg"
import Header from '../../components/Header/Header'
import History from '../../components/History/History'
import Chart from '../../components/Chart/Chart'

const card = [
    {
        logo: <BsCardHeading size={"3rem"}/>,
        text: 'Transfer Via Card Number',
        price: "$1200",
        id:1
    },
    {
        logo: <BsBank size={"3rem"}/>,
        text: 'Transfer Other Banks',
        price: "$1500",
        id:2
    },
    {
        logo: <BiTransfer size={"3rem"}/>,
        text: 'Transfer to Other Bank',
        price: "$150",
        id:3
    },
    {
        logo: <CgNotes size={"3rem"}/>,
        text: 'Transfer Same Banks',
        price: "$120",
        id:4
    }
]
const Wrapper = styled.div`
    display: block;
    margin-left: 2rem;

`

const CardContainer = styled.div`
    display: flex
`

const Detail = () => {
    return (
        <Wrapper>
            <Header/>
            <CardContainer>
                {
                    card.map((item) => (
                        <Card 
                        logo={item.logo} 
                        text={item.text} 
                        price={item.price} 
                        key={item.id}
                        />
                    ))
                }
            </CardContainer>
            <Chart/>
            <History/>
        </Wrapper>
       
    )
}

export default Detail
