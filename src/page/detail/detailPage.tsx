import React, { useEffect, useState } from "react";
import BookList from "../../components/detail/BookList/BookList";
import S from "./style";
import SearchBar from "../../components/main/SearchBar/SearchBar";
import LikeItem from "../../components/common/LikeItemList/LikeItem";
import { axiosInstance } from "../../apis/core";
import { AxiosResponse } from "axios";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchWord = searchParams.get("search");

  useEffect(() => {
    if (searchWord) {
      sendRequest(searchWord);
    }
  }, [searchWord]);

  const sendRequest = async (searchWord: string) => {
    const params: any = {
      query: searchWord,
      page: 1,
    };

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
