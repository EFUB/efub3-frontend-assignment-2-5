import styled from "styled-components";
import logo from "../../assets/logo.png";
import alarm from "../../assets/alarm.png";
import message from "../../assets/message.png";
import search from "../../assets/search.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IsMobile } from "../../../CommonTypes";

const Header = () => {
  const [isMobile, setIsMobile] = useState(0);
  const navigate = useNavigate();

  // 헤더 반응형
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1000) {
        setIsMobile(0);
      } else if (screenWidth > 700) {
        setIsMobile(1);
      } else {
        setIsMobile(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fixed>
      <Container>
        <Logo src={logo} onClick={() => navigate("/")} />
        <Home>Home</Home>
        <Text mobile={isMobile}> Today</Text>
        <SearchBar mobile={isMobile}>
          <SearchIcon src={search} />
          <SearchInput placeholder="Search" />
        </SearchBar>
        <Logo src={alarm} />
        <Logo src={message} />
        <Profile onClick={() => navigate("/mypage")}>E</Profile>
      </Container>
    </Fixed>
  );
};

const SearchBar = styled.div<IsMobile>`
  width: ${(props) =>
    props.mobile === 0 ? "68%" : props.mobile === 1 ? "50%" : "35%"};
  height: 2.9rem;
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: #efefef;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 15px;
`;

const Fixed = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 5;
`;

const Text = styled.p<IsMobile>`
  font-weight: 600;
  font-size: 15px;
  display: ${(props) => (props.mobile === 0 ? "block" : "none")};
`;

const Home = styled.button`
  color: white;
  background-color: black;
  border: none;
  width: 4.5rem;
  padding: 0.8rem 1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
`;

const SearchInput = styled.input`
  width: 70%;
  height: 2.6rem;
  border-radius: 30px;
  border: none;
  background: none;
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 15px;
  outline: none;
`;

const Container = styled.div`
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  background-color: white;
`;

const Logo = styled.img`
  width: 1.5rem;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 1rem;
`;

const Profile = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: #efefef;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

export default Header;
