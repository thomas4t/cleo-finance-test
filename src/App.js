import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  .colorTest {
    color: #61dafb;
  }
`;

function App() {
  return (
    <MainContainer>
      <p>React app.</p>
      <p className="colorTest">Test of color</p>
    </MainContainer>
  );
}

export default App;
