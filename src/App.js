import Sidenav from './section/Sidenav'
import styled from "styled-components"
import Detail from './section/Details'
import Content from "./section/Content"

const Container = styled.div`
  display: flex;
  background-color: #F5F5FD;
`

function App() {
  
  return (
    <Container>
      <Sidenav/>
      <Detail/>
      <Content/>
    </Container>
   
  )
}

export default App
