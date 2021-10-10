import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Insert from "./components/insert";
import List from "./components/list";
import Template from "./components/template";

const GlobalStyle = createGlobalStyle`
  body {
    background: grey;
  }
`;

const App = () => {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "dummy 1",
      checked: true,
    },
    {
      id: 2,
      text: "dummy 2",
      checked: true,
    },
    {
      id: 3,
      text: "dummy 3",
      checked: false,
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <Template>
        <Insert />
        <List toDos={toDos} />
      </Template>
    </>
  );
};

export default App;
