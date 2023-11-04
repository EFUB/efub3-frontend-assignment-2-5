import styled from "styled-components";

const BookMarkItem = ({ data }: { data: BookType }) => {
  return (
    <Wrapper>
      <BookImg src={data.image} />
      <BookName>"{data.name}"</BookName>
    </Wrapper>
  );
};

export default BookMarkItem;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 30px;
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
