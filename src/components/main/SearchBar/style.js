import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  align-items: center;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const InputWrapper = styled.div`
  width: 40rem;
  height: 50px;
  border: 5px solid #068696;
  border-radius: 25rem;
  ${flexCenter}
  gap:20px;
  background-color: white;
`;

const Input = styled.input`
  width: calc(95% - 100px);
  margin-left: 20px;
  height: 90%;
  border: none;
  font-size: 20px;
`;
const S = {
  Wrapper,
  InputWrapper,
  Input,
};

export default S;
