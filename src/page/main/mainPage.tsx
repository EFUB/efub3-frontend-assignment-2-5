import React from "react";
import SearchBar from "../../components/main/SearchBar/SearchBar";
import S from "./style";
import LikeItem from "../../components/common/LikeItemList/LikeItem";
const MainPage = () => {
  return (
    <S.Wrapper>
      <S.Title>당신이 찾는 책은 무엇인가요?</S.Title>
      <SearchBar />
      <LikeItem />
    </S.Wrapper>
  );
};

export default MainPage;
