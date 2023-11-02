import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: #05d3e6;
  color: white;
  display: flex;
  font-size: 30px;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const IconContainer = styled.div`
  filter: invert(100%);
  margin-left: 20px;
`;

const LogoContainer = styled.div`
  ${flexCenter}
`;

const CartBox = styled.div`
  filter: invert(100%);
  margin-right: 20px;
`;

const S = {
  Wrapper,
  Header,
  LogoContainer,
  IconContainer,
  CartBox,
};

export default S;
