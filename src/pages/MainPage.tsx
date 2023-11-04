import styled from "styled-components";
import ItemBox from "../components/ItemBox";
import { ItemList } from "../item/ItemList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const MainPage = () => {
  // 좋아요 목록 불러오기
  const likeList = useSelector((state: RootState) => state.like);

  const [curLikeList, setCurLikeList] = useState(likeList);

  // 좋아요 목록이 바뀔 때마다 갱신하기
  useEffect(() => {
    setCurLikeList(likeList);
  }, [likeList]);

  return (
    <Div>
      <Items>
        {ItemList.map((item) => (
          <ItemBox key={item.id} item={item} curLikeList={curLikeList} />
        ))}
      </Items>
    </Div>
  );
};

export default MainPage;

const Div = styled.div``;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3%;

  width: 100%;
`;
