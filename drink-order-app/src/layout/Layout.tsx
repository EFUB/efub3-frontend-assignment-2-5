import styled from "styled-components";
import { ReactNode } from "react";

// 기본 레이아웃
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: #d5d5f9;
`;

const Content = styled.div`
  width: 360px;
  margin: 0 auto;
  height: 100%;
  background-color: var(--white);
`;

export default Layout;
