import Sidenav from './section/Sidenav'
import styled from "styled-components"
import Detail from './section/Details'
import Content from "./section/Content"
import LendAndBorrowSection from './section/LendAndBorrow'
import SubscriptionSection from './section/SubscriptionSection'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BillSection from './section/BillSection'


const Container = styled.div`
  display: flex;
  background-color: #F5F5FD;
`

function App() {
  
  return (
    <BrowserRouter>
    <Container>
      <Sidenav/>
       
          <Routes>
            <Route exact path="/bills" element={<BillSection/>}/>
            <Route exact path="/subscription" element={<SubscriptionSection/>}/>
            <Route exact path="/lendAndBorrow" element={<LendAndBorrowSection />}/>
            <Route exact path="/" element={<Detail />}>
           
          </Route>
        </Routes>     
      <Content/>
    </Container>
    </BrowserRouter>
   
  )
}

export default App
