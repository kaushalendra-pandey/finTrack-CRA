import React,{useState} from 'react'
import styled from "styled-components"
import addBill from '../../APIs/bill/addBill';
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

const PayBill = ({fetchUnpaidBills}) => {

  const [name,setName] = useState("")
  const [amount,setAmount] = useState(0) 
  const [description,setDescription] = useState("")
  const [loading,setLoading] = useState(false)

  const handleAddBill = async () => {
      try {
        setLoading(true)
        await addBill(`${process.env.REACT_APP_BASE_URL}/bill`,{name,amount,description})
        setLoading(false)
        setName("")
        setAmount(0)
        setDescription(0)
        swal.fire({
          icon:"success",
          title:"New Bill added"
        })
        fetchUnpaidBills()
      } catch (error) {
        setLoading(false)
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
                
                <button onClick={handleAddBill}> {loading ? "Adding" :  "Add to active bills"} </button>
            </ModalContent>
    )
}

export default PayBill
