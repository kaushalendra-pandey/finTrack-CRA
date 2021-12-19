import React from 'react'
import styled from "styled-components"
import Searchbar from '../Searchbar/Searchbar'
import SectionTitle from '../SectionTitle/SectionTitle'

const Container = styled.div`    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header = () => {
    return (
        <Container>
            <SectionTitle heading={"Dashboard"} subHeading={"Payment Updates"} />
            <Searchbar/>
           
        </Container>
    )   
}

export default Header
