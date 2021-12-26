import Sidenav from "./section/Sidenav";
import styled from "styled-components";
import Detail from "./section/Details";
import Content from "./section/Content";
import Blog from "./section/Blog";
import LendAndBorrowSection from "./section/LendAndBorrow";
import SubscriptionSection from "./section/SubscriptionSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BillSection from "./section/BillSection";

const Container = styled.div`
  height: 105vh;
`;
const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 50px;
  margin-top: -10px;
  margin-right: 350px;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Sidenav />
        <RouteContainer>
          <Routes>
            <Route exact path="/blogs" element={<Blog />} />
            <Route exact path="/bills" element={<BillSection />} />
            <Route
              exact
              path="/subscription"
              element={<SubscriptionSection />}
            />
            <Route
              exact
              path="/lendAndBorrow"
              element={<LendAndBorrowSection />}
            />
            <Route exact path="/" element={<Detail />}></Route>
          </Routes>
        </RouteContainer>
        <Content />
      </Container>
    </BrowserRouter>
  );
}

export default App;
