import React from 'react'
import styled from "styled-components"
import SectionTitle from '../SectionTitle/SectionTitle'
import ActiveBills from '../ActiveBills/ActiveBills'
import PaidBills from '../PaidBills/PaidBills'
import OpenModal from '../OpenModal/OpenModal'
import { ModalImg4 } from '../../assets'
import PayBill from '../ModalContents/PayBill'

const Container = styled.div`
    width: 100%;
    margin: 2rem;
`

const Bills = () => {
    return (
        <Container>
            <SectionTitle heading="Active Bills" subHeading='Your remaining Bills'/>
            <ActiveBills/>
            <SectionTitle heading="Paid Bills" subHeading='Bills you have paid'/>
            <PaidBills/>
            <SectionTitle heading="Pay your Bill" subHeading='Pay your bill'/>
            <OpenModal img={ModalImg4} Content={<PayBill/>}/>
            
        </Container>
    )
}

export default Bills
