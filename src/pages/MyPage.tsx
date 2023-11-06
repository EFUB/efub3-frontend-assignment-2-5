import styled from "styled-components";
import NavBar from "../components/NavBar";
import BookMarkItem from "../components/BookMarkItem";
import { BookMarkAtom, TotalBookSelector } from "../recoil/BookMarkAtom";
import { useRecoilValue, useResetRecoilState } from "recoil";

const MyPage = () => {
  const bookMark = useRecoilValue(BookMarkAtom); // 북마크 도서
  const resetBookMark = useResetRecoilState(BookMarkAtom); // 북마크 전체 삭제
  const TotalBookMark = useRecoilValue(TotalBookSelector); // 북마크 개수

  return (
    <PageWrapper>
      <NavBar />
      <DeleteAllBtn onClick={resetBookMark}>전체 삭제</DeleteAllBtn>
      <BookListWrapper>
        {bookMark.map((item) => {
          return <BookMarkItem key={item.id} data={item} />;
        })}
      </BookListWrapper>
      <BookCountWrapper>
        <div>총 {TotalBookMark}권</div>
      </BookCountWrapper>
    </PageWrapper>
  );
};

export default MyPage;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`;

const DeleteAllBtn = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 35px;
  margin-top: 30px;
  margin-left: 80px;

  color: white;
  font-family: "Pretendard-Regular";
  font-size: 13px;
  background-color: #fd6767;
  border-radius: 30px;
  cursor: pointer;
`;

const BookListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% - 100px);
  margin-top: 20px;
`;

const BookCountWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: #e6defa;

  div {
    margin-right: 100px;
    font-family: "Pretendard-Regular";
    font-size: 20px;
  }
`;
