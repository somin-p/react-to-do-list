import { createGlobalStyle } from "styled-components";
import Insert from "./components/insert";
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
      <Template>
        <Insert />
      </Template>
    </>
  );
}

export default App;
