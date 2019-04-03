import React from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import Wrapper from "./Wrapper";
import Title from "./Title";

const GlobalStyle = createGlobalStyle`
body, html, #root {
  margin: 0;
  height: 100%;
}
`;

const Body = styled.div`
  background: black;
  flex-grow: 1;
  overflow-y: scroll;
`;

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!
const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Title primary>Hello World, this is my first styled component!</Title>
    <Body>
      {[...Array(100)].map((_, key) => (
        <Title key={key}>Hello World, this is my first styled component!</Title>
      ))}
    </Body>
    <Title primary>Hello World, this is my first styled component!</Title>
  </Wrapper>
);

render(<App />, document.getElementById("root"));
