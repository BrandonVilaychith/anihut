import React, { Fragment } from "react";
import styled from "styled-components";

import Homepage from "./components/Pages/Homepage/Homepage";
import Navbar from "./components/Navigation/Navbar";

const Main = styled.div`
  background-color: #1f1e1e;
`;

function App() {
  return (
    <Main>
      <Navbar />
      <Homepage />
    </Main>
  );
}

export default App;
