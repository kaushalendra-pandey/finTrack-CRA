import React,{useState} from 'react'
import styled from "styled-components"
import addBill from '../../APIs/addBill';
import swal from "sweetalert2"

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

const PayBill = () => {

  const [name,setName] = useState("")
  const [amount,setAmount] = useState(0) 
  const [description,setDescription] = useState("")

  const handleAddBill = async () => {
      try {
        const data = await addBill(`${process.env.REACT_APP_BASE_URL}/bill`,{name,amount,description})
        setName("")
        setAmount(0)
        setDescription(0)
        swal.fire({
          icon:"success",
          title:"New Bill added"
        })
      } catch (error) {
        swal.fire({
          icon:"error",
          title:"Something went wrong"
        })
      }
     
  }

    return (
            <ModalContent>
                <Heading>Add a new active bill... </Heading>
                <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Service Name"/>
                <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Enter the amount'/>
                <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"/>
                
                <button onClick={handleAddBill}> Add to active bills </button>
            </ModalContent>
    )
}

export default PayBill
