import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Header>
      <Wrapper>
        <Nav>
          <Link
            to={"/"}
            aria-label="홈으로 이동"
            style={{ background: "none" }}
          >
            홈
          </Link>
          <Link
            to={"/diary"}
            style={{ background: "none" }}
            aria-label="장바구니로 이동"
          >
            일기 보관함
          </Link>
        </Nav>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 2px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: var(--line-gray);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const Nav = styled.nav`
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Navbar;
