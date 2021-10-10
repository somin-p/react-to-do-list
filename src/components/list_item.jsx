import React from "react";
import { MdRemoveCircleOutline, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  &.checked {
    svg {
      color: #22b8cf;
    }
    color: #adb5bd;
    text-decoration: line-through;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const ListItem = () => {
  return (
    <Wrapper>
      <CheckBox>
        <MdCheckBoxOutlineBlank />
        <Text>할 일</Text>
      </CheckBox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </Wrapper>
  );
};

export default ListItem;
