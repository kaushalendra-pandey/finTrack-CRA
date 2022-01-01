import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import SectionTitle from '../SectionTitle/SectionTitle'
import ActiveSubscription from '../ActiveSubscription/ActiveSubscription'
import OpenModal from '../OpenModal/OpenModal'
import { ModalImg3 } from '../../assets'
import NewSubscription from '../ModalContents/NewSubscription'
import getSubscription from '../../APIs/subscription/getSubscripiton'

const Container = styled.div`
    width: 100%;
    margin: 2rem;
`

const Subscription = () => {

    const [activeSubscription, setActiveSubscription] = useState([])
    
    const fetchSubscription = async () => {
        try {
            const data = await getSubscription(`${process.env.REACT_APP_BASE_URL}/subscription`)
            setActiveSubscription(data)
            
        } catch (error) {
            console.log(error)   
        }
        
    }
    
    useEffect(() => {
        fetchSubscription()
    },[])

    return (
        <Container>
            <SectionTitle heading="Subscriptions" subHeading='Your active subscriptions'/>
            <ActiveSubscription activeSubscription={activeSubscription}/>
            <SectionTitle heading='New Subscription' subHeading='Add new Subscription'/>
            <OpenModal img={ModalImg3} Content={<NewSubscription fetchSubscription={fetchSubscription}/>}/>
        </Container>
    )
}

export default Subscription
