import React from 'react'
import styled from "styled-components"

const Input = styled.input`
    width: 8rem;
    border: 2px solid black;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 2rem;
`

const Heading = styled.h1`
    text-align: center;
`


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const RequestMoney = () => {
    return (
            <ModalContent>
                <Heading> Request money from your friends.. </Heading>
                <Input type="text" placeholder="Name"/>
                <Input type="text" placeholder="Enter Email of your friend"/>
                <button> Request Money </button>
            </ModalContent>
    )
}

export default RequestMoney
