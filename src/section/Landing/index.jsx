import React, { useState } from "react";
import styled from "styled-components";
import { LandingImg, ModalImg4 } from "../../assets";
import Modal from "../../components/Modal/Modal";
import Login from "../../components/ModalContents/Login";

const Container = styled.div`
  background-color: #f6f4f0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  display: inline-block;
`;

const Header = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-right: 25px;
  margin-left: 15px;
`;

const Heading = styled.h1`
  font-size: 25px;
  font-weight: 800;
  font-family: "Gill Sans Extrabold", sans-serif;
`;

const Options2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin: 20px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Image = styled.img`
  margin-left: 14rem;
  height: 52vh;
`;

const Items2 = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Slogan = styled.h1`
  margin-left: 150px;
  width: 400px;
  font-size: 80px;
  margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 40px;
    margin-left: 50px;
    width: 250px;
  }
`;

const Text = styled.p`
  margin-left: 150px;
  width: 400px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-left: 50px;
    width: 250px;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  margin-left: 150px;
  background-color: black;
  border: 0;
  height: 40px;
  border-radius: 7px;
  color: white;
  width: 400px;
  font-size: 20px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 15px;
    margin-left: 50px;
    width: 250px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  margin-left: -100px;
  margin-top: 100px;
  @media (max-width: 768px) {
    display: none;
  }
  `;

const Landing = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <Header>
          <Heading>fintrack</Heading>
          <Options>
            <Items>Subscription</Items>
            <Items>Bills</Items>
            <Items>Payment</Items>
            <Items>Carrers</Items>
          </Options>
          <Options2>
            <Items2 onClick={() => setShowModal(true)}>Login</Items2>
            <Items2>Register</Items2>
          </Options2>
        </Header>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          img={ModalImg4}
          Content={<Login />}
        />
        <InnerContainer>
          <Content>
            <Slogan>Store your savings the easy way</Slogan>
            <Text>
              lorem epsum doler sif enveorf evienfve einvienv einvienvi
              woedmqwncvos jinvdfn ivner j erfenwi wefn wnfciwn
            </Text>
            <Button>Register</Button>
          </Content>
          <ImageContainer>          <Image src={LandingImg} /></ImageContainer>
       
        </InnerContainer>
      </Container>
    </>
  );
};

export default Landing;
