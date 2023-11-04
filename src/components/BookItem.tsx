import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BookMarkAtom } from "../recoil/BookMarkAtom";
import { useRecoilState } from "recoil";

const BookItem = ({ data }: { data: BookType }) => {
  const [bookMark, setBookMark] = useRecoilState(BookMarkAtom);

  const handleBookMark = () => {
    if (!bookMark.includes(data)) {
      // 북마크 없으면 생성
      setBookMark((prev) => [...prev, data]);
    } else {
      // 북마크 생성되어 있으면 삭제
      const newBookMark = bookMark.filter((item) => item.id !== data.id);
      setBookMark(newBookMark);
    }
  };

  return (
    <Wrapper>
      {bookMark.includes(data) ? (
        <FaStar className="star" onClick={handleBookMark} />
      ) : (
        <FaRegStar className="star" onClick={handleBookMark} />
      )}
      <BookImg src={data.image} />
      <BookName>"{data.name}"</BookName>
    </Wrapper>
  );
};

export default BookItem;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 30px;

  .star {
    z-index: 30;
    position: absolute;
    top: 13px;
    right: 10px;
    width: 20px;
    height: 20px;
    fill: #ffd03b;
    cursor: pointer;
  }
`;

const BookImg = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;

const BookName = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 17px;
  margin-top: 20px;
`;
