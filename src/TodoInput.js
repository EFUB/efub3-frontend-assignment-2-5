import React from "react";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { todoListState } from "./atoms";

const TodoInput = ({ input, setInput }) => {
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (input !== "") {
      setTodoList((prevList) => {
        const id = prevList.length + 1;
        return [...prevList, { id: id, text: input, completed: false }];
      });
      setInput("");
    }
  };

  return (
    <Root>
      <Input
        type="text"
        placeholder="할 일을 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={addItem}>+</Button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 0px;
  box-sizing: border-box;
`;

const Input = styled.input`
  flex: 1;
  display: block;
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
  font-size: 18px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: none;
  width: 40px;
  height: 40px;
  background: skyblue;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default TodoInput;
