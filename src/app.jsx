import { createGlobalStyle } from "styled-components";
import Insert from "./components/insert";
import List from "./components/list";
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
        <List />
      </Template>
    </>
  );
}

export default App;
