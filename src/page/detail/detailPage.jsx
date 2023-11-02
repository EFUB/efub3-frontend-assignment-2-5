import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/core";
import BookList from "../../components/detail/BookList/BookList";
import S from "./style";
import SearchBar from "../../components/main/SearchBar/SearchBar";
import LikeItem from "../../components/common/LikeItemList/LikeItem";

const DetailPage = () => {
  const url = new URL(window.location.href);
  const URLSearch = new URLSearchParams(url.search);
  const searchWord = URLSearch.get("search");

  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchWord) {
      const params = {
        query: searchWord,
        page: 1,
      };
      const res = sendRequest(params);
      console.log(res);
    }
  }, [searchWord]);

  const sendRequest = async (params) => {
    const req = await axiosInstance.get(
      `/v3/search/book?query=${searchWord}`,
      params
    );
    setData(req.data.documents);
    console.log(data);
  };

  return (
    <S.Wrapper>
      <LikeItem />
      <div style={{ position: "absolute", top: "20px" }}>
        <SearchBar />
      </div>
      <BookList data={data} />
    </S.Wrapper>
  );
};

export default DetailPage;
