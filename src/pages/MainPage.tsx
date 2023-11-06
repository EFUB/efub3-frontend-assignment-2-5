import CustomCalendar from "../components/CustomCalendar";
import JoinSchedule from "../components/JoinSchedule";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Div>
      <CustomCalendar />
      <StyledNavLink to="/create">일정 등록하기</StyledNavLink>
      <JoinSchedule />
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
  margin: 25px 0;
`;

export default MainPage;
