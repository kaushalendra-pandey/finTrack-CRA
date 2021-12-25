import Sidenav from "../../section/Sidenav"
import Detail from "../../section/Details"
import styled from "styled-components"
import Content from "../../section/Content/Content"
import React from "react"

const Container = styled.div`
  display: flex;
  background-color: #F5F5FD;
`

const Dashboard = () => {

    return (
        <Container>
            <Sidenav />
            <Detail />
            <Content />
        </Container>

    )
}

export default Dashboard
