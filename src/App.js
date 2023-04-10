// import "./App.css";
import React from "react";
import MyHeader from "./Myheader";

import Counter from "./Counter";
import Container from "./Container";

function App() {

  const countProps = {
    a: 1,
    b: 2,
    c: 3,
    inintialValue:4,
  }

  return (
      <Container>
      <div>
        <MyHeader />
        <Counter {...countProps}/>
      </div>
      </Container>
  );
}
export default App;
