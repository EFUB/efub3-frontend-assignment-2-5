import React, { useState } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { todoListState } from "./atoms";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editing, setEditing] = useState(false);
  const [newInput, setNewInput] = useState(item.text);

  const completeItem = () => {
    const newList = todoList.map((prevItem) =>
      prevItem.id === item.id
        ? { ...prevItem, completed: !prevItem.completed }
        : prevItem
    );
    setTodoList(newList);
  };

  const onEdit = () => {
    if (!editing) {
      setEditing(true);
    } else {
      const newList = todoList.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, text: newInput } : prevItem
      );
      setTodoList(newList);
      setEditing(false);
    }
  };

  const deleteItem = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setTodoList((prevList) =>
        prevList.filter((prevItem) => prevItem.id !== item.id)
      );
    }
  };

  return (
    <Root>
      <Done type="checkbox" checked={item.completed} onChange={completeItem} />
      <Text
        value={newInput}
        disabled={!editing}
        onChange={(e) => setNewInput(e.target.value)}
      />
      <Button onClick={onEdit}>수정</Button>
      <Button onClick={deleteItem}>삭제</Button>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  padding: 5px 0px;
  box-sizing: border-box;
`;

const Done = styled.input``;

const Text = styled.input`
  flex: 1;
`;

const Button = styled.button`
  flex: none;
`;

export default TodoItem;
