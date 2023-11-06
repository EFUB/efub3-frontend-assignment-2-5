import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState([false, false]); // 홈, 내 도서 버튼 활성화 여부
  const location = useLocation();
  const nav = useNavigate();

  // 버튼 클릭 유지
  useEffect(() => {
    if (location.pathname === "/my") {
      setIsActive([false, true]);
    } else {
      setIsActive([true, false]);
    }
  }, [location]);

  // 홈 버튼 클릭
  const handleHomeClick = () => {
    nav("/");
  };

  // 내 도서 버튼 클릭
  const handleMyBookClick = () => {
    nav("/my");
  };

  return (
    <Wrapper>
      <PageBtn
        color={isActive[0] ? "#e6defa" : "#f2f2f2"}
        onClick={handleHomeClick}
      >
        홈
      </PageBtn>
      <PageBtn
        color={isActive[1] ? "#e6defa" : "#f2f2f2"}
        onClick={handleMyBookClick}
      >
        내 도서
      </PageBtn>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  gap: 20px;
  border-bottom: solid 1px lightgray;
`;

const PageBtn = styled.div`
  display: flex;
  width: 80px;
  height: 40px;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  background-color: ${(props) => props.color};
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 17px;
  cursor: pointer;
`;
