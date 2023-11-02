import { Outlet, useNavigate } from "react-router-dom";
import S from "./style";
import { ReactComponent as Icon } from "asset/bookIcon.svg";

const Layout = () => {
  const navigate = useNavigate();
  const onMoveMainPage = () => {
    navigate("/");
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.LogoContainer onClick={onMoveMainPage}>
            <S.IconContainer>
              <Icon />
            </S.IconContainer>
            <div>BookSearch</div>
          </S.LogoContainer>
        </S.Header>
        <Outlet />
      </S.Wrapper>
    </>
  );
};

export default Layout;
