import React,{useState} from 'react'
import styled from "styled-components"
import login from '../../APIs/login';
import {useNavigate} from "react-router-dom"

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

const Login = () => {

    const navigate = useNavigate
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async () => {
        try {
            
            await login("http://localhost:4000/auth/login",{email,password})


        } catch (error) {
            
        }
        
    }

    return (
            <ModalContent>
                <Heading>Welcome back </Heading>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                
                <button onClick={handleLogin}> Login </button>
            </ModalContent>
    )
}

export default Login
