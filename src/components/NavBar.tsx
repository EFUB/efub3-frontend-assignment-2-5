import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
	return (
		<Wrapper>
			<MoveTo to="/">🏠 Home Page</MoveTo>
			<MoveTo to="/my">📬 My Page</MoveTo>
		</Wrapper>
	);
};

export default NavBar;

const Wrapper = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	margin-left: 30px;
	height: 50px;
	.active {
		color: rosybrown;
	}
`;

const MoveTo = styled(NavLink)`
	background-color: transparent;
	border: 0;
	font-size: 24px;
	font-weight: 600;
	color: #000;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;
