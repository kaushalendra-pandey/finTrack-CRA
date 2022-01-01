import React,{useState} from 'react'
import styled from "styled-components"
import addSubscription from '../../APIs/subscription/addSubscription';
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

const Select = styled.select`

    margin-bottom: 2rem;
    width: 9rem;
    padding: 10px;
    border-radius: 8px;
    
`

const NewSubscription = ({fetchSubscription}) => {

  const [name,setName] = useState("")
  const [date,setDate] = useState("")
  const [amount,setAmount] = useState(0)
  const [type,setType] = useState("MONTHLY")
  const [description,setDescription] = useState("")

  const addSubscriptionHandler = async () => {
    try {
      const data = await addSubscription(`${process.env.REACT_APP_BASE_URL}/subscription`,{name,date,amount,type,description}) 
      console.log(data)
      setName("")
      setAmount(0)
      setType("")
      setDescription(0)
      setDate("")
      swal.fire({
        icon:"success",
        title:"New Subscription added"
      })
      fetchSubscription()
    } catch (error) {
      console.log(error)
      swal.fire({
        icon:"error",
        title:"Something went wrong."
      })
    }
     
    }

    return (
            <ModalContent>
                <Heading>Add a new subscription... </Heading>
                <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Service Name"/>
                <Input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Enter the Date"/>
                <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Enter the amount'/>
                <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Description'/>
                <Select value={type} onChange={(e) => setType(e.target.value)} name="subscription-type">
                    <option value="monthly"> Monthly </option>
                    <option value="yearly"> Yearly </option>
                </Select>
                <button onClick={addSubscriptionHandler}> Add Subscription </button>
            </ModalContent>
    )
}

export default NewSubscription
