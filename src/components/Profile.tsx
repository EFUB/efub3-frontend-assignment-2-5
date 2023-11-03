import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <ProfileImg>E</ProfileImg>
      <Name>EFUB</Name>
      <BtnContainer>
        <Btn> Share</Btn>
        <Btn> Edit Profile</Btn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const ProfileImg = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
`;

const Name = styled.h3`
  font-size: 2rem;
  margin: 1rem 1rem;
  font-weight: 500;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  border: none;
  padding: 1rem;
  font-size: 15px;
  border-radius: 30px;
  font-weight: 500;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
`;

export default Profile;
