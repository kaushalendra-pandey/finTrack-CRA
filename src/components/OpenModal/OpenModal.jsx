import React,{useState} from 'react'
import styled from "styled-components"
import {IoMdAddCircleOutline} from "react-icons/io"
import Modal from "../Modal/Modal"


const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 19rem;
    background-color: #ececf6;
    border-radius: 50px;

    &:hover {
        cursor: pointer;
    }
`

const IconContainer = styled.div`
    transition: transform 0.2s;
    &:hover {
        transform : scale(1.2);
    }
`

const OpenModal = ({img,Content}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Container>
                <IconContainer>
                    <IoMdAddCircleOutline size={"3rem"} onClick = {() => setShowModal(true)}/>
                    <Modal 
                        showModal={showModal} 
                        setShowModal={setShowModal}
                        img={img}
                        Content={Content}
                    />
                </IconContainer>
            </Container>
        </>
    )
}

export default OpenModal
