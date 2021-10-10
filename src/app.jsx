import { createGlobalStyle } from "styled-components";
import Template from "./components/template";

const GlobalStyle = createGlobalStyle`
  body {
    background: grey;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template />
    </>
  );
}

export default App;
