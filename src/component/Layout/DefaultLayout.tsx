import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const Layout = styled.main`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: var(--line-gray);
`;

const BackDrop = styled.div`
  width: 100%;
  margin-top: 72px;
  min-height: calc(100vh - 72px);
  background-color: var(--line-gray);
`;

export const DefaultLayout = () => {
  return (
    <BackDrop>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </BackDrop>
  );
};
