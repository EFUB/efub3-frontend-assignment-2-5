import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/core";
import BookList from "../../components/detail/BookList/BookList";
import S from "./style";
import SearchBar from "../../components/main/SearchBar/SearchBar";
import LikeItem from "../../components/common/LikeItemList/LikeItem";
import { AxiosResponse } from "axios";

const DetailPage = () => {
  const url = new URL(window.location.href);
  const URLSearch = new URLSearchParams(url.search);
  const searchWord = URLSearch.get("search");

  const [data, setData] = useState([]);

  useEffect(() => {
    const params: any = {
      query: searchWord,
      page: 1,
    };
    sendRequest(params);
  }, [URLSearch]);

  const sendRequest = async (params: any) => {
    const req: AxiosResponse<any> = await axiosInstance.get(
      `/v3/search/book?query=${searchWord}`,
      params,
    );
    setData(req.data);
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
