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

const Select = styled.select`

    margin-bottom: 2rem;
    width: 9rem;
    padding: 10px;
    border-radius: 8px;
    
`

const LendAndBorrowModalContent = () => {
    return (
            <ModalContent>
                <Heading> Note down your recent transactions...</Heading>
                <Input type="text" placeholder="Name"/>
                <Select name="type">
                    <option value="LEND"> LEND </option>
                    <option value="BORROW"> BORROW </option>
                </Select>
                <button> Add </button>
            </ModalContent>
    )
}

export default LendAndBorrowModalContent
