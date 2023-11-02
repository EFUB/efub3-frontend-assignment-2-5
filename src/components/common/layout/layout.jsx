import { Outlet } from "react-router-dom";
import S from "./style";
import { ReactComponent as BookIcon } from "../../../asset/bookIcon.svg";
import { useNavigate } from "react-router-dom";

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
              <BookIcon />
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
