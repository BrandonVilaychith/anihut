import React, { Fragment } from "react";

import Homepage from "./components/Pages/Homepage/Homepage";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
    </Fragment>
  );
}

export default App;
