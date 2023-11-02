import S from "./style";
import OneBook from "../OneBook/OneBook";
import { OneBookType } from "../../../type/BookType";

const BookList = ({ data }: any) => {
  console.log("dddd", data);
  return (
    <S.Wrapper>
      {data?.documents?.map((book: OneBookType) => <OneBook book={book} />)}
    </S.Wrapper>
  );
};

export default BookList;
