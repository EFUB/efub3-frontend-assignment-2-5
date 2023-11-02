import S from "./style";
import { ReactComponent as SearchIcon } from "../../../asset/searchIcon.svg";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigateSearchPage();
  };

  const navigateSearchPage = () => {
    navigate("/detail");
    searchParams.set("search", text);
    setSearchParams(searchParams);
  };
  return (
    <form onSubmit={onSubmit}>
      <S.InputWrapper>
        <S.Input placeholder="책 이름 검색" onChange={onChange} value={text} />
        <SearchIcon />
      </S.InputWrapper>
    </form>
  );
};

export default SearchBar;
