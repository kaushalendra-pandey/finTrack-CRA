import React from 'react'
import styled from "styled-components"
import SectionTitle from '../SectionTitle/SectionTitle'
import ActiveSubscription from '../ActiveSubscription/ActiveSubscription'
import OpenModal from '../OpenModal/OpenModal'
import { ModalImg2, ModalImg3 } from '../../assets'
import RequestMoney from '../ModalContents/RequestMoney'
import NewSubscription from '../ModalContents/NewSubscription'

const Container = styled.div`
    width: 100%;
    margin: 2rem;
`

const Subscription = () => {
    return (
        <Container>
            <SectionTitle heading="Subscriptions" subHeading='Your active subscriptions'/>
            <ActiveSubscription/>
            <SectionTitle heading='New Subscription' subHeading='Add new Subscription'/>
            <OpenModal img={ModalImg3} Content={<NewSubscription/>}/>
        </Container>
    )
}

export default Subscription
