import React,{useState, useEffect} from 'react'
import styled from "styled-components"
import SectionTitle from '../SectionTitle/SectionTitle'
import ActiveBills from '../ActiveBills/ActiveBills'
import PaidBills from '../PaidBills/PaidBills'
import OpenModal from '../OpenModal/OpenModal'
import { ModalImg4 } from '../../assets'
import PayBill from '../ModalContents/PayBill'
import getPaidBills from '../../APIs/bill/getPaidBill'
import getUnpaidBills from '../../APIs/bill/getUnpaidBill'

const Container = styled.div`
    width: 100%;
    margin: 2rem;
`

const Bills = () => {

    const [paidBills, setPaidBills] = useState([])
    const [unpaidBills, setUnpaidBills] = useState([])

    const fetchPaidBills = async () => {
        try {
            const data = await getPaidBills(`${process.env.REACT_APP_BASE_URL}/bill/paid`)
            setPaidBills(data)
            
        } catch (error) {
            console.log(error)
        }
      
    }

    const fetchUnpaidBills = async () => {
        try {
            const data = await getUnpaidBills(`${process.env.REACT_APP_BASE_URL}/bill/unpaid`)
            setUnpaidBills(data)
            
        } catch (error) {
            console.log(error)
        }
      
    }

    useEffect(() => {
        fetchPaidBills()
        fetchUnpaidBills()
    
    },[])


    return (
        <Container>
            <SectionTitle heading="Active Bills" subHeading='Your remaining Bills'/>
            <ActiveBills unpaidBills={unpaidBills}/>
            <SectionTitle heading="Paid Bills" subHeading='Bills you have paid'/>
            <PaidBills paidBills={paidBills}/>
            <SectionTitle heading="Pay your Bill" subHeading='Pay your bill'/>
            <OpenModal img={ModalImg4} Content={<PayBill fetchUnpaidBills={fetchUnpaidBills}/>}/>
            
        </Container>
    )
}

export default Bills
