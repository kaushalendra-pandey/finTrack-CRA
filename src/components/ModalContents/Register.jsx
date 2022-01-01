import React,{useState} from 'react'
import styled from "styled-components"
import register from '../../APIs/auth/register';

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

const Register = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fname ,setFname] = useState("")
    const [lname, setLname] = useState("")

    const handleRegister = async () => {
        try {
            
            await register(`${process.env.REACT_APP_AUTH_URL}/register`,{email,password,last_name:lname,first_name:fname})

        } catch (error) {
            console.log(error)
        }
        
    }

    return (
            <ModalContent>
                <Heading> Start your journey with us! </Heading>
                <Input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="First Name"/>
                <Input value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Last Name"/>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                
                <button onClick={handleRegister}> Register </button>
            </ModalContent>
    )
}

export default Register
