import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router-dom";

import Layout from "../layout/Layout";
import Header from "../components/Header";
import Drinks from "../layout/Drinks";

const Home = () => {
  return (
    <Layout>
      <Header />
      {/* 클릭 시 글자 색이 핑크색으로 변경 */}
      <Tablist>
        <NavLink
          to="/best"
          style={({ isActive }) =>
            isActive
              ? { color: "var(--pink)", textDecoration: "none" }
              : { textDecoration: "none" }
          }
        >
          베스트
        </NavLink>
        <NavLink
          to="/coffee"
          style={({ isActive }) =>
            isActive
              ? { color: "var(--pink)", textDecoration: "none" }
              : { textDecoration: "none" }
          }
        >
          커피
        </NavLink>
        <NavLink
          to="/shake"
          style={({ isActive }) =>
            isActive
              ? { color: "var(--pink)", textDecoration: "none" }
              : { textDecoration: "none" }
          }
        >
          셰이크
        </NavLink>
        <NavLink
          to="/bubbletea"
          style={({ isActive }) =>
            isActive
              ? { color: "var(--pink)", textDecoration: "none" }
              : { textDecoration: "none" }
          }
        >
          버블티
        </NavLink>
      </Tablist>
      <Routes>
        {/* 기본 라우트 설정 */}
        <Route path="/" element={<Drinks type="best" />} />
        <Route path="/best" element={<Drinks type="best" />}></Route>
        <Route path="/coffee" element={<Drinks type="coffee" />}></Route>
        <Route path="/shake" element={<Drinks type="shake" />}></Route>
        <Route path="/bubbletea" element={<Drinks type="bubbletea" />}></Route>
      </Routes>
    </Layout>
  );
};

export default Home;

const Tablist = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: 700;
`;
