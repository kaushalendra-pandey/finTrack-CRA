import React from 'react'
import image from '../Images/FinTech.png'
import styled from 'styled-components';


const Wrapper = styled.div`
        background: black;
        position:absolute;
        width:100%;   
`;

const InfoDiv = styled.div`
        display:flex;
        overflow:auto;
        @media (max-width: 708px) {
            flex-direction: column;
          }
        p {
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.5rem;
        
        }
        
        img {
        float: left;
        height: auto;
        border: 0;
        display: flex;
        min-width:50vw;
        }
    `

const Heading = styled.div`
        h1 {
        font-size: 5rem;
        margin-top: 15px;
        display: flex;
        justify-content: center;
        color: white;
        margin-bottom:0px;
    }
`
const Button = styled.button`

    `

const LandingPage = () => {

    return (
        <Wrapper>
            <Heading>
                <h1> Fin-Track</h1>

            </Heading>
            <InfoDiv>

                <img src={image} />


                <p>What is Fin-Track?

                    Fin-track is all in one expense-tracker one would ever need.
                    We track your daily/weekly/monthly expenses, manage all
                    your recurring payments, notify you about your
                    subscriptions, manage your lend/borrow history.</p>


            </InfoDiv>


            <Button>
                Sign-up With Google
            </Button>

        </Wrapper>
    )
}

export default LandingPage

