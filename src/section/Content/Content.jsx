import React from 'react'
import styled from "styled-components"
import Activities from '../../components/Activities/Activities'
import Topnav from '../../components/Topnav/Topnav'
import UpcomingPayments from '../../components/UpcomingPayments/UpcomingPayments'
import Mastercard from '../../components/Mastercard/Mastercard'

const Wrapper = styled.div`
    background-color: #ECECF6;
    width: 30%;
    padding: 2rem;
    margin-left: 2rem;

`

const Content = () => {
    return (
        <Wrapper>
            <Topnav />
            <Mastercard />
            <Activities />
            <UpcomingPayments />
        </Wrapper>
    )
}

export default Content
