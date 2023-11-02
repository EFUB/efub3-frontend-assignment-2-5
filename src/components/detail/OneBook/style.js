import styled from "styled-components";
import { flexCenter, omitText, boxShadow } from "../../../style/common";

const BookImg = styled.img`
  width: 150px;
  height: 200px;
  position: absolute;
  top: 10px;
`;

const Button = styled.div`
  position: absolute;
  top: 350px;
  width: 100px;
  ${flexCenter}
  background-color: ${({ isInList }) => (isInList ? "#068696" : "grey")};
  border-radius: 5px;
  font-size: 23px;
  color: #fff;
  padding: 10px;
  opacity: 0;
  transition: 0.5s all;
`;

const Container = styled.div`
  line-height: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 300px;
  transition: 0.5s all;
  ${flexCenter}
  flex-direction: column
`;

const ContentBox = styled.div`
  width: 100px;
  height: 50px;
  top: 100px;
  position: absolute;
  ${flexCenter}
  flex-direction: column;
`;

const DetailBox = styled.div`
  position: absolute;
  top: 170px;
  height: 30px;
  width: 230px;
  ${omitText}
`;

const Wrapper = styled.div`
  width: 270px;
  height: 400px;
  border: 1px solid #068696;
  ${boxShadow}
  text-align: center;
  :hover ${Button} {
    opacity: 1;
  }
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  width: 230px;
  top: 120px;
  font-weight: 500;
`;

const Price = styled.div`
  position: absolute;
  top: 230px;
`;
const S = {
  Wrapper,
  BookImg,
  ContentBox,
  Container,
  Button,
  DetailBox,
  Title,
  Price,
};

export default S;
