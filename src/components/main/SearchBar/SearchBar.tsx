import S from "./style";
import { ReactComponent as SearchIcon } from "../../../asset/searchIcon.svg";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigateSearchPage();
  };

  const navigateSearchPage = () => {
    navigate("/detail");
    searchParams.set("search", text);
    setSearchParams(searchParams);
  };
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <S.InputWrapper>
        <S.Input
          placeholder="책 이름 검색"
          onChange={(e) => {
            onChange(e);
          }}
          value={text}
        />
        <SearchIcon />
      </S.InputWrapper>
    </form>
  );
};

export default SearchBar;
