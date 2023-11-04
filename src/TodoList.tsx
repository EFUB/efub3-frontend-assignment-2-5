import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { todoListState } from "./atoms";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const [input, setInput] = useState("");

  return (
    <Root>
      <TodoInput input={input} setInput={setInput} />
      {todoList.map((todoItem, index) => (
        <TodoItem key={index} item={todoItem} />
      ))}
    </Root>
  );
};

const Root = styled.div`
  width: 400px;
`;

export default TodoList;
