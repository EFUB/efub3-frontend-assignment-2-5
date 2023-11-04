import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavBar = () => {
  return (
    <Root>
      <SNavLink
        to="todo"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Todo
      </SNavLink>
      <SNavLink
        to="memo"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Memo
      </SNavLink>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  padding: 5px;
`;

const SNavLink = styled(NavLink)`
  &.active {
    color: black;
    font-weight: bold;
  }
  color: grey;
  margin-right: 10px;
  text-decoration: none;
  font-size: 20px;
`;

export default NavBar;
