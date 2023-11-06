import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const Wrapper = styled.div`
  width: 60%;
  height: calc(100% - 100px);
  flex-wrap: wrap;
  ${flexCenter}
  gap: 30px;
`;

const S = {
  Wrapper,
};

export default S;
