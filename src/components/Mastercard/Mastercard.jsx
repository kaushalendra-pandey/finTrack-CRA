import React from "react";
import styled from "styled-components";
import { AiOutlineGlobal } from "react-icons/ai";

const Container = styled.div`
  background-image: linear-gradient(to right, #565958, #201e2a);
  border-radius: 15px;
  height: 5rem;
  width: 11rem;
  margin-top: 2.4rem;
  padding: 21px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    pointer: cursor;
  }
`;

const CardNumber = styled.div`
  color: #cccdcd;
  position: absolute;
  margin-top: 26px;
  font-size: 14px;
  font-weight: 500;
`;

const CardHolder = styled.div`
  margin-top: 52px;
  color: #cccdcd;
  font-weight: 200;
  font-size: xx-small;
`;
const CardHolderName = styled.div`
  color: #cccdcd;
  font-size: small;
`;

const FirstCircle = styled.div`
  background-color: #ea001b;
  border-radius: 50%;
  position: absolute;
  height: 21px;
  width: 21px;
  margin-top: -28px;
  margin-left: 137px;
`;

const SecondCircle = styled.div`
  background-color: #f79f19;
  border-radius: 50%;
  position: absolute;
  height: 21px;
  width: 21px;
  margin-top: -28px;
  margin-left: 150px;
`;

const MasterCard = styled.div`
  position: absolute;
  margin-left: 128px;
  margin-top: -7px;
  color: #cccdcd;
  font-size: x-small;
`;

const TopLogo = styled.div`
  position: absolute;
  color: #cccdcd;
`;

const Mastercard = () => {
  return (
    <Container>
      <TopLogo>
        {" "}
        <AiOutlineGlobal size={"1rem"} />{" "}
      </TopLogo>
      <CardNumber> 1234 5678 9011 1213 </CardNumber>
      <CardHolder> Card Holder </CardHolder>
      <CardHolderName>
        {" "}
        <b>{localStorage.getItem("first_name").toUpperCase()}</b>{" "}
      </CardHolderName>
      <FirstCircle />
      <SecondCircle />
      <MasterCard> Mastercard </MasterCard>
    </Container>
  );
};

export default Mastercard;
