import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import OpenModal from '../OpenModal/OpenModal'
import styled from "styled-components"
import {ModalImg2} from "../../assets"
import LendAndBorrowModalContent from '../ModalContents/LendAndBorrowModalContent'
import RequestMoney from '../ModalContents/RequestMoney'

const Container = styled.div`
    width: 100%;
    margin: 2rem;
`

const LendAndBorrow = () => {
    return (
        <>
            <Container>
                <SectionTitle heading="Lend and Borrow" subHeading="Add your status here"/>
                <OpenModal img={ModalImg2} Content={<LendAndBorrowModalContent/>}/>
                <SectionTitle heading="Ask for Money" subHeading="Send a mail."/>
                <OpenModal img={ModalImg2} Content={<RequestMoney/>}/>
            </Container>
            
        </>
        
     )
}

export default LendAndBorrow
