import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { memoListState } from "../component/Atom";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
interface IMemoList {
  id?: number;
  text?: string;
}

const Edit = () => {
  const { id } = useParams();
  const typedId: number = Number(id);

  const setMemoList = useSetRecoilState(memoListState);
  const memoList = useRecoilValue(memoListState);
  const originMemo = memoList.find(
    (it: IMemoList) => Number(it.id) === Number(id)
  );
  const [memo, setMemo] = useState<string | undefined>(originMemo?.text);
  const navigate = useNavigate();

  const handleSub = () => {
    // 메모를 복사하여 업데이트

    setMemoList((prevMemoList) => {
      // 이 함수 내에서 새로운 상태를 반환
      const updatedMemoList = [...prevMemoList];
      if (id !== undefined) {
        if (memo !== undefined) {
          updatedMemoList[typedId] = {
            id: Number(id),
            text: memo,
          };
          return updatedMemoList;
        }
      }
      return prevMemoList;
      // 아무 변경이 없는 경우 이전 상태를 그대로 반환
    });
    navigate("/");
  };

  return (
    <Container>
      <Input value={memo} onChange={(e) => setMemo(e.target.value)} />
      <Btn onClick={handleSub}>수정하기</Btn>
    </Container>
  );
};

export default Edit;

const Input = styled.textarea`
  height: calc(100vh - 100px);
  width: 50%;
  border: none;
  padding: 10px;
  resize: none;
  font-size: 15px;
  outline: none;
  border: 1px solid gray;
`;

const Btn = styled.button`
  border: none;
  background-color: rgb(211, 211, 211);
  color: black;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 600;
  width: 50%;
  height: 10vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
