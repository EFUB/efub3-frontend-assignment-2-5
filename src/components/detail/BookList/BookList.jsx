import S from "./style";
import OneBook from "../OneBook/OneBook";

const BookList = ({ data }) => {
  return (
    <S.Wrapper>
      {data.map((book) => (
        <OneBook book={book} />
      ))}
    </S.Wrapper>
  );
};

export default BookList;
