import CreateSchedule from "../components/CreateSchedule";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CreatePage = () => {
  return (
    <Div>
      <StyledNavLink to="/">돌아가기</StyledNavLink>
      <CreateSchedule />
    </Div>
  );
};

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  border-radius: 10px;
  padding: 10px 0;
  width: 300px;
  background-color: gainsboro;
  text-decoration: none;
  font-weight: 600;
  color: black;
  margin-top: 25px;
`;

export default CreatePage;
