import styled from "styled-components";
import NavBar from "../components/NavBar";
import BookItem from "../components/BookItem";
import { BookData } from "../components/BookData";

const MainPage = () => {
  return (
    <PageWrapper>
      <NavBar />
      <BookListWrapper>
        {BookData.map((data) => {
          return <BookItem key={data.id} data={data} />;
        })}
      </BookListWrapper>
    </PageWrapper>
  );
};

export default MainPage;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% - 100px);
  margin-top: 20px;
`;
