import styled from "styled-components";
import profile from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleWrapper>
        <Title>안녕하세요 퍼비님!</Title>
        <Subtitle>원하는 음료를 선택해주세요</Subtitle>
      </TitleWrapper>
      <ProfileImg onClick={() => navigate("/cart")}>
        <img src={profile} alt="profile-img" />
      </ProfileImg>
    </Container>
  );
};

const Container = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 8px;
  background-color: var(--pink);
  border-radius: 0 0 30px 30px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Subtitle = styled.div`
  font-size: 15px;
`;

const ProfileImg = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 3px 3px 5px #b8a8c0, -3px -3px 5px #f0dafa;
  overflow: hidden;
  cursor: pointer;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default Header;
