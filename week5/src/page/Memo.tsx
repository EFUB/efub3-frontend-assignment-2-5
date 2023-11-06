import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { memoListState } from "../component/Atom";

interface IMemoList {
  text: string;
}

const Memo = () => {
  const memoList = useRecoilValue(memoListState);

  return (
    <div>
      <Item>
        {memoList.map((item: IMemoList) => (
          <div>{item.text}</div>
        ))}
      </Item>
    </div>
  );
};

export default Memo;

const Item = styled.div`
  background-color: white;
  width: calc(390-40) px;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
`;
