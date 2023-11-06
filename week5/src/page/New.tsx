import { useRecoilValue, useSetRecoilState } from "recoil";
import { memoListState } from "../component/Atom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface IMemoList {
  id: number;
  text: string;
}

let Itemid = 0;
function getId() {
  return Itemid++;
}

const New = () => {
  const navigate = useNavigate();
  const [memo, setMemo] = useState<string>("");
  const setMemoList = useSetRecoilState<IMemoList[]>(memoListState);
  const memoList = useRecoilValue<IMemoList[]>(memoListState);
  useEffect(() => {
    console.log(memoList);
  }, []);

  const handleSub = () => {
    setMemoList((prev) => [
      ...prev,
      {
        id: getId(),
        text: memo,
      },
    ]);
    setMemo("");
    navigate("/");
  };

  return (
    <Container>
      <Input value={memo} onChange={(e) => setMemo(e.target.value)} />
      <Btn onClick={handleSub}>저장하기</Btn>
    </Container>
  );
};

export default New;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
