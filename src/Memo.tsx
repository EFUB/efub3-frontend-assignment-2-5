import React, { useState } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { MemoState } from "./atoms";

const Memo = () => {
  const [memo, setMemo] = useRecoilState(MemoState);
  const [editing, setEditing] = useState(false);

  const onEdit = () => {
    if (!editing) {
      setEditing(true);
    } else {
      // const newMemo = setTodoList(newList);
      setEditing(false);
    }
  };

  return (
    <Root>
      <Button onClick={onEdit}>편집</Button>
      <Text disabled={!editing} onChange={(e) => setMemo(e.target.value)}>
        {memo}
      </Text>
    </Root>
  );
};

const Root = styled.div`
  width: 400px;
`;
const Button = styled.button``;

const Text = styled.textarea`
  resize: none;
  width: 500px;
  height: 500px;
`;

export default Memo;
