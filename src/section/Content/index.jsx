import React from "react";
import styled from "styled-components";
import Activities from "../../components/Activities/Activities";
import Topnav from "../../components/Topnav/Topnav";
import UpcomingPayments from "../../components/UpcomingPayments/UpcomingPayments";
import Mastercard from "../../components/Mastercard/Mastercard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 64px;
  padding-right: 64px;
  padding-left: 20px;
  background-color: #ececf6;
  z-index: 5;
`;

const Content = () => {
  return (
    <Wrapper>
        <Topnav />
        <Mastercard />
        <Activities />
        <UpcomingPayments />
    </Wrapper>
  );
};

export default Content;
