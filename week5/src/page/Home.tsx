import { useRecoilValue, useResetRecoilState } from "recoil";
import { memoListState } from "../component/Atom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IMemoList {
  id: number;
  text: string;
}

const Home = () => {
  const navigate = useNavigate();
  const memoList = useRecoilValue(memoListState);

  const resetList = useResetRecoilState(memoListState);

  return (
    <Container>
      <Border>
        <h2>메모</h2>
        <Wrapper>
          <Header>
            <BtnStyle>
              <Btn onClick={resetList}>RESET</Btn>
              <div>{memoList.length}개의 메모가 있습니다</div>
              <Btn
                onClick={() => {
                  navigate("./new");
                }}
              >
                NEW
              </Btn>
            </BtnStyle>
          </Header>
        </Wrapper>
        <Wrapper>
          {memoList.map((it: IMemoList) => (
            <Item onClick={() => navigate(`/edit/${it.id}`)}>
              {it.text.slice(0, 20)}
            </Item>
          ))}
        </Wrapper>
      </Border>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Border = styled.div`
  border: 1px solid gray;
  height: 100vh;
  width: 70%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  background-color: #eeeeee;
  width: 30%;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.div`
  width: 390px;
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
`;

const BtnStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Btn = styled.button`
  border: none;
  background-color: rgb(211, 211, 211);
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
`;
