import React from 'react'
import styled from "styled-components"
import {AiOutlineSearch} from "react-icons/ai"

const Wrapper = styled.div`
    
`

const Input = styled.input`
    border: none;
    height: 0.1rem;
    width: 18rem;
    border-radius: 2rem;
    padding: 1.7rem;
    padding-left: 2rem;
    font-size: 1rem
`

const SearchIcon = styled.div`
    position: absolute;
    margin-top: 1rem;
    margin-left: 5px
`

const Searchbar = () => {
    return (
        <Wrapper>
            <SearchIcon data-testid="search-icon">
                <AiOutlineSearch size="1.5rem"/>
            </SearchIcon>   
            <Input type="text" placeholder='Search'>
            
            </Input>
        </Wrapper>
        
    )
}

export default Searchbar
