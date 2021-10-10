import React from "react";
import styled from "styled-components";
import ListItem from "./list_item";

const Wrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const List = ({ toDos }) => {
  return (
    <Wrapper>
      {toDos.map((toDo) => (
        <ListItem toDo={toDo} key={toDo.id} />
      ))}
    </Wrapper>
  );
};

export default List;
